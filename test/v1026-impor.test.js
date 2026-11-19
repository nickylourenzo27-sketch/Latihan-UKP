/* Uji v10.2.6: room milik perangkat, bukan bagian dari data belajar.
   Ekspor tidak membawa "ruang"; impor teks atau berkas membuang "ruang" di dalamnya dan mempertahankan "ruang" perangkat ini.
   Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const KEY = 'ukp.v1';
const J = x => JSON.parse(JSON.stringify(x));
const eq = (a, b, pesan) => assert.deepEqual(J(a), J(b), pesan);
const tunggu = ms => new Promise(r => setTimeout(r, ms));

function muat(isi) {
  const simpanan = new Map(Object.entries(isi || {}));
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
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/core.js'), 'utf8'), ctx, { filename: 'js/core.js' });
  return { UKP: ctx.UKP, simpanan };
}

const profil = nama => ({ nama, tingkat: 'C', onboardingSelesai: true });
const roomLaptop = () => ({ kode: 'ABCD-EFGH-JKLM', nama: 'Nicky', peran: 'tuan', namaRoom: 'Tim UKP C', dibuat: 1700000000000,
  state: { urut: 5, tuan: 'Nicky', room: { nama: 'Tim UKP C', peserta: ['Nicky', 'Mita'] } } });
const roomHp = () => ({ kode: 'WXYZ-2345-6789', nama: 'Nora', peran: 'anggota', namaRoom: 'Tim malam', dibuat: 1700000001000,
  state: { urut: 9, tuan: 'Jeni', room: { nama: 'Tim malam', peserta: ['Jeni', 'Nora'] } } });
// laptop pemimpin: profil Nicky, satu jawaban, room tersimpan sebagai pemimpin
function laptop() {
  const L = muat(); const s = L.UKP.store.get();
  Object.assign(s.profil, profil('Nicky')); s.jawaban.push({ soal: 'C1-001', konteks: 'latih', pada: 1700000000000 }); s.ruang = roomLaptop();
  return L;
}

describe('v10.2.6: ekspor tidak membawa room', () => {
  it('teks ekspor tidak memuat kunci "ruang"; data belajar tetap ada', () => {
    const { UKP } = laptop();
    const o = JSON.parse(UKP.store.ekspor());
    assert.equal(Object.prototype.hasOwnProperty.call(o.data, 'ruang'), false);
    assert.ok(!/ABCD-EFGH-JKLM/.test(JSON.stringify(o)), 'kode room tidak ikut ke berkas');
    assert.equal(o.data.profil.nama, 'Nicky'); assert.equal(o.data.jawaban.length, 1);
    assert.equal(o.aplikasi, 'pelatih-ukp');
  });
  it('ekspor tidak menghapus room dari perangkat yang mengekspor', async () => {
    const { UKP, simpanan } = laptop();
    UKP.store.ekspor(); UKP.store.flush(); await tunggu(100);
    eq(UKP.store.get().ruang, roomLaptop());
    eq(JSON.parse(simpanan.get(KEY)).ruang, roomLaptop());
    assert.equal(typeof UKP.store.get().eksporTerakhir, 'number');
  });
});

describe('v10.2.6: impor teks atau berkas tidak memindahkan room', () => {
  // ekspor versi lama (sampai v10.2.5) masih membawa "ruang" dengan peran pemimpin
  const eksporLama = () => JSON.stringify({ aplikasi: 'pelatih-ukp', versi: '9.0', data: Object.assign(J(laptop().UKP.store.get()), { pakai: {} }) });

  it('HP tanpa room: sesudah impor tetap tanpa room, data belajar masuk', () => {
    const { UKP, simpanan } = muat();
    assert.ok(/"peran":"tuan"/.test(eksporLama()), 'berkas uji memang membawa peran pemimpin');
    assert.equal(UKP.store.impor(eksporLama()), true);
    const s = UKP.store.get();
    assert.equal(Object.prototype.hasOwnProperty.call(s, 'ruang'), false);
    assert.equal(s.profil.nama, 'Nicky'); assert.equal(s.jawaban.length, 1);
    assert.equal(Object.prototype.hasOwnProperty.call(JSON.parse(simpanan.get(KEY)), 'ruang'), false, 'yang tersimpan juga tanpa room');
  });
  it('HP yang sedang di room lain: room HP dipertahankan, objeknya tetap sama', () => {
    const { UKP, simpanan } = muat(); const s = UKP.store.get();
    Object.assign(s.profil, profil('Nora')); s.ruang = roomHp(); const pegangan = s.ruang;
    UKP.store.impor(eksporLama());
    assert.equal(UKP.store.get(), s, 'state diganti di tempat');
    assert.equal(s.ruang, pegangan, 'room yang sedang berjalan memegang objek yang sama');
    eq(s.ruang, roomHp()); assert.equal(s.profil.nama, 'Nicky');
    eq(JSON.parse(simpanan.get(KEY)).ruang, roomHp());
    // tulisan room sesudah impor tetap tersimpan
    s.ruang.state.urut = 10; UKP.store.flush();
    assert.equal(JSON.parse(simpanan.get(KEY)).ruang.state.urut, 10);
  });
  it('data mentah tanpa amplop (teks) dan teks dengan BOM diperlakukan sama', () => {
    const mentah = J(laptop().UKP.store.get());
    for (const teks of [JSON.stringify(mentah), '﻿' + eksporLama() + '\n']) {
      const { UKP } = muat(); UKP.store.impor(teks);
      assert.equal(UKP.store.get().ruang, undefined); assert.equal(UKP.store.get().profil.nama, 'Nicky');
    }
  });
  it('"ruang" yang bukan objek di perangkat ini tidak dibawa', () => {
    const { UKP } = muat(); UKP.store.get().ruang = 'rusak';
    UKP.store.impor(eksporLama());
    assert.equal(Object.prototype.hasOwnProperty.call(UKP.store.get(), 'ruang'), false);
  });
  it('impor ekspor baru (tanpa "ruang") di laptop pemimpin sendiri: room laptop tetap', () => {
    const { UKP } = laptop(); const teks = UKP.store.ekspor();
    UKP.store.get().jawaban.length = 0;
    UKP.store.impor(teks);
    eq(UKP.store.get().ruang, roomLaptop()); assert.equal(UKP.store.get().jawaban.length, 1);
  });
  it('impor yang ditolak tidak mengubah apa pun', () => {
    const { UKP } = muat(); const s = UKP.store.get(); s.ruang = roomHp();
    assert.throws(() => UKP.store.impor('bukan json'));
    assert.throws(() => UKP.store.impor(JSON.stringify({ aplikasi: 'lain', data: { profil: {} } })));
    assert.throws(() => UKP.store.impor(JSON.stringify({ ruang: roomLaptop() })));
    eq(s.ruang, roomHp());
  });
});

describe('v10.2.6: pemulihan di perangkat yang sama', () => {
  it('arsip ganti akun (objek, js/tim.js) dipulihkan beserta room-nya', () => {
    const arsip = J(laptop().UKP.store.get());
    const { UKP } = muat(); UKP.store.reset();
    UKP.store.impor(arsip);
    eq(UKP.store.get().ruang, roomLaptop());
  });
  it('js/tim.js memanggil impor dengan objek arsip, tombol Pengaturan dengan teks', () => {
    const tim = fs.readFileSync(path.join(ROOT, 'js/tim.js'), 'utf8'); const alat = fs.readFileSync(path.join(ROOT, 'js/views-alat.js'), 'utf8');
    assert.match(tim, /const arsip = lsGet\('ukp\.arsip:' \+ baru, null\);[\s\S]{0,120}UKP\.store\.impor\(arsip\)/);
    assert.match(alat, /impor\(ta\.value, GALAT_KOTAK\)/);
    assert.match(alat, /impor\(String\(r\.result \|\| ''\), GALAT_BERKAS\)/);
    assert.match(alat, /async function impor\(json, galat\) \{[\s\S]{0,260}UKP\.store\.impor\(json\);/);
    assert.match(alat, /lalu Impor\. Room tidak ikut pindah\. Di perangkat lain, buka tautan room lalu ketuk nama Anda\.'/);
    const semua = fs.readdirSync(path.join(ROOT, 'js')).filter(f => f.endsWith('.js')).map(f => [f, fs.readFileSync(path.join(ROOT, 'js', f), 'utf8')]);
    const pemanggil = semua.filter(([, t]) => /store\.impor\(/.test(t)).map(([f]) => f).sort();
    eq(pemanggil, ['tim.js', 'views-alat.js'], 'pemanggil baru harus ditinjau: teks dari luar atau arsip perangkat ini');
  });
  it('muat ulang membaca room yang tersimpan apa adanya', () => {
    const awal = J(laptop().UKP.store.get());
    const { UKP } = muat({ [KEY]: JSON.stringify(awal) });
    eq(UKP.store.get().ruang, roomLaptop());
  });
});
