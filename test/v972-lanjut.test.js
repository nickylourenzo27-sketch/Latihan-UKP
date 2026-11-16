/* v9.7.2 muat ulang papan latihan bersama (Mode mabar) melanjutkan sesi yang sama. Jalankan: node --test test/
   Uji perilaku: tabel keputusan harusLanjut (termasuk parameter sesi), tanda pulih di router, dan penjaga bolehGantiSesi
   (dialog persetujuan, penutupan sesi lama, aktivitas room lama). Skenario peramban ada di tools/uji-muat-ulang.js. */
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const { muatInti } = require('./_muat-inti.js');

// konteks vm dengan sedikit tambahan: elemen #main tiruan dan pendengar window yang dicatat (untuk router)
function muat(berkas) {
  const asli = vm.createContext; const dengar = {};
  const main = { textContent: '', dataset: {}, appendChild() {}, querySelector: () => null, querySelectorAll: () => [], removeEventListener() {}, addEventListener() {}, firstElementChild: null, contains: () => false, focus() {}, tabIndex: 0, hasAttribute: () => true, setAttribute() {} };
  vm.createContext = c => {
    c.document.getElementById = id => (id === 'main' ? main : null);
    c.addEventListener = (nama, f) => { (dengar[nama] = dengar[nama] || []).push(f); };
    c.CustomEvent = function (nama, o) { this.type = nama; this.detail = o && o.detail; };
    c.document.dispatchEvent = () => true;
    c.scrollTo = () => {};
    c.history = { state: null, replaceState(st) { this.state = st; }, pushState(st) { this.state = st; } };
    return asli(c);
  };
  let U; let ctx = null; const asli2 = vm.createContext;
  vm.createContext = c => { ctx = c; return asli2(c); };
  try { U = muatInti(berkas); } finally { vm.createContext = asli; }
  ctx.document.body = { dataset: {} }; // sesudah dimuat: core.js tidak memasang toast ke body tiruan
  return { UKP: U, dengar, ctx };
}

const { UKP } = muat(['core.js', 'learn.js', 'views-belajar.js']);
const LB = UKP.latihBank; const L = UKP.belajar;
const harus = o => LB.harusLanjut(Object.assign({ params: {}, bisaLanjut: true, sesiId: 'sb-1', adaPeserta: true, pulih: false }, o));

test('harusLanjut: rute { lanjut } tanpa sesi melanjutkan (kartu Lanjutkan, Kembali ke latihan, entri versi lama)', () => {
  assert.equal(harus({ params: { lanjut: 1 } }), true);
  assert.equal(harus({ params: { lanjut: 1, room: 1 } }), true);
  assert.equal(harus({ params: { lanjut: 1 }, adaPeserta: false }), true, 'lanjut tidak butuh sakelar bersama');
  assert.equal(harus({ params: { lanjut: 1 }, pulih: true }), true);
});

test('harusLanjut: rute { lanjut, sesi } hanya melanjutkan sesi yang sama (Kembali sesudah "Latih N soal lagi" tidak terasa mati)', () => {
  assert.equal(harus({ params: { lanjut: 1, sesi: 'sb-1' } }), true);
  assert.equal(harus({ params: { lanjut: 1, sesi: 'sb-1', n: 10, room: 1 }, pulih: true }), true);
  assert.equal(harus({ params: { lanjut: 1, sesi: 'sb-lama' } }), false, 'entri sesi A saat sesi B berjalan');
  assert.equal(harus({ params: { lanjut: 1, sesi: 'sb-lama' }, pulih: true }), false);
  assert.equal(harus({ params: { lanjut: 1, sesi: 'sb-1' }, bisaLanjut: false }), false, 'sesi sudah selesai');
});

test('harusLanjut: rute { mulai } / { ids } melanjutkan hanya bila dipulihkan saat muat ulang dan latihan bersama aktif', () => {
  assert.equal(harus({ params: { mulai: true, n: 10, room: 1 }, pulih: true }), true);
  assert.equal(harus({ params: { ids: 'A1-001,B7-002' }, pulih: true }), true);
  assert.equal(harus({ params: { mulai: true, n: 10, room: 1 }, pulih: false }), false, 'navigasi baru atau kembali/maju');
  assert.equal(harus({ params: { ids: 'A1-001' }, pulih: false }), false);
  assert.equal(harus({ params: { mulai: true }, pulih: true, adaPeserta: false }), false, 'latihan sendiri tidak disentuh');
  assert.equal(harus({ params: { atur: 1, bersama: 1 }, pulih: true }), false);
  assert.equal(harus({ params: {}, pulih: true }), false);
});

test('harusLanjut: tanpa titik lanjut atau titik lanjut tidak utuh tidak pernah melanjutkan', () => {
  for (const params of [{ lanjut: 1 }, { lanjut: 1, sesi: 'sb-1' }, { mulai: true }, { ids: 'A1-001' }]) {
    assert.equal(harus({ params, bisaLanjut: false, pulih: true }), false, JSON.stringify(params));
    assert.equal(harus({ params, utuh: false, pulih: true }), false, JSON.stringify(params));
  }
  assert.equal(LB.harusLanjut(null), false);
  assert.equal(LB.harusLanjut({ bisaLanjut: true }), false);
});

test('G2/G3: papanDiTabLain mencatat sesi yang papannya terbuka di tab lain (per tab), catatTabLain(null) menghapusnya', () => {
  LB.catatTabLain(null);
  assert.equal(LB.papanDiTabLain('sb-1'), false);
  LB.catatTabLain('sb-1');
  assert.equal(LB.papanDiTabLain('sb-1'), true);
  assert.equal(LB.papanDiTabLain('sb-2'), false, 'sesi lain');
  assert.equal(LB.papanDiTabLain(null), false);
  LB.catatTabLain(null);
  assert.equal(LB.papanDiTabLain('sb-1'), false);
});

test('router: pulih hanya dipasang saat muat ulang (mulaiDariHash), tidak oleh navigasi baru atau kembali/maju (popstate)', () => {
  const { UKP: U, dengar, ctx } = muat(['core.js']);
  U.views.uji = () => null;
  U.store.get().profil.onboardingSelesai = true;
  const entri = { view: 'uji', params: { lanjut: 1, sesi: 'sb-1' } };
  ctx.history.state = entri;
  U.mulaiDariHash();
  assert.equal(U.sekarang().view, 'uji');
  assert.equal(U.sekarang().pulih, true, 'muat ulang memulihkan entri riwayat');
  U.go('uji', { a: 1 });
  assert.equal(U.sekarang().pulih, false, 'navigasi baru');
  (dengar.popstate || []).forEach(f => f({ state: entri }));
  assert.deepEqual(JSON.parse(JSON.stringify(U.sekarang().params)), { lanjut: 1, sesi: 'sb-1' });
  assert.equal(U.sekarang().pulih, false, 'popstate tidak memasang pulih');
  U.perbaruiParams({ x: 1 }, 'uji');
  assert.ok(!U.sekarang().pulih, 'perbaruiParams membuang tanda pulih');
});

test('router: perbaruiParams D1 membuang mulai/ids dan menulis lanjut + sesi tanpa render ulang', () => {
  const { UKP: U } = muat(['core.js']);
  let n = 0; U.views.latih = () => { n++; return null; };
  U.go('latih', { mulai: true, n: 10, room: 1, ids: 'A1-001' });
  U.perbaruiParams({ mulai: null, ids: null, lanjut: 1, sesi: 'sb-9' }, 'latih');
  assert.deepEqual(JSON.parse(JSON.stringify(U.sekarang().params)), { n: 10, room: 1, lanjut: 1, sesi: 'sb-9' });
  assert.equal(n, 1, 'tidak render ulang');
  U.perbaruiParams({ lanjut: null, sesi: null }, 'beranda');
  assert.equal(U.sekarang().params.sesi, 'sb-9', 'rute lain diabaikan');
});

// ---------- penjaga bolehGantiSesi ----------
const s = UKP.store.get();
function siapkanSesi(o) {
  o = o || {};
  s.sesiBersama = []; s.bersamaAktif = null; L.siapBersama(s); s.bersama.aktif = true; s.bersama.peserta = ['Nicky', 'Mita'];
  const ids = ['B7-001', 'B7-002', 'B7-003', 'B7-004'];
  const id = L.mulaiSesiBersama(['Nicky', 'Mita'], ids, 600, { tempo: 'ujian', detikPerSoal: 126, detikBahas: 120, mode: 'latihan' });
  if (o.isi) L.catatSoalSesi(id, { id: 'B7-001', kunci: 'A', kode: 'B7', topik: 'B7.1' }, { Nicky: { o: 'A', k: 'yakin' }, Mita: { o: 'B', k: 'ragu' } }, 30);
  L.simpanBersamaAktif({ sesiId: id, soalIds: ids, idx: o.idx || 0, sisaDetik: 300, anggaranDetik: 600, tempo: 'ujian', detikPerSoal: 126, room: o.room ? 1 : null, bahas: o.bahas ? { soalId: ids[0], mulai: Date.now() - 5000 } : null });
  return id;
}
function konfirmasiTiruan(jawab) { const catat = []; UKP.konfirmasi = (judul, isi, opsi) => { catat.push({ judul, isi, opsi }); return Promise.resolve(jawab); }; return catat; }
function roomTiruan(o) {
  const catat = { terbit: [], akhiri: 0 };
  UKP.ruang = { tersedia: () => ({ tersedia: true }), info: () => ({ peran: o.peran || 'tuan', nama: 'Nicky' }),
    state: () => ({ aktivitas: o.aktivitas ? { jenis: 'latihan', id: o.aktivitas, idx: 1, fase: 'jawab', soalIds: [] } : null }),
    jawabanSemua: () => ({}), penjelasSemua: () => ({}), terbitkanSesi: x => { catat.terbit.push(x && x.id); return true; }, akhiriAktivitas: () => { catat.akhiri++; return {}; } };
  return catat;
}

test('teksGantiSesi: menyebut nomor soal, cara melanjutkan, dan HP anggota hanya untuk sesi room', () => {
  const satu = LB.teksGantiSesi({ sesiId: 'x', soalIds: ['a', 'b', 'c', 'd'], idx: 2, room: null });
  assert.match(satu.isi, /soal 3 dari 4 belum selesai/);
  assert.match(satu.isi, /kartu Lanjutkan di atas halaman Latih/);
  assert.doesNotMatch(satu.isi, /HP anggota|Kembali ke latihan/);
  const room = LB.teksGantiSesi({ sesiId: 'x', soalIds: ['a', 'b', 'c', 'd'], idx: 2, room: 1, bahas: { soalId: 'b', mulai: 1 } });
  assert.match(room.isi, /soal 2 dari 4/, 'soal yang sedang dibahas');
  assert.match(room.isi, /tombol Kembali ke latihan di room/);
  assert.match(room.isi, /HP anggota ikut pindah/);
  for (const t of [satu.judul, satu.isi, room.isi]) assert.doesNotMatch(t, /[\u2014\u2192]/, 'tanpa tanda pisah panjang atau panah');
});

test('bolehGantiSesi: tanpa latihan bersama yang belum selesai langsung boleh, tanpa dialog', async () => {
  s.sesiBersama = []; s.bersamaAktif = null; delete UKP.ruang;
  const catat = konfirmasiTiruan(true);
  assert.equal(await LB.bolehGantiSesi(), true);
  assert.equal(catat.length, 0);
});

test('bolehGantiSesi: Batal membiarkan sesi lama dan room apa adanya', async () => {
  const id = siapkanSesi({ isi: true, idx: 1, room: true }); const room = roomTiruan({ aktivitas: id });
  const catat = konfirmasiTiruan(false);
  assert.equal(await LB.bolehGantiSesi(), false);
  assert.equal(catat.length, 1);
  assert.equal(catat[0].opsi.ya, 'Akhiri dan mulai baru'); assert.equal(catat[0].opsi.tidak, 'Batal');
  assert.equal(catat[0].opsi.bahaya, true, 'G1: fokus awal di Batal (opsi bahaya UKP.konfirmasi)');
  assert.match(catat[0].isi, /soal 2 dari 4/);
  assert.equal(L.bersamaAktif().sesiId, id, 'titik lanjut tetap');
  assert.equal(L.sesiBersamaDari(id).selesai, null, 'rekaman belum ditutup');
  assert.equal(room.akhiri, 0); assert.equal(room.terbit.length, 0);
  delete UKP.ruang;
});

test('bolehGantiSesi: setuju menutup rekaman, menghapus titik lanjut, menerbitkan rekaman, dan mengakhiri aktivitas room sesi itu', async () => {
  const id = siapkanSesi({ isi: true, idx: 1, room: true }); const room = roomTiruan({ aktivitas: id });
  konfirmasiTiruan(true);
  assert.equal(await LB.bolehGantiSesi(), true);
  assert.equal(L.bersamaAktif(), null);
  assert.equal(s.bersamaAktif, null);
  assert.ok(L.sesiBersamaDari(id).selesai > 0, 'rekaman selesai');
  assert.deepEqual(room.terbit, [id]); assert.equal(room.akhiri, 1, 'HP anggota tidak tertinggal di soal lama');
  delete UKP.ruang;
});

test('bolehGantiSesi: aktivitas room sesi lain atau perangkat bukan pemimpin tidak disentuh; sesi tanpa soal dibuang', async () => {
  let id = siapkanSesi({ isi: true }); let room = roomTiruan({ aktivitas: 'sb-lain' }); konfirmasiTiruan(true);
  assert.equal(await LB.bolehGantiSesi(), true);
  assert.equal(room.akhiri, 0); assert.ok(L.sesiBersamaDari(id).selesai > 0);
  id = siapkanSesi({ isi: true, room: true }); room = roomTiruan({ aktivitas: id, peran: 'anggota' }); konfirmasiTiruan(true);
  assert.equal(await LB.bolehGantiSesi(), true);
  assert.equal(room.akhiri, 0);
  delete UKP.ruang;
  id = siapkanSesi({ isi: false }); konfirmasiTiruan(true);
  assert.equal(await LB.bolehGantiSesi(), true);
  assert.equal(L.sesiBersamaDari(id), null, 'sesi tanpa soal dibuang');
  assert.equal(L.bersamaAktif(), null);
});

test('akhiriSesiLama: waktu membahas soal terakhir dicatat sebelum rekaman ditutup', () => {
  const id = siapkanSesi({ isi: true, idx: 1, bahas: true });
  const ba = L.bersamaAktif();
  const sesi = LB.akhiriSesiLama(ba);
  assert.ok(sesi && sesi.selesai > 0);
  const q = L.sesiBersamaDari(id).soal.find(x => x.id === 'B7-001');
  assert.ok(q.bahasDetik >= 4 && q.bahasDetik <= 10, String(q.bahasDetik));
  assert.equal(LB.akhiriSesiLama(null), null);
});
