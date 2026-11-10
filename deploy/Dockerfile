# Pelatih UKP — image server berlogin (tanpa dependensi npm).
# Bangun dari AKAR proyek (bukan dari folder deploy/), setelah dist/site dibuat:
#   node tools/build-artifact.js && mkdir -p dist/site && cp -r index.html css js sw.js manifest.webmanifest icons dist/site/
#   docker build -f deploy/Dockerfile -t pelatih-ukp .
#   docker run -d --name pelatih-ukp -p 8080:8080 -v ukp-data:/app/deploy/data -e ADMIN_USER=admin -e ADMIN_PASS='ganti-sandi-ini' pelatih-ukp
FROM node:22-alpine

# HOST=0.0.0.0: di dalam container server harus mendengarkan semua antarmuka (akses dibatasi oleh -p 127.0.0.1:8080:8080).
# JALANKAN_SEBAGAI=node: proses mulai sebagai root, menjadikan folder data milik "node" (volume Fly/bind mount dipasang milik root),
# lalu server.js sendiri melepas hak root sebelum membaca/menulis apa pun. Tidak perlu paket tambahan (su-exec/setpriv).
ENV NODE_ENV=production \
    PORT=8080 \
    HOST=0.0.0.0 \
    JALANKAN_SEBAGAI=node \
    SITE_DIR=/app/dist/site

WORKDIR /app

# Hanya yang dibutuhkan saat jalan: salinan situs dan server. Data (pengguna/sesi) TIDAK ikut image — ada di volume.
COPY --chown=root:root dist/site /app/dist/site
COPY --chown=root:root deploy/server.js deploy/lib-pengguna.js deploy/lib-hasil.js deploy/kelola-pengguna.js /app/deploy/

# Folder data milik pengguna non-root "node" (bawaan image); kode & situs tetap milik root (hanya-baca bagi proses).
RUN mkdir -p /app/deploy/data && chown node:node /app/deploy/data && chmod 700 /app/deploy/data
VOLUME ["/app/deploy/data"]

# Sengaja TANPA "USER node": lihat JALANKAN_SEBAGAI di atas. Perintah "docker exec ... kelola-pengguna.js" berjalan sebagai root,
# dan berkas yang ditulisnya otomatis diberikan ke pemilik folder data (node), jadi tetap terbaca server.
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||8080)+'/sehat').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "deploy/server.js"]
