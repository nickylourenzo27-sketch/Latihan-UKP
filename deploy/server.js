#!/usr/bin/env node
'use strict';
/* Pelatih UKP — server HTTP berlogin untuk tim internal. Tanpa dependensi: hanya modul bawaan Node (>= 18; diuji dengan Node 22).
   - Menyajikan folder situs statis (SITE_DIR, bawaan ../dist/site) HANYA untuk sesi yang sudah masuk.
   - /masuk (form login), /keluar (logout + hapus salinan aplikasi dari perangkat), /sehat (health check tanpa login).
   - Sesi: cookie HttpOnly + SameSite=Lax (+ Secure di balik HTTPS) berisi token acak 32 byte; disimpan di memori + data/sesi.json
     (hanya hash SHA-256 token yang ditulis ke disk), berlaku 30 hari. Bila RAHASIA_SESI diatur, cookie juga membawa klaim bertanda tangan
     HMAC sehingga sesi tetap berlaku walau data/sesi.json hilang (hosting gratis dengan disk sementara, mis. Render free).
   - Sandi: hash scrypt di data/pengguna.json (lihat lib-pengguna.js); kelola dengan `node deploy/kelola-pengguna.js`.
   - Dasbor tim (API JSON di /api/*, butuh sesi + header X-Requested-With: UKP + asal sama): anggota menyimpan ringkasan hasilnya
     (PUT/DELETE /api/hasil → data/hasil.json), admin membaca semua ringkasan (GET /api/tim) dan menerima perubahan langsung lewat
     SSE (GET /api/tim/aliran). Peran admin: field admin di pengguna.json, akun ADMIN_USER, atau akhiran ":admin" di PENGGUNA_TIM.
   - Mode masuk nama (MASUK_NAMA=1): anggota cukup mengetik nama di /masuk (tanpa sandi); akun anggota dibuat otomatis (tanpaSandi:true).
     Nama akun bersandi (admin atau anggota bersandi) tetap meminta kata sandi di tahap kedua. Server menolak start tanpa admin bersandi.
     Opsional DAFTAR_NAMA (nama yang boleh masuk), BATAS_AKUN (total akun tanpa sandi, bawaan 200), BATAS_AKUN_IP (akun baru per IP per jam, bawaan 20).
     Dengan RAHASIA_SESI, akun tanpa sandi yang hilang bersama pengguna.json (disk sementara) dibuat ulang dari klaim sesi bertanda tangan.
   Variabel lingkungan: lihat README-DEPLOY.md (PORT, HOST, SITE_DIR, DATA_DIR, COOKIE_SECURE, TRUST_PROXY, TRUSTED_PROXY_CIDR, RAHASIA_SESI,
   ADMIN_USER, ADMIN_PASS, PENGGUNA_TIM, KONTAK_ADMIN, JALANKAN_SEBAGAI, MASUK_NAMA, DAFTAR_NAMA, BATAS_AKUN, BATAS_AKUN_IP). Catatan PWA: service worker aplikasi menyimpan ASET (index.html, css, js, ikon) di Cache Storage
   peramban, bukan sesi; sesi tetap hanya di cookie HttpOnly yang tidak terbaca oleh skrip. */
const http = require('node:http');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');
const net = require('node:net');
const L = require('./lib-pengguna.js');
const H = require('./lib-hasil.js');

// ---------- konfigurasi ----------
const PORT = parseInt(process.env.PORT || '8080', 10);
const TRUST_PROXY = Math.max(0, parseInt(process.env.TRUST_PROXY || '0', 10) || 0); // jumlah proxy tepercaya di depan server
// Platform yang port aplikasinya hanya bisa dicapai lewat proxy platform (tidak terbuka langsung ke internet).
const DI_PLATFORM = !!(process.env.RENDER || process.env.FLY_APP_NAME);
// Di balik proxy (TRUST_PROXY>0) di VPS/komputer sendiri: bawaan hanya mendengarkan di 127.0.0.1 agar port server tidak bisa
// dihubungi langsung (melewati proxy, tanpa HTTPS, dengan X-Forwarded-For palsu). Docker/Render/Fly mengatur HOST=0.0.0.0 sendiri.
const HOST = process.env.HOST || (TRUST_PROXY && !DI_PLATFORM ? '127.0.0.1' : '0.0.0.0');
const SITE_DIR = fs.realpathSync(path.resolve(process.env.SITE_DIR || path.join(__dirname, '..', 'dist', 'site')));
const BERKAS_SESI = path.join(L.DIR_DATA, 'sesi.json');
const MASA_SESI_MS = 30 * 24 * 3600 * 1000;
const JENDELA_MS = 15 * 60 * 1000;
const MAKS_GAGAL = 5;               // per nama pengguna + IP per 15 menit
const MAKS_GAGAL_IP = 30;           // per IP (semua nama) per 15 menit — menahan tebak-nama massal
const JENDELA_NAMA_MS = 60 * 60 * 1000;
const MAKS_GAGAL_NAMA = 50;         // per nama pengguna dari IP mana pun per jam — menahan tebakan tersebar dari banyak IP
const MAKS_SCRYPT = 8;              // verifikasi sandi (scrypt) yang boleh berjalan bersamaan di seluruh server
const MAKS_ANTREAN_SCRYPT = 64;     // antrean di atas itu; lebih dari ini → 503
const MAKS_PROSES_IP = 4;           // permintaan login yang sedang diproses per IP (per nama+IP: 2, mis. klik ganda)
const COOKIE_SECURE = /^(1|true|ya|yes)$/i.test(process.env.COOKIE_SECURE || '');
// Alamat soket yang boleh mengirim X-Forwarded-For: bawaan loopback + alamat privat (Caddy/Nginx di mesin yang sama, jembatan Docker),
// atau daftar CIDR sendiri di TRUSTED_PROXY_CIDR (dipisah koma). Di Render/Fly semua koneksi datang dari proxy platform.
const PROXY_TEPERCAYA = (() => {
  const b = new net.BlockList();
  const daftar = (process.env.TRUSTED_PROXY_CIDR || '').split(',').map(s => s.trim()).filter(Boolean);
  const bawaan = ['127.0.0.0/8', '10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16', '100.64.0.0/10', '169.254.0.0/16', '::1/128', 'fc00::/7', 'fe80::/10'];
  for (const c of (daftar.length ? daftar : bawaan)) {
    const [alamat, pjg] = c.split('/'); const jenis = net.isIPv6(alamat) ? 'ipv6' : net.isIPv4(alamat) ? 'ipv4' : null;
    const prefiks = pjg == null ? (jenis === 'ipv6' ? 128 : 32) : parseInt(pjg, 10);
    if (!jenis || !(prefiks >= 0 && prefiks <= (jenis === 'ipv6' ? 128 : 32))) { console.warn('[peringatan] TRUSTED_PROXY_CIDR: butir tidak valid dilewati: ' + JSON.stringify(c)); continue; }
    b.addSubnet(alamat, prefiks, jenis);
  }
  return { b, semua: DI_PLATFORM && !daftar.length };
})();
const RAHASIA = process.env.RAHASIA_SESI && process.env.RAHASIA_SESI.length >= 32 ? Buffer.from(process.env.RAHASIA_SESI) : null;
const KUNCI_VERSI = RAHASIA || crypto.randomBytes(32); // untuk versi kredensial pengguna dari env (stabil antar-restart bila RAHASIA_SESI ada)
const KONTAK_ADMIN = (process.env.KONTAK_ADMIN || '').trim();
const NAMA_ADMIN = L.namaValid(L.normalNama(process.env.ADMIN_USER)) ? L.normalNama(process.env.ADMIN_USER) : null; // ADMIN_USER selalu admin dasbor tim
const VERSI_API = 1;
// Mode masuk nama: anggota masuk hanya dengan mengetik nama (untuk pemakaian internal). Admin tetap wajib sandi.
const MASUK_NAMA = /^(1|true|ya|yes)$/i.test(String(process.env.MASUK_NAMA || '').trim());
const BATAS_AKUN = Math.max(1, parseInt(process.env.BATAS_AKUN || '200', 10) || 200);       // total akun tanpa sandi
const BATAS_AKUN_IP = Math.max(1, parseInt(process.env.BATAS_AKUN_IP || '20', 10) || 20);  // akun baru per IP per jam
const MAKS_MASUK_NAMA_IP = 120;     // percobaan masuk nama per IP per 15 menit (membatasi pembuatan sesi massal)
const DAFTAR_NAMA = (() => {        // DAFTAR_NAMA: nama yang boleh masuk (dipisah koma atau baris); kunci → nama tampilan
  const m = new Map();
  for (const b of String(process.env.DAFTAR_NAMA || '').split(/[,\n;]/)) {
    const t = L.rapikanNama(b); if (!t) continue;
    if (!L.namaTampilValid(t)) { console.warn('[peringatan] DAFTAR_NAMA: nama tidak valid dilewati: ' + JSON.stringify(t)); continue; }
    if (!m.has(L.kunciDariTampil(t))) m.set(L.kunciDariTampil(t), t);
  }
  return m;
})();
if (!MASUK_NAMA && DAFTAR_NAMA.size) console.warn('[peringatan] DAFTAR_NAMA diabaikan karena MASUK_NAMA tidak aktif.');

// Pengaman: folder situs tidak boleh memuat folder deploy/ atau folder data (mis. SITE_DIR keliru diarahkan ke akar proyek).
const DILARANG = [__dirname, L.DIR_DATA].map(p => { try { return fs.realpathSync(p); } catch (e) { return path.resolve(p); } });
if (DILARANG.some(d => d === SITE_DIR || d.startsWith(SITE_DIR + path.sep))) {
  console.error('SITE_DIR (' + SITE_DIR + ') memuat folder deploy/ atau data — arahkan ke salinan situs saja, mis. dist/site.');
  process.exit(1);
}
if (!fs.statSync(SITE_DIR).isDirectory() || !fs.existsSync(path.join(SITE_DIR, 'index.html'))) {
  console.error('SITE_DIR tidak berisi index.html: ' + SITE_DIR + '\nBangun dulu: node tools/build-artifact.js && mkdir -p dist/site && cp -r index.html css js sw.js manifest.webmanifest icons dist/site/');
  process.exit(1);
}
if (process.env.RAHASIA_SESI && !RAHASIA) console.warn('[peringatan] RAHASIA_SESI terlalu pendek (min. 32 karakter) — diabaikan.');

const log = (...a) => console.log(new Date().toISOString(), ...a);

// ---------- pengguna ----------
// Sumber: data/pengguna.json (CLI) + env. Berkas dibaca ulang otomatis bila berubah (tambah/hapus/ganti sandi berlaku tanpa restart).
let pengguna = new Map(); let mtimePengguna = -1; let cekPenggunaTerakhir = 0;
const penggunaEnv = new Map();

function hmac(kunci, teks) { return crypto.createHmac('sha256', kunci).update(teks).digest('base64url'); }

function siapkanPenggunaEnv() {
  // PENGGUNA_TIM: SATU akun per baris, "nama:sandi" atau "nama:scrypt$...". Semua teks setelah ":" pertama adalah sandi (boleh memuat
  // koma/titik koma). Pengecualian: baris yang SELURUHNYA berupa hash ("a:scrypt$...,b:scrypt$...") boleh dipisah koma/titik koma,
  // karena hash tidak pernah memuat keduanya. Baris sandi biasa yang tampak berisi beberapa akun ditolak (bukan dipotong diam-diam).
  const mentah = process.env.PENGGUNA_TIM || '';
  const butirHash = /^[a-z0-9][a-z0-9._-]*:scrypt\$[^,;\s:]+(?::admin)?$/i;
  const butir = [];
  mentah.split(/\r?\n/).forEach((baris, i) => {
    const t = baris.trim(); if (!t) return;
    const bagian = t.split(/[;,]/).map(s => s.trim()).filter(Boolean);
    if (bagian.length > 1 && bagian.every(s => butirHash.test(s))) bagian.forEach(s => butir.push({ t: s, baris: i + 1 }));
    else butir.push({ t, baris: i + 1 });
  });
  for (const { t, baris } of butir) {
    const i = t.indexOf(':');
    if (i < 1) { console.error('[galat] PENGGUNA_TIM baris ' + baris + ': tidak ada ":" (format nama:sandi) — baris dilewati'); continue; }
    const nama = L.normalNama(t.slice(0, i));
    // akhiran ":admin" (nama:sandi:admin atau nama:scrypt$…:admin) memberi peran admin dasbor tim
    let nilai = t.slice(i + 1), admin = false;
    if (/:admin$/i.test(nilai) && nilai.length > 6) { nilai = nilai.slice(0, -6); admin = true; }
    if (!L.hashValid(nilai) && /[;,]\s*[a-z0-9][a-z0-9._-]{1,31}\s*:/i.test(nilai)) {
      console.error('[galat] PENGGUNA_TIM baris ' + baris + ' (akun ' + JSON.stringify(nama) + '): tampak berisi beberapa akun dipisah koma/titik koma. ' +
        'Tulis satu akun per baris. Akun ini TIDAK dibuat.');
      continue;
    }
    if (!L.namaValid(nama)) { console.warn('[peringatan] PENGGUNA_TIM: nama tidak valid dilewati: ' + JSON.stringify(nama)); continue; }
    if (L.hashValid(nilai)) penggunaEnv.set(nama, { hash: nilai, versi: L.versiKredensial(nilai), sumber: 'env', admin });
    else if (nilai.length >= L.SANDI_MIN) penggunaEnv.set(nama, { hash: L.buatHash(nilai), versi: hmac(KUNCI_VERSI, 'env\0' + nama + '\0' + nilai).slice(0, 16), sumber: 'env', admin });
    else console.warn('[peringatan] PENGGUNA_TIM: sandi ' + nama + ' kurang dari ' + L.SANDI_MIN + ' karakter — dilewati');
  }
}

function bootstrapAdmin() {
  const u = L.normalNama(process.env.ADMIN_USER), p = process.env.ADMIN_PASS || '';
  if (!u && !p) return;
  if (!L.namaValid(u) || p.length < L.SANDI_MIN) { console.warn('[peringatan] ADMIN_USER/ADMIN_PASS diabaikan: nama 2–32 karakter (a-z 0-9 . _ -), sandi min. ' + L.SANDI_MIN + ' karakter'); return; }
  const d = L.bacaPengguna();
  // hanya bila berkas belum punya akun bersandi (akun anggota tanpa sandi dari mode masuk nama tidak dihitung)
  if (Object.values(d.pengguna).some(r => r && !r.tanpaSandi)) return;
  if (d.pengguna[u]) log('akun tanpa sandi "' + u + '" diganti akun admin dari ADMIN_USER');
  const kini = new Date().toISOString();
  // versi stabil (HMAC dengan RAHASIA_SESI) agar sesi admin tidak gugur setiap restart di hosting berdisk sementara
  d.pengguna[u] = { hash: L.buatHash(p), versi: hmac(KUNCI_VERSI, 'admin\0' + u + '\0' + p).slice(0, 16), admin: true, dibuat: kini, diubah: kini, catatan: 'dibuat dari ADMIN_USER' };
  L.simpanPengguna(d);
  log('admin pertama dibuat dari ADMIN_USER: ' + u);
}

function muatPengguna(paksa, segera) {
  const kini = Date.now();
  if (!paksa && !segera && kini - cekPenggunaTerakhir < 2000) return;
  cekPenggunaTerakhir = kini;
  let mt = 0; try { mt = fs.statSync(L.BERKAS_PENGGUNA).mtimeMs; } catch (e) { mt = 0; }
  if (!paksa && mt === mtimePengguna) return;
  try {
    const d = L.bacaPengguna();
    const baru = new Map();
    for (const [nama, r] of Object.entries(d.pengguna)) {
      if (!r || typeof r !== 'object') continue;
      const namaTampil = typeof r.namaTampil === 'string' && L.namaTampilValid(r.namaTampil) ? r.namaTampil : null;
      if (L.hashValid(r.hash)) baru.set(nama, { hash: r.hash, versi: r.versi || L.versiKredensial(r.hash), sumber: 'berkas', admin: r.admin === true || nama === NAMA_ADMIN, namaTampil });
      // akun tanpa sandi hanya berlaku dalam mode masuk nama, dan TIDAK PERNAH admin (juga bila namanya sama dengan ADMIN_USER)
      else if (r.tanpaSandi === true && MASUK_NAMA && L.namaValid(nama)) baru.set(nama, { hash: null, versi: String(r.versi || L.versiKredensial('tanpa\0' + nama + '\0' + r.dibuat)), sumber: 'berkas', admin: false, tanpaSandi: true, namaTampil, generasi: Number.isSafeInteger(r.generasi) && r.generasi > 0 ? r.generasi : 0 });
    }
    // akun env menimpa akun berkas bernama sama; peran admin digabung (env ":admin", berkas admin:true, atau ADMIN_USER)
    for (const [nama, r] of penggunaEnv) baru.set(nama, Object.assign({}, r, { admin: !!(r.admin || (baru.get(nama) && baru.get(nama).admin) || nama === NAMA_ADMIN) }));
    pengguna = baru; mtimePengguna = mt;
  } catch (e) { log('[galat] gagal membaca pengguna.json (daftar lama dipakai):', e.message); }
}

// ---------- sesi ----------
const sesi = new Map();     // sha256(token) → { u, v, e }
const dicabut = new Map();  // sha256(token) → e  (logout; mencegah klaim bertanda tangan dipakai lagi)
let tundaSimpan = null;
const hashToken = t => crypto.createHash('sha256').update(t).digest('base64url');

function muatSesi() {
  try {
    const d = JSON.parse(fs.readFileSync(BERKAS_SESI, 'utf8')); const kini = Date.now();
    for (const [k, s] of Object.entries(d.sesi || {})) if (s && s.e > kini) sesi.set(k, s);
    for (const [k, e] of Object.entries(d.dicabut || {})) if (e > kini) dicabut.set(k, e);
  } catch (e) { if (e.code !== 'ENOENT') log('[peringatan] sesi.json tidak terbaca, mulai kosong:', e.message); }
}
function simpanSesiNanti() {
  if (tundaSimpan) return;
  tundaSimpan = setTimeout(() => {
    tundaSimpan = null;
    try { L.tulisJsonAman(BERKAS_SESI, { sesi: Object.fromEntries(sesi), dicabut: Object.fromEntries(dicabut) }); }
    catch (e) { log('[galat] gagal menyimpan sesi.json:', e.message); }
  }, 500);
}
function bersihkanKedaluwarsa() {
  const kini = Date.now(); let ubah = false;
  for (const [k, s] of sesi) if (s.e <= kini) { sesi.delete(k); ubah = true; }
  for (const [k, e] of dicabut) if (e <= kini) { dicabut.delete(k); ubah = true; }
  for (const [k, g] of gagal) if (g.sampai <= kini) gagal.delete(k);
  for (const [k, j] of akunBaruIp) if (!j.length || kini - j[j.length - 1] >= JAM_MS) akunBaruIp.delete(k);
  if (ubah) simpanSesiNanti();
}

function buatSesi(nama) {
  const token = crypto.randomBytes(32).toString('base64url');
  const p = pengguna.get(nama);
  const s = { u: nama, v: p.versi, e: Date.now() + MASA_SESI_MS };
  if (p.tanpaSandi) { s.t = 1; if (p.namaTampil) s.n = p.namaTampil; if (p.generasi) s.g = p.generasi; } // klaim akun tanpa sandi: cukup untuk memulihkan akun setelah restart
  sesi.set(hashToken(token), s); simpanSesiNanti();
  if (!RAHASIA) return token;
  const muatan = Buffer.from(JSON.stringify(s)).toString('base64url');
  return token + '.' + muatan + '.' + hmac(RAHASIA, token + '.' + muatan);
}

function samaAman(a, b) { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && crypto.timingSafeEqual(x, y); }

function cekSesi(nilai) {
  if (!nilai || nilai.length > 600) return null;
  const [token, muatan, tanda] = nilai.split('.');
  if (!token || token.length !== 43) return null;
  const k = hashToken(token); const kini = Date.now();
  if (dicabut.has(k)) return null;
  let s = sesi.get(k);
  if (!s && RAHASIA && muatan && tanda && samaAman(tanda, hmac(RAHASIA, token + '.' + muatan))) {
    try { const c = JSON.parse(Buffer.from(muatan, 'base64url').toString('utf8')); if (c && typeof c.u === 'string' && c.e > kini) { s = { u: c.u, v: c.v, e: c.e }; if (c.t === 1) { s.t = 1; if (typeof c.n === 'string') s.n = c.n; if (Number.isSafeInteger(c.g) && c.g > 0) s.g = c.g; } sesi.set(k, s); simpanSesiNanti(); } } catch (e) { s = null; }
  }
  if (!s) return null;
  muatPengguna();
  let p = pengguna.get(s.u);
  if (!p && s.e > kini) p = pulihkanAkunTanpaSandi(s);
  if (s.e <= kini || !p || p.versi !== s.v) { sesi.delete(k); simpanSesiNanti(); return null; } // kedaluwarsa, pengguna dihapus, atau sandi diganti
  return { kunci: k, nama: s.u, e: s.e, admin: !!p.admin, tanpaSandi: !!p.tanpaSandi, namaTampil: p.namaTampil || null };
}
// Render free tanpa disk: pengguna.json kosong lagi setelah layanan tidur/restart. Versi akun tanpa sandi deterministik (versiTanpaSandi),
// sehingga klaim sesi bertanda tangan (RAHASIA_SESI) cukup untuk membuat ulang akun itu diam-diam, dengan pengaman yang sama seperti
// masuk nama: hanya bila MASUK_NAMA aktif, bukan nama admin/akun bersandi, lolos DAFTAR_NAMA, BATAS_AKUN belum tercapai, dan akun itu
// tidak dihapus admin (penanda "dihapus" di pengguna.json yang ditulis kelola-pengguna.js hapus).
// generasi naik setiap kali admin menghapus akun itu (kelola-pengguna.js hapus) → sesi dari akun lama tidak berlaku untuk akun baru bernama sama.
function versiTanpaSandi(kunci, generasi) { return hmac(KUNCI_VERSI, 'tanpa\0' + kunci + (generasi > 0 ? '\0' + generasi : '')).slice(0, 16); }
function generasiDihapus(d, kunci) { const t = d.dihapus && d.dihapus[kunci]; return t && Number.isSafeInteger(t.generasi) && t.generasi > 0 ? t.generasi : 0; }
function pulihkanAkunTanpaSandi(s) {
  const kunci = s.u;
  if (!MASUK_NAMA || !RAHASIA || s.t !== 1 || !L.namaValid(kunci) || kunci === NAMA_ADMIN || penggunaEnv.has(kunci)) return null;
  const g = Number.isSafeInteger(s.g) && s.g > 0 ? s.g : 0;
  if (!samaAman(String(s.v), versiTanpaSandi(kunci, g))) return null;
  if (DAFTAR_NAMA.size && !DAFTAR_NAMA.has(kunci)) return null;
  if (jumlahAkunTanpaSandi() >= BATAS_AKUN) return null;
  try {
    const d = L.bacaPengguna();
    if (d.pengguna[kunci] || (d.dihapus && d.dihapus[kunci])) return null;
    const tampil = DAFTAR_NAMA.get(kunci) || (typeof s.n === 'string' && L.namaTampilValid(s.n) && L.kunciDariTampil(s.n) === kunci ? s.n : kunci);
    const iso = new Date().toISOString();
    d.pengguna[kunci] = Object.assign({ tanpaSandi: true, namaTampil: tampil, admin: false, versi: versiTanpaSandi(kunci, g), dibuat: iso, diubah: iso, catatan: 'dipulihkan dari sesi' }, g ? { generasi: g } : {});
    L.simpanPengguna(d);
    log('akun anggota dipulihkan dari sesi bertanda tangan pengguna=' + kunci);
  } catch (e) { log('[galat] gagal memulihkan akun dari sesi:', e.message); return null; }
  muatPengguna(true);
  return pengguna.get(kunci) || null;
}
function cabutSesi(nilai) {
  if (!nilai) return;
  const token = nilai.split('.')[0]; if (!token) return;
  const k = hashToken(token); const s = sesi.get(k);
  sesi.delete(k); dicabut.set(k, s ? s.e : Date.now() + MASA_SESI_MS); simpanSesiNanti();
}

// ---------- pembatasan percobaan ----------
const gagal = new Map(); // kunci → { n, sampai }
function terblokir(kunci, maks) { const g = gagal.get(kunci); if (!g || g.sampai <= Date.now()) return 0; return g.n >= maks ? g.sampai : 0; }
function catatGagal(kunci, jendela) { const kini = Date.now(); let g = gagal.get(kunci); if (!g || g.sampai <= kini) { g = { n: 0, sampai: kini + (jendela || JENDELA_MS) }; gagal.set(kunci, g); } g.n++; }
function batalkanCatat(kunci) { const g = gagal.get(kunci); if (g && --g.n <= 0) gagal.delete(kunci); }

// Permintaan login yang sedang diproses: dua per nama+IP (klik ganda), MAKS_PROSES_IP per IP. Ditambah semafor global untuk scrypt.
const sedangProses = new Map(); // kunci → jumlah
const tambahProses = k => sedangProses.set(k, (sedangProses.get(k) || 0) + 1);
const kurangiProses = k => { const n = (sedangProses.get(k) || 0) - 1; if (n > 0) sedangProses.set(k, n); else sedangProses.delete(k); };
let scryptJalan = 0; const antreanScrypt = [];
function ambilSlotScrypt() {
  if (scryptJalan < MAKS_SCRYPT) { scryptJalan++; return Promise.resolve(); }
  if (antreanScrypt.length >= MAKS_ANTREAN_SCRYPT) return Promise.reject(Object.assign(new Error('server sibuk'), { status: 503 }));
  return new Promise(ok => antreanScrypt.push(ok));
}
function lepasSlotScrypt() { const berikut = antreanScrypt.shift(); if (berikut) berikut(); else scryptJalan--; }

// ---------- utilitas HTTP ----------
function ipKlien(req) {
  const soket = (req.socket.remoteAddress || '').replace(/^::ffff:/, '');
  if (!TRUST_PROXY || !dariProxyTepercaya(soket)) return soket; // XFF dari klien langsung tidak pernah dipercaya
  const xff = String(req.headers['x-forwarded-for'] || '').split(',').map(s => s.trim()).filter(Boolean);
  const ip = xff.length >= TRUST_PROXY ? xff[xff.length - TRUST_PROXY] : (xff[0] || soket);
  return net.isIP(ip.replace(/^::ffff:/, '')) ? ip.replace(/^::ffff:/, '') : soket;
}
function dariProxyTepercaya(alamat) {
  if (PROXY_TEPERCAYA.semua) return true;
  const jenis = net.isIP(alamat); if (!jenis) return false;
  try { return PROXY_TEPERCAYA.b.check(alamat, jenis === 6 ? 'ipv6' : 'ipv4'); } catch (e) { return false; }
}
function viaHttps(req) {
  if (COOKIE_SECURE || req.socket.encrypted) return true;
  return String(req.headers['x-forwarded-proto'] || '').split(',')[0].trim().toLowerCase() === 'https';
}
function bacaCookie(req) {
  const hasil = {};
  for (const bagian of String(req.headers.cookie || '').split(';')) {
    const i = bagian.indexOf('='); if (i < 0) continue;
    const k = bagian.slice(0, i).trim(); if (!(k in hasil)) hasil[k] = bagian.slice(i + 1).trim();
  }
  return hasil;
}
const namaCookieSesi = aman => aman ? '__Host-ukp_sesi' : 'ukp_sesi';
const namaCookieCsrf = aman => aman ? '__Host-ukp_csrf' : 'ukp_csrf';
function cookie(nama, nilai, { aman, maxAge }) {
  return nama + '=' + nilai + '; Path=/; HttpOnly; SameSite=Lax' + (aman ? '; Secure' : '') + (maxAge != null ? '; Max-Age=' + maxAge : '');
}
// Penanda server tim (bukan rahasia, sengaja tanpa HttpOnly): aplikasi membacanya lewat document.cookie untuk tahu bahwa ia berjalan di
// server tim, sehingga saat server lambat/mati aplikasi menampilkan "server tidak terjangkau" dan mencoba lagi, bukan jatuh ke jalur Claude.
const PENANDA_SERVER = aman => 'ukp_srv=1; Path=/; SameSite=Lax; Max-Age=34560000' + (aman ? '; Secure' : '');
function pasangPenanda(req, res) {
  if (bacaCookie(req).ukp_srv === '1') return;
  const lama = res.getHeader('Set-Cookie');
  res.setHeader('Set-Cookie', [].concat(lama || [], PENANDA_SERVER(viaHttps(req))));
}
function nilaiSesi(req) { const c = bacaCookie(req); return c['__Host-ukp_sesi'] || c.ukp_sesi || ''; }

const CSP_APLIKASI = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",           // skrip inline penjaga muat di index.html
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob:",
  // fonts.*: service worker menyimpan Google Fonts untuk offline, dan fitur "Versi offline" mengunduh fon untuk ditanam
  "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
  "manifest-src 'self'", "worker-src 'self'", "object-src 'none'", "base-uri 'self'", "form-action 'self'", "frame-ancestors 'none'",
].join('; ');
const CSP_LOGIN = "default-src 'none'; style-src 'unsafe-inline'; img-src data:; form-action 'self'; base-uri 'none'; frame-ancestors 'none'";

function headerKeamanan(req, res, csp) {
  res.setHeader('Content-Security-Policy', csp || CSP_APLIKASI);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'same-origin');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), bluetooth=(), interest-cohort=()');
  if (viaHttps(req)) res.setHeader('Strict-Transport-Security', 'max-age=15552000');
}
function kirim(res, status, tipe, isi, ekstra) {
  res.statusCode = status;
  res.setHeader('Content-Type', tipe);
  if (!res.hasHeader('Cache-Control')) res.setHeader('Cache-Control', 'no-store');
  for (const [k, v] of Object.entries(ekstra || {})) res.setHeader(k, v);
  const b = Buffer.from(isi); res.setHeader('Content-Length', b.length);
  res.end(res.req.method === 'HEAD' ? undefined : b);
}
function alihkan(res, status, ke, ekstra) { res.statusCode = status; res.setHeader('Location', ke); res.setHeader('Cache-Control', 'no-store'); for (const [k, v] of Object.entries(ekstra || {})) res.setHeader(k, v); res.end(); }
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Tujuan setelah login: hanya path lokal (bukan //host atau skema lain).
function tujuanAman(t) {
  t = String(t || '/');
  if (!/^\/(?![\/\\])[^\s]*$/.test(t) || t.length > 512 || t.startsWith('/masuk') || t.startsWith('/keluar')) return '/';
  return t;
}
function asalSama(req) {
  const asal = req.headers.origin || req.headers.referer;
  if (!asal) return true; // tanpa Origin/Referer: tetap wajib lolos token CSRF double-submit
  if (asal === 'null') return false;
  try { return new URL(asal).host === req.headers.host; } catch (e) { return false; }
}

// ---------- halaman login ----------
const IKON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230E5A47'/%3E%3Cpath d='M18 22h28M18 32h28M18 42h18' stroke='%23fff' stroke-width='5' stroke-linecap='round'/%3E%3C/svg%3E";
// tahap: 'klasik' (nama + sandi; mode bawaan), 'nama' (mode masuk nama: hanya kolom nama), 'sandi' (mode masuk nama: akun bersandi/admin).
function halamanMasuk({ pesan = '', nada = 'galat', nama = '', lanjut = '/', tahap = 'klasik', csrf, nonce }) {
  const bantuan = KONTAK_ADMIN
    ? (/^https?:\/\//i.test(KONTAK_ADMIN) ? esc(KONTAK_ADMIN) : /@/.test(KONTAK_ADMIN) ? 'mailto:' + esc(KONTAK_ADMIN) : '#bantuan')
    : '#bantuan';
  return `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#0E5A47">
<title>Masuk · Pelatih UKP</title>
<link rel="icon" href="${IKON}">
<style>
:root{--latar:#F3F5F4;--kartu:#fff;--teks:#15201B;--redup:#55635C;--garis:#D3DBD7;--utama:#0E5A47;--utama-teks:#fff;--fokus:#1C8C6E;--galat-l:#FDECEC;--galat-t:#8A1C1C;--info-l:#E6F2EE;--info-t:#0E5A47;color-scheme:light dark}
@media (prefers-color-scheme:dark){:root{--latar:#0F1512;--kartu:#17201B;--teks:#E4EBE7;--redup:#A3B1AA;--garis:#2C3832;--utama:#7ED3B4;--utama-teks:#0F1512;--fokus:#7ED3B4;--galat-l:#3A1E1E;--galat-t:#F5B5B5;--info-l:#183128;--info-t:#9FE0C8}}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;min-height:100dvh;display:flex;align-items:center;justify-content:center;padding:24px 16px;background:var(--latar);color:var(--teks);font:16px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}
main{width:100%;max-width:380px}
.merek{display:flex;align-items:center;gap:12px;margin-bottom:20px}
.merek img{width:44px;height:44px;border-radius:10px}
.merek b{display:block;font-size:1.2rem;letter-spacing:-.01em}
.merek span{color:var(--redup);font-size:.9rem}
.kartu{background:var(--kartu);border:1px solid var(--garis);border-radius:12px;padding:24px}
h1{font-size:1.25rem;margin:0 0 4px}
p.sub{margin:0 0 20px;color:var(--redup);font-size:.95rem}
label{display:block;font-weight:600;font-size:.92rem;margin:0 0 6px}
input{display:block;width:100%;font:inherit;padding:11px 12px;min-height:46px;border:1px solid var(--garis);border-radius:8px;background:var(--latar);color:var(--teks);margin-bottom:16px}
input:focus{outline:3px solid color-mix(in srgb,var(--fokus) 35%,transparent);border-color:var(--fokus)}
button{width:100%;font:inherit;font-weight:600;min-height:46px;border:0;border-radius:8px;background:var(--utama);color:var(--utama-teks);cursor:pointer;margin-top:4px}
button:hover{filter:brightness(1.08)}button:focus-visible{outline:3px solid var(--fokus);outline-offset:2px}
.pesan{border-radius:8px;padding:10px 12px;margin-bottom:16px;font-size:.93rem}
.galat{background:var(--galat-l);color:var(--galat-t)}.info{background:var(--info-l);color:var(--info-t)}
.kaki{margin-top:16px;text-align:center;font-size:.92rem;color:var(--redup)}
.kaki a{color:var(--utama);font-weight:600}
#bantuan{display:none;margin-top:12px;font-size:.9rem;color:var(--redup);text-align:center}#bantuan:target{display:block}
</style>
</head>
<body>
<main>
  <div class="merek"><img src="${IKON}" alt=""><div><b>Pelatih UKP</b><span>Akses khusus tim internal</span></div></div>
  <div class="kartu">
    <h1>${tahap === 'sandi' ? 'Masuk dengan kata sandi' : 'Masuk'}</h1>
    <p class="sub">${tahap === 'nama' ? 'Ketik nama Anda untuk mulai berlatih. Tidak perlu kata sandi.' : tahap === 'sandi' ? 'Untuk admin tim dan akun bersandi.' : 'Gunakan nama pengguna dan kata sandi dari admin tim.'}</p>
    ${pesan ? `<div class="pesan ${nada === 'info' ? 'info' : 'galat'}" role="${nada === 'info' ? 'status' : 'alert'}">${esc(pesan)}</div>` : ''}
    <form method="post" action="/masuk" autocomplete="on">
      <input type="hidden" name="csrf" value="${esc(csrf)}">
      <input type="hidden" name="lanjut" value="${esc(lanjut)}">
${tahap === 'nama' ? `      <input type="hidden" name="tahap" value="nama">
      <label for="nama">Nama Anda</label>
      <input id="nama" name="nama" type="text" value="${esc(nama)}" autocomplete="name" spellcheck="false" required minlength="2" maxlength="40"${DAFTAR_NAMA.size ? ' list="daftar-nama"' : ''} autofocus>
${DAFTAR_NAMA.size ? `      <datalist id="daftar-nama">${Array.from(DAFTAR_NAMA.values()).sort((a, b) => a.localeCompare(b, 'id')).map(t => `<option value="${esc(t)}">`).join('')}</datalist>
` : ''}      <button type="submit">Masuk</button>` : `${tahap === 'sandi' ? '      <input type="hidden" name="tahap" value="sandi">\n' : ''}      <label for="nama">Nama pengguna</label>
      <input id="nama" name="nama" type="text" value="${esc(nama)}" autocomplete="username" autocapitalize="none" spellcheck="false" required maxlength="64" ${nama ? '' : 'autofocus'}>
      <label for="sandi">Kata sandi</label>
      <input id="sandi" name="sandi" type="password" autocomplete="current-password" required maxlength="256" ${nama ? 'autofocus' : ''}>
      <button type="submit">Masuk</button>`}
    </form>
  </div>
${tahap === 'nama' ? `  <p class="kaki"><a href="/masuk?admin=1${lanjut !== '/' ? '&amp;lanjut=' + esc(encodeURIComponent(lanjut)) : ''}" data-k="masuk-admin">Masuk sebagai admin</a></p>`
  : `  <p class="kaki">Lupa sandi? <a href="${bantuan}">Hubungi admin</a></p>
${tahap === 'sandi' ? `  <p class="kaki">Bukan admin? <a href="/masuk${lanjut !== '/' ? '?lanjut=' + esc(encodeURIComponent(lanjut)) : ''}" data-k="masuk-nama">Masuk dengan nama saja</a></p>
` : ''}  <p id="bantuan">Kata sandi hanya bisa diatur ulang oleh admin tim. Hubungi admin yang memberi Anda akun ini.</p>`}
</main>
<script nonce="${nonce}">${SKRIP_BERSIHKAN};</script>
</body>
</html>`;
}

function tampilMasuk(req, res, status, opsi) {
  const aman = viaHttps(req); const c = bacaCookie(req);
  let csrf = c[namaCookieCsrf(aman)];
  if (!csrf || !/^[A-Za-z0-9_-]{43}$/.test(csrf)) {
    csrf = crypto.randomBytes(32).toString('base64url');
    res.setHeader('Set-Cookie', cookie(namaCookieCsrf(aman), csrf, { aman, maxAge: 7200 }));
  }
  // Halaman masuk hanya tampil tanpa sesi yang berlaku: skrip kecil (nonce) menghapus salinan aplikasi (service worker + cache "ukp-*")
  // yang mungkin tertinggal di perangkat ini dari sesi lama, sehingga aplikasi tidak lagi terbuka dari cache. Progres tidak disentuh.
  const nonce = crypto.randomBytes(16).toString('base64');
  headerKeamanan(req, res, CSP_LOGIN.replace("default-src 'none';", "default-src 'none'; script-src 'nonce-" + nonce + "';"));
  kirim(res, status, 'text/html; charset=utf-8', halamanMasuk({ tahap: MASUK_NAMA ? 'nama' : 'klasik', ...opsi, csrf, nonce }));
}

function bacaBody(req, batas) {
  return new Promise((selesai, gagalkan) => {
    let n = 0; const potong = [];
    req.on('data', d => { n += d.length; if (n > batas) { gagalkan(Object.assign(new Error('terlalu besar'), { status: 413 })); req.destroy(); } else potong.push(d); });
    req.on('end', () => selesai(Buffer.concat(potong).toString('utf8')));
    req.on('error', gagalkan);
  });
}

async function prosesMasuk(req, res, ip) {
  const tipe = String(req.headers['content-type'] || '').split(';')[0].trim().toLowerCase();
  if (tipe !== 'application/x-www-form-urlencoded') return kirim(res, 415, 'text/plain; charset=utf-8', 'Format permintaan tidak didukung.');
  const f = new URLSearchParams(await bacaBody(req, 8192));
  const aman = viaHttps(req);
  // mode masuk nama: tahap "nama" (tanpa sandi) atau "sandi" (admin/akun bersandi; juga kiriman tanpa field tahap yang membawa sandi)
  const tahap = !MASUK_NAMA ? 'klasik' : (f.get('tahap') === 'sandi' || (!f.has('tahap') && f.get('sandi'))) ? 'sandi' : 'nama';
  const nama = (MASUK_NAMA ? L.kunciMasuk(f.get('nama')) : L.normalNama(f.get('nama'))).slice(0, 64), sandi = f.get('sandi') || '', lanjut = tujuanAman(f.get('lanjut'));
  const namaIsian = MASUK_NAMA ? L.rapikanNama(f.get('nama')).slice(0, 64) : nama; // ditampilkan kembali seperti diketik
  const csrfCookie = bacaCookie(req)[namaCookieCsrf(aman)] || '';
  if (!asalSama(req) || !csrfCookie || !samaAman(csrfCookie, f.get('csrf') || '')) {
    log('masuk ditolak (CSRF/asal) ip=' + ip);
    return tampilMasuk(req, res, 403, { pesan: 'Sesi formulir kedaluwarsa. Silakan coba masuk lagi.', nama: namaIsian, lanjut, tahap });
  }
  if (tahap === 'nama') return prosesMasukNama(req, res, ip, f, lanjut, aman);
  const kunci = nama + '|' + ip, kunciIp = 'ip|' + ip, kunciNama = 'u|' + nama;
  const tolak = (status, pesan, detik, catatan) => {
    log('masuk ditolak sementara (' + catatan + ') pengguna=' + JSON.stringify(nama) + ' ip=' + ip);
    if (detik) res.setHeader('Retry-After', String(detik));
    return tampilMasuk(req, res, status, { pesan, nama: namaIsian, lanjut, tahap });
  };
  // Batas permintaan yang sedang diproses (dicek dan dicatat tanpa jeda await, sehingga permintaan serentak tidak bisa menyalip).
  if ((sedangProses.get(kunci) || 0) >= 2 || (sedangProses.get(kunciIp) || 0) >= MAKS_PROSES_IP)
    return tolak(429, 'Permintaan masuk sebelumnya masih diproses. Tunggu sebentar lalu coba lagi.', 5, 'serentak');
  const sampai = Math.max(terblokir(kunci, MAKS_GAGAL), terblokir(kunciIp, MAKS_GAGAL_IP), terblokir(kunciNama, MAKS_GAGAL_NAMA));
  if (sampai) {
    const menit = Math.max(1, Math.ceil((sampai - Date.now()) / 60000));
    return tolak(429, 'Terlalu banyak percobaan masuk. Coba lagi dalam ' + menit + ' menit.', Math.ceil((sampai - Date.now()) / 1000), 'batas percobaan');
  }
  // Percobaan dicatat SEBELUM scrypt (dianggap gagal sampai terbukti benar); login yang berhasil membatalkan catatannya.
  catatGagal(kunci); catatGagal(kunciIp); catatGagal(kunciNama, JENDELA_NAMA_MS);
  tambahProses(kunci); tambahProses(kunciIp);
  let cocok = false, p = null;
  try {
    await ambilSlotScrypt();
    try {
      muatPengguna(false, true); // login: selalu cek perubahan berkas (pengguna baru langsung bisa masuk)
      p = pengguna.get(nama);
      cocok = await L.cocokkanSandi(sandi, p && p.hash); // scrypt tetap dijalankan walau pengguna tidak ada
    } finally { lepasSlotScrypt(); }
  } catch (e) {
    if (e.status === 503) { batalkanCatat(kunci); batalkanCatat(kunciIp); batalkanCatat(kunciNama); return tolak(503, 'Server sedang sibuk. Coba lagi beberapa detik lagi.', 5, 'server sibuk'); }
    throw e;
  } finally { kurangiProses(kunci); kurangiProses(kunciIp); }
  if (!cocok || !p || !sandi) {
    log('masuk gagal pengguna=' + JSON.stringify(nama) + ' ip=' + ip);
    return tampilMasuk(req, res, 401, { pesan: 'Nama pengguna atau kata sandi salah.', nama: namaIsian, lanjut, tahap });
  }
  gagal.delete(kunci); batalkanCatat(kunciIp); batalkanCatat(kunciNama);
  selesaiMasuk(req, res, ip, nama, lanjut, aman, 'sandi');
}

// Sesi dibuat → cookie sesi + penanda server; cookie ukp_nama (bukan rahasia, terbaca aplikasi) membawa nama tampilan akun tanpa sandi
// agar Pengaturan › Tim bisa menulis "Masuk sebagai Rina". Untuk akun bersandi cookie itu dihapus.
function cookieNama(aman, kunci) {
  const p = pengguna.get(kunci);
  const dasar = '; Path=/; SameSite=Lax' + (aman ? '; Secure' : '');
  if (!p || !p.tanpaSandi) return 'ukp_nama=' + dasar + '; Max-Age=0';
  return 'ukp_nama=' + encodeURIComponent(kunci + '|' + (p.namaTampil || kunci)) + dasar + '; Max-Age=' + Math.floor(MASA_SESI_MS / 1000);
}
function selesaiMasuk(req, res, ip, kunci, lanjut, aman, cara) {
  const nilai = buatSesi(kunci);
  log('masuk berhasil (' + cara + ') pengguna=' + kunci + ' ip=' + ip);
  catatMasuk(kunci);
  alihkan(res, 303, lanjut, { 'Set-Cookie': [
    cookie(namaCookieSesi(aman), nilai, { aman, maxAge: Math.floor(MASA_SESI_MS / 1000) }),
    cookie(namaCookieCsrf(aman), '', { aman, maxAge: 0 }),
    PENANDA_SERVER(aman),
    cookieNama(aman, kunci),
  ] });
}

// ---------- masuk nama (MASUK_NAMA=1) ----------
// Siapa pun yang membuka tautan bisa masuk atas nama siapa pun (kecuali nama akun bersandi) — sengaja, untuk tim internal.
// Pengaman: nama admin/akun bersandi selalu meminta sandi; DAFTAR_NAMA (opsional) membatasi nama; akun baru dibatasi per IP dan total.
const akunBaruIp = new Map(); // ip → [ms…] pembuatan akun baru dalam 1 jam terakhir
const JAM_MS = 60 * 60 * 1000;
function jumlahAkunTanpaSandi() { let n = 0; for (const p of pengguna.values()) if (p.tanpaSandi) n++; return n; }

async function prosesMasukNama(req, res, ip, f, lanjut, aman) {
  const mentah = String(f.get('nama') || '').slice(0, 200);
  const tampil = L.rapikanNama(mentah);
  const ulang = (status, pesan, o) => tampilMasuk(req, res, status, Object.assign({ pesan, nama: tampil.slice(0, 40), lanjut, tahap: 'nama' }, o));
  const kunciIp = 'nm|' + ip;
  const sampai = terblokir(kunciIp, MAKS_MASUK_NAMA_IP);
  if (sampai) {
    res.setHeader('Retry-After', String(Math.ceil((sampai - Date.now()) / 1000)));
    log('masuk nama ditolak sementara (batas percobaan) ip=' + ip);
    return ulang(429, 'Terlalu banyak percobaan masuk dari jaringan ini. Coba lagi dalam ' + Math.max(1, Math.ceil((sampai - Date.now()) / 60000)) + ' menit.');
  }
  catatGagal(kunciIp);
  muatPengguna(false, true);
  // Nama akun bersandi (admin, akun PENGGUNA_TIM/CLI, atau ADMIN_USER) tidak pernah bisa dipakai tanpa sandi → tahap kedua.
  const kandidat = [L.normalNama(mentah), L.kunciMasuk(mentah)];
  if (kandidat.some(k => k && (k === NAMA_ADMIN || (pengguna.get(k) && !pengguna.get(k).tanpaSandi)))) {
    return tampilMasuk(req, res, 200, { pesan: 'Nama ini memakai kata sandi. Masukkan kata sandi untuk melanjutkan.', nada: 'info', nama: tampil.slice(0, 64), lanjut, tahap: 'sandi' });
  }
  if (!L.namaTampilValid(tampil)) return ulang(400, 'Nama harus 2–40 karakter: huruf, angka, spasi, titik, atau tanda hubung, diawali huruf atau angka.');
  const kunci = L.kunciDariTampil(tampil);
  if (DAFTAR_NAMA.size && !DAFTAR_NAMA.has(kunci)) {
    log('masuk nama ditolak (tidak ada di DAFTAR_NAMA) nama=' + JSON.stringify(tampil) + ' ip=' + ip);
    return ulang(403, 'Nama ini tidak ada di daftar tim. Pilih nama Anda dari daftar, atau hubungi admin tim.');
  }
  if (!pengguna.get(kunci)) {
    const kini = Date.now();
    const jejak = (akunBaruIp.get(ip) || []).filter(t => kini - t < JAM_MS);
    if (jejak.length >= BATAS_AKUN_IP) {
      res.setHeader('Retry-After', String(Math.ceil((JAM_MS - (kini - jejak[0])) / 1000)));
      log('akun baru ditolak (batas per IP) ip=' + ip);
      return ulang(429, 'Terlalu banyak akun baru dari jaringan ini dalam satu jam. Coba lagi nanti, atau hubungi admin tim.');
    }
    if (jumlahAkunTanpaSandi() >= BATAS_AKUN) {
      log('[peringatan] akun baru ditolak: BATAS_AKUN (' + BATAS_AKUN + ') tercapai. Hapus akun lama: node deploy/kelola-pengguna.js hapus <nama>');
      return ulang(403, 'Jumlah akun tim sudah mencapai batas. Hubungi admin tim.');
    }
    try {
      const d = L.bacaPengguna();
      const ada = d.pengguna[kunci];
      if (ada && !ada.tanpaSandi) return tampilMasuk(req, res, 200, { pesan: 'Nama ini memakai kata sandi. Masukkan kata sandi untuk melanjutkan.', nada: 'info', nama: tampil, lanjut, tahap: 'sandi' });
      if (!ada) {
        const iso = new Date(kini).toISOString();
        // versi deterministik (lihat pulihkanAkunTanpaSandi): nama yang sama selalu mendapat versi yang sama
        const g = generasiDihapus(d, kunci); // nama yang pernah dihapus admin → generasi baru, sesi akun lama tetap tidak berlaku
        d.pengguna[kunci] = Object.assign({ tanpaSandi: true, namaTampil: DAFTAR_NAMA.get(kunci) || tampil, admin: false, versi: versiTanpaSandi(kunci, g), dibuat: iso, diubah: iso }, g ? { generasi: g } : {});
        if (d.dihapus) { delete d.dihapus[kunci]; if (!Object.keys(d.dihapus).length) delete d.dihapus; } // masuk lagi secara sadar membatalkan penanda hapus
        L.simpanPengguna(d);
        jejak.push(kini); akunBaruIp.set(ip, jejak);
        log('akun anggota dibuat (masuk nama) pengguna=' + kunci + ' ip=' + ip);
      }
    } catch (e) {
      log('[galat] gagal membuat akun masuk nama:', e.message);
      return ulang(500, 'Akun belum bisa dibuat karena penyimpanan server bermasalah. Coba lagi, atau hubungi admin tim.');
    }
    muatPengguna(true);
  }
  const p = pengguna.get(kunci);
  if (!p) return ulang(500, 'Akun belum bisa dibuat. Coba lagi, atau hubungi admin tim.');
  if (!p.tanpaSandi) return tampilMasuk(req, res, 200, { pesan: 'Nama ini memakai kata sandi. Masukkan kata sandi untuk melanjutkan.', nada: 'info', nama: tampil, lanjut, tahap: 'sandi' });
  selesaiMasuk(req, res, ip, kunci, lanjut, aman, 'nama');
}

// Membersihkan salinan aplikasi di perangkat: service worker dilepas dan Cache Storage "ukp-*" dihapus. localStorage (progres belajar)
// TIDAK disentuh. Dipakai halaman /keluar (langsung) dan sw.js pengganti (saat sesi sudah tidak berlaku, lihat SW_PEMBERSIH).
const SKRIP_BERSIHKAN = `(async function(){
  try { if (navigator.serviceWorker && navigator.serviceWorker.getRegistrations) { var rs = await navigator.serviceWorker.getRegistrations(); await Promise.all(rs.map(function (r) { return r.unregister(); })); } } catch (e) {}
  try { if (window.caches) { var ks = await caches.keys(); await Promise.all(ks.filter(function (k) { return /^ukp-/.test(k); }).map(function (k) { return caches.delete(k); })); } } catch (e) {}
})()`;
function halamanKeluar(nonce) {
  return `<!doctype html>
<html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow">
<title>Keluar · Pelatih UKP</title>
<noscript><meta http-equiv="refresh" content="0;url=/masuk?keluar=1"></noscript>
<style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px 16px;background:#F3F5F4;color:#15201B;font:16px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif}a{color:#0E5A47;font-weight:600}@media (prefers-color-scheme:dark){body{background:#0F1512;color:#E4EBE7}a{color:#7ED3B4}}</style>
</head><body><main><p role="status">Keluar dan menghapus salinan aplikasi dari perangkat ini…</p><p><a href="/masuk?keluar=1">Lanjut ke halaman masuk</a></p></main>
<script nonce="${nonce}">
(function(){ var pergi = function(){ location.replace('/masuk?keluar=1'); }; setTimeout(pergi, 4000); ${SKRIP_BERSIHKAN}.then(pergi, pergi); })();
</script></body></html>`;
}
// sw.js pengganti untuk peramban yang sesinya sudah tidak berlaku (logout di perangkat lain, akun dihapus, sandi diganti, sesi kedaluwarsa).
// Peramban memeriksa pembaruan sw.js saat daring; versi ini menggantikan service worker aplikasi, menghapus cache "ukp-*", melepaskan
// pendaftarannya, lalu membawa tab yang terbuka ke /masuk. Sejak itu aplikasi tidak lagi terbuka dari cache di perangkat tersebut.
const SW_PEMBERSIH = `'use strict';
/* Pelatih UKP — sesi tidak berlaku: membersihkan salinan aplikasi di perangkat ini (progres di localStorage tidak dihapus). */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    try { var ks = await caches.keys(); await Promise.all(ks.filter(function (k) { return /^ukp-/.test(k); }).map(function (k) { return caches.delete(k); })); } catch (e) {}
    try { await self.registration.unregister(); } catch (e) {}
    try { var cs = await self.clients.matchAll({ type: 'window' }); await Promise.all(cs.map(function (c) { return c.navigate('/masuk').catch(function () { return null; }); })); } catch (e) {}
  })());
});
`;

function prosesKeluar(req, res) {
  const aman = viaHttps(req);
  // GET dari situs lain (mis. tautan jebakan) tidak langsung mengeluarkan pengguna
  if (req.method === 'GET' && req.headers['sec-fetch-site'] === 'cross-site') return alihkan(res, 303, '/');
  // POST (tombol Keluar di aplikasi, fetch same-origin): permintaan dari situs lain ditolak
  if (req.method === 'POST' && (req.headers['sec-fetch-site'] === 'cross-site' || req.headers['sec-fetch-site'] === 'same-site' || !asalSama(req))) { headerKeamanan(req, res, CSP_LOGIN); return kirim(res, 403, 'text/plain; charset=utf-8', 'Permintaan ditolak.'); }
  cabutSesi(nilaiSesi(req));
  const nonce = crypto.randomBytes(16).toString('base64');
  headerKeamanan(req, res, "default-src 'none'; script-src 'nonce-" + nonce + "'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'");
  kirim(res, 200, 'text/html; charset=utf-8', halamanKeluar(nonce), {
    'Set-Cookie': [cookie('ukp_sesi', '', { aman: false, maxAge: 0 }), ...(aman ? [cookie('__Host-ukp_sesi', '', { aman: true, maxAge: 0 })] : []), 'ukp_nama=; Path=/; SameSite=Lax; Max-Age=0' + (aman ? '; Secure' : '')],
    'Clear-Site-Data': '"cache"', // cache HTTP saja; Cache Storage dihapus skrip di atas agar progres (localStorage) tetap aman
  });
}

// ---------- berkas statis ----------
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.txt': 'text/plain; charset=utf-8',
  '.ics': 'text/calendar; charset=utf-8', '.pdf': 'application/pdf', '.map': 'application/json; charset=utf-8',
};
const BISA_GZIP = new Set(['.html', '.js', '.mjs', '.css', '.json', '.webmanifest', '.svg', '.txt', '.ics', '.map']);
const cacheGzip = new Map(); // path → { kunci, isi }

// Mengembalikan path absolut di dalam SITE_DIR, atau { status } bila ditolak.
function petakanPath(urlMentah) {
  const mentah = urlMentah.split(/[?#]/)[0];
  if (!mentah.startsWith('/') || mentah.length > 1024) return { status: 400 };
  let dek;
  try { dek = decodeURIComponent(mentah); } catch (e) { return { status: 400 }; }
  if (dek.includes('\0') || dek.includes('\\')) return { status: 400 };
  const seg = dek.split('/').filter(Boolean);
  if (seg.some(s => s === '..' || s === '.')) return { status: 400 };     // traversal (termasuk %2e%2e)
  if (seg.some(s => s.startsWith('.'))) return { status: 404 };            // dotfile / folder tersembunyi
  if (dek.endsWith('/') && seg.length) return { status: 404 };             // tidak ada daftar isi folder
  const rel = seg.length ? seg.join('/') : 'index.html';
  const abs = path.resolve(SITE_DIR, rel);
  if (abs !== SITE_DIR && !abs.startsWith(SITE_DIR + path.sep)) return { status: 400 };
  return { abs, rel };
}

function kebijakanCache(rel, adaKueri) {
  if (/^(index\.html|sw\.js|manifest\.webmanifest)$/.test(rel)) return 'private, no-cache';
  if (adaKueri && /[?&]v=/.test(adaKueri)) return 'private, max-age=31536000, immutable';
  if (/\.(png|svg|ico|webp|jpe?g|gif|woff2?|ttf)$/i.test(rel)) return 'private, max-age=604800';
  return 'private, no-cache'; // css/js tanpa hash di nama berkas: selalu validasi ulang (ETag → 304 murah)
}

async function sajikanStatis(req, res) {
  const peta = petakanPath(req.url);
  if (peta.status) return kirim(res, peta.status, 'text/plain; charset=utf-8', peta.status === 400 ? 'Permintaan tidak valid.' : 'Tidak ditemukan.');
  let abs, st;
  try {
    abs = await fs.promises.realpath(peta.abs);
    if (abs !== SITE_DIR && !abs.startsWith(SITE_DIR + path.sep)) throw Object.assign(new Error('di luar situs'), { code: 'ENOENT' }); // tautan simbolik keluar
    st = await fs.promises.stat(abs);
    if (!st.isFile()) throw Object.assign(new Error('bukan berkas'), { code: 'ENOENT' });
  } catch (e) { return kirim(res, 404, 'text/plain; charset=utf-8', 'Tidak ditemukan.'); }
  const ext = path.extname(abs).toLowerCase();
  const tipe = MIME[ext] || 'application/octet-stream';
  const kueri = (req.url.split('?')[1] || '');
  const gz = BISA_GZIP.has(ext) && st.size > 512 && /\bgzip\b/i.test(String(req.headers['accept-encoding'] || ''));
  const etag = 'W/"' + st.size.toString(16) + '-' + Math.floor(st.mtimeMs).toString(16) + (gz ? '-gz' : '') + '"';
  const terakhir = new Date(Math.floor(st.mtimeMs / 1000) * 1000).toUTCString();
  res.setHeader('Cache-Control', kebijakanCache(peta.rel, kueri));
  res.setHeader('ETag', etag);
  res.setHeader('Last-Modified', terakhir);
  if (BISA_GZIP.has(ext)) res.setHeader('Vary', 'Accept-Encoding');
  const inm = req.headers['if-none-match'], ims = req.headers['if-modified-since'];
  if ((inm && inm.split(',').map(s => s.trim()).includes(etag)) || (!inm && ims && Date.parse(ims) >= Date.parse(terakhir))) { res.statusCode = 304; return res.end(); }
  res.setHeader('Content-Type', tipe);
  if (gz) {
    const kunci = st.size + ':' + st.mtimeMs; let c = cacheGzip.get(abs);
    if (!c || c.kunci !== kunci) {
      const isi = await fs.promises.readFile(abs);
      c = { kunci, isi: await new Promise((ok, no) => zlib.gzip(isi, { level: 9 }, (e, b) => e ? no(e) : ok(b))) };
      cacheGzip.set(abs, c);
    }
    res.setHeader('Content-Encoding', 'gzip'); res.setHeader('Content-Length', c.isi.length); res.statusCode = 200;
    return res.end(req.method === 'HEAD' ? undefined : c.isi);
  }
  res.setHeader('Content-Length', st.size); res.statusCode = 200;
  if (req.method === 'HEAD') return res.end();
  fs.createReadStream(abs).on('error', () => res.destroy()).pipe(res);
}

// ---------- API dasbor tim (/api/*) ----------
// Semua titik akhir butuh sesi login + header X-Requested-With: UKP + asal sama (Sec-Fetch-Site/Origin). Header kustom memaksa preflight
// CORS untuk permintaan lintas situs, dan server tidak pernah menjawab preflight, jadi situs lain tidak dapat memanggil API ini.
// Data: data/hasil.json (satu ringkasan per nama pengguna, tulis atomik 600) dan data/masuk.json (waktu terakhir masuk per pengguna).
// Isi ringkasan tidak pernah ditulis ke log.
const BERKAS_HASIL = path.join(L.DIR_DATA, 'hasil.json');
const BERKAS_MASUK = path.join(L.DIR_DATA, 'masuk.json');
const BATAS_BODY_API = 160 * 1024;  // ringkasan dengan jawaban per soal (≤ 400 entri) tersimpan ≤ 120 KB (lib-hasil MAKS_BYTE)
const ONLINE_MS = 2 * 60 * 1000;
const MAKS_PUT_MENIT = 60;           // PUT /api/hasil per pengguna per 60 dtk
const MAKS_ALIRAN_ADMIN = 5;         // koneksi SSE per admin
const PING_MS = 25 * 1000;
const hasil = new Map();             // nama → ringkasan ternormalkan
const terakhirMasuk = new Map();     // nama → ISO
const terakhirMinta = new Map();     // nama → ms (permintaan terakhir dengan sesi sah; dasar "online")
const jejakPut = new Map();          // nama → [ms…] dalam 60 dtk terakhir
const aliran = new Set();            // { res, nama, nilai } koneksi SSE admin
let tundaMasuk = null;

function muatDataTim() {
  try {
    const d = JSON.parse(fs.readFileSync(BERKAS_HASIL, 'utf8'));
    for (const [k, v] of Object.entries(d && d.hasil || {})) if (L.namaValid(k) && v && typeof v === 'object' && !Array.isArray(v)) hasil.set(k, v);
  } catch (e) { if (e.code !== 'ENOENT') log('[peringatan] hasil.json tidak terbaca, mulai kosong:', e.message); }
  try {
    const d = JSON.parse(fs.readFileSync(BERKAS_MASUK, 'utf8'));
    for (const [k, v] of Object.entries(d && d.masuk || {})) if (L.namaValid(k) && typeof v === 'string') terakhirMasuk.set(k, v);
  } catch (e) { if (e.code !== 'ENOENT') log('[peringatan] masuk.json tidak terbaca:', e.message); }
}
function simpanHasil() { L.tulisJsonAman(BERKAS_HASIL, { versi: 1, hasil: Object.fromEntries(hasil) }); }
function simpanMasukNanti() {
  if (tundaMasuk) return;
  tundaMasuk = setTimeout(() => { tundaMasuk = null; try { L.tulisJsonAman(BERKAS_MASUK, { versi: 1, masuk: Object.fromEntries(terakhirMasuk) }); } catch (e) { log('[galat] gagal menyimpan masuk.json:', e.message); } }, 1000);
}
function catatMasuk(nama) { terakhirMasuk.set(nama, new Date().toISOString()); simpanMasukNanti(); }
function daftarOnline() { const kini = Date.now(); return Array.from(terakhirMinta).filter(([n, t]) => kini - t < ONLINE_MS && pengguna.has(n)).map(([n]) => n).sort(); }

function kirimJson(res, status, obj, ekstra) { kirim(res, status, 'application/json; charset=utf-8', JSON.stringify(obj), ekstra); }
function galatJson(res, status, kode, pesan, ekstra) { kirimJson(res, status, { galat: kode, pesan }, ekstra); }
function apiAsalSah(req) {
  if (req.headers['x-requested-with'] !== 'UKP') return false;
  const sfs = req.headers['sec-fetch-site'];
  if (sfs && sfs !== 'same-origin') return false;
  const asal = req.headers.origin;
  if (asal) { if (asal === 'null') return false; try { if (new URL(asal).host !== req.headers.host) return false; } catch (e) { return false; } }
  return true;
}
// body JSON ≤ BATAS_BODY_API: Content-Length besar ditolak tanpa membaca; aliran yang melewati batas berhenti dikumpulkan
function bacaJson(req) {
  return new Promise((selesai, tolak) => {
    const pjg = parseInt(req.headers['content-length'] || '', 10);
    if (pjg > BATAS_BODY_API) return tolak(Object.assign(new Error('terlalu besar'), { status: 413 }));
    let n = 0, lewat = false; const potong = [];
    req.on('data', d => { if (lewat) return; n += d.length; if (n > BATAS_BODY_API) { lewat = true; tolak(Object.assign(new Error('terlalu besar'), { status: 413 })); } else potong.push(d); });
    req.on('end', () => { if (lewat) return; try { selesai(JSON.parse(Buffer.concat(potong).toString('utf8'))); } catch (e) { tolak(Object.assign(new Error('JSON tidak valid'), { status: 400 })); } });
    req.on('error', tolak);
  });
}
function batasPut(nama) {
  const kini = Date.now(); const j = (jejakPut.get(nama) || []).filter(t => kini - t < 60000);
  if (j.length >= MAKS_PUT_MENIT) { jejakPut.set(nama, j); return Math.ceil((60000 - (kini - j[0])) / 1000) || 1; }
  j.push(kini); jejakPut.set(nama, j); return 0;
}
function siarkan(event, data) {
  const teks = 'event: ' + event + '\ndata: ' + JSON.stringify(data) + '\n\n';
  for (const a of aliran) {
    const p = pengguna.get(a.nama);
    if (!p || !p.admin) { tutupAliran(a); continue; } // peran dicabut: aliran ditutup
    try { a.res.write(teks); } catch (e) { tutupAliran(a); }
  }
}
function tutupAliran(a, akhir) {
  if (!aliran.has(a)) return;
  aliran.delete(a); clearInterval(a.t);
  try { if (akhir) a.res.write('event: tutup\ndata: {}\n\n'); a.res.end(); } catch (e) { /* koneksi sudah putus */ }
}
function bukaAliran(req, res, s) {
  const milik = Array.from(aliran).filter(a => a.nama === s.nama).length;
  if (milik >= MAKS_ALIRAN_ADMIN) return galatJson(res, 429, 'terlalu-banyak-aliran', 'Terlalu banyak tab dasbor terbuka. Tutup salah satu lalu muat ulang.', { 'Retry-After': '30' });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Accel-Buffering', 'no'); // Nginx: jangan tahan aliran di buffer
  res.setHeader('Connection', 'close');     // soket aliran tidak dipakai ulang (keep-alive), sehingga tutup saat SIGTERM langsung selesai
  res.flushHeaders();
  const a = { res, nama: s.nama, nilai: nilaiSesi(req) };
  aliran.add(a);
  res.write('retry: 5000\n\nevent: ping\ndata: ' + JSON.stringify({ online: daftarOnline() }) + '\n\n');
  // tiap ping: sesi dan peran diperiksa ulang (logout di tab lain, sandi diganti, admin dicabut → aliran ditutup)
  a.t = setInterval(() => {
    const ss = cekSesi(a.nilai);
    if (!ss || !ss.admin) return tutupAliran(a, true);
    terakhirMinta.set(a.nama, Date.now());
    try { res.write('event: ping\ndata: ' + JSON.stringify({ online: daftarOnline() }) + '\n\n'); } catch (e) { tutupAliran(a); }
  }, PING_MS);
  req.on('close', () => tutupAliran(a));
}
const namaTampilan = n => { const p = pengguna.get(n); return (p && p.namaTampil) || n; };
function hasilUntukAdmin() { return Array.from(hasil).filter(([n]) => pengguna.has(n)).map(([n, d]) => Object.assign({}, d, { id: n, nama: namaTampilan(n) })); }

async function tanganiApi(req, res, s, jalur, ip) {
  if (!s) return galatJson(res, 401, 'perlu-masuk', 'Sesi berakhir. Silakan masuk lagi.');
  if (!apiAsalSah(req)) { log('api ditolak (CSRF/asal) pengguna=' + s.nama + ' ip=' + ip + ' ' + req.method + ' ' + jalur); return galatJson(res, 403, 'asal-ditolak', 'Permintaan ditolak.'); }
  const metode = (izin) => { res.setHeader('Allow', izin.join(', ')); return galatJson(res, 405, 'metode', 'Metode tidak diizinkan.'); };
  if (jalur === '/api/saya') {
    if (req.method !== 'GET') return metode(['GET']);
    const d = hasil.get(s.nama);
    const o = { nama: s.nama, admin: s.admin, server: true, versi: VERSI_API, hasil: d ? { diperbarui: d.diperbarui } : null };
    if (s.tanpaSandi) Object.assign(o, { tanpaSandi: true, namaTampil: s.namaTampil || s.nama });
    return kirimJson(res, 200, o);
  }
  if (jalur === '/api/hasil') {
    if (req.method === 'PUT') {
      const tipe = String(req.headers['content-type'] || '').split(';')[0].trim().toLowerCase();
      if (tipe !== 'application/json') return galatJson(res, 415, 'tipe', 'Content-Type harus application/json.');
      const tunggu = batasPut(s.nama);
      if (tunggu) return galatJson(res, 429, 'terlalu-sering', 'Terlalu banyak kiriman. Coba lagi sebentar.', { 'Retry-After': String(tunggu) });
      let raw;
      try { raw = await bacaJson(req); } catch (e) {
        if (e.status === 413) { res.setHeader('Connection', 'close'); req.resume(); return galatJson(res, 413, 'terlalu-besar', 'Ringkasan terlalu besar (maks. 160 KB).'); }
        return galatJson(res, 400, 'json', 'Body bukan JSON yang valid.');
      }
      let dok;
      try { dok = H.siapkan(raw, namaTampilan(s.nama)); } catch (e) { if (e instanceof H.GalatSkema) return galatJson(res, 400, 'skema', e.message); throw e; }
      hasil.set(s.nama, dok);
      try { simpanHasil(); } catch (e) { log('[galat] gagal menyimpan hasil.json:', e.message); return galatJson(res, 500, 'simpan', 'Ringkasan belum tersimpan di server. Coba lagi.'); }
      siarkan('hasil', { aksi: 'simpan', nama: s.nama, dok: Object.assign({ id: s.nama }, dok) });
      return kirimJson(res, 200, { ok: true, diperbarui: dok.diperbarui });
    }
    if (req.method === 'DELETE') {
      const ada = hasil.delete(s.nama);
      if (ada) { try { simpanHasil(); } catch (e) { log('[galat] gagal menyimpan hasil.json:', e.message); return galatJson(res, 500, 'simpan', 'Ringkasan belum terhapus. Coba lagi.'); } siarkan('hasil', { aksi: 'hapus', nama: s.nama }); }
      return kirimJson(res, 200, { ok: true, dihapus: ada });
    }
    return metode(['PUT', 'DELETE']);
  }
  if (jalur === '/api/tim' || jalur === '/api/tim/aliran') {
    if (req.method !== 'GET') return metode(['GET']);
    if (!s.admin) return galatJson(res, 403, 'khusus-admin', 'Hasil anggota tim hanya untuk admin tim.');
    if (jalur === '/api/tim/aliran') return bukaAliran(req, res, s);
    return kirimJson(res, 200, {
      server: true, versi: VERSI_API, saya: s.nama, hasil: hasilUntukAdmin(), online: daftarOnline(),
      pengguna: Array.from(pengguna).map(([n, p]) => Object.assign({ nama: n, admin: !!p.admin, terakhirMasuk: terakhirMasuk.get(n) || null }, p.tanpaSandi ? { tanpaSandi: true, namaTampil: p.namaTampil || n } : {})).sort((a, b) => a.nama.localeCompare(b.nama)),
    });
  }
  return galatJson(res, 404, 'tidak-ada', 'Titik akhir tidak dikenal.');
}

// ---------- router ----------
async function tangani(req, res) {
  const mulai = Date.now(); const ip = ipKlien(req);
  const jalur = (req.url || '/').split('?')[0];
  let siapa = '-';
  res.on('finish', () => log(ip, req.method, jalur.slice(0, 200), res.statusCode, (Date.now() - mulai) + 'ms', siapa));
  try {
    if (jalur === '/sehat') { headerKeamanan(req, res, CSP_LOGIN); return kirim(res, 200, 'application/json; charset=utf-8', JSON.stringify({ status: 'ok' })); }
    if (jalur === '/masuk') {
      if (req.method === 'POST') return await prosesMasuk(req, res, ip);
      if (req.method !== 'GET' && req.method !== 'HEAD') { res.setHeader('Allow', 'GET, HEAD, POST'); return kirim(res, 405, 'text/plain; charset=utf-8', 'Metode tidak diizinkan.'); }
      const q = new URLSearchParams((req.url.split('?')[1]) || '');
      const s = cekSesi(nilaiSesi(req));
      if (s) return alihkan(res, 303, tujuanAman(q.get('lanjut')));
      const tahapGet = MASUK_NAMA && q.get('admin') === '1' ? { tahap: 'sandi' } : {};
      return tampilMasuk(req, res, 200, q.has('keluar') ? { pesan: 'Anda sudah keluar.', nada: 'info', lanjut: '/', ...tahapGet } : { lanjut: tujuanAman(q.get('lanjut')), ...tahapGet });
    }
    if (jalur === '/keluar') {
      if (req.method !== 'GET' && req.method !== 'POST') { res.setHeader('Allow', 'GET, POST'); return kirim(res, 405, 'text/plain; charset=utf-8', 'Metode tidak diizinkan.'); }
      return prosesKeluar(req, res);
    }
    headerKeamanan(req, res);
    // Manifest PWA dan ikon boleh tanpa login: peramban mengambil manifest tanpa cookie (credentials "omit"), dan iOS mengambil
    // apple-touch-icon tanpa cookie. Isinya hanya nama aplikasi + gambar ikon, bukan materi.
    if ((req.method === 'GET' || req.method === 'HEAD') && /^\/(manifest\.webmanifest|icons\/[A-Za-z0-9_-]+\.(png|svg))$/.test(jalur)) return await sajikanStatis(req, res);
    const s = cekSesi(nilaiSesi(req));
    if (s) { siapa = s.nama; terakhirMinta.set(s.nama, Date.now()); pasangPenanda(req, res); }
    if (jalur.startsWith('/api/')) return await tanganiApi(req, res, s, jalur, ip);
    if (!s) {
      // Pemeriksaan pembaruan service worker oleh peramban (header "Service-Worker: script") tanpa sesi yang berlaku → sw.js pembersih.
      if (jalur === '/sw.js' && req.method === 'GET' && req.headers['service-worker'] === 'script') {
        log('sw.js pembersih dikirim (sesi tidak berlaku) ip=' + ip);
        return kirim(res, 200, 'text/javascript; charset=utf-8', SW_PEMBERSIH);
      }
      const navigasi = req.headers['sec-fetch-mode'] === 'navigate' || (req.method === 'GET' && /text\/html/.test(String(req.headers.accept || '')) && !req.headers['sec-fetch-mode']);
      // Navigasi → halaman login. Permintaan aset (termasuk dari service worker) → 401, agar halaman login tidak pernah tersimpan
      // sebagai js/css di cache service worker.
      if (navigasi && (req.method === 'GET' || req.method === 'HEAD')) {
        const asli = req.url.length < 512 ? req.url : '/';
        return alihkan(res, 302, '/masuk' + (asli !== '/' && !asli.startsWith('//') ? '?lanjut=' + encodeURIComponent(asli) : ''));
      }
      return kirim(res, 401, 'text/plain; charset=utf-8', 'Perlu masuk. Buka /masuk.');
    }
    siapa = s.nama;
    if (req.method !== 'GET' && req.method !== 'HEAD') { res.setHeader('Allow', 'GET, HEAD'); return kirim(res, 405, 'text/plain; charset=utf-8', 'Metode tidak diizinkan.'); }
    return await sajikanStatis(req, res);
  } catch (e) {
    if (!res.headersSent) { headerKeamanan(req, res); kirim(res, e.status || 500, 'text/plain; charset=utf-8', e.status === 413 ? 'Permintaan terlalu besar.' : 'Terjadi galat di server.'); }
    else res.destroy();
    if (!e.status) log('[galat]', e && e.stack || e);
  }
}

// ---------- hak akses & folder data ----------
// Container (Docker/Fly) dijalankan sebagai root lalu turun ke pengguna JALANKAN_SEBAGAI (mis. "node") setelah folder data dibuat
// menjadi miliknya. Perlu karena volume Fly (dan bind mount) dipasang milik root, sehingga proses non-root tidak bisa menulis.
function cariAkun(nama) {
  let teks = ''; try { teks = fs.readFileSync('/etc/passwd', 'utf8'); } catch (e) { return null; }
  for (const baris of teks.split('\n')) { const b = baris.split(':'); if (b[0] === nama && b.length >= 4) return { uid: +b[2], gid: +b[3] }; }
  return /^\d+$/.test(nama) ? { uid: +nama, gid: +nama } : null;
}
function chownRekursif(p, uid, gid) {
  const st = fs.lstatSync(p); if (st.isSymbolicLink()) return;
  if (st.uid !== uid || st.gid !== gid) fs.chownSync(p, uid, gid);
  if (st.isDirectory()) for (const n of fs.readdirSync(p)) chownRekursif(path.join(p, n), uid, gid);
}
function siapkanHakDanData() {
  const target = (process.env.JALANKAN_SEBAGAI || '').trim();
  if (target && typeof process.getuid === 'function' && process.getuid() === 0) {
    const a = cariAkun(target);
    if (!a) { console.error('JALANKAN_SEBAGAI=' + target + ': pengguna sistem tidak ditemukan. Server tidak dijalankan sebagai root.'); process.exit(1); }
    try { fs.mkdirSync(L.DIR_DATA, { recursive: true, mode: 0o700 }); chownRekursif(L.DIR_DATA, a.uid, a.gid); fs.chmodSync(L.DIR_DATA, 0o700); }
    catch (e) { log('[galat] gagal menyiapkan pemilik folder data ' + L.DIR_DATA + ':', e.message); }
    try { if (typeof process.initgroups === 'function') process.initgroups(target, a.gid); } catch (e) { /* tanpa grup tambahan */ }
    process.setgid(a.gid); process.setuid(a.uid);
    log('hak root dilepas; berjalan sebagai ' + target + ' (uid ' + a.uid + ')');
  }
  try {
    fs.mkdirSync(L.DIR_DATA, { recursive: true, mode: 0o700 });
    const uji = path.join(L.DIR_DATA, '.uji-tulis-' + process.pid);
    fs.writeFileSync(uji, ''); fs.unlinkSync(uji);
  } catch (e) {
    log('[galat] folder data ' + L.DIR_DATA + ' TIDAK BISA DITULIS (' + e.code + '). Akun baru dari ADMIN_USER dan sesi login tidak akan tersimpan. ' +
      'Perbaiki pemiliknya (mis. chown -R ' + (typeof process.getuid === 'function' ? process.getuid() : 'pengguna-server') + ' ' + L.DIR_DATA + '), ' +
      'atau di container atur JALANKAN_SEBAGAI=node dan jalankan sebagai root.');
  }
}

// ---------- mulai ----------
siapkanHakDanData();
siapkanPenggunaEnv();
try { bootstrapAdmin(); } catch (e) { log('[galat] bootstrap admin gagal:', e.message); }
muatPengguna(true);
if (MASUK_NAMA && !Array.from(pengguna.values()).some(p => p.admin && p.hash)) {
  console.error('MASUK_NAMA=1 butuh minimal satu admin BERSANDI agar Dasbor tim terlindungi, tetapi tidak ada.\n' +
    'Atur ADMIN_USER dan ADMIN_PASS (sandi min. ' + L.SANDI_MIN + ' karakter), atau PENGGUNA_TIM dengan baris "nama:sandi:admin",\n' +
    'atau jalankan: node deploy/kelola-pengguna.js tambah <nama> --admin. Server tidak dijalankan.');
  process.exit(1);
}
if (MASUK_NAMA) log('mode masuk nama AKTIF: anggota masuk hanya dengan nama' + (DAFTAR_NAMA.size ? ' (dibatasi DAFTAR_NAMA: ' + DAFTAR_NAMA.size + ' nama)' : '') + '; admin tetap memakai sandi. Akun tanpa sandi: ' + jumlahAkunTanpaSandi() + '/' + BATAS_AKUN);
muatSesi();
muatDataTim();
setInterval(bersihkanKedaluwarsa, 10 * 60 * 1000).unref();
if (!pengguna.size) log('[peringatan] belum ada pengguna. Tambah dengan: node deploy/kelola-pengguna.js tambah <nama>  (atau atur ADMIN_USER/ADMIN_PASS)');

const server = http.createServer((req, res) => { tangani(req, res); });
server.headersTimeout = 20000; server.requestTimeout = 30000; server.keepAliveTimeout = 5000;
server.listen(PORT, HOST, () => log('Pelatih UKP siap di http://' + (HOST === '0.0.0.0' ? 'localhost' : HOST) + ':' + server.address().port + ' — situs: ' + SITE_DIR + ' — pengguna: ' + pengguna.size + (RAHASIA ? ' — sesi bertanda tangan aktif' : '')));
function berhenti() {
  log('berhenti…');
  for (const a of Array.from(aliran)) tutupAliran(a, true); // aliran SSE ditutup rapi agar server.close tidak menunggu
  if (tundaMasuk) { clearTimeout(tundaMasuk); try { L.tulisJsonAman(BERKAS_MASUK, { versi: 1, masuk: Object.fromEntries(terakhirMasuk) }); } catch (e) {} }
  if (tundaSimpan) { clearTimeout(tundaSimpan); try { L.tulisJsonAman(BERKAS_SESI, { sesi: Object.fromEntries(sesi), dicabut: Object.fromEntries(dicabut) }); } catch (e) {} }
  server.close(() => process.exit(0));
  // koneksi keep-alive yang menganggur ditutup segera; yang masih aktif diberi 1 dtk untuk selesai, lalu diputus
  if (typeof server.closeIdleConnections === 'function') { server.closeIdleConnections(); setTimeout(() => server.closeIdleConnections(), 200).unref(); }
  if (typeof server.closeAllConnections === 'function') setTimeout(() => server.closeAllConnections(), 1000).unref();
  setTimeout(() => process.exit(0), 3000).unref();
}
process.on('SIGTERM', berhenti); process.on('SIGINT', berhenti);
