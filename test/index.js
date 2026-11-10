/* Titik masuk untuk `node --test test/`: Node 22 memperlakukan argumen direktori sebagai modul,
   sehingga berkas ini memuat semua uji *.test.js di folder test/. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
fs.readdirSync(__dirname).filter(f => /\.test\.js$/.test(f)).sort().forEach(f => require(path.join(__dirname, f)));
