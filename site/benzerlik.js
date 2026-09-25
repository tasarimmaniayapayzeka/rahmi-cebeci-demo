/* ============================================================
   SALVERA BENZERLİK TARAMASI — yalnız okur, hiçbir şey yazmaz
   Karşılaştırılan: iki sitenin derlenmiş sayfalarındaki <main>
   içeriğinin GÖRÜNEN metni (menü, altbilgi, script, kod hariç).
   Ölçü: ortak n-kelime dizisi oranı (5 ve 8 kelime) + birebir
   aynı cümle sayısı.
   Kullanım: node site/benzerlik.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const YENI = path.join(__dirname, '..', 'docs');
const ESKI = 'C:/Users/İHSAN/Desktop/Claude-Projeler/24-Medikal-Estetik/medikal-estetik-web/public_html';

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
function metin(p) {
  let h = fs.readFileSync(p, 'utf8');
  const a = h.indexOf('<main'), b = h.lastIndexOf('</main>');
  if (a >= 0 && b > a) h = h.slice(a, b);
  h = h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
       .replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
  return h;
}
const kelime = s => s.toLocaleLowerCase('tr').replace(/[^a-zçğıöşüâîû0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
const cumleler = s => s.split(/(?<=[.!?])\s+/).map(c => kelime(c).join(' ')).filter(c => c.split(' ').length >= 6);

/* node site/benzerlik.js <sayfa-yolu> ... → o sayfalardaki ortak 8-kelime aralıklarını yazar */
if (process.argv.length > 2) {
  const eski = new Set();
  for (const p of sayfalar(ESKI)) { const k = kelime(metin(p)); for (let i = 0; i + 8 <= k.length; i++) eski.add(k.slice(i, i + 8).join(' ')); }
  for (const s of process.argv.slice(2)) {
    const k = kelime(metin(path.join(YENI, s, 'index.html'))), im = new Array(k.length).fill(false);
    for (let i = 0; i + 8 <= k.length; i++) if (eski.has(k.slice(i, i + 8).join(' '))) for (let j = i; j < i + 8; j++) im[j] = true;
    console.log('\n### ' + s); let b = -1;
    for (let i = 0; i <= k.length; i++) { if (im[i] && b < 0) b = i; if (!im[i] && b >= 0) { console.log('  «' + k.slice(b, i).join(' ') + '»'); b = -1; } }
  }
  process.exit(0);
}

const eskiN = { 5: new Set(), 8: new Set() }, eskiC = new Set();
for (const p of sayfalar(ESKI)) {
  const m = metin(p), k = kelime(m);
  for (const n of [5, 8]) for (let i = 0; i + n <= k.length; i++) eskiN[n].add(k.slice(i, i + n).join(' '));
  cumleler(m).forEach(c => eskiC.add(c));
}

let T = { k: 0, o5: 0, n5: 0, o8: 0, n8: 0, c: 0, ac: 0 };
const satir = [], ayniCumle = [];
for (const p of sayfalar(YENI)) {
  const m = metin(p), k = kelime(m), ad = path.relative(YENI, path.dirname(p)) || '(ana sayfa)';
  const r = { ad, k: k.length };
  for (const n of [5, 8]) {
    let o = 0, t = 0;
    for (let i = 0; i + n <= k.length; i++) { t++; if (eskiN[n].has(k.slice(i, i + n).join(' '))) o++; }
    r['o' + n] = o; r['n' + n] = t;
    T['o' + n] += o; T['n' + n] += t;
  }
  const cs = cumleler(m); let ac = 0;
  cs.forEach(c => { if (eskiC.has(c)) { ac++; ayniCumle.push(ad + ': ' + c); } });
  r.c = cs.length; r.ac = ac; T.c += cs.length; T.ac += ac; T.k += k.length;
  satir.push(r);
}
const yz = (a, b) => (b ? (100 * a / b).toFixed(1) : '0.0') + '%';
satir.sort((a, b) => b.o8 / Math.max(1, b.n8) - a.o8 / Math.max(1, a.n8));
console.log(`SİTE GENELİ — ${satir.length} sayfa, ${T.k} kelime`);
console.log(`  5 kelimelik ortak dizi : ${yz(T.o5, T.n5)}`);
console.log(`  8 kelimelik ortak dizi : ${yz(T.o8, T.n8)}`);
console.log(`  birebir aynı cümle     : ${T.ac} / ${T.c} (${yz(T.ac, T.c)})`);
console.log('\nEN YÜKSEK 12 SAYFA (8 kelime oranı · 5 kelime oranı · aynı cümle)');
satir.slice(0, 12).forEach(r => console.log(`  ${yz(r.o8, r.n8).padStart(6)} · ${yz(r.o5, r.n5).padStart(6)} · ${r.ac}  ${r.ad}`));
console.log(`\nBİREBİR AYNI CÜMLELER (${ayniCumle.length}):`);
ayniCumle.forEach(c => console.log('  - ' + c));
