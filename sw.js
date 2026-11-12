/* MABAR UKP — service worker: semua aset aplikasi disimpan di Cache Storage agar aplikasi tetap bisa dipakai tanpa internet
   (mis. di pesawat). Didaftarkan oleh js/app.js hanya pada http(s); file:// dan versi berkas tunggal (window.UKP_OFFLINE) tidak memakainya.
   Strategi:
   - aset lokal (index.html, css/, js/, js/data/, manifest, icons/): dimuat semua saat install (precache), lalu cache-first;
   - navigasi ke halaman aplikasi ('./' atau index.html): network-first dengan batas waktu, cadangan dari cache, lalu halaman offline sederhana;
   - lintas asal: hanya Google Fonts (stale-while-revalidate; gagal → stylesheet kosong/fon sistem tanpa galat). Permintaan lain tidak disentuh.
   Pembaruan: VERSI dan daftar ASET di blok otomatis ditulis ulang oleh `node tools/build-artifact.js` (hash isi semua aset). Versi baru
   langsung aktif setelah semua aset tersimpan (skipWaiting, v9.3.1) dan mengambil alih halaman yang terbuka; js/app.js lalu memuat
   ulang halaman itu saat aman, KECUALI halaman itu sudah menjalankan versi ini (v9.4: cap ?v=<VERSI> pada aset di index.html,
   lihat cacheDulu dan pesan 'VERSI?'). Pesan { type: 'SKIP_WAITING' } tetap diterima untuk versi yang sempat menunggu;
   cache versi lama dihapus saat activate. Daftar skrip juga dibaca ulang dari index.html saat install, jadi berkas baru tetap ikut. */
'use strict';
/* <ASET-OTOMATIS> ditulis ulang oleh tools/build-artifact.js — jangan diubah manual */
const VERSI = '30309ee4ac96';
const ASET = [
  "index.html",
  "js/core.js",
  "js/akses.js",
  "js/data/ref.js",
  "js/data/formulir.js",
  "js/data/cakupan.js",
  "js/data/mu-A1.js",
  "js/data/mu-A2.js",
  "js/data/mu-A3.js",
  "js/data/mu-A4.js",
  "js/data/mu-A5.js",
  "js/data/mu-B6.js",
  "js/data/mu-B7.js",
  "js/data/mu-B8.js",
  "js/data/mu-C9.js",
  "js/data/mu-C10.js",
  "js/data/mu-E.js",
  "js/kalkulator.js",
  "js/viz.js",
  "js/learn.js",
  "js/tim.js",
  "js/ruang.js",
  "js/soal.js",
  "js/views-home.js",
  "js/views-belajar.js",
  "js/views-simulasi.js",
  "js/views-ujian-tim.js",
  "js/views-alat.js",
  "js/views-tim.js",
  "js/views-ruang.js",
  "js/app.js",
  "css/app.css",
];
const ASET_OPSIONAL = [
  "manifest.webmanifest",
  "icons/apple-touch-icon.png",
  "icons/ikon-192.png",
  "icons/ikon-512.png",
  "icons/ikon-maskable-192.png",
  "icons/ikon-maskable-512.png",
  "icons/ikon.svg",
];
/* </ASET-OTOMATIS> */

// Host Artifact claude.ai (*.claudeusercontent.com / claude.ai) tidak memakai service worker (lihat js/app.js: pendaftaran dilewati).
// Bila versi lama sempat terpasang di sana, versi ini membersihkan diri saat aktif: hapus cache ukp-*, lepaskan pendaftaran, lalu
// muat ulang semua klien agar halaman kembali dilayani langsung oleh jaringan. Tidak ada penangan install/fetch normal di host ini.
const HOST_TANPA_SW = /(^|\.)(claudeusercontent\.com|claude\.ai)$/i.test(self.location.hostname);
if (HOST_TANPA_SW) {
  self.addEventListener('install', () => self.skipWaiting());
  self.addEventListener('activate', event => event.waitUntil((async () => {
    try { const ks = await caches.keys(); await Promise.all(ks.filter(k => /^ukp-/.test(k)).map(k => caches.delete(k))); } catch (e) {}
    try { await self.registration.unregister(); } catch (e) {}
    try { const cs = await self.clients.matchAll({ type: 'window' }); await Promise.all(cs.map(c => c.navigate(c.url).catch(() => null))); } catch (e) {}
  })()));
}

const LINGKUP = self.registration.scope; // selalu berakhiran '/'
const AWALAN = 'ukp-aset|' + LINGKUP + '|'; // per lingkup: salinan lain di origin yang sama tidak saling menghapus
const CACHE = AWALAN + VERSI;
const CACHE_FONT = 'ukp-font|' + LINGKUP;
const ASAL_FONT = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'];
const BATAS_NAVIGASI = 3500; // ms; jaringan lambat (Wi-Fi pesawat, portal tertawan) → layani dari cache
const BATAS_FONT = 8000;
const mutlak = p => new URL(p, LINGKUP).href;
const INDEX = mutlak('index.html');
const AKAR = LINGKUP;
// jalur relatif lingkup yang ditangani cache-first (aset aplikasi saja; berkas lain di lingkup tidak disentuh)
const POLA_ASET = /^(?:index\.html|manifest\.webmanifest|(?:css|js|icons)\/[^?#]+\.(?:css|js|png|svg|webp|ico|woff2?))$/i;
const unik = a => Array.from(new Set(a));
const lokal = u => !/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(u);
const debug = (...a) => { try { console.debug('[UKP sw]', ...a); } catch (e) {} };

function ambilSegar(url) { return fetch(new Request(url, { cache: 'no-cache', credentials: 'same-origin' })); }
function denganBatas(p, ms) { return Promise.race([p, new Promise(r => setTimeout(() => r(null), ms))]); }

// skrip, stylesheet, manifest, dan ikon lokal yang dirujuk index.html
function tautanUrl(html) {
  const hasil = [];
  html.replace(/<script\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/gi, (_, u) => { if (lokal(u)) hasil.push(u); return _; });
  html.replace(/<link\b[^>]*>/gi, tag => {
    const rel = (tag.match(/\brel\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
    const href = (tag.match(/\bhref\s*=\s*["']([^"']+)["']/i) || [])[1];
    if (href && lokal(href) && /\b(?:stylesheet|manifest|icon|apple-touch-icon)\b/i.test(rel)) hasil.push(href);
    return tag;
  });
  return hasil.map(u => new URL(u.replace(/&amp;/g, '&'), INDEX)).filter(u => u.href.startsWith(LINGKUP));
}
function tautanLokal(html) { return tautanUrl(html).map(u => u.origin + u.pathname); }
// v9.4.1: alamat polos → alamat persis yang dirujuk index.html (bercap ?v=<VERSI>). Pra-muat meminta alamat yang SAMA dengan yang baru
// saja diunduh halaman, sehingga peramban cukup bertanya "masih sama?" ke server (jawaban 304, isi dari cache HTTP). Dulu pra-muat
// meminta alamat polos: alamatnya beda, jadi semua aset (sekitar 1,9 MB terkompresi) diunduh dua kali pada pemasangan pertama dan
// pada tiap pindah versi, bersaing dengan halaman yang sedang menyambung ke room. Kunci cache tetap alamat polos.
function petaCap(html) {
  const peta = new Map();
  for (const u of tautanUrl(html)) if (u.search) peta.set(u.origin + u.pathname, u.origin + u.pathname + u.search);
  return peta;
}

async function simpan(cache, url, wajib, bercap) {
  let res = null;
  // v9.4.1: coba dulu alamat bercap (lihat petaCap); gagal atau bukan 2xx → alamat polos seperti dulu
  // Isi jawaban yang tidak dipakai (bukan 2xx) harus dibuang. Chromium membatasi service worker yang sedang memasang pada 3 permintaan
  // serentak, dan jawaban ber-kepala no-store yang isinya tidak dibaca menahan jatah itu: pemasangan macet sekitar 5 menit lalu batal.
  const buang = r => { try { if (r && r.body) r.body.cancel().catch(() => {}); } catch (e) {} };
  if (bercap && bercap !== url) { try { const r = await ambilSegar(bercap); if (r && r.ok) res = r; else buang(r); } catch (e) { debug('bercap gagal', bercap, e && e.message); } }
  if (!res) { try { res = await ambilSegar(url); } catch (e) { if (wajib) throw e; debug('lewati', url, e && e.message); return; } }
  // 404 dsb.: berkas memang tidak ada di server (juga gagal saat daring) → lewati tanpa menggagalkan install
  if (res.ok) await cache.put(url, res); else { debug('lewati', url, res.status); buang(res); }
}

// Google Fonts: stylesheet + berkas fon subset latin/latin-ext (cukup untuk bahasa Indonesia); upaya terbaik, tidak pernah menggagalkan install
async function siapkanFont(html) {
  const m = html.match(/<link\b[^>]*\bhref\s*=\s*["'](https:\/\/fonts\.googleapis\.com\/[^"']+)["']/i);
  if (!m) return;
  const urlCss = m[1].replace(/&amp;/g, '&');
  const cache = await caches.open(CACHE_FONT);
  const res = await denganBatas(fetch(urlCss, { mode: 'cors', credentials: 'omit' }), BATAS_FONT);
  if (!res || !res.ok) return;
  const css = await res.clone().text();
  await cache.put(urlCss, res);
  const berkas = [];
  css.replace(/\/\*\s*([a-z-]+)\s*\*\/\s*@font-face\s*\{[^}]*?url\(\s*["']?([^"')]+)["']?\s*\)/gi, (_, subset, u) => { if (/^latin(?:-ext)?$/i.test(subset)) berkas.push(u); return _; });
  await Promise.all(unik(berkas).map(async u => {
    if (await cache.match(u)) return;
    const r = await denganBatas(fetch(u, { mode: 'cors', credentials: 'omit' }).catch(() => null), BATAS_FONT);
    if (r && r.ok) await cache.put(u, r);
  }));
}

async function pasang() {
  const cache = await caches.open(CACHE);
  // index.html lebih dulu: isinya menjadi sumber daftar skrip/stylesheet (tetap lengkap walau blok otomatis belum ditulis ulang)
  const res = await ambilSegar(INDEX);
  if (!res.ok) throw new Error('index.html ' + res.status);
  const salinanIndex = res.clone(), salinanAkar = res.clone();
  const html = await res.text();
  await Promise.all([cache.put(INDEX, salinanIndex), cache.put(AKAR, salinanAkar)]);
  const wajib = unik(ASET.map(mutlak).concat(tautanLokal(html))).filter(u => u !== INDEX && u !== AKAR);
  const opsional = ASET_OPSIONAL.map(mutlak).filter(u => !wajib.includes(u));
  const cap = petaCap(html);
  await Promise.all(wajib.map(u => simpan(cache, u, true, cap.get(u))));
  await Promise.all(opsional.map(u => simpan(cache, u, false, cap.get(u))));
  await siapkanFont(html).catch(e => debug('fon dilewati', e && e.message));
}

// v9.3.1: versi baru langsung aktif (skipWaiting) setelah semua aset tersimpan. Dulu ia menunggu sampai halaman mengirim
// SKIP_WAITING lewat toast 15 detik "Versi baru tersedia"; bila toast itu terlewat, perangkat terus memakai versi lama walau
// halaman dimuat ulang. Aman karena halaman memuat semua skripnya saat dibuka: halaman yang sedang terbuka tetap berjalan dengan
// skrip di memorinya, dan muat ulang berikutnya sudah dilayani dari cache baru. js/app.js memuat ulang sendiri saat aman.
self.addEventListener('install', event => { if (HOST_TANPA_SW) return; event.waitUntil(pasang().then(() => self.skipWaiting())); });

// v9.4 (FB1): pindah versi TANPA memuat ulang paksa. index.html rilis merujuk setiap skrip dan stylesheet dengan cap versi
// (js/app.js?v=<VERSI>, ditulis tools/build-artifact.js). Navigasi selalu jaringan dulu, jadi halaman yang baru dibuka menerima
// index.html baru beserta capnya. Service worker versi mana pun (juga 9.0 sampai 9.3.2) mencari aset di cache dengan alamat persis
// termasuk query; alamat bercap versi baru tidak ada di cache lama, jadi diambil dari jaringan. Halaman yang baru dibuka langsung
// menjalankan versi baru pada muatan pertama walau service worker lama masih memegang kendali. Halaman yang sudah terbuka tidak
// pernah dimuat ulang oleh service worker (dulu v9.4 Ka1 memuat ulang paksa halaman versi lama; papan pemimpin yang sedang
// menjalankan latihan bersama ikut kembali ke Beranda karena Client.url adalah alamat muat, bukan rute sekarang).
self.addEventListener('activate', event => {
  if (HOST_TANPA_SW) return;
  event.waitUntil((async () => {
    try {
      const ks = await caches.keys();
      await Promise.all(ks.filter(k => k.startsWith(AWALAN) && k !== CACHE).map(k => caches.delete(k)));
    } catch (e) { debug('pembersihan cache gagal', e); }
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  const d = event.data; const jenis = d && (typeof d === 'string' ? d : d.type);
  if (jenis === 'SKIP_WAITING') self.skipWaiting();
  // 'VERSI?' (v9.4 FB1): js/app.js bertanya versi service worker yang baru mengambil alih; sama dengan cap aset halaman = halaman
  // sudah menjalankan versi itu, tidak perlu dimuat ulang. 'VERSI' dipertahankan untuk alat diagnosa lama.
  else if (jenis === 'VERSI' || jenis === 'VERSI?') {
    const balas = { type: 'VERSI', versi: VERSI, cache: CACHE };
    try { if (event.ports && event.ports[0]) event.ports[0].postMessage(balas); else if (event.source) event.source.postMessage(balas); } catch (e) {}
  }
});

function halamanOffline() {
  const html = '<!doctype html><html lang="id"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<title>MABAR UKP · Offline</title><style>body{margin:0;padding:24px;font:16px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif;background:#F6F7F9;color:#18212F}' +
    'main{max-width:32rem;margin:12vh auto}h1{font-size:1.4rem;margin:0 0 .5rem}button{font:inherit;font-weight:600;min-height:44px;padding:0 18px;margin-top:8px;border:0;border-radius:6px;background:#0F2A4A;color:#fff;cursor:pointer}' +
    '@media (prefers-color-scheme: dark){body{background:#0A1626;color:#E8EEF6}button{background:#F2B01E;color:#0F2A4A}}</style>' +
    '<main><h1>Anda sedang offline</h1><p>MABAR UKP belum tersimpan di perangkat ini. Sambungkan internet, buka aplikasi sekali sampai muncul pesan ' +
    '“Siap dipakai offline”, lalu aplikasi bisa dibuka tanpa internet.</p><button type="button" onclick="location.reload()">Coba lagi</button></main></html>';
  return new Response(html, { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
}

// navigasi: network-first; jaringan gagal, lambat (> BATAS_NAVIGASI), atau bukan 2xx → salinan cache bila ada
function navigasi(event, req) {
  const pCache = caches.open(CACHE);
  let salinan = null;
  const pJaringan = fetch(req).then(res => { if (res.ok && res.type === 'basic') salinan = res.clone(); return res; });
  // halaman terbaru disimpan untuk kunjungan offline berikutnya (di './' dan index.html; isinya sama)
  event.waitUntil(pJaringan.then(() => salinan && pCache.then(c => Promise.all([c.put(INDEX, salinan.clone()), c.put(AKAR, salinan)]))).catch(() => {}));
  const cadangan = () => pCache.then(c => c.match(req, { ignoreSearch: true, ignoreVary: true })
    .then(r => r || c.match(INDEX, { ignoreVary: true })).then(r => r || c.match(AKAR, { ignoreVary: true }))).catch(() => null);
  return new Promise(selesai => {
    let beres = false, tunda = 0;
    const akhiri = r => { if (beres || !r) return; beres = true; clearTimeout(tunda); selesai(r); };
    tunda = setTimeout(() => { cadangan().then(akhiri); }, BATAS_NAVIGASI);
    pJaringan.then(res => {
      if (res.ok || res.type === 'opaqueredirect') akhiri(res);
      else cadangan().then(r => akhiri(r || res));
    }, () => { cadangan().then(r => akhiri(r || halamanOffline())); });
  });
}

// aset lokal: cache-first; tidak ada di cache → jaringan (lalu disimpan); jaringan gagal → salinan tanpa query string bila ada.
// v9.4 (FB1) cap versi ?v=<versi> (index.html rilis): cache pra-muat tetap berkunci alamat polos.
// - v sama dengan VERSI: isi cache versi ini (ignoreSearch), tanpa jaringan; bila belum ada, jaringan (tidak disimpan ganda);
// - v berbeda (halaman lebih baru daripada service worker ini, atau sebaliknya): jaringan dulu dan TIDAK disimpan ke cache versi
//   ini (isinya milik versi lain); jaringan gagal → cadangan dari cache (ignoreSearch) supaya aplikasi tetap terbuka luring.
function capVersi(req) { try { return new URL(req.url).searchParams.get('v'); } catch (e) { return null; } }
async function cacheDulu(req) {
  const cache = await caches.open(CACHE);
  const v = capVersi(req);
  if (v != null) {
    if (v === VERSI) {
      const ada = await cache.match(req, { ignoreSearch: true, ignoreVary: true });
      if (ada) return ada;
      return fetch(req);
    }
    try {
      const res = await fetch(req);
      if (res.ok) return res;
      const mirip = await cache.match(req, { ignoreSearch: true, ignoreVary: true });
      return mirip || res;
    } catch (e) {
      const mirip = await cache.match(req, { ignoreSearch: true, ignoreVary: true });
      if (mirip) return mirip;
      throw e;
    }
  }
  const ada = await cache.match(req, { ignoreVary: true });
  if (ada) return ada;
  try {
    const res = await fetch(req);
    if (res.ok && res.type === 'basic') cache.put(req, res.clone()).catch(() => {});
    return res;
  } catch (e) {
    const mirip = await cache.match(req, { ignoreSearch: true, ignoreVary: true });
    if (mirip) return mirip;
    throw e;
  }
}

// Google Fonts: stale-while-revalidate; tanpa cache dan tanpa jaringan → respons kosong yang tidak memunculkan galat (fon sistem dipakai)
function fontDiam(url) {
  if (url.startsWith('https://fonts.googleapis.com')) return new Response('/* Google Fonts tidak tersedia (offline): memakai fon sistem */', { status: 200, headers: { 'Content-Type': 'text/css; charset=utf-8' } });
  return new Response(null, { status: 204 });
}
function fontSWR(event, req) {
  const url = req.url;
  const pCache = caches.open(CACHE_FONT);
  const segar = fetch(new Request(url, { mode: 'cors', credentials: 'omit' }))
    .then(res => { if (!res.ok) return null; const s = res.clone(); return pCache.then(c => c.put(url, s)).then(() => res, () => res); })
    .catch(() => null);
  event.waitUntil(segar);
  return pCache.then(c => c.match(url, { ignoreVary: true })).catch(() => null)
    .then(ada => ada || segar.then(res => res || fontDiam(url)));
}

self.addEventListener('fetch', event => {
  if (HOST_TANPA_SW) return;
  const req = event.request;
  if (req.method !== 'GET') return;
  if (req.cache === 'only-if-cached' && req.mode !== 'same-origin') return;
  let url; try { url = new URL(req.url); } catch (e) { return; }
  if (url.origin === self.location.origin) {
    if (!url.href.startsWith(LINGKUP)) return;
    const rel = (url.origin + url.pathname).slice(LINGKUP.length);
    if (req.mode === 'navigate') { if (rel === '' || rel === 'index.html') event.respondWith(navigasi(event, req)); return; }
    if (POLA_ASET.test(rel)) event.respondWith(cacheDulu(req));
    return;
  }
  if (ASAL_FONT.includes(url.origin)) event.respondWith(fontSWR(event, req));
});
