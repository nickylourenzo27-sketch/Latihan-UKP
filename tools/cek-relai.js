#!/usr/bin/env node
/* Pelatih UKP — pemeriksa jalur Room tim (v8.2).
   Menjalankan js/ruang.js yang SAMA dengan website terhadap jalur publik sungguhan, dari Node ≥ 22
   (WebSocket dan WebCrypto bawaan Node, tanpa dependensi). Tidak ada data pengguna yang dikirim: room uji sekali pakai
   bernama "Uji jalur", pesertanya "Uji-A"/"Uji-B"/"Uji-C", isinya terenkripsi seperti room biasa, dan room ditutup
   (pesan tersimpan dihapus) di akhir tiap langkah.

   Pakai:  node tools/cek-relai.js            → semua jalur bawaan, satu per satu, lalu uji lintas jalur
           node tools/cek-relai.js wss://…    → hanya jalur yang disebut
           node tools/cek-relai.js --json     → ringkasan JSON di baris terakhir
   Keluar 0 bila minimal satu jalur lulus penuh; 1 bila tidak ada yang lulus; 2 bila lingkungan tidak mendukung. */
'use strict';
const path = require('node:path');

const argv = process.argv.slice(2);
const mauJson = argv.includes('--json');
const urlArg = argv.filter(a => /^wss?:\/\//i.test(a));
const diGitHub = !!process.env.GITHUB_ACTIONS;

if (typeof WebSocket !== 'function' || !globalThis.crypto || !globalThis.crypto.subtle) {
  console.error('Perlu Node ≥ 22 (WebSocket dan WebCrypto bawaan). Versi ini: ' + process.version);
  process.exit(2);
}
require(path.join(__dirname, '..', 'js', 'ruang.js'));
const R = globalThis.UKP.ruang;
if (process.env.KRED) { const [nm, sd] = process.env.KRED.split(':'); const asli = R._kodek.Kodek.connect; R._kodek.Kodek.connect = o => asli(Object.assign({}, o, { username: nm, password: sd })); }
const LABEL = process.env.LABEL || '';
const RELAI = urlArg.length ? urlArg : R.RELAI_BAWAAN.slice();

const tidur = ms => new Promise(r => setTimeout(r, ms));
async function tunggu(cek, ms, apa) {
  const batas = Date.now() + ms;
  for (;;) {
    let v; try { v = cek(); } catch (e) { v = false; }
    if (v) return v;
    if (Date.now() > batas) throw new Error('waktu habis (' + Math.round(ms / 1000) + ' dtk): ' + apa);
    await tidur(40);
  }
}
const dengan = (janji, ms, apa) => Promise.race([janji, tidur(ms).then(() => { throw new Error('waktu habis (' + Math.round(ms / 1000) + ' dtk): ' + apa); })]);

const semuaInstans = [];
function instans(urls) {
  const simpan = {};
  const api = R.buatInstans({
    WebSocket, crypto: globalThis.crypto, versi: 'cek-relai',
    store: { get: () => simpan, save() {} },
    belajar: { terimaSesiRoom: () => 'baru', sesiBersamaDari: () => null },
    lokasi: { origin: 'https://nickylourenzo27-sketch.github.io', pathname: '/Latihan-UKP/', hostname: 'nickylourenzo27-sketch.github.io', protocol: 'https:' },
  });
  api.RELAI = urls.slice();
  semuaInstans.push(api);
  return api;
}
async function bereskan(daftar) {
  await Promise.all(daftar.map(a => dengan(Promise.resolve().then(() => a.keluar()), 2500, 'keluar').catch(() => {})));
}

// satu alur room penuh: tuan di `urlTuan`, anggota B di `urlB`, pengintip di `urlC`
async function alur(nama, urlTuan, urlB, urlC) {
  const langkah = []; const A = instans(urlTuan), B = instans(urlB), C = instans(urlC);
  let kode = null, lulus = false, galat = null;
  const catat = async (apa, fn) => { const t0 = Date.now(); const v = await fn(); langkah.push({ apa, ms: Date.now() - t0 }); return v; };
  try {
    kode = await catat('buat room + tersambung', async () => {
      const k = A.buat({ nama: 'Uji-A', peserta: ['Uji-A', 'Uji-B', 'Uji-C'], namaRoom: 'Uji jalur', tingkat: 'B' });
      await tunggu(() => A.status().relai.length && A.status().relai.every(r => r.status === 'tersambung'), 12000, 'tuan tersambung ke ' + urlTuan.length + ' jalur');
      return k;
    });
    await tidur(400);   // beri waktu pesan tersimpan sampai di server
    await catat('intip tanpa bergabung (pesan tersimpan)', async () => {
      const st = await dengan(C.intip(kode), 35000, 'intip');
      if (!st || !st.room || st.room.nama !== 'Uji jalur') throw new Error('state room tidak terbaca lewat intip (pesan tersimpan tidak dikirim server?)');
    });
    await catat('gabung + terlihat hadir', async () => {
      const st = await dengan(B.gabung(kode, 'Uji-B'), 35000, 'gabung');
      if (!st) throw new Error('gabung tidak menerima state room');
      await tunggu(() => { const h = A.hadir(); return h['Uji-B'] && h['Uji-B'].online; }, 10000, 'tuan melihat Uji-B hadir');
    });
    const id = 'sb-uji-' + Date.now().toString(36); const soal = ['A1-001', 'B6-126'];
    await catat('mulai latihan sampai ke anggota', async () => {
      if (!A.mulaiLatihan({ id, soalIds: soal, detikPerSoal: 60 })) throw new Error('mulaiLatihan ditolak');
      await tunggu(() => { const s = B.state(); return s && s.aktivitas && s.aktivitas.id === id; }, 10000, 'anggota menerima latihan');
    });
    await catat('jawaban anggota sampai ke tuan', async () => {
      if (!B.kirimJawaban({ aktivitas: id, soalId: soal[0], o: 'B', k: 'yakin' })) throw new Error('kirimJawaban ditolak');
      await tunggu(() => { const j = A.jawabanSemua(id); return j['Uji-B'] && j['Uji-B'].j && j['Uji-B'].j[soal[0]] === 'B'; }, 10000, 'tuan menerima jawaban');
    });
    await catat('kunci + penjelas + skor tim sampai ke anggota', async () => {
      const per = { 'Uji-A': { o: '-', k: null, b: 0 }, 'Uji-B': { o: 'B', k: 'yakin', b: 1 } };
      if (!A.bukaKunci(soal[0], per, { penjelas: 'Uji-B', tim: { benar: 1, dijawab: 1 } })) throw new Error('bukaKunci ditolak');
      await tunggu(() => { const a = (B.state() || {}).aktivitas; return a && a.fase === 'kunci' && a.hasilSoal && a.hasilSoal.penjelas === 'Uji-B' && a.tim && a.tim.benar === 1; }, 10000, 'anggota menerima kunci');
    });
    await catat('tutup room sampai ke anggota', async () => {
      let tertutup = false; B.on('tutup', () => { tertutup = true; });
      A.akhiriAktivitas();
      const ok = await dengan(A.tutup(), 15000, 'tutup');
      if (!ok) throw new Error('tutup() melaporkan tidak ada jalur tersambung');
      await tunggu(() => tertutup, 8000, 'anggota menerima penutupan');
    });
    await catat('room hilang setelah ditutup (pesan tersimpan terhapus)', async () => {
      await tidur(600);
      const st = await dengan(instans(urlC).intip(kode), 35000, 'intip setelah tutup');
      if (st) throw new Error('state room masih terbaca setelah ditutup');
    });
    lulus = true;
  } catch (e) { galat = String((e && e.message) || e); }
  await bereskan([A, B, C]);
  return { nama, lulus, galat, langkah, total: langkah.reduce((n, x) => n + x.ms, 0) };
}

(async () => {
  const t0 = Date.now();
  console.log('Pemeriksa jalur Room tim · ' + new Date().toISOString() + ' · Node ' + process.version);
  // 1) salam pembuka ke tiap jalur (sama dengan tombol "Cek sambungan" di aplikasi)
  const u = instans(RELAI);
  const salam = await dengan(u.ujiRelai(), 20000, 'ujiRelai').catch(e => RELAI.map(url => ({ url, ok: false, ms: 0, alasan: String(e.message || e) })));
  salam.forEach((x, i) => console.log('  salam jalur ' + (i + 1) + ' ' + x.url + ' → ' + (x.ok ? 'tersambung ' + x.ms + ' ms' : 'GAGAL: ' + x.alasan)));

  // 2) alur room penuh di tiap jalur sendiri-sendiri
  const hasil = [];
  for (let i = 0; i < RELAI.length; i++) {
    const url = RELAI[i];
    const h = await alur('jalur ' + (i + 1), [url], [url], [url]);
    h.url = url; h.salam = salam[i] || null; hasil.push(h);
    console.log('  alur ' + h.nama + ' ' + url + ' → ' + (h.lulus ? 'LULUS ' + h.total + ' ms' : 'GAGAL di langkah ' + (h.langkah.length + 1) + ': ' + h.galat));
    h.langkah.forEach(l => console.log('      ' + l.apa + ': ' + l.ms + ' ms'));
  }
  // 3) lintas jalur: tuan di semua jalur yang lulus, anggota di jalur pertama, pengintip di jalur terakhir
  const baik = hasil.filter(h => h.lulus).map(h => h.url);
  let lintas = null;
  if (baik.length >= 2) {
    lintas = await alur('lintas jalur', baik, [baik[0]], [baik[baik.length - 1]]);
    console.log('  alur lintas jalur (' + baik.length + ' jalur) → ' + (lintas.lulus ? 'LULUS ' + lintas.total + ' ms' : 'GAGAL di langkah ' + (lintas.langkah.length + 1) + ': ' + lintas.galat));
    lintas.langkah.forEach(l => console.log('      ' + l.apa + ': ' + l.ms + ' ms'));
  }
  const ringkas = {
    waktu: new Date().toISOString(), node: process.version, detik: Math.round((Date.now() - t0) / 1000),
    lulus: baik.length, dari: RELAI.length,
    jalur: hasil.map(h => ({ url: h.url, salam: h.salam ? (h.salam.ok ? h.salam.ms : h.salam.alasan) : null, lulus: h.lulus, ms: h.total, galat: h.galat, langkahGagal: h.lulus ? null : h.langkah.length + 1 })),
    lintas: lintas ? { lulus: lintas.lulus, ms: lintas.total, galat: lintas.galat } : null,
  };
  console.log('Ringkasan: ' + ringkas.lulus + ' dari ' + ringkas.dari + ' jalur lulus penuh' + (lintas ? '; lintas jalur ' + (lintas.lulus ? 'lulus' : 'GAGAL') : '') + ' · ' + ringkas.detik + ' dtk');
  if (diGitHub) {
    // anotasi: terbaca lewat API check-runs tanpa mengunduh log
    const bersih = s => String(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
    ringkas.jalur.forEach((j, i) => console.log('::' + (j.lulus ? 'notice' : 'warning') + ' title=Jalur ' + LABEL + (i + 1) + '::' + bersih(JSON.stringify(j))));
    if (lintas) console.log('::' + (lintas.lulus ? 'notice' : 'warning') + ' title=Lintas jalur ' + LABEL + '::' + bersih(JSON.stringify(ringkas.lintas)));
    console.log('::' + (ringkas.lulus ? 'notice' : 'error') + ' title=Ringkasan ' + LABEL + '::' + bersih(ringkas.lulus + ' dari ' + ringkas.dari + ' jalur lulus penuh, ' + ringkas.detik + ' dtk'));
    if (process.env.GITHUB_STEP_SUMMARY) {
      const baris = ['## Jalur Room tim', '', '| Jalur | Salam | Alur penuh | Catatan |', '|---|---|---|---|']
        .concat(ringkas.jalur.map((j, i) => '| ' + (i + 1) + ' `' + j.url + '` | ' + (typeof j.salam === 'number' ? j.salam + ' ms' : 'gagal') + ' | ' + (j.lulus ? 'lulus ' + j.ms + ' ms' : 'GAGAL') + ' | ' + (j.galat || '') + ' |'));
      if (lintas) baris.push('', 'Lintas jalur: ' + (lintas.lulus ? 'lulus' : 'GAGAL: ' + lintas.galat));
      try { require('node:fs').appendFileSync(process.env.GITHUB_STEP_SUMMARY, baris.join('\n') + '\n'); } catch (e) {}
    }
  }
  if (mauJson) console.log(JSON.stringify(ringkas));
  await bereskan(semuaInstans);
  process.exit(ringkas.lulus >= 1 ? 0 : 1);
})().catch(e => { console.error('Pemeriksa gagal dijalankan:', e); process.exit(2); });
