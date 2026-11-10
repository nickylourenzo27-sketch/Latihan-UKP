/* Dasbor tim (js/tim.js): ringkasan dari state contoh, kode hasil bolak-balik (JSON dan deflate), inflate sinkron vs node:zlib,
   normalisasi data tak tepercaya, dan alur capability dengan window.claude tiruan (db + user in-memory) serta tanpa window.claude. */
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const zlib = require('node:zlib');

// konteks peramban minimal: core.js + tim.js; localStorage dari Map; claude opsional
function muat(opsi) {
  opsi = opsi || {};
  const noop = () => {};
  const simpan = new Map(Object.entries(opsi.ls || {}));
  const el = () => ({ appendChild: noop, setAttribute: noop, removeAttribute: noop, addEventListener: noop, style: { setProperty: noop }, dataset: {}, classList: { add: noop, remove: noop } });
  const peristiwa = [];
  const ctx = {
    Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON, Promise,
    TextEncoder, TextDecoder, btoa, atob, Uint8Array, Uint16Array, Map, Set,
    CompressionStream: opsi.tanpaKompresi ? undefined : CompressionStream,
    CustomEvent: function (type, init) { this.type = type; this.detail = init && init.detail; },
    document: { addEventListener: noop, removeEventListener: noop, dispatchEvent: e => peristiwa.push(e), body: null, head: null, getElementById: () => null, createElement: el, documentElement: el(), querySelector: () => null, querySelectorAll: () => [], visibilityState: 'visible', cookie: opsi.cookie || '' },
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: k => simpan.has(k) ? simpan.get(k) : null, setItem: (k, v) => simpan.set(k, String(v)), removeItem: k => simpan.delete(k) },
    location: opsi.fetch ? { hash: '', protocol: 'https:', replace: u => { (ctx.__pindah = ctx.__pindah || []).push(u); } } : { hash: '' }, history: { replaceState: noop, pushState: noop },
    navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop,
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t && t.unref) t.unref(); return t; }, clearTimeout,
    setInterval: (f, ms) => { const t = setInterval(f, ms); if (t && t.unref) t.unref(); return t; }, clearInterval,
  };
  if (opsi.claude) ctx.claude = opsi.claude;
  if (opsi.fetch) { ctx.fetch = opsi.fetch; ctx.AbortController = AbortController; }
  ctx.window = ctx; vm.createContext(ctx);
  for (const b of ['core.js', 'tim.js']) vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', b), 'utf8'), ctx, { filename: b });
  return { UKP: ctx.UKP, simpan, peristiwa, ctx };
}

// db + user tiruan (bentuk mengikuti db.d.ts / user.d.ts): set/get/delete/onSnapshot dok, onSnapshot koleksi
function claudeTiruan(o) {
  o = o || {};
  const dok = new Map(); const pend = new Set(); const log = [];
  const snapDok = (id) => ({ id, exists: dok.has(id), data: () => dok.has(id) ? JSON.parse(JSON.stringify(dok.get(id))) : undefined, metadata: { fromCache: false, hasPendingWrites: false } });
  const kabari = () => { for (const f of pend) f({ docs: Array.from(dok.keys()).sort().map(snapDok), size: dok.size, empty: !dok.size, docChanges: () => [], metadata: { fromCache: false, hasPendingWrites: false } }); };
  const db = {
    collection(p) {
      return {
        path: p,
        doc(id) {
          return {
            id, path: p + '/' + id,
            async get() { return snapDok(id); },
            async set(d) { log.push({ op: 'set', id, d }); if (o.tolak) throw { code: o.tolak, message: 'tolak' }; dok.set(id, JSON.parse(JSON.stringify(d))); setTimeout(kabari, 0); },
            async delete() { log.push({ op: 'delete', id }); dok.delete(id); setTimeout(kabari, 0); },
            onSnapshot(next) { next(snapDok(id)); return () => {}; },
          };
        },
        onSnapshot(next) { pend.add(next); setTimeout(kabari, 0); return () => pend.delete(next); },
      };
    },
  };
  const user = {
    async id() { return o.uid === undefined ? 'u_anggota1' : o.uid; },
    async me() { return { id: o.uid === undefined ? 'u_anggota1' : o.uid, name: 'Rina (akun)', avatarUrl: 'data:,', color: '#000', email: null, isOwner: !!o.pemilik, canEdit: !!o.pemilik }; },
    async isOwner() { return !!o.pemilik; },
    async profiles(ids) { const r = {}; [].concat(ids).forEach(i => { r[i] = { id: i, name: '', avatarUrl: 'data:,', color: '#000', email: null, isMe: false, guest: false }; }); return r; },
  };
  return { claude: { use: async n => n === 'db' ? (o.tanpaDb ? null : db) : n === 'user' ? user : null }, dok, log };
}

// state contoh: kini = 9 Nov 2026 12.00 waktu lokal
const KINI = new Date(2026, 10, 9, 12, 0, 0).getTime();
const HARI = 86400000;
function stateContoh() {
  const j = (hariLalu, kode, topik, benar, konteks, opsi) => ({ soal: kode + '-001', topik, kode, benar, opsi: opsi || (benar ? 'a' : 'b'), detik: 30, konteks: konteks || 'latih', pada: KINI - hariLalu * HARI });
  return {
    profil: { nama: '  Budi Santoso  ', tingkat: 'B', onboardingSelesai: true },
    jawaban: [
      j(1, 'A2', 'A2.1', true), j(1, 'A2', 'A2.1', false), j(2, 'A2', 'A2.1', false), j(3, 'A2', 'A2.1', false),     // 7 hari: A2.1 1/4
      j(5, 'B7', 'B7.2', true), j(6, 'B7', 'B7.2', true),                                                           // 7 hari: 2/2
      j(10, 'B7', 'B7.2', false),                                                                                     // 14 hari, bukan 7
      j(30, 'A3', 'A3.1', true),                                                                                      // di luar 14 hari
      j(1, 'B6', 'B6.1', false, 'simulasi', 'c'),                                                                     // simulasi: bukan latihan
      j(1, 'A2', 'A2.1', false, 'latih', '-'),                                                                        // "tidak tahu": diabaikan
    ],
    sesi: [{ tgl: '2026-11-08', menit: 10 }, { tgl: '2026-11-01', menit: 10 }, { tgl: '2026-10-20', menit: 10 }],
    simulasi: [
      { id: 'sim-1', format: 'USKP', tingkat: 'B', kode: 'B7', mulai: KINI - 2 * HARI - 50 * 60000, selesai: KINI - 2 * HARI, skor: 62.5, benar: 5, total: 8, menit: 90,
        soalIds: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'], jawaban: { s1: 'a', s2: 'a', s3: 'a', s4: 'a', s5: 'a', s6: 'b', s7: '-' }, perKel: { B7: { benar: 5, total: 8 } } },
      { id: 'sim-akt', selesai: null },
    ],
    hadir: { '2026-11-09': { status: 'HADIR' }, '2026-11-08': { status: 'IZIN' }, '2026-11-07': { status: 'HADIR' }, '2026-11-06': { status: 'HADIR' }, '2026-10-01': { status: 'HADIR' } },
  };
}

test('ringkasan: dihitung dari jawaban, sesi, simulasi, dan hadir sesuai kontrak', () => {
  const { UKP } = muat();
  const r = UKP.tim._ringkasan(stateContoh(), { kini: KINI, versiApp: '7.5' });
  assert.equal(r.nama, 'Budi Santoso');
  assert.equal(r.tingkat, 'B');
  assert.equal(r.versiApp, '7.5');
  assert.equal(r.diperbarui, new Date(KINI).toISOString());
  assert.equal(r.latihan.total, 8);
  assert.equal(r.latihan.benar, 4);
  assert.equal(r.latihan.akurasi7, 0.5);                // 3 dari 6 dalam 7 hari
  assert.equal(r.latihan.sesi7, 1);                     // 8 Nov saja (1 Nov di luar 3–9 Nov)
  assert.equal(r.latihan.terakhir, new Date(KINI - HARI).toISOString());
  assert.deepEqual(JSON.parse(JSON.stringify(r.latihan.perKelompok)), { A2: { n: 4, benar: 1 }, B7: { n: 3, benar: 2 } });
  assert.deepEqual(JSON.parse(JSON.stringify(r.latihan.perTopikLemah)), [{ id: 'A2.1', n: 4, benar: 1 }, { id: 'B7.2', n: 3, benar: 2 }]);
  assert.equal(r.simulasi.length, 1);
  const s = r.simulasi[0];
  assert.equal(s.id, 'sim-1'); assert.equal(s.tingkat, 'B'); assert.equal(s.skor, 62.5);
  assert.equal(s.benar, 5); assert.equal(s.kosong, 2); assert.equal(s.salah, 1); assert.equal(s.jumlah, 8);
  assert.equal(s.menit, 50); assert.equal(s.lulus, true);
  assert.deepEqual(JSON.parse(JSON.stringify(s.perKelompok)), { B7: { n: 8, benar: 5 } });
  assert.equal(r.hadir.hari14, 3);
  assert.equal(r.hadir.rangkaian, 3);                    // IZIN tidak memutus, tidak menambah
  // jawaban per soal ringkas (kontrak v7.7): 8 latihan + 1 "tidak tahu" dalam 30 hari; simulasi 's1'… bukan id soal sah → dilewati;
  // log berkonteks 'simulasi' tidak dipakai (simulasi diambil dari rekaman s.simulasi). Tanpa teks soal/opsi
  assert.equal(r.jawaban.length, 9);
  const kunciE = ['b', 'd', 'k', 'm', 'o', 's', 't', 'w'];
  r.jawaban.forEach(e => assert.deepEqual(Object.keys(e).sort(), kunciE));
  for (let i = 1; i < r.jawaban.length; i++) assert.ok(r.jawaban[i - 1].w >= r.jawaban[i].w, 'terbaru dulu');
  assert.equal(r.jawaban.filter(e => e.o === '-').length, 1); assert.ok(r.jawaban.every(e => e.m === 'latihan'));
  assert.deepEqual(JSON.parse(JSON.stringify(r.jawaban[r.jawaban.length - 1])), { s: 'A3-001', t: 'A3.1', o: 'A', b: 1, d: 30, w: Math.floor((KINI - 30 * HARI) / 1000), m: 'latihan', k: null });
  const json = JSON.stringify(r);
  assert.ok(!/"opsi"|"soalIds"|"stem"/.test(json));
});

test('jawaban per soal: simulasi dari rekaman (konten + cadangan log), keyakinan, mode, batas 400/30 hari, normalisasi', () => {
  const { UKP } = muat();
  const st = stateContoh();
  // latihan berkeyakinan, sesi, diagnosis (→ sesi), cek, dan entri lama (> 30 hari) yang tidak dibawa
  st.jawaban.push({ soal: 'A2-002', topik: 'A2.1', kode: 'A2', benar: false, opsi: 'C', detik: 41.6, konteks: 'latih', keyakinan: 'yakin', pada: KINI - 1000 },
    { soal: 'A2-003', topik: 'A2.1', kode: 'A2', benar: true, opsi: 'B', detik: 12, konteks: 'sesi', pada: KINI - 2000 },
    { soal: 'A2-004', topik: 'A2.1', kode: 'A2', benar: true, opsi: 'B', detik: 12, konteks: 'diagnosis', pada: KINI - 3000 },
    { soal: 'A2-005', topik: 'A2.1', kode: 'A2', benar: true, opsi: 'D', detik: 12, konteks: 'cek', keyakinan: 'palsu', pada: KINI - 4000 },
    { soal: 'A2-006', topik: 'A2.1', kode: 'A2', benar: true, opsi: 'D', detik: 12, konteks: 'latih', pada: KINI - 31 * HARI },
    // log simulasi (cadangan topik/benar bila konten tidak dimuat)
    { soal: 'B7-010', topik: 'B7.2', kode: 'B7', benar: true, opsi: 'A', detik: 50, konteks: 'simulasi', pada: KINI - HARI / 2 },
    { soal: 'B7-011', topik: 'B7.3', kode: 'B7', benar: false, opsi: 'C', detik: 70, konteks: 'simulasi', pada: KINI - HARI / 2 });
  st.simulasi.push({ id: 'sim-x9', format: 'USKP', tingkat: 'B', kode: 'B7', mulai: KINI - HARI / 2 - 3600000, selesai: KINI - HARI / 2, skor: 33.3, benar: 1, total: 3, menit: 90,
    soalIds: ['B7-010', 'B7-011', 'B7-012'], jawaban: { 'B7-010': 'A', 'B7-011': 'C' }, ragu: ['B7-011'], detik: { 'B7-010': 50, 'B7-011': 70, 'B7-012': 5 }, perKel: { B7: { benar: 1, total: 3 } } });
  // tanpa konten: B7-012 (kosong, tanpa log) tidak punya topik → dilewati
  let r = UKP.tim._ringkasan(st, { kini: KINI });
  let sim = r.jawaban.filter(e => e.m === 'simulasi');
  assert.equal(sim.length, 2);
  assert.deepEqual(JSON.parse(JSON.stringify(sim)), [
    { s: 'B7-011', t: 'B7.3', o: 'C', b: 0, d: 70, w: Math.floor((KINI - HARI / 2) / 1000) - 1, m: 'simulasi', sim: 'sim-x9', k: 'ragu' },
    { s: 'B7-010', t: 'B7.2', o: 'A', b: 1, d: 50, w: Math.floor((KINI - HARI / 2) / 1000) - 2, m: 'simulasi', sim: 'sim-x9', k: null }]);
  // dengan konten: semua soal simulasi termasuk yang kosong (o '-'), kunci dari soal
  UKP.konten = { soal: id => ({ 'B7-010': { topik: 'B7.2', kunci: 'A' }, 'B7-011': { topik: 'B7.3', kunci: 'B' }, 'B7-012': { topik: 'B7.4', kunci: 'D' } })[id] || null };
  r = UKP.tim._ringkasan(st, { kini: KINI });
  sim = r.jawaban.filter(e => e.m === 'simulasi');
  assert.deepEqual(Array.from(sim, e => e.s + ':' + e.o + ':' + e.b + ':' + e.t), ['B7-012:-:0:B7.4', 'B7-011:C:0:B7.3', 'B7-010:A:1:B7.2']);
  assert.equal(sim[0].w, Math.floor((KINI - HARI / 2) / 1000), 'soal terakhir = waktu selesai');
  const cari = id => r.jawaban.find(e => e.s === id);
  assert.equal(cari('A2-002').k, 'yakin'); assert.equal(cari('A2-002').d, 42); assert.equal(cari('A2-002').o, 'C');
  assert.equal(cari('A2-003').m, 'sesi'); assert.equal(cari('A2-004').m, 'sesi'); assert.equal(cari('A2-005').m, 'cek'); assert.equal(cari('A2-005').k, null);
  assert.equal(cari('A2-006'), undefined, 'lebih dari 30 hari');
  // statistik latihan lama tidak berubah (log simulasi tetap di luar latihan)
  assert.equal(r.latihan.total, 13);
  // batas 400 entri terbaru, ukuran seluruh ringkasan ≤ 120 KB
  const banyak = { profil: { nama: 'X' }, jawaban: Array.from({ length: 900 }, (_, i) => ({ soal: 'C10-' + String(i).padStart(3, '0'), topik: 'C10.8', kode: 'C10', benar: i % 2 === 0, opsi: 'ABCD'[i % 4], detik: 99, konteks: 'latih', keyakinan: 'menebak', pada: KINI - (900 - i) * 60000 })) };
  const rb = UKP.tim._ringkasan(banyak, { kini: KINI });
  assert.equal(rb.jawaban.length, 400); assert.equal(rb.jawaban[0].s, 'C10-899'); assert.equal(rb.jawaban[399].s, 'C10-500');
  assert.ok(Buffer.byteLength(JSON.stringify(rb)) <= UKP.tim.MAKS_BYTE);
  // normalisasi data tak tepercaya: entri rusak dibuang, nilai dijepit, maks 400, urut terbaru dulu; room tanpa jawaban
  const raw = Object.assign({}, rb, { jawaban: [
    { s: 'A1-001', t: 'A1.1', o: 'B', b: 1, d: 1e9, w: 1e12, m: 'latihan', k: 'yakin', x: 'abaikan' },
    { s: '<img>', t: 'A1.1', o: 'B', b: 1, d: 1, w: 1, m: 'latihan' }, { s: 'A1-002', t: 'A1.1', o: 'E', b: 1, d: 1, w: 1, m: 'latihan' },
    { s: 'A1-003', t: 'A1.1', o: '-', b: 1, d: -4, w: 5, m: 'simulasi', sim: 'SIM-1', k: 'yakin' }, { s: 'A1-004', t: 'A1.1', o: 'A', b: 1, d: 1, w: 9, m: 'tutor' },
    { s: 'A1-005', t: 'A1.1', o: 'A', b: 2, d: 1, w: 7, m: 'cek', sim: '../x', k: 'aneh' }, 'teks', null] });
  const a = UKP.tim._normalAnggota(raw, 'u_x', 'db');
  assert.deepEqual(Array.from(a.jawaban, e => e.s), ['A1-001', 'A1-005', 'A1-003']);
  assert.ok(a.jawaban[0].w <= Math.floor(Date.now() / 1000) + 300); assert.equal(a.jawaban[0].d, 86400); assert.ok(!('x' in a.jawaban[0]));
  assert.deepEqual(JSON.parse(JSON.stringify(a.jawaban[2])), { s: 'A1-003', t: 'A1.1', o: '-', b: 0, d: 0, w: 5, m: 'simulasi', sim: 'SIM-1', k: null });
  assert.deepEqual(JSON.parse(JSON.stringify(a.jawaban[1])), { s: 'A1-005', t: 'A1.1', o: 'A', b: 0, d: 1, w: 7, m: 'cek', k: null });
  assert.equal(UKP.tim._normalAnggota(Object.assign({}, rb, { jawaban: Array(500).fill(rb.jawaban[0]) }), 'u_x', 'db').jawaban.length, 400);
  assert.equal(UKP.tim._normalAnggota(Object.assign({}, rb, { jawaban: 'bukan larik' }), 'u_x', 'db').jawaban.length, 0);
  assert.ok(!('jawaban' in UKP.tim._normalAnggota(rb, 'anon_x', 'room')));
  // room: presence tidak membawa jawaban; kode hasil membawanya
  assert.ok(!('jawaban' in UKP.tim._ringkasRoom(rb, { ukp: 1, id: '1b4e28ba-2fa1-4d3b-a3f5-ef19b5a7633b' })));
  const k = UKP.tim._kodeJson(Object.assign({ id: 'lokal-abc12345' }, rb));
  assert.equal(UKP.tim._bacaKode(k).jawaban.length, 400);
});

test('ringkasan: state kosong aman (akurasi7 null, daftar kosong)', () => {
  const { UKP } = muat();
  const r = UKP.tim._ringkasan({}, { kini: KINI });
  assert.equal(r.latihan.total, 0); assert.equal(r.latihan.akurasi7, null); assert.equal(r.latihan.terakhir, null);
  assert.equal(r.simulasi.length, 0); assert.equal(r.hadir.hari14, 0); assert.equal(r.tingkat, 'A');
});

test('kode hasil: JSON dan deflate bolak-balik lewat tempelKode, disimpan di ukp.tim.manual', async () => {
  const { UKP, simpan } = muat();
  const muatan = Object.assign({ id: 'lokal-abc12345' }, UKP.tim._ringkasan(stateContoh(), { kini: KINI }));
  const kj = UKP.tim._kodeJson(muatan);
  const kz = await UKP.tim._kodeZ(muatan);
  assert.match(kj, /^UKP1\.j[A-Za-z0-9_-]+\.[0-9a-z]+$/);
  assert.match(kz, /^UKP1\.z[A-Za-z0-9_-]+\.[0-9a-z]+$/);
  assert.ok(kz.length < kj.length, 'deflate lebih pendek');
  for (const k of [kj, kz, '  ' + kz.slice(0, 20) + '\n' + kz.slice(20) + ' ']) {
    const a = UKP.tim._bacaKode(k);
    assert.ok(a, 'kode terbaca');
    assert.equal(a.id, 'lokal-abc12345'); assert.equal(a.sumber, 'kode'); assert.equal(a.nama, 'Budi Santoso');
    assert.equal(a.latihan.total, 8); assert.equal(a.simulasi[0].skor, 62.5); assert.equal(a.hadir.rangkaian, 3);
  }
  const a = UKP.tim.tempelKode(kz);
  assert.ok(a);
  assert.equal(UKP.tim.daftarManual().length, 1);
  assert.ok(simpan.get('ukp.tim.manual').includes('lokal-abc12345'));
  // tempel ulang id yang sama: diganti, bukan ditambah
  UKP.tim.tempelKode(kj);
  assert.equal(UKP.tim.daftarManual().length, 1);
  // gabung: dok db dengan id sama dan lebih baru menang
  const dbBaru = Object.assign({}, a, { sumber: 'db', diperbarui: new Date(KINI + HARI).toISOString(), nama: 'Budi (db)' });
  const g = UKP.tim.gabung([dbBaru]);
  assert.equal(g.length, 1); assert.equal(g[0].nama, 'Budi (db)');
  assert.equal(UKP.tim.hapusManual('lokal-abc12345'), true);
  assert.equal(UKP.tim.daftarManual().length, 0);
});

test('kode hasil: tanpa CompressionStream tetap JSON; kode rusak ditolak', async () => {
  const { UKP } = muat({ tanpaKompresi: true });
  const muatan = Object.assign({ id: 'lokal-abc12345' }, UKP.tim._ringkasan(stateContoh(), { kini: KINI }));
  const k = await UKP.tim._kodeZ(muatan);
  assert.match(k, /^UKP1\.j/);
  const [kepala, cek] = [k.slice(0, k.lastIndexOf('.')), k.slice(k.lastIndexOf('.') + 1)];
  const ubah = kepala.slice(0, 12) + (kepala[12] === 'A' ? 'B' : 'A') + kepala.slice(13) + '.' + cek;
  for (const salah of ['', 'halo', 'UKP2.' + k.slice(5), ubah, k.slice(0, -1) + (k.slice(-1) === '0' ? '1' : '0'), 'UKP1.zAAAA.' + '0']) assert.equal(UKP.tim.tempelKode(salah), null, JSON.stringify(salah.slice(0, 30)));
  assert.equal(UKP.tim.daftarManual().length, 0);
});

test('inflate sinkron: sama dengan node:zlib (blok tetap, dinamis, tersimpan)', () => {
  const { UKP } = muat();
  const sampel = ['', 'a', 'Pajak Penghasilan § 21 — ñ日本語🙂', JSON.stringify(stateContoh()).repeat(30), Array.from({ length: 5000 }, (_, i) => String.fromCharCode(33 + (i * 7919) % 90)).join('')];
  for (const t of sampel) for (const level of [0, 1, 9]) {
    const z = zlib.deflateRawSync(Buffer.from(t, 'utf8'), { level });
    const out = UKP.tim._inflateRaw(new Uint8Array(z));
    assert.equal(Buffer.from(out).toString('utf8'), t);
  }
  assert.throws(() => UKP.tim._inflateRaw(new Uint8Array([0xff, 0xff, 0xff])));
});

test('normalisasi: data anggota tak tepercaya dibersihkan', () => {
  const { UKP } = muat();
  const raw = JSON.parse('{"nama":"<img src=x>' + 'x'.repeat(100) + '","tingkat":"Z","diperbarui":"bukan tanggal","latihan":{"total":-5,"benar":99,"akurasi7":7,"perKelompok":{"__proto__":{"n":1},"A2":{"n":3,"benar":9},"xx":{"n":1}},"perTopikLemah":[{"id":"A2.1","n":2,"benar":5},{"id":"rusak"}]},"simulasi":[{"skor":1e9,"jumlah":10,"benar":50,"format":"<b>"}],"hadir":{"hari14":99}}');
  const a = UKP.tim._normalAnggota(raw, 'u_x', 'db');
  assert.equal(a.nama.length, 40); assert.equal(a.tingkat, 'A'); assert.equal(a.diperbarui, null);
  assert.equal(a.latihan.total, 0); assert.equal(a.latihan.benar, 0); assert.equal(a.latihan.akurasi7, 1);
  assert.deepEqual(Object.keys(a.latihan.perKelompok), ['A2']); assert.equal(a.latihan.perKelompok.A2.benar, 3);
  assert.equal(a.latihan.perTopikLemah.length, 1); assert.equal(a.latihan.perTopikLemah[0].benar, 2);
  assert.equal(a.simulasi[0].skor, 100); assert.equal(a.simulasi[0].benar, 10); assert.equal(a.simulasi[0].format, '');
  assert.equal(a.hadir.hari14, 14);
  assert.equal(UKP.tim._normalAnggota('teks', 'u_x'), null);
  assert.equal(UKP.tim._normalAnggota({}, '../jahat').id, 'tanpa-id');
});

// ---------- alur capability ----------
function isiState(UKP) { const s = UKP.store.get(); Object.assign(s, stateContoh()); s.profil = Object.assign(s.profil, stateContoh().profil); }

test('tanpa window.claude: status mati, tidak ada tulis, pantau memanggil cb([]) sekali, kode hasil tetap tersedia', async () => {
  const { UKP } = muat();
  isiState(UKP);
  assert.equal(await UKP.tim.siap(), null);
  assert.equal(UKP.tim.status(), 'mati');
  await UKP.tim.kirimRingkasan({ segera: true });
  const daftar = await new Promise(r => UKP.tim.pantau(d => r(d)));
  assert.deepEqual(Array.from(daftar), []);
  const k = UKP.tim.kodeHasil();
  assert.match(k, /^UKP1\.[jz]/);
  assert.ok(UKP.tim._bacaKode(k));
  assert.match(await UKP.tim.kodeHasilAsync(), /^UKP1\.z/);
  assert.equal(UKP.tim.kodeHasil().slice(0, 6), 'UKP1.z', 'setelah disiapkan, versi terkompres dipakai');
});

// bekukan Date.now selama satu uji agar jendela waktu (mis. 30 hari jawaban) dihitung relatif terhadap KINI fixture, bukan jam nyata
function bekukanWaktu(t, kini) { const asli = Date.now; Date.now = () => kini; t.after(() => { Date.now = asli; }); }

test('window.claude tiruan: tersambung, kirim satu kali per perubahan, pantau melihat dok, aktif=false tidak menulis', async (tc) => {
  bekukanWaktu(tc, KINI); // tepat KINI: entri 30 hari lalu masih di dalam jendela HARI_JAWAB (batas inklusif)
  const t = claudeTiruan();
  const { UKP, simpan } = muat({ claude: t.claude });
  isiState(UKP);
  const c = await UKP.tim.siap();
  assert.ok(c); assert.equal(c.uid, 'u_anggota1'); assert.equal(c.nama, 'Budi Santoso');
  assert.equal(UKP.tim.status(), 'tersambung');
  assert.equal(UKP.tim.aktif, true);
  await UKP.tim.kirimRingkasan({ segera: true });
  assert.equal(t.log.filter(x => x.op === 'set').length, 1);
  const d = t.dok.get('u_anggota1');
  assert.equal(d.nama, 'Budi Santoso'); assert.equal(d.tingkat, 'B'); assert.equal(d.latihan.total, 8); assert.ok(Array.isArray(d.simulasi));
  assert.deepEqual(Object.keys(d).sort(), ['diperbarui', 'hadir', 'jawaban', 'latihan', 'nama', 'simulasi', 'tingkat', 'versiApp']);
  assert.equal(d.jawaban.length, 9); assert.equal(d.jawaban[0].m, 'latihan');
  assert.ok(simpan.get('ukp.tim.kirim'));
  // tanpa perubahan: tidak ditulis ulang
  await UKP.tim.kirimRingkasan({ segera: true });
  assert.equal(t.log.filter(x => x.op === 'set').length, 1);
  // pantau
  const daftar = await new Promise(r => UKP.tim.pantau(x => { if (x.length) r(x); }));
  assert.equal(daftar.length, 1); assert.equal(daftar[0].id, 'u_anggota1'); assert.equal(daftar[0].saya, true); assert.equal(daftar[0].sumber, 'db');
  // aktif=false: tidak menulis walau ada perubahan
  UKP.tim.aktif = false;
  assert.equal(UKP.store.get().profil.bagiHasilTim, false);
  UKP.store.get().jawaban.push({ soal: 'A2-009', topik: 'A2.1', kode: 'A2', benar: true, opsi: 'a', konteks: 'latih', pada: Date.now() });
  await UKP.tim.kirimRingkasan({ segera: true });
  assert.equal(t.log.filter(x => x.op === 'set').length, 1);
  // berhenti berbagi menghapus dok sendiri
  assert.equal(await UKP.tim.hapusRingkasan(), true);
  assert.equal(t.dok.has('u_anggota1'), false);
  // aktif lagi: perubahan terkirim
  UKP.tim.aktif = true;
  await UKP.tim.kirimRingkasan({ segera: true });
  assert.equal(t.log.filter(x => x.op === 'set').length, 2);
  assert.equal(t.dok.get('u_anggota1').latihan.total, 9);
});

test('window.claude tiruan: debounce menggabungkan beberapa panggilan menjadi satu tulis', async () => {
  const t = claudeTiruan();
  const { UKP } = muat({ claude: t.claude });
  isiState(UKP);
  await UKP.tim.siap();
  const p1 = UKP.tim.kirimRingkasan(); const p2 = UKP.tim.kirimRingkasan();
  assert.equal(p1, p2);
  assert.equal(t.log.length, 0, 'belum menulis sebelum jeda');
  await UKP.tim.kirimRingkasan({ segera: true });
  await p1;
  assert.equal(t.log.filter(x => x.op === 'set').length, 1);
});

test('window.claude tiruan: tanpa akun, tanpa db, dan penolakan ditangani diam-diam lewat status', async () => {
  {
    const t = claudeTiruan({ uid: null });
    const { UKP } = muat({ claude: t.claude }); isiState(UKP);
    assert.equal(await UKP.tim.siap(), null); assert.equal(UKP.tim.status(), 'tanpa-akun');
    await UKP.tim.kirimRingkasan({ segera: true }); assert.equal(t.log.length, 0);
  }
  {
    const t = claudeTiruan({ tanpaDb: true });
    const { UKP } = muat({ claude: t.claude }); isiState(UKP);
    assert.equal(await UKP.tim.siap(), null); assert.equal(UKP.tim.status(), 'mati');
  }
  {
    const t = claudeTiruan({ tolak: 'invalid_argument' });
    const { UKP } = muat({ claude: t.claude }); isiState(UKP);
    await UKP.tim.siap(); await UKP.tim.kirimRingkasan({ segera: true });
    assert.equal(UKP.tim.status(), 'tersambung'); assert.equal(UKP.tim.info().tulisDitolak, true); assert.equal(UKP.tim.info().galat, 'tidak-diizinkan');
    await UKP.tim.kirimRingkasan({ segera: true }); assert.equal(t.log.length, 1, 'tidak mencoba lagi setelah ditolak');
  }
  {
    const t = claudeTiruan({ tolak: 'not_granted' });
    const { UKP } = muat({ claude: t.claude }); isiState(UKP);
    await UKP.tim.siap(); await UKP.tim.kirimRingkasan({ segera: true });
    assert.equal(UKP.tim.status(), 'mati');
  }
  {
    const t = claudeTiruan({ pemilik: true });
    const { UKP } = muat({ claude: t.claude });
    assert.equal(await UKP.tim.pemimpin(), true);
    // onboarding belum selesai dan tanpa aktivitas: tidak ada dok kosong
    await UKP.tim.kirimRingkasan({ segera: true }); assert.equal(t.log.length, 0);
  }
});

// ---------- temuan tinjauan: Latih soal terhitung, race berhenti berbagi, peran pemimpin, nama berawalan rumus ----------
test('anggota yang hanya memakai Latih soal: soal7 dan hari7 terisi walau sesi harian nol', () => {
  const { UKP } = muat();
  const j = (hariLalu, benar) => ({ soal: 'A2-001', topik: 'A2.1', kode: 'A2', benar, opsi: 'a', konteks: 'latih', pada: KINI - hariLalu * HARI });
  const r = UKP.tim._ringkasan({ profil: { nama: 'Rina', tingkat: 'A' }, jawaban: [j(0, true), j(0, false), j(1, true), j(9, true)], sesi: [] }, { kini: KINI });
  assert.equal(r.latihan.sesi7, 0);
  assert.equal(r.latihan.soal7, 3);
  assert.equal(r.latihan.hari7, 2);
  const a = UKP.tim._normalAnggota(JSON.parse(JSON.stringify(r)), 'u1', 'db');
  assert.equal(a.latihan.soal7, 3); assert.equal(a.latihan.hari7, 2);
  // dok lama tanpa soal7: null, bukan 0
  assert.equal(UKP.tim._normalAnggota({ nama: 'X', latihan: { total: 2 } }, 'u2').latihan.soal7, null);
});

test('berhenti berbagi saat kiriman sedang berjalan: dok tidak muncul lagi', async () => {
  const t = claudeTiruan();
  // set lambat 300 ms
  const asli = t.claude.use;
  t.claude.use = async n => { const ns = await asli(n); if (n !== 'db' || !ns) return ns; return { collection: p => { const c = ns.collection(p); return Object.assign({}, c, { doc: id => { const d = c.doc(id); return Object.assign({}, d, { set: async x => { await new Promise(r => setTimeout(r, 300)); return d.set(x); } }); } }); } }; };
  const { UKP } = muat({ claude: t.claude });
  isiState(UKP);
  await UKP.tim.siap();
  const p = UKP.tim.kirimRingkasan({ segera: true });
  await new Promise(r => setTimeout(r, 50));
  UKP.tim.aktif = false;
  const ok = await UKP.tim.hapusRingkasan();
  await p;
  await new Promise(r => setTimeout(r, 20));
  assert.equal(ok, true);
  assert.equal(t.dok.has('u_anggota1'), false, 'dok tidak boleh mendarat setelah hapus');
  assert.equal(t.log[t.log.length - 1].op, 'delete');
  assert.equal(UKP.tim.info().terakhirKirim, null);
});

test('bolehDasbor: pemilik ya, anggota tersambung tidak, tanpa window.claude ya (kode hasil lokal)', async () => {
  { const t = claudeTiruan({ pemilik: true }); const { UKP } = muat({ claude: t.claude }); assert.equal(await UKP.tim.bolehDasbor(), true); }
  { const t = claudeTiruan(); const { UKP } = muat({ claude: t.claude }); assert.equal(await UKP.tim.bolehDasbor(), false); }
  { const t = claudeTiruan({ uid: null }); const { UKP } = muat({ claude: t.claude }); assert.equal(await UKP.tim.bolehDasbor(), false); }
  { const { UKP } = muat(); assert.equal(await UKP.tim.bolehDasbor(), true); }
});

test('nama berawalan karakter rumus dibersihkan saat dinormalkan', () => {
  const { UKP } = muat();
  assert.equal(UKP.tim._normalAnggota({ nama: '=HYPERLINK("http://x","klik")' }, 'u1').nama, 'HYPERLINK("http://x","klik")');
  assert.equal(UKP.tim._normalAnggota({ nama: '@SUM(A1)' }, 'u1').nama, 'SUM(A1)');
  assert.equal(UKP.tim._normalAnggota({ nama: 'Rina' }, 'u1').nama, 'Rina');
});

// ---------- jalur room (tamu tanpa db → pemimpin) ----------
// bus room tiruan (bentuk mengikuti room.d.ts): presence digabung per field, onPeers menerima snapshot penuh, emit disiarkan ke semua
function busRoom() {
  const anggota = []; let n = 0;
  const salin = x => JSON.parse(JSON.stringify(x));
  function kabari() {
    for (const p of anggota.slice()) {
      const view = Object.freeze(anggota.map(q => Object.freeze({ peer: q.id, by: q.by, isMe: q === p, sameTab: q === p, kind: 'viewer', guest: q.guest, presence: Object.freeze(salin(q.presence)), updatedAt: q.updatedAt })));
      p.hp.forEach(f => f({ peers: view, joined: [], left: [], updated: [] }));
    }
  }
  return {
    anggota,
    room(o) {
      o = o || {};
      const me = { id: 'p' + (++n), by: o.by || null, guest: !!o.guest, presence: {}, updatedAt: Date.now(), hp: new Set(), ho: new Map() };
      anggota.push(me); setTimeout(kabari, 0);
      return {
        connected: () => true,
        async presence(patch) { for (const k of Object.keys(patch)) { if (patch[k] === null) delete me.presence[k]; else me.presence[k] = salin(patch[k]); } me.updatedAt = Date.now(); setTimeout(kabari, 0); },
        async emit(topic, data) {
          if (o.emitDitolak) throw { code: 'not_permitted', message: 'tidak diizinkan' };
          me.emit = (me.emit || 0) + 1;
          anggota.forEach(q => (q.ho.get(topic) || new Set()).forEach(f => setTimeout(() => f({ topic, data: salin(data), peer: me.id, by: me.by, isMe: q === me, sameTab: q === me, kind: 'viewer', guest: me.guest }), 0)));
        },
        on(topic, f) { if (!me.ho.has(topic)) me.ho.set(topic, new Set()); me.ho.get(topic).add(f); return () => me.ho.get(topic).delete(f); },
        onPeers(f) { me.hp.add(f); setTimeout(kabari, 0); return () => me.hp.delete(f); },
        peers: () => [],
      };
    },
    pergi(i) { anggota.splice(i, 1); setTimeout(kabari, 0); },
  };
}
const tunggu = ms => new Promise(r => setTimeout(r, ms || 30));
const UUID = '1b4e28ba-2fa1-4d3b-a3f5-ef19b5a7633b';

test('room: pesan dinormalkan sebagai data tak tepercaya (id anonim, sumber room, pemimpin/rusak ditolak)', () => {
  const { UKP } = muat();
  const r = UKP.tim._ringkasan(stateContoh(), { kini: KINI });
  const a = UKP.tim._pesanRoom({ ukp: 1, id: UUID.toUpperCase(), ringkasan: Object.assign({}, r, { nama: '=Budi\u0007', jawaban: [1, 2] }) });
  assert.ok(a); assert.equal(a.id, 'anon_' + UUID); assert.equal(a.sumber, 'room'); assert.equal(a.nama, 'Budi'); assert.ok(!('jawaban' in a));
  assert.equal(a.latihan.total, 8);
  for (const salah of [null, 'teks', [], { id: UUID, ringkasan: r }, { ukp: 1, id: 'bukan-uuid', ringkasan: r }, { ukp: 1, id: '../' + UUID, ringkasan: r },
    { ukp: 1, id: UUID }, { ukp: 1, id: UUID, ringkasan: 'x' }, { ukp: 1, pemimpin: true, id: UUID, ringkasan: r }]) assert.equal(UKP.tim._pesanRoom(salah), null, JSON.stringify(salah && salah.id));
  // ringkasan besar dipangkas agar muatan presence/emit ≤ batas 4 KiB
  const besar = JSON.parse(JSON.stringify(r));
  besar.simulasi = Array.from({ length: 10 }, (_, i) => Object.assign({}, r.simulasi[0], { id: 'sim-' + i, perKelompok: { A1: { n: 9, benar: 5 }, A2: { n: 9, benar: 5 }, A3: { n: 9, benar: 5 }, A4: { n: 9, benar: 5 }, A5: { n: 9, benar: 5 }, B6: { n: 9, benar: 5 }, B7: { n: 9, benar: 5 }, B8: { n: 9, benar: 5 } } }));
  const kecil = UKP.tim._ringkasRoom(besar, { ukp: 1, id: UUID });
  assert.ok(kecil);
  assert.ok(Buffer.byteLength(JSON.stringify({ ukp: 1, id: UUID, ringkasan: kecil })) <= 3800);
  assert.ok(kecil.simulasi.length >= 1 && kecil.simulasi.length <= 5);
  assert.equal(UKP.tim._ringkasRoom(r, { ukp: 1, id: UUID }).simulasi.length, r.simulasi.length, 'ringkasan kecil tidak dipangkas');
});

test('gabung: sumber db, room (ukp.tim.terima), dan kode — data terbaru per id menang', () => {
  const r = id => ({ id, nama: 'N ' + id, tingkat: 'A', latihan: {}, simulasi: [], hadir: {} });
  const t0 = new Date(KINI - 3 * HARI).toISOString(), t1 = new Date(KINI - 2 * HARI).toISOString(), t2 = new Date(KINI - HARI).toISOString(); // masa lalu: cap waktu room dijepit ke jam kini
  const { UKP } = muat({ ls: {
    'ukp.tim.terima': JSON.stringify([Object.assign(r('anon_' + UUID), { diperbarui: t1, nama: 'Tamu (room)' }), Object.assign(r('lokal-zz'), { diperbarui: t2 })]),
    'ukp.tim.manual': JSON.stringify([Object.assign(r('anon_' + UUID), { diperbarui: t0, nama: 'Tamu (kode lama)' }), Object.assign(r('u_a'), { diperbarui: t2, nama: 'A (kode baru)' })]),
  } });
  const terima = UKP.tim.daftarTerima();
  assert.equal(terima.length, 1, 'hanya id anon_ yang diterima dari room'); assert.equal(terima[0].sumber, 'room');
  const db = [UKP.tim._normalAnggota(Object.assign(r('u_a'), { diperbarui: t1, nama: 'A (db)' }), 'u_a', 'db'),
    UKP.tim._normalAnggota(Object.assign(r('anon_' + UUID), { diperbarui: t0, nama: 'Tamu (db lama)' }), 'anon_' + UUID, 'room')];
  const g = UKP.tim.gabung(db);
  const per = Object.fromEntries(g.map(a => [a.id, a]));
  assert.equal(g.length, 2);
  assert.equal(per['anon_' + UUID].nama, 'Tamu (room)'); assert.equal(per['anon_' + UUID].sumber, 'room');
  assert.equal(per.u_a.nama, 'A (kode baru)'); assert.equal(per.u_a.sumber, 'kode');
});

test('room: tamu tanpa db terhubung langsung, pemimpin menerima, menyimpan, dan menulis tim/anon_<id> hanya bila isi berubah', async () => {
  const bus = busRoom();
  const tp = claudeTiruan({ uid: 'u_pimpin', pemilik: true });
  const claudePimpin = { use: async n => n === 'room' ? bus.room() : tp.claude.use(n) };
  const P = muat({ claude: claudePimpin });
  const T = muat({ claude: { use: async n => n === 'room' ? bus.room({ guest: true }) : null }, ls: { 'ukp.tim.id': JSON.stringify(UUID) } });
  isiState(T.UKP); T.UKP.store.get().profil.nama = 'Tamu Satu';
  const feed = []; P.UKP.tim.dengarLangsung(ev => feed.push(ev));
  assert.ok(await P.UKP.tim.siap());
  assert.equal(await T.UKP.tim.siap(), null);
  assert.ok(await P.UKP.tim.siapRoom()); assert.ok(await T.UKP.tim.siapRoom());
  await tunggu(60);
  // tamu
  const it = T.UKP.tim.info();
  assert.equal(T.UKP.tim.status(), 'langsung'); assert.equal(it.room, 'tamu'); assert.equal(it.langsung, true); assert.equal(it.pemimpinOnline, true);
  assert.match(T.UKP.tim.statusLangsung().teks, /Terhubung langsung ke pemimpin/);
  assert.equal(await T.UKP.tim.bolehDasbor(), false, 'tamu tidak melihat dasbor');
  // pemimpin: presence hanya penanda pemimpin (tidak ada daftar anggota yang dikirim ke tamu)
  const pres = bus.anggota.map(a => a.presence);
  assert.deepEqual(pres[0], { ukp: 1, pemimpin: true });
  assert.deepEqual(Object.keys(pres[1]).sort(), ['id', 'ringkasan', 'ukp']); assert.equal(pres[1].ringkasan.nama, 'Tamu Satu');
  const ip = P.UKP.tim.info();
  assert.equal(ip.room, 'pemimpin'); assert.equal(ip.online, 1); assert.deepEqual(Array.from(ip.onlineIds), ['anon_' + UUID]);
  const dok = tp.dok.get('anon_' + UUID);
  assert.ok(dok, 'dok anon ditulis pemimpin'); assert.equal(dok.sumber, 'room'); assert.equal(dok.nama, 'Tamu Satu'); assert.ok(!('id' in dok));
  assert.ok(P.simpan.get('ukp.tim.terima').includes('anon_' + UUID));
  assert.equal(P.UKP.tim.daftarTerima()[0].nama, 'Tamu Satu');
  assert.ok(feed.length >= 1 && feed[0].sebelum === null);
  const tulisAnon = () => tp.log.filter(x => x.op === 'set' && x.id === 'anon_' + UUID).length;
  assert.equal(tulisAnon(), 1);
  // sesi selesai tanpa perubahan isi: emit diterima, tidak ada tulis ulang
  await T.UKP.tim.kirimRingkasan({ selesai: true, segera: true }); await tunggu(60);
  assert.equal(tulisAnon(), 1, 'isi sama: tidak menulis lagi');
  // isi berubah: presence diperbarui → satu tulis baru; feed menerima selisih
  T.UKP.store.get().jawaban.push({ soal: 'A2-009', topik: 'A2.1', kode: 'A2', benar: true, opsi: 'a', detik: 20, konteks: 'latih', pada: Date.now() });
  await T.UKP.tim.kirimRingkasan({ selesai: true, segera: true }); await tunggu(60);
  assert.equal(tulisAnon(), 2); assert.equal(tp.dok.get('anon_' + UUID).latihan.total, 9);
  assert.ok(feed[feed.length - 1].sebelum && feed[feed.length - 1].anggota.latihan.total === 9);
  // pantau pemimpin melihat dok anon sebagai sumber room
  const daftar = await new Promise(r => { const lepas = P.UKP.tim.pantau(d => { if (d.length) { lepas(); r(d); } }); });
  assert.equal(daftar.find(a => a.id === 'anon_' + UUID).sumber, 'room');
  // berhenti berbagi: ringkasan ditarik dari presence → pemimpin tidak lagi menghitungnya online
  T.UKP.tim.aktif = false; await tunggu(60);
  assert.ok(!('ringkasan' in bus.anggota[1].presence));
  assert.equal(P.UKP.tim.info().online, 0);
  assert.equal(T.UKP.tim.info().langsung, false);
});

test('room: emit tidak diizinkan (Viewer) tetap mengirim lewat presence; tanpa pemimpin menunggu; tanpa room status mati', async () => {
  const bus = busRoom();
  const T = muat({ claude: { use: async n => n === 'room' ? bus.room({ guest: true, emitDitolak: true }) : null } });
  isiState(T.UKP);
  await T.UKP.tim.siap(); await T.UKP.tim.siapRoom(); await tunggu(40);
  assert.equal(T.UKP.tim.status(), 'langsung');
  assert.equal(T.UKP.tim.info().pemimpinOnline, false);
  assert.match(T.UKP.tim.statusLangsung().teks, /Pemimpin belum online/);
  assert.ok(bus.anggota[0].presence.ringkasan, 'presence tetap terpasang');
  await T.UKP.tim.kirimRingkasan({ selesai: true, segera: true }); await tunggu(40);
  assert.ok(!bus.anggota[0].emit);
  // pemimpin datang belakangan: presence tamu langsung diterima
  const tp = claudeTiruan({ uid: 'u_pimpin', pemilik: true });
  const P = muat({ claude: { use: async n => n === 'room' ? bus.room() : tp.claude.use(n) } });
  await P.UKP.tim.siap(); await P.UKP.tim.siapRoom(); await tunggu(60);
  assert.equal(P.UKP.tim.info().online, 1);
  assert.equal(T.UKP.tim.info().pemimpinOnline, true);
  assert.equal(tp.log.filter(x => x.op === 'set' && /^anon_/.test(x.id)).length, 1);
  // tanpa room (pengunjung tidak masuk): tetap mati, kode hasil tersedia
  const M = muat({ claude: { use: async () => null } });
  await M.UKP.tim.siap(); assert.equal(await M.UKP.tim.siapRoom(), null);
  assert.equal(M.UKP.tim.status(), 'mati'); assert.equal(M.UKP.tim.info().room, null);
});

// ---------- perbaikan keamanan dan privasi jalur room ----------
async function pemimpinRoom(bus) {
  const tp = claudeTiruan({ uid: 'u_pimpin', pemilik: true });
  const P = muat({ claude: { use: async n => n === 'room' ? bus.room() : tp.claude.use(n) } });
  await P.UKP.tim.siap(); await P.UKP.tim.siapRoom();
  return { tp, P };
}
function ringkasanTamu(UKP, ubah) { return Object.assign(UKP.tim._ringkasan(stateContoh(), { kini: KINI }), ubah || {}); }

test('room: tamu mematikan berbagi → tanda berhenti; pemimpin online menghapus dok db dan ukp.tim.terima', async () => {
  const bus = busRoom();
  const { tp, P } = await pemimpinRoom(bus);
  const T = muat({ claude: { use: async n => n === 'room' ? bus.room({ guest: true }) : null }, ls: { 'ukp.tim.id': JSON.stringify(UUID) } });
  isiState(T.UKP); T.UKP.store.get().profil.nama = 'Dewi';
  await T.UKP.tim.siap(); await T.UKP.tim.siapRoom(); await tunggu(60);
  assert.ok(tp.dok.has('anon_' + UUID)); assert.ok(P.UKP.tim.daftarTerima().length === 1);
  T.UKP.tim.aktif = false; await tunggu(60);
  assert.deepEqual(bus.anggota[1].presence, { ukp: 1, id: UUID, berhenti: true });
  assert.equal(tp.dok.has('anon_' + UUID), false, 'dok db dihapus pemimpin');
  assert.equal(P.UKP.tim.daftarTerima().length, 0, 'entri localStorage dihapus');
  assert.equal(tp.log.filter(x => x.op === 'delete').length, 1, 'tanda berhenti diproses sekali');
  // nyalakan lagi: tanda berhenti dicabut dan ringkasan masuk kembali
  T.UKP.tim.aktif = true; await tunggu(60);
  assert.ok(!('berhenti' in bus.anggota[1].presence)); assert.ok(tp.dok.has('anon_' + UUID));
  // teks status jujur
  const T2 = muat({ claude: { use: async n => n === 'room' ? busRoom().room({ guest: true }) : null } }); isiState(T2.UKP);
  await T2.UKP.tim.siap(); await T2.UKP.tim.siapRoom(); await tunggu(30);
  assert.match(T2.UKP.tim.statusLangsung().teks, /selagi halaman ini masih terbuka/);
  assert.doesNotMatch(T2.UKP.tim.statusLangsung().teks, /terkirim otomatis saat pemimpin/);
});

test('room: id anonim tidak dapat ditiru peer lain; cap waktu masa depan dijepit; Sender.by dipakai sebagai kunci', async () => {
  const bus = busRoom();
  const { tp, P } = await pemimpinRoom(bus);
  const T = muat({ claude: { use: async n => n === 'room' ? bus.room({ guest: true }) : null }, ls: { 'ukp.tim.id': JSON.stringify(UUID) } });
  isiState(T.UKP); T.UKP.store.get().profil.nama = 'Dewi';
  await T.UKP.tim.siap(); await T.UKP.tim.siapRoom(); await tunggu(60);
  // peniru memakai uuid Dewi dengan cap waktu 2099
  const palsu = bus.room({ guest: true });
  await palsu.presence({ ukp: 1, id: UUID, ringkasan: ringkasanTamu(T.UKP, { nama: 'Dewi Palsu', diperbarui: '2099-01-01T00:00:00.000Z', latihan: { total: 999, benar: 999 } }) });
  await palsu.emit('hasil', { ukp: 1, id: UUID, ringkasan: ringkasanTamu(T.UKP, { nama: 'Dewi Palsu 2' }) });
  await tunggu(60);
  assert.equal(tp.dok.get('anon_' + UUID).nama, 'Dewi'); assert.equal(P.UKP.tim.daftarTerima()[0].nama, 'Dewi');
  // peer yang sama tidak boleh berganti-ganti id (mencegah satu tab membuat banyak dok)
  const U2 = '2b4e28ba-2fa1-4d3b-a3f5-ef19b5a7633b';
  await palsu.presence({ id: U2, ringkasan: ringkasanTamu(T.UKP, { nama: 'Satu' }) }); await tunggu(40);
  const U3 = '3b4e28ba-2fa1-4d3b-a3f5-ef19b5a7633b';
  await palsu.presence({ id: U3, ringkasan: ringkasanTamu(T.UKP, { nama: 'Dua' }) }); await tunggu(40);
  assert.equal(tp.dok.has('anon_' + U3), false);
  // jepit waktu
  const a = P.UKP.tim._pesanRoom({ ukp: 1, id: UUID, ringkasan: { nama: 'X', diperbarui: '2099-01-01T00:00:00.000Z' } });
  assert.ok(Date.parse(a.diperbarui) <= Date.now() + 5 * 60000 + 1000);
  // pengirim dijamin platform (by): kunci room_<by>, isi id diabaikan
  const b = P.UKP.tim._pesanRoom({ ukp: 1, id: UUID, ringkasan: { nama: 'Y' } }, { by: 'u_dewi', peer: 'pz' });
  assert.equal(b.id, 'room_u_dewi');
  assert.equal(P.UKP.tim._pesanRoom({ ukp: 1, ringkasan: { nama: 'Y' } }, { by: 'u_dewi' }).id, 'room_u_dewi');
  assert.equal(P.UKP.tim._pesanRoom({ ukp: 1, id: UUID, ringkasan: { nama: 'Y' } }, { by: '../x' }).id, 'anon_' + UUID, 'by tidak sah diabaikan');
  const bus2 = busRoom(); const q = await pemimpinRoom(bus2);
  const B = muat({ claude: { use: async n => n === 'room' ? bus2.room({ guest: true, by: 'u_budi' }) : null } }); isiState(B.UKP);
  await B.UKP.tim.siap(); await B.UKP.tim.siapRoom(); await tunggu(60);
  assert.ok(q.tp.dok.has('room_u_budi')); assert.deepEqual(Array.from(q.P.UKP.tim.info().onlineIds), ['room_u_budi']);
});

test('room: dok db dibatasi (tanpa aktivitas tidak ditulis, maks 100 dok, batas laju per anggota)', async () => {
  const bus = busRoom();
  const { tp, P } = await pemimpinRoom(bus);
  const hex = i => i.toString(16).padStart(12, '0');
  // tanpa aktivitas: diterima lokal, tidak ditulis ke db
  const kosong = bus.room({ guest: true });
  await kosong.presence({ ukp: 1, id: '00000000-0000-4000-8000-' + hex(9999), ringkasan: { nama: 'Kosong', latihan: { total: 0 }, simulasi: [] } }); await tunggu(40);
  assert.equal(tp.log.filter(x => x.op === 'set').length, 0);
  // 105 peer berbeda dengan aktivitas: paling banyak 100 dok
  const r = ringkasanTamu(P.UKP);
  for (let i = 0; i < 105; i++) { const p = bus.room({ guest: true }); await p.presence({ ukp: 1, id: '00000000-0000-4000-8000-' + hex(i), ringkasan: Object.assign({}, r, { nama: 'A' + i }) }); }
  await tunggu(150);
  const dok = Array.from(tp.dok.keys()).filter(k => /^anon_/.test(k));
  assert.equal(dok.length, 100); assert.equal(P.UKP.tim.info().galat, 'kuota');
  // batas laju: satu anggota yang berubah terus hanya menulis 4 kali beruntun
  const bus2 = busRoom(); const q = await pemimpinRoom(bus2);
  const sat = bus2.room({ guest: true }); const id = '00000000-0000-4000-8000-' + hex(1);
  for (let i = 1; i <= 8; i++) { await sat.presence({ ukp: 1, id, ringkasan: Object.assign({}, r, { latihan: Object.assign({}, r.latihan, { total: 10 + i }) }) }); await tunggu(20); }
  await tunggu(40);
  assert.equal(q.tp.log.filter(x => x.op === 'set').length, 4);
  assert.equal(q.P.UKP.tim.daftarTerima()[0].latihan.total, 18, 'lokal tetap terbaru');
});


// ---------- jalur server sendiri (deploy/server.js) dengan fetch tiruan ----------
// serverTiruan: /api/saya, /api/hasil (PUT/DELETE), /api/tim, /api/tim/aliran (aliran SSE yang dapat didorong dari uji), keluar
function serverTiruan(o) {
  o = o || {};
  const log = []; const hasil = new Map(Object.entries(o.hasil || {})); const aliran = [];
  const enc = new TextEncoder();
  const json = (status, obj) => new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
  async function fetch(url, init) {
    init = init || {}; const metode = init.method || 'GET'; const hdr = init.headers || {};
    log.push({ url, metode, hdr, body: init.body });
    if (o.mati) throw new TypeError('Failed to fetch');
    if (o.hapusGagal && metode === 'DELETE') throw new TypeError('Failed to fetch');
    if (o.saya === 'gantung') return new Promise((_, tolak) => { if (init.signal) init.signal.addEventListener('abort', () => tolak(new Error('aborted'))); });
    if (url === 'keluar') return new Response('ok', { status: 200 });
    if (hdr['X-Requested-With'] !== 'UKP') return json(403, { galat: 'asal-ditolak' });
    if (o.sesiHabis) return json(401, { galat: 'perlu-masuk' });
    if (url === 'api/saya') return o.saya === 404 ? new Response('tidak ada', { status: 404 }) : json(200, { nama: o.nama || 'rina', admin: !!o.admin, server: true, versi: 1, hasil: hasil.has(o.nama || 'rina') ? { diperbarui: 'x' } : null });
    if (url === 'api/hasil' && metode === 'PUT') { const d = JSON.parse(init.body); hasil.set(o.nama || 'rina', Object.assign({}, d, { nama: o.nama || 'rina' })); return json(200, { ok: true }); }
    if (url === 'api/hasil' && metode === 'DELETE') { hasil.delete(o.nama || 'rina'); return json(200, { ok: true }); }
    if (url === 'api/tim') return o.admin ? json(200, { server: true, hasil: Array.from(hasil, ([n, d]) => Object.assign({}, d, { id: n, nama: n })), online: o.online || [], pengguna: [{ nama: 'rina', admin: false }, { nama: 'budi', admin: false }, { nama: 'nicky', admin: true }] }) : json(403, { galat: 'khusus-admin' });
    if (url === 'api/tim/aliran') {
      if (!o.admin) return json(403, {});
      if (o.aliranGagal) return new Response('x', { status: 503 });
      let ctl; const body = new ReadableStream({ start(c) { ctl = c; } });
      const a = { dorong: (ev, data) => ctl.enqueue(enc.encode('event: ' + ev + '\ndata: ' + JSON.stringify(data) + '\n\n')), tutup: () => ctl.close() };
      aliran.push(a); if (init.signal) init.signal.addEventListener('abort', () => { try { ctl.error(new Error('aborted')); } catch (e) {} });
      setTimeout(() => a.dorong('ping', { online: o.online || [] }), 0);
      return new Response(body, { status: 200, headers: { 'Content-Type': 'text/event-stream' } });
    }
    return json(404, {});
  }
  return { fetch, log, hasil, aliran };
}
// timer di konteks vm di-unref; uji asinkron server menjaga event loop tetap hidup sendiri
const ujiServer = (nama, f) => test(nama, async () => { const t = setInterval(() => {}, 20); try { await f(); } finally { clearInterval(t); } });
const samaJson = (a, b, pesan) => assert.equal(JSON.stringify(a), JSON.stringify(b), pesan);
const isiStateServer = (UKP, nama) => { const s = UKP.store.get(); Object.assign(s, stateContoh()); s.profil.nama = nama; UKP.store.save(); };

ujiServer('server: api/saya 200 → mode server; PUT api/hasil dengan header UKP; isi sama tidak dikirim ulang; window.claude tidak dipakai', async () => {
  const st = serverTiruan({ nama: 'rina' });
  const { UKP } = muat({ fetch: st.fetch });
  isiStateServer(UKP, '');
  const c = await UKP.tim.siap();
  assert.ok(c && c.server); assert.equal(UKP.tim.status(), 'tersambung');
  const i = UKP.tim.info();
  assert.equal(i.server, true); assert.equal(i.akun, 'rina'); assert.equal(i.admin, false); assert.equal(i.room, null);
  assert.equal(UKP.store.get().profil.nama, 'rina', 'nama akun server mengisi profil.nama yang kosong');
  assert.equal(JSON.stringify(st.log[0].hdr), JSON.stringify({ 'X-Requested-With': 'UKP' })); assert.equal(st.log[0].url, 'api/saya');
  await UKP.tim.kirimRingkasan({ segera: true });
  const put = st.log.filter(x => x.metode === 'PUT');
  assert.equal(put.length, 1); assert.equal(put[0].url, 'api/hasil');
  assert.equal(put[0].hdr['Content-Type'], 'application/json'); assert.equal(put[0].hdr['X-Requested-With'], 'UKP');
  const body = JSON.parse(put[0].body); assert.equal(body.latihan.total, 8); assert.ok(Array.isArray(body.jawaban) && body.jawaban.length > 0, 'jawaban per soal ikut PUT');
  assert.ok(UKP.tim.info().terakhirKirim);
  await UKP.tim.kirimRingkasan({ segera: true });
  assert.equal(st.log.filter(x => x.metode === 'PUT').length, 1, 'isi sama: tidak dikirim lagi');
  assert.equal(await UKP.tim.pemimpin(), false); assert.equal(await UKP.tim.bolehDasbor(), false);
  assert.equal(await UKP.tim.siapRoom(), null);
  // profil.nama yang sudah diisi tidak ditimpa
  const st2 = serverTiruan({ nama: 'budi' }); const B = muat({ fetch: st2.fetch }); isiStateServer(B.UKP, 'Budi Santoso');
  await B.UKP.tim.siap(); assert.equal(B.UKP.store.get().profil.nama, 'Budi Santoso');
});

ujiServer('server: server belum punya ringkasan (disk sementara terhapus) → dikirim ulang walau isi sama', async () => {
  const st = serverTiruan({ nama: 'rina' });
  const A = muat({ fetch: st.fetch }); isiStateServer(A.UKP, 'Rina');
  await A.UKP.tim.siap(); await A.UKP.tim.kirimRingkasan({ segera: true });
  const ls = Object.fromEntries(A.simpan);
  st.hasil.clear(); // server kehilangan data
  const B = muat({ fetch: st.fetch, ls }); 
  isiStateServer(B.UKP, 'Rina');
  await B.UKP.tim.siap(); await B.UKP.tim.kirimRingkasan({ segera: true });
  assert.equal(st.log.filter(x => x.metode === 'PUT').length, 2); assert.ok(st.hasil.has('rina'));
  // server masih punya: tidak dikirim ulang
  const C = muat({ fetch: st.fetch, ls: Object.fromEntries(B.simpan) }); isiStateServer(C.UKP, 'Rina');
  await C.UKP.tim.siap(); await C.UKP.tim.kirimRingkasan({ segera: true });
  assert.equal(st.log.filter(x => x.metode === 'PUT').length, 2);
});

ujiServer('server: tidak ada (404) atau lambat (> batas) → jalur lama, status mati; berbagi mati → DELETE; sesi habis → sesi-berakhir', async () => {
  const st = serverTiruan({ saya: 404 });
  const A = muat({ fetch: st.fetch }); assert.equal(await A.UKP.tim.siap(), null); assert.equal(A.UKP.tim.status(), 'mati'); assert.equal(A.UKP.tim.info().server, false);
  const g = serverTiruan({ saya: 'gantung' });
  const B = muat({ fetch: g.fetch }); B.UKP.tim._jeda.batasDeteksi = 50;
  const t0 = Date.now(); assert.equal(await B.UKP.tim.siap(), null); assert.ok(Date.now() - t0 < 1000); assert.equal(B.UKP.tim.status(), 'mati');
  const s = serverTiruan({ nama: 'rina' });
  const C = muat({ fetch: s.fetch }); isiStateServer(C.UKP, 'Rina');
  await C.UKP.tim.siap(); await C.UKP.tim.kirimRingkasan({ segera: true }); assert.ok(s.hasil.has('rina'));
  C.UKP.tim.aktif = false; assert.equal(await C.UKP.tim.hapusRingkasan(), true);
  assert.ok(!s.hasil.has('rina')); assert.equal(s.log.filter(x => x.metode === 'DELETE').length, 1);
  await C.UKP.tim.kirimRingkasan({ segera: true }); assert.ok(!s.hasil.has('rina'), 'berbagi mati: tidak mengirim');
  C.UKP.tim.aktif = true; await tunggu(20);
  s.log.length = 0; const nPut = () => s.log.filter(x => x.metode === 'PUT').length;
  await C.UKP.tim.kirimRingkasan({ segera: true }); assert.ok(nPut() <= 1);
  // sesi habis saat mengirim
  const h = serverTiruan({ nama: 'rina' }); const D = muat({ fetch: h.fetch }); isiStateServer(D.UKP, 'Rina');
  await D.UKP.tim.siap(); h.fetch.sesiHabis = true;
  const o = serverTiruan({ nama: 'rina', sesiHabis: true });
  D.ctx.fetch = o.fetch; await D.UKP.tim.kirimRingkasan({ segera: true });
  assert.equal(D.UKP.tim.status(), 'mati'); assert.equal(D.UKP.tim.info().galat, 'sesi-berakhir'); assert.equal(D.UKP.tim.info().server, false);
  // keluar: POST keluar lalu ke halaman masuk
  const k = serverTiruan({ nama: 'rina' }); const E = muat({ fetch: k.fetch }); await E.UKP.tim.siap();
  await E.UKP.tim.keluarServer();
  const post = k.log.find(x => x.url === 'keluar'); assert.ok(post && post.metode === 'POST' && post.hdr['X-Requested-With'] === 'UKP');
  samaJson(E.ctx.__pindah, ['masuk?keluar=1']);
});

ujiServer('server: admin memantau GET api/tim + aliran SSE (simpan, hapus, ping online) dan feed Langsung', async () => {
  const awal = { rina: Object.assign({}, require('node:util').types ? {} : {}, { tingkat: 'B', latihan: { total: 5, benar: 2, akurasi7: 0.4 }, simulasi: [], hadir: {} }) };
  const st = serverTiruan({ nama: 'nicky', admin: true, hasil: awal, online: ['rina'] });
  const { UKP } = muat({ fetch: st.fetch });
  await UKP.tim.siap();
  assert.equal(await UKP.tim.pemimpin(), true); assert.equal(await UKP.tim.bolehDasbor(), true);
  const panggil = []; const feed = [];
  UKP.tim.dengarLangsung(ev => feed.push(ev));
  const lepas = UKP.tim.pantau((d, i) => panggil.push({ d, i }));
  await tunggu(40);
  const terakhir = () => panggil[panggil.length - 1];
  assert.equal(terakhir().d.length, 1); assert.equal(terakhir().d[0].id, 'rina'); assert.equal(terakhir().d[0].sumber, 'server'); assert.equal(terakhir().d[0].latihan.akurasi7, 0.4);
  assert.equal(UKP.tim.info().aliran, 'sse'); samaJson(Array.from(UKP.tim.info().onlineIds), ['rina']);
  samaJson(UKP.tim.info().pengguna.map(p => p.nama), ['rina', 'budi', 'nicky']);
  assert.equal(feed.length, 0, 'daftar awal hanya acuan feed');
  const a = st.aliran[0];
  a.dorong('hasil', { aksi: 'simpan', nama: 'budi', dok: { id: 'budi', nama: 'budi', tingkat: 'C', latihan: { total: 3 }, simulasi: [{ id: 's1', skor: 70, jumlah: 10, benar: 7, selesai: new Date().toISOString() }], hadir: {} } });
  await tunggu(20);
  samaJson(terakhir().d.map(x => x.id).sort(), ['budi', 'rina']);
  assert.equal(feed.length, 1); assert.equal(feed[0].anggota.id, 'budi'); assert.equal(feed[0].sebelum, null);
  a.dorong('hasil', { aksi: 'simpan', nama: 'rina', dok: { id: 'rina', nama: 'rina', latihan: { total: 9, benar: 5, akurasi7: 0.55 }, simulasi: [], hadir: {} } });
  await tunggu(20);
  assert.equal(feed.length, 2); assert.equal(feed[1].sebelum.latihan.total, 5); assert.equal(feed[1].anggota.latihan.total, 9);
  a.dorong('hasil', { aksi: 'hapus', nama: 'budi' }); await tunggu(20);
  samaJson(terakhir().d.map(x => x.id), ['rina']); assert.equal(feed[2].dihapus, 'budi');
  a.dorong('ping', { online: ['rina', 'budi', '../jahat'] }); await tunggu(20);
  samaJson(Array.from(UKP.tim.info().onlineIds).sort(), ['budi', 'rina']);
  // data tak tepercaya dari aliran dinormalkan
  a.dorong('hasil', { aksi: 'simpan', nama: 'x', dok: { id: 'x', nama: '=CMD()', latihan: { total: -5, akurasi7: 7 } } }); await tunggu(20);
  const x = terakhir().d.find(m => m.id === 'x'); assert.equal(x.nama, 'CMD()'); assert.equal(x.latihan.total, 0); assert.equal(x.latihan.akurasi7, 1);
  lepas();
  // anggota bukan admin: tidak pernah memanggil api/tim
  const sb = serverTiruan({ nama: 'rina' }); const R = muat({ fetch: sb.fetch }); await R.UKP.tim.siap();
  const hasilR = []; R.UKP.tim.pantau(d => hasilR.push(d)); await tunggu(20);
  samaJson(hasilR, [[]]); assert.ok(!sb.log.some(l => /api\/tim/.test(l.url)));
});

ujiServer('server: aliran SSE gagal → polling api/tim (jeda dapat diatur) dan feed tetap jalan', async () => {
  const st = serverTiruan({ nama: 'nicky', admin: true, aliranGagal: true, hasil: { rina: { latihan: { total: 1 }, simulasi: [], hadir: {} } } });
  const { UKP } = muat({ fetch: st.fetch });
  UKP.tim._jeda.poll = 30;
  await UKP.tim.siap();
  const feed = []; UKP.tim.dengarLangsung(ev => feed.push(ev));
  let daftar = []; const lepas = UKP.tim.pantau(d => { daftar = d; });
  await tunggu(20);
  assert.equal(UKP.tim.info().aliran, 'polling');
  st.hasil.set('rina', { latihan: { total: 4 }, simulasi: [], hadir: {} });
  await tunggu(120);
  assert.equal(daftar[0].latihan.total, 4); assert.ok(feed.some(f => f.anggota && f.anggota.latihan.total === 4 && f.sebelum.latihan.total === 1));
  assert.ok(st.log.filter(l => l.url === 'api/tim').length >= 3);
  lepas(); const n = st.log.filter(l => l.url === 'api/tim').length; await tunggu(100);
  assert.ok(st.log.filter(l => l.url === 'api/tim').length <= n + 1, 'berhenti setelah lepas');
});


// ---------- temuan tinjauan: perangkat bersama, penghapusan tertunda, deteksi ulang ----------
ujiServer('server: perangkat bersama — progres milik akun lain tidak dikirim atas nama akun yang masuk; Mulai baru mengarsipkan', async () => {
  const sr = serverTiruan({ nama: 'rina' });
  const A = muat({ fetch: sr.fetch }); isiStateServer(A.UKP, 'Rina Putri');
  await A.UKP.tim.siap(); await A.UKP.tim.kirimRingkasan({ segera: true });
  assert.equal(A.UKP.store.get().profil.akunServer, 'rina'); A.UKP.store.flush();
  // budi masuk di peramban yang sama (localStorage sama)
  const sb = serverTiruan({ nama: 'budi' });
  const B = muat({ fetch: sb.fetch, ls: Object.fromEntries(A.simpan) });
  const c = await B.UKP.tim.siap(); assert.ok(c && c.server);
  const i = B.UKP.tim.info(); assert.equal(i.akunBeda, 'rina'); assert.equal(i.galat, 'akun-berbeda');
  await B.UKP.tim.kirimRingkasan({ segera: true });
  assert.equal(sb.log.filter(x => x.metode === 'PUT').length, 0, 'tidak ada PUT berisi data rina');
  assert.equal(B.UKP.store.get().profil.nama, 'Rina Putri', 'profil tidak diubah');
  assert.equal(await B.UKP.tim.hapusRingkasan(), false); assert.equal(sb.log.filter(x => x.metode === 'DELETE').length, 0);
  // Mulai baru: progres rina diarsipkan, store kosong milik budi
  assert.equal(B.UKP.tim.gantiPemilikProgres(), 'baru');
  assert.equal(B.UKP.store.get().profil.akunServer, 'budi'); assert.equal(B.UKP.store.get().jawaban.length, 0);
  assert.ok(B.simpan.has('ukp.arsip:rina')); assert.equal(B.UKP.tim.info().akunBeda, null);
  assert.equal(B.UKP.tim.adaArsip('rina'), true);
  // rina masuk lagi di perangkat itu: akun berbeda, lalu pulihkan arsipnya
  B.UKP.store.flush();
  const C = muat({ fetch: sr.fetch, ls: Object.fromEntries(B.simpan) }); await C.UKP.tim.siap();
  assert.equal(C.UKP.tim.info().akunBeda, 'budi');
  assert.equal(C.UKP.tim.gantiPemilikProgres(), 'pulih');
  assert.equal(C.UKP.store.get().profil.nama, 'Rina Putri'); assert.equal(C.UKP.store.get().jawaban.length, A.UKP.store.get().jawaban.length); assert.ok(C.UKP.store.get().jawaban.length > 0);
  assert.ok(!C.simpan.has('ukp.arsip:rina')); assert.ok(C.simpan.has('ukp.arsip:budi'));
});

ujiServer('server: berbagi dimatikan saat DELETE gagal → hapus tertunda, dicoba lagi saat tersambung kembali', async () => {
  const s = serverTiruan({ nama: 'rina' });
  const A = muat({ fetch: s.fetch }); isiStateServer(A.UKP, 'Rina');
  await A.UKP.tim.siap(); await A.UKP.tim.kirimRingkasan({ segera: true }); assert.ok(s.hasil.has('rina'));
  const o = { gagal: true };
  A.ctx.fetch = (u, init) => (o.gagal && init && init.method === 'DELETE') ? Promise.reject(new TypeError('Failed to fetch')) : s.fetch(u, init);
  A.UKP.tim.aktif = false;
  assert.equal(await A.UKP.tim.hapusRingkasan(), false);
  assert.equal(A.UKP.tim.info().hapusTertunda, true); assert.ok(s.hasil.has('rina'));
  A.UKP.store.flush();
  // muat ulang: pasangServer melihat aktif=false + tanda → DELETE
  const B = muat({ fetch: s.fetch, ls: Object.fromEntries(A.simpan) });
  await B.UKP.tim.siap(); await tunggu(30);
  assert.ok(!s.hasil.has('rina'), 'ringkasan terhapus setelah tersambung lagi');
  assert.equal(B.UKP.tim.info().hapusTertunda, false);
  // server masih menyimpan hasil walau tanpa tanda (adaHasil) dan berbagi mati → juga dihapus
  s.hasil.set('rina', { latihan: {} });
  const C = muat({ fetch: s.fetch, ls: Object.fromEntries(B.simpan) }); await C.UKP.tim.siap(); await tunggu(30);
  assert.ok(!s.hasil.has('rina'));
});

ujiServer('server: penanda ukp_srv — server tidak terjangkau → status jujur, bukan jalur Claude; deteksi diulang lalu tersambung dan mengirim', async () => {
  const o = { nama: 'rina', mati: true };
  const s = serverTiruan(o);
  const A = muat({ fetch: s.fetch, cookie: 'lain=1; ukp_srv=1' }); isiStateServer(A.UKP, 'Rina');
  A.UKP.tim._jeda.ulang = [40, 40, 40];
  assert.equal(await A.UKP.tim.siap(), null);
  assert.equal(A.UKP.tim.status(), 'server-tak-terjangkau'); assert.equal(A.UKP.tim.info().modeServer, true);
  assert.equal(await A.UKP.tim.bolehDasbor(), false, 'anggota tidak melihat Dasbor tim saat server tidak terjangkau');
  A.UKP.tim.aktif = true;
  o.mati = false; await tunggu(150);
  assert.equal(A.UKP.tim.status(), 'tersambung'); assert.equal(A.UKP.tim.info().server, true);
  await tunggu(30);
  assert.ok(s.hasil.has('rina'), 'kiriman segera setelah tersambung lagi');
  assert.ok(await A.UKP.tim.siap());
  // tanpa penanda: waktu habis → jalur lama (mati), tetapi tetap dicoba ulang dan tersambung saat server hidup
  const o2 = { nama: 'budi', saya: 'gantung' }; const s2 = serverTiruan(o2);
  const B = muat({ fetch: s2.fetch }); B.UKP.tim._jeda.batasDeteksi = 30; B.UKP.tim._jeda.ulang = [40];
  assert.equal(await B.UKP.tim.siap(), null); assert.equal(B.UKP.tim.status(), 'mati');
  delete o2.saya; await tunggu(150);
  assert.equal(B.UKP.tim.info().server, true);
  // 404 (jelas bukan server tim) → tidak dicoba ulang
  const s3 = serverTiruan({ saya: 404 }); const C = muat({ fetch: s3.fetch }); C.UKP.tim._jeda.ulang = [20];
  await C.UKP.tim.siap(); await tunggu(80);
  assert.equal(s3.log.filter(x => x.url === 'api/saya').length, 1);
  // penanda + 401 → sesi berakhir (bukan jalur Claude)
  const s4 = serverTiruan({ nama: 'rina', sesiHabis: true }); const D = muat({ fetch: s4.fetch, cookie: 'ukp_srv=1' }); D.UKP.tim._jeda.ulang = [60000];
  await D.UKP.tim.siap(); assert.equal(D.UKP.tim.status(), 'mati'); assert.equal(D.UKP.tim.info().galat, 'sesi-berakhir'); assert.equal(await D.UKP.tim.bolehDasbor(), false);
});
