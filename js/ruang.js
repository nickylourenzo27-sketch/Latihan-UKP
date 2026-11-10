/* Pelatih UKP — Room tim (v8.2): satu room tetap untuk tim di website statis, tanpa server sendiri dan tanpa akun.
   Transport: klien MQTT 3.1.1 minimal (QoS 0) di atas WebSocket ke relai publik gratis. Isi pesan dienkripsi AES-GCM 256
   dengan kunci yang diturunkan dari kode room (PBKDF2-SHA-256), jadi relai hanya melihat byte acak dan awalan topik berupa hash.
   Lapisan (masing-masing diuji sendiri di test/ruang.test.js):
     (a) Kodek  — penyandi/pengurai paket MQTT + pengurai aliran (paket boleh terpecah/tergabung antar-frame)
     (b) Koneksi — satu sambungan WebSocket+MQTT: CONNECT/SUBSCRIBE, ping, sambung ulang bertahap, antrean "terakhir per topik"
     (c) Kripto — kode room, kunci, awalan topik, enkripsi/dekripsi muatan
     (d) Protokol — validasi skema pesan + aturan penerimaan (murni, tanpa jaringan)
     (e) Pengelola relai — tuan menyambung ke semua relai, anggota ke relai pertama yang terjangkau (berpindah bila gagal)
     (f) API UKP.ruang + emitor peristiwa (status, state, jawaban, hadir, sesi, indeks, peran)
   Tanpa DOM: modul yang sama dimuat di peramban dan di node (uji). WebSocket, crypto, store, dan UKP.belajar dapat disuntikkan
   lewat UKP.ruang.buatInstans({ WebSocket, crypto, store, belajar, lokasi }). */
(function (root) {
  'use strict';
  const UKP = root.UKP = root.UKP || {};
  const TE = root.TextEncoder || (typeof TextEncoder !== 'undefined' ? TextEncoder : null);
  const TD = root.TextDecoder || (typeof TextDecoder !== 'undefined' ? TextDecoder : null);
  const isObj = x => x !== null && typeof x === 'object' && !Array.isArray(x);
  const punya = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

  // ======================================================================================
  // (a) KODEK MQTT 3.1.1
  // ======================================================================================
  const MAKS_PAKET = 256 * 1024;   // batas paket masuk dan muatan
  const JENIS = { 1: 'connect', 2: 'connack', 3: 'publish', 4: 'puback', 5: 'pubrec', 6: 'pubrel', 7: 'pubcomp', 8: 'subscribe', 9: 'suback', 10: 'unsubscribe', 11: 'unsuback', 12: 'pingreq', 13: 'pingresp', 14: 'disconnect' };
  function utf8(s) { return new TE().encode(String(s)); }
  function dariUtf8(b) { return new TD('utf-8', { fatal: true }).decode(b); }
  function satukan(bagian) {
    let n = 0; for (const b of bagian) n += b.length;
    const out = new Uint8Array(n); let i = 0;
    for (const b of bagian) { out.set(b, i); i += b.length; }
    return out;
  }
  function varint(n) {
    if (!Number.isInteger(n) || n < 0 || n > 268435455) throw new Error('panjang di luar batas MQTT');
    const out = []; do { let b = n % 128; n = Math.floor(n / 128); if (n > 0) b |= 128; out.push(b); } while (n > 0);
    return Uint8Array.from(out);
  }
  function u16(n) { return Uint8Array.of((n >> 8) & 255, n & 255); }
  function strM(s) { const b = typeof s === 'string' ? utf8(s) : s; if (b.length > 65535) throw new Error('string MQTT terlalu panjang'); return satukan([u16(b.length), b]); }
  function paket(b1, bagian) { const isi = satukan(bagian); return satukan([Uint8Array.of(b1), varint(isi.length), isi]); }
  function bytes(x) { if (x == null) return new Uint8Array(0); if (typeof x === 'string') return utf8(x); if (ArrayBuffer.isView(x)) return new Uint8Array(x.buffer, x.byteOffset, x.byteLength); return new Uint8Array(x); }
  const Kodek = {
    connect(o) {
      o = o || {}; const will = o.will || null;
      let f = 0; if (o.clean !== false) f |= 0x02;
      if (will) { f |= 0x04; f |= ((will.qos || 0) & 3) << 3; if (will.retain) f |= 0x20; }
      if (o.username != null) f |= 0x80; if (o.password != null) f |= 0x40;
      const bag = [strM('MQTT'), Uint8Array.of(4, f), u16(o.keepalive == null ? 30 : o.keepalive), strM(o.clientId || '')];
      if (will) { bag.push(strM(will.topik)); bag.push(strM(bytes(will.muatan))); }
      if (o.username != null) bag.push(strM(o.username)); if (o.password != null) bag.push(strM(bytes(o.password)));
      return paket(0x10, bag);
    },
    connack(o) { o = o || {}; return paket(0x20, [Uint8Array.of(o.sesiAda ? 1 : 0, o.kode || 0)]); },
    publish(o) {
      const qos = (o.qos || 0) & 3; const b1 = 0x30 | (o.dup ? 8 : 0) | (qos << 1) | (o.retain ? 1 : 0);
      const bag = [strM(o.topik)]; if (qos > 0) bag.push(u16(o.id || 1)); bag.push(bytes(o.muatan));
      return paket(b1, bag);
    },
    subscribe(o) { return paket(0x82, [u16(o.id || 1)].concat(o.topik.map(t => satukan([strM(t), Uint8Array.of(o.qos || 0)])))); },
    suback(o) { return paket(0x90, [u16(o.id || 1), Uint8Array.from(o.kode || [0])]); },
    unsubscribe(o) { return paket(0xA2, [u16(o.id || 1)].concat(o.topik.map(t => strM(t)))); },
    unsuback(o) { return paket(0xB0, [u16(o.id || 1)]); },
    pingreq() { return Uint8Array.of(0xC0, 0); },
    pingresp() { return Uint8Array.of(0xD0, 0); },
    disconnect() { return Uint8Array.of(0xE0, 0); },
  };
  // urai satu paket utuh (header tetap + isi) → objek; melempar galat bila rusak
  function uraiPaket(b1, isi) {
    const tipe = b1 >> 4, fl = b1 & 15; const jenis = JENIS[tipe];
    if (!jenis) throw new Error('jenis paket tidak dikenal: ' + tipe);
    let i = 0;
    const perlu = n => { if (i + n > isi.length) throw new Error('paket ' + jenis + ' terpotong'); };
    const baca16 = () => { perlu(2); const v = (isi[i] << 8) | isi[i + 1]; i += 2; return v; };
    const bacaBytes = () => { const n = baca16(); perlu(n); const b = isi.slice(i, i + n); i += n; return b; };
    const bacaStr = () => dariUtf8(bacaBytes());
    if ((tipe === 8 || tipe === 10 || tipe === 6) && fl !== 2) throw new Error('flag ' + jenis + ' salah');
    switch (tipe) {
      case 1: {
        const proto = bacaStr(); perlu(4); const level = isi[i++], f = isi[i++];
        if (proto !== 'MQTT' && proto !== 'MQIsdp') throw new Error('protokol bukan MQTT');
        const keepalive = baca16(); const clientId = bacaStr(); const o = { jenis, level, clean: !!(f & 2), keepalive, clientId, will: null };
        if (f & 4) o.will = { topik: bacaStr(), muatan: bacaBytes(), qos: (f >> 3) & 3, retain: !!(f & 0x20) };
        if (f & 0x80) o.username = bacaStr(); if (f & 0x40) o.password = bacaBytes();
        return o;
      }
      case 2: { perlu(2); return { jenis, sesiAda: !!(isi[0] & 1), kode: isi[1] }; }
      case 3: {
        const qos = (fl >> 1) & 3; if (qos === 3) throw new Error('QoS 3 tidak sah');
        const topik = bacaStr(); const o = { jenis, topik, qos, retain: !!(fl & 1), dup: !!(fl & 8) };
        if (qos > 0) o.id = baca16(); o.muatan = isi.slice(i); return o;
      }
      case 4: case 5: case 6: case 7: case 11: return { jenis, id: baca16() };
      case 8: { const id = baca16(); const topik = [], qos = []; while (i < isi.length) { topik.push(bacaStr()); perlu(1); qos.push(isi[i++]); } if (!topik.length) throw new Error('SUBSCRIBE tanpa topik'); return { jenis, id, topik, qos }; }
      case 9: { const id = baca16(); return { jenis, id, kode: Array.from(isi.slice(i)) }; }
      case 10: { const id = baca16(); const topik = []; while (i < isi.length) topik.push(bacaStr()); return { jenis, id, topik }; }
      default: if (isi.length) throw new Error('paket ' + jenis + ' harus kosong'); return { jenis };
    }
  }
  // pengurai aliran: dorong(potongan) → [paket…]. Melempar galat bila aliran rusak (sambungan harus ditutup)
  function Pengurai(maks) {
    this.maks = maks || MAKS_PAKET; this.buf = new Uint8Array(0);
  }
  Pengurai.prototype.dorong = function (potongan) {
    const p = bytes(potongan); this.buf = this.buf.length ? satukan([this.buf, p]) : p.slice();
    const out = [];
    for (;;) {
      const b = this.buf; if (b.length < 2) break;
      let n = 0, kali = 1, j = 1, lengkap = false;
      for (; j <= 4; j++) {
        if (j >= b.length) break;
        const c = b[j]; n += (c & 127) * kali; kali *= 128;
        if (!(c & 128)) { lengkap = true; break; }
        if (j === 4) throw new Error('remaining length lebih dari 4 byte');
      }
      if (!lengkap) break;
      if (n > this.maks) throw new Error('paket melebihi batas ' + this.maks + ' byte');
      const total = 1 + j + n; if (b.length < total) break;
      out.push(uraiPaket(b[0], b.subarray(1 + j, total)));
      this.buf = b.slice(total);
    }
    return out;
  };
  // pencocokan filter MQTT (+ dan #) — dipakai relai tiruan dan pemeriksaan topik masuk
  function cocokFilter(filter, topik) {
    const f = filter.split('/'), t = topik.split('/');
    for (let i = 0; i < f.length; i++) {
      if (f[i] === '#') return true;
      if (i >= t.length) return false;
      if (f[i] !== '+' && f[i] !== t[i]) return false;
    }
    return f.length === t.length;
  }

  // ======================================================================================
  // KONFIGURASI
  // ======================================================================================
  const RELAI_BAWAAN = ['wss://mqtt.eclipseprojects.io:443/mqtt', 'wss://broker.emqx.io:8084/mqtt', 'wss://broker.hivemq.com:8884/mqtt', 'wss://test.mosquitto.org:8081/'];
  const KONFIG_BAWAAN = {
    keepalive: 30,            // detik, dikirim di CONNECT
    pingMs: 20000,            // PINGREQ tiap 20 dtk; tanpa PINGRESP sampai ping berikutnya → sambungan dianggap mati
    batasSambungMs: 6000,     // batas satu percobaan sambung (sampai SUBACK)
    jedaSambung: [1000, 2000, 5000, 10000, 20000],
    jitter: 0.3,              // + 0–30 % acak
    jedaRelaiBerikut: 300,    // anggota: jeda sebelum mencoba relai berikutnya dalam satu putaran
    graceMs: 1500,            // tuan: tunggu retained setelah tersambung sebelum menerbitkan ulang
    tungguCalonMs: 5000,      // v8.2 B0: pulihkan() sebagai tuan = calon tuan; terbit ulang hanya bila max(graceMs, ini) lewat tanpa state lebih baru
    detakMs: 30000,           // detak kehadiran
    hadirBasiMs: 95000,       // tanpa kabar selama ini → tidak online
    debounceMs: 250,          // jawaban hidup
    tungguStateMs: 4000,      // gabung(): setelah tersambung, tunggu state retained selama ini
    tungguGabungMs: 30000,    // gabung(): batas keseluruhan
    mintaSesiMs: 5000,
    jedaBersihMs: 2000,       // anggota: kosongkan dokumen jawaban setelah aktivitas berakhir
    iterasi: 150000,          // PBKDF2
    banjirPerDetik: 20,
  };
  const ALFABET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';  // tanpa 0 O 1 I L
  const PANJANG_KODE = 14;
  const GARAM = 'ukp-ruang-v1';
  const OPSI = ['A', 'B', 'C', 'D'];
  const YAKIN = ['yakin', 'ragu', 'menebak'];

  // ======================================================================================
  // (c) KRIPTO
  // ======================================================================================
  const hex = b => Array.from(bytes(b), x => x.toString(16).padStart(2, '0')).join('');
  function acakBytes(cr, n) { const b = new Uint8Array(n); cr.getRandomValues(b); return b; }
  function kodeBaru(cr) {
    let out = '';
    while (out.length < PANJANG_KODE) {
      const b = acakBytes(cr, 32);
      for (const x of b) { if (x < 248 && out.length < PANJANG_KODE) out += ALFABET[x % 31]; }  // 248 = 8 × 31: tanpa bias
    }
    return out;
  }
  // teks bebas (kode berformat, kode polos, atau tautan …#room/KODE) → 14 karakter kanonik, atau null
  function normalKode(teks) {
    if (typeof teks !== 'string' || teks.length > 400) return null;
    let t = teks.trim(); const m = t.match(/#room\/([^?&#\s]+)/i); if (m) { try { t = decodeURIComponent(m[1]); } catch (e) { t = m[1]; } }
    t = t.toUpperCase().replace(/[\s\-_.]/g, '');
    if (t.length !== PANJANG_KODE) return null;
    for (const c of t) if (ALFABET.indexOf(c) < 0) return null;
    return t;
  }
  const formatKode = k => { const n = normalKode(k); return n ? n.slice(0, 4) + '-' + n.slice(4, 9) + '-' + n.slice(9) : ''; };
  function Kripto(cr, iterasi) {
    const subtle = cr && cr.subtle;
    return {
      async sha256Hex(teks) { return hex(new Uint8Array(await subtle.digest('SHA-256', utf8(teks)))); },
      async awalan(kode) { return 'ukp1/' + (await this.sha256Hex('topik:' + kode)).slice(0, 24); },
      async kunci(kode) {
        const bahan = await subtle.importKey('raw', utf8(kode), 'PBKDF2', false, ['deriveKey']);
        return subtle.deriveKey({ name: 'PBKDF2', salt: utf8(GARAM), iterations: iterasi || KONFIG_BAWAAN.iterasi, hash: 'SHA-256' }, bahan, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
      },
      // topik dipakai sebagai data tambahan (AAD): muatan tidak bisa dipindah ke topik lain
      async enkripsi(kunci, topik, teks) {
        const iv = acakBytes(cr, 12);
        const ct = new Uint8Array(await subtle.encrypt({ name: 'AES-GCM', iv, additionalData: utf8(topik) }, kunci, utf8(teks)));
        return satukan([iv, ct]);
      },
      async dekripsi(kunci, topik, muatan) {
        try {
          const b = bytes(muatan); if (b.length < 12 + 16) return null;
          const pt = await subtle.decrypt({ name: 'AES-GCM', iv: b.slice(0, 12), additionalData: utf8(topik) }, kunci, b.slice(12));
          return dariUtf8(new Uint8Array(pt));
        } catch (e) { return null; }
      },
    };
  }

  // ======================================================================================
  // (d) PROTOKOL — validasi skema (murni). Setiap fungsi valid*() → salinan bersih atau null
  // ======================================================================================
  const KUNCI_BAHAYA = new Set(['__proto__', 'constructor', 'prototype']);
  const RE_SOAL = /^[A-Z][A-Z0-9]{0,3}-[A-Za-z0-9]{1,12}$/;
  const RE_ID = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,59}$/;
  const KONTROL = /[\u0000-\u001f\u007f-\u009f]/;
  const angka = x => typeof x === 'number' && isFinite(x);
  const bulat = (x, a, b) => Number.isInteger(x) && x >= a && x <= b;
  const teks = (x, maks) => typeof x === 'string' && x.length <= maks;
  const teksAtauNull = (x, maks) => x === null || x === undefined || teks(x, maks);
  function validNama(n) { return typeof n === 'string' && n.length >= 1 && n.length <= 24 && n === n.trim() && !KONTROL.test(n); }
  const kunciNama = n => String(n).toLowerCase();
  function rapikanNama(n) { if (typeof n !== 'string') return ''; const t = n.replace(/[\u0000-\u001f\u007f-\u009f]/g, ' ').replace(/\s+/g, ' ').trim(); return t.length <= 24 ? t : ''; }
  function parseAman(teksJson) {
    let bahaya = false;
    const o = JSON.parse(teksJson, function (k, v) { if (KUNCI_BAHAYA.has(k)) bahaya = true; return v; });
    return bahaya ? null : o;
  }
  function validAmplop(o) { return isObj(o) && o.v === 1 && angka(o.t) && o.t > 0 && angka(o.urut) && o.urut >= 0 && typeof o.d === 'string' && /^[0-9a-f]{4,32}$/.test(o.d) && validNama(o.nama); }
  function validPer(per) {
    if (!isObj(per)) return null; const ks = Object.keys(per); if (ks.length > 12) return null;
    const out = {};
    for (const n of ks) {
      const x = per[n]; if (!validNama(n) || !isObj(x)) return null;
      const o = x.o == null ? '-' : x.o; if (o !== '-' && OPSI.indexOf(o) < 0) return null;
      const k = x.k == null ? null : x.k; if (k !== null && YAKIN.indexOf(k) < 0) return null;
      const b = x.b === 1 || x.b === true ? 1 : 0;
      out[n] = { o, k, b };
    }
    return out;
  }
  // penjelas: null/undefined → null; nama sah yang ada di per dengan b = 1 → ejaan kunci per; selain itu → undefined (tidak sah)
  function penjelasDi(per, n) {
    if (n === null || n === undefined) return null;
    if (!validNama(n)) return undefined;
    const kp = Object.keys(per).find(x => kunciNama(x) === kunciNama(n));
    return kp != null && per[kp].b === 1 ? kp : undefined;
  }
  // tim = { benar, dijawab } bilangan bulat 0–1000, benar ≤ dijawab; null/undefined → null; selain itu → undefined
  function validTimAkt(t) {
    if (t === null || t === undefined) return null;
    if (!isObj(t) || !bulat(t.benar, 0, 1000) || !bulat(t.dijawab, 0, 1000) || t.benar > t.dijawab) return undefined;
    return { benar: t.benar, dijawab: t.dijawab };
  }
  function validAktivitas(a) {
    if (a === null || a === undefined) return null;
    if (!isObj(a)) return undefined;
    if (a.jenis === 'latihan') {
      if (!teks(a.id, 60) || !RE_ID.test(a.id)) return undefined;
      if (!Array.isArray(a.soalIds) || !a.soalIds.length || a.soalIds.length > 120 || !a.soalIds.every(x => typeof x === 'string' && RE_SOAL.test(x))) return undefined;
      if (!bulat(a.idx, 0, a.soalIds.length - 1)) return undefined;
      if (a.fase !== 'jawab' && a.fase !== 'kunci') return undefined;
      if (!angka(a.mulaiSoal) || !bulat(a.detikPerSoal, 0, 3600)) return undefined;
      if (a.akhirSesi != null && !angka(a.akhirSesi)) return undefined;
      let hasil = null;
      if (a.hasilSoal != null) {
        if (!isObj(a.hasilSoal) || typeof a.hasilSoal.soalId !== 'string' || a.soalIds.indexOf(a.hasilSoal.soalId) < 0) return undefined;
        const per = validPer(a.hasilSoal.per); if (!per) return undefined;
        // v8.2 B0: penjelas (opsional) = nama yang ada di per dengan b = 1 (ejaan mengikuti kunci per)
        const pj = penjelasDi(per, a.hasilSoal.penjelas); if (pj === undefined) return undefined;
        hasil = { soalId: a.hasilSoal.soalId, per, penjelas: pj };
      }
      // v8.2 B0: skor tim kumulatif (opsional), diisi pemimpin saat bukaKunci
      const tim = validTimAkt(a.tim); if (tim === undefined) return undefined;
      return { jenis: 'latihan', id: a.id, soalIds: a.soalIds.slice(), idx: a.idx, fase: a.fase, mulaiSoal: a.mulaiSoal, detikPerSoal: a.detikPerSoal, akhirSesi: a.akhirSesi == null ? null : a.akhirSesi, hasilSoal: hasil, tim };
    }
    if (a.jenis === 'ujian') {
      if (!teks(a.id, 60) || !RE_ID.test(a.id)) return undefined;
      if (typeof a.kode !== 'string' || !a.kode || a.kode.length > 6000 || KONTROL.test(a.kode)) return undefined;
      if (!teksAtauNull(a.judul, 80) || !angka(a.mulai) || !angka(a.akhir) || a.akhir < a.mulai) return undefined;
      if (a.status !== 'jalan' && a.status !== 'selesai') return undefined;
      return { jenis: 'ujian', id: a.id, kode: a.kode, judul: a.judul == null ? null : a.judul, mulai: a.mulai, akhir: a.akhir, status: a.status };
    }
    return undefined;
  }
  function validState(o) {
    if (!validAmplop(o) || !validNama(o.tuan) || kunciNama(o.tuan) !== kunciNama(o.nama)) return null;
    const r = o.room; if (!isObj(r) || !teks(r.nama, 60) || !Array.isArray(r.peserta) || r.peserta.length > 12 || !r.peserta.every(validNama)) return null;
    if (r.tingkat != null && ['A', 'B', 'C'].indexOf(r.tingkat) < 0) return null;
    if (!teksAtauNull(o.versiApp, 20)) return null;
    const akt = validAktivitas(o.aktivitas); if (akt === undefined) return null;
    // v8.2 B0: lobi { id, t } | null (opsional); ditutup: true hanya pada state terakhir dari tutup()
    let lobi = null;
    if (o.lobi != null) { if (!isObj(o.lobi) || !teks(o.lobi.id, 60) || !RE_ID.test(o.lobi.id) || !angka(o.lobi.t)) return null; lobi = { id: o.lobi.id, t: o.lobi.t }; }
    if (o.ditutup != null && typeof o.ditutup !== 'boolean') return null;
    const out = { v: 1, t: o.t, urut: o.urut, d: o.d, nama: o.nama, tuan: o.tuan, room: { nama: r.nama, peserta: r.peserta.slice(), tingkat: r.tingkat == null ? null : r.tingkat }, versiApp: o.versiApp == null ? null : o.versiApp, aktivitas: akt, lobi };
    if (o.ditutup === true) out.ditutup = true;
    return out;
  }
  function validPeta(m, nilai, maks) {
    if (!isObj(m)) return null; const ks = Object.keys(m); if (ks.length > maks) return null;
    const out = {}; for (const k of ks) { if (!RE_SOAL.test(k) || nilai.indexOf(m[k]) < 0) return null; out[k] = m[k]; }
    return out;
  }
  function validJawaban(o) {
    if (!validAmplop(o)) return null;
    if (o.aktivitas !== null && !(teks(o.aktivitas, 60) && RE_ID.test(o.aktivitas))) return null;
    const j = validPeta(o.j, OPSI.concat('-'), 400), k = validPeta(o.k || {}, YAKIN, 400); if (!j || !k) return null;
    const paham = validPeta(o.paham || {}, [1], 400); if (!paham) return null;   // v8.2 B0: { soalId: 1 } (opsional)
    if (typeof o.selesai !== 'boolean') return null;
    if (o.detik != null && !(angka(o.detik) && o.detik >= 0 && o.detik <= 86400)) return null;
    return { v: 1, t: o.t, urut: o.urut, d: o.d, nama: o.nama, aktivitas: o.aktivitas, j, k, paham, selesai: o.selesai, detik: o.detik == null ? null : o.detik };
  }
  function validHadir(o) {
    if (!validAmplop(o) || typeof o.online !== 'boolean') return null;
    if (o.peran != null && o.peran !== 'tuan' && o.peran !== 'anggota') return null;
    if (o.siap != null && !(teks(o.siap, 60) && RE_ID.test(o.siap))) return null;   // v8.2 B0: siap = lobi.id | null (opsional)
    return { v: 1, t: o.t, urut: o.urut, d: o.d, nama: o.nama, online: o.online, peran: o.peran || 'anggota', siap: o.siap == null ? null : o.siap };
  }
  function validEntriIndeks(x) {
    if (!isObj(x) || !teks(x.id, 60) || !RE_ID.test(x.id) || !angka(x.t)) return null;
    if (x.mode !== 'latihan' && x.mode !== 'ujian') return null;
    if (!teksAtauNull(x.judul, 80) || !bulat(x.nSoal, 0, 400) || !Array.isArray(x.peserta) || x.peserta.length > 12 || !x.peserta.every(validNama)) return null;
    // v8.2 B0: akurasiTim 0–100 | null, nHadir 0–12 | null (opsional; entri lama tanpa field ini tetap sah)
    if (x.akurasiTim != null && !bulat(x.akurasiTim, 0, 100)) return null;
    if (x.nHadir != null && !bulat(x.nHadir, 0, 12)) return null;
    return { id: x.id, t: x.t, mode: x.mode, judul: x.judul == null ? null : x.judul, nSoal: x.nSoal, peserta: x.peserta.slice(), akurasiTim: x.akurasiTim == null ? null : x.akurasiTim, nHadir: x.nHadir == null ? null : x.nHadir };
  }
  function validIndeks(o) {
    if (!validAmplop(o) || !Array.isArray(o.daftar) || o.daftar.length > 30) return null;
    const daftar = o.daftar.map(validEntriIndeks); if (daftar.some(x => !x)) return null;
    return { v: 1, t: o.t, urut: o.urut, d: o.d, nama: o.nama, daftar };
  }
  // rekaman s.sesiBersama (lihat js/learn.js): bidang inti diperiksa ketat; bidang lain dibawa apa adanya (ukuran dibatasi oleh batas paket)
  function validRekaman(x) {
    if (!isObj(x) || !teks(x.id, 60) || !RE_ID.test(x.id) || !angka(x.mulai)) return null;
    if (x.selesai != null && !angka(x.selesai)) return null;
    if (!Array.isArray(x.peserta) || x.peserta.length > 12 || !x.peserta.every(validNama)) return null;
    if (!Array.isArray(x.soal) || x.soal.length > 400) return null;
    for (const q of x.soal) {
      if (!isObj(q) || typeof q.id !== 'string' || !RE_SOAL.test(q.id)) return null;
      if (q.kunci != null && q.kunci !== '' && OPSI.indexOf(q.kunci) < 0) return null;
      if (q.detik != null && !(angka(q.detik) && q.detik >= 0 && q.detik <= 86400)) return null;
      if (!validPer(q.jawaban || {})) return null;
    }
    if (x.tingkat != null && ['A', 'B', 'C'].indexOf(x.tingkat) < 0) return null;
    if (x.mode != null && x.mode !== 'latihan' && x.mode !== 'ujian') return null;
    if (!teksAtauNull(x.judul, 80)) return null;
    const out = JSON.parse(JSON.stringify(x));
    // v8.2 B0: tim dan diisiPemimpin dibawa apa adanya bila berupa objek; bentuk lain dibuang (rekaman tetap sah)
    if (out.tim != null && !isObj(out.tim)) delete out.tim;
    if (out.diisiPemimpin != null && !isObj(out.diisiPemimpin)) delete out.diisiPemimpin;
    return out;
  }
  function validSesi(o) {
    if (!validAmplop(o)) return null; const sesi = validRekaman(o.sesi); if (!sesi) return null;
    return { v: 1, t: o.t, urut: o.urut, d: o.d, nama: o.nama, sesi };
  }
  // akurasi tim rekaman: tim.akurasi → tim.benar/tim.dijawab → (latihan) benar/dijawab dari soal[].jawaban; null bila tidak bisa dihitung
  function akurasiRekaman(sesi) {
    const tim = isObj(sesi.tim) ? sesi.tim : null;
    if (tim && bulat(tim.akurasi, 0, 100)) return tim.akurasi;
    if (tim && bulat(tim.benar, 0, 1e6) && bulat(tim.dijawab, 1, 1e6) && tim.benar <= tim.dijawab) return Math.round(tim.benar / tim.dijawab * 100);
    if (sesi.mode === 'ujian' || !Array.isArray(sesi.soal)) return null;
    let b = 0, d = 0;
    sesi.soal.forEach(q => { const jw = q && isObj(q.jawaban) ? q.jawaban : {}; Object.keys(jw).forEach(n => { const x = jw[n]; if (isObj(x) && x.o && x.o !== '-') { d++; if (x.b === 1 || x.b === true) b++; } }); });
    return d ? Math.round(b / d * 100) : null;
  }
  function entriIndeks(sesi) {
    const tim = isObj(sesi.tim) ? sesi.tim : null;
    return { id: sesi.id, t: Number(sesi.selesai || sesi.mulai) || 0, mode: sesi.mode === 'ujian' ? 'ujian' : 'latihan', judul: typeof sesi.judul === 'string' ? sesi.judul.slice(0, 80) : null, nSoal: Array.isArray(sesi.soal) ? sesi.soal.length : 0, peserta: (sesi.peserta || []).filter(validNama).slice(0, 12),
      akurasiTim: akurasiRekaman(sesi), nHadir: tim && bulat(tim.hadir, 0, 12) ? tim.hadir : null };
  }
  // deduplikasi berdasarkan (pengirim, nomor urut) — LRU sederhana
  function Dedup(maks) { this.maks = maks || 4000; this.m = new Map(); }
  Dedup.prototype.ada = function (k) { return this.m.has(k); };
  Dedup.prototype.tambah = function (k) { if (this.m.has(k)) return false; this.m.set(k, 1); if (this.m.size > this.maks) this.m.delete(this.m.keys().next().value); return true; };
  // anti-banjir: > n pesan per detik per topik → sisanya dibuang
  function AntiBanjir(n, now) { this.n = n; this.now = now; this.m = new Map(); }
  AntiBanjir.prototype.lebih = function (topik) {
    const d = Math.floor(this.now() / 1000); const x = this.m.get(topik);
    if (!x || x.d !== d) { this.m.set(topik, { d, c: 1 }); if (this.m.size > 500) this.m.clear(); return false; }
    x.c++; return x.c > this.n;
  };
  // urutan dokumen dari satu nama: (t, urut) yang lebih besar menang
  const lebihBaru = (a, b) => !b || a.t > b.t || (a.t === b.t && a.urut > b.urut) || (a.t === b.t && a.urut === b.urut && a.d !== b.d);

  const Protokol = { validAmplop, validState, validAktivitas, validJawaban, validHadir, validIndeks, validEntriIndeks, validSesi, validRekaman, validPer, validNama, entriIndeks, parseAman, Dedup, AntiBanjir, lebihBaru, RE_SOAL, RE_ID };

  // ======================================================================================
  // (b) KONEKSI — satu sambungan ke satu relai (atau berpindah antar-relai untuk anggota)
  // ======================================================================================
  // o = { url: string | () => string, WS, idKlien, konfig, filter: () => [topik…], buatWill: async () => will|null,
  //       saatPublish(paket, kon), saatStatus(kon), saatGagal(kon, pernahTersambung) }
  function Koneksi(o) {
    const K = o.konfig;
    // v8.2 B0: galat/galatPada/tersambungPada untuk diagnosis (status().relai)
    const kon = { status: 'mati', url: null, terlihat: new Map(), gagalBeruntun: 0, pernahGagal: false, galat: null, galatPada: null, tersambungPada: null };
    let ws = null, berhenti = true, timerSambung = null, timerUlang = null, timerPing = null, menungguPing = false;
    let subId = 0, subMenunggu = 0; const antre = new Map(); const tambahan = new Set();
    const urlKini = () => (typeof o.url === 'function' ? o.url() : o.url);
    function setStatus(s) { if (kon.status === s) return; kon.status = s; try { o.saatStatus && o.saatStatus(kon); } catch (e) {} }
    function kirimMentah(b) { if (ws && ws.readyState === 1) { try { ws.send(b); return true; } catch (e) { return false; } } return false; }
    function bersihTimer() { clearTimeout(timerSambung); timerSambung = null; clearInterval(timerPing); timerPing = null; }
    function jadwalUlang() {
      if (berhenti) return;
      const urutan = K.jedaSambung; const i = Math.min(kon.gagalBeruntun - 1, urutan.length - 1);
      let jeda = urutan[Math.max(0, i)];
      if (o.jedaKhusus) { const j = o.jedaKhusus(kon); if (j != null) jeda = j; }
      jeda = Math.round(jeda * (1 + Math.random() * K.jitter));
      clearTimeout(timerUlang); timerUlang = setTimeout(() => { timerUlang = null; sambung(); }, jeda);
    }
    let sedang = false;
    async function sambung() {
      if (berhenti || ws || sedang) return;
      sedang = true;
      kon.url = urlKini(); kon.terlihat = new Map(); setStatus('menyambung');
      let will = null; try { will = o.buatWill ? await o.buatWill() : null; } catch (e) { will = null; }
      sedang = false;
      if (berhenti || ws) return;
      let sok; try { sok = new o.WS(kon.url, ['mqtt']); } catch (e) { kon.galat = 'tidak bisa dibuka: ' + String((e && e.message) || e).slice(0, 120); kon.galatPada = Date.now(); kon.gagalBeruntun++; kon.pernahGagal = true; kon.terakhirPernah = false; setStatus('putus'); try { o.saatGagal && o.saatGagal(kon, false); } catch (e2) {} jadwalUlang(); return; }
      ws = sok; sok.binaryType = 'arraybuffer';
      const pengurai = new Pengurai(MAKS_PAKET); let siap = false, connack = false, alasanTutup = null;
      timerSambung = setTimeout(() => { if (!siap && ws === sok) { alasanTutup = 'waktu habis (' + Math.round(K.batasSambungMs / 1000) + ' dtk)'; try { sok.close(); } catch (e) {} selesai(sok); } }, K.batasSambungMs);
      let rantai = Promise.resolve();
      sok.onopen = () => { if (ws === sok) kirimMentah(Kodek.connect({ clientId: o.idKlien, keepalive: K.keepalive, clean: true, will })); };
      sok.onmessage = ev => {
        if (ws !== sok) return; const d = ev.data;
        if (typeof d === 'string') return;
        if (d && typeof d.arrayBuffer === 'function' && !ArrayBuffer.isView(d)) { rantai = rantai.then(() => d.arrayBuffer()).then(ab => terima(ab)).catch(() => {}); return; }
        terima(d);
      };
      function terima(d) {
        if (ws !== sok) return; let pkts;
        try { pkts = pengurai.dorong(d); } catch (e) { alasanTutup = 'data rusak: ' + String((e && e.message) || e).slice(0, 80); try { sok.close(); } catch (e2) {} selesai(sok); return; }
        for (const p of pkts) tangani(p);
      }
      function tangani(p) {
        if (ws !== sok) return;
        if (p.jenis === 'connack') {
          if (p.kode !== 0) { alasanTutup = 'ditolak server (CONNACK ' + p.kode + ')'; try { sok.close(); } catch (e) {} selesai(sok); return; }
          connack = true; const f = o.filter().concat(Array.from(tambahan));
          if (f.length) { subMenunggu = ++subId > 65535 ? (subId = 1) : subId; kirimMentah(Kodek.subscribe({ id: subMenunggu, topik: f })); } else jadiSiap();
        } else if (p.jenis === 'suback') { if (connack && !siap && p.id === subMenunggu) jadiSiap(); }
        else if (p.jenis === 'pingresp') menungguPing = false;
        else if (p.jenis === 'publish' && siap) { try { o.saatPublish(p, kon); } catch (e) {} }
      }
      function jadiSiap() {
        siap = true; clearTimeout(timerSambung); timerSambung = null; kon.gagalBeruntun = 0; menungguPing = false;
        timerPing = setInterval(() => {
          if (ws !== sok) return;
          if (menungguPing) { alasanTutup = 'ping tidak dijawab'; try { sok.close(); } catch (e) {} selesai(sok); return; }
          menungguPing = kirimMentah(Kodek.pingreq());
        }, K.pingMs);
        kon.tersambungPada = Date.now();
        setStatus('tersambung');
        for (const [topik, x] of antre) kirimMentah(Kodek.publish({ topik, muatan: x.muatan, retain: x.retain }));
        antre.clear();
      }
      sok.onerror = () => {};
      sok.onclose = () => selesai(sok);
      function selesai(s) {
        if (ws !== s) return; ws = null; bersihTimer();
        s.onopen = s.onmessage = s.onclose = s.onerror = null;
        if (berhenti) { setStatus('mati'); return; }
        if (!siap) { kon.gagalBeruntun++; kon.pernahGagal = true; } else kon.gagalBeruntun = 1;
        kon.terakhirPernah = siap;
        kon.galat = alasanTutup || (siap ? 'terputus' : connack ? 'ditutup sebelum berlangganan' : 'ditutup sebelum tersambung (diblokir jaringan atau server mati)'); kon.galatPada = Date.now();
        setStatus('putus');
        try { o.saatGagal && o.saatGagal(kon, siap); } catch (e) {}
        jadwalUlang();
      }
    }
    kon.mulai = function () { if (!berhenti) return; berhenti = false; kon.gagalBeruntun = 0; sambung(); };
    kon.henti = function (kirimDisconnect) {
      berhenti = true; clearTimeout(timerUlang); timerUlang = null; antre.clear();
      const s = ws; if (s) { if (kirimDisconnect !== false) kirimMentah(Kodek.disconnect()); ws = null; bersihTimer(); s.onopen = s.onmessage = s.onclose = s.onerror = null; try { s.close(); } catch (e) {} }
      setStatus('mati');
    };
    // QoS 0; saat tidak tersambung disimpan "terakhir per topik"
    kon.terbit = function (topik, muatan, retain) {
      if (kon.status === 'tersambung' && kirimMentah(Kodek.publish({ topik, muatan, retain: !!retain }))) return true;
      if (!berhenti) { antre.delete(topik); antre.set(topik, { muatan, retain: !!retain }); }
      return false;
    };
    kon.langganan = function (topik) {
      tambahan.add(topik);
      if (kon.status === 'tersambung') { subId = subId >= 65535 ? 1 : subId + 1; kirimMentah(Kodek.subscribe({ id: subId, topik: [topik] })); }
    };
    kon.putuskan = function () { const s = ws; if (s) { try { s.close(); } catch (e) {} } };  // uji/pemulihan: tutup tanpa DISCONNECT (last will berlaku)
    kon.antrean = () => antre.size;
    return kon;
  }

  // ======================================================================================
  // (e)+(f) PENGELOLA RELAI + API PUBLIK
  // ======================================================================================
  function buatInstans(env) {
    env = env || {};
    const api = {};
    api.RELAI = RELAI_BAWAAN.slice();
    api.KONFIG = Object.assign({}, KONFIG_BAWAAN);
    api.SITUS = 'https://nickylourenzo27-sketch.github.io/Latihan-UKP/';   // dipakai info().tautan bila halaman bukan http(s)
    const WSk = () => env.WebSocket || root.WebSocket || null;
    const CR = () => env.crypto || root.crypto || null;
    const store = () => env.store || UKP.store || null;
    const belajar = () => env.belajar || UKP.belajar || null;
    const lokasi = () => env.lokasi || root.location || null;
    const now = () => (typeof env.now === 'function' ? env.now() : Date.now());
    const versiKini = () => { const v = env.versi !== undefined ? env.versi : UKP.versi; return typeof v === 'string' && v ? v.slice(0, 20) : null; };
    // kunci + awalan per kode (PBKDF2 mahal): dipakai bersama oleh intip() dan gabung()/buat()/pulihkan()
    const cacheKunci = new Map();
    function kunciUntuk(kode) {
      const ck = kode + ':' + api.KONFIG.iterasi;
      if (!cacheKunci.has(ck)) {
        const kr = Kripto(CR(), api.KONFIG.iterasi);
        const p = (async () => ({ awalan: await kr.awalan(kode), kunci: await kr.kunci(kode) }))();
        p.catch(() => cacheKunci.delete(ck));
        cacheKunci.set(ck, p); while (cacheKunci.size > 4) cacheKunci.delete(cacheKunci.keys().next().value);
      }
      return cacheKunci.get(ck);
    }
    const pendengar = {};
    function pancar(nama, data) { (pendengar[nama] || []).slice().forEach(fn => { try { fn(data); } catch (e) { if (root.console) console.error(e); } }); }
    api.on = function (nama, fn) { if (typeof fn !== 'function') return () => {}; (pendengar[nama] = pendengar[nama] || []).push(fn); return () => api.off(nama, fn); };
    api.off = function (nama, fn) { const a = pendengar[nama]; if (!a) return; const i = a.indexOf(fn); if (i >= 0) a.splice(i, 1); };

    function cekTersedia() {
      const cr = CR();
      if (!TE || !TD) return { tersedia: false, alasan: 'Browser ini terlalu lama untuk room tim (TextEncoder tidak ada).' };
      if (!cr || !cr.subtle || typeof cr.subtle.importKey !== 'function' || typeof cr.getRandomValues !== 'function') return { tersedia: false, alasan: 'Room tim memerlukan halaman aman (alamat https://). Halaman ini dibuka lewat http biasa atau browsernya terlalu lama, jadi room tidak tersedia di sini.' };
      if (typeof WSk() !== 'function') return { tersedia: false, alasan: 'Browser ini tidak mendukung WebSocket, jadi room tim tidak tersedia.' };
      const loc = lokasi(); const host = loc && typeof loc.hostname === 'string' ? loc.hostname : '';
      if (/(^|\.)claude\.ai$|claudeusercontent\.com$/i.test(host)) return { tersedia: false, alasan: 'Room tim tidak tersedia di dalam claude.ai: halaman Artifact tidak boleh membuka koneksi keluar. Buka website tim (GitHub Pages) untuk memakai room.' };
      return { tersedia: true, alasan: null };
    }

    // ---------- penyimpanan lokal s.ruang ----------
    function bacaSimpan() { const st = store(); if (!st) return null; try { const s = st.get(); return isObj(s.ruang) ? s.ruang : null; } catch (e) { return null; } }
    function tulisSimpan(isi) { const st = store(); if (!st) return; try { const s = st.get(); s.ruang = isi; st.save(); } catch (e) {} }
    function perbaruiSimpan(patch) { const st = store(); if (!st) return; try { const s = st.get(); if (!isObj(s.ruang)) return; Object.assign(s.ruang, patch); st.save(); } catch (e) {} }

    let rt = null;   // keadaan berjalan
    function baruRt(o) {
      const cr = CR();
      return {
        kode: o.kode, nama: o.nama, peran: o.peran, namaRoom: o.namaRoom || '', dibuat: o.dibuat || now(),
        d: hex(acakBytes(cr, 6)), urut: 0, kripto: Kripto(cr, api.KONFIG.iterasi), kunci: null, awalan: null, siapP: null,
        koneksi: [], idxRelai: 0, putaran: 0, state: null, indeks: null, jawaban: new Map(), dokSaya: null, hadir: new Map(),
        sesiCache: new Map(), menungguSesi: new Map(), dedup: new Dedup(4000), banjir: new AntiBanjir(api.KONFIG.banjirPerDetik, now),
        jam: [], slug: new Map(), rantaiMasuk: Promise.resolve(), rantaiKeluar: Promise.resolve(), timerJawab: null, timerDetak: null, timerBersih: null,
        hidup: true, semuaGagal: false,
        // v8.2 B0
        siap: null,              // lobi.id yang terakhir dinyatakan siap (ikut di setiap dokumen hadir)
        perangkat: new Map(),    // kunciNama → Map(d → { online, t, terima, segar }) untuk tanda nama ganda
        calon: false, urutPulih: 0, timerCalon: null,   // pulihkan() sebagai tuan: calon tuan sampai tidak ada state lebih baru
        adopsi: null,            // id aktivitas yang dokumen jawaban lamanya sudah diadopsi
        penjelas: new Map(),     // aktivitasId → { soalId: nama } (dari hasilSoal.penjelas), 4 aktivitas terakhir
      };
    }
    const salin = x => (x == null ? x : JSON.parse(JSON.stringify(x)));
    function slugNama(nama) {
      const k = kunciNama(nama); if (!rt) return Promise.resolve('');
      if (!rt.slug.has(k)) rt.slug.set(k, rt.kripto.sha256Hex('nama:' + rt.kode + ':' + k).then(h => h.slice(0, 12)));
      return rt.slug.get(k);
    }
    function amplop(isi) { return Object.assign({ v: 1, t: now(), urut: ++rt.urut, d: rt.d, nama: rt.nama }, isi); }
    // terbitkan objek (sudah beramplop) ke semua koneksi atau satu koneksi; berurutan agar urutan per topik terjaga
    function terbit(sufiks, obj, retain, hanyaKon) {
      if (!rt) return; const r = rt; r.dedup.tambah(obj.d + ':' + obj.urut);
      r.rantaiKeluar = r.rantaiKeluar.then(async () => {
        await r.siapP; if (!r.hidup) return;
        const topik = r.awalan + '/' + sufiks;
        const b = await r.kripto.enkripsi(r.kunci, topik, JSON.stringify(obj));
        if (b.length > MAKS_PAKET - 1024) return;
        (hanyaKon ? [hanyaKon] : r.koneksi).forEach(k => k.terbit(topik, b, retain));
      }).catch(() => {});
      return r.rantaiKeluar;
    }
    function filterTopik() { const p = rt.awalan; return [p + '/s', p + '/i', p + '/a/+', p + '/h/+', p + '/r/+']; }
    async function buatWill() {
      if (!rt) return null; const r = rt; const slug = await slugNama(r.nama); const topik = r.awalan + '/h/' + slug;
      const obj = amplop({ online: false, peran: r.peran, siap: null });
      return { topik, muatan: await r.kripto.enkripsi(r.kunci, topik, JSON.stringify(obj)), retain: true, qos: 0 };
    }
    function idKlien() { return 'ukp' + hex(acakBytes(CR(), 6)); }

    // ---------- pengelola relai ----------
    function daftarRelai() { const a = Array.isArray(api.RELAI) ? api.RELAI.filter(u => typeof u === 'string' && /^wss?:\/\//i.test(u)) : []; return a.length ? a : RELAI_BAWAAN.slice(); }
    function koneksiBaru(url) {
      const r = rt;
      const kon = Koneksi({
        url, WS: WSk(), idKlien: idKlien(), konfig: api.KONFIG, filter: () => (r.awalan ? filterTopik() : []), buatWill,
        saatPublish: (p, k) => { r.rantaiMasuk = r.rantaiMasuk.then(() => terimaPublish(r, k, p)).catch(() => {}); },
        saatStatus: k => { if (r !== rt) return; if (k.status === 'tersambung') { if (typeof url === 'function') r.putaran = 0; saatTersambung(k); } hitungSemuaGagal(); pancarStatus(); },
        // anggota: percobaan gagal → relai berikutnya; sambungan yang putus setelah tersambung → coba relai yang sama dulu
        saatGagal: (k, pernah) => { if (r !== rt || typeof url !== 'function') return; if (!pernah) { r.idxRelai = (r.idxRelai + 1) % daftarRelai().length; if (r.idxRelai === 0) r.putaran++; } },
        jedaKhusus: typeof url === 'function' ? (k => {
          if (k.terakhirPernah) return null;                                   // jeda bertahap biasa (1 dtk)
          if (r.idxRelai !== 0) return api.KONFIG.jedaRelaiBerikut;            // masih dalam satu putaran
          const J = api.KONFIG.jedaSambung; return J[Math.min(Math.max(r.putaran - 1, 0), J.length - 1)];
        }) : null,
      });
      return kon;
    }
    function aturKoneksi() {
      if (!rt) return; const r = rt;
      if (r.peran === 'tuan') {
        const urls = daftarRelai(); const ada = new Map(r.koneksi.map(k => [k.urlTetap, k]));
        const baru = [];
        urls.forEach(u => { let k = ada.get(u); if (!k) { k = koneksiBaru(u); k.urlTetap = u; k.mulai(); } baru.push(k); ada.delete(u); });
        ada.forEach(k => k.henti());   // koneksi anggota (berpindah relai) dan relai yang tidak lagi terdaftar
        r.koneksi = baru;
      } else {
        const putar = r.koneksi.find(k => k.urlTetap === undefined);
        if (!putar) {
          // turun dari tuan: mulai dari relai yang sedang tersambung agar jeda sesingkat mungkin
          const aktif = r.koneksi.find(k => k.status === 'tersambung'); const i = aktif ? daftarRelai().indexOf(aktif.urlTetap) : -1;
          r.idxRelai = i >= 0 ? i : 0;
          r.koneksi.forEach(k => k.henti());
          const k = koneksiBaru(() => daftarRelai()[r.idxRelai % daftarRelai().length]); r.koneksi = [k]; k.mulai();
        } else { r.koneksi.forEach(k => { if (k !== putar) k.henti(); }); r.koneksi = [putar]; }
      }
    }
    function hitungSemuaGagal() { if (!rt) return; rt.semuaGagal = rt.koneksi.length > 0 && !rt.koneksi.some(k => k.status === 'tersambung') && (rt.peran === 'tuan' ? rt.koneksi.every(k => k.pernahGagal) : rt.putaran > 0); }
    function saatTersambung(k) {
      const r = rt;
      // kehadiran + dokumen sendiri ke relai ini
      kirimHadir(true, k);
      if (r.dokSaya && r.dokSaya.aktivitas && r.state && r.state.aktivitas && r.state.aktivitas.id === r.dokSaya.aktivitas) terbitDok(k);
      // calon tuan (pulihkan): masa tunggu dimulai saat relai pertama tersambung
      if (r.calon && !r.timerCalon) r.timerCalon = setTimeout(() => akhiriCalon(r), Math.max(api.KONFIG.graceMs, api.KONFIG.tungguCalonMs));
      if (r.peran === 'tuan') setTimeout(() => pulihkanDi(r, k), api.KONFIG.graceMs);
    }
    // calon tuan: tidak ada state lebih baru selama masa tunggu → benar-benar tuan; terbitkan ulang (versiApp diperbarui bila beda)
    function akhiriCalon(r) {
      if (r !== rt || !r.calon) return;
      r.calon = false; r.timerCalon = null;
      if (r.peran !== 'tuan') { pancarStatus(); return; }
      if (r.state && versiKini() && r.state.versiApp !== versiKini()) ubahState(() => {});
      r.koneksi.forEach(k => { if (k.status === 'tersambung') pulihkanDi(r, k); });
      pancarStatus();
    }
    // tuan: setelah masa tunggu, terbitkan ulang yang tidak terlihat sebagai retained di relai ini (retained bisa hilang)
    function pulihkanDi(r, k) {
      if (r !== rt || r.peran !== 'tuan' || r.calon || k.status !== 'tersambung') return;
      if (r.state && k.terlihat.get('s') !== r.state.d + ':' + r.state.urut) terbit('s', r.state, true, k);
      if (r.indeks && k.terlihat.get('i') !== r.indeks.d + ':' + r.indeks.urut) terbit('i', r.indeks, true, k);
      if (r.indeks) r.indeks.daftar.forEach(e => {
        if (k.terlihat.has('r/' + e.id)) return;
        let sesi = r.sesiCache.get(e.id) || null;
        if (!sesi) { const L = belajar(); try { sesi = L && L.sesiBersamaDari ? L.sesiBersamaDari(e.id) : null; } catch (er) { sesi = null; } }
        if (sesi && validRekaman(sesi)) terbit('r/' + e.id, amplop({ sesi: validRekaman(sesi) }), true, k);
      });
    }
    function mulaiDetak() {
      const r = rt; clearInterval(r.timerDetak);
      r.timerDetak = setInterval(() => { if (r === rt) { kirimHadir(true); pancarStatus(); } }, api.KONFIG.detakMs);
    }
    function kirimHadir(online, hanyaKon) {
      if (!rt) return; const r = rt; const obj = amplop({ online, peran: r.peran, siap: online ? r.siap || null : null });
      catatHadir(validHadir(obj), false);
      return slugNama(r.nama).then(slug => terbit('h/' + slug, obj, true, hanyaKon));
    }

    // ---------- pesan masuk ----------
    async function terimaPublish(r, kon, p) {
      if (r !== rt || !r.awalan) return;
      const awal = r.awalan + '/'; if (typeof p.topik !== 'string' || p.topik.indexOf(awal) !== 0) return;
      const sufiks = p.topik.slice(awal.length);
      if (!p.muatan || !p.muatan.length || p.muatan.length > MAKS_PAKET) return;
      if (r.banjir.lebih(sufiks)) return;
      const teksJ = await r.kripto.dekripsi(r.kunci, p.topik, p.muatan); if (teksJ == null || r !== rt) return;
      let o; try { o = parseAman(teksJ); } catch (e) { return; }
      if (!validAmplop(o)) return;
      const kunciDup = o.d + ':' + o.urut;
      let v = null, jenis = null;
      if (sufiks === 's') { v = validState(o); jenis = 's'; }
      else if (sufiks === 'i') { v = validIndeks(o); jenis = 'i'; }
      else if (/^a\/[0-9a-f]{12}$/.test(sufiks)) { v = validJawaban(o); jenis = 'a'; if (v && sufiks.slice(2) !== await slugNama(v.nama)) v = null; }
      else if (/^h\/[0-9a-f]{12}$/.test(sufiks)) { v = validHadir(o); jenis = 'h'; if (v && sufiks.slice(2) !== await slugNama(v.nama)) v = null; }
      else if (/^r\/[A-Za-z0-9][A-Za-z0-9._:-]{0,59}$/.test(sufiks)) { v = validSesi(o); jenis = 'r'; if (v && v.sesi.id !== sufiks.slice(2)) v = null; }
      if (!v || r !== rt) return;
      kon.terlihat.set(sufiks, kunciDup);
      const paksa = jenis === 'r' && r.menungguSesi.has(v.sesi.id);
      if (!r.dedup.tambah(kunciDup) && !paksa) return;
      // tuan meneruskan jawaban dan kehadiran ke relai lain: anggota di relai berbeda tetap bertemu
      if (r.peran === 'tuan' && (jenis === 'a' || jenis === 'h') && o.d !== r.d) r.koneksi.forEach(k => { if (k !== kon) k.terbit(p.topik, p.muatan, true); });
      const segar = !p.retain;
      if (jenis === 's') terimaState(v, segar);
      else if (jenis === 'i') terimaIndeks(v);
      else if (jenis === 'a') terimaJawaban(v);
      else if (jenis === 'h') { catatHadir(v, segar); }
      else if (jenis === 'r') terimaSesi(v);
    }
    function sampelJam(o, segar) {
      if (!segar || !rt || !rt.state || kunciNama(o.nama) !== kunciNama(rt.state.tuan) || o.d === rt.d) return;
      rt.jam.push(o.t - now()); if (rt.jam.length > 10) rt.jam.shift();
    }
    function terimaState(v, segar) {
      const r = rt; const lama = r.state;
      if (r.calon && r.peran === 'tuan' && kunciNama(v.tuan) !== kunciNama(r.nama)) {
        // calon tuan: state tuan lain yang lebih baru dari state saat pulihkan() menang (perubahan lokal selama calon dibuang)
        if (!(v.urut > r.urutPulih)) return;
      } else if (lama && !(v.urut > lama.urut)) return;
      r.state = v; sampelJam(v, segar);
      if (r.peran === 'tuan' && kunciNama(v.tuan) !== kunciNama(r.nama)) turunJadiAnggota();
      if (r.peran === 'anggota' && v.room && v.room.nama) r.namaRoom = v.room.nama;
      if (r.siap && !(v.lobi && v.lobi.id === r.siap)) r.siap = null;   // lobi berganti/ditutup → siap tidak berlaku
      catatPenjelas(v);
      if (v.ditutup) { tutupDariTuan(r, v); return; }
      perbaruiSimpan({ state: v, peran: r.peran, namaRoom: r.namaRoom, siap: r.siap });
      reaksiAktivitas(lama, v);
      adopsiDok();
      pancar('state', salin(v));
    }
    function catatPenjelas(v) {
      const r = rt; const a = v.aktivitas; if (!a || a.jenis !== 'latihan' || !a.hasilSoal || !a.hasilSoal.penjelas) return;
      let m = r.penjelas.get(a.id); if (!m) { m = {}; r.penjelas.set(a.id, m); while (r.penjelas.size > 4) r.penjelas.delete(r.penjelas.keys().next().value); }
      m[a.hasilSoal.soalId] = a.hasilSoal.penjelas;
    }
    // anggota menerima state terakhir dari tutup(): room selesai di perangkat ini (tanpa kehadiran offline agar retained tidak dibuat lagi)
    function tutupDariTuan(r, v) {
      pancar('state', salin(v)); pancar('tutup', { tuan: v.tuan });
      tulisSimpan(null);
      if (rt === r) hentiRt();
      pancarStatus();
    }
    function reaksiAktivitas(lama, baru) {
      const r = rt; const idLama = lama && lama.aktivitas ? lama.aktivitas.id : null, idBaru = baru.aktivitas ? baru.aktivitas.id : null;
      if (idLama === idBaru) return;
      clearTimeout(r.timerBersih); r.timerBersih = null;
      if (r.dokSaya && r.dokSaya.aktivitas && r.dokSaya.aktivitas !== idBaru) {
        // aktivitas berakhir/berganti: dokumen jawaban dikosongkan (tuan sudah menyimpan salinannya di memori)
        r.timerBersih = setTimeout(() => { if (r === rt && r.dokSaya && r.dokSaya.aktivitas && r.dokSaya.aktivitas !== (r.state && r.state.aktivitas ? r.state.aktivitas.id : null)) api.bersihkanJawaban(); }, api.KONFIG.jedaBersihMs);
      }
    }
    function turunJadiAnggota() {
      const r = rt; if (r.peran !== 'tuan') return;
      r.calon = false; clearTimeout(r.timerCalon); r.timerCalon = null;
      r.peran = 'anggota'; perbaruiSimpan({ peran: 'anggota' });
      aturKoneksi(); kirimHadir(true); pancar('peran', { peran: 'anggota', tuan: r.state ? r.state.tuan : null }); pancarStatus();
    }
    function terimaIndeks(v) {
      const r = rt; if (r.indeks && !lebihBaru(v, r.indeks)) return;
      r.indeks = v; perbaruiSimpan({ indeks: v }); pancar('indeks', salin(v.daftar));
    }
    function simpanJawaban(dok) {
      const r = rt; if (!dok.aktivitas) return false;
      let m = r.jawaban.get(dok.aktivitas); if (!m) { m = {}; r.jawaban.set(dok.aktivitas, m); while (r.jawaban.size > 4) r.jawaban.delete(r.jawaban.keys().next().value); }
      const k = kunciNama(dok.nama); if (m[k] && !lebihBaru(dok, m[k])) return false;
      m[k] = dok; return true;
    }
    function terimaJawaban(v) {
      // dokumen sendiri dari muatan sebelumnya (perangkat ini setelah muat ulang, atau tab lain): diadopsi sekali agar tidak tertimpa
      if (v.aktivitas && v.d !== rt.d && kunciNama(v.nama) === kunciNama(rt.nama)) adopsiDari(v);
      if (!v.aktivitas) { pancar('jawaban', { nama: v.nama, aktivitas: null, dok: salin(v) }); return; }
      if (simpanJawaban(v)) pancar('jawaban', { nama: v.nama, aktivitas: v.aktivitas, dok: salin(v) });
    }
    // adopsi dokumen jawaban sendiri (sekali per aktivitas): dokSaya kosong → ambil utuh; dokSaya sudah ada → isi yang belum ada lalu terbit ulang
    function adopsiDari(dok) {
      const r = rt; const akt = r.state && r.state.aktivitas;
      if (!akt || dok.aktivitas !== akt.id || r.adopsi === akt.id) return false;
      r.adopsi = akt.id;
      if (!r.dokSaya || r.dokSaya.aktivitas !== akt.id) {
        r.dokSaya = { aktivitas: akt.id, j: salin(dok.j || {}), k: salin(dok.k || {}), paham: salin(dok.paham || {}), selesai: !!dok.selesai, detik: dok.detik == null ? null : dok.detik };
        return true;
      }
      const d = r.dokSaya; let ubah = false;
      ['j', 'k', 'paham'].forEach(f => { if (!isObj(d[f])) d[f] = {}; const src = isObj(dok[f]) ? dok[f] : {}; Object.keys(src).forEach(id => { if (!punya(d[f], id)) { d[f][id] = src[id]; ubah = true; } }); });
      if (dok.selesai && !d.selesai) { d.selesai = true; ubah = true; }
      if (d.detik == null && dok.detik != null) { d.detik = dok.detik; ubah = true; }
      if (ubah) jadwalDok();
      return true;
    }
    function adopsiDok() {
      const r = rt; const akt = r && r.state && r.state.aktivitas; if (!akt || r.adopsi === akt.id) return;
      const m = r.jawaban.get(akt.id); const dok = m && m[kunciNama(r.nama)];
      if (dok && dok.d !== r.d) adopsiDari(dok);
    }
    function catatHadir(v, segar) {
      const r = rt; if (!v) return; const k = kunciNama(v.nama); const lama = r.hadir.get(k);
      // last will (online:false) dibuat saat CONNECT sehingga cap waktunya lebih lama dari detak terakhir: tetap diterima
      if (lama && v.d === lama.d && !lebihBaru(v, lama) && v.online) return;
      if (lama && v.d !== lama.d && v.t < lama.t - 5000 && !segar) return;   // retained basi dari perangkat lama
      r.hadir.set(k, Object.assign({}, v, { terima: now(), segar: !!segar }));
      let m = r.perangkat.get(k); if (!m) { m = new Map(); r.perangkat.set(k, m); }
      m.delete(v.d); m.set(v.d, { online: v.online, t: v.t, terima: now(), segar: !!segar }); while (m.size > 8) m.delete(m.keys().next().value);
      sampelJam(v, segar);
      pancar('hadir', { nama: v.nama, online: v.online, peran: v.peran, siap: siapBerlaku(v.siap), ganda: gandaNama(k) });
      pancarStatus();
    }
    const siapBerlaku = id => !!(id && rt && rt.state && rt.state.lobi && rt.state.lobi.id === id);
    function segarHadir(x, d) {
      if (d === rt.d) return rt.koneksi.some(k => k.status === 'tersambung');
      const basi = api.KONFIG.hadirBasiMs; const t = now();
      return x.segar ? t - x.terima < basi : Math.abs((t + api.selisihJam()) - x.t) < basi;
    }
    // ≥ 2 perangkat (id per-muat berbeda) online dan segar untuk satu nama
    function gandaNama(k) { const m = rt && rt.perangkat.get(k); if (!m) return false; let n = 0; m.forEach((x, d) => { if (x.online && segarHadir(x, d)) n++; }); return n >= 2; }
    function terimaSesi(v) {
      const r = rt; const sesi = v.sesi; r.sesiCache.set(sesi.id, sesi);
      while (r.sesiCache.size > 40) r.sesiCache.delete(r.sesiCache.keys().next().value);
      const L = belajar(); let hasil = null;
      if (L && typeof L.terimaSesiRoom === 'function') { try { hasil = L.terimaSesiRoom(salin(sesi)); } catch (e) { hasil = null; } }
      const w = r.menungguSesi.get(sesi.id); if (w) { r.menungguSesi.delete(sesi.id); w.forEach(fn => fn(salin(sesi))); }
      pancar('sesi', Object.assign(salin(sesi), { _simpan: hasil }));
    }

    // ---------- status ----------
    function onlineKini() {
      if (!rt) return [];
      const out = []; const basi = api.KONFIG.hadirBasiMs; const t = now(); const off = api.selisihJam();
      rt.hadir.forEach(h => {
        if (!h.online) return;
        if (kunciNama(h.nama) === kunciNama(rt.nama)) { out.push(h.nama); return; }
        const segar = h.segar ? t - h.terima < basi : Math.abs((t + off) - h.t) < basi;
        if (segar) out.push(h.nama);
      });
      if (!out.some(n => kunciNama(n) === kunciNama(rt.nama)) && rt.koneksi.some(k => k.status === 'tersambung')) out.unshift(rt.nama);
      return out;
    }
    api.status = function () {
      const c = cekTersedia();
      if (!rt) return { tersedia: c.tersedia, alasan: c.alasan, tersambung: false, relai: [], online: [], peran: null, calon: false, versiBeda: false };
      const tersambung = rt.koneksi.some(k => k.status === 'tersambung');
      let alasan = c.alasan;
      if (c.tersedia && !tersambung && rt.semuaGagal) alasan = 'Belum bisa terhubung ke room. Periksa internet; bila tetap gagal, jaringan atau halaman ini memblokir koneksi keluar (misalnya Wi-Fi kantor atau server tim ber-CSP). Aplikasi terus mencoba.';
      return { tersedia: c.tersedia, alasan, tersambung,
        relai: rt.koneksi.map(k => ({ url: k.url || k.urlTetap || null, status: k.status, galat: k.galat || null, galatPada: k.galatPada || null, gagal: k.gagalBeruntun || 0, sejak: k.status === 'tersambung' ? k.tersambungPada || null : null })),
        online: onlineKini(), peran: rt.peran, calon: !!rt.calon, versiBeda: versiBeda() };
    };
    // versi aplikasi di state (versi pemimpin) ≠ versi halaman ini; tuan selalu false (state mengikuti versinya sendiri)
    function versiBeda() {
      if (!rt || !rt.state || rt.peran === 'tuan') return false;
      const v = versiKini(); return !!(v && rt.state.versiApp && rt.state.versiApp !== v);
    }
    let timerStatus = null;
    function pancarStatus() { if (timerStatus) return; timerStatus = setTimeout(() => { timerStatus = null; pancar('status', api.status()); }, 0); }

    // ---------- siklus hidup ----------
    function mulaiRt(o) {
      rt = baruRt(o); const r = rt;
      r.siapP = kunciUntuk(r.kode).then(x => { r.awalan = x.awalan; r.kunci = x.kunci; });
      r.siapP.then(() => { if (r === rt) { aturKoneksi(); mulaiDetak(); kirimHadir(true); } }).catch(() => {});
      return r;
    }
    function hentiRt() {
      const r = rt; if (!r) return; r.hidup = false; rt = null;
      clearInterval(r.timerDetak); clearTimeout(r.timerJawab); clearTimeout(r.timerBersih); clearTimeout(r.timerCalon);
      r.koneksi.forEach(k => k.henti()); r.koneksi = [];
      r.menungguSesi.forEach(ws => ws.forEach(fn => fn(null))); r.menungguSesi.clear();
    }
    function wajibNama(nama) { const n = rapikanNama(nama); if (!validNama(n)) throw new Error('Nama harus 1–24 karakter.'); return n; }

    api.tersedia = () => cekTersedia();
    api.buat = function (o) {
      o = o || {}; const c = cekTersedia(); if (!c.tersedia) throw new Error(c.alasan);
      const nama = wajibNama(o.nama);
      const peserta = []; (Array.isArray(o.peserta) ? o.peserta : []).concat([nama]).forEach(x => { const n = rapikanNama(x); if (validNama(n) && !peserta.some(y => kunciNama(y) === kunciNama(n)) && peserta.length < 12) peserta.push(n); });
      const namaRoom = (typeof o.namaRoom === 'string' ? o.namaRoom.replace(/[\u0000-\u001f\u007f-\u009f]/g, ' ').trim() : '').slice(0, 60) || 'Room tim';
      const tingkat = ['A', 'B', 'C'].indexOf(o.tingkat) >= 0 ? o.tingkat : null;
      hentiRt();
      const kode = kodeBaru(CR());
      const r = mulaiRt({ kode, nama, peran: 'tuan', namaRoom });
      const t = now();
      r.state = { v: 1, t, urut: t, d: r.d, nama, tuan: nama, room: { nama: namaRoom, peserta, tingkat }, versiApp: versiKini(), aktivitas: null, lobi: null };
      r.indeks = { v: 1, t, urut: ++r.urut, d: r.d, nama, daftar: [] };
      tulisSimpan({ kode, nama, peran: 'tuan', namaRoom, dibuat: r.dibuat, state: r.state, indeks: r.indeks });
      terbit('s', r.state, true); terbit('i', r.indeks, true);
      pancar('state', salin(r.state)); pancarStatus();
      return kode;
    };
    api.gabung = function (kode, nama) {
      const c = cekTersedia(); if (!c.tersedia) return Promise.reject(new Error(c.alasan));
      const k = normalKode(kode); if (!k) return Promise.reject(new Error('Kode room tidak valid. Kode berisi 14 huruf/angka, misalnya ABCD-EFGHJ-KMNPQ.'));
      let n; try { n = wajibNama(nama); } catch (e) { return Promise.reject(e); }
      const lama = bacaSimpan();
      hentiRt();
      const r = mulaiRt({ kode: k, nama: n, peran: 'anggota', namaRoom: '' });
      if (lama && lama.kode === k && isObj(lama.state)) { const s = validState(lama.state); if (s) r.state = s; }
      tulisSimpan({ kode: k, nama: n, peran: 'anggota', namaRoom: r.state ? r.state.room.nama : '', dibuat: lama && lama.kode === k ? lama.dibuat || now() : now() });
      pancarStatus();
      return new Promise(res => {
        let selesai = false, tState = null; const awal = r.state ? r.state.urut : -1;
        const akhir = hasil => { if (selesai) return; selesai = true; lepas1(); lepas2(); clearTimeout(tBatas); clearTimeout(tState); res(hasil); };
        const lepas1 = api.on('state', s => { if (r === rt && s.urut > awal) akhir(s); });
        const lepas2 = api.on('status', st => { if (r !== rt) { akhir(null); return; } if (st.tersambung && !tState) tState = setTimeout(() => akhir(r === rt && r.state ? salin(r.state) : null), api.KONFIG.tungguStateMs); });
        const tBatas = setTimeout(() => akhir(r === rt && r.state ? salin(r.state) : null), api.KONFIG.tungguGabungMs);
      });
    };
    // lanjutkan room yang tersimpan di perangkat ini (panggil sekali saat aplikasi dimuat) → true bila ada yang dilanjutkan
    api.pulihkan = function () {
      if (rt) return true; const s = bacaSimpan(); if (!s) return false;
      const kode = normalKode(s.kode); if (!kode || !validNama(s.nama) || !cekTersedia().tersedia) return false;
      const peran = s.peran === 'tuan' ? 'tuan' : 'anggota';
      const r = mulaiRt({ kode, nama: s.nama, peran, namaRoom: s.namaRoom, dibuat: s.dibuat });
      if (isObj(s.state)) r.state = validState(s.state);
      if (isObj(s.indeks)) r.indeks = validIndeks(s.indeks);
      if (peran === 'tuan' && r.state) {
        r.urut = Math.max(r.urut, r.indeks ? r.indeks.urut : 0);
        // U7: state tersimpan bisa basi (ada yang mengambil alih saat perangkat ini tertutup) → calon tuan dulu
        r.calon = true; r.urutPulih = r.state.urut;
      }
      if (typeof s.siap === 'string' && r.state && r.state.lobi && r.state.lobi.id === s.siap) r.siap = s.siap;
      pancarStatus();
      return true;
    };
    api.keluar = function () {
      const r = rt; if (!r) { tulisSimpan(null); return Promise.resolve(); }
      tulisSimpan(null);
      const tunggu = kirimHadir(false) || Promise.resolve();
      return Promise.race([tunggu.then(() => r.rantaiKeluar), new Promise(res => setTimeout(res, 1500))]).then(() => {
        if (rt === r) hentiRt(); pancarStatus(); pancar('status', api.status());
      });
    };
    api.info = function () {
      if (!rt) return null; const loc = lokasi();
      const web = loc && /^https?:$/.test(loc.protocol || (loc.origin || '').split('//')[0]) && loc.origin && loc.origin !== 'null';
      // berkas offline (file://) atau host lain tanpa alamat web: tautan memakai situs tim (UKP.ruang.SITUS) agar bisa dibuka di HP
      const dasar = web ? loc.origin + (loc.pathname || '/') : (api.SITUS || (loc && loc.href ? String(loc.href).split('#')[0] : ''));
      return { kode: rt.kode, kodeTampil: formatKode(rt.kode), nama: rt.nama, peran: rt.peran, namaRoom: rt.namaRoom || (rt.state ? rt.state.room.nama : ''), tautan: dasar + '#room/' + formatKode(rt.kode) };
    };
    api.state = () => (rt && rt.state ? salin(rt.state) : null);
    api.jawabanSemua = function (aktivitasId) {
      if (!rt) return {}; const id = aktivitasId || (rt.state && rt.state.aktivitas ? rt.state.aktivitas.id : null);
      const m = id ? rt.jawaban.get(id) : null; const out = {};
      if (m) Object.keys(m).forEach(k => { out[m[k].nama] = salin(m[k]); });
      return out;
    };
    api.riwayat = () => (rt && rt.indeks ? salin(rt.indeks.daftar) : []);
    api.selisihJam = function () {
      if (!rt || rt.peran === 'tuan' || !rt.jam.length) return 0;
      return Math.max.apply(null, rt.jam);   // sampel = jamTuan − jamLokal − latensi; maksimum = latensi terkecil
    };
    // { nama: { nama, online, peran, t, siap, siapId, ganda } }: online = kabar online:true yang masih segar (aturan yang sama dengan
    // status().online); siap = siapId cocok dengan state.lobi.id; ganda = ≥ 2 perangkat online untuk nama itu
    api.hadir = function () {
      if (!rt) return {}; const out = {}; const onl = new Set(onlineKini().map(kunciNama));
      rt.hadir.forEach((h, k) => { out[h.nama] = { nama: h.nama, online: onl.has(k), peran: h.peran, t: h.t, siap: siapBerlaku(h.siap), siapId: h.siap || null, ganda: gandaNama(k) }; });
      return out;
    };
    // { soalId: nama } penjelas yang diumumkan pemimpin lewat bukaKunci untuk aktivitas itu (bawaan: aktivitas berjalan)
    api.penjelasSemua = function (aktivitasId) {
      if (!rt) return {}; const id = aktivitasId || (rt.state && rt.state.aktivitas ? rt.state.aktivitas.id : null);
      return salin((id && rt.penjelas.get(id)) || {});
    };
    // { nama: { soalId: 1 } } ucapan "Paham, makasih" dari dokumen jawaban aktivitas itu
    api.pahamSemua = function (aktivitasId) {
      const j = api.jawabanSemua(aktivitasId); const out = {};
      Object.keys(j).forEach(n => { if (j[n].paham && Object.keys(j[n].paham).length) out[n] = j[n].paham; });
      return out;
    };

    // ---------- khusus tuan ----------
    function ubahState(fn) {
      const r = rt; if (!r || r.peran !== 'tuan' || !r.state) return false;
      const s = salin(r.state); if (fn(s) === false) return false;
      const t = now(); s.t = t; s.urut = Math.max(r.state.urut + 1, t); s.d = r.d; s.nama = r.nama; s.tuan = r.nama;
      if (versiKini()) s.versiApp = versiKini();
      const v = validState(s); if (!v) return false;
      const lama = r.state; r.state = v; r.dedup.tambah(v.d + ':' + v.urut);
      perbaruiSimpan({ state: v });
      if (!r.calon) terbit('s', v, true);   // calon tuan: ditahan; akhiriCalon() → pulihkanDi() menerbitkannya bila tetap tuan
      catatPenjelas(v);
      reaksiAktivitas(lama, v);
      pancar('state', salin(v));
      return salin(v);
    }
    api.aturRoom = function (patch) {
      patch = patch || {};
      return ubahState(s => {
        if (patch.nama != null) { const n = String(patch.nama).replace(/[\u0000-\u001f\u007f-\u009f]/g, ' ').trim().slice(0, 60); if (!n) return false; s.room.nama = n; }
        if (patch.peserta != null) { if (!Array.isArray(patch.peserta)) return false; const p = []; patch.peserta.forEach(x => { const n = rapikanNama(x); if (validNama(n) && !p.some(y => kunciNama(y) === kunciNama(n))) p.push(n); }); if (p.length > 12) return false; s.room.peserta = p; }
        if (patch.tingkat !== undefined) { if (patch.tingkat !== null && ['A', 'B', 'C'].indexOf(patch.tingkat) < 0) return false; s.room.tingkat = patch.tingkat; }
        if (rt) { rt.namaRoom = s.room.nama; perbaruiSimpan({ namaRoom: s.room.nama }); }
      });
    };
    api.mulaiLatihan = function (o) {
      o = o || {};
      return ubahState(s => {
        s.aktivitas = { jenis: 'latihan', id: o.id, soalIds: Array.isArray(o.soalIds) ? o.soalIds.slice() : [], idx: 0, fase: 'jawab', mulaiSoal: now(), detikPerSoal: o.detikPerSoal == null ? 0 : Math.round(o.detikPerSoal), akhirSesi: o.akhirSesi == null ? null : o.akhirSesi, hasilSoal: null, tim: null };
        s.lobi = null;
      });
    };
    api.aturSoal = function (idx) {
      return ubahState(s => { const a = s.aktivitas; if (!a || a.jenis !== 'latihan' || !bulat(idx, 0, a.soalIds.length - 1)) return false; a.idx = idx; a.fase = 'jawab'; a.mulaiSoal = now(); a.hasilSoal = null; });
    };
    // opsi = { penjelas: nama | null (harus ada di per dengan b = 1), tim: { benar, dijawab } | null (kumulatif; tidak disebut = tetap) }
    api.bukaKunci = function (soalId, per, opsi) {
      opsi = isObj(opsi) ? opsi : {};
      return ubahState(s => {
        const a = s.aktivitas; if (!a || a.jenis !== 'latihan' || a.soalIds.indexOf(soalId) < 0) return false;
        const p = validPer(per || {}); if (!p) return false;
        const pj = penjelasDi(p, opsi.penjelas); if (pj === undefined) return false;
        if (opsi.tim !== undefined) { const tim = validTimAkt(opsi.tim); if (tim === undefined) return false; a.tim = tim; }
        a.fase = 'kunci'; a.hasilSoal = { soalId, per: p, penjelas: pj };
      });
    };
    api.mulaiUjian = function (o) {
      o = o || {};
      return ubahState(s => { s.aktivitas = { jenis: 'ujian', id: o.id, kode: o.kode, judul: o.judul == null ? null : String(o.judul).slice(0, 80), mulai: o.mulai == null ? now() : o.mulai, akhir: o.akhir, status: 'jalan' }; s.lobi = null; });
    };
    // lobi "Siap" sebelum latihan: state.lobi = { id, t }. Lobi yang sudah terbuka dipertahankan kecuali { baru: true } (siap semua direset)
    api.bukaLobi = function (o) {
      o = isObj(o) ? o : {}; const r = rt; if (!r || r.peran !== 'tuan' || !r.state) return false;
      if (r.state.lobi && !o.baru) return salin(r.state);
      return ubahState(s => { const t = now(); s.lobi = { id: 'l' + t.toString(36) + hex(acakBytes(CR(), 2)), t }; });
    };
    api.tutupLobi = function () {
      const r = rt; if (!r || r.peran !== 'tuan' || !r.state) return false;
      if (!r.state.lobi) return salin(r.state);
      return ubahState(s => { s.lobi = null; });
    };
    // ujian ditutup (tidak menerima jawaban lagi) tetapi aktivitas tetap tampil sampai akhiriAktivitas()
    api.tutupUjian = function () { return ubahState(s => { if (!s.aktivitas || s.aktivitas.jenis !== 'ujian') return false; s.aktivitas.status = 'selesai'; }); };
    api.akhiriAktivitas = function () {
      if (!rt || rt.peran !== 'tuan' || !rt.state || !rt.state.aktivitas) return null;
      const akt = salin(rt.state.aktivitas); const jawaban = api.jawabanSemua(akt.id);
      if (!ubahState(s => { s.aktivitas = null; })) return null;
      return { aktivitas: akt, jawaban };
    };
    api.terbitkanSesi = function (sesi) {
      const r = rt; if (!r || r.peran !== 'tuan') return false;
      const x = validRekaman(sesi); if (!x) return false;
      const obj = amplop({ sesi: x }); if (utf8(JSON.stringify(obj)).length > MAKS_PAKET - 2048) return false;
      r.sesiCache.set(x.id, x);
      terbit('r/' + x.id, obj, true);
      const daftar = [entriIndeks(x)].concat((r.indeks ? r.indeks.daftar : []).filter(e => e.id !== x.id)).sort((a, b) => b.t - a.t);
      const buang = daftar.slice(30);
      r.indeks = amplop({ daftar: daftar.slice(0, 30) }); perbaruiSimpan({ indeks: r.indeks });
      terbit('i', r.indeks, true);
      buang.forEach(e => hapusRetained('r/' + e.id));
      pancar('indeks', salin(r.indeks.daftar));
      return true;
    };
    function hapusRetained(sufiks) {   // muatan kosong + retain = hapus retained (semantik MQTT); pesan kosong diabaikan penerima
      const r = rt; if (!r) return;
      r.rantaiKeluar = r.rantaiKeluar.then(async () => { await r.siapP; r.koneksi.forEach(k => k.terbit(r.awalan + '/' + sufiks, new Uint8Array(0), true)); }).catch(() => {});
    }
    api.hapusSesi = function (id) {
      const r = rt; if (!r || r.peran !== 'tuan' || typeof id !== 'string') return false;
      const ada = r.indeks && r.indeks.daftar.some(e => e.id === id);
      r.sesiCache.delete(id); hapusRetained('r/' + id);
      if (ada) { r.indeks = amplop({ daftar: r.indeks.daftar.filter(e => e.id !== id) }); perbaruiSimpan({ indeks: r.indeks }); terbit('i', r.indeks, true); pancar('indeks', salin(r.indeks.daftar)); }
      return !!ada;
    };
    api.ambilAlih = function () {
      const r = rt; if (!r || !r.state) return false; if (r.peran === 'tuan') return salin(r.state);
      r.peran = 'tuan'; perbaruiSimpan({ peran: 'tuan' }); aturKoneksi();
      const s = ubahState(() => {});
      kirimHadir(true); pancar('peran', { peran: 'tuan', tuan: r.nama }); pancarStatus();
      return s;
    };

    // ---------- jawaban (semua peran) ----------
    function dokKosong(aktivitas) { return { aktivitas: aktivitas || null, j: {}, k: {}, paham: {}, selesai: false, detik: null }; }
    // dokSaya untuk aktivitas berjalan: adopsi dokumen lama sendiri bila ada, selain itu dokumen kosong
    function pastikanDok(akt) {
      const r = rt; adopsiDok();
      if (!r.dokSaya || r.dokSaya.aktivitas !== akt.id) r.dokSaya = dokKosong(akt.id);
      if (!isObj(r.dokSaya.paham)) r.dokSaya.paham = {};
      return r.dokSaya;
    }
    function pratinjauDok(akt) {
      const r = rt; const lokal = Object.assign({ v: 1, t: now(), urut: r.urut, d: r.d, nama: r.nama }, salin(r.dokSaya));  // pratinjau lokal (belum terbit)
      simpanJawaban(validJawaban(lokal) || lokal); pancar('jawaban', { nama: r.nama, aktivitas: akt.id, dok: salin(validJawaban(lokal) || lokal) });
      jadwalDok();
    }
    function terbitDok(hanyaKon) {
      const r = rt; if (!r || !r.dokSaya) return; const obj = amplop(salin(r.dokSaya));
      if (obj.aktivitas) simpanJawaban(validJawaban(obj) || obj);
      return slugNama(r.nama).then(slug => terbit('a/' + slug, obj, true, hanyaKon));
    }
    function jadwalDok() { const r = rt; clearTimeout(r.timerJawab); r.timerJawab = setTimeout(() => { if (r === rt) terbitDok(); }, api.KONFIG.debounceMs); }
    function aktivitasKini(id) { return rt && rt.state && rt.state.aktivitas && rt.state.aktivitas.id === id ? rt.state.aktivitas : null; }
    api.kirimJawaban = function (o) {
      o = o || {}; const r = rt; if (!r) return false; const akt = aktivitasKini(o.aktivitas); if (!akt) return false;
      if (typeof o.soalId !== 'string' || !RE_SOAL.test(o.soalId)) return false;
      if (akt.jenis === 'latihan' && akt.soalIds.indexOf(o.soalId) < 0) return false;
      if (akt.jenis === 'ujian' && akt.status !== 'jalan') return false;
      if (o.o != null && o.o !== '-' && OPSI.indexOf(o.o) < 0) return false;
      if (o.k != null && YAKIN.indexOf(o.k) < 0) return false;
      const d = pastikanDok(akt);
      if (Object.keys(d.j).length >= 400 && !punya(d.j, o.soalId)) return false;
      if (o.o === undefined) { /* hanya keyakinan */ } else if (o.o === null) delete d.j[o.soalId]; else d.j[o.soalId] = o.o;
      if (o.k !== undefined) { if (o.k === null) delete d.k[o.soalId]; else d.k[o.soalId] = o.k; }
      pratinjauDok(akt);
      return true;
    };
    // "Paham, makasih" untuk soal latihan berjalan → dokumen jawaban membawa paham: { soalId: 1 }. nilai === false menghapusnya
    api.kirimPaham = function (soalId, nilai) {
      const r = rt; if (!r) return false; const akt = r.state && r.state.aktivitas;
      if (!akt || akt.jenis !== 'latihan' || typeof soalId !== 'string' || akt.soalIds.indexOf(soalId) < 0) return false;
      const d = pastikanDok(akt);
      if (nilai === false) delete d.paham[soalId]; else d.paham[soalId] = 1;
      pratinjauDok(akt);
      return true;
    };
    // lobi: nyatakan siap (true) atau batal (false). Nilai terakhir ikut di setiap dokumen hadir (detak dan sambung ulang)
    api.kirimSiap = function (nilai) {
      const r = rt; if (!r) return false; const lobi = r.state && r.state.lobi;
      if (nilai && !lobi) return false;
      r.siap = nilai ? lobi.id : null; perbaruiSimpan({ siap: r.siap });
      kirimHadir(true); pancarStatus();
      return true;
    };
    // jawaban: { soalId: opsi } atau larik selaras dengan soalIds aktivitas (latihan) / soal kode ujian (bila UKP.belajar.ujianTim tersedia)
    api.kirimSelesai = function (aktivitas, o) {
      o = o || {}; const r = rt; if (!r) return false; const akt = aktivitasKini(aktivitas); if (!akt) return false;
      let ids = akt.jenis === 'latihan' ? akt.soalIds : null;
      const raguPosisi = Array.isArray(o.ragu) && o.ragu.some(x => typeof x !== 'string');   // larik boolean sejajar atau indeks
      if (!ids && (Array.isArray(o.jawaban) || raguPosisi)) { const L = belajar(); try { const b = L && L.ujianTim && L.ujianTim.bacaKode ? L.ujianTim.bacaKode(akt.kode) : null; ids = b ? b.soalIds : null; } catch (e) { ids = null; } }
      const j = {}, k = {};
      if (Array.isArray(o.jawaban)) { if (!ids) return false; o.jawaban.forEach((x, i) => { if (ids[i] && RE_SOAL.test(ids[i])) j[ids[i]] = OPSI.indexOf(x) >= 0 ? x : '-'; }); }
      else if (isObj(o.jawaban)) Object.keys(o.jawaban).forEach(id => { if (RE_SOAL.test(id)) j[id] = OPSI.indexOf(o.jawaban[id]) >= 0 ? o.jawaban[id] : '-'; });
      // ragu: larik id, larik indeks, larik boolean sejajar soal (v8.2 B0), atau peta { id: true }
      const ragu = Array.isArray(o.ragu) ? o.ragu.map((x, i) => (typeof x === 'boolean' ? (x && ids ? ids[i] : null) : typeof x === 'number' && ids ? ids[x] : x)) : isObj(o.ragu) ? Object.keys(o.ragu).filter(x => o.ragu[x]) : [];
      ragu.forEach(id => { if (typeof id === 'string' && RE_SOAL.test(id)) k[id] = 'ragu'; });
      if (isObj(o.keyakinan)) Object.keys(o.keyakinan).forEach(id => { if (RE_SOAL.test(id) && YAKIN.indexOf(o.keyakinan[id]) >= 0) k[id] = o.keyakinan[id]; });
      if (Object.keys(j).length > 400 || Object.keys(k).length > 400) return false;
      const detik = o.detik == null ? null : Math.max(0, Math.min(86400, Math.round(Number(o.detik) || 0)));
      adopsiDok(); const paham = r.dokSaya && r.dokSaya.aktivitas === akt.id && isObj(r.dokSaya.paham) ? r.dokSaya.paham : {};
      r.dokSaya = { aktivitas: akt.id, j, k, paham, selesai: true, detik };
      clearTimeout(r.timerJawab); terbitDok();
      const lokal = r.jawaban.get(akt.id); const dok = lokal ? lokal[kunciNama(r.nama)] : null;
      pancar('jawaban', { nama: r.nama, aktivitas: akt.id, dok: salin(dok) });
      return true;
    };
    api.bersihkanJawaban = function () { const r = rt; if (!r) return false; clearTimeout(r.timerJawab); r.dokSaya = dokKosong(null); terbitDok(); return true; };
    api.mintaSesi = function (id) {
      const r = rt; if (!r || typeof id !== 'string' || !RE_ID.test(id)) return Promise.resolve(null);
      if (r.sesiCache.has(id)) return Promise.resolve(salin(r.sesiCache.get(id)));
      return new Promise(res => {
        const arr = r.menungguSesi.get(id) || []; let selesai = false;
        const fn = s => { if (selesai) return; selesai = true; clearTimeout(tm); res(s); }; arr.push(fn); r.menungguSesi.set(id, arr);
        const tm = setTimeout(() => { const a = r.menungguSesi.get(id); if (a) { const i = a.indexOf(fn); if (i >= 0) a.splice(i, 1); if (!a.length) r.menungguSesi.delete(id); } fn(null); }, api.KONFIG.mintaSesiMs);
        r.siapP.then(() => { if (r === rt) r.koneksi.forEach(k => k.langganan(r.awalan + '/r/' + id)); });  // SUBSCRIBE ulang → relai mengirim retained lagi
      });
    };

    // ---------- v8.2 B0: intip, tutup, uji sambungan ----------
    // baca state room tanpa bergabung: tanpa nama, tanpa kehadiran, tanpa last will; menyambung ke semua relai sekaligus,
    // mengambil state retained dengan urut terbesar, lalu memutus. → Promise<state|null> (null: room tidak ditemukan / tidak terjangkau)
    api.intip = function (kode) {
      const c = cekTersedia(); if (!c.tersedia) return Promise.reject(new Error(c.alasan));
      const k = normalKode(kode); if (!k) return Promise.reject(new Error('Kode room tidak valid. Kode berisi 14 huruf/angka, misalnya ABCD-EFGHJ-KMNPQ.'));
      if (rt && rt.kode === k && rt.state) return Promise.resolve(salin(rt.state));
      const K = api.KONFIG;
      return new Promise(res => {
        let selesai = false, terbaik = null, tAkhir = null; const kons = [], tuntas = new Map();
        const akhir = () => { if (selesai) return; selesai = true; clearTimeout(tBatas); clearTimeout(tAkhir); kons.forEach(x => { try { x.henti(); } catch (e) {} }); res(terbaik ? salin(terbaik) : null); };
        const tBatas = setTimeout(akhir, K.tungguGabungMs);
        const cek = () => { if (!selesai && tuntas.size && Array.from(tuntas.values()).every(Boolean)) akhir(); };
        kunciUntuk(k).then(({ awalan, kunci }) => {
          if (selesai) return;
          const kr = Kripto(CR(), K.iterasi); const topik = awalan + '/s';
          daftarRelai().forEach(u => {
            tuntas.set(u, false);
            const kon = Koneksi({
              url: u, WS: WSk(), idKlien: idKlien(), konfig: K, filter: () => [topik], buatWill: null,
              saatPublish: p => {
                if (selesai || p.topik !== topik || !p.muatan || !p.muatan.length || p.muatan.length > MAKS_PAKET) return;
                kr.dekripsi(kunci, topik, p.muatan).then(t => {
                  if (selesai || t == null) return; let o; try { o = parseAman(t); } catch (e) { return; }
                  const v = validState(o); if (!v || v.ditutup) return;
                  if (!terbaik || v.urut > terbaik.urut) terbaik = v;
                  if (!tAkhir) tAkhir = setTimeout(akhir, Math.min(300, K.tungguStateMs));   // beri relai lain sebentar untuk state yang lebih baru
                });
              },
              saatStatus: kk => { if (kk.status === 'tersambung') setTimeout(() => { tuntas.set(u, true); cek(); }, K.tungguStateMs); },
              saatGagal: (kk, pernah) => { if (!pernah) { tuntas.set(u, true); try { kk.henti(false); } catch (e) {} cek(); } },
            });
            kons.push(kon); kon.mulai();
          });
        }).catch(akhir);
      });
    };
    // tuan: tutup room. Anggota yang online menerima state terakhir (ditutup: true) lalu keluar; retained s, i, r/*, a/*, h/* dihapus
    // dari semua relai; perangkat ini keluar. → Promise<bool> (true bila minimal satu relai tersambung saat penghapusan dikirim)
    api.tutup = function () {
      const r = rt; if (!r || r.peran !== 'tuan' || !r.state) return Promise.resolve(false);
      return (async () => {
        try { await r.siapP; } catch (e) {}
        if (r !== rt) return false;
        const tersambung = r.koneksi.some(k => k.status === 'tersambung');
        const s = salin(r.state); const t = now(); s.t = t; s.urut = Math.max(r.state.urut + 1, t); s.aktivitas = null; s.lobi = null; s.ditutup = true;
        const v = validState(s); if (v) { r.state = v; terbit('s', v, false); }
        const nama = new Set([r.nama].concat(r.state.room.peserta)); r.hadir.forEach(h => nama.add(h.nama));
        r.jawaban.forEach(m => Object.keys(m).forEach(k => nama.add(m[k].nama)));
        const kunciUnik = new Map(); nama.forEach(n => { if (validNama(n) && !kunciUnik.has(kunciNama(n))) kunciUnik.set(kunciNama(n), n); });
        const slugs = await Promise.all(Array.from(kunciUnik.values()).map(slugNama));
        slugs.forEach(sl => { if (sl) { hapusRetained('a/' + sl); hapusRetained('h/' + sl); } });
        const ids = new Set(r.indeks ? r.indeks.daftar.map(e => e.id) : []); r.sesiCache.forEach((x, id) => ids.add(id));
        ids.forEach(id => hapusRetained('r/' + id));
        hapusRetained('i'); hapusRetained('s');
        await Promise.race([r.rantaiKeluar, new Promise(ok => setTimeout(ok, 1500))]);
        tulisSimpan(null);
        if (rt === r) hentiRt();
        pancar('tutup', { tuan: r.nama }); pancarStatus(); pancar('status', api.status());
        return tersambung;
      })();
    };
    // uji tiap relai di daftar (CONNECT → CONNACK → DISCONNECT), paralel, ≤ batasSambungMs per relai, tanpa bergabung ke room
    // → Promise<[{ url, ok, ms, alasan }]> (alasan: null bila ok)
    api.ujiRelai = function () {
      const urls = daftarRelai(); const c = cekTersedia(); const WS = WSk();
      if (!c.tersedia || typeof WS !== 'function') return Promise.resolve(urls.map(url => ({ url, ok: false, ms: 0, alasan: c.alasan || 'WebSocket tidak tersedia.' })));
      const batas = api.KONFIG.batasSambungMs;
      const idAcak = () => { try { return hex(acakBytes(CR(), 6)); } catch (e) { return Math.random().toString(16).slice(2, 14); } };
      return Promise.all(urls.map(url => new Promise(res => {
        const t0 = Date.now(); let ws = null, selesai = false;
        const akhir = (ok, alasan) => {
          if (selesai) return; selesai = true; clearTimeout(tm);
          if (ws) { ws.onopen = ws.onmessage = ws.onerror = ws.onclose = null; try { if (ok && ws.readyState === 1) ws.send(Kodek.disconnect()); } catch (e) {} try { ws.close(); } catch (e) {} }
          res({ url, ok, ms: Date.now() - t0, alasan: ok ? null : alasan });
        };
        const tm = setTimeout(() => akhir(false, 'Waktu habis (' + Math.round(batas / 1000) + ' dtk) tanpa balasan.'), batas);
        try { ws = new WS(url, ['mqtt']); } catch (e) { akhir(false, 'Tidak bisa dibuka: ' + String((e && e.message) || e).slice(0, 120)); return; }
        ws.binaryType = 'arraybuffer'; const pg = new Pengurai(4096);
        const olah = b => {
          let pk; try { pk = pg.dorong(b); } catch (e) { akhir(false, 'Balasan server tidak dikenal.'); return; }
          for (const p of pk) if (p.jenis === 'connack') { if (p.kode === 0) akhir(true, null); else akhir(false, 'Ditolak server (kode ' + p.kode + ').'); return; }
        };
        ws.onopen = () => { try { ws.send(Kodek.connect({ clientId: 'ukp' + idAcak(), keepalive: 30, clean: true })); } catch (e) { akhir(false, 'Gagal mengirim salam pembuka.'); } };
        ws.onmessage = ev => { const d = ev.data; if (typeof d === 'string') return; if (d && typeof d.arrayBuffer === 'function' && !ArrayBuffer.isView(d)) d.arrayBuffer().then(olah, () => {}); else olah(d); };
        ws.onerror = () => {};
        ws.onclose = () => akhir(false, 'Sambungan ditutup sebelum siap (diblokir jaringan atau server mati).');
      })));
    };

    // ---------- untuk uji ----------
    api._rt = () => rt;
    api._putuskanSemua = () => { if (rt) rt.koneksi.forEach(k => k.putuskan()); };
    return api;
  }

  const inti = buatInstans();
  UKP.ruang = inti;
  inti.buatInstans = buatInstans;
  inti.normalKode = normalKode;
  inti.formatKode = formatKode;
  inti.RELAI_BAWAAN = RELAI_BAWAAN.slice();
  inti.MAKS_PAKET = MAKS_PAKET;
  inti._kodek = { Kodek, Pengurai, uraiPaket, varint, cocokFilter, utf8, dariUtf8, satukan };
  inti._kripto = { Kripto, kodeBaru, normalKode, formatKode, ALFABET, PANJANG_KODE, GARAM };
  inti._protokol = Protokol;
  inti._Koneksi = Koneksi;
})(typeof window !== 'undefined' ? window : globalThis);
