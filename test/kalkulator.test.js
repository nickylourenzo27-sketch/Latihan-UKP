/* Uji mesin kalkulator MABAR UKP — jalankan: node --test test/
   Kasus acuan dari docs/SKEMA-KALKULATOR.md dan riset 02a/02b ditandai "acuan".
   Bagian "adversarial" (akhir berkas): batas lapisan, input aneh, fuzz semua input, kombinasi pilihan,
   cek silang tabel TER dengan riset 02a, dan integrasi kmkBunga dari js/data/ref.js. */
'use strict';
const { describe, it, afterEach } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

const UKP = require(path.join(__dirname, '..', 'js', 'kalkulator.js'));
const H = (jenis, ubah) => UKP.hitungKalkulator(jenis, ubah);
function baris(r, awalan) {
  const b = r.hasil.find(h => h.label.startsWith(awalan));
  assert.ok(b, 'baris "' + awalan + '" tidak ditemukan; ada: ' + r.hasil.map(h => h.label).join(' | '));
  return b;
}
const nilai = (r, awalan) => baris(r, awalan).nilai;
const utama = r => r.hasil.find(h => h.utama);
const ok = r => { assert.equal(r.galat, null, 'galat tak terduga: ' + r.galat); return r; };
const gagal = r => { assert.equal(typeof r.galat, 'string'); assert.ok(r.galat.length > 0); return r; };

const URUTAN = ['pph-op', 'pph21-ter', 'sanksi-bunga', 'tenggat-spt', 'ppn', 'potput', 'pesangon', 'denda-keberatan', 'ppsp',
  'pph-badan', 'penyusutan', 'pajak-tangguhan', 'der', 'pph24', 'bpt', 'pbb-bphtb', 'bea-meterai',
  // 18–19: tambahan dari laporan peserta UKP Tingkat C (docs/PENGALAMAN-UJIAN.md)
  'kurs', 'gmt'];

// ---------------------------------------------------------------------------
describe('kontrak umum', () => {
  it('memuat 19 kalkulator dengan urutan dan slug sesuai SPESIFIKASI §5 + tambahan Tingkat C', () => {
    assert.deepEqual(UKP.kalkulator.map(k => k.jenis), URUTAN);
  });
  it('kalkulatorByJenis mengenali kalkulator tambahan "kurs" dan "gmt"', () => {
    assert.equal(UKP.kalkulatorByJenis('kurs').nama, 'Kurs KMK vs kurs tengah: DPP pajak dan selisih kurs');
    assert.equal(UKP.kalkulatorByJenis('gmt').nama, 'Top-up tax pajak minimum global (GloBE, PMK 136/2024)');
  });
  it('MVP = 6 kalkulator pertama', () => {
    assert.deepEqual(UKP.kalkulator.filter(k => k.mvp).map(k => k.jenis), URUTAN.slice(0, 6));
  });
  it('kalkulatorByJenis menemukan dan mengembalikan null untuk slug asing', () => {
    assert.equal(UKP.kalkulatorByJenis('ppn').nama.startsWith('PPN'), true);
    assert.equal(UKP.kalkulatorByJenis('tidak-ada'), null);
  });
  for (const k of UKP.kalkulator) {
    it(k.jenis + ': metadata, input, dan hasil default memenuhi kontrak', () => {
      for (const f of ['jenis', 'nama', 'kelompok', 'deskripsi', 'statusPer']) assert.equal(typeof k[f], 'string', f);
      assert.equal(typeof k.mvp, 'boolean');
      assert.ok(Array.isArray(k.dasarHukum) && k.dasarHukum.length > 0);
      assert.ok(['✅', '◐'].includes(k.verifikasi));
      if (k.verifikasi === '◐') assert.ok(typeof k.peringatan === 'string' && k.peringatan.length > 20, 'kalkulator ◐ wajib peringatan');
      const kunci = new Set();
      for (const i of k.input) {
        assert.ok(!kunci.has(i.key), 'key ganda ' + i.key); kunci.add(i.key);
        assert.ok(['pilihan', 'uang', 'tanggal', 'persen', 'angka', 'boolean', 'teks'].includes(i.tipe), i.key + ' tipe ' + i.tipe);
        assert.ok(Object.prototype.hasOwnProperty.call(i, 'default'), i.key + ' tanpa default');
        if (i.tipe === 'pilihan') assert.ok(i.opsi.some(o => o.nilai === i.default), i.key + ' default bukan opsi');
        if (i.tampilJika) assert.ok(k.input.some(j => j.key === i.tampilJika.key), i.key + ' tampilJika merujuk key asing');
      }
      const r = ok(UKP.hitungKalkulator(k.jenis));
      assert.ok(r.hasil.length >= 1 && r.hasil.length <= 8, 'jumlah baris hasil ' + r.hasil.length);
      assert.equal(r.hasil.filter(h => h.utama).length, 1, 'tepat satu utama');
      for (const h of r.hasil) assert.ok(['uang', 'persen', 'angka', 'tanggal', 'teks'].includes(h.format));
      for (const h of r.hasil.filter(x => x.format === 'uang')) assert.equal(h.nilai, Math.round(h.nilai));
      assert.ok(r.jejak.length > 0 && r.jejak.every(j => Array.isArray(j) && j.length === 2 && typeof j[0] === 'string' && typeof j[1] === 'string'));
      assert.ok(Array.isArray(r.asumsi) && Array.isArray(r.peringatan) && r.dasarHukum.length > 0);
    });
    it(k.jenis + ': input kosong semua tidak melempar error', () => {
      const v = {}; k.input.forEach(i => { v[i.key] = null; });
      const r = k.hitung(v);
      assert.ok(r && Array.isArray(r.hasil));
      assert.ok(r.galat === null || typeof r.galat === 'string');
    });
  }
});

// ---------------------------------------------------------------------------
describe('UKP.fmt', () => {
  it('uang: pemisah titik, pembulatan, minus', () => {
    assert.equal(UKP.fmt.uang(12000000), 'Rp12.000.000');
    assert.equal(UKP.fmt.uang(-606000), '−Rp606.000');
    assert.equal(UKP.fmt.uang(1234.6), 'Rp1.235');
    assert.equal(UKP.fmt.uang(0), 'Rp0');
    assert.equal(UKP.fmt.uang(null), '–');
  });
  it('angka dan persen format id-ID', () => {
    assert.equal(UKP.fmt.angka(1234.5), '1.234,5');
    assert.equal(UKP.fmt.angka(1234.5, 2), '1.234,50');
    assert.equal(UKP.fmt.persen(0.0101), '1,01%');
    assert.equal(UKP.fmt.persen(0.05), '5%');
    assert.equal(UKP.fmt.persen(0.05, 2), '5,00%');
  });
  it('tanggal dan bulanTahun berbahasa Indonesia', () => {
    assert.equal(UKP.fmt.tanggal('2026-02-15'), '15 Feb 2026');
    assert.equal(UKP.fmt.tanggal('2026-08-01'), '1 Agu 2026');
    assert.equal(UKP.fmt.bulanTahun('2026-02'), 'Februari 2026');
    assert.equal(UKP.fmt.bulanTahun('2026-10-27'), 'Oktober 2026');
  });
});

describe('UKP.tabel', () => {
  it('PTKP dan lapisan Ps. 17 sesuai UU HPP/PMK 101/2016', () => {
    assert.equal(UKP.tabel.ptkp.TK0, 54000000);
    assert.equal(UKP.tabel.ptkp.K3, 72000000);
    assert.equal(UKP.tabel.ptkp.KI3, 126000000);
    assert.deepEqual(UKP.tabel.lapisanPs17.map(l => l[1]), [0.05, 0.15, 0.25, 0.30, 0.35]);
  });
  it('TER bulanan lengkap: A 44, B 40, C 41 lapisan, naik monoton, berakhir Infinity 34%', () => {
    const jumlah = { A: 44, B: 40, C: 41 };
    for (const kat of ['A', 'B', 'C']) {
      const t = UKP.tabel.terBulanan[kat];
      assert.equal(t.length, jumlah[kat], 'kategori ' + kat);
      assert.equal(t[0][1], 0);
      for (let i = 1; i < t.length; i++) { assert.ok(t[i][0] > t[i - 1][0]); assert.ok(t[i][1] > t[i - 1][1]); }
      assert.equal(t[t.length - 1][0], Infinity); assert.equal(t[t.length - 1][1], 0.34);
    }
  });
  it('kategori TER dan baris yang dicek silang riset (✅)', () => {
    assert.deepEqual(['TK0', 'TK1', 'K0', 'TK2', 'TK3', 'K1', 'K2', 'K3'].map(s => UKP.tabel.terKategori[s]), ['A', 'A', 'A', 'B', 'B', 'B', 'B', 'C']);
    assert.equal(UKP.pajak.ter('A', 24150001).tarif, 0.10);
    assert.equal(UKP.pajak.ter('A', 103000001).tarif, 0.25);
    assert.equal(UKP.pajak.ter('B', 7300000).tarif, 0.0075);
    assert.equal(UKP.pajak.ter('C', 12050001).tarif, 0.03);
  });
  it('KMK bunga Oktober 2026 tersedia di tabel internal', () => {
    const okt = UKP.tabel.kmkBunga.find(x => x.periode === '2026-10');
    assert.deepEqual(okt.tarif, { '0': 0.0059, '5': 0.0101, '10': 0.0142, '15': 0.0184, '20': 0.0226 });
    assert.equal(okt.kmk, 'KMK 47/MK/EF.2/2026');
  });
  it('penyusutan: masa manfaat dan tarif Ps. 11', () => {
    const p = UKP.tabel.penyusutan;
    assert.deepEqual([p.k1.masa, p.k2.masa, p.k3.masa, p.k4.masa], [4, 8, 16, 20]);
    assert.deepEqual([p.k1.sm, p.k2.sm, p.k3.sm, p.k4.sm], [0.5, 0.25, 0.125, 0.1]);
    assert.equal(p['bangunan-permanen'].sm, null);
  });
});

// ---------------------------------------------------------------------------
describe('pph-op', () => {
  it('acuan: K/2 PKP Rp177.500.000 → PPh Rp20.625.000', () => {
    const r = ok(H('pph-op', { status: 'K2', neto: 245000000 }));
    assert.equal(nilai(r, 'Penghasilan Kena Pajak'), 177500000);
    assert.equal(utama(r).nilai, 20625000);
  });
  it('PKP dibulatkan ke bawah ribuan penuh', () => {
    const r = ok(H('pph-op', { status: 'TK0', neto: 100123456, kredit25: 0 }));
    assert.equal(nilai(r, 'Penghasilan Kena Pajak'), 46123000);
    assert.equal(utama(r).nilai, 2306150);
  });
  it('neto di bawah PTKP → PKP 0 dan angsuran menjadi lebih bayar', () => {
    const r = ok(H('pph-op', { status: 'TK0', neto: 50000000 }));
    assert.equal(utama(r).nilai, 0);
    assert.equal(nilai(r, 'PPh Ps. 28A lebih bayar'), 9000000);
  });
  it('zakat mengurangi penghasilan neto', () => {
    const r = ok(H('pph-op', { status: 'K2', neto: 245000000, zakat: 5000000 }));
    assert.equal(nilai(r, 'Penghasilan Kena Pajak'), 172500000);
    assert.equal(utama(r).nilai, 19875000);
  });
  it('zakat tidak boleh menimbulkan rugi (dibatasi + peringatan)', () => {
    const r = ok(H('pph-op', { status: 'TK0', neto: 10000000, zakat: 20000000 }));
    assert.equal(utama(r).nilai, 0);
    assert.ok(r.peringatan.some(p => p.includes('Zakat')));
  });
  it('lapisan tertinggi 35% (PKP Rp6 miliar)', () => {
    const r = ok(H('pph-op', { status: 'TK0', neto: 6054000000 }));
    assert.equal(utama(r).nilai, 1794000000);
  });
  it('NPPN: 50% × Rp1 miliar, TK/0 → Rp80.500.000 + peringatan norma', () => {
    const r = ok(H('pph-op', { status: 'TK0', metode: 'nppn', bruto: 1000000000, norma: 50 }));
    assert.equal(nilai(r, 'Penghasilan Kena Pajak'), 446000000);
    assert.equal(utama(r).nilai, 80500000);
    assert.ok(r.peringatan.length >= 1);
  });
  it('PPh final UMKM OP: 0,5% × (omzet − Rp500 juta)', () => {
    const r = ok(H('pph-op', { metode: 'final', bruto: 800000000 }));
    assert.equal(utama(r).label, 'PPh final UMKM setahun');
    assert.equal(utama(r).nilai, 1500000);
    assert.equal(ok(H('pph-op', { metode: 'final', bruto: 450000000 })).hasil[0].nilai, 0);
  });
  it('PPh final + penghasilan lain tetap dikenai Ps. 17', () => {
    const r = ok(H('pph-op', { status: 'TK0', metode: 'final', bruto: 800000000, netoLain: 120000000, kredit25: 0 }));
    assert.equal(nilai(r, 'PPh terutang Ps. 17'), 3900000);
    assert.equal(utama(r).nilai, 1500000);
  });
  it('PPh 29 dan angsuran PPh 25 tahun berikutnya (default)', () => {
    const r = ok(H('pph-op'));
    assert.equal(nilai(r, 'PPh Ps. 29 kurang bayar'), 11625000);
    assert.equal(nilai(r, 'Angsuran PPh 25'), 1718750);
  });
  it('kompensasi kerugian dan status K/I/3', () => {
    assert.equal(utama(ok(H('pph-op', { status: 'K2', neto: 245000000, rugi: 45000000 }))).nilai, 13875000);
    assert.equal(utama(ok(H('pph-op', { status: 'KI3', neto: 500000000 }))).nilai, 62500000);
  });
  it('galat: neto kosong, status asing, kredit negatif', () => {
    gagal(H('pph-op', { neto: null }));
    gagal(H('pph-op', { status: 'X' }));
    gagal(H('pph-op', { kredit21: -1 }));
  });
});

describe('pph21-ter', () => {
  it('acuan: kategori A bruto Rp9.000.000 → 1,75% → Rp157.500', () => {
    const r = ok(H('pph21-ter', { status: 'TK0', bruto: 9000000 }));
    assert.equal(utama(r).nilai, 157500);
    assert.equal(nilai(r, 'Kategori'), 'A · 1,75%');
  });
  it('pemetaan status PTKP ke kategori A/B/C', () => {
    const peta = { TK1: 'A', K0: 'A', TK2: 'B', TK3: 'B', K1: 'B', K2: 'B', K3: 'C' };
    for (const s of Object.keys(peta)) assert.equal(nilai(ok(H('pph21-ter', { status: s })), 'Kategori')[0], peta[s], s);
  });
  it('batas atas lapisan inklusif', () => {
    assert.equal(utama(ok(H('pph21-ter', { bruto: 5400000 }))).nilai, 0);
    assert.equal(utama(ok(H('pph21-ter', { bruto: 5400001 }))).nilai, 13500);
  });
  it('kategori B dan C pada bruto yang sama', () => {
    assert.equal(utama(ok(H('pph21-ter', { status: 'K1', bruto: 10000000 }))).nilai, 150000);
    assert.equal(utama(ok(H('pph21-ter', { status: 'K3', bruto: 10000000 }))).nilai, 150000);
    assert.equal(utama(ok(H('pph21-ter', { status: 'K2', bruto: 7300000 }))).nilai, 54750);
  });
  it('lapisan tertinggi 33%/34%', () => {
    assert.equal(utama(ok(H('pph21-ter', { status: 'TK0', bruto: 1500000000 }))).nilai, 510000000);
    assert.equal(nilai(ok(H('pph21-ter', { status: 'K1', bruto: 1405000000 })), 'Kategori'), 'B · 33%');
    assert.equal(nilai(ok(H('pph21-ter', { status: 'K3', bruto: 1419000001 })), 'Kategori'), 'C · 34%');
  });
  it('Desember (default THR Maret): lebih potong dikembalikan', () => {
    const r = ok(H('pph21-ter'));
    assert.equal(nilai(r, 'PPh 21 masa Maret'), 1440000);
    assert.equal(nilai(r, 'Σ PPh 21 Januari–November'), 3015000);
    assert.equal(nilai(r, 'PKP setahun'), 53910000);
    assert.equal(nilai(r, 'PPh 21 setahun'), 2695500);
    assert.equal(nilai(r, 'Kelebihan potong'), 319500);
  });
  it('Desember tanpa THR dan iuran', () => {
    const r = ok(H('pph21-ter', { thr: 0, iuran: 0 }));
    assert.equal(nilai(r, 'PKP setahun'), 48600000);
    assert.equal(nilai(r, 'PPh 21 Masa Desember'), 697500);
  });
  it('biaya jabatan dibatasi Rp6.000.000 setahun', () => {
    const r = ok(H('pph21-ter', { bruto: 20000000, thr: 0, iuran: 0 }));
    assert.equal(utama(r).nilai, 1800000);
    assert.equal(nilai(r, 'PKP setahun'), 180000000);
    assert.equal(nilai(r, 'PPh 21 Masa Desember'), 1200000);
  });
  it('tanpa NPWP → 120%', () => {
    assert.equal(utama(ok(H('pph21-ter', { npwp: false }))).nilai, 189000);
  });
  it('TER harian 0% / 0,5% / Ps. 17 × 50%', () => {
    assert.equal(utama(ok(H('pph21-ter', { jenisPegawai: 'harian', brutoHarian: 500000, hari: 20 }))).nilai, 50000);
    assert.equal(utama(ok(H('pph21-ter', { jenisPegawai: 'harian', brutoHarian: 450000, hari: 20 }))).nilai, 0);
    assert.equal(nilai(ok(H('pph21-ter', { jenisPegawai: 'harian', brutoHarian: 3000000, hari: 1 })), 'PPh 21 per hari'), 75000);
  });
  it('pegawai tidak tetap bulanan: TER s.d. Desember', () => {
    assert.equal(nilai(ok(H('pph21-ter', { jenisPegawai: 'tidak-tetap-bulanan', thr: 0 })), 'PPh 21 setahun'), 1890000);
  });
  it('galat: bruto kosong, status K/I tidak dipakai TER', () => {
    gagal(H('pph21-ter', { bruto: null }));
    gagal(H('pph21-ter', { status: 'KI0' }));
  });
});

describe('sanksi-bunga', () => {
  afterEach(() => { delete UKP.ref; });
  it('acuan: Rp12.000.000, 15 Feb–3 Jul 2026, 5 bulan × 1,01% = Rp606.000 (+ peringatan bulan tidak di tabel)', () => {
    const r = ok(H('sanksi-bunga'));
    assert.equal(utama(r).nilai, 606000);
    assert.equal(nilai(r, 'Jumlah bulan'), 5);
    assert.equal(nilai(r, 'Tarif per bulan'), 0.0101);
    assert.ok(r.peringatan.some(p => p.includes('Februari 2026')));
  });
  it('bulan tersedia di tabel (Oktober 2026) → tanpa peringatan', () => {
    const r = ok(H('sanksi-bunga', { mulai: '2026-10-15', akhir: '2026-12-20' }));
    assert.equal(utama(r).nilai, 363600);
    assert.deepEqual(r.peringatan, []);
    assert.ok(r.dasarHukum.some(d => d.includes('KMK 47/MK/EF.2/2026')));
  });
  it('uplift per pasal memakai tarif KMK Oktober 2026', () => {
    const t = p => nilai(ok(H('sanksi-bunga', { pasal: p, mulai: '2026-10-15', akhir: '2026-11-15' })), 'Tarif per bulan');
    assert.equal(t('19'), 0.0059); assert.equal(t('8-5'), 0.0142); assert.equal(t('13-2'), 0.0184);
    assert.equal(t('13-3'), 0.0226); assert.equal(t('imbalan'), 0.0059); assert.equal(t('14-3'), 0.0101);
  });
  it('dibatasi paling lama 24 bulan', () => {
    const r = ok(H('sanksi-bunga', { mulai: '2026-10-15', akhir: '2029-03-01' }));
    assert.equal(nilai(r, 'Jumlah bulan'), 24);
    assert.equal(utama(r).nilai, 2908800);
  });
  it('dibayar pada tanggal jatuh tempo → tanpa bunga', () => {
    assert.equal(utama(ok(H('sanksi-bunga', { mulai: '2026-10-15', akhir: '2026-10-15' }))).nilai, 0);
  });
  it('bagian bulan dihitung penuh (batas tanggal yang sama)', () => {
    assert.equal(nilai(ok(H('sanksi-bunga', { mulai: '2026-10-15', akhir: '2026-11-15' })), 'Jumlah bulan'), 1);
    assert.equal(nilai(ok(H('sanksi-bunga', { mulai: '2026-10-15', akhir: '2026-11-16' })), 'Jumlah bulan'), 2);
    assert.equal(nilai(ok(H('sanksi-bunga', { mulai: '2026-10-15', akhir: '2026-10-16' })), 'Jumlah bulan'), 1);
  });
  it('input tarif acuan menggantikan tabel', () => {
    const a = ok(H('sanksi-bunga', { tarifAcuan: 7.08 }));
    assert.equal(nilai(a, 'Tarif per bulan'), 0.0101); assert.deepEqual(a.peringatan, []);
    assert.equal(utama(ok(H('sanksi-bunga', { tarifAcuan: 6 }))).nilai, 552000);
  });
  it('September 2026: Ps. 13(2) 1,85% (◐) dan pasal lain memakai cadangan', () => {
    const r = ok(H('sanksi-bunga', { pasal: '13-2', mulai: '2026-09-30', akhir: '2026-10-20' }));
    assert.equal(nilai(r, 'Tarif per bulan'), 0.0185);
    assert.ok(r.peringatan.some(p => p.includes('◐')));
    const c = ok(H('sanksi-bunga', { pasal: '9-2a', mulai: '2026-09-15', akhir: '2026-10-20' }));
    assert.equal(nilai(c, 'Tarif per bulan'), 0.0101);
    assert.ok(c.peringatan.some(p => p.includes('pendekatan')));
  });
  it('UKP.ref.kmkBunga melengkapi tabel internal', () => {
    UKP.ref = { kmkBunga: [{ kmk: 'KMK uji', periode: '2026-02', tarif: { '5': 0.0095 } }] };
    const r = ok(H('sanksi-bunga'));
    assert.equal(utama(r).nilai, 570000);
    assert.deepEqual(r.peringatan, []);
  });
  it('galat: tanggal terbalik/tidak valid, pokok kosong, tarif acuan negatif', () => {
    gagal(H('sanksi-bunga', { mulai: '2026-07-03', akhir: '2026-02-15' }));
    gagal(H('sanksi-bunga', { mulai: '2026-02-30' }));
    gagal(H('sanksi-bunga', { pokok: null }));
    gagal(H('sanksi-bunga', { tarifAcuan: -1 }));
  });
});

describe('tenggat-spt', () => {
  it('setor masa September 2026: tenggat 15 Okt, terlambat 12 hari, bunga 1 bulan', () => {
    const r = ok(H('tenggat-spt'));
    assert.equal(utama(r).nilai, '2026-10-15');
    assert.equal(nilai(r, 'Hari terlambat'), 12);
    assert.equal(nilai(r, 'Bunga Ps. 9'), 101000);
    assert.equal(nilai(r, 'Total sanksi'), 101000);
  });
  it('SPT Masa PPh: tanggal 20 tepat waktu vs terlambat sehari', () => {
    assert.equal(nilai(ok(H('tenggat-spt', { jenis: 'spt-masa-pph', tanggal: '2026-10-20' })), 'Denda Ps. 7'), 0);
    assert.equal(nilai(ok(H('tenggat-spt', { jenis: 'spt-masa-pph', tanggal: '2026-10-21' })), 'Denda Ps. 7'), 100000);
  });
  it('SPT Masa PPN: akhir bulan jatuh Sabtu → Senin 2 Nov 2026; denda Rp500.000', () => {
    const r1 = ok(H('tenggat-spt', { jenis: 'spt-masa-ppn', tanggal: '2026-11-02' }));
    assert.equal(utama(r1).nilai, '2026-11-02');
    assert.equal(nilai(r1, 'Total sanksi'), 0);
    const r2 = ok(H('tenggat-spt', { jenis: 'spt-masa-ppn', tanggal: '2026-11-03' }));
    assert.equal(nilai(r2, 'Denda Ps. 7'), 500000);
    assert.equal(nilai(r2, 'Total sanksi'), 601000);
  });
  it('setoran yang jatuh hari Minggu bergeser ke Senin', () => {
    const r = ok(H('tenggat-spt', { masa: '2026-02', tanggal: '2026-03-16' }));
    assert.equal(utama(r).nilai, '2026-03-16');
    assert.equal(nilai(r, 'Hari terlambat'), 0);
  });
  it('SPT Tahunan OP 2025: 31 Mar 2026, denda Rp100.000 + bunga Ps. 9(2b)', () => {
    const r = ok(H('tenggat-spt', { jenis: 'spt-op', tahun: 2025, tanggal: '2026-04-10' }));
    assert.equal(utama(r).nilai, '2026-03-31');
    assert.equal(nilai(r, 'Denda Ps. 7'), 100000);
    assert.equal(nilai(r, 'Bunga Ps. 9'), 101000);
    assert.ok(r.peringatan.length > 0);
  });
  it('SPT Tahunan Badan 2025: 30 Apr 2026, denda Rp1.000.000', () => {
    const r = ok(H('tenggat-spt', { jenis: 'spt-badan', tahun: 2025, tanggal: '2026-05-04', pokok: 0 }));
    assert.equal(utama(r).nilai, '2026-04-30');
    assert.equal(nilai(r, 'Total sanksi'), 1000000);
  });
  it('terlambat beberapa bulan: bunga dihitung per bulan penuh', () => {
    const r = ok(H('tenggat-spt', { tanggal: '2027-01-20' }));
    assert.equal(nilai(r, 'Bulan bunga'), 4);
    assert.equal(nilai(r, 'Bunga Ps. 9'), 404000);
  });
  it('tarif acuan mengubah bunga', () => {
    assert.equal(nilai(ok(H('tenggat-spt', { tarifAcuan: 6 })), 'Bunga Ps. 9'), 92000);
  });
  it('galat: masa tidak valid, tanggal tidak valid, tahun tidak valid', () => {
    gagal(H('tenggat-spt', { masa: '2026-13' }));
    gagal(H('tenggat-spt', { masa: 'Sept 2026' }));
    gagal(H('tenggat-spt', { tanggal: 'kemarin' }));
    gagal(H('tenggat-spt', { jenis: 'spt-op', tahun: null }));
  });
});

describe('ppn', () => {
  it('acuan: Rp100.000.000 non-mewah → DPP 11/12 → PPN Rp11.000.000', () => {
    const r = ok(H('ppn', { harga: 100000000 }));
    assert.equal(nilai(r, 'DPP PPN'), 91666667);
    assert.equal(nilai(r, 'PPN keluaran'), 11000000);
  });
  it('contoh riset Rp10.000.000 → DPP Rp9.166.667, PPN Rp1.100.000', () => {
    const r = ok(H('ppn', { harga: 10000000, pm: 0 }));
    assert.equal(nilai(r, 'DPP PPN'), 9166667);
    assert.equal(utama(r).nilai, 1100000);
  });
  it('default: kurang bayar = PK − PM', () => {
    assert.equal(utama(ok(H('ppn'))).nilai, 6600000);
  });
  it('barang mewah: PPN 12% penuh + PPnBM', () => {
    const r = ok(H('ppn', { mewah: true, tarifPpnbm: 20 }));
    assert.equal(nilai(r, 'DPP PPN'), 100000000);
    assert.equal(nilai(r, 'PPN keluaran'), 12000000);
    assert.equal(nilai(r, 'PPnBM'), 20000000);
    assert.equal(nilai(r, 'Tarif efektif'), 0.12);
  });
  it('lebih bayar bukan akhir tahun buku → kompensasi', () => {
    const r = ok(H('ppn', { pm: 15000000 }));
    assert.equal(utama(r).label, 'PPN lebih bayar');
    assert.equal(utama(r).nilai, 4000000);
    assert.ok(nilai(r, 'Saran').startsWith('Kompensasikan'));
  });
  it('lebih bayar akhir tahun buku → restitusi', () => {
    assert.ok(nilai(ok(H('ppn', { pm: 15000000, akhirTahunBuku: true })), 'Saran').includes('restitusi'));
  });
  it('kompensasi masa sebelumnya mengurangi kurang bayar', () => {
    assert.equal(utama(ok(H('ppn', { kompensasi: 2000000 }))).nilai, 4600000);
  });
  it('harga nol → nihil', () => {
    const r = ok(H('ppn', { harga: 0, pm: 0 }));
    assert.equal(utama(r).nilai, 0);
    assert.ok(nilai(r, 'Saran').startsWith('Nihil'));
  });
  it('mewah tanpa tarif PPnBM memberi peringatan', () => {
    assert.ok(ok(H('ppn', { mewah: true })).peringatan.length > 0);
  });
  it('galat: harga kosong/negatif, PM negatif', () => {
    gagal(H('ppn', { harga: null }));
    gagal(H('ppn', { harga: -5 }));
    gagal(H('ppn', { pm: -1 }));
  });
});

describe('potput', () => {
  it('jasa kepada badan ber-NPWP → PPh 23 2% (BPPU)', () => {
    const r = ok(H('potput'));
    assert.equal(utama(r).nilai, 1000000);
    assert.equal(nilai(r, 'Pasal'), 'PPh Pasal 23');
    assert.equal(nilai(r, 'Bukti potong'), 'BPPU');
  });
  it('badan tanpa NPWP → tarif 100% lebih tinggi', () => {
    assert.equal(utama(ok(H('potput', { npwp: false }))).nilai, 2000000);
  });
  it('jasa kepada OP → PPh 21 bukan pegawai Ps. 17 × 50% bruto; tanpa NPWP 120%', () => {
    const r = ok(H('potput', { penerima: 'op' }));
    assert.equal(utama(r).nilai, 1250000);
    assert.equal(nilai(r, 'Bukti potong'), 'BP21');
    assert.equal(utama(ok(H('potput', { penerima: 'op', npwp: false }))).nilai, 1500000);
  });
  it('WPLN: PPh 26 20% tanpa SKD, tarif P3B dengan SKD', () => {
    const r = ok(H('potput', { penerima: 'wpln', transaksi: 'royalti' }));
    assert.equal(utama(r).nilai, 10000000); assert.equal(nilai(r, 'Bukti potong'), 'BPNR');
    assert.equal(utama(ok(H('potput', { penerima: 'wpln', transaksi: 'royalti', skd: true, tarifP3b: 10 }))).nilai, 5000000);
  });
  it('sewa tanah/bangunan → PPh 4(2) 10% final, tanpa kenaikan bila tanpa NPWP', () => {
    const r = ok(H('potput', { transaksi: 'sewa-tanah-bangunan', npwp: false }));
    assert.equal(utama(r).nilai, 5000000); assert.equal(nilai(r, 'Sifat'), 'Final');
  });
  it('jasa konstruksi menurut kualifikasi PP 9/2022', () => {
    const k = q => utama(ok(H('potput', { transaksi: 'konstruksi', kualifikasi: q }))).nilai;
    assert.equal(k('kecil'), 875000); assert.equal(k('menengah-besar'), 1325000);
    assert.equal(k('tanpa-sertifikat'), 2000000); assert.equal(k('konsultansi'), 1750000); assert.equal(k('konsultansi-tanpa'), 3000000);
  });
  it('dividen: badan DN bukan objek, OP 10% final kecuali diinvestasikan, WPLN 20%', () => {
    assert.equal(utama(ok(H('potput', { transaksi: 'dividen', penerima: 'badan' }))).nilai, 0);
    assert.equal(utama(ok(H('potput', { transaksi: 'dividen', penerima: 'op' }))).nilai, 5000000);
    assert.equal(utama(ok(H('potput', { transaksi: 'dividen', penerima: 'op', investasiDividen: true }))).nilai, 0);
    assert.equal(utama(ok(H('potput', { transaksi: 'dividen', penerima: 'wpln' }))).nilai, 10000000);
  });
  it('royalti dan bunga pinjaman kepada badan DN → PPh 23 15%', () => {
    assert.equal(utama(ok(H('potput', { transaksi: 'royalti' }))).nilai, 7500000);
    assert.equal(utama(ok(H('potput', { transaksi: 'bunga' }))).nilai, 7500000);
  });
  it('PPh 22 bendahara: ≤ Rp2 juta tidak dipungut, 1,5%, tanpa NPWP 3%', () => {
    assert.equal(utama(ok(H('potput', { transaksi: 'pembelian-bendahara', bruto: 2000000 }))).nilai, 0);
    assert.equal(utama(ok(H('potput', { transaksi: 'pembelian-bendahara', bruto: 10000000 }))).nilai, 150000);
    assert.equal(utama(ok(H('potput', { transaksi: 'pembelian-bendahara', bruto: 10000000, npwp: false }))).nilai, 300000);
  });
  it('PPh final lain: hadiah undian 25%, bunga deposito 20%, pengalihan tanah 2,5%', () => {
    assert.equal(utama(ok(H('potput', { transaksi: 'hadiah-undian' }))).nilai, 12500000);
    assert.equal(utama(ok(H('potput', { transaksi: 'bunga-deposito' }))).nilai, 10000000);
    assert.equal(utama(ok(H('potput', { transaksi: 'pengalihan-tanah', penerima: 'op' }))).nilai, 1250000);
  });
  it('hadiah lomba kepada OP → PPh 21 Ps. 17 × bruto dengan peringatan ◐', () => {
    const r = ok(H('potput', { transaksi: 'hadiah', penerima: 'op' }));
    assert.equal(utama(r).nilai, 2500000);
    assert.ok(r.peringatan.length > 0);
  });
  it('galat: bruto kosong, penerima asing, tarif P3B > 100%', () => {
    gagal(H('potput', { bruto: null }));
    gagal(H('potput', { penerima: 'x' }));
    gagal(H('potput', { penerima: 'wpln', skd: true, tarifP3b: 150 }));
  });
});

describe('pesangon', () => {
  it('default Rp150 juta → Rp10.000.000', () => {
    assert.equal(utama(ok(H('pesangon'))).nilai, 10000000);
  });
  it('batas lapisan Rp50 juta dan Rp100 juta', () => {
    assert.equal(utama(ok(H('pesangon', { jumlah: 50000000 }))).nilai, 0);
    assert.equal(utama(ok(H('pesangon', { jumlah: 100000000 }))).nilai, 2500000);
  });
  it('lapisan 25% di atas Rp500 juta', () => {
    assert.equal(utama(ok(H('pesangon', { jumlah: 600000000 }))).nilai, 87500000);
  });
  it('manfaat pensiun/JHT sekaligus 0%/5%', () => {
    assert.equal(utama(ok(H('pesangon', { jenis: 'pensiun' }))).nilai, 5000000);
    assert.equal(utama(ok(H('pesangon', { jenis: 'pensiun', jumlah: 50000000 }))).nilai, 0);
  });
  it('pembayaran bertahap memakai jumlah kumulatif', () => {
    const r = ok(H('pesangon', { jumlah: 70000000, sudahDibayar: 80000000 }));
    assert.equal(utama(r).nilai, 8500000);
    assert.equal(nilai(r, 'PPh final atas jumlah kumulatif'), 10000000);
  });
  it('tahun ketiga dst. → tarif Ps. 17 + peringatan ◐', () => {
    const r = ok(H('pesangon', { jumlah: 100000000, tahunKetiga: true }));
    assert.equal(utama(r).nilai, 9000000);
    assert.ok(r.peringatan.some(p => p.includes('◐')));
  });
  it('tarif efektif pembayaran', () => {
    assert.equal(nilai(ok(H('pesangon', { jumlah: 200000000 })), 'Tarif efektif'), 0.0875);
  });
  it('galat: jumlah kosong/negatif, jenis asing', () => {
    gagal(H('pesangon', { jumlah: null }));
    gagal(H('pesangon', { jumlah: -1 }));
    gagal(H('pesangon', { jenis: 'bonus' }));
  });
});

describe('denda-keberatan', () => {
  it('keberatan ditolak: 30% × (Rp500 jt − Rp200 jt) = Rp90.000.000', () => {
    assert.equal(utama(ok(H('denda-keberatan'))).nilai, 90000000);
  });
  it('banding ditolak: 60%', () => {
    assert.equal(utama(ok(H('denda-keberatan', { jalur: 'banding' }))).nilai, 180000000);
  });
  it('putusan PK menambah pajak: 60%', () => {
    assert.equal(utama(ok(H('denda-keberatan', { jalur: 'pk' }))).nilai, 180000000);
  });
  it('mengajukan banding → denda 30% tidak dikenakan', () => {
    const r = ok(H('denda-keberatan', { ajukanBanding: true }));
    assert.equal(utama(r).nilai, 0);
    assert.ok(r.peringatan.length > 0);
  });
  it('pajak menurut keputusan tidak melebihi yang dibayar → nihil', () => {
    assert.equal(utama(ok(H('denda-keberatan', { pajakKeputusan: 150000000 }))).nilai, 0);
  });
  it('pembulatan ke rupiah penuh', () => {
    assert.equal(utama(ok(H('denda-keberatan', { pajakKeputusan: 333333, dibayar: 0 }))).nilai, 100000);
  });
  it('sisa pokok + denda', () => {
    assert.equal(nilai(ok(H('denda-keberatan')), 'Sisa pokok + denda'), 390000000);
  });
  it('galat: nilai kosong dan jalur asing', () => {
    gagal(H('denda-keberatan', { dibayar: null }));
    gagal(H('denda-keberatan', { jalur: 'gugatan' }));
  });
});

describe('ppsp', () => {
  it('jadwal default dari SKP terbit 1 Jul 2026', () => {
    const r = ok(H('ppsp'));
    assert.equal(utama(r).nilai, '2026-07-31');
    assert.equal(nilai(r, 'Surat Teguran'), '2026-08-08');
    assert.equal(nilai(r, 'Surat Paksa'), '2026-08-30');
    assert.equal(nilai(r, 'Penyitaan'), '2026-09-01');
    assert.equal(nilai(r, 'Pengumuman lelang'), '2026-09-15');
    assert.equal(nilai(r, 'Lelang'), '2026-09-29');
  });
  it('WP usaha kecil: jatuh tempo 2 bulan', () => {
    assert.equal(utama(ok(H('ppsp', { usahaKecil: true }))).nilai, '2026-08-31');
  });
  it('jadwal dari SKP terbit 10 Mar 2026', () => {
    const r = ok(H('ppsp', { terbit: '2026-03-10' }));
    assert.deepEqual(r.hasil.slice(0, 6).map(h => h.nilai), ['2026-04-09', '2026-04-17', '2026-05-09', '2026-05-11', '2026-05-25', '2026-06-08']);
  });
  it('penyanderaan hanya bila utang ≥ Rp100 juta', () => {
    assert.equal(nilai(ok(H('ppsp')), 'Penyanderaan paling cepat'), '2026-09-13');
    const r = ok(H('ppsp', { utang: 99000000 }));
    assert.equal(nilai(r, 'Penyanderaan').startsWith('Tidak memenuhi'), true);
  });
  it('daluwarsa penagihan 5 tahun', () => {
    assert.equal(nilai(ok(H('ppsp')), 'Daluwarsa'), '2031-07-01');
    assert.equal(nilai(ok(H('ppsp', { terbit: '2027-12-15' })), 'Daluwarsa'), '2032-12-15');
  });
  it('akhir bulan: terbit 31 Jan → jatuh tempo 28 Feb', () => {
    assert.equal(utama(ok(H('ppsp', { terbit: '2026-01-31' }))).nilai, '2026-02-28');
  });
  it('lintas tahun: terbit 15 Des 2027 → jatuh tempo 14 Jan 2028', () => {
    assert.equal(utama(ok(H('ppsp', { terbit: '2027-12-15' }))).nilai, '2028-01-14');
  });
  it('ditandai ◐ dengan peringatan, galat untuk tanggal tidak valid', () => {
    const k = UKP.kalkulatorByJenis('ppsp');
    assert.equal(k.verifikasi, '◐'); assert.ok(k.peringatan.length > 0);
    gagal(H('ppsp', { terbit: null }));
    gagal(H('ppsp', { utang: -5 }));
  });
});

describe('pph-badan', () => {
  it('acuan PT A: bruto Rp30 M, PKP Rp3 M → Rp607.200.000', () => {
    const r = ok(H('pph-badan', { bruto: 30000000000, pkp: 3000000000 }));
    assert.equal(utama(r).nilai, 607200000);
    assert.equal(nilai(r, 'PKP fasilitas'), 480000000);
    assert.equal(nilai(r, 'PKP non-fasilitas'), 2520000000);
  });
  it('contoh PT B: bruto ≤ Rp4,8 M → 11% × PKP', () => {
    assert.equal(utama(ok(H('pph-badan', { bruto: 4000000000, pkp: 500000000 }))).nilai, 55000000);
  });
  it('bruto > Rp50 M → 22% penuh', () => {
    assert.equal(utama(ok(H('pph-badan', { bruto: 60000000000, pkp: 3000000000 }))).nilai, 660000000);
  });
  it('bruto tepat Rp50 M masih mendapat fasilitas', () => {
    assert.equal(utama(ok(H('pph-badan', { bruto: 50000000000, pkp: 1000000000 }))).nilai, 209440000);
  });
  it('bruto tepat Rp4,8 M → seluruh PKP 11%', () => {
    assert.equal(utama(ok(H('pph-badan', { bruto: 4800000000, pkp: 400000000 }))).nilai, 44000000);
  });
  it('Perseroan Terbuka 19%', () => {
    assert.equal(utama(ok(H('pph-badan', { bruto: 100000000000, pkp: 1000000000, tbk: true }))).nilai, 190000000);
  });
  it('PPh 29 dan angsuran PPh 25 (default)', () => {
    const r = ok(H('pph-badan'));
    assert.equal(nilai(r, 'PPh Ps. 29'), 77200000);
    assert.equal(nilai(r, 'Angsuran PPh 25'), 46433333);
  });
  it('lebih bayar → PPh 28A', () => {
    assert.equal(nilai(ok(H('pph-badan', { pph25: 700000000 })), 'PPh Ps. 28A'), 142800000);
  });
  it('PKP negatif → nihil + peringatan; PKP dibulatkan ke bawah ribuan', () => {
    const r = ok(H('pph-badan', { pkp: -500000000 }));
    assert.equal(utama(r).nilai, 0); assert.ok(r.peringatan.length > 0);
    assert.equal(utama(ok(H('pph-badan', { pkp: 3000000999 }))).nilai, 607200000);
  });
  it('galat: bruto kosong', () => {
    gagal(H('pph-badan', { bruto: null }));
  });
});

describe('penyusutan', () => {
  it('default: kelompok 2 saldo menurun Juli 2026 → Rp30.000.000; DTL Rp1.320.000', () => {
    const r = ok(H('penyusutan'));
    assert.equal(utama(r).nilai, 30000000);
    assert.equal(nilai(r, 'Nilai sisa buku'), 210000000);
    assert.equal(nilai(r, 'Penyusutan tahun kedua'), 52500000);
    assert.equal(nilai(r, 'Beda temporer kena pajak'), 6000000);
    assert.equal(nilai(r, 'Liabilitas pajak tangguhan'), 1320000);
  });
  it('kelompok 1 garis lurus mulai Januari: 4 × Rp25.000.000', () => {
    const r = ok(H('penyusutan', { kelompok: 'k1', metode: 'gl', harga: 100000000, bulan: 1, masaKomersial: null }));
    assert.equal(utama(r).nilai, 25000000);
    assert.equal(nilai(r, 'Jumlah tahun buku'), 4);
  });
  it('kelompok 1 saldo menurun: sisa disusutkan sekaligus pada tahun terakhir', () => {
    const j = UKP.pajak.jadwalSusut(100000000, 48, 0.5, 'sm', 1, 2026);
    assert.deepEqual(j.map(x => x.susut), [50000000, 25000000, 12500000, 12500000]);
    assert.equal(j[3].sisa, 0);
  });
  it('bangunan permanen 20 tahun garis lurus', () => {
    const r = ok(H('penyusutan', { kelompok: 'bangunan-permanen', metode: 'gl', harga: 1000000000, bulan: 1 }));
    assert.equal(utama(r).nilai, 50000000);
    assert.equal(nilai(r, 'Jumlah tahun buku'), 20);
  });
  it('bangunan dengan saldo menurun → dipaksa garis lurus + peringatan', () => {
    const r = ok(H('penyusutan', { kelompok: 'bangunan-tidak-permanen', metode: 'sm', harga: 100000000, bulan: 1 }));
    assert.equal(utama(r).nilai, 10000000);
    assert.ok(r.peringatan.length > 0);
  });
  it('bangunan permanen masa manfaat sebenarnya 30 tahun', () => {
    const r = ok(H('penyusutan', { kelompok: 'bangunan-permanen', metode: 'gl', harga: 900000000, bulan: 1, masaSebenarnya: 30 }));
    assert.equal(utama(r).nilai, 30000000);
    assert.equal(nilai(r, 'Jumlah tahun buku'), 30);
  });
  it('mulai Oktober: tahun pertama pro rata 3 bulan; komersial lebih cepat → DTA', () => {
    const r = ok(H('penyusutan', { kelompok: 'k3', metode: 'gl', harga: 160000000, bulan: 10 }));
    assert.equal(utama(r).nilai, 2500000);
    assert.equal(nilai(r, 'Jumlah tahun buku'), 17);
    assert.equal(nilai(r, 'Beda temporer dapat dikurangkan'), 5500000);
    assert.equal(nilai(r, 'Aset pajak tangguhan'), 1210000);
  });
  it('jumlah penyusutan selalu sama dengan harga perolehan', () => {
    for (const kel of Object.keys(UKP.tabel.penyusutan)) {
      const p = UKP.tabel.penyusutan[kel];
      for (const m of ['gl', 'sm']) {
        if (m === 'sm' && !p.sm) continue;
        for (const b of [1, 6, 12]) {
          const j = UKP.pajak.jadwalSusut(123456789, p.masa * 12, m === 'sm' ? p.sm : p.gl, m, b, 2026);
          assert.equal(j.reduce((s, x) => s + x.susut, 0), 123456789, kel + ' ' + m + ' bulan ' + b);
          assert.equal(j[j.length - 1].sisa, 0);
        }
      }
    }
  });
  it('galat: harga kosong, bulan 13, masa sebenarnya ≤ 20', () => {
    gagal(H('penyusutan', { harga: null }));
    gagal(H('penyusutan', { bulan: 13 }));
    gagal(H('penyusutan', { kelompok: 'bangunan-permanen', masaSebenarnya: 15 }));
  });
});

describe('pajak-tangguhan', () => {
  it('contoh riset: DTL Rp4,4 jt, DTA Rp11 jt → manfaat Rp6,6 jt', () => {
    const r = ok(H('pajak-tangguhan'));
    assert.equal(utama(r).label, 'Manfaat pajak tangguhan');
    assert.equal(utama(r).nilai, 6600000);
    assert.equal(nilai(r, 'Liabilitas'), 4400000);
    assert.equal(nilai(r, 'Aset'), 11000000);
    assert.equal(nilai(r, 'Total beban'), 93400000);
  });
  it('hanya beda kena pajak → beban', () => {
    const r = ok(H('pajak-tangguhan', { bedaDikurangkan: 0 }));
    assert.equal(utama(r).label, 'Beban pajak tangguhan');
    assert.equal(utama(r).nilai, 4400000);
  });
  it('tarif 19%', () => {
    const r = ok(H('pajak-tangguhan', { tarif: 19 }));
    assert.equal(nilai(r, 'Liabilitas'), 3800000);
    assert.equal(nilai(r, 'Aset'), 9500000);
  });
  it('rugi fiskal menambah DTA + peringatan', () => {
    const r = ok(H('pajak-tangguhan', { rugiFiskal: 100000000 }));
    assert.equal(nilai(r, 'Aset'), 33000000);
    assert.ok(r.peringatan.length > 0);
  });
  it('pembalikan (nilai negatif) menghasilkan jurnal pemulihan', () => {
    const r = ok(H('pajak-tangguhan', { bedaKenaPajak: -20000000, bedaDikurangkan: 0 }));
    assert.equal(nilai(r, 'Liabilitas'), -4400000);
    assert.equal(utama(r).label, 'Manfaat pajak tangguhan');
    assert.ok(r.jejak.some(j => j[0].includes('pemulihan')));
  });
  it('jejak memuat jurnal DTL dan DTA', () => {
    const r = ok(H('pajak-tangguhan'));
    assert.ok(r.jejak.some(j => j[0].includes('Cr Liabilitas Pajak Tangguhan')));
    assert.ok(r.jejak.some(j => j[0].includes('Dr Aset Pajak Tangguhan')));
  });
  it('tanpa pajak kini → total = neto tangguhan', () => {
    assert.equal(nilai(ok(H('pajak-tangguhan', { pajakKini: 0, bedaDikurangkan: 0 })), 'Total beban'), 4400000);
  });
  it('galat: tarif kosong/di atas 100%', () => {
    gagal(H('pajak-tangguhan', { tarif: null }));
    gagal(H('pajak-tangguhan', { tarif: 120 }));
  });
});

describe('der', () => {
  it('contoh riset DER 5:1 → Rp800 jt diakui, koreksi Rp200 jt', () => {
    const r = ok(H('der'));
    assert.equal(utama(r).nilai, 800000000);
    assert.equal(nilai(r, 'Koreksi'), 200000000);
    assert.equal(nilai(r, 'DER'), '5,00 : 1');
  });
  it('DER ≤ 4:1 → seluruh biaya diakui', () => {
    assert.equal(utama(ok(H('der', { utang: 8000000000 }))).nilai, 1000000000);
  });
  it('modal ≤ 0 → tidak ada biaya diakui', () => {
    const r = ok(H('der', { modal: -100000000 }));
    assert.equal(utama(r).nilai, 0);
    assert.equal(nilai(r, 'Koreksi'), 1000000000);
  });
  it('WP dikecualikan → seluruh biaya diakui', () => {
    assert.equal(utama(ok(H('der', { dikecualikan: true }))).nilai, 1000000000);
  });
  it('tanpa utang → seluruh biaya diakui', () => {
    assert.equal(utama(ok(H('der', { utang: 0 }))).nilai, 1000000000);
  });
  it('DER 6:1 → 4/6 biaya', () => {
    assert.equal(utama(ok(H('der', { utang: 12000000000, biaya: 900000000 }))).nilai, 600000000);
  });
  it('pembulatan ke rupiah penuh', () => {
    assert.equal(utama(ok(H('der', { utang: 3000000000, modal: 700000000, biaya: 100000000 }))).nilai, 93333333);
  });
  it('galat: input kosong/negatif', () => {
    gagal(H('der', { utang: null }));
    gagal(H('der', { biaya: -1 }));
  });
});

describe('pph24', () => {
  it('acuan PT C: kredit PPh 24 Rp270.000.000', () => {
    const r = ok(H('pph24'));
    assert.equal(utama(r).nilai, 270000000);
    assert.equal(nilai(r, 'PKP'), 3500000000);
    assert.equal(nilai(r, 'PPh terutang'), 770000000);
    assert.equal(nilai(r, 'Kredit negara 1'), 220000000);
    assert.equal(nilai(r, 'Kredit negara 2'), 50000000);
    assert.equal(nilai(r, 'PPh setelah kredit'), 500000000);
  });
  it('pajak LN di bawah batas dikreditkan penuh', () => {
    const r = ok(H('pph24', { pajak1: 100000000, neto2: 0, pajak2: 0, neto3: 0 }));
    assert.equal(nilai(r, 'PKP'), 3000000000);
    assert.equal(utama(r).nilai, 100000000);
    assert.deepEqual(r.peringatan, []);
  });
  it('rugi negara lain tidak mengurangi PKP', () => {
    assert.equal(nilai(ok(H('pph24', { neto3: -900000000 })), 'PKP'), 3500000000);
  });
  it('tarif 25% mengubah batas', () => {
    assert.equal(utama(ok(H('pph24', { tarif: 25 }))).nilai, 300000000);
  });
  it('neto DN rugi: batas dibatasi PPh terutang', () => {
    const r = ok(H('pph24', { netoDn: -500000000, neto2: 0, pajak2: 0, neto3: 0 }));
    assert.equal(nilai(r, 'PKP'), 500000000);
    assert.equal(utama(r).nilai, 110000000);
  });
  it('PKP nihil → tanpa kredit', () => {
    assert.equal(utama(ok(H('pph24', { netoDn: -2000000000, neto2: 0, pajak2: 0, neto3: 0 }))).nilai, 0);
  });
  it('kelebihan pajak LN diperingatkan', () => {
    assert.ok(ok(H('pph24')).peringatan.some(p => p.includes('Rp80.000.000')));
  });
  it('galat: neto DN kosong, pajak LN negatif', () => {
    gagal(H('pph24', { netoDn: null }));
    gagal(H('pph24', { pajak1: -1 }));
  });
});

describe('bpt', () => {
  it('acuan: BUT PKP Rp1 M, tarif domestik → Rp156.000.000', () => {
    const r = ok(H('bpt'));
    assert.equal(utama(r).nilai, 156000000);
    assert.equal(nilai(r, 'Laba setelah pajak'), 780000000);
  });
  it('acuan: P3B Singapura 10% → Rp78.000.000', () => {
    assert.equal(utama(ok(H('bpt', { tarifP3b: 10 }))).nilai, 78000000);
  });
  it('seluruh laba ditanamkan kembali → nihil', () => {
    assert.equal(utama(ok(H('bpt', { ditanamKembali: 780000000 }))).nilai, 0);
  });
  it('sebagian ditanamkan kembali → tidak mengurangi dasar (PMK 14/PMK.03/2011 Pasal 1 ayat (3))', () => {
    const r = ok(H('bpt', { ditanamKembali: 280000000 }));
    assert.equal(utama(r).nilai, 156000000);
    assert.equal(nilai(r, 'Dasar BPT'), 780000000);
    assert.ok(r.peringatan.some(x => /sebagian/.test(x)));
  });
  it('soal A3-100: PKP Rp6 M, tarif 22%, P3B 10%, tanam kembali Rp1,68 M (sebagian) → Rp468.000.000', () => {
    assert.equal(utama(ok(H('bpt', { pkp: 6000000000, tarifBadan: 22, tarifP3b: 10, ditanamKembali: 1680000000 }))).nilai, 468000000);
  });
  it('ditanam kembali melebihi laba → dianggap seluruhnya + peringatan', () => {
    const r = ok(H('bpt', { ditanamKembali: 900000000 }));
    assert.equal(utama(r).nilai, 0); assert.ok(r.peringatan.length > 0);
  });
  it('PKP nol → nihil', () => {
    assert.equal(utama(ok(H('bpt', { pkp: 0 }))).nilai, 0);
  });
  it('tarif badan 20% dan total beban', () => {
    const r = ok(H('bpt', { tarifBadan: 20 }));
    assert.equal(utama(r).nilai, 160000000);
    assert.equal(nilai(r, 'Total beban'), 360000000);
  });
  it('galat: PKP kosong, tarif P3B tidak wajar', () => {
    gagal(H('bpt', { pkp: null }));
    gagal(H('bpt', { tarifP3b: 150 }));
  });
});

describe('pbb-bphtb', () => {
  it('contoh riset PBB-P5L perkebunan → Rp103.976.000', () => {
    assert.equal(utama(ok(H('pbb-bphtb'))).nilai, 103976000);
  });
  it('PBB-P5L sektor lainnya NJOP < Rp1 M → NJKP 20%', () => {
    const r = ok(H('pbb-bphtb', { sektor: 'lainnya', njopBumi: 800000000, njopBangunan: 100000000 }));
    assert.equal(nilai(r, 'NJKP'), 0.20);
    assert.equal(utama(r).nilai, 888000);
  });
  it('PBB-P5L sektor lainnya NJOP ≥ Rp1 M → NJKP 40%', () => {
    assert.equal(nilai(ok(H('pbb-bphtb', { sektor: 'lainnya', njopBumi: 900000000, njopBangunan: 100000000 })), 'NJKP'), 0.40);
  });
  it('PBB-P2 DKI hunian (40%) → Rp4.000.000', () => {
    assert.equal(utama(ok(H('pbb-bphtb', { jenis: 'pbb-p2' }))).nilai, 4000000);
  });
  it('PBB-P2 non-hunian (60%) → Rp6.000.000', () => {
    assert.equal(utama(ok(H('pbb-bphtb', { jenis: 'pbb-p2', njkpP2: 60 }))).nilai, 6000000);
  });
  it('BPHTB jual beli NPOP Rp1 M → Rp46.000.000', () => {
    assert.equal(utama(ok(H('pbb-bphtb', { jenis: 'bphtb' }))).nilai, 46000000);
  });
  it('BPHTB: NPOP < NJOP → dipakai NJOP', () => {
    assert.equal(utama(ok(H('pbb-bphtb', { jenis: 'bphtb', npop: 1000000000, njopBphtb: 1200000000 }))).nilai, 56000000);
  });
  it('BPHTB waris NPOPTKP Rp350 juta → Rp82.500.000', () => {
    assert.equal(utama(ok(H('pbb-bphtb', { jenis: 'bphtb', npop: 2000000000, njopBphtb: 0, npoptkp: 350000000 }))).nilai, 82500000);
  });
  it('NJOP ≤ NJOPTKP → nihil; tarif P2 di atas 0,5% diperingatkan', () => {
    assert.equal(utama(ok(H('pbb-bphtb', { jenis: 'pbb-p2', njopP2: 50000000 }))).nilai, 0);
    assert.ok(ok(H('pbb-bphtb', { jenis: 'pbb-p2', tarifP2: 1 })).peringatan.length > 0);
  });
  it('ditandai ◐; galat untuk input kosong dan jenis asing', () => {
    assert.equal(UKP.kalkulatorByJenis('pbb-bphtb').verifikasi, '◐');
    gagal(H('pbb-bphtb', { njopBumi: null }));
    gagal(H('pbb-bphtb', { jenis: 'bphtb', npop: null }));
    gagal(H('pbb-bphtb', { jenis: 'pbb' }));
  });
});

describe('bea-meterai', () => {
  it('kuitansi Rp7.000.000 → Rp10.000', () => {
    const r = ok(H('bea-meterai'));
    assert.equal(utama(r).nilai, 10000);
    assert.equal(nilai(r, 'Status'), 'Terutang');
  });
  it('kuitansi Rp4.500.000 → tidak terutang', () => {
    const r = ok(H('bea-meterai', { nilai: 4500000 }));
    assert.equal(utama(r).nilai, 0);
    assert.equal(nilai(r, 'Status'), 'Tidak terutang');
  });
  it('tepat Rp5.000.000 → tidak terutang (harus lebih dari)', () => {
    assert.equal(utama(ok(H('bea-meterai', { nilai: 5000000 }))).nilai, 0);
  });
  it('pemeteraian kemudian → + sanksi 100% = Rp20.000', () => {
    const r = ok(H('bea-meterai', { kemudian: true }));
    assert.equal(utama(r).nilai, 20000);
    assert.equal(nilai(r, 'Sanksi'), 10000);
  });
  it('surat perjanjian dua rangkap', () => {
    assert.equal(utama(ok(H('bea-meterai', { dokumen: 'perjanjian', jumlah: 2 }))).nilai, 20000);
    assert.equal(utama(ok(H('bea-meterai', { dokumen: 'perjanjian', jumlah: 2, kemudian: true }))).nilai, 40000);
  });
  it('dokumen bukan objek → nihil tanpa sanksi', () => {
    assert.equal(utama(ok(H('bea-meterai', { dokumen: 'bukan-objek', kemudian: true }))).nilai, 0);
  });
  it('alat bukti pengadilan → Rp10.000 tanpa sanksi', () => {
    const r = ok(H('bea-meterai', { dokumen: 'pengadilan', kemudian: true }));
    assert.equal(utama(r).nilai, 10000);
    assert.equal(nilai(r, 'Saat terutang'), 'Saat diajukan ke pengadilan');
  });
  it('akta notaris tidak bergantung nilai', () => {
    assert.equal(utama(ok(H('bea-meterai', { dokumen: 'akta-notaris', nilai: 100 }))).nilai, 10000);
  });
  it('galat: jumlah dokumen 0/pecahan, nilai kosong', () => {
    gagal(H('bea-meterai', { jumlah: 0 }));
    gagal(H('bea-meterai', { jumlah: 1.5 }));
    gagal(H('bea-meterai', { nilai: null }));
  });
});

// ---------------------------------------------------------------------------
// Kalkulator tambahan Tingkat C. Fixture emas dihitung manual (rincian di komentar tiap kasus).
describe('kurs', () => {
  const ADA = (r, awalan) => r.hasil.some(h => h.label.startsWith(awalan));
  it('acuan (default): PPh 26 USD 10.000 — KMK 16.250, tengah 16.180, akhir 16.420, bayar 16.300', () => {
    // DPP 10.000 × 16.250 = 162.500.000; PPh 20% = 32.500.000; buku 10.000 × 16.180 = 161.800.000
    // bagian PPh: 32.500.000 − 32.360.000 = 140.000 rugi; pos utang USD 8.000
    // belum terealisasi 8.000 × (16.420 − 16.180) = 1.920.000 rugi; terealisasi 8.000 × (16.300 − 16.420) = 960.000 laba
    const r = ok(H('kurs'));
    assert.equal(utama(r).nilai, 32500000);
    assert.match(utama(r).label, /PPh Pasal 26 20%/);
    assert.equal(nilai(r, 'DPP rupiah (kurs KMK)'), 162500000);
    assert.equal(nilai(r, 'Nilai pembukuan (kurs tengah BI)'), 161800000);
    assert.equal(nilai(r, 'Selisih nilai transaksi'), 700000);
    assert.equal(nilai(r, 'Selisih kurs atas PPh dipotong — rugi'), -140000);
    assert.equal(nilai(r, 'Selisih kurs belum terealisasi akhir periode — rugi'), -1920000);
    assert.equal(nilai(r, 'Selisih kurs terealisasi saat pembayaran — laba'), 960000);
    assert.equal(nilai(r, 'Total selisih kurs — rugi'), -1100000);
    assert.ok(r.jejak.some(j => j[0].startsWith('Pos moneter utang valas') && j[1] === 'USD 8.000 = Rp129.440.000'));
  });
  it('total selisih kurs = −(kas keluar rupiah − nilai buku); pengecoh kurs tengah dan kurs bayar tampil di jejak', () => {
    const r = ok(H('kurs'));
    const kasKeluar = 8000 * 16300 + 32500000;   // pembayaran ke vendor + setor PPh 26
    assert.equal(nilai(r, 'Total selisih kurs'), -(kasKeluar - 161800000));
    const jejak = Object.fromEntries(r.jejak);
    assert.equal(jejak['Pengecoh: pajak bila keliru memakai kurs tengah Rp16.180'], 'Rp32.360.000');
    assert.equal(jejak['Pengecoh: pajak bila keliru memakai kurs tanggal bayar Rp16.300'], 'Rp32.600.000');
    assert.match(jejak['Perlakuan fiskal'], /Pasal 4 ayat \(1\) huruf l.*Pasal 6 ayat \(1\) huruf e.*PP 94\/2010/);
  });
  it('piutang + PPh 23 2%: USD 5.000 — laba saat pemotongan, laba belum terealisasi, rugi terealisasi', () => {
    // DPP 79.000.000; PPh 1.580.000; buku 78.750.000; bagian PPh +5.000; pos USD 4.900
    // belum 4.900 × 150 = +735.000; terealisasi 4.900 × (15.700 − 15.900) = −980.000; total −240.000
    const r = ok(H('kurs', { jenisPajak: 'pph23-2', posisi: 'piutang', nilaiValas: 5000, kursKmk: 15800, kursTengah: 15750, kursAkhir: 15900, kursBayar: 15700 }));
    assert.equal(utama(r).nilai, 1580000);
    assert.equal(nilai(r, 'DPP rupiah'), 79000000);
    assert.equal(nilai(r, 'Nilai pembukuan'), 78750000);
    assert.equal(nilai(r, 'Selisih nilai transaksi'), 250000);
    assert.equal(nilai(r, 'Selisih kurs atas PPh dipotong — laba'), 5000);
    assert.equal(nilai(r, 'Selisih kurs belum terealisasi akhir periode — laba'), 735000);
    assert.equal(nilai(r, 'Selisih kurs terealisasi saat pembayaran — rugi'), -980000);
    assert.equal(nilai(r, 'Total selisih kurs — rugi'), -240000);
    assert.equal(nilai(r, 'Total selisih kurs'), 4900 * 15700 + 1580000 - 78750000);   // kas + kredit pajak − buku
  });
  it('PPN 11/12 (penjual, piutang): USD 10.000 KMK 16.000 → DPP 146.666.667, PPN 17.600.000; PPN tidak menimbulkan selisih kurs', () => {
    const r = ok(H('kurs', { jenisPajak: 'ppn', posisi: 'piutang', kursKmk: 16000, kursTengah: 15900, kursAkhir: 16100, kursBayar: 16050 }));
    assert.equal(utama(r).nilai, 17600000);
    assert.equal(nilai(r, 'DPP rupiah'), 146666667);
    assert.equal(nilai(r, 'Nilai pembukuan'), 159000000);
    assert.equal(nilai(r, 'Selisih nilai transaksi'), 1000000);
    assert.equal(ADA(r, 'Selisih kurs atas PPh dipotong'), false);
    assert.equal(nilai(r, 'Selisih kurs belum terealisasi'), 2000000);    // 10.000 × (16.100 − 15.900)
    assert.equal(nilai(r, 'Selisih kurs terealisasi'), -500000);         // 10.000 × (16.050 − 16.100)
    assert.equal(nilai(r, 'Total selisih kurs — laba'), 1500000);
    assert.ok(r.asumsi.some(a => a.includes('ekualisasi PPN')));
  });
  it('PPN harga penuh (DPP nilai lain dimatikan) → PPN 12% × Rp160.000.000 = Rp19.200.000; pengecoh kurs tengah Rp19.080.000', () => {
    const r = ok(H('kurs', { jenisPajak: 'ppn', dppNilaiLain: false, kursKmk: 16000, kursTengah: 15900, kursAkhir: null, kursBayar: null }));
    assert.equal(utama(r).nilai, 19200000);
    assert.equal(nilai(r, 'DPP rupiah'), 160000000);
    assert.equal(Object.fromEntries(r.jejak)['Pengecoh: pajak bila keliru memakai kurs tengah Rp15.900'], 'Rp19.080.000');
    assert.equal(r.hasil.length, 4, 'tanpa kurs akhir/bayar PPN tidak punya baris selisih kurs');
  });
  it('PPh 22 impor 2,5%: USD 20.000 × KMK 16.100 → Rp8.050.000; dilunasi di periode yang sama → rugi terealisasi Rp3.000.000', () => {
    const r = ok(H('kurs', { jenisPajak: 'pph22-25', nilaiValas: 20000, kursKmk: 16100, kursTengah: 16050, kursAkhir: null, kursBayar: 16200 }));
    assert.equal(utama(r).nilai, 8050000);
    assert.equal(nilai(r, 'DPP rupiah'), 322000000);
    assert.equal(ADA(r, 'Selisih kurs belum terealisasi'), false);
    assert.equal(nilai(r, 'Selisih kurs terealisasi saat pembayaran — rugi'), -3000000);   // 20.000 × (16.200 − 16.050), utang penuh
    assert.equal(nilai(r, 'Total selisih kurs'), -3000000);
    assert.ok(r.asumsi.some(a => a.includes('periode yang sama')));
  });
  it('PPh 22 impor 7,5% dan 10% (barang tertentu ◐ diperingatkan)', () => {
    const a = ok(H('kurs', { jenisPajak: 'pph22-75', nilaiValas: 20000, kursKmk: 16100 }));
    assert.equal(utama(a).nilai, 24150000);
    assert.deepEqual(a.peringatan, []);
    const b = ok(H('kurs', { jenisPajak: 'pph22-10', nilaiValas: 20000, kursKmk: 16100 }));
    assert.equal(utama(b).nilai, 32200000);
    assert.ok(b.peringatan.some(p => p.includes('◐')));
  });
  it('PPh 26 dengan tarif P3B 10% → Rp16.250.000; pos utang USD 9.000; total rugi Rp1.150.000', () => {
    const r = ok(H('kurs', { tarifP3b: 10 }));
    assert.equal(utama(r).nilai, 16250000);
    assert.match(utama(r).label, /tarif P3B/);
    assert.equal(nilai(r, 'Selisih kurs atas PPh dipotong'), -70000);     // 16.250.000 − 16.180.000
    assert.equal(nilai(r, 'Selisih kurs belum terealisasi'), -2160000);  // 9.000 × 240
    assert.equal(nilai(r, 'Selisih kurs terealisasi'), 1080000);         // 9.000 × 120
    assert.equal(nilai(r, 'Total selisih kurs'), -1150000);
  });
  it('PPh 4(2) final, sisi penerima (piutang): selisih kurs laba Rp240.000 dikoreksi fiskal negatif', () => {
    // 3.000 × 16.000 = 48.000.000; PPh 4.800.000; buku 48.300.000; bagian PPh 4.800.000 − 4.830.000 = −30.000
    // pos USD 2.700: belum +540.000; terealisasi −270.000; total +240.000
    const r = ok(H('kurs', { jenisPajak: 'pph42-10', posisi: 'piutang', nilaiValas: 3000, kursKmk: 16000, kursTengah: 16100, kursAkhir: 16300, kursBayar: 16200 }));
    assert.equal(utama(r).nilai, 4800000);
    assert.equal(nilai(r, 'Selisih nilai transaksi'), -300000);
    assert.equal(nilai(r, 'Selisih kurs atas PPh dipotong — rugi'), -30000);
    assert.equal(nilai(r, 'Total selisih kurs — laba (dikoreksi fiskal)'), 240000);
    const jejak = Object.fromEntries(r.jejak);
    assert.match(jejak['Perlakuan fiskal'], /PPh final tidak diperhitungkan/);
    assert.equal(jejak['Koreksi fiskal negatif atas selisih kurs'], 'Rp240.000');
  });
  it('kurs opsional kosong: buku memakai kurs KMK, selisih nihil (bukan −0), tanpa baris belum/terealisasi', () => {
    const r = ok(H('kurs', { jenisPajak: 'pph23-15', nilaiValas: 1000, kursKmk: 16000, kursTengah: null, kursAkhir: null, kursBayar: null }));
    assert.equal(utama(r).nilai, 2400000);
    assert.equal(nilai(r, 'Nilai pembukuan (kurs tengah kosong → kurs KMK)'), 16000000);
    assert.equal(nilai(r, 'Selisih nilai transaksi'), 0);
    assert.ok(Object.is(nilai(r, 'Selisih kurs atas PPh dipotong — nihil'), 0));
    assert.ok(Object.is(nilai(r, 'Total selisih kurs — nihil'), 0));
    assert.equal(ADA(r, 'Selisih kurs belum terealisasi') || ADA(r, 'Selisih kurs terealisasi'), false);
    assert.ok(r.asumsi.some(a => a.includes('Kurs tengah BI saat pengakuan tidak diisi')));
    assert.ok(r.asumsi.some(a => a.includes('belum dilunasi')));
  });
  it('simetri posisi: kurs naik → utang rugi, piutang laba dengan besaran sama', () => {
    const u = ok(H('kurs', { jenisPajak: 'pph23-2', posisi: 'utang' }));
    const p = ok(H('kurs', { jenisPajak: 'pph23-2', posisi: 'piutang' }));
    for (const awalan of ['Selisih kurs atas PPh', 'Selisih kurs belum terealisasi', 'Selisih kurs terealisasi', 'Total selisih kurs']) {
      assert.equal(nilai(u, awalan), -nilai(p, awalan), awalan);
    }
    assert.equal(nilai(u, 'Selisih kurs belum terealisasi'), -9800 * 240);   // pos USD 9.800 (setelah PPh 2%)
  });
  it('kurs desimal (JPY per 1 yen 1,0567) dan kode mata uang disanitasi', () => {
    // 1.000.000 × 1,0567 = 1.056.700; PPh 23 15% = 158.505; buku 1.050.000 → 157.500; bagian PPh rugi 1.005
    const r = ok(H('kurs', { jenisPajak: 'pph23-15', mataUang: ' jpy ', nilaiValas: 1000000, kursKmk: 1.0567, kursTengah: 1.05, kursAkhir: null, kursBayar: null }));
    assert.equal(utama(r).nilai, 158505);
    assert.equal(nilai(r, 'Selisih kurs atas PPh dipotong'), -1005);
    assert.ok(r.jejak.some(j => j[0] === 'Nilai rupiah = JPY 1.000.000 × kurs KMK Rp1,0567'));
    for (const mu of [123, '', null, '€!']) assert.ok(ok(H('kurs', { mataUang: mu })).jejak[1][0].startsWith('Nilai rupiah = valas 10.000'), String(mu));
  });
  it('galat: kurs KMK kosong/nol/negatif, nilai valas negatif, kurs opsional nol/negatif, pilihan asing, tarif P3B > 100%', () => {
    assert.match(gagal(H('kurs', { kursKmk: null })).galat, /kurs KMK/);
    assert.match(gagal(H('kurs', { kursKmk: 0 })).galat, /lebih dari nol/);
    gagal(H('kurs', { kursKmk: -1 }));
    gagal(H('kurs', { nilaiValas: -5 }));
    assert.match(gagal(H('kurs', { kursTengah: 0 })).galat, /lebih dari nol atau dikosongkan/);
    gagal(H('kurs', { kursAkhir: -1 }));
    gagal(H('kurs', { kursBayar: 'abc' }));
    gagal(H('kurs', { jenisPajak: 'pph99' }));
    gagal(H('kurs', { jenisPajak: 'toString' }));
    gagal(H('kurs', { posisi: 'netral' }));
    gagal(H('kurs', { tarifP3b: 150 }));
    ok(H('kurs', { jenisPajak: 'pph23-2', tarifP3b: 150 }));   // tarif P3B diabaikan selain PPh 26
  });
  it('metadata: kelompok B7, ✅, dasar hukum selisih kurs dan PP 94/2010', () => {
    const k = UKP.kalkulatorByJenis('kurs');
    assert.equal(k.kelompok, 'B7'); assert.equal(k.verifikasi, '✅'); assert.equal(k.mvp, false);
    assert.ok(k.dasarHukum.some(d => d.includes('Pasal 4 ayat (1) huruf l')));
    assert.ok(k.dasarHukum.some(d => d.includes('PP 94/2010')));
    assert.ok(k.dasarHukum.some(d => d.includes('PP 44/2022 Pasal 21')));
    assert.ok(k.dasarHukum.some(d => d.includes('KMK nilai kurs mingguan (Rabu–Selasa)')));
    assert.deepEqual(k.input.find(i => i.key === 'jenisPajak').opsi.map(o => o.nilai), ['pph26', 'pph26-5', 'pph23-2', 'pph23-15', 'pph42-10', 'pph15-264', 'ppn', 'pph22-25', 'pph22-75', 'pph22-10']);
    // input baru opsional: default tidak mengubah fixture emas
    const inp = key => k.input.find(i => i.key === key);
    assert.equal(inp('grossUp').default, false); assert.equal(inp('ppnValas').default, false); assert.equal(inp('beaMasuk').default, null);
    assert.deepEqual(inp('grossUp').tampilJika.nilai, ['pph26', 'pph26-5', 'pph23-2', 'pph23-15', 'pph42-10', 'pph15-264']);
    assert.deepEqual(inp('beaMasuk').tampilJika.nilai, ['pph22-25', 'pph22-75', 'pph22-10']);
  });

  // ---- Rumusan kurs pajak dan selisih kurs (temuan P2) ----
  it('rumusan kurs: PPh saat terutang/pemotongan (mana lebih dahulu), PPN saat faktur seharusnya dibuat, impor tanggal PIB; dasar hukum PP 44/2022 Pasal 21 dan KMK mingguan Rabu–Selasa', () => {
    const k = UKP.kalkulatorByJenis('kurs');
    const label = k.input.find(i => i.key === 'kursKmk').label + ' ' + k.input.find(i => i.key === 'kursKmk').bantu;
    assert.match(label, /faktur pajak seharusnya dibuat/);
    assert.match(label, /PIB/);
    assert.match(label, /dibayar, disediakan untuk dibayar, atau jatuh tempo/);
    assert.match(label, /Rabu–Selasa/);
    const r = ok(H('kurs'));
    assert.match(r.asumsi[0], /saat terutang\/pemotongan.*mana yang lebih dahulu.*saat faktur pajak seharusnya dibuat \(PP 44\/2022 Pasal 21\).*tanggal PIB/);
    assert.ok(r.dasarHukum.includes('PP 44/2022 Pasal 21'));
    assert.ok(r.dasarHukum.includes('KMK nilai kurs mingguan (Rabu–Selasa)'));
    const momen = j => Object.fromEntries(ok(H('kurs', { jenisPajak: j })).jejak)['Kurs KMK (mingguan, berlaku Rabu–Selasa) dipakai pada'];
    assert.match(momen('pph23-2'), /mana lebih dahulu/);
    assert.match(momen('ppn'), /faktur pajak seharusnya dibuat/);
    assert.match(momen('pph22-25'), /tanggal PIB/);
    // rumusan lama "pembuatan faktur"/"tanggal faktur" dan "selisih kurs bukan dari kurs KMK" tidak boleh muncul di mana pun
    const LARANG = /pembuatan faktur|tanggal faktur|terutang\/pemotongan\/faktur|selisih kurs bukan/i;
    for (const i of k.input) assert.ok(!LARANG.test(i.label + ' ' + (i.bantu || '')), i.key);
    for (const o of k.input.find(i => i.key === 'jenisPajak').opsi) for (const posisi of ['utang', 'piutang']) for (const sakelar of [{}, { grossUp: true }, { ppnValas: true }, { beaMasuk: 5 }]) {
      const s = ok(H('kurs', Object.assign({ jenisPajak: o.nilai, posisi }, sakelar)));
      const teks = s.asumsi.concat(s.jejak.map(x => x.join(' ')), s.hasil.map(h => h.label)).join(' | ');
      assert.ok(!LARANG.test(teks), o.nilai + '/' + posisi + ': ' + teks.match(LARANG));
    }
  });
  it('selisih kurs diukur dengan kurs buku; kurs KMK masuk hanya lewat bagian valas yang dilunasi dengan pajak rupiah; penyetoran tidak menimbulkan selisih kurs', () => {
    const r = ok(H('kurs'));
    assert.ok(r.asumsi.some(a => /Selisih kurs diukur dengan kurs pembukuan/.test(a) && /pajak \(kurs KMK\) − bagian valas \(kurs buku\)/.test(a) && /disetor atau dikreditkan tidak ada selisih kurs/.test(a)));
    const jejak = Object.fromEntries(r.jejak);
    assert.equal(jejak['Penyetoran/pengkreditan pajak rupiah Rp32.500.000'], 'tanpa selisih kurs (pajak sudah dalam rupiah)');
    const pph = r.jejak.find(j => j[0].startsWith('Selisih kurs atas PPh dipotong = pajak (kurs KMK) − bagian valas (kurs buku)'));
    assert.ok(pph && pph[1] === 'rugi Rp140.000');
    // kurs tengah kosong → kurs buku = kurs KMK → bagian PPh tidak menimbulkan selisih kurs
    assert.ok(Object.is(nilai(ok(H('kurs', { kursTengah: null })), 'Selisih kurs atas PPh dipotong — nihil'), 0));
  });

  // ---- Input opsional baru (temuan P3) ----
  it('bea masuk 10% (PPh 22 impor 2,5%): nilai impor = CIF Rp322.000.000 + BM Rp32.200.000 = Rp354.200.000 → PPh 22 Rp8.855.000; selisih kurs tidak berubah', () => {
    const dasar = { jenisPajak: 'pph22-25', nilaiValas: 20000, kursKmk: 16100, kursTengah: 16050, kursAkhir: null, kursBayar: 16200 };
    const r = ok(H('kurs', Object.assign({ beaMasuk: 10 }, dasar)));
    assert.equal(utama(r).nilai, 8855000);
    assert.equal(nilai(r, 'DPP rupiah (kurs KMK): nilai impor = CIF + bea masuk'), 354200000);
    assert.equal(nilai(r, 'Bea masuk'), 32200000);
    assert.equal(nilai(r, 'Nilai pembukuan'), 321000000);           // utang pemasok = CIF valas × kurs tengah
    assert.equal(nilai(r, 'Total selisih kurs'), -3000000);         // BM dan PPh 22 rupiah → sama seperti tanpa BM
    const jejak = Object.fromEntries(r.jejak);
    assert.equal(jejak['Bea masuk = 10% × nilai pabean Rp322.000.000'], 'Rp32.200.000');
    assert.equal(jejak['Pengecoh: pajak bila keliru memakai kurs tengah Rp16.050'], 'Rp8.827.500');   // 321 jt × 1,1 × 2,5%
    assert.ok(r.dasarHukum.some(d => d.includes('Kepabeanan')));
    assert.ok(r.asumsi.some(a => a.includes('CIF + bea masuk (10% × nilai pabean)')));
    // PPh 22 impor 7,5% dengan BM 5%: 20.000 × 16.100 × 1,05 × 7,5% = 25.357.500
    assert.equal(utama(ok(H('kurs', Object.assign({}, dasar, { jenisPajak: 'pph22-75', beaMasuk: 5 })))).nilai, 25357500);
    // kosong/0 = tanpa BM (fixture lama Rp8.050.000)
    assert.equal(utama(ok(H('kurs', Object.assign({ beaMasuk: null }, dasar)))).nilai, 8050000);
    assert.equal(utama(ok(H('kurs', Object.assign({ beaMasuk: 0 }, dasar)))).nilai, 8050000);
  });
  it('bea masuk diabaikan selain PPh 22 impor; galat bila negatif, bukan angka, atau > 500%', () => {
    const a = ok(H('kurs', { beaMasuk: 10 }));
    assert.equal(utama(a).nilai, 32500000);
    assert.equal(a.hasil.some(h => h.label.startsWith('Bea masuk')), false);
    ok(H('kurs', { beaMasuk: -1 }));   // tidak dipakai PPh 26 → tidak divalidasi
    for (const x of [-1, 'abc', 501, NaN]) assert.match(gagal(H('kurs', { jenisPajak: 'pph22-25', beaMasuk: x })).galat, /bea masuk/i, String(x));
  });
  it('gross-up PPh 26 20%: neto USD 8.000 → DPP Rp162.500.000, PPh Rp32.500.000; pos utang USD 8.000 penuh, tanpa selisih kurs atas PPh', () => {
    // 8.000 × 16.250 = 130.000.000 ÷ 0,8 = 162.500.000; PPh 32.500.000 dibayar rupiah
    // belum 8.000 × 240 = 1.920.000 rugi; terealisasi 8.000 × 120 = 960.000 laba; total rugi 960.000
    const r = ok(H('kurs', { nilaiValas: 8000, grossUp: true }));
    assert.equal(utama(r).nilai, 32500000);
    assert.match(utama(r).label, /PPh Pasal 26 20% \(gross-up\)/);
    assert.equal(nilai(r, 'DPP rupiah (kurs KMK): gross-up'), 162500000);
    assert.equal(r.hasil.some(h => h.label.startsWith('Selisih kurs atas PPh')), false);
    assert.equal(nilai(r, 'Selisih kurs belum terealisasi'), -1920000);
    assert.equal(nilai(r, 'Selisih kurs terealisasi'), 960000);
    assert.equal(nilai(r, 'Total selisih kurs — rugi'), -(8000 * 16300 - 8000 * 16180));
    assert.ok(r.jejak.some(j => j[0].startsWith('Pos moneter utang valas (neto penuh') && j[1] === 'USD 8.000 = Rp129.440.000'));
    assert.equal(Object.fromEntries(r.jejak)['DPP gross-up = neto Rp130.000.000 ÷ (1 − 20%)'], 'Rp162.500.000');
    assert.ok(r.asumsi.some(a => a.startsWith('Gross-up')));
  });
  it('gross-up dengan tarif P3B 10% dan PPh 23 2%; diabaikan untuk PPN/impor; tarif P3B 100% + gross-up → galat', () => {
    const p3b = ok(H('kurs', { nilaiValas: 9000, tarifP3b: 10, grossUp: true }));
    assert.equal(utama(p3b).nilai, 16250000);                      // 146.250.000 ÷ 0,9 = 162.500.000 × 10%
    assert.match(utama(p3b).label, /\(tarif P3B, gross-up\)/);
    const p23 = ok(H('kurs', { jenisPajak: 'pph23-2', nilaiValas: 9800, grossUp: true, kursAkhir: null, kursBayar: null }));
    assert.equal(nilai(p23, 'DPP rupiah'), 162500000);              // 159.250.000 ÷ 0,98
    assert.equal(utama(p23).nilai, 3250000);
    assert.equal(p23.hasil.length, 4, 'tanpa kurs akhir/bayar dan tanpa bagian PPh valas: tidak ada baris selisih kurs');
    const ppn = { jenisPajak: 'ppn', kursKmk: 16000 };
    assert.deepEqual(ok(H('kurs', Object.assign({ grossUp: true }, ppn))).hasil, ok(H('kurs', ppn)).hasil);
    assert.match(gagal(H('kurs', { tarifP3b: 100, grossUp: true })).galat, /Gross-up/);
    ok(H('kurs', { tarifP3b: 100 }));
  });
  it('PPN ditagih valas (penjual, piutang): bagian PPN USD 1.100 → rugi Rp110.000; pos USD 11.100; total laba Rp1.555.000', () => {
    // PPN rupiah 17.600.000 vs bagian valas 1.100 × 15.900 = 17.490.000 → rugi 110.000
    // belum 11.100 × 200 = 2.220.000; terealisasi 11.100 × (−50) = −555.000
    const r = ok(H('kurs', { jenisPajak: 'ppn', ppnValas: true, posisi: 'piutang', kursKmk: 16000, kursTengah: 15900, kursAkhir: 16100, kursBayar: 16050 }));
    assert.equal(utama(r).nilai, 17600000);
    assert.equal(nilai(r, 'Selisih kurs atas PPN ditagih valas — rugi'), -110000);
    assert.equal(nilai(r, 'Selisih kurs belum terealisasi'), 2220000);
    assert.equal(nilai(r, 'Selisih kurs terealisasi'), -555000);
    assert.equal(nilai(r, 'Total selisih kurs — laba'), 1555000);
    assert.equal(nilai(r, 'Total selisih kurs'), 11100 * 16050 - 17600000 - 159000000);   // kas valas − PPN disetor − pendapatan buku
    assert.ok(r.jejak.some(j => j[0] === 'Pos moneter piutang valas = USD 10.000 + PPN ditagih valas' && j[1] === 'USD 11.100 = Rp176.490.000'));
    assert.equal(r.hasil.length, 8);
    assert.ok(r.asumsi.some(a => a.startsWith('PPN ditagih dalam valas')));
  });
  it('PPN ditagih valas (pembeli, utang, default kurs): laba Rp77.000; harga penuh 12% → pos USD 11.200; sakelar diabaikan selain PPN', () => {
    const r = ok(H('kurs', { jenisPajak: 'ppn', ppnValas: true }));
    assert.equal(nilai(r, 'Selisih kurs atas PPN ditagih valas — laba'), 77000);   // 17.875.000 − 17.798.000
    assert.equal(nilai(r, 'Total selisih kurs — rugi'), -1255000);
    assert.equal(nilai(r, 'Total selisih kurs'), -(11100 * 16300 - 17875000 - 161800000));
    const m = ok(H('kurs', { jenisPajak: 'ppn', ppnValas: true, dppNilaiLain: false }));
    assert.equal(utama(m).nilai, 19500000);
    assert.ok(m.jejak.some(j => j[0].startsWith('Pos moneter utang valas') && j[1].startsWith('USD 11.200')));
    assert.equal(nilai(m, 'Selisih kurs atas PPN ditagih valas'), 19500000 - 19416000);
    assert.deepEqual(ok(H('kurs', { ppnValas: true })).hasil, ok(H('kurs')).hasil);   // PPh 26: diabaikan
  });
  it('PPh 15 pelayaran/penerbangan LN 2,64% final: USD 50.000 × 16.000 → Rp21.120.000; bagian PPh rugi Rp66.000; sisi penerima dikoreksi fiskal', () => {
    // 800.000.000 × 2,64% = 21.120.000; bagian valas 797.500.000 × 2,64% = 21.054.000
    const r = ok(H('kurs', { jenisPajak: 'pph15-264', nilaiValas: 50000, kursKmk: 16000, kursTengah: 15950, kursAkhir: null, kursBayar: null }));
    assert.equal(utama(r).nilai, 21120000);
    assert.match(utama(r).label, /PPh Pasal 15 2,64%/);
    assert.equal(nilai(r, 'Selisih kurs atas PPh dipotong — rugi'), -66000);
    assert.ok(r.jejak.some(j => j[0] === 'Tarif 2,64%' && /final/.test(j[1])));
    assert.ok(r.dasarHukum.some(d => d.includes('Pasal 15 UU PPh')));
    const p = ok(H('kurs', { jenisPajak: 'pph15-264', posisi: 'piutang', nilaiValas: 50000, kursKmk: 16000, kursTengah: 15950, kursAkhir: 16100, kursBayar: null }));
    // bagian PPh +66.000; pos USD 48.680 × 150 = 7.302.000; total 7.368.000 dikoreksi
    assert.equal(nilai(p, 'Total selisih kurs — laba (dikoreksi fiskal)'), 7368000);
    assert.match(Object.fromEntries(p.jejak)['Perlakuan fiskal'], /PPh final/);
    assert.ok(p.peringatan.some(w => w.startsWith('PPh Pasal 15') && w.includes('WPLN')));
  });
  it('PPh 26 ayat (2) 5% × harga jual saham oleh WPLN: USD 1.000.000 → Rp812.500.000; total rugi Rp117.500.000; tarif P3B tidak dipakai', () => {
    // 1.000.000 × 16.250 × 5%; bagian PPh 812.500.000 − 809.000.000 = 3.500.000 rugi; pos USD 950.000
    // belum 950.000 × 240 = 228.000.000 rugi; terealisasi 950.000 × 120 = 114.000.000 laba
    const r = ok(H('kurs', { jenisPajak: 'pph26-5', nilaiValas: 1000000, tarifP3b: 10 }));
    assert.equal(utama(r).nilai, 812500000);
    assert.match(utama(r).label, /PPh Pasal 26 ayat \(2\) 5%$/);
    assert.equal(nilai(r, 'Selisih kurs atas PPh dipotong — rugi'), -3500000);
    assert.equal(nilai(r, 'Total selisih kurs — rugi'), -117500000);
    assert.equal(nilai(r, 'Total selisih kurs'), -(950000 * 16300 + 812500000 - 16180000000));
    assert.ok(r.jejak.some(j => j[0] === 'Tarif 5%' && j[1].includes('20% × perkiraan penghasilan neto 25%')));
    assert.ok(r.asumsi.some(a => a.includes('P3B')));
    assert.ok(r.dasarHukum.some(d => d.includes('Pasal 26 ayat (2) UU PPh')));
  });
});

describe('gmt', () => {
  const ADA = (r, awalan) => r.hasil.some(h => h.label.startsWith(awalan));
  it('acuan (default 2025): ETR 10% → top-up 5% × (200 M − SBIE 12,4 M) = Rp9.380.000.000', () => {
    // SBIE = 9,6% × 50 M + 7,6% × 100 M = 4,8 M + 7,6 M = 12,4 M; excess 187,6 M; 5% × 187,6 M = 9,38 M
    const r = ok(H('gmt'));
    assert.equal(utama(r).nilai, 9380000000);
    assert.equal(nilai(r, 'Status ambang'), 'Dalam cakupan (≥ €750 juta)');
    assert.equal(nilai(r, 'ETR yurisdiksi'), 0.1);
    assert.equal(nilai(r, 'Top-up percentage'), 0.05);
    assert.equal(nilai(r, 'SBIE'), 12400000000);
    assert.equal(nilai(r, 'Excess profit'), 187600000000);
    assert.equal(nilai(r, 'Top-up sebelum QDMTT'), 9380000000);
    assert.equal(ADA(r, 'Keterangan'), false);
  });
  it('tahun 2026: SBIE 9,4%/7,4% = Rp12.100.000.000 → top-up Rp9.395.000.000', () => {
    const r = ok(H('gmt', { tahun: '2026' }));
    assert.equal(nilai(r, 'SBIE'), 12100000000);
    assert.equal(utama(r).nilai, 9395000000);
  });
  it('tahun 2029 memakai tabel OECD 8,2%/6,6% (bukan 8,8%/6,8%) → SBIE Rp10.700.000.000, top-up Rp9.465.000.000', () => {
    const r = ok(H('gmt', { tahun: '2029' }));
    assert.equal(nilai(r, 'SBIE'), 10700000000);
    assert.equal(utama(r).nilai, 9465000000);
  });
  it('tabel GloBE: tarif minimum 15%, ambang €750 juta, de minimis €10 juta/€1 juta, SBIE transisi 2025–2029', () => {
    const t = UKP.tabel.globe;
    assert.equal(t.tarifMinimum, 0.15); assert.equal(t.ambangEur, 750000000);
    assert.equal(t.deMinimisPendapatanEur, 10000000); assert.equal(t.deMinimisLabaEur, 1000000);
    assert.deepEqual(t.sbieTransisi, {
      '2025': { gaji: 0.096, aset: 0.076 }, '2026': { gaji: 0.094, aset: 0.074 }, '2027': { gaji: 0.092, aset: 0.072 },
      '2028': { gaji: 0.090, aset: 0.070 }, '2029': { gaji: 0.082, aset: 0.066 } });
    assert.deepEqual(UKP.kalkulatorByJenis('gmt').input.find(i => i.key === 'tahun').opsi.map(o => o.nilai), ['2025', '2026', '2027', '2028', '2029']);
  });
  it('ETR tepat 15% atau di atasnya → top-up percentage 0 dan top-up nihil', () => {
    const a = ok(H('gmt', { coveredTaxes: 30000000000 }));
    assert.equal(nilai(a, 'ETR yurisdiksi'), 0.15);
    assert.equal(nilai(a, 'Top-up percentage'), 0);
    assert.equal(utama(a).nilai, 0);
    const b = ok(H('gmt', { coveredTaxes: 32000000000 }));
    assert.equal(nilai(b, 'Top-up percentage'), 0);
    assert.equal(utama(b).nilai, 0);
  });
  it('ETR 14,9% (covered taxes Rp29,8 M) → top-up 0,1% × Rp187,6 M = Rp187.600.000', () => {
    const r = ok(H('gmt', { coveredTaxes: 29800000000 }));
    assert.equal(nilai(r, 'ETR yurisdiksi'), 0.149);
    assert.equal(nilai(r, 'Top-up percentage'), 0.001);
    assert.equal(utama(r).nilai, 187600000);
  });
  it('QDMTT dikurangkan; QDMTT melebihi top-up → nihil dengan peringatan', () => {
    assert.equal(utama(ok(H('gmt', { qdmtt: 4000000000 }))).nilai, 5380000000);
    const r = ok(H('gmt', { qdmtt: 10000000000 }));
    assert.equal(utama(r).nilai, 0);
    assert.equal(nilai(r, 'Top-up sebelum QDMTT'), 9380000000);
    assert.ok(r.peringatan.some(p => p.includes('QDMTT')));
  });
  it('SBIE melebihi GloBE income → excess profit 0, top-up nihil', () => {
    const r = ok(H('gmt', { gaji: 3000000000000 }));   // SBIE 288 M + 7,6 M > 200 M
    assert.equal(nilai(r, 'SBIE'), 295600000000);
    assert.equal(nilai(r, 'Excess profit'), 0);
    assert.equal(utama(r).nilai, 0);
  });
  it('GloBE income nol → ETR tidak dihitung (pembagi nol), top-up nihil, tanpa galat', () => {
    const r = ok(H('gmt', { globeIncome: 0 }));
    assert.equal(utama(r).nilai, 0);
    assert.equal(ADA(r, 'ETR yurisdiksi'), false);
    assert.match(nilai(r, 'Keterangan'), /pembagi nol/);
    assert.ok(r.jejak.some(j => j[1].includes('tidak terdefinisi')));
  });
  it('rugi GloBE neto → tidak ada top-up', () => {
    const r = ok(H('gmt', { globeIncome: -50000000000 }));
    assert.equal(utama(r).nilai, 0);
    assert.equal(ADA(r, 'Excess profit'), false);
    assert.match(nilai(r, 'Keterangan'), /Rugi GloBE neto/);
  });
  it('ambang: €749.999.999 di luar cakupan (top-up 0, ETR ilustrasi); tepat €750.000.000 dalam cakupan', () => {
    const luar = ok(H('gmt', { pendapatanGrup: 749999999 }));
    assert.equal(utama(luar).nilai, 0);
    assert.equal(nilai(luar, 'Status ambang'), 'Di luar cakupan (< €750 juta)');
    assert.equal(nilai(luar, 'Top-up sebelum QDMTT'), 9380000000);
    assert.match(nilai(luar, 'Keterangan'), /ilustrasi/);
    assert.equal(utama(ok(H('gmt', { pendapatanGrup: 750000000 }))).nilai, 9380000000);
  });
  it('de minimis: terpenuhi → nihil; batas €10 juta / €1 juta tidak terpenuhi → dihitung normal + peringatan', () => {
    const r = ok(H('gmt', { deMinimis: true }));   // default €8 juta dan €600 ribu
    assert.equal(utama(r).nilai, 0);
    assert.match(nilai(r, 'Keterangan'), /De minimis/);
    assert.equal(utama(ok(H('gmt', { deMinimis: true, pendapatanYurisdiksi: 5000000, labaYurisdiksi: -200000 }))).nilai, 0);
    for (const ubah of [{ labaYurisdiksi: 1000000 }, { pendapatanYurisdiksi: 10000000 }]) {
      const n = ok(H('gmt', Object.assign({ deMinimis: true }, ubah)));
      assert.equal(utama(n).nilai, 9380000000, JSON.stringify(ubah));
      assert.ok(n.peringatan.some(p => p.includes('de minimis')));
    }
  });
  it('gaji/aset kosong → SBIE 0, top-up 5% × Rp200 M = Rp10 M; covered taxes 0 → top-up 15% × excess', () => {
    const a = ok(H('gmt', { gaji: null, aset: null }));
    assert.equal(nilai(a, 'SBIE'), 0);
    assert.equal(utama(a).nilai, 10000000000);
    const b = ok(H('gmt', { coveredTaxes: 0 }));
    assert.equal(nilai(b, 'Top-up percentage'), 0.15);
    assert.equal(utama(b).nilai, 28140000000);
  });
  it('galat: covered taxes negatif, GloBE income kosong, pendapatan grup negatif, tahun asing, QDMTT negatif, de minimis tanpa data', () => {
    gagal(H('gmt', { coveredTaxes: -1 }));
    assert.match(gagal(H('gmt', { globeIncome: null })).galat, /GloBE income/);
    gagal(H('gmt', { pendapatanGrup: -1 }));
    assert.match(gagal(H('gmt', { tahun: '2030' })).galat, /2025–2029/);
    gagal(H('gmt', { tahun: 'constructor' }));
    gagal(H('gmt', { qdmtt: -5 }));
    gagal(H('gmt', { deMinimis: true, pendapatanYurisdiksi: null }));
    ok(H('gmt', { deMinimis: false, pendapatanYurisdiksi: null, labaYurisdiksi: 'x' }));   // diabaikan bila tidak dipilih
  });
  it('metadata: kelompok C9, ◐ dengan peringatan tabel SBIE Pasal 9.2 dan PMK 136/2024', () => {
    const k = UKP.kalkulatorByJenis('gmt');
    assert.equal(k.kelompok, 'C9'); assert.equal(k.verifikasi, '◐'); assert.equal(k.mvp, false);
    assert.match(k.peringatan, /9\.2/);
    assert.match(k.peringatan, /8,2/);
    assert.ok(k.dasarHukum.some(d => d.includes('PMK 136/2024')));
    assert.equal(k.input.find(i => i.key === 'porsiIIR').default, null);
  });
  it('porsiIIR 60% → IIR yang dialokasikan = Rp9.380.000.000 × 60% = Rp5.628.000.000 (8 baris); setelah QDMTT memakai top-up neto', () => {
    const r = ok(H('gmt', { porsiIIR: 60 }));
    assert.equal(utama(r).nilai, 9380000000);
    assert.equal(nilai(r, 'IIR yang dialokasikan'), 5628000000);
    assert.equal(r.hasil[1].label, 'IIR yang dialokasikan');
    assert.equal(r.hasil.length, 8);
    assert.equal(Object.fromEntries(r.jejak)['IIR yang dialokasikan = Rp9.380.000.000 × porsi kepemilikan entitas induk 60%'], 'Rp5.628.000.000');
    assert.ok(r.dasarHukum.some(d => d.includes('inclusion ratio')));
    assert.ok(r.asumsi.some(a => a.startsWith('IIR yang dialokasikan') && a.includes('Pasal 2.3')));
    assert.equal(nilai(ok(H('gmt', { porsiIIR: 60, qdmtt: 4000000000 })), 'IIR yang dialokasikan'), 3228000000);   // 5,38 M × 60%
    assert.equal(nilai(ok(H('gmt', { porsiIIR: 100 })), 'IIR yang dialokasikan'), 9380000000);
    assert.ok(Object.is(nilai(ok(H('gmt', { porsiIIR: 0 })), 'IIR yang dialokasikan'), 0));
    assert.equal(nilai(ok(H('gmt', { porsiIIR: 33.5 })), 'IIR yang dialokasikan'), 3142300000);
  });
  it('porsiIIR: kosong → tanpa baris IIR; di luar cakupan/de minimis (8 baris penuh) → IIR Rp0 dicatat di Keterangan; rugi → baris IIR Rp0; galat di luar 0–100%', () => {
    assert.equal(ok(H('gmt')).hasil.some(h => h.label.startsWith('IIR')), false);
    for (const ubah of [{ pendapatanGrup: 1 }, { deMinimis: true }]) {
      const r = ok(H('gmt', Object.assign({ porsiIIR: 60 }, ubah)));
      assert.equal(r.hasil.length, 8, JSON.stringify(ubah));
      assert.match(nilai(r, 'Keterangan'), /IIR yang dialokasikan ke entitas induk: Rp0\.$/);
    }
    assert.ok(Object.is(nilai(ok(H('gmt', { porsiIIR: 60, globeIncome: -1 })), 'IIR yang dialokasikan'), 0));
    for (const x of [-1, 100.01, 'abc', NaN]) assert.match(gagal(H('gmt', { porsiIIR: x })).galat, /Porsi kepemilikan/, String(x));
    ok(H('gmt', { porsiIIR: '' }));
  });
  it('asumsi menyatakan safe harbour CbCR dan additional current top-up tax tidak dihitung', () => {
    const r = ok(H('gmt'));
    assert.ok(r.asumsi.some(a => /^Safe harbour transisi CbCR .* tidak diuji/.test(a)));
    assert.ok(r.asumsi.some(a => /^Additional current top-up tax .* tidak dihitung/.test(a)));
    assert.ok(r.asumsi.some(a => a.includes('porsi kepemilikan diisi')));
  });
});

// ===========================================================================
// UJI ADVERSARIAL — batas lapisan, input nol/negatif/kosong/aneh, tanggal terbalik, bulan > 24,
// omzet tepat Rp4,8 M / Rp50 M, PKP di bawah Rp1.000. Galat harus lewat field `galat`, tidak pernah exception.
// ===========================================================================
const fs = require('node:fs');
const vm = require('node:vm');
const INTERNAL = /^Kesalahan internal/;
const defaultInput = k => { const v = {}; k.input.forEach(i => { v[i.key] = i.default === undefined ? null : i.default; }); return v; };
/** Panggil hitung, gagal bila melempar exception atau jatuh ke galat internal. */
function aman(k, v) {
  let r;
  assert.doesNotThrow(() => { r = k.hitung(v); }, k.jenis + ' melempar exception untuk ' + JSON.stringify(v));
  assert.ok(r && Array.isArray(r.hasil) && Array.isArray(r.jejak), k.jenis + ': bentuk keluaran');
  assert.ok(r.galat === null || typeof r.galat === 'string', k.jenis + ': galat null/string');
  assert.ok(!(r.galat && INTERNAL.test(r.galat)), k.jenis + ': exception tersembunyi — ' + r.galat + ' untuk ' + JSON.stringify(v));
  return r;
}
/** Kontrak keluaran yang sukses: 1–8 baris, tepat satu utama, angka berhingga, rupiah bulat, tanggal ISO, jejak bersih. */
function kontrakSukses(r, konteks) {
  assert.ok(r.hasil.length >= 1 && r.hasil.length <= 8, konteks + ': jumlah baris hasil ' + r.hasil.length);
  assert.equal(r.hasil.filter(h => h.utama).length, 1, konteks + ': tepat satu utama');
  for (const h of r.hasil) {
    if (['uang', 'persen', 'angka'].includes(h.format)) assert.ok(typeof h.nilai === 'number' && Number.isFinite(h.nilai), konteks + ': ' + h.label + ' = ' + h.nilai);
    if (h.format === 'uang') assert.equal(h.nilai, Math.round(h.nilai), konteks + ': rupiah bulat ' + h.label);
    if (h.format === 'tanggal') assert.match(h.nilai, /^\d{4}-\d{2}-\d{2}$/, konteks + ': tanggal ' + h.label);
  }
  for (const j of r.jejak) assert.ok(!/NaN|undefined|Infinity/.test(j.join(' ')), konteks + ': jejak rusak ' + j.join(' | '));
}

describe('adversarial: seluruh kalkulator', () => {
  for (const k of UKP.kalkulator) {
    it(k.jenis + ': default input → tanpa exception, tanpa galat, kontrak terpenuhi', () => {
      const r = aman(k, defaultInput(k));
      assert.equal(r.galat, null);
      kontrakSukses(r, k.jenis + ' default');
    });
  }
  it('hitung(undefined/null/array/teks) → galat, bukan exception', () => {
    for (const k of UKP.kalkulator) for (const v of [undefined, null, [], 'x', 42]) aman(k, v);
  });
  it('setiap input diisi nilai aneh (kosong, teks, NaN, ±Infinity, negatif, sangat besar, objek) → tidak melempar', () => {
    const ANEH = [null, undefined, '', 'abc', NaN, Infinity, -Infinity, -1, 0, 0.5, 1e15, -1e15, 1e20, true, false, {}, [], '2026-02-30', '2026-13-01', '0099-01-01', '2026-10', 13, 25];
    for (const k of UKP.kalkulator) {
      const d = defaultInput(k);
      for (const i of k.input) for (const x of ANEH) {
        const r = aman(k, Object.assign({}, d, { [i.key]: x }));
        if (!r.galat) kontrakSukses(r, k.jenis + ' ' + i.key + '=' + String(x));
      }
    }
  });
  it('semua kombinasi pilihan × sakelar dengan default → kontrak terpenuhi', () => {
    for (const k of UKP.kalkulator) {
      const sakelar = k.input.filter(i => i.tipe === 'pilihan' || i.tipe === 'boolean');
      const jalan = (idx, v) => {
        if (idx === sakelar.length) { const r = aman(k, v); assert.equal(r.galat, null, k.jenis + ' ' + JSON.stringify(v) + ': ' + r.galat); kontrakSukses(r, k.jenis); return; }
        const i = sakelar[idx];
        for (const n of (i.tipe === 'pilihan' ? i.opsi.map(o => o.nilai) : [true, false])) jalan(idx + 1, Object.assign({}, v, { [i.key]: n }));
      };
      jalan(0, defaultInput(k));
    }
  });
  it('exception tak terduga di dalam rumus dikembalikan sebagai galat "Kesalahan internal…"', () => {
    const asli = UKP.tabel.terBulanan.A;
    try {
      UKP.tabel.terBulanan.A = null; // sabotase tabel bersama → cariTer() null → TypeError di dalam hitung
      let r; assert.doesNotThrow(() => { r = H('pph21-ter', { status: 'TK0' }); });
      assert.match(r.galat, INTERNAL);
      assert.deepEqual(r.hasil, []);
    } finally { UKP.tabel.terBulanan.A = asli; }
    assert.equal(utama(ok(H('pph21-ter', { status: 'TK0' }))).nilai, 157500);
  });
});

describe('adversarial: tabel TER PP 58/2023', () => {
  const FILE = path.join(__dirname, '..', 'docs', 'research', '02a-regulasi-kup-pphop-potput.md');
  it('cocok baris demi baris dengan tabel riset 02a (A 44, B 40, C 41)', (t) => {
    if (!fs.existsSync(FILE)) return t.skip('riset 02a tidak ada');
    const md = fs.readFileSync(FILE, 'utf8');
    const potong = (a, b) => md.split(a)[1].split(b)[0];
    const bagian = { A: potong('**Kategori A (44 lapisan)**', '**Kategori B'), B: potong('**Kategori B (40 lapisan)**', '**Kategori C'), C: potong('**Kategori C (41 lapisan)**', 'Peringatan:') };
    const rp = s => Number(s.replace(/\./g, ''));
    for (const kat of ['A', 'B', 'C']) {
      const baris = [];
      for (const line of bagian[kat].split('\n')) {
        if (!line.startsWith('| ') || line.includes('| No |')) continue;
        const c = line.split('|').map(x => x.trim());
        for (const g of [c.slice(1, 4), c.slice(5, 8)]) {
          if (!/^\d+$/.test(g[0] || '')) continue;
          const atas = g[1].startsWith('s.d.') ? rp(g[1].slice(5)) : g[1].startsWith('>') ? Infinity : rp(g[1].split('–')[1].trim());
          baris[Number(g[0]) - 1] = [atas, Math.round(Number(g[2].replace(/[%✅\s]/g, '').replace(',', '.')) * 100) / 10000];
        }
      }
      assert.deepEqual(UKP.tabel.terBulanan[kat], baris, 'kategori ' + kat);
    }
  });
  it('setiap batas lapisan inklusif: tepat batas atas → tarif lapisan itu, +Rp1 → lapisan berikutnya', () => {
    const wakil = { A: 'TK0', B: 'K1', C: 'K3' };
    for (const kat of ['A', 'B', 'C']) {
      const t = UKP.tabel.terBulanan[kat];
      for (let i = 0; i < t.length - 1; i++) {
        const atas = t[i][0];
        assert.equal(UKP.pajak.ter(kat, atas).tarif, t[i][1], kat + ' ' + atas);
        assert.equal(UKP.pajak.ter(kat, atas + 1).tarif, t[i + 1][1], kat + ' ' + (atas + 1));
        const r = ok(H('pph21-ter', { status: wakil[kat], bruto: atas + 1, thr: 0 }));
        assert.equal(utama(r).nilai, Math.round((atas + 1) * t[i + 1][1]), kat + ' PPh masa pada ' + (atas + 1));
      }
    }
  });
  it('TER harian: Rp450.000 | 450.001 | 2.500.000 | 2.500.001', () => {
    const per = b => nilai(ok(H('pph21-ter', { jenisPegawai: 'harian', brutoHarian: b, hari: 1 })), 'PPh 21 per hari');
    assert.equal(per(450000), 0);
    assert.equal(per(450001), 2250);
    assert.equal(per(2500000), 12500);
    assert.equal(per(2500001), 62500); // 5% × 1.250.000,5
  });
});

describe('adversarial: pph-op', () => {
  it('PKP di bawah Rp1.000 → PKP 0 dan PPh 0; tepat Rp1.000 → Rp50', () => {
    const r = ok(H('pph-op', { status: 'TK0', neto: 54000999, kredit25: 0 }));
    assert.equal(nilai(r, 'Penghasilan Kena Pajak'), 0); assert.equal(utama(r).nilai, 0);
    assert.equal(utama(ok(H('pph-op', { status: 'TK0', neto: 54001000, kredit25: 0 }))).nilai, 50);
  });
  it('batas lapisan Ps. 17 (60 jt / 250 jt / 500 jt / 5 M) dan Rp1.000 di atasnya', () => {
    const pph = pkp => utama(ok(H('pph-op', { status: 'TK0', neto: 54000000 + pkp, kredit25: 0 }))).nilai;
    assert.equal(pph(60000000), 3000000); assert.equal(pph(60001000), 3000150);
    assert.equal(pph(250000000), 31500000); assert.equal(pph(250001000), 31500250);
    assert.equal(pph(500000000), 94000000); assert.equal(pph(500001000), 94000300);
    assert.equal(pph(5000000000), 1444000000); assert.equal(pph(5000001000), 1444000350);
  });
  it('omzet tepat Rp4,8 M (final) tanpa peringatan; Rp4,8 M + 1 dan NPPN tepat Rp4,8 M diperingatkan; omzet tepat Rp500 jt → 0', () => {
    const f = ok(H('pph-op', { metode: 'final', bruto: 4800000000 }));
    assert.equal(utama(f).nilai, 21500000); assert.deepEqual(f.peringatan, []);
    assert.ok(ok(H('pph-op', { metode: 'final', bruto: 4800000001 })).peringatan.some(p => p.includes('Rp4,8 miliar')));
    assert.ok(ok(H('pph-op', { metode: 'nppn', bruto: 4800000000, norma: 20 })).peringatan.some(p => p.includes('Rp4,8 miliar')));
    assert.equal(utama(ok(H('pph-op', { metode: 'final', bruto: 500000000 }))).nilai, 0);
  });
  it('neto rugi → PKP 0; norma > 100% / NaN / Infinity / metode asing → galat', () => {
    assert.equal(nilai(ok(H('pph-op', { neto: -100000000 })), 'Penghasilan Kena Pajak'), 0);
    gagal(H('pph-op', { metode: 'nppn', norma: 101 }));
    gagal(H('pph-op', { neto: NaN }));
    gagal(H('pph-op', { neto: Infinity }));
    gagal(H('pph-op', { metode: 'lain' }));
  });
});

describe('adversarial: pph21-ter', () => {
  it('bruto nol → semua nol; PKP Desember di bawah Rp1.000 dibulatkan ke 0', () => {
    const r0 = ok(H('pph21-ter', { bruto: 0, thr: 0, iuran: 0 }));
    assert.ok(r0.hasil.filter(h => h.format === 'uang').every(h => h.nilai === 0));
    const r = ok(H('pph21-ter', { status: 'TK0', bruto: 4736886, thr: 0, iuran: 0 })); // PKP mentah Rp500
    assert.equal(nilai(r, 'PKP setahun'), 0); assert.equal(nilai(r, 'PPh 21 setahun'), 0);
  });
  it('TER 0% tetapi Desember kurang potong (bruto Rp4.920.000 TK/0)', () => {
    const r = ok(H('pph21-ter', { status: 'TK0', bruto: 4920000, thr: 0, iuran: 0 }));
    assert.equal(utama(r).nilai, 0);
    assert.equal(nilai(r, 'PKP setahun'), 2088000);
    assert.equal(nilai(r, 'PPh 21 Masa Desember'), 104400);
  });
  it('THR Desember hanya masuk penghitungan ulang Desember', () => {
    const r = ok(H('pph21-ter', { bulanThr: 12 }));
    assert.equal(nilai(r, 'Σ PPh 21 Januari–November'), 157500 * 11);
    assert.equal(nilai(r, 'PPh 21 Masa Desember'), 2695500 - 157500 * 11);
  });
  it('tanpa NPWP: Desember = 120% × PPh setahun − Σ Jan–Nov (120%)', () => {
    const r = ok(H('pph21-ter', { npwp: false, thr: 0, iuran: 0 }));
    assert.equal(nilai(r, 'PPh 21 setahun'), Math.round(2430000 * 1.2));
    assert.equal(nilai(r, 'Σ PPh 21 Januari–November'), 189000 * 11);
  });
  it('galat: bulan THR 0 / 13 / 12,6, bruto harian negatif, jenis penerima asing', () => {
    gagal(H('pph21-ter', { bulanThr: 0 }));
    gagal(H('pph21-ter', { bulanThr: 13 }));
    gagal(H('pph21-ter', { bulanThr: 12.6 }));
    gagal(H('pph21-ter', { jenisPegawai: 'harian', brutoHarian: -1 }));
    gagal(H('pph21-ter', { jenisPegawai: 'magang' }));
    assert.equal(utama(ok(H('pph21-ter', { jenisPegawai: 'harian', hari: 0 }))).nilai, 0);
  });
});

describe('adversarial: sanksi-bunga', () => {
  afterEach(() => { delete UKP.ref; });
  it('bulan > 24 dibatasi: tepat 24 bulan sama dengan 24 bulan + 1 hari', () => {
    const a = ok(H('sanksi-bunga', { mulai: '2026-10-15', akhir: '2028-10-15' }));
    const b = ok(H('sanksi-bunga', { mulai: '2026-10-15', akhir: '2028-10-16' }));
    assert.equal(nilai(a, 'Jumlah bulan'), 24); assert.equal(nilai(b, 'Jumlah bulan'), 24);
    assert.equal(utama(a).nilai, utama(b).nilai);
    assert.ok(b.jejak.some(j => j[0].includes('24 bulan')));
  });
  it('akhir bulan dan tahun kabisat', () => {
    const bln = (m, a) => nilai(ok(H('sanksi-bunga', { mulai: m, akhir: a })), 'Jumlah bulan');
    assert.equal(bln('2026-01-31', '2026-02-28'), 1);
    assert.equal(bln('2026-01-31', '2026-03-01'), 2);
    assert.equal(bln('2028-02-29', '2028-03-29'), 1);
    assert.equal(bln('2028-02-29', '2028-03-30'), 2);
  });
  it('tanggal terbalik, tanggal tidak ada (29 Feb 2026), tahun 0099, teks sisa → galat; format ISO + jam diterima', () => {
    gagal(H('sanksi-bunga', { mulai: '2026-07-04', akhir: '2026-07-03' }));
    gagal(H('sanksi-bunga', { mulai: '2026-02-29' }));
    gagal(H('sanksi-bunga', { mulai: '0099-01-01' }));
    gagal(H('sanksi-bunga', { akhir: '2026-07-03abc' }));
    assert.equal(utama(ok(H('sanksi-bunga', { akhir: '2026-07-03T10:00' }))).nilai, 606000);
  });
  it('pokok nol → bunga nol; pokok negatif / pasal asing → galat', () => {
    assert.equal(utama(ok(H('sanksi-bunga', { pokok: 0 }))).nilai, 0);
    gagal(H('sanksi-bunga', { pokok: -1 }));
    gagal(H('sanksi-bunga', { pasal: '99' }));
  });
  it('UKP.ref: nilai null ("belum diisi") tidak menimpa tabel internal', () => {
    UKP.ref = { kmkBunga: [
      { kmk: 'KMK Sep (◐)', periode: '2026-09', tarif: { '0': null, '5': null, '15': null }, imbalanBunga: null, verifikasi: '◐' },
      { kmk: 'KMK Okt', periode: '2026-10', tarif: { '5': null }, imbalanBunga: null },
      { kmk: 'KMK Feb (belum diisi)', periode: '2026-02', tarif: null }
    ] };
    const sep = ok(H('sanksi-bunga', { pasal: '13-2', mulai: '2026-09-30', akhir: '2026-10-20' }));
    assert.equal(nilai(sep, 'Tarif per bulan'), 0.0185);
    const okt = ok(H('sanksi-bunga', { mulai: '2026-10-15', akhir: '2026-11-15' }));
    assert.equal(nilai(okt, 'Tarif per bulan'), 0.0101); assert.deepEqual(okt.peringatan, []);
    assert.equal(nilai(ok(H('sanksi-bunga', { pasal: 'imbalan', mulai: '2026-10-15', akhir: '2026-11-15' })), 'Tarif per bulan'), 0.0059);
    const feb = ok(H('sanksi-bunga'));
    assert.equal(utama(feb).nilai, 606000); assert.ok(feb.peringatan.some(p => p.includes('pendekatan')));
  });
  it('integrasi js/data/ref.js (bila ada): acuan Rp606.000 tetap, September 13(2) 1,85%', (t) => {
    const file = path.join(__dirname, '..', 'js', 'data', 'ref.js');
    if (!fs.existsSync(file)) return t.skip('js/data/ref.js tidak ada');
    let ref = null;
    vm.runInNewContext(fs.readFileSync(file, 'utf8'), { UKP: { registerRef: x => { ref = x; } } });
    if (!ref || !Array.isArray(ref.kmkBunga)) return t.skip('ref.js tanpa kmkBunga');
    UKP.ref = { kmkBunga: ref.kmkBunga };
    assert.equal(utama(ok(H('sanksi-bunga'))).nilai, 606000);
    assert.equal(nilai(ok(H('sanksi-bunga', { pasal: '13-2', mulai: '2026-09-30', akhir: '2026-10-20' })), 'Tarif per bulan'), 0.0185);
    assert.deepEqual(ok(H('sanksi-bunga', { mulai: '2026-10-15', akhir: '2026-12-20' })).peringatan, []);
  });
});

describe('adversarial: tenggat-spt', () => {
  it('masa Desember → tenggat 15 Januari tahun berikutnya', () => {
    assert.equal(utama(ok(H('tenggat-spt', { masa: '2026-12', tanggal: '2027-01-15' }))).nilai, '2027-01-15');
  });
  it('terlambat > 24 bulan → bulan bunga dibatasi 24', () => {
    const r = ok(H('tenggat-spt', { masa: '2026-09', tanggal: '2029-12-31' }));
    assert.equal(nilai(r, 'Bulan bunga'), 24); assert.equal(nilai(r, 'Bunga Ps. 9'), 2424000);
  });
  it('setor sebelum tenggat → 0 hari, tanpa sanksi; SPT Masa PPh terlambat tidak ada bunga', () => {
    const r = ok(H('tenggat-spt', { tanggal: '2026-10-01' }));
    assert.equal(nilai(r, 'Hari terlambat'), 0); assert.equal(nilai(r, 'Total sanksi'), 0);
    const p = ok(H('tenggat-spt', { jenis: 'spt-masa-pph', tanggal: '2027-06-01' }));
    assert.equal(p.hasil.some(h => h.label.startsWith('Bunga')), false); assert.equal(nilai(p, 'Total sanksi'), 100000);
  });
  it('galat: tahun 1999, masa 2026-00, pokok negatif, tarif acuan negatif, jenis asing', () => {
    gagal(H('tenggat-spt', { jenis: 'spt-op', tahun: 1999 }));
    gagal(H('tenggat-spt', { masa: '2026-00' }));
    gagal(H('tenggat-spt', { pokok: -1 }));
    gagal(H('tenggat-spt', { tarifAcuan: -0.5 }));
    gagal(H('tenggat-spt', { jenis: 'spt-pbb' }));
  });
});

describe('adversarial: ppn', () => {
  it('PM > PK pada akhir tahun buku → lebih bayar dengan saran restitusi', () => {
    const r = ok(H('ppn', { pm: 20000000, akhirTahunBuku: true }));
    assert.equal(utama(r).label, 'PPN lebih bayar'); assert.equal(utama(r).nilai, 9000000);
    assert.ok(nilai(r, 'Saran').includes('restitusi'));
  });
  it('harga kecil: Rp1 → PPN 0; Rp12 → DPP 11, PPN 1', () => {
    assert.equal(nilai(ok(H('ppn', { harga: 1, pm: 0 })), 'PPN keluaran'), 0);
    const r = ok(H('ppn', { harga: 12, pm: 0 }));
    assert.equal(nilai(r, 'DPP PPN'), 11); assert.equal(nilai(r, 'PPN keluaran'), 1);
  });
  it('galat: PPnBM negatif, kompensasi negatif, harga teks', () => {
    gagal(H('ppn', { mewah: true, tarifPpnbm: -5 }));
    gagal(H('ppn', { kompensasi: -1 }));
    gagal(H('ppn', { harga: 'seratus' }));
  });
});

describe('adversarial: potput', () => {
  it('PPh 22 bendahara: Rp2.000.000 tidak dipungut, Rp2.000.001 dipungut 1,5%', () => {
    assert.equal(utama(ok(H('potput', { transaksi: 'pembelian-bendahara', bruto: 2000000 }))).nilai, 0);
    assert.equal(utama(ok(H('potput', { transaksi: 'pembelian-bendahara', bruto: 2000001 }))).nilai, 30000);
  });
  it('bruto nol → 0; WPLN dengan SKD tarif 0% → 0; SKD tanpa tarif → 20% + peringatan', () => {
    assert.equal(utama(ok(H('potput', { bruto: 0 }))).nilai, 0);
    assert.equal(utama(ok(H('potput', { penerima: 'wpln', transaksi: 'bunga', skd: true, tarifP3b: 0 }))).nilai, 0);
    const r = ok(H('potput', { penerima: 'wpln', transaksi: 'bunga', skd: true, tarifP3b: null }));
    assert.equal(utama(r).nilai, 10000000); assert.ok(r.peringatan.length > 0);
  });
  it('PPh 21 bukan pegawai lintas lapisan Ps. 17, tanpa NPWP: Rp1 M → (Ps. 17 atas Rp500 jt) × 120%', () => {
    assert.equal(utama(ok(H('potput', { penerima: 'op', bruto: 1000000000, npwp: false }))).nilai, 112800000);
  });
  it('galat: transaksi asing, bruto negatif, tarif P3B negatif', () => {
    gagal(H('potput', { transaksi: 'gaji' }));
    gagal(H('potput', { bruto: -1 }));
    gagal(H('potput', { penerima: 'wpln', skd: true, tarifP3b: -1 }));
  });
});

describe('adversarial: pesangon', () => {
  it('batas lapisan Rp500 jt: tepat dan sesudahnya', () => {
    assert.equal(utama(ok(H('pesangon', { jumlah: 500000000 }))).nilai, 62500000);
    assert.equal(utama(ok(H('pesangon', { jumlah: 500000004 }))).nilai, 62500001);
  });
  it('pembayaran bertahap melintasi Rp100 jt dan pensiun tepat di atas Rp50 jt', () => {
    const r = ok(H('pesangon', { jumlah: 10000000, sudahDibayar: 95000000 }));
    assert.equal(utama(r).nilai, 1000000); // 5 jt × 5% + 5 jt × 15%
    assert.equal(utama(ok(H('pesangon', { jenis: 'pensiun', jumlah: 50000020 }))).nilai, 1);
  });
  it('jumlah nol → 0; galat untuk sudah dibayar negatif dan jumlah kosong pada tahun ketiga', () => {
    assert.equal(utama(ok(H('pesangon', { jumlah: 0 }))).nilai, 0);
    gagal(H('pesangon', { sudahDibayar: -1 }));
    gagal(H('pesangon', { jumlah: null, tahunKetiga: true }));
  });
});

describe('adversarial: denda-keberatan', () => {
  it('dibayar melebihi pajak keputusan → dasar dan denda nol', () => {
    const r = ok(H('denda-keberatan', { pajakKeputusan: 100, dibayar: 200 }));
    assert.equal(utama(r).nilai, 0); assert.equal(nilai(r, 'Dasar denda'), 0);
  });
  it('semua nol → 0; sakelar banding diabaikan pada jalur banding/PK', () => {
    assert.equal(utama(ok(H('denda-keberatan', { jalur: 'banding', pajakKeputusan: 0, dibayar: 0 }))).nilai, 0);
    assert.equal(utama(ok(H('denda-keberatan', { jalur: 'pk', ajukanBanding: true }))).nilai, 180000000);
  });
  it('galat: nilai negatif, NaN, teks', () => {
    gagal(H('denda-keberatan', { pajakKeputusan: -1 }));
    gagal(H('denda-keberatan', { dibayar: NaN }));
    gagal(H('denda-keberatan', { pajakKeputusan: 'banyak' }));
  });
});

describe('adversarial: ppsp', () => {
  it('kabisat: terbit 31 Jan 2028 → jatuh tempo 29 Feb 2028; usaha kecil 31 Des → 28 Feb', () => {
    assert.equal(utama(ok(H('ppsp', { terbit: '2028-01-31' }))).nilai, '2028-02-29');
    assert.equal(utama(ok(H('ppsp', { terbit: '2026-12-31', usahaKecil: true }))).nilai, '2027-02-28');
  });
  it('penyanderaan: utang tepat Rp100 jt memenuhi syarat, Rp99.999.999 tidak', () => {
    assert.equal(nilai(ok(H('ppsp', { utang: 100000000 })), 'Penyanderaan paling cepat'), '2026-09-13');
    assert.ok(nilai(ok(H('ppsp', { utang: 99999999 })), 'Penyanderaan').startsWith('Tidak memenuhi'));
  });
  it('urutan selalu naik untuk setiap tanggal terbit 2027–2028', () => {
    for (let d = 0; d < 731; d++) {
      const iso = UKP.pajak.tambahHari('2027-01-01', d);
      const t = ok(H('ppsp', { terbit: iso })).hasil.slice(0, 6).map(h => h.nilai);
      for (let i = 1; i < t.length; i++) assert.ok(t[i] > t[i - 1], iso + ': ' + t.join(' → '));
      assert.ok(t[0] > iso);
    }
  });
  it('galat: 30 Feb, teks bebas, utang NaN', () => {
    gagal(H('ppsp', { terbit: '2026-02-30' }));
    gagal(H('ppsp', { terbit: 'kemarin' }));
    gagal(H('ppsp', { utang: NaN }));
  });
});

describe('adversarial: pph-badan', () => {
  it('omzet Rp4,8 M + 1 masuk cabang proporsional; Rp50 M + 1 tanpa fasilitas', () => {
    const a = ok(H('pph-badan', { bruto: 4800000001, pkp: 480000000 }));
    assert.equal(nilai(a, 'Perlakuan'), 'Fasilitas Ps. 31E atas bagian bruto Rp4,8 miliar');
    assert.equal(utama(a).nilai, 52800000);
    const b = ok(H('pph-badan', { bruto: 50000000001, pkp: 1000000000 }));
    assert.equal(utama(b).nilai, 220000000); assert.equal(nilai(b, 'PKP fasilitas'), 0);
  });
  it('PKP di bawah Rp1.000 → 0; bruto nol dengan PKP → 11%', () => {
    assert.equal(utama(ok(H('pph-badan', { pkp: 999 }))).nilai, 0);
    assert.equal(utama(ok(H('pph-badan', { bruto: 0, pkp: 100000000 }))).nilai, 11000000);
  });
  it('Tbk dengan omzet ≤ Rp50 M diperingatkan (gabungan 19% dan 31E tidak dihitung)', () => {
    const r = ok(H('pph-badan', { tbk: true }));
    assert.equal(utama(r).nilai, 570000000); assert.ok(r.peringatan.some(p => p.includes('31E')));
  });
  it('galat: bruto negatif, PKP kosong, kredit negatif', () => {
    gagal(H('pph-badan', { bruto: -1 }));
    gagal(H('pph-badan', { pkp: null }));
    gagal(H('pph-badan', { kredit: -1 }));
  });
});

describe('adversarial: penyusutan', () => {
  it('harga nol → tanpa exception, penyusutan 0', () => {
    const r = ok(H('penyusutan', { harga: 0 }));
    assert.equal(utama(r).nilai, 0); assert.equal(nilai(r, 'Jumlah tahun buku'), 0);
  });
  it('masa manfaat sebenarnya 20,4 / 1e20 tahun → galat cepat (tanpa loop panjang); 100 tahun diterima', () => {
    gagal(H('penyusutan', { kelompok: 'bangunan-permanen', masaSebenarnya: 20.4 }));
    gagal(H('penyusutan', { kelompok: 'bangunan-permanen', masaSebenarnya: 1e20 }));
    assert.equal(nilai(ok(H('penyusutan', { kelompok: 'bangunan-permanen', masaSebenarnya: 100, bulan: 1 })), 'Jumlah tahun buku'), 100);
    assert.deepEqual(UKP.pajak.jadwalSusut(100, 1e20, 0.1, 'gl', 1, 2026), []);
    assert.deepEqual(UKP.pajak.jadwalSusut(100, 48, 0.25, 'gl', 13, 2026), []);
  });
  it('perolehan Desember: tahun pertama 1 bulan (SM kelompok 4)', () => {
    const r = ok(H('penyusutan', { kelompok: 'k4', metode: 'sm', bulan: 12, harga: 1200000000, masaKomersial: null }));
    assert.equal(utama(r).nilai, 10000000); assert.equal(nilai(r, 'Penyusutan tahun kedua'), 119000000);
    assert.equal(nilai(r, 'Jumlah tahun buku'), 21);
  });
  it('galat: bulan 0 / 6,5, tahun 1800, masa komersial negatif, kelompok asing', () => {
    gagal(H('penyusutan', { bulan: 0 }));
    gagal(H('penyusutan', { bulan: 6.5 }));
    gagal(H('penyusutan', { tahun: 1800 }));
    gagal(H('penyusutan', { masaKomersial: -1 }));
    gagal(H('penyusutan', { kelompok: 'k5' }));
  });
});

describe('adversarial: pajak-tangguhan', () => {
  it('semua nol → seluruh baris nol', () => {
    const r = ok(H('pajak-tangguhan', { bedaKenaPajak: 0, bedaDikurangkan: 0, pajakKini: 0 }));
    assert.ok(r.hasil.every(h => h.nilai === 0));
  });
  it('tarif 0% → DTL/DTA nol; beda kosong dianggap nol', () => {
    const r = ok(H('pajak-tangguhan', { tarif: 0 }));
    assert.equal(nilai(r, 'Liabilitas'), 0); assert.equal(nilai(r, 'Aset'), 0);
    assert.equal(nilai(ok(H('pajak-tangguhan', { bedaKenaPajak: null, bedaDikurangkan: null })), 'Total beban'), 100000000);
  });
  it('galat: rugi fiskal negatif, pajak kini negatif, beda teks, tarif negatif', () => {
    gagal(H('pajak-tangguhan', { rugiFiskal: -1 }));
    gagal(H('pajak-tangguhan', { pajakKini: -1 }));
    gagal(H('pajak-tangguhan', { bedaKenaPajak: 'abc' }));
    gagal(H('pajak-tangguhan', { tarif: -1 }));
  });
});

describe('adversarial: der', () => {
  it('utang tepat 4 × modal → seluruh biaya diakui; sedikit di atasnya → proporsi < 1', () => {
    assert.equal(nilai(ok(H('der', { utang: 8000000000 })), 'Proporsi'), 1);
    const r = ok(H('der', { utang: 8000000004 }));
    assert.ok(nilai(r, 'Proporsi') < 1);
    assert.equal(utama(ok(H('der', { utang: 8800000000 }))).nilai, 909090909);
  });
  it('modal nol → tidak ada biaya diakui; biaya nol → nol', () => {
    assert.equal(utama(ok(H('der', { modal: 0 }))).nilai, 0);
    assert.equal(nilai(ok(H('der', { biaya: 0 })), 'Koreksi'), 0);
  });
  it('galat: utang negatif, modal NaN, biaya kosong', () => {
    gagal(H('der', { utang: -1 }));
    gagal(H('der', { modal: NaN }));
    gagal(H('der', { biaya: null }));
  });
});

describe('adversarial: pph24', () => {
  it('semua negara rugi → kredit 0, pajak LN yang dibayar diperingatkan hangus', () => {
    const r = ok(H('pph24', { neto1: -1, neto2: -5, neto3: -9, pajak1: 10, pajak2: 0 }));
    assert.equal(utama(r).nilai, 0); assert.equal(nilai(r, 'PKP'), 2000000000);
    assert.ok(r.peringatan.length > 0);
  });
  it('PKP di bawah Rp1.000 → PPh dan kredit 0', () => {
    const r = ok(H('pph24', { netoDn: -1499999500, neto2: 0, pajak2: 0, neto3: 0 }));
    assert.equal(nilai(r, 'PKP'), 0); assert.equal(utama(r).nilai, 0);
  });
  it('PKP lebih kecil dari total neto LN → total kredit tidak melebihi PPh terutang', () => {
    const r = ok(H('pph24', { netoDn: -1400000000, pajak1: 400000000, pajak2: 200000000, neto3: 0 }));
    assert.equal(utama(r).nilai, nilai(r, 'PPh terutang'));
    assert.equal(nilai(r, 'PPh setelah kredit'), 0);
    assert.ok(r.jejak.some(j => j[0].includes('dibatasi')));
    assert.ok(r.peringatan.some(p => p.includes('Rp578.000.000'))); // 600 jt dibayar − 22 jt dikreditkan
  });
  it('galat: tarif > 100%, neto teks, tarif kosong', () => {
    gagal(H('pph24', { tarif: 101 }));
    gagal(H('pph24', { neto2: 'abc' }));
    gagal(H('pph24', { tarif: null }));
  });
});

describe('adversarial: bpt', () => {
  it('PKP di bawah Rp1.000 dan PKP negatif → seluruhnya nol', () => {
    for (const pkp of [999, -5000000]) {
      const r = ok(H('bpt', { pkp }));
      assert.equal(utama(r).nilai, 0); assert.equal(nilai(r, 'PPh badan BUT'), 0);
    }
  });
  it('tarif P3B 0% → BPT nihil, PPh badan tetap', () => {
    const r = ok(H('bpt', { tarifP3b: 0 }));
    assert.equal(utama(r).nilai, 0); assert.equal(nilai(r, 'PPh badan BUT'), 220000000);
  });
  it('galat: tarif badan > 100%, ditanam kembali negatif, P3B negatif', () => {
    gagal(H('bpt', { tarifBadan: 101 }));
    gagal(H('bpt', { ditanamKembali: -1 }));
    gagal(H('bpt', { tarifP3b: -1 }));
  });
});

describe('adversarial: pbb-bphtb', () => {
  it('PBB-P5L sektor lainnya: NJOP tepat Rp1 M → NJKP 40%; Rp1 M − 1 → 20%', () => {
    assert.equal(nilai(ok(H('pbb-bphtb', { sektor: 'lainnya', njopBumi: 1000000000, njopBangunan: 0 })), 'NJKP'), 0.40);
    assert.equal(nilai(ok(H('pbb-bphtb', { sektor: 'lainnya', njopBumi: 999999999, njopBangunan: 0 })), 'NJKP'), 0.20);
  });
  it('NJOP ≤ NJOPTKP dan NPOP ≤ NPOPTKP → nihil', () => {
    assert.equal(utama(ok(H('pbb-bphtb', { njopBumi: 5000000, njopBangunan: 0 }))).nilai, 0);
    assert.equal(utama(ok(H('pbb-bphtb', { jenis: 'bphtb', npop: 50000000, njopBphtb: 40000000 }))).nilai, 0);
  });
  it('tarif BPHTB 6% diperingatkan; galat untuk sektor asing, NJKP P2 > 100%, NJOP negatif', () => {
    assert.ok(ok(H('pbb-bphtb', { jenis: 'bphtb', tarifBphtb: 6 })).peringatan.some(p => p.includes('5%')));
    gagal(H('pbb-bphtb', { sektor: 'perikanan' }));
    gagal(H('pbb-bphtb', { jenis: 'pbb-p2', njkpP2: 101 }));
    gagal(H('pbb-bphtb', { njopBumi: -1 }));
  });
});

describe('adversarial: bea-meterai', () => {
  it('kuitansi Rp5.000.001 terutang (lebih dari Rp5 juta)', () => {
    assert.equal(utama(ok(H('bea-meterai', { nilai: 5000001 }))).nilai, 10000);
  });
  it('bukan objek dengan pemeteraian kemudian → nihil; tiga rangkap dimeteraikan kemudian → Rp60.000', () => {
    assert.equal(utama(ok(H('bea-meterai', { dokumen: 'bukan-objek', kemudian: true }))).nilai, 0);
    assert.equal(utama(ok(H('bea-meterai', { dokumen: 'perjanjian', jumlah: 3, kemudian: true }))).nilai, 60000);
  });
  it('galat: jumlah −1, dokumen asing, nilai negatif', () => {
    gagal(H('bea-meterai', { jumlah: -1 }));
    gagal(H('bea-meterai', { dokumen: 'ijazah-palsu' }));
    gagal(H('bea-meterai', { nilai: -1 }));
  });
});

describe('adversarial: kurs', () => {
  const JENIS = UKP.kalkulatorByJenis('kurs').input.find(i => i.key === 'jenisPajak').opsi.map(o => o.nilai);
  const TARIF = { pph26: 0.20, 'pph26-5': 0.05, 'pph23-2': 0.02, 'pph23-15': 0.15, 'pph42-10': 0.10, 'pph15-264': 0.0264 };
  it('identitas arus kas: total selisih kurs = ±(kas rupiah saat lunas [+ PPh dipotong] − nilai buku) untuk semua jenis × posisi', () => {
    const KURS = [[16250, 16180, 16420, 16300], [15000, 15500, 14800, 15100], [1.0567, 1.05, 1.1, 0.99]];
    for (const j of JENIS) for (const posisi of ['utang', 'piutang']) for (const [kmk, tengah, akhir, bayar] of KURS) {
      const valas = 12345;
      const r = ok(H('kurs', { jenisPajak: j, posisi, nilaiValas: valas, kursKmk: kmk, kursTengah: tengah, kursAkhir: akhir, kursBayar: bayar }));
      const potong = j in TARIF, pajak = utama(r).nilai, buku = nilai(r, 'Nilai pembukuan');
      const valasPos = potong ? valas * (1 - TARIF[j]) : valas;
      const kas = valasPos * bayar + (potong ? pajak : 0);
      const harap = (posisi === 'utang' ? -1 : 1) * (kas - buku);
      assert.ok(Math.abs(nilai(r, 'Total selisih kurs') - harap) <= 3, j + '/' + posisi + '/' + kmk + ': ' + nilai(r, 'Total selisih kurs') + ' vs ' + harap);
      assert.equal(nilai(r, 'Total selisih kurs'), r.hasil.filter(h => /^Selisih kurs (atas|belum|terealisasi)/.test(h.label)).reduce((s, h) => s + h.nilai, 0));
    }
  });
  it('identitas arus kas dengan gross-up (pos = neto penuh) dan PPN ditagih valas (pos = harga + PPN valas, PPN rupiah disetor/dikreditkan)', () => {
    const KURS = [[16250, 16180, 16420, 16300], [15000, 15500, 14800, 15100], [1.0567, 1.05, 1.1, 0.99]];
    for (const posisi of ['utang', 'piutang']) for (const [kmk, tengah, akhir, bayar] of KURS) {
      const valas = 12345, arah = posisi === 'utang' ? -1 : 1, kurs = { posisi, nilaiValas: valas, kursKmk: kmk, kursTengah: tengah, kursAkhir: akhir, kursBayar: bayar };
      for (const j of Object.keys(TARIF)) {
        const r = ok(H('kurs', Object.assign({ jenisPajak: j, grossUp: true }, kurs)));
        assert.ok(Math.abs(nilai(r, 'Total selisih kurs') - arah * (valas * bayar - nilai(r, 'Nilai pembukuan'))) <= 2, j + '/' + posisi + '/' + kmk);
        assert.equal(r.hasil.some(h => h.label.startsWith('Selisih kurs atas')), false);
      }
      for (const dppNilaiLain of [true, false]) {
        const r = ok(H('kurs', Object.assign({ jenisPajak: 'ppn', ppnValas: true, dppNilaiLain }, kurs)));
        const pos = valas * (1 + (dppNilaiLain ? 0.11 : 0.12));
        const harap = arah * (pos * bayar - utama(r).nilai - nilai(r, 'Nilai pembukuan'));
        assert.ok(Math.abs(nilai(r, 'Total selisih kurs') - harap) <= 3, 'ppn/' + posisi + '/' + kmk + ': ' + nilai(r, 'Total selisih kurs') + ' vs ' + harap);
        assert.equal(nilai(r, 'Total selisih kurs'), r.hasil.filter(h => /^Selisih kurs (atas|belum|terealisasi)/.test(h.label)).reduce((s, h) => s + h.nilai, 0));
      }
    }
  });
  it('bea masuk tidak mengubah pos moneter maupun selisih kurs; PPh 22 naik sebesar tarif × BM', () => {
    const TARIF22 = { 'pph22-25': 0.025, 'pph22-75': 0.075, 'pph22-10': 0.10 };
    for (const j of Object.keys(TARIF22)) for (const bm of [0, 5, 7.5, 40]) {
      const a = ok(H('kurs', { jenisPajak: j })), b = ok(H('kurs', { jenisPajak: j, beaMasuk: bm }));
      assert.equal(nilai(b, 'Total selisih kurs'), nilai(a, 'Total selisih kurs'), j + '/' + bm);
      assert.equal(nilai(b, 'Nilai pembukuan'), nilai(a, 'Nilai pembukuan'));
      assert.equal(nilai(b, 'Bea masuk'), Math.round(162500000 * bm / 100));
      assert.ok(Math.abs(utama(b).nilai - utama(a).nilai - nilai(b, 'Bea masuk') * TARIF22[j]) <= 1, j + '/' + bm);
    }
  });
  it('nilai valas 0 → seluruh angka nol tanpa galat; angka sangat besar tetap berhingga dan bulat', () => {
    const r = ok(H('kurs', { nilaiValas: 0 }));
    for (const h of r.hasil) assert.ok(Object.is(h.nilai, 0), h.label + ' = ' + h.nilai);
    const b = ok(H('kurs', { nilaiValas: 1e12, kursKmk: 20000.5 }));
    for (const h of b.hasil) assert.ok(Number.isFinite(h.nilai) && h.nilai === Math.round(h.nilai), h.label);
  });
  it('kurs KMK sama dengan kurs tengah → selisih nilai transaksi dan selisih atas PPh nihil; pengecoh kurs tengah tidak ditampilkan', () => {
    const r = ok(H('kurs', { kursTengah: 16250 }));
    assert.equal(nilai(r, 'Selisih nilai transaksi'), 0);
    assert.equal(nilai(r, 'Selisih kurs atas PPh dipotong — nihil'), 0);
    assert.equal(r.jejak.some(j => j[0].includes('keliru memakai kurs tengah')), false);
  });
});

describe('adversarial: gmt', () => {
  it('rumus silang: top-up = maks(0; (15% − ETR)⁺ × (GloBE income − SBIE)⁺ − QDMTT) pada kisi input', () => {
    for (const income of [1, 1000000, 5e10, 2e11, 9.99e11]) for (const taxes of [0, 1e9, 1.5e10, 4e10]) for (const gaji of [0, 5e10]) for (const qdmtt of [0, 1e9]) for (const tahun of ['2025', '2027', '2029']) {
      const r = ok(H('gmt', { globeIncome: income, coveredTaxes: taxes, gaji, aset: 1e11, qdmtt, tahun }));
      const p = UKP.tabel.globe.sbieTransisi[tahun];
      const sbie = Math.round(gaji * p.gaji) + Math.round(1e11 * p.aset);
      const harap = Math.max(0, Math.round(Math.max(0, 0.15 - taxes / income) * Math.max(0, income - sbie)) - qdmtt);
      assert.ok(Math.abs(utama(r).nilai - harap) <= 1, JSON.stringify({ income, taxes, gaji, qdmtt, tahun }) + ': ' + utama(r).nilai + ' vs ' + harap);
    }
  });
  it('top-up tidak naik ketika covered taxes naik (monoton)', () => {
    let sebelum = Infinity;
    for (let t = 0; t <= 40e9; t += 2.5e9) {
      const n = utama(ok(H('gmt', { coveredTaxes: t }))).nilai;
      assert.ok(n <= sebelum, 'covered ' + t); sebelum = n;
    }
    assert.equal(sebelum, 0);
  });
  it('urutan prioritas keterangan: di luar cakupan mengalahkan rugi dan de minimis', () => {
    const r = ok(H('gmt', { pendapatanGrup: 1, globeIncome: -1, deMinimis: true }));
    assert.equal(utama(r).nilai, 0);
    assert.match(nilai(r, 'Keterangan'), /di bawah ambang/);
  });
});
