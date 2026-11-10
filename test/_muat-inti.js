/* Pemuat bersama untuk uji modul peramban (js/core.js, js/learn.js) di Node: DOM tiruan minimal di konteks vm.
   Bukan berkas uji (tidak berakhiran .test.js), jadi test/index.js tidak menjalankannya sendiri. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function muatInti(berkas) {
  const noop = () => {};
  const el = () => ({ appendChild: noop, setAttribute: noop, removeAttribute: noop, addEventListener: noop, style: { setProperty: noop }, dataset: {}, classList: { add: noop, remove: noop } });
  const ctx = {
    Element: function () {}, DocumentFragment: function () {}, console, Intl, Date, Math, JSON,
    document: { addEventListener: noop, removeEventListener: noop, body: null, head: null, getElementById: () => null, createElement: el, documentElement: el(), querySelector: () => null, querySelectorAll: () => [] },
    addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    localStorage: { getItem: () => null, setItem: noop, removeItem: noop }, location: { hash: '' }, history: { replaceState: noop, pushState: noop },
    navigator: { platform: 'Linux', userAgent: '' }, requestAnimationFrame: noop, cancelAnimationFrame: noop,
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t && t.unref) t.unref(); return t; }, clearTimeout,
  };
  ctx.window = ctx; vm.createContext(ctx);
  for (const b of berkas || ['core.js']) vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', b), 'utf8'), ctx, { filename: b });
  return ctx.UKP;
}
module.exports = { muatInti };
