/* Siap UKP — komponen kartu soal (mode belajar & mode ujian), panel umpan balik 4 blok, kartu flash */
(function (root) {
  const UKP = root.UKP; const h = UKP.h; const U = UKP.util; const K = UKP.konten;

  const HURUF = ['A', 'B', 'C', 'D'];
  const TAG_LABEL = { 'angka-usang': 'angka usang', 'salah-baca': 'salah baca', 'salah-hitung': 'salah hitung', 'final-nonfinal': 'final vs non-final', 'lupa-pasal': 'lupa pasal', 'salah-klasifikasi': 'salah klasifikasi', 'waktu-habis': 'waktu habis' };
  UKP.tagLabel = t => TAG_LABEL[t] || t;
  // ikon jenis soal: ikon garis 16 px (DESAIN-V6 C.20); nama lengkap di title dan untuk pembaca layar
  const JENIS_IKON = { konsep: ['book', 'konsep'], klasifikasi: ['saring', 'klasifikasi'], hitung: ['calc', 'hitung'], prosedur: ['plan', 'prosedur'], kasus: ['kasus', 'kasus'], 'baris-spt': ['formulir', 'baris SPT'], etika: ['etika', 'etika'] };
  UKP.c.ikonJenis = function (jenis) {
    if (!jenis) return null; const j = JENIS_IKON[jenis] || ['info', String(jenis)];
    return h('span', { class: 'ikon-jenis jenis-ikon', 'data-jenis': jenis, title: 'Jenis soal: ' + j[1] }, ikon(j[0], null, true), h('span', { class: 'visually-hidden' }, 'Jenis soal ' + j[1] + '. '));
  };
  const fmtDetik = d => { d = Number(d) || 0; if (d < 1) return '< 1 dtk'; d = Math.round(d); return d < 60 ? d + ' dtk' : U.menitDetik(d); };
  // DESAIN-V7 P3-03: catatan verifikasi soal ditulis untuk pembaca (tanpa jargon internal "riset proyek", "riset 02a", "[P]")
  UKP.rapikanCatatan = t => String(t || '').replace(/^\s*◐\s*/, '').replace(/\s*\[P\]/g, '')
    .replace(/\s*bertanda\s*◐\s*(dalam|oleh)\s+riset[^.;,]*/gi, ' belum terverifikasi').replace(/\s+(dalam|oleh|menurut)\s+riset proyek\b/gi, '').replace(/\briset proyek\b/gi, 'sumber yang dicek')
    .replace(/\b(bersumber dari|berasal dari|dari)\s+riset(\s+\d+[a-z]?)?(\s+bagian\s+[\w.]+)?(\s+(berkeyakinan|bertanda)\s+\w+)?/gi, (m, a) => a + ' ringkasan sekunder')
    .replace(/\boleh riset\b/gi, 'oleh sumber sekunder').replace(/\bpengetahuan peneliti\b/gi, 'pemahaman umum')
    .replace(/\briset(\s+\d+[a-z]?)?\b/gi, 'sumber sekunder').replace(/\s{2,}/g, ' ').trim();
  // stem berisi daftar bernomor "(1) … (2) …": baris baru sebelum tiap nomor berurutan (bukan "ayat (3)" atau "angka (2)")
  function pecahDaftar(t) {
    t = String(t || ''); const re = /(^|[\s:;,])\((\d{1,2})\)\s/g; let m, harap = 1; const pos = [];
    while ((m = re.exec(t))) {
      const awal = m.index + m[1].length;
      if (/\b(ayat|angka|huruf|Pasal\s+\d+\w*)\s*$/i.test(t.slice(Math.max(0, awal - 16), awal))) continue;
      if (Number(m[2]) === harap) { pos.push(awal); harap++; }
    }
    if (pos.length < 2) return null;
    let out = '', akhir = 0; pos.forEach(p => { out += t.slice(akhir, p).replace(/\s+$/, '') + '\n'; akhir = p; });
    return out + t.slice(akhir);
  }
  UKP.pecahDaftarStem = pecahDaftar;
  // K-03 dasar hukum: ul.dasar-hukum, satu pasal per baris (sans), tanggal berlaku .meta; status per tanggal di title
  function dasarHukumEl(d, kelas) {
    const item = (Array.isArray(d) ? d : [d]).filter(x => x && (typeof x === 'string' || x.pasal || x.dasar));
    if (!item.length) return null;
    const statusPer = (UKP.ref && UKP.ref.statusPer) || null;
    return h('ul', { class: 'dasar-hukum' + (kelas ? ' ' + kelas : ''), 'aria-label': 'Dasar hukum', title: statusPer ? 'Status per ' + UKP.fmt.tanggal(statusPer) : null },
      item.map(x => h('li', null, h('span', { class: 'pasal' }, typeof x === 'string' ? x : x.pasal || x.dasar), x.berlakuSejak ? [' ', h('span', { class: 'meta' }, 'berlaku ' + UKP.fmt.tanggal(x.berlakuSejak))] : null)));
  }

  // ---------- bantu: gerak, fokus, field ketik ----------
  const halus = () => { try { const kurang = (root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches) || document.documentElement.dataset.gerak === 'kurang'; return kurang ? 'auto' : 'smooth'; } catch (e) { return 'auto'; } };
  const fokus = el => { if (!el) return; if (typeof UKP.fokus === 'function') { UKP.fokus(el); return; } if (!el.hasAttribute('tabindex') && !/^(A|BUTTON|INPUT|SELECT|TEXTAREA)$/.test(el.tagName)) el.tabIndex = -1; try { el.focus({ preventScroll: true }); } catch (e) {} };
  const mengetik = el => !!el && (el.isContentEditable || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || (el.tagName === 'INPUT' && !/^(radio|checkbox|button|submit|reset)$/i.test(el.type || '')));
  // fokus setelah komponen terpasang (sesudah render() memfokuskan h1); tidak merebut fokus dari dialog atau field ketik
  const setelahPasang = fn => { if (typeof root.requestAnimationFrame === 'function') root.requestAnimationFrame(fn); else setTimeout(fn, 0); };
  const bolehFokus = el => {
    if (!el.isConnected || document.querySelector('dialog[open]')) return false;
    const ae = document.activeElement;
    if (ae && (ae === el || el.contains(ae))) return false;
    return !mengetik(ae);
  };
  const nantiFokus = el => setelahPasang(() => { if (bolehFokus(el)) fokus(el); });
  UKP.gulirHalus = halus;

  // ---------- V6: ikon, gerak, gaya komponen soal/umpan/kartu ----------
  function ikon(n, c, k) { return UKP.viz && UKP.viz.ikon ? UKP.viz.ikon(n, c, k) : UKP.icon(n, c); }
  const gerak = () => (UKP.viz && UKP.viz.gerak ? UKP.viz.gerak() : halus() === 'smooth');
  const toastBeraksi = () => !!(UKP.toast && (UKP.toast.tutup || UKP.toast.pindahRute));
  const cocok = q => { try { return !!(root.matchMedia && root.matchMedia(q).matches); } catch (e) { return false; } };
  const pointerHalus = () => cocok('(hover: hover) and (pointer: fine)');
  const kbd = t => h('kbd', null, t);
  if (UKP.viz && UKP.viz.gaya) UKP.viz.gaya('ukp-soal-v6', ''
    + '@keyframes ukp-naik{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}@keyframes ukp-kiri{to{opacity:0;transform:translateX(-8px)}}@keyframes ukp-kanan{to{opacity:0;transform:translateX(8px)}}'
    + '@keyframes ukp-garis{from{transform:scaleY(0)}to{transform:scaleY(1)}}@keyframes ukp-gambar{from{stroke-dashoffset:60}to{stroke-dashoffset:0}}'
    + '@media (prefers-reduced-motion:no-preference){'
    + ':where(:root:not([data-gerak="kurang"]) :is(.soal[data-baru],.flash.kartu-masuk)){animation:ukp-naik var(--dur-sedang,160ms) var(--ease-keluar,ease-out) both}'
    + ':where(:root:not([data-gerak="kurang"]) .flash[data-keluar="kiri"]){animation:ukp-kiri var(--dur-cepat,120ms) var(--ease-masuk,ease-in) both}'
    + ':where(:root:not([data-gerak="kurang"]) .flash[data-keluar="kanan"]){animation:ukp-kanan var(--dur-cepat,120ms) var(--ease-masuk,ease-in) both}'
    + ':where(:root:not([data-gerak="kurang"]) .umpan .status-ikon) :where(path,circle){stroke-dasharray:60;animation:ukp-gambar var(--dur-lambat,200ms) var(--ease-keluar,ease-out) 60ms both}'
    + ':where(:root:not([data-gerak="kurang"]) .umpan-ringkas){animation:ukp-naik var(--dur-sedang,160ms) var(--ease-keluar,ease-out) both}'
    + '}'
    + ':where(.soal-kop .soal-id){display:inline-flex;align-items:center;gap:6px;min-width:0}:where(.soal-kop .ikon-jenis){display:inline-grid;place-items:center;flex:none}'
    + '@media (max-width:599px){:where(.soal-kop .soal-id){flex:1 1 0;overflow:hidden}}'
    + ':where(.kesulitan){display:inline-flex;align-items:flex-end;gap:2px}:where(.kesulitan > i){display:block;width:4px;height:10px;border-radius:1px;background:var(--line)}:where(.kesulitan > i[data-on]){background:var(--ink)}'
    + ':where(.opsi .tanda){display:inline-flex;align-items:center;gap:4px}:where(.opsi .tanda svg){width:12px;height:12px;flex:none}'
    + ':where(.petunjuk-kbd){display:flex;flex-wrap:wrap;align-items:center;gap:4px 16px;margin:0;font-size:var(--fs-eyebrow,.75rem);color:var(--muted)}:where(.petunjuk-kbd > span){display:inline-flex;align-items:center;gap:4px}'
    + '@media (pointer:coarse){.petunjuk-kbd{display:none}}'
    + ':where(.umpan .status){display:flex;align-items:flex-start;gap:var(--s-2,8px);margin:0}:where(.umpan .status > span){flex:1 1 auto;min-width:0}'
    + ':where(.umpan .status-ikon){width:20px;height:20px;flex:none;margin-top:2px;stroke-width:2}:where(.umpan .status-ket){font-weight:400;color:var(--ink)}'
    + ':where(.umpan [data-hasil="benar"]:is(strong,svg)){color:var(--ok)}:where(.umpan [data-hasil="salah"]:is(strong,svg)){color:var(--attn)}:where(.umpan [data-hasil="info"]:is(strong,svg)){color:var(--info)}'
    + ':where(.umpan-kaki){display:flex;flex-wrap:wrap;align-items:center;gap:var(--s-2,8px) var(--s-3,12px);margin:0;font-size:var(--fs-caption,.8125rem);color:var(--muted)}'
    + ':where(.umpan-ringkas){display:flex;align-items:center;gap:var(--s-2,8px);margin:0;font-size:var(--fs-small,.875rem)}:where(.umpan-ringkas svg){width:18px;height:18px;flex:none}'
    + ':where(.umpan-ringkas[data-hasil="benar"] svg){color:var(--ok)}:where(.umpan-ringkas[data-hasil="salah"] svg){color:var(--attn)}:where(.umpan-ringkas[data-hasil="info"] svg){color:var(--info)}'
    + ':where(.flash .flash-sisi){align-content:center}:where(.flash .eyebrow){margin:0}'
    + ':where(.flash-balik kbd){margin-left:var(--s-2,8px)}'
    + '.flash-nilai .btn[data-nilai]{flex-direction:column;gap:2px;line-height:1.2;box-shadow:inset 0 3px 0 var(--nada-nilai)}'
    + '.flash-nilai .btn[data-nilai="lupa"]{--nada-nilai:var(--attn);--nada-lembut:var(--attn-soft)}.flash-nilai .btn[data-nilai="ingat"]{--nada-nilai:var(--ok);--nada-lembut:var(--ok-soft)}.flash-nilai .btn[data-nilai="mudah"]{--nada-nilai:var(--info);--nada-lembut:var(--info-soft)}'
    + '.flash-nilai .btn[data-nilai]:hover{background:var(--nada-lembut);border-color:var(--nada-nilai)}'
    + '.flash-nilai .btn[data-nilai] .nilai-label{display:inline-flex;align-items:center;gap:6px;color:var(--nada-nilai);font-weight:600}'
    + '.flash-nilai .btn[data-nilai] small{font-family:var(--font-mono);font-size:var(--fs-eyebrow,.75rem);font-weight:400;color:var(--muted)}'
    + '@media (pointer:coarse){.flash-nilai kbd,.flash-balik kbd{display:none}}'
    + ':where(.catatan-sumber > p){margin:var(--s-2,8px) 0 0}:where(.umpan .pelajari-lagi){margin:0}:where(.umpan .pelajari-lagi svg){width:14px;height:14px;vertical-align:-2px}'
    // Momen 2: segmen keyakinan (muncul 120 ms setelah opsi dipilih: pudar + naik 4 px) dan kombinasi di kop umpan
    + '@keyframes ukp-naik4{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}'
    + ':where(.keyakinan){display:flex;flex-wrap:wrap;align-items:center;gap:var(--s-2,8px) var(--s-3,12px);margin:0}'
    + ':where(.keyakinan > .label){font-size:var(--fs-caption,.8125rem);color:var(--muted)}'
    + '@media (prefers-reduced-motion:no-preference){:where(:root:not([data-gerak="kurang"]) .keyakinan[data-masuk]){animation:ukp-naik4 var(--dur-sedang,160ms) var(--ease-keluar,ease-out) 120ms both}}'
    + ':where(.umpan .keyakinan-hasil){display:flex;flex-wrap:wrap;align-items:center;gap:4px var(--s-2,8px);margin-top:6px;font-size:var(--fs-small,.875rem);font-weight:400}'
    + ':where(.umpan .keyakinan-hasil .pill svg){width:12px;height:12px}'
    // jawab langsung: penanda keyakinan susulan "Tadi Anda: Yakin · Ragu · Menebak" (opsional, kecil, tidak menghalangi Lanjut)
    + '.umpan .keyakinan-tadi{gap:var(--s-2,8px)}.umpan .keyakinan-tadi .seg{display:inline-flex;width:auto;flex-wrap:nowrap}'
    + '.umpan .keyakinan-tadi .seg button{flex:0 0 auto;min-height:32px;padding:2px 10px;font-size:var(--fs-caption,.8125rem)}'
    + '@media (pointer:coarse){.umpan .keyakinan-tadi .seg button{min-height:36px}}');
  // Momen 2: kombinasi keyakinan × hasil → [nada pill, ikon, judul, keterangan] (tampilan saja; penilaian tidak berubah)
  const LABEL_YAKIN = { yakin: 'Yakin', ragu: 'Ragu', menebak: 'Nebak' }; // v9.2 G1: istilah baku Yakin · Ragu · Nebak
  function komboYakin(yk, benar) {
    if (!LABEL_YAKIN[yk]) return null;
    if (yk === 'yakin') return benar ? ['ok', null, 'Yakin dan benar', 'keyakinan Anda tepat.'] : ['attn', 'peringatan', 'Yakin tetapi keliru', 'soal paling berharga untuk diulang.'];
    if (yk === 'ragu') return benar ? ['info', null, 'Ragu tetapi benar', 'baca alasannya agar lain kali yakin.'] : ['netral', null, 'Ragu dan keliru', 'pelajari kalimat inti di bawah.'];
    return benar ? ['warn', null, 'Nebak dan benar', 'beruntung, ulang besok.'] : ['netral', null, 'Nebak dan keliru', 'wajar; pelajari pembahasannya.'];
  }
  UKP.c.komboYakin = komboYakin;
  // elemen kombinasi di kop panel umpan (dipakai UKP.c.umpan dan penanda susulan "Tadi Anda" pada jawab langsung)
  function elKombo(yk, benar) {
    const kombo = komboYakin(yk, benar); if (!kombo) return null;
    return h('span', { class: 'keyakinan-hasil', 'data-keyakinan': yk },
      h('span', { class: 'pill', 'data-tone': kombo[0] === 'netral' ? null : kombo[0] }, kombo[1] ? ikon(kombo[1], null, true) : null, kombo[2]),
      h('span', { class: 'muted' }, kombo[3]));
  }
  // cadangan bila app.css belum memuat panel umpan V6 (garis kiri ::before, blok dipisah garis halus)
  function cadanganUmpan() {
    if (!UKP.viz || !UKP.viz.cadangan) return;
    UKP.viz.cadangan('umpan', '<div class="umpan" data-hasil="benar"></div>', p => getComputedStyle(p.firstChild, '::before').content !== 'none',
      '.umpan{position:relative;border-top:1px solid var(--line);padding-left:calc(var(--s-4,16px) + 3px)}'
      + '.umpan::before{content:"";position:absolute;left:-1px;top:-1px;bottom:-1px;width:3px;border-radius:var(--r-md,8px) 0 0 var(--r-md,8px);background:var(--ok);transform-origin:top}'
      + '.umpan[data-hasil="salah"]::before{background:var(--attn)}.umpan[data-hasil="info"]::before{background:var(--info)}'
      + '.umpan > .blok + .blok{padding-top:var(--s-3,12px);border-top:1px solid var(--line-subtle,var(--line))}.umpan .status{font-weight:400}'
      + '@media (prefers-reduced-motion:no-preference){:root:not([data-gerak="kurang"]) .umpan::before{animation:ukp-garis var(--dur-sedang,160ms) var(--ease-keluar,ease-out) both}}');
  }

  UKP.c.soal = function (soal, opsi) {
    opsi = opsi || {}; const mode = opsi.mode || 'belajar'; const hanyaBaca = !!opsi.hanyaBaca;
    const uid = soal.id + '-' + Math.random().toString(36).slice(2, 6);
    const name = 'opsi-' + uid;
    // v8.1: opsi.detikAwal = detik yang sudah berjalan pada soal ini (lanjutkan sesi bersama yang terputus)
    const mulai = performance.now() - Math.max(0, Math.min(3600, Number(opsi.detikAwal) || 0)) * 1000;
    let dipilih = HURUF.includes(opsi.jawabanAwal) ? opsi.jawabanAwal : null; let terkunci = false; let sudahLanjut = false;
    let keyakinan = null; // Momen 2: 'yakin' | 'ragu' | 'menebak' | null (opsional, bawaan tidak dipilih)
    let btnPeriksa = null; let intiEl = null;
    const topik = K.topik(soal.topik); const namaKel = K.namaKelompok(soal.kode);
    // kartu soal masuk pudar + naik 8 px hanya pada render pertama soal ini (bukan setelah Periksa; tanpa animasi di mode ujian)
    const wrap = h('div', { class: 'soal' + (opsi.bersama && Array.isArray(opsi.bersama.peserta) && opsi.bersama.peserta.length && mode === 'belajar' && !hanyaBaca && !opsi.ringkas ? ' soal-bersama' + (opsi.bersama.mode === 'ujian' ? ' soal-bersama-ujian' : '') : ''), 'data-id': soal.id, 'data-baru': mode !== 'ujian' && !hanyaBaca && gerak() ? '' : null });
    if (wrap.hasAttribute('data-baru')) { const lepasBaru = () => wrap.removeAttribute('data-baru'); wrap.addEventListener('animationend', e => { if (e.target === wrap) lepasBaru(); }); setTimeout(lepasBaru, 600); }
    const ringkas = !!opsi.ringkas && mode === 'belajar' && !hanyaBaca;
    // latihan bersama (v7.9, papan v8.0; opsi.bersama = { peserta: ['Nicky', 'Mita', 'Nora'] }): satu layar untuk beberapa orang. Opsi A–D
    // di soal hanya tampilan; papan "Jawaban tiap orang" di bawahnya berisi satu baris per orang: A B C D · Y R N (yakin, ragu, menebak) · –
    // (tidak menjawab). Pintasan: 1–9 memilih baris, lalu A–D / Y R N / - untuk baris itu; Enter = Lihat kunci / Lanjut. Kunci dibuka otomatis
    // hanya bila semua orang punya huruf DAN keyakinan (atau "–"); selain itu lewat "Lihat kunci". Chip nama di opsi muncul setelah kunci
    // dibuka. Pencatatan lewat opsi.onPeriksaBersama(per, detik) dengan per = { nama: { opsi, keyakinan, benar } } (pemanggil memakai
    // UKP.belajar.catatJawabanBersama); tanpa pemanggil, komponen mencatat sendiri. Bar aksi khusus: opsi.onKeMenu ("Ke menu"),
    // opsi.metaBersama (teks tengah, mis. "6 orang · Tingkat B"), opsi.onSelesaiSekarang ("Selesai sekarang", selalu ada bila diberikan)
    const pesertaB = (() => {
      const b = opsi.bersama; if (!b || !Array.isArray(b.peserta) || mode !== 'belajar' || hanyaBaca || ringkas) return [];
      const lihat = new Set(); const out = [];
      b.peserta.forEach(x => { const n = String(x == null ? '' : x).replace(/\s+/g, ' ').trim(); if (n && !lihat.has(n.toLowerCase()) && out.length < 12) { lihat.add(n.toLowerCase()); out.push(n); } });
      return out;
    })();
    const bersama = pesertaB.length > 0;
    // v8.1 papan mode ujian: opsi.bersama.mode === 'ujian' (Ujian tim, cara papan). Per baris: A B C D · Ragu · –; tanpa keyakinan Y/N,
    // tanpa kunci, tanpa umpan balik, tidak pernah terkunci, tanpa bar aksi, tanpa pencatatan. Isi awal: bersama.awal = { nama: { o, ragu } };
    // setiap perubahan → bersama.onUbah(nama, { o: 'A'–'D' | '-' | null, ragu: bool }). wrap.bersama() / wrap.raguBersama()
    const ujianB = bersama && opsi.bersama.mode === 'ujian';
    // "Tidak tahu": mengunci soal, menandai kunci, dan mencatat jalur jawaban kosong ('-') yang sudah ada (L.catatJawaban)
    const bisaTidakTahu = mode === 'belajar' && !hanyaBaca && !bersama && opsi.tidakTahu !== false && typeof opsi.onLanjut === 'function' && ['latih', 'sesi', 'cek', 'diagnosis'].includes(opsi.konteks || 'latih');
    // jawab langsung (v7.7, bawaan): memilih opsi langsung menilai dan membuka pembahasan, tanpa Periksa; keyakinan menjadi penanda
    // susulan opsional di panel pembahasan ("Tadi Anda: …", lihat buatTadi). Mati bila profil.jawabLangsung === false (Pengaturan › "Periksa dulu sebelum lihat jawaban") atau opsi.langsung === false
    const jawabLangsung = opsi.langsung != null ? !!opsi.langsung : (() => { try { return UKP.store.get().profil.jawabLangsung !== false; } catch (e) { return true; } })();
    // latihan bersama selalu memakai tampilan jawab langsung (status besar, gulir secukupnya), dengan alur kunci sendiri
    const langsung = bersama || (mode === 'belajar' && !hanyaBaca && !ringkas && jawabLangsung && ['latih', 'sesi', 'cek'].includes(opsi.konteks || 'latih'));
    // segmen keyakinan (Momen 2): Latih, sesi, dan cek pada mode "periksa dulu"; tidak di jawab langsung, diagnosis ringkas, ulas, simulasi, atau tutor
    const bisaYakin = mode === 'belajar' && !hanyaBaca && !ringkas && !langsung && opsi.keyakinan !== false && ['latih', 'sesi', 'cek'].includes(opsi.konteks || 'latih');
    // jawab langsung: keyakinan tetap ada sebagai penanda susulan di panel pembahasan ("Tadi Anda: Yakin · Ragu · Menebak"), opsional;
    // memilih memperbarui field keyakinan entri jawaban yang baru dicatat (UKP.belajar.aturKeyakinan) dan kombinasi di kop
    // v7.9: di jawab langsung keyakinan juga bisa dipilih SEBELUM menjawab (segmen kecil di bawah opsi, opsional); setelah terkunci
    // pilihan itu terbawa ke penanda "Tadi Anda" dan tetap bisa diubah. Tidak di mode bersama
    const bisaTadi = langsung && !bersama && opsi.keyakinan !== false;
    let segTadi = null;
    // kop ringkas: ikon jenis + "A1-044 · Judul topik" (judul lengkap di title); kanan: nomor, atau kesulitan sebagai 3 batang
    const tingkatSulit = U.clamp(Number(soal.kesulitan) || 1, 1, 3);
    const kanan = opsi.nomor ? h('span', null, opsi.nomor)
      : h('span', { class: 'kesulitan', role: 'img', 'aria-label': 'Kesulitan ' + tingkatSulit + ' dari 3', title: 'Kesulitan ' + tingkatSulit + ' dari 3' }, [1, 2, 3].map(i => h('i', { 'data-on': i <= tingkatSulit ? '' : null })));
    // ikon jenis soal tidak ditampilkan saat simulasi berjalan (seperti ujian sungguhan); tampil di mode belajar dan ulas
    const ikonJ = mode !== 'ujian' || hanyaBaca ? UKP.c.ikonJenis(soal.jenis) : null;
    const kop = h('div', { class: 'soal-kop' }, h('span', { class: 'soal-id', title: soal.id + ' · ' + namaKel + (topik ? ' · ' + topik.judul : '') }, ikonJ, h('span', null, soal.id), h('span', { class: 'topik' }, '· ' + (topik ? topik.judul : namaKel)), soal.sumber && soal.sumber.set ? h('span', { class: 'topik sumber-set', title: soal.sumber.judul || soal.sumber.set }, '· ' + String(soal.sumber.judul || soal.sumber.set).replace(/\s*\(.*$/, '') + ' no ' + soal.sumber.no) : null), kanan);
    // kutipan peraturan: di HP kutipan panjang diringkas dengan tombol "Tampilkan kutipan lengkap"
    let kutipan = null;
    if (soal.kutipan) {
      const teks = String(soal.kutipan); const p = h('p', null, teks);
      kutipan = h('blockquote', { class: 'kutipan' }, h('span', { class: 'eyebrow' }, 'Kutipan peraturan'), p);
      // v8.2 B2 (audit T6): desktop juga diringkas (HP ≥ 280 karakter; desktop ≥ 420 karakter, ±4 baris di kolom 960)
      let sempit = false; try { sempit = !!(root.matchMedia && root.matchMedia('(max-width: 599px)').matches); } catch (e) {}
      const batasP = sempit ? 220 : 360;
      if (sempit ? teks.length > 280 : teks.length > 420 && mode !== 'ujian') {
        const potong = teks.lastIndexOf(' ', batasP); const pendek = teks.slice(0, potong > 120 ? potong : batasP).replace(/[\s,.;:]+$/, '') + ' …';
        let penuh = false; p.textContent = pendek;
        const tbl = h('button', { type: 'button', class: 'btn btn-text btn-sm', 'aria-expanded': 'false', onclick: () => { penuh = !penuh; p.textContent = penuh ? teks : pendek; tbl.setAttribute('aria-expanded', String(penuh)); tbl.textContent = penuh ? 'Ringkas kutipan' : 'Tampilkan kutipan lengkap'; } }, 'Tampilkan kutipan lengkap');
        kutipan.appendChild(tbl);
      }
    }
    const stemId = 'stem-' + uid;
    const stemDaftar = pecahDaftar(soal.stem); const teksStem = stemDaftar || soal.stem;
    const stem = h('p', { class: 'stem', id: stemId, style: stemDaftar ? { whiteSpace: 'pre-line' } : null }, mode === 'ujian' || ujianB ? teksStem : UKP.c.sorot(teksStem, soal.kataKualifikasi));
    const fs = h('fieldset', { class: 'opsi' + (bersama ? ' opsi-tampil' : ''), 'aria-describedby': stemId }, h('legend', { class: 'visually-hidden' }, bersama ? 'Pilihan jawaban (jawaban tiap orang dicatat di papan di bawah)' : 'Pilihan jawaban'));
    const labels = {};
    for (const k of HURUF) {
      if (soal.opsi[k] == null) continue;
      // mode bersama: opsi hanya tampilan (tanpa radio; jawaban tiap orang dicatat di papan)
      const input = bersama ? null : h('input', { type: 'radio', name, value: k, checked: dipilih === k ? true : null, onchange: () => pilih(k, false) });
      labels[k] = h('label', null, input, h('kbd', null, k), h('span', { class: 'teks' }, soal.opsi[k]), bersama && !ujianB ? h('span', { class: 'peserta-opsi', hidden: true }) : null, h('span', { class: 'tanda' }));
      fs.appendChild(labels[k]);
    }
    // penanda terpilih lewat atribut (tidak bergantung pada :has())
    function tandaiDipilih() { for (const k in labels) labels[k].toggleAttribute('data-dipilih', !bersama && k === dipilih); }
    // Momen 2 (INTERAKSI-V6 §5): "Yakin · Ragu · Menebak" (Y/R/M) muncul 120 ms setelah opsi dipilih; opsional dan bisa
    // dilepas dengan memilih ulang. Disimpan di status komponen, diteruskan ke onPeriksa/onLanjut dan dicatat di entri jawaban
    const TOMBOL_YAKIN = { Y: 'yakin', R: 'ragu', M: 'menebak' };
    let segYakin = null;
    if (bisaYakin) {
      const lblYakin = 'yakin-' + uid;
      segYakin = h('div', { class: 'keyakinan', hidden: !dipilih },
        h('span', { class: 'label', id: lblYakin }, 'Seberapa yakin? (opsional)'),
        h('div', { class: 'seg', role: 'group', 'aria-labelledby': lblYakin }, Object.keys(TOMBOL_YAKIN).map(t => { const v = TOMBOL_YAKIN[t]; return h('button', { type: 'button', 'data-yakin': v, 'aria-pressed': 'false', 'aria-keyshortcuts': t, onclick: () => aturYakin(keyakinan === v ? null : v, false) }, LABEL_YAKIN[v]); })));
    }
    // jawab langsung: segmen yang sama sebelum menjawab (selalu tampak, tanpa pilihan bawaan; tekan lagi = lepas)
    let segAwal = null;
    if (bisaTadi) {
      const lblAwal = 'yakin-awal-' + uid;
      segAwal = h('div', { class: 'keyakinan keyakinan-awal' },
        h('span', { class: 'label', id: lblAwal }, 'Seberapa yakin? (opsional)'),
        h('div', { class: 'seg', role: 'group', 'aria-labelledby': lblAwal }, Object.keys(TOMBOL_YAKIN).map(t => { const v = TOMBOL_YAKIN[t]; return h('button', { type: 'button', 'data-yakin': v, 'aria-pressed': 'false', 'aria-keyshortcuts': t, onclick: () => aturYakin(keyakinan === v ? null : v, false) }, LABEL_YAKIN[v]); })));
    }
    const segPra = segYakin || segAwal; // segmen keyakinan sebelum soal terkunci (periksa dulu atau jawab langsung)
    function aturYakin(v, dariKeyboard) {
      if (!segPra || terkunci || segPra.hidden) return;
      keyakinan = LABEL_YAKIN[v] ? v : null;
      segPra.querySelectorAll('button[data-yakin]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.yakin === keyakinan)));
      // pintasan papan ketik tidak memindah fokus: perubahan diumumkan lewat wilayah status soal
      if (dariKeyboard && live) { live.textContent = ''; const t = keyakinan ? 'Keyakinan: ' + LABEL_YAKIN[keyakinan] + '.' : 'Penanda keyakinan dilepas.'; setTimeout(() => { live.textContent = t; }, 30); }
    }
    function tampilkanYakin() {
      if (!segYakin || !segYakin.hidden || terkunci) return;
      segYakin.hidden = false;
      if (gerak()) { segYakin.setAttribute('data-masuk', ''); const lepas = () => segYakin.removeAttribute('data-masuk'); segYakin.addEventListener('animationend', e => { if (e.target === segYakin) lepas(); }); setTimeout(lepas, 500); }
      gambarPetunjuk();
    }
    const pintasanAktif = () => { try { return UKP.store.get().pengaturan.pintasan !== false; } catch (e) { return true; } };
    function pilih(k, dariKeyboard) {
      if (terkunci || !labels[k]) return;
      if (bersama) { beriJawaban(barisAktif(), k, dariKeyboard); return; }
      const inp = labels[k].querySelector('input');
      if (!inp.checked) inp.checked = true;
      const berubah = dipilih !== k; dipilih = k; tandaiDipilih();
      if (langsung) { if (berubah && opsi.onPilih) opsi.onPilih(k); selesaikan(k); return; }
      if (btnPeriksa) btnPeriksa.removeAttribute('aria-disabled');
      if (galatPilih) galatPilih.hidden = true;
      tampilkanYakin();
      if (berubah && opsi.onPilih) opsi.onPilih(k);
      if (dariKeyboard) inp.focus();
    }
    function kunci() { terkunci = true; fs.classList.add('terkunci'); fs.querySelectorAll('input').forEach(i => { i.disabled = true; }); }
    function tanda(label, teks, nIkon) { const t = label.querySelector('.tanda'); if (t) t.replaceChildren(ikon(nIkon, null, true), teks); }
    function tandaiHasil() {
      const kl = labels[soal.kunci];
      if (bersama) {
        if (kl) { kl.dataset.hasil = 'kunci'; tanda(kl, 'Kunci jawaban', 'check'); }
        new Set(pesertaB.map(n => jb[n]).filter(v => v && v !== '-' && v !== soal.kunci)).forEach(k => { if (labels[k]) { labels[k].dataset.hasil = 'salah'; tanda(labels[k], 'Salah', 'x'); } });
        return;
      }
      if (kl) { kl.dataset.hasil = 'kunci'; tanda(kl, langsung && dipilih === soal.kunci ? 'Benar' : 'Kunci jawaban', 'check'); }
      if (dipilih && dipilih !== soal.kunci && labels[dipilih]) { labels[dipilih].dataset.hasil = 'salah'; tanda(labels[dipilih], 'Jawaban Anda', 'x'); }
    }
    tandaiDipilih();
    // ---------- latihan bersama: papan "Jawaban tiap orang" (v8.0: A B C D · Y R N · – per baris) ----------
    // jb[nama] = 'A'–'D' | '-' (tidak menjawab); yb[nama] = 'yakin' | 'ragu' | 'menebak'; aktif = indeks baris tujuan pintasan keyboard
    const jb = {}; const yb = {}; const rb = {}; const barisP = {}; let papan = null, btnKunci = null, ketKunci = null, ketKunciHp = null, hitungEl = null, aktif = 0, tBuka = null;
    // v8.2 B2 papan jarak jauh (room tim): sumberB[nama] = 'hp' (diisi dari HP lewat wrap.isiJauh; huruf disembunyikan sampai kunci) |
    // 'papan' (diketuk di layar ini); hadirB = { nama: 'online' | 'offline' } dari wrap.aturHadir (null = tanpa status, satu layar);
    // bukaIsi[nama] = baris offline yang dibuka lewat "isi untuk <nama>"
    // v9.2 G1: hadirB = { nama: 'online' | 'belum' (belum pernah membuka HP) | 'terputus' (sempat masuk lalu HP terputus) };
    // bukaUbah[nama] = baris yang sudah menjawab dari HP dibuka lewat "Ubah" untuk ditimpa
    const sumberB = {}; let hadirB = null; const bukaIsi = {}; const bukaUbah = {};
    const namaPemandu = bersama ? String((opsi.bersama && opsi.bersama.namaPemandu) || '').trim() : '';
    // isi awal papan (v8.1): mode ujian { nama: { o, ragu } }; mode latihan (lanjutkan sesi) { nama: { o, k } }; nama tanpa peduli kapital
    if (bersama && opsi.bersama.awal && typeof opsi.bersama.awal === 'object') {
      const awal = opsi.bersama.awal;
      Object.keys(awal).forEach(kn => {
        const nama = pesertaB.find(n => n.toLowerCase() === String(kn).trim().toLowerCase()); const v = awal[kn]; if (!nama || !v) return;
        const o = typeof v === 'string' ? v : v.o; const O = typeof o === 'string' ? o.toUpperCase() : null;
        if (O === '-' || (HURUF.includes(O) && soal.opsi[O] != null)) jb[nama] = O;
        if (ujianB) { if (v.ragu) rb[nama] = true; }
        else if (jb[nama] !== '-' && LABEL_YAKIN[v.k]) yb[nama] = v.k;
        if (!ujianB && jb[nama] && typeof v === 'object') sumberB[nama] = v.sumber === 'hp' ? 'hp' : 'papan';
      });
    }
    // nilai yang tampak di papan (baris HP sebelum kunci tidak menampakkan huruf) → dasar sakelar ketukan ulang
    const tampakJ = n => sumberB[n] === 'hp' ? undefined : jb[n]; const tampakY = n => sumberB[n] === 'hp' ? undefined : yb[n];
    const pemimpinB = bersama ? (() => { let nm = ''; try { nm = String(UKP.store.get().profil.nama || '').replace(/\s+/g, ' ').trim().toLowerCase(); } catch (e) {} return nm ? pesertaB.find(n => n.toLowerCase() === nm) || null : null; })() : null;
    const YRN = [['Y', 'yakin', 'Yakin'], ['R', 'ragu', 'Ragu'], ['N', 'menebak', 'Nebak']];
    const lengkap = n => ujianB ? !!jb[n] : jb[n] === '-' || (!!jb[n] && !!yb[n]);
    const nSudah = () => pesertaB.filter(n => jb[n]).length;
    const barisAktif = () => pesertaB[aktif] || pesertaB[0] || null;
    // setelah baris lengkap: pindah ke baris berikutnya yang belum lengkap (berputar); tetap bila semua lengkap
    // v9.2 (V9 S4): baris yang jawabannya datang dari HP (juga yang belum memilih keyakinan) dilewati baris aktif dan pintasan papan ketik
    // sampai "Ubah" diketuk di baris itu; huruf HP tidak pernah tampil sebelum kunci jawaban dibuka
    const kunciHp = n => sumberB[n] === 'hp' && !!jb[n] && !bukaUbah[n];
    const bisaAktif = n => !lengkap(n) && !kunciHp(n);
    function majuAktif(dari) {
      for (let i = 1; i <= pesertaB.length; i++) { const j = (dari + i) % pesertaB.length; if (bisaAktif(pesertaB[j])) { aktif = j; return; } }
    }
    if (bersama && bisaAktif(pesertaB[0])) aktif = 0; else if (bersama) majuAktif(0);
    // v9.2 G1 papan yang bisa dibaca orang baru: kalimat arahan di atas papan, kepala kolom ("Jawaban", "Seberapa yakin", "Tidak menjawab")
    // tepat di atas tombolnya (legenda pojok dihapus), nomor untuk semua baris (pintasan 1–9 dan 0 = baris ke-10)
    let arahanEl = null;
    if (bersama) {
      const jid = 'papan-' + uid;
      arahanEl = ujianB ? null : h('p', { class: 'papan-arahan' }, 'Ketuk jawaban tiap orang.');
      const kepala = h('div', { class: 'papan-kepala', 'aria-hidden': 'true' }, h('span', { class: 'papan-no' }), h('span', { class: 'papan-nama' }),
        h('span', { class: 'papan-pilihan' }, h('span', { class: 'papan-kol papan-kol-jawab' }, 'Jawaban'),
          h('span', { class: 'papan-kol papan-kol-yakin' }, ujianB ? 'Ragu' : 'Seberapa yakin'), h('span', { class: 'papan-kol papan-kol-kosong' }, 'Tidak menjawab')));
      papan = h('div', { class: 'papan-bersama', role: 'group', 'aria-labelledby': jid },
        h('div', { class: 'papan-kop' }, h('span', { class: 'papan-judul', id: jid }, 'Jawaban tiap orang'), arahanEl),
        kepala,
        h('ul', { class: 'papan-daftar' }, pesertaB.map((nama, i) => {
          const nid = 'papan-' + uid + '-' + i;
          const pilihBaris = () => { aktif = i; };
          const tombol = HURUF.filter(k => labels[k]).map(v => h('button', { type: 'button', class: 'papan-opsi', 'data-opsi': v, 'aria-pressed': 'false', 'aria-label': 'Jawaban ' + v, onclick: () => { pilihBaris(); beriJawaban(nama, tampakJ(nama) === v ? null : v, false); } }, v));
          const tombolY = ujianB ? [] : YRN.map(([t, v, lbl]) => h('button', { type: 'button', class: 'papan-yk', 'data-yakin': v, 'aria-pressed': 'false', 'aria-label': lbl, title: lbl, onclick: () => { pilihBaris(); beriYakin(nama, tampakY(nama) === v ? null : v, false); } },
            h('span', { class: 'yk-pendek', 'aria-hidden': 'true' }, t), h('span', { class: 'yk-panjang', 'aria-hidden': 'true' }, lbl)));
          const kosong = h('button', { type: 'button', class: 'papan-opsi papan-kosong', 'data-opsi': '-', 'aria-pressed': 'false', 'aria-label': 'Tidak menjawab', title: 'Tidak menjawab', onclick: () => { pilihBaris(); beriJawaban(nama, tampakJ(nama) === '-' ? null : '-', false); } }, '–');
          const hasilEl = h('span', { class: 'papan-hasil', hidden: true });
          // v8.1 papan mode ujian: tombol "Ragu" (aria-pressed) menggantikan Y R N
          const tombolRagu = ujianB ? h('button', { type: 'button', class: 'papan-ragu', 'aria-pressed': 'false', 'aria-keyshortcuts': 'R', 'aria-label': 'Ragu ' + nama, title: 'Tandai ragu', onclick: () => { pilihBaris(); beriRagu(nama, !rb[nama], false); } }, 'Ragu') : null;
          // status room di bawah nama ("belum menjawab", "belum membuka HP", "HP terputus", "diisi <pemimpin>")
          const statusEl = h('span', { class: 'papan-status', hidden: true });
          // v9.2 G1: baris HP terputus dilipat di balik "HP terputus. Ketuk jawaban <nama> di sini" (di tempat tombol, tinggi baris tetap)
          const isiEl = ujianB ? null : h('button', { type: 'button', class: 'btn btn-text btn-sm papan-isi', hidden: true, 'aria-expanded': 'false', onclick: () => { bukaIsi[nama] = true; gambarPapan(); const t = barisP[nama].tombol[0]; if (t) fokus(t); } }, 'HP terputus. Ketuk jawaban ' + nama + ' di sini');
          // v9.2 G1: baris yang sudah menjawab dari HP: tombol disembunyikan, "Sudah menjawab dari HP" + "Ubah" (huruf tetap rahasia sampai kunci dibuka)
          const jauhTeks = h('span', { class: 'papan-jauh-teks' }, 'Sudah menjawab dari HP');
          const jauhEl = ujianB ? null : h('span', { class: 'papan-jauh', hidden: true }, ikon('check', null, true), jauhTeks,
            h('button', { type: 'button', class: 'btn btn-text btn-sm papan-ubah', 'aria-label': 'Ubah jawaban ' + nama, onclick: () => { bukaUbah[nama] = true; aktif = i; gambarPapan(); const t = barisP[nama].tombol[0]; if (t) fokus(t); } }, 'Ubah'));
          const li = h('li', { class: 'papan-baris' },
            h('span', { class: 'papan-no', 'aria-hidden': 'true' }, String(i + 1)),
            h('span', { class: 'papan-nama', id: nid, title: nama }, nama),
            h('span', { class: 'papan-sel' },
              h('span', { class: 'papan-pilihan' },
                h('span', { class: 'papan-tombol', role: 'group', 'aria-label': 'Jawaban ' + nama }, tombol),
                ujianB ? tombolRagu : h('span', { class: 'papan-yakin', role: 'group', 'aria-label': 'Keyakinan ' + nama }, tombolY),
                h('span', { class: 'papan-kosong-wadah' }, kosong)),
              jauhEl, isiEl),
            hasilEl);
          barisP[nama] = { li, tombol: tombol.concat(kosong), tombolY, tombolRagu, hasilEl, statusEl, isiEl, jauhEl, jauhTeks };
          return li;
        })));
    }
    const pemandu = () => namaPemandu || pemimpinB || '';
    const samaN = (a, b) => !!a && !!b && String(a).toLowerCase() === String(b).toLowerCase();
    // status room satu baris (K3: nama penjawab tetap disebut di layar pemandu; huruf HP tidak disebut sebelum kunci)
    function statusBaris(n, jauh) {
      if (ujianB || terkunci || !hadirB) return null;
      if (jauh) return bukaUbah[n] ? { teks: 'sudah menjawab dari HP · ketuk untuk mengganti', nada: 'ok' } : null;
      if (samaN(n, pemandu())) return null;
      if (jb[n] && sumberB[n] === 'papan') return { teks: 'diisi ' + (pemandu() || 'pemimpin'), nada: 'info' };
      if (hadirB[n] === 'terputus') return { teks: 'HP terputus', nada: 'mati' };
      if (hadirB[n] === 'belum') return { teks: 'belum membuka HP', nada: 'mati' };
      if (!jb[n]) return { teks: 'belum menjawab', nada: 'netral' };
      return null;
    }
    function gambarPapan() {
      if (!bersama) return;
      pesertaB.forEach((n, i) => {
        const b = barisP[n];
        b.li.toggleAttribute('data-aktif', !terkunci && i === aktif && !lengkap(n));
        b.li.toggleAttribute('data-lengkap', lengkap(n));
        // v8.2 B2: baris dari HP sebelum kunci → huruf dan keyakinan tidak dinyalakan (tombol tetap bisa diketuk untuk menimpa)
        const jauh = !terkunci && sumberB[n] === 'hp' && !!jb[n];
        b.li.toggleAttribute('data-jauh', jauh);
        const tutupJauh = jauh && !bukaUbah[n];
        b.li.toggleAttribute('data-jauh-tutup', tutupJauh);
        if (b.jauhEl) { const u = b.jauhEl.querySelector('.papan-ubah'); if (u) u.disabled = terkunci; b.jauhEl.hidden = !tutupJauh; b.jauhTeks.textContent = jb[n] !== '-' && !yb[n] ? 'Sudah menjawab dari HP (belum pilih keyakinan)' : 'Sudah menjawab dari HP'; }
        b.tombol.forEach(t => { t.setAttribute('aria-pressed', String(!jauh && jb[n] === t.dataset.opsi)); if (terkunci) t.disabled = true; });
        b.tombolY.forEach(t => { t.setAttribute('aria-pressed', String(!jauh && yb[n] === t.dataset.yakin)); if (terkunci) t.disabled = true; });
        const st = b.statusEl ? statusBaris(n, jauh) : null;
        // elemen status dan "isi untuk" baru dipasang saat pertama dibutuhkan (papan satu layar tetap berisi nama saja)
        if (b.statusEl && !b.statusEl.isConnected && (st || hadirB)) { const nm = b.li.querySelector('.papan-nama'); if (nm) nm.append(b.statusEl); }
        if (b.statusEl && b.statusEl.isConnected) { b.statusEl.textContent = st ? st.teks : ''; b.statusEl.hidden = !st; if (st) b.statusEl.dataset.nada = st.nada; else delete b.statusEl.dataset.nada; }
        // v9.2 G1: hanya baris yang sempat masuk lalu HP terputus yang dilipat; yang belum pernah membuka HP tampil seperti baris biasa
        const terputus = !terkunci && !!hadirB && hadirB[n] === 'terputus' && !jauh;
        const tutupIsi = terputus && !bukaIsi[n] && !(jb[n] && sumberB[n] === 'papan');
        b.li.toggleAttribute('data-offline', terputus);
        b.li.toggleAttribute('data-tertutup', tutupIsi);
        if (b.isiEl) { b.isiEl.hidden = !tutupIsi; b.isiEl.disabled = terkunci; }
        if (b.tombolRagu) { b.tombolRagu.setAttribute('aria-pressed', String(!!rb[n])); b.li.toggleAttribute('data-ragu', !!rb[n]); }
        if (terkunci) {
          const v = jb[n]; const hs = v === '-' ? 'kosong' : v === soal.kunci ? 'benar' : 'salah';
          b.li.dataset.hasil = hs; b.hasilEl.hidden = false;
          b.hasilEl.replaceChildren(hs === 'kosong' ? null : ikon(hs === 'benar' ? 'check' : 'x', null, true), h('span', { class: 'papan-hasil-teks' }, hs === 'benar' ? 'benar' : hs === 'salah' ? 'salah' : 'tidak menjawab'));
        }
      });
      // chip nama di opsi hanya setelah kunci dibuka (bernada benar/salah)
      for (const k in labels) {
        const wadah = labels[k].querySelector('.peserta-opsi'); if (!wadah) continue;
        const nm = terkunci ? pesertaB.filter(n => jb[n] === k) : [];
        wadah.replaceChildren(...(nm.length ? [h('span', { class: 'visually-hidden' }, ' Dipilih: ')] : []), ...nm.map(n => h('span', { class: 'chip-peserta', title: n, 'data-hasil': k === soal.kunci ? 'benar' : 'salah' }, n)));
        wadah.hidden = !nm.length;
      }
      if (btnKunci) { if (nSudah()) btnKunci.removeAttribute('aria-disabled'); else btnKunci.setAttribute('aria-disabled', 'true'); }
      if (ketKunci) ketKunci.hidden = terkunci || nSudah() > 0;
      if (ketKunciHp) ketKunciHp.hidden = terkunci || nSudah() > 0;
      if (hitungEl && !terkunci) hitungEl.textContent = teksHitung();
      if (arahanEl) { arahanEl.textContent = hadirB ? 'Anggota yang memegang HP menjawab sendiri. Ketuk tombol hanya untuk yang tidak memegang HP.' : 'Ketuk jawaban tiap orang.'; arahanEl.hidden = terkunci; }
      if (papan) papan.toggleAttribute('data-room', !!hadirB);
    }
    let tUmumB = null; // pengumuman papan: hanya yang terakhir yang dibacakan (pengumuman tertunda sebelumnya dibatalkan)
    const umumkanBersama = (t, dariKeyboard) => { if (!live) return; live.textContent = ''; clearTimeout(tUmumB); tUmumB = setTimeout(() => { live.textContent = t; }, dariKeyboard ? 30 : 60); };
    // setelah perubahan satu baris: maju ke baris berikutnya bila lengkap; buka kunci otomatis bila semua orang lengkap
    function setelahUbah(nama, dariKeyboard, kalimat) {
      if (galatPilih) galatPilih.hidden = true;
      const i = pesertaB.indexOf(nama);
      if (!bisaAktif(nama) && i === aktif) majuAktif(i);
      gambarPapan();
      clearTimeout(tBuka);
      const semua = pesertaB.every(lengkap);
      if (typeof opsi.bersama.onUbah === 'function') { try { opsi.bersama.onUbah(nama, ujianB ? { o: jb[nama] || null, ragu: !!rb[nama] } : { o: jb[nama] || null, k: yb[nama] || null }); } catch (e) { console.error(e); } }
      if (ujianB) { umumkanBersama(kalimat + (semua ? ' Semua sudah terisi.' : lengkap(nama) && !lengkap(barisAktif()) ? ' Berikutnya: ' + barisAktif() + '.' : ''), dariKeyboard); return; }
      // v8.2 B2 (audit T5): semua lengkap → hitung mundur 2 dtk dengan tombol "Tahan" (bukan buka seketika); perubahan apa pun mengulang
      hentikanHitung();
      const bisaHitung = semua && !ditahan && !dijeda && !!btnKunci;
      umumkanBersama(kalimat + (semua ? ' Semua sudah menjawab.' + (bisaHitung ? ' Kunci jawaban dibuka dalam 2 detik. Tekan Tahan untuk menunda.' : '') : lengkap(nama) && !lengkap(barisAktif()) ? ' Berikutnya: ' + barisAktif() + '.' : ''), dariKeyboard);
      if (bisaHitung) mulaiHitung();
      else if (semua && !btnKunci && !dijeda) tBuka = setTimeout(() => { if (!terkunci && !dijeda && pesertaB.every(lengkap) && wrap.isConnected) bukaKunci(); }, 350);
    }
    // ---- v8.2 B2 hitung mundur kunci otomatis + "Tahan" ----
    let tHitung = null, sisaHitung = 0, ditahan = false;
    // v9.1 K1: dijeda = pemandu sedang melihat lagi soal lama (wrap.jedaPapan): isian tetap masuk, tetapi kunci tidak dibuka otomatis
    let dijeda = false;
    const btnTahan = bersama && !ujianB ? h('button', { type: 'button', class: 'btn btn-ghost aksi-tahan', hidden: true, onclick: () => tahan() }, 'Tahan') : null;
    function teksHitung() {
      if (tHitung) return 'Semua sudah menjawab. Kunci jawaban dibuka dalam ' + sisaHitung + ' detik.';
      if (ditahan && pesertaB.every(lengkap)) return 'Kunci jawaban ditahan. Tekan Buka kunci jawaban bila siap.';
      return nSudah() + ' dari ' + pesertaB.length + ' orang sudah menjawab';
    }
    function mulaiHitung() {
      if (terkunci || ditahan || dijeda || !wrap.isConnected) return;
      sisaHitung = 2; if (btnTahan) btnTahan.hidden = false; aksi.setAttribute('data-hitung', '');
      tHitung = setInterval(() => {
        if (terkunci || dijeda || !wrap.isConnected || !pesertaB.every(lengkap)) { hentikanHitung(); return; }
        sisaHitung--;
        if (sisaHitung <= 0) { hentikanHitung(); bukaKunci(); return; }
        if (hitungEl) hitungEl.textContent = teksHitung();
      }, 1000);
      if (hitungEl) hitungEl.textContent = teksHitung();
    }
    function hentikanHitung() {
      const tadi = !!tHitung; clearInterval(tHitung); tHitung = null; clearTimeout(tBuka);
      if (btnTahan) btnTahan.hidden = true; aksi.removeAttribute('data-hitung');
      if (tadi && hitungEl && !terkunci) hitungEl.textContent = teksHitung();
    }
    function tahan() {
      if (!tHitung) return;
      const fokusDi = document.activeElement === btnTahan;
      ditahan = true; hentikanHitung();
      umumkanBersama('Kunci jawaban ditahan. Tekan Buka kunci jawaban bila siap.', false);
      if (fokusDi && btnKunci) fokus(btnKunci);
    }
    // v9.1 K1: wrap.jedaPapan(true) → hitung mundur dihentikan dan tidak dimulai lagi; isian (papan maupun HP) tetap tercatat.
    // wrap.jedaPapan(false) → bila semua sudah lengkap (dan tidak ditahan), hitung mundur 2 dtk dimulai seperti biasa; → true bila dimulai
    function jedaPapan(v) {
      if (!bersama || ujianB) return false;
      v = !!v; if (v === dijeda) return false; dijeda = v;
      if (v) { hentikanHitung(); return false; }
      if (!terkunci && !ditahan && btnKunci && pesertaB.every(lengkap)) { mulaiHitung(); return !!tHitung; }
      if (hitungEl && !terkunci) hitungEl.textContent = teksHitung();
      return false;
    }
    // ---- v8.2 B2 papan jarak jauh (room tim) ----
    // wrap.isiJauh(nama, { o: 'A'–'D' | '-', k } | null): jawaban dari HP anggota. Diabaikan setelah kunci, untuk nama di luar peserta,
    // dan di papan mode ujian. Isian HP menang atas isian pemandu selama kunci belum dibuka; null menghapus hanya isian yang berasal dari HP.
    function isiJauh(namaMasuk, v) {
      if (!bersama || ujianB || terkunci) return false;
      const nama = pesertaB.find(n => samaN(n, String(namaMasuk == null ? '' : namaMasuk).trim())); if (!nama) return false;
      if (!v || typeof v !== 'object' || v.o == null) {
        if (sumberB[nama] !== 'hp') return false;
        delete jb[nama]; delete yb[nama]; delete sumberB[nama];
        setelahUbah(nama, false, nama + ' menghapus jawabannya.'); return true;
      }
      const O = String(v.o).toUpperCase(); if (O !== '-' && !(HURUF.includes(O) && labels[O])) return false;
      const K = O !== '-' && LABEL_YAKIN[v.k] ? v.k : null;
      if (sumberB[nama] === 'hp' && jb[nama] === O && (yb[nama] || null) === K) return false;
      jb[nama] = O; if (K) yb[nama] = K; else delete yb[nama]; sumberB[nama] = 'hp';
      if (bukaIsi[nama]) delete bukaIsi[nama];
      delete bukaUbah[nama];
      setelahUbah(nama, false, nama + ' sudah menjawab.');
      return true;
    }
    // wrap.aturHadir({ nama: 'online' | 'belum' | 'terputus' } | null): status per baris; null = papan satu layar (tanpa status, semua tombol tampil).
    // Nilai lama 'offline' dibaca 'terputus'
    function aturHadir(peta) {
      if (!bersama || ujianB) return;
      if (!peta || typeof peta !== 'object') hadirB = null;
      else { hadirB = {}; pesertaB.forEach(n => { const k = Object.keys(peta).find(x => samaN(x, n)); const v = k ? (peta[k] === 'offline' ? 'terputus' : peta[k]) : null; if (v === 'online' || v === 'belum' || v === 'terputus') hadirB[n] = v; }); }
      gambarPapan();
    }
    // v = 'A'–'D' | '-' (tidak menjawab) | null (hapus)
    function beriJawaban(nama, v, dariKeyboard) {
      if (!bersama || terkunci || !nama || !barisP[nama]) return;
      // v8.2 B2: menimpa baris dari HP → huruf lama tidak dijadikan titik awal (ketukan pemandu dimulai dari kosong)
      if (sumberB[nama] === 'hp') delete yb[nama];
      if (v) jb[nama] = v; else delete jb[nama];
      if (v === '-' && !ujianB) delete yb[nama];
      if (v) sumberB[nama] = 'papan'; else delete sumberB[nama];
      delete bukaUbah[nama];
      const tambahan = ujianB ? (rb[nama] ? ', ragu' : '') : (yb[nama] ? ', ' + LABEL_YAKIN[yb[nama]].toLowerCase() : '');
      setelahUbah(nama, dariKeyboard, nama + (v === '-' ? (ujianB ? ': kosong' + tambahan + '.' : ' tidak menjawab.') : v ? ': ' + v + tambahan + '.' : ': jawaban dihapus.'));
    }
    // v8.1 papan mode ujian: tanda ragu per orang (tidak mengubah jawaban)
    function beriRagu(nama, v, dariKeyboard) {
      if (!ujianB || !nama || !barisP[nama]) return;
      if (v) rb[nama] = true; else delete rb[nama];
      setelahUbah(nama, dariKeyboard, nama + (v ? ': ditandai ragu.' : ': tanda ragu dilepas.'));
    }
    // v = 'yakin' | 'ragu' | 'menebak' | null (lepas); memilih keyakinan pada baris "–" menghapus tanda tidak menjawab
    function beriYakin(nama, v, dariKeyboard) {
      if (!bersama || terkunci || !nama || !barisP[nama]) return;
      // menimpa baris HP (setelah Ubah): huruf HP dibuang dulu agar tidak pernah tampil sebelum kunci dibuka
      if (sumberB[nama] === 'hp') { delete jb[nama]; delete yb[nama]; delete sumberB[nama]; delete bukaUbah[nama]; }
      if (LABEL_YAKIN[v]) { yb[nama] = v; if (jb[nama] === '-') delete jb[nama]; } else delete yb[nama];
      setelahUbah(nama, dariKeyboard, nama + ': ' + (yb[nama] ? LABEL_YAKIN[yb[nama]].toLowerCase() : 'keyakinan dilepas') + '.');
    }
    // pintasan papan (dipakai di kartu soal dan di judul tepat di atasnya); true bila ditangani
    function pintasBersama(e) {
      if (!bersama || terkunci || !e.key || e.key.length !== 1) return false;
      const k = e.key.toUpperCase();
      // 1–9 = baris 1–9, 0 = baris ke-10 (v9.2 G1); baris ke-11 dan ke-12 tanpa pintasan nomor
      if (/^[0-9]$/.test(k)) { const ix = k === '0' ? 9 : Number(k) - 1; if (ix < pesertaB.length) { e.preventDefault(); aktif = ix; gambarPapan(); umumkanBersama('Baris ' + barisAktif() + '.', true); return true; } return false; }
      if (!ujianB && kunciHp(barisAktif()) && (k === '-' || (HURUF.includes(k) && labels[k]) || ['Y', 'R', 'N', 'M'].includes(k))) { e.preventDefault(); umumkanBersama(barisAktif() + ' sudah menjawab dari HP. Ketuk Ubah di baris itu untuk mengganti.', true); return true; }
      if (k === '-') { e.preventDefault(); const n = barisAktif(); beriJawaban(n, tampakJ(n) === '-' ? null : '-', true); return true; }
      if (ujianB) {
        if (k === 'R') { e.preventDefault(); const n = barisAktif(); beriRagu(n, !rb[n], true); return true; }
        if (HURUF.includes(k) && labels[k]) { e.preventDefault(); beriJawaban(barisAktif(), k, true); return true; }
        return false;
      }
      const yk = { Y: 'yakin', R: 'ragu', N: 'menebak', M: 'menebak' }[k];
      if (yk) { if (pintasanAktif()) { e.preventDefault(); const n = barisAktif(); beriYakin(n, tampakY(n) === yk ? null : yk, true); } return true; }
      if (HURUF.includes(k) && labels[k]) { e.preventDefault(); beriJawaban(barisAktif(), k, true); return true; }
      return false;
    }
    gambarPapan();
    // pintasan tampak di desktop (pointer halus): A–D pilih · Enter periksa · T tidak tahu; setelah periksa: Enter lanjut
    const petunjuk = mode === 'belajar' && !hanyaBaca && pointerHalus() ? h('p', { class: 'petunjuk-kbd', 'aria-hidden': 'true' }) : null;
    function gambarPetunjuk() {
      if (!petunjuk) return;
      petunjuk.replaceChildren(...(terkunci ? [h('span', null, kbd('Enter'), ' lanjut'), segTadi ? h('span', null, kbd('Y'), kbd('R'), kbd('M'), ' tadi yakin · ragu · menebak') : null].filter(Boolean)
        : ujianB ? [h('span', null, kbd('1'), '–', kbd(String(Math.min(9, pesertaB.length))), ' pilih orang'), h('span', null, kbd('A'), '–', kbd('D'), ' jawaban'), h('span', null, kbd('R'), ' ragu'), h('span', null, kbd('-'), ' kosong')]
        : bersama ? [h('span', null, kbd('1'), '–', kbd(String(Math.min(9, pesertaB.length))), pesertaB.length >= 10 ? [' dan ', kbd('0')] : null, ' pilih orang'), h('span', null, kbd('A'), '–', kbd('D'), ' jawaban'), h('span', null, kbd('Y'), kbd('R'), kbd('N'), ' Yakin · Ragu · Nebak'), h('span', null, kbd('-'), ' tidak menjawab'), h('span', null, kbd('Enter'), ' buka kunci jawaban')]
        : langsung ? [h('span', null, kbd('A'), '–', kbd('D'), ' jawab'), segAwal ? h('span', null, kbd('Y'), kbd('R'), kbd('M'), ' yakin · ragu · nebak') : null, bisaTidakTahu ? h('span', null, kbd('T'), ' tidak tahu') : null].filter(Boolean)
        : [h('span', null, kbd('A'), '–', kbd('D'), ' pilih'), segYakin && !segYakin.hidden ? h('span', null, kbd('Y'), kbd('R'), kbd('M'), ' yakin · ragu · nebak') : null, h('span', null, kbd('Enter'), ringkas ? ' berikutnya' : ' periksa'), bisaTidakTahu ? h('span', null, kbd('T'), ' tidak tahu') : null].filter(Boolean)));
    }
    gambarPetunjuk();
    // jawab langsung: "Tidak tahu" sebagai tombol kecil tepat di bawah opsi (tanpa bar aksi sebelum menjawab)
    const barisTidakTahu = langsung && bisaTidakTahu ? h('p', { class: 'tidak-tahu-baris' }, h('button', { type: 'button', class: 'btn btn-text btn-sm', 'aria-keyshortcuts': 'T', onclick: () => tidakTahu() }, 'Tidak tahu')) : null;
    // v9.2 G1: di papan bersama petunjuk papan ketik dilipat di balik tautan kecil "Pintasan papan ketik"
    const petunjukWadah = bersama && petunjuk ? h('details', { class: 'pintasan-papan' }, h('summary', null, 'Pintasan papan ketik'), petunjuk) : petunjuk;
    wrap.append(kop, kutipan, stem, fs, papan, segAwal, barisTidakTahu, segYakin, petunjukWadah);
    // catatan verifikasi: tidak dirender selama simulasi berjalan (mode ujian); di latihan dan ulas sebagai lipatan "Catatan sumber"
    if (soal.verifikasi === '◐' && !(mode === 'ujian' && !hanyaBaca) && !ujianB) {
      const cat = UKP.rapikanCatatan(soal.peringatan) || 'Sebagian ketentuan soal ini belum dicek ulang ke teks peraturan.';
      wrap.appendChild(h('details', { class: 'lipat catatan-sumber' }, h('summary', null, 'Catatan sumber'), h('p', { class: 'small muted' }, cat)));
    }
    const galatPilih = mode === 'belajar' && !hanyaBaca ? h('p', { class: 'small galat galat-pilih', role: 'alert', hidden: true, style: { color: 'var(--attn)', margin: 0 } }) : null;
    if (galatPilih) fs.after(galatPilih);
    // urutan DOM: … opsi › umpan › aksi (aksi lengket di bawah, tetap terlihat saat pembahasan dibaca)
    const umpan = h('div', null);
    const live = h('p', { class: 'visually-hidden', role: 'status' });
    const aksi = h('div', { class: 'sticky-actions' });
    // v9.1 K1: opsi.aksiKiri = simpul (mis. tombol "Soal sebelumnya") di sisi kiri bar aksi, di semua keadaan (sebelum dan sesudah menjawab)
    const aksiKiri = !hanyaBaca && mode === 'belajar' && opsi.aksiKiri && opsi.aksiKiri.nodeType ? opsi.aksiKiri : null;
    if (hanyaBaca) {
      // ulas: langsung terkunci, kunci & jawaban ditandai, tanpa Periksa
      kunci(); tandaiHasil();
      if (opsi.denganUmpan) { umpan.appendChild(UKP.c.umpan(soal, dipilih || (opsi.jawabanAwal === '-' ? '-' : 'kosong'), opsi.detik || 0, { konteks: opsi.konteks, hanyaBaca: true })); wrap.appendChild(umpan); }
    } else if (mode === 'belajar' && langsung) {
      if (ujianB) { /* v8.1 papan mode ujian: tanpa bar aksi (pemanggil menggambar navigasinya sendiri) */ }
      else if (bersama) {
        hitungEl = h('span', { class: 'aksi-hitung', id: 'hitung-' + uid });
        // v9.2 G1: "Buka kunci jawaban" selalu berwarna utama; selama belum ada jawaban tidak aktif, dengan keterangan di sampingnya
        ketKunci = h('span', { class: 'aksi-ket', id: 'ket-kunci-' + uid }, 'Aktif setelah ada yang menjawab');
        // HP: keterangan yang sama sebagai baris kedua hitungan (bilah aksi tetap satu baris)
        ketKunciHp = h('span', { class: 'aksi-ket-hp' }, 'Tombol aktif setelah ada yang menjawab');
        btnKunci = h('button', { type: 'button', class: 'btn btn-primary aksi-buka-kunci', 'aria-disabled': 'true', 'aria-keyshortcuts': 'Enter', 'aria-describedby': 'hitung-' + uid + ' ket-kunci-' + uid, onclick: () => bukaKunci() }, 'Buka kunci jawaban');
        isiAksiBersama(btnKunci); gambarPapan();
      } else if (opsi.onLewati) aksi.appendChild(h('button', { type: 'button', class: 'btn btn-text', onclick: () => opsi.onLewati() }, 'Lewati'));
      if (aksiKiri && !bersama && !ujianB) aksi.prepend(aksiKiri);
      aksi.hidden = !aksi.childNodes.length;
      wrap.append(umpan, live, aksi);
    } else if (mode === 'belajar') {
      // aria-disabled (bukan disabled): tombol tetap dapat difokus dan menjelaskan mengapa belum bisa diperiksa (DESAIN-V7 P3-03)
      btnPeriksa = h('button', { type: 'button', class: 'btn btn-primary', 'aria-disabled': dipilih ? null : 'true', 'aria-keyshortcuts': 'Enter', onclick: periksa }, ringkas ? 'Berikutnya' : 'Periksa');
      aksi.appendChild(btnPeriksa);
      if (bisaTidakTahu) aksi.appendChild(h('button', { type: 'button', class: 'btn btn-ghost btn-text', 'aria-keyshortcuts': 'T', onclick: tidakTahu }, 'Tidak tahu'));
      if (opsi.onLewati) aksi.appendChild(h('button', { type: 'button', class: 'btn btn-text', onclick: () => opsi.onLewati() }, 'Lewati'));
      if (aksiKiri) aksi.prepend(aksiKiri);
      wrap.append(umpan, live, aksi);
    }
    // bar aksi mode bersama (meniru papan referensi): kiri "Ke menu" · tengah meta + hitungan · kanan "Selesai sekarang" + tombol utama
    function isiAksiBersama(primer) {
      aksi.classList.add('aksi-bersama');
      const kiri = typeof opsi.onKeMenu === 'function' ? h('button', { type: 'button', class: 'btn btn-ghost aksi-menu', onclick: () => opsi.onKeMenu() }, 'Ke menu') : null;
      const meta = h('p', { class: 'aksi-meta' }, opsi.metaBersama ? h('span', { class: 'aksi-info' }, opsi.metaBersama) : null, hitungEl, terkunci ? null : ketKunciHp);
      const akhir = typeof opsi.onSelesaiSekarang === 'function' ? h('button', { type: 'button', class: 'btn aksi-selesai', onclick: () => opsi.onSelesaiSekarang() }, 'Selesai sekarang') : null;
      aksi.replaceChildren(...[aksiKiri, kiri, meta, h('span', { class: 'aksi-kanan' }, akhir, terkunci ? null : btnTahan, terkunci ? null : ketKunci, primer)].filter(Boolean));
      aksi.hidden = false;
    }
    function periksa() {
      if (terkunci || hanyaBaca || mode !== 'belajar') return;
      if (!dipilih) { if (galatPilih) { galatPilih.textContent = 'Pilih satu jawaban dulu.'; galatPilih.hidden = false; } return; }
      selesaikan(dipilih);
    }
    function tidakTahu() {
      if (terkunci || hanyaBaca || mode !== 'belajar' || !bisaTidakTahu) return;
      dipilih = null; tandaiDipilih(); fs.querySelectorAll('input').forEach(i => { i.checked = false; });
      selesaikan('-');
    }
    function selesaikan(jawab) {
      kunci();
      const benar = jawab === soal.kunci; const detik = (performance.now() - mulai) / 1000;
      const konteks = opsi.konteks || 'latih';
      tandaiHasil();
      const kid = 'KA-' + soal.id; const daftarKartu = () => UKP.store.get().kartuOtomatis || [];
      const adaSebelum = daftarKartu().some(k => k.id === kid);
      // keyakinan (Momen 2) hanya bermakna untuk jawaban berisi; "Tidak tahu" tidak membawa keyakinan
      if (jawab === '-') keyakinan = null;
      const yk = jawab === '-' ? null : keyakinan;
      if (segYakin) segYakin.hidden = true;
      if (segAwal) segAwal.hidden = true;
      if (barisTidakTahu) barisTidakTahu.hidden = true;
      if (!opsi.tanpaLog) {
        UKP.belajar.catatJawaban(soal, jawab, detik, konteks);
        // catat keyakinan pada entri jawaban yang baru ditulis (field tambahan; penilaian tidak berubah)
        if (yk) { try { const arr = UKP.store.get().jawaban; const j = arr[arr.length - 1]; if (j && j.soal === soal.id && j.konteks === konteks) { j.keyakinan = yk; UKP.store.save(); } } catch (e) {} }
      }
      if (opsi.onPeriksa) { try { opsi.onPeriksa(benar, jawab, detik, yk); } catch (e) { console.error(e); } }
      // mode ringkas (diagnosis): tanpa panel 4 blok; umpan satu baris ditampilkan pemanggil pada soal berikutnya
      if (ringkas) { sudahLanjut = true; if (opsi.onLanjut) opsi.onLanjut(benar, jawab, detik, yk); return; }
      // teks kartu otomatis hanya bila kartu benar-benar dibuat (bukan simulasi, bukan tanpaLog)
      let kartu = null;
      if (!benar && !opsi.tanpaLog && konteks !== 'simulasi') { const k = daftarKartu().find(x => x.id === kid); if (k) kartu = { id: kid, baru: !adaSebelum, perubahan: (k.dekTambahan || []).includes('perubahan-2025-2026') }; }
      // kartu baru: di desktop (pointer halus, ≥ 600 px) toast beraksi [Urungkan] (DESAIN-V6 C.20; core.js mengatur jaraknya dari
      // bar aksi). Di HP/pointer kasar, dan untuk "Yakin tetapi keliru" (kartu ditonjolkan), baris "… masuk dek Ulang · Urungkan"
      // di panel umpan, agar tidak ada toast yang menutupi Lanjut/Tanya Tutor (LT-2)
      const layarHp = cocok('(max-width: 599px)') || cocok('(pointer: coarse)');
      const yakinKeliru = yk === 'yakin' && !benar;
      const lewatToast = !!(kartu && kartu.baru) && !layarHp && !yakinKeliru && toastBeraksi() && typeof UKP.belajar.hapusKartuOtomatis === 'function';
      const panel = UKP.c.umpan(soal, jawab, detik, { kartu: lewatToast ? null : kartu, konteks, keyakinan: yk, langsung });
      if (bisaTadi && jawab !== '-') { segTadi = buatTadi(benar, konteks, panel); const st = panel.querySelector('.status'); if (st) st.after(segTadi); else panel.prepend(segTadi); }
      cadanganUmpan();
      umpan.replaceChildren(panel);
      if (lewatToast) UKP.toast(kartu.perubahan ? 'Kartu dari soal ini masuk dek Ulang dan Dek Perubahan.' : 'Kartu dari soal ini masuk dek Ulang.', { aksi: { label: 'Urungkan', onclick: () => { if (UKP.belajar.hapusKartuOtomatis(kartu.id)) UKP.toast('Kartu dibatalkan. Soal tetap tercatat di Buku Kesalahan.'); } } });
      // jawab langsung: fokus ke baris status ("Benar" / "Salah · kunci B"); periksa dulu: ke kalimat inti. Enter di sana = Lanjut
      intiEl = (langsung && panel.querySelector('.status')) || panel.querySelector('.inti');
      const kombo = komboYakin(yk, benar);
      live.textContent = (benar ? 'Benar.' : jawab === '-' ? 'Belum tahu. Kunci ' + soal.kunci + '.' : 'Kurang tepat. Jawaban Anda ' + jawab + ', kunci ' + soal.kunci + '.') + (kombo ? ' ' + kombo[2] + '.' : '');
      aksi.replaceChildren(...[aksiKiri].concat(tombolSetelah(benar, jawab, detik, yk)).filter(Boolean)); aksi.hidden = false;
      gambarPetunjuk();
      // fokus ke kalimat inti (dibaca pembaca layar), Lanjut tetap di urutan Tab berikutnya; Enter pada kalimat inti = Lanjut
      fokus(intiEl || aksi.querySelector('button'));
      if (langsung) gulirLangsung(); else { try { umpan.scrollIntoView({ block: 'nearest', behavior: halus() }); } catch (e) {} }
    }
    // bar aksi setelah terkunci: Lanjut (primer) + Tanya Tutor
    function tombolSetelah(benar, jawab, detik, yk) {
      const tombol = [h('button', { type: 'button', class: 'btn btn-primary', style: { flex: '2 1 auto' }, onclick: () => { if (sudahLanjut) return; sudahLanjut = true; if (opsi.onLanjut) opsi.onLanjut(benar, jawab, detik, yk); } }, opsi.labelLanjut || 'Lanjut', ikon('chevron-kanan'))];
      if (UKP.store.get().pengaturan.tutorAktif && !opsi.tanpaTutor && UKP.tutor) tombol.push(h('button', { type: 'button', class: 'btn btn-ghost', onclick: () => UKP.tutor.buka({ soal, jawabanPengguna: jawab === '-' ? null : jawab, topik }) }, ikon('chat'), 'Tanya Tutor'));
      return tombol;
    }
    // latihan bersama: buka kunci (peserta tanpa jawaban dicatat '-'); hasil per orang di papan dan chip, status kelompok di panel
    function bukaKunci() {
      if (!bersama || ujianB || terkunci || dijeda) return;
      clearTimeout(tBuka); hentikanHitung();
      if (!nSudah()) { if (galatPilih) { galatPilih.textContent = 'Catat jawaban minimal satu orang dulu.'; galatPilih.hidden = false; } return; }
      pesertaB.forEach(n => { if (!jb[n]) jb[n] = '-'; if (jb[n] === '-') delete yb[n]; });
      kunci();
      const detik = (performance.now() - mulai) / 1000; const konteks = opsi.konteks || 'latih';
      const jawabP = pemimpinB ? jb[pemimpinB] : '-'; const benarP = jawabP === soal.kunci; const ykP = pemimpinB && jawabP !== '-' ? yb[pemimpinB] || null : null;
      dipilih = jawabP && jawabP !== '-' ? jawabP : null;
      tandaiHasil(); gambarPapan();
      const per = {}; pesertaB.forEach(n => { per[n] = { opsi: jb[n], keyakinan: jb[n] === '-' ? null : yb[n] || null, benar: jb[n] === soal.kunci }; });
      const kid = 'KA-' + soal.id; const daftarKartu = () => UKP.store.get().kartuOtomatis || [];
      const adaSebelum = daftarKartu().some(k => k.id === kid);
      if (opsi.onPeriksaBersama) { try { opsi.onPeriksaBersama(per, detik); } catch (e) { console.error(e); } }
      else if (!opsi.tanpaLog && UKP.belajar && UKP.belajar.catatJawabanBersama) { const m = {}; pesertaB.forEach(n => { m[n] = { o: per[n].opsi, k: per[n].keyakinan }; }); UKP.belajar.catatJawabanBersama(soal, m, detik); }
      if (opsi.onPeriksa) { try { opsi.onPeriksa(benarP, jawabP, detik, ykP); } catch (e) { console.error(e); } }
      // kartu otomatis hanya untuk jawaban pemimpin (dibuat oleh catatJawaban lewat catatJawabanBersama)
      let kartu = null;
      if (!benarP && jawabP !== '-' && !opsi.tanpaLog) { const k = daftarKartu().find(x => x.id === kid); if (k) kartu = { id: kid, baru: !adaSebelum, perubahan: (k.dekTambahan || []).includes('perubahan-2025-2026') }; }
      const panel = UKP.c.umpan(soal, jawabP, detik, { kartu, konteks, langsung: true });
      // v9.2 G1: satu fakta per baris ("Jawaban benar: B" · "3 dari 5 yang menjawab benar" · "Salah: …" · "Tidak menjawab: …"), lalu kalimat pembahas
      const tri = hitungTriase(per);
      const hb = UKP.c.hasilBersama(soal, pesertaB, per, { tri, pemimpin: pemandu() || null, jam: true, sudahLanjut: () => sudahLanjut || !wrap.isConnected });
      const stBaru = hb.status; triEl = hb.triase; tBahas = hb.tBahas; mulaiBahas = hb.mulaiBahas;
      panel.dataset.hasil = hb.hasil;
      const stLama = panel.querySelector('.status'); if (stLama) stLama.replaceWith(stBaru); else panel.prepend(stBaru);
      if (triEl) stBaru.after(triEl);
      if (tri && tri.kelas === 'dikuasai') { const sisa = [...panel.children].filter(x => x !== stBaru && x !== triEl); if (sisa.length) { const lip = h('details', { class: 'lipat triase-lipat blok' }, h('summary', null, 'Pembahasan')); sisa.forEach(x => lip.appendChild(x)); panel.appendChild(lip); } }
      // v8.2 B2: kait setelah kunci + triase (room: bukaKunci dengan penjelas); sumber = { nama: 'hp' | 'papan' } baris yang terisi
      if (typeof opsi.bersama.onKunci === 'function') { try { opsi.bersama.onKunci({ per, tri: tri || null, sumber: Object.assign({}, sumberB) }); } catch (e) { console.error(e); } }
      cadanganUmpan();
      umpan.replaceChildren(panel);
      intiEl = stBaru;
      live.textContent = hb.teks;
      if (hitungEl) hitungEl.textContent = hb.ringkas;
      // v8.2 B2 (audit T5): tombol utama dan Enter ditahan 800 ms sesudah kunci terbuka, agar ketukan ganda tidak melompati pembahasan
      const tahanSampai = Date.now() + 800;
      const lanjut = h('button', { type: 'button', class: 'btn btn-primary', 'aria-disabled': 'true', onclick: () => { if (sudahLanjut || Date.now() < tahanSampai) return; sudahLanjut = true; clearInterval(tBahas); tBahas = null; if (opsi.onLanjut) opsi.onLanjut(benarP, jawabP, detik, ykP); } }, opsi.labelLanjut || 'Lanjut', ikon('chevron-kanan'));
      isiAksiBersama(lanjut);
      setTimeout(() => lanjut.removeAttribute('aria-disabled'), 800);
      gambarPetunjuk();
      fokus(intiEl);
      gulirLangsung();
    }
    // v8.1 triase setelah kunci dibuka (latihan bersama): .triase-bersama[data-kelas] berisi pill label, saran penjelas, stopwatch
    // "Bahas m:ss" (sejak kunci dibuka sampai Lanjut; tidak untuk 'dikuasai'), "Kenapa C keliru: <label> — <teks>", "Yakin tapi salah: …".
    // opsi.bersama.hitungPenjelas = { nama: n } (dipegang pemanggil untuk rotasi penjelas); opsi.bersama.onTriase(hasil) setelah dihitung
    let triEl = null, tBahas = null, mulaiBahas = 0;
    function hitungTriase(per) {
      const L = UKP.belajar; if (!L || typeof L.triaseSoal !== 'function' || opsi.bersama.triase === false) return null;
      let tri = null;
      try { tri = L.triaseSoal(soal, per, { urutan: pesertaB, hitungPenjelas: opsi.bersama.hitungPenjelas || {}, pemimpin: pemandu() || null }); } catch (e) { console.error(e); return null; }
      if (tri && typeof opsi.bersama.onTriase === 'function') { try { opsi.bersama.onTriase(tri); } catch (e) { console.error(e); } }
      return tri;
    }
    wrap.detikBahas = () => mulaiBahas ? Math.round((Date.now() - mulaiBahas) / 1000) : 0;
    // penanda susulan (jawab langsung): segmen kecil Y/R/M di bawah baris status; pilih ulang = lepas. Tidak memindah fokus dan tidak
    // menghalangi Lanjut. Entri jawaban diperbarui (kecuali tanpaLog); kombinasi keyakinan × hasil di kop diganti seperti mode periksa dulu
    function buatTadi(benar, konteks, panel) {
      const lbl = 'tadi-' + uid;
      const seg = h('div', { class: 'keyakinan keyakinan-tadi blok' },
        h('span', { class: 'label', id: lbl }, 'Tadi Anda:'),
        h('div', { class: 'seg', role: 'group', 'aria-labelledby': lbl }, Object.keys(TOMBOL_YAKIN).map(t => { const v = TOMBOL_YAKIN[t]; return h('button', { type: 'button', 'data-yakin': v, 'aria-pressed': String(v === keyakinan), 'aria-keyshortcuts': t, onclick: () => aturTadi(keyakinan === v ? null : v, false) }, LABEL_YAKIN[v]); })));
      seg._benar = benar; seg._konteks = konteks; seg._panel = panel;
      return seg;
    }
    function aturTadi(v, dariKeyboard) {
      if (!segTadi) return;
      keyakinan = LABEL_YAKIN[v] ? v : null;
      segTadi.querySelectorAll('button[data-yakin]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.yakin === keyakinan)));
      if (!opsi.tanpaLog) { try { UKP.belajar.aturKeyakinan(soal.id, segTadi._konteks, keyakinan); } catch (e) {} }
      const st = segTadi._panel.querySelector('.status'); const lama = st && st.querySelector('.keyakinan-hasil');
      if (lama) lama.remove();
      const baru = elKombo(keyakinan, segTadi._benar); const wadah = st && st.querySelector(':scope > span');
      if (baru && wadah) wadah.appendChild(baru);
      if (opsi.onKeyakinan) { try { opsi.onKeyakinan(keyakinan); } catch (e) { console.error(e); } }
      if (live) { live.textContent = ''; const kb = komboYakin(keyakinan, segTadi._benar); const t = keyakinan ? 'Keyakinan: ' + LABEL_YAKIN[keyakinan] + '.' + (kb ? ' ' + kb[2] + '.' : '') : 'Penanda keyakinan dilepas.'; setTimeout(() => { live.textContent = t; }, dariKeyboard ? 30 : 60); }
    }
    // jawab langsung: gulir secukupnya agar baris status terlihat, tetapi opsi kunci (dan opsi yang dipilih) tidak terdorong
    // keluar dari atas layar; panel yang tinggi tidak disejajarkan ke atas seperti scrollIntoView({block:'nearest'})
    function gulirLangsung() {
      try {
        const st = umpan.querySelector('.status') || umpan; const cs = getComputedStyle(document.documentElement);
        const pt = parseFloat(cs.scrollPaddingTop) || 0, pbw = parseFloat(cs.scrollPaddingBottom) || 0; const vh = root.innerHeight || document.documentElement.clientHeight;
        // tepi bawah yang boleh dipakai: sisi atas bar aksi lengket bila sedang menempel (lebih akurat daripada scroll-padding-bottom)
        let bawah = vh - Math.min(pbw, vh * 0.3);
        try { if (aksi && !aksi.hidden && getComputedStyle(aksi).position === 'sticky') { const bt = aksi.getBoundingClientRect().top; if (bt > vh * 0.4 && bt < vh) bawah = Math.min(bawah, bt); } } catch (e) {}
        const atas = [labels[soal.kunci], dipilih && dipilih !== '-' ? labels[dipilih] : null].filter(Boolean).map(l => l.getBoundingClientRect().top);
        const batasAtas = atas.length ? Math.min(...atas) - pt - 8 : st.getBoundingClientRect().top - pt;
        // target: baris status + penanda "Tadi Anda" (bila ada) utuh di atas bar aksi.
        // prioritas bila tidak muat: baris status utuh > opsi kunci/pilihan tetap terlihat > penanda utuh
        const dyStatus = st.getBoundingClientRect().bottom + 8 - bawah;
        const akhir = segTadi && segTadi.isConnected ? segTadi : triEl && triEl.isConnected ? triEl : st;
        const dySemua = Math.max(dyStatus, akhir.getBoundingClientRect().bottom + 8 - bawah);
        let dy;
        // v8.1 V1 latihan bersama: papan sudah memuat hasil tiap orang dan status menyebut kunci, jadi opsi tidak perlu tetap
        // terlihat; yang dijamin: baris status DAN blok triase utuh di atas bar aksi (bila tidak muat: status di tepi atas)
        if (bersama && triEl && triEl.isConnected && akhir === triEl) {
          const stAtas = st.getBoundingClientRect().top - pt - 8;
          dy = dySemua <= 0 ? (stAtas < 0 ? stAtas : 0) : Math.min(dySemua, stAtas);
          if (Math.abs(dy) > 1) root.scrollBy({ top: dy, behavior: halus() });
          return;
        }
        if (dySemua <= 0) dy = batasAtas < 0 ? batasAtas : 0;
        else dy = batasAtas >= dySemua ? dySemua : Math.max(batasAtas, dyStatus);
        if (Math.abs(dy) > 1) root.scrollBy({ top: dy, behavior: halus() });
      } catch (e) {}
    }
    // pintasan keyboard: A–D memilih (tanpa modifier, hanya bila belum terkunci); Enter memeriksa / melanjutkan
    wrap.addEventListener('keydown', e => {
      if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return;
      const t = e.target; if (mengetik(t)) return;
      // jawab langsung: panah di grup opsi hanya memindah fokus (tidak memilih, karena memilih = menjawab); Spasi/klik memilih
      if (langsung && !terkunci && t.tagName === 'INPUT' && t.type === 'radio' && /^Arrow(Up|Down|Left|Right)$/.test(e.key)) {
        const ins = [...fs.querySelectorAll('input')]; const i = ins.indexOf(t); const maju = e.key === 'ArrowDown' || e.key === 'ArrowRight';
        const j = (i + (maju ? 1 : -1) + ins.length) % ins.length; e.preventDefault(); ins[j].focus(); return;
      }
      // latihan bersama sebelum kunci: Enter = Lihat kunci (juga dari tombol papan; tombol bar aksi tetap bekerja seperti biasa);
      // 1–9 pilih baris, A–D / Y R N / - untuk baris itu
      if (bersama && !terkunci) {
        if (e.key === 'Enter') {
          if (ujianB) return;
          if (/^(BUTTON|A)$/.test(t.tagName) && !(t.closest && t.closest('.papan-bersama'))) return;
          e.preventDefault(); bukaKunci(); return;
        }
        pintasBersama(e); return;
      }
      // setelah kunci dibuka: Enter di mana pun di kartu (kecuali tombol/tautan) = Lanjut
      if (bersama && terkunci && e.key === 'Enter' && !/^(BUTTON|A|SUMMARY)$/.test(t.tagName)) { const bl = aksi.querySelector('.btn-primary'); if (bl) { e.preventDefault(); bl.click(); } return; }
      if (e.key === 'Enter') {
        if (mode !== 'belajar' || hanyaBaca) return;
        if (!terkunci && langsung) { if (t.tagName === 'INPUT' && t.type === 'radio') { e.preventDefault(); pilih(t.value, true); } return; }
        if (!terkunci && (t.tagName === 'INPUT' || t === fs || t === wrap)) { e.preventDefault(); periksa(); return; }
        // penanda 'Tadi Anda' (diklik dengan mouse, fokus tertinggal di tombol): Enter = Lanjut, Spasi tetap memilih/melepas
        if (terkunci && segTadi && t.closest && t.closest('.keyakinan-tadi')) { const b = aksi.querySelector('.btn-primary'); if (b) { e.preventDefault(); b.click(); } return; }
        if (terkunci && intiEl && (t === intiEl || (langsung && (t === fs || t === wrap)))) { const b = aksi.querySelector('.btn-primary'); if (b) { e.preventDefault(); b.click(); } }
        return;
      }
      if (terkunci && segTadi && e.key && e.key.length === 1 && TOMBOL_YAKIN[e.key.toUpperCase()]) { if (pintasanAktif()) { e.preventDefault(); const v = TOMBOL_YAKIN[e.key.toUpperCase()]; aturTadi(keyakinan === v ? null : v, true); } return; }
      if (terkunci || !e.key || e.key.length !== 1) return;
      const k = e.key.toUpperCase();
      if (TOMBOL_YAKIN[k] && segPra && !segPra.hidden) { if (pintasanAktif()) { e.preventDefault(); aturYakin(keyakinan === TOMBOL_YAKIN[k] ? null : TOMBOL_YAKIN[k], true); } return; }
      if (k === 'T' && bisaTidakTahu) { e.preventDefault(); tidakTahu(); return; }
      if (HURUF.includes(k) && labels[k]) { e.preventDefault(); pilih(k, true); }
    });
    wrap.periksa = periksa; wrap.dipilih = () => dipilih; wrap.keyakinan = () => keyakinan; wrap.langsung = langsung;
    // mode bersama: wrap.bersama() → { nama: 'A'–'D' | '-' } (bentuk v7.9); wrap.keyakinanBersama() → { nama: keyakinan }; wrap.bukaKunci()
    wrap.bersama = bersama ? () => Object.assign({}, jb) : null; wrap.keyakinanBersama = bersama && !ujianB ? () => Object.assign({}, yb) : null; wrap.bukaKunci = bersama && !ujianB ? bukaKunci : null;
    // v8.2 B2 room tim: wrap.isiJauh(nama, { o, k } | null) · wrap.aturHadir({ nama: 'online'|'offline' } | null) · wrap.sumberBersama() → { nama: 'hp'|'papan' }
    // · wrap.terkunci() · wrap.tahanKunci() (sama dengan tombol Tahan)
    wrap.isiJauh = bersama && !ujianB ? isiJauh : null; wrap.aturHadir = bersama && !ujianB ? aturHadir : null;
    wrap.sumberBersama = bersama && !ujianB ? () => Object.assign({}, sumberB) : null; wrap.terkunci = () => terkunci; wrap.tahanKunci = bersama && !ujianB ? tahan : null;
    // v9.1 K1: wrap.jedaPapan(bool) · wrap.dijeda() (mode lihat lagi di runner Latih)
    wrap.jedaPapan = bersama && !ujianB ? jedaPapan : null; wrap.dijeda = () => dijeda;
    // v8.1 papan mode ujian: wrap.raguBersama() → { nama: bool } (semua peserta)
    wrap.raguBersama = ujianB ? () => { const o = {}; pesertaB.forEach(n => { o[n] = !!rb[n]; }); return o; } : null;
    // setelah terpasang: fokus fieldset opsi agar pintasan A–D langsung berfungsi (mode ulas: hanya bila diminta).
    // Bila view meletakkan judul tepat di atas soal (mis. h1 "Soal 3 dari 8") dan memfokuskannya, fokus dibiarkan di judul
    // dan judul itu ikut meneruskan A–D ke soal ini (tetap terbatas pada komponen soal, bukan pintasan global).
    const mauFokus = opsi.fokus === true || (opsi.fokus !== false && !hanyaBaca);
    setelahPasang(() => {
      if (!wrap.isConnected) return;
      const judul = wrap.previousElementSibling; const adaJudul = !!judul && /^H[1-6]$/.test(judul.tagName);
      if (adaJudul && !terkunci) judul.addEventListener('keydown', e => {
        if (terkunci || !wrap.isConnected || wrap.previousElementSibling !== judul) return;
        if (e.ctrlKey || e.metaKey || e.altKey || e.isComposing || !e.key || e.key.length !== 1) return;
        if (bersama) { pintasBersama(e); return; }
        const k = e.key.toUpperCase();
        if (TOMBOL_YAKIN[k] && segPra && !segPra.hidden) { if (pintasanAktif()) { e.preventDefault(); aturYakin(keyakinan === TOMBOL_YAKIN[k] ? null : TOMBOL_YAKIN[k], true); } return; }
        if (k === 'T' && bisaTidakTahu) { e.preventDefault(); tidakTahu(); return; }
        if (HURUF.includes(k) && labels[k]) { e.preventDefault(); pilih(k, true); }
      });
      if (!mauFokus || (adaJudul && document.activeElement === judul)) return;
      if (bolehFokus(fs)) fokus(fs);
    });
    return wrap;
  };

  // rincian satu baris peta formulir dalam dialog (tanpa meninggalkan soal yang sedang dikerjakan)
  // ent: hasil UKP.formulirBaris(kode) → { formulir, bagian, baris }
  function labelBarisFormulir(ent) {
    const f = ent.formulir || {}, b = ent.bagian || {}, x = ent.baris || {};
    const m = /\(([^()]+)\)\s*$/.exec(f.nama || ''); const form = m ? m[1] : (f.id || '');
    const bagian = String(b.nama || '').split(' — ')[0];
    return [form, [bagian, x.nomor ? 'baris ' + x.nomor : null].filter(Boolean).join(' ')].filter(Boolean).join(' · ');
  }
  function dialogBarisFormulir(ent, ketTutup) {
    const f = ent.formulir || {}, b = ent.bagian || {}, x = ent.baris || {};
    const t = x.topik ? K.topik(x.topik) : null;
    const baris = (dt, dd) => dd ? [h('dt', null, dt), h('dd', null, dd)] : null;
    return UKP.dialog({ judul: 'Baris ' + (x.nomor || x.kode) + (x.label ? ' · ' + x.label : ''), isi: dlg => h('div', { class: 'stack' },
      h('p', { class: 'meta' }, [f.nama || f.id, b.nama].filter(Boolean).join(' · ')),
      h('div', { class: 'formulir-baris' }, h('dl', null,
        baris('Label', x.label || null), baris('Isi', x.isi || null), baris('Sumber angka', x.sumberAngka || null),
        baris('Pasal', x.pasal ? UKP.c.cite({ pasal: x.pasal, berlakuSejak: x.berlakuSejak || null }) : null),
        baris('Topik', t ? t.id + ' ' + t.judul : x.topik || null)),
        x.jebakan ? h('p', { class: 'jebakan' }, h('strong', null, 'Jebakan: '), x.jebakan) : null),
      h('p', { class: 'tiny muted' }, ketTutup),
      // tanpa autofocus: fokus awal di tombol Tutup pada kop sehingga dialog terbuka dari atas (judul baris terlihat)
      h('div', { class: 'btn-row' }, h('button', { type: 'button', class: 'btn btn-primary', onclick: () => dlg.close() }, 'Kembali ke soal'))) });
  }

  // panel umpan balik V6 (bukan live region; pengumuman ringkas lewat p[role=status] di UKP.c.soal). Blok berurutan
  // dipisah garis halus: status (ikon tergambar + "Benar."/"Kurang tepat." + keterangan jawaban dalam satu kalimat) ·
  // kalimat inti · jejak hitung (terbuka di desktop) · dasar hukum · mengapa opsi lain keliru · kaki (sebab + waktu)
  // opsiU: { kartu: {id, baru, perubahan} | null, konteks, hanyaBaca, keyakinan: 'yakin'|'ragu'|'menebak'|null } — teks kartu otomatis
  // hanya bila kartu benar-benar dibuat; keyakinan (Momen 2) tampil sebagai kombinasi di kop (status), tanpa mengubah penilaian
  // v9.2 G1: hasil satu soal latihan bersama setelah kunci jawaban dibuka, dipakai papan (bukaKunci) dan mode lihat lagi (views-belajar).
  // UKP.c.hasilBersama(soal, nama[], per { nama: { opsi|o, keyakinan|k } }, { tri, jam, sudahLanjut() }) →
  //   { status (p.status-bersama), triase (div.triase-bersama | null), hasil 'benar'|'salah'|'sebagian', teks (pembaca layar), ringkas ("3 dari 5 yang menjawab benar"), tBahas, mulaiBahas }
  // Satu cara menghitung: yang dihitung hanya yang menjawab; yang tidak menjawab ditulis terpisah. Ikon silang hanya bila tak ada yang benar.
  const NADA_KELAS = { dikuasai: 'ok', rapuh: 'info', terbelah: 'warn', tersandung: 'attn' };
  UKP.c.hasilBersama = function (soal, nama, per, o) {
    o = o || {}; per = per || {}; nama = Array.isArray(nama) && nama.length ? nama : Object.keys(per);
    const kunci = soal.kunci;
    const jw = n => { const x = per[n] || {}; const v = typeof x === 'string' ? x : (x.opsi != null ? x.opsi : x.o); return v && v !== '-' ? String(v).toUpperCase() : '-'; };
    const benar = nama.filter(n => jw(n) === kunci), salah = nama.filter(n => jw(n) !== '-' && jw(n) !== kunci);
    // v9.2 (V9 S3): pemimpin yang tidak menjawab tidak disebut (tri.tidakMenjawab sudah tanpa pemimpin; cadangan: o.pemimpin)
    const pem = String(o.pemimpin || '').toLowerCase();
    const kosong = o.tri && Array.isArray(o.tri.tidakMenjawab) ? o.tri.tidakMenjawab.filter(n => nama.includes(n) || nama.some(x => x.toLowerCase() === String(n).toLowerCase()))
      : nama.filter(n => jw(n) === '-' && !(pem && n.toLowerCase() === pem));
    const nJawab = benar.length + salah.length;
    const hasil = nJawab && !salah.length ? 'benar' : nJawab && !benar.length ? 'salah' : 'sebagian';
    const ringkas = nJawab ? benar.length + ' dari ' + nJawab + ' yang menjawab benar' : 'Tidak ada yang menjawab';
    const baris = [ringkas, salah.length ? 'Salah: ' + salah.map(n => n + ' (' + jw(n) + ')').join(', ') : null, kosong.length ? 'Tidak menjawab: ' + kosong.join(', ') : null].filter(Boolean);
    let ikonSt = null;
    if (hasil !== 'sebagian') { ikonSt = ikon(hasil === 'benar' ? 'cek-lingkar' : 'x-lingkar', 'status-ikon'); ikonSt.setAttribute('data-hasil', hasil); }
    const status = h('p', { class: 'status blok status-besar status-bersama', tabindex: '-1', 'data-hasil': hasil }, ikonSt,
      h('span', null, h('strong', null, 'Jawaban benar: ' + kunci), baris.map(t => h('span', { class: 'status-ket status-baris' }, t))));
    const tri = o.tri || null; let triase = null, tBahas = null, mulaiBahas = 0;
    // v9.2 (V9 S5): tidak ada yang menjawab → tanpa pil dan tanpa "Waktu bahas" (baris status sudah menyebutnya)
    if (tri && tri.nJawab !== 0) {
      if (tri.kelas === 'dikuasai') triase = h('div', { class: 'triase-bersama blok', 'data-kelas': tri.kelas }, h('p', { class: 'triase-baris' }, h('span', { class: 'triase-saran' }, 'Lanjut ke soal berikutnya.')));
      else {
        const jam = o.jam ? h('span', { class: 'triase-bahas', role: 'timer', 'aria-live': 'off', title: 'Lama pembahasan soal ini' }, 'Waktu bahas 0:00') : null;
        const al = tri.alasan;
        triase = h('div', { class: 'triase-bersama blok', 'data-kelas': tri.kelas },
          h('p', { class: 'triase-baris' }, h('span', { class: 'pill', 'data-tone': NADA_KELAS[tri.kelas] || null }, tri.label), h('strong', { class: 'triase-saran' }, tri.saran), jam),
          al && (al.label || al.teks) ? h('p', { class: 'triase-alasan' }, h('span', { class: 'triase-ket' }, 'Kenapa ' + al.opsi + ' keliru: '), [al.label, al.teks].filter(Boolean).join(' — ')) : null,
          tri.yakinSalah && tri.yakinSalah.length ? h('p', { class: 'triase-yakin' }, h('span', { class: 'triase-ket' }, 'Yakin tapi salah: '), tri.yakinSalah.join(', ')) : null);
        if (jam) {
          mulaiBahas = Date.now();
          const tik = () => {
            if ((typeof o.sudahLanjut === 'function' && o.sudahLanjut()) || !jam.isConnected && Date.now() - mulaiBahas > 5000) { clearInterval(tBahas); return; }
            const d = Math.floor((Date.now() - mulaiBahas) / 1000); jam.textContent = 'Waktu bahas ' + Math.floor(d / 60) + ':' + String(d % 60).padStart(2, '0');
          };
          tBahas = setInterval(tik, 1000);
        }
      }
    }
    const teks = 'Jawaban benar: ' + kunci + '. ' + baris.join('. ') + '.' + (tri && tri.kelas !== 'dikuasai' && tri.nJawab !== 0 ? ' ' + tri.saran + '.' : '');
    return { status, triase, hasil, teks, ringkas, tBahas, mulaiBahas };
  };
  UKP.c.umpan = function (soal, dipilih, detik, opsiU) {
    opsiU = opsiU || {};
    const tidakTahu = dipilih === '-';
    const kosong = !dipilih || dipilih === 'kosong' || dipilih === '-';
    const benar = !kosong && dipilih === soal.kunci; const pb = soal.pembahasan || {};
    const tag = !benar && !kosong ? (soal.jebakanOpsi || {})[dipilih] : null;
    const hasil = benar ? 'benar' : tidakTahu ? 'info' : 'salah';
    let ket = '';
    if (benar) ket = '';
    else if (kosong) ket = 'Kunci jawaban ' + soal.kunci + '.';
    else if (tag === 'angka-usang') ket = 'Jawaban ' + dipilih + ' memakai ketentuan lama; menurut ketentuan yang berlaku kuncinya ' + soal.kunci + '.';
    else ket = 'Jawaban Anda ' + dipilih + '; kunci ' + soal.kunci + '.';
    // jawab langsung (v7.7): baris pertama besar "Benar" / "Salah · kunci B"; keterangan hanya untuk jawaban berketentuan lama
    const langsung = !!opsiU.langsung && !opsiU.hanyaBaca;
    // bila tidak benar, teks opsi kunci ikut disebut ("Kunci C: Rp64.400.000") agar jawaban terlihat walau opsi sudah di luar layar
    if (langsung) {
      const teksKunci = !benar && soal.opsi && soal.opsi[soal.kunci] != null ? String(soal.opsi[soal.kunci]).trim() : '';
      const kunciRingkas = teksKunci.length > 160 ? teksKunci.slice(0, Math.max(100, teksKunci.lastIndexOf(' ', 160))).replace(/[\s,.;:]+$/, '') + ' …' : teksKunci;
      ket = [kunciRingkas ? 'Kunci jawaban ' + soal.kunci + ': ' + kunciRingkas.replace(/[.]+$/, '') + '.' : '', tag === 'angka-usang' ? 'Jawaban ' + dipilih + ' memakai ketentuan lama.' : ''].filter(Boolean).join(' ');
    }
    const judulStatus = langsung ? (benar ? 'Benar' : (tidakTahu ? 'Belum tahu' : kosong ? 'Tidak dijawab' : 'Salah') + (/^Kunci [A-D]: /.test(ket) ? '' : ' · kunci ' + soal.kunci))
      : benar ? 'Benar.' : tidakTahu ? 'Belum tahu.' : kosong ? 'Tidak dijawab.' : 'Kurang tepat.';
    const ikonStatus = ikon(benar ? 'cek-lingkar' : tidakTahu ? 'info' : 'x-lingkar', 'status-ikon');
    ikonStatus.setAttribute('data-hasil', hasil);
    // kop: kombinasi keyakinan × hasil ("Yakin tetapi keliru" attn + ikon segitiga, "Menebak dan benar" warn, dst.)
    const kombo = kosong ? null : komboYakin(opsiU.keyakinan, benar);
    const komboEl = kombo ? elKombo(opsiU.keyakinan, benar) : null;
    const status = h('p', { class: 'status blok' + (langsung ? ' status-besar' : ''), tabindex: langsung ? '-1' : null }, ikonStatus, h('span', null, h('strong', { 'data-hasil': hasil }, judulStatus), ket ? h('span', { class: 'status-ket' }, ' ' + ket) : null, komboEl));
    // kalimat inti (fokus setelah Periksa; Enter di sini = Lanjut)
    const inti = h('p', { class: 'inti blok', tabindex: '-1' }, (pb.inti || '').trim() || ket || (langsung ? 'Kunci jawaban ' + soal.kunci + '.' : judulStatus));
    const salahLain = HURUF.filter(k => k !== soal.kunci && pb.mengapaSalah && pb.mengapaSalah[k]);
    let jejak = null;
    if (pb.jejakHitung && pb.jejakHitung.length) {
      let tbl = UKP.c.jejak(pb.jejakHitung);
      if (tbl && tbl.tagName === 'TABLE') tbl = UKP.c.tabelWrap ? UKP.c.tabelWrap('Jejak hitung', tbl) : h('div', { class: 'tabel-wrap', tabindex: '0', role: 'region', 'aria-label': 'Jejak hitung' }, tbl);
      jejak = h('details', { class: 'lipat blok', open: !benar || cocok('(min-width: 1024px)') || opsiU.hanyaBaca ? true : null }, h('summary', null, 'Jejak hitung · ' + pb.jejakHitung.length + ' langkah'), tbl);
    }
    // dasar hukum (K-03): satu pasal per baris, sans; tanggal berlaku sebagai .meta; status per tanggal di title (tanpa titik yatim)
    // jawab langsung: dasar hukum sebagai lipatan "Dasar hukum" (urutan: mengapa opsi lain salah › jejak hitung › dasar hukum)
    const citeIsi = dasarHukumEl(soal.dasarHukum, langsung ? '' : 'blok');
    const cite = langsung && citeIsi ? h('details', { class: 'lipat blok lipat-dasar' }, h('summary', null, 'Dasar hukum'), citeIsi) : citeIsi;
    // tautan kembali ke topik soal (bukan saat sesi/diagnosis/cek di topik itu sendiri, dan bukan selama simulasi berjalan)
    const topik = K.topik(soal.topik);
    const bisaPelajari = topik && UKP.link && !['sesi', 'diagnosis', 'cek', 'tutor', 'simulasi'].includes(opsiU.konteks) && !(typeof UKP.simulasiBerjalan === 'function' && UKP.simulasiBerjalan());
    const pelajariEl = bisaPelajari ? h('p', { class: 'small blok pelajari-lagi' }, UKP.link(['Pelajari lagi: ' + topik.id + ' ' + topik.judul, ikon('chevron-kanan', null, true)], 'topik', { id: topik.id })) : null;
    const infoKartu = opsiU.kartu && opsiU.kartu.baru ? opsiU.kartu : null;
    // "Yakin tetapi keliru": baris kartu ditonjolkan tepat di bawah kop (bukan di kaki panel)
    const kartuDitonjolkan = !!(kombo && opsiU.keyakinan === 'yakin' && !benar);
    let kartuEl = null;
    if (infoKartu) {
      // baris pemberitahuan kartu (pengganti toast di HP): "Kartu dari soal ini masuk dek Ulang · Urungkan". Setelah diurungkan
      // fokus pindah ke baris itu sendiri (tombol hilang; fokus tidak jatuh ke body) dan tanpa toast yang menutupi bar aksi
      kartuEl = h('p', { class: (kartuDitonjolkan ? 'small' : 'tiny muted') + ' kartu-info blok' }, infoKartu.perubahan ? 'Kartu dari soal ini masuk dek Ulang dan Dek Perubahan.' : 'Kartu dari soal ini masuk dek Ulang.', ' ',
        UKP.belajar.hapusKartuOtomatis ? h('button', { type: 'button', class: 'btn btn-text btn-sm', 'aria-label': 'Urungkan kartu dari soal ini', onclick: () => {
          if (!UKP.belajar.hapusKartuOtomatis(infoKartu.id)) return;
          kartuEl.replaceChildren('Kartu dibatalkan. Soal tetap tercatat di Buku Kesalahan.'); kartuEl.tabIndex = -1; fokus(kartuEl);
        } }, 'Urungkan') : null);
    }
    // peta formulir (soal baris SPT): saat simulasi berjalan atau di tengah sesi/diagnosis/latihan/cek, rincian baris dibuka
    // dalam dialog agar alur soal tidak ditinggalkan (Kembali tidak menampilkan soal yang sama lagi); navigasi penuh hanya di mode ulas/hanya baca
    let formulirEl = null;
    if (soal.formulirRef) {
      const berjalan = typeof UKP.simulasiBerjalan === 'function' && !!UKP.simulasiBerjalan();
      const ulas = !!opsiU.hanyaBaca || !opsiU.konteks || opsiU.konteks === 'ulas';
      const ent = typeof UKP.formulirBaris === 'function' ? UKP.formulirBaris(soal.formulirRef) : null;
      // label manusiawi "1770 S · Induk A–B baris 12" (bukan kunci data 1770S.induk.12, D9); tanpa label bila baris tak ditemukan
      const kodeEl = ent ? h('span', { class: 'meta' }, labelBarisFormulir(ent)) : null;
      if (!berjalan && ulas) {
        if (UKP.views && typeof UKP.views.formulir === 'function') formulirEl = h('p', { class: 'small tautan-formulir blok' }, UKP.link('Lihat di peta formulir', 'formulir', { baris: soal.formulirRef }), ' ', kodeEl);
      } else if (ent) {
        const alur = berjalan ? 'simulasi' : { latih: 'latihan', cek: 'cek pemahaman', sesi: 'sesi', diagnosis: 'diagnosis' }[opsiU.konteks];
        const ketTutup = 'Peta formulir lengkap bisa dibuka dari menu Alat' + (alur ? ' setelah ' + alur + ' selesai.' : '.');
        formulirEl = h('p', { class: 'small tautan-formulir blok' }, h('button', { type: 'button', class: 'btn btn-text btn-sm', 'aria-haspopup': 'dialog', onclick: () => dialogBarisFormulir(ent, ketTutup) }, 'Lihat di peta formulir'), ' ', kodeEl);
      }
    }
    // kaki: pill jenis kesalahan + waktu pengerjaan dibandingkan anggaran waktu soal
    const anggaran = Number(soal.anggaranDetik) || 150;
    const waktuTeks = detik > 0 ? 'Waktu Anda ' + fmtDetik(detik) + ' · target ' + fmtDetik(anggaran) + (detik > anggaran ? ' · lewat ' + fmtDetik(detik - anggaran) : '') : null;
    const kaki = tag || waktuTeks ? h('p', { class: 'umpan-kaki blok' },
      tag ? h('span', { class: 'pill tag-sebab', 'data-tone': 'warn', title: 'Jenis kesalahan' }, h('span', { class: 'visually-hidden' }, 'Jenis kesalahan: '), UKP.tagLabel(tag)) : null,
      waktuTeks ? h('span', { class: 'meta waktu-soal' }, waktuTeks) : null) : null;
    const bukaSalah = langsung && !benar && !kosong && !!(pb.mengapaSalah && pb.mengapaSalah[dipilih]); // jawab langsung & salah: alasan opsi yang dipilih langsung terlihat
    const lipatSalah = salahLain.length || pb.jebakan ? h('details', { class: 'lipat blok', open: bukaSalah ? true : null }, h('summary', null, langsung ? 'Mengapa opsi lain salah' : 'Mengapa opsi lain keliru'), h('ul', { class: 'bersih small' }, (bukaSalah ? [dipilih].concat(salahLain.filter(k => k !== dipilih)) : salahLain).map(k => h('li', { 'data-dipilih': bukaSalah && k === dipilih ? '' : null }, h('strong', null, k + '. '), pb.mengapaSalah[k]))), pb.jebakan ? h('p', { class: 'small' }, h('strong', null, 'Jebakan: '), pb.jebakan) : null) : null;
    const panel = h('div', { class: 'umpan', 'data-hasil': hasil, 'data-langsung': langsung ? '' : null },
      status,
      kartuDitonjolkan ? kartuEl : null,
      inti,
      langsung ? lipatSalah : null,
      jejak,
      cite,
      langsung ? null : lipatSalah,
      formulirEl,
      pelajariEl,
      detik > 240 && benar ? h('p', { class: 'tiny muted blok' }, 'Benar, tetapi memakan ' + U.menitDetik(detik) + '. Di ujian anggaran per soal ± 2,5 menit; cari jalan pintas hitung di jejak di atas.') : null,
      kaki,
      kartuDitonjolkan ? null : kartuEl,
    );
    return panel;
  };

  // ---------- flashcard ----------
  // opsi: { onNilai(nilai, state), nomor, total, tinjau (nilai tidak mengubah jadwal SRS), fokus (default true) }
  UKP.c.flash = function (kartu, opsi) {
    opsi = opsi || {}; const st = UKP.srs.state(kartu.id); const tinjau = !!opsi.tinjau;
    const topik = K.topik(kartu.topik);
    const label = opsi.nomor && opsi.total ? 'Kartu ' + opsi.nomor + ' dari ' + opsi.total : 'Kartu';
    // kartu berikutnya masuk pudar + naik 8 px (.kartu-masuk); keluar ±8 px sesuai nilai (Lupa ke kiri: kembali ke antrean)
    const card = h('div', { class: 'flash' + (opsi.masuk !== false && gerak() ? ' kartu-masuk' : ''), role: 'group', 'aria-roledescription': 'kartu', 'aria-label': label, tabindex: '0' });
    card.addEventListener('animationend', e => { if (e.target === card) card.classList.remove('kartu-masuk'); });
    const asalAngka = kartu.asal === 'poin' || kartu.asal === 'lembar' || /^KA-(poin|angka|lembar)-/.test(String(kartu.id));
    const meta = [kartu.kode, topik ? topik.judul : null, kartu.sumber === 'otomatis' ? (asalAngka ? 'dari angka kunci' : 'dari soal yang keliru') : null].filter(Boolean).join(' · ');
    const depan = h('div', { class: 'flash-sisi depan' }, h('div', { class: 'meta' }, meta), h('p', { class: 'flash-teks' }, kartu.depan), h('p', { class: 'small muted' }, 'Ketuk kartu atau tekan Spasi untuk membalik.'));
    const idBelakang = 'flash-' + String(kartu.id).replace(/[^\w-]/g, '') + '-' + Math.random().toString(36).slice(2, 6);
    const belakang = h('div', { class: 'flash-sisi belakang', id: idBelakang, hidden: true },
      h('div', { class: 'meta' }, 'Jawaban'),
      h('p', { class: 'small muted flash-tanya' }, kartu.depan),
      h('p', { class: 'flash-teks' }, kartu.belakang),
      kartu.menggantikan ? h('p', { class: 'small' }, h('span', { class: 'pill', 'data-tone': 'warn' }, 'dulu'), ' ', kartu.menggantikan) : null,
      kartu.dasar ? dasarHukumEl({ pasal: kartu.dasar, berlakuSejak: kartu.berlakuSejak }) : null);
    const inner = h('div', { class: 'flash-inner' }, depan, belakang);
    // tombol utama "Balik kartu" (primer besar, kbd Spasi); setelah dibalik menjadi tombol hantu "Lihat depan"
    const labelBalik = teks => [teks, h('kbd', { 'aria-hidden': 'true' }, 'Spasi')];
    const tombolBalik = h('button', { type: 'button', class: 'btn btn-primary btn-lg btn-block flash-balik', 'aria-expanded': 'false', 'aria-controls': idBelakang, 'aria-keyshortcuts': 'Space', onclick: e => { lewatPointer = e.detail > 0; balik(); } }, labelBalik('Balik kartu'));
    // pratinjau interval dari mesin SRS (kartu baru + Ingat → 1 hari)
    const lbl = n => UKP.srs.labelInterval(UKP.srs.berikut ? UKP.srs.berikut(kartu.id, n) : (n === 'lupa' ? 0 : Math.min(st.tangga + (n === 'mudah' ? 2 : 1), 7)));
    // K-09: tombol nilai menjadi aksi utama sisi belakang (tinggi 56, garis atas bernada); label sans + interval mono (.sub)
    const NADA_NILAI = { lupa: 'attn', ingat: 'ok', mudah: 'info' };
    const tombolNilai = (n, teks, kunci) => h('button', { type: 'button', class: 'btn', 'data-nilai': n, 'data-nada': NADA_NILAI[n], 'aria-keyshortcuts': kunci, onclick: e => { UKP.c.flash.lewatPointer = e.detail > 0; beri(n); } },
      h('span', { class: 'label nilai-label' }, teks, h('kbd', { 'aria-hidden': 'true' }, kunci)), tinjau ? null : h('span', { class: 'visually-hidden' }, ' · berikutnya '), tinjau ? null : h('span', { class: 'sub' }, lbl(n)));
    const nilai = h('div', { class: 'nilai-kartu flash-nilai', role: 'group', 'aria-label': 'Nilai ingatan', hidden: true },
      tombolNilai('lupa', 'Lupa', '1'),
      tombolNilai('ingat', 'Ingat', '2'),
      tombolNilai('mudah', 'Mudah', '3'));
    let pakaiKeyboard = false; try { pakaiKeyboard = !!(root.matchMedia && root.matchMedia('(hover: hover) and (pointer: fine)').matches); } catch (e) {}
    const catatan = tinjau || pakaiKeyboard ? h('p', { class: 'tiny muted', hidden: true }, (tinjau ? 'Mode tinjau: penilaian tidak mengubah jadwal kartu. ' : '') + (pakaiKeyboard ? 'Pintasan: 1 Lupa · 2 Ingat · 3 Mudah · Spasi membalik.' : '')) : null;
    const live = h('p', { class: 'visually-hidden', role: 'status' });
    let terbuka = false; let selesai = false;
    // K-20: fokus programatik setelah klik/ketuk tidak menggambar cincin (focusVisible: false); lewat papan ketik tetap tampak
    let lewatPointer = false;
    const fokusTenang = el => { if (!el) return; try { el.focus({ preventScroll: true, focusVisible: false }); } catch (e) { fokus(el); } };
    // alat kecil kanan atas kartu: Lihat depan (hanya sisi belakang) · Dengarkan
    const lihatDepan = h('button', { type: 'button', class: 'icon-btn sm', 'aria-label': 'Lihat depan', title: 'Lihat depan', hidden: true, onclick: e => { if (terbuka) { lewatPointer = e.detail > 0; balik(); } } }, ikon('atur-ulang', null, true));
    const alat = h('div', { class: 'flash-alat', style: { position: 'absolute', top: '8px', right: '8px', zIndex: '1', display: 'flex', gap: '4px' } }, lihatDepan);
    card.style.position = 'relative';
    function balik() {
      if (selesai) return;
      terbuka = !terbuka; card.classList.toggle('terbuka', terbuka); belakang.hidden = !terbuka;
      // sisi depan disembunyikan dari pembaca layar saat kartu terbuka
      if (terbuka) depan.setAttribute('aria-hidden', 'true'); else depan.removeAttribute('aria-hidden');
      // DESAIN-V7 P3-02: sisi belakang hanya punya satu kelompok aksi menonjol (nilai); "Balik kartu" disembunyikan dan
      // "Lihat depan" menjadi ikon kecil di kanan atas kartu. Fokus pindah ke "Ingat" (Spasi di dalam kartu tetap membalik,
      // tidak pernah menilai: lihat penangan keydown di bawah)
      const fokusDiNilai = nilai.contains(document.activeElement);
      tombolBalik.setAttribute('aria-expanded', String(terbuka)); tombolBalik.hidden = terbuka; lihatDepan.hidden = !terbuka;
      nilai.hidden = !terbuka; if (catatan) catatan.hidden = !terbuka;
      live.textContent = terbuka ? 'Jawaban: ' + kartu.belakang : '';
      const keFokus = lewatPointer ? fokusTenang : fokus; lewatPointer = false;
      if (terbuka) keFokus(nilai.querySelector('[data-nilai="ingat"]')); else if (fokusDiNilai || document.activeElement === lihatDepan || document.activeElement === document.body) keFokus(tombolBalik);
    }
    function beri(n) {
      if (selesai || !terbuka) return; selesai = true;
      try { if (root.speechSynthesis) root.speechSynthesis.cancel(); } catch (e) {}
      const s = tinjau ? null : UKP.srs.nilai(kartu.id, n);
      if (!opsi.onNilai) return;
      // kartu lama keluar 120 ms (Lupa ke kiri, Ingat/Mudah ke kanan) lalu pemanggil menggambar kartu berikutnya
      if (!gerak()) { opsi.onNilai(n, s); return; }
      card.classList.remove('kartu-masuk'); card.dataset.keluar = n === 'lupa' ? 'kiri' : 'kanan';
      let sudah = false; const lanjut = () => { if (sudah) return; sudah = true; opsi.onNilai(n, s); };
      card.addEventListener('animationend', e => { if (e.target === card) lanjut(); }); setTimeout(lanjut, 220);
    }
    inner.addEventListener('click', () => { lewatPointer = true; balik(); });
    card.append(alat, inner, h('div', { class: 'stack-sm', style: { marginTop: '12px' } }, tombolBalik, nilai, catatan, st.leech ? h('p', { class: 'tiny', style: { color: 'var(--warn)' } }, 'Kartu ini sering terlupa (leech). Baca ulang topiknya sebelum menilai lagi.') : null), live);
    // Spasi membalik di mana pun dalam kartu (termasuk saat fokus di tombol) dan tidak pernah menilai; nilai hanya lewat klik atau 1/2/3
    const spasiAsli = t => !!(t && t.closest && t.closest('[data-spasi="asli"]'));
    card.addEventListener('keydown', e => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return;
      const t = e.target;
      if (e.key === ' ' || e.key === 'Spacebar') { if (spasiAsli(t)) return; e.preventDefault(); if (!e.repeat) balik(); return; }
      if (e.key === 'Enter' && (t === card || t === inner)) { e.preventDefault(); balik(); return; }
      if (terbuka && ['1', '2', '3'].includes(e.key)) { e.preventDefault(); UKP.c.flash.lewatPointer = false; beri(['lupa', 'ingat', 'mudah'][Number(e.key) - 1]); }
    });
    // cegah aktivasi tombol oleh Spasi (klik dipicu saat keyup)
    card.addEventListener('keyup', e => { if ((e.key === ' ' || e.key === 'Spacebar') && !spasiAsli(e.target)) e.preventDefault(); });
    if (UKP.store.get().pengaturan.tts && 'speechSynthesis' in root) {
      alat.appendChild(h('button', { type: 'button', class: 'icon-btn sm', 'data-spasi': 'asli', 'aria-label': 'Dengarkan', title: 'Dengarkan', onclick: () => UKP.ucap((kartu.depan) + '. ... Jawaban: ' + kartu.belakang + '. Dasar: ' + kartu.dasar) }, ikon('suara', null, true)));
    }
    // fokus awal ke tombol Balik (bukan wadah kartu: tanpa cincin fokus tebal mengelilingi seluruh kartu, T27)
    if (opsi.fokus !== false) setelahPasang(() => { if (bolehFokus(tombolBalik)) fokusTenang(tombolBalik); });
    card.fokusAwal = tombolBalik;
    return card;
  };
  UKP.ucap = function (teks) { try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(teks); u.lang = 'id-ID'; u.rate = .95; speechSynthesis.speak(u); } catch (e) {} };
})(typeof window !== 'undefined' ? window : globalThis);
