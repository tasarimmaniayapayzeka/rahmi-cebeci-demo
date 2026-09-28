/* ============================================================
   WORDPRESS AKTARIMI — statik kaynaktan WordPress'e köprü
   Üretir:
     wp-tema/inc/veri.json   site bilgisi, menü, altbilgi, ikonlar (tema okur)
     wp-mu/rc-icerik.json    66 sayfa: yol, başlık, açıklama, tür, noindex, betikler, gövde HTML
     wp-yerel/referans/      her sayfanın statik sürümü (kök yollu) — WP çıktısıyla karşılaştırma için
   Kullanım: node site/wp-aktar.js
   Gövde HTML'i render.js'teki sayfa.icerik('/', ik) ile birebir aynıdır (kök-göreli yollar).
   ============================================================ */
const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');

process.env.RC_HEDEF = 'canli';   /* WordPress = canlı hedef: demo şeridi yok, form gerçek */
const KOK = __dirname;
const DEPO = path.join(KOK, '..');
const RENDER = path.join(KOK, 'render.js');

/* render.js'in yardımcılarını (ikonlar, menü, başlık/altbilgi, düzen) derleme kısmı çalışmadan al;
   kok() her sayfada '/' döner → WordPress'teki kök-göreli yollar */
let kod = fs.readFileSync(RENDER, 'utf8');
kod = kod.split('/* ---------- derleme ---------- */')[0];
const kokEski = /const kok = slug => [^\n]+\n/;
if (!kokEski.test(kod)) throw new Error('render.js: kok tanımı bulunamadı');
kod = kod.replace(kokEski, "const kok = slug => '/';\n");
const R = new Function('require', '__dirname', 'process',
  kod + '\nreturn { S, ik, MENU, ALTBILGI, duzen, kunye, damga };')(createRequire(RENDER), KOK, process);
const { S, ik, MENU, ALTBILGI } = R;
if (S.hedef !== 'canli') throw new Error('site.js canlı hedefi okumadı');
const sonInceleme = (fs.readFileSync(RENDER, 'utf8').match(/lastReviewed: '([^']+)'/) || [])[1];

/* ---------- sayfalar ---------- */
function topla(dir) {
  let l = [];
  for (const g of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const p = path.join(dir, g.name);
    if (g.isDirectory()) l = l.concat(topla(p)); else if (g.name.endsWith('.js')) l.push(require(p));
  }
  return l;
}
const sayfalar = topla(path.join(KOK, 'veri', 'sayfalar'));
const yollar = new Set(sayfalar.map(s => s.slug));
const disa = sayfalar.map((s, i) => ({
  yol: s.slug,
  ebeveyn: s.slug.includes('/') ? s.slug.split('/').slice(0, -1).join('/') : '',
  ad: s.slug === '' ? 'anasayfa' : s.slug.split('/').pop(),
  baslik: s.baslik,
  aciklama: s.aciklama,
  odak: s.odak || '',   /* Yoast odak anahtar kelimesi */
  tip: s.tip,
  noindex: !!s.noindex,
  js: [].concat(s.js || []),
  sira: i,
  icerik: s.icerik('/', ik),
}));
/* sayfası olmayan ara klasörler (ör. yasal/) — WordPress'te taslak ebeveyn olur, adres üretmez */
const eksikEbeveyn = [...new Set(disa.map(d => d.ebeveyn).filter(e => e && !yollar.has(e)))];
/* ebeveyn önce gelsin */
disa.sort((a, b) => a.yol.split('/').length - b.yol.split('/').length || a.sira - b.sira);

fs.mkdirSync(path.join(DEPO, 'wp-mu'), { recursive: true });
fs.writeFileSync(path.join(DEPO, 'wp-mu', 'rc-icerik.json'),
  JSON.stringify({ uretim: new Date().toISOString(), eksikEbeveyn, sayfalar: disa }, null, 1), 'utf8');

/* ---------- tema verisi ---------- */
const veri = {
  marka: S.marka, markaAlt: S.markaAlt, guncelleme: S.guncelleme, sonInceleme,
  iletisim: S.iletisim, hekim: { tam: S.hekim.tam, dallar: S.hekim.dallar },
  yasal: S.yasal, menu: MENU, altbilgi: ALTBILGI, ik,
};
fs.mkdirSync(path.join(DEPO, 'wp-tema', 'inc'), { recursive: true });
fs.writeFileSync(path.join(DEPO, 'wp-tema', 'inc', 'veri.json'), JSON.stringify(veri, null, 1), 'utf8');

/* ---------- referans (statik, kök yollu, canlı hedef) ---------- */
const REF = path.join(DEPO, 'wp-yerel', 'referans');
if (fs.existsSync(path.join(DEPO, 'wp-yerel'))) {
  fs.rmSync(REF, { recursive: true, force: true });
  for (const s of sayfalar) {
    const h = path.join(REF, (s.slug || '_anasayfa').replace(/\//g, '__') + '.html');
    fs.mkdirSync(path.dirname(h), { recursive: true });
    fs.writeFileSync(h, R.duzen(s), 'utf8');
  }
}

console.log(`${disa.length} sayfa → wp-mu/rc-icerik.json · tema verisi → wp-tema/inc/veri.json`);
console.log(`eksik ebeveyn (taslak açılacak): ${eksikEbeveyn.join(', ') || 'yok'}`);
console.log(`yollar: ${disa.map(d => d.yol || '(anasayfa)').join(' ')}`);
