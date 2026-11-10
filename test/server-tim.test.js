/* Server tim (deploy/server.js) — API dasbor tim: peran admin (berkas, PENGGUNA_TIM ":admin", ADMIN_USER), /api/saya, PUT/DELETE /api/hasil
   (skema ketat, nama dari akun, batas body, batas laju), GET /api/tim khusus admin, aliran SSE (event + batas koneksi + SIGTERM), CSRF,
   CLI kelola-pengguna (tambah --admin, jadikan-admin, cabut-admin, hapus), dan mode masuk nama (MASUK_NAMA=1: akun anggota tanpa sandi,
   nama admin butuh sandi, DAFTAR_NAMA, BATAS_AKUN/BATAS_AKUN_IP, server menolak start tanpa admin bersandi).
   Server dijalankan sebagai proses anak dengan folder sementara. */
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawn, execFileSync } = require('node:child_process');

const DEPLOY = path.join(__dirname, '..', 'deploy');
const H = require(path.join(DEPLOY, 'lib-hasil.js'));
const tunggu = ms => new Promise(r => setTimeout(r, ms));

async function jalankanServer(env, o) {
  o = o || {}; // o.dir: pakai ulang folder (restart dengan data yang sama); o.simpan: folder tidak dihapus saat henti
  const dir = o.dir || fs.mkdtempSync(path.join(os.tmpdir(), 'ukp-srv-'));
  const situs = path.join(dir, 'situs'), data = path.join(dir, 'data');
  if (!fs.existsSync(situs)) { fs.mkdirSync(situs); fs.writeFileSync(path.join(situs, 'index.html'), '<!doctype html><title>uji</title>'); }
  const port = 20000 + Math.floor(Math.random() * 20000);
  const p = spawn(process.execPath, [path.join(DEPLOY, 'server.js')], {
    env: Object.assign({ PATH: process.env.PATH, PORT: String(port), HOST: '127.0.0.1', SITE_DIR: situs, DATA_DIR: data }, env),
    stdio: ['ignore', 'pipe', 'pipe'] });
  const log = []; p.stdout.on('data', d => log.push(String(d))); p.stderr.on('data', d => log.push(String(d)));
  const B = 'http://127.0.0.1:' + port;
  for (let i = 0; i < 80 && p.exitCode == null; i++) { try { if ((await fetch(B + '/sehat')).ok) break; } catch (e) {} await tunggu(50); }
  const henti = async () => { if (p.exitCode == null) { p.kill('SIGKILL'); await new Promise(r => p.once('exit', r)); } if (!o.simpan) fs.rmSync(dir, { recursive: true, force: true }); };
  return { B, p, log, data, dir, henti };
}
async function masuk(B, nama, sandi) {
  const r0 = await fetch(B + '/masuk');
  const csrf = /ukp_csrf=([^;]+)/.exec(r0.headers.get('set-cookie'))[1];
  const r = await fetch(B + '/masuk', { method: 'POST', redirect: 'manual', headers: { 'Content-Type': 'application/x-www-form-urlencoded', Cookie: 'ukp_csrf=' + csrf, Origin: B },
    body: new URLSearchParams({ csrf, nama, sandi, lanjut: '/' }) });
  assert.equal(r.status, 303, 'masuk ' + nama);
  return /ukp_sesi=([^;]+)/.exec(r.headers.get('set-cookie'))[0];
}
const api = (B, cookie, jalur, o) => {
  o = o || {};
  const hdr = Object.assign({ Cookie: cookie }, o.tanpaHeader ? {} : { 'X-Requested-With': 'UKP' }, o.body !== undefined ? { 'Content-Type': o.tipe || 'application/json' } : {}, o.hdr || {});
  return fetch(B + jalur, { method: o.method || 'GET', headers: hdr, body: o.body !== undefined ? (typeof o.body === 'string' ? o.body : JSON.stringify(o.body)) : undefined });
};
const RINGKASAN = { nama: 'Palsu', tingkat: 'B', diperbarui: '2030-01-01T00:00:00.000Z', versiApp: '7.6',
  latihan: { total: 12, benar: 9, akurasi7: 0.75, sesi7: 2, soal7: 12, hari7: 3, terakhir: '2026-11-08T10:00:00.000Z', perKelompok: { A2: { n: 12, benar: 9 } }, perTopikLemah: [{ id: 'A2.1', n: 4, benar: 1 }] },
  simulasi: [{ id: 'sim-1', format: 'UKP', kode: null, tingkat: 'B', selesai: '2026-11-08T11:00:00.000Z', skor: 64, benar: 64, salah: 30, kosong: 6, jumlah: 100, menit: 180, lulus: true, perKelompok: { B7: { n: 20, benar: 12 } } }],
  hadir: { hari14: 5, rangkaian: 2 },
  jawaban: [{ s: 'A2-014', t: 'A2.1', o: 'B', b: 0, d: 37, w: 1794150000, m: 'latihan', k: 'yakin' },
    { s: 'B7-003', t: 'B7.2', o: '-', b: 0, d: 4, w: 1794100000, m: 'simulasi', sim: 'sim-1', k: null }] };
// ringkasan dengan 400 jawaban per soal (batas kontrak), ±45 KB
const JAWAB400 = Array.from({ length: 400 }, (_, i) => ({ s: 'C10-' + String(i).padStart(3, '0'), t: 'C10.8', o: 'ABCD'[i % 4], b: i % 2, d: 120, w: 1794150000 - i * 60, m: i % 3 ? 'latihan' : 'simulasi', sim: i % 3 ? undefined : 'sim-' + (i % 7), k: ['yakin', 'ragu', 'menebak', null][i % 4] }));

test('lib-hasil: skema ketat menolak kunci/tipe asing; normalisasi menjepit nilai; nama dari akun; ≤ 120 KB', () => {
  const d = H.siapkan(RINGKASAN, 'rina', Date.parse('2026-11-09T00:00:00Z'));
  assert.equal(d.nama, 'rina'); assert.equal(d.diperbarui, '2026-11-09T00:00:00.000Z');
  assert.equal(d.latihan.akurasi7, 0.75); assert.equal(d.simulasi[0].lulus, true); assert.equal(d.hadir.hari14, 5);
  for (const buruk of [null, [], 'x', { jahat: 1 }, { latihan: { total: 'banyak' } }, { latihan: [] }, { simulasi: {} }, { simulasi: [{ skor: '9' }] },
    { latihan: { perKelompok: { A1: { n: 1, x: 2 } } } }, { hadir: { hari14: 1, lain: 2 } }, { nama: 'x'.repeat(201) }, { simulasi: new Array(51).fill({}) },
    // jawaban per soal: larik objek berkunci tetap, tipe dan pola ketat, maks. 400
    { jawaban: {} }, { jawaban: ['x'] }, { jawaban: [{ s: 'A2-014', t: 'A2.1', o: 'B', b: 0, w: 1, m: 'latihan', stem: 'teks soal' }] },
    { jawaban: [{ s: 'A2-014', t: 'A2.1', o: 'B', b: '0', w: 1, m: 'latihan' }] }, { jawaban: [{ s: 'A2-014', t: 'A2.1', o: 'B', b: 2, w: 1, m: 'latihan' }] },
    { jawaban: [{ s: '<b>', t: 'A2.1', o: 'B', b: 0, w: 1, m: 'latihan' }] }, { jawaban: [{ s: 'A2-014', t: 'A2.1', o: 'E', b: 0, w: 1, m: 'latihan' }] },
    { jawaban: [{ s: 'A2-014', t: 'A2.1', o: 'B', b: 0, w: 1, m: 'tutor' }] }, { jawaban: [{ s: 'A2-014', t: 'A2.1', o: 'B', b: 0, w: 1, m: 'latihan', k: 'pasti' }] },
    { jawaban: [{ s: 'A2-014', t: 'A2.1', o: 'B', b: 0, w: 1, m: 'latihan', sim: '../x' }] }, { jawaban: [{ s: 'A2-014', o: 'B', b: 0, w: 1, m: 'latihan' }] },
    { jawaban: JAWAB400.concat([JAWAB400[0]]) }]) {
    assert.throws(() => H.siapkan(buruk, 'rina'), e => e instanceof H.GalatSkema && e.status === 400, JSON.stringify(buruk).slice(0, 60));
  }
  const j = H.siapkan({ latihan: { total: -4, benar: 99, akurasi7: 5, hari7: 30, perKelompok: { 'Z9': { n: 1, benar: 1 }, A1: { n: 2, benar: 9 } }, perTopikLemah: [{ id: '<x>', n: 1, benar: 0 }] },
    simulasi: [{ id: 'a<b>', skor: 140, jumlah: 10, benar: 20, format: 'aneh', kode: 'ZZ' }], hadir: { hari14: 99 } }, 'budi');
  assert.equal(j.latihan.total, 0); assert.equal(j.latihan.benar, 0); assert.equal(j.latihan.akurasi7, 1); assert.equal(j.latihan.hari7, 7);
  assert.deepEqual(j.latihan.perKelompok, { A1: { n: 2, benar: 2 } }); assert.deepEqual(j.latihan.perTopikLemah, []);
  assert.equal(j.simulasi[0].skor, 100); assert.equal(j.simulasi[0].benar, 10); assert.equal(j.simulasi[0].id, 'ab'); assert.equal(j.simulasi[0].format, ''); assert.equal(j.simulasi[0].kode, null);
  assert.equal(j.hadir.hari14, 14);
  // jawaban: dinormalkan (urut terbaru dulu, w dijepit ke jam server + 5 menit, d dijepit), sim opsional
  assert.deepEqual(d.jawaban, [{ s: 'A2-014', t: 'A2.1', o: 'B', b: 0, d: 37, w: 1794150000, m: 'latihan', k: 'yakin' }, { s: 'B7-003', t: 'B7.2', o: '-', b: 0, d: 4, w: 1794100000, m: 'simulasi', sim: 'sim-1', k: null }]);
  const kini = Date.parse('2026-11-09T00:00:00Z');
  const jj = H.siapkan({ jawaban: [{ s: 'A1-001', t: 'A1.1', o: '-', b: 1, d: 1e9, w: 1, m: 'cek' }, { s: 'A1-002', t: 'A1.1', o: 'A', b: 1, w: 9e12, m: 'sesi', k: 'ragu' }] }, 'budi', kini);
  assert.deepEqual(jj.jawaban, [{ s: 'A1-002', t: 'A1.1', o: 'A', b: 1, d: 0, w: Math.floor(kini / 1000) + 300, m: 'sesi', k: 'ragu' }, { s: 'A1-001', t: 'A1.1', o: '-', b: 0, d: 86400, w: 1, m: 'cek', k: null }]);
  assert.deepEqual(H.siapkan({}, 'budi').jawaban, [], 'klien lama tanpa jawaban tetap diterima');
  const d400 = H.siapkan(Object.assign({}, RINGKASAN, { jawaban: JAWAB400 }), 'rina');
  assert.equal(d400.jawaban.length, 400); assert.ok(Buffer.byteLength(JSON.stringify(d400)) <= H.MAKS_BYTE);
  assert.equal(H.MAKS_BYTE, 120 * 1024); assert.equal(H.MAKS_JAWAB, 400);
  // pangkas: ringkasan yang membengkak dipotong bertahap sampai ≤ 120 KB
  const besar = H.normalkan(RINGKASAN, 'x'); besar.simulasi = new Array(1600).fill(0).map(() => JSON.parse(JSON.stringify(besar.simulasi[0])));
  besar.jawaban = new Array(1200).fill(0).map((_, i) => Object.assign({}, JAWAB400[i % 400]));
  const kecil = H.pangkas(besar);
  assert.ok(Buffer.byteLength(JSON.stringify(kecil)) <= H.MAKS_BYTE); assert.ok(kecil.jawaban.length < 1200);
});

test('server: peran admin dari PENGGUNA_TIM ":admin" dan ADMIN_USER; /api/saya; CSRF; 401 tanpa sesi', async () => {
  const S = await jalankanServer({ ADMIN_USER: 'nicky', ADMIN_PASS: 'Sandi-Nicky-123', PENGGUNA_TIM: 'sari:Sandi-Sari-123:admin\nrina:Sandi-Rina-123\nbudi:scrypt$16384$8$1$' + Buffer.alloc(16, 1).toString('base64') + '$' + Buffer.alloc(64, 2).toString('base64') + ':admin' });
  try {
    const cN = await masuk(S.B, 'nicky', 'Sandi-Nicky-123'), cS = await masuk(S.B, 'sari', 'Sandi-Sari-123'), cR = await masuk(S.B, 'rina', 'Sandi-Rina-123');
    for (const [c, nama, admin] of [[cN, 'nicky', true], [cS, 'sari', true], [cR, 'rina', false]]) {
      const r = await api(S.B, c, '/api/saya'); assert.equal(r.status, 200); assert.match(r.headers.get('content-type'), /^application\/json/);
      assert.deepEqual(await r.json(), { nama, admin, server: true, versi: 1, hasil: null });
    }
    assert.ok(S.log.join('').includes('pengguna: 4'), 'akun hash ber-akhiran :admin juga terbaca');
    assert.equal((await api(S.B, '', '/api/saya')).status, 401);
    assert.equal((await api(S.B, cR, '/api/saya', { tanpaHeader: true })).status, 403);
    assert.equal((await api(S.B, cR, '/api/saya', { hdr: { 'Sec-Fetch-Site': 'cross-site' } })).status, 403);
    assert.equal((await api(S.B, cR, '/api/saya', { hdr: { 'Sec-Fetch-Site': 'same-site' } })).status, 403);
    assert.equal((await api(S.B, cR, '/api/saya', { hdr: { Origin: 'https://jahat.example' } })).status, 403);
    assert.equal((await api(S.B, cR, '/api/saya', { hdr: { Origin: S.B, 'Sec-Fetch-Site': 'same-origin' } })).status, 200);
    assert.equal((await api(S.B, cR, '/api/tidak-ada')).status, 404);
    assert.equal((await api(S.B, cR, '/api/saya', { method: 'POST', body: {} })).status, 405);
  } finally { await S.henti(); }
});

test('server: PUT/DELETE /api/hasil (nama dari akun, skema, 413, 415, batas laju) dan GET /api/tim khusus admin', async () => {
  const S = await jalankanServer({ PENGGUNA_TIM: 'nicky:Sandi-Nicky-123:admin\nrina:Sandi-Rina-123\nbudi:Sandi-Budi-123' });
  try {
    const cN = await masuk(S.B, 'nicky', 'Sandi-Nicky-123'), cR = await masuk(S.B, 'rina', 'Sandi-Rina-123'), cB = await masuk(S.B, 'budi', 'Sandi-Budi-123');
    let r = await api(S.B, cR, '/api/hasil', { method: 'PUT', body: RINGKASAN });
    assert.equal(r.status, 200); const j = await r.json(); assert.ok(j.ok && Date.parse(j.diperbarui) <= Date.now());
    const berkas = path.join(S.data, 'hasil.json');
    const isi = JSON.parse(fs.readFileSync(berkas, 'utf8'));
    assert.equal(isi.hasil.rina.nama, 'rina', 'nama dari akun server, bukan dari body'); assert.ok(!isi.hasil.Palsu);
    assert.notEqual(isi.hasil.rina.diperbarui, RINGKASAN.diperbarui, 'diperbarui diisi server');
    assert.equal((fs.statSync(berkas).mode & 0o777).toString(8), '600');
    assert.equal((await api(S.B, cR, '/api/hasil', { method: 'PUT', body: RINGKASAN, tanpaHeader: true })).status, 403);
    assert.equal((await api(S.B, cR, '/api/hasil', { method: 'PUT', body: '{}', tipe: 'text/plain' })).status, 415);
    assert.equal((await api(S.B, cR, '/api/hasil', { method: 'PUT', body: '{rusak' })).status, 400);
    r = await api(S.B, cR, '/api/hasil', { method: 'PUT', body: { jahat: true } }); assert.equal(r.status, 400); assert.equal((await r.json()).galat, 'skema');
    // batas body 160 KB: ringkasan 400 jawaban (±45 KB, dulu > 32 KB tersimpan) diterima utuh; > 160 KB → 413
    r = await api(S.B, cR, '/api/hasil', { method: 'PUT', body: Object.assign({}, RINGKASAN, { jawaban: JAWAB400 }) }); assert.equal(r.status, 200);
    assert.equal(JSON.parse(fs.readFileSync(berkas, 'utf8')).hasil.rina.jawaban.length, 400);
    r = await api(S.B, cR, '/api/hasil', { method: 'PUT', body: Object.assign({}, RINGKASAN, { jawaban: JAWAB400.concat([JAWAB400[0]]) }) }); assert.equal(r.status, 400);
    assert.equal((await api(S.B, cR, '/api/hasil', { method: 'PUT', body: JSON.stringify({ nama: 'x'.repeat(100000) }) })).status, 400, '100 KB < batas body: sampai ke skema');
    assert.equal((await api(S.B, cR, '/api/hasil', { method: 'PUT', body: JSON.stringify({ nama: 'x'.repeat(170000) }) })).status, 413);
    r = await api(S.B, cR, '/api/hasil', { method: 'PUT', body: RINGKASAN }); assert.equal(r.status, 200);
    assert.equal((await api(S.B, cR, '/api/saya')).status, 200, 'koneksi lain tetap normal setelah 413');
    // GET /api/tim: rina 403, nicky melihat semua + daftar pengguna + online
    assert.equal((await api(S.B, cR, '/api/tim')).status, 403);
    r = await api(S.B, cN, '/api/tim'); assert.equal(r.status, 200);
    const t = await r.json();
    assert.deepEqual(t.hasil.map(x => x.id), ['rina']); assert.equal(t.hasil[0].latihan.akurasi7, 0.75);
    assert.equal(t.hasil[0].jawaban.length, 2); assert.equal(t.hasil[0].jawaban[0].s, 'A2-014'); assert.equal(t.hasil[0].jawaban[1].sim, 'sim-1');
    assert.deepEqual(t.pengguna.map(p => [p.nama, p.admin]), [['budi', false], ['nicky', true], ['rina', false]]);
    assert.ok(t.pengguna.every(p => typeof p.terakhirMasuk === 'string'));
    assert.deepEqual(t.online, ['nicky', 'rina'], 'online = permintaan bersesi < 2 menit (budi belum memanggil API)');
    assert.ok((await (await api(S.B, cR, '/api/saya')).json()).hasil, '/api/saya memberi tahu server punya ringkasan');
    // DELETE
    r = await api(S.B, cR, '/api/hasil', { method: 'DELETE' }); assert.deepEqual(await r.json(), { ok: true, dihapus: true });
    assert.ok(!JSON.parse(fs.readFileSync(berkas, 'utf8')).hasil.rina);
    // batas laju 60/menit per pengguna
    const kode = [];
    for (let i = 0; i < 61; i++) kode.push((await api(S.B, cB, '/api/hasil', { method: 'PUT', body: {} })).status);
    assert.equal(kode.filter(k => k === 200).length, 60); assert.equal(kode[60], 429);
    assert.equal((await api(S.B, cR, '/api/hasil', { method: 'PUT', body: {} })).status, 200, 'batas laju per pengguna');
    // log tanpa isi hasil
    assert.ok(!/akurasi|perKelompok|"latihan"/.test(S.log.join('')));
  } finally { await S.henti(); }
});

test('server: aliran SSE admin menerima event hasil, batas 5 koneksi, keluar mencabut sesi, SIGTERM menutup rapi', async () => {
  const S = await jalankanServer({ PENGGUNA_TIM: 'nicky:Sandi-Nicky-123:admin\nrina:Sandi-Rina-123' });
  try {
    const cN = await masuk(S.B, 'nicky', 'Sandi-Nicky-123'), cR = await masuk(S.B, 'rina', 'Sandi-Rina-123');
    assert.equal((await api(S.B, cR, '/api/tim/aliran')).status, 403);
    const ac = new AbortController();
    const r = await fetch(S.B + '/api/tim/aliran', { headers: { Cookie: cN, 'X-Requested-With': 'UKP' }, signal: ac.signal });
    assert.equal(r.status, 200); assert.match(r.headers.get('content-type'), /^text\/event-stream/);
    const rd = r.body.getReader(); const dc = new TextDecoder(); let teks = '';
    const bacaSampai = async pola => { const t0 = Date.now(); while (!pola.test(teks) && Date.now() - t0 < 3000) { const { value, done } = await rd.read(); if (done) break; teks += dc.decode(value); } return pola.test(teks); };
    assert.ok(await bacaSampai(/event: ping/));
    await api(S.B, cR, '/api/hasil', { method: 'PUT', body: RINGKASAN });
    assert.ok(await bacaSampai(/event: hasil\ndata: \{"aksi":"simpan","nama":"rina"/));
    await api(S.B, cR, '/api/hasil', { method: 'DELETE' });
    assert.ok(await bacaSampai(/"aksi":"hapus","nama":"rina"/));
    // batas 5 koneksi per admin
    const lain = []; for (let i = 0; i < 4; i++) { const c = new AbortController(); lain.push(c); const x = await fetch(S.B + '/api/tim/aliran', { headers: { Cookie: cN, 'X-Requested-With': 'UKP' }, signal: c.signal }); assert.equal(x.status, 200); }
    assert.equal((await api(S.B, cN, '/api/tim/aliran')).status, 429);
    lain.forEach(c => c.abort()); await tunggu(100);
    // POST keluar dari situs lain ditolak; dari asal sama mencabut sesi
    assert.equal((await fetch(S.B + '/keluar', { method: 'POST', headers: { Cookie: cR, 'Sec-Fetch-Site': 'cross-site' } })).status, 403);
    assert.equal((await fetch(S.B + '/keluar', { method: 'POST', headers: { Cookie: cR, Origin: S.B, 'Sec-Fetch-Site': 'same-origin', 'X-Requested-With': 'UKP' } })).status, 200);
    assert.equal((await api(S.B, cR, '/api/saya')).status, 401);
    // SIGTERM: aliran yang terbuka ditutup dengan event tutup, proses keluar cepat dengan kode 0
    const t0 = Date.now(); S.p.kill('SIGTERM');
    assert.ok(await bacaSampai(/event: tutup/));
    const kode = await new Promise(res => S.p.once('exit', res));
    assert.equal(kode, 0); assert.ok(Date.now() - t0 < 2500, 'berhenti < 2,5 dtk');
    ac.abort();
  } finally { await S.henti(); }
});

test('kelola-pengguna: tambah --admin, jadikan-admin, cabut-admin; server membaca peran baru tanpa restart', async () => {
  const S = await jalankanServer({});
  const cli = (...a) => execFileSync(process.execPath, [path.join(DEPLOY, 'kelola-pengguna.js'), ...a], { env: { PATH: process.env.PATH, DATA_DIR: S.data }, encoding: 'utf8' });
  try {
    assert.match(cli('tambah', 'ketua', '--sandi', 'Sandi-Ketua-123', '--admin'), /sebagai admin/);
    assert.match(cli('tambah', 'anggota', '--sandi', 'Sandi-Anggota-123'), /ditambahkan\./);
    const d = JSON.parse(fs.readFileSync(path.join(S.data, 'pengguna.json'), 'utf8'));
    assert.equal(d.pengguna.ketua.admin, true); assert.equal(d.pengguna.anggota.admin, false);
    assert.match(cli('daftar'), /ketua\s+admin/);
    const cA = await masuk(S.B, 'anggota', 'Sandi-Anggota-123');
    assert.equal((await api(S.B, cA, '/api/tim')).status, 403);
    assert.match(cli('jadikan-admin', 'anggota'), /sekarang admin/);
    await tunggu(2200); // server memeriksa perubahan pengguna.json tiap 2 dtk
    assert.equal((await (await api(S.B, cA, '/api/saya')).json()).admin, true, 'peran baru berlaku tanpa login ulang');
    assert.equal((await api(S.B, cA, '/api/tim')).status, 200);
    assert.match(cli('cabut-admin', 'anggota'), /dicabut/);
    await tunggu(2200);
    assert.equal((await api(S.B, cA, '/api/tim')).status, 403);
    assert.throws(() => cli('jadikan-admin', 'tidakada'), /tidak ada/);
  } finally { await S.henti(); }
});

// ---------- mode masuk nama (MASUK_NAMA=1) ----------
async function ambilCsrf(B, q) { const r0 = await fetch(B + '/masuk' + (q || '')); return { csrf: /ukp_csrf=([^;]+)/.exec(r0.headers.get('set-cookie'))[1], html: await r0.text() }; }
async function kirimMasuk(B, isian) {
  const { csrf } = await ambilCsrf(B);
  const r = await fetch(B + '/masuk', { method: 'POST', redirect: 'manual', headers: { 'Content-Type': 'application/x-www-form-urlencoded', Cookie: 'ukp_csrf=' + csrf, Origin: B },
    body: new URLSearchParams(Object.assign({ csrf, lanjut: '/' }, isian)) });
  const sc = r.headers.get('set-cookie') || ''; const m = /(?:^|[\s,])ukp_sesi=([^;]+)/.exec(sc);
  return { status: r.status, cookie: m ? 'ukp_sesi=' + m[1] : null, sc, teks: r.status === 303 ? '' : await r.text() };
}
const masukNama = (B, nama) => kirimMasuk(B, { tahap: 'nama', nama });
const bacaPenggunaJson = S => JSON.parse(fs.readFileSync(path.join(S.data, 'pengguna.json'), 'utf8')).pengguna;
const ADMIN_ENV = { MASUK_NAMA: '1', ADMIN_USER: 'nicky', ADMIN_PASS: 'Sandi-Nicky-123' };

test('masuk nama: halaman hanya kolom nama; nama baru → akun tanpa sandi; nama sama → akun sama; nama admin/bersandi → tahap sandi', async () => {
  const S = await jalankanServer(Object.assign({ PENGGUNA_TIM: 'sari:Sandi-Sari-123' }, ADMIN_ENV));
  const cli = (...a) => execFileSync(process.execPath, [path.join(DEPLOY, 'kelola-pengguna.js'), ...a], { env: { PATH: process.env.PATH, DATA_DIR: S.data }, encoding: 'utf8' });
  try {
    assert.ok(S.log.join('').includes('mode masuk nama AKTIF'));
    const { html } = await ambilCsrf(S.B);
    assert.match(html, /<label for="nama">Nama Anda<\/label>/); assert.match(html, /name="tahap" value="nama"/);
    assert.ok(!/name="sandi"/.test(html), 'tahap nama tanpa kolom sandi'); assert.ok(!/datalist/.test(html), 'tanpa DAFTAR_NAMA tidak ada datalist');
    assert.match(html, /href="\/masuk\?admin=1"[^>]*>Masuk sebagai admin</);
    const adm = (await ambilCsrf(S.B, '?admin=1')).html;
    assert.match(adm, /name="sandi"/); assert.match(adm, /name="tahap" value="sandi"/); assert.match(adm, />Masuk dengan nama saja</);

    // nama baru → akun dibuat (tanpa sandi, admin:false, namaTampil seperti diketik dengan spasi dirapikan)
    const m1 = await masukNama(S.B, '  Rina   Putri ');
    assert.equal(m1.status, 303); assert.ok(m1.cookie);
    assert.ok(m1.sc.includes('ukp_nama=' + encodeURIComponent('rina-putri|Rina Putri')), 'cookie ukp_nama membawa nama tampilan');
    let u = bacaPenggunaJson(S);
    assert.deepEqual(Object.keys(u).sort(), ['nicky', 'rina-putri']);
    assert.equal(u['rina-putri'].tanpaSandi, true); assert.equal(u['rina-putri'].namaTampil, 'Rina Putri'); assert.equal(u['rina-putri'].admin, false); assert.ok(!u['rina-putri'].hash);
    assert.deepEqual(await (await api(S.B, m1.cookie, '/api/saya')).json(), { nama: 'rina-putri', admin: false, server: true, versi: 1, hasil: null, tanpaSandi: true, namaTampil: 'Rina Putri' });
    assert.equal((await api(S.B, m1.cookie, '/api/tim')).status, 403, 'anggota tanpa sandi bukan admin');

    // nama sama (huruf/spasi berbeda) → akun sama; hasil terkumpul di satu baris dasbor dengan namaTampil
    const m2 = await masukNama(S.B, 'rina putri');
    assert.equal(m2.status, 303); assert.notEqual(m2.cookie, m1.cookie);
    u = bacaPenggunaJson(S); assert.equal(Object.keys(u).length, 2); assert.equal(u['rina-putri'].namaTampil, 'Rina Putri', 'nama tampilan pertama dipertahankan');
    assert.equal((await api(S.B, m1.cookie, '/api/hasil', { method: 'PUT', body: RINGKASAN })).status, 200);
    assert.equal((await api(S.B, m2.cookie, '/api/hasil', { method: 'PUT', body: RINGKASAN })).status, 200);
    assert.deepEqual(Object.keys(JSON.parse(fs.readFileSync(path.join(S.data, 'hasil.json'), 'utf8')).hasil), ['rina-putri']);

    // nama admin (huruf besar pun) → tahap kedua dengan kolom sandi; tanpa sesi
    const n1 = await masukNama(S.B, 'Nicky');
    assert.equal(n1.status, 200); assert.equal(n1.cookie, null);
    assert.match(n1.teks, /memakai kata sandi/); assert.match(n1.teks, /name="sandi"/); assert.match(n1.teks, /name="tahap" value="sandi"/); assert.match(n1.teks, /value="Nicky"/);
    assert.equal((await kirimMasuk(S.B, { tahap: 'sandi', nama: 'Nicky', sandi: 'salah-sekali' })).status, 401);
    const n2 = await kirimMasuk(S.B, { tahap: 'sandi', nama: 'Nicky', sandi: 'Sandi-Nicky-123' });
    assert.equal(n2.status, 303); assert.ok(/ukp_nama=;/.test(n2.sc), 'akun bersandi: cookie ukp_nama dihapus');
    const sayaN = await (await api(S.B, n2.cookie, '/api/saya')).json();
    assert.equal(sayaN.admin, true); assert.ok(!('tanpaSandi' in sayaN));
    // anggota bersandi (PENGGUNA_TIM) juga tidak bisa dipakai lewat jalur nama
    const s1 = await masukNama(S.B, 'sari'); assert.equal(s1.status, 200); assert.equal(s1.cookie, null); assert.match(s1.teks, /name="sandi"/);
    assert.equal((await kirimMasuk(S.B, { tahap: 'sandi', nama: 'sari', sandi: 'Sandi-Sari-123' })).status, 303);
    // akun tanpa sandi tidak bisa masuk lewat tahap sandi dengan sandi apa pun
    assert.equal((await kirimMasuk(S.B, { tahap: 'sandi', nama: 'Rina Putri', sandi: 'apa-saja-123' })).status, 401);
    assert.deepEqual(Object.keys(bacaPenggunaJson(S)).sort(), ['nicky', 'rina-putri'], 'tidak ada akun untuk nicky/sari dari jalur nama');

    // nama tidak sah → 400, tidak ada akun dibuat
    for (const buruk of ['a', 'x'.repeat(41), '<b>Rina</b>', '-rina', 'rina_putri', '   ']) {
      const r = await masukNama(S.B, buruk); assert.equal(r.status, 400, JSON.stringify(buruk)); assert.equal(r.cookie, null); assert.match(r.teks, /2–40 karakter/);
    }
    assert.equal(Object.keys(bacaPenggunaJson(S)).length, 2);

    // dasbor admin: nama tampilan di hasil dan daftar pengguna
    const t = await (await api(S.B, n2.cookie, '/api/tim')).json();
    assert.deepEqual(t.hasil.map(x => [x.id, x.nama]), [['rina-putri', 'Rina Putri']]);
    const pr = t.pengguna.find(p => p.nama === 'rina-putri'); assert.equal(pr.namaTampil, 'Rina Putri'); assert.equal(pr.tanpaSandi, true); assert.equal(pr.admin, false);

    // CLI: daftar menandai akun tanpa sandi; jadikan-admin ditolak; hapus dengan nama seperti diketik → sesi keluar
    assert.match(cli('daftar'), /rina-putri\s+tanpa sandi.*\(Rina Putri\)/);
    assert.throws(() => cli('jadikan-admin', 'rina-putri'), /tidak bisa menjadi admin/);
    assert.match(cli('hapus', 'Rina Putri'), /dihapus/);
    await tunggu(2200);
    assert.equal((await api(S.B, m1.cookie, '/api/saya')).status, 401, 'akun dihapus → sesi berakhir');
    assert.equal((await api(S.B, n2.cookie, '/api/tim')).status, 200);
    // nama yang sama setelah dihapus → akun baru (sesi lama tetap tidak berlaku)
    const m3 = await masukNama(S.B, 'Rina Putri'); assert.equal(m3.status, 303);
    assert.equal((await api(S.B, m2.cookie, '/api/saya')).status, 401);
    assert.equal((await api(S.B, m3.cookie, '/api/saya')).status, 200);
  } finally { await S.henti(); }
});

test('masuk nama: DAFTAR_NAMA membatasi nama + datalist; BATAS_AKUN total; BATAS_AKUN_IP per jam', async () => {
  const S = await jalankanServer(Object.assign({ DAFTAR_NAMA: 'Rina Putri, Budi\nCitra', BATAS_AKUN: '2' }, ADMIN_ENV));
  try {
    const { html } = await ambilCsrf(S.B);
    assert.match(html, /list="daftar-nama"/);
    assert.match(html, /<datalist id="daftar-nama"><option value="Budi"><option value="Citra"><option value="Rina Putri"><\/datalist>/);
    const d1 = await masukNama(S.B, 'Dodi'); assert.equal(d1.status, 403); assert.match(d1.teks, /tidak ada di daftar tim/); assert.equal(d1.cookie, null);
    const b1 = await masukNama(S.B, 'budi'); assert.equal(b1.status, 303);
    assert.equal(bacaPenggunaJson(S).budi.namaTampil, 'Budi', 'nama tampilan mengikuti DAFTAR_NAMA');
    assert.equal((await masukNama(S.B, 'RINA  PUTRI')).status, 303);
    const c1 = await masukNama(S.B, 'Citra'); assert.equal(c1.status, 403); assert.match(c1.teks, /mencapai batas/);
    assert.ok(!bacaPenggunaJson(S).citra);
    assert.equal((await masukNama(S.B, 'Budi')).status, 303, 'akun yang sudah ada tetap bisa masuk walau batas tercapai');
    assert.equal((await masukNama(S.B, 'Nicky')).status, 200, 'nama admin (di luar daftar) tetap ke tahap sandi');
  } finally { await S.henti(); }
  const S2 = await jalankanServer(Object.assign({ BATAS_AKUN_IP: '3' }, ADMIN_ENV));
  try {
    for (const n of ['Anggota Satu', 'Anggota Dua', 'Anggota Tiga']) assert.equal((await masukNama(S2.B, n)).status, 303, n);
    const r = await masukNama(S2.B, 'Anggota Empat'); assert.equal(r.status, 429); assert.match(r.teks, /Terlalu banyak akun baru/);
    assert.equal((await masukNama(S2.B, 'anggota satu')).status, 303, 'akun lama tetap bisa masuk dari IP yang sama');
  } finally { await S2.henti(); }
});

test('masuk nama: server menolak start tanpa admin bersandi; mode dimatikan → akun tanpa sandi tidak berlaku', async () => {
  for (const env of [{ MASUK_NAMA: '1' }, { MASUK_NAMA: '1', PENGGUNA_TIM: 'rina:Sandi-Rina-123' }, { MASUK_NAMA: '1', ADMIN_USER: 'nicky', ADMIN_PASS: 'pendek' }]) {
    const S = await jalankanServer(env);
    try {
      const kode = S.p.exitCode != null ? S.p.exitCode : await new Promise(r => S.p.once('exit', r));
      assert.equal(kode, 1, JSON.stringify(env)); assert.match(S.log.join(''), /butuh minimal satu admin BERSANDI/);
    } finally { await S.henti(); }
  }
  const S = await jalankanServer(ADMIN_ENV, { simpan: true });
  let cR;
  try { const m = await masukNama(S.B, 'Rina'); assert.equal(m.status, 303); cR = m.cookie; assert.equal((await api(S.B, cR, '/api/saya')).status, 200); }
  finally { await S.henti(); }
  const S2 = await jalankanServer({ ADMIN_USER: 'nicky', ADMIN_PASS: 'Sandi-Nicky-123' }, { dir: S.dir });
  try {
    assert.equal((await api(S2.B, cR, '/api/saya')).status, 401, 'sesi akun tanpa sandi tidak berlaku setelah mode masuk nama dimatikan');
    const { html } = await ambilCsrf(S2.B);
    assert.match(html, /name="sandi"/); assert.ok(!/Masuk sebagai admin/.test(html));
    assert.equal((await kirimMasuk(S2.B, { nama: 'rina', sandi: 'apa-saja-123' })).status, 401);
    assert.equal(bacaPenggunaJson(S2).rina.tanpaSandi, true, 'akun tetap tersimpan (aktif lagi bila MASUK_NAMA=1)');
    assert.equal((await kirimMasuk(S2.B, { nama: 'nicky', sandi: 'Sandi-Nicky-123' })).status, 303);
  } finally { await S2.henti(); }
});

test('masuk nama: restart dengan DATA_DIR kosong (Render free tanpa disk) → sesi anggota tetap 200; akun dipulihkan; hapus admin tetap berlaku', async () => {
  const RAHASIA = { RAHASIA_SESI: 'r'.repeat(40) };
  const env = Object.assign({}, ADMIN_ENV, RAHASIA);
  const S = await jalankanServer(env, { simpan: true });
  let cR, cN;
  try {
    const m = await masukNama(S.B, 'Rina Wati'); assert.equal(m.status, 303); cR = m.cookie;
    cN = await masuk(S.B, 'nicky', 'Sandi-Nicky-123');
    assert.equal((await api(S.B, cR, '/api/saya')).status, 200);
  } finally { await S.henti(); }
  fs.rmSync(path.join(S.dir, 'data'), { recursive: true, force: true }); // disk sementara hilang saat layanan tidur
  const S2 = await jalankanServer(env, { dir: S.dir, simpan: true });
  const cli = (...a) => execFileSync(process.execPath, [path.join(DEPLOY, 'kelola-pengguna.js'), ...a], { env: { PATH: process.env.PATH, DATA_DIR: S2.data }, encoding: 'utf8' });
  try {
    const r = await api(S2.B, cR, '/api/saya'); assert.equal(r.status, 200, 'sesi anggota tetap berlaku setelah restart');
    const o = await r.json(); assert.equal(o.nama, 'rina-wati'); assert.equal(o.namaTampil, 'Rina Wati'); assert.equal(o.admin, false);
    assert.equal((await api(S2.B, cN, '/api/saya')).status, 200, 'sesi admin tetap berlaku');
    assert.equal(bacaPenggunaJson(S2)['rina-wati'].tanpaSandi, true, 'akun dibuat ulang');
    const m2 = await masukNama(S2.B, 'Rina Wati'); assert.equal(m2.status, 303);
    assert.equal((await api(S2.B, cR, '/api/saya')).status, 200, 'masuk lagi dengan nama sama tidak menggugurkan cookie lama');
    // klaim bertanda tangan yang diubah ditolak
    const [tok, muatan, tanda] = cR.slice('ukp_sesi='.length).split('.');
    const palsu = Buffer.from(JSON.stringify(Object.assign(JSON.parse(Buffer.from(muatan, 'base64url').toString()), { u: 'budi' }))).toString('base64url');
    const tokBaru = require('node:crypto').randomBytes(32).toString('base64url');
    assert.equal((await api(S2.B, 'ukp_sesi=' + tokBaru + '.' + palsu + '.' + tanda, '/api/saya')).status, 401, 'muatan diubah → tanda tangan tidak cocok');
    assert.equal((await api(S2.B, 'ukp_sesi=' + tokBaru + '.' + muatan + '.' + tanda, '/api/saya')).status, 401, 'tanda tangan terikat ke token');
    assert.ok(tok);
    assert.match(cli('hapus', 'rina-wati'), /dihapus/);
    await tunggu(2200);
    assert.equal((await api(S2.B, cR, '/api/saya')).status, 401, 'akun yang dihapus admin tidak dipulihkan dari sesi');
    assert.ok(!bacaPenggunaJson(S2)['rina-wati']);
    const m3 = await masukNama(S2.B, 'Rina Wati'); assert.equal(m3.status, 303);
    assert.equal(bacaPenggunaJson(S2)['rina-wati'].generasi, 1, 'akun baru setelah dihapus mendapat generasi baru');
    assert.equal((await api(S2.B, m3.cookie, '/api/saya')).status, 200);
    assert.equal((await api(S2.B, cR, '/api/saya')).status, 401, 'sesi akun lama tetap tidak berlaku');
  } finally { await S2.henti(); }
  // mode masuk nama dimatikan: klaim tidak memulihkan akun
  fs.rmSync(path.join(S.dir, 'data'), { recursive: true, force: true });
  const S3 = await jalankanServer(Object.assign({ ADMIN_USER: 'nicky', ADMIN_PASS: 'Sandi-Nicky-123' }, RAHASIA), { dir: S.dir });
  try { assert.equal((await api(S3.B, cR, '/api/saya')).status, 401); } finally { await S3.henti(); }
});
