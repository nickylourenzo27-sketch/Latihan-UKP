/* Uji v9.5.3 pengerja B: teks di layar Latih, latihan bersama, dan room harus cocok dengan perilaku aplikasi.
   B1/Bx2 papan bersama tanpa hitung mundur "Waktu ketat"; B2 dialog room memakai jumlah soal yang benar-benar dimulai;
   B3 teks "membahas Bebas"; B4/B5 keterangan pilihan soal yang tidak cukup; B6 jumlah "Semua"; Bx1 kop HP saat waktu latihan habis;
   Bx3 judul lipatan "Saringan lanjutan". Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { muatInti } = require('./_muat-inti.js');

const ROOT = path.join(__dirname, '..');
const vb = fs.readFileSync(path.join(ROOT, 'js', 'views-belajar.js'), 'utf8');
const vr = fs.readFileSync(path.join(ROOT, 'js', 'views-ruang.js'), 'utf8');
const pol = o => JSON.parse(JSON.stringify(o));

// pemuat dengan localStorage (profil Tingkat B) dan modul tiruan (pola test/v950.test.js)
function muat(setelah) {
  const simpanan = new Map([['ukp.v1', JSON.stringify({ profil: { tingkat: 'B', status: 'baru', onboardingSelesai: true, nama: 'Nicky' } })]]);
  const noop = () => {};
  const el = () => ({ appendChild: noop, setAttribute: noop, removeAttribute: noop, addEventListener: noop, style: { setProperty: noop }, dataset: {}, classList: { add: noop, remove: noop } });
  const ctx = {
    Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON,
    document: { addEventListener: noop, removeEventListener: noop, body: null, head: null, getElementById: () => null, createElement: el, documentElement: el(), querySelector: () => null, querySelectorAll: () => [] },
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: k => (simpanan.has(k) ? simpanan.get(k) : null), setItem: (k, v) => { simpanan.set(k, String(v)); }, removeItem: k => { simpanan.delete(k); } },
    location: { hash: '' }, history: { replaceState: noop, pushState: noop },
    navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop,
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t && t.unref) t.unref(); return t; }, clearTimeout,
  };
  ctx.window = ctx; vm.createContext(ctx);
  for (const b of ['core.js', 'learn.js'].concat(setelah || [])) vm.runInContext(fs.readFileSync(path.join(ROOT, 'js', b), 'utf8'), ctx, { filename: b });
  return ctx.UKP;
}
const soalT = (id, extra) => Object.assign({ id, topik: id.split('-')[0] + '.1', tingkat: ['A', 'B', 'C'], kunci: 'A', opsi: { A: 'a', B: 'b', C: 'c', D: 'd' }, jebakanOpsi: { B: 'salah-baca', C: 'salah-baca', D: 'salah-baca' }, stem: 'Soal tiruan ' + id }, extra || {});
// A1: 10 keluarga (A1-001 punya dua pengganti, A1-002 satu); A2: 4 soal di topik A2.1
function modulTiruan(UKP) {
  const a1 = []; for (let i = 1; i <= 10; i++) a1.push(soalT('A1-' + String(i).padStart(3, '0')));
  a1.push(soalT('A1-101', { kembaranDari: 'A1-001' }), soalT('A1-102', { kembaranDari: 'A1-001' }), soalT('A1-103', { kembaranDari: 'A1-002' }));
  UKP.register({ meta: { kode: 'A1', nama: 'Modul A1' }, topik: [{ id: 'A1.1', judul: 'Topik' }], soal: a1 });
  const a2 = []; for (let i = 1; i <= 4; i++) a2.push(soalT('A2-' + String(i).padStart(3, '0')));
  UKP.register({ meta: { kode: 'A2', nama: 'Modul A2' }, topik: [{ id: 'A2.1', judul: 'Topik' }], soal: a2 });
}

describe('v9.5.3 B1/Bx2: papan latihan bersama tanpa hitung mundur "Waktu ketat per soal"', () => {
  it('timer lama hanya dibuat untuk latihan sendiri', () => {
    assert.ok(vb.includes("const tempoEl = f.tempo && !peserta ? h('span', { class: 'timer', role: 'timer' }, U.jam(anggaran)) : null;"));
    assert.ok(!vb.includes("const tempoEl = f.tempo ? h('span'"), 'timer lama masih dibuat tanpa cek peserta');
  });
  it('sakelar nonaktif di mode Bersama dengan keterangan; klaim "umumnya 2,5 menit, seperti di ujian" dihapus; chip ikut mode', () => {
    assert.ok(vb.includes("const toggTempo = togg('tempo', 'Waktu ketat per soal', 'Hitung mundur sesuai target waktu tiap soal.');"));
    assert.ok(vb.includes("const ber = modeLatih === 'bersama'; inTempo.disabled = ber;"));
    assert.ok(vb.includes("'Tidak berlaku di latihan bersama. Waktu per soal mengikuti pilihan Waktu mengerjakan per soal.'"));
    assert.ok(!vb.includes('umumnya 2,5 menit'));
    assert.ok(vb.includes("f.tempo && modeLatih !== 'bersama' ? chip('waktu ketat', { tempo: false }) : null"));
    assert.match(vb, /function perbaruiTombol\(lama\) \{[\s\S]*?aturKetat\(\);[\s\S]*?\n {4}\}\n {4}function hitung\(\)/, 'sakelar diperbarui setiap kali mode atau saringan berubah');
  });
});

describe('v9.5.3 B2: dialog room "Mulai N soal" memakai jumlah soal yang benar-benar dimulai', () => {
  const UKP = muat(['views-belajar.js']); modulTiruan(UKP); const LB = UKP.latihBank;
  it('jumlahMulaiRoom = urutLatih atas pool yang sama (satu soal per keluarga), dibatasi jumlah sumber', () => {
    assert.equal(LB.jumlahMulaiRoom({ n: 20, topik: 'A1.1' }), 10, '13 soal A1.1 = 10 keluarga');
    assert.equal(LB.jumlahMulaiRoom({ n: 5, topik: 'A1.1' }), 5);
    assert.equal(LB.jumlahMulaiRoom({ n: 20, topik: 'A2.1' }), 4, 'sumber yang soalnya sedikit');
    assert.equal(LB.jumlahMulaiRoom({ n: 40, topik: 'Z9.9' }), 0);
    assert.equal(LB.jumlahMulaiRoom({ n: 20 }), 14, 'acak: seluruh soal tingkat profil, satu per keluarga');
    assert.equal(LB.jumlahMulaiRoom({ n: 10, set: 'TIDAK-ADA' }), 10, 'paket tak dikenal diperlakukan seperti #latih: f.set kosong');
    const arr = UKP.konten.semuaSoal('B').filter(x => x.topik === 'A1.1');
    assert.equal(LB.jumlahMulaiRoom({ n: 20, topik: 'A1.1' }), LB.urutLatih(arr, { n: 20, bank: 'campur' }, {}).length);
  });
  it('tombol, ringkas, dan pilihan sumber memakai nEfektif(); parameter yang dikirim tetap n', () => {
    assert.ok(vr.includes("const nEfektif = () => { const lb = UKP.latihBank; if (!lb || typeof lb.jumlahMulaiRoom !== 'function') return n;"));
    assert.ok(vr.includes("onchange: e => { sumber = e.target.value; aturN(n); }"));
    assert.ok(vr.includes("ringkas.textContent = teksRingkasWaktu(nEfektif(), detikTempo(), bahas);"));
    assert.ok(vr.includes("t.textContent = 'Mulai ' + nEfektif() + ' soal';"));
    assert.ok(vr.includes("const p = Object.assign({ mulai: true }, pSumber());"));
    assert.ok(vr.includes("const pSumber = () => { const p = { n };"));
  });
});

describe('v9.5.3 B3: membahas Bebas tidak menyiratkan menit itu hanya untuk mengerjakan', () => {
  const U2 = muatInti(['core.js', 'learn.js', 'views-belajar.js']);
  const U3 = muatInti(['core.js', 'learn.js', 'views-ruang.js']);
  it('saringan Latih dan dialog room menulis kalimat yang sama', () => {
    const t = '10 soal · waktu latihan 21 menit, termasuk membahas · membahas per soal tanpa hitung mundur';
    assert.equal(U2.c.teksWaktuBersama(10, 126, 0), t);
    assert.equal(U3.ruangUI._murni.teksRingkasWaktu(10, 126, 0), t);
    for (const x of [U2.c.teksWaktuBersama(10, 126, 0), U3.ruangUI._murni.teksRingkasWaktu(10, 126, 0)]) {
      assert.doesNotMatch(x, /menit mengerjakan|tanpa batas/); assert.doesNotMatch(x, /[—→]/);
    }
  });
  it('cabang lain tidak berubah', () => {
    assert.equal(U2.c.teksWaktuBersama(10, 126, 120), '10 soal · kira-kira 41 menit (21 mengerjakan + 20 membahas)');
    assert.equal(U2.c.teksWaktuBersama(10, 0, 0), '10 soal · mengerjakan tanpa batas · membahas bebas · lama latihan tidak diperkirakan');
  });
});

describe('v9.5.3 B4/B5: keterangan jujur saat pilihan soal tidak cukup', () => {
  const U2 = muatInti(['core.js', 'learn.js', 'views-belajar.js']); const T = U2.latihBank.teksBankKurang;
  it('Belum pernah dipakai: sebut angkanya dan asal sisanya (urutan urutBank: pengganti lalu soal terpakai)', () => {
    assert.equal(T('baru', 10, { baru: 3, penggantiSiap: 0 }), 'Hanya 3 soal yang belum pernah dipakai. Sisanya 7 soal yang sudah pernah dipakai.');
    assert.equal(T('baru', 10, { baru: 3, penggantiSiap: 5 }), 'Hanya 3 soal yang belum pernah dipakai. Sisanya 5 soal pengganti dan 2 soal yang sudah pernah dipakai.');
    assert.equal(T('baru', 10, { baru: 2, penggantiSiap: 20 }), 'Hanya 2 soal yang belum pernah dipakai. Sisanya 8 soal pengganti.');
    assert.equal(T('baru', 10, { baru: 0, penggantiSiap: 0 }), 'Tidak ada soal yang belum pernah dipakai di saringan ini. Sesi diisi 10 soal yang sudah pernah dipakai.');
    assert.equal(T('baru', 10, { baru: 10, penggantiSiap: 0 }), '');
  });
  it('Pengganti soal lama: urutan urutBank soal belum dipakai lalu soal terpakai', () => {
    assert.equal(T('pengganti', 10, { baru: 107, penggantiSiap: 0 }), 'Belum ada soal pengganti yang siap di saringan ini. Sesi diisi 10 soal yang belum pernah dipakai.');
    assert.equal(T('pengganti', 10, { baru: 4, penggantiSiap: 2 }), 'Hanya 2 soal pengganti yang siap. Sisanya 4 soal yang belum pernah dipakai dan 4 soal yang sudah pernah dipakai.');
    assert.equal(T('pengganti', 5, { baru: 0, penggantiSiap: 9 }), '');
  });
  it('Campur, jumlah 0, atau tanpa ringkasan: tanpa keterangan; teks tanpa tanda pisah panjang atau panah', () => {
    assert.equal(T('campur', 10, { baru: 0, penggantiSiap: 0 }), '');
    assert.equal(T('baru', 0, { baru: 0, penggantiSiap: 0 }), '');
    assert.equal(T('baru', 10, null), '');
    assert.doesNotMatch(T('pengganti', 10, { baru: 4, penggantiSiap: 2 }) + T('baru', 10, { baru: 3, penggantiSiap: 5 }), /[—→()]/);
  });
  it('angka sesuai isi sesi urutBank (pool tiruan)', () => {
    const UKP = muat(['views-belajar.js']); modulTiruan(UKP); const L = UKP.belajar; const K = UKP.konten;
    const arr = K.soalKelompok('A1', 'B');
    for (const id of ['A1-002', 'A1-003', 'A1-004', 'A1-005', 'A1-006', 'A1-007', 'A1-008', 'A1-009', 'A1-010']) L.pakai.catat(id, 'sendiri', Date.now() - 2 * 86400000);
    L.pakai.catat('A1-001', 'ujian', Date.now() - 2 * 86400000); // A1-001 dipakai, A1-101/102 belum → pengganti siap
    const r = L.pakai.ringkas(arr); assert.deepEqual([r.baru, r.penggantiSiap], [0, 2]);
    const sesi = UKP.latihBank.urutLatih(arr, { n: 6, bank: 'baru' }, {});
    const nGanti = sesi.filter(x => x.kembaranDari).length; const nPakai = sesi.filter(x => L.pakai.sudah(x.id)).length;
    assert.deepEqual([sesi.length, nGanti, nPakai], [6, 2, 4]);
    assert.equal(UKP.latihBank.teksBankKurang('baru', 6, r), 'Tidak ada soal yang belum pernah dipakai di saringan ini. Sesi diisi 2 soal pengganti dan 4 soal yang sudah pernah dipakai.');
  });
  it('halaman Latih: keterangan di bawah baris hitungan, diperbarui di perbaruiTombol (segN, segBank, saringan), tidak tampil untuk paket + Semua', () => {
    assert.ok(vb.includes('segBank, catatanBank, hitungBank, catatanBankKurang, tautanBank, catatanButir'));
    assert.ok(vb.includes("const tKurang = n && !(f.set && f.n === 'semua') ? teksBankKurang(f.bank, nMulai(), f.n === 'semua' ? rBankSemua : rBank) : '';"));
    assert.ok(vb.includes('catatanBankKurang.textContent = tKurang; catatanBankKurang.hidden = !tKurang;'));
  });
});

describe('v9.5.3 B6: jumlah "Semua" dari himpunan yang sama dengan mulai()', () => {
  it('nSemua = soal tanpa yang sudah benar hari ini (satu per keluarga; paket: semua sisa)', () => {
    assert.ok(vb.includes("const sudahHari = benarHariIni(); const sisaHari = arrP.filter(x => !sudahHari.has(x.id)); const basisSemua = sisaHari.length ? sisaHari : arrP;"));
    assert.ok(vb.includes('nSemuaHari = f.set ? basisSemua.length : K.akar ? new Set(basisSemua.map(x => K.akar(x) || x.id)).size : basisSemua.length;'));
    assert.ok(vb.includes('const nSemua = () => nSemuaHari;'));
    assert.ok(vb.includes("const nB = Math.min(n, (f.n === 'semua' ? nSemua() : nPenuh()) || 0); const kurang = nB < n;"), 'panel: Semua memakai nSemua, 10/20/50 pool penuh');
  });
  it('urutLatih "Semua" membuang soal yang sudah benar hari ini (dasar hitungan)', () => {
    const UKP = muat(['views-belajar.js']); modulTiruan(UKP);
    const arr = UKP.konten.soalKelompok('A1', 'B');
    assert.equal(UKP.latihBank.urutLatih(arr, { n: 'semua', bank: 'campur' }, { sudah: new Set(['A1-005', 'A1-006']) }).length, 8);
  });
});

describe('v9.5.3 Bx1: kop HP anggota saat waktu latihan habis', () => {
  const M = muatInti(['core.js', 'learn.js', 'views-ruang.js']).ruangUI._murni;
  it('latihan habis: "waktu latihan habis", bukan "sisa 00:00"; ujian tim dan tanpa batas tidak berubah', () => {
    assert.deepEqual(pol(M.teksSisaKop(0, 'latihan')), { label: ' · ', waktu: 'waktu latihan habis', habis: true });
    assert.deepEqual(pol(M.teksSisaKop(1260, 'latihan')), { label: ' · sisa ', waktu: '21:00', habis: false });
    assert.deepEqual(pol(M.teksSisaKop(0, 'ujian')), { label: ' · sisa ', waktu: '00:00', habis: false });
    assert.deepEqual(pol(M.teksSisaKop(null, 'latihan')), { label: ' · sisa ', waktu: '', habis: false });
  });
  it('kepalaSesi memakai teksSisaKop', () => {
    assert.ok(vr.includes("const t = teksSisaKop(sisa, a.jenis);"));
  });
});

describe('v9.5.3 Bx3: judul lipatan "Saringan lanjutan · N aktif" ikut berubah', () => {
  it('judul dihitung ulang di perbaruiTombol; waktu ketat tidak dihitung di mode Bersama', () => {
    assert.ok(vb.includes("const nLanjutKini = () => [f.laporan, f.gayaUkp, resmiAktif(f), f.kecuali, f.baru2025, f.tempo && modeLatih !== 'bersama'].filter(Boolean).length;"));
    assert.ok(vb.includes("const nL = nLanjutKini(); ringkasLanjut.textContent = 'Saringan lanjutan' + (nL ? ' · ' + nL + ' aktif' : '');"));
    assert.ok(vb.includes("h('details', { class: 'lipat saringan-lanjut', open: nLanjut ? true : null }, ringkasLanjut,"));
  });
  it('peninjau: lipatan tidak terbuka hanya karena waktu ketat di mode Bersama (nLanjut dihitung sesudah mode ditentukan)', () => {
    assert.ok(vb.includes("const nLanjut = [f.laporan, f.gayaUkp, resmiAktif(f), f.kecuali, f.baru2025, f.tempo && modeLatih !== 'bersama'].filter(Boolean).length;"));
    assert.ok(!vb.includes("const nLanjut = [f.laporan, f.gayaUkp, resmiAktif(f), f.kecuali, f.baru2025, f.tempo].filter(Boolean).length;"));
    const iMode = vb.indexOf("modeLatih = params.bersama || (sBer.aktif && sBer.peserta.length) ? 'bersama' : 'sendiri';");
    const iLanjut = vb.indexOf('const nLanjut = [');
    const iDetails = vb.indexOf("h('details', { class: 'lipat saringan-lanjut', open: nLanjut ? true : null }");
    assert.ok(iMode > 0 && iLanjut > iMode && iDetails > iLanjut, 'nLanjut harus dihitung sesudah modeLatih ditentukan dan sebelum lipatan dibuat');
  });
});
