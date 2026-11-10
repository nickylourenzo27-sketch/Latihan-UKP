#!/bin/sh
# Pelatih UKP — jalankan server berlogin tanpa npm/Docker. Butuh Node.js 18+ (disarankan 22).
# Pemakaian (dari folder mana pun):
#   sh deploy/jalankan.sh            # bangun dist/site bila belum ada, lalu jalankan di port 8080
#   sh deploy/jalankan.sh --bangun   # paksa bangun ulang dist/site dari berkas aplikasi terbaru
#   PORT=3000 sh deploy/jalankan.sh
#   MASUK_NAMA=1 sh deploy/jalankan.sh   # anggota masuk hanya dengan nama; butuh admin bersandi (ADMIN_USER/ADMIN_PASS atau tambah --admin)
# Tambah pengguna dulu:  node deploy/kelola-pengguna.js tambah <nama> [--admin]
set -eu
DIR_DEPLOY="$(cd "$(dirname "$0")" && pwd)"
AKAR="$(cd "$DIR_DEPLOY/.." && pwd)"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js belum terpasang. Unduh versi LTS dari https://nodejs.org lalu jalankan lagi." >&2; exit 1
fi
UTAMA="$(node -p 'process.versions.node.split(".")[0]')"
if [ "$UTAMA" -lt 18 ]; then echo "Node.js $UTAMA terlalu lama; butuh 18 atau lebih baru (disarankan 22)." >&2; exit 1; fi

if [ "${1:-}" = "--bangun" ] || [ ! -f "$AKAR/dist/site/index.html" ]; then
  if [ -f "$AKAR/tools/build-artifact.js" ] && [ -f "$AKAR/index.html" ]; then
    echo "Membangun dist/site…"
    (cd "$AKAR" && node tools/build-artifact.js && rm -rf dist/site && mkdir -p dist/site && cp -r index.html css js sw.js manifest.webmanifest icons dist/site/)
  else
    echo "dist/site tidak ditemukan dan berkas sumber aplikasi tidak ada untuk membangunnya." >&2; exit 1
  fi
fi

export SITE_DIR="${SITE_DIR:-$AKAR/dist/site}"
export PORT="${PORT:-8080}"
mkdir -p "$DIR_DEPLOY/data" && chmod 700 "$DIR_DEPLOY/data" 2>/dev/null || true
exec node "$DIR_DEPLOY/server.js"
