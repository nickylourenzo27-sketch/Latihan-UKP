#!/usr/bin/env node
// Impor soal try out (JSON hasil transkripsi) ke modul js/data/mu-<KODE>.js.
// Pakai: node tools/impor-tryout.js <berkas.json> --set TO-B-2026-11 --judul "Try Out UKP B (transkrip 6 Nov 2026)" [--tingkat B] [--dry]
// Tiap elemen JSON: { no, kelompok, topik, jenis, kesulitan, stem, opsi{A..D}, kunci, pembahasan{inti, mengapaSalah, jejakHitung, catatan},
//   dasarHukum[{pasal, berlakuSejak}], kutipan{sumber, teks}, verifikasi, catatanOpsi, kualitas, jebakanOpsi? }
// Entri ditulis dalam gaya modul (kunci tanpa tanda kutip, string berkutip ganda), disisipkan di akhir larik soal, dengan field
// sumber: { set, no, judul } agar Simulasi dapat menyusun paket "Try Out" dalam urutan asli dan Latih dapat menyaringnya.
// Soal yang stem-nya sudah ada (80 karakter pertama sama) dilewati. Setelah menulis, validator dijalankan per modul.
'use strict';
const fs = require('fs'); const path = require('path'); const { execFileSync } = require('child_process');
const root = path.join(__dirname, '..');
const argv = process.argv.slice(2);
const berkas = argv.find(a => !a.startsWith('--'));
const opsiArg = n => { const i = argv.indexOf('--' + n); return i >= 0 ? argv[i + 1] : null; };
const SET = opsiArg('set') || 'TO-B-2026-11';
const JUDUL = opsiArg('judul') || 'Try Out UKP B (transkrip 6 Nov 2026)';
const TINGKAT_SET = opsiArg('tingkat') || (SET.match(/^TO-([ABC])-/) || [])[1] || null; // tingkat ujian yang ditiru paket (label dan durasi simulasi)
const DRY = argv.includes('--dry');
if (!berkas) { console.error('pakai: node tools/impor-tryout.js <berkas.json> [--set KODE] [--judul "…"] [--dry]'); process.exit(2); }
const daftar = JSON.parse(fs.readFileSync(berkas, 'utf8'));
if (!Array.isArray(daftar) || !daftar.length) { console.error('JSON harus array soal'); process.exit(2); }

const TAG = new Set(['angka-usang', 'salah-baca', 'salah-hitung', 'final-nonfinal', 'lupa-pasal', 'salah-klasifikasi']);
const JENIS = new Set(['konsep', 'klasifikasi', 'hitung', 'prosedur', 'kasus']);
const KUALIFIKASI = ['paling tepat', 'kecuali', 'bukan', 'paling lama', 'paling lambat', 'paling sedikit', 'paling banyak', 'tidak termasuk', 'paling benar'];
const norm = s => String(s || '').replace(/\s+/g, ' ').trim();
const kunciId = s => norm(s).toLowerCase().slice(0, 80);

// serialisasi gaya modul: kunci tanpa kutip bila identifier, string berkutip ganda
const IDENT = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function ser(v, indent) {
  const pad = ' '.repeat(indent), pad2 = ' '.repeat(indent + 2);
  if (v === null || v === undefined) return 'null';
  if (typeof v === 'string') return JSON.stringify(v);
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    const sederhana = v.every(x => typeof x !== 'object' || (Array.isArray(x) && x.every(y => typeof y !== 'object')));
    if (sederhana) return '[ ' + v.map(x => ser(x, indent)).join(', ') + ' ]';
    return '[\n' + v.map(x => pad2 + ser(x, indent + 2)).join(',\n') + '\n' + pad + ']';
  }
  const ks = Object.keys(v).filter(k => v[k] !== undefined);
  if (!ks.length) return '{}';
  const satuBaris = ks.every(k => typeof v[k] !== 'object' || v[k] === null) && ks.length <= 4;
  if (satuBaris) return '{ ' + ks.map(k => (IDENT.test(k) ? k : JSON.stringify(k)) + ': ' + ser(v[k], indent)).join(', ') + ' }';
  return '{\n' + ks.map(k => pad2 + (IDENT.test(k) ? k : JSON.stringify(k)) + ': ' + ser(v[k], indent + 2)).join(',\n') + '\n' + pad + '}';
}

function tebakTag(jenis, alasan) {
  const a = norm(alasan).toLowerCase();
  if (/final/.test(a) && /tidak final|non-?final|digabung|tarif umum/.test(a)) return 'final-nonfinal';
  if (jenis === 'hitung' || /hitung|dikali|dibagi|rumus|lapisan|persen|%|tarif yang/.test(a)) return 'salah-hitung';
  if (/usang|lama|sebelum (perubahan|hpp|pmk)|sudah tidak berlaku|dicabut|versi awal/.test(a)) return 'angka-usang';
  if (/pasal|ayat|ketentuan|dasar hukum|tidak diatur|tidak dikecualikan|bukan (objek|subjek|dokumen)/.test(a)) return 'lupa-pasal';
  if (/membaca|salah baca|kurang teliti|data soal|disebutkan|diminta|yang ditanya|bukan yang ditanya/.test(a)) return 'salah-baca';
  return 'salah-klasifikasi';
}

function bangunEntri(s, id, tingkat) {
  const jenisAwal = JENIS.has(s.jenis) ? s.jenis : 'kasus';
  const pb = s.pembahasan || {};
  let jejak = Array.isArray(pb.jejakHitung) ? pb.jejakHitung.filter(r => Array.isArray(r) && r.length >= 2).map(r => [norm(r[0]), norm(r[1])]) : [];
  let jenis = jenisAwal;
  const catatanTambahan = [];
  if (jenis === 'hitung' && jejak.length < 2) { jenis = 'kasus'; catatanTambahan.push('jenis diturunkan ke kasus (jejak hitung tidak lengkap di transkrip)'); }
  const opsi = {}; for (const k of ['A', 'B', 'C', 'D']) opsi[k] = norm(s.opsi && s.opsi[k]);
  const kunci = String(s.kunci || '').trim().toUpperCase();
  const ms = {}; const jo = {};
  for (const k of ['A', 'B', 'C', 'D']) {
    if (k === kunci) continue;
    const alasan = norm(pb.mengapaSalah && pb.mengapaSalah[k]) || ('Tidak sesuai ketentuan yang dijelaskan pada pembahasan; bandingkan dengan kunci ' + kunci + '.');
    ms[k] = alasan;
    const tagSumber = s.jebakanOpsi && s.jebakanOpsi[k];
    jo[k] = TAG.has(tagSumber) ? tagSumber : tebakTag(jenis, alasan);
  }
  const stem = norm(s.stem);
  const stemL = stem.toLowerCase();
  const kataKualifikasi = KUALIFIKASI.filter(k => stemL.includes(k));
  const dasar = (Array.isArray(s.dasarHukum) ? s.dasarHukum : []).map(d => (typeof d === 'string' ? { pasal: norm(d), berlakuSejak: null } : { pasal: norm(d.pasal), berlakuSejak: d.berlakuSejak || null })).filter(d => d.pasal);
  if (!dasar.length) dasar.push({ pasal: 'Lihat rujukan pada pembahasan try out', berlakuSejak: null });
  let verifikasi = s.verifikasi === '✅' ? '✅' : '◐';
  const alasanRagu = [s.kualitas, s.catatanOpsi, ...catatanTambahan].filter(Boolean).map(norm);
  if (verifikasi === '✅' && catatanTambahan.length) verifikasi = '◐';
  const peringatan = verifikasi === '◐' ? (alasanRagu.length ? alasanRagu.join(' · ') : 'Transkrip OCR try out: angka atau ejaan belum dicocokkan dengan naskah asli.') : undefined;
  const kutipan = s.kutipan && s.kutipan.teks ? (s.kutipan.sumber ? norm(s.kutipan.sumber) + ' (dikutip try out): ' : '') + norm(s.kutipan.teks) : undefined;
  const entri = {
    id, topik: s.topik, tingkat, jenis, kesulitan: [1, 2, 3].includes(s.kesulitan) ? s.kesulitan : 2,
    kutipan,
    stem, kataKualifikasi, opsi, kunci, jebakanOpsi: jo,
    pembahasan: { inti: norm(pb.inti), jejakHitung: jejak, mengapaSalah: ms, jebakan: norm(pb.catatan) || ('Bandingkan setiap opsi dengan dasar hukum: ' + dasar[0].pasal + '.') },
    dasarHukum: dasar,
    anggaranDetik: jenis === 'hitung' ? 150 : jenis === 'kasus' ? 120 : 90,
    verifikasi, peringatan,
    sumber: { set: SET, no: s.no, judul: JUDUL, tingkat: TINGKAT_SET }
  };
  return entri;
}

const perModul = {};
for (const s of daftar) { (perModul[s.kelompok] = perModul[s.kelompok] || []).push(s); }
const ringkas = [];
for (const kode of Object.keys(perModul).sort()) {
  const fp = path.join(root, 'js', 'data', 'mu-' + kode + '.js');
  if (!fs.existsSync(fp)) { console.error('modul tidak ada: ' + kode + ' (' + perModul[kode].length + ' soal dilewati)'); continue; }
  let teks = fs.readFileSync(fp, 'utf8');
  const diuji = (teks.match(/diujiDi:\s*\[([^\]]*)\]/) || [])[1];
  const tingkat = diuji ? diuji.match(/[ABC]/g) : ['A', 'B', 'C'];
  const topikIds = new Set([...teks.matchAll(new RegExp('id: "(' + kode + '\\.\\d+)"', 'g'))].map(m => m[1]));
  let maks = 0; for (const m of teks.matchAll(new RegExp('id: "' + kode + '-(\\d{3})"', 'g'))) maks = Math.max(maks, Number(m[1]));
  const stemAda = new Set([...teks.matchAll(/stem: "((?:[^"\\]|\\.)*)"/g)].map(m => kunciId(JSON.parse('"' + m[1] + '"'))));
  const penanda = '\n  ],\n  kartu: [';
  const pos = teks.indexOf(penanda);
  if (pos < 0) { console.error(kode + ': penanda akhir larik soal tidak ditemukan'); continue; }
  const baru = []; const lewat = [];
  for (const s of perModul[kode].sort((a, b) => a.no - b.no)) {
    if (!topikIds.has(s.topik)) { lewat.push('no ' + s.no + ': topik ' + s.topik + ' tidak ada di ' + kode); continue; }
    if (stemAda.has(kunciId(s.stem))) { lewat.push('no ' + s.no + ': stem sudah ada'); continue; }
    maks += 1; const id = kode + '-' + String(maks).padStart(3, '0');
    baru.push(bangunEntri(s, id, tingkat)); stemAda.add(kunciId(s.stem));
  }
  ringkas.push({ kode, baru: baru.length, lewat });
  if (!baru.length || DRY) continue;
  const sisipan = ',\n' + baru.map(e => '    ' + ser(e, 4)).join(',\n');
  teks = teks.slice(0, pos) + sisipan + teks.slice(pos);
  fs.writeFileSync(fp, teks);
}
for (const r of ringkas) {
  console.log(r.kode + ': +' + r.baru + ' soal' + (r.lewat.length ? ' · dilewati: ' + r.lewat.join('; ') : ''));
  if (!DRY && r.baru) {
    try { const out = execFileSync('node', [path.join(__dirname, 'validate-module.js'), 'js/data/mu-' + r.kode + '.js'], { cwd: root, encoding: 'utf8' }); console.log('  validator: ' + out.trim().split('\n').pop()); }
    catch (e) { console.log('  VALIDATOR GAGAL:\n' + (e.stdout || '') + (e.stderr || '')); process.exitCode = 1; }
  }
}
console.log((DRY ? '[dry] ' : '') + 'total baru: ' + ringkas.reduce((n, r) => n + r.baru, 0) + ' dari ' + daftar.length);
