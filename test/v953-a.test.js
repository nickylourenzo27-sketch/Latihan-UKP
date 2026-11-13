/* Uji v9.5.3 pengerja A: teks di layar Simulasi dan Ujian tim harus cocok dengan perilaku aplikasi.
   A1 tanpa batas waktu (dialog keluar, butir aturan), A2 kartu "Simulasi berjalan" (pembulatan ke atas, diperbarui sendiri),
   A3 isian Jumlah soal dan Menit menulis balik nilai yang dipakai, A4 Tambah 5 menit (bagian pemimpin ikut, teks jujur tanpa room),
   A5 Kerjakan bagian saya memakai sisa waktu ujian, A6 "Nilai hanya yang sudah mengumpulkan" memakai u.terkumpul,
   Ax1 sub segmen Format, Ax3 teks "Sisa < 5 mnt". Jalankan: node --test test/ */
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

describe('v9.5.3 A1: simulasi tanpa batas waktu tidak menulis "Waktu tetap berjalan"', () => {
  it('dialog keluar memakai teks bersyarat a.tanpaWaktu', () => {
    assert.ok(sim.includes("UKP.konfirmasi('Keluar dari simulasi?', (a.tanpaWaktu ? '' : 'Waktu tetap berjalan. ') + 'Jawaban yang sudah diisi tersimpan dan bisa dilanjutkan dari halaman Simulasi.'"));
    assert.ok(!sim.includes("UKP.konfirmasi('Keluar dari simulasi?', 'Waktu tetap berjalan."), 'teks lama tanpa syarat masih ada');
  });
  it('butir aturan waktu diberi kelas aturan-jam dan disembunyikan selama tanpaAktif() (ujian tim tetap menampilkannya)', () => {
    assert.ok(sim.includes("class: 'small' + (ik === 'jam' ? ' aturan-jam' : ''), hidden: ik === 'jam' && tanpaAktif() ? true : null"));
    assert.ok(sim.includes("const tanpaAktif = () => !!cfg.tanpaWaktu && !(cfg.tim && UT);"));
  });
  it('terapkanTanpa() ikut memperbarui butir aturan (lebar sempit: aturan() dipasang sekali di luar kartu)', () => {
    assert.ok(/function terapkanTanpa\(\) \{[^\n]*page\.querySelectorAll\('\.aturan-jam'\)\.forEach\(li => \{ li\.hidden = t; \}\);/.test(sim));
    assert.ok(/cfg\.tanpaWaktu = e\.target\.checked; terapkanTanpa\(\); gambarRingkas\(\);/.test(sim));
  });
});

describe('v9.5.3 A2: kartu "Simulasi berjalan"', () => {
  it('sisa menit dibulatkan ke atas (tidak pernah "± 0" selama waktu berjalan)', () => {
    assert.ok(sim.includes('const sisa = Math.max(0, Math.ceil((a.akhir - Date.now()) / 60000));'));
    assert.ok(!sim.includes('const sisa = Math.max(0, Math.round((a.akhir - Date.now()) / 60000));'));
  });
  it('kartu digambar ulang saat angka menit berganti dan saat waktu habis, hanya bila masih tampil, ditunda selama dialog terbuka', () => {
    const m = sim.match(/if \(!a\.tanpaWaktu && !kedaluwarsa\(a\)\) \{\n\s*const segarkan = \(\) => \{([^\n]*)\};\n\s*setTimeout\(segarkan, ([^\n]*)\);/);
    assert.ok(m, 'blok penyegar kartu tidak ditemukan');
    assert.ok(m[1].includes('if (!pg.isConnected) return;'));
    assert.ok(m[1].includes("if (document.querySelector('dialog[open]')) { setTimeout(segarkan, 1000); return; }"));
    assert.ok(m[1].includes('UKP.render();'));
    assert.equal(m[2], '(((a.akhir - Date.now()) % 60000) || 60000) + 100');
    assert.ok(sim.includes("const pg = h('div', { class: 'page' }, UKP.c.kop({ judul: 'Simulasi berjalan',"));
  });
  it('jeda penyegar jatuh tepat sesudah batas menit berikutnya (atau sesudah waktu habis)', () => {
    const tunda = sisaMs => ((sisaMs % 60000) || 60000) + 100;
    const ceil = ms => Math.max(0, Math.ceil(ms / 60000));
    for (const sisa of [64000, 60000, 59000, 5000, 1, 125000]) {
      const sesudah = sisa - tunda(sisa);
      assert.ok(sesudah < 0 || ceil(sesudah) === ceil(sisa) - 1, 'sisa ' + sisa);
    }
  });
});

describe('v9.5.3 A3: isian Jumlah soal dan Menit menulis balik nilai yang dipakai', () => {
  it('Kustom: onchange menulis cfg.jumlah dan cfg.menitKustom; oninput tetap membatasi tanpa menulis balik', () => {
    assert.ok(sim.includes("oninput: e => { cfg.jumlah = U.clamp(Math.round(Number(e.target.value)) || 20, 5, 120); gambarRingkas(); }, onchange: e => { e.target.value = cfg.jumlah; } })"));
    assert.ok(sim.includes("oninput: e => { cfg.menitKustom = U.clamp(Math.round(Number(e.target.value)) || 50, 5, 300); gambarRingkas(); }, onchange: e => { e.target.value = cfg.menitKustom; } })"));
  });
  it('Try Out: onchange menulis menitTO()', () => {
    assert.ok(/id: 'sim-m-to'[^\n]*onchange: e => \{ e\.target\.value = menitTO\(\); \} \}\)/.test(sim));
  });
  // peninjau: 7.5 di Jumlah soal tertulis balik "7.5" dan Ringkasan "7.5 soal", padahal simulasi berisi 7 soal; menit 6.5 tertulis "6.5 menit"
  it('nilai desimal dibulatkan sebelum dibatasi, jadi yang tertulis balik sama dengan yang dijalankan', () => {
    const bulat = v => Math.max(5, Math.min(120, Math.round(Number(v)) || 20));
    assert.equal(bulat('7.5'), 8); assert.equal(bulat('7.4'), 7); assert.equal(bulat(''), 20); assert.equal(bulat('-4'), 5); assert.equal(bulat('0.4'), 20);
    assert.ok(sim.includes("const v = Math.round(Number(e.target.value)); if (v) cfg.menitTO = U.clamp(v, 5, 300);"));
  });
});

describe('v9.5.3 Ax1 dan Ax3: label segmen dan bar ujian', () => {
  it('sub Komprehensif mengikuti terbagi; sub Try Out ikut berubah saat Menit diketik', () => {
    assert.ok(sim.includes("sub: (cfg.terbagi ? Math.round((fUKP.menit || 180) / 2) + ' mnt · ±' + Math.ceil((fUKP.soalPerkiraan || 60) / 2) : (fUKP.menit || 180) + ' mnt · ±' + (fUKP.soalPerkiraan || 60)) + ' soal'"));
    assert.ok(/if \(v\) cfg\.menitTO = U\.clamp\(v, 5, 300\); const sb = kartu\.querySelector\('\[data-format="tryout"\] small'\); if \(sb\) sb\.textContent = perkiraan\(\)\[1\] \+ ' soal · ' \+ menitTO\(\) \+ ' mnt';/.test(sim));
  });
  it('"Sisa < 5 mnt" baru tampil di bawah 300 detik', () => {
    assert.ok(sim.includes("h('span', { class: 'sisa tiny', hidden: sisa >= 300 ? true : null }, sisa >= 300 ? null : 'Sisa < 5 mnt')"));
    assert.ok(sim.includes("if (sp && sisa < 300) { sp.textContent = 'Sisa < 5 mnt';"));
  });
});

describe('v9.5.3 A4 dan A5: ruang ujian tim (cara perangkat masing-masing)', () => {
  it('A4: menu Tambah 5 menit memanggil tambahWaktu(), yang ikut menggeser simulasiAktif ujian yang sama di perangkat ini', () => {
    assert.ok(utv.includes("{ teks: 'Tambah 5 menit', ikon: 'jam', onclick: () => tambahWaktu() }"));
    const f = utv.match(/function tambahWaktu\(\) \{([\s\S]*?)\n {4}\}/); assert.ok(f, 'tambahWaktu tidak ditemukan');
    assert.ok(f[1].includes('const u2 = ut.tambahMenit(5)'));
    assert.ok(f[1].includes('if (geser && sa && !sa.selesai && sa.tim && sa.tim.ujianId === u2.id) { sa.akhir += geser * 60000; sa.menit += geser; UKP.store.save(); }'));
    assert.ok(f[1].includes("if (tersiar(u2)) { siarkanUjian(); UKP.toast('Waktu ditambah 5 menit.'); }"), 'lewat room perilaku lama dipertahankan');
    // peninjau: toast tanpa angka menit lama (angka itu hilang saat halaman dimuat ulang, lalu toast menulis menit yang salah)
    assert.ok(f[1].includes("UKP.toast('Waktu ditambah 5 menit. Anggota yang sudah mulai atau memakai tautan lama tidak ikut bertambah.')"));
    assert.ok(!/menitTautanLama/.test(utv), 'angka menit tautan lama tidak lagi disimpan di variabel halaman');
  });
  it('A4: kartu Bagikan menyebut bahwa waktu anggota yang sudah mulai tidak bisa diubah tanpa room', () => {
    assert.ok(utv.includes("ditambahTanpaRoom ? isiBagi.concat("));
    assert.ok(utv.includes("'Waktu sudah ditambah menjadi ' + u.menit + ' menit. Tanpa room, waktu anggota yang sudah mulai tidak bisa diubah. Tautan yang dibagikan sebelumnya memakai waktu lama, jadi bagikan ulang tautan di atas untuk yang belum mulai.'"));
  });
  it('A5: Kerjakan bagian saya memakai sisa waktu ujian sebagai menit, dan kartu Di perangkat ini menyebutnya', () => {
    assert.ok(utv.includes('menit: sisaMenitUjian(u) || u.menit, soalIds: u.soalIds, nama: nm, akhir: u.akhir'));
    assert.ok(utv.includes("const sisaMenitUjian = u => { const ms = u && u.akhir ? u.akhir - Date.now() : 0; return ms > 0 ? Math.min(u.menit, Math.max(1, Math.ceil(ms / 60000))) : null; };"));
    assert.ok(utv.includes("'Sisa waktu ujian ± ' + m + ' mnt. Bagian Anda memakai sisa waktu ini.'"));
    assert.ok(utv.includes("const sk = page.querySelector('[data-k=\"ruang-sisa\"]'); if (sk) { const t = teksSisaUjian(dp.u);"), 'teks sisa diperbarui berkala');
  });
  it('A5: rumus sisa menit (ke atas, paling sedikit 1, paling banyak menit ujian; waktu lewat → null, perilaku lama)', () => {
    const f = utv.match(/const sisaMenitUjian = (u => \{[^\n]*\});/); assert.ok(f);
    // eslint-disable-next-line no-new-func
    const sisaMenitUjian = new Function('return ' + f[1])();
    const kini = Date.now();
    assert.equal(sisaMenitUjian({ menit: 50, akhir: kini + 30 * 60000 - 3000 }), 30);
    assert.equal(sisaMenitUjian({ menit: 50, akhir: kini + 12000 }), 1);
    assert.equal(sisaMenitUjian({ menit: 50, akhir: kini + 50 * 60000 + 5000 }), 50);
    assert.equal(sisaMenitUjian({ menit: 50, akhir: kini - 1000 }), null);
    assert.equal(sisaMenitUjian({ menit: 50, akhir: null }), null);
  });
  it('A5: percobaan tim menyimpan menit yang diberikan sebagai anggaran (rekam.menit dan "dari N mnt")', () => {
    assert.ok(sim.includes("'waktu terpakai ' + Math.min(durasi, r.menit) + ' dari ' + r.menit + ' mnt'"));
    assert.ok(/s\.simulasiAktif = \{ id: U\.id\('sim'\), format: 'tim', tingkat, kode: null, menit,/.test(sim));
  });
});

describe('v9.5.3 A6: UT.nilai({ hanyaYangMengumpulkan }) memakai u.terkumpul', () => {
  const DATA = fs.readdirSync(path.join(__dirname, '..', 'js', 'data')).filter(f => /^(ref|mu-.*)\.js$/.test(f)).sort().map(f => 'data/' + f);
  const UKP = muatInti(['core.js'].concat(DATA, ['learn.js']));
  const UT = UKP.belajar.ujianTim; const K = UKP.konten; const s = UKP.store.get();
  const IDS = J(K.soalSet('TO-B-2026-11').map(x => x.id)).slice(0, 5);
  beforeEach(() => { s.jawaban.length = 0; s.jawabanBersama = []; s.sesiBersama = []; s.simulasi = []; s.profil.nama = 'Nicky'; s.profil.tingkat = 'B'; s.ujianTim = null; });
  it('yang mengumpulkan tanpa jawaban ikut dinilai (skor 0); yang belum mengumpulkan tidak, walau punya jawaban per soal', () => {
    UT.susun({ soalIds: IDS, menit: 50, peserta: ['Nicky', 'Budi', 'Sari'], cara: 'perangkat' }); UT.mulai();
    UT.catat('Nicky', IDS[0], 'A');
    assert.ok(UT.kumpul('Budi', { jawaban: ['-', '-', '-', '-', '-'], ragu: [], detik: 100, sumber: 'ketik' }));
    assert.ok(UT.kumpul('Sari', { jawaban: ['A', 'B', '-', '-', '-'], ragu: [], detik: 200, sumber: 'ketik' }));
    const r = J(UT.ringkas()); assert.equal(Object.values(r.perPeserta).filter(x => x.mengumpulkan).length, 2);
    const se = UT.nilai({ hanyaYangMengumpulkan: true });
    assert.deepEqual(J(se.peserta), ['Budi', 'Sari'], 'jumlah orang di hasil = "2 dari 3 mengumpulkan"');
    assert.ok(se.soal.every(q => q.jawaban.Budi && q.jawaban.Budi.o === '-' && q.jawaban.Budi.b === 0));
    const sk = J(UKP.belajar.skorUjian(UKP.belajar.sesiBersamaDari(se.id)));
    assert.deepEqual(sk.map(x => x.nama).sort(), ['Budi', 'Sari']);
    assert.equal(sk.find(x => x.nama === 'Budi').benar, 0);
    // riwayat per orang tetap hanya untuk yang menjawab minimal satu soal (adaJawab), seperti sebelumnya
    assert.deepEqual([...new Set(s.jawabanBersama.filter(x => x.sesi === se.id).map(x => x.p))], ['Sari']);
  });
  it('tanpa opsi (Satu layar, mode tayang) semua peserta tetap dinilai seperti sebelumnya', () => {
    UT.susun({ soalIds: IDS, menit: 50, peserta: ['Nicky', 'Budi'], cara: 'papan' }); UT.mulai();
    UT.catat('Budi', IDS[0], 'A');
    assert.deepEqual(J(UT.nilai().peserta), ['Nicky', 'Budi']);
  });
});
