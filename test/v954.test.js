/* Uji v9.5.4: dua teks di layar yang tidak cocok dengan perilaku aplikasi.
   C1 halaman hasil simulasi: kolom "Waktu di soal", "< 1" untuk nilai di bawah setengah menit, keterangan selisih dengan waktu terpakai,
   rekaman lama tanpa detikKel tanpa kolom waktu. C2 dialog "Selesai dan nilai?" ujian tim Satu layar hanya menyebut peserta yang masih
   punya soal kosong. Jalankan: node --test test/ */
'use strict';
const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { muatInti } = require('./_muat-inti.js');

const baca = b => fs.readFileSync(path.join(__dirname, '..', 'js', b), 'utf8');
const sim = baca('views-simulasi.js');
const utv = baca('views-ujian-tim.js');
const J = v => JSON.parse(JSON.stringify(v));
const KET = 'Waktu di soal dihitung selama soal tampil di layar. Waktu saat Anda keluar dari layar ujian tetap masuk waktu terpakai.';

// pembantu dan syarat diambil dari sumber, jadi uji ini memeriksa kode yang benar-benar dipakai halaman
const fTeks = sim.match(/const teksMenit = (\(m, label\) => \{[^\n]*\});/);
// eslint-disable-next-line no-new-func
const teksMenit = fTeks && new Function('return ' + fTeks[1])();
const fSyarat = sim.match(/\n\s*(const waktuKel = [^\n]*; const ketWaktu = [^\n]*;)\n/);
// eslint-disable-next-line no-new-func
const syarat = fSyarat && new Function('r', 'durasi', 'rows', fSyarat[1] + ' return { waktuKel, ketWaktu };');

describe('v9.5.4 C1: pembantu teks menit', () => {
  it('ada satu pembantu teksMenit di tingkat modul', () => {
    assert.ok(teksMenit, 'teksMenit tidak ditemukan');
    assert.equal((sim.match(/const teksMenit = /g) || []).length, 1);
  });
  it('0 tetap "0"; lebih dari 0 tapi dibulatkan 0 menjadi "< 1" (label: "kurang dari 1"); selebihnya dibulatkan', () => {
    assert.equal(teksMenit(0), '0');
    assert.equal(teksMenit(0, 1), '0');
    assert.equal(teksMenit(20 / 60), '< 1');
    assert.equal(teksMenit(20 / 60, 1), 'kurang dari 1');
    assert.equal(teksMenit(0.49), '< 1');
    assert.equal(teksMenit(0.5), '1');
    assert.equal(teksMenit(2.6), '3');
    assert.equal(teksMenit(2.6, 1), '3');
    assert.equal(teksMenit(6), '6');
  });
});

describe('v9.5.4 C1: tabel, daftar HP, dan label aksesibilitas', () => {
  it('judul kolom "Waktu di soal"; judul lama "Waktu terpakai" tidak dipakai lagi di tabel', () => {
    assert.ok(sim.includes("waktuKel ? h('th', { scope: 'col', class: 'num' }, 'Waktu di soal') : null"));
    assert.ok(!sim.includes("'Waktu terpakai')"));
  });
  it('sel tabel, meta daftar HP, dan label aksesibilitas memakai teksMenit (tidak ada lagi Math.round(x.pakai))', () => {
    assert.ok(sim.includes("waktuKel ? h('td', { class: 'num small', style: { whiteSpace: 'nowrap' } }, teksMenit(x.pakai) + ' dari ' + teksMenit(x.anggaran) + ' mnt') : null"));
    assert.ok(sim.includes("(waktuKel ? ' · di soal ' + teksMenit(x.pakai) + ' dari ' + teksMenit(x.anggaran) + ' mnt' : '')"));
    assert.ok(sim.includes("(waktuKel ? ', waktu di soal ' + teksMenit(x.pakai, 1) + ' dari ' + teksMenit(x.anggaran, 1) + ' menit' : '') + '. Latih 10 soal.'"));
    assert.ok(!sim.includes('Math.round(x.pakai)'));
    assert.ok(!sim.includes('Math.round(x.anggaran)'));
    assert.ok(!sim.includes("', waktu terpakai ' + "));
  });
  it('keterangan (kelas meta) dipasang di bawah tabel atau daftar, hanya bila ketWaktu', () => {
    assert.ok(sim.includes("isi: [daftarKelHP || UKP.c.tabelWrap('Hasil per kelompok', tblKel), ketWaktu ? h('p', { class: 'meta' }, '" + KET + "') : null] });"));
    assert.equal(sim.split(KET).length - 1, 1);
  });
  it('kartu Skor dan tombol Salin tabel tidak berubah', () => {
    assert.ok(sim.includes("r.tanpaWaktu ? 'tanpa batas waktu' : 'waktu terpakai ' + Math.min(durasi, r.menit) + ' dari ' + r.menit + ' mnt'"));
    assert.ok(sim.includes("rows.map(x => x.k + '\\t' + x.v.benar + '/' + x.v.total + '\\t' + x.pct + '%').join('\\n')"));
  });
  it('rekaman hasil tidak diubah: detikKel tetap disimpan seperti v9.5.3', () => {
    assert.ok(sim.includes('skor, benar, total, perKel, detikKel, jawaban: a.jawaban,'));
  });
});

describe('v9.5.4 C1: kapan kolom waktu dan keterangan tampil', () => {
  const baris = (...menit) => menit.map(m => ({ pakai: m }));
  it('syarat ditemukan di sumber', () => assert.ok(syarat, 'baris waktuKel/ketWaktu tidak ditemukan'));
  it('simulasi biasa: kolom tampil, keterangan tidak (selisih di bawah 1 menit)', () => {
    const x = syarat({ menit: 20, detikKel: { A1: 300 } }, 12, baris(5, 4.5, 2.8));
    assert.deepEqual(x, { waktuKel: true, ketWaktu: false });
  });
  it('ditinggal keluar beberapa menit: keterangan tampil', () => {
    const x = syarat({ menit: 20, detikKel: { A1: 300 } }, 12, baris(4, 3, 1));
    assert.deepEqual(x, { waktuKel: true, ketWaktu: true });
  });
  it('selisih tepat 1 menit: keterangan tampil; waktu terpakai dibatasi menit simulasi', () => {
    assert.equal(syarat({ menit: 20, detikKel: {} }, 10, baris(6, 3)).ketWaktu, true);
    assert.equal(syarat({ menit: 20, detikKel: {} }, 35, baris(10, 9.5)).ketWaktu, false, 'durasi 35 dibatasi menjadi 20');
  });
  it('tanpa batas waktu: tidak ada kolom dan tidak ada keterangan', () => {
    assert.deepEqual(syarat({ menit: 20, tanpaWaktu: true, detikKel: { A1: 10 } }, 30, baris(0.2)), { waktuKel: false, ketWaktu: false });
  });
  it('rekaman lama tanpa detikKel: tidak ada kolom dan tidak ada keterangan', () => {
    assert.deepEqual(syarat({ menit: 20 }, 12, baris(0, 0)), { waktuKel: false, ketWaktu: false });
  });
});

describe('v9.5.4 C2: dialog "Selesai dan nilai?" ujian tim Satu layar', () => {
  const fKosong = utv.match(/\n\s*(const kosong = u\.peserta\.map\([^\n]*;)\n/);
  const fPesan = utv.match(/UKP\.konfirmasi\('Selesai dan nilai\?', ([^\n]*), \{ ya: 'Nilai sekarang', tidak: 'Kembali ke soal' \}\);/);
  // eslint-disable-next-line no-new-func
  const pesan = fKosong && fPesan && new Function('u', 'r', 'n', fKosong[1] + ' return ' + fPesan[1] + ';');
  const EKOR = 'Kunci jawaban dan nilai tampil setelah ini; jawaban tidak dapat diubah lagi.';
  it('teks ditemukan di selesai(); judul dan tombol tetap', () => {
    assert.ok(pesan, 'baris kosong atau konfirmasi tidak ditemukan');
    assert.ok(/async function selesai\(\) \{\n[^\n]*\n\s*const kosong = /.test(utv));
  });
  it('sebagian kosong: hanya yang masih punya soal kosong, urutan peserta', () => {
    const u = { peserta: ['Nicky', 'Mita', 'Budi'] };
    const r = { perPeserta: { Nicky: { kosong: 1 }, Mita: { kosong: 3 }, Budi: { kosong: 0 } } };
    assert.equal(pesan(u, r, 10), 'Belum dijawab: Nicky 1, Mita 3 soal. Soal yang tidak dijawab dinilai salah. ' + EKOR);
  });
  it('semua sudah dijawab: "Semua soal sudah dijawab."', () => {
    const u = { peserta: ['Nicky', 'Mita'] };
    assert.equal(pesan(u, { perPeserta: { Nicky: { kosong: 0 }, Mita: { kosong: 0 } } }, 5), 'Semua soal sudah dijawab. ' + EKOR);
  });
  it('peserta tanpa catatan dianggap kosong semua (n), seperti v9.5.3', () => {
    assert.equal(pesan({ peserta: ['Nicky', 'Mita'] }, { perPeserta: { Nicky: { kosong: 0 } } }, 5), 'Belum dijawab: Mita 5 soal. Soal yang tidak dijawab dinilai salah. ' + EKOR);
  });
  it('teks lama "Nicky 0" tidak mungkin muncul lagi', () => {
    assert.ok(!utv.includes("'Belum dijawab: ' + kosong.join(', ') + ' soal. Soal yang tidak dijawab dinilai salah. Kunci jawaban"));
  });

  describe('dengan UT.ringkas() sungguhan', () => {
    const DATA = fs.readdirSync(path.join(__dirname, '..', 'js', 'data')).filter(f => /^(ref|mu-.*)\.js$/.test(f)).sort().map(f => 'data/' + f);
    const UKP = muatInti(['core.js'].concat(DATA, ['learn.js']));
    const UT = UKP.belajar.ujianTim; const K = UKP.konten; const s = UKP.store.get();
    const IDS = J(K.soalSet('TO-B-2026-11').map(x => x.id)).slice(0, 4);
    beforeEach(() => { s.jawaban.length = 0; s.jawabanBersama = []; s.sesiBersama = []; s.simulasi = []; s.profil.nama = 'Nicky'; s.profil.tingkat = 'B'; s.ujianTim = null;
      UT.susun({ soalIds: IDS, menit: 10, peserta: ['Nicky', 'Mita'], cara: 'papan' }); UT.mulai(); });
    it('semua dijawab', () => {
      IDS.forEach(id => { UT.catat('Nicky', id, 'A'); UT.catat('Mita', id, 'B'); });
      assert.equal(pesan(UT.aktif(), UT.ringkas(), IDS.length), 'Semua soal sudah dijawab. ' + EKOR);
    });
    it('sebagian kosong', () => {
      IDS.forEach(id => UT.catat('Nicky', id, 'A')); UT.catat('Mita', IDS[0], 'B');
      assert.equal(pesan(UT.aktif(), UT.ringkas(), IDS.length), 'Belum dijawab: Mita 3 soal. Soal yang tidak dijawab dinilai salah. ' + EKOR);
    });
    it('semua kosong', () => {
      assert.equal(pesan(UT.aktif(), UT.ringkas(), IDS.length), 'Belum dijawab: Nicky 4, Mita 4 soal. Soal yang tidak dijawab dinilai salah. ' + EKOR);
    });
  });
});

describe('v9.5.4 aturan tulisan', () => {
  it('teks baru tanpa tanda pisah panjang dan tanpa panah', () => {
    for (const t of [KET, 'Semua soal sudah dijawab.', 'Waktu di soal', ' · di soal ', 'kurang dari 1']) assert.ok(!/[—–→←]/.test(t), t);
  });
});
