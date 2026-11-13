/* Uji v9.5.4 bagian kedua, pengerja A: teks di layar harus cocok dengan yang dihitung.
   S1 kelas triase 'dikuasai' ("Semua benar") hanya bila tidak ada yang salah DAN tidak ada yang tidak menjawab;
   S2 rata-rata skor ujian tim satu desimal di semua tempat; S3 "lulus (batas 60)" pengganti "di atas 60";
   S4 ringkasan Dasbor tim (js/tim.js) menghitung "Tidak tahu"; S5 dokPeserta per kelompok/topik hanya 14 hari;
   S6 laporan mingguan menghitung "Tidak tahu"; S10 UKP.tim.hapusLokal(); Sx-A1 pill yakin tapi salah; Sx-A2 kelompok terlemah.
   Jalankan: node --test test/ */
'use strict';
const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { muatInti } = require('./_muat-inti.js');

const baca = b => fs.readFileSync(path.join(__dirname, '..', 'js', b), 'utf8');
const J = v => JSON.parse(JSON.stringify(v));
const HARI = 86400000;
const DATA = fs.readdirSync(path.join(__dirname, '..', 'js', 'data')).filter(f => /^(ref|mu-.*)\.js$/.test(f)).sort().map(f => 'data/' + f);

// ---------------------------------------------------------------------------------------------------------------------
describe('v9.5.4 S1: triaseSoal tidak memberi "Semua benar" bila ada yang tidak menjawab', () => {
  const UKP = muatInti(['core.js', 'learn.js']); const L = UKP.belajar;
  const soal = { id: 'X1-001', kunci: 'D' };
  const urutan = ['Nicky', 'Mita', 'Nora'];

  it('semua menjawab benar dengan yakin → dikuasai (tetap)', () => {
    const t = L.triaseSoal(soal, { Nicky: { o: 'D', k: 'yakin' }, Mita: { o: 'D', k: 'yakin' }, Nora: { o: 'D', k: 'yakin' } }, { urutan });
    assert.equal(t.kelas, 'dikuasai'); assert.equal(t.label, 'Semua benar'); assert.equal(t.prioritas, 0);
  });
  it('tanpa salah tetapi Nora tidak menjawab → rapuh, label baru, Nicky jelaskan ke Nora, masuk urutan bahas', () => {
    const t = L.triaseSoal(soal, { Nicky: { o: 'D', k: 'yakin' }, Mita: { o: 'D', k: null }, Nora: null }, { urutan });
    assert.equal(t.kelas, 'rapuh');
    assert.equal(t.label, 'Benar, tapi ada yang belum menjawab');
    assert.equal(t.penjelas, 'Nicky'); assert.deepEqual(J(t.kepada), ['Nora']); assert.deepEqual(J(t.tidakMenjawab), ['Nora']);
    assert.equal(t.saran, 'Nicky jelaskan ke Nora');
    assert.equal(t.prioritas, L.PRIORITAS_KELAS.rapuh); assert.ok(t.prioritas >= 1);
  });
  it('ada yang ragu DAN ada yang tidak menjawab → label yang sama; penjelas dari yang yakin lebih dulu', () => {
    const t = L.triaseSoal(soal, { Nicky: { o: 'D', k: 'ragu' }, Mita: { o: 'D', k: 'yakin' }, Nora: { o: '-' } }, { urutan });
    assert.equal(t.kelas, 'rapuh'); assert.equal(t.label, 'Benar, tapi ada yang belum menjawab');
    assert.equal(t.penjelas, 'Mita'); assert.equal(t.saran, 'Mita jelaskan ke Nora');
  });
  it('semua menjawab benar dan ada yang ragu → label lama "Semua benar, tapi ada yang ragu"', () => {
    const t = L.triaseSoal(soal, { Nicky: { o: 'D', k: 'yakin' }, Mita: { o: 'D', k: 'ragu' }, Nora: { o: 'D', k: 'yakin' } }, { urutan });
    assert.equal(t.kelas, 'rapuh'); assert.equal(t.label, 'Semua benar, tapi ada yang ragu'); assert.equal(t.penjelas, 'Mita');
  });
  it('pemimpin yang tidak menjawab tetap dikecualikan (keputusan v9.2) → dikuasai', () => {
    const t = L.triaseSoal(soal, { Nicky: null, Mita: { o: 'D', k: 'yakin' }, Nora: { o: 'D', k: 'yakin' } }, { urutan, pemimpin: 'nicky' });
    assert.equal(t.kelas, 'dikuasai'); assert.deepEqual(J(t.tidakMenjawab), []);
  });
  it('soal yang tidak dijawab siapa pun tetap seperti dulu (prioritas 0, label "Tidak ada yang menjawab")', () => {
    const t = L.triaseSoal(soal, { Nicky: null, Mita: null, Nora: null }, { urutan });
    assert.equal(t.prioritas, 0); assert.equal(t.label, 'Tidak ada yang menjawab'); assert.equal(t.nJawab, 0);
  });
  it('ada yang salah: kelas lama tidak berubah', () => {
    const t = L.triaseSoal(soal, { Nicky: { o: 'D' }, Mita: { o: 'A' }, Nora: null }, { urutan });
    assert.equal(t.kelas, 'terbelah'); assert.deepEqual(J(t.kepada), ['Mita']);
  });

  // skenario temuan: soal 1 Nora tidak menjawab, soal 2 Mita dan Nora salah, soal 3 semua benar
  function sesiTemuan(mode) {
    const q = (id, kunci, jw) => ({ id, kode: id.split('-')[0], topik: id.split('-')[0] + '.1', kunci, detik: 0, jawaban: jw });
    return { id: 'sb-s1', mulai: Date.now() - 600000, selesai: Date.now(), peserta: ['Nicky', 'Mita', 'Nora'], mode: mode || 'latihan', bahas: {}, soal: [
      q('X1-001', 'D', { Nicky: { o: 'D', k: null, b: 1 }, Mita: { o: 'D', k: null, b: 1 }, Nora: { o: '-', k: null, b: 0 } }),
      q('X1-002', 'B', { Nicky: { o: 'B', k: null, b: 1 }, Mita: { o: 'A', k: null, b: 0 }, Nora: { o: 'A', k: null, b: 0 } }),
      q('X1-003', 'C', { Nicky: { o: 'C', k: null, b: 1 }, Mita: { o: 'C', k: null, b: 1 }, Nora: { o: 'C', k: null, b: 1 } }),
    ] };
  }
  it('urutanBahas: hanya soal 3 yang "dijawab benar oleh semua"; soal 1 masuk urutan bahas setelah soal yang salah', () => {
    for (const mode of ['latihan', 'ujian']) {
      const u = L.urutanBahas(sesiTemuan(mode));
      assert.equal(u.nDikuasai, 1, mode);
      assert.deepEqual(J(u.perKelas), { dikuasai: 1, rapuh: 1, terbelah: 0, tersandung: 1 }, mode);
      assert.deepEqual(J(u.daftar.map(x => x.id + ':' + x.kelas)), ['X1-002:tersandung', 'X1-001:rapuh'], mode);
      assert.equal(u.daftar[1].saran, 'Mita jelaskan ke Nora', 'rotasi penjelas: Nicky sudah menjelaskan soal 2');
    }
  });

  // tampilan di views-tim (fungsi murni) dan views-ruang
  const UKP2 = muatInti(['core.js'].concat(DATA, ['learn.js', 'views-tim.js', 'views-ruang.js']));
  const X = UKP2.views.tim._uji; const M = UKP2.ruangUI._murni;
  it('views-tim: nama kelas untuk butir rapuh karena tidak menjawab = "Benar, tapi ada yang belum menjawab"', () => {
    assert.equal(X.namaKelasBahas({ kelas: 'rapuh', tidakMenjawab: ['Nora'] }), 'Benar, tapi ada yang belum menjawab');
    assert.equal(X.namaKelasBahas({ kelas: 'rapuh', tidakMenjawab: [] }), 'Semua benar, tapi ada yang ragu');
    assert.equal(X.namaKelasBahas({ kelas: 'dikuasai' }), 'Semua benar');
    assert.equal(X.kunciTampilKelas('terbelah'), 'terbelah');
  });
  it('views-tim: kelasCadangan dan daftarBahasSemua tidak memberi "dikuasai" bila ada yang tidak menjawab', () => {
    assert.equal(X.kelasCadangan({ nBenar: 2, nSalah: 0, nKosong: 1 }), 'rapuh');
    assert.equal(X.kelasCadangan({ nBenar: 3, nSalah: 0, nKosong: 0 }), 'dikuasai');
    assert.equal(X.kelasCadangan({ nBenar: 0, nSalah: 0, nKosong: 3 }), 'kosong');
    const ev = { soal: [
      { id: 'X1-001', kode: 'X1', nBenar: 2, nSalah: 0, nKosong: 1, perPeserta: { Nicky: { o: 'D' }, Mita: { o: 'D' }, Nora: { o: '-' } } },
      { id: 'X1-003', kode: 'X1', nBenar: 3, nSalah: 0, nKosong: 0, perPeserta: { Nicky: { o: 'C' }, Mita: { o: 'C' }, Nora: { o: 'C' } } },
      { id: 'X1-004', kode: 'X1', nBenar: 0, nSalah: 0, nKosong: 3, perPeserta: {} }] };
    const d = J(X.daftarBahasSemua(ev, []));
    assert.deepEqual(d.map(x => x.kelas), ['rapuh', 'dikuasai', 'kosong']);
    assert.deepEqual(d[0].tidakMenjawab, ['Nora']); assert.equal(X.namaKelasBahas(d[0]), 'Benar, tapi ada yang belum menjawab');
    assert.ok(!/Semua benar/.test(d[0].saran));
  });
  it('views-tim: evaluasi sesi temuan memberi butir triase yang sama di urutan bahas dan di "Bahas semua soal"', () => {
    const ev = UKP2.belajar.evaluasiSesi(sesiTemuan());
    const semua = J(X.daftarBahasSemua(ev, ev.triase.daftar));
    assert.deepEqual(semua.map(x => x.kelas), ['rapuh', 'tersandung', 'dikuasai']);
    assert.equal(X.namaKelasBahas(semua[0]), 'Benar, tapi ada yang belum menjawab');
    assert.equal(ev.triase.nDikuasai, 1);
  });
  it('views-ruang: labelBaku memakai label baru untuk rapuh karena belum menjawab; label lama tetap', () => {
    assert.equal(M.labelBaku('rapuh', 'Benar, tapi ada yang belum menjawab'), 'Benar, tapi ada yang belum menjawab');
    assert.equal(M.labelBaku('rapuh', 'Semua benar, tapi ada yang ragu'), 'Semua benar, tapi ada yang ragu');
    assert.equal(M.labelBaku('dikuasai', 'Semua benar'), 'Semua benar');
    const tp = M.teksPenjelas({ per: { Nicky: { o: 'D' }, Mita: { o: 'D' }, Nora: { o: '-' } }, nama: 'Nora', penjelas: 'Nicky', kunci: 'D', kelas: 'rapuh', label: 'Benar, tapi ada yang belum menjawab' });
    assert.ok(tp.umum.startsWith('Benar, tapi ada yang belum menjawab'));
    assert.equal(tp.pribadi, 'Dengarkan Nicky menjelaskan kenapa D.');
  });
  it('views-ruang: HP anggota memanggil triaseSoal dengan pemimpin room (st.tuan)', () => {
    assert.ok(baca('views-ruang.js').includes("L.triaseSoal(soal, per, { pemimpin: st.tuan || null })"));
  });
});

// ---------------------------------------------------------------------------------------------------------------------
describe('v9.5.4 S2 dan S3: rata-rata skor satu desimal, "lulus (batas 60)"', () => {
  const UKP = muatInti(['core.js'].concat(DATA, ['learn.js', 'views-tim.js']));
  const X = UKP.views.tim._uji, L = UKP.belajar;
  function sesiUjian() {
    const ids = UKP.konten.soalSet('TO-B-2026-11').slice(0, 5);
    const pola = { Nicky: 'BBB--', Mita: 'BB---', Nora: 'BB---' }; // skor 60, 40, 40 → rata-rata 46,67
    const soal = ids.map((so, i) => { const jawaban = {}; Object.keys(pola).forEach(n => { const c = pola[n][i]; jawaban[n] = { o: c === 'B' ? so.kunci : '-', k: null, b: c === 'B' ? 1 : 0 }; });
      return { id: so.id, kode: so.kode, topik: so.topik, kunci: so.kunci, detik: 0, jawaban }; });
    return { id: 'sb-u2', mulai: Date.now() - 3600000, selesai: Date.now(), tingkat: 'B', peserta: ['Nicky', 'Mita', 'Nora'], mode: 'ujian', judul: 'Kustom', bahas: {}, soal };
  }
  it('ringkasSesi (Dasbor tim) menulis 46,7 seperti pita hasil dan rekap pemimpin', () => {
    const s = sesiUjian(); const r = J(X.ringkasSesi(s, L.evaluasiSesi(s)));
    assert.equal(r.meta, '5 soal · 3 orang · rata-rata skor 46,7 · 1 dari 3 lulus');
    assert.ok(L.rekapSesi(s).includes('rata-rata skor 46,7 · 1 dari 3 lulus (batas 60)'));
  });
  it('rekap anggota dan kartu anggota memakai angkaKoma dan "lulus (batas …)"', () => {
    const v = baca('views-tim.js');
    assert.ok(v.includes("' soal · rata-rata tim ' + angkaKoma(rata) + ' · ' + sk.filter(x => x.lulus).length + ' dari ' + sk.length + ' lulus (batas ' + batasLulus() + ')'"));
    assert.ok(v.includes("'Rata-rata tim ' + angkaKoma(rata) + ' · ' + nL + ' dari ' + sk.length + ' lulus (batas ' + bt + ')'"));
    assert.ok(!/Math\.round\(rata\)/.test(v), 'tidak ada lagi Math.round(rata)');
    assert.ok(!/' di atas ' \+ (bt|batasLulus\(\))/.test(v), 'tidak ada lagi "di atas 60"');
  });
});

// ---------------------------------------------------------------------------------------------------------------------
// konteks peramban minimal untuk js/tim.js dengan localStorage dari Map
function muatTim(ls) {
  const noop = () => {}; const simpan = new Map(Object.entries(ls || {}));
  const el = () => ({ appendChild: noop, setAttribute: noop, removeAttribute: noop, addEventListener: noop, style: { setProperty: noop }, dataset: {}, classList: { add: noop, remove: noop } });
  const peristiwa = [];
  const ctx = {
    Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON, Promise, TextEncoder, TextDecoder, btoa, atob, Uint8Array, Uint16Array, Map, Set,
    CustomEvent: function (type, init) { this.type = type; this.detail = init && init.detail; },
    document: { addEventListener: noop, removeEventListener: noop, dispatchEvent: e => peristiwa.push(e), body: null, head: null, getElementById: () => null, createElement: el, documentElement: el(), querySelector: () => null, querySelectorAll: () => [] },
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: k => simpan.has(k) ? simpan.get(k) : null, setItem: (k, v) => simpan.set(k, String(v)), removeItem: k => simpan.delete(k) },
    location: { hash: '' }, history: { replaceState: noop, pushState: noop }, navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop,
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t && t.unref) t.unref(); return t; }, clearTimeout,
    setInterval: (f, ms) => { const t = setInterval(f, ms); if (t && t.unref) t.unref(); return t; }, clearInterval,
  };
  ctx.window = ctx; vm.createContext(ctx);
  for (const b of ['core.js', 'tim.js']) vm.runInContext(baca(b), ctx, { filename: b });
  return { UKP: ctx.UKP, simpan, peristiwa };
}

describe('v9.5.4 S4: ringkasan Dasbor tim menghitung "Tidak tahu" sebagai soal yang dijawab salah', () => {
  const KINI = new Date(2026, 10, 12, 10, 0, 0).getTime();
  const j = (hariLalu, kode, benar, opsi) => ({ soal: kode + '-001', topik: kode + '.1', kode, benar, opsi, detik: 20, konteks: 'latih', pada: KINI - hariLalu * HARI });
  // 10 Nov: B B S S · 12 Nov: B S B T S B (T = "Tidak tahu") → 10 soal, 5 benar
  const state = () => ({ profil: { nama: 'Nicky', tingkat: 'B' }, jawaban: [
    j(2, 'A3', true, 'A'), j(2, 'A3', true, 'A'), j(2, 'B6', false, 'C'), j(2, 'B6', false, 'C'),
    j(0, 'A5', true, 'B'), j(0, 'B7', false, 'A'), j(0, 'A5', true, 'B'), j(0, 'A4', false, '-'), j(0, 'B7', false, 'D'), j(0, 'A5', true, 'B')],
    sesi: [], simulasi: [], hadir: {} });
  it('total, soal7, akurasi7, dan perKelompok sama dengan Kemajuan (10 soal, 50%)', () => {
    const { UKP } = muatTim();
    const r = UKP.tim._ringkasan(state(), { kini: KINI });
    assert.equal(r.latihan.total, 10); assert.equal(r.latihan.benar, 5);
    assert.equal(r.latihan.soal7, 10); assert.equal(r.latihan.akurasi7, 0.5); assert.equal(r.latihan.hari7, 2);
    assert.deepEqual(J(r.latihan.perKelompok.A4), { n: 1, benar: 0 }, 'kelompok soal "Tidak tahu" ikut di Akurasi per kelompok');
    assert.equal(r.jawaban.length, 10); assert.equal(r.jawaban.filter(e => e.o === '-').length, 1);
  });
  it('jawaban "Tidak tahu" yang tersimpan dengan benar=true (data rusak) tetap tidak dihitung benar', () => {
    const { UKP } = muatTim(); const st = state(); st.jawaban[7].benar = true;
    assert.equal(UKP.tim._ringkasan(st, { kini: KINI }).latihan.benar, 5);
  });
});

// ---------------------------------------------------------------------------------------------------------------------
describe('v9.5.4 S10: UKP.tim.hapusLokal() menghapus hasil anggota yang disimpan di perangkat ini', () => {
  const awal = () => ({ 'ukp.tim.manual': '[{"id":"k1"}]', 'ukp.tim.terima': '[{"id":"anon_1"}]', 'ukp.tim.hapusTertunda': '"akun"', 'ukp.tim.kirim': '{"uid":"u"}',
    'ukp.tim.id': '"uuid"', 'ukp.tim.idLokal': '"lok"', 'ukp.akses': '{"ok":1}', 'ukp.v1': '{}' });
  it('hanya ukp.tim.manual dan ukp.tim.terima yang hilang; kunci lain utuh', () => {
    const { UKP, simpan, peristiwa } = muatTim(awal());
    assert.equal(typeof UKP.tim.hapusLokal, 'function');
    assert.equal(UKP.tim.hapusLokal(), true);
    assert.deepEqual([...simpan.keys()].sort(), ['ukp.akses', 'ukp.tim.hapusTertunda', 'ukp.tim.id', 'ukp.tim.idLokal', 'ukp.tim.kirim', 'ukp.v1']);
    assert.deepEqual(J(UKP.tim.daftarManual()), []); assert.deepEqual(J(UKP.tim.daftarTerima()), []);
    assert.ok(peristiwa.some(e => e.type === 'ukp:tim'), 'Dasbor tim diberi tahu');
  });
  it('keadaan tersimpan sama dengan menghapus dua kunci itu langsung (jalur cadangan Pengerja B)', () => {
    const a = muatTim(awal()); a.UKP.tim.hapusLokal();
    const b = muatTim(awal()); b.simpan.delete('ukp.tim.manual'); b.simpan.delete('ukp.tim.terima');
    assert.deepEqual([...a.simpan.entries()].sort(), [...b.simpan.entries()].sort());
  });
  it('tidak ada di UKP.store.reset()', () => {
    assert.ok(!/ukp\.tim\.(manual|terima)/.test(baca('core.js').match(/reset\s*\([^)]*\)\s*\{[\s\S]{0,800}/) ? baca('core.js').match(/reset\s*\([^)]*\)\s*\{[\s\S]{0,800}/)[0] : ''));
  });
});

// ---------------------------------------------------------------------------------------------------------------------
describe('v9.5.4 S5 dan S6: dokPeserta 14 hari, laporan mingguan menghitung "Tidak tahu"', () => {
  const UKP = muatInti(['core.js', 'learn.js']); const L = UKP.belajar; const U = UKP.util || UKP.U;
  const soalX = (i, kode) => ({ id: kode + '-' + String(i).padStart(3, '0'), kode, topik: kode + '.1', kunci: 'B', stem: 'Soal', opsi: { A: 'a', B: 'b', C: 'c', D: 'd' } });
  UKP.register({ meta: { kode: 'X1', nama: 'Uji 1' }, topik: [{ id: 'X1.1', judul: 'T1' }], soal: [1, 2, 3, 4].map(i => soalX(i, 'X1')) });
  UKP.register({ meta: { kode: 'X2', nama: 'Uji 2' }, topik: [{ id: 'X2.1', judul: 'T2' }], soal: [1, 2, 3, 4].map(i => soalX(i, 'X2')) });
  const s = UKP.store.get();
  beforeEach(() => { s.jawaban.length = 0; s.jawabanBersama = []; s.bersama = { aktif: true, peserta: ['Nicky', 'Mita'] }; s.laporan = []; s.profil.nama = 'Nicky'; });

  it('S5: per kelompok dan per topik hanya dari 14 hari terakhir; total, benar, jawaban tetap semua entri', () => {
    const kini = Date.now();
    const e = (sid, b, hariLalu) => ({ p: 'Mita', s: sid, kd: sid.split('-')[0], t: sid.split('-')[0] + '.1', o: b ? 'B' : 'A', b: b ? 1 : 0, d: 20, w: kini - hariLalu * HARI, m: 'latih', k: null, sesi: null });
    // 23 hari lalu: X2 3 soal (1 benar) · hari ini: X1 4 soal (1 benar)
    s.jawabanBersama.push(e('X2-001', 0, 23), e('X2-002', 0, 23), e('X2-003', 1, 23), e('X1-001', 0, 0), e('X1-002', 0, 0), e('X1-003', 1, 0), e('X1-004', 0, 0));
    const d = L.dokPeserta('Mita');
    assert.equal(d.latihan.total, 7); assert.equal(d.latihan.benar, 2); assert.equal(d.jawaban.length, 7);
    assert.equal(d.latihan.soal7, 4);
    assert.deepEqual(Object.keys(d.latihan.perKelompok), ['X1']);
    assert.deepEqual(J(d.latihan.perKelompok.X1), { n: 4, benar: 1 });
    assert.deepEqual(J(d.latihan.perTopikLemah.map(t => t.topik)), ['X1.1']);
  });
  it('S5: hanya latihan lama → per kelompok kosong (layar menulis "Belum ada latihan dalam 14 hari terakhir")', () => {
    const kini = Date.now();
    s.jawabanBersama.push({ p: 'Mita', s: 'X2-001', kd: 'X2', t: 'X2.1', o: 'A', b: 0, d: 20, w: kini - 30 * HARI, m: 'latih', k: null, sesi: null });
    const d = L.dokPeserta('Mita');
    assert.equal(d.latihan.total, 1); assert.deepEqual(J(d.latihan.perKelompok), {}); assert.deepEqual(J(d.latihan.perTopikLemah), []);
  });
  it('S6: laporan minggu ini menghitung "Tidak tahu" di jumlah soal dan akurasi; pola kesalahan tetap tanpa "Tidak tahu"', () => {
    const kini = Date.now();
    const j = (sid, benar, opsi, tag) => ({ soal: sid, topik: sid.split('-')[0] + '.1', kode: sid.split('-')[0], benar, opsi, detik: 20, konteks: 'latih', pada: kini, tag: tag || null });
    s.jawaban.push(j('X1-001', true, 'B'), j('X1-002', false, 'A', 'angka-usang'), j('X1-003', false, '-', 'angka-usang'), j('X1-004', false, '-', 'angka-usang'));
    const lap = L.laporanMingguan({ minggu: 'ini', paksa: true });
    assert.equal(lap.n, 4); assert.equal(lap.benar, 1); assert.equal(lap.akurasi, 0.25);
    const pola = J(lap.kesalahanBerulang);
    assert.equal(pola.length, 1); assert.equal(pola[0].n, 1, 'hanya jawaban salah yang memilih opsi');
    assert.ok(!lap.saran.some(x => /ketentuan lama/.test(x.teks)), '"Tidak tahu" tidak dihitung sebagai jawaban berketentuan lama');
  });
  it('S6: laporan yang sudah tersimpan tidak dihitung ulang tanpa paksa', () => {
    const kini = Date.now(); const j = (benar, opsi) => ({ soal: 'X1-001', topik: 'X1.1', kode: 'X1', benar, opsi, detik: 1, konteks: 'latih', pada: kini });
    s.jawaban.push(j(true, 'B'));
    const lap1 = L.laporanMingguan({ minggu: 'ini', paksa: true }); assert.equal(lap1.n, 1);
    s.jawaban.push(j(false, '-'));
    assert.equal(L.laporanMingguan({ minggu: 'ini' }).n, 1, 'laporan tersimpan dipakai apa adanya');
    assert.equal(L.laporanMingguan({ minggu: 'ini', paksa: true }).n, 2, '"Buat laporan" menyusun ulang dengan aturan baru');
  });
  void U;
});

// ---------------------------------------------------------------------------------------------------------------------
describe('v9.5.4 Sx-A1 dan Sx-A2: Ringkasan masalah peserta lokal', () => {
  const UKP = muatInti(['core.js'].concat(DATA, ['learn.js', 'views-tim.js']));
  const X = UKP.views.tim._uji;
  const w = hariLalu => Math.floor((Date.now() - hariLalu * HARI) / 1000);
  it('Sx-A2: kelompok tanpa jawaban salah tidak disebut "terlemah"; tanpa salah sama sekali → kelLemah kosong', () => {
    const jw = [{ s: 'B8-001', t: 'B8.1', o: 'A', b: 1, w: w(0) }, { s: 'B8-002', t: 'B8.1', o: 'B', b: 1, w: w(0) }, { s: 'A1-001', t: 'A1.1', o: 'C', b: 1, w: w(0) }];
    const a = X.analisisJawaban(jw);
    assert.deepEqual(J(a.kelLemah), []); assert.deepEqual(J(a.topLemah), []); assert.equal(a.benar, a.n);
    const jw2 = jw.concat([{ s: 'A1-002', t: 'A1.1', o: 'A', b: 0, w: w(0) }]);
    const a2 = X.analisisJawaban(jw2);
    assert.deepEqual(J(a2.kelLemah.map(k => k.kode)), ['A1']);
  });
  it('Sx-A2: kartu menulis "Belum ada jawaban salah." bila semua benar; banner Fokus tidak menyebut "masih sedikit"', () => {
    const v = baca('views-tim.js');
    assert.ok(v.includes("a.n && a.benar === a.n ? 'Belum ada jawaban salah.' : 'Belum cukup jawaban.'"));
    assert.ok(v.includes("!klJ && ui.analisis.benar === ui.analisis.n ? 'Belum ada jawaban salah pada ' + asalJw + '.'"));
  });
  it('Sx-A1: pill yakin tapi salah memakai rentang yang sama dengan kartu Pola kesalahan (tanpa "(30 hari)")', () => {
    const v = baca('views-tim.js');
    const m = v.match(/function pillYakinSalah30\(n\) \{[\s\S]*?\n  \}/);
    assert.ok(m); assert.ok(!m[0].includes('30 * 86400')); assert.ok(!m[0].includes('(30 hari)'));
    assert.ok(m[0].includes("j.k === 'yakin' && !j.b && j.o !== '-'"));
    // hitungan pill = hitungan kartu (analisisJawaban.yakinSalah) untuk jawaban 42 hari lalu dan hari ini
    const jw = [{ s: 'A1-001', t: 'A1.1', o: 'A', b: 0, k: 'yakin', w: w(42) }, { s: 'A1-002', t: 'A1.1', o: 'A', b: 0, k: 'yakin', w: w(0) }, { s: 'A1-003', t: 'A1.1', o: '-', b: 0, k: null, w: w(0) }];
    const pill = jw.filter(j => j.k === 'yakin' && !j.b && j.o !== '-').length;
    assert.equal(pill, X.analisisJawaban(jw).yakinSalah);
  });
});
