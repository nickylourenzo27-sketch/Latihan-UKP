#!/usr/bin/env node
// Validasi berkas modul konten js/data/mu-<KODE>.js terhadap docs/SKEMA-KONTEN.md
const fs = require('fs');
const path = require('path');
const file = process.argv[2];
if (!file) { console.error('pakai: node tools/validate-module.js js/data/mu-A2.js'); process.exit(2); }
const code = fs.readFileSync(file, 'utf8');
const errors = [], warns = [];
let mod = null, calls = 0;
try {
  const fn = new Function('UKP', code);
  fn({ register(m) { calls++; mod = m; } });
} catch (e) { console.error('GAGAL PARSE:', e.message); process.exit(1); }
if (calls !== 1) errors.push(`UKP.register dipanggil ${calls} kali (harus 1)`);
if (!mod) { console.error(errors.join('\n')); process.exit(1); }

const kode = path.basename(file).replace(/^mu-/, '').replace(/\.js$/, '');
const m = mod.meta || {};
if (m.kode !== kode) errors.push(`meta.kode "${m.kode}" ≠ nama berkas "${kode}"`);
for (const k of ['slug', 'nama', 'diujiDi', 'durasiUSKP', 'perkiraanBobotSoal', 'statusPer', 'tujuan', 'dasarHukumUtama', 'perubahanTerbaru'])
  if (m[k] === undefined) errors.push(`meta.${k} hilang`);
const JENIS = new Set(['konsep', 'klasifikasi', 'hitung', 'prosedur', 'kasus', 'baris-spt', 'etika']);
const TAG = new Set(['angka-usang', 'salah-baca', 'salah-hitung', 'final-nonfinal', 'lupa-pasal', 'salah-klasifikasi']);
const topik = mod.topik || [];
if (!topik.length) errors.push('topik kosong');
const topikIds = new Set();
// kurikulum check
let kurikulum = null;
try {
  const kur = fs.readFileSync(path.join(__dirname, '..', 'docs', 'KURIKULUM.md'), 'utf8');
  const sec = kur.split(/\n### /).find(s => s.startsWith(kode + ' '));
  if (sec) kurikulum = [...sec.matchAll(/^- `([a-z0-9-]+)` — /gm)].map(x => x[1]);
} catch {}
topik.forEach((t, i) => {
  const p = `topik[${i}](${t.id})`;
  if (!t.id || !t.id.startsWith(kode + '.')) errors.push(`${p}: id harus "${kode}.<n>"`);
  if (topikIds.has(t.id)) errors.push(`${p}: id duplikat`); topikIds.add(t.id);
  for (const k of ['slug', 'judul', 'estimasiMenit', 'ringkasan', 'poinKunci', 'dasarHukum', 'jebakan', 'contohSoal', 'verifikasi'])
    if (t[k] === undefined) errors.push(`${p}: ${k} hilang`);
  if (Array.isArray(t.ringkasan) && t.ringkasan.length < 3) warns.push(`${p}: ringkasan < 3 butir`);
  if (Array.isArray(t.poinKunci) && t.poinKunci.length < 2) warns.push(`${p}: poinKunci < 2`);
  if (Array.isArray(t.dasarHukum) && t.dasarHukum.length < 1) errors.push(`${p}: dasarHukum kosong`);
  if (t.verifikasi === '◐' && !t.peringatan) errors.push(`${p}: verifikasi ◐ tanpa peringatan`);
  if (t.contohSoal && (!t.contohSoal.stem || !t.contohSoal.jawaban || !Array.isArray(t.contohSoal.langkah))) errors.push(`${p}: contohSoal tidak lengkap`);
});
if (kurikulum) {
  const slugs = topik.map(t => t.slug);
  for (const s of kurikulum) if (!slugs.includes(s)) errors.push(`topik kurikulum "${s}" tidak ada di modul`);
  for (const s of slugs) if (!kurikulum.includes(s)) warns.push(`topik "${s}" tidak ada di KURIKULUM.md`);
}
const soal = mod.soal || [];
const soalIds = new Set(); const perTopik = {};
soal.forEach((s, i) => {
  const p = `soal[${i}](${s.id})`;
  if (!s.id || !s.id.startsWith(kode + '-')) errors.push(`${p}: id harus "${kode}-nnn"`);
  if (soalIds.has(s.id)) errors.push(`${p}: id duplikat`); soalIds.add(s.id);
  if (!topikIds.has(s.topik)) errors.push(`${p}: topik "${s.topik}" tidak dikenal`);
  perTopik[s.topik] = (perTopik[s.topik] || 0) + 1;
  if (!Array.isArray(s.tingkat) || !s.tingkat.length) errors.push(`${p}: tingkat kosong`);
  else if (Array.isArray(m.diujiDi)) for (const t of s.tingkat) if (!m.diujiDi.includes(t)) errors.push(`${p}: tingkat ${t} di luar meta.diujiDi`);
  if (!JENIS.has(s.jenis)) errors.push(`${p}: jenis "${s.jenis}" tidak valid`);
  if (![1, 2, 3].includes(s.kesulitan)) errors.push(`${p}: kesulitan harus 1–3`);
  if (!s.stem || s.stem.length < 20) errors.push(`${p}: stem terlalu pendek`);
  if (!Array.isArray(s.kataKualifikasi)) errors.push(`${p}: kataKualifikasi harus array`);
  const opsi = s.opsi || {};
  const keys = Object.keys(opsi);
  if (keys.length !== 4 || !['A', 'B', 'C', 'D'].every(k => typeof opsi[k] === 'string' && opsi[k].length)) errors.push(`${p}: opsi harus A–D berisi teks`);
  if (!['A', 'B', 'C', 'D'].includes(s.kunci)) errors.push(`${p}: kunci tidak valid`);
  const vals = Object.values(opsi).map(v => String(v).trim().toLowerCase());
  if (new Set(vals).size !== vals.length) errors.push(`${p}: ada opsi yang identik`);
  const jo = s.jebakanOpsi || {};
  for (const k of ['A', 'B', 'C', 'D']) {
    if (k === s.kunci) { if (jo[k]) warns.push(`${p}: jebakanOpsi berisi kunci ${k}`); continue; }
    if (!jo[k]) errors.push(`${p}: jebakanOpsi.${k} hilang`); else if (!TAG.has(jo[k])) errors.push(`${p}: tagSebab "${jo[k]}" tidak valid`);
  }
  const pb = s.pembahasan || {};
  if (!pb.inti) errors.push(`${p}: pembahasan.inti hilang`);
  if (!Array.isArray(pb.jejakHitung)) errors.push(`${p}: pembahasan.jejakHitung harus array`);
  else if (s.jenis === 'hitung' && pb.jejakHitung.length < 2) errors.push(`${p}: soal hitung butuh jejakHitung ≥ 2 baris`);
  if (!pb.mengapaSalah || ['A', 'B', 'C', 'D'].filter(k => k !== s.kunci).some(k => !pb.mengapaSalah[k])) errors.push(`${p}: pembahasan.mengapaSalah tidak lengkap`);
  if (!pb.jebakan) warns.push(`${p}: pembahasan.jebakan kosong`);
  if (!Array.isArray(s.dasarHukum) || !s.dasarHukum.length || !s.dasarHukum[0].pasal) errors.push(`${p}: dasarHukum kosong`);
  if (typeof s.anggaranDetik !== 'number') errors.push(`${p}: anggaranDetik hilang`);
  if (!['✅', '◐'].includes(s.verifikasi)) errors.push(`${p}: verifikasi harus ✅ atau ◐`);
  if (s.verifikasi === '◐' && !s.peringatan) errors.push(`${p}: verifikasi ◐ tanpa peringatan`);
  // laporanUjian (opsional): kode laporan peserta, mis. ["C-2026-10"] (docs/SKEMA-KONTEN.md)
  if (s.laporanUjian !== undefined) {
    if (!Array.isArray(s.laporanUjian) || !s.laporanUjian.length || s.laporanUjian.some(l => typeof l !== 'string')) errors.push(`${p}: laporanUjian harus array string tidak kosong`);
    else {
      for (const l of s.laporanUjian) if (!/^[ABC]-\d{4}-(0[1-9]|1[0-2])$/.test(l)) errors.push(`${p}: kode laporanUjian "${l}" tidak valid (pola "C-2026-10")`);
      if (new Set(s.laporanUjian).size !== s.laporanUjian.length) warns.push(`${p}: laporanUjian berisi kode duplikat`);
      // laporan berhuruf X hanya sah untuk soal yang tingkat-nya memuat X (Latih dan Info Ujian menyaring soal lain keluar)
      if (Array.isArray(s.tingkat)) for (const l of new Set(s.laporanUjian)) { const X = l.charAt(0); if (/^[ABC]$/.test(X) && !s.tingkat.includes(X)) warns.push(`${p}: kode laporan "${l}" (Tingkat ${X}) dipasang pada soal bertingkat [${s.tingkat.join(', ')}]; soal ini tidak ikut saringan laporan Tingkat ${X}`); }
    }
  }
});
// v9.5 soal pengganti: kembaranDari = id soal asli di modul yang sama (bukan dirinya, dan soal itu sendiri bukan soal pengganti); sejak = versi masuk
const soalPeta = new Map(soal.filter(s => s && typeof s.id === 'string').map(s => [s.id, s]));
soal.forEach((s, i) => {
  const p = `soal[${i}](${s.id})`;
  if (s.kembaranDari !== undefined) {
    const r = s.kembaranDari;
    if (typeof r !== 'string' || !r) errors.push(`${p}: kembaranDari harus id soal (string)`);
    else if (r === s.id) errors.push(`${p}: kembaranDari menunjuk dirinya sendiri`);
    else if (!r.startsWith(kode + '-')) errors.push(`${p}: kembaranDari "${r}" di luar modul ${kode} (harus soal di modul yang sama)`);
    else if (!soalPeta.has(r)) errors.push(`${p}: kembaranDari "${r}" tidak ada di modul`);
    else if (soalPeta.get(r).kembaranDari !== undefined) errors.push(`${p}: kembaranDari "${r}" adalah soal pengganti (harus menunjuk soal asli)`);
  }
  if (s.sejak !== undefined && !(typeof s.sejak === 'string' && /^\d+\.\d+\.\d+$/.test(s.sejak))) errors.push(`${p}: sejak "${s.sejak}" tidak valid (pola "9.5.0")`);
});
for (const t of topikIds) if ((perTopik[t] || 0) < 4) warns.push(`topik ${t}: hanya ${perTopik[t] || 0} soal (target ≥ 4)`);
const nKasusGaya = soal.filter(s => s.jenis === 'kasus' || (s.stem || '').length >= 220).length;
if (soal.length && nKasusGaya / soal.length < 0.5) warns.push(`hanya ${nKasusGaya}/${soal.length} soal bergaya kasus (stem ≥ 220 karakter atau jenis kasus); target ≥ 50% (docs/GAYA-SOAL.md)`);
const nVignette = new Set(soal.map(s => s.kasusId).filter(Boolean)).size; if (nVignette < 2) warns.push(`vignette (kasusId) hanya ${nVignette}; target ≥ 2`);
const nKutipan = soal.filter(s => s.kutipan).length; if (nKutipan < 3) warns.push(`soal berkutipan hanya ${nKutipan}; target ≥ 3`);
const minSoal = kode === 'E' || kode === 'A5' ? 24 : 36;
if (soal.length < minSoal) errors.push(`jumlah soal ${soal.length} < ${minSoal}`);
const kartu = mod.kartu || [];
const kartuIds = new Set();
kartu.forEach((k, i) => {
  const p = `kartu[${i}](${k.id})`;
  if (!k.id || !k.id.startsWith('KT-' + kode + '-')) errors.push(`${p}: id harus "KT-${kode}-nn"`);
  if (kartuIds.has(k.id)) errors.push(`${p}: id duplikat`); kartuIds.add(k.id);
  if (!topikIds.has(k.topik)) errors.push(`${p}: topik "${k.topik}" tidak dikenal`);
  if (!['angka', 'definisi', 'prosedur', 'pasal'].includes(k.tipe)) errors.push(`${p}: tipe tidak valid`);
  for (const f of ['depan', 'belakang', 'dasar']) if (!k[f]) errors.push(`${p}: ${f} hilang`);
  if (k.menggantikan === undefined) errors.push(`${p}: menggantikan hilang (pakai null)`);
  if (!Array.isArray(k.dekTambahan)) errors.push(`${p}: dekTambahan harus array`);
});
const minKartu = kode === 'E' || kode === 'A5' ? 16 : 24;
if (kartu.length < minKartu) errors.push(`jumlah kartu ${kartu.length} < ${minKartu}`);
const kasus = mod.kasus || [];
// definisi kalkulator untuk memeriksa kalkulatorRef/kalkulatorInput kasus; bila js/kalkulator.js gagal dimuat, pemeriksaan dilewati
let kalkDef = null;
try { const KU = require(path.join(__dirname, '..', 'js', 'kalkulator.js')); kalkDef = KU && Array.isArray(KU.kalkulator) ? KU.kalkulator : null; } catch (e) { warns.push(`js/kalkulator.js tidak dapat dimuat (${e.message}); kalkulatorRef/kalkulatorInput tidak diperiksa`); }
kasus.forEach((k, i) => {
  const p = `kasus[${i}](${k.id})`;
  if (!k.id || !k.id.startsWith('K-' + kode + '-')) errors.push(`${p}: id harus "K-${kode}-nn"`);
  if (!topikIds.has(k.topik)) errors.push(`${p}: topik tidak dikenal`);
  for (const f of ['judul', 'narasi', 'data', 'langkah', 'kesimpulan', 'estimasiMenit']) if (k[f] === undefined) errors.push(`${p}: ${f} hilang`);
  if (k.kalkulatorRef === undefined) errors.push(`${p}: kalkulatorRef hilang (pakai null)`);
  const defKal = k.kalkulatorRef && kalkDef ? kalkDef.find(c => c.jenis === k.kalkulatorRef) : null;
  if (k.kalkulatorRef && kalkDef && !defKal) warns.push(`${p}: kalkulatorRef "${k.kalkulatorRef}" tidak dikenal`);
  // kalkulatorInput (opsional): nilai awal kalkulator saat dibuka dari kasus, { key: nilai } dengan key = input kalkulatorRef
  if (k.kalkulatorInput !== undefined) {
    if (!k.kalkulatorInput || typeof k.kalkulatorInput !== 'object' || Array.isArray(k.kalkulatorInput)) errors.push(`${p}: kalkulatorInput harus objek { key: nilai }`);
    else if (!k.kalkulatorRef) errors.push(`${p}: kalkulatorInput tanpa kalkulatorRef`);
    else if (defKal) { const keys = new Set(defKal.input.map(i => i.key)); for (const key of Object.keys(k.kalkulatorInput)) if (!keys.has(key)) errors.push(`${p}: kalkulatorInput.${key} bukan input kalkulator "${k.kalkulatorRef}"`); }
  }
  if (!Array.isArray(k.langkah) || k.langkah.length < 3) errors.push(`${p}: langkah < 3`);
  (k.langkah || []).forEach((l, j) => {
    const q = `${p}.langkah[${j}]`;
    if (!l.pertanyaan || l.jawaban === undefined || !Array.isArray(l.petunjuk) || l.petunjuk.length !== 3 || !l.penjelasan) errors.push(`${q}: tidak lengkap (pertanyaan, jawaban, petunjuk[3], penjelasan)`);
    if (l.tipe === 'angka') { if (typeof l.jawaban !== 'number' || typeof l.toleransi !== 'number') errors.push(`${q}: angka butuh jawaban & toleransi number`); }
    else if (l.tipe === 'pilihan') { if (!l.opsi || !['A', 'B', 'C', 'D'].includes(l.jawaban)) errors.push(`${q}: pilihan butuh opsi A–D & jawaban huruf`); }
    else errors.push(`${q}: tipe harus angka|pilihan`);
  });
});
const minKasus = kode === 'E' || kode === 'A5' ? 1 : 2;
if (kasus.length < minKasus) errors.push(`jumlah kasus ${kasus.length} < ${minKasus}`);
if (!Array.isArray(mod.tips) || mod.tips.length < 3) errors.push('tips < 3');
const bytes = Buffer.byteLength(code);
console.log(`${file}: ${topik.length} topik · ${soal.length} soal · ${kartu.length} kartu · ${kasus.length} kasus · ${(bytes / 1024).toFixed(0)} KB`);
if (warns.length) console.log('PERINGATAN:\n  ' + warns.join('\n  '));
if (errors.length) { console.log('GALAT:\n  ' + errors.join('\n  ')); process.exit(1); }
console.log('OK');
