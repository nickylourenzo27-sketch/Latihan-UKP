#!/usr/bin/env node
/* Selidik semantik "pesan tersimpan" (retained) tiap jalur publik dengan lapisan Koneksi milik js/ruang.js.
   Hanya untuk cabang uji: topik acak "ukpuji/<acak>/…", isi huruf uji, dibersihkan di akhir. */
'use strict';
const path = require('node:path');
require(path.join(__dirname, '..', 'js', 'ruang.js'));
const R = globalThis.UKP.ruang; const Koneksi = R._Koneksi;
const K = Object.assign({}, R.KONFIG, { batasSambungMs: 9000 });
const tidur = ms => new Promise(r => setTimeout(r, ms));
const hex = n => Array.from(crypto.getRandomValues(new Uint8Array(n))).map(b => b.toString(16).padStart(2, '0')).join('');
const bersih = s => String(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
const catat = (tingkat, judul, obj) => console.log('::' + tingkat + ' title=' + judul + '::' + bersih(typeof obj === 'string' ? obj : JSON.stringify(obj)));

function sambung(url, filter, saatPublish) {
  return new Promise((res, rej) => {
    let beres = false;
    const kon = Koneksi({ url, WS: WebSocket, idKlien: 'ukp' + hex(6), konfig: K, filter: () => filter, buatWill: null,
      saatPublish: p => { try { saatPublish && saatPublish(p); } catch (e) {} },
      saatStatus: k => { if (k.status === 'tersambung' && !beres) { beres = true; res(kon); } },
      saatGagal: (k, pernah) => { if (!pernah && !beres) { beres = true; const g = k.galat; try { kon.henti(false); } catch (e) {} rej(new Error(g || 'gagal')); } } });
    kon.mulai();
    setTimeout(() => { if (!beres) { beres = true; try { kon.henti(false); } catch (e) {} rej(new Error('waktu habis sambung')); } }, 11000);
  });
}
async function baca(url, filter, tungguMs) {
  const dapat = []; const t0 = Date.now(); let kon;
  try { kon = await sambung(url, [filter], p => dapat.push({ t: p.topik.split('/').pop(), isi: Buffer.from(p.muatan).toString().slice(0, 8), r: p.retain ? 1 : 0, ms: Date.now() - t0 })); }
  catch (e) { return { galat: e.message }; }
  await tidur(tungguMs); kon.henti();
  return dapat;
}
const isi = d => (Array.isArray(d) ? d.filter(x => x.r).map(x => x.isi).join(',') || '-' : 'galat:' + d.galat);
const jml = d => (Array.isArray(d) ? d.filter(x => x.r && x.isi !== '').length : -1);

async function selidik(url) {
  const o = { url }; const akar = 'ukpuji/' + hex(8); const T = akar + '/t';
  let P;
  try { const t0 = Date.now(); P = await sambung(url, [], null); o.sambungMs = Date.now() - t0; } catch (e) { o.galat = e.message; return o; }
  try {
    // 1) tulis, baca, timpa, baca
    P.terbit(T, 'v1', true); await tidur(300);
    o.baca1 = isi(await baca(url, T, 2000));
    P.terbit(T, 'v2', true);
    o.timpaLangsung = isi(await baca(url, T, 1500));
    await tidur(1500); o.timpa3dtk = isi(await baca(url, T, 1500));
    // 2) hapus tunggal, lalu baca berulang
    P.terbit(T, '', true); const tH = Date.now(); o.hapus = [];
    for (const jeda of [300, 2000, 5000, 9000]) { await tidur(jeda); const d = await baca(url, T, 2200); o.hapus.push(Math.round((Date.now() - tH) / 100) / 10 + 's:' + isi(d)); if (isi(d) === '-') break; }
    // 3) pesan langsung (bukan tersimpan)
    { const dapat = []; const S = await sambung(url, [akar + '/hidup'], p => dapat.push(Date.now())); const t0 = Date.now(); P.terbit(akar + '/hidup', 'x', false); for (let i = 0; i < 60 && !dapat.length; i++) await tidur(50); o.langsungMs = dapat.length ? dapat[0] - t0 : null; S.henti(); }
    // 4) serbuan: 10 tulis, lalu 10 hapus
    for (let i = 0; i < 10; i++) P.terbit(akar + '/b' + i, 'b', true);
    await tidur(1500); o.serbuTulis = jml(await baca(url, akar + '/#', 2500));
    for (let i = 0; i < 10; i++) P.terbit(akar + '/b' + i, '', true);
    await tidur(1500); o.serbuHapus2dtk = jml(await baca(url, akar + '/#', 2500));
    if (o.serbuHapus2dtk > 0) { await tidur(8000); o.serbuHapus12dtk = jml(await baca(url, akar + '/#', 2500)); }
    // 5) hapus pelan untuk sisa
    if (o.serbuHapus12dtk > 0) { for (let i = 0; i < 10; i++) { P.terbit(akar + '/b' + i, '', true); await tidur(400); } await tidur(1500); o.hapusPelan = jml(await baca(url, akar + '/#', 2500)); }
    // 6) terbit lalu langsung putus (seperti tutup room): tulis+putus, kemudian hapus+putus
    { const A = await sambung(url, [], null); A.terbit(akar + '/d', 'd1', true); A.henti(); await tidur(1200); o.tulisLaluPutus = isi(await baca(url, akar + '/d', 2000));
      const B = await sambung(url, [], null); B.terbit(akar + '/d', '', true); B.henti(); await tidur(1200); o.hapusLaluPutus = isi(await baca(url, akar + '/d', 2000));
      if (o.hapusLaluPutus !== '-') { await tidur(6000); o.hapusLaluPutus8dtk = isi(await baca(url, akar + '/d', 2000)); } }
    // 7) tulis, hapus, tulis penanda (batu nisan) berurutan cepat: yang terakhir menang?
    P.terbit(akar + '/n', 'lama', true); await tidur(400); P.terbit(akar + '/n', '', true); P.terbit(akar + '/n', 'nisan', true); await tidur(1500); o.nisan = isi(await baca(url, akar + '/n', 2000));
  } catch (e) { o.galatDiTengah = String(e.message || e); }
  // bersih-bersih pelan
  try { for (const s of ['t', 'd', 'n', 'hidup'].concat(Array.from({ length: 10 }, (_, i) => 'b' + i))) { P.terbit(akar + '/' + s, '', true); await tidur(250); } await tidur(800); o.sisa = jml(await baca(url, akar + '/#', 2500)); } catch (e) {}
  try { P.henti(); } catch (e) {}
  return o;
}

(async () => {
  const utama = process.env.SELIDIK_URL ? process.env.SELIDIK_URL.split(',') : R.RELAI_BAWAAN.slice();
  const kandidat = ['wss://mqtt.eclipseprojects.io/mqtt', 'ws://mqtt.eclipseprojects.io/mqtt', 'wss://broker.emqx.io:443/mqtt', 'wss://broker.hivemq.com:443/mqtt', 'wss://broker-cn.emqx.io:8084/mqtt', 'wss://mqtt-dashboard.com:8884/mqtt', 'wss://public.cloud.shiftr.io:443', 'wss://test.mosquitto.org:8091/', 'wss://broker.emqx.io:8084/', 'wss://broker.hivemq.com:8884/'];
  const u = R.buatInstans({ WebSocket, crypto: globalThis.crypto, store: { get: () => ({}), save() {} }, lokasi: { hostname: 'x.github.io', origin: 'https://x.github.io', pathname: '/' } });
  u.RELAI = process.env.SELIDIK_URL ? utama : kandidat; Object.assign(u.KONFIG, { batasSambungMs: 9000 });
  const hk = await u.ujiRelai();
  catat('notice', 'Kandidat', hk.map(x => x.url.replace(/^wss?:\/\//, m => (m === 'ws://' ? 'ws ' : '')) + '=' + (x.ok ? x.ms + 'ms' : 'X ' + String(x.alasan).slice(0, 40))).join(' | '));
  const hasil = await Promise.all(utama.map(url => selidik(url).catch(e => ({ url, galat: String(e.message || e) }))));
  hasil.forEach((o, i) => { console.log(JSON.stringify(o)); catat('notice', 'Selidik ' + (i + 1), o); });
  process.exit(0);
})().catch(e => { console.error(e); process.exit(0); });
