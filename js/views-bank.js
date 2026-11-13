/* MABAR UKP, v9.5: halaman Bank soal (#bank): soal yang belum dipakai, soal pengganti yang siap, dan soal yang sudah dipakai
   (dibahas atau dilatih bersama, diujikan, dilatih sendiri) untuk tingkat target, per kelompok materi dan per butir materi resmi.
   Angka dari UKP.belajar.pakai.ringkas (catatan di perangkat ini); butir dari UKP.konten.soalButir (js/data/peta-butir.js). */
(function (root) {
  const UKP = root.UKP; const h = UKP.h; const K = UKP.konten; const L = UKP.belajar;
  const ikon = (n, c, d) => UKP.icon(n, c, d);
  const angka = n => UKP.fmt && UKP.fmt.angka ? UKP.fmt.angka(n) : String(n);
  const pendek = (t, n) => { t = String(t || ''); if (t.length <= n) return t; const p = t.lastIndexOf(' ', n - 1); return t.slice(0, p > n * .6 ? p : n - 1).replace(/[\s,.;:]+$/, '') + '…'; };
  const ringkas = arr => L && L.pakai && L.pakai.ringkas ? L.pakai.ringkas(arr) : { total: arr.length, baru: arr.length, penggantiSiap: 0, terpakai: 0, bersama: 0, ujian: 0, sendiri: 0 };
  // teks angka satu baris: "301 belum dipakai · 37 pengganti siap · 74 sudah dipakai"
  const teksTiga = r => [angka(r.baru) + ' belum dipakai', angka(r.penggantiSiap) + ' pengganti siap', angka(r.terpakai) + ' sudah dipakai'].join(' · ');
  // v9.5 soal pengganti yang belum dapat giliran (satu soal per keluarga), agar angka menjumlah ke jumlah soal
  const nTunggu = r => L && L.pakai && L.pakai.menunggu ? L.pakai.menunggu(r) : 0;
  const teksTunggu = r => { const n = nTunggu(r); return n ? angka(n) + ' soal pengganti menunggu giliran.' : ''; };
  // batang tiga bagian (belum dipakai, pengganti siap, sudah dipakai); lebar sebanding, angka lengkap ada di teks sebelahnya
  function batangTiga(r) {
    const jml = r.baru + r.penggantiSiap + r.terpakai;
    const bagian = (nama, n) => n > 0 ? h('span', { 'data-bagian': nama, style: { flexGrow: String(n) } }) : null;
    return h('span', { class: 'bank-batang', 'aria-hidden': 'true', 'data-kosong': jml ? null : '' }, bagian('baru', r.baru), bagian('pengganti', r.penggantiSiap), bagian('pakai', r.terpakai));
  }
  const legenda = () => h('ul', { class: 'bank-legenda', 'aria-hidden': 'true' },
    [['baru', 'Belum dipakai'], ['pengganti', 'Pengganti siap'], ['pakai', 'Sudah dipakai']].map(([k, t]) => h('li', { 'data-bagian': k }, t)));
  // v9.5 nama kelompok boleh patah setelah garis miring (mis. "Pemotongan/Pemungutan" di layar 320)
  const namaPatah = t => String(t || '').split('/').flatMap((x, i) => i ? ['/', h('wbr'), x] : [x]);
  const keLatih = p => UKP.go('latih', Object.assign({ atur: 1 }, p));
  const tile = o => UKP.viz && UKP.viz.statTile ? UKP.viz.statTile(o) : h('div', { class: 'stat' }, h('span', { class: 'label' }, o.label), h('span', { class: 'nilai' }, String(o.nilai)), o.sub ? h('span', { class: 'tiny muted' }, o.sub) : null);

  // v9.5.5 K-2: label aksesibilitas tombol "Latih butir ini" = pembantu Cakupan (UKP.cakupan.labelLatih: nama subjek ditambahkan hanya bila
  // label dasarnya ganda di tingkat itu); tanpa pembantu itu: label lama
  const labelLatih = (b, tingkat, no) => UKP.cakupan && typeof UKP.cakupan.labelLatih === 'function' ? UKP.cakupan.labelLatih(b, tingkat) : 'Latih butir ' + (no || b.id) + ': ' + pendek(b.teks, 60);
  UKP.c.labelLatihBank = labelLatih;
  // ---------- per butir materi resmi (tingkat target) ----------
  function bagianButir(tingkat) {
    const C = UKP.cakupanResmi; const T = C && C.tingkat && C.tingkat[tingkat];
    const lipat = isi => h('details', { class: 'lipat bank-butir' }, h('summary', null, 'Per butir materi resmi'), isi);
    if (!T || !K.adaPetaButir || !K.adaPetaButir()) return lipat(h('p', { class: 'small muted' }, 'Peta butir belum tersedia.'));
    const CK = UKP.cakupan || {};
    const telusur = typeof CK.telusuri === 'function' ? CK.telusuri : function jalan(arr, cb, jalur) { for (const b of arr || []) { const j = (jalur || []).concat(b); cb(b, j); jalan(b.anak, cb, j); } };
    const isi = T.mataUjian.map(m => {
      const daun = [];
      for (const sj of m.subjek || []) telusur(sj.butir, b => { if (!(Array.isArray(b.anak) && b.anak.length)) daun.push(b); });
      if (!daun.length) return null;
      let nTanpa = 0;
      const baris = daun.map(b => {
        const info = typeof CK.butir === 'function' ? CK.butir(b.id) : null;
        const arr = K.soalButir(b.id, tingkat); const r = ringkas(arr);
        if (!arr.length) nTanpa++;
        const no = info && info.nomor ? info.nomor : (b.nomor || '');
        return h('li', { class: 'bank-butir-baris', 'data-kosong': arr.length ? null : '' },
          h('span', { class: 'bank-butir-teks' }, no ? h('span', { class: 'mono bank-butir-no' }, no) : null, h('span', { title: info ? info.teks : b.teks }, pendek(b.teks, 120))),
          arr.length ? h('span', { class: 'meta' }, angka(arr.length) + ' soal · ' + angka(r.baru) + ' belum dipakai' + (nTunggu(r) ? ' · ' + angka(nTunggu(r)) + ' pengganti menunggu' : '')) : UKP.c.pill('belum ada soal', 'warn'),
          arr.length ? h('button', { type: 'button', class: 'btn btn-sm btn-ghost bank-butir-latih', 'aria-label': labelLatih(b, tingkat, no), onclick: () => keLatih({ butir: b.id }) }, 'Latih butir ini') : null);
      });
      return h('details', { class: 'lipat bank-mu' },
        h('summary', null, h('span', { class: 'bank-mu-kop' }, h('span', null, (m.no ? m.no + '. ' : '') + m.nama), h('span', { class: 'meta' }, angka(daun.length) + ' butir' + (nTanpa ? ' · ' + angka(nTanpa) + ' belum ada soal' : '')))),
        h('ol', { class: 'bersih bank-butir-daftar', role: 'list' }, baris));
    }).filter(Boolean);
    return lipat(h('div', { class: 'stack-sm' }, h('p', { class: 'small muted' }, 'Butir dari cakupan materi resmi Tingkat ' + tingkat + '. Satu soal bisa masuk lebih dari satu butir.'), isi));
  }

  // v9.5 soal tingkat target di luar daftar butir resmi + tautan Latih resmi=1 (hanya bila peta tersedia dan ada soal di luar)
  function barisResmi(tingkat, nSemua) {
    const LB = UKP.latihBank; if (!LB || !LB.adaPetaResmi || !LB.adaPetaResmi()) return null;
    const n = LB.luarResmi(tingkat).length; if (!n) return null;
    return h('p', { class: 'small bank-resmi' }, angka(n) + ' dari ' + angka(nSemua) + ' soal Tingkat ' + tingkat + ' berada di luar daftar butir resmi. ',
      h('button', { type: 'button', class: 'btn btn-text btn-sm', onclick: () => keLatih({ resmi: 1 }) }, 'Latih hanya butir resmi'));
  }

  UKP.views.bank = function () {
    const s = UKP.store.get(); const tingkat = s.profil.tingkat;
    const page = h('div', { class: 'page halaman-bank' });
    page.appendChild(UKP.c.kop({ pita: true, judul: 'Bank soal', lead: 'Soal yang belum pernah keluar dan soal pengganti untuk soal yang sudah dibahas atau diujikan.' }));
    const semua = K.semuaSoal(tingkat); const r = ringkas(semua);
    const nVersi = UKP.versi ? semua.filter(x => x.sejak && x.sejak === UKP.versi).length : 0;
    // angka ringkas tingkat target
    page.appendChild(h('section', { class: 'stack-sm bank-ringkas', 'aria-labelledby': 'bank-ringkas-j' },
      h('h2', { class: 'visually-hidden', id: 'bank-ringkas-j' }, 'Ringkasan Tingkat ' + tingkat),
      h('div', { class: 'pita-stat' },
        tile({ label: 'Jumlah soal', nilai: angka(r.total), sub: 'Tingkat ' + tingkat }),
        tile({ label: 'Belum pernah dipakai', nilai: angka(r.baru), sub: 'soal baru untuk Anda' }),
        tile({ label: 'Pengganti siap', nilai: angka(r.penggantiSiap), sub: 'untuk soal yang sudah dipakai' }),
        tile({ label: 'Sudah dipakai', nilai: angka(r.terpakai), sub: 'tercatat di perangkat ini' })),
      h('ul', { class: 'bersih small bank-rincian', 'aria-label': 'Rincian soal yang sudah dipakai' },
        h('li', null, h('span', null, 'Dibahas atau dilatih bersama'), h('strong', { class: 'mono' }, angka(r.bersama))),
        h('li', null, h('span', null, 'Diujikan'), h('strong', { class: 'mono' }, angka(r.ujian))),
        h('li', null, h('span', null, 'Dilatih sendiri'), h('strong', { class: 'mono' }, angka(r.sendiri)))),
      h('p', { class: 'meta' }, 'Satu soal bisa masuk lebih dari satu rincian.'),
      nTunggu(r) ? h('p', { class: 'small bank-tunggu' }, teksTunggu(r) + ' Soal ini keluar setelah soal lama atau pengganti sebelumnya dipakai.') : null,
      nVersi ? h('p', { class: 'small bank-versi' }, UKP.c.pill(angka(nVersi) + ' soal baru di versi ini', 'nila')) : null,
      barisResmi(tingkat, semua.length),
      h('div', { class: 'btn-row bank-aksi' },
        h('button', { type: 'button', class: 'btn btn-primary', onclick: () => keLatih({ bank: 'baru' }) }, ikon('play', null, true), 'Mulai latihan soal baru'),
        r.penggantiSiap ? h('button', { type: 'button', class: 'btn', onclick: () => keLatih({ bank: 'pengganti' }) }, ikon('repeat', null, true), 'Latih soal pengganti') : null)));
    // penjelasan singkat
    page.appendChild(h('details', { class: 'lipat bank-tentang' }, h('summary', null, 'Cara bank soal bekerja'),
      h('div', { class: 'stack-sm small teks-baca' },
        h('p', null, h('strong', null, 'Soal pengganti'), ' adalah soal baru yang menguji hal yang sama dengan soal lama. Soal ini dipakai setelah soal lamanya keluar.'),
        h('p', null, h('strong', null, 'Sudah dipakai'), ' berarti soal itu pernah dibahas atau dilatih bersama, diujikan, atau dilatih sendiri. Soal ujian tim dihitung sejak ujian dimulai. Soal simulasi dihitung saat simulasi dikirim, walau tidak dijawab. Simulasi yang dibuang tidak dihitung.'),
        h('p', null, 'Latihan baru mendahulukan soal yang belum dipakai dan soal pengganti. Satu sesi tidak memuat soal lama bersama penggantinya.'),
        h('p', null, 'Karena itu angka belum dipakai dan pengganti siap dihitung satu per soal lama. Soal pengganti lain menunggu giliran.'),
        h('p', null, 'Catatan ini tersimpan di perangkat ini. Ekspor progres ikut membawanya.'))));
    // per kelompok materi
    const kel = K.kelompok(tingkat);
    const baris = kel.map(k => {
      const rk = ringkas(K.soalKelompok(k, tingkat)); if (!rk.total) return null;
      const tid = 'bank-kel-' + k;
      return h('li', { class: 'bank-kel' },
        h('span', { class: 'bank-kel-nama', id: tid }, h('span', { class: 'kode' }, k), ' ', namaPatah(K.namaKelompok(k))),
        batangTiga(rk),
        h('span', { class: 'meta bank-kel-angka' }, angka(rk.total) + ' soal · ' + teksTiga(rk) + (nTunggu(rk) ? ' · ' + angka(nTunggu(rk)) + ' pengganti menunggu' : '')),
        h('button', { type: 'button', class: 'btn btn-sm bank-kel-latih', 'aria-describedby': tid, onclick: () => keLatih({ kode: k }) }, 'Latih'));
    }).filter(Boolean);
    page.appendChild(h('section', { class: 'stack-sm bank-kelompok', 'aria-labelledby': 'bank-kel-j' },
      h('div', { class: 'sect-head' }, h('h2', { id: 'bank-kel-j' }, 'Per kelompok materi')), legenda(),
      baris.length ? h('ul', { class: 'bersih bank-kel-daftar' }, baris) : UKP.c.kosong('Belum ada soal', 'Belum ada soal untuk Tingkat ' + tingkat + '.')));
    page.appendChild(bagianButir(tingkat));
    return page;
  };
  // satu baris ringkas untuk Kemajuan dan tempat lain: "Bank soal: 301 belum dipakai, 37 pengganti siap. Lihat bank soal"
  UKP.c.barisBank = function (tingkat) {
    if (!K || !L || !L.pakai) return null;
    const r = ringkas(K.semuaSoal(tingkat || UKP.store.get().profil.tingkat));
    return h('p', { class: 'small baris-bank' }, ikon('dek', null, true), ' Bank soal: ' + angka(r.baru) + ' belum dipakai, ' + angka(r.penggantiSiap) + ' pengganti siap. ', UKP.link('Lihat bank soal', 'bank', null, 'tautan'));
  };
})(typeof window !== 'undefined' ? window : globalThis);
