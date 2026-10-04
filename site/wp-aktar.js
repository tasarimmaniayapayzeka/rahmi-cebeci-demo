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
  kod + '\nreturn { S, ik, MENU, ALTBILGI, duzen, kunye, damga, MEDYA };')(createRequire(RENDER), KOK, process);
const { S, ik, MENU, ALTBILGI, MEDYA } = R;
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
  icerik: MEDYA.altUygula(s.icerik('/', ik), s.slug),
}));
/* kapak = sayfanın üstündeki görsel (loading="eager") → WordPress'te öne çıkan görsel (Yoast og:image ve şema).
   Üstünde görsel olmayan sayfada sayfa dosyasındaki paylasimGorseli (sayfada görünmez, yalnız öne çıkan görsel). */
for (const [i, d] of disa.entries()) {
  const m = d.icerik.match(/<img\b[^>]*loading="eager"[^>]*>/);
  const k = m && m[0].match(/src="\/varliklar\/([^"]+)"/);
  const p = sayfalar.find(s => s.slug === d.yol).paylasimGorseli || '';
  if (p && !MEDYA.TABLO[p]) throw new Error(`/${d.yol}: paylasimGorseli medya.js'te yok: ${p}`);
  d.kapak = k ? k[1] : p;
}
/* ortam kütüphanesi: tablodaki her görsel (sunucuda /varliklar/<kaynak> dosyasından kopyalanır) */
const medya = Object.entries(MEDYA.TABLO).map(([kaynak, v]) => {
  if (!fs.existsSync(path.join(KOK, 'varliklar', kaynak))) throw new Error(`medya.js: dosya yok: varliklar/${kaynak}`);
  return { kaynak, ad: v.ad + (v.surum ? '-' + v.surum : '') + path.extname(kaynak), alt: v.alt, baslik: v.baslik };
});
const medyaKaldir = MEDYA.KALDIRILAN.filter(k => !MEDYA.TABLO[k]);
/* adı değişen sayfalar/görseller (veri/tasima.js): WordPress'te eski kayıt yeni ada taşınır, kopya doğmaz.
   Eski sayfa adresinin 301'i .htaccess'te — kural eksikse aktarım durur (eski bağlantılar 404 vermesin). */
const TASIMA = require(path.join(KOK, 'veri', 'tasima.js'));
const htaccess = fs.readFileSync(path.join(DEPO, 'wp-kurulum', 'htaccess'), 'utf8');
for (const [eski, yeni] of Object.entries(TASIMA.SAYFA)) {
  if (!yollar.has(yeni)) throw new Error(`tasima.js: yeni sayfa yok: ${yeni}`);
  if (yollar.has(eski)) throw new Error(`tasima.js: eski sayfa hâlâ var: ${eski}`);
  if (!htaccess.includes(`RewriteRule ^${eski}/?$ /${yeni}/ [R=301,L]`)) throw new Error(`wp-kurulum/htaccess: 301 kuralı yok: ${eski} → ${yeni}`);
}
for (const [eski, yeni] of Object.entries(TASIMA.GORSEL)) {
  if (!MEDYA.TABLO[yeni]) throw new Error(`tasima.js: yeni görsel medya.js'te yok: ${yeni}`);
  if (MEDYA.TABLO[eski]) throw new Error(`tasima.js: eski görsel medya.js'te hâlâ var: ${eski}`);
}
/* sayfası olmayan ara klasörler (ör. yasal/) — WordPress'te taslak ebeveyn olur, adres üretmez */
const eksikEbeveyn = [...new Set(disa.map(d => d.ebeveyn).filter(e => e && !yollar.has(e)))];
/* ebeveyn önce gelsin */
disa.sort((a, b) => a.yol.split('/').length - b.yol.split('/').length || a.sira - b.sira);

fs.mkdirSync(path.join(DEPO, 'wp-mu'), { recursive: true });
fs.writeFileSync(path.join(DEPO, 'wp-mu', 'rc-icerik.json'),
  JSON.stringify({ uretim: new Date().toISOString(), eksikEbeveyn, medya, medya_kaldir: medyaKaldir,
    medya_tasi: TASIMA.GORSEL, adres_degisimi: TASIMA.SAYFA, sayfalar: disa }, null, 1), 'utf8');

/* ---------- tema verisi ---------- */
const veri = {
  marka: S.marka, markaAlt: S.markaAlt, guncelleme: S.guncelleme, sonInceleme,
  iletisim: S.iletisim, hekim: { tam: S.hekim.tam, dallar: S.hekim.dallar },
  yasal: S.yasal, menu: MENU, altbilgi: ALTBILGI, ik,
  logoAlt: MEDYA.TABLO['foto/amblem.png'].alt,   /* kütüphanede logo yoksa başlıktaki logonun alt metni */
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

console.log(`${medya.length} görsel (ortam kütüphanesi) · ${disa.filter(d => d.kapak).length} sayfada kapak → öne çıkan görsel`);
console.log(`${disa.length} sayfa → wp-mu/rc-icerik.json · tema verisi → wp-tema/inc/veri.json`);
console.log(`eksik ebeveyn (taslak açılacak): ${eksikEbeveyn.join(', ') || 'yok'}`);
console.log(`yollar: ${disa.map(d => d.yol || '(anasayfa)').join(' ')}`);
