'use strict';
// v10.2.6: di HP dan tablet tegak, dialog "Room siap" dan "Undang anggota" menutupi baris "Ingin ikut" di lobi.
// Baris yang sama kini tampil di dalam dialog itu. Uji ini menjaga kaitnya di js/views-ruang.js dan gayanya di css/app.css.
// Tanpa DOM. Jalankan: node --test test/
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const baca = f => fs.readFileSync(path.join(__dirname, '..', f), 'utf8');
const ui = baca('js/views-ruang.js'); const css = baca('css/app.css');
const a = ui.indexOf('UI.dialogBagikan = function (o) {'); const b = ui.indexOf('function dialogUbahRoom()');
const dlg = ui.slice(a, b);
const tanpaKomentar = css.replace(/\/\*[\s\S]*?\*\//g, '');
const aturan = sel => { const i = tanpaKomentar.indexOf(sel + ' {'); assert.ok(i >= 0, 'aturan ' + sel); return tanpaKomentar.slice(i, tanpaKomentar.indexOf('}', i) + 1); };

describe('v10.2.6: yang menunggu tampil di dalam dialog undangan', () => {
  it('dialog bagikan ditemukan dan memakai baris yang sama dengan lobi', () => {
    assert.ok(a > 0 && b > a, 'batas UI.dialogBagikan');
    assert.match(dlg, /const slotIngin = h\('div', \{ class: 'ingin-dlg', 'aria-live': 'polite' \}\);/);
    assert.match(dlg, /const segarIngin = \(\) => gantiBilaBeda\(slotIngin, \[barisInginIkut\(\)\]\);/);
    assert.ok(!/tambahkanTamu|abaikanTamu|'Ingin ikut/.test(dlg), 'tidak ada salinan baris atau tombol di dialog');
  });
  it('baris dan pengganti isi hanya ada satu, di tingkat modul', () => {
    assert.equal(ui.split('function barisInginIkut(').length - 1, 1);
    assert.equal(ui.split('function gantiBilaBeda(').length - 1, 1);
    assert.match(ui, /\n  function barisInginIkut\(\) \{\n/);
    assert.match(ui, /\n  function gantiBilaBeda\(slot, anak\) \{\n/);
    assert.ok(ui.indexOf('\n  function barisInginIkut()') < a, 'didefinisikan sebelum dialog');
  });
  it('hanya perangkat pemimpin yang mendapat isi, paling banyak 3 baris dan "dan N lainnya"', () => {
    const f = ui.slice(ui.indexOf('\n  function barisInginIkut()'), ui.indexOf('\n  function gantiBilaBeda('));
    assert.match(f, /const iT = info\(\); if \(!iT \|\| iT\.peran !== 'tuan'\) return null;/);
    assert.match(f, /const tampil = calon\.slice\(0, 3\);/);
    assert.match(f, /calon\.length > 3 \? h\('li', \{ class: 'meta' \}, 'dan ' \+ \(calon\.length - 3\) \+ ' lainnya'\) : null/);
    assert.match(f, /onclick: \(\) => tambahkanTamu\(n\)/); assert.match(f, /onclick: \(\) => abaikanTamu\(n\)/);
  });
  it('blok dipasang di antara kepala dan isi dialog, digambar saat dibuka, lalu mengikuti kabar', () => {
    assert.match(dlg, /dlg\.classList\.add\('dlg-bagikan'\); dlg\.insertBefore\(slotIngin, badan\);/);
    assert.match(dlg, /segarIngin\(\);[\s\S]*const lepasDengar = dengar\(\(\) => \{/);
    // tepi atas kotak ditahan saat dibuka dan dilepas bersama pendengar
    assert.match(dlg, /tahanAtas\(\); root\.addEventListener\('resize', tahanAtas\);/);
    assert.match(dlg, /lepasIngin = \(\) => \{ lepasDengar\(\); root\.removeEventListener\('resize', tahanAtas\); \};/);
    assert.match(dlg, /if \(!slotIngin\.isConnected\) \{ if \(lepasIngin\) \{ lepasIngin\(\); lepasIngin = null; \} return; \} segarIngin\(\); \}\);/);
  });
  it('pendengar dilepas saat dialog ditutup', () => {
    assert.match(dlg, /onClose: \(\) => \{ if \(lepasIngin\) \{ lepasIngin\(\); lepasIngin = null; \} \} \}\);/);
    assert.match(ui, /function dengar\(f\) \{ pendengarLokal\.add\(f\); return \(\) => pendengarLokal\.delete\(f\); \}/);
  });
  it('Tambahkan dan Abaikan tetap memberi tahu pendengar', () => {
    assert.match(ui, /calonTamu\.delete\(kunciNama\(nama\)\); periksaTamu\(\); beriTahu\('tamu'\); return true;/);
    assert.match(ui, /function abaikanTamu\(nama\) \{[^\n]*beriTahu\('tamu'\); \}/);
  });
  it('dialog tetap bertanda tembus dan tetap mengembalikan dialognya', () => {
    assert.match(dlg, /const dlg = UKP\.dialog\(\{ judul: o\.siap \? 'Room siap' : 'Undang anggota', kelas: 'dlg-room', tembus: true,/);
    assert.match(dlg, /\n    return dlg;\n  \};\n\s*$/);
  });
  it('teks dialog tanpa tanda pisah panjang, tanda panah, dan istilah teknis', () => {
    const teks = (dlg.match(/'[^'\n]*'/g) || []).join(' ');
    assert.doesNotMatch(teks, /[\u2014\u2013\u2192\u2190]|->|relai|mqtt/i);
  });
});

describe('v10.2.6: gaya blok di dalam dialog', () => {
  it('blok kosong tidak memakan tempat dan berada di luar bagian yang bergulir', () => {
    assert.match(aturan('.ingin-dlg:empty'), /display: none;/);
    assert.match(aturan('dialog.dlg-bagikan[open]'), /display: flex; flex-direction: column; max-height: calc\(100dvh - 24px\); overflow: hidden;/);
    assert.match(aturan('.dlg-bagikan > .dlg-body'), /flex: 1 1 auto; min-height: 0; max-height: none;/);
    assert.match(tanpaKomentar, /\.dlg-bagikan > \.dlg-head, \.dlg-bagikan > \.dlg-foot, \.dlg-bagikan > \.ingin-dlg \{ flex: none; \}/);
  });
  it('tombol di blok setinggi 44 px di HP dan layar sentuh', () => {
    assert.match(tanpaKomentar, /@media \(max-width: 599px\), \(pointer: coarse\) \{ \.ingin-dlg \.ingin-ikut button \{ --btn-h: 44px; min-height: 44px; \} \}/);
  });
  it('satu orang satu baris: teks menyusut dan membungkus, tombol tidak', () => {
    assert.match(aturan('.ingin-dlg .ingin-ikut > li'), /flex-wrap: nowrap;/);
    assert.match(aturan('.ingin-dlg .ingin-ikut-teks'), /flex: 1 1 0;/);
    assert.match(aturan('.ingin-dlg .ingin-ikut button'), /flex: none;/);
    assert.match(aturan('.ingin-ikut-teks'), /min-width: 0; overflow-wrap: anywhere;/);
  });
  it('peramban tanpa satuan dvh mendapat batas tinggi vh', () => {
    const i = css.indexOf('@supports not (height: 1dvh) {'); assert.ok(i > 0);
    assert.match(css.slice(i, i + 700), /dialog\.dlg-bagikan\[open\] \{ max-height: calc\(100vh - 24px\); \}/);
  });
  it('gaya baru tidak ditaruh di bagian berpagar v9.6 dan v10', () => {
    assert.ok(css.indexOf('.ingin-dlg') < css.indexOf('/* ===== v9.6 tampilan: '), 'sebelum bagian v9.6');
    assert.equal(css.slice(css.indexOf('/* ===== v9.6 tampilan: ')).indexOf('ingin-dlg'), -1);
  });
});
