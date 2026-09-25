/* ============================================================
   YAYIN PAKETİ HAZIRLAYICI
   docs/ klasörünü 'yayin/' klasörüne kopyalar; iç sunum prototiplerini
   (tasarim-*, tasarimlar) DIŞARIDA bırakır ve .htaccess ekler.
   Kullanım:  node render.js && node yayin-hazirla.js
   ============================================================ */
const fs = require('fs');
const path = require('path');

const KOK = __dirname;
const KAYNAK = path.join(KOK, '..', 'docs');
const HEDEF = path.join(KOK, 'yayin');
const S = require('./veri/site');

/* canlıya ÇIKMAYACAK klasörler — iç sunum/demo prototipleri */
const HARIC = new Set([
  'tasarim-a', 'tasarim-b', 'tasarim-c', 'tasarim-d', 'tasarim-e', 'tasarim-f',
  'tasarim-g', 'tasarim-g-koyu', 'tasarimlar',
]);

function sil(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}
function kopyala(src, dst, kokMu = false) {
  fs.mkdirSync(dst, { recursive: true });
  for (const g of fs.readdirSync(src, { withFileTypes: true })) {
    if (kokMu && HARIC.has(g.name)) continue;
    const a = path.join(src, g.name), b = path.join(dst, g.name);
    if (g.isDirectory()) kopyala(a, b); else fs.copyFileSync(a, b);
  }
}

sil(HEDEF);
kopyala(KAYNAK, HEDEF, true);

/* ---------- .htaccess ---------- */
const alan = S.alan.replace(/^https?:\/\//, '');
const htaccess = `# BEGIN cPanel-generated php ini directives, do not edit
# (guzelhosting kurulumundan devralındı — PHP hata günlüğü)
<IfModule php7_module>
   php_value error_log "/home/HESAP/logs/php.error.log"
   php_flag log_errors On
</IfModule>
<IfModule lsapi_module>
   php_value error_log "/home/HESAP/logs/php.error.log"
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
        if (/localhost:\d+/.test(m)) uyarilar.push('localhost adresi: ' + on + g.name);
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

console.log(`yayin/ hazır → ${toplam} dosya`);
console.log(`hariç tutulan: ${[...HARIC].join(', ')}`);
console.log(uyarilar.length ? 'UYARILAR:\n  ' + uyarilar.join('\n  ') : 'denetim temiz (localhost yok, anahtar yok, demo bağlantısı yok)');
console.log(`\nSunucuya: yayin/ içeriğinin TAMAMI → /home/<hesap>/public_html/`);
console.log(`Not: sunucu tarafı iletisim-gonder.php (form) ve asistan.php (ön bilgi asistanı). Asistan anahtarı: sunucu/ASISTAN-KURULUM.md`);
