/* Uji v9.6.0: alat potret layar (tools/potret-layar.js) dan workflow WebKit-nya.
   - Gambar dipotong menjadi catatan check run (paling banyak 60.000 huruf base64 per catatan) dan disusun kembali tanpa cacat.
   - Daftar layar: tiap nama punya langkah, tag unik, ada HP terang, HP gelap, dan laptop.
   - Workflow: versi image Playwright sama dengan versi paket npm, izin checks: write, dan tidak memasang paket sistem.
   Tanpa peramban. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const ROOT = path.join(__dirname, '..');
const alat = require(path.join(ROOT, 'tools', 'potret-layar.js'));

describe('v9.6.0: potongan gambar untuk check run', () => {
  const gambar = [
    { nama: 'beranda-hp-1', buf: crypto.randomBytes(130001) },
    { nama: 'latih-pembahasan-hp-gelap-2', buf: crypto.randomBytes(7) },
    { nama: 'bersama-kunci-laptop', buf: crypto.randomBytes(45000) },
  ];
  const catatan = alat.potongGambar(gambar);
  it('tiap catatan paling banyak POTONG huruf, di bawah batas 64 KB, dan berjudul "nama [i/n]"', () => {
    assert.ok(alat.POTONG <= 64000);
    for (const c of catatan) {
      assert.ok(c.raw_details.length > 0 && c.raw_details.length <= alat.POTONG, c.title);
      assert.match(c.title, /^.+ \[\d+\/\d+\]$/);
      assert.equal(c.annotation_level, 'notice'); assert.equal(c.start_line, 1); assert.equal(c.end_line, 1);
      assert.ok(fs.existsSync(path.join(ROOT, c.path)), 'path catatan menunjuk berkas yang ada: ' + c.path);
    }
    assert.equal(catatan.filter(c => c.title.startsWith('beranda-hp-1 ')).length, 3);
  });
  it('disusun kembali persis sama, juga bila urutan catatan terbalik', () => {
    for (const urut of [catatan, catatan.slice().reverse()]) {
      const hasil = alat.susun(urut); assert.equal(hasil.length, gambar.length);
      for (const g of gambar) { const h = hasil.find(x => x.nama === g.nama); assert.ok(h && h.lengkap, g.nama); assert.ok(h.buf.equals(g.buf), g.nama + ' sama bita demi bita'); }
    }
  });
  it('potongan yang hilang membuat gambar itu ditandai tidak lengkap, yang lain tetap utuh', () => {
    for (const buang of [0, 1, 2]) {
      const hasil = alat.susun(catatan.filter((_, i) => i !== buang));
      assert.equal(hasil.find(x => x.nama === 'beranda-hp-1').lengkap, false, 'potongan ' + (buang + 1) + ' hilang');
      assert.equal(hasil.find(x => x.nama === 'bersama-kunci-laptop').lengkap, true);
    }
  });
  it('catatan yang bukan potongan gambar diabaikan', () => {
    const hasil = alat.susun(catatan.concat([{ title: 'Potret layar webkit', raw_details: 'x' }, { title: null }, {}]));
    assert.equal(hasil.length, gambar.length);
  });
});

describe('v9.6.0: daftar layar yang dipotret', () => {
  it('tiap layar punya langkah dan tag unik', () => {
    const tag = alat.LAYAR.map(l => l.tag); assert.equal(new Set(tag).size, tag.length);
    for (const l of alat.LAYAR) { assert.ok(alat.langkah.includes(l.nama), 'langkah untuk ' + l.nama); assert.ok(l.n >= 1 && l.n <= 3); assert.ok(['hp', 'laptop'].includes(l.alat)); assert.ok(['light', 'dark'].includes(l.tema)); }
  });
  it('mencakup layar soal dan pembahasan di HP terang dan gelap, serta papan bersama di laptop', () => {
    const ada = t => alat.LAYAR.some(l => l.tag === t);
    for (const t of ['beranda-hp', 'latih-soal-hp', 'latih-pembahasan-hp', 'latih-pembahasan-hp-gelap', 'simulasi-atur-hp', 'simulasi-jalan-hp', 'simulasi-hasil-hp', 'bersama-papan-laptop', 'bersama-kunci-laptop', 'bersama-kunci-laptop-gelap']) assert.ok(ada(t), t);
  });
  it('layar bersama memakai nama contoh, bukan nama anggota tim', () => {
    const src = fs.readFileSync(path.join(ROOT, 'tools', 'potret-layar.js'), 'utf8');
    assert.match(src, /const PESERTA = \['Nicky', 'Mita', 'Nora'\];/);
    assert.match(src, /serviceWorkers: 'block'/);
  });
});

describe('v9.6.0: workflow potret WebKit', () => {
  const y = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'potret-webkit.yml'), 'utf8');
  const tanpaKomentar = y.split('\n').filter(b => !/^\s*#/.test(b)).join('\n');
  it('versi image Playwright sama dengan versi paket npm, dan sama dengan workflow room', () => {
    const vImage = (y.match(/image: mcr\.microsoft\.com\/playwright:v(\d+\.\d+\.\d+)-noble/) || [])[1];
    const vNpm = (tanpaKomentar.match(/playwright@(\d+\.\d+\.\d+)/) || [])[1];
    assert.ok(vImage, 'image Playwright bernomor versi'); assert.equal(vNpm, vImage);
    const room = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'cek-jalur-room.yml'), 'utf8');
    assert.equal((room.match(/image: mcr\.microsoft\.com\/playwright:v(\d+\.\d+\.\d+)-noble/) || [])[1], vImage, 'dua workflow memakai image yang sama');
    assert.ok(!/install --with-deps/.test(tanpaKomentar));
  });
  it('izin sesempit mungkin: contents read dan checks write saja', () => {
    const izin = tanpaKomentar.slice(tanpaKomentar.indexOf('permissions:'), tanpaKomentar.indexOf('concurrency:'));
    assert.deepEqual(izin.split('\n').slice(1).map(b => b.trim()).filter(Boolean).sort(), ['checks: write', 'contents: read']);
  });
  it('menjalankan alat potret dengan WebKit, mengirim gambar, dan tidak menggagalkan rilis', () => {
    assert.match(tanpaKomentar, /BROWSER: webkit/); assert.match(tanpaKomentar, /KIRIM: '1'/);
    assert.match(tanpaKomentar, /node tools\/potret-layar\.js potret \. /);
    assert.match(tanpaKomentar, /continue-on-error: true/);
    assert.match(tanpaKomentar, /- 'css\/\*\*'/); assert.match(tanpaKomentar, /- 'js\/\*\*'/);
    assert.ok(alat.NAMA_CEK.startsWith('Potret layar'));
  });
});

/* v9.6.5: potret di mesin Safari versi lama (Playwright lama, Node 16) */
describe('v9.6.5: workflow potret WebKit lama', () => {
  const y = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'potret-webkit-lama.yml'), 'utf8');
  const tanpaKomentar = y.split('\n').filter(b => !/^\s*#/.test(b)).join('\n');
  it('tiap entri matriks: versi paket npm sama dengan versi image, dan paket dipasang dari matriks', () => {
    const entri = [...tanpaKomentar.matchAll(/- playwright: '(\d+\.\d+\.\d+)'\s*\n\s*image: mcr\.microsoft\.com\/playwright:v(\d+\.\d+\.\d+)-(\w+)/g)];
    assert.deepEqual(entri.map(m => m[1]), ['1.23.0', '1.34.0']);
    for (const m of entri) assert.equal(m[1], m[2], 'versi paket ' + m[1] + ' = versi image ' + m[2]);
    assert.deepEqual(entri.map(m => m[3]), ['focal', 'jammy']);
    assert.match(tanpaKomentar, /image: \$\{\{ matrix\.image \}\}/);
    assert.match(tanpaKomentar, /npm install [^\n]*playwright@\$\{\{ matrix\.playwright \}\}/);
    assert.match(tanpaKomentar, /fail-fast: false/); assert.match(tanpaKomentar, /continue-on-error: true/);
    assert.ok(!/install --with-deps/.test(tanpaKomentar));
  });
  it('izin hanya contents read dan checks write, pemicu push main dan manual', () => {
    const izin = tanpaKomentar.slice(tanpaKomentar.indexOf('permissions:'), tanpaKomentar.indexOf('concurrency:'));
    assert.deepEqual(izin.split('\n').slice(1).map(b => b.trim()).filter(Boolean).sort(), ['checks: write', 'contents: read']);
    assert.match(tanpaKomentar, /workflow_dispatch:/); assert.match(tanpaKomentar, /branches: \[main\]/);
    for (const p of ["'css/**'", "'js/**'", "'index.html'", "'tools/potret-layar.js'", "'.github/workflows/potret-webkit-lama.yml'"]) assert.ok(tanpaKomentar.includes('- ' + p), p);
  });
  it('menjalankan alat dengan WebKit, KIRIM, LABEL_CEK=lama, dan daftar layar terbatas yang semuanya ada di LAYAR', () => {
    assert.match(tanpaKomentar, /BROWSER: webkit/); assert.match(tanpaKomentar, /KIRIM: '1'/); assert.match(tanpaKomentar, /LABEL_CEK: lama/);
    assert.match(tanpaKomentar, /GITHUB_TOKEN: \$\{\{ github\.token \}\}/);
    const m = tanpaKomentar.match(/node tools\/potret-layar\.js potret \. \S+ (\S+)/); assert.ok(m, 'argumen kelima ada');
    const daftar = m[1].split(','); const tag = new Set(alat.LAYAR.map(l => l.tag));
    assert.ok(daftar.length >= 10 && daftar.length < alat.LAYAR.length, 'terbatas: ' + daftar.length);
    for (const t of daftar) assert.ok(tag.has(t), 'tag ada di LAYAR: ' + t);
    for (const t of ['beranda-hp', 'mabar-lobi-hp', 'latih-pembahasan-hp', 'bersama-papan-laptop', 'referensi-laptop']) assert.ok(daftar.includes(t), t);
  });
  it('nama job berkurung, jadi tidak ikut diambil sebagai check run potret', () => {
    const nama = (tanpaKomentar.match(/\n    name: (.+)/) || [])[1]; assert.ok(nama && /\(/.test(nama), nama);
    assert.equal(alat.pilihCek([{ name: nama.replace('${{ matrix.playwright }}', '1.23.0') }]).length, 0);
  });
});

describe('v9.6.5: jalan Playwright lama', () => {
  it('membandingkan versi sebagai angka, bukan teks', () => {
    assert.equal(alat.bandingVersi('1.9.0', '1.24.0'), -1); assert.equal(alat.bandingVersi('1.24.0', '1.24'), 0); assert.equal(alat.bandingVersi('1.65.0', '1.24.0'), 1);
  });
  it('serviceWorkers: block hanya untuk Playwright 1.24 ke atas', () => {
    for (const v of ['1.17.0', '1.23.0', '1.23.2', '1.9.0']) { assert.equal(alat.bisaBlokSW(v), false, v); assert.deepEqual(alat.opsiKonteks(v), {}, v); }
    for (const v of ['1.24.0', '1.34.0', '1.65.0', '2.0.0']) assert.deepEqual(alat.opsiKonteks(v), { serviceWorkers: 'block' }, v);
  });
  it('PW_ANGGAP_VERSI memaksa versi yang dianggap terpasang', () => {
    const lama = process.env.PW_ANGGAP_VERSI; process.env.PW_ANGGAP_VERSI = '1.23.0';
    try { assert.equal(alat.versiPlaywright(), '1.23.0'); } finally { if (lama === undefined) delete process.env.PW_ANGGAP_VERSI; else process.env.PW_ANGGAP_VERSI = lama; }
  });
  it('navigator.serviceWorker disembunyikan sebelum skrip aplikasi bila opsi itu tidak ada', () => {
    const src = fs.readFileSync(path.join(ROOT, 'tools', 'potret-layar.js'), 'utf8');
    assert.match(src, /if \(!blokSW\) await ctx\.addInitScript\(sembunyikanSW\)/);
    assert.match(src, /delete Navigator\.prototype\.serviceWorker/);
    assert.ok(!/\bfetch\(/.test(src), 'tanpa fetch (Node 16)');
  });
  it('profil HP punya cadangan bila iPhone 13 tidak dikenal', () => {
    const tiruan = { viewport: { width: 390, height: 664 }, userAgent: 'x', isMobile: true, hasTouch: true, deviceScaleFactor: 3, defaultBrowserType: 'webkit' };
    const a = alat.opsiHP({ 'iPhone 13': tiruan }, 'webkit'); assert.equal(a.deviceScaleFactor, 1); assert.equal(a.defaultBrowserType, undefined); assert.equal(tiruan.deviceScaleFactor, 3, 'profil asli tidak diubah');
    assert.equal(alat.opsiHP({ 'iPhone 12': tiruan }, 'webkit').userAgent, 'x');
    const c = alat.opsiHP({}, 'webkit'); assert.deepEqual(c.viewport, { width: 390, height: 664 }); assert.equal(c.isMobile, true); assert.match(c.userAgent, /iPhone/);
    assert.equal(alat.opsiHP(undefined, 'firefox').isMobile, undefined);
  });
});

describe('v9.6.5: nama check run', () => {
  it('jalur terbaru tetap "Potret layar webkit"; dengan LABEL_CEK memuat label dan versi mesin', () => {
    assert.equal(alat.namaCek('webkit', '26.0', ''), 'Potret layar webkit');
    assert.equal(alat.namaCek('webkit', '15.4', 'lama'), 'Potret layar webkit lama 15.4');
    assert.equal(alat.namaCek('webkit', '16.4', 'lama'), 'Potret layar webkit lama 16.4');
  });
  it('perintah ambil memilih semua check run "Potret layar " dan "Potret room ", ke subfolder masing-masing', () => {
    const cek = [{ id: 1, name: 'Potret layar webkit' }, { id: 2, name: 'Potret layar webkit lama 15.4' }, { id: 3, name: 'Potret layar webkit lama 16.4' }, { id: 4, name: 'Potret room webkit' },
      { id: 5, name: 'Potret layar WebKit (profil iPhone)' }, { id: 6, name: 'Potret Safari lama (Playwright 1.23.0)' }, { id: 7, name: 'Uji jalur publik' }];
    const pilih = alat.pilihCek(cek); assert.deepEqual(pilih.map(c => c.id), [1, 2, 3, 4]);
    const t = new Set(); const sub = pilih.map(c => alat.namaSub(c.name, c.id, t));
    assert.deepEqual(sub, ['potret-layar-webkit', 'potret-layar-webkit-lama-15.4', 'potret-layar-webkit-lama-16.4', 'potret-room-webkit']);
    assert.equal(alat.namaSub('Potret layar webkit', 9, t), 'potret-layar-webkit-9', 'nama kembar tidak menimpa');
  });
});

describe('v9.6.5: pengiriman ke check run tanpa fetch (server tiruan)', () => {
  const http = require('node:http');
  async function denganServer(jawab, kerja) {
    const catat = [];
    const server = http.createServer((req, res) => {
      const b = []; req.on('data', c => b.push(c)); req.on('end', () => {
        const isi = b.length ? JSON.parse(Buffer.concat(b).toString('utf8')) : null; catat.push({ cara: req.method, url: req.url, kepala: req.headers, isi });
        const [status, data] = jawab(req, catat.length); res.writeHead(status, { 'content-type': 'application/json' }); res.end(JSON.stringify(data));
      });
    });
    await new Promise(r => server.listen(0, '127.0.0.1', r));
    const simpan = {}; const env = { GITHUB_API_URL: 'http://127.0.0.1:' + server.address().port, GITHUB_REPOSITORY: 'contoh/repo', GITHUB_SHA: 'abc123', GITHUB_TOKEN: 'token-uji' };
    for (const k of Object.keys(env)) { simpan[k] = process.env[k]; process.env[k] = env[k]; }
    const fetchAsli = globalThis.fetch; globalThis.fetch = () => { throw new Error('fetch tidak boleh dipakai'); };
    try { return await kerja(catat); } finally {
      globalThis.fetch = fetchAsli; server.close();
      for (const k of Object.keys(env)) { if (simpan[k] === undefined) delete process.env[k]; else process.env[k] = simpan[k]; }
    }
  }
  const gambar = [{ nama: 'beranda-hp', buf: crypto.randomBytes(130001) }, { nama: 'materi-hp', buf: crypto.randomBytes(50000) }];
  it('buat check run, catatan bertahap, selesai; PATCH 404 pertama diulang', async () => {
    let patch = 0;
    await denganServer((req) => {
      if (req.method === 'POST') return [201, { id: 77 }];
      patch++; return patch === 1 ? [404, { message: 'Not Found' }] : [200, { id: 77 }];
    }, async catat => {
      const id = await alat.kirim(gambar, 'webkit 15.4 · uji', [{ ok: true, tag: 'beranda-hp', info: '' }, { ok: false, tag: 'materi-hp', info: 'x' }], 'Potret layar webkit lama 15.4');
      assert.equal(id, 77);
      assert.deepEqual(catat.map(c => c.cara + ' ' + c.url), ['POST /repos/contoh/repo/check-runs', 'PATCH /repos/contoh/repo/check-runs/77', 'PATCH /repos/contoh/repo/check-runs/77', 'PATCH /repos/contoh/repo/check-runs/77', 'PATCH /repos/contoh/repo/check-runs/77']);
      assert.equal(catat[0].isi.name, 'Potret layar webkit lama 15.4'); assert.equal(catat[0].isi.head_sha, 'abc123'); assert.equal(catat[0].isi.status, 'in_progress');
      assert.equal(catat[0].kepala.authorization, 'Bearer token-uji'); assert.equal(catat[0].kepala['content-type'], 'application/json');
      assert.deepEqual(catat[1].isi, catat[2].isi, 'PATCH yang 404 dikirim ulang sama persis');
      const catatan = catat.slice(2, 4).flatMap(c => c.isi.output.annotations); assert.equal(catatan.length, 5);
      for (const g of gambar) assert.ok(alat.susun(catatan).find(x => x.nama === g.nama).buf.equals(g.buf), g.nama);
      assert.equal(catat[4].isi.status, 'completed'); assert.equal(catat[4].isi.conclusion, 'neutral');
    });
  });
  it('POST 429 diulang; galat 422 tidak diulang', async () => {
    await denganServer((req, n) => (n === 1 ? [429, {}] : req.method === 'POST' ? [201, { id: 5 }] : [200, {}]), async catat => {
      assert.equal(await alat.kirim([], 'r', [], 'Potret layar webkit'), 5);
      assert.deepEqual(catat.map(c => c.cara), ['POST', 'POST', 'PATCH']); assert.equal(catat[2].isi.conclusion, 'success');
    });
    await denganServer(() => [422, { message: 'Validation Failed' }], async catat => {
      await assert.rejects(alat.kirim([], 'r', [], 'x'), /POST \/check-runs → 422/); assert.equal(catat.length, 1);
    });
  });
});
