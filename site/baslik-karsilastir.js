/* ============================================================
   MENÜ VE BAŞLIK KARŞILAŞTIRMASI — yalnız okur
   Salvera ile birebir aynı olan menü/alt menü/altbilgi etiketlerini,
   sayfa başlıklarını (h1–h4) ve bölüm etiketlerini listeler.
   Kullanım: node site/baslik-karsilastir.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const YENI = path.join(__dirname, '..', 'docs');
const ESKI = 'C:/Users/İHSAN/Desktop/Claude-Projeler/24-Medikal-Estetik/medikal-estetik-web/public_html';

const temiz = s => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const anahtar = s => temiz(s).toLocaleLowerCase('tr').replace(/[^a-zçğıöşüâîû0-9 ]/g, '').replace(/\s+/g, ' ').trim();

function sayfalar(kok) {
  const l = [];
  (function gez(d) {
    for (const g of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, g.name);
      if (g.isDirectory()) { if (!/^(varliklar|tasarim)/.test(g.name)) gez(p); }
      else if (g.name === 'index.html') l.push(p);
    }
  })(kok);
  return l;
}
function topla(kok) {
  const k = { menu: new Map(), altbilgi: new Map(), baslik: new Map(), etiket: new Map() };
  const ekle = (tur, metin, yer) => { const a = anahtar(metin); if (a.length < 2) return; if (!k[tur].has(a)) k[tur].set(a, { metin: temiz(metin), yer: new Set() }); k[tur].get(a).yer.add(yer); };
  for (const p of sayfalar(kok)) {
    const h = fs.readFileSync(p, 'utf8');
    const yer = path.relative(kok, path.dirname(p)).split(path.sep).join('/') || '(ana)';
    const ust = (h.match(/<header[\s\S]*?<\/header>/) || [''])[0] + (h.match(/<div class="cekmece"[\s\S]*?<\/div>\s*<\/div>/) || [''])[0];
    for (const m of ust.matchAll(/<(?:a|button|summary|p|span)[^>]*class="[^"]*(?:nav__bag|mega__baslik|cekmece__alt)[^"]*"[^>]*>([\s\S]*?)<\/(?:a|button|summary|p|span)>/g)) ekle('menu', m[1], yer);
    for (const m of ust.matchAll(/<a [^>]*>(?:<b>)?([^<]{2,60})(?:<\/b>)?/g)) ekle('menu', m[1], yer);
    const alt = (h.match(/<footer[\s\S]*?<\/footer>/) || [''])[0];
    for (const m of alt.matchAll(/<(?:h4|a)[^>]*>([^<]{2,80})</g)) ekle('altbilgi', m[1], yer);
    const ana = h.slice(h.indexOf('<main'), h.lastIndexOf('</main>'));
    for (const m of ana.matchAll(/<h([1-4])[^>]*>([\s\S]*?)<\/h\1>/g)) ekle('baslik', m[2], yer);
    for (const m of ana.matchAll(/<(?:p|span)[^>]*class="[^"]*(?:g-etiket|etiket|g-ket|g-kno)[^"]*"[^>]*>([\s\S]*?)<\/(?:p|span)>/g)) ekle('etiket', m[1], yer);
  }
  return k;
}
const Y = topla(YENI), E = topla(ESKI);
const ad = { menu: 'Menü ve alt menü', altbilgi: 'Altbilgi', baslik: 'Sayfa başlıkları (h1–h4)', etiket: 'Bölüm etiketleri' };
const rapor = [];
for (const tur of Object.keys(ad)) {
  const ayni = [...Y[tur]].filter(([a]) => E[tur].has(a) || E.menu.has(a) || E.baslik.has(a) || E.etiket.has(a) || E.altbilgi.has(a));
  console.log(`\n## ${ad[tur]}: ${ayni.length} / ${Y[tur].size} aynı (%${Y[tur].size ? Math.round(100 * ayni.length / Y[tur].size) : 0})`);
  ayni.sort((a, b) => b[1].yer.size - a[1].yer.size).forEach(([, v]) => console.log(`   ${v.metin}  (${v.yer.size} sayfa)`));
  rapor.push({ tur, ayni: ayni.map(([, v]) => v.metin) });
}
fs.writeFileSync(path.join(__dirname, '..', '.qa', 'baslik-ayni.json'), JSON.stringify(rapor, null, 1));
