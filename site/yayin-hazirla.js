/* ============================================================
   CANLI YAYIN PAKETİ — rahmicebeci.com.tr
   Siteyi canlı hedefle (RC_HEDEF=canli: gerçek alan adı, demo şeridi yok,
   form iletisim-gonder.php'ye gider) depo kökündeki yayin/ klasörüne
   derler, .htaccess ekler ve denetler. yayin/ depoya girer; cPanel git
   onu çeker ve .cpanel.yml ile public_html'e kopyalar.
   Kullanım:  node site/render.js && node site/yayin-hazirla.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const KOK = __dirname;
const HEDEF = path.join(KOK, '..', 'yayin');
const HESAP = 'rahmicebeci';   /* cPanel hesabı (mt-lunar.guzelhosting.com) */

process.env.RC_HEDEF = 'canli';
const S = require('./veri/site');
if (S.hedef !== 'canli') throw new Error('site.js canlı hedefi okumadı');

/* canlıya ÇIKMAYACAK klasörler — iç sunum/demo prototipleri (derleme üretmez; güvenlik ağı) */
const HARIC = new Set([
  'tasarim-a', 'tasarim-b', 'tasarim-c', 'tasarim-d', 'tasarim-e', 'tasarim-f',
  'tasarim-g', 'tasarim-g-koyu', 'tasarimlar',
]);

function sil(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

sil(HEDEF);
execFileSync(process.execPath, [path.join(KOK, 'render.js')], {
  stdio: 'inherit',
  env: { ...process.env, RC_HEDEF: 'canli', RC_CIKTI: HEDEF },
});

/* ---------- .htaccess ---------- */
const htaccess = `# BEGIN cPanel-generated php ini directives, do not edit
# (guzelhosting kurulumundan devralındı — PHP hata günlüğü)
<IfModule php7_module>
   php_value error_log "/home/${HESAP}/logs/php.error.log"
   php_flag log_errors On
</IfModule>
<IfModule lsapi_module>
   php_value error_log "/home/${HESAP}/logs/php.error.log"
   php_flag log_errors On
</IfModule>
# END cPanel-generated php ini directives, do not edit

# ${S.marka} — sunucu yapılandırması (yayin-hazirla.js üretir)
Options -Indexes
DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On

  # www yok + https zorunlu
  RewriteCond %{HTTPS} off [OR]
  RewriteCond %{HTTP_HOST} ^www\\. [NC]
  RewriteCond %{HTTP_HOST} ^(?:www\\.)?(.+)$ [NC]
  RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L]

  # /sayfa → /sayfa/  (sondaki eğik çizgi)
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} !\\.[a-zA-Z0-9]{2,5}$
  RewriteCond %{REQUEST_URI} !/$
  RewriteRule ^(.*)$ /$1/ [R=301,L]
</IfModule>

ErrorDocument 404 /404/index.html

# ---------- güvenlik başlıkları ----------
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "geolocation=(), microphone=(self), camera=(self), interest-cohort=()"
  # HSTS: SİTE HTTPS'te SORUNSUZ ÇALIŞTIĞI DOĞRULANDIKTAN SONRA açın
  # Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
  <FilesMatch "\\.(webp|jpg|jpeg|png|svg|woff2|ico)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.(css|js)$">
    Header set Cache-Control "public, max-age=604800"
  </FilesMatch>
  <FilesMatch "\\.html$">
    Header set Cache-Control "public, max-age=3600, must-revalidate"
  </FilesMatch>
</IfModule>

# ---------- sıkıştırma ----------
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/javascript application/json image/svg+xml
</IfModule>

# ---------- gizli dosyalar ----------
<FilesMatch "^\\.|(\\.md|\\.json|\\.log)$">
  Require all denied
</FilesMatch>
`;
fs.writeFileSync(path.join(HEDEF, '.htaccess'), htaccess, 'utf8');

/* ---------- denetim ---------- */
const uyarilar = [];
function tara(dir, on = '') {
  let dosya = 0;
  for (const g of fs.readdirSync(dir, { withFileTypes: true })) {
    const tam = path.join(dir, g.name);
    if (g.isDirectory()) dosya += tara(tam, on + g.name + '/');
    else {
      dosya++;
      if (/\.(html|php|css|js)$/.test(g.name)) {
        const m = fs.readFileSync(tam, 'utf8');
        if (/localhost:\d+|127\.0\.0\.1/.test(m)) uyarilar.push('yerel adres: ' + on + g.name);
        if (/github\.io/.test(m)) uyarilar.push('demo adresi (github.io): ' + on + g.name);
        if (/data-demo=/.test(m)) uyarilar.push('demo kipi açık: ' + on + g.name);
        if (/sk-[A-Za-z0-9_-]{20,}/.test(m)) uyarilar.push('!!! API ANAHTARI: ' + on + g.name);
        /* yalnız GERÇEK bağlantı/kaynak; yorum satırındaki geçişler sayılmaz */
        if (/(href|src|action)="[^"]*(tasarim-[a-g]|tasarimlar)\//.test(m))
          uyarilar.push('demo klasörüne bağlantı: ' + on + g.name);
      }
    }
  }
  return dosya;
}
const toplam = tara(HEDEF);

for (const d of HARIC) {
  if (fs.existsSync(path.join(HEDEF, d))) uyarilar.push('!!! demo klasörü pakete girmiş: ' + d);
}
if (!fs.existsSync(path.join(HEDEF, 'sitemap.xml'))) uyarilar.push('sitemap.xml yok');

console.log(`\nyayin/ hazır → ${toplam} dosya · ${S.alan} · ${S.noindex ? 'noindex (arama motorlarına KAPALI)' : 'arama motorlarına AÇIK'}`);
console.log(uyarilar.length ? 'UYARILAR:\n  ' + uyarilar.join('\n  ') : 'denetim temiz (yerel adres yok, anahtar yok, demo izi yok)');
console.log(`Sonra: node site/denetle.js yayin → commit + push → cPanel: Update from Remote + Deploy HEAD Commit (.cpanel.yml)`);
if (uyarilar.length) process.exitCode = 1;
