/* MABAR UKP — gerbang akses tim (sisi klien, tanpa server).
   Satu sandi tim + nama anggota bebas. Yang disimpan hanya hash SHA-256 dari (salt + '|' + sandi); ganti sandi dengan
   `node tools/akses-sandi.js <sandi-baru>` (menulis ulang salt dan sandiHash di bawah). Mengganti sandi otomatis mengeluarkan semua orang.
   JUJUR: ini pembatas ringan untuk tim internal, bukan keamanan kuat — siapa pun yang mahir bisa membaca atau melewati JS ini.
   Materi aplikasi bukan rahasia. Untuk mematikan gerbang: aktif: false. */
(function (root) {
  'use strict';
  /* <AKSES-KONFIG> ditulis ulang oleh tools/akses-sandi.js */
  root.UKP_AKSES = {
    aktif: false,          // v7.5: mati bawaan; anggota masuk dengan akun Claude lewat undangan Artifact (dasbor tim, js/tim.js). Nyalakan untuk hosting tanpa akun.
    tim: 'Tim UKP',
    salt: '84c6fbf1262c3c8a',
    sandiHash: '68e00f88888f7376c25d71c2165fbfde45ad1ce256c61544f8ddd2a5e08235c1',
    pesan: 'Masukkan nama Anda dan sandi tim.'
  };
  /* </AKSES-KONFIG> */

  // SHA-256 murni JS (cadangan bila crypto.subtle tidak tersedia, mis. file:// di sebagian peramban). Masukan: string (UTF-8). Keluaran: hex.
  const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
    0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
    0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
  function utf8(s) { const b = []; const e = unescape(encodeURIComponent(String(s))); for (let i = 0; i < e.length; i++) b.push(e.charCodeAt(i)); return b; }
  function sha256(teks) {
    const m = utf8(teks); const bitLen = m.length * 8;
    m.push(0x80); while (m.length % 64 !== 56) m.push(0);
    for (let i = 7; i >= 0; i--) m.push(i >= 4 ? 0 : (bitLen >>> (i * 8)) & 0xff);
    const H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]; const w = new Array(64);
    const r = (x, n) => (x >>> n) | (x << (32 - n));
    for (let o = 0; o < m.length; o += 64) {
      for (let t = 0; t < 16; t++) w[t] = (m[o + t * 4] << 24) | (m[o + t * 4 + 1] << 16) | (m[o + t * 4 + 2] << 8) | m[o + t * 4 + 3];
      for (let t = 16; t < 64; t++) { const s0 = r(w[t - 15], 7) ^ r(w[t - 15], 18) ^ (w[t - 15] >>> 3); const s1 = r(w[t - 2], 17) ^ r(w[t - 2], 19) ^ (w[t - 2] >>> 10); w[t] = (w[t - 16] + s0 + w[t - 7] + s1) | 0; }
      let [a, b, c, d, e, f, g, h] = H;
      for (let t = 0; t < 64; t++) {
        const t1 = (h + (r(e, 6) ^ r(e, 11) ^ r(e, 25)) + ((e & f) ^ (~e & g)) + K[t] + w[t]) | 0;
        const t2 = ((r(a, 2) ^ r(a, 13) ^ r(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
        h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0; H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + h) | 0;
    }
    return H.map(x => (x >>> 0).toString(16).padStart(8, '0')).join('');
  }
  // hash sandi: crypto.subtle bila ada, cadangan JS bila tidak
  async function hashSandi(sandi, salt) {
    const teks = String(salt) + '|' + String(sandi);
    try {
      const c = root.crypto;
      if (c && c.subtle && typeof TextEncoder !== 'undefined') {
        const buf = await c.subtle.digest('SHA-256', new TextEncoder().encode(teks));
        return Array.from(new Uint8Array(buf)).map(x => x.toString(16).padStart(2, '0')).join('');
      }
    } catch (e) { /* jatuh ke cadangan */ }
    return sha256(teks);
  }
  const KUNCI = 'ukp.akses';
  function sesi() { try { const v = JSON.parse(root.localStorage.getItem(KUNCI) || 'null'); return v && typeof v.nama === 'string' && typeof v.h === 'string' ? v : null; } catch (e) { return null; } }
  function perluMasuk() { const k = root.UKP_AKSES; if (!k || !k.aktif) return false; const s = sesi(); return !(s && s.h === k.sandiHash); }
  function simpan(nama) { try { root.localStorage.setItem(KUNCI, JSON.stringify({ nama, h: root.UKP_AKSES.sandiHash, t: Date.now() })); } catch (e) {} }
  function keluar() { try { root.localStorage.removeItem(KUNCI); } catch (e) {} }
  const api = { sha256, hashSandi, sesi, perluMasuk, simpan, keluar, KUNCI };
  if (root.UKP) root.UKP.akses = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
