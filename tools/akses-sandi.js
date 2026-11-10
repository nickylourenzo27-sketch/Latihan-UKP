#!/usr/bin/env node
// Ganti sandi tim gerbang akses: node tools/akses-sandi.js <sandi-baru>
// Menulis salt acak baru dan sandiHash = SHA-256(salt + '|' + sandi) ke js/akses.js. Semua orang yang sudah masuk otomatis keluar.
// Setelah itu jalankan node tools/build-artifact.js (dan build-offline.js bila membagikan berkas offline), lalu terbitkan ulang.
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const sandi = process.argv[2];
if (!sandi || sandi.length < 4) { console.error('pakai: node tools/akses-sandi.js <sandi-baru>   (minimal 4 karakter)'); process.exit(2); }
const berkas = path.join(__dirname, '..', 'js', 'akses.js');
let isi = fs.readFileSync(berkas, 'utf8');
const salt = crypto.randomBytes(8).toString('hex');
const hash = crypto.createHash('sha256').update(salt + '|' + sandi, 'utf8').digest('hex');
const baru = isi.replace(/(salt:\s*')[0-9a-f]*(')/, '$1' + salt + '$2').replace(/(sandiHash:\s*')[0-9a-f]*(')/, '$1' + hash + '$2');
if (baru === isi || !baru.includes(hash)) { console.error('Gagal: kolom salt/sandiHash tidak ditemukan di js/akses.js'); process.exit(1); }
fs.writeFileSync(berkas, baru);
console.log('js/akses.js diperbarui: salt ' + salt + ', sandiHash ' + hash.slice(0, 12) + '…');
console.log('Langkah berikut: node tools/build-artifact.js && node tools/build-offline.js, lalu terbitkan ulang.');
