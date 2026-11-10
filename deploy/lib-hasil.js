'use strict';
/* Pelatih UKP — validasi dan normalisasi ringkasan hasil anggota untuk dasbor tim di server (PUT /api/hasil).
   Bentuk ringkasan mengikuti UKP.tim.ringkasan() di js/tim.js: { nama, tingkat, diperbarui, versiApp, latihan{…}, simulasi[…], hadir{…} }.
   Data dari klien tidak tepercaya: kunci yang tidak dikenal dan tipe yang salah DITOLAK (400), lalu semua nilai dinormalkan (dijepit,
   dipotong, dibuang bila tidak cocok pola). Nama TIDAK diambil dari body: pemanggil mengisi nama akun server. Hasil dipangkas ≤ 120 KB.
   Sejak v7.7: field jawaban = jawaban per soal yang ringkas, maks. 400 entri, tiap entri berkunci tetap
   { s: id soal, t: topik, o: 'A'–'D' | '-', b: 0|1, d: detik, w: epoch detik, m: 'latihan'|'simulasi'|'sesi'|'cek', sim?: id simulasi, k: 'yakin'|'ragu'|'menebak'|null }.
   Tidak ada teks bebas selain id/kode pendek. */

const KODE_RE = /^(?:[A-E](?:[0-9]{1,2})?|TO-[ABC]-[0-9]{4}-[0-9]{2})$/; // kode kelompok, atau kode paket try out (format 'tryout')
const TOPIK_RE = /^[A-E][0-9]{0,2}\.[0-9A-Za-z]{1,6}(?:\.[0-9A-Za-z]{1,6})?$/;
const MAKS_SIM = 10, MAKS_LEMAH = 8, BATAS_LULUS = 60;
const MAKS_BYTE = 120 * 1024;
const MAKS_JAWAB = 400;
const SOAL_RE = /^[A-E][0-9]{0,2}-[0-9A-Za-z]{1,12}$/;
const SIM_RE = /^[0-9A-Za-z_.:-]{1,40}$/;
const MODE_JAWAB = ['latihan', 'simulasi', 'sesi', 'cek'];
const YAKIN = ['yakin', 'ragu', 'menebak'];

class GalatSkema extends Error { constructor(pesan) { super(pesan); this.status = 400; } }
const isObj = x => x != null && typeof x === 'object' && !Array.isArray(x);
const gagal = pesan => { throw new GalatSkema(pesan); };

// --- validasi ketat (bentuk dan tipe) ---
function izinkan(o, kunci, jalur) {
  for (const k of Object.keys(o)) if (!kunci.includes(k)) gagal('kunci tidak dikenal: ' + (jalur ? jalur + '.' : '') + k.slice(0, 40));
}
// tipe: 'number' | 'string' | 'boolean' | 'object' | 'array'; null dan undefined selalu boleh (field opsional)
function tipe(o, k, t, jalur) {
  const v = o[k]; if (v === undefined || v === null) return;
  const ok = t === 'array' ? Array.isArray(v) : t === 'object' ? isObj(v) : t === 'number' ? typeof v === 'number' && isFinite(v) : typeof v === t;
  if (!ok) gagal('tipe salah: ' + (jalur ? jalur + '.' : '') + k + ' harus ' + t);
  if (t === 'string' && v.length > 200) gagal('teks terlalu panjang: ' + (jalur ? jalur + '.' : '') + k);
}
function periksaPerKel(o, jalur) {
  if (o == null) return;
  const ks = Object.keys(o); if (ks.length > 40) gagal('terlalu banyak kelompok: ' + jalur);
  for (const k of ks) { if (!isObj(o[k])) gagal('tipe salah: ' + jalur + '.' + k.slice(0, 20)); izinkan(o[k], ['n', 'benar'], jalur + '.' + k.slice(0, 20)); tipe(o[k], 'n', 'number', jalur); tipe(o[k], 'benar', 'number', jalur); }
}
function periksa(raw) {
  if (!isObj(raw)) gagal('body harus objek JSON');
  izinkan(raw, ['nama', 'tingkat', 'diperbarui', 'versiApp', 'latihan', 'simulasi', 'hadir', 'jawaban', 'id', 'sumber'], '');
  tipe(raw, 'jawaban', 'array', '');
  if (raw.jawaban) {
    if (raw.jawaban.length > MAKS_JAWAB) gagal('terlalu banyak jawaban (maks. ' + MAKS_JAWAB + ')');
    raw.jawaban.forEach((e, i) => {
      const j = 'jawaban[' + i + ']'; if (!isObj(e)) gagal('tipe salah: ' + j);
      izinkan(e, ['s', 't', 'o', 'b', 'd', 'w', 'm', 'sim', 'k'], j);
      for (const k of ['s', 't', 'o', 'm', 'sim', 'k']) tipe(e, k, 'string', j);
      for (const k of ['b', 'd', 'w']) tipe(e, k, 'number', j);
      for (const k of ['s', 't', 'o', 'b', 'w', 'm']) if (e[k] == null) gagal('kunci wajib: ' + j + '.' + k);
      if (!SOAL_RE.test(e.s)) gagal('id soal tidak sah: ' + j + '.s');
      if (!TOPIK_RE.test(e.t)) gagal('topik tidak sah: ' + j + '.t');
      if (!/^[A-D-]$/.test(e.o)) gagal('opsi tidak sah: ' + j + '.o');
      if (e.b !== 0 && e.b !== 1) gagal('benar harus 0 atau 1: ' + j + '.b');
      if (!MODE_JAWAB.includes(e.m)) gagal('mode tidak sah: ' + j + '.m');
      if (e.sim != null && !SIM_RE.test(e.sim)) gagal('id simulasi tidak sah: ' + j + '.sim');
      if (e.k != null && !YAKIN.includes(e.k)) gagal('keyakinan tidak sah: ' + j + '.k');
    });
  }
  for (const k of ['nama', 'tingkat', 'diperbarui', 'versiApp', 'id', 'sumber']) tipe(raw, k, 'string', '');
  tipe(raw, 'latihan', 'object', ''); tipe(raw, 'simulasi', 'array', ''); tipe(raw, 'hadir', 'object', '');
  const l = raw.latihan;
  if (l) {
    izinkan(l, ['total', 'benar', 'akurasi7', 'sesi7', 'soal7', 'hari7', 'terakhir', 'perKelompok', 'perTopikLemah'], 'latihan');
    for (const k of ['total', 'benar', 'akurasi7', 'sesi7', 'soal7', 'hari7']) tipe(l, k, 'number', 'latihan');
    tipe(l, 'terakhir', 'string', 'latihan'); tipe(l, 'perKelompok', 'object', 'latihan'); tipe(l, 'perTopikLemah', 'array', 'latihan');
    periksaPerKel(l.perKelompok, 'latihan.perKelompok');
    if (l.perTopikLemah) {
      if (l.perTopikLemah.length > 40) gagal('terlalu banyak topik: latihan.perTopikLemah');
      l.perTopikLemah.forEach((t, i) => { const j = 'latihan.perTopikLemah[' + i + ']'; if (!isObj(t)) gagal('tipe salah: ' + j); izinkan(t, ['id', 'n', 'benar'], j); tipe(t, 'id', 'string', j); tipe(t, 'n', 'number', j); tipe(t, 'benar', 'number', j); });
    }
  }
  if (raw.simulasi) {
    if (raw.simulasi.length > 50) gagal('terlalu banyak simulasi');
    raw.simulasi.forEach((x, i) => {
      const j = 'simulasi[' + i + ']'; if (!isObj(x)) gagal('tipe salah: ' + j);
      izinkan(x, ['id', 'format', 'kode', 'tingkat', 'selesai', 'skor', 'benar', 'salah', 'kosong', 'jumlah', 'menit', 'lulus', 'perKelompok'], j);
      for (const k of ['id', 'format', 'kode', 'tingkat', 'selesai']) tipe(x, k, 'string', j);
      for (const k of ['skor', 'benar', 'salah', 'kosong', 'jumlah', 'menit']) tipe(x, k, 'number', j);
      tipe(x, 'lulus', 'boolean', j); tipe(x, 'perKelompok', 'object', j); periksaPerKel(x.perKelompok, j + '.perKelompok');
    });
  }
  const hd = raw.hadir;
  if (hd) { izinkan(hd, ['hari14', 'rangkaian'], 'hadir'); tipe(hd, 'hari14', 'number', 'hadir'); tipe(hd, 'rangkaian', 'number', 'hadir'); }
}

// --- normalisasi (selaras dengan normalAnggota di js/tim.js) ---
const angka = (v, maks) => typeof v === 'number' && isFinite(v) ? Math.min(maks, Math.max(0, v)) : 0;
const bulatAngka = (v, maks) => Math.round(angka(v, maks));
const bulat1 = x => Math.round(x * 10) / 10;
const tglOk = v => typeof v === 'string' && v.length <= 40 && !isNaN(Date.parse(v)) ? new Date(Date.parse(v)).toISOString() : null;
const teks = (v, maks) => typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f\u2028\u2029]/g, ' ').trim().slice(0, maks) : '';
const tingkatOk = v => ['A', 'B', 'C'].includes(v) ? v : 'A';
function perKelOk(o) {
  const out = {}; if (!isObj(o)) return out; let i = 0;
  for (const k of Object.keys(o)) { if (i >= 24) break; if (!KODE_RE.test(k) || !isObj(o[k])) continue; const n = bulatAngka(o[k].n, 1e6); out[k] = { n, benar: Math.min(n, bulatAngka(o[k].benar, 1e6)) }; i++; }
  return out;
}
// jawaban per soal: sudah lolos periksa(); nilai dijepit (d 0–86400, w 0..jam server + 5 menit), urut terbaru dulu
function normalJawaban(arr, kini) {
  const maksW = Math.floor((kini || Date.now()) / 1000) + 300;
  return (Array.isArray(arr) ? arr : []).filter(e => isObj(e) && SOAL_RE.test(String(e.s)) && TOPIK_RE.test(String(e.t)) && /^[A-D-]$/.test(String(e.o)) && MODE_JAWAB.includes(e.m) && typeof e.w === 'number' && isFinite(e.w))
    .slice(0, MAKS_JAWAB).map((e, i) => {
      const x = { s: e.s, t: e.t, o: e.o, b: e.b === 1 && e.o !== '-' ? 1 : 0, d: bulatAngka(e.d, 86400), w: Math.round(Math.min(maksW, Math.max(0, e.w))), m: e.m };
      if (typeof e.sim === 'string' && SIM_RE.test(e.sim)) x.sim = e.sim;
      x.k = YAKIN.includes(e.k) && e.o !== '-' ? e.k : null;
      return [x, i];
    }).sort((a, b) => b[0].w - a[0].w || a[1] - b[1]).map(p => p[0]);
}
function normalkan(raw, nama, kini) {
  const l = isObj(raw.latihan) ? raw.latihan : {}, hd = isObj(raw.hadir) ? raw.hadir : {};
  const total = bulatAngka(l.total, 1e7);
  return {
    nama, tingkat: tingkatOk(raw.tingkat), versiApp: teks(raw.versiApp, 16).replace(/[^0-9A-Za-z.\-]/g, ''),
    latihan: {
      total, benar: Math.min(total, bulatAngka(l.benar, 1e7)),
      akurasi7: typeof l.akurasi7 === 'number' && isFinite(l.akurasi7) ? Math.round(Math.min(1, Math.max(0, l.akurasi7)) * 1000) / 1000 : null,
      sesi7: bulatAngka(l.sesi7, 1000), soal7: typeof l.soal7 === 'number' ? bulatAngka(l.soal7, 1e6) : null, hari7: typeof l.hari7 === 'number' ? bulatAngka(l.hari7, 7) : null,
      terakhir: tglOk(l.terakhir), perKelompok: perKelOk(l.perKelompok),
      perTopikLemah: (Array.isArray(l.perTopikLemah) ? l.perTopikLemah : []).filter(t => isObj(t) && TOPIK_RE.test(String(t.id))).slice(0, MAKS_LEMAH)
        .map(t => { const n = bulatAngka(t.n, 1e6); return { id: String(t.id), n, benar: Math.min(n, bulatAngka(t.benar, 1e6)) }; }),
    },
    simulasi: (Array.isArray(raw.simulasi) ? raw.simulasi : []).filter(isObj).slice(-MAKS_SIM).map(x => {
      const jumlah = bulatAngka(x.jumlah, 1000), benar = Math.min(jumlah, bulatAngka(x.benar, 1000)), skor = bulat1(angka(x.skor, 100));
      return { id: teks(x.id, 40).replace(/[^0-9A-Za-z_.:-]/g, ''), format: ['UKP', 'USKP', 'kustom', 'tryout'].includes(x.format) ? x.format : '',
        kode: typeof x.kode === 'string' && KODE_RE.test(x.kode) ? x.kode : null, tingkat: tingkatOk(x.tingkat), selesai: tglOk(x.selesai),
        skor, benar, salah: Math.min(jumlah - benar, bulatAngka(x.salah, 1000)), kosong: Math.min(jumlah - benar, bulatAngka(x.kosong, 1000)),
        jumlah, menit: bulatAngka(x.menit, 1440), lulus: skor >= BATAS_LULUS, perKelompok: perKelOk(x.perKelompok) };
    }),
    hadir: { hari14: bulatAngka(hd.hari14, 14), rangkaian: bulatAngka(hd.rangkaian, 1e5) },
    jawaban: normalJawaban(raw.jawaban, kini),
  };
}
const nByte = o => Buffer.byteLength(JSON.stringify(o));
// pangkas bertahap sampai ≤ MAKS_BYTE (dalam praktik ringkasan ternormalkan jauh di bawah batas; ini pengaman)
function pangkas(d) {
  // jawaban per soal paling besar: buang entri tertua bertahap lebih dulu
  if (Array.isArray(d.jawaban)) while (d.jawaban.length && nByte(d) > MAKS_BYTE) d.jawaban = d.jawaban.slice(0, Math.floor(d.jawaban.length * 0.8));
  const langkah = [
    () => { d.simulasi.forEach(x => { x.perKelompok = {}; }); },
    () => { d.simulasi = d.simulasi.slice(-5); },
    () => { d.latihan.perTopikLemah = d.latihan.perTopikLemah.slice(0, 3); },
    () => { d.latihan.perKelompok = {}; },
    () => { d.simulasi = d.simulasi.slice(-1); d.latihan.perTopikLemah = []; },
  ];
  for (let i = 0; nByte(d) > MAKS_BYTE; i++) { if (i >= langkah.length) gagal('ringkasan terlalu besar'); langkah[i](); }
  return d;
}
// periksa + normalkan + pangkas; nama = nama akun server; diperbarui = jam server
function siapkan(raw, nama, kini) {
  periksa(raw);
  const d = pangkas(normalkan(raw, nama, kini));
  d.diperbarui = new Date(kini || Date.now()).toISOString();
  return d;
}

module.exports = { siapkan, periksa, normalkan, pangkas, GalatSkema, MAKS_BYTE, MAKS_JAWAB };
