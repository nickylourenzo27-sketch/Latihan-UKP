/* MABAR UKP, v10.3.0: Fokus UKP C. Dua halaman:
   #fokus             dua kartu jalur (BUT, Pajak Internasional): jumlah soal, yang sudah dikerjakan, persentase benar, topik terlemah,
                      pilihan jumlah 10/20/40, Latih intens, Mode mabar, Buka cheat sheet. Tampil untuk semua tingkat.
   #contekan/<jalur>  cheat sheet jalur: daftar isi, bagian digambar menurut jenisnya (tabel, butir, rumus, langkah, jebakan), Cetak.
   Data jalur dari js/data/fokus-c.js (UKP.fokusC); angka dari UKP.belajar.fokus (js/learn.js). Ajakan di Beranda dan halaman Latih
   (UKP.c.ajakFokus) hanya untuk profil tingkat C. */
(function (root) {
  const UKP = root.UKP; const h = UKP.h; const L = UKP.belajar;
  const ikon = (n, c, d) => UKP.icon(n, c, d);
  const angka = n => UKP.fmt && UKP.fmt.angka ? UKP.fmt.angka(n) : String(n);
  const FK = () => (L && L.fokus) || null;
  const JUDUL_AJAK = 'Fokus UKP C: BUT dan Pajak Internasional';
  const N_PILIH = [10, 20, 40];
  const gulirHalus = () => (typeof UKP.gulirHalus === 'function' ? UKP.gulirHalus() : 'auto');

  // parameter rute Latih untuk satu jalur (dipakai tombol di kedua halaman dan diuji di test/v1030-fokus.test.js)
  const paramsIntens = (id, n) => ({ fokus: id, n: N_PILIH.includes(Number(n)) ? Number(n) : 20, mulai: true });
  const paramsMabar = (id, n) => ({ atur: 1, bersama: 1, fokus: id, n: N_PILIH.includes(Number(n)) ? Number(n) : 20 });
  // kalimat angka kartu jalur dari L.fokus.ringkas
  function kalimatKemajuan(r) {
    if (!r.nDikerjakan) return 'Belum ada soal yang dikerjakan.';
    return 'Sudah dikerjakan ' + angka(r.nDikerjakan) + ' dari ' + angka(r.nSoal) + ' soal, ' + r.persen + '% benar.';
  }
  function kalimatTerlemah(r) {
    if (!r.terlemah) return 'Topik terlemah belum bisa dinilai. Kerjakan paling sedikit 3 soal dalam satu topik.';
    const t = r.terlemah.topik;
    return 'Topik terlemah: ' + t.id + (t.judul ? ' ' + t.judul : '') + ' (' + r.terlemah.persen + '% benar dari ' + r.terlemah.n + ' soal).';
  }

  function kartuJalur(j, r, utama) {
    let n = 20;
    const jid = 'fokus-j-' + j.id;
    const tIntens = h('button', { type: 'button', class: 'btn' + (utama ? ' btn-primary' : '') + ' fokus-intens', 'data-jalur': j.id, onclick: () => UKP.go('latih', paramsIntens(j.id, n)) }, ikon('play', null, true), h('span', null, 'Latih intens, 20 soal'));
    const seg = h('div', { class: 'seg fokus-jumlah', role: 'group', 'aria-label': 'Jumlah soal ' + j.judul },
      N_PILIH.map(x => h('button', { type: 'button', 'aria-pressed': String(x === n), 'data-n': String(x), onclick: e => {
        n = x; seg.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === e.currentTarget)));
        tIntens.lastChild.textContent = 'Latih intens, ' + Math.min(n, r.nSoal) + ' soal';
      } }, String(x))));
    if (r.nSoal < 20) tIntens.lastChild.textContent = 'Latih intens, ' + r.nSoal + ' soal';
    return h('article', { class: 'card fokus-kartu', 'aria-labelledby': jid, 'data-jalur': j.id },
      h('div', { class: 'fokus-kepala' }, h('h2', { class: 'fokus-judul', id: jid }, j.judul), h('p', { class: 'fokus-n' }, h('strong', null, angka(r.nSoal)), ' soal')),
      h('p', { class: 'fokus-kemajuan' }, kalimatKemajuan(r)),
      h('p', { class: 'fokus-terlemah small' }, kalimatTerlemah(r)),
      h('div', { class: 'fokus-pilih' }, h('span', { class: 'label', 'aria-hidden': 'true' }, 'Jumlah soal'), seg),
      r.nSoal ? tIntens : h('p', { class: 'small muted' }, 'Soal jalur ini belum dimuat.'),
      h('div', { class: 'fokus-aksi' },
        r.nSoal ? h('button', { type: 'button', class: 'btn fokus-mabar', onclick: () => UKP.go('latih', paramsMabar(j.id, n)) }, ikon('tim', null, true), 'Mode mabar') : null,
        UKP.link([ikon('lembar', null, true), 'Buka cheat sheet'], 'contekan', { jalur: j.id }, 'btn fokus-contek')));
  }

  UKP.views.fokus = function () {
    const page = h('div', { class: 'page halaman-fokus' });
    page.appendChild(UKP.c.kop({ pita: true, judul: 'Fokus UKP C', lead: 'Latihan intens dan cheat sheet untuk dua materi inti Tingkat C: BUT dan Pajak Internasional.' }));
    const F = FK(); const jalur = F ? F.semua() : [];
    if (!jalur.length) { page.appendChild(UKP.c.kosong('Fokus UKP C belum dimuat', 'Muat ulang halaman ini. Bila tetap kosong, buka Latih dan pilih kelompok C9 atau C10.', UKP.link('Buka Latih', 'latih', { atur: 1 }, 'btn btn-sm'))); return page; }
    const data = jalur.map(j => ({ j, r: F.ringkas(j.id) }));
    // satu tombol terisi per layar: jalur yang bagiannya paling sedikit dikerjakan (seri: yang pertama)
    let iUtama = 0; data.forEach((d, i) => { const a = d.r.nSoal ? d.r.nDikerjakan / d.r.nSoal : 1; const b = data[iUtama].r.nSoal ? data[iUtama].r.nDikerjakan / data[iUtama].r.nSoal : 1; if (a < b) iUtama = i; });
    page.appendChild(h('div', { class: 'fokus-kisi' }, data.map((d, i) => kartuJalur(d.j, d.r, i === iUtama))));
    page.appendChild(h('p', { class: 'small muted fokus-catatan' }, 'Urutan latihan intens: soal sulit yang belum pernah dikerjakan lebih dulu, lalu soal yang pernah salah, lalu sisanya. Topik diselang dan tidak ada soal yang diulang dalam satu sesi.'));
    return page;
  };

  // ---------- cheat sheet ----------
  const dasarKecil = d => d ? h('span', { class: 'ct-dasar-butir' }, d) : null;
  const GAMBAR = {
    tabel(b) {
      const kolom = Array.isArray(b.kolom) ? b.kolom : [];
      return h('div', { class: 'ct-tabel-wrap' }, h('table', { class: 'ct-tabel', 'data-kolom': String(kolom.length) },
        h('thead', null, h('tr', null, kolom.map(k => h('th', { scope: 'col' }, k)))),
        h('tbody', null, (b.baris || []).map(baris => h('tr', null, baris.map((sel, i) => h(i ? 'td' : 'th', { scope: i ? null : 'row', 'data-kolom': kolom[i] || '' }, sel)))))));
    },
    butir(b) { return h('ul', { class: 'ct-butir' }, (b.butir || []).map(x => h('li', null, h('span', null, x.teks), dasarKecil(x.dasar)))); },
    rumus(b) {
      return h('div', { class: 'ct-rumus-daftar' }, (b.rumus || []).map(x => h('div', { class: 'ct-rumus' },
        h('p', { class: 'ct-rumus-nama' }, x.nama), h('p', { class: 'ct-rumus-isi' }, x.isi),
        x.contoh ? h('p', { class: 'ct-rumus-contoh' }, h('span', { class: 'ct-tanda' }, 'Contoh'), ' ', x.contoh) : null, dasarKecil(x.dasar))));
    },
    langkah(b) { return h('ol', { class: 'ct-langkah' }, (b.langkah || []).map(x => h('li', null, h('span', null, x.teks), dasarKecil(x.dasar)))); },
    jebakan(b) { return h('ul', { class: 'ct-jebakan' }, (b.butir || []).map(x => h('li', null, ikon('peringatan', 'ct-jebak-ikon', true), h('span', null, h('span', { class: 'visually-hidden' }, 'Jebakan: '), x.teks)))); },
  };
  const NAMA_JENIS = { tabel: 'Tabel', butir: 'Butir', rumus: 'Rumus', langkah: 'Langkah', jebakan: 'Jebakan' };

  UKP.views.contekan = function (params) {
    params = params || {}; const F = FK(); const j = F ? F.jalur(params.jalur) : null;
    const page = h('div', { class: 'page halaman-contekan' });
    if (!j) {
      page.appendChild(UKP.c.kop({ pita: true, judul: 'Cheat sheet', lead: 'Pilih jalur di halaman Fokus UKP C.' }));
      page.appendChild(UKP.c.kosong('Cheat sheet tidak ditemukan', 'Jalur yang diminta tidak ada.', UKP.link('Buka Fokus UKP C', 'fokus', null, 'btn btn-sm')));
      return page;
    }
    const bagian = (Array.isArray(j.bagian) ? j.bagian : []).filter(b => b && GAMBAR[b.jenis]);
    const latih = () => UKP.go('latih', paramsIntens(j.id, 20));
    const cetak = () => { try { root.print(); } catch (e) {} };
    const tombolCetak = () => h('button', { type: 'button', class: 'btn ct-cetak', onclick: cetak }, ikon('print', null, true), 'Cetak');
    page.dataset.jalur = j.id;
    page.appendChild(UKP.c.kop({ pita: true, crumbs: [{ teks: 'Fokus UKP C', view: 'fokus' }, { teks: 'Cheat sheet ' + j.judul }], judul: 'Cheat sheet ' + j.judul,
      lead: bagian.length + ' bagian. Baca sampai habis, lalu uji dengan latihan intens.' }));
    page.appendChild(h('div', { class: 'btn-row ct-aksi' },
      h('button', { type: 'button', class: 'btn btn-primary ct-latih', onclick: latih }, ikon('play', null, true), 'Latih jalur ini'), tombolCetak()));
    if (!bagian.length) { page.appendChild(UKP.c.kosong('Isi cheat sheet belum tersedia', 'Sementara itu, latih soal jalur ini.')); return page; }
    const idB = b => 'ct-' + j.id + '-' + b.id;
    const lompat = (e, b) => {
      e.preventDefault(); const el = document.getElementById(idB(b)); if (!el) return;
      try { el.scrollIntoView({ behavior: gulirHalus(), block: 'start' }); } catch (x) { el.scrollIntoView(); }
      const jd = el.querySelector('h2'); if (jd) { try { jd.focus({ preventScroll: true }); } catch (x) { jd.focus(); } }
    };
    page.appendChild(h('nav', { class: 'ct-isi', 'aria-labelledby': 'ct-isi-j' }, h('h2', { class: 'ct-isi-judul', id: 'ct-isi-j' }, 'Daftar isi'),
      h('ol', { class: 'ct-isi-daftar' }, bagian.map(b => h('li', null, h('a', { href: UKP.href('contekan', { jalur: j.id }), 'data-lompat': idB(b), onclick: e => lompat(e, b) }, b.judul))))));
    page.appendChild(h('div', { class: 'ct-badan' }, bagian.map((b, i) => h('section', { class: 'ct-bagian', id: idB(b), 'data-jenis': b.jenis, 'aria-labelledby': idB(b) + '-j' },
      h('div', { class: 'ct-bagian-kepala' }, h('h2', { id: idB(b) + '-j', tabindex: '-1' }, h('span', { class: 'ct-no', 'aria-hidden': 'true' }, String(i + 1)), b.judul), h('span', { class: 'ct-jenis' }, NAMA_JENIS[b.jenis] || '')),
      GAMBAR[b.jenis](b),
      b.dasar ? h('p', { class: 'ct-dasar' }, h('span', { class: 'ct-tanda' }, 'Dasar'), ' ', b.dasar) : null))));
    const lain = F.semua().filter(x => x.id !== j.id);
    page.appendChild(h('div', { class: 'btn-row ct-aksi ct-aksi-bawah' },
      h('button', { type: 'button', class: 'btn ct-latih', onclick: latih }, ikon('play', null, true), 'Latih jalur ini'), tombolCetak(),
      lain.map(x => UKP.link('Cheat sheet ' + x.judul, 'contekan', { jalur: x.id }, 'btn btn-ghost btn-text'))));
    return page;
  };
  UKP.views.contekan.tanpaData = true;   // v10.3.0: cheat sheet tidak memakai bank soal, jadi tidak menunggu soal termuat

  // ajakan untuk halaman Latih (profil tingkat C saja); null untuk tingkat lain atau bila data jalur tidak ada
  UKP.c.ajakFokus = function (tingkat) {
    const F = FK(); if (tingkat !== 'C' || !F || !F.semua().length) return null;
    return UKP.link([h('span', { class: 'fokus-ajak-isi' }, h('span', { class: 'fokus-ajak-judul' }, JUDUL_AJAK), h('span', { class: 'fokus-ajak-ket' }, 'Latihan intens dan cheat sheet.')), ikon('chevron-kanan', 'fokus-ajak-chev', true)], 'fokus', null, 'card fokus-ajak');
  };
  UKP.fokusHalaman = { JUDUL_AJAK, N_PILIH, paramsIntens, paramsMabar, kalimatKemajuan, kalimatTerlemah };
})(typeof window !== 'undefined' ? window : globalThis);
