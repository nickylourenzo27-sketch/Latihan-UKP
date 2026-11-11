/* Uji v9.4 paket Ka: masuk room tanpa hambatan.
   - sw.js + tools/build-artifact.js (FB1, menggantikan Ka1): index.html rilis merujuk aset dengan cap versi ?v=<VERSI>; cacheDulu
     melayani cap versi ini dari cache, cap versi lain dari jaringan tanpa disimpan; tidak ada halaman yang dimuat ulang paksa.
   - js/views-ruang.js (FB2/FB3): tab baru tidak merebut room dari pemimpin; "Ganti nama" di menu room; "Anda: <nama>" di HP.
   - js/views-ruang.js (Ka2/Ka3, UKP.ruangUI._murni): tautan yang rusak sedikit, sebab gagal tersambung, Info sambungan, versi lama.
   - js/ruang.js: field opsional versiApp di kehadiran (versi lama mengabaikannya).
   Tanpa DOM sungguhan. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { muatInti } = require('./_muat-inti.js');

const ROOT = path.join(__dirname, '..');
const UKP = muatInti(['core.js', 'learn.js', 'views-ruang.js']);
const M = UKP.ruangUI._murni;
const pol = o => JSON.parse(JSON.stringify(o));
const LARANGAN = /relai|mqtt|enkripsi|websocket|service worker|cache|kode room/i;

// ---------- sw.js di lingkungan tiruan ----------
// v9.4 FB1: uji Ka1 lama (muat ulang paksa lewat WindowClient.navigate, RUTE_SIBUK, ?muat=) diganti: pendekatan itu dihapus.
// Kini halaman yang baru dibuka memakai aset bercap versi (?v=<VERSI>) dan service worker tidak pernah memuat ulang halaman.
const LINGKUP = 'https://contoh.github.io/Latihan-UKP/';
const tanpaQ = u => u.split('?')[0];
function muatSW(o) {
  o = o || {};
  const cacheIsi = new Map(Object.entries(o.cache || {}));   // nama cache → { url: teks }
  const navigasi = []; const pendengar = {}; let diklaim = false; const diambil = []; const disimpan = [];
  const klien = (o.klien || []).map(url => ({ url, type: 'window', navigate(u) { navigasi.push({ dari: url, ke: u }); return Promise.resolve(this); } }));
  const resp = (teks, asal) => ({ ok: true, type: 'basic', status: 200, asal, text: async () => teks, clone() { return this; } });
  const caches = {
    keys: async () => Array.from(cacheIsi.keys()),
    open: async k => {
      if (!cacheIsi.has(k)) cacheIsi.set(k, {}); const isi = cacheIsi.get(k);
      return {
        match: async (req, op) => { const u = typeof req === 'string' ? req : req.url; const kunci = op && op.ignoreSearch ? Object.keys(isi).find(x => tanpaQ(x) === tanpaQ(u)) : (isi[u] != null ? u : null); return kunci != null ? resp(isi[kunci], 'cache:' + kunci) : undefined; },
        put: async (req, res) => { const u = typeof req === 'string' ? req : req.url; disimpan.push(u); isi[u] = 'disimpan'; },
      };
    },
    delete: async k => cacheIsi.delete(k),
  };
  const timer = [];
  const self = {
    location: new URL(LINGKUP + 'sw.js'), registration: { scope: LINGKUP }, caches,
    clients: { claim: async () => { diklaim = true; }, matchAll: async () => (diklaim ? klien : []) },
    addEventListener: (n, f) => { (pendengar[n] = pendengar[n] || []).push(f); }, skipWaiting: () => {},
  };
  const fetchTiruan = async req => { const u = typeof req === 'string' ? req : req.url; diambil.push(u); if (o.luring) throw new TypeError('Failed to fetch'); return resp('jaringan:' + u, 'jaringan'); };
  const ctx = { self, caches, console: { debug() {}, log() {} }, URL, Request: function (u) { this.url = u; }, Response: function () {}, fetch: fetchTiruan, setTimeout: (f, ms) => { timer.push(f); return timer.length; }, clearTimeout() {}, Promise, Set, Array, Map };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8'), ctx, { filename: 'sw.js' });
  const VERSI = vm.runInContext('VERSI', ctx); const AWALAN = vm.runInContext('AWALAN', ctx); const CACHE = vm.runInContext('CACHE', ctx);
  async function aktifkan() {
    let janji = null;
    for (const f of pendengar.activate || []) f({ waitUntil: p => { janji = p; } });
    const selesai = await Promise.race([janji.then(() => true), new Promise(r => setTimeout(() => r(false), 500))]);
    while (timer.length) timer.shift()();
    await new Promise(r => setImmediate(r)); await new Promise(r => setImmediate(r));
    return selesai;
  }
  // permintaan aset lewat penangan fetch (mode no-cors seperti <script src>)
  async function minta(url) {
    let p = null;
    const ev = { request: { url, method: 'GET', mode: 'no-cors', cache: 'default' }, respondWith: x => { p = x; }, waitUntil() {} };
    for (const f of pendengar.fetch || []) f(ev);
    return p ? await p : null;
  }
  function pesan(data) {
    const balasan = [];
    for (const f of pendengar.message || []) f({ data, ports: [{ postMessage: x => balasan.push(x) }] });
    return balasan;
  }
  return { ctx, VERSI, AWALAN, CACHE, navigasi, cacheIsi, aktifkan, minta, pesan, diambil, disimpan, diklaim: () => diklaim };
}

describe('v9.4 FB1: sw.js, aset bercap versi (bukan muat ulang paksa)', () => {
  const ASET = LINGKUP + 'js/app.js';
  function denganCache(o) { const w = muatSW(o); w.cacheIsi.set(w.CACHE, { [ASET]: 'app versi ini' }); return w; }
  it('cacheDulu, v sama dengan VERSI: dilayani dari cache versi ini (alamat polos), tanpa jaringan', async () => {
    const w = denganCache();
    const r = await w.minta(ASET + '?v=' + w.VERSI);
    assert.equal(r.asal, 'cache:' + ASET);
    assert.deepEqual(w.diambil, []);
  });
  it('cacheDulu, v berbeda (halaman lebih baru): jaringan dulu dan TIDAK disimpan ke cache versi ini', async () => {
    const w = denganCache();
    const r = await w.minta(ASET + '?v=versiberikut');
    assert.equal(r.asal, 'jaringan');
    assert.deepEqual(w.diambil, [ASET + '?v=versiberikut']);
    assert.deepEqual(w.disimpan, []);
    assert.deepEqual(Object.keys(w.cacheIsi.get(w.CACHE)), [ASET]);
  });
  it('cacheDulu, v berbeda dan jaringan gagal: cadangan dari cache (aplikasi tetap terbuka luring)', async () => {
    const w = denganCache({ luring: true });
    const r = await w.minta(ASET + '?v=versiberikut');
    assert.equal(r.asal, 'cache:' + ASET);
  });
  it('cacheDulu tanpa v: perilaku lama (alamat persis; tidak ada → jaringan lalu disimpan)', async () => {
    const w = denganCache();
    assert.equal((await w.minta(ASET)).asal, 'cache:' + ASET);
    assert.deepEqual(w.diambil, []);
    const r = await w.minta(LINGKUP + 'js/baru.js');
    assert.equal(r.asal, 'jaringan'); assert.deepEqual(w.disimpan, [LINGKUP + 'js/baru.js']);
  });
  it('cabang tanpa v sama dengan rilis 9.0 sampai 9.3.2 (alamat persis termasuk query): di sw lama, alamat bercap tidak ada di cache sehingga diambil dari jaringan', () => {
    // bentuk cacheDulu rilis lama (identik di 9.0 sampai 9.3.2): match tanpa ignoreSearch, lalu fetch(req)
    const lama = "const ada = await cache.match(req, { ignoreVary: true });\n  if (ada) return ada;";
    assert.ok(fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8').includes(lama), 'cabang tanpa v tetap sama dengan rilis lama');
  });
  it('activate: cache versi lain di lingkup ini dihapus, halaman diambil alih, TIDAK ada halaman yang dimuat ulang', async () => {
    const w = muatSW({ klien: [LINGKUP + '#room/ABCD-EFGHJ-KMNPQ', LINGKUP + '#beranda', LINGKUP + '#latih'] });
    w.cacheIsi.set(w.AWALAN + 'lama123', { [LINGKUP + 'js/app.js']: 'app lama' });
    w.cacheIsi.set('ukp-aset|https://contoh.github.io/lain/|abc', {});
    assert.equal(await w.aktifkan(), true);
    assert.equal(w.navigasi.length, 0);
    assert.ok(w.diklaim());
    assert.ok(!w.cacheIsi.has(w.AWALAN + 'lama123'));
    assert.ok(w.cacheIsi.has('ukp-aset|https://contoh.github.io/lain/|abc'), 'cache lingkup lain tidak disentuh');
  });
  it('pendekatan muat ulang paksa dihapus seluruhnya dari sw.js dan js/app.js', () => {
    const sw = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8'); const app = fs.readFileSync(path.join(ROOT, 'js', 'app.js'), 'utf8');
    for (const x of ['adaHalamanTanpaMuatSendiri', 'bukaUlangHalamanLama', 'urlBukaUlang', 'RUTE_SIBUK', "'muat'", 'PENANDA_MUAT_SENDIRI']) assert.ok(!sw.includes(x), 'sw.js: ' + x);
    assert.ok(!/bersihkanUrlMuat|muat=/.test(app));
    // blok HOST_TANPA_SW tidak diubah
    assert.match(sw, /const cs = await self\.clients\.matchAll\(\{ type: 'window' \}\); await Promise\.all\(cs\.map\(c => c\.navigate\(c\.url\)\.catch\(\(\) => null\)\)\);/);
  });
  it("pesan { type: 'VERSI?' } dijawab VERSI lewat event.ports[0]", () => {
    const w = muatSW();
    const b = w.pesan({ type: 'VERSI?' });
    assert.equal(b.length, 1); assert.equal(b[0].versi, w.VERSI);
  });
  it('js/app.js: versi aset halaman dari query v alamat js/app.js; controllerchange bertanya VERSI? (batas 1 detik) dan tidak memuat ulang bila sama', () => {
    const app = fs.readFileSync(path.join(ROOT, 'js', 'app.js'), 'utf8');
    assert.match(app, /const VERSI_ASET = \(\(\) => \{[\s\S]{0,400}searchParams\.get\('v'\)/);
    assert.match(app, /w\.postMessage\(\{ type: 'VERSI\?' \}, \[mc\.port2\]\)/);
    assert.match(app, /t = setTimeout\(\(\) => akhir\(null\), 1000\);/);
    const i = app.indexOf("sw.addEventListener('controllerchange'"); const blok = app.slice(i, i + 700);
    assert.match(blok, /versiSamaDenganHalaman\(sw\.controller\)\.then\(sama => \{\s*if \(!sama\) \{ gantiPengendali\(\); return; \}\s*clearTimeout\(tCadanganMuat\); muatUlangDiminta = false;/);
  });
});

// ---------- alat cap versi (tools/build-artifact.js) dan berkas offline ----------
describe('v9.4 FB1: tools/build-artifact.js menulis cap ?v=<VERSI> di index.html', () => {
  const os = require('node:os'); const { execFileSync } = require('node:child_process');
  let dir = null;
  function salin() {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ukp-cap-'));
    for (const x of ['index.html', 'sw.js', 'manifest.webmanifest']) fs.copyFileSync(path.join(ROOT, x), path.join(dir, x));
    for (const d of ['css', 'js', 'icons']) fs.cpSync(path.join(ROOT, d), path.join(dir, d), { recursive: true });
    fs.mkdirSync(path.join(dir, 'tools')); for (const t of ['build-artifact.js', 'build-offline.js']) fs.copyFileSync(path.join(ROOT, 'tools', t), path.join(dir, 'tools', t));
    // pohon sumber bisa sudah bercap: mulai dari bentuk polos
    fs.writeFileSync(path.join(dir, 'index.html'), fs.readFileSync(path.join(dir, 'index.html'), 'utf8').replace(/\?v=[0-9a-f]+/g, ''));
    return dir;
  }
  const jalan = (alat, ...arg) => execFileSync(process.execPath, [path.join(dir, 'tools', alat), ...arg], { cwd: dir, encoding: 'utf8' });
  const baca = f => fs.readFileSync(path.join(dir, f), 'utf8');
  it('cap pada semua <script src> dan stylesheet lokal; VERSI sama dengan sw.js; idempoten; artifact tanpa ?v=; offline sama dengan atau tanpa cap', () => {
    salin();
    try {
      const polos = baca('index.html');
      jalan('build-offline.js', '--tanpa-font', '--keluar', path.join(dir, 'off-polos.html'));
      jalan('build-artifact.js');
      const i1 = baca('index.html'), s1 = baca('sw.js'), a1 = baca('dist/artifact.html');
      const versi = /const VERSI = '([0-9a-f]{12})';/.exec(s1)[1];
      const nSkrip = (polos.match(/<script\b[^>]*\bsrc="js\//g) || []).length;
      assert.equal((i1.match(new RegExp('<script src="js/[^"?]+\\.js\\?v=' + versi + '"></script>', 'g')) || []).length, nSkrip, 'semua skrip lokal bercap');
      assert.match(i1, new RegExp('<link rel="stylesheet" href="css/app\\.css\\?v=' + versi + '">'));
      assert.match(i1, /href="https:\/\/fonts\.googleapis\.com\/css2\?family=[^"]*display=swap"/, 'lintas asal tidak disentuh');
      assert.match(i1, /<link rel="manifest" href="manifest\.webmanifest">/, 'manifest tidak bercap');
      assert.equal(i1.replace(/\?v=[0-9a-f]{12}/g, ''), polos, 'selain cap, index.html tidak berubah');
      assert.ok(!/\?v=/.test(a1), 'dist/artifact.html tanpa cap');
      // idempoten
      jalan('build-artifact.js');
      assert.equal(baca('index.html'), i1); assert.equal(baca('sw.js'), s1); assert.equal(baca('dist/artifact.html'), a1);
      // VERSI dihitung dari index.html polos: sama walau masukan sudah bercap versi lain
      fs.writeFileSync(path.join(dir, 'index.html'), i1.replace(new RegExp(versi, 'g'), 'abcdefabcdef'));
      jalan('build-artifact.js');
      assert.equal(baca('index.html'), i1); assert.equal(baca('sw.js'), s1);
      // berkas offline: query dibuang saat membaca; hasil sama dengan dari index.html polos
      jalan('build-offline.js', '--tanpa-font', '--keluar', path.join(dir, 'off-cap.html'));
      assert.equal(baca('off-cap.html'), baca('off-polos.html'));
      assert.ok(!/data-sumber="[^"]*\?/.test(baca('off-cap.html')), 'data-sumber tanpa query');
    } finally { fs.rmSync(dir, { recursive: true, force: true }); }
  });
});

// ---------- FB2 / FB3 / FB4 ----------
describe('v9.4 FB2: tab baru tidak merebut room dari papan pemimpin', () => {
  const src = fs.readFileSync(path.join(ROOT, 'js', 'views-ruang.js'), 'utf8');
  const boot = src.slice(src.indexOf('UI.boot = function'), src.indexOf('function amanPindahKeRoom'));
  it('hanya perangkat anggota yang tabnya dibuka di layar room mengambil alih; perangkat pemimpin seperti v9.3.2', () => {
    assert.match(boot, /const perangkatTuan = !!\(simpan && simpan\.peran === 'tuan'\);/);
    assert.match(boot, /const tabIniDiRoom = !perangkatTuan && viewAwal === 'room' && !kodeLain && !tersembunyi;/);
    assert.match(boot, /if \(simpan && simpan\.kode && kunciTabLain\(\) && !tabIniDiRoom\) tabKedua = true;/);
  });
  it('tab anggota di luar layar room atau tersembunyi menunda pemulihan sekitar 1,5 detik lalu memeriksa ulang kunci tab', () => {
    assert.match(src, /const TUNDA_PULIH_MS = 1500;/);
    assert.match(boot, /const tundaPulih = !perangkatTuan && !tabIniDiRoom;/);
    assert.match(boot, /if \(!info\(\) && !tabKedua\) \{\s*if \(kunciTabLain\(\)\) tabKedua = true;\s*else \{ try \{ if \(r\.pulihkan\(\)\) klaimTab\(\);/);
  });
  it('pilihKeadaan: tautan room yang sama dengan room tab lain → "Room terbuka di tab lain"; room lain → gabung; menunda → memulihkan', () => {
    const K = 'KODEKODEKODEKO';
    assert.equal(M.pilihKeadaan({ tersedia: true, tabKedua: true, kode: K, kodeSimpan: K }), 'tabKedua');
    assert.equal(M.pilihKeadaan({ tersedia: true, tabKedua: true, kode: 'LAINLAINLAINLA', kodeSimpan: K }), 'gabung');
    assert.equal(M.pilihKeadaan({ tersedia: true, tabKedua: true }), 'tabKedua');
    assert.equal(M.pilihKeadaan({ tersedia: true, kode: K }), 'gabung', 'tanpa tab lain: tetap layar gabung');
    assert.equal(M.pilihKeadaan({ tersedia: true, memulihkan: true, kode: K, kodeSimpan: K }), 'memulihkan');
    assert.equal(M.pilihKeadaan({ tersedia: true, memulihkan: true }), 'memulihkan');
    assert.equal(M.pilihKeadaan({ tersedia: true, memulihkan: true, kode: 'LAINLAINLAINLA', kodeSimpan: K }), 'gabung');
    assert.equal(M.pilihKeadaan({ tersedia: true, memulihkan: true, info: { kode: K, peran: 'anggota' }, state: { room: {} } }), 'lobi');
  });
});

describe('v9.4 FB3: salah ketuk nama mudah dibetulkan kapan pun', () => {
  const src = fs.readFileSync(path.join(ROOT, 'js', 'views-ruang.js'), 'utf8');
  it('menu room anggota memuat "Ganti nama" (alur yang sama dengan "Bukan Anda? Ganti nama"); pemimpin tidak', () => {
    const m = src.slice(src.indexOf('UI.itemMenu = function'), src.indexOf('UI.menu = function'));
    assert.match(m, /!tuan \? \{ teks: 'Ganti nama', ikon: 'pen', onclick: gantiNama \} : null,/);
    assert.match(src, /h\('button', \{ type: 'button', class: 'tautan-tombol room-ganti-nama', onclick: gantiNama \}, 'Bukan Anda\? Ganti nama'\)/);
    assert.equal((src.match(/async function gantiNama\(\)/g) || []).length, 1, 'satu fungsi untuk lobi dan menu');
  });
  it('HP anggota menampilkan "Anda: <nama>" selama latihan dan di layar ujian tim', () => {
    assert.match(src, /const anda = i && i\.peran !== 'tuan' \? h\('p', \{ class: 'room-anda small' \}, 'Anda: ', h\('strong', null, i\.nama\)\) : null;/);
    assert.match(src, /if \(ks\.anda\) node\.push\(ks\.anda\);/);
    assert.match(src, /\[ks\.bar, ks\.anda, h\('div', \{ class: 'room-anggota stack' \}, isi\)\]\.filter\(Boolean\)/);
  });
});

describe('v9.4 FB4: tanda "versi lama" di layar ujian pemimpin', () => {
  it('tanda masuk ke sel nama, bukan sel grid baru', () => {
    const ut = fs.readFileSync(path.join(ROOT, 'js', 'views-ujian-tim.js'), 'utf8');
    assert.match(ut, /\(li\.querySelector\('\.ruang-nama'\) \|\| li\)\.append\(' ', h\('span', \{ class: 'versi-lama-tanda'/);
    assert.ok(!/li\.append\(h\('span', \{ class: 'versi-lama-tanda'/.test(ut));
  });
});

describe('v9.4 Ka2: tautan room dari WhatsApp yang rusak sedikit', () => {
  const K = 'ABCD-EFGHJ-KMNPQ';
  it('rapikanKodeTautan: tanda baca di ujung, spasi, huruf kecil, # ter-enkode', () => {
    for (const t of [K, K + '.', K + ',', K + ')', '(' + K + ')', K + ').', ' ' + K + ' ', K.toLowerCase(), '%23room%2F' + K, '#room/' + K + '%20', 'https://x.github.io/Latihan-UKP/#room/' + K + ').', K + '%29'])
      assert.equal(M.rapikanKodeTautan(t).toUpperCase().replace(/[\s\-_.]/g, ''), 'ABCDEFGHJKMNPQ', t);
  });
  it('rapikanKodeTautan tidak menebak isi kode (sisipan di tengah tetap membuat kode tidak sah)', () => {
    assert.equal(M.rapikanKodeTautan('ABCD!EFGHJ').toUpperCase(), 'ABCD');
    assert.equal(M.rapikanKodeTautan(''), ''); assert.equal(M.rapikanKodeTautan(null), '');
  });
  it('hashRoomRapi: bentuk rusak menjadi #room/<kode>; hash yang sudah rapi atau rute lain → null', () => {
    assert.equal(M.hashRoomRapi('#%23room/' + K), '#room/' + K);
    assert.equal(M.hashRoomRapi('#ROOM/' + K), '#room/' + K);
    assert.equal(M.hashRoomRapi('#Room/' + K + ').'), '#room/' + K);
    assert.equal(M.hashRoomRapi('#room%2F' + K), '#room/' + K);
    assert.equal(M.hashRoomRapi('#room/' + K + ','), '#room/' + K);
    assert.equal(M.hashRoomRapi('#%23ROOM'), '#room');
    assert.equal(M.hashRoomRapi('#room/' + K), null);
    assert.equal(M.hashRoomRapi('#room'), null);
    assert.equal(M.hashRoomRapi('#beranda'), null); assert.equal(M.hashRoomRapi(''), null); assert.equal(M.hashRoomRapi('#roomku'), null);
  });
  it('kode dari parameter rute dan isian tautan memakai rapikanKodeTautan sebelum normalKode', () => {
    const src = fs.readFileSync(path.join(ROOT, 'js', 'views-ruang.js'), 'utf8');
    assert.match(src, /r\.normalKode\(rapikanKodeTautan\(params\.kode\)\)/);
    assert.match(src, /r\.normalKode\(rapikanKodeTautan\(rute\.params\.kode\)\)/);
    assert.equal((src.match(/normalKode\(rapikanKodeTautan\(inp\.value\)\)/g) || []).length, 2);
  });
  it('dialog konfirmasi nama profil berbeda dihapus dari jalan menuju room; "Bukan Anda? Ganti nama" tetap ada di lobi', () => {
    const src = fs.readFileSync(path.join(ROOT, 'js', 'views-ruang.js'), 'utf8');
    const i = src.indexOf('async function pilihNama('); const j = src.indexOf('async function masuk(', i);
    assert.ok(i > 0 && j > i); assert.ok(!/UKP\.konfirmasi/.test(src.slice(i, j)));
    assert.match(src, /'Bukan Anda\? Ganti nama'/);
  });
  it('website tanpa kode room: isian tautan untuk anggota tampil langsung (tidak di lipatan)', () => {
    const src = fs.readFileSync(path.join(ROOT, 'js', 'views-ruang.js'), 'utf8');
    const i = src.indexOf('function layarKosong()'); const blok = src.slice(i, src.indexOf('function layarMenunggu()', i));
    assert.match(blok, /'Diajak masuk room\?'[\s\S]*isianTautan\('Tautan room dari grup'\)/);
    assert.ok(!/details', \{ class: 'lipat' \}, h\('summary', null, 'Sudah punya tautan\? Tempel di sini'\)/.test(blok.slice(blok.indexOf("if (ditutupPemimpin)") + 400)));
  });
});

describe('v9.4 Ka3: sebab gagal tersambung', () => {
  it('urutan: tidak ada internet → room ditutup → semua jalur gagal → pemimpin belum membuka → room tidak ditemukan', () => {
    assert.equal(M.sebabGagal({ daring: false, jalur: [{ ok: false }], tidakAda: 'tutup' }).kunci, 'internet');
    assert.equal(M.sebabGagal({ daring: true, tidakAda: 'tutup' }).kunci, 'tutup');
    assert.equal(M.sebabGagal({ daring: true, jalur: [{ ok: false }, { ok: false }] }).kunci, 'jalur');
    assert.equal(M.sebabGagal({ daring: true, jalur: [{ ok: false }, { ok: true }] }).kunci, 'kosong');
    assert.equal(M.sebabGagal({ daring: true, jalur: [], tuanBelum: true }).kunci, 'belum');
    assert.equal(M.sebabGagal({}).kunci, 'kosong');
  });
  it('tiap sebab: judul, satu kalimat jalan keluar, satu tombol; tanpa istilah teknis; Wi-Fi kantor/kampus dan data seluler disebut untuk jalur', () => {
    for (const o of [{ daring: false }, { tidakAda: 'tutup' }, { jalur: [{ ok: false }] }, { tuanBelum: true }, {}]) {
      const s = pol(M.sebabGagal(o));
      assert.ok(s.judul && s.teks && s.tombol, JSON.stringify(s));
      assert.doesNotMatch(s.judul + ' ' + s.teks, LARANGAN);
      assert.ok(!/[—→]/.test(s.judul + s.teks));
    }
    const j = M.sebabGagal({ jalur: [{ ok: false }] });
    assert.match(j.teks, /Wi-Fi kantor atau kampus/); assert.match(j.teks, /data seluler/); assert.equal(j.tombol, 'Coba lagi');
    assert.equal(M.sebabGagal({ tidakAda: 'tutup' }).tombol, 'Ke Beranda');
  });
});

describe('v9.4 Ka3: Info sambungan', () => {
  const dasar = { versi: '9.4', peramban: 'Chrome 120 · Android 14', nama: 'Mita', peran: 'anggota', kode: 'ABCDEFGHJKMNPQ', daring: true,
    jalur: [{ status: 'tersambung', sejak: new Date(2026, 10, 11, 19, 5, 7).getTime() }, { status: 'gagal', galatPada: new Date(2026, 10, 11, 19, 4, 0).getTime() }, { status: 'menyambung' }],
    dataRoom: true, selisihMs: -3200, kini: new Date(2026, 10, 11, 19, 6, 0).getTime(), online: 4 };
  it('memuat versi, peramban, tiap jalur dengan status dan sejak kapan, data room, selisih jam, jam sekarang', () => {
    const t = M.teksInfoSambungan(dasar);
    assert.match(t, /^Info sambungan MABAR UKP\n/);
    assert.match(t, /Versi aplikasi: 9\.4/); assert.match(t, /Peramban: Chrome 120 · Android 14/);
    assert.match(t, /Jalur 1: tersambung sejak 19\.05\.07/); assert.match(t, /Jalur 2: gagal sejak 19\.04\.00/); assert.match(t, /Jalur 3: sedang menyambung/);
    assert.match(t, /Data room: sudah diterima/); assert.match(t, /Selisih jam dengan pemimpin: HP ini lebih cepat 3 detik/);
    assert.match(t, /Jam sekarang: 19\.06\.00 \(2026-11-11\)/); assert.match(t, /Orang tersambung: 4/);
  });
  it('tidak memuat kode room lengkap (hanya 4 karakter terakhir) dan tidak memuat istilah teknis', () => {
    const t = M.teksInfoSambungan(dasar);
    assert.ok(!t.includes('ABCDEFGHJKMNPQ') && !t.includes('ABCD')); assert.match(t, /Room: …MNPQ/);
    assert.doesNotMatch(t, /relai|mqtt|websocket|service worker|cache/i);
    assert.ok(!/[—→]/.test(t));
  });
  it('belum masuk room: jalur belum dicoba, selisih jam belum diketahui; pemimpin: selisih tidak berlaku', () => {
    const t = M.teksInfoSambungan({ versi: '9.4', peramban: 'Safari 17', daring: false, jalur: [], dataRoom: false, kini: Date.now() });
    assert.match(t, /Room: belum masuk/); assert.match(t, /Internet: tidak tersambung/); assert.match(t, /Jalur sambungan: belum dicoba/);
    assert.match(t, /Selisih jam dengan pemimpin: belum diketahui/); assert.ok(!/Nama:/.test(t));
    assert.match(M.teksInfoSambungan(Object.assign({}, dasar, { peran: 'tuan' })), /Nama: Mita \(pemimpin\)[\s\S]*perangkat ini pemimpin/);
  });
  it('ringkasPeramban: Chrome Android, Safari iPhone, Samsung Internet, peramban di dalam aplikasi', () => {
    assert.equal(M.ringkasPeramban('Mozilla/5.0 (Linux; Android 14; SM-A145F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.230 Mobile Safari/537.36'), 'Chrome 120 · Android 14');
    assert.equal(M.ringkasPeramban('Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1'), 'Safari 17.2 · iPhone iOS 17.2');
    assert.equal(M.ringkasPeramban('Mozilla/5.0 (Linux; Android 13; SM-A525F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.36'), 'Samsung Internet 23 · Android 13');
    assert.equal(M.ringkasPeramban('Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 300.0'), 'dalam aplikasi Instagram · iPhone iOS 16.6');
    assert.equal(M.ringkasPeramban('Mozilla/5.0 (Linux; Android 12; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/118.0 Mobile Safari/537.36 [FBAN/EMA;FBLC/id_ID]'), 'dalam aplikasi Facebook · Android 12');
    assert.equal(M.ringkasPeramban(''), 'tidak diketahui');
  });
  it('Info sambungan bisa dibuka dari layar gabung (juga saat gagal) dan dari menu room', () => {
    const src = fs.readFileSync(path.join(ROOT, 'js', 'views-ruang.js'), 'utf8');
    assert.match(src, /\{ teks: 'Info sambungan', ikon: 'info', onclick: \(\) => dialogInfoSambungan\(\) \}/);
    assert.ok((src.match(/class: 'tautan-tombol room-info-sambungan', onclick: \(\) => dialogInfoSambungan\(kodeParam\)/g) || []).length >= 3);
    assert.match(src, /label: 'Salin info sambungan'/);
  });
});

describe('v9.4 Ka3: versi lama di laptop pemimpin', () => {
  it('versiLebihLama membandingkan per bagian angka', () => {
    assert.equal(M.versiLebihLama('9.3.2', '9.4'), true); assert.equal(M.versiLebihLama('9.4', '9.4'), false);
    assert.equal(M.versiLebihLama('9.10', '9.4'), false); assert.equal(M.versiLebihLama('9.4', '9.4.1'), true);
    assert.equal(M.versiLebihLama('x', '9.4'), false); assert.equal(M.versiLebihLama('', '9.4'), false);
  });
  it('versiAnggotaLama: online tanpa versiApp = sebelum 9.4; versi lebih rendah = lama; offline atau pemimpin tanpa versi = tidak ditandai', () => {
    assert.equal(M.versiAnggotaLama({ online: true }, '9.4'), true);
    assert.equal(M.versiAnggotaLama({ online: true, versiApp: '9.3.2' }, '9.4'), true);
    assert.equal(M.versiAnggotaLama({ online: true, versiApp: '9.4' }, '9.4'), false);
    assert.equal(M.versiAnggotaLama({ online: false }, '9.4'), false);
    assert.equal(M.versiAnggotaLama({ online: true }, null), false);
    assert.equal(M.versiAnggotaLama({ online: true }, '9.0'), false, 'pohon pengembangan (9.0) tidak menandai semua orang');
    assert.equal(M.versiAnggotaLama(null, '9.4'), false);
  });
  it('kehadiran membawa versiApp opsional; nilai tidak sah diabaikan tanpa menolak pesan; versiHadir() meneruskannya (bentuk hadir() tetap)', () => {
    const src = fs.readFileSync(path.join(ROOT, 'js', 'ruang.js'), 'utf8');
    assert.match(src, /amplop\(\{ online, peran: r\.peran, siap: online \? r\.siap \|\| null : null, versiApp: versiKini\(\) \}\)/);
    assert.match(src, /api\.versiHadir = function \(\)/);
    const R = muatInti(['core.js', 'ruang.js']).ruang;
    const P = R._protokol;
    if (P && typeof P.validHadir === 'function') {
      const dasar = { v: 1, t: Date.now(), urut: 1, d: 'abcd1234', nama: 'Mita', online: true, peran: 'anggota' };
      assert.equal(P.validHadir(Object.assign({}, dasar, { versiApp: '9.4' })).versiApp, '9.4');
      const tanpa = P.validHadir(dasar); assert.ok(tanpa && tanpa.versiApp === undefined);
      const buruk = P.validHadir(Object.assign({}, dasar, { versiApp: '<b>x</b>' })); assert.ok(buruk && buruk.versiApp === undefined, 'pesan tetap diterima');
    }
  });
  it('lobi pemimpin dan daftar orang di layar ujian tim memakai tanda "versi lama"', () => {
    const src = fs.readFileSync(path.join(ROOT, 'js', 'views-ruang.js'), 'utf8');
    assert.match(src, /lama \? h\('span', \{ class: 'versi-lama-tanda' \}, 'versi lama'\) : null/);
    assert.match(src, /'Bertanda versi lama: minta mereka menutup tab lalu membuka lagi tautan room, supaya soal sama\.'/);
    const ut = fs.readFileSync(path.join(ROOT, 'js', 'views-ujian-tim.js'), 'utf8');
    assert.match(ut, /UKP\.ruangUI\.versiLamaNama\(x\.p\)/);
  });
});

describe('v9.4 Ka4: uji peramban WebKit di CI', () => {
  it('tools/uji-room-web.js memilih peramban dari BROWSER (bawaan chromium) dan profil iPhone untuk webkit', () => {
    const src = fs.readFileSync(path.join(ROOT, 'tools', 'uji-room-web.js'), 'utf8');
    assert.match(src, /process\.env\.BROWSER/);
    assert.match(src, /iPhone/);
  });
  it('workflow: job WebKit (continue-on-error) dan sw.js serta js/app.js di paths', () => {
    const y = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'cek-jalur-room.yml'), 'utf8');
    // v9.4.1: WebKit dari image resmi Playwright (tanpa memasang paket Ubuntu di mesin uji); versi image = versi paket npm
    const vImage = (y.match(/image: mcr\.microsoft\.com\/playwright:v(\d+\.\d+\.\d+)-noble/) || [])[1];
    const vNpm = (y.slice(y.indexOf('webkit:')).match(/playwright@(\d+\.\d+\.\d+)/) || [])[1];
    assert.ok(vImage, 'image Playwright bernomor versi'); assert.equal(vNpm, vImage, 'versi paket npm sama dengan image');
    assert.ok(!/install --with-deps/.test(y.split('\n').filter(b => !/^\s*#/.test(b)).join('\n')), 'tidak memasang paket sistem di mesin uji (komentar boleh menyebutnya)');
    assert.match(y, /BROWSER: webkit/);
    assert.match(y, /- 'sw\.js'/); assert.match(y, /- 'js\/app\.js'/);
    const job = y.slice(y.indexOf('webkit:'));
    assert.match(job, /continue-on-error: true/);
  });
});
