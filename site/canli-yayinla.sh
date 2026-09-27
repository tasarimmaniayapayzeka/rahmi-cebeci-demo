#!/usr/bin/env bash
# ============================================================
# CANLI YAYIN — rahmicebeci.com.tr (cPanel API, tarayıcı gerekmez)
#
# Önce:  node site/render.js && node site/yayin-hazirla.js
#        node site/denetle.js && node site/denetle.js yayin
#        git add -A && git commit && git push origin main
# Sonra: bash site/canli-yayinla.sh
#
# Sunucu depoyu GitHub'dan çeker (Update from Remote), .cpanel.yml
# yayin/ klasörünü public_html'e kopyalar (Deploy HEAD Commit).
# Belirteç ~/.cpanel-rahmicebeci-token dosyasındadır: depoya girmez,
# ekrana yazılmaz.
# ============================================================
set -euo pipefail
export MSYS_NO_PATHCONV=1   # Git Bash /home/... yollarını Windows yoluna çevirmesin

HESAP=rahmicebeci
ALAN=rahmicebeci.com.tr
SUNUCU=https://mt-lunar.guzelhosting.com:2083
DEPO=/home/rahmicebeci/repositories/rahmi-cebeci
TOKEN_DOSYA="$HOME/.cpanel-$HESAP-token"
# Windows'ta git.exe'ye C:/… biçimi gerekir (yol çevirisi yukarıda kapalı); Mac/Linux'ta pwd -W yok → düz pwd
KOK="$(cd "$(dirname "$0")/.." && { pwd -W 2>/dev/null || pwd; })"

[ -s "$TOKEN_DOSYA" ] || { echo "belirteç dosyası yok: $TOKEN_DOSYA"; exit 2; }

api() {   # api Modul/islev [anahtar=deger ...]  → ham JSON
  local yol="$1"; shift
  local a=(); for x in "$@"; do a+=(--data-urlencode "$x"); done
  curl -sS --max-time 90 -G "$SUNUCU/execute/$yol" \
    -H "Authorization: cpanel $HESAP:$(sed '1s/^\xEF\xBB\xBF//' "$TOKEN_DOSYA" | tr -d '\r\n \t')" "${a[@]}"
}
js() { node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const j=JSON.parse(s);if(!j.status){console.error('API HATASI: '+JSON.stringify(j.errors));process.exit(1)}const d=j.data;$1})"; }

# 1. yerel = GitHub
YEREL=$(git -C "$KOK" rev-parse HEAD)
UZAK=$(git -C "$KOK" ls-remote origin main | cut -f1)
[ "$YEREL" = "$UZAK" ] || { echo "GitHub geride/ileride (yerel ${YEREL:0:7}, GitHub ${UZAK:0:7}) — önce git push origin main"; exit 1; }
[ -z "$(git -C "$KOK" status --porcelain)" ] || { echo "commit edilmemiş değişiklik var — önce commit + push"; exit 1; }

# 2. doğru hesap mı (aynı sunucuda başka müşteriler var)
ANA=$(api DomainInfo/list_domains | js 'console.log(d.main_domain)')
[ "$ANA" = "$ALAN" ] || { echo "YANLIŞ HESAP: $ANA"; exit 1; }

# 3. Update from Remote
api VersionControl/update repository_root="$DEPO" branch=main | js '' >/dev/null
for i in 1 2 3 4 5 6 7 8 9 10; do
  HEAD=$(api VersionControl/retrieve | js "const r=d.find(x=>x.repository_root==='$DEPO');console.log(r&&r.last_update?r.last_update.identifier:'')")
  [ "$HEAD" = "$YEREL" ] && break; sleep 3
done
[ "$HEAD" = "$YEREL" ] || { echo "sunucu depo güncellenmedi (sunucu ${HEAD:0:7}, beklenen ${YEREL:0:7})"; exit 1; }
echo "sunucu depo: ${HEAD:0:7}"

# 4. Deploy HEAD Commit
ID=$(api VersionControlDeployment/create repository_root="$DEPO" | js 'console.log(d.deploy_id)')
for i in $(seq 1 20); do
  DURUM=$(api VersionControlDeployment/retrieve | js "const x=d.find(y=>String(y.deploy_id)==='$ID');const t=(x&&x.timestamps)||{};console.log(t.succeeded?'basarili':t.failed?'HATA':t.canceled?'iptal':'suruyor')")
  [ "$DURUM" != suruyor ] && break; sleep 3
done
echo "dağıtım #$ID: $DURUM"
[ "$DURUM" = basarili ] || { echo "kayıt: cPanel › Git Version Control › Manage › Pull or Deploy"; exit 1; }

# 5. dışarıdan doğrula
KOD=$(curl -s -o /dev/null -w '%{http_code}' --max-time 30 "https://$ALAN/")
echo "https://$ALAN/ → $KOD"
[ "$KOD" = 200 ]
