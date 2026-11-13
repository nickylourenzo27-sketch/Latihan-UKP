/* Uji v9.5.4 pengerja B: teks di layar harus cocok dengan perilaku aplikasi.
   S7 kartu Tim tanpa jalur kirim; S8 skor simulasi di Beranda; S9 kartu Lanjutkan saat waktu simulasi habis; S10 Hapus semua data
   menghapus hasil anggota di perangkat ini; S12 kop halaman Kelompok; S13 tombol "Latih N soal <topik>"; S14 meta butir Cakupan;
   S15 paragraf "Sudah dipakai" di Bank soal; Sx-B1 sampai Sx-B5 keterangan kecil. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const baca = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const va = baca('js/views-alat.js'), vh = baca('js/views-home.js'), vb = baca('js/views-belajar.js'), vk = baca('js/views-bank.js'), vs = baca('js/views-simulasi.js');

// pemuat dengan localStorage tiruan (pola test/v950.test.js); data: berkas js/data/* yang dimuat sebelum learn.js
function muat(opsi) {
  opsi = opsi || {};
  const simpanan = new Map(Object.entries(opsi.simpanan || {}));
  if (!simpanan.has('ukp.v1')) simpanan.set('ukp.v1', JSON.stringify({ profil: Object.assign({ tingkat: 'B', status: 'baru', onboardingSelesai: true, nama: 'Nicky' }, opsi.profil || {}) }));
  const noop = () => {};
  const el = () => ({ appendChild: noop, setAttribute: noop, removeAttribute: noop, addEventListener: noop, style: { setProperty: noop }, dataset: {}, classList: { add: noop, remove: noop } });
  const ctx = {
    Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON,
    document: { addEventListener: noop, removeEventListener: noop, dispatchEvent: noop, body: null, head: null, getElementById: () => null, createElement: el, documentElement: el(), querySelector: () => null, querySelectorAll: () => [] },
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: k => (simpanan.has(k) ? simpanan.get(k) : null), setItem: (k, v) => { simpanan.set(k, String(v)); }, removeItem: k => { simpanan.delete(k); } },
    location: { hash: '', search: '', hostname: 'localhost', protocol: 'http:' }, history: { replaceState: noop, pushState: noop },
    navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop,
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t && t.unref) t.unref(); return t; }, clearTimeout,
  };
  ctx.window = ctx; vm.createContext(ctx);
  const jalankan = rel => vm.runInContext(baca(rel), ctx, { filename: rel });
  jalankan('js/core.js'); jalankan('js/kalkulator.js');
  for (const b of opsi.data || []) jalankan('js/data/' + b);
  jalankan('js/learn.js');
  for (const b of opsi.setelah || []) jalankan('js/' + b);
  return { UKP: ctx.UKP, simpanan, ctx };
}
const SEMUA_DATA = fs.readdirSync(path.join(ROOT, 'js', 'data')).filter(f => f.endsWith('.js')).sort();
let dataPenuh = null;
const muatPenuh = () => dataPenuh || (dataPenuh = muat({ data: SEMUA_DATA, setelah: ['views-belajar.js'] }));

describe('v9.5.4 S7: kartu Tim tanpa jalur kirim tidak menyatakan hasil dibagikan atau dihapus', () => {
  const m = va.match(/const tanpaJalurKirim = (i => [^;]+);/);
  it('syarat cabang baru sempit: status mati, bukan server, bukan mode server, bukan room', () => {
    assert.ok(m, 'tanpaJalurKirim tidak ditemukan');
    const f = vm.runInNewContext(m[1]);
    assert.equal(f({ status: 'mati', server: false, modeServer: false, room: null }), true);
    assert.equal(f({ status: 'tanpa-akun', server: false, modeServer: false, room: null }), false, 'claude.ai belum masuk: sakelar berpengaruh nanti');
    assert.equal(f({ status: 'mati', server: false, modeServer: false, room: 'tamu' }), false, 'room tamu');
    assert.equal(f({ status: 'mati', server: false, modeServer: true, room: null }), false, 'server tim tidak terjangkau');
    assert.equal(f({ status: 'mati', server: true, modeServer: true, room: null }), false);
    assert.equal(f({ status: 'tersambung', server: false, modeServer: false, room: null }), false);
    assert.equal(f({ status: 'langsung', server: false, modeServer: false, room: 'tuan' }), false);
  });
  it('toast netral di mode itu; toast lama tetap untuk jalur lain', () => {
    assert.ok(va.includes("else if (tanpaJalurKirim(i)) UKP.toast('Pilihan disimpan. Di sini tidak ada pengiriman otomatis. Hasil hanya sampai ke pemimpin tim lewat kode hasil yang Anda salin.'"));
    assert.ok(va.includes("else UKP.toast(nyala ? 'Hasil Anda dibagikan ke dasbor tim.' : 'Hasil Anda tidak lagi dibagikan.'"));
    assert.ok(va.indexOf('else if (tanpaJalurKirim(i)) UKP.toast(') < va.indexOf("else UKP.toast(nyala ? 'Hasil Anda dibagikan"), 'cabang baru mendahului cabang lama');
  });
  it('keterangan sakelar dan status "tidak tersambung" menyebut keadaan sebenarnya', () => {
    assert.ok(va.includes(": tanpaJalurKirim(i) ? BANTU_TANPA_JALUR : 'Bila dimatikan, ringkasan Anda dihapus dari dasbor tim dan tidak dikirim lagi.';"));
    assert.match(va, /const BANTU_TANPA_JALUR = 'Berlaku saat tersambung: [^']*Di sini tidak ada pengiriman otomatis\.';/);
    assert.ok(va.includes("salin kode hasil lalu kirimkan ke pemimpin tim.' + (!i.aktif ? ' Berbagi dimatikan. Kode hasil tetap bisa disalin bila Anda mau mengirimkannya.' : '');"));
  });
});

describe('v9.5.4 S8 dan S9: kartu Beranda untuk simulasi', () => {
  const { UKP } = muat({ setelah: ['views-home.js'] });
  const B = UKP.berandaUji;
  const dasar = o => Object.assign({ sesiAktif: null, jawaban: [], topikDibaca: {}, simulasi: [], simulasiAktif: null, hadir: {} }, o);
  it('S8: skor ditulis seperti halaman hasil (satu desimal bila tidak bulat), tidak dibulatkan ke 60', () => {
    assert.equal(B.fmtSkor(59.5), '59,5');
    assert.equal(B.fmtSkor(16.7), '16,7');
    assert.equal(B.fmtSkor(60), '60');
    assert.equal(B.fmtSkor(100), '100');
    assert.equal(B.fmtSkor(0), '0');
    assert.equal(B.fmtSkor(undefined), '0');
    const x = B.aktivitasTerakhir(dasar({ simulasi: [{ id: 's1', selesai: Date.now() - 1000, skor: 59.5, benar: 22, total: 37 }] }));
    assert.equal(x.meta, 'Terakhir: skor 59,5');
    assert.ok(!vh.includes('Math.round(sim.skor') && !vh.includes('Math.round(simAkhir.skor'), 'pembulatan lama masih ada');
    assert.ok(vh.includes("simAkhir ? 'Terakhir: skor ' + fmtSkor(simAkhir.skor)"));
  });
  const sim = o => Object.assign({ id: 'sim1', format: 'kustom', tingkat: 'B', menit: 50, tanpaWaktu: false, soalIds: ['A1-001', 'A1-002', 'A1-003', 'A1-004', 'A1-005'], jawaban: {}, ragu: [], detik: {}, mulai: Date.now() - 51 * 60000, akhir: Date.now() - 60000, posisi: 0, selesai: null }, o);
  it('S9: waktu habis, belum dikirim, ada jawaban: "Simulasi ujian · Waktu habis · belum dikirim" dan membuka halaman Simulasi', () => {
    const st = dasar({ simulasiAktif: sim({ jawaban: { 'A1-001': 'A', 'A1-002': 'B', 'A1-003': 'C' } }) });
    UKP.store.get().simulasiAktif = st.simulasiAktif;   // UKP.simulasiBerjalan membaca store
    const x = B.aktivitasTerakhir(st);
    assert.equal(x.judul, 'Simulasi ujian'); assert.equal(x.meta, 'Waktu habis · belum dikirim');
    let ke = null; const go = UKP.go; UKP.go = (v, p) => { ke = [v, p]; }; try { x.buka(); } finally { UKP.go = go; }
    assert.equal(ke[0], 'simulasi'); assert.ok(!(ke[1] && ke[1].jalan), 'membuka halaman Simulasi, bukan layar ujian');
    UKP.store.get().simulasiAktif = null;
  });
  it('S9: kedaluwarsa tanpa jawaban tetap diabaikan; simulasi berjalan tetap "Sedang berjalan"', () => {
    const kosong = dasar({ simulasiAktif: sim() }); UKP.store.get().simulasiAktif = kosong.simulasiAktif;
    assert.equal(B.aktivitasTerakhir(kosong), null);
    const jalan = dasar({ simulasiAktif: sim({ akhir: Date.now() + 10 * 60000, jawaban: { 'A1-001': 'A' } }) }); UKP.store.get().simulasiAktif = jalan.simulasiAktif;
    assert.equal(B.aktivitasTerakhir(jalan).meta, 'Sedang berjalan');
    const tanpaWaktu = dasar({ simulasiAktif: sim({ tanpaWaktu: true, jawaban: { 'A1-001': 'A' } }) }); UKP.store.get().simulasiAktif = tanpaWaktu.simulasiAktif;
    assert.equal(B.aktivitasTerakhir(tanpaWaktu).meta, 'Sedang berjalan');
    UKP.store.get().simulasiAktif = null;
  });
  it('S9: ujian tim yang sudah punya kartu sendiri (room, atau ujian tim di perangkat ini) tidak digandakan', () => {
    const jw = { 'A1-001': 'A' };
    const room = dasar({ simulasiAktif: sim({ format: 'tim', jawaban: jw, tim: { ujianId: 'u1', judul: 'UT', nama: 'Rina', room: 1 } }) });
    UKP.store.get().simulasiAktif = room.simulasiAktif; assert.equal(B.aktivitasTerakhir(room), null);
    const lokal = dasar({ ujianTim: { id: 'u2' }, simulasiAktif: sim({ format: 'tim', jawaban: jw, tim: { ujianId: 'u2', judul: 'UT', nama: 'Rina' } }) });
    UKP.store.get().simulasiAktif = lokal.simulasiAktif; assert.equal(B.aktivitasTerakhir(lokal), null);
    const kode = dasar({ simulasiAktif: sim({ format: 'tim', jawaban: jw, tim: { ujianId: 'u3', judul: 'UT', nama: 'Rina' } }) });
    UKP.store.get().simulasiAktif = kode.simulasiAktif; assert.equal(B.aktivitasTerakhir(kode).meta, 'Waktu habis · belum dikirim', 'ujian tim dari kode tanpa kartu lain tetap ditunjuk');
    UKP.store.get().simulasiAktif = null;
  });
  it('S9: pembaruan tanpa muat ulang hanya mengganti kartu Lanjutkan, dengan penjaga pola A2', () => {
    assert.ok(vh.includes('if (akhir.berjalan) segarkanSaatHabis(kartu, s.simulasiAktif);'));
    const f = vh.slice(vh.indexOf('function segarkanSaatHabis('), vh.indexOf('// D3.4 kartu Lanjutkan'));
    assert.ok(f.includes('if (!kartu.isConnected) return;'), 'berhenti bila kartu sudah dilepas');
    assert.ok(f.includes("document.querySelector('dialog[open]') || mengetikDi(ae) || (ae && kartu.contains(ae))"), 'ditunda saat dialog terbuka, mengetik, atau fokus di kartu');
    assert.ok(f.includes('kartu.replaceWith(kartuLanjut(UKP.store.get()));'), 'hanya kartu yang diganti, bukan UKP.render()');
    assert.ok(!f.includes('UKP.render('));
  });
});

describe('v9.5.4 S10: Hapus semua data juga menghapus hasil anggota yang disimpan di perangkat ini', () => {
  const awal = () => ({
    'ukp.tim.manual': '[{"id":"m1","nama":"Mita"}]', 'ukp.tim.terima': '[]', 'ukp.tim.hapusTertunda': '"x"', 'ukp.tim.kirim': '{}', 'ukp.tim.id': '"i"', 'ukp.tim.idLokal': '"l"',
    'ukp.akses': '{"nama":"Nicky"}', 'ukp.tim.bukanServer': '1',
  });
  const DIJAGA = ['ukp.tim.hapusTertunda', 'ukp.tim.kirim', 'ukp.tim.id', 'ukp.tim.idLokal', 'ukp.akses', 'ukp.tim.bukanServer'];
  it('jalur cadangan (tanpa UKP.tim.hapusLokal) menghapus tepat dua kunci', () => {
    const { UKP, simpanan } = muat({ simpanan: awal(), setelah: ['views-alat.js'] });
    assert.equal(UKP.tim, undefined);
    assert.equal(UKP.hapusTimLokal(), 'cadangan');
    assert.ok(!simpanan.has('ukp.tim.manual') && !simpanan.has('ukp.tim.terima'));
    for (const k of DIJAGA) assert.ok(simpanan.has(k), k + ' tidak boleh terhapus');
  });
  it('jalur UKP.tim.hapusLokal (js/tim.js) menghasilkan kunci yang sama dengan jalur cadangan', () => {
    const a = muat({ simpanan: awal(), setelah: ['views-alat.js'] }); a.UKP.hapusTimLokal();
    const b = muat({ simpanan: awal(), setelah: ['tim.js', 'views-alat.js'] });
    if (typeof (b.UKP.tim && b.UKP.tim.hapusLokal) !== 'function') return; // Pengerja A belum menambahkannya: jalur cadangan sudah diuji di atas
    assert.equal(b.UKP.hapusTimLokal(), 'tim');
    const kunci = m => [...m.keys()].filter(k => k !== 'ukp.v1').sort();
    assert.deepEqual(kunci(b.simpanan), kunci(a.simpanan));
  });
  it('tombol memanggil hapusTimLokal sesudah store.reset (bukan di dalam reset); dialog menyebutnya', () => {
    assert.ok(va.includes("'Jawaban, kartu, kehadiran, dan simulasi akan dihapus permanen dari browser ini. Hasil anggota yang ditempel di Dasbor tim juga dihapus.'"));
    assert.ok(va.includes('UKP.store.reset(); hapusTimLokal(); UKP.terapkanTema();'));
    assert.ok(!/reset\(\) \{[^}]*ukp\.tim/.test(baca('js/core.js')), 'penghapusan tidak boleh ada di UKP.store.reset()');
    assert.ok(va.includes("const KUNCI_TIM_LOKAL = ['ukp.tim.manual', 'ukp.tim.terima'];"));
  });
});

describe('v9.5.4 S12: kop halaman Kelompok memakai jumlah soal tingkat target', () => {
  it('aturan sama dengan Peta materi dan Latih', () => {
    assert.ok(vb.includes('const nS = K.soalKelompok(kode, diTingkat(kode, tingkat) ? tingkat : undefined).length;'));
    assert.ok(!vb.includes('const nS = K.soalKelompok(kode).length;'));
  });
  it('angka data: A3 untuk target A lebih kecil dari semua soal A3; kelompok di luar target tetap semua soal', () => {
    const { UKP } = muatPenuh(); const K = UKP.konten;
    const semua = K.soalKelompok('A3'), untukA = K.soalKelompok('A3', 'A');
    assert.equal(untukA.length, semua.filter(s => (s.tingkat || []).includes('A')).length, 'jumlah untuk target A = soal A3 yang bertingkat A');
    assert.ok(untukA.length > 0 && untukA.length < semua.length, 'A3 memuat soal yang hanya untuk tingkat lain: ' + untukA.length + ' dari ' + semua.length);
    assert.equal(K.kelompok('A').includes('B6'), false);
  });
});

describe('v9.5.4 S13: tombol "Latih N soal <topik>" memakai jumlah soal yang benar-benar dimulai', () => {
  it('nLatihTopik sama dengan panjang sesi Latih { kode, topik, n: 10 } untuk tiap topik tiap tingkat', () => {
    const { UKP } = muatPenuh(); const K = UKP.konten; const LB = UKP.latihBank;
    let dicek = 0;
    for (const t of ['A', 'B', 'C']) {
      UKP.store.get().profil.tingkat = t;
      const kel = K.kelompok(t);
      for (const kode of K.semuaKelompok()) for (const tp of (UKP.modul[kode] && UKP.modul[kode].topik) || []) {
        const pool = K.soalKelompok(kode, kel.includes(kode) ? t : undefined).filter(x => x.topik === tp.id);
        const harap = pool.length ? LB.urutLatih(pool, { n: 10, bank: 'campur' }, {}).length : 0;
        assert.equal(LB.nLatihTopik(tp.id), harap, t + ' ' + tp.id); dicek++;
      }
    }
    assert.ok(dicek > 100);
    UKP.store.get().profil.tingkat = 'A'; assert.equal(LB.nLatihTopik('A2.4'), 7, 'A2.4 target A: 7 keluarga');
    UKP.store.get().profil.tingkat = 'B'; assert.equal(LB.nLatihTopik('B7.8'), 0, 'B7.8 target B: tanpa soal');
    assert.equal(LB.nLatihTopik('Z9.9'), 0);
  });
  it('tombol kelompok: tiap kelompok punya paling sedikit 10 keluarga di tiap tingkat (juga soal hitung untuk kelompok kalkulator)', () => {
    const { UKP } = muatPenuh(); const K = UKP.konten; const kel = t => K.kelompok(t);
    const fam = a => new Set(a.map(x => K.akar(x) || x.id)).size;
    for (const t of ['A', 'B', 'C']) for (const k of K.semuaKelompok()) {
      const pool = K.soalKelompok(k, kel(t).includes(k) ? t : undefined);
      assert.ok(fam(pool) >= 10, t + ' ' + k + ': ' + fam(pool) + ' keluarga');
    }
    const kalk = [...new Set((baca('js/kalkulator.js').match(/kelompok: '([A-Z0-9]+)'/g) || []).map(x => x.slice(12, -1)))];
    assert.ok(kalk.length >= 3);
    for (const t of ['A', 'B', 'C']) for (const k of kalk) assert.ok(fam(K.semuaSoal(t).filter(x => x.kode === k && x.jenis === 'hitung')) >= 10 || !kel(t).includes(k), t + ' ' + k + ' hitung');
  });
  it('semua tombol "Latih 10 soal" yang menunjuk satu topik memakai pembantu; topik tanpa soal tidak menawarkan tombol', () => {
    assert.ok(vb.includes("'Latih ' + nLatihDari(soalTopik) + ' soal ' + t.id"));
    assert.ok(vb.includes("tt && nLatihTopik(tt.id) ? h('button'") && vb.includes("'Latih ' + nLatihTopik(tt.id) + ' soal ' + tt.id"));
    assert.ok(va.includes("nLatih ? h('button'") && va.includes("'Latih ' + nLatih + ' soal')"));
    assert.ok(va.includes("nL ? { label: 'Latih ' + nL + ' soal topik ini'"));
    assert.ok(va.includes("'Latih ' + nLatihTopik(rows[0].t.id) + ' terlemah'"));
    assert.ok(va.includes('if (topikId && K.topik(topikId) && nLatihTopik(topikId)) return'));
    assert.ok(vs.includes("K.topik(topik) && nLatih ? h('button'") && vs.includes("'Latih ' + nLatih + ' soal topik ini'"));
    for (const [nama, src] of [['views-belajar', vb], ['views-alat', va], ['views-simulasi', vs]]) {
      assert.ok(!/'Latih 10 soal ' \+ (t|tt)\.id/.test(src), nama + ': label topik tetap 10');
      assert.ok(!src.includes("'Latih 10 soal topik ini'"), nama);
    }
  });
});

describe('v9.5.4 S14: meta butir di Cakupan memakai kalimat Bank soal; label tombol tanpa angka', () => {
  it('teks dan label', () => {
    assert.ok(vb.includes("UKP.fmt.angka(n) + ' soal' + (x.tunggu ? ' · ' + UKP.fmt.angka(x.tunggu) + ' pengganti menunggu' : '')"));
    assert.ok(vk.includes("' · ' + angka(nTunggu(r)) + ' pengganti menunggu'"), 'kalimat Bank soal yang ditiru');
    // v9.5.4 C-4 (KEPUTUSAN-954C): label memuat nomor butir seperti Bank soal ("Latih butir 7.c: ..."); uji di test/v954-c.test.js
    assert.ok(vb.includes("a.setAttribute('aria-label', labelLatihButir(b, tingkat));"));
    assert.ok(!vb.includes("'Latih ' + n + ' soal butir ini: '"));
  });
  it('hitungan per butir disimpan sekali per halaman sehingga mengetik di kotak cari tidak menghitung ulang', () => {
    assert.ok(vb.includes('const cacheButir = new Map();'));
    assert.ok(vb.includes('if (cacheButir.has(k)) return cacheButir.get(k);'));
    assert.ok(vb.includes('const x = hitungButir(b.id, tingkat); const n = x.n;'));
  });
  it('angka menunggu = L.pakai.menunggu(L.pakai.ringkas(soal butir)), sama dengan Bank soal', () => {
    const { UKP } = muatPenuh(); const K = UKP.konten; const P = UKP.belajar.pakai;
    const arr = K.soalButir('A.2.7', 'A'); assert.ok(arr.length > 0);
    const tunggu = P.menunggu(P.ringkas(arr)); const fam = new Set(arr.map(x => K.akar(x) || x.id)).size;
    assert.equal(arr.length - tunggu, fam, 'data kosong: yang bisa dimulai = jumlah keluarga');
  });
});

describe('v9.5.4 S15: Bank soal menulis kapan soal ujian tim dan simulasi dihitung', () => {
  it('kalimat baru, kalimat lama hilang', () => {
    assert.ok(vk.includes('Soal ujian tim dihitung sejak ujian dimulai. Soal simulasi dihitung saat simulasi dikirim, walau tidak dijawab. Simulasi yang dibuang tidak dihitung.'));
    assert.ok(!vk.includes('Soal ujian dihitung sejak ujian dimulai, walau tidak dijawab.'));
  });
});

describe('v9.5.4 Sx-B: keterangan kecil yang tidak cocok dengan perilaku', () => {
  it('Sx-B1: keterangan sakelar Tutor menyebut tombol di bilah atas tetap ada', () => {
    assert.ok(va.includes("'Tombol \"Tanya Tutor\" muncul setelah soal diperiksa, di topik, dan di kalkulator. Tombol Tutor di bilah atas tetap ada.'"));
  });
  it('Sx-B2: hari tenggat tidak menjanjikan CUTI otomatis', () => {
    assert.ok(!vh.includes('melewati hari ini tidak memutus kehadiran'));
    assert.ok(vh.includes("Sesi dikecilkan ke Kilat.' + (s.hadir[hariIni] ? '' : ' Bila tidak sempat belajar, tekan Lewati hari ini agar kehadiran tidak putus (dicatat CUTI).')"));
  });
  it('Sx-B3: kartu 03 ikut sakelar "Periksa dulu"', () => {
    assert.ok(vh.includes("p.jawabLangsung === false ? '20 soal acak, dibahas setelah Periksa' : '20 soal acak, langsung dibahas'"));
  });
  it('Sx-B4: Cakupan menyebut pembagian dokumen sebagai mata ujian, bukan kelompok', () => {
    assert.ok(vb.includes("r.mataUjian + ' mata ujian'"));
    assert.ok(vb.includes("total + ' butir dalam ' + T.mataUjian.length + ' mata ujian.'"));
    assert.ok(vb.includes("tile({ label: 'Mata ujian', nilai: r.mataUjian"));
    assert.ok(vb.includes("'Butir per mata ujian'"));
    assert.ok(!vb.includes("r.mataUjian + ' kelompok'"));
  });
  it('Sx-B5: keterangan pintasan tidak menyebut panah ikut mati', () => {
    assert.ok(!va.includes('(←/→, R, G)'));
    assert.ok(va.includes("'Tombol /, ?, dan huruf pintasan simulasi J, K, R, G. Panah kiri dan kanan di simulasi tetap aktif."));
    assert.ok(vs.includes("const satu = huruf === 'j' || huruf === 'k' || huruf === 'r' || huruf === 'g';"), 'perilaku: hanya huruf yang ikut sakelar');
  });
});
