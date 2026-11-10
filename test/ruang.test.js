/* Uji js/ruang.js (Room tim v8.2): kodek MQTT, kripto, validasi protokol, koneksi, dan alur room penuh di atas RELAI TIRUAN
   di memori yang mengikuti semantik MQTT 3.1.1 (pub/sub, retained, last will, wildcard + dan #, putus/sambung).
   Tanpa dependensi: node:test + WebCrypto bawaan Node. */
'use strict';
const { describe, it, afterEach } = require('node:test');
const assertKetat = require('node:assert/strict');
// objek dari konteks vm punya prototipe lain: bandingkan bentuk JSON-nya
const json = x => (x === undefined ? undefined : JSON.parse(JSON.stringify(x)));
const assert = Object.assign(Object.create(assertKetat), assertKetat, { deepEqual: (a, b, m) => assertKetat.deepStrictEqual(json(a), json(b), m) });
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const nodeCrypto = require('node:crypto');

// ---------- pemuat: konteks vm dengan crypto/TextEncoder/timer (timer di-unref agar proses uji tidak tertahan) ----------
const unrefT = f => (fn, ms) => { const t = f(fn, ms); if (t && t.unref) t.unref(); return t; };
function muat(berkas, ekstra) {
  const noop = () => {};
  const el = () => ({ appendChild: noop, setAttribute: noop, removeAttribute: noop, addEventListener: noop, style: { setProperty: noop }, dataset: {}, classList: { add: noop, remove: noop } });
  const ctx = Object.assign({
    Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON,
    document: { addEventListener: noop, removeEventListener: noop, body: null, head: null, getElementById: () => null, createElement: el, documentElement: el(), querySelector: () => null, querySelectorAll: () => [] },
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: () => null, setItem: noop, removeItem: noop }, location: { hash: '' }, history: { replaceState: noop, pushState: noop },
    navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop,
    setTimeout: unrefT(setTimeout), clearTimeout, setInterval: unrefT(setInterval), clearInterval,
    crypto: globalThis.crypto, TextEncoder, TextDecoder,
  }, ekstra || {});
  ctx.window = ctx; vm.createContext(ctx);
  for (const b of berkas) vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', b), 'utf8'), ctx, { filename: b });
  return ctx.UKP;
}
const UKP = muat(['ruang.js'], { setTimeout, setInterval });
const R = UKP.ruang;
const { Kodek, Pengurai, varint, cocokFilter } = R._kodek;
const { Kripto, kodeBaru, normalKode, formatKode, ALFABET } = R._kripto;
const P = R._protokol;
const hexB = b => Buffer.from(b).toString('hex');
const B = (...x) => Uint8Array.from(x);
const tidur = ms => new Promise(r => setTimeout(r, ms));
async function tunggu(cek, ms, pesan) {
  const batas = Date.now() + (ms || 3000);
  for (;;) { let v; try { v = cek(); } catch (e) { v = false; } if (v) return v; if (Date.now() > batas) throw new Error('waktu habis: ' + (pesan || cek.toString())); await tidur(10); }
}

// ---------- RELAI TIRUAN (broker MQTT 3.1.1 di memori, bicara byte MQTT sungguhan lewat WebSocket tiruan) ----------
function buatJaringan() {
  const relai = new Map();
  const jaringan = { relai, soket: [] };
  class Relai {
    constructor(url) { this.url = url; this.mati = false; this.retained = new Map(); this.klien = new Set(); this.pecah = false; this.diam = false; this.tolak = 0; this.tanpaConnack = false; this.log = []; this.terima = []; }
    sambung(ws) { const k = { ws, relai: this, pengurai: new Pengurai(1 << 30), sub: [], will: null, rapi: false, tersambung: false, keluar: [] }; ws._k = k; this.klien.add(k); }
    kirim(k, b) {
      k.keluar.push(b);
      if (k.keluar.length > 1) return;
      setImmediate(() => {
        const semua = Buffer.concat(k.keluar.map(x => Buffer.from(x))); k.keluar = [];
        if (k.ws.readyState !== 1) return;
        const potongan = [];
        if (this.pecah) { let i = 0; while (i < semua.length) { const n = 1 + Math.floor(Math.random() * 3); potongan.push(semua.subarray(i, i + n)); i += n; } } else potongan.push(semua);
        potongan.forEach(p => { const ab = p.buffer.slice(p.byteOffset, p.byteOffset + p.length); k.ws._pesan(ab); });
      });
    }
    masuk(k, b) {
      let pk; try { pk = k.pengurai.dorong(b); } catch (e) { this.tutup(k, false); return; }
      for (const p of pk) this.tangani(k, p);
    }
    tangani(k, p) {
      this.log.push(p.jenis);
      if (p.jenis === 'connect') {
        this.terima.push(p);
        if (this.tanpaConnack) return;
        if (this.tolak) { this.tolak--; this.kirim(k, Kodek.connack({ kode: 5 })); return; }
        if (this.kred && (p.username !== this.kred[0] || !p.password || Buffer.from(p.password).toString() !== this.kred[1])) { this.kirim(k, Kodek.connack({ kode: 5 })); return; }   // kred: [nama, sandi] wajib
        k.will = p.will; k.tersambung = true; k.connect = p; this.kirim(k, Kodek.connack({ kode: 0 }));
      } else if (p.jenis === 'subscribe') {
        p.topik.forEach(f => { if (!k.sub.includes(f)) k.sub.push(f); });
        this.kirim(k, Kodek.suback({ id: p.id, kode: p.topik.map(() => 0) }));
        const kirimRetained = () => { if (!this.klien.has(k)) return; p.topik.forEach(f => this.retained.forEach((m, t) => { if (cocokFilter(f, t)) this.kirim(k, Kodek.publish({ topik: t, muatan: m, retain: true })); })); };
        if (this.lambat) setTimeout(kirimRetained, this.lambat); else kirimRetained();   // lambat: retained tiba setelah sekian ms
      } else if (p.jenis === 'publish') {
        this.terbit(p.topik, p.muatan, p.retain);
      } else if (p.jenis === 'pingreq') { if (!this.diam) this.kirim(k, Kodek.pingresp()); }
      else if (p.jenis === 'disconnect') { k.rapi = true; this.tutup(k, true); }
      else if (p.jenis === 'unsubscribe') { k.sub = k.sub.filter(f => !p.topik.includes(f)); this.kirim(k, Kodek.unsuback({ id: p.id })); }
    }
    terbit(topik, muatan, retain) {
      if (retain) {
        this.ver = this.ver || new Map(); const ver = (this.ver.get(topik) || 0) + 1; this.ver.set(topik, ver);
        // tundaHapus: hapus retained baru berlaku setelah sekian ms (seperti emqx di bawah serbuan); tulis sesudahnya tetap menang
        if (!muatan.length) { if (this.tundaHapus) setTimeout(() => { if (this.ver.get(topik) === ver) this.retained.delete(topik); }, this.tundaHapus); else this.retained.delete(topik); }
        else this.retained.set(topik, Uint8Array.from(muatan));
      }
      this.klien.forEach(k => { if (k.tersambung && k.sub.some(f => cocokFilter(f, topik))) this.kirim(k, Kodek.publish({ topik, muatan, retain: false })); });
    }
    tutup(k, rapi) {
      if (!this.klien.has(k)) return; this.klien.delete(k);
      if (!rapi && !k.rapi && k.will && !this.mati) this.terbit(k.will.topik, k.will.muatan, k.will.retain);
      k.ws._tutupDariRelai();
    }
    matikan(hapusRetained) { this.mati = true; Array.from(this.klien).forEach(k => this.tutup(k, false)); if (hapusRetained) this.retained.clear(); }
    hidupkan() { this.mati = false; }
    putuskan(saring) { Array.from(this.klien).filter(k => !saring || saring(k)).forEach(k => this.tutup(k, false)); }
  }
  class FakeWS {
    constructor(url, protokol) {
      this.url = url; this.protokol = protokol; this.readyState = 0; this.binaryType = 'blob'; jaringan.soket.push(this);
      const r = relai.get(url);
      setImmediate(() => {
        if (this.readyState !== 0) return;
        if (!r || r.mati) { this.readyState = 3; this.onerror && this.onerror({}); this.onclose && this.onclose({ code: 1006 }); return; }
        r.sambung(this); this.readyState = 1; this.onopen && this.onopen({});
      });
    }
    send(data) {
      if (this.readyState !== 1) throw new Error('soket tidak terbuka');
      const b = Uint8Array.from(Buffer.from(data.buffer ? Buffer.from(data.buffer, data.byteOffset, data.byteLength) : data));
      const k = this._k; setImmediate(() => { if (k && k.relai.klien.has(k)) k.relai.masuk(k, b); });
    }
    close() {
      if (this.readyState >= 2) return; this.readyState = 2; const k = this._k;
      setImmediate(() => { if (k) k.relai.tutup(k, k.rapi); else this._tutupDariRelai(); });
    }
    _pesan(ab) { if (this.readyState === 1 && this.onmessage) this.onmessage({ data: ab }); }
    _tutupDariRelai() { if (this.readyState === 3) return; this.readyState = 3; setImmediate(() => { this.onclose && this.onclose({ code: 1006 }); }); }
  }
  jaringan.WS = FakeWS;
  jaringan.relaiBaru = url => { const r = new Relai(url); relai.set(url, r); return r; };
  return jaringan;
}

const KONFIG_UJI = { pingMs: 150, batasSambungMs: 300, jedaSambung: [20, 40, 80], jitter: 0, jedaRelaiBerikut: 10, graceMs: 60, tungguCalonMs: 150, tungguRelaiLainMs: 200, detakMs: 400, hadirBasiMs: 3000, debounceMs: 15, tungguStateMs: 120, tungguGabungMs: 3000, mintaSesiMs: 250, jedaBersihMs: 40, iterasi: 2000 };
const instansAktif = [];
function instans(jar, urls, opsi) {
  opsi = opsi || {};
  const simpan = { s: {}, n: 0 };
  const store = { get: () => simpan.s, save: () => { simpan.n++; } };
  const diterima = [];
  const lokal = new Map();
  const belajar = { terimaSesiRoom: x => { diterima.push(x); return 'baru'; }, sesiBersamaDari: id => (lokal.has(id) ? JSON.parse(JSON.stringify(lokal.get(id))) : null) };
  const api = R.buatInstans(Object.assign({ WebSocket: jar.WS, crypto: globalThis.crypto, store, belajar, lokasi: { origin: 'https://contoh.github.io', pathname: '/Latihan-UKP/', hostname: 'contoh.github.io' } }, opsi.env || {}));
  api.RELAI = urls.slice(); Object.assign(api.KONFIG, KONFIG_UJI, opsi.konfig || {});
  const peristiwa = { status: [], state: [], jawaban: [], hadir: [], sesi: [], indeks: [], peran: [] };
  Object.keys(peristiwa).forEach(n => api.on(n, x => peristiwa[n].push(x)));
  const o = { api, simpan, diterima, lokal, peristiwa };
  instansAktif.push(o);
  return o;
}
afterEach(async () => { const semua = instansAktif.splice(0); await Promise.all(semua.map(o => o.api.keluar().catch(() => {}))); });
// pembantu: terbitkan muatan terenkripsi sembarang langsung ke relai
async function muatanUntuk(kode, sufiks, obj, iterasi) {
  const kr = Kripto(globalThis.crypto, iterasi || KONFIG_UJI.iterasi);
  const aw = await kr.awalan(kode); const kunci = await kr.kunci(kode); const topik = aw + '/' + sufiks;
  return { topik, muatan: await kr.enkripsi(kunci, topik, typeof obj === 'string' ? obj : JSON.stringify(obj)), awalan: aw };
}
const slugUntuk = (kode, nama) => nodeCrypto.createHash('sha256').update('nama:' + kode + ':' + nama.toLowerCase()).digest('hex').slice(0, 12);

// ======================================================================================
describe('ruang: kodek MQTT', () => {
  it('remaining length varint pada batas 1–4 byte', () => {
    const kasus = [[0, '00'], [127, '7f'], [128, '8001'], [16383, 'ff7f'], [16384, '808001'], [2097151, 'ffff7f'], [2097152, '80808001'], [268435455, 'ffffff7f']];
    for (const [n, h] of kasus) assert.equal(hexB(varint(n)), h, 'n=' + n);
    assert.throws(() => varint(268435456)); assert.throws(() => varint(-1));
  });
  it('CONNECT: byte persis (clean session, keepalive 30)', () => {
    assert.equal(hexB(Kodek.connect({ clientId: 'ab', keepalive: 30 })), '100e00044d5154540402001e00026162');
  });
  it('CONNECT dengan last will retained: flag 0x26 dan bolak-balik', () => {
    const b = Kodek.connect({ clientId: 'ukp0123456789ab', keepalive: 30, will: { topik: 'x/h/1', muatan: B(9, 8, 7), retain: true } });
    assert.equal(b[9], 0x26);
    const [p] = new Pengurai().dorong(b);
    assert.equal(p.jenis, 'connect'); assert.equal(p.clientId, 'ukp0123456789ab'); assert.equal(p.keepalive, 30); assert.equal(p.clean, true);
    assert.deepEqual({ t: p.will.topik, m: Array.from(p.will.muatan), r: p.will.retain }, { t: 'x/h/1', m: [9, 8, 7], r: true });
  });
  it('CONNACK: diterima dan ditolak', () => {
    const p = new Pengurai().dorong(B(0x20, 2, 0, 0, 0x20, 2, 1, 5));
    assert.deepEqual(p, [{ jenis: 'connack', sesiAda: false, kode: 0 }, { jenis: 'connack', sesiAda: true, kode: 5 }]);
  });
  it('PUBLISH QoS 0 retained: byte persis dan bolak-balik', () => {
    const b = Kodek.publish({ topik: 'a/b', muatan: B(1, 2), retain: true });
    assert.equal(hexB(b), '310700036a2f620102'.replace('6a', '61'));
    const [p] = new Pengurai().dorong(b);
    assert.equal(p.jenis, 'publish'); assert.equal(p.topik, 'a/b'); assert.equal(p.retain, true); assert.equal(p.qos, 0); assert.deepEqual(Array.from(p.muatan), [1, 2]);
  });
  it('PUBLISH QoS 1 dari relai diurai dengan packet id; muatan kosong sah', () => {
    const [p, q] = new Pengurai().dorong(Buffer.concat([Buffer.from(Kodek.publish({ topik: 't', muatan: B(5), qos: 1, id: 0x1234 })), Buffer.from(Kodek.publish({ topik: 't', muatan: new Uint8Array(0) }))]));
    assert.equal(p.qos, 1); assert.equal(p.id, 0x1234); assert.deepEqual(Array.from(p.muatan), [5]);
    assert.equal(q.muatan.length, 0);
  });
  it('SUBSCRIBE beberapa topik: byte persis, flag 0x2; SUBACK dengan kode gagal 0x80', () => {
    const b = Kodek.subscribe({ id: 1, topik: ['a', 'b/#'] });
    assert.equal(hexB(b), '820c0001000161000003622f2300');
    const [s] = new Pengurai().dorong(b); assert.deepEqual(s, { jenis: 'subscribe', id: 1, topik: ['a', 'b/#'], qos: [0, 0] });
    const [a] = new Pengurai().dorong(Kodek.suback({ id: 7, kode: [0, 0x80] })); assert.deepEqual(a, { jenis: 'suback', id: 7, kode: [0, 128] });
  });
  it('PINGREQ, PINGRESP, DISCONNECT', () => {
    assert.equal(hexB(Kodek.pingreq()), 'c000'); assert.equal(hexB(Kodek.pingresp()), 'd000'); assert.equal(hexB(Kodek.disconnect()), 'e000');
    assert.deepEqual(new Pengurai().dorong(B(0xC0, 0, 0xD0, 0, 0xE0, 0)).map(p => p.jenis), ['pingreq', 'pingresp', 'disconnect']);
  });
  it('pengurai aliran: paket terpecah per byte', () => {
    const all = Buffer.concat([Kodek.connack({}), Kodek.suback({ id: 2, kode: [0] }), Kodek.publish({ topik: 'x/y', muatan: Buffer.alloc(300, 7), retain: true }), Kodek.pingresp(), Kodek.publish({ topik: 'z', muatan: B(1) })].map(x => Buffer.from(x)));
    const pg = new Pengurai(); const out = [];
    for (const b of all) out.push(...pg.dorong(B(b)));
    assert.deepEqual(out.map(p => p.jenis), ['connack', 'suback', 'publish', 'pingresp', 'publish']);
    assert.equal(out[2].muatan.length, 300); assert.equal(pg.buf.length, 0);
  });
  it('pengurai aliran: paket tergabung dalam satu frame + sisa terpotong yang dilanjutkan', () => {
    const a = Buffer.from(Kodek.publish({ topik: 'q', muatan: B(1, 2, 3) })), b = Buffer.from(Kodek.publish({ topik: 'r', muatan: Buffer.alloc(200, 1) }));
    const pg = new Pengurai();
    const satu = pg.dorong(Buffer.concat([a, b.subarray(0, 2)]));   // header varint terpotong di tengah
    assert.equal(satu.length, 1); assert.equal(satu[0].topik, 'q');
    const dua = pg.dorong(b.subarray(2)); assert.equal(dua.length, 1); assert.equal(dua[0].muatan.length, 200);
  });
  it('pengurai menolak varint > 4 byte, paket > batas, UTF-8 rusak, jenis 0, dan flag SUBSCRIBE salah', () => {
    assert.throws(() => new Pengurai().dorong(B(0x30, 0x80, 0x80, 0x80, 0x80, 0x01)), /4 byte/);
    assert.throws(() => new Pengurai(256 * 1024).dorong(B(0x30, 0x80, 0x80, 0x11)), /batas/);   // 278 528 byte diklaim, ditolak sebelum isi tiba
    assert.throws(() => new Pengurai().dorong(B(0x30, 4, 0, 2, 0xC3, 0x28)));
    assert.throws(() => new Pengurai().dorong(B(0x00, 0)));
    assert.throws(() => new Pengurai().dorong(B(0x80, 5, 0, 1, 0, 1, 0x61)));
  });
  it('muatan besar (200 KB) melewati pengurai dalam potongan acak', () => {
    const m = nodeCrypto.randomBytes(200 * 1024); const b = Buffer.from(Kodek.publish({ topik: 'besar', muatan: m }));
    const pg = new Pengurai(); const out = []; let i = 0;
    while (i < b.length) { const n = 1 + Math.floor(Math.random() * 9000); out.push(...pg.dorong(b.subarray(i, i + n))); i += n; }
    assert.equal(out.length, 1); assert.ok(Buffer.from(out[0].muatan).equals(m));
  });
  it('pencocokan filter + dan #', () => {
    assert.ok(cocokFilter('p/a/+', 'p/a/x')); assert.ok(!cocokFilter('p/a/+', 'p/a/x/y')); assert.ok(!cocokFilter('p/a/+', 'p/a'));
    assert.ok(cocokFilter('p/#', 'p/a/b')); assert.ok(cocokFilter('p/s', 'p/s')); assert.ok(!cocokFilter('p/s', 'p/i'));
  });
});

// ======================================================================================
describe('ruang: kripto', () => {
  it('kode room: 14 karakter dari alfabet tanpa karakter ambigu, unik', () => {
    const lihat = new Set();
    for (let i = 0; i < 300; i++) { const k = kodeBaru(globalThis.crypto); assert.match(k, /^[23456789ABCDEFGHJKMNPQRSTUVWXYZ]{14}$/); lihat.add(k); }
    assert.equal(lihat.size, 300); assert.ok(!/[01OIL]/.test(ALFABET));
  });
  it('normalKode menerima bentuk berformat, huruf kecil, dan tautan #room/; menolak karakter ambigu', () => {
    assert.equal(normalKode('abcd-efghj-kmnpq'), 'ABCDEFGHJKMNPQ');
    assert.equal(normalKode('https://x.github.io/Latihan-UKP/#room/ABCD-EFGHJ-KMNPQ'), 'ABCDEFGHJKMNPQ');
    assert.equal(normalKode(' ABCD EFGHJ KMNPQ '), 'ABCDEFGHJKMNPQ');
    for (const salah of ['ABCD-EFGHJ-KMNPO', 'ABCD-EFGHJ-KMNP0', 'ABCD-EFGHJ-KMNPI', 'ABCD-EFGHJ-KMNP1', 'ABCD-EFGHJ-KMNPL', 'ABCD-EFGHJ-KMNP', '', null, 12]) assert.equal(normalKode(salah), null, String(salah));
    assert.equal(formatKode('ABCDEFGHJKMNPQ'), 'ABCD-EFGHJ-KMNPQ');
  });
  it('enkripsi bolak-balik dengan iterasi bawaan (≥ 100.000) di dua instans terpisah', async () => {
    assert.ok(R.KONFIG.iterasi >= 100000);
    const kode = kodeBaru(globalThis.crypto);
    const a = Kripto(globalThis.crypto, R.KONFIG.iterasi), b = Kripto(globalThis.crypto, R.KONFIG.iterasi);
    const ka = await a.kunci(kode), kb = await b.kunci(kode);
    const c = await a.enkripsi(ka, 'ukp1/x/s', JSON.stringify({ halo: 'Mia — jawaban B' }));
    assert.equal(await b.dekripsi(kb, 'ukp1/x/s', c), '{"halo":"Mia — jawaban B"}');
  });
  it('kode salah, topik lain (AAD), muatan dirusak, atau terlalu pendek → gagal senyap (null)', async () => {
    const kr = Kripto(globalThis.crypto, 2000);
    const k1 = await kr.kunci('ABCDEFGHJKMNPQ'), k2 = await kr.kunci('ABCDEFGHJKMNPR');
    const c = await kr.enkripsi(k1, 't/s', 'rahasia');
    assert.equal(await kr.dekripsi(k2, 't/s', c), null);
    assert.equal(await kr.dekripsi(k1, 't/i', c), null);
    const rusak = Uint8Array.from(c); rusak[20] ^= 1; assert.equal(await kr.dekripsi(k1, 't/s', rusak), null);
    assert.equal(await kr.dekripsi(k1, 't/s', c.slice(0, 20)), null);
    assert.equal(await kr.dekripsi(k1, 't/s', c), 'rahasia');
  });
  it('IV acak berbeda tiap pesan; ciphertext berbeda untuk teks yang sama', async () => {
    const kr = Kripto(globalThis.crypto, 2000); const k = await kr.kunci('ABCDEFGHJKMNPQ');
    const iv = new Set(), ct = new Set();
    for (let i = 0; i < 50; i++) { const c = await kr.enkripsi(k, 't', 'sama'); iv.add(hexB(c.slice(0, 12))); ct.add(hexB(c)); assert.equal(c.length, 12 + 4 + 16); }
    assert.equal(iv.size, 50); assert.equal(ct.size, 50);
  });
  it('awalan topik = ukp1/ + 24 heks SHA-256("topik:"+kode), tidak membocorkan kode', async () => {
    const kr = Kripto(globalThis.crypto, 2000); const kode = 'QRSTUVWXYZ2345';
    const aw = await kr.awalan(kode);
    assert.equal(aw, 'ukp1/' + nodeCrypto.createHash('sha256').update('topik:' + kode).digest('hex').slice(0, 24));
    assert.match(aw, /^ukp1\/[0-9a-f]{24}$/); assert.ok(!aw.toUpperCase().includes(kode.slice(0, 4)));
    assert.notEqual(aw, await kr.awalan('QRSTUVWXYZ2346'));
  });
});

// ======================================================================================
describe('ruang: validasi protokol (murni)', () => {
  const amp = (x) => Object.assign({ v: 1, t: 1700000000000, urut: 5, d: 'ab12cd34ef56', nama: 'Nicky' }, x);
  const stateBaik = () => amp({ urut: 1700000000000, tuan: 'Nicky', room: { nama: 'Tim B', peserta: ['Nicky', 'Mia'], tingkat: 'B' }, versiApp: '8.1.0', aktivitas: { jenis: 'latihan', id: 'sb-1', soalIds: ['A1-104', 'B6-126'], idx: 1, fase: 'kunci', mulaiSoal: 1, detikPerSoal: 126, akhirSesi: null, hasilSoal: { soalId: 'B6-126', per: { Mia: { o: 'A', k: 'yakin', b: 1 } } } } });
  it('validState menerima state sah dan menolak bentuk rusak', () => {
    assert.ok(P.validState(stateBaik()));
    const rusak = [
      s => { s.tuan = 'Mia'; }, s => { s.room.peserta = Array.from({ length: 13 }, (_, i) => 'P' + i); }, s => { s.aktivitas.soalIds = Array.from({ length: 121 }, (_, i) => 'A1-' + (100 + i)); s.aktivitas.idx = 0; s.aktivitas.hasilSoal = null; },
      s => { s.aktivitas.idx = 2; }, s => { s.aktivitas.fase = 'x'; }, s => { s.aktivitas.hasilSoal.per.Mia.o = 'E'; }, s => { s.aktivitas.soalIds[0] = '../x'; }, s => { s.v = 2; }, s => { s.nama = 'x'.repeat(25); s.tuan = s.nama; },
      s => { s.aktivitas = { jenis: 'ujian', id: 'ut1', kode: 'K', judul: null, mulai: 10, akhir: 5, status: 'jalan' }; },
    ];
    rusak.forEach((f, i) => { const s = stateBaik(); f(s); assert.equal(P.validState(s), null, 'kasus ' + i); });
    assert.ok(P.validState(Object.assign(stateBaik(), { aktivitas: { jenis: 'ujian', id: 'ut1', kode: 'UKPU1.B84.x', judul: 'TO', mulai: 1, akhir: 2, status: 'selesai' } })));
  });
  it('validJawaban: peta opsi/keyakinan, batas 400, detik', () => {
    const j = amp({ nama: 'Mia', aktivitas: 'sb-1', j: { 'A1-104': 'B', 'B6-126': '-' }, k: { 'A1-104': 'ragu' }, selesai: false, detik: null });
    assert.ok(P.validJawaban(j));
    assert.ok(P.validJawaban(Object.assign({}, j, { aktivitas: null, j: {}, k: {} })));
    assert.equal(P.validJawaban(Object.assign({}, j, { j: { 'A1-104': 'E' } })), null);
    assert.equal(P.validJawaban(Object.assign({}, j, { k: { 'A1-104': 'pasti' } })), null);
    assert.equal(P.validJawaban(Object.assign({}, j, { detik: -1 })), null);
    const besar = {}; for (let i = 0; i < 401; i++) besar['A1-' + i] = 'A';
    assert.equal(P.validJawaban(Object.assign({}, j, { j: besar })), null);
  });
  it('validHadir, validIndeks (≤ 30), validSesi', () => {
    assert.ok(P.validHadir(amp({ online: true, peran: 'tuan' })));
    assert.equal(P.validHadir(amp({ online: 'ya' })), null);
    const e = { id: 'sb-1', t: 1, mode: 'latihan', judul: null, nSoal: 20, peserta: ['Mia'] };
    assert.ok(P.validIndeks(amp({ daftar: [e] })));
    assert.equal(P.validIndeks(amp({ daftar: Array.from({ length: 31 }, () => e) })), null);
    const sesi = { id: 'sb-1', mulai: 1, selesai: 2, tingkat: 'B', peserta: ['Mia'], anggaranDetik: 126, soal: [{ id: 'A1-104', kode: 'A1', topik: 'A1.1', kunci: 'D', detik: 30, jawaban: { Mia: { o: 'D', k: 'yakin', b: 1 } } }], sumber: 'latih' };
    assert.ok(P.validSesi(amp({ sesi })));
    assert.equal(P.validSesi(amp({ sesi: Object.assign({}, sesi, { soal: [{ id: 'x y', jawaban: {} }] }) })), null);
    assert.equal(P.validSesi(amp({ sesi: Object.assign({}, sesi, { peserta: [42] }) })), null);
  });
  it('parseAman menolak kunci __proto__/constructor; amplop wajib v, t, urut, d, nama', () => {
    assert.equal(P.parseAman('{"a":{"__proto__":{"x":1}}}'), null);
    assert.equal(P.parseAman('{"constructor":1}'), null);
    assert.deepEqual(P.parseAman('{"a":1}'), { a: 1 });
    assert.equal(P.validAmplop({ v: 1, t: 1, urut: 1, d: 'zz', nama: 'A' }), false);
    assert.equal(P.validAmplop({ v: 1, t: 1, urut: 1, d: 'abcd', nama: 'A' }), true);
  });
  it('Dedup (LRU) dan anti-banjir (> 20/dtk per topik)', () => {
    const d = new P.Dedup(3); assert.ok(d.tambah('a')); assert.ok(!d.tambah('a')); d.tambah('b'); d.tambah('c'); d.tambah('e'); assert.ok(!d.ada('a')); assert.ok(d.ada('e'));
    let t = 5000; const ab = new P.AntiBanjir(20, () => t);
    const hasil = Array.from({ length: 25 }, () => ab.lebih('x'));
    assert.equal(hasil.filter(x => !x).length, 20); assert.equal(ab.lebih('y'), false);
    t += 1000; assert.equal(ab.lebih('x'), false);
  });
  it('lebihBaru: (t, urut) menentukan dokumen terbaru', () => {
    assert.ok(P.lebihBaru({ t: 2, urut: 1, d: 'a' }, { t: 1, urut: 9, d: 'a' }));
    assert.ok(!P.lebihBaru({ t: 1, urut: 1, d: 'a' }, { t: 1, urut: 2, d: 'a' }));
    assert.ok(P.lebihBaru({ t: 1, urut: 1, d: 'a' }, null));
  });
});

// ======================================================================================
describe('ruang: koneksi (satu relai)', () => {
  function konUji(jar, url, ekstra) {
    const masuk = [], status = [];
    const kon = R._Koneksi(Object.assign({ url, WS: jar.WS, idKlien: 'ukp0123456789ab', konfig: Object.assign({}, R.KONFIG, KONFIG_UJI), filter: () => ['t/#'], saatPublish: p => masuk.push(p), saatStatus: k => status.push(k.status) }, ekstra || {}));
    return { kon, masuk, status };
  }
  it('CONNECT (subprotocol mqtt, arraybuffer, clean, keepalive 30) → SUBSCRIBE → tersambung → pub/sub', async () => {
    const jar = buatJaringan(); const r = jar.relaiBaru('ws://r1'); r.pecah = true;
    const { kon, masuk, status } = konUji(jar, 'ws://r1');
    kon.mulai(); await tunggu(() => kon.status === 'tersambung');
    const ws = jar.soket[0]; assert.deepEqual(ws.protokol, ['mqtt']); assert.equal(ws.binaryType, 'arraybuffer');
    const c = r.terima[0]; assert.equal(c.clean, true); assert.equal(c.keepalive, 30); assert.match(c.clientId, /^ukp[0-9a-f]{12}$/);
    assert.deepEqual(r.log.slice(0, 2), ['connect', 'subscribe']);
    kon.terbit('t/a', B(1, 2, 3), true);
    await tunggu(() => masuk.length === 1);
    assert.equal(masuk[0].topik, 't/a'); assert.equal(masuk[0].retain, false); assert.ok(r.retained.has('t/a'));
    assert.deepEqual(status.slice(0, 2), ['menyambung', 'tersambung']);
    kon.henti(); assert.equal(kon.status, 'mati');
    await tunggu(() => r.log.includes('disconnect'));
  });
  it('antrean "terakhir per topik" saat putus; sambung ulang otomatis dan berlangganan ulang', async () => {
    const jar = buatJaringan(); const r = jar.relaiBaru('ws://r1');
    const { kon, masuk } = konUji(jar, 'ws://r1');
    kon.mulai(); await tunggu(() => kon.status === 'tersambung');
    r.matikan(); await tunggu(() => kon.status !== 'tersambung');
    kon.terbit('t/x', B(1), true); kon.terbit('t/x', B(2), true); kon.terbit('t/y', B(3), false); kon.terbit('t/x', B(4), true);
    assert.equal(kon.antrean(), 2);
    await tidur(100); r.hidupkan();
    await tunggu(() => kon.status === 'tersambung', 3000);
    await tunggu(() => masuk.length === 2);
    assert.deepEqual(masuk.map(p => [p.topik, p.muatan[0]]).sort(), [['t/x', 4], ['t/y', 3]]);
    assert.deepEqual(Array.from(r.retained.get('t/x')), [4]);
    assert.ok(r.log.filter(x => x === 'subscribe').length >= 1);
    kon.henti();
  });
  it('jeda sambung ulang bertahap (20 → 40 → 80 → 80 ms di uji; 1→2→5→10→20 dtk bawaan)', async () => {
    assert.deepEqual(R.KONFIG.jedaSambung, [1000, 2000, 5000, 10000, 20000]);
    const jar = buatJaringan(); const r = jar.relaiBaru('ws://r1'); r.matikan();
    const waktu = []; const WS0 = jar.WS;
    class WSCatat extends WS0 { constructor(u, p) { super(u, p); waktu.push(Date.now()); } }
    const { kon } = konUji({ WS: WSCatat }, 'ws://r1');
    kon.mulai(); await tunggu(() => waktu.length >= 5, 3000); kon.henti();
    const jeda = waktu.slice(1).map((t, i) => t - waktu[i]);
    assert.ok(jeda[0] >= 18 && jeda[1] >= 38 && jeda[2] >= 78 && jeda[3] >= 78, JSON.stringify(jeda));
    assert.ok(jeda[1] > jeda[0] && jeda[2] > jeda[1], JSON.stringify(jeda));
  });
  it('deteksi mati lewat ping: relai berhenti menjawab PINGREQ → tutup dan sambung ulang', async () => {
    const jar = buatJaringan(); const r = jar.relaiBaru('ws://r1');
    const { kon, status } = konUji(jar, 'ws://r1');
    kon.mulai(); await tunggu(() => kon.status === 'tersambung');
    r.diam = true;
    await tunggu(() => status.includes('putus'), 2000);
    r.diam = false;
    await tunggu(() => kon.status === 'tersambung', 2000);
    assert.ok(r.log.filter(x => x === 'connect').length >= 2);
    kon.henti();
  });
  it('CONNACK ditolak atau tidak pernah datang → percobaan berikutnya (batas sambung)', async () => {
    const jar = buatJaringan(); const r = jar.relaiBaru('ws://r1'); r.tolak = 1; r.tanpaConnack = true;
    const { kon } = konUji(jar, 'ws://r1');
    kon.mulai(); await tidur(450);
    assert.notEqual(kon.status, 'tersambung'); r.tanpaConnack = false;
    await tunggu(() => kon.status === 'tersambung', 3000);
    assert.ok(r.terima.length >= 2);
    kon.henti();
  });
});

// ======================================================================================
describe('ruang: alur room penuh di relai tiruan', () => {
  async function siapkanRoom(opsi) {
    opsi = opsi || {};
    const jar = buatJaringan(); const urls = opsi.urls || ['ws://r1', 'ws://r2'];
    urls.forEach(u => jar.relaiBaru(u));
    const nicky = instans(jar, urls, opsi.nicky);
    const kode = nicky.api.buat({ nama: 'Nicky', namaRoom: 'Tim UKP B', peserta: ['Nicky', 'Mia', 'Novia', 'Jessie', 'Melva', 'Alfi'], tingkat: 'B' });
    await tunggu(() => nicky.api.status().tersambung);
    return { jar, urls, nicky, kode };
  }
  async function gabungkan(jar, urls, kode, nama, opsi) {
    const o = instans(jar, urls, opsi); const st = await o.api.gabung(kode, nama); return { o, st };
  }

  it('buat room: kode, info, penyimpanan, state retained terenkripsi di relai', async () => {
    const { jar, nicky, kode } = await siapkanRoom();
    assert.equal(kode.length, 14);
    const inf = nicky.api.info();
    assert.equal(inf.peran, 'tuan'); assert.equal(inf.namaRoom, 'Tim UKP B'); assert.equal(inf.tautan, 'https://contoh.github.io/Latihan-UKP/#room/' + formatKode(kode));
    assert.equal(nicky.simpan.s.ruang.kode, kode); assert.equal(nicky.simpan.s.ruang.peran, 'tuan');
    const r1 = jar.relai.get('ws://r1');
    await tunggu(() => Array.from(r1.retained.keys()).some(t => t.endsWith('/s')));
    for (const [t, m] of r1.retained) { assert.match(t, /^ukp1\/[0-9a-f]{24}\//); const s = Buffer.from(m).toString('latin1'); assert.ok(!/Nicky|Tim UKP|Mia/.test(s + t)); }
    const st = nicky.api.state(); assert.equal(st.tuan, 'Nicky'); assert.deepEqual(st.room.peserta, ['Nicky', 'Mia', 'Novia', 'Jessie', 'Melva', 'Alfi']); assert.equal(st.aktivitas, null);
    assert.ok(jar.relai.get('ws://r2').retained.size > 0, 'tuan menerbitkan ke semua relai');
  });

  it('dua anggota bergabung: gabung() memberi state, kehadiran terlihat oleh tuan', async () => {
    const { jar, urls, nicky, kode } = await siapkanRoom();
    const { o: mia, st } = await gabungkan(jar, urls, formatKode(kode).toLowerCase(), 'Mia');
    const { o: novia } = await gabungkan(jar, urls, nicky.api.info().tautan, 'Novia');
    assert.equal(st.tuan, 'Nicky'); assert.equal(st.room.nama, 'Tim UKP B');
    assert.equal(mia.api.info().peran, 'anggota'); assert.equal(mia.simpan.s.ruang.namaRoom, 'Tim UKP B');
    await tunggu(() => ['Nicky', 'Mia', 'Novia'].every(n => nicky.api.status().online.includes(n)));
    await tunggu(() => mia.api.status().online.includes('Nicky'));
    assert.equal(mia.api.status().relai.length, 1, 'anggota hanya memakai satu relai');
    assert.equal(nicky.api.status().relai.length, 2, 'tuan memakai semua relai');
    assert.ok(novia.peristiwa.hadir.some(h => h.nama === 'Nicky' && h.online));
  });

  it('latihan: mulaiLatihan → jawaban hidup dua anggota → bukaKunci → aturSoal', async () => {
    const { jar, urls, nicky, kode } = await siapkanRoom();
    const { o: mia } = await gabungkan(jar, urls, kode, 'Mia');
    const { o: novia } = await gabungkan(jar, urls, kode, 'Novia');
    const soal = ['A1-104', 'B6-126', 'A3-144'];
    const s1 = nicky.api.mulaiLatihan({ id: 'sb-100', soalIds: soal, detikPerSoal: 126, akhirSesi: Date.now() + 378000 });
    assert.equal(s1.aktivitas.fase, 'jawab');
    await tunggu(() => mia.api.state().aktivitas && novia.api.state().aktivitas);
    assert.deepEqual(mia.api.state().aktivitas.soalIds, soal);
    assert.ok(mia.api.kirimJawaban({ aktivitas: 'sb-100', soalId: 'A1-104', o: 'D', k: 'yakin' }));
    assert.ok(novia.api.kirimJawaban({ aktivitas: 'sb-100', soalId: 'A1-104', o: 'A' }));
    assert.ok(novia.api.kirimJawaban({ aktivitas: 'sb-100', soalId: 'A1-104', k: 'menebak' }));
    assert.equal(mia.api.kirimJawaban({ aktivitas: 'sb-lain', soalId: 'A1-104', o: 'D' }), false);
    assert.equal(mia.api.kirimJawaban({ aktivitas: 'sb-100', soalId: 'C9-001', o: 'D' }), false, 'soal di luar aktivitas');
    await tunggu(() => { const j = nicky.api.jawabanSemua(); return j.Mia && j.Novia && j.Novia.k['A1-104'] === 'menebak'; });
    const j = nicky.api.jawabanSemua();
    assert.deepEqual([j.Mia.j['A1-104'], j.Mia.k['A1-104'], j.Novia.j['A1-104']], ['D', 'yakin', 'A']);
    assert.ok(nicky.peristiwa.jawaban.some(e => e.nama === 'Mia' && e.aktivitas === 'sb-100'));
    await tunggu(() => mia.api.jawabanSemua().Novia, 2000, 'anggota melihat jawaban anggota lain');
    nicky.api.bukaKunci('A1-104', { Mia: { o: 'D', k: 'yakin', b: 1 }, Novia: { o: 'A', k: 'menebak', b: 0 } });
    await tunggu(() => mia.api.state().aktivitas.fase === 'kunci');
    assert.deepEqual(mia.api.state().aktivitas.hasilSoal, { soalId: 'A1-104', per: { Mia: { o: 'D', k: 'yakin', b: 1 }, Novia: { o: 'A', k: 'menebak', b: 0 } }, penjelas: null });
    nicky.api.aturSoal(1);
    await tunggu(() => novia.api.state().aktivitas.idx === 1);
    const a = novia.api.state().aktivitas; assert.equal(a.fase, 'jawab'); assert.equal(a.hasilSoal, null);
    assert.equal(nicky.api.aturSoal(9), false);
  });

  it('ujian: mulaiUjian → kirimSelesai → tutupUjian → akhiriAktivitas (cuplikan) → dokumen anggota dikosongkan', async () => {
    const { jar, urls, nicky, kode } = await siapkanRoom();
    const { o: mia } = await gabungkan(jar, urls, kode, 'Mia');
    const { o: novia } = await gabungkan(jar, urls, kode, 'Novia');
    const mulai = Date.now();
    nicky.api.mulaiUjian({ id: 'utabc123', kode: 'UKPU1.B84.utabc123.VE8.A1~h8', judul: 'Try Out B 1–40', mulai, akhir: mulai + 84 * 60000 });
    await tunggu(() => mia.api.state().aktivitas && novia.api.state().aktivitas);
    assert.equal(mia.api.state().aktivitas.status, 'jalan');
    assert.ok(mia.api.kirimSelesai('utabc123', { jawaban: { 'A1-104': 'D', 'A3-144': 'B' }, ragu: ['A3-144'], detik: 1800 }));
    assert.ok(novia.api.kirimSelesai('utabc123', { jawaban: { 'A1-104': 'A' }, detik: 2400.4 }));
    await tunggu(() => { const j = nicky.api.jawabanSemua(); return j.Mia && j.Mia.selesai && j.Novia && j.Novia.selesai; });
    const j = nicky.api.jawabanSemua();
    assert.deepEqual(j.Mia.k, { 'A3-144': 'ragu' }); assert.equal(j.Mia.detik, 1800); assert.equal(j.Novia.detik, 2400);
    nicky.api.tutupUjian(); await tunggu(() => mia.api.state().aktivitas.status === 'selesai');
    assert.equal(mia.api.kirimJawaban({ aktivitas: 'utabc123', soalId: 'A1-104', o: 'B' }), false, 'ujian ditutup');
    const cuplik = nicky.api.akhiriAktivitas();
    assert.equal(cuplik.aktivitas.id, 'utabc123'); assert.deepEqual(Object.keys(cuplik.jawaban).sort(), ['Mia', 'Novia']);
    await tunggu(() => mia.api.state().aktivitas === null);
    assert.deepEqual(Object.keys(nicky.api.jawabanSemua('utabc123')).sort(), ['Mia', 'Novia'], 'tuan tetap menyimpan jawaban di memori');
    // anggota mengosongkan dokumen retained setelah aktivitas berakhir
    const r1 = jar.relai.get('ws://r1');
    await tunggu(() => nicky.peristiwa.jawaban.some(e => e.nama === 'Mia' && e.aktivitas === null), 2000);
    assert.ok(r1.retained.size > 0);
  });

  it('terbitkanSesi: rekaman sampai ke anggota lewat terimaSesiRoom + indeks; anggota terlambat juga menerimanya', async () => {
    const { jar, urls, nicky, kode } = await siapkanRoom();
    const { o: mia } = await gabungkan(jar, urls, kode, 'Mia');
    const sesi = { id: 'sb-1700000000000', mulai: 1700000000000, selesai: 1700000900000, tingkat: 'B', peserta: ['Nicky', 'Mia'], anggaranDetik: 252, mode: 'latihan', judul: null, soal: [{ id: 'A1-104', kode: 'A1', topik: 'A1.1', kunci: 'D', detik: 80, jawaban: { Nicky: { o: 'D', k: 'yakin', b: 1 }, Mia: { o: 'A', k: null, b: 0 } } }], sumber: 'latih' };
    assert.equal(nicky.api.terbitkanSesi({ id: 'x y' }), false);
    assert.equal(mia.api.terbitkanSesi(sesi), false, 'anggota tidak menerbitkan sesi');
    assert.ok(nicky.api.terbitkanSesi(sesi));
    await tunggu(() => mia.diterima.length === 1);
    assert.deepEqual(mia.diterima[0], sesi);
    await tunggu(() => mia.api.riwayat().length === 1);
    assert.deepEqual(mia.api.riwayat()[0], { id: 'sb-1700000000000', t: 1700000900000, mode: 'latihan', judul: null, nSoal: 1, peserta: ['Nicky', 'Mia'], akurasiTim: 50, nHadir: null });
    assert.ok(mia.peristiwa.indeks.length >= 1 && mia.peristiwa.sesi.length === 1);
    const { o: alfi } = await gabungkan(jar, urls, kode, 'Alfi');
    await tunggu(() => alfi.diterima.length === 1 && alfi.api.riwayat().length === 1);
    assert.deepEqual(await alfi.api.mintaSesi('sb-1700000000000'), sesi);
    assert.equal(await alfi.api.mintaSesi('sb-tidak-ada'), null);
    assert.ok(nicky.api.hapusSesi('sb-1700000000000'));
    await tunggu(() => mia.api.riwayat().length === 0);
  });

  it('anggota yang bergabung terlambat mendapat state retained (aktivitas berjalan) dan jawaban retained', async () => {
    const { jar, urls, nicky, kode } = await siapkanRoom();
    const { o: mia } = await gabungkan(jar, urls, kode, 'Mia');
    nicky.api.mulaiLatihan({ id: 'sb-200', soalIds: ['A1-104', 'B6-126'], detikPerSoal: 126 });
    await tunggu(() => mia.api.state().aktivitas);
    mia.api.kirimJawaban({ aktivitas: 'sb-200', soalId: 'A1-104', o: 'C' });
    await tunggu(() => nicky.api.jawabanSemua().Mia);
    const { o: jessie, st } = await gabungkan(jar, urls, kode, 'Jessie');
    assert.equal(st.aktivitas.id, 'sb-200');
    await tunggu(() => jessie.api.jawabanSemua().Mia && jessie.api.jawabanSemua().Mia.j['A1-104'] === 'C');
  });

  it('tuan putus, retained hilang, tersambung lagi → menerbitkan ulang state, indeks, dan rekaman sesi', async () => {
    const { jar, urls, nicky, kode } = await siapkanRoom({ urls: ['ws://r1'] });
    const sesi = { id: 'sb-5', mulai: 5, selesai: 6, peserta: ['Nicky'], soal: [{ id: 'A1-104', kunci: 'D', jawaban: { Nicky: { o: 'D', k: null, b: 1 } } }], sumber: 'latih' };
    nicky.lokal.set('sb-5', sesi);
    nicky.api.mulaiLatihan({ id: 'sb-300', soalIds: ['A1-104'], detikPerSoal: 126 });
    nicky.api.terbitkanSesi(sesi);
    const r1 = jar.relai.get('ws://r1');
    await tunggu(() => Array.from(r1.retained.keys()).some(t => t.includes('/r/')));
    nicky.api._rt().sesiCache.clear();   // paksa ambil dari penyimpanan lokal (UKP.belajar.sesiBersamaDari)
    r1.matikan(true); assert.equal(r1.retained.size, 0);
    await tunggu(() => !nicky.api.status().tersambung);
    r1.hidupkan();
    await tunggu(() => nicky.api.status().tersambung, 3000);
    await tunggu(() => { const ks = Array.from(r1.retained.keys()).map(t => t.split('/').slice(2).join('/')); return ks.includes('s') && ks.includes('i') && ks.includes('r/sb-5'); }, 3000);
    const { o: melva, st } = await gabungkan(jar, ['ws://r1'], kode, 'Melva');
    assert.equal(st.aktivitas.id, 'sb-300');
    await tunggu(() => melva.diterima.length === 1 && melva.api.riwayat().length === 1);
  });

  it('ambilAlih: anggota menjadi tuan, tuan lama turun menjadi anggota', async () => {
    const { jar, urls, nicky, kode } = await siapkanRoom();
    const { o: mia } = await gabungkan(jar, urls, kode, 'Mia');
    assert.equal(mia.api.aturSoal(0), false);
    const s = mia.api.ambilAlih();
    assert.equal(s.tuan, 'Mia'); assert.equal(mia.api.info().peran, 'tuan');
    await tunggu(() => nicky.api.info().peran === 'anggota');
    assert.ok(nicky.peristiwa.peran.some(p => p.peran === 'anggota' && p.tuan === 'Mia'));
    assert.equal(nicky.simpan.s.ruang.peran, 'anggota');
    assert.equal(nicky.api.mulaiLatihan({ id: 'sb-9', soalIds: ['A1-104'], detikPerSoal: 60 }), false);
    assert.ok(mia.api.mulaiLatihan({ id: 'sb-9', soalIds: ['A1-104'], detikPerSoal: 60 }));
    await tunggu(() => nicky.api.state().aktivitas && nicky.api.state().aktivitas.id === 'sb-9');
    await tunggu(() => nicky.api.status().relai.length === 1 && mia.api.status().relai.length === 2);
  });

  it('dua relai: anggota di relai berbeda bertemu lewat tuan; pesan ganda dideduplikasi', async () => {
    const { jar, urls, nicky, kode } = await siapkanRoom();
    const { o: mia } = await gabungkan(jar, ['ws://r1'], kode, 'Mia');
    const { o: novia } = await gabungkan(jar, ['ws://r2'], kode, 'Novia');
    assert.equal(mia.api.status().relai[0].url, 'ws://r1'); assert.equal(novia.api.status().relai[0].url, 'ws://r2');
    nicky.api.mulaiLatihan({ id: 'sb-400', soalIds: ['A1-104'], detikPerSoal: 126 });
    await tunggu(() => mia.api.state().aktivitas && novia.api.state().aktivitas);
    assert.equal(mia.peristiwa.state.filter(s => s.aktivitas && s.aktivitas.id === 'sb-400').length, 1);
    novia.api.kirimJawaban({ aktivitas: 'sb-400', soalId: 'A1-104', o: 'B' });
    await tunggu(() => mia.api.jawabanSemua().Novia, 2000, 'jawaban Novia (r2) diteruskan tuan ke Mia (r1)');
    await tidur(150);
    assert.equal(nicky.peristiwa.jawaban.filter(e => e.nama === 'Novia').length, 1, 'tuan menerima sekali walau ada gema dari r1');
    assert.equal(mia.peristiwa.jawaban.filter(e => e.nama === 'Novia').length, 1);
    // ulangi muatan mentah yang sama → diabaikan
    const r2 = jar.relai.get('ws://r2'); const tA = Array.from(r2.retained.keys()).find(t => t.includes('/a/' + slugUntuk(kode, 'Novia')));
    r2.terbit(tA, r2.retained.get(tA), false); await tidur(100);
    assert.equal(nicky.peristiwa.jawaban.filter(e => e.nama === 'Novia').length, 1);
  });

  it('pesan sampah, kode salah, skema salah, topik tertukar, dan nama palsu diabaikan diam-diam', async () => {
    const { jar, urls, nicky, kode } = await siapkanRoom({ urls: ['ws://r1'] });
    const { o: mia } = await gabungkan(jar, ['ws://r1'], kode, 'Mia');
    const r1 = jar.relai.get('ws://r1'); const n0 = mia.peristiwa.state.length, j0 = nicky.peristiwa.jawaban.length;
    const aw = (await muatanUntuk(kode, 's', {})).awalan;
    r1.terbit(aw + '/s', nodeCrypto.randomBytes(80), false);                                   // sampah
    const salah = await muatanUntuk('ABCDEFGHJKMNPQ', 's', { v: 1 }); r1.terbit(aw + '/s', salah.muatan, false);  // kode lain
    const skema = await muatanUntuk(kode, 's', { v: 1, t: Date.now(), urut: Date.now() + 9e6, d: 'abcd', nama: 'Nicky', tuan: 'Nicky', room: 'rusak' }); r1.terbit(skema.topik, skema.muatan, true);
    const tukar = await muatanUntuk(kode, 's', nicky.api.state()); r1.terbit(aw + '/a/' + slugUntuk(kode, 'Nicky'), tukar.muatan, false);   // muatan state di topik jawaban
    const palsu = await muatanUntuk(kode, 'a/' + slugUntuk(kode, 'Mia'), { v: 1, t: Date.now(), urut: 1, d: 'abcd', nama: 'Novia', aktivitas: null, j: {}, k: {}, selesai: false, detik: null });
    r1.terbit(palsu.topik, palsu.muatan, false);                                               // nama tidak cocok dengan slug topik
    const json = await muatanUntuk(kode, 's', 'bukan json'); r1.terbit(json.topik, json.muatan, false);
    r1.terbit(aw + '/s', new Uint8Array(0), false);                                            // kosong
    await tidur(200);
    assert.equal(mia.peristiwa.state.length, n0); assert.equal(nicky.peristiwa.jawaban.length, j0);
    assert.equal(mia.api.state().room.nama, 'Tim UKP B');
    assert.ok(mia.api.status().tersambung);
  });

  it('paket terlalu besar (> 256 KB) menutup sambungan; klien tersambung lagi dan tetap berfungsi', async () => {
    const { jar, nicky, kode } = await siapkanRoom({ urls: ['ws://r1'] });
    const { o: mia } = await gabungkan(jar, ['ws://r1'], kode, 'Mia');
    const r1 = jar.relai.get('ws://r1'); const aw = (await muatanUntuk(kode, 's', {})).awalan;
    const sebelum = r1.terima.length;
    r1.terbit(aw + '/a/' + slugUntuk(kode, 'Mia'), nodeCrypto.randomBytes(260 * 1024), false);
    await tunggu(() => r1.terima.length > sebelum + 1, 3000, 'kedua klien menyambung ulang');
    await tunggu(() => mia.api.status().tersambung && nicky.api.status().tersambung, 3000);
    nicky.api.aturRoom({ nama: 'Tim B baru' });
    await tunggu(() => mia.api.state().room.nama === 'Tim B baru');
  });

  it('anti-banjir: lebih dari 20 pesan per detik di satu topik dibuang', async () => {
    const { jar, nicky, kode } = await siapkanRoom({ urls: ['ws://r1'], nicky: { konfig: { banjirPerDetik: 20 } } });
    nicky.api.mulaiLatihan({ id: 'sb-500', soalIds: ['A1-104'], detikPerSoal: 126 });
    const r1 = jar.relai.get('ws://r1'); const slug = slugUntuk(kode, 'Jessie');
    const pesan = [];
    const t0 = Math.ceil(Date.now() / 1000) * 1000 + 50; while (Date.now() < t0) await tidur(5);   // awal detik baru
    for (let i = 0; i < 40; i++) pesan.push(await muatanUntuk(kode, 'a/' + slug, { v: 1, t: Date.now(), urut: i + 1, d: 'beef', nama: 'Jessie', aktivitas: 'sb-500', j: { 'A1-104': 'A' }, k: {}, selesai: false, detik: null }));
    const mulai = Date.now(); pesan.forEach(p => r1.terbit(p.topik, p.muatan, false));
    await tidur(300);
    const n = nicky.peristiwa.jawaban.filter(e => e.nama === 'Jessie').length;
    assert.ok(Date.now() - mulai < 2000);
    assert.ok(n >= 1 && n <= 21, 'diterima ' + n + ' dari 40');
  });

  it('anggota tidak bisa mengubah state: API menolak, state palsu (nama ≠ tuan atau urut lama) diabaikan', async () => {
    const { jar, nicky, kode } = await siapkanRoom({ urls: ['ws://r1'] });
    const { o: mia } = await gabungkan(jar, ['ws://r1'], kode, 'Mia');
    for (const f of [() => mia.api.aturRoom({ nama: 'X' }), () => mia.api.mulaiLatihan({ id: 'sb-1', soalIds: ['A1-104'] }), () => mia.api.bukaKunci('A1-104', {}), () => mia.api.mulaiUjian({ id: 'u1', kode: 'K', akhir: Date.now() }), () => mia.api.akhiriAktivitas(), () => mia.api.hapusSesi('x')]) assert.ok(!f());
    const r1 = jar.relai.get('ws://r1'); const st = nicky.api.state();
    const palsu1 = Object.assign({}, st, { nama: 'Mia', urut: st.urut + 10, room: { nama: 'Dibajak', peserta: [], tingkat: null } });
    const palsu2 = Object.assign({}, st, { d: 'beef01', urut: st.urut - 10, room: { nama: 'Lama', peserta: [], tingkat: null } });
    for (const x of [palsu1, palsu2]) { const m = await muatanUntuk(kode, 's', x); r1.terbit(m.topik, m.muatan, true); }
    await tidur(200);
    assert.equal(mia.api.state().room.nama, 'Tim UKP B'); assert.equal(nicky.api.state().room.nama, 'Tim UKP B');
  });

  it('last will: anggota terputus tidak wajar → tuan melihatnya offline; keluar() rapi → offline + s.ruang dikosongkan', async () => {
    const { jar, nicky, kode } = await siapkanRoom({ urls: ['ws://r1'] });
    const { o: mia } = await gabungkan(jar, ['ws://r1'], kode, 'Mia');
    const { o: novia } = await gabungkan(jar, ['ws://r1'], kode, 'Novia');
    await tunggu(() => nicky.api.status().online.includes('Mia') && nicky.api.status().online.includes('Novia'));
    mia.api.KONFIG.jedaSambung = [5000]; mia.api.KONFIG.jitter = 0;   // jangan cepat kembali
    const r1 = jar.relai.get('ws://r1');
    r1.putuskan(k => !!(k.will && k.will.topik.endsWith('/h/' + slugUntuk(kode, 'Mia'))));
    await tunggu(() => nicky.peristiwa.hadir.some(h => h.nama === 'Mia' && !h.online), 2000);
    assert.ok(!nicky.api.status().online.includes('Mia'));
    await novia.api.keluar();
    assert.equal(novia.simpan.s.ruang, null); assert.equal(novia.api.info(), null);
    await tunggu(() => !nicky.api.status().online.includes('Novia'), 2000);
  });

  it('anggota berpindah ke relai berikutnya bila relai pertama mati', async () => {
    const { jar, urls, kode } = await siapkanRoom();
    jar.relai.get('ws://r1').matikan();
    const { o: mia, st } = await gabungkan(jar, urls, kode, 'Mia');
    assert.ok(st && st.tuan === 'Nicky');
    assert.deepEqual(mia.api.status().relai.map(r => ({ url: r.url, status: r.status })), [{ url: 'ws://r2', status: 'tersambung' }]);
  });

  it('selisihJam: anggota memperkirakan jam tuan', async () => {
    const { jar, nicky, kode } = await siapkanRoom({ urls: ['ws://r1'], nicky: { env: { now: () => Date.now() + 7000 } } });
    const { o: mia } = await gabungkan(jar, ['ws://r1'], kode, 'Mia');
    nicky.api.aturRoom({ nama: 'Tim jam' });
    await tunggu(() => mia.api.state().room.nama === 'Tim jam');
    const s = mia.api.selisihJam(); assert.ok(s > 6800 && s <= 7000, String(s));
    assert.equal(nicky.api.selisihJam(), 0);
  });

  it('room tidak tersedia: tanpa crypto.subtle, tanpa WebSocket, atau di dalam claude.ai', async () => {
    const jar = buatJaringan();
    const tanpaSubtle = instans(jar, ['ws://r1'], { env: { crypto: { getRandomValues: b => b } } }).api;
    const st = tanpaSubtle.status(); assert.equal(st.tersedia, false); assert.match(st.alasan, /https/);
    assert.throws(() => tanpaSubtle.buat({ nama: 'Nicky' }), /https/);
    await assert.rejects(tanpaSubtle.gabung('ABCD-EFGHJ-KMNPQ', 'Mia'), /https/);
    const claude = instans(jar, ['ws://r1'], { env: { lokasi: { hostname: 'claude.ai', origin: 'https://claude.ai', pathname: '/' } } }).api;
    assert.match(claude.status().alasan, /claude\.ai/);
    const tanpaWS = R.buatInstans({ crypto: globalThis.crypto, WebSocket: 'bukan', store: { get: () => ({}), save() {} } });
    assert.equal(tanpaWS.status().tersedia, false);
    const ok = instans(jar, ['ws://r1']).api;
    await assert.rejects(ok.gabung('ABCD', 'Mia'), /tidak valid/);
    await assert.rejects(ok.gabung('ABCD-EFGHJ-KMNPQ', ''), /Nama/);
  });

  it('status: semua relai gagal → alasan jelas dan tetap mencoba', async () => {
    const { jar, nicky, kode } = await siapkanRoom({ urls: ['ws://r1'] });
    const mati = instans(jar, ['ws://tidak-ada']);
    mati.api.gabung(kode, 'Mia');
    await tunggu(() => /terhubung/.test(mati.api.status().alasan || ''), 3000);
    assert.ok(!/relai|enkripsi|MQTT/i.test(mati.api.status().alasan));
    assert.ok(mati.api.status().relai[0].galat, 'galat terakhir tercatat untuk diagnosis');
    assert.equal(mati.api.status().tersambung, false);
    assert.ok(mati.api.status().relai.every(r => r.url === 'ws://tidak-ada' && r.status !== 'tersambung'));
    const n0 = jar.soket.filter(w => w.url === 'ws://tidak-ada').length; await tidur(200);
    assert.ok(jar.soket.filter(w => w.url === 'ws://tidak-ada').length > n0, 'tetap mencoba menyambung');
    assert.ok(nicky.api.status().tersambung);
  });

  it('pulihkan() setelah muat ulang: tuan menyambung lagi dengan peran dan state tersimpan', async () => {
    const { jar, nicky, kode } = await siapkanRoom({ urls: ['ws://r1'] });
    nicky.api.mulaiLatihan({ id: 'sb-600', soalIds: ['A1-104'], detikPerSoal: 126 });
    const salinan = JSON.parse(JSON.stringify(nicky.simpan.s));
    nicky.api._putuskanSemua(); nicky.api.KONFIG.jedaSambung = [60000];
    const ulang = instans(jar, ['ws://r1']); ulang.simpan.s = salinan;
    assert.ok(ulang.api.pulihkan());
    assert.equal(ulang.api.info().peran, 'tuan'); assert.equal(ulang.api.state().aktivitas.id, 'sb-600');
    await tunggu(() => ulang.api.status().tersambung);
    assert.ok(ulang.api.aturSoal(0));
    await tunggu(() => !ulang.api.status().calon, 3000, 'masa calon tuan selesai');
    const { st } = await gabungkan(jar, ['ws://r1'], kode, 'Mia');
    assert.equal(st.aktivitas.id, 'sb-600');
  });
});

// ======================================================================================
// v8.2 B0: fondasi room tahap 2 (intip, adopsi, nama ganda, tutup, ragu boolean, U7, versi, lobi/siap, paham, penjelas, tim, indeks, ujiRelai)
async function bacaRetained(relai, kode, sufiks) {
  const kr = Kripto(globalThis.crypto, KONFIG_UJI.iterasi); const aw = await kr.awalan(kode); const kunci = await kr.kunci(kode);
  const m = relai.retained.get(aw + '/' + sufiks); if (!m) return null;
  const t = await kr.dekripsi(kunci, aw + '/' + sufiks, m); return t == null ? null : JSON.parse(t);
}
describe('ruang: tahap 2 (B0)', () => {
  async function siapkan(opsi) {
    opsi = opsi || {};
    const jar = buatJaringan(); const urls = opsi.urls || ['ws://r1'];
    urls.forEach(u => jar.relaiBaru(u));
    const nicky = instans(jar, urls, opsi.nicky);
    const kode = nicky.api.buat({ nama: 'Nicky', namaRoom: 'Tim UKP B', peserta: ['Nicky', 'Mia', 'Novia', 'Jessie', 'Melva', 'Alfi'], tingkat: 'B' });
    await tunggu(() => nicky.api.status().tersambung);
    const masuk = async (nama, o) => { const x = instans(jar, (o && o.urls) || urls, o); await x.api.gabung(kode, nama); return x; };
    return { jar, urls, nicky, kode, masuk, r1: jar.relai.get(urls[0]) };
  }
  const SOAL = ['A1-104', 'B6-126', 'A3-144'];

  it('intip: membaca state tanpa bergabung dan tanpa kehadiran; kode tak dikenal atau relai mati → null; kode salah → reject', async () => {
    const { jar, nicky, kode, r1 } = await siapkan();
    await tunggu(() => Array.from(r1.retained.keys()).some(t => t.endsWith('/s')));
    const nH = Array.from(r1.retained.keys()).filter(t => t.includes('/h/')).length;
    const tamu = instans(jar, ['ws://r1']);
    const t0 = Date.now(); const st = await tamu.api.intip(formatKode(kode).toLowerCase());
    assert.equal(st.room.nama, 'Tim UKP B'); assert.deepEqual(st.room.peserta, ['Nicky', 'Mia', 'Novia', 'Jessie', 'Melva', 'Alfi']); assert.equal(st.tuan, 'Nicky');
    assert.ok(Date.now() - t0 < 1500, 'cepat: ' + (Date.now() - t0) + ' ms');
    assert.equal(tamu.api.info(), null, 'tidak bergabung'); assert.equal(tamu.simpan.s.ruang, undefined, 's.ruang tidak disentuh');
    const conn = r1.terima.filter(p => p.will === null || !p.will);
    assert.ok(conn.length >= 1, 'CONNECT tanpa last will');
    await tidur(80);
    assert.equal(Array.from(r1.retained.keys()).filter(t => t.includes('/h/')).length, nH, 'tidak ada dokumen hadir baru');
    assert.deepEqual(nicky.api.status().online, ['Nicky']);
    assert.equal(r1.klien.size, 1, 'sambungan intip sudah diputus');
    assert.equal(await tamu.api.intip('ABCD-EFGHJ-KMNPQ'), null, 'room tidak ada');
    const mati = instans(jar, ['ws://tidak-ada']); const t1 = Date.now();
    assert.equal(await mati.api.intip(kode), null); assert.ok(Date.now() - t1 < 1500);
    await assert.rejects(tamu.api.intip('ABCD'), /tidak valid/);
    assert.equal((await nicky.api.intip(kode)).tuan, 'Nicky', 'di room yang sama → state lokal');
  });

  it('adopsi dokumen jawaban sendiri setelah muat ulang: jawaban lama tidak tertimpa (juga bila mengetuk sebelum retained tiba)', async () => {
    const { jar, nicky, kode, masuk, r1 } = await siapkan();
    const mia = await masuk('Mia');
    nicky.api.mulaiLatihan({ id: 'sb-ad1', soalIds: SOAL, detikPerSoal: 60 });
    await tunggu(() => mia.api.state().aktivitas);
    mia.api.kirimJawaban({ aktivitas: 'sb-ad1', soalId: 'A1-104', o: 'B', k: 'yakin' });
    mia.api.kirimPaham('A1-104');
    await tunggu(() => { const j = nicky.api.jawabanSemua().Mia; return j && j.j['A1-104'] === 'B' && j.paham['A1-104'] === 1; });
    // muat ulang: instans baru dengan s.ruang yang sama; mengetuk SEBELUM tersambung (dokumen lama belum terlihat)
    const salinan = JSON.parse(JSON.stringify(mia.simpan.s)); mia.api.KONFIG.jedaSambung = [60000]; mia.api._putuskanSemua(); mia.api._rt().koneksi.forEach(k => k.henti(false));
    const mia2 = instans(jar, ['ws://r1']); mia2.simpan.s = salinan;
    assert.ok(mia2.api.pulihkan());
    assert.ok(mia2.api.kirimJawaban({ aktivitas: 'sb-ad1', soalId: 'B6-126', o: 'C' }));
    await tunggu(() => { const j = nicky.api.jawabanSemua().Mia; return j && j.j['B6-126'] === 'C' && j.j['A1-104'] === 'B'; }, 3000, 'tuan melihat gabungan jawaban lama + baru');
    const dok = nicky.api.jawabanSemua().Mia;
    assert.deepEqual([dok.k, dok.paham], [{ 'A1-104': 'yakin' }, { 'A1-104': 1 }]);
    const ret = await bacaRetained(r1, kode, 'a/' + slugUntuk(kode, 'Mia'));
    assert.deepEqual(ret.j, { 'A1-104': 'B', 'B6-126': 'C' }, 'retained di relai memuat keduanya');
    // muat ulang kedua: tersambung dulu, baru mengetuk → dokumen diadopsi utuh
    const salinan2 = JSON.parse(JSON.stringify(mia2.simpan.s)); mia2.api._rt().koneksi.forEach(k => k.henti(false));
    const mia3 = instans(jar, ['ws://r1']); mia3.simpan.s = salinan2; mia3.api.pulihkan();
    await tunggu(() => mia3.api.status().tersambung && mia3.api._rt().dokSaya);
    assert.deepEqual(mia3.api._rt().dokSaya.j, { 'A1-104': 'B', 'B6-126': 'C' });
    mia3.api.kirimJawaban({ aktivitas: 'sb-ad1', soalId: 'A3-144', o: 'A' });
    await tunggu(() => { const j = nicky.api.jawabanSemua().Mia; return j && Object.keys(j.j).length === 3; });
  });

  it('nama ganda: dua perangkat bernama sama → hadir().ganda; satu perangkat → false; entri hadir lengkap', async () => {
    const { nicky, masuk } = await siapkan();
    const mia1 = await masuk('Mia'); const novia = await masuk('Novia');
    await tunggu(() => nicky.api.hadir().Mia && nicky.api.hadir().Mia.online && nicky.api.hadir().Novia);
    assert.equal(nicky.api.hadir().Mia.ganda, false);
    const mia2 = await masuk('mia');
    await tunggu(() => nicky.api.hadir().Mia && nicky.api.hadir().Mia.ganda, 2000, 'tuan melihat nama ganda');
    await tunggu(() => mia1.api.hadir().Mia && mia1.api.hadir().Mia.ganda, 2000, 'perangkat pertama juga tahu');
    const h = nicky.api.hadir();
    assert.equal(h.Novia.ganda, false); assert.equal(h.Novia.online, true); assert.equal(h.Novia.siap, false);
    assert.deepEqual(Object.keys(h.Novia).sort(), ['ganda', 'nama', 'online', 'peran', 'siap', 'siapId', 't']);
    assert.ok(nicky.peristiwa.hadir.some(e => e.ganda === true));
    await mia2.api.keluar();
    await tunggu(() => !nicky.api.hadir().Mia.ganda, 2000, 'ganda hilang setelah satu perangkat keluar');
    assert.ok(novia);
  });

  it('tutup(): anggota online menerima penutupan dan keluar; retained dihapus kecuali batu nisan s; intip → null', async () => {
    const { jar, nicky, kode, masuk, r1 } = await siapkan();
    const mia = await masuk('Mia');
    nicky.api.mulaiLatihan({ id: 'sb-t1', soalIds: SOAL, detikPerSoal: 60 });
    await tunggu(() => mia.api.state().aktivitas);
    mia.api.kirimJawaban({ aktivitas: 'sb-t1', soalId: 'A1-104', o: 'B' });
    nicky.api.terbitkanSesi({ id: 'sb-lama', mulai: 1, selesai: 2, peserta: ['Nicky'], soal: [{ id: 'A1-104', kunci: 'D', jawaban: { Nicky: { o: 'D', k: null, b: 1 } } }] });
    await tunggu(() => Array.from(r1.retained.keys()).some(t => t.includes('/a/')) && Array.from(r1.retained.keys()).some(t => t.includes('/r/')));
    let tutupMia = 0; mia.api.on('tutup', () => tutupMia++);
    assert.equal(await mia.api.tutup(), false, 'anggota tidak bisa menutup');
    assert.equal(await nicky.api.tutup(), true);
    assert.equal(nicky.api.info(), null); assert.equal(nicky.simpan.s.ruang, null);
    await tunggu(() => tutupMia === 1 && mia.api.info() === null, 2000, 'anggota keluar');
    assert.equal(mia.simpan.s.ruang, null);
    assert.ok(mia.peristiwa.state.some(s => s.ditutup === true));
    const sisa = () => Array.from(r1.retained.keys()).map(t => t.split('/').slice(2).join('/'));
    await tunggu(() => sisa().join() === 's', 2000, 'hanya batu nisan yang tersisa: ' + sisa());
    await tidur(100); assert.deepEqual(sisa(), ['s'], 'tidak ada kehadiran/last will yang muncul lagi');
    const nisan = await bacaRetained(r1, kode, 's');
    assert.equal(nisan.ditutup, true); assert.deepEqual(nisan.room.peserta, []); assert.equal(nisan.aktivitas, null);
    assert.equal(await instans(jar, ['ws://r1']).api.intip(kode), null);
  });

  it('kirimSelesai: ragu berupa larik boolean sejajar soal (latihan dan ujian lewat bacaKode), indeks, atau id', async () => {
    const belajarUji = { terimaSesiRoom: () => 'baru', sesiBersamaDari: () => null, ujianTim: { bacaKode: () => ({ soalIds: ['A1-001', 'A1-002', 'A1-003'] }) } };
    const { nicky, masuk } = await siapkan();
    const mia = await masuk('Mia', { env: { belajar: belajarUji } });
    nicky.api.mulaiLatihan({ id: 'sb-rg', soalIds: SOAL, detikPerSoal: 60 });
    await tunggu(() => mia.api.state().aktivitas);
    assert.ok(mia.api.kirimSelesai('sb-rg', { jawaban: ['A', 'B', null], ragu: [false, true, false], detik: 30 }));
    await tunggu(() => nicky.api.jawabanSemua().Mia && nicky.api.jawabanSemua().Mia.selesai);
    assert.deepEqual(nicky.api.jawabanSemua().Mia.k, { 'B6-126': 'ragu' });
    assert.deepEqual(nicky.api.jawabanSemua().Mia.j, { 'A1-104': 'A', 'B6-126': 'B', 'A3-144': '-' });
    const m = Date.now(); nicky.api.mulaiUjian({ id: 'utrg1', kode: 'UKPU1.KODE', judul: 'U', mulai: m, akhir: m + 60000 });
    await tunggu(() => mia.api.state().aktivitas && mia.api.state().aktivitas.id === 'utrg1');
    assert.ok(mia.api.kirimSelesai('utrg1', { jawaban: { 'A1-001': 'C' }, ragu: [true, false, true] }));
    await tunggu(() => nicky.api.jawabanSemua('utrg1').Mia);
    assert.deepEqual(nicky.api.jawabanSemua('utrg1').Mia.k, { 'A1-001': 'ragu', 'A1-003': 'ragu' });
    assert.ok(mia.api.kirimSelesai('utrg1', { jawaban: ['A', 'B', 'C'], ragu: [1, 'A1-001'] }));
    await tunggu(() => nicky.api.jawabanSemua('utrg1').Mia.j['A1-003'] === 'C');
    assert.deepEqual(nicky.api.jawabanSemua('utrg1').Mia.k, { 'A1-001': 'ragu', 'A1-002': 'ragu' });
  });

  it('U7 state basi: laptop pemimpin lama dibuka setelah ambil alih, relai lambat 3 dtk → tidak menimpa; turun menjadi anggota', async () => {
    const { jar, nicky, kode, masuk, r1 } = await siapkan({ nicky: { konfig: { tungguCalonMs: 5000 } } });
    const mia = await masuk('Mia');
    nicky.api.mulaiLatihan({ id: 'sb-u7', soalIds: SOAL, detikPerSoal: 60 });
    await tunggu(() => mia.api.state().aktivitas);
    const laptopLama = JSON.parse(JSON.stringify(nicky.simpan.s));
    nicky.api.KONFIG.jedaSambung = [600000]; nicky.api._rt().koneksi.forEach(k => k.henti(false));   // laptop ditutup
    await tidur(30);
    const s = mia.api.ambilAlih(); assert.equal(s.tuan, 'Mia');
    mia.api.aturSoal(2);
    await tunggu(() => { const x = mia.api.state(); return x.aktivitas.idx === 2; });
    await tidur(50);
    r1.lambat = 3000;
    const lama = instans(jar, ['ws://r1'], { konfig: { tungguCalonMs: 5000 } }); lama.simpan.s = laptopLama;
    assert.ok(lama.api.pulihkan());
    assert.equal(lama.api.status().calon, true);
    const lokal = lama.api.aturSoal(1);   // perubahan lokal selama calon: tidak boleh terbit
    assert.ok(lokal && lokal.aktivitas.idx === 1);
    await tunggu(() => lama.api.info().peran === 'anggota', 6000, 'turun menjadi anggota');
    assert.equal(lama.api.status().calon, false);
    assert.equal(lama.api.state().tuan, 'Mia'); assert.equal(lama.api.state().aktivitas.idx, 2);
    assert.ok(lama.peristiwa.peran.some(p => p.peran === 'anggota' && p.tuan === 'Mia'));
    r1.lambat = 0;
    const ret = await bacaRetained(r1, kode, 's');
    assert.equal(ret.tuan, 'Mia'); assert.equal(ret.aktivitas.idx, 2);
    const jessie = instans(jar, ['ws://r1']); const st = await jessie.api.gabung(kode, 'Jessie');
    assert.equal(st.tuan, 'Mia'); assert.equal(st.aktivitas.idx, 2);
    assert.equal(mia.api.info().peran, 'tuan');
  });

  it('versiBeda: versi aplikasi anggota berbeda dari state; tuan memperbarui versiApp saat mengubah state', async () => {
    const { nicky, masuk } = await siapkan({ nicky: { env: { versi: '8.2' } } });
    const sama = await masuk('Mia', { env: { versi: '8.2' } });
    const beda = await masuk('Novia', { env: { versi: '8.1' } });
    const tanpa = await masuk('Alfi', { env: { versi: null } });
    assert.equal(nicky.api.state().versiApp, '8.2');
    assert.equal(sama.api.status().versiBeda, false); assert.equal(beda.api.status().versiBeda, true); assert.equal(tanpa.api.status().versiBeda, false);
    assert.equal(nicky.api.status().versiBeda, false);
    const rtN = nicky.api._rt(); rtN.state.versiApp = '8.0';   // state lama dari versi sebelumnya → perubahan berikut memperbarui versiApp
    nicky.api.aturRoom({ nama: 'Tim B' });
    assert.equal(nicky.api.state().versiApp, '8.2');
    await tunggu(() => sama.api.state().room.nama === 'Tim B');
    assert.equal(sama.api.state().versiApp, '8.2');
  });

  it('lobi + siap: bukaLobi idempoten, siap terlihat ≤ 2 dtk, bertahan setelah sambung ulang dan detak, reset saat lobi berganti, kosong saat mulai', async () => {
    const { nicky, masuk, r1 } = await siapkan();
    const mia = await masuk('Mia'); const jessie = await masuk('Jessie');
    assert.equal(mia.api.kirimSiap(true), false, 'tanpa lobi');
    const s1 = nicky.api.bukaLobi(); assert.match(s1.lobi.id, /^l[0-9a-z]+$/);
    assert.equal(nicky.api.bukaLobi().lobi.id, s1.lobi.id, 'idempoten');
    await tunggu(() => mia.api.state().lobi && mia.api.state().lobi.id === s1.lobi.id);
    const t0 = Date.now(); assert.ok(mia.api.kirimSiap(true));
    await tunggu(() => nicky.api.hadir().Mia && nicky.api.hadir().Mia.siap, 2000);
    assert.ok(Date.now() - t0 < 2000);
    assert.equal(nicky.api.hadir().Mia.siapId, s1.lobi.id); assert.equal(nicky.api.hadir().Jessie.siap, false);
    assert.equal(mia.simpan.s.ruang.siap, s1.lobi.id);
    const siapNicky = () => Object.values(nicky.api.hadir()).filter(h => h.siap).length;
    assert.equal(siapNicky(), 1);
    // sambung ulang: relai memutus Mia → dokumen hadir terbit lagi dengan siap
    const n0 = nicky.peristiwa.hadir.length;
    r1.putuskan(k => !!(k.will && k.will.topik.endsWith('/h/' + slugUntuk(nicky.api.info().kode, 'Mia'))));
    await tunggu(() => nicky.peristiwa.hadir.slice(n0).some(h => h.nama === 'Mia' && h.online && h.siap), 3000, 'siap terkirim ulang setelah sambung ulang');
    await tunggu(() => nicky.api.hadir().Mia.online && nicky.api.hadir().Mia.siap, 2000);
    const ret = await bacaRetained(r1, nicky.api.info().kode, 'h/' + slugUntuk(nicky.api.info().kode, 'Mia'));
    assert.equal(ret.siap, s1.lobi.id, 'retained h/ memuat siap');
    const n1 = nicky.peristiwa.hadir.length; await tidur(500);
    assert.ok(nicky.peristiwa.hadir.slice(n1).some(h => h.nama === 'Mia' && h.siap), 'detak membawa siap');
    // lobi baru → hitungan 0
    const s2 = nicky.api.bukaLobi({ baru: true }); assert.notEqual(s2.lobi.id, s1.lobi.id);
    await tunggu(() => mia.api.state().lobi.id === s2.lobi.id);
    assert.equal(siapNicky(), 0); assert.equal(mia.api._rt().siap, null);
    jessie.api.kirimSiap(true); await tunggu(() => siapNicky() === 1);
    jessie.api.kirimSiap(false); await tunggu(() => siapNicky() === 0);
    // "Mulai sekarang" saat 0 siap; lobi otomatis kosong
    const s3 = nicky.api.mulaiLatihan({ id: 'sb-lobi', soalIds: SOAL, detikPerSoal: 60 });
    assert.equal(s3.lobi, null);
    await tunggu(() => mia.api.state().aktivitas && mia.api.state().lobi === null);
    nicky.api.bukaLobi(); assert.ok(nicky.api.state().lobi); assert.equal(nicky.api.tutupLobi().lobi, null);
    assert.equal(mia.api.bukaLobi(), false, 'anggota tidak membuka lobi');
  });

  it('paham + penjelas + tim: bukaKunci membawa penjelas dan skor tim; penjelas tidak sah ditolak; kirimPaham ke dokumen jawaban', async () => {
    const { nicky, masuk } = await siapkan();
    const mia = await masuk('Mia'); const novia = await masuk('Novia');
    nicky.api.mulaiLatihan({ id: 'sb-pj', soalIds: SOAL, detikPerSoal: 60 });
    await tunggu(() => mia.api.state().aktivitas && novia.api.state().aktivitas);
    const per = n => { const o = {}; ['Nicky', 'Mia', 'Novia', 'Jessie', 'Melva', 'Alfi'].forEach((x, i) => { o[x] = { o: i < n ? 'D' : 'A', k: null, b: i < n ? 1 : 0 }; }); return o; };
    // penjelas tidak sah: b = 0, tidak ada di per, atau nama rusak → false, state tetap
    const urut0 = nicky.api.state().urut;
    assert.equal(nicky.api.bukaKunci('A1-104', per(5), { penjelas: 'Alfi' }), false);
    assert.equal(nicky.api.bukaKunci('A1-104', per(5), { penjelas: 'Budi' }), false);
    assert.equal(nicky.api.bukaKunci('A1-104', per(5), { penjelas: ' x ' }), false);
    assert.equal(nicky.api.bukaKunci('A1-104', per(5), { tim: { benar: 7, dijawab: 6 } }), false);
    assert.equal(nicky.api.state().urut, urut0); assert.equal(nicky.api.state().aktivitas.fase, 'jawab');
    const s = nicky.api.bukaKunci('A1-104', per(5), { penjelas: 'mia', tim: { benar: 5, dijawab: 6 } });
    assert.equal(s.aktivitas.hasilSoal.penjelas, 'Mia', 'ejaan mengikuti per');
    await tunggu(() => novia.api.state().aktivitas.fase === 'kunci');
    assert.equal(novia.api.state().aktivitas.hasilSoal.penjelas, 'Mia'); assert.deepEqual(novia.api.state().aktivitas.tim, { benar: 5, dijawab: 6 });
    assert.ok(novia.api.kirimPaham('A1-104')); assert.equal(novia.api.kirimPaham('C9-999'), false);
    await tunggu(() => nicky.api.pahamSemua().Novia);
    assert.deepEqual(nicky.api.pahamSemua(), { Novia: { 'A1-104': 1 } }); assert.deepEqual(nicky.api.penjelasSemua(), { 'A1-104': 'Mia' });
    assert.deepEqual(novia.api.penjelasSemua('sb-pj'), { 'A1-104': 'Mia' });
    // tim bertahan melewati aturSoal; kunci tanpa tim mempertahankan nilai; 3 soal 5/6, 3/6, 6/6 → 14/18
    nicky.api.aturSoal(1); await tunggu(() => mia.api.state().aktivitas.idx === 1);
    assert.deepEqual(mia.api.state().aktivitas.tim, { benar: 5, dijawab: 6 });
    nicky.api.bukaKunci('B6-126', per(3), { penjelas: 'Nicky' }); assert.deepEqual(nicky.api.state().aktivitas.tim, { benar: 5, dijawab: 6 });
    nicky.api.bukaKunci('B6-126', per(3), { penjelas: 'Nicky', tim: { benar: 8, dijawab: 12 } });
    nicky.api.aturSoal(2); nicky.api.bukaKunci('A3-144', per(6), { tim: { benar: 14, dijawab: 18 } });
    await tunggu(() => mia.api.state().aktivitas.idx === 2 && mia.api.state().aktivitas.fase === 'kunci');
    assert.deepEqual(mia.api.state().aktivitas.tim, { benar: 14, dijawab: 18 }); assert.equal(mia.api.state().aktivitas.hasilSoal.penjelas, null);
    assert.deepEqual(nicky.api.penjelasSemua(), { 'A1-104': 'Mia', 'B6-126': 'Nicky' });
    // validator: penjelas dengan b = 0 di state dari kabel ditolak
    const st = nicky.api.state(); st.aktivitas.hasilSoal.per.Alfi.b = 0; st.aktivitas.hasilSoal.penjelas = 'Alfi'; assert.equal(P.validState(st), null);
    st.aktivitas.hasilSoal.penjelas = 'Tidak Ada'; assert.equal(P.validState(st), null);
    st.aktivitas.hasilSoal.penjelas = 'Nicky'; assert.ok(P.validState(st));
  });

  it('rekaman meloloskan tim dan diisiPemimpin; entri indeks membawa akurasiTim dan nHadir', async () => {
    const { nicky, masuk } = await siapkan();
    const mia = await masuk('Mia');
    const tim = { benar: 14, dijawab: 18, akurasi: 78, hadir: 5, terimaKasih: { Jessie: 2, Mia: 3 }, bahasLagi: ['B6-126'] };
    const sesi = { id: 'sb-tim1', mulai: 1700000000000, selesai: 1700000600000, peserta: ['Nicky', 'Mia'], mode: 'latihan', soal: [{ id: 'A1-104', kunci: 'D', jawaban: { Nicky: { o: 'D', k: null, b: 1 }, Mia: { o: 'A', k: null, b: 0 } } }], tim, diisiPemimpin: { Mia: ['A1-104'] } };
    assert.ok(nicky.api.terbitkanSesi(sesi));
    assert.ok(nicky.api.terbitkanSesi({ id: 'sb-tim0', mulai: 1600000000000, selesai: 1600000000001, peserta: ['Nicky'], soal: [], tim: 'rusak' }), 'tim bukan objek dibuang, rekaman tetap sah');
    await tunggu(() => mia.diterima.length === 2 && mia.api.riwayat().length === 2);
    const r = mia.diterima.find(x => x.id === 'sb-tim1');
    assert.deepEqual(r.tim, tim); assert.deepEqual(r.diisiPemimpin, { Mia: ['A1-104'] });
    assert.equal(mia.diterima.find(x => x.id === 'sb-tim0').tim, undefined);
    const e = mia.api.riwayat();
    assert.deepEqual([e[0].id, e[0].akurasiTim, e[0].nHadir], ['sb-tim1', 78, 5]);
    assert.deepEqual([e[1].akurasiTim, e[1].nHadir], [null, null]);
    assert.equal(P.entriIndeks({ id: 'x', mulai: 1, peserta: [], soal: [], tim: { benar: 3, dijawab: 4 } }).akurasiTim, 75);
    assert.equal(P.entriIndeks({ id: 'x', mulai: 1, peserta: [], mode: 'ujian', soal: [{ id: 'A1-104', jawaban: { A: { o: 'A', b: 1 } } }] }).akurasiTim, null);
  });

  it('klien lama: dokumen tanpa field baru tetap sah (state, hadir, jawaban, indeks) dan diterima lewat kabel', async () => {
    const t = Date.now(); const amp = { v: 1, t, urut: t, d: 'abcdef', nama: 'Nicky' };
    const lamaState = Object.assign({}, amp, { tuan: 'Nicky', room: { nama: 'Tim', peserta: ['Nicky'], tingkat: 'B' }, versiApp: '8.0', aktivitas: { jenis: 'latihan', id: 'sb-1', soalIds: ['A1-104'], idx: 0, fase: 'kunci', mulaiSoal: t, detikPerSoal: 60, akhirSesi: null, hasilSoal: { soalId: 'A1-104', per: { Nicky: { o: 'D', k: null, b: 1 } } } } });
    const v = P.validState(lamaState); assert.ok(v);
    assert.deepEqual([v.lobi, v.aktivitas.tim, v.aktivitas.hasilSoal.penjelas, v.ditutup], [null, null, null, undefined]);
    assert.equal(P.validState(Object.assign({}, lamaState, { lobi: { id: 'bukan id!', t } })), null);
    assert.equal(P.validState(Object.assign({}, lamaState, { ditutup: 'ya' })), null);
    assert.equal(P.validHadir(Object.assign({}, amp, { online: true, peran: 'anggota' })).siap, null);
    assert.equal(P.validHadir(Object.assign({}, amp, { online: true, siap: '../x' })), null);
    const j = P.validJawaban(Object.assign({}, amp, { aktivitas: 'sb-1', j: { 'A1-104': 'A' }, k: {}, selesai: false, detik: null }));
    assert.deepEqual(j.paham, {});
    assert.equal(P.validJawaban(Object.assign({}, amp, { aktivitas: 'sb-1', j: {}, k: {}, paham: { 'A1-104': 2 }, selesai: false })), null);
    const ix = P.validIndeks(Object.assign({}, amp, { daftar: [{ id: 'sb-1', t, mode: 'latihan', judul: null, nSoal: 1, peserta: ['Nicky'] }] }));
    assert.deepEqual([ix.daftar[0].akurasiTim, ix.daftar[0].nHadir], [null, null]);
    assert.equal(P.validIndeks(Object.assign({}, amp, { daftar: [{ id: 'sb-1', t, mode: 'latihan', judul: null, nSoal: 1, peserta: [], akurasiTim: 101 }] })), null);
    // lewat kabel: dokumen jawaban dan hadir format lama dari "Jessie" diterima tuan
    const { nicky, kode, r1 } = await siapkan();
    nicky.api.mulaiLatihan({ id: 'sb-lama', soalIds: SOAL, detikPerSoal: 60 });
    const slug = slugUntuk(kode, 'Jessie'); const tt = Date.now();
    const mj = await muatanUntuk(kode, 'a/' + slug, { v: 1, t: tt, urut: 1, d: 'beef01', nama: 'Jessie', aktivitas: 'sb-lama', j: { 'A1-104': 'C' }, k: {}, selesai: false, detik: null });
    const mh = await muatanUntuk(kode, 'h/' + slug, { v: 1, t: tt, urut: 2, d: 'beef01', nama: 'Jessie', online: true, peran: 'anggota' });
    r1.terbit(mj.topik, mj.muatan, true); r1.terbit(mh.topik, mh.muatan, true);
    await tunggu(() => nicky.api.jawabanSemua().Jessie && nicky.api.hadir().Jessie);
    assert.deepEqual(nicky.api.jawabanSemua().Jessie.paham, {}); assert.equal(nicky.api.hadir().Jessie.siap, false);
  });

  it('ujiRelai: tiap relai diuji paralel tanpa bergabung; relai mati, menolak, dan diam dilaporkan dengan alasan', async () => {
    const jar = buatJaringan(); jar.relaiBaru('ws://hidup'); jar.relaiBaru('ws://tolak').tolak = 5; jar.relaiBaru('ws://diam').tanpaConnack = true;
    const x = instans(jar, ['ws://hidup', 'ws://mati', 'ws://tolak', 'ws://diam']);
    const t0 = Date.now(); const h = await x.api.ujiRelai(); const lama = Date.now() - t0;
    assert.deepEqual(h.map(r => [r.url, r.ok]), [['ws://hidup', true], ['ws://mati', false], ['ws://tolak', false], ['ws://diam', false]]);
    assert.equal(h[0].alasan, null); assert.ok(h[0].ms >= 0 && h[0].ms < 200, String(h[0].ms));
    assert.match(h[1].alasan, /ditutup sebelum siap/); assert.match(h[2].alasan, /Ditolak server \(kode 5\)/); assert.match(h[3].alasan, /Waktu habis/);
    assert.ok(lama < 300 + 250, 'paralel, dibatasi batasSambungMs: ' + lama);
    assert.ok(h.every(r => typeof r.ms === 'number' && !/relai/i.test(r.alasan || '')));
    assert.equal(x.api.info(), null); assert.deepEqual(x.api.status().relai, []);
    assert.ok(jar.relai.get('ws://hidup').log.includes('disconnect'), 'diputus rapi');
    const claude = instans(jar, ['ws://hidup'], { env: { lokasi: { hostname: 'claude.ai', origin: 'https://claude.ai', pathname: '/' } } });
    const hc = await claude.api.ujiRelai(); assert.equal(hc[0].ok, false); assert.match(hc[0].alasan, /claude\.ai/);
  });
});

// ======================================================================================
// v8.2 B0b: jalur publik sungguhan — kredensial per jalur, batu nisan, pemilihan jalur menurut tempat state berada
describe('ruang: jalur dan batu nisan (B0b)', () => {
  const PES = ['Nicky', 'Mia', 'Novia', 'Jessie', 'Melva', 'Alfi'];
  async function tuanDi(jar, urls, opsi) {
    const nicky = instans(jar, urls, opsi);
    const kode = nicky.api.buat({ nama: 'Nicky', namaRoom: 'Tim UKP B', peserta: PES, tingkat: 'B' });
    await tunggu(() => nicky.api.status().relai.length && nicky.api.status().relai.every(r => r.status === 'tersambung'));
    await tunggu(() => urls.every(u => Array.from(jar.relai.get(R.pisahRelai(u).url).retained.keys()).some(t => t.endsWith('/s'))));
    return { nicky, kode };
  }
  const jalur = o => o.api.status().relai.map(r => r.url);

  it('RELAI_BAWAAN baru, batasSambungMs 8000; pisahRelai memisahkan url#nama:sandi', () => {
    assert.deepEqual(R.RELAI_BAWAAN, ['wss://broker.emqx.io:8084/mqtt', 'wss://public.cloud.shiftr.io:443#public:public', 'wss://test.mosquitto.org:8081/', 'wss://broker.hivemq.com:8884/mqtt']);
    assert.equal(R.KONFIG.batasSambungMs, 8000); assert.equal(R.KONFIG.tungguRelaiLainMs, 1200);
    assert.deepEqual(R.pisahRelai('wss://public.cloud.shiftr.io:443#public:public'), { url: 'wss://public.cloud.shiftr.io:443', username: 'public', password: 'public' });
    assert.deepEqual(R.pisahRelai('wss://h:1/x#a%40b:c:d'), { url: 'wss://h:1/x', username: 'a@b', password: 'c:d' });
    assert.deepEqual(R.pisahRelai('wss://h:1/x#saja'), { url: 'wss://h:1/x', username: 'saja', password: null });
    assert.deepEqual(R.pisahRelai('ws://r1'), { url: 'ws://r1', username: null, password: null });
  });

  it('kredensial per jalur sampai di CONNECT (tuan, intip, anggota, ujiRelai); WebSocket dibuka tanpa fragmen', async () => {
    const jar = buatJaringan(); jar.relaiBaru('ws://k1').kred = ['public', 'public'];
    const L = ['ws://k1#public:public'];
    const { nicky, kode } = await tuanDi(jar, L);
    assert.deepEqual(jalur(nicky), ['ws://k1'], 'status tanpa sandi');
    assert.equal((await instans(jar, L).api.intip(kode)).tuan, 'Nicky');
    const mia = instans(jar, L); const st = await mia.api.gabung(kode, 'Mia'); assert.equal(st.tuan, 'Nicky');
    const k1 = jar.relai.get('ws://k1');
    assert.ok(k1.terima.length >= 3 && k1.terima.every(p => p.username === 'public' && Buffer.from(p.password).toString() === 'public'));
    assert.ok(jar.soket.every(w => w.url === 'ws://k1' && !w.url.includes('#')));
    const h = await mia.api.ujiRelai();
    assert.deepEqual(h.map(x => [x.url, x.ok]), [['ws://k1', true]]);
    mia.api.RELAI = ['ws://k1#public:public', 'ws://k1', 'ws://k1#public:salah'];
    const h2 = await mia.api.ujiRelai(); mia.api.RELAI = L;
    assert.deepEqual(h2.map(x => x.ok), [true, false, false]); assert.match(h2[1].alasan, /kode 5/);
    assert.ok(h2.every(x => x.url === 'ws://k1'));
    const tanpa = instans(jar, ['ws://k1']); tanpa.api.gabung(kode, 'Novia');
    await tunggu(() => (tanpa.api.status().relai[0] || {}).galat, 2000); assert.match(tanpa.api.status().relai[0].galat, /CONNACK 5/);
  });

  it('batu nisan: tutup() tetap tertutup walau relai menunda hapus retained; intip null; anggota terlambat (pulihkan/gabung) keluar tanpa kehadiran', async () => {
    const jar = buatJaringan(); const r1 = jar.relaiBaru('ws://r1'); r1.tundaHapus = 600;
    const { nicky, kode } = await tuanDi(jar, ['ws://r1']);
    const mia = instans(jar, ['ws://r1']); await mia.api.gabung(kode, 'Mia');
    nicky.api.mulaiLatihan({ id: 'sb-n1', soalIds: ['A1-104'], detikPerSoal: 60 });
    await tunggu(() => mia.api.state().aktivitas);
    mia.api.kirimJawaban({ aktivitas: 'sb-n1', soalId: 'A1-104', o: 'B' });
    await tunggu(() => nicky.api.jawabanSemua().Mia);
    const salinanMia = JSON.parse(JSON.stringify(mia.simpan.s)); mia.api.KONFIG.jedaSambung = [600000]; mia.api._rt().koneksi.forEach(k => k.henti(false));   // Mia offline saat penutupan
    assert.equal(await nicky.api.tutup(), true);
    const t0 = Date.now(); assert.equal(await instans(jar, ['ws://r1']).api.intip(kode), null, 'intip null walau hapus belum berlaku');
    assert.ok(Date.now() - t0 < 600 && Array.from(r1.retained.keys()).some(t => t.includes('/a/')), 'hapus memang masih tertunda saat intip');
    // anggota terlambat lewat pulihkan
    const mia2 = instans(jar, ['ws://r1']); mia2.simpan.s = salinanMia; let tutup = 0; mia2.api.on('tutup', () => tutup++);
    assert.ok(mia2.api.pulihkan());
    await tunggu(() => tutup === 1 && mia2.api.info() === null, 2000);
    assert.equal(mia2.simpan.s.ruang, null);
    // gabung ke room bernisan → null cepat
    const alfi = instans(jar, ['ws://r1']); const t1 = Date.now(); const st = await alfi.api.gabung(kode, 'Alfi');
    assert.equal(st, null); assert.ok(Date.now() - t1 < 1000, String(Date.now() - t1)); assert.equal(alfi.api.info(), null);
    await tidur(700);
    const sisa = Array.from(r1.retained.keys()).map(t => t.split('/').slice(2).join('/'));
    assert.deepEqual(sisa, ['s'], 'tanpa kehadiran baru dari Mia/Alfi: ' + sisa);
    assert.equal((await bacaRetained(r1, kode, 's')).ditutup, true);
  });

  it('relai pertama mati (menggantung): intip lalu gabung langsung ke jalur yang benar tanpa menunggu batasSambungMs', async () => {
    const jar = buatJaringan(); jar.relaiBaru('ws://mati').tanpaConnack = true; jar.relaiBaru('ws://r2');
    const { kode } = await tuanDi(jar, ['ws://r2']);
    const mia = instans(jar, ['ws://mati', 'ws://r2'], { konfig: { batasSambungMs: 2000 } });
    const t0 = Date.now(); const st = await mia.api.intip(kode); const msIntip = Date.now() - t0;
    assert.equal(st.tuan, 'Nicky'); assert.ok(msIntip < 600, 'intip ' + msIntip);
    const n0 = jar.soket.filter(w => w.url === 'ws://mati').length;
    const t1 = Date.now(); const st2 = await mia.api.gabung(kode, 'Mia'); const msGabung = Date.now() - t1;
    assert.equal(st2.tuan, 'Nicky'); assert.ok(msGabung < 600, 'gabung ' + msGabung);
    assert.deepEqual(jalur(mia), ['ws://r2']);
    assert.equal(jar.soket.filter(w => w.url === 'ws://mati').length, n0, 'gabung tidak mencoba jalur mati');
  });

  it('tuan hanya menjangkau jalur ke-2, anggota menjangkau semua → anggota berakhir di jalur ke-2 (pemilihan internal gabung)', async () => {
    const jar = buatJaringan(); const r1 = jar.relaiBaru('ws://r1'); jar.relaiBaru('ws://r2');
    const { nicky, kode } = await tuanDi(jar, ['ws://r2']);
    const mia = instans(jar, ['ws://r1', 'ws://r2']);
    const st = await mia.api.gabung(kode, 'Mia');
    assert.equal(st.tuan, 'Nicky'); assert.deepEqual(jalur(mia), ['ws://r2']);
    assert.equal(mia.simpan.s.ruang.relai, 'ws://r2');
    await tunggu(() => nicky.api.status().online.includes('Mia'));
    assert.ok(!Array.from(r1.retained.keys()).some(t => t.includes('/h/')), 'pemilihan jalur tidak membuat kehadiran');
  });

  it('seri (state sama di dua jalur): urutan daftar menang, bukan yang tercepat', async () => {
    const jar = buatJaringan(); const r1 = jar.relaiBaru('ws://r1'); jar.relaiBaru('ws://r2');
    const { kode } = await tuanDi(jar, ['ws://r1', 'ws://r2']);
    r1.lambat = 80;   // r1 lebih lambat mengirim retained
    const mia = instans(jar, ['ws://r1', 'ws://r2']);
    assert.equal((await mia.api.intip(kode)).tuan, 'Nicky');
    r1.lambat = 0;
    await mia.api.gabung(kode, 'Mia');
    assert.deepEqual(jalur(mia), ['ws://r1']);
    // urut lebih besar menang atas urutan daftar: r1 berisi state lama
    const jar2 = buatJaringan(); jar2.relaiBaru('ws://r1'); jar2.relaiBaru('ws://r2');
    const t2 = await tuanDi(jar2, ['ws://r1', 'ws://r2']);
    const sLama = jar2.relai.get('ws://r1').retained.get(Array.from(jar2.relai.get('ws://r1').retained.keys()).find(t => t.endsWith('/s')));
    t2.nicky.api.aturRoom({ nama: 'Baru' });
    await tidur(50);
    const r1b = jar2.relai.get('ws://r1'); const ts = Array.from(r1b.retained.keys()).find(t => t.endsWith('/s')); r1b.retained.set(ts, sLama);
    const novia = instans(jar2, ['ws://r1', 'ws://r2']); const st = await novia.api.intip(t2.kode);
    assert.equal(st.room.nama, 'Baru');
    await novia.api.gabung(t2.kode, 'Novia'); assert.deepEqual(jalur(novia), ['ws://r2']);
  });

  it('pulihkan() anggota memakai jalur tersimpan; jalur tersambung tanpa state → pindah; tanpa state di mana pun → tidak berputar tanpa henti', async () => {
    const jar = buatJaringan(); const r1 = jar.relaiBaru('ws://r1'); jar.relaiBaru('ws://r2');
    const { nicky, kode } = await tuanDi(jar, ['ws://r1', 'ws://r2']);
    const mia = instans(jar, ['ws://r1', 'ws://r2']); await mia.api.gabung(kode, 'Mia');
    assert.equal(mia.simpan.s.ruang.relai, 'ws://r1');
    const salinan = JSON.parse(JSON.stringify(mia.simpan.s)); salinan.ruang.relai = 'ws://r2'; mia.api._rt().koneksi.forEach(k => k.henti(false));
    const mia2 = instans(jar, ['ws://r1', 'ws://r2']); mia2.simpan.s = salinan; mia2.api.pulihkan();
    await tunggu(() => mia2.api.status().tersambung);
    assert.deepEqual(jalur(mia2), ['ws://r2'], 'mulai dari jalur tersimpan');
    assert.equal(jar.soket.filter(w => w.url === 'ws://r1').length >= 1, true);
    // jalur tersimpan r1 kini tanpa state (retained hilang, tuan tidak lagi di r1) → pindah ke r2
    nicky.api.RELAI = ['ws://r2']; nicky.api._rt().koneksi.forEach(k => { if (k.urlTetap === 'ws://r1') k.henti(); }); nicky.api._rt().koneksi = nicky.api._rt().koneksi.filter(k => k.urlTetap !== 'ws://r1');
    r1.retained.clear();
    const s3 = JSON.parse(JSON.stringify(mia2.simpan.s)); s3.ruang.relai = 'ws://r1'; mia2.api._rt().koneksi.forEach(k => k.henti(false));
    const mia3 = instans(jar, ['ws://r1', 'ws://r2']); mia3.simpan.s = s3; mia3.api.pulihkan();
    await tunggu(() => jalur(mia3)[0] === 'ws://r1' && mia3.api.status().tersambung, 2000, 'mula-mula di r1');
    await tunggu(() => jalur(mia3)[0] === 'ws://r2' && mia3.api.status().tersambung, 2000, 'pindah ke r2');
    await tunggu(() => mia3.simpan.s.ruang.relai === 'ws://r2' && nicky.api.status().online.includes('Mia'), 2000);
    assert.ok(!Array.from(r1.retained.keys()).some(t => t.includes('/h/')), 'tidak ada kehadiran di jalur tanpa state');
    // tanpa state di mana pun: tetap tersambung, putaran berikutnya dengan jeda bertahap
    const jar2 = buatJaringan(); jar2.relaiBaru('ws://a'); jar2.relaiBaru('ws://b');
    const sepi = instans(jar2, ['ws://a', 'ws://b'], { konfig: { jedaSambung: [500, 1000] } });
    sepi.simpan.s = { ruang: { kode, nama: 'Mia', peran: 'anggota', namaRoom: 'Tim', dibuat: 1, state: null, indeks: null } };
    sepi.api.pulihkan();
    await tidur(1200);
    const n = jar2.soket.length;
    assert.ok(n >= 2 && n <= 4, 'jumlah percobaan dalam 1,2 dtk: ' + n);
    assert.ok(sepi.api.status().tersambung, 'tetap di jalur yang tersambung');
  });
});

// ======================================================================================
describe('ruang: integrasi dengan js/core.js dan js/learn.js', () => {
  const U = muat(['core.js', 'learn.js', 'ruang.js']);
  it('modul termuat tanpa DOM; store normal() mempertahankan s.ruang', () => {
    assert.equal(typeof U.ruang.buat, 'function');
    const n = U.store.normal({ profil: { tingkat: 'B' }, ruang: { kode: 'ABCDEFGHJKMNPQ', nama: 'Mia', peran: 'anggota', namaRoom: 'Tim', dibuat: 1 } });
    assert.deepEqual(n.ruang, { kode: 'ABCDEFGHJKMNPQ', nama: 'Mia', peran: 'anggota', namaRoom: 'Tim', dibuat: 1 });
    assert.equal(U.store.normal({ profil: {} }).ruang, undefined);
  });
  it('terimaSesiRoom: sisip urut, sumber room, idempoten, tidak menimpa rekaman lokal, pangkas ≤ 60', () => {
    const L = U.belajar;
    const id = L.mulaiSesiBersama(['Nicky', 'Mia'], ['A1-104'], 0);
    L.catatSoalSesi(id, { id: 'A1-104', kode: 'A1', topik: 'A1.1', kunci: 'D' }, { Nicky: 'D', Mia: 'A' }, 30); L.akhiriSesiBersama(id);
    const lokal = L.sesiBersamaDari(id);
    assert.equal(L.terimaSesiRoom(Object.assign({}, lokal, { peserta: ['X'] })), null, 'rekaman lokal tidak ditimpa');
    const r = { id: 'sb-1000', mulai: 1000, selesai: 2000, tingkat: 'B', peserta: ['Nicky', 'Mia'], anggaranDetik: 126, soal: [{ id: 'A1-104', kode: 'A1', topik: 'A1.1', kunci: 'D', detik: 30, jawaban: { Nicky: { o: 'D', k: null, b: 1 }, Mia: { o: 'A', k: null, b: 0 } } }], sumber: 'latih' };
    assert.equal(L.terimaSesiRoom(r), 'baru');
    assert.equal(L.terimaSesiRoom(r), 'sama');
    assert.equal(L.terimaSesiRoom(Object.assign({}, r, { selesai: 3000 })), 'diperbarui');
    const x = L.sesiBersamaDari('sb-1000'); assert.equal(x.sumber, 'room'); assert.equal(x.sumberAsal, 'latih'); assert.equal(x.selesai, 3000);
    const daftar = U.store.get().sesiBersama; assert.equal(daftar[0].id, 'sb-1000', 'disisipkan menurut waktu mulai (terlama di depan)');
    assert.equal(L.terimaSesiRoom({ id: 5 }), null);
    for (let i = 0; i < 70; i++) L.terimaSesiRoom(Object.assign({}, r, { id: 'sb-x' + i, mulai: 5000 + i }));
    assert.equal(U.store.get().sesiBersama.length, 60);
    assert.ok(L.evaluasiSesi(L.sesiBersamaDari('sb-x69')).nSoal === 1);
  });
  // ---------- v8.2 B0: js/learn.js ----------
  const PES = ['Nicky', 'Mia', 'Novia', 'Jessie', 'Melva', 'Alfi'];
  function sesiTim() {   // 3 soal: 5/6, 3/6 (3 salah), 6/6 benar
    const jw = (kunci, nBenar, salahKosong) => { const o = {}; PES.forEach((n, i) => { const opsi = i < nBenar ? kunci : (salahKosong && i === PES.length - 1 ? '-' : 'A'); o[n] = { o: opsi, k: null, b: opsi === kunci ? 1 : 0 }; }); return o; };
    return { id: 'sb-tim', mulai: 1700000000000, selesai: 1700001500000, tingkat: 'B', peserta: PES.slice(), mode: 'latihan', sumber: 'latih',
      soal: [{ id: 'A1-104', kode: 'A1', topik: 'A1.1', kunci: 'D', jawaban: jw('D', 5) }, { id: 'B6-126', kode: 'B6', topik: 'B6.1', kunci: 'C', jawaban: jw('C', 3) }, { id: 'A3-144', kode: 'A3', topik: 'A3.1', kunci: 'B', jawaban: jw('B', 6) }] };
  }
  it('timDariSesi: skor tim, hadir, terima kasih (paham × penjelas), bahas lagi (≥ 3 salah)', () => {
    const L = U.belajar; const sesi = sesiTim();
    const paham = { Novia: { paham: { 'B6-126': 1, 'A1-104': 1 } }, Alfi: { 'B6-126': 1, 'A1-104': 1 }, Jessie: { 'B6-126': 1 }, Mia: { 'A1-104': 1, 'C9-999': 1 }, Melva: { 'A3-144': 0 } };
    const t = L.timDariSesi(sesi, { paham, penjelas: { 'A1-104': 'mia', 'B6-126': 'Nicky' } });
    assert.deepEqual([t.benar, t.dijawab, t.akurasi], [14, 18, 78]);
    assert.equal(t.hadir, 6);
    assert.deepEqual(t.terimaKasih, { Mia: 2, Nicky: 3 }, 'Mia berterima kasih ke diri sendiri dan soal di luar rekaman diabaikan; ejaan dari peserta');
    assert.deepEqual(Object.keys(t.terimaKasih), ['Mia', 'Nicky']);
    assert.deepEqual(t.bahasLagi, ['B6-126']);
    assert.equal(L.timDariSesi(sesi, { hadir: ['Mia', 'mia', 'Novia'] }).hadir, 2);
    assert.equal(L.timDariSesi(sesi, { hadir: 5 }).hadir, 5);
    assert.deepEqual(L.timDariSesi(sesi).terimaKasih, {});
    // penjelas dari rekaman (soal[i].penjelas) dan dokumen jawaban room apa adanya
    const s2 = sesiTim(); s2.soal[0].penjelas = 'Jessie';
    assert.deepEqual(L.timDariSesi(s2, { paham: { Alfi: { v: 1, nama: 'Alfi', j: {}, k: {}, paham: { 'A1-104': 1 } } } }).terimaKasih, { Jessie: 1 });
    const kosong = L.timDariSesi(sesiTim(), { batasSalah: 4 }); assert.deepEqual(kosong.bahasLagi, []);
    assert.deepEqual(L.timDariSesi(null), { benar: 0, dijawab: 0, akurasi: null, hadir: 0, terimaKasih: {}, bahasLagi: [] });
    const sk = sesiTim(); sk.soal = sk.soal.slice(0, 1); sk.soal[0].jawaban = { Nicky: { o: '-', k: null, b: 0 } };
    assert.equal(L.timDariSesi(sk).akurasi, null);
  });
  it('rekapSesi dengan sesi.tim: baris terima kasih (abjad, tanpa nol) dan bahas lagi; rekaman room tanpa skor per nama', () => {
    const L = U.belajar; const sesi = sesiTim();
    sesi.tim = { benar: 14, dijawab: 18, akurasi: 78, hadir: 5, terimaKasih: { Mia: 3, Jessie: 2, Alfi: 0 }, bahasLagi: ['B6-126', 'A1-104'] };
    const lokal = L.rekapSesi(sesi);
    assert.match(lokal, /3 soal · skor tim 78% · 5 dari 6 hadir/);
    assert.match(lokal, /\nTerima kasih untuk penjelas: Jessie \(2\), Mia \(3\)\n/);
    assert.match(lokal, /\nBahas lagi: B6-126, A1-104\n/);
    assert.match(lokal, /\nNicky 3\/3\n/, 'rekaman lokal pemimpin tetap memuat baris per nama');
    const room = L.rekapSesi(Object.assign({}, sesi, { sumber: 'room' }));
    for (const n of PES) assert.ok(!new RegExp('(^|\\n)' + n + ' \\d').test(room), 'tanpa skor per nama: ' + n);
    assert.ok(!/\d\/3/.test(room));
    assert.match(room, /Terima kasih untuk penjelas: Jessie \(2\), Mia \(3\)/);
    const tanpaTk = L.rekapSesi(Object.assign({}, sesi, { tim: { akurasi: 78, terimaKasih: {}, bahasLagi: [] } }));
    assert.ok(!/Terima kasih/.test(tanpaTk) && !/Bahas lagi/.test(tanpaTk));
    const tanpaTim = L.rekapSesi(sesiTim());
    assert.ok(!/Terima kasih|Bahas lagi|skor tim/.test(tanpaTim)); assert.match(tanpaTim, /akurasi tim 78%/);
    const ujianRoom = L.rekapSesi(Object.assign(sesiTim(), { mode: 'ujian', sumber: 'room' }));
    assert.match(ujianRoom, /rata-rata skor/); assert.ok(!/(^|\n)Nicky \d/.test(ujianRoom));
  });
  it('simpanBersamaAktif/bersamaAktif membawa field room; ujianTim.kumpul menerima sumber room', () => {
    const L = U.belajar;
    const id = L.mulaiSesiBersama(['Nicky', 'Mia'], ['A1-104'], 0);
    assert.equal(L.simpanBersamaAktif({ sesiId: id, soalIds: ['A1-104'], idx: 0, room: 'ABCDEFGHJKMNPQ' }).room, 'ABCDEFGHJKMNPQ');
    assert.equal(L.bersamaAktif().room, 'ABCDEFGHJKMNPQ');
    assert.equal(L.simpanBersamaAktif({ sesiId: id, soalIds: ['A1-104'], room: 1 }).room, 1);
    assert.equal(L.simpanBersamaAktif({ sesiId: id, soalIds: ['A1-104'] }).room, null);
    assert.equal(L.bersamaAktif().room, null);
    const UT = L.ujianTim;
    UT.susun({ soalIds: ['A1-104', 'B6-126'], menit: 10, peserta: ['Nicky', 'Mia'] }); UT.mulai();
    assert.ok(UT.kumpul('Mia', { jawaban: ['A', '-'], ragu: [false, true], detik: 60, sumber: 'room' }));
    assert.equal(U.store.get().ujianTim.terkumpul.Mia.sumber, 'room');
    assert.ok(UT.kumpul('Nicky', { jawaban: ['B'], sumber: 'lain' })); assert.equal(U.store.get().ujianTim.terkumpul.Nicky.sumber, 'ketik');
    UT.batal();
  });
});
