/* ============================================================
   YAYIN ÖNCESİ DENETİM — 34-Rahmi-Cebeci
   Kullanım: node site/render.js && node site/denetle.js [klasör]
   (klasör verilmezse docs/; canlı paket için: node site/denetle.js yayin)
   Kırık iç bağlantı, eksik görsel, Salvera kalıntısı, yasaklı
   ifade, ilaç / etken madde / ürün adı. Hata varsa çıkış kodu 1.
   ============================================================ */
const fs = require('fs');
const path = require('path');
const KOK = process.argv[2] ? path.resolve(process.argv[2]) : path.join(__dirname, '..', 'docs');

const sayfalar = [];
(function gez(d) {
  for (const g of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, g.name);
    if (g.isDirectory()) gez(p); else if (g.name.endsWith('.html')) sayfalar.push(p);
  }
})(KOK);

const kirik = new Set(), eksik = new Set(), kalinti = [], yasak = [], etken = [];
/* 4 Eki 2026 (kullanıcı, hukuk): sitede ilaç / etken madde / ürün markası adı geçmez — metin, başlık, açıklama, alt metin,
   şema, dosya adı dahil. İlaç SINIFLARI (kan sulandırıcı, antibiyotik, kortizon) serbest. Ayrıntı: veri/YAZIM-KILAVUZU.md §2 */
const ETKEN = /botul\p{L}*|boto[kx]s?\p{L}*|toksin\p{L}*|hya?l[uü]ron\p{L}*|hiyal[uü]ron\p{L}*|polin[uü]kleot\p{L}*|pdrn|somon|n[uü]kleotid\p{L}*|(?<![\p{L}-])DNA|[iı]zotretinoin|isotretinoin|aspirin|varfarin|lidokain|hidroksiapatit|(?<![\p{L}-])CaHA|poli-?l-?laktik|(?<![\p{L}-])PLLA|deoksikolik|fosfatidil\p{L}*|sculptra|radiesse|profhilo|juvederm|restylane|dysport|xeomin|rejuran|ellanse/giu;
const ETKEN_SERBEST = /vücutta “toksin”/g;   /* selülit: "toksin birikimi" efsanesinin düzeltilmesi, ilaç değil */
const etkenAra = (ad, metin) => { const m = metin.replace(ETKEN_SERBEST, ' ').match(ETKEN); if (m) etken.push(ad + ': ' + [...new Set(m.map(x => x.toLowerCase()))].join(', ')); };
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
  /* veri özniteliklerine gömülü görsel yolları (data-gg vb.) — src/href dışında kalanlar */
  for (const g of h.matchAll(/varliklar\/(?:gorsel|foto)\/[a-z0-9-]+\.(?:webp|png|jpe?g)/g)) {
    const yol = g[0];
    if (!fs.existsSync(path.join(KOK, yol))) eksik.add(yol + '  ←  ' + ad);
  }
  const metin = h.replace(/<script[\s\S]*?<\/script>/g, ' ');
  const k = metin.match(KALINTI); if (k) kalinti.push(ad + ': ' + k[0]);
  const y = h.match(YASAK); if (y) yasak.push(ad + ': ' + y[0]);
  etkenAra(ad, h);
}
/* tarayıcıda metin üreten betikler. Asistan dizininde yalnız "halk dili" alanı (ziyaretçi "botoks" yazarsa doğru sayfa
   bulunsun diye eşleştirme sözcükleri, ekranda görünmez) denetim dışıdır; dizinin geri kalanı ekranda görünür. */
const JS = path.join(KOK, 'varliklar', 'js');
if (fs.existsSync(JS)) for (const g of fs.readdirSync(JS).filter(x => x.endsWith('.js'))) {
  let m = fs.readFileSync(path.join(JS, g), 'utf8');
  if (g === 'asistan-dizin.js') {
    const v = JSON.parse(m.slice(m.indexOf('{'), m.lastIndexOf('}') + 1));
    for (const s of v.sayfalar || []) s[3] = '';
    m = JSON.stringify(v);
  }
  etkenAra('varliklar/js/' + g, m);
}
for (const g of fs.readdirSync(path.join(KOK, 'varliklar', 'gorsel'))) etkenAra('varliklar/gorsel/' + g, g);

console.log(`${sayfalar.length} sayfa · ${say} iç bağlantı/kaynak`);
const yaz = (baslik, liste) => { console.log(`${baslik}: ${liste.length || liste.size || 0}`); [...liste].slice(0, 30).forEach(x => console.log('   ' + x)); };
yaz('KIRIK BAĞLANTI', kirik);
yaz('EKSİK GÖRSEL', eksik);
yaz('SALVERA KALINTISI', kalinti);
yaz('YASAKLI İFADE', yasak);
yaz('İLAÇ / ETKEN MADDE / ÜRÜN ADI', etken);
process.exit(kirik.size + eksik.size + kalinti.length + yasak.length + etken.length ? 1 : 0);
