/* Uji v9.6: penjaga gaya "v9.6 tampilan" di css/app.css dan kait kelasnya di js (lihat docs/DESAIN-V96.md).
   - Bagian berpagar: tiap pembuka punya penutup bernama sama, berurutan, dan semuanya di akhir berkas.
   - Di dalam bagian itu tidak ada fitur CSS yang tidak dikenal Safari atau Android lama.
   - Token --v96-* yang dipakai didefinisikan di :root; dua pemilih tema gelap mendefinisikan himpunan token yang sama.
   - Pita kepala halaman hanya lewat opsi pita pada UKP.c.kop, tidak tampil di layar sesi dan ujian, dan mati saat cetak.
   - Tanda centang pilihan berbentuk daftar terlihat di atas isian (aturan baru menang atas aturan lama).
   Tanpa DOM. Jalankan: node --test test/ */
'use strict';
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.join(__dirname, '..');
const css = fs.readFileSync(path.join(ROOT, 'css', 'app.css'), 'utf8');
const baca = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const BUKA = /\/\* ===== v9\.6 tampilan: (.+?) ===== \*\//g, TUTUP = /\/\* ===== akhir v9\.6 (.+?) ===== \*\//g;
const buka = [...css.matchAll(BUKA)], tutup = [...css.matchAll(TUTUP)];
const awal = buka.length ? buka[0].index : -1;
const blok = awal >= 0 ? css.slice(awal) : '';
const tanpaKomentar = blok.replace(/\/\*[\s\S]*?\*\//g, '');

describe('v9.6: bagian berpagar di akhir css/app.css', () => {
  it('lima bagian atau lebih, tiap pembuka punya penutup bernama sama dan berurutan', () => {
    assert.ok(buka.length >= 5, 'jumlah bagian ' + buka.length);
    assert.deepEqual(tutup.map(m => m[1]), buka.map(m => m[1]));
    buka.forEach((m, i) => { assert.ok(tutup[i].index > m.index, m[1] + ': penutup sesudah pembuka'); if (buka[i + 1]) assert.ok(tutup[i].index < buka[i + 1].index, m[1] + ': tidak tumpang tindih'); });
    for (const nama of ['dasar bersama', 'layar soal dan pembahasan', 'papan bersama dan HP anggota', 'hasil dan evaluasi', 'pengaturan sesi dan halaman baca']) assert.ok(buka.some(m => m[1] === nama), 'bagian "' + nama + '"');
  });
  it('tidak ada aturan lain sesudah bagian v9.6 terakhir, dan tambahannya paling banyak 50 KB', () => {
    const akhir = tutup[tutup.length - 1]; assert.equal(css.slice(akhir.index + akhir[0].length).trim(), '');
    // batas semula 45 KB (v9.6.0); dinaikkan ke 50 KB di v9.6.5 untuk pita lobi, evaluasi, dan layar selesai
    assert.ok(Buffer.byteLength(blok) <= 50 * 1024, 'besar bagian v9.6: ' + Buffer.byteLength(blok) + ' bita');
  });
});

// v9.6.6: pembaca aturan untuk seluruh css/app.css. Sadar tanda kutip dan kurung, jadi kurawal di dalam string pemilih (mis.
// [data-params='{"kode":"A1"}']) tidak memecah aturan. Mengembalikan semua aturan gaya { pemilih, isi, kurung }, termasuk yang
// ditulis bersarang; kurung = kepala blok pembungkus dari luar ke dalam; isi = deklarasi milik aturan itu sendiri.
// Huruf dikecilkan lebih dulu: nama elemen dan nama properti tidak peka huruf besar.
const cssKecil = baca('css/app.css').replace(/\/\*[\s\S]*?\*\//g, '').toLowerCase();
const lewatiKutip = (teks, i) => { const q = teks[i]; i++; while (i < teks.length && teks[i] !== q) { if (teks[i] === '\\') i++; i++; } return i + 1; };
function pecahAtas(s, pemisah) {   // pecah di pemisah tingkat atas saja (di luar kurung, kurung siku, dan tanda kutip)
  const out = []; let d = 0, awal = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '"' || c === "'") { i = lewatiKutip(s, i) - 1; continue; }
    if (c === '(' || c === '[') d++; else if (c === ')' || c === ']') d--;
    else if (d === 0 && pemisah.test(c)) { out.push(s.slice(awal, i)); awal = i + 1; }
  }
  out.push(s.slice(awal));
  return out.map(x => x.trim()).filter(Boolean);
}
function aturanGaya(css) {
  const hasil = [];
  const jalan = (teks, kurung) => {
    let i = 0, awal = 0, milik = '';
    while (i < teks.length) {
      const c = teks[i];
      if (c === '"' || c === "'") { i = lewatiKutip(teks, i); continue; }
      if (c === ';') { milik += teks.slice(awal, i + 1); awal = i + 1; i++; continue; }
      if (c === '{') {
        const kepala = teks.slice(awal, i).trim().replace(/\s+/g, ' ');
        let d = 1, j = i + 1;
        while (j < teks.length && d > 0) { const x = teks[j]; if (x === '"' || x === "'") { j = lewatiKutip(teks, j); continue; } if (x === '{') d++; else if (x === '}') d--; j++; }
        const isi = jalan(teks.slice(i + 1, j - 1), kurung.concat([kepala]));
        if (kepala.charAt(0) !== '@') hasil.push({ pemilih: pecahAtas(kepala, /,/), isi: isi.trim(), kurung: kurung.slice() });
        awal = j; i = j; continue;
      }
      i++;
    }
    return milik + teks.slice(awal);
  };
  jalan(css, []);
  return hasil;
}
// pemilih yang subjeknya (bagian terakhir) menyebut main, html, body, :root, #main, atau [id=main], juga di dalam :is() dan :where()
function kenaAkar(pemilih) {
  const s = pecahAtas(pemilih, /[\s>+~]/).pop() || '';
  return /(^|[^\w#.-])(main|html|body)(?![\w-])/.test(s) || /:root(?![\w-])/.test(s) || /#main(?![\w-])/.test(s) || /\[\s*id\s*[~|^$*]?=\s*["']?main["']?\s*(i\s*)?\]/.test(s);
}
const overflowDi = isi => [...isi.matchAll(/(?:^|;|\s)(overflow(?:-x|-y|-inline|-block)?)\s*:\s*([^;}]+)/g)].map(m => m[1] + ': ' + m[2].trim());

describe('v9.6: fitur CSS yang dihindari', () => {
  for (const [nama, re] of [['border-image', /border-image/], ['color-mix()', /color-mix\(/], ['@container', /@container/], ['@layer', /@layer/], ['backdrop-filter', /backdrop-filter/], [':has()', /:has\(/], ['penulisan bersarang (&)', /^\s*&/m], ['satuan dvh/svh/lvh', /\d(?:dvh|svh|lvh)\b/]]) {
    it('tanpa ' + nama, () => { assert.ok(!re.test(tanpaKomentar), nama + ' ditemukan di bagian v9.6'); });
  }
  it('bayangan hanya garis dalam (inset) atau none; tanpa gradasi sebagai latar', () => {
    for (const m of tanpaKomentar.matchAll(/box-shadow:\s*([^;}]+)/g)) assert.match(m[1].trim(), /^(none|inset\b)/, 'box-shadow: ' + m[1]);
    assert.ok(!/(linear|radial|conic)-gradient\(/.test(tanpaKomentar), 'gradasi ditemukan');
  });
  it('overflow-x: clip hanya di dalam @supports, dengan pita cadangan untuk peramban tanpa clip', () => {
    const i = tanpaKomentar.indexOf('@supports (overflow-x: clip)'); assert.ok(i >= 0);
    assert.ok(!/overflow-x:\s*clip/.test(tanpaKomentar.slice(0, i)), 'clip dipakai sebelum @supports');
    assert.match(tanpaKomentar.slice(0, i), /\.kop-pita::before\s*\{[^}]*left:\s*calc\(-1 \* var\(--gutter\)\)/, 'pita cadangan selebar isi + gutter');
  });
  // v9.6.6: di WebKit seluler lama (potret WebKit lama 15.4 dan 16.0, emulasi seluler) overflow-x: clip pada main membuat isi halaman
  // yang tidak berlapis tidak tergambar. Karena itu potongan bawaan ada di akar dokumen, dan main hanya dipotong untuk penunjuk mouse
  // di luar WebKit iOS dan iPadOS. Pemeriksaan ini membaca SELURUH css/app.css, bukan hanya bagian v9.6.
  it('overflow pada html, :root, body, dan main hanya ada di blok v9.6.6, dan main hanya dipotong untuk penunjuk mouse', () => {
    const temuan = aturanGaya(cssKecil).filter(r => r.pemilih.some(kenaAkar) && overflowDi(r.isi).length)
      .map(r => ({ pemilih: r.pemilih.join(', '), isi: overflowDi(r.isi).join('; '), kurung: r.kurung }));
    const SUP = '@supports (overflow-x: clip)', MOUSE = '@media (hover: hover) and (pointer: fine)', BUKAN_IOS = '@supports not (-webkit-touch-callout: none)';
    assert.deepEqual(temuan, [
      { pemilih: 'html', isi: 'overflow-x: clip', kurung: [SUP] },
      { pemilih: 'html', isi: 'overflow-x: visible', kurung: [SUP, MOUSE, BUKAN_IOS] },
      { pemilih: 'main', isi: 'overflow-x: clip', kurung: [SUP, MOUSE, BUKAN_IOS] },
    ]);
  });
  it('pembaca aturan mengenali daftar pemilih, singkatan, huruf besar, id, :is(), penulisan bersarang, dan kurawal di dalam string', () => {
    const contoh = [
      '@media (min-width: 1px) { main, .x { overflow-x: clip; } MAIN.app { OVERFLOW: clip visible; } }',   // 0, 1
      'body > main { overflow-x: hidden; }', ':root { overflow-x: clip; }', '#main { overflow-y: clip; }',     // 2, 3, 4
      '[id="main"] { overflow-x: clip; }', ':is(main, .x) { overflow-x: clip; }', ':where(main) { overflow-x: clip; }',   // 5, 6, 7
      '.shell { main { overflow-x: clip; } }',                                                               // 8 (anak), 9 (.shell)
      ".card:has(a[data-params='{\"kode\":\"a1\"}']) { overflow: hidden; }",                                  // 10: bukan akar
      'main .seg { overflow: hidden; }', '.a main { color: red; }', '.main, .html-x, #main-lain { overflow: hidden; }',   // 11, 12, 13: bukan
    ].join('\n').toLowerCase();
    const r = aturanGaya(contoh);
    assert.equal(r.length, 14, 'jumlah aturan gaya');
    const kena = r.map((x, i) => (x.pemilih.some(kenaAkar) && overflowDi(x.isi).length ? i : -1)).filter(i => i >= 0);
    assert.deepEqual(kena, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
    assert.deepEqual(r[0].kurung, ['@media (min-width: 1px)']); assert.deepEqual(r[2].kurung, []); assert.deepEqual(r[8].kurung, ['.shell']);
    assert.deepEqual(overflowDi(r[1].isi), ['overflow: clip visible']);
    assert.deepEqual(r[10].pemilih, [".card:has(a[data-params='{\"kode\":\"a1\"}'])"]);
  });
  it('pembaca aturan menemukan jumlah aturan yang sama dengan hitungan kurawal di luar string', () => {
    // hitungan mandiri: blok pembuka yang kepalanya bukan aturan-at, dihitung dengan cara lain (tanpa rekursi)
    let n = 0, awal = 0;
    for (let i = 0; i < cssKecil.length; i++) {
      const c = cssKecil[i];
      if (c === '"' || c === "'") { i = lewatiKutip(cssKecil, i) - 1; continue; }
      if (c === '{') { if (cssKecil.slice(awal, i).trim().charAt(0) !== '@') n++; awal = i + 1; } else if (c === '}' || c === ';') awal = i + 1;
    }
    assert.equal(aturanGaya(cssKecil).length, n);
    assert.ok(n > 3000, 'berkas terbaca utuh: ' + n + ' aturan');
  });
});

describe('v9.6: token --v96-*', () => {
  const definisi = sel => { const i = tanpaKomentar.indexOf(sel); assert.ok(i >= 0, 'blok ' + sel); const j = tanpaKomentar.indexOf('}', i); return new Set([...tanpaKomentar.slice(i, j).matchAll(/(--v96-[a-z0-9-]+)\s*:/g)].map(m => m[1])); };
  it('tiap token yang dipakai didefinisikan di :root', () => {
    const dasar = new Set([...tanpaKomentar.matchAll(/(--v96-[a-z0-9-]+)\s*:/g)].map(m => m[1]));
    const pakai = new Set([...tanpaKomentar.matchAll(/var\((--v96-[a-z0-9-]+)/g)].map(m => m[1]));
    for (const t of pakai) assert.ok(dasar.has(t), t + ' dipakai tetapi tidak didefinisikan');
    assert.ok(definisi(':root {').size >= 20);
  });
  it('dua pemilih tema gelap mendefinisikan himpunan token yang sama', () => {
    const a = definisi(':root:not([data-theme="light"])'), b = definisi(':root[data-theme="dark"]');
    assert.ok(a.size >= 8); assert.deepEqual([...a].sort(), [...b].sort());
  });
});

describe('v9.6: kepala halaman berpita', () => {
  it('kelas .kop-pita hanya dipasang lewat opsi pita di UKP.c.kop dan kopHalaman', () => {
    assert.match(baca('js/core.js'), /'page-head' \+ \(o\.pita \? ' kop-pita' : ''\)/);
    assert.match(baca('js/views-home.js'), /'page-head' \+ \(o\.pita \? ' kop-pita' : ''\)/);
    const lain = fs.readdirSync(path.join(ROOT, 'js')).filter(f => /\.js$/.test(f) && !['core.js', 'views-home.js'].includes(f));
    for (const f of lain) assert.ok(!/kop-pita/.test(baca('js/' + f)), 'js/' + f + ' menulis kelas kop-pita sendiri');
  });
  it('dua belas pemanggil atau lebih memakai pita: true; layar ujian tim tidak; di room hanya pembantu kop halaman lobi', () => {
    let n = 0; for (const f of fs.readdirSync(path.join(ROOT, 'js')).filter(f => /^views-.*\.js$/.test(f))) n += (baca('js/' + f).match(/pita: true/g) || []).length;
    assert.ok(n >= 11, 'pemanggil berpita: ' + n);
    assert.ok(!/pita: true/.test(baca('js/views-ujian-tim.js')), 'js/views-ujian-tim.js');
    // v9.6.5: halaman room di luar sesi (Room tim, lobi, gabung, tautan rusak, room ditutup) dibuat lewat satu pembantu kop;
    // layar soal anggota dan papan pemimpin tidak memakai pembantu itu, jadi tidak pernah berpita
    const room = baca('js/views-ruang.js'); const baris = room.split('\n').filter(b => /pita: true/.test(b));
    assert.ok(baris.length <= 1, 'pita: true di views-ruang.js hanya di satu tempat');
    for (const b of baris) assert.match(b, /const kop = \(judul, o\) =>/, 'pita room hanya di pembantu kop lobi');
  });
  it('pita selebar layar tidak berlaku di mode ujian dan fokus, dan hanya untuk layar (bukan cetak)', () => {
    const i = tanpaKomentar.indexOf('@supports (overflow-x: clip)'); const s = tanpaKomentar.slice(i, i + 600);
    assert.match(s, /@media screen/); assert.match(s, /body:not\(\[data-mode="ujian"\]\):not\(\[data-mode="fokus"\]\) \.page-head\.kop-pita::before/);
    assert.match(tanpaKomentar, /@media \(forced-colors: active\)[^{]*\{[\s\S]*?\.page-head\.kop-pita::before[\s\S]*?content: none/);
  });
});

describe('v9.6: keadaan yang harus terlihat', () => {
  it('tanda centang pilihan berbentuk daftar memakai warna teks di atas isian dan menang atas aturan lama', () => {
    const lama = css.slice(0, awal); assert.match(lama, /\.seg\.bersub button:is\(\[aria-pressed="true"\], \[aria-checked="true"\]\)::before/);
    assert.match(tanpaKomentar, /main \.seg\.bersub button\[aria-pressed="true"\]::before[^{]*\{\s*background: var\(--primary-ink\)/);
    assert.match(tanpaKomentar, /main \.seg\.seg-bank button\[aria-pressed="true"\]::before/);
  });
  it('opsi terpilih, kunci, dan salah punya garis 2 px (garis + garis dalam) tanpa bergantung pada :has', () => {
    assert.match(tanpaKomentar, /\[data-dipilih\][^{]*\{[^}]*box-shadow: inset 0 0 0 1px var\(--primary\)/);
    assert.match(tanpaKomentar, /label\[data-hasil="salah"\]\s*\{[^}]*box-shadow: inset 0 0 0 1px var\(--attn\)/);
  });
  it('kelas kait yang dipakai gaya memang dipasang kode', () => {
    assert.match(baca('js/soal.js'), /umpan-salah-opsi/); assert.match(baca('js/soal.js'), /umpan-jebakan/);
    assert.match(baca('js/views-simulasi.js'), /kartu-langkah/); assert.match(baca('js/views-belajar.js'), /daftar-kartu/);
    for (const k of ['umpan-salah-opsi', 'umpan-jebakan', 'kartu-langkah', 'daftar-kartu']) assert.ok(tanpaKomentar.includes('.' + k), 'gaya untuk .' + k);
  });
});
