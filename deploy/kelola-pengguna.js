#!/usr/bin/env node
'use strict';
/* Pelatih UKP — kelola akun login tim (deploy/data/pengguna.json, izin 600). Tanpa dependensi.
   Pemakaian:
     node deploy/kelola-pengguna.js tambah <nama> [--sandi <sandi>] [--admin]   tambah pengguna (tanpa --sandi: ditanya, tidak tampil di layar)
     node deploy/kelola-pengguna.js ubah-sandi <nama> [--sandi <sandi>]
     node deploy/kelola-pengguna.js hapus <nama>                     juga akun anggota mode masuk nama (boleh ditulis seperti diketik, mis. "Rina Wati")
     node deploy/kelola-pengguna.js jadikan-admin <nama>             beri peran admin dasbor tim (melihat hasil semua anggota)
     node deploy/kelola-pengguna.js cabut-admin <nama>
     node deploy/kelola-pengguna.js daftar
     node deploy/kelola-pengguna.js hash <nama> [--sandi <sandi>]     cetak baris "nama:scrypt$..." untuk env PENGGUNA_TIM (hosting tanpa shell)
   Server membaca ulang berkas otomatis; ganti sandi/hapus langsung mengeluarkan sesi lama pengguna itu.
   Catatan: --sandi di baris perintah bisa tersimpan di riwayat shell; lebih aman tanpa --sandi (prompt tersembunyi). */
const L = require('./lib-pengguna.js');

function keluarGalat(pesan) { console.error('Galat: ' + pesan); process.exit(1); }
function bantuan() {
  console.log(`Kelola pengguna Pelatih UKP (berkas: ${L.BERKAS_PENGGUNA})

  tambah <nama> [--sandi <sandi>] [--admin]
                                       tambah pengguna baru (--admin: langsung admin dasbor tim)
  ubah-sandi <nama> [--sandi <sandi>]  ganti kata sandi (sesi lama otomatis keluar)
  hapus <nama>                         hapus pengguna (sesinya otomatis keluar); juga akun anggota dari mode
                                       masuk nama, ditulis seperti di "daftar" atau seperti diketik ("Rina Wati")
  jadikan-admin <nama>                 beri peran admin: melihat hasil latihan/simulasi semua anggota di Dasbor tim
  cabut-admin <nama>                   cabut peran admin (berlaku dalam beberapa detik, tanpa restart)
  daftar                               tampilkan semua pengguna
  hash <nama> [--sandi <sandi>]        cetak "nama:hash" untuk variabel PENGGUNA_TIM

Nama: 2–32 karakter, huruf kecil/angka/titik/garis bawah/tanda hubung. Sandi: minimal ${L.SANDI_MIN} karakter.
Akun "tanpa sandi" dibuat otomatis oleh server dalam mode MASUK_NAMA=1 saat anggota pertama kali masuk dengan nama.`);
}

function tanyaTersembunyi(pertanyaan) {
  return new Promise((selesai, gagal) => {
    const masuk = process.stdin;
    if (!masuk.isTTY) { // input dari pipe: baca satu baris
      let data = ''; masuk.setEncoding('utf8');
      const onData = d => { data += d; const i = data.indexOf('\n'); if (i >= 0) { masuk.removeListener('data', onData); masuk.pause(); selesai(data.slice(0, i).replace(/\r$/, '')); } };
      masuk.on('data', onData); masuk.on('end', () => selesai(data.replace(/\r?\n$/, '')));
      return;
    }
    process.stdout.write(pertanyaan);
    let isi = '';
    masuk.setRawMode(true); masuk.resume(); masuk.setEncoding('utf8');
    const onData = ch => {
      for (const c of ch) {
        if (c === '\r' || c === '\n' || c === '\u0004') { masuk.setRawMode(false); masuk.pause(); masuk.removeListener('data', onData); process.stdout.write('\n'); return selesai(isi); }
        if (c === '\u0003') { masuk.setRawMode(false); process.stdout.write('\n'); return gagal(new Error('dibatalkan')); }
        if (c === '\u007f' || c === '\b') { isi = isi.slice(0, -1); continue; }
        isi += c;
      }
    };
    masuk.on('data', onData);
  });
}

async function ambilSandi(args, konfirmasi) {
  const i = args.indexOf('--sandi');
  if (i >= 0) { if (args[i + 1] == null) keluarGalat('--sandi butuh nilai'); return args[i + 1]; }
  const s1 = await tanyaTersembunyi('Kata sandi: ');
  if (konfirmasi && process.stdin.isTTY) { const s2 = await tanyaTersembunyi('Ulangi kata sandi: '); if (s1 !== s2) keluarGalat('kedua sandi tidak sama'); }
  return s1;
}
function cekSandi(s) { if (!s || s.length < L.SANDI_MIN) keluarGalat('sandi minimal ' + L.SANDI_MIN + ' karakter'); if (s.length > 256) keluarGalat('sandi terlalu panjang'); }

async function utama() {
  const [perintah, namaMentah, ...sisa] = process.argv.slice(2);
  if (!perintah || /^(-h|--help|bantuan)$/.test(perintah)) return bantuan();
  let nama = L.normalNama(namaMentah);
  // "Rina Wati" (nama seperti diketik di mode masuk nama) → kunci akun "rina-wati"
  if (!L.namaValid(nama) && namaMentah != null && L.namaValid(L.kunciMasuk(namaMentah))) nama = L.kunciMasuk(namaMentah);
  const perluNama = ['tambah', 'ubah-sandi', 'hapus', 'hash', 'jadikan-admin', 'cabut-admin'];
  if (perluNama.includes(perintah) && !L.namaValid(nama)) keluarGalat('nama pengguna tidak valid (2–32 karakter: a-z 0-9 . _ -)');
  const d = L.bacaPengguna();
  const kini = new Date().toISOString();
  switch (perintah) {
    case 'tambah': {
      if (d.pengguna[nama]) keluarGalat('pengguna "' + nama + '" sudah ada (pakai ubah-sandi)');
      const s = await ambilSandi(sisa, true); cekSandi(s);
      const admin = sisa.includes('--admin');
      d.pengguna[nama] = { hash: L.buatHash(s), admin, dibuat: kini, diubah: kini };
      L.simpanPengguna(d); console.log('Pengguna "' + nama + '" ditambahkan' + (admin ? ' sebagai admin dasbor tim.' : '.')); break;
    }
    case 'jadikan-admin': case 'cabut-admin': {
      if (!d.pengguna[nama]) keluarGalat('pengguna "' + nama + '" tidak ada di ' + L.BERKAS_PENGGUNA + ' (akun dari PENGGUNA_TIM: tambahkan akhiran ":admin" di barisnya)');
      const jadi = perintah === 'jadikan-admin';
      if (jadi && d.pengguna[nama].tanpaSandi) keluarGalat('akun "' + nama + '" tanpa sandi (mode masuk nama) tidak bisa menjadi admin. Beri sandi dulu: node deploy/kelola-pengguna.js ubah-sandi ' + nama);
      d.pengguna[nama].admin = jadi; d.pengguna[nama].diubah = kini;
      L.simpanPengguna(d);
      console.log(jadi ? 'Pengguna "' + nama + '" sekarang admin dasbor tim.' : 'Peran admin "' + nama + '" dicabut.' + (nama === L.normalNama(process.env.ADMIN_USER) ? ' Catatan: akun ADMIN_USER tetap admin selama variabel itu diatur.' : ''));
      break;
    }
    case 'ubah-sandi': {
      if (!d.pengguna[nama]) keluarGalat('pengguna "' + nama + '" tidak ada');
      const s = await ambilSandi(sisa, true); cekSandi(s);
      const r = d.pengguna[nama]; const dulu = !!r.tanpaSandi;
      r.hash = L.buatHash(s); r.diubah = kini; delete r.versi; delete r.catatan; delete r.tanpaSandi; if (r.admin == null) r.admin = false;
      L.simpanPengguna(d);
      console.log(dulu ? 'Akun "' + nama + '" sekarang memakai sandi (tidak bisa lagi masuk hanya dengan nama). Sesi lama otomatis keluar.' : 'Sandi "' + nama + '" diganti. Sesi lama pengguna ini otomatis keluar.'); break;
    }
    case 'hapus': {
      if (!d.pengguna[nama]) keluarGalat('pengguna "' + nama + '" tidak ada');
      // akun tanpa sandi diberi penanda agar tidak dipulihkan otomatis dari sesi lama di perangkat anggota
      if (d.pengguna[nama].tanpaSandi) { d.dihapus = d.dihapus || {}; d.dihapus[nama] = { kapan: kini, generasi: (Number(d.pengguna[nama].generasi) || 0) + 1 }; }
      delete d.pengguna[nama]; L.simpanPengguna(d); console.log('Pengguna "' + nama + '" dihapus.'); break;
    }
    case 'daftar': {
      const n = Object.keys(d.pengguna).sort();
      if (!n.length) { console.log('(belum ada pengguna di ' + L.BERKAS_PENGGUNA + ')'); break; }
      for (const k of n) {
        const r = d.pengguna[k];
        console.log(k.padEnd(34) + (r.admin ? 'admin        ' : r.tanpaSandi ? 'tanpa sandi  ' : '             ') + 'diubah ' + (r.diubah || '-') + (r.tanpaSandi && r.namaTampil ? '  (' + r.namaTampil + ')' : ''));
      }
      const tanpa = n.filter(k => d.pengguna[k].tanpaSandi).length;
      console.log('\nTotal: ' + n.length + ' pengguna' + (tanpa ? ', ' + tanpa + ' di antaranya tanpa sandi (mode masuk nama)' : '') + '. (Pengguna dari env PENGGUNA_TIM tidak tercantum di sini.)'); break;
    }
    case 'hash': {
      const s = await ambilSandi(sisa, true); cekSandi(s);
      console.log(nama + ':' + L.buatHash(s)); break;
    }
    default: bantuan(); process.exit(1);
  }
}
utama().catch(e => keluarGalat(e.message));
