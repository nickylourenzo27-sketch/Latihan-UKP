/* Uji Paket Kb (v9.4): jalur sambungan yang tahan gangguan (lomba jalur anggota, deteksi putus lewat ping) dan pengaman fitur peramban.
   Relai tiruan di memori (salinan ringkas dari test/ruang.test.js agar berkas ini berdiri sendiri). */
'use strict';
const { describe, it, afterEach } = require('node:test');
const assertKetat = require('node:assert/strict');
const json = x => (x === undefined ? undefined : JSON.parse(JSON.stringify(x)));
const assert = Object.assign(Object.create(assertKetat), assertKetat, { deepEqual: (a, b, m) => assertKetat.deepStrictEqual(json(a), json(b), m) });
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function muat(berkas, ekstra) {
  const noop = () => {};
  const el = () => ({ appendChild: noop, setAttribute: noop, removeAttribute: noop, addEventListener: noop, style: { setProperty: noop }, dataset: {}, classList: { add: noop, remove: noop } });
  const ctx = Object.assign({
    Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON,
    document: { addEventListener: noop, removeEventListener: noop, body: null, head: null, getElementById: () => null, createElement: el, documentElement: el(), querySelector: () => null, querySelectorAll: () => [] },
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: () => null, setItem: noop, removeItem: noop }, location: { hash: '' }, history: { replaceState: noop, pushState: noop },
    navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop,
    setTimeout, clearTimeout, setInterval, clearInterval,
    crypto: globalThis.crypto, TextEncoder, TextDecoder,
  }, ekstra || {});
  ctx.window = ctx; vm.createContext(ctx);
  for (const b of berkas) vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', b), 'utf8'), ctx, { filename: b });
  return ctx.UKP;
}
const UKP = muat(['ruang.js']);
const R = UKP.ruang;
const { Kodek, Pengurai, cocokFilter } = R._kodek;
const tidur = ms => new Promise(r => setTimeout(r, ms));
async function tunggu(cek, ms, pesan) {
  const batas = Date.now() + (ms || 3000);
  for (;;) { let v; try { v = cek(); } catch (e) { v = false; } if (v) return v; if (Date.now() > batas) throw new Error('waktu habis: ' + (pesan || cek.toString())); await tidur(10); }
}

// ---------- relai tiruan (MQTT 3.1.1 di memori lewat WebSocket tiruan) ----------
function buatJaringan() {
  const relai = new Map(); const jaringan = { relai, soket: [] };
  class Relai {
    constructor(url) { this.url = url; this.mati = false; this.retained = new Map(); this.klien = new Set(); this.diam = false; this.tanpaConnack = false; this.bisu = false; this.log = []; this.terima = []; this.terbitDari = []; }
    sambung(ws) { const k = { ws, relai: this, pengurai: new Pengurai(1 << 30), sub: [], will: null, rapi: false, tersambung: false, keluar: [] }; ws._k = k; this.klien.add(k); }
    kirim(k, b) {
      k.keluar.push(b); if (k.keluar.length > 1) return;
      setImmediate(() => { const semua = Buffer.concat(k.keluar.map(x => Buffer.from(x))); k.keluar = []; if (k.ws.readyState !== 1) return; k.ws._pesan(semua.buffer.slice(semua.byteOffset, semua.byteOffset + semua.length)); });
    }
    masuk(k, b) { let pk; try { pk = k.pengurai.dorong(b); } catch (e) { this.tutup(k, false); return; } for (const p of pk) this.tangani(k, p); }
    tangani(k, p) {
      this.log.push(p.jenis);
      if (p.jenis === 'connect') {
        this.terima.push(p); if (this.tanpaConnack) return;
        k.will = p.will; k.tersambung = true; k.connect = p; this.kirim(k, Kodek.connack({ kode: 0 }));
      } else if (p.jenis === 'subscribe') {
        p.topik.forEach(f => { if (!k.sub.includes(f)) k.sub.push(f); });
        this.kirim(k, Kodek.suback({ id: p.id, kode: p.topik.map(() => 0) }));
        if (!this.bisu) p.topik.forEach(f => this.retained.forEach((m, t) => { if (cocokFilter(f, t)) this.kirim(k, Kodek.publish({ topik: t, muatan: m, retain: true })); }));
      } else if (p.jenis === 'publish') { this.terbitDari.push({ will: !!(k.connect && k.connect.will), topik: p.topik }); this.terbit(p.topik, p.muatan, p.retain); }
      else if (p.jenis === 'pingreq') { if (!this.diam) this.kirim(k, Kodek.pingresp()); }
      else if (p.jenis === 'disconnect') { k.rapi = true; this.tutup(k, true); }
    }
    terbit(topik, muatan, retain) {
      if (retain) { if (!muatan.length) this.retained.delete(topik); else this.retained.set(topik, Uint8Array.from(muatan)); }
      if (this.bisu) return;
      this.klien.forEach(k => { if (k.tersambung && k.sub.some(f => cocokFilter(f, topik))) this.kirim(k, Kodek.publish({ topik, muatan, retain: false })); });
    }
    tutup(k, rapi) {
      if (!this.klien.has(k)) return; this.klien.delete(k);
      if (!rapi && !k.rapi && k.will && !this.mati) this.terbit(k.will.topik, k.will.muatan, k.will.retain);
      k.ws._tutupDariRelai();
    }
    matikan() { this.mati = true; Array.from(this.klien).forEach(k => this.tutup(k, false)); }
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
    close() { if (this.readyState >= 2) return; this.readyState = 2; const k = this._k; setImmediate(() => { if (k) k.relai.tutup(k, k.rapi); else this._tutupDariRelai(); }); }
    _pesan(ab) { if (this.readyState === 1 && this.onmessage) this.onmessage({ data: ab }); }
    _tutupDariRelai() { if (this.readyState === 3) return; this.readyState = 3; setImmediate(() => { this.onclose && this.onclose({ code: 1006 }); }); }
  }
  jaringan.WS = FakeWS;
  jaringan.relaiBaru = url => { const r = new Relai(url); relai.set(url, r); return r; };
  // WebSocket per perangkat: jalur di `blok` tidak terjangkau perangkat itu; soket diberi tanda pemilik
  jaringan.WSuntuk = (pemilik, blok) => class extends FakeWS { constructor(url, p) { super(blok.has(url) ? 'ws://tidak-terjangkau' : url, p); this._pemilik = pemilik; } };
  return jaringan;
}

const KONFIG_UJI = { pingMs: 150, batasPingMs: 150, batasSambungMs: 300, jedaSambung: [20, 40, 80], jitter: 0, jedaRelaiBerikut: 10, graceMs: 60, tungguCalonMs: 150, tungguRelaiLainMs: 200, detakMs: 400, hadirBasiMs: 3000, debounceMs: 15, tungguStateMs: 120, tungguGabungMs: 3000, mintaSesiMs: 250, jedaBersihMs: 40, iterasi: 2000, lombaCadanganMs: 150, jedaLombaTuanMs: 500 };
const aktif = [];
function instans(jar, urls, opsi) {
  opsi = opsi || {}; const simpan = { s: {} }; const blok = new Set(opsi.blok || []);
  const api = R.buatInstans({ WebSocket: jar.WSuntuk(opsi.nama || 'x', blok), crypto: globalThis.crypto, store: { get: () => simpan.s, save() {} }, belajar: { terimaSesiRoom: () => 'baru', sesiBersamaDari: () => null }, lokasi: { origin: 'https://contoh.github.io', pathname: '/Latihan-UKP/', hostname: 'contoh.github.io' } });
  api.RELAI = urls.slice(); Object.assign(api.KONFIG, KONFIG_UJI, opsi.konfig || {});
  const o = { api, simpan, blok }; aktif.push(o); return o;
}
afterEach(async () => { await Promise.all(aktif.splice(0).map(o => o.api.keluar().catch(() => {}))); });
async function tuanDi(jar, urls, opsi) {
  const nicky = instans(jar, urls, Object.assign({ nama: 'tuan' }, opsi || {}));
  const kode = nicky.api.buat({ nama: 'Nicky', namaRoom: 'Tim UKP B', peserta: ['Nicky', 'Mita', 'Nora'], tingkat: 'B' });
  const bisa = urls.filter(u => !nicky.blok.has(u) && !jar.relai.get(u).tanpaConnack);
  await tunggu(() => nicky.api.status().relai.filter(r => r.status === 'tersambung').length >= bisa.length);
  await tunggu(() => bisa.every(u => Array.from(jar.relai.get(u).retained.keys()).some(t => t.endsWith('/s'))));
  return { nicky, kode };
}
const jalur = o => o.api.status().relai.filter(r => r.status === 'tersambung').map(r => r.url);
// CONNECT dengan pesan wasiat = sambungan utama anggota/tuan (sambungan lomba dan intip tidak membawa wasiat)
const connectUtama = r => r.terima.filter(p => p.will).length;

describe('v9.4 Kb1: lomba jalur anggota', () => {
  it('jalur yang dipakai mati: anggota langsung ke jalur sehat (tidak mencoba jalur lubang hitam atau tanpa data room satu per satu), jawaban saat putus sampai', async () => {
    const jar = buatJaringan(); const a = jar.relaiBaru('ws://a'); const b = jar.relaiBaru('ws://b'); const c = jar.relaiBaru('ws://c'); jar.relaiBaru('ws://d');
    b.tanpaConnack = true;                       // menerima sambungan tetapi tidak pernah menjawab
    const urls = ['ws://a', 'ws://b', 'ws://c', 'ws://d'];
    const { nicky, kode } = await tuanDi(jar, urls, { blok: ['ws://c'] });   // c terjangkau anggota tetapi tidak berisi data room
    const mita = instans(jar, urls, { nama: 'mita', konfig: { batasSambungMs: 3000 } });
    await mita.api.intip(kode); await mita.api.gabung(kode, 'Mita');
    assert.deepEqual(jalur(mita), ['ws://a']);
    const id = 'sb-kb-1'; nicky.api.mulaiLatihan({ id, soalIds: ['A1-001', 'A1-002'], detikPerSoal: 0 });
    await tunggu(() => (mita.api.state().aktivitas || {}).id === id);
    const nb = connectUtama(b), nc = connectUtama(c);
    const t0 = Date.now(); a.matikan();
    nicky.api.aturSoal(1);
    mita.api.kirimJawaban({ aktivitas: id, soalId: 'A1-001', o: 'C', k: 'ragu' });
    await tunggu(() => mita.api.state().aktivitas.idx === 1, 2000, 'anggota menerima soal berikutnya');
    const ms = Date.now() - t0;
    await tunggu(() => { const j = nicky.api.jawabanSemua(id).Mita; return j && j.j['A1-001'] === 'C'; }, 2000, 'jawaban yang diketik saat putus sampai ke pemimpin');
    assert.deepEqual(jalur(mita), ['ws://d']);
    assert.ok(ms < 1000, 'pulih ' + ms + ' ms (batas sambung 3000 ms tidak ditunggu)');
    assert.equal(connectUtama(b), nb, 'sambungan utama tidak mencoba jalur lubang hitam');
    assert.equal(connectUtama(c), nc, 'sambungan utama tidak mencoba jalur tanpa data room');
  });

  it('sambungan lomba hanya membaca: tanpa pesan wasiat, tanpa menerbitkan apa pun', async () => {
    const jar = buatJaringan(); const a = jar.relaiBaru('ws://a'); const b = jar.relaiBaru('ws://b');
    const { kode } = await tuanDi(jar, ['ws://a', 'ws://b']);
    const mita = instans(jar, ['ws://a', 'ws://b'], { nama: 'mita' }); await mita.api.gabung(kode, 'Mita');
    a.matikan(); await tunggu(() => jalur(mita)[0] === 'ws://b', 2000);
    await tidur(100);
    const tanpaWasiat = b.terima.filter(p => !p.will).length;
    assert.ok(tanpaWasiat >= 1, 'ada sambungan lomba (tanpa wasiat)');
    assert.equal(b.terbitDari.filter(x => !x.will).length, 0, 'sambungan tanpa wasiat tidak menerbitkan');
    assert.equal(mita.api._rt().koneksi.length, 1, 'anggota tetap memakai satu sambungan utama');
  });

  it('pemimpin kehilangan jalur yang dipakai anggota: pesan wasiat pemimpin → anggota pindah ke jalur tempat pemimpin online', async () => {
    const jar = buatJaringan(); const a = jar.relaiBaru('ws://a'); jar.relaiBaru('ws://b');
    const { nicky, kode } = await tuanDi(jar, ['ws://a', 'ws://b']);
    const mita = instans(jar, ['ws://a', 'ws://b'], { nama: 'mita' }); await mita.api.gabung(kode, 'Mita');
    assert.deepEqual(jalur(mita), ['ws://a']);
    const id = 'sb-kb-3'; nicky.api.mulaiLatihan({ id, soalIds: ['A1-001', 'A1-002'], detikPerSoal: 0 });
    await tunggu(() => (mita.api.state().aktivitas || {}).id === id);
    nicky.blok.add('ws://a'); a.putuskan(k => k.ws._pemilik === 'tuan');   // hanya laptop pemimpin yang kehilangan jalur a
    await tidur(30);
    nicky.api.aturSoal(1); mita.api.kirimJawaban({ aktivitas: id, soalId: 'A1-002', o: 'A', k: 'yakin' });
    await tunggu(() => mita.api.state().aktivitas.idx === 1, 2000, 'anggota menerima perubahan pemimpin');
    await tunggu(() => { const j = nicky.api.jawabanSemua(id).Mita; return j && j.j['A1-002'] === 'A'; }, 2000, 'jawaban sampai ke pemimpin');
    assert.deepEqual(jalur(mita), ['ws://b']);
  });

  it('jalur tersimpan menggantung saat aplikasi dibuka lagi: lomba cadangan setelah lombaCadanganMs, tidak menunggu batas sambung', async () => {
    const jar = buatJaringan(); const a = jar.relaiBaru('ws://a'); jar.relaiBaru('ws://b');
    const { nicky, kode } = await tuanDi(jar, ['ws://a', 'ws://b']);
    const mita = instans(jar, ['ws://a', 'ws://b'], { nama: 'mita' }); await mita.api.gabung(kode, 'Mita');
    assert.equal(mita.simpan.s.ruang.relai, 'ws://a');
    const salinan = JSON.parse(JSON.stringify(mita.simpan.s)); mita.api.jeda();
    a.tanpaConnack = true;
    nicky.api.aturRoom({ nama: 'Tim baru' });
    const mita2 = instans(jar, ['ws://a', 'ws://b'], { nama: 'mita', konfig: { batasSambungMs: 5000 } }); mita2.simpan.s = salinan;
    const t0 = Date.now(); mita2.api.pulihkan();
    await tunggu(() => mita2.api.state() && mita2.api.state().room.nama === 'Tim baru', 3000, 'data room terbaru diterima');
    const ms = Date.now() - t0;
    assert.ok(ms < 1500, 'buka lagi ' + ms + ' ms');
    assert.deepEqual(jalur(mita2), ['ws://b']);
  });

  it('tidak ada jalur terjangkau: status "belum bisa terhubung", lomba diulang dengan jeda; jalur hidup lagi → tersambung; periksaSekarang mempercepat', async () => {
    const jar = buatJaringan(); const a = jar.relaiBaru('ws://a'); const b = jar.relaiBaru('ws://b');
    const { nicky, kode } = await tuanDi(jar, ['ws://a', 'ws://b']);
    const mita = instans(jar, ['ws://a', 'ws://b'], { nama: 'mita', konfig: { jedaSambung: [100, 5000] } }); await mita.api.gabung(kode, 'Mita');
    a.matikan(); b.matikan();
    await tunggu(() => !mita.api.status().tersambung && mita.api.status().alasan, 2000, 'status belum bisa terhubung');
    await tidur(400);   // jeda lomba kini 5000 ms
    const milikMita = () => jar.soket.filter(w => w._pemilik === 'mita').length;
    const n = milikMita();
    await tidur(300); assert.equal(milikMita(), n, 'tidak mencoba tanpa henti');
    b.hidupkan(); nicky.api._rt().koneksi.forEach(k => k.segera());
    mita.api.periksaSekarang();
    await tunggu(() => mita.api.status().tersambung && jalur(mita)[0] === 'ws://b', 1500, 'tersambung lagi tanpa menunggu jeda 5 dtk');
  });

  it('lombaJalur: false → perilaku lama (berpindah ke jalur berikutnya satu per satu)', async () => {
    const jar = buatJaringan(); const a = jar.relaiBaru('ws://a'); const b = jar.relaiBaru('ws://b'); jar.relaiBaru('ws://c');
    const { kode } = await tuanDi(jar, ['ws://a', 'ws://b', 'ws://c']);
    const mita = instans(jar, ['ws://a', 'ws://b', 'ws://c'], { nama: 'mita', konfig: { lombaJalur: false } }); await mita.api.gabung(kode, 'Mita');
    b.matikan(); a.matikan();
    await tunggu(() => jalur(mita)[0] === 'ws://c', 3000);
    assert.ok(jar.soket.some(w => w.url === 'ws://b' && w._pemilik === 'mita'), 'mencoba jalur b lebih dulu');
  });

  it('pemimpin tidak memakai lomba (tetap ke semua jalur); anggota yang mengambil alih berhenti berlomba', async () => {
    const jar = buatJaringan(); jar.relaiBaru('ws://a'); jar.relaiBaru('ws://b');
    const { nicky, kode } = await tuanDi(jar, ['ws://a', 'ws://b']);
    assert.equal(nicky.api._rt().lomba, null);
    const mita = instans(jar, ['ws://a', 'ws://b'], { nama: 'mita' }); await mita.api.gabung(kode, 'Mita');
    mita.api.ambilAlih();
    await tunggu(() => jalur(mita).length === 2, 2000);
    assert.equal(mita.api._rt().lomba, null); assert.equal(mita.api._rt().tahan, false);
  });
});

describe('v9.4 Kb1: deteksi putus lewat ping', () => {
  function konUji(jar, url, konfig) {
    const status = [];
    const kon = R._Koneksi({ url, WS: jar.WS, idKlien: 'ukp0123456789ab', konfig: Object.assign({}, R.KONFIG, KONFIG_UJI, konfig || {}), filter: () => ['t/#'], saatPublish: () => {}, saatStatus: k => status.push(k.status) });
    return { kon, status };
  }
  it('KONFIG bawaan: ping tiap 4 dtk, batas PINGRESP 3 dtk (putus diam terdeteksi ≤ 7 dtk), lomba aktif', () => {
    assert.equal(R.KONFIG.pingMs, 4000); assert.equal(R.KONFIG.batasPingMs, 3000); assert.ok(R.KONFIG.pingMs + R.KONFIG.batasPingMs <= 7000); assert.equal(R.KONFIG.lombaJalur, true);
    assert.ok(R.KONFIG.lombaCadanganMs <= 2000);
  });
  it('PINGRESP tidak datang dalam batasPingMs → putus (tidak menunggu ping berikutnya)', async () => {
    const jar = buatJaringan(); const r = jar.relaiBaru('ws://r1');
    const { kon, status } = konUji(jar, 'ws://r1', { pingMs: 1000, batasPingMs: 100 });
    kon.mulai(); await tunggu(() => kon.status === 'tersambung');
    r.diam = true; const t0 = Date.now();
    await tunggu(() => status.includes('putus'), 2000);
    const ms = Date.now() - t0; assert.ok(ms < 1400, 'terdeteksi ' + ms + ' ms (bukan 2000)');
    kon.henti();
  });
  it('menerbitkan saat jalur membisu → PINGREQ pemeriksa → putus dalam batasPingMs', async () => {
    const jar = buatJaringan(); const r = jar.relaiBaru('ws://r1');
    const { kon, status } = konUji(jar, 'ws://r1', { pingMs: 10000, batasPingMs: 100, jedaCekHidupMs: 0 });
    kon.mulai(); await tunggu(() => kon.status === 'tersambung');
    r.diam = true; const t0 = Date.now();
    kon.terbit('t/x', new Uint8Array([1]), true);
    await tunggu(() => status.includes('putus'), 1000);
    assert.ok(Date.now() - t0 < 600);
    // pesan yang terbit saat putus disimpan dan terkirim setelah tersambung lagi
    kon.terbit('t/y', new Uint8Array([2]), true); r.diam = false;
    await tunggu(() => kon.status === 'tersambung' && r.retained.has('t/y'), 2000);
    kon.henti();
  });
  it('jalur sehat: pemeriksa tidak memutus dan tidak membanjiri (paling sering sekali per jedaCekHidupMs)', async () => {
    const jar = buatJaringan(); const r = jar.relaiBaru('ws://r1');
    const { kon, status } = konUji(jar, 'ws://r1', { pingMs: 10000, batasPingMs: 200, jedaCekHidupMs: 1000 });
    kon.mulai(); await tunggu(() => kon.status === 'tersambung');
    for (let i = 0; i < 20; i++) kon.terbit('t/' + i, new Uint8Array([i]), false);
    await tidur(300);
    assert.equal(r.log.filter(x => x === 'pingreq').length, 1);
    assert.ok(!status.includes('putus'));
    kon.henti();
  });
});


describe('v9.4 Kb3: peramban lama dan mode terbatas', () => {
  const tanpaSubtle = lokasi => R.buatInstans({ WebSocket: function () {}, crypto: { getRandomValues: b => b }, store: { get: () => ({}), save() {} }, lokasi }).status();
  it('tanpa crypto.subtle di halaman https (website tim) → "belum mendukung", bukan "butuh https"', () => {
    const st = tanpaSubtle({ protocol: 'https:', hostname: 'contoh.github.io', origin: 'https://contoh.github.io', pathname: '/' });
    assert.equal(st.tersedia, false); assert.match(st.alasan, /belum mendukung/); assert.doesNotMatch(st.alasan, /https/);
    assert.match(tanpaSubtle({ protocol: 'http:', hostname: 'localhost', origin: 'http://localhost:8080', pathname: '/' }).alasan, /belum mendukung/, 'localhost = konteks aman');
  });
  it('tanpa crypto.subtle di http biasa atau berkas → tetap "halaman aman (https)"', () => {
    assert.match(tanpaSubtle({ protocol: 'http:', hostname: '192.168.1.5', origin: 'http://192.168.1.5', pathname: '/' }).alasan, /https/);
    assert.match(tanpaSubtle({ protocol: 'file:', hostname: '', origin: 'null', pathname: '/x/index.html' }).alasan, /https/);
  });
  it('tanpa WebSocket → "belum mendukung"', () => {
    const st = R.buatInstans({ WebSocket: 'bukan', crypto: globalThis.crypto, store: { get: () => ({}), save() {} } }).status();
    assert.equal(st.tersedia, false); assert.match(st.alasan, /belum mendukung/);
  });
  it('layar: alasan "belum mendukung" → kalimat biasa dengan langkah yang bisa dilakukan, tanpa istilah teknis', () => {
    const { muatInti } = require('./_muat-inti.js');
    const M = muatInti(['core.js', 'learn.js', 'views-ruang.js']).ruangUI._murni;
    const t = M.alasanAwam('Browser ini belum mendukung room tim (fitur bawaan untuk mengunci isi room tidak ada). Perbarui browser.');
    assert.match(t, /belum bisa membuka room/); assert.match(t, /Perbarui peramban|Chrome atau Safari/);
    assert.doesNotMatch(t, /https|websocket|relai|crypto|cache/i);
    assert.match(M.alasanAwam('Room tim memerlukan halaman aman (alamat https://). Halaman ini dibuka lewat http biasa'), /website tim/);
  });
  it('js/core.js: tanpa :has() → html.tanpa-has dan body[data-ada-bar] mengikuti bar fokus di #main', () => {
    const kelas = new Set(); const atributBody = new Map(); let pengamat = null; let adaBar = false;
    const noop = () => {};
    const el = () => ({ appendChild: noop, setAttribute: noop, removeAttribute: noop, addEventListener: noop, style: { setProperty: noop }, dataset: {}, classList: { add: noop, remove: noop } });
    const body = Object.assign(el(), { append: noop, prepend: noop, hasAttribute: n => atributBody.has(n), setAttribute: (n, v) => atributBody.set(n, v), removeAttribute: n => atributBody.delete(n) });
    const ctx = {
      Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON,
      document: { addEventListener: noop, removeEventListener: noop, body, head: null, getElementById: () => null, createElement: el,
        documentElement: Object.assign(el(), { classList: { add: k => kelas.add(k), remove: k => kelas.delete(k) } }),
        querySelector: sel => { if (/:has\(/.test(sel)) throw new Error('SyntaxError'); if (/fokus-bar/.test(sel)) return adaBar ? {} : null; return null; }, querySelectorAll: () => [] },
      MutationObserver: function (fn) { pengamat = fn; this.observe = noop; },
      addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
      localStorage: { getItem: () => null, setItem: noop, removeItem: noop }, location: { hash: '' }, history: { replaceState: noop, pushState: noop },
      navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop, setTimeout: (f) => { f(); return 0; }, clearTimeout,
    };
    ctx.Element.prototype = {}; ctx.DocumentFragment.prototype = {};
    ctx.window = ctx; vm.createContext(ctx);
    vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'core.js'), 'utf8'), ctx, { filename: 'core.js' });
    assert.equal(ctx.UKP.dukungHas, false); assert.ok(kelas.has('tanpa-has'));
    assert.equal(atributBody.has('data-ada-bar'), false);
    adaBar = true; pengamat([]); assert.equal(atributBody.has('data-ada-bar'), true);
    adaBar = false; pengamat([]); assert.equal(atributBody.has('data-ada-bar'), false);
  });
  it('css/app.css: blok v9.4 Kb di akhir berkas memberi cadangan dialog, dvh, dan :has()', () => {
    const css = fs.readFileSync(path.join(__dirname, '..', 'css', 'app.css'), 'utf8'); const i = css.indexOf('/* ===== v9.4 Kb ===== */');
    assert.ok(i > 0); const blok = css.slice(i);
    assert.match(blok, /dialog\[data-cadangan\]\s*\{[^}]*position: fixed/);
    assert.match(blok, /@supports not \(height: 1dvh\)/);
    assert.match(blok, /html\.tanpa-has body\[data-mode="fokus"\]\[data-ada-bar\] \.topbar/);
    assert.doesNotMatch(blok.replace(/\/\*[\s\S]*?\*\//g, ''), /:has\(/, 'cadangan tidak boleh memakai :has() sendiri');
  });
});

// ---------- v9.5 FC1 + FC2: ping pada jaringan dengan waktu tempuh nyata (KONFIG produksi) ----------
// Relai tiruan dengan tunda per arah (RTT/2): CONNACK, SUBACK, PINGRESP selalu dijawab kecuali `diam`.
function jaringanTunda(rttAwal) {
  const jar = { rtt: rttAwal, diam: false, pingreq: 0, soket: [] };
  jar.WS = class {
    constructor(url) { this.url = url; this.readyState = 0; this.binaryType = 'blob'; this.pg = new Pengurai(1 << 20); jar.soket.push(this); setTimeout(() => { this.readyState = 1; this.onopen && this.onopen({}); }, 5); }
    send(data) {
      if (this.readyState !== 1) throw new Error('soket tidak terbuka');
      const b = Uint8Array.from(data); const rtt = jar.rtt;
      setTimeout(() => {
        for (const p of this.pg.dorong(b)) {
          if (p.jenis === 'pingreq') jar.pingreq++;
          if (jar.diam) continue;
          const balas = p.jenis === 'connect' ? Kodek.connack({ kode: 0 }) : p.jenis === 'subscribe' ? Kodek.suback({ id: p.id, kode: p.topik.map(() => 0) }) : p.jenis === 'pingreq' ? Kodek.pingresp() : null;
          if (balas) setTimeout(() => { if (this.readyState === 1 && this.onmessage) this.onmessage({ data: balas.buffer.slice(balas.byteOffset, balas.byteOffset + balas.byteLength) }); }, rtt / 2);
        }
      }, rtt / 2);
    }
    close() { if (this.readyState >= 2) return; this.readyState = 3; setTimeout(() => { this.onclose && this.onclose({ code: 1005 }); }, 0); }
  };
  return jar;
}
function konProduksi(jar) {
  const status = []; let t0 = 0;
  const kon = R._Koneksi({ url: 'ws://tunda', WS: jar.WS, idKlien: 'ukp0123456789ab', konfig: Object.assign({}, R.KONFIG), filter: () => ['t/#'], saatPublish: () => {}, saatStatus: k => status.push({ s: k.status, t: Date.now() - t0, galat: k.galat }) });
  kon.mulai();
  return { kon, status, putus: () => status.filter(x => x.s === 'putus'), mulaiJam: () => { t0 = Date.now(); } };
}

describe('v9.5 FC: ping tidak memutus sambungan sehat, batas balasan menyesuaikan waktu tempuh', { concurrency: true }, () => {
  it('batasPingUntuk: jepit(4 × waktu tempuh + 1 dtk, 3 dtk, 12 dtk) dengan KONFIG produksi', () => {
    const b = r => R._batasPingUntuk(R.KONFIG, r);
    assert.equal(b(null), 3000); assert.equal(b(80), 3000); assert.equal(b(499), 3000);
    assert.equal(b(1000), 5000); assert.equal(b(2000), 9000); assert.equal(b(3200), 12000); assert.equal(b(60000), 12000);
    assert.equal(R.KONFIG.batasPingMaksMs, 12000);
  });
  for (const rtt of [150, 1000]) {
    it('FC1: PINGRESP tertunda ' + rtt + ' ms, terbit 60 ms sebelum detik ping berkala → tidak ada pemutusan', async () => {
      const jar = jaringanTunda(rtt); const u = konProduksi(jar);
      await tunggu(() => u.kon.status === 'tersambung', 4000); u.mulaiJam();
      const P = R.KONFIG.pingMs; const sisa = P - (Date.now() - u.kon.tersambungPada) - 60;
      await tidur(Math.max(0, sisa)); u.kon.terbit('t/x', new Uint8Array([1]), false);   // ping pemeriksa masih menunggu saat detik ping berkala jatuh
      await tidur(2 * P + 300 - Math.max(0, sisa));
      u.kon.terbit('t/y', new Uint8Array([2]), false);
      await tidur(rtt + 300);
      assert.deepEqual(u.putus(), [], 'sambungan sehat diputus');
      assert.ok(jar.pingreq >= 2, 'ping tetap dikirim (' + jar.pingreq + ')');
      u.kon.henti();
    });
  }
  it('FC2: waktu tempuh 3,2 dtk (data seluler padat) tidak memutus selama tiga detik ping', async () => {
    const jar = jaringanTunda(3200); const u = konProduksi(jar);
    await tunggu(() => u.kon.status === 'tersambung', 9000); u.mulaiJam();
    for (let i = 0; i < 3; i++) { await tidur(R.KONFIG.pingMs); u.kon.terbit('t/' + i, new Uint8Array([i]), false); }
    await tidur(3500);
    assert.deepEqual(u.putus(), []);
    assert.ok(u.kon.rttMs >= 3000, 'waktu tempuh terukur ' + u.kon.rttMs);
    assert.equal(u.kon.batasPingKini, 12000);
    u.kon.henti();
  });
  it('FC2: jaringan normal (waktu tempuh 100 ms), jalur lalu membisu total → putus ≤ 8 dtk', async () => {
    const jar = jaringanTunda(100); const u = konProduksi(jar);
    await tunggu(() => u.kon.status === 'tersambung', 4000);
    await tidur(4500);   // satu ping terjawab: waktu tempuh terukur ±100 ms
    jar.diam = true; const t0 = Date.now();
    await tunggu(() => u.putus().length > 0, 9000, 'jalur membisu ketahuan');
    const ms = Date.now() - t0; assert.ok(ms <= 8000, 'ketahuan setelah ' + ms + ' ms');
    assert.equal(u.putus()[0].galat, 'ping tidak dijawab');
    u.kon.henti();
  });
});

// ---------- v9.5 FC3: pemimpin membisu di jalur anggota (laptop pemimpin kehilangan jalur secara diam) ----------
describe('v9.5 FC3: anggota pindah bila pemimpin membisu di jalurnya', () => {
  // WebSocket untuk laptop pemimpin yang bisa "dibekukan" di satu jalur: tidak ada yang lewat, dan penutupan tidak sampai ke relai
  // (relai tidak menerbitkan pesan wasiat; seperti Wi-Fi kantor yang memutus diam)
  function WSbeku(jar, pemilik, beku) {
    return class extends jar.WS {
      constructor(url, p) { super(url, p); this._pemilik = pemilik; }
      send(d) { if (beku.has(this.url)) return; return super.send(d); }
      _pesan(ab) { if (beku.has(this.url)) return; return super._pesan(ab); }
      close() { if (beku.has(this.url)) { if (this.readyState >= 2) return; this.readyState = 3; setImmediate(() => { this.onclose && this.onclose({ code: 1006 }); }); return; } return super.close(); }
    };
  }
  async function siapkan(konfigTuan, konfigAnggota) {
    const jar = buatJaringan(); const a = jar.relaiBaru('ws://a'); const b = jar.relaiBaru('ws://b');
    const urls = ['ws://a', 'ws://b']; const beku = new Set();
    const nicky = instans(jar, urls, { nama: 'tuan', konfig: konfigTuan });
    nicky.api.KONFIG = Object.assign(nicky.api.KONFIG, konfigTuan || {});
    const api = R.buatInstans({ WebSocket: WSbeku(jar, 'tuan', beku), crypto: globalThis.crypto, store: { get: () => ({}), save() {} }, belajar: { terimaSesiRoom: () => 'baru', sesiBersamaDari: () => null }, lokasi: { origin: 'https://contoh.github.io', pathname: '/Latihan-UKP/', hostname: 'contoh.github.io' } });
    api.RELAI = urls.slice(); Object.assign(api.KONFIG, KONFIG_UJI, konfigTuan || {}); aktif.push({ api });
    const kode = api.buat({ nama: 'Nicky', namaRoom: 'Tim UKP B', peserta: ['Nicky', 'Mita'], tingkat: 'B' });
    await tunggu(() => api.status().relai.filter(r => r.status === 'tersambung').length === 2);
    await tunggu(() => urls.every(u => Array.from(jar.relai.get(u).retained.keys()).some(t => t.endsWith('/s'))));
    await nicky.api.keluar();
    const mita = instans(jar, urls, { nama: 'mita', konfig: Object.assign({ bisuTuanMinMs: 300 }, konfigAnggota || {}) });
    await mita.api.gabung(kode, 'Mita');
    return { jar, a, b, tuan: api, mita, beku };
  }
  const lombaMita = jar => jar.soket.filter(w => w._pemilik === 'mita').length;

  it('pemimpin baru (kabar tiap 100 ms, uji dipercepat): jalur sehat tidak memicu lomba; jalur pemimpin membisu → anggota pindah, jawaban sampai', async () => {
    const { jar, a, tuan, mita, beku } = await siapkan({ detakTuanMs: 100 });
    assert.deepEqual(jalur(mita), ['ws://a']);
    const id = 'sb-fc3'; tuan.mulaiLatihan({ id, soalIds: ['A1-001', 'A1-002'], detikPerSoal: 0 });
    await tunggu(() => (mita.api.state().aktivitas || {}).id === id);
    const n0 = lombaMita(jar); await tidur(1500);
    assert.equal(lombaMita(jar), n0, 'jalur sehat: tidak ada lomba');
    beku.add('ws://a');   // laptop pemimpin kehilangan jalur a secara diam; relai a tidak menerbitkan pesan wasiat
    const t0 = Date.now();
    tuan.aturSoal(1); mita.api.kirimJawaban({ aktivitas: id, soalId: 'A1-002', o: 'B', k: 'yakin' });
    await tunggu(() => mita.api.state().aktivitas.idx === 1, 4000, 'anggota menerima perubahan pemimpin lewat jalur lain');
    await tunggu(() => { const j = tuan.jawabanSemua(id).Mita; return j && j.j['A1-002'] === 'B'; }, 3000, 'jawaban sampai ke pemimpin');
    assert.deepEqual(jalur(mita), ['ws://b']); assert.ok(Date.now() - t0 < 3000, 'pulih ' + (Date.now() - t0) + ' ms');
  });

  it('pemimpin versi lama (kabar hanya tiap detakMs): anggota baru tidak berlomba terus-menerus', async () => {
    const { jar, mita } = await siapkan({ detakTuanMs: 400 });   // 400 = detakMs uji: irama pemimpin lama
    await tidur(1200);   // dua kabar teramati: batas = maks(300, 2,2 × 400)
    const awal = jalur(mita); const n0 = lombaMita(jar); await tidur(2500);
    assert.equal(lombaMita(jar), n0, 'tidak ada lomba selama pemimpin lama mengirim kabar tiap detak');
    assert.deepEqual(jalur(mita), awal);
  });

  it('pemimpin pergi tanpa kabar sama sekali: lomba diulang dengan jeda yang makin panjang, anggota tetap di jalurnya', async () => {
    const { jar, tuan, mita, beku } = await siapkan({ detakTuanMs: 100 }, { jedaLombaTuanMs: 300, jedaLombaBisuMaksMs: 1200 });
    beku.add('ws://a'); beku.add('ws://b');   // laptop tertutup tanpa memutus: tidak ada kabar di jalur mana pun
    const awal = jalur(mita); const n0 = lombaMita(jar); await tidur(4000);
    const lomba = (lombaMita(jar) - n0) / 2;   // tiap lomba membuka dua sambungan baca
    assert.ok(lomba >= 1 && lomba <= 5, 'jumlah lomba ' + lomba);
    assert.deepEqual(jalur(mita), awal, 'tidak berpindah hanya karena urutan daftar');
    void tuan;
  });

  it('pemimpin mengirim kabar hadir singkat ke semua jalur dengan bentuk pesan yang sama', async () => {
    const { jar, a, b } = await siapkan({ detakTuanMs: 100 });
    const hitung = r => r.terbitDari.filter(x => /\/h\//.test(x.topik)).length;
    const na = hitung(a), nb = hitung(b); await tidur(600);
    assert.ok(hitung(a) - na >= 3 && hitung(b) - nb >= 3, 'kabar di tiap jalur: ' + (hitung(a) - na) + ', ' + (hitung(b) - nb));
    void jar;
  });

  it('adaSampelJam: anggota false sampai ada kabar segar pemimpin; pemimpin selalu true', async () => {
    const jar = buatJaringan(); jar.relaiBaru('ws://a');
    const { nicky, kode } = await tuanDi(jar, ['ws://a']);
    assert.equal(nicky.api.adaSampelJam(), true);
    const mita = instans(jar, ['ws://a'], { nama: 'mita', konfig: { detakMs: 60000 } });
    nicky.api.KONFIG.detakMs = 60000; nicky.api.KONFIG.detakTuanMs = 60000;
    await mita.api.gabung(kode, 'Mita');
    assert.equal(mita.api.adaSampelJam(), false, 'hanya pesan tersimpan: belum ada sampel jam');
    nicky.api.aturRoom({ nama: 'Tim baru' });
    await tunggu(() => mita.api.adaSampelJam(), 2000, 'sampel jam dari state segar');
  });
});

// ---------- v9.5 FC4: cabang cadangan UKP.dialog (peramban tanpa <dialog>.showModal) DIJALANKAN di DOM tiruan ----------
function domTiruan(denganShowModal) {
  const dok = { listener: new Map(), activeElement: null };
  class Ev { constructor(type, o) { this.type = type; this.bubbles = !!(o && o.bubbles); this.defaultPrevented = false; this.berhenti = false; Object.assign(this, o || {}); } preventDefault() { this.defaultPrevented = true; } stopPropagation() { this.berhenti = true; } }
  function kirimKe(target, ev, capture) { const m = target.listener.get(ev.type + (capture ? ':c' : '')); if (m) for (const fn of m.slice()) { ev.currentTarget = target; fn.call(target, ev); } }
  class El {
    constructor(tag) { this.tagName = String(tag).toUpperCase(); this.attr = new Map(); this.children = []; this.parentNode = null; this.listener = new Map(); this.style = {}; this.dataset = {}; this.textContent = '';
      this.classList = { add: k => this.attr.set('class', ((this.attr.get('class') || '') + ' ' + k).trim()), remove() {}, contains: k => (this.attr.get('class') || '').split(' ').includes(k) }; }
    set className(v) { this.attr.set('class', v); } get className() { return this.attr.get('class') || ''; }
    setAttribute(k, v) { this.attr.set(k, String(v)); } getAttribute(k) { return this.attr.has(k) ? this.attr.get(k) : null; } hasAttribute(k) { return this.attr.has(k); } removeAttribute(k) { this.attr.delete(k); }
    get tabIndex() { return this.attr.has('tabindex') ? Number(this.attr.get('tabindex')) : this.tagName === 'BUTTON' ? 0 : -1; }
    addEventListener(t, fn, c) { const k = t + (c === true || (c && c.capture) ? ':c' : ''); if (!this.listener.has(k)) this.listener.set(k, []); this.listener.get(k).push(fn); }
    removeEventListener(t, fn, c) { const k = t + (c === true || (c && c.capture) ? ':c' : ''); const m = this.listener.get(k); if (m) { const i = m.indexOf(fn); if (i >= 0) m.splice(i, 1); } }
    dispatchEvent(ev) {
      ev.target = ev.target || this; const jalur = []; for (let n = this; n; n = n.parentNode) jalur.push(n); if (this.isConnected) jalur.push(dok);
      for (let i = jalur.length - 1; i >= 0 && !ev.berhenti; i--) kirimKe(jalur[i], ev, true);
      for (let i = 0; i < jalur.length && !ev.berhenti; i++) { if (i > 0 && !ev.bubbles) break; kirimKe(jalur[i], ev, false); }
      return !ev.defaultPrevented;
    }
    appendChild(c) { if (c.tagName === '#FRAG') { c.children.slice().forEach(x => this.appendChild(x)); return c; } if (c.parentNode) c.remove(); c.parentNode = this; this.children.push(c); return c; }
    append(...cs) { cs.forEach(c => this.appendChild(typeof c === 'string' ? new El('#text') : c)); }
    prepend(...cs) { cs.reverse().forEach(c => { c.parentNode = this; this.children.unshift(c); }); }
    replaceChildren(...cs) { this.children.forEach(c => { c.parentNode = null; }); this.children = []; this.append(...cs); }
    insertBefore(c, ref) { if (c.parentNode) c.remove(); const i = this.children.indexOf(ref); c.parentNode = this; this.children.splice(i < 0 ? this.children.length : i, 0, c); return c; }
    remove() { const p = this.parentNode; if (!p) return; p.children.splice(p.children.indexOf(this), 1); this.parentNode = null; if (!this.isConnected && dok.activeElement && !dok.activeElement.isConnected) dok.activeElement = dok.body; }
    get isConnected() { let n = this; while (n.parentNode) n = n.parentNode; return n === dok.html; }
    contains(x) { for (let n = x; n; n = n.parentNode) if (n === this) return true; return false; }
    semua() { const out = []; const jalan = n => n.children.forEach(c => { out.push(c); jalan(c); }); jalan(this); return out; }
    cocok(sel) {
      return sel.split(',').map(s => s.trim()).some(s => {
        const m = /^([a-z]*)((?:\[[^\]]+\])*)((?::not\(\[[^\]]+\]\))*)$/i.exec(s); if (!m) return false;
        if (m[1] && this.tagName !== m[1].toUpperCase()) return false;
        for (const a of (m[2].match(/\[[^\]]+\]/g) || [])) { const [k, v] = a.slice(1, -1).split('='); if (!this.attr.has(k) || (v != null && this.attr.get(k) !== v.replace(/"/g, ''))) return false; }
        for (const a of (m[3].match(/\[[^\]]+\]/g) || [])) { const [k, v] = a.slice(1, -1).split('='); if (this.attr.has(k) && (v == null || this.attr.get(k) === v.replace(/"/g, ''))) return false; }
        return true;
      });
    }
    querySelector(sel) { return this.semua().find(n => n.cocok(sel)) || null; }
    querySelectorAll(sel) { return this.semua().filter(n => n.cocok(sel)); }
    focus() { if (!this.isConnected) return; const lama = dok.activeElement; if (lama === this) return; dok.activeElement = this; this.dispatchEvent(new Ev('focusin', { bubbles: true, target: this, relatedTarget: lama })); }
    click() { this.dispatchEvent(new Ev('click', { bubbles: true, target: this })); }
  }
  dok.html = new El('html'); dok.body = new El('body'); dok.html.appendChild(dok.body); dok.activeElement = dok.body;
  const document = {
    get activeElement() { return dok.activeElement; }, body: dok.body, documentElement: dok.html, head: null,
    createElement: t => { const e = new El(t); if (e.tagName === 'DIALOG' && denganShowModal) { e.showModal = function () { this.setAttribute('open', ''); this._modal = true; }; e.close = function (v) { if (!this.hasAttribute('open')) return; this.returnValue = v == null ? '' : String(v); this.removeAttribute('open'); this.dispatchEvent(new Ev('close')); }; } return e; },
    createElementNS: (ns, t) => new El(t), createTextNode: () => new El('#text'), createDocumentFragment: () => new El('#frag'),
    addEventListener: (t, fn, c) => El.prototype.addEventListener.call(dok, t, fn, c), removeEventListener: (t, fn, c) => El.prototype.removeEventListener.call(dok, t, fn, c),
    getElementById: () => null, querySelector: sel => (/:has\(/.test(sel) ? null : dok.html.querySelector(sel)), querySelectorAll: sel => dok.html.querySelectorAll(sel),
  };
  const noop = () => {};
  const ctx = { Element: El, DocumentFragment: El, Event: Ev, console, Intl, Date, Math, JSON, document,
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: () => null, setItem: noop, removeItem: noop }, location: { hash: '' }, history: { replaceState: noop, pushState: noop },
    navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop, setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t.unref) t.unref(); return t; }, clearTimeout };
  ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'core.js'), 'utf8'), ctx, { filename: 'core.js' });
  const tekan = (key, target) => (target || dok.activeElement).dispatchEvent(new Ev('keydown', { bubbles: true, key }));
  return { UKP: ctx.UKP, dok, document, El, tekan };
}

describe('v9.5 FC4: kotak dialog cadangan (tanpa showModal) dan dialog asli', () => {
  const latar = D => D.dok.body.children.filter(n => n.className === 'dlg-latar-cadangan');
  const kotak = D => D.dok.body.children.filter(n => n.tagName === 'DIALOG');
  const tombolHalaman = D => { const b = D.UKP.h('button', { type: 'button' }, 'Buka'); D.dok.body.appendChild(b); b.focus(); return b; };

  it('latar dibuat dan dibuang; klik latar menutup; fokus kembali ke tombol pemicu', () => {
    const D = domTiruan(false); const pemicu = tombolHalaman(D); let ditutup = null;
    const d = D.UKP.dialog({ judul: 'Uji', isi: 'Isi', kaki: D.UKP.h('button', { type: 'button', class: 'btn' }, 'OK'), onClose: v => { ditutup = v; } });
    assert.ok(d.hasAttribute('data-cadangan') && d.hasAttribute('open')); assert.equal(d.getAttribute('aria-modal'), 'true');
    assert.equal(latar(D).length, 1); assert.ok(d.contains(D.document.activeElement), 'fokus di dalam kotak');
    latar(D)[0].click();
    assert.equal(ditutup, 'batal'); assert.equal(latar(D).length, 0, 'latar dibuang'); assert.equal(kotak(D).length, 0);
    assert.equal(D.document.activeElement, pemicu);
  });

  it('Esc menutup walaupun fokus sudah keluar kotak; fokus yang lari keluar dikembalikan ke kotak', () => {
    const D = domTiruan(false); const pemicu = tombolHalaman(D);
    const d = D.UKP.dialog({ judul: 'Uji', isi: 'Isi' });
    const lain = D.UKP.h('h2', { tabindex: '-1' }, 'Room tidak ditemukan'); D.dok.body.appendChild(lain);
    lain.focus();   // halaman di belakang memfokus judulnya sendiri
    assert.ok(d.contains(D.document.activeElement), 'fokus dikembalikan ke kotak');
    D.tekan('Escape', D.dok.body);   // Esc dari luar kotak (mis. body)
    assert.equal(d.hasAttribute('open'), false); assert.equal(latar(D).length, 0); assert.equal(D.document.activeElement, pemicu);
    // sesudah kotak tertutup, penjaga tidak menahan fokus lagi
    lain.focus(); assert.equal(D.document.activeElement, lain);
  });

  it('dialog wajib: Esc dan latar tidak menutup', () => {
    const D = domTiruan(false); tombolHalaman(D);
    const d = D.UKP.dialog({ judul: 'Uji', isi: 'Isi', wajib: true, kaki: D.UKP.h('button', { type: 'button' }, 'Lanjut') });
    D.tekan('Escape'); latar(D)[0].click();
    assert.equal(d.hasAttribute('open'), true); d.close('ok'); assert.equal(latar(D).length, 0);
  });

  it('dialog bertumpuk: z-index bertingkat, Esc menutup yang atas saja lalu yang bawah, fokus kembali berurutan', () => {
    const D = domTiruan(false); const pemicu = tombolHalaman(D);
    const b1 = D.UKP.h('button', { type: 'button' }, 'Salin');
    const d1 = D.UKP.dialog({ judul: 'Info sambungan', isi: b1 });
    b1.focus();
    const d2 = D.UKP.dialog({ judul: 'Salin teks', isi: 'teks' });
    const [l1, l2] = latar(D);
    assert.ok(Number(l1.style.zIndex) < Number(d1.style.zIndex) && Number(d1.style.zIndex) < Number(l2.style.zIndex) && Number(l2.style.zIndex) < Number(d2.style.zIndex), 'latar kedua di atas kotak pertama');
    b1.focus(); assert.ok(d2.contains(D.document.activeElement), 'kotak bawah tidak bisa difokus selama kotak atas terbuka');
    D.tekan('Escape');
    assert.equal(d2.hasAttribute('open'), false); assert.equal(d1.hasAttribute('open'), true, 'Esc pertama hanya menutup kotak atas');
    assert.equal(D.document.activeElement, b1, 'fokus kembali ke tombol di kotak bawah');
    D.tekan('Escape');
    assert.equal(d1.hasAttribute('open'), false); assert.equal(latar(D).length, 0); assert.equal(D.document.activeElement, pemicu);
  });

  it('kotak dibuang tanpa close(): penjaga Esc dan fokus dilepas', () => {
    const D = domTiruan(false); tombolHalaman(D);
    const d = D.UKP.dialog({ judul: 'Uji', isi: 'Isi' }); d.remove();
    assert.equal(latar(D).length, 0);
    const lain = D.UKP.h('button', { type: 'button' }, 'x'); D.dok.body.appendChild(lain); lain.focus(); assert.equal(D.document.activeElement, lain);
  });

  it('peramban modern (showModal ada): dialog asli dipakai, tanpa data-cadangan, tanpa latar, tanpa penjaga fokus', () => {
    const D = domTiruan(true); tombolHalaman(D);
    const nPendengar = k => (D.dok.listener.get(k) || []).length; const n0 = [nPendengar('keydown:c'), nPendengar('focusin:c')];
    const d = D.UKP.dialog({ judul: 'Uji', isi: 'Isi' });
    assert.equal(d._modal, true); assert.equal(d.hasAttribute('data-cadangan'), false); assert.equal(latar(D).length, 0);
    assert.equal(d.style.zIndex, undefined);
    const lain = D.UKP.h('button', { type: 'button' }, 'x'); D.dok.body.appendChild(lain); lain.focus();
    assert.equal(D.document.activeElement, lain, 'cabang cadangan tidak memasang penjaga');
    assert.deepEqual([nPendengar('keydown:c'), nPendengar('focusin:c')], n0, 'tidak ada pendengar baru di document');
  });

  it('css: cadangan :has() untuk teks pilihan di HP dan animasi masuk tidak menimpa posisi kotak cadangan', () => {
    const css = fs.readFileSync(path.join(__dirname, '..', 'css', 'app.css'), 'utf8'); const blok = css.slice(css.indexOf('/* ===== v9.4 Kb ===== */'));
    assert.match(blok, /@media \(max-width: 599px\) \{\s*html\.tanpa-has \.opsi label \.teks \{ flex: 1 1 calc\(100% - 28px - var\(--s-3\)\); \}/);
    assert.match(blok, /dialog\[data-cadangan\]\[open\]:not\(\.sheet\) \{ animation: none; \}/);
  });
});
