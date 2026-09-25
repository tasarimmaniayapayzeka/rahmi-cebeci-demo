/* ============================================================
   YAYIN ÖNCESİ DENETİM — 34-Rahmi-Cebeci
   Kullanım: node site/render.js && node site/denetle.js
   Kırık iç bağlantı, eksik görsel, Salvera kalıntısı, yasaklı
   ifade. Hata varsa çıkış kodu 1.
   ============================================================ */
const fs = require('fs');
const path = require('path');
const KOK = path.join(__dirname, '..', 'docs');

const sayfalar = [];
(function gez(d) {
  for (const g of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, g.name);
    if (g.isDirectory()) gez(p); else if (g.name.endsWith('.html')) sayfalar.push(p);
  }
})(KOK);

const kirik = new Set(), eksik = new Set(), kalinti = [], yasak = [];
const KALINTI = /salvera|nişantaşı|nisantasi|teşvikiye|ramazan ersoy|istanbulalerji|webtest\.com|bel üstü/i;
const YASAK = /iz bırakmadan|kesin çözüm|ağrısız|garanti|mutlu danışan|ücretsiz muayene|ücretsiz ön muayene|referans merkezi|(?<![a-zçğıöşü])paket(?![a-zçğıöşü])|en iyi (klinik|hekim|sonuç)/i;
let say = 0;

for (const s of sayfalar) {
  const h = fs.readFileSync(s, 'utf8');
  const dir = path.dirname(s);
  const ad = path.relative(KOK, s);
  for (const m of h.matchAll(/(?:href|src)="([^"#?]+)(?:[#?][^"]*)?"/g)) {
    const u = m[1];
    if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(u)) continue;
    say++;
    let hedef = path.resolve(dir, u);
    if (u.endsWith('/')) hedef = path.join(hedef, 'index.html');
    if (!fs.existsSync(hedef)) (/\.(webp|png|svg|jpe?g)$/.test(u) ? eksik : kirik).add(u + '  ←  ' + ad);
  }
  const metin = h.replace(/<script[\s\S]*?<\/script>/g, ' ');
  const k = metin.match(KALINTI); if (k) kalinti.push(ad + ': ' + k[0]);
  const y = h.match(YASAK); if (y) yasak.push(ad + ': ' + y[0]);
}

console.log(`${sayfalar.length} sayfa · ${say} iç bağlantı/kaynak`);
const yaz = (baslik, liste) => { console.log(`${baslik}: ${liste.length || liste.size || 0}`); [...liste].slice(0, 30).forEach(x => console.log('   ' + x)); };
yaz('KIRIK BAĞLANTI', kirik);
yaz('EKSİK GÖRSEL', eksik);
yaz('SALVERA KALINTISI', kalinti);
yaz('YASAKLI İFADE', yasak);
process.exit(kirik.size + eksik.size + kalinti.length + yasak.length ? 1 : 0);
