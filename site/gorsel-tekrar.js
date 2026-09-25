/* ============================================================
   GÖRSEL TEKRAR TARAMASI — yalnız okur
   Aynı görsel dosyasının farklı sayfalarda büyük alanlarda (hero,
   atlas, bento görsel kutusu) kullanılıp kullanılmadığını listeler.
   Kullanım: node site/gorsel-tekrar.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const KOK = path.join(__dirname, '..', 'docs');
const kul = {};
/* aynı resim farklı adla kopyalanmış olabilir: dosya içeriğinin özetiyle gruplanır */
const crypto = require('crypto');
const ozet = {};
function icerik(g) {
  if (ozet[g]) return ozet[g];
  for (const k of ['gorsel', 'foto']) { const f = path.join(__dirname, 'varliklar', k, g + '.webp'); if (fs.existsSync(f)) return (ozet[g] = crypto.createHash('md5').update(fs.readFileSync(f)).digest('hex').slice(0, 10)); }
  return (ozet[g] = g);
}
const ad = {};
const ekle = (g, sayfa, yer) => { const h = icerik(g); (ad[h] = ad[h] || new Set()).add(g); (kul[h] = kul[h] || []).push(`${sayfa}(${yer})`); };

(function gez(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (e.name !== 'varliklar') gez(p); continue; }
    if (e.name !== 'index.html') continue;
    const h = fs.readFileSync(p, 'utf8');
    const s = path.relative(KOK, path.dirname(p)).split(path.sep).join('/') || '(ana)';
    const m = h.slice(h.indexOf('<main'), h.lastIndexOf('</main>'));
    const yerler = [
      ['hero', /class="g-tarama"[\s\S]*?<img src="[^"]*?(?:gorsel|foto)\/([a-z0-9-]+)\.webp/],
      ['atlas', /class="g-atlas-kap"[\s\S]*?<img src="[^"]*?(?:gorsel|foto)\/([a-z0-9-]+)\.webp/],
    ];
    for (const [ad, rx] of yerler) { const x = m.match(rx); if (x) ekle(x[1], s, ad); }
    for (const x of m.matchAll(/g-kutu--gorsel[^>]*><img src="[^"]*?(?:gorsel|foto)\/([a-z0-9-]+)\.webp/g)) ekle(x[1], s, 'kutu');
  }
})(KOK);

const tekrar = Object.entries(kul)
  .filter(([, l]) => new Set(l.map(x => x.split('(')[0])).size > 1)
  .sort((a, b) => b[1].length - a[1].length);
console.log('farklı sayfada tekrar eden görsel:', tekrar.length);
tekrar.forEach(([h, l]) => console.log([...ad[h]].join(' = ').padEnd(60), l.length, '→', l.join(', ')));
process.exit(tekrar.length ? 1 : 0);
