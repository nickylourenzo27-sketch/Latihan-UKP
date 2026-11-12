/* Uji v9.4.1.
   - sw.js: pra-muat meminta alamat BERCAP (?v=<VERSI>, persis seperti dirujuk index.html) supaya isi yang baru diunduh halaman dipakai
     ulang dari cache HTTP; kunci cache tetap alamat polos; gagal → alamat polos seperti dulu.
   - js/views-ruang.js: wilayah status HP tidak ditulis ulang bila isinya sama.
   - js/app.js: teks toast offline tanpa tanda pisah panjang. css: nama di "Jawaban tiap orang" tidak terpotong lebih dulu.
   Tanpa DOM sungguhan. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const baca = p => fs.readFileSync(path.join(ROOT, p), 'utf8');
const LINGKUP = 'https://contoh.github.io/Latihan-UKP/';

// sw.js di lingkungan tiruan, dengan pemasangan (install) yang sungguh dijalankan
function muatSW(o) {
  o = o || {};
  const cacheIsi = new Map(); const pendengar = {}; const diambil = []; const disimpan = [];
  const dibuang = [];
  const resp = (teks, url, ok) => ({ ok: ok !== false, status: ok === false ? 404 : 200, type: 'basic', url, text: async () => teks, clone() { return resp(teks, url, ok); }, body: { cancel: async () => { dibuang.push(url); } } });
  const caches = {
    keys: async () => Array.from(cacheIsi.keys()),
    open: async k => {
      if (!cacheIsi.has(k)) cacheIsi.set(k, {}); const isi = cacheIsi.get(k);
      return {
        match: async req => { const u = typeof req === 'string' ? req : req.url; return isi[u] != null ? resp(isi[u].teks, isi[u].dari) : undefined; },
        put: async (req, res) => { const u = typeof req === 'string' ? req : req.url; disimpan.push(u); isi[u] = { teks: await res.text(), dari: res.url }; },
      };
    },
    delete: async k => cacheIsi.delete(k),
  };
  let dilewati = false;
  const self = {
    location: new URL(LINGKUP + 'sw.js'), registration: { scope: LINGKUP }, caches,
    clients: { claim: async () => {}, matchAll: async () => [] },
    addEventListener: (n, f) => { (pendengar[n] = pendengar[n] || []).push(f); }, skipWaiting: () => { dilewati = true; },
  };
  const fetchTiruan = async req => {
    const u = typeof req === 'string' ? req : req.url; const mode = typeof req === 'string' ? null : req.cache;
    diambil.push({ u, cache: mode });
    if (/fonts\.googleapis/.test(u)) throw new TypeError('fon tidak dipakai di uji');
    if (o.gagal && o.gagal(u)) throw new TypeError('Failed to fetch');
    if (o.tidakAda && o.tidakAda(u)) return resp('', u, false);
    if (u === LINGKUP + 'index.html') return resp(o.html, u);
    return resp('isi:' + u, u);
  };
  const ctx = { self, caches, console: { debug() {}, log() {} }, URL, Request: function (u, op) { this.url = u; Object.assign(this, op || {}); }, Response: function () {}, fetch: fetchTiruan, setTimeout: (f, ms) => 0, clearTimeout() {}, Promise, Set, Array, Map };
  vm.createContext(ctx);
  vm.runInContext(baca('sw.js'), ctx, { filename: 'sw.js' });
  const VERSI = vm.runInContext('VERSI', ctx); const CACHE = vm.runInContext('CACHE', ctx);
  async function pasang() {
    let janji = null;
    for (const f of pendengar.install || []) f({ waitUntil: p => { janji = p; } });
    await janji;
  }
  return { ctx, VERSI, CACHE, cacheIsi, diambil, disimpan, dibuang, pasang, dilewati: () => dilewati };
}
// index.html seperti rilis: semua skrip dan stylesheet lokal bercap; manifest dan ikon polos
function htmlRilis(cap, daftar) {
  return '<!doctype html><html><head><link rel="stylesheet" href="css/app.css?v=' + cap + '"><link rel="manifest" href="manifest.webmanifest">' +
    '<link rel="icon" href="icons/ikon.svg"></head><body>' + daftar.filter(x => /\.js$/.test(x)).map(x => '<script src="' + x + '?v=' + cap + '"></script>').join('') + '</body></html>';
}

describe('v9.4.1: sw.js, pra-muat memakai alamat bercap', () => {
  const ASET = vm.runInNewContext(baca('sw.js').match(/const ASET = (\[[\s\S]*?\]);/)[1]);
  const asetLain = ASET.filter(x => x !== 'index.html');

  it('petaCap: alamat polos → alamat persis di index.html; tanpa query tidak masuk peta; di luar lingkup diabaikan', () => {
    const w = muatSW({ html: '' });
    const peta = w.ctx.petaCap ? w.ctx.petaCap : vm.runInContext('petaCap', w.ctx);
    const m = peta('<script src="js/app.js?v=abc123"></script><script src="js/core.js"></script><link rel="stylesheet" href="css/app.css?v=abc123&amp;x=1">' +
      '<script src="https://lain.example/x.js?v=1"></script><script src="../luar.js?v=1"></script>');
    assert.equal(m.get(LINGKUP + 'js/app.js'), LINGKUP + 'js/app.js?v=abc123');
    assert.equal(m.get(LINGKUP + 'css/app.css'), LINGKUP + 'css/app.css?v=abc123&x=1');
    assert.equal(m.has(LINGKUP + 'js/core.js'), false);
    assert.equal(m.size, 2);
    // tautanLokal tetap mengembalikan alamat polos (dipakai untuk daftar pra-muat)
    const lokal = vm.runInContext('tautanLokal', w.ctx)('<script src="js/app.js?v=abc123"></script>');
    assert.deepEqual(Array.from(lokal), [LINGKUP + 'js/app.js']);
  });

  it('pemasangan: tiap skrip dan stylesheet diminta SEKALI dengan alamat bercap (no-cache), disimpan dengan kunci polos', async () => {
    const w = muatSW({ html: htmlRilis('capbaru', asetLain) });
    await w.pasang();
    assert.equal(w.dilewati(), true, 'skipWaiting setelah semua tersimpan');
    const isi = w.cacheIsi.get(w.CACHE);
    for (const a of asetLain) {
      const polos = LINGKUP + a, bercap = polos + '?v=capbaru';
      const minta = w.diambil.filter(x => x.u.split('?')[0] === polos);
      assert.deepEqual(minta.map(x => x.u), [bercap], a + ': satu permintaan, alamat bercap');
      assert.equal(minta[0].cache, 'no-cache', a + ': tetap bertanya ke server (304), bukan memakai cache HTTP begitu saja');
      assert.ok(isi[polos], a + ': tersimpan dengan kunci polos');
      assert.equal(isi[polos].dari, bercap);
    }
    assert.ok(!Object.keys(isi).some(k => k.includes('?')), 'tidak ada kunci cache ber-query');
    assert.ok(isi[LINGKUP + 'index.html'] && isi[LINGKUP], 'index.html dan akar tersimpan');
    // manifest dan ikon tidak bercap di index.html → alamat polos
    assert.ok(w.diambil.some(x => x.u === LINGKUP + 'manifest.webmanifest'));
    assert.ok(!w.diambil.some(x => /manifest\.webmanifest\?/.test(x.u)));
  });

  it('index.html tanpa cap (pohon sumber, rilis lama): perilaku lama, alamat polos', async () => {
    const html = '<link rel="stylesheet" href="css/app.css">' + asetLain.filter(x => /\.js$/.test(x)).map(x => '<script src="' + x + '"></script>').join('');
    const w = muatSW({ html });
    await w.pasang();
    assert.ok(!w.diambil.some(x => x.u.includes('?v=')), 'tidak ada alamat bercap');
    const isi = w.cacheIsi.get(w.CACHE);
    for (const a of asetLain) assert.ok(isi[LINGKUP + a], a);
  });

  it('alamat bercap gagal (jaringan atau 404) → alamat polos dicoba; pemasangan tetap berhasil', async () => {
    for (const cara of ['gagal', 'tidakAda']) {
      const w = muatSW({ html: htmlRilis('capbaru', asetLain), [cara]: u => /js\/ruang\.js\?v=/.test(u) });
      await w.pasang();
      const minta = w.diambil.filter(x => x.u.split('?')[0] === LINGKUP + 'js/ruang.js').map(x => x.u);
      assert.deepEqual(minta, [LINGKUP + 'js/ruang.js?v=capbaru', LINGKUP + 'js/ruang.js'], cara);
      assert.equal(w.cacheIsi.get(w.CACHE)[LINGKUP + 'js/ruang.js'].dari, LINGKUP + 'js/ruang.js', cara);
      assert.equal(w.dilewati(), true);
    }
  });

  it('jawaban bukan 2xx yang tidak dipakai DIBUANG isinya (kalau tidak, pemasangan macet di Chromium bila jawabannya ber-no-store)', async () => {
    // semua alamat bercap 404 → 31 jawaban ditolak; tiap isinya harus dibuang sebelum jatuh ke alamat polos
    const w = muatSW({ html: htmlRilis('capbaru', asetLain), tidakAda: u => /\?v=/.test(u) });
    await w.pasang();
    assert.equal(w.dilewati(), true);
    for (const a of asetLain) assert.ok(w.dibuang.includes(LINGKUP + a + '?v=capbaru'), a + ': isi jawaban 404 alamat bercap dibuang');
    assert.ok(!w.dibuang.some(u => !u.includes('?v=')), 'jawaban yang dipakai (alamat polos, 200) tidak dibuang');
    // alamat polos juga 404 untuk satu aset opsional → dilewati, isinya dibuang, pemasangan tetap berhasil
    const w2 = muatSW({ html: htmlRilis('capbaru', asetLain), tidakAda: u => /icons\/ikon-512\.png/.test(u) });
    await w2.pasang();
    assert.equal(w2.dilewati(), true);
    assert.ok(w2.dibuang.includes(LINGKUP + 'icons/ikon-512.png'));
    assert.equal(w2.cacheIsi.get(w2.CACHE)[LINGKUP + 'icons/ikon-512.png'], undefined);
  });

  it('aset wajib gagal di kedua alamat → pemasangan gagal (versi lama tetap dipakai), seperti dulu', async () => {
    const w = muatSW({ html: htmlRilis('capbaru', asetLain), gagal: u => /js\/ruang\.js/.test(u) });
    await assert.rejects(w.pasang());
    assert.equal(w.dilewati(), false);
  });
});

describe('v9.4.1: wilayah status HP, teks toast, nama di dialog soal', () => {
  const ruang = baca('js/views-ruang.js');
  it('UKP.c.statusRoom dan bar bawah HP: isi yang sama tidak ditulis ulang', () => {
    const i = ruang.indexOf('UKP.c.statusRoom = function'); const blok = ruang.slice(i, ruang.indexOf('lepas1 = dengar', i));
    assert.match(blok, /if \(tanda === tandaLalu\) return;/);
    assert.ok(blok.indexOf('if (tanda === tandaLalu) return;') < blok.indexOf('el.replaceChildren('), 'penjaga sebelum replaceChildren');
    const j = ruang.indexOf("class: 'bar-bawah-room'"); const blok2 = ruang.slice(j, ruang.indexOf('lokal.perbaruiBawah = perbaruiBawah;', j));
    assert.equal((blok2.match(/bawah\.replaceChildren\(/g) || []).length, 1, 'hanya isiBawah yang menulis ke bar bawah');
    assert.equal((blok2.match(/isiBawah\(h\(/g) || []).length, 3, 'ketiga cabang lewat isiBawah');
    assert.match(blok2, /if \(tanda === tandaBawah\) return;/);
  });
  it('isiBawah: menulis saat teks atau langkah berubah, diam saat sama (DOM tiruan)', () => {
    const j = ruang.indexOf('let tandaBawah = null;'); const k = ruang.indexOf('const perbaruiBawah = () => {', j);
    const sumber = ruang.slice(j, k);
    const tulis = []; const bawah = { dataset: { langkah: 'huruf' }, replaceChildren: (...a) => tulis.push(a.map(n => n.textContent)) };
    const isiBawah = new Function('bawah', sumber + '; return isiBawah;')(bawah);
    const n = t => ({ textContent: t });
    isiBawah(n('Langkah 1: ketuk huruf jawaban'), n('0 dari 5 orang sudah menjawab'));
    isiBawah(n('Langkah 1: ketuk huruf jawaban'), n('0 dari 5 orang sudah menjawab'));
    assert.equal(tulis.length, 1, 'isi sama → tidak ditulis ulang');
    isiBawah(n('Langkah 1: ketuk huruf jawaban'), n('1 dari 5 orang sudah menjawab'));
    assert.equal(tulis.length, 2, 'hitungan berubah → ditulis');
    bawah.dataset.langkah = 'yakin';
    isiBawah(n('Langkah 1: ketuk huruf jawaban'), n('1 dari 5 orang sudah menjawab'));
    assert.equal(tulis.length, 3, 'langkah berubah → ditulis');
    isiBawah(n('Menyambung ulang… jawaban Anda aman.'), n('1 dari 5 orang sudah menjawab'));
    assert.equal(tulis.length, 4);
    isiBawah(n('Menunggu Nicky melanjutkan'));
    isiBawah(n('Menunggu Nicky melanjutkan'));
    assert.equal(tulis.length, 5, 'jumlah anak berubah → ditulis, lalu diam');
  });
  it('UKP.c.statusRoom dijalankan dengan DOM tiruan: ditulis saat teks, nada, atau tombol berubah; diam saat sama', () => {
    const i = ruang.indexOf('UKP.c.statusRoom = function (o) {'); const j = ruang.indexOf('    return el;\n  };', i);
    assert.ok(i > 0 && j > i, 'sumber statusRoom ditemukan');
    const sumber = ruang.slice(i, j + '    return el;\n  };'.length);
    const tulis = []; let pendengar = null;
    const h = (tag, at, ...anak) => ({ tag, at: at || {}, dataset: {}, title: '', isConnected: true, textContent: anak.filter(x => typeof x === 'string').join(''),
      replaceChildren(...a) { tulis.push(a.filter(Boolean).map(n => n.textContent || n.tag)); } });
    const titik = nada => ({ tag: 'titik:' + nada, textContent: '' });
    const keadaan = { st: { tersambung: true }, info: { peran: 'anggota', nama: 'Mita' }, s: { tuan: 'Nicky', aktivitas: null } };
    const pabrik = new Function('h', 'titik', 'statusR', 'info', 'stR', 'R', 'tersedia', 'dengar', 'hapusBila', 'setInterval', 'clearInterval',
      'let putusSejak = 0; const UKP = { c: {}, go() {} };\n' + sumber + '\nreturn { buat: UKP.c.statusRoom, putus: v => { putusSejak = v; } };');
    const m = pabrik(h, titik, () => keadaan.st, () => keadaan.info, () => keadaan.s, () => ({}), () => true, f => { pendengar = f; return () => {}; }, () => () => false, () => 0, () => {});
    const el = m.buat({});
    assert.equal(tulis.length, 1); assert.deepEqual(tulis[0], ['titik:ok', 'Tersambung']); assert.equal(el.dataset.nada, 'ok');
    pendengar('hadir'); pendengar('hadir'); pendengar('state');
    assert.equal(tulis.length, 1, 'kabar hadir dengan keadaan sama → tidak ditulis ulang');
    keadaan.st = { tersambung: false }; m.putus(Date.now() - 2000); pendengar('status');
    assert.equal(tulis.length, 2); assert.deepEqual(tulis[1], ['titik:warn', 'Menyambung ulang…']); assert.equal(el.dataset.nada, 'warn');
    pendengar('hadir');
    assert.equal(tulis.length, 2, 'masih menyambung ulang → diam');
    m.putus(Date.now() - 61000); pendengar('status');
    assert.equal(tulis.length, 3, 'putus lebih dari 60 detik: nada warn ke attn dan kalimat panjang ditulis');
    assert.equal(el.dataset.nada, 'attn'); assert.match(tulis[2][1], /HP ini terputus dari room\. Latihan tetap berjalan di laptop Nicky\./);
    keadaan.s = { tuan: 'Budi', aktivitas: null }; pendengar('state');
    assert.equal(tulis.length, 4, 'nada sama (attn) tetapi teks berubah (nama pemimpin) → ditulis');
    assert.match(tulis[3][1], /laptop Budi/);
    keadaan.s = { tuan: 'Budi', aktivitas: { jenis: 'ujian' } }; pendengar('state');
    assert.equal(tulis.length, 5, 'tombol "Pakai kode jawaban" muncul (teks dan nada sama) → ditulis');
    assert.equal(tulis[4].length, 3);
    pendengar('hadir');
    assert.equal(tulis.length, 5, 'tombol sudah ada → tidak dibuat ulang (fokus pada tombol tidak hilang)');
    keadaan.st = { tersambung: true }; m.putus(0); pendengar('status');
    assert.equal(tulis.length, 6); assert.deepEqual(tulis[5], ['titik:ok', 'Tersambung']);
  });
  it('bar bawah: atribut data-langkah hanya ditulis bila berubah; keterangan "benar · yakin" memakai spasi tak-putus', () => {
    assert.match(ruang, /if \(bawah\.dataset\.langkah !== lk\) bawah\.dataset\.langkah = lk;/);
    const tim = baca('js/views-tim.js');
    assert.ok(tim.includes("teksHasil(hs) + (j.k ? ' ·\\u00a0' + LABEL_YAKIN[j.k].toLowerCase() : '')"), 'spasi tak-putus setelah tanda titik tengah');
  });
  it('toast offline tanpa tanda pisah panjang', () => {
    const app = baca('js/app.js');
    assert.ok(app.includes("'Anda sedang offline. Materi tetap tersedia.'"));
    assert.ok(!/Anda offline —/.test(app));
  });
  it('css: keterangan di "Jawaban tiap orang" yang lebih dulu turun baris, bukan nama yang terpotong', () => {
    const css = baca('css/app.css');
    assert.match(css, /\.eval-dlg-jawab > li > \.meta \{ flex: 1 1 0; min-width: min-content; \}/);
  });
});
