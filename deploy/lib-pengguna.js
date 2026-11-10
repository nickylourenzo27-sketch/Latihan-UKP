'use strict';
/* Pelatih UKP — penyimpanan pengguna untuk server login (deploy/server.js) dan CLI (deploy/kelola-pengguna.js).
   Hanya modul bawaan Node. Format berkas data/pengguna.json:
     { "versi": 1, "pengguna": { "<nama>": { "hash": "scrypt$16384$8$1$<salt b64>$<hash b64>", "admin": false, "dibuat": "<ISO>", "diubah": "<ISO>" } } }
   admin: true memberi peran admin Dasbor tim (melihat ringkasan hasil semua anggota). Mengubahnya tidak mengeluarkan sesi.
   Mode masuk nama (MASUK_NAMA=1, lihat server.js): akun anggota dibuat otomatis tanpa sandi:
     "<kunci>": { "tanpaSandi": true, "namaTampil": "Rina Wati", "admin": false, "versi": "<HMAC dari kunci>", "dibuat": "<ISO>", "diubah": "<ISO>" }
   Versi akun tanpa sandi deterministik (HMAC RAHASIA_SESI atas kunci dan "generasi"), sehingga server dapat membuat ulang akun dari klaim
   sesi bertanda tangan setelah pengguna.json hilang (Render free tanpa disk). Akun yang dihapus dengan kelola-pengguna.js meninggalkan
   penanda di tingkat atas: "dihapus": { "<kunci>": { "kapan": "<ISO>", "generasi": 1 } } → tidak dipulihkan dari sesi lama, dan bila
   nama itu masuk lagi akun baru memakai generasi berikutnya (sesi lama tetap tidak berlaku).
   Kunci akun diturunkan dari nama yang diketik (kunciDariTampil): huruf kecil, spasi → "-", sehingga tetap cocok dengan pola nama pengguna.
   Sandi tidak pernah disimpan; hanya hash scrypt (salt acak 16 byte, N=16384, r=8, p=1, panjang kunci 64 byte). */
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const DIR_DATA = process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(__dirname, 'data');
const BERKAS_PENGGUNA = path.join(DIR_DATA, 'pengguna.json');
const SCRYPT = { N: 16384, r: 8, p: 1, maxmem: 64 * 1024 * 1024 };
const PANJANG_KUNCI = 64;
const POLA_NAMA = /^[a-z0-9][a-z0-9._-]{1,31}$/;
const SANDI_MIN = 8;

const POLA_NAMA_TAMPIL = /^[A-Za-z0-9][A-Za-z0-9 .-]{1,39}$/; // 2–40 karakter: huruf, angka, spasi, titik, tanda hubung

function normalNama(n) { return String(n == null ? '' : n).trim().toLowerCase(); }
function namaValid(n) { return POLA_NAMA.test(n); }
// Nama yang diketik di mode masuk nama: spasi dirapikan (tampilan tetap seperti diketik), lalu diturunkan menjadi kunci akun.
function rapikanNama(n) { return String(n == null ? '' : n).normalize('NFKC').replace(/\s+/g, ' ').trim(); }
function namaTampilValid(t) { return POLA_NAMA_TAMPIL.test(t); }
function kunciDariTampil(t) {
  let k = rapikanNama(t).toLowerCase().replace(/ /g, '-').replace(/-{2,}/g, '-');
  if (k.length > 32) k = k.slice(0, 25) + '-' + crypto.createHash('sha256').update(k).digest('hex').slice(0, 6); // tetap unik dan stabil
  return k;
}
// Kunci akun dari isian kolom nama: nama tampilan yang sah → kunciDariTampil; selain itu (mis. "nicky_s") → normalNama.
function kunciMasuk(mentah) { const t = rapikanNama(mentah); return namaTampilValid(t) ? kunciDariTampil(t) : normalNama(mentah); }

function buatHash(sandi, salt) {
  const s = salt || crypto.randomBytes(16);
  const h = crypto.scryptSync(String(sandi).normalize('NFKC'), s, PANJANG_KUNCI, SCRYPT);
  return ['scrypt', SCRYPT.N, SCRYPT.r, SCRYPT.p, s.toString('base64'), h.toString('base64')].join('$');
}

function uraiHash(str) {
  const b = String(str || '').split('$');
  if (b.length !== 6 || b[0] !== 'scrypt') return null;
  const N = +b[1], r = +b[2], p = +b[3];
  if (!Number.isInteger(N) || N < 1024 || N > 1048576 || (N & (N - 1)) || !Number.isInteger(r) || r < 1 || r > 32 || !Number.isInteger(p) || p < 1 || p > 16) return null;
  const salt = Buffer.from(b[4], 'base64'), hash = Buffer.from(b[5], 'base64');
  if (salt.length < 16 || hash.length < 32) return null;
  return { N, r, p, salt, hash };
}
function hashValid(str) { return !!uraiHash(str); }

// Verifikasi asinkron (server: tidak memblokir event loop). Selalu menjalankan scrypt, juga untuk pengguna yang tidak ada (hashUmpan),
// agar waktu respons tidak membocorkan nama pengguna yang terdaftar.
const HASH_UMPAN = buatHash(crypto.randomBytes(18).toString('base64'));
function cocokkanSandi(sandi, hashStr) {
  const u = uraiHash(hashStr) || uraiHash(HASH_UMPAN);
  const nyata = !!uraiHash(hashStr);
  return new Promise(selesai => {
    crypto.scrypt(String(sandi).normalize('NFKC'), u.salt, u.hash.length, { N: u.N, r: u.r, p: u.p, maxmem: 256 * u.N * u.r + 1024 * 1024 }, (err, kunci) => {
      if (err) return selesai(false);
      selesai(nyata && crypto.timingSafeEqual(kunci, u.hash));
    });
  });
}

// Penanda versi kredensial: berubah setiap kali hash berubah (ganti sandi) → semua sesi lama pengguna itu tidak berlaku lagi.
function versiKredensial(hashStr) { return crypto.createHash('sha256').update(String(hashStr)).digest('base64url').slice(0, 16); }

function kosong() { return { versi: 1, pengguna: {} }; }
function bacaPengguna(berkas = BERKAS_PENGGUNA) {
  let teks;
  try { teks = fs.readFileSync(berkas, 'utf8'); } catch (e) { if (e.code === 'ENOENT') return kosong(); throw e; }
  if (!teks.trim()) return kosong();
  const d = JSON.parse(teks);
  if (!d || typeof d !== 'object' || !d.pengguna || typeof d.pengguna !== 'object') throw new Error('Format ' + berkas + ' tidak dikenal');
  return d;
}

// Tulis atomik (berkas sementara + rename) dengan izin 600; folder data 700.
function tulisJsonAman(berkas, data) {
  fs.mkdirSync(path.dirname(berkas), { recursive: true, mode: 0o700 });
  const tmp = berkas + '.' + process.pid + '.' + crypto.randomBytes(4).toString('hex') + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2) + '\n', { mode: 0o600 });
  // Dijalankan sebagai root (docker exec / fly ssh console) di folder milik pengguna lain (proses server, mis. "node"):
  // berkas diberikan ke pemilik folder agar tetap terbaca server. Tanpa ini berkas root:root 600 membuat semua login gagal.
  try {
    if (typeof process.getuid === 'function' && process.getuid() === 0) {
      const st = fs.statSync(path.dirname(berkas));
      if (st.uid !== 0) fs.chownSync(tmp, st.uid, st.gid);
    }
  } catch (e) { /* sistem berkas tanpa chown */ }
  fs.renameSync(tmp, berkas);
  try { fs.chmodSync(berkas, 0o600); } catch (e) { /* mis. sistem berkas tanpa chmod */ }
}
function simpanPengguna(data, berkas = BERKAS_PENGGUNA) { tulisJsonAman(berkas, data); }

module.exports = {
  DIR_DATA, BERKAS_PENGGUNA, SANDI_MIN, normalNama, namaValid, rapikanNama, namaTampilValid, kunciDariTampil, kunciMasuk, buatHash, hashValid, cocokkanSandi, versiKredensial,
  bacaPengguna, simpanPengguna, tulisJsonAman,
};
