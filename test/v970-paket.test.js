/* Uji v9.7.0 (PK1 aplikasi): paket bermata uji LM-B-2026-11 di Simulasi, Latih, dan dialog Mulai latihan bersama.
   Soal tiruan berkode LM-B-2026-11 disisipkan di memori (tidak ditulis ke js/data/). Soal LM asli, bila sudah terpasang, dilepas dari salinan data uji ini,
   jadi uji ini tidak bergantung pada ada atau tidaknya data paket LM. Data asli diuji di test/v970-data.test.js.
   Isi: urutan daftarSet dan paket bawaan; K.bagianSet; potonganPaket; susunAttempt dan labelSim bagian bernama; batas menit; kata "Try Out";
   lembar jawab ujian tim 400; kop soal; tiga paket try out tidak berubah; sumber per mata uji di dialog room dan jumlahMulaiRoom dengan kode.
   Pembetulan sesudah pemeriksaan: runPaket, judulPotongan, teksPaket, teksBannerPaket (fungsi murni Simulasi) dan sambungan event di layar;
   teks persis lembar jawab 400, kop, dan ringkas "Sumber:"; opsi per mata uji hanya bila modul antarbagian berbeda; optgroup di dialog;
   catatan paket di Latih; label tombol unduh offline.
   Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const J = x => JSON.parse(JSON.stringify(x));
const LM = 'LM-B-2026-11', B = 'TO-B-2026-11', C1 = 'TO-C-2026-11-1', C2 = 'TO-C-2026-11-2', C3 = 'TO-C-2026-11-3'; // v10.3.1 Paket 3
const JUDUL_LM = 'Latihan UKP B per mata uji (kiriman 16 Nov 2026)';
const OP = 'PPh Orang Pribadi dan SPT PPh OP', KUP = 'KUP, PPSP, dan Pengadilan Pajak', PPN = 'PPN';
const baca = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

// ---------- pemuat: core + data + learn + tim + views (konteks vm); soal LM asli dilepas ----------
function muat() {
  const noop = () => {};
  const el = () => ({ appendChild: noop, setAttribute: noop, removeAttribute: noop, addEventListener: noop, style: { setProperty: noop }, dataset: {}, classList: { add: noop, remove: noop } });
  const ctx = {
    Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON, TextEncoder, TextDecoder, btoa, atob, Uint8Array,
    document: { addEventListener: noop, removeEventListener: noop, body: null, head: null, getElementById: () => null, createElement: el, documentElement: el(), querySelector: () => null, querySelectorAll: () => [] },
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: () => null, setItem: noop, removeItem: noop }, location: { hash: '' }, history: { replaceState: noop, pushState: noop },
    navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop,
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t && t.unref) t.unref(); return t; }, clearTimeout, setInterval: () => 0, clearInterval: noop,
  };
  ctx.window = ctx; vm.createContext(ctx);
  const jalankan = rel => vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), ctx, { filename: rel });
  jalankan('js/core.js');
  for (const f of fs.readdirSync(path.join(ROOT, 'js', 'data')).filter(f => /^(ref|mu-.*|cakupan|peta-butir)\.js$/.test(f)).sort()) jalankan('js/data/' + f);
  for (const k of Object.keys(ctx.UKP.modul)) { const m = ctx.UKP.modul[k]; m.soal = (m.soal || []).filter(x => !(x.sumber && /^LM-/.test(String(x.sumber.set)))); }
  for (const b of ['learn.js', 'tim.js', 'views-belajar.js', 'views-simulasi.js', 'views-ruang.js']) jalankan('js/' + b);
  return { UKP: ctx.UKP, ctx };
}

// paket LM tiruan: 10 soal, nomor lompat (1, 2, 5, 9, 10, 11, 12, 20, 21, 22), tiga bagian berurutan di tiga modul.
// rancangan = [[nama bagian, modul, jumlah]]; soal disalin dari soal modul yang ada (tanpa sumber, kembaranDari, kasusId)
const NOMOR = [1, 2, 5, 9, 10, 11, 12, 20, 21, 22];
function sisipLM(UKP, rancangan) {
  rancangan = rancangan || [[OP, 'A1', 4], [KUP, 'A2', 3], [PPN, 'A4', 3]];
  const K = UKP.konten; const nomor = {}; const idBaru = k => { nomor[k] = nomor[k] || 900; let id; do { id = k + '-' + String(++nomor[k]).padStart(3, '0'); } while (K.soal(id)); return id; };
  let i = 0; const out = [];
  for (const [nama, k, n] of rancangan) {
    const asal = UKP.modul[k].soal.filter(x => !x.sumber && !x.kembaranDari && !x.kasusId);
    for (let j = 0; j < n; j++, i++) {
      const x = J(asal[j]); delete x.kembaranDari; delete x.sejak; x.id = idBaru(k); x.tingkat = ['B'];
      x.sumber = { set: LM, no: NOMOR[i] || (100 + i), judul: JUDUL_LM, tingkat: 'B' }; if (nama) x.sumber.bagian = nama;
      UKP.modul[k].soal.push(x); out.push(x);
    }
  }
  return out;
}
const lepasLM = UKP => { for (const k of Object.keys(UKP.modul)) UKP.modul[k].soal = UKP.modul[k].soal.filter(x => !(x.sumber && x.sumber.set === LM)); };

describe('v9.7.0 urutan paket dan paket bawaan', () => {
  const { UKP } = muat(); const K = UKP.konten; sisipLM(UKP);
  it('daftarSet: paket TO- lebih dulu menurut kode, paket LM terakhir', () => {
    assert.deepEqual(J(K.daftarSet().map(p => p.set)), [B, C1, C2, C3, LM]);
    const lm = K.daftarSet().find(p => p.set === LM);
    assert.equal(lm.label, 'Latihan UKP B per mata uji'); assert.equal(lm.tingkat, 'B'); assert.equal(lm.n, 10);
  });
  it('setBawaan tidak berubah: A dan B = Try Out UKP B, C = Paket 1', () => {
    assert.equal(K.setBawaan('A').set, B); assert.equal(K.setBawaan('B').set, B); assert.equal(K.setBawaan('C').set, C1);
  });
});

describe('v9.7.0 K.bagianSet', () => {
  it('tiga bagian berurutan: dari dan sampai = posisi di soalSet, bukan nomor paket', () => {
    const { UKP } = muat(); const K = UKP.konten; sisipLM(UKP);
    assert.deepEqual(J(K.soalSet(LM).map(x => x.sumber.no)), NOMOR);
    assert.deepEqual(J(K.bagianSet(LM)), [{ nama: OP, n: 4, dari: 1, sampai: 4 }, { nama: KUP, n: 3, dari: 5, sampai: 7 }, { nama: PPN, n: 3, dari: 8, sampai: 10 }]);
  });
  it('paket try out (tanpa sumber.bagian) memberi []', () => {
    const { UKP } = muat(); const K = UKP.konten;
    for (const s of [B, C1, C2, C3]) assert.deepEqual(J(K.bagianSet(s)), [], s);
    assert.deepEqual(J(K.bagianSet('')), []); assert.deepEqual(J(K.bagianSet('TIDAK-ADA')), []);
  });
  it('satu soal tanpa bagian memberi []', () => {
    const { UKP } = muat(); const K = UKP.konten; const a = sisipLM(UKP); delete a[6].sumber.bagian;
    assert.deepEqual(J(K.bagianSet(LM)), []);
  });
  it('nama yang muncul di dua rentang memberi []', () => {
    const { UKP } = muat(); const K = UKP.konten; sisipLM(UKP, [[OP, 'A1', 3], [PPN, 'A4', 2], [OP, 'A1', 2]]);
    assert.deepEqual(J(K.bagianSet(LM)), []);
  });
});

describe('v9.7.0 Simulasi: potonganPaket, susunAttempt, labelSim, waktu', () => {
  const { UKP } = muat(); const K = UKP.konten; sisipLM(UKP); const M = UKP.simulasiTim._murni;
  const paket = set => K.daftarSet().find(p => p.set === set);
  it('potonganPaket: paket try out sama dengan potonganTO(n); LM = Semua mata uji + b1..b3', () => {
    for (const s of [B, C1, C2, C3]) assert.deepEqual(J(M.potonganPaket(paket(s))), J(M.potonganTO(paket(s).n)), s);
    const pot = M.potonganPaket(paket(LM));
    assert.deepEqual(J(pot.map(x => x.nilai)), ['semua', 'b1', 'b2', 'b3']);
    assert.deepEqual(J(pot.map(x => x.label)), ['Semua mata uji', OP, KUP, PPN]);
    assert.deepEqual(J(pot.map(x => x.n)), [10, 4, 3, 3]);
    assert.deepEqual(J(pot.slice(1).map(x => [x.dari, x.sampai])), [[1, 4], [5, 7], [8, 10]]);
    assert.equal(pot[0].nama, undefined); assert.equal(pot[2].nama, KUP);
  });
  it('susunAttempt bagian bernama: soal = potongan soalSet, bagian = nama, menit = tempo ujian B', () => {
    const a = M.susunAttempt({ format: 'tryout', kode: LM, tingkat: 'B', dari: 5, sampai: 7, namaBagian: KUP });
    assert.deepEqual(J(a.soalIds), J(K.soalSet(LM).slice(4, 7).map(x => x.id)));
    assert.equal(a.bagian, KUP); assert.equal(a.menit, Math.round(3 * 126 / 60));
    assert.equal(M.labelSim(a), 'Latihan UKP B · ' + KUP);
    const utuh = M.susunAttempt({ format: 'tryout', kode: LM, tingkat: 'B', dari: 1, sampai: 10, namaBagian: null });
    assert.equal(utuh.bagian, null); assert.equal(M.labelSim(utuh), 'Latihan UKP B per mata uji · 10 soal');
  });
  it('labelSim tiap bagian LM paling panjang 60 huruf (judul ujian tim dipotong di 60)', () => {
    for (const b of K.bagianSet(LM)) { const l = M.labelSim({ format: 'tryout', kode: LM, bagian: b.nama }); assert.ok(l.length <= 60, l + ' ' + l.length); assert.ok(!/per mata uji/.test(l), l); }
    assert.equal(M.labelSim({ format: 'tryout', kode: LM, bagian: OP }), 'Latihan UKP B · PPh Orang Pribadi dan SPT PPh OP');
  });
  it('labelSim potongan nomor tetap " · soal 1–40"; kode tak dikenal memakai kata Paket', () => {
    assert.equal(M.labelSim({ format: 'tryout', kode: B, bagian: '1–40' }), 'Try Out UKP B · soal 1–40');
    assert.equal(M.labelSim({ format: 'tryout', kode: 'XX-1', bagian: '1–40' }), 'Paket XX-1 · soal 1–40');
    assert.equal(M.labelSim({ format: 'tryout', kode: 'XX-1' }), 'Paket XX-1');
  });
  it('waktuPaket 315 soal B = 662 menit (bukan baku); batas isian Menit memakai maksMenitTO', () => {
    assert.deepEqual(J(M.waktuPaket({ set: LM, n: 315, tingkat: 'B' }, 'B')), { menit: 662, baku: false, tingkat: 'B' });
    const sim = baca('js/views-simulasi.js');
    assert.ok(sim.includes('const maksMenitTO = () => { const p = paketAktif(); return Math.max(300, p ? waktuPaket(p, tingkat).menit : 0); };'));
    assert.ok(sim.includes('max: maksMenitTO()')); assert.ok(sim.includes('U.clamp(v, 5, maksMenitTO())'));
    assert.ok(/id: 'sim-m', type: 'number'[^\n]*max: 300/.test(sim), '#sim-m (Kustom) tetap 300');
  });
});

describe('v9.7.0 tiga paket try out tidak berubah', () => {
  const { UKP } = muat(); const K = UKP.konten; const M = UKP.simulasiTim._murni;
  const paket = set => K.daftarSet().find(p => p.set === set);
  it('potonganPaket(TO-B) sama dengan potonganTO(100)', () => {
    assert.deepEqual(J(M.potonganPaket(paket(B))), J(M.potonganTO(100)));
  });
  it('batas menit setara 300 untuk tiap paket try out', () => {
    for (const s of [B, C1, C2, C3]) for (const t of ['A', 'B', 'C']) assert.equal(Math.max(300, M.waktuPaket(paket(s), t).menit), 300, s + ' ' + t);
  });
  it('labelSim potongan nomor paket C', () => {
    assert.ok(M.labelSim({ format: 'tryout', kode: C1, bagian: '41–50' }).endsWith(' · soal 41–50'));
  });
  it('penjelas paket tanpa bagian masih "Komposisi kelompok: "', () => {
    const sim = baca('js/views-simulasi.js');
    assert.ok(sim.includes("'kelompok: '")); assert.ok(sim.includes("'. Komposisi ' + komposisi"));
  });
});

describe('v9.7.0 Simulasi: run paket, label, penjelas, banner, dan sambungan layar', () => {
  const { UKP } = muat(); const K = UKP.konten; sisipLM(UKP); const M = UKP.simulasiTim._murni;
  const paket = set => K.daftarSet().find(p => p.set === set);
  const sim = baca('js/views-simulasi.js');
  it('runPaket bagian bernama: dari, sampai, dan namaBagian bagian kedua; tingkat dari paket', () => {
    assert.deepEqual(J(M.runPaket(paket(LM), 'b2', 9, 'A')), { format: 'tryout', kode: LM, tingkat: 'B', menit: 9, dari: 5, sampai: 7, namaBagian: KUP });
    assert.deepEqual(J(M.runPaket(paket(LM), 'b3', 7, 'B')), { format: 'tryout', kode: LM, tingkat: 'B', menit: 7, dari: 8, sampai: 10, namaBagian: PPN });
  });
  it('runPaket potongan nomor try out: namaBagian null', () => {
    assert.deepEqual(J(M.runPaket(paket(B), '41-80', 84, 'B')), { format: 'tryout', kode: B, tingkat: 'B', menit: 84, dari: 41, sampai: 80, namaBagian: null });
    assert.deepEqual(J(M.runPaket(paket(C2), '41-50', 21, 'B')), { format: 'tryout', kode: C2, tingkat: 'C', menit: 21, dari: 41, sampai: 50, namaBagian: null });
  });
  it('runPaket bagian yang tidak dikenal kembali ke Semua', () => {
    assert.deepEqual(J(M.runPaket(paket(LM), 'b9', 21, 'B')), { format: 'tryout', kode: LM, tingkat: 'B', menit: 21, dari: 1, sampai: 10, namaBagian: null });
    assert.deepEqual(J(M.runPaket(paket(B), 'b2', 210, 'B')), { format: 'tryout', kode: B, tingkat: 'B', menit: 210, dari: 1, sampai: 100, namaBagian: null });
    assert.equal(M.pilihPotongan(paket(LM), 'semua').nilai, 'semua'); assert.equal(M.pilihPotongan(paket(LM), 'b1').nama, OP);
  });
  it('runPaket lalu susunAttempt: soal bagian kedua, label riwayat menyebut mata uji', () => {
    const a = M.susunAttempt(M.runPaket(paket(LM), 'b2', null, 'B'));
    assert.deepEqual(J(a.soalIds), J(K.soalSet(LM).slice(4, 7).map(x => x.id)));
    assert.equal(a.bagian, KUP); assert.equal(M.labelSim(a), 'Latihan UKP B · ' + KUP);
  });
  it('judulPotongan: nama mata uji, kata soal untuk potongan nomor, label paket untuk Semua', () => {
    const pot = M.potonganPaket(paket(LM)); const potB = M.potonganPaket(paket(B));
    assert.equal(M.judulPotongan(paket(LM), pot[2]), 'Latihan UKP B per mata uji · ' + KUP);
    assert.equal(M.judulPotongan(paket(LM), pot[0]), 'Latihan UKP B per mata uji');
    assert.equal(M.judulPotongan(paket(B), potB[2]), 'Try Out UKP B · soal 41–80');
    assert.equal(M.judulPotongan(paket(B), potB[0]), 'Try Out UKP B');
  });
  it('teksPaket: kalimat persis untuk mata uji, potongan nomor, dan paket utuh', () => {
    const pot = M.potonganPaket(paket(LM)); const potB = M.potonganPaket(paket(B)); const potC2 = M.potonganPaket(paket(C2));
    assert.equal(M.teksPaket(paket(LM), pot[2], 7, 'K', 'B'), JUDUL_LM + ': ' + KUP + ', 3 soal dalam urutan asli paket. Waktu bawaan 7 menit (tempo ujian). Pembahasan muncul setelah dikirim.');
    assert.equal(M.teksPaket(paket(B), potB[1], 84, 'K', 'B'), 'Try Out UKP B (transkrip 6 Nov 2026): soal 1–40 dari 100 dalam urutan asli paket, waktu bawaan 84 menit (tempo ujian). Pembahasan muncul setelah dikirim.');
    assert.equal(M.teksPaket(paket(B), potB[0], 210, 'kelompok: X', 'B'), 'Try Out UKP B (transkrip 6 Nov 2026): 100 soal dalam urutan asli paket, waktu bawaan seperti UKP Tingkat B. Komposisi kelompok: X. Pembahasan muncul setelah dikirim.');
    assert.equal(M.teksPaket(paket(C2), potC2[0], 105, 'K', 'B'), 'Try Out UKP C Paket 2 (transkrip 13 Nov 2026): 50 soal dalam urutan asli paket, waktu bawaan 105 menit (tempo ujian Tingkat C). Komposisi K. Pembahasan muncul setelah dikirim.');
  });
  it('teksBannerPaket: jumlah soal yang dikerjakan, hanya 40 soal atau lebih dan layar di bawah 900', () => {
    const t = n => 'Paket ' + n + ' soal sebaiknya dikerjakan di laptop, seperti ujian sesungguhnya.';
    assert.equal(M.teksBannerPaket(315, 390), t(315)); assert.equal(M.teksBannerPaket(53, 320), t(53));
    assert.equal(M.teksBannerPaket(40, 899), t(40)); assert.equal(M.teksBannerPaket(39, 320), null);
    assert.equal(M.teksBannerPaket(16, 390), null); assert.equal(M.teksBannerPaket(100, 900), null); assert.equal(M.teksBannerPaket(315, 1280), null);
  });
  it('banner paket try out utuh sama dengan v9.6.6: 100, 100, 50 soal tetap tampil di HP', () => {
    const n = s => { const b = M.pilihPotongan(paket(s), 'semua'); return b.sampai - b.dari + 1; };
    assert.equal(M.teksBannerPaket(n(B), 390), 'Paket 100 soal sebaiknya dikerjakan di laptop, seperti ujian sesungguhnya.');
    assert.equal(M.teksBannerPaket(n(C1), 320), 'Paket 100 soal sebaiknya dikerjakan di laptop, seperti ujian sesungguhnya.');
    assert.equal(M.teksBannerPaket(n(C2), 390), 'Paket 50 soal sebaiknya dikerjakan di laptop, seperti ujian sesungguhnya.');
  });
  it('layar memakai fungsi murni: potAktif, runDariCfg, perkiraan, teksTO, banner', () => {
    for (const t of [
      'const potAktif = () => pilihPotongan(paketAktif(), cfg.bagianTO);',
      "return cfg.format === 'tryout' ? runPaket(paketAktif(), cfg.bagianTO, menitTO(), tingkat) :",
      "return [menitTO(), String(p ? b.sampai - b.dari + 1 : 0), judulPotongan(p, b)]; }",
      'const teksTO = (p, komposisi) => teksPaket(p, potAktif(), menitTO(), komposisi, tingkat);',
      'const t = teksBannerPaket(p ? b.sampai - b.dari + 1 : 0, window.innerWidth);',
      "tp.textContent = teksTO(p, komposisi); gantiBanner(); gambarRingkas(); };",
      '          bannerTO());',
    ]) assert.equal(sim.split(t).length - 1, 1, t);
    assert.ok(!sim.includes("UKP.c.banner('Paket ' + (p ? p.n : '')"), 'banner lama memakai jumlah paket utuh');
  });
  it('sambungan event: pilihan Mata uji di Simulasi dan Sumber soal di Latih', () => {
    assert.equal(sim.split("id: 'sim-bagian-mu', onchange: e => pilihBagian(e.target.value)").length - 1, 1);
    assert.equal(sim.split('onPilih: pilihBagian }').length - 1, 1, 'segmen Bagian try out');
    assert.equal(baca('js/views-belajar.js').split("id: 'f-set', onchange: e => { f.set = e.target.value; hitung(); }").length - 1, 1);
  });
});

// buang komentar blok, baris komentar, dan komentar "// ..." sesudah kode (bukan di dalam string berisi "://")
const tanpaKomentar = src => src.replace(/\/\*[\s\S]*?\*\//g, '').split('\n').filter(b => !/^\s*\/\//.test(b)).map(b => b.replace(/\s\/\/\s.*$/, '')).join('\n');

describe('v9.7.0 kata "Try Out" sebagai label umum', () => {
  const src = ['js/views-simulasi.js', 'js/views-belajar.js', 'js/views-home.js'].map(f => tanpaKomentar(baca(f))).join('\n');
  it('tidak ada lagi di teks layar', () => {
    for (const t of ["'Try Out'", "'Try Out '", "'Try out '", "asli try out'", "asli try out, '", "'Paket try out'", 'paket try out dengan']) assert.ok(!src.includes(t), t);
  });
  it('label baru dan kendali baru ada', () => {
    for (const t of ["label: 'Paket soal'", "id: 'sim-bagian-mu'", "id: 'f-set'"]) assert.ok(src.includes(t), t);
    assert.ok(src.includes("h('label', { for: 'f-set' }, 'Sumber soal')"));
  });
});

describe('v9.7.0 lembar jawab ujian tim, kode paket, kop soal', () => {
  it('lembar jawab ujian tim 400 nomor', () => {
    const s = baca('js/views-ujian-tim.js');
    assert.ok(!s.includes('Math.min(200')); assert.ok(!s.includes('slice(0, 200)')); assert.ok(s.includes('max: 400'));
    // teks persis: batas jumlah nomor, isian n, dan dua salinan daftar soal untuk tinjau
    assert.equal(s.split('Math.max(1, Math.min(400, Math.round(Number(lj.n) || 40)))').length - 1, 1);
    assert.equal(s.split('lj.n = Math.min(400, v)').length - 1, 1);
    assert.equal(s.split('soalIds: info.soalIds.slice(0, 400)').length - 1, 2);
  });
  it('KODE_RE di tim.js dan deploy/lib-hasil.js menerima LM-', () => {
    for (const f of ['js/tim.js', 'deploy/lib-hasil.js']) assert.ok(baca(f).includes('(?:TO|LM)-[ABC]-[0-9]{4}-[0-9]{2}'), f);
  });
  it('kop soal: judulSumber menyebut sumber.bagian', () => {
    const baris = baca('js/soal.js').split('\n').filter(b => b.includes('const judulSumber = '));
    assert.equal(baris.length, 1); assert.ok(baris[0].includes('sb.bagian'));
    assert.ok(baris[0].includes("+ (typeof sb.bagian === 'string' && sb.bagian ? ' · ' + sb.bagian : '')"), baris[0]);
  });
});

describe('v9.7.0 Mulai latihan bersama: sumber per mata uji', () => {
  const { UKP } = muat(); const K = UKP.konten; const lm = sisipLM(UKP);
  const S = UKP.ruangUI._sumberMulai; const LB = UKP.latihBank;
  UKP.store.get().profil.tingkat = 'B';
  it('opsi dialog dibuat dari K.bagianSet: satu opsi per mata uji tepat sesudah paketnya', () => {
    const op = S.opsiSumberPaket(K.daftarSet(), K);
    assert.deepEqual(J(op), [
      ['set:' + B, 'Try Out UKP B'], ['set:' + C1, 'Try Out UKP C Paket 1'], ['set:' + C2, 'Try Out UKP C Paket 2'],
      ['set:' + C3, 'Try Out UKP C Paket 3'],
      ['set:' + LM, 'Latihan UKP B per mata uji'],
      ['set:' + LM + '|kode:A1', 'Latihan UKP B · ' + OP, 'Latihan UKP B per mata uji', OP],
      ['set:' + LM + '|kode:A2', 'Latihan UKP B · ' + KUP, 'Latihan UKP B per mata uji', KUP],
      ['set:' + LM + '|kode:A4', 'Latihan UKP B · PPN', 'Latihan UKP B per mata uji', PPN],
    ]);
  });
  it('daftar pilihan: opsi per mata uji dalam satu optgroup berlabel label paket, teksnya hanya nama mata uji', () => {
    const pilihan = [['acak', 'Acak Tingkat B']].concat(S.opsiSumberPaket(K.daftarSet(), K)).concat([['topik:A1.3', 'Topik terlemah: X']]);
    assert.deepEqual(J(S.kelompokPilihan(pilihan)), [
      { grup: null, opsi: [['acak', 'Acak Tingkat B']] },
      { grup: null, opsi: [['set:' + B, 'Try Out UKP B']] }, { grup: null, opsi: [['set:' + C1, 'Try Out UKP C Paket 1']] }, { grup: null, opsi: [['set:' + C2, 'Try Out UKP C Paket 2']] }, { grup: null, opsi: [['set:' + C3, 'Try Out UKP C Paket 3']] },
      { grup: null, opsi: [['set:' + LM, 'Latihan UKP B per mata uji']] },
      { grup: 'Latihan UKP B per mata uji', opsi: [['set:' + LM + '|kode:A1', OP], ['set:' + LM + '|kode:A2', KUP], ['set:' + LM + '|kode:A4', PPN]] },
      { grup: null, opsi: [['topik:A1.3', 'Topik terlemah: X']] },
    ]);
  });
  it('dua mata uji di satu modul: paket hanya mendapat opsi utuh', () => {
    const u = muat(); sisipLM(u.UKP, [[OP, 'A1', 2], [KUP, 'A1', 1], [PPN, 'A4', 1]]);
    assert.equal(u.UKP.konten.bagianSet(LM).length, 3);
    const op = u.UKP.ruangUI._sumberMulai.opsiSumberPaket(u.UKP.konten.daftarSet(), u.UKP.konten);
    assert.deepEqual(J(op.filter(x => x[0].startsWith('set:' + LM))), [['set:' + LM, 'Latihan UKP B per mata uji']]);
  });
  it('bagian yang soalnya tersebar di dua modul: paket tanpa opsi per mata uji', () => {
    const u = muat(); sisipLM(u.UKP, [[OP, 'A1', 2], [KUP, 'A2', 1], [KUP, 'A3', 1]]);
    const op = u.UKP.ruangUI._sumberMulai.opsiSumberPaket(u.UKP.konten.daftarSet(), u.UKP.konten);
    assert.deepEqual(J(op.filter(x => x[0].startsWith('set:' + LM))), [['set:' + LM, 'Latihan UKP B per mata uji']]);
  });
  it('dialog memakai opsiSumberPaket dan uraiSumber', () => {
    const src = baca('js/views-ruang.js');
    assert.ok(src.includes("[['acak', 'Acak Tingkat ' + tingkat]].concat(opsiSumberPaket(paket, K))"));
    assert.ok(src.includes('const pSumber = () => { const p = { n }; return Object.assign(p, uraiSumber(sumber, n)); };'));
    assert.ok(src.includes("'Sumber: ' + labelSumber()"));
    // teks persis: ringkas menyebut sumber; labelSumber membaca larik pilihan (bukan isi select), jadi optgroup tidak mengubahnya
    assert.equal(src.split("if (labelSumber()) ringkas.textContent = 'Sumber: ' + labelSumber() + '. ' + ringkas.textContent;").length - 1, 1);
    assert.equal(src.split("const labelSumber = () => { const x = pilihan.find(q => q[0] === sumber); return x ? x[1] : ''; };").length - 1, 1);
    assert.equal(src.split("onchange: e => { sumber = e.target.value; aturN(n); } }, isiPilihanSumber(pilihan));").length - 1, 1);
    assert.ok(src.includes("return k.grup ? h('optgroup', { label: k.grup }, opsi) : opsi[0];"));
  });
  it('nilai "set:...|kode:..." terurai menjadi { n, set, kode }', () => {
    assert.deepEqual(J(S.uraiSumber('set:' + LM + '|kode:A4', 20)), { n: 20, set: LM, kode: 'A4' });
    assert.deepEqual(J(S.uraiSumber('set:' + B, 10)), { n: 10, set: B });
    assert.deepEqual(J(S.uraiSumber('topik:A1.3', 40)), { n: 40, topik: 'A1.3' });
    assert.deepEqual(J(S.uraiSumber('acak', 20)), { n: 20 });
  });
  it('jumlahMulaiRoom menyaring kode: hanya soal paket di modul itu', () => {
    assert.equal(LB.jumlahMulaiRoom({ n: 40, set: LM }), 10);
    assert.equal(LB.jumlahMulaiRoom({ n: 40, set: LM, kode: 'A4' }), 3);
    assert.equal(LB.jumlahMulaiRoom({ n: 40, set: LM, kode: 'A1' }), 4);
    assert.equal(LB.jumlahMulaiRoom({ n: 2, set: LM, kode: 'A1' }), 2);
    assert.equal(LB.jumlahMulaiRoom({ n: 40, set: LM, kode: 'B7' }), 0);
    assert.equal(LB.jumlahMulaiRoom({ n: 20, set: B }), 20, 'paket try out tetap');
  });
  it('Latih dengan set dan kode: basis = soal paket di modul itu (sama dengan jumlahMulaiRoom)', () => {
    const src = baca('js/views-belajar.js');
    assert.ok(src.includes('let arr = g.set ? K.soalSet(g.set).filter(x => !g.kode || x.kode === g.kode)'));
    const harap = K.soalSet(LM).filter(x => x.kode === 'A4').map(x => x.id);
    assert.deepEqual(J(harap), J(lm.filter(x => x.kode === 'A4').map(x => x.id)));
  });
  it('catatan paket di Latih menunjuk Kelompok di bawah dan Mata uji di Simulasi', () => {
    const src = baca('js/views-belajar.js');
    assert.ok(src.includes("(bg.length ? '; ' + bg.length + ' mata uji. Untuk satu mata uji, pilih Kelompok di bawah atau Mata uji di Simulasi' : '; kelompok ' + p.kelompok.join(', ')) + '. Pilih \"Semua\" untuk urutan asli paket.'"));
    assert.ok(!src.includes('Pilih satu mata uji di Simulasi'));
    // Kelompok memang berada di bawah Sumber soal
    assert.ok(src.indexOf("h('label', { for: 'f-set' }, 'Sumber soal')") < src.indexOf("h('label', { for: 'f-kode' }, 'Kelompok')"));
  });
  it('tanpa paket LM: opsi tetap empat paket try out (v10.3.1: Paket 3 ikut)', () => {
    lepasLM(UKP);
    assert.deepEqual(J(S.opsiSumberPaket(K.daftarSet(), K).map(x => x[0])), ['set:' + B, 'set:' + C1, 'set:' + C2, 'set:' + C3]);
  });
});

describe('v9.7.0 ukuran berkas offline', () => {
  it('label tombol unduh dan komentar service worker menyebut ±15 MB', () => {
    assert.ok(baca('js/views-alat.js').includes("'Unduh berkas offline (±15 MB)'"));
    assert.ok(!baca('js/views-alat.js').includes('±5 MB'));
    assert.ok(baca('js/app.js').includes('data materi ±15 MB'));
  });
});
