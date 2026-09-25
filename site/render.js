/* ============================================================
   Dr. Rahmi Cebeci — statik site derleyicisi (34. proje; Salvera motorundan türetildi)
   veri/sayfalar/*.js  →  ../docs/<slug>/index.html  (GitHub Pages: depo kökü/docs)
   Kullanım: node render.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const S = require('./veri/site');
const ASISTAN = require('./veri/asistan');

const KOK = __dirname;
const CIKTI = path.join(KOK, '..', 'docs');   /* depo kökü/docs → GitHub Pages */
const SAYFA_DIR = path.join(KOK, 'veri', 'sayfalar');

/* ---------- ÖNBELLEK DAMGASI ----------
   .htaccess CSS/JS'i tarayıcıda uzun süre saklatıyor. Damga olmadan
   güncellenen dosya kullanıcıya HİÇ ulaşmıyordu: sunucuda yeni sürüm
   duruyor, telefon eski kopyayı çalıştırıyordu (12 Ağu, cilt aracı).
   İçerik değişince damga değişir → tarayıcı yeni dosyayı indirmek zorunda. */
const damgaBellek = {};
function damga(gorece) {
  if (damgaBellek[gorece]) return damgaBellek[gorece];
  let d = '1';
  try { d = crypto.createHash('md5').update(fs.readFileSync(path.join(KOK, gorece))).digest('hex').slice(0, 8); }
  catch (e) {}
  damgaBellek[gorece] = d;
  return d;
}
const varlik = (r, gorece) => r + gorece + '?s=' + damga(gorece);

/* ---------- ikonlar (çizgi SVG — emoji YASAK) ---------- */
const ik = {
  ok: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',
  onay: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-8"/></svg>',
  kalp: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 17s-6.5-4.2-6.5-8.6A3.7 3.7 0 0 1 10 6.2a3.7 3.7 0 0 1 6.5 2.2C16.5 12.8 10 17 10 17z"/></svg>',
  mercek: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="8.8" cy="8.8" r="5.3"/><path d="M12.8 12.8L17 17"/></svg>',
  kalkan: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M10 2.5l6 2.2v4.6c0 4-2.6 6.8-6 8.2-3.4-1.4-6-4.2-6-8.2V4.7z"/><path d="M7.6 10l1.7 1.7L13 8" stroke-linecap="round"/></svg>',
  damla: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M10 2.5c3 3.6 5 6.2 5 8.6a5 5 0 0 1-10 0c0-2.4 2-5 5-8.6z"/></svg>',
  yaprak: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M16.5 3.5C9 3.5 4.5 7 4.5 12.5c0 1.4.4 2.6 1 3.5C7 13 10 10.6 14 9.5c-3.2 1.8-5.6 4.2-7 7.5 1 .4 2.1.5 3 .5 5.5 0 6.5-6.5 6.5-14z"/></svg>',
  liste: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M7 5.5h9M7 10h9M7 14.5h9M3.6 5.5h.01M3.6 10h.01M3.6 14.5h.01"/></svg>',
  saat: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="10" cy="10" r="7.3"/><path d="M10 5.8V10l2.8 1.8"/></svg>',
  pin: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M10 17.5s5.5-4.9 5.5-9a5.5 5.5 0 1 0-11 0c0 4.1 5.5 9 5.5 9z"/><circle cx="10" cy="8.4" r="2.1"/></svg>',
  tel: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M6.4 3.2 8 6.3 6.4 8c.9 1.9 2.4 3.4 4.3 4.3l1.7-1.6 3.1 1.6-.4 2.6c-.1.7-.7 1.2-1.4 1.2C8.2 16.1 3.9 11.8 3.2 6.3c-.1-.7.4-1.4 1.2-1.5z"/></svg>',
  wa: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l1.1-3.6A7 7 0 1 1 6.9 16z"/><path d="M7.4 7.6c.3 2.6 2.4 4.7 5 5l.9-1.4 1.5.7-.2 1.2c-2.9.4-6.5-2.6-6.9-6l1.1-.2z" stroke-width="1.2"/></svg>',
  posta: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><rect x="2.6" y="4.4" width="14.8" height="11.2" rx="1.6"/><path d="M2.9 5.4 10 10.6l7.1-5.2"/></svg>',
  menu: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M3 6h14M3 10h14M3 14h14"/></svg>',
  kapa: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15"/></svg>',
  asagi: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5"/></svg>',
};

/* ---------- yardımcılar ---------- */
const kacir = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const derinlik = slug => slug === '' ? 0 : slug.split('/').filter(Boolean).length;
const kok = slug => derinlik(slug) === 0 ? './' : '../'.repeat(derinlik(slug));

/* ---------- menü katalogtan üretilir ---------- */
function menuKur() {
  /* Klinik menüde başta (12 Ağu talebi) */
  const ek = [...S.menuEk];
  const ki = ek.findIndex(m => m.ad === 'Tanışalım');
  const klinik = ki > -1 ? ek.splice(ki, 1) : [];
  return [
    ...klinik,
    { ad: 'Uygulamalar', yol: '/uygulamalar/',
      /* 22 uygulamanın tamamı — eskiden grup başına ilk 4 gösteriliyordu,
         HIFU/PRP/mezoterapi gibi sayfalar menüde yoktu (25 Eyl) */
      mega: S.katalog.map(g => ({ baslik: g.grup,
        ogeler: g.ogeler.map(([ad, s]) => ({ ad, yol: `/uygulamalar/${s}/` })) })),
      alt: S.katalog.flatMap(g => g.ogeler.map(([ad, s]) =>
        ({ ad, yol: `/uygulamalar/${s}/`, grup: g.kisa })))
        .concat([{ ad: 'Uygulamaların tamamı', yol: '/uygulamalar/' }]) },
    { ad: 'Bölgeler', yol: '/bolgeler/', alt:
      S.bolgeler.map(([ad, s, not]) => ({ ad, yol: `/bolgeler/${s}/`, not })) },
    { ad: 'Cilt Sorunları', yol: '/cilt-sorunlari/', alt:
      S.sorunlar.map(([ad, s]) => ({ ad, yol: `/cilt-sorunlari/${s}/` })) },
    ...ek,
  ];
}
const MENU = menuKur();

/* ---------- alt bilgi sütunları ---------- */
/* Sütun başına en çok 5 bağlantı + "Tümü" — uzun listeler altbilgiyi
   kalabalıklaştırıyordu (12 Ağu); tam listeler hub sayfalarında. */
const ALTBILGI = [
  { baslik: 'Tanışalım', bag: [
      ['Muayenehanemiz', '/klinik/'], ['Hekim', '/hekim/'], ['Randevudan kontrole', '/yaklasimimiz/'],
      ['Soru ve yanıtlar', '/sikca-sorulan-sorular/'], ['İletişim', '/iletisim/'] ] },
  { baslik: 'Uygulamalar', tumu: ['Uygulamaların tamamı', '/uygulamalar/'],
    bag: S.katalog.flatMap(g => g.ogeler).slice(0, 5)
      .map(([ad, s]) => [ad, `/uygulamalar/${s}/`]) },
  { baslik: 'Bölgeler', tumu: ['Sekiz bölgenin tamamı', '/bolgeler/'],
    bag: S.bolgeler.slice(0, 5).map(([ad, s]) => [ad, `/bolgeler/${s}/`]) },
  { baslik: 'Cilt sorunları', tumu: ['Bütün şikâyet başlıkları', '/cilt-sorunlari/'],
    bag: S.sorunlar.slice(0, 5).map(([ad, s]) => [ad, `/cilt-sorunlari/${s}/`]) },
];

/* ---------- başlık ---------- */
function ust(sayfa) {
  const r = kok(sayfa.slug);
  /* dış bağlantılar (http...) yeni sekmede, iç yollar köke görece */
  const bag = yol => yol.startsWith('http')
    ? `href="${yol}" target="_blank" rel="noopener"`
    : `href="${r}${yol.slice(1)}"`;
  /* bulunulan sayfa: bağlantı aria-current alır, üst madde altın çizgiyle işaretlenir */
  const simdi = '/' + (sayfa.slug ? sayfa.slug + '/' : '');
  const akt = yol => yol === simdi ? ' aria-current="page"' : '';
  const ustAkt = m => (m.yol && m.yol !== '/' && (simdi === m.yol || simdi.startsWith(m.yol)))
    || (m.alt || []).some(a => a.yol === simdi) ? ' nav__oge--akt' : '';
  const nav = MENU.map(m => {
    if (!m.alt) return `<div class="nav__oge${ustAkt(m)}"><a class="nav__bag" ${bag(m.yol)}${akt(m.yol)}>${m.ad}</a></div>`;
    const ic = m.mega
      ? `<div class="mega">${m.mega.map(g => `<div class="mega__sutun"><p class="mega__baslik">${g.baslik}</p>${
          g.ogeler.map(a => `<a ${bag(a.yol)}${akt(a.yol)}>${a.ad}</a>`).join('')}</div>`).join('')}</div>
        <a class="mega__tumu" ${bag(m.yol)}${akt(m.yol)}>Uygulamaların tamamı ${ik.ok}</a>`
      : m.alt.map(a => `<a ${bag(a.yol)}${akt(a.yol)}><b>${a.ad}</b>${a.not ? `<span>${a.not}</span>` : ''}</a>`).join('');
    return `<div class="nav__oge${m.mega ? ' nav__oge--mega' : ''}${ustAkt(m)}" data-acilir>
      <button class="nav__bag" type="button" aria-expanded="false">${m.ad}<span class="nav__ok">${ik.asagi}</span></button>
      <div class="alt${m.mega ? ' alt--mega' : ''}">${ic}</div>
    </div>`;
  }).join('');

  /* mobil çekmece: gruplar tıklayınca açılır (12 Ağu — "komple açılmasın") */
  const cekmece = MENU.map(m => {
    if (!m.alt) return `<div class="cekmece__grup"><b><a ${bag(m.yol)}${akt(m.yol)} style="border:0;padding:10px 0;display:block">${m.ad}</a></b></div>`;
    let onceki = null;
    const satir = m.alt.map(a => {
      const bas = a.grup && a.grup !== onceki ? `<span class="cekmece__alt">${a.grup}</span>` : '';
      onceki = a.grup || onceki;
      return bas + `<a ${bag(a.yol)}${akt(a.yol)}>${a.ad}</a>`;
    }).join('');
    return `<details class="cekmece__grup"${ustAkt(m) ? ' open' : ''}><summary><b>${m.ad}</b></summary>${satir}</details>`;
  }).join('');

  return `<a class="atla" href="#ana">İçeriğe atla</a>
<header class="ust">
  <div class="sar ust__ic">
    <a class="marka" href="${r}">
      <img class="marka__logo" src="${r}varliklar/foto/amblem.png" alt="" width="44" height="44">
      <span class="marka__ad">${S.marka}</span>
      <span class="marka__alt">${S.markaAlt} · Muayenehane</span>
    </a>
    <nav class="nav" aria-label="Ana menü">${nav}</nav>
    <a class="dgm dgm--bir dgm--kucuk ust__cta" href="${r}iletisim/">Randevu isteyin</a>
    <button class="menu-dgm" type="button" data-menu-ac aria-label="Menüyü aç" aria-expanded="false">${ik.menu}</button>
  </div>
</header>
<div class="cekmece" data-cekmece aria-hidden="true">
  <div class="cekmece__perde" data-menu-kapa></div>
  <div class="cekmece__panel" role="dialog" aria-label="Menü">
    <div class="cekmece__bas">
      <span class="marka__ad">${S.marka}</span>
      <button class="cekmece__kapa" type="button" data-menu-kapa aria-label="Menüyü kapat">${ik.kapa}</button>
    </div>
    ${cekmece}
    <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu isteyin</a>
      <a class="dgm dgm--iki" href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a>
    </div>
  </div>
</div>`;
}

/* ---------- alt bilgi ---------- */
function alt(sayfa) {
  const r = kok(sayfa.slug);
  const sut = ALTBILGI.map(g =>
    `<div><h4>${g.baslik}</h4><ul>${g.bag.map(([a, y]) => `<li><a href="${r}${y.slice(1)}">${a}</a></li>`).join('')}${
      g.tumu ? `<li class="tumu"><a href="${r}${g.tumu[1].slice(1)}">${g.tumu[0]} →</a></li>` : ''}</ul></div>`).join('');
  return `<footer class="alt-bilgi">
  <div class="sar">
    <div class="alt-bilgi__ust">
      <div class="alt-bilgi__marka">
        <span class="marka__ad" style="font-size:1.2rem">${S.marka}</span>
        <span class="marka__alt" style="display:block;margin-top:3px">${S.markaAlt} · Muayenehane</span>
        <p style="margin-top:16px;font-size:.9rem;max-width:34ch">${S.iletisim.adres}<br>${S.iletisim.ilce}</p>
        <ul style="margin-top:14px">
          <li><a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a></li>
          ${S.iletisim.cepHam !== S.iletisim.telHam ? `<li><a href="tel:${S.iletisim.cepHam}">GSM · ${S.iletisim.cep}</a></li>` : ''}
          <li><a href="https://wa.me/${S.iletisim.waHam}" rel="noopener">WhatsApp · ${S.iletisim.wa}</a></li>
        </ul>
      </div>
      ${sut}
    </div>
    <div class="alt-bilgi__yasal">
      <div class="satirlar">${S.yasal.map(([a, y]) => `<a href="${r}${y.slice(1)}">${a}</a>`).join('')}</div>
      <div class="satirlar">
        <span>Muayenehane sahibi ve sorumlu tabip: ${S.hekim.tam}</span>
        <span>${S.hekim.dallar}</span>
      </div>
      <div class="satirlar">
        <span>Son güncelleme: ${S.guncelleme}</span>
        <span>© ${new Date().getFullYear()} ${S.marka}</span>
      </div>
    </div>
  </div>
</footer>
<nav class="cubuk" aria-label="Hızlı iletişim">
  <a href="tel:${S.iletisim.telHam}">${ik.tel} Ara</a>
  <button class="cubuk__sor" type="button" data-asistan-ac aria-controls="asis-panel" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5h16v10H9l-5 4z"/><path d="M9 9.5h6M9 12.5h4"/></svg> Sor</button>
  <a class="vurgu" href="${r}iletisim/">${ik.posta} Randevu</a>
</nav>`;
}

/* ---------- sayfa künyesi ---------- */
function kunye() {
  return `<div class="kunye">
  <p>Metni hazırlayan ve tıbbi açıdan gözden geçiren: <b>${S.hekim.tam}</b> (${S.hekim.dallar}).</p>
  <div class="kunye__tarih">
    <span>Son güncelleme: <b>${S.guncelleme}</b></span>
    <span>Editör: ${S.iletisim.editor}</span>
  </div>
  <p>Buradaki anlatım herkese yöneliktir; size özel bir teşhis ya da tedavi planı sunmaz, muayenenin yerini tutmaz. Her uygulamanın etkisi kişiye göre farklı olur.</p>
</div>`;
}

/* ---------- düzen ---------- */
function duzen(sayfa) {
  const r = kok(sayfa.slug);
  const url = S.alan + '/' + (sayfa.slug ? sayfa.slug + '/' : '');
  const jsonld = {
    '@context': 'https://schema.org',
    '@type': sayfa.tip === 'tibbi' ? 'MedicalWebPage' : 'WebPage',
    name: sayfa.baslik,
    description: sayfa.aciklama,
    url,
    inLanguage: 'tr-TR',
    isPartOf: { '@type': 'WebSite', name: S.marka, url: S.alan },
    ...(sayfa.tip === 'tibbi' ? {
      reviewedBy: { '@type': 'Physician', name: S.hekim.tam, medicalSpecialty: 'PrimaryCare' },
      lastReviewed: '2026-09-25',
    } : {}),
  };
  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${kacir(sayfa.baslik)}${sayfa.slug ? ' | ' + S.marka : ''}</title>
<meta name="description" content="${kacir(sayfa.aciklama)}">
<link rel="canonical" href="${url}">
${sayfa.noindex ? '<meta name="robots" content="noindex,follow">\n' : S.demo ? '<meta name="robots" content="noindex,nofollow">\n' : ''}<meta name="theme-color" content="#FAF7F1">
<meta property="og:type" content="website">
<meta property="og:locale" content="tr_TR">
<meta property="og:site_name" content="${S.marka}">
<meta property="og:title" content="${kacir(sayfa.baslik)}">
<meta property="og:description" content="${kacir(sayfa.aciklama)}">
<meta property="og:url" content="${url}">
<link rel="preload" as="font" type="font/woff2" href="${r}varliklar/fonts/outfit-var-lat.woff2" crossorigin>
<link rel="icon" href="${r}varliklar/favicon.svg" type="image/svg+xml">
<link rel="preload" as="font" type="font/woff2" href="${r}varliklar/fonts/mulish-400-lat.woff2" crossorigin>
<link rel="stylesheet" href="${varlik(r, 'varliklar/css/tokens.css')}">
<link rel="stylesheet" href="${varlik(r, 'varliklar/css/site.css')}">
<link rel="stylesheet" href="${varlik(r, 'varliklar/css/g.css')}">
<link rel="stylesheet" href="${varlik(r, 'varliklar/css/asistan.css')}">
<script type="application/ld+json">${JSON.stringify(jsonld)}</script>
</head>
<body${S.demo ? ' data-demo="1"' : ''}>
<div class="g-okucu" aria-hidden="true"></div>
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<linearGradient id="gDonutGrad" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#E6CF8E"/><stop offset="1" stop-color="#85641C"/>
</linearGradient></defs></svg>
${ust(sayfa)}
<main id="ana">
${sayfa.icerik(r, ik)}${sayfa.tip === 'tibbi' ? '<div class="sar sar--dar">' + kunye() + '</div>' : ''}
</main>
${alt(sayfa)}
<script src="${varlik(r, 'varliklar/js/site.js')}" defer></script>
<script src="${varlik(r, 'varliklar/js/g.js')}" defer></script>
<script src="${varlik(r, 'varliklar/js/asistan-dizin.js')}" defer></script>
<script src="${varlik(r, 'varliklar/js/asistan.js')}" defer></script>
${sayfa.js
    ? [].concat(sayfa.js).map(j => `\n<script src="${varlik(r, 'varliklar/js/' + j)}" defer></script>`).join('')
    : ''}
</body>
</html>`;
}

/* ---------- derleme ---------- */
function topla(dir, on = '') {
  let liste = [];
  for (const g of fs.readdirSync(dir, { withFileTypes: true })) {
    if (g.isDirectory()) liste = liste.concat(topla(path.join(dir, g.name), on + g.name + '/'));
    else if (g.name.endsWith('.js')) liste.push(require(path.join(dir, g.name)));
  }
  return liste;
}

const sayfalar = topla(SAYFA_DIR);

/* ön bilgi asistanının sayfa dizini — sayfalar derlenmeden ÖNCE yazılır
   ki önbellek damgası yeni içerikten hesaplansın */
fs.writeFileSync(path.join(KOK, 'varliklar', 'js', 'asistan-dizin.js'),
  '/* render.js üretir — elle DÜZENLEME (kaynak: veri/asistan.js + veri/site.js) */\n' +
  'window.RC_ASISTAN = ' + JSON.stringify(ASISTAN.paket(sayfalar, ik)) + ';\n', 'utf8');
let n = 0;
for (const s of sayfalar) {
  const hedef = s.slug ? path.join(CIKTI, s.slug, 'index.html') : path.join(CIKTI, 'index.html');
  fs.mkdirSync(path.dirname(hedef), { recursive: true });
  fs.writeFileSync(hedef, duzen(s), 'utf8');
  n++;
}

/* GitHub Pages 404.html (kökte, mutlak yollu) */
{
  const s404 = sayfalar.find(s => s.slug === '404');
  if (s404) fs.writeFileSync(path.join(CIKTI, '404.html'), duzen(s404).split('"../').join('"' + S.alan + '/'), 'utf8');
}

/* sitemap + robots */
const bugun = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sayfalar.filter(s => !s.noindex).map(s =>
  `  <url><loc>${S.alan}/${s.slug ? s.slug + '/' : ''}</loc><lastmod>${bugun}</lastmod></url>`).join('\n')}
</urlset>`;
fs.writeFileSync(path.join(CIKTI, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(CIKTI, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${S.alan}/sitemap.xml\n`, 'utf8');

/* varlıkları kopyala */
function kopyala(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const g of fs.readdirSync(src, { withFileTypes: true })) {
    const a = path.join(src, g.name), b = path.join(dst, g.name);
    if (g.isDirectory()) kopyala(a, b); else fs.copyFileSync(a, b);
  }
}
kopyala(path.join(KOK, 'varliklar'), path.join(CIKTI, 'varliklar'));


/* ---------- iletişim formu alıcısı (iletisim-gonder.php) ----------
   Form var olmayan bir dosyaya POST ediyordu → her talep 404'e düşüyordu
   (12 Ağu ajan denetimi, kritik). Alıcı adres site.js'ten gelir. */
const formPhp = `<?php
/* ${S.marka} — randevu talebi alıcısı (render.js üretir, elle DÜZENLEME) */
declare(strict_types=1);
session_start();

function cikis(string $tur, string $baslik, string $mesaj): void {
  /* asistan içindeki randevu formu bicim=json gönderir: sayfa yerine kısa JSON döner */
  if ((\$_POST['bicim'] ?? '') === 'json') {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['tur' => $tur, 'baslik' => $baslik, 'mesaj' => trim(strip_tags(str_replace('<br>', ' ', $mesaj)))], JSON_UNESCAPED_UNICODE);
    exit;
  }
  $renk = $tur === 'ok' ? '#1C1B18' : '#85641C';
  echo '<!doctype html><html lang="tr"><head><meta charset="utf-8">'
     . '<meta name="viewport" content="width=device-width,initial-scale=1">'
     . '<meta name="robots" content="noindex"><title>' . htmlspecialchars($baslik) . '</title>'
     . '<style>body{font-family:system-ui,sans-serif;background:#FAF7F1;color:#1C1B18;margin:0;'
     . 'display:grid;place-items:center;min-height:100vh;padding:24px;line-height:1.6}'
     . '.k{background:#fff;border:1px solid #E6DED0;border-radius:20px;padding:32px 28px;max-width:520px;'
     . 'box-shadow:0 24px 60px -30px rgba(28,27,24,.35)}h1{font-size:1.4rem;margin:0 0 12px;color:' . $renk . '}'
     . 'a{display:inline-block;margin-top:18px;background:#1C1B18;color:#fff;text-decoration:none;'
     . 'padding:13px 22px;border-radius:12px;font-weight:700}</style></head><body><div class="k">'
     . '<h1>' . htmlspecialchars($baslik) . '</h1><p>' . $mesaj . '</p>'
     . '<a href="/">Ana sayfaya dön</a></div></body></html>';
  exit;
}

$TEL = '${S.iletisim.tel}';
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { header('Location: /iletisim/'); exit; }

/* bal küpü + hız sınırı (spam) */
if (!empty($_POST['website'] ?? '')) { cikis('ok', 'Talebiniz alındı', 'Teşekkür ederiz.'); }
$son = $_SESSION['son_gonderim'] ?? 0;
if (time() - (int)$son < 30) {
  cikis('hata', 'Çok hızlı gönderim', 'Az önce bir talep gönderdiniz. Lütfen biraz bekleyin veya bizi arayın: ' . htmlspecialchars($TEL));
}
$_SESSION['son_gonderim'] = time();

$al = function (string $ad, int $sinir = 200): string {
  $d = trim((string)($_POST[$ad] ?? ''));
  $d = str_replace(["\\r", "\\n", '%0a', '%0d'], ' ', $d);   /* başlık enjeksiyonu koruması */
  return mb_substr($d, 0, $sinir);
};
$ad = $al('ad', 80);
$tel = $al('telefon', 24);
$eposta = filter_var($al('eposta', 120), FILTER_VALIDATE_EMAIL) ?: '';
$konu = $al('konu', 120);
$mesaj = mb_substr(trim((string)($_POST['mesaj'] ?? '')), 0, 2000);

if ($ad === '' || $tel === '') {
  cikis('hata', 'Eksik bilgi', 'Ad ve telefon zorunludur. Lütfen <a href="/iletisim/">forma geri dönüp</a> tamamlayın.');
}

$govde = "Yeni randevu talebi\\n\\n"
  . "Ad: $ad\\nTelefon: $tel\\n"
  . ($eposta !== '' ? "E-posta: $eposta\\n" : '')
  . ($konu !== '' ? "Konu: $konu\\n" : '')
  . "\\nMesaj:\\n" . ($mesaj !== '' ? $mesaj : '(yok)')
  . "\\n\\n---\\nGönderim: " . date('d.m.Y H:i') . "\\nIP: " . ($_SERVER['REMOTE_ADDR'] ?? '-');

$baslik = "From: ${S.marka} <no-reply@" . ($_SERVER['HTTP_HOST'] ?? 'localhost') . ">\\r\\n";
$baslik .= "Content-Type: text/plain; charset=UTF-8\\r\\n";
if ($eposta !== '') $baslik .= "Reply-To: $eposta\\r\\n";

$gitti = @mail('${S.iletisim.eposta}', '=?UTF-8?B?' . base64_encode('Randevu talebi — ' . $ad) . '?=', $govde, $baslik);

/* e-posta gitmese bile talep kaybolmasın: sunucuda günlük tut (webroot DIŞI) */
$kayit = dirname(__DIR__) . '/randevu-talepleri.log';
@file_put_contents($kayit, $govde . "\\nE-POSTA: " . ($gitti ? 'gonderildi' : 'BASARISIZ') . "\\n====\\n", FILE_APPEND | LOCK_EX);

cikis('ok', 'Talebiniz bize ulaştı',
  'Randevu talebiniz alındı. Çalışma saatleri içinde size dönüş yapılacak ve gün ile saat birlikte belirlenecek. '
  . 'Acil bir durumunuz varsa lütfen bizi arayın: <strong>' . htmlspecialchars($TEL) . '</strong><br><br>'
  . '<small>Bu bir randevu onayı değildir.</small>');
`;
fs.writeFileSync(path.join(CIKTI, 'iletisim-gonder.php'), formPhp, 'utf8');

/* ---------- ön bilgi asistanı sunucu ucu (asistan.php) ----------
   Anahtar webroot DIŞINDAKİ ../rahmi-asistan-gizli.php dosyasındadır
   (örnek: sunucu/rahmi-asistan-gizli.ornek.php). Dosya yoksa 503 döner ve
   tarayıcı hazır yanıtlara geçer. Mesaj içeriği hiçbir yere yazılmaz. */
const asistanPhp = String.raw`<?php
/* ${S.marka} — ön bilgi asistanı (render.js üretir, elle DÜZENLEME) */
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function bitir(int $kod, array $veri): void {
  http_response_code($kod);
  echo json_encode($veri, JSON_UNESCAPED_UNICODE);
  exit;
}
/* dosya tabanlı sayaç; sınır aşıldıysa false */
function say(string $dosya, int $sinir): bool {
  $fp = @fopen($dosya, 'c+');
  if (!$fp) return true;
  flock($fp, LOCK_EX);
  $n = (int) stream_get_contents($fp);
  $izin = $n < $sinir;
  if ($izin) { ftruncate($fp, 0); rewind($fp); fwrite($fp, (string) ($n + 1)); fflush($fp); }
  flock($fp, LOCK_UN);
  fclose($fp);
  return $izin;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') bitir(405, ['hata' => 'yontem']);

/* yalnız aynı siteden gelen istekler */
$sunucu = preg_replace('/:\d+$/', '', (string) ($_SERVER['HTTP_HOST'] ?? ''));
$kaynak = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
if ($kaynak !== '' && strcasecmp((string) parse_url($kaynak, PHP_URL_HOST), $sunucu) !== 0) bitir(403, ['hata' => 'kaynak']);

$gizliYol = dirname(__DIR__) . '/rahmi-asistan-gizli.php';
if (!is_file($gizliYol)) bitir(503, ['hata' => 'kapali']);
$A = require $gizliYol;
$anahtar = is_array($A) ? (string) ($A['anahtar'] ?? '') : '';
if ($anahtar === '') bitir(503, ['hata' => 'kapali']);

/* hız sınırı — IP adresi saklanmaz, günlük değişen özeti kullanılır */
$sayacDizin = sys_get_temp_dir() . '/rahmi-asistan';
if (!is_dir($sayacDizin)) @mkdir($sayacDizin, 0700, true);
$kim = substr(hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . '|' . date('Y-m-d') . '|' . $anahtar), 0, 24);
if (!say($sayacDizin . '/k-' . $kim . '-' . date('YmdH'), (int) ($A['saatlik'] ?? 20))) bitir(429, ['hata' => 'sinir']);
if (!say($sayacDizin . '/g-' . date('Ymd'), (int) ($A['gunluk'] ?? 400))) bitir(429, ['hata' => 'sinir']);
if (random_int(1, 40) === 1) {
  foreach (glob($sayacDizin . '/*') ?: [] as $f) if (@filemtime($f) < time() - 172800) @unlink($f);
}

$govde = json_decode((string) file_get_contents('php://input', false, null, 0, 1800000), true);
if (!is_array($govde)) bitir(400, ['hata' => 'bicim']);
$FOTO = (($govde['tur'] ?? '') === 'foto');
$mesajlar = [];
if ($FOTO) {
  /* fotoğrafla ön değerlendirme: ayrı ve daha sıkı sınır; görsel diske YAZILMAZ */
  if (!say($sayacDizin . '/f-' . $kim . '-' . date('YmdH'), (int) ($A['foto_saatlik'] ?? 3))) bitir(429, ['hata' => 'sinir']);
  if (!say($sayacDizin . '/fg-' . date('Ymd'), (int) ($A['foto_gunluk'] ?? 60))) bitir(429, ['hata' => 'sinir']);
  $gorsel = (string) ($govde['gorsel'] ?? '');
  $on = 'data:image/jpeg;base64,';
  if (strncmp($gorsel, $on, strlen($on)) !== 0 || strlen($gorsel) > 1700000
      || base64_decode(substr($gorsel, strlen($on)), true) === false) bitir(400, ['hata' => 'bicim']);
  $mesajlar[] = ['role' => 'user', 'content' => [
    ['type' => 'text', 'text' => 'Fotoğraftaki cildin genel görünümünü kurallara göre betimle ve ilgili sayfaları öner.'],
    ['type' => 'image_url', 'image_url' => ['url' => $gorsel, 'detail' => 'low']],
  ]];
} else {
  if (!is_array($govde['mesajlar'] ?? null)) bitir(400, ['hata' => 'bicim']);
  foreach (array_slice($govde['mesajlar'], -7) as $m) {
    if (!is_array($m)) continue;
    $metin = trim(mb_substr((string) ($m['metin'] ?? ''), 0, 600));
    if ($metin === '') continue;
    $mesajlar[] = ['role' => (($m['rol'] ?? '') === 'a') ? 'assistant' : 'user', 'content' => $metin];
  }
  if (!$mesajlar || end($mesajlar)['role'] !== 'user') bitir(400, ['hata' => 'bicim']);
}
$sayfa = mb_substr(strip_tags((string) ($govde['sayfa'] ?? '')), 0, 120);

$fotoIstem = <<<'FOTO'
${ASISTAN.fotoIstem(sayfalar, ik)}
FOTO;

$istem = <<<'ISTEM'
${ASISTAN.istem(sayfalar, ik)}
ISTEM;

/* ---------- site bilgisi: soruya en yakın üç sayfanın metni ---------- */
function sadelestir(string $s): string {
  $s = mb_strtolower($s, 'UTF-8');
  $s = str_replace("\u{307}", '', $s);
  $s = strtr($s, ['ç' => 'c', 'ğ' => 'g', 'ı' => 'i', 'ö' => 'o', 'ş' => 's', 'ü' => 'u', 'â' => 'a', 'î' => 'i', 'û' => 'u']);
  $s = (string) preg_replace('/[^a-z0-9 ]+/', ' ', $s);
  return trim((string) preg_replace('/\s+/', ' ', $s));
}
$bankaHam = <<<'VERI'
${JSON.stringify(ASISTAN.bilgiBankasi(sayfalar, ik))}
VERI;
$BANKA = json_decode($bankaHam, true) ?: [];
$sorgu = ''; $kullanici = 0;
foreach (array_reverse($mesajlar) as $m) {
  if ($m['role'] !== 'user' || !is_string($m['content'])) continue;
  $sorgu .= ' ' . $m['content'];
  if (++$kullanici >= 2) break;
}
$DOLGU = ['nasil', 'neden', 'icin', 'kadar', 'olur', 'yapiliyor', 'yapilir', 'musunuz', 'misiniz', 'istiyorum', 'nedir',
  'hangi', 'bana', 'benim', 'bunu', 'sonra', 'once', 'daha', 'gibi', 'oluyor', 'yapiyor', 'sizde', 'burada', 'merhaba', 'acaba', 'mumkun'];
$kelimeler = array_values(array_unique(array_filter(explode(' ', sadelestir($sorgu)),
  function ($k) use ($DOLGU) { return strlen($k) >= 4 && !in_array($k, $DOLGU, true); })));
$puanlar = [];
foreach ($BANKA as $i => $b) {
  $p = 0.0;
  foreach ($kelimeler as $k) {
    $kok = substr($k, 0, 5);
    if (strpos(' ' . $b['k'], ' ' . $kok) !== false) $p += 3;
    $p += min(3, substr_count(' ' . $b['ms'], ' ' . $kok)) * 0.5;
  }
  if ($p >= 3) $puanlar[$i] = $p;
}
arsort($puanlar);
$ekBilgi = '';
$kaynaklar = [];
foreach (array_slice(array_keys($puanlar), 0, 3) as $i) {
  $ekBilgi .= "\n\n### " . $BANKA[$i]['a'] . ' (/' . $BANKA[$i]['y'] . ")\n" . mb_substr((string) $BANKA[$i]['m'], 0, 2600);
  $kaynaklar[] = ['y' => $BANKA[$i]['y'], 'a' => $BANKA[$i]['a']];
}
if ($ekBilgi !== '') $ekBilgi = "\n\nSİTEDEN İLGİLİ SAYFALAR" . $ekBilgi;

$istek = [
  'model' => (string) ($A['model'] ?? 'gpt-5-mini'),
  'messages' => array_merge([['role' => 'system', 'content' => $FOTO ? $fotoIstem
    : $istem . $ekBilgi . "\n\nZiyaretçinin şu an bulunduğu sayfa: " . $sayfa]], $mesajlar),
  'max_completion_tokens' => (int) ($A['cikti'] ?? 900),
];
if (!empty($A['akil'])) $istek['reasoning_effort'] = (string) $A['akil'];

$ch = curl_init('https://api.openai.com/v1/chat/completions');
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CONNECTTIMEOUT => 6,
  CURLOPT_TIMEOUT => $FOTO ? 45 : 25,
  CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Authorization: Bearer ' . $anahtar],
  CURLOPT_POSTFIELDS => json_encode($istek, JSON_UNESCAPED_UNICODE),
]);
$ham = curl_exec($ch);
$kod = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);
$cevap = is_string($ham) ? json_decode($ham, true) : null;
$yanit = trim((string) ($cevap['choices'][0]['message']['content'] ?? ''));
if ($kod !== 200 || $yanit === '') {
  /* yalnız durum kodu yazılır; ziyaretçi mesajı günlüğe GİRMEZ */
  error_log('[asistan] servis yanıtı ' . $kod . ' ' . substr((string) ($cevap['error']['code'] ?? $cevap['error']['type'] ?? ''), 0, 60));
  bitir(502, ['hata' => 'servis']);
}
/* modelden bağımsız fiyat süzgeci */
if (preg_match('/\d[\d.,]*\s*(?:tl|lira|try|euro|usd|dolar)(?![a-zçğıöşü])|\d[\d.,]*\s*[₺€$]|[₺€$]\s*\d/iu', $yanit)) {
  $yanit = 'Fiyat bilgisi bu sohbette paylaşılmıyor; ücret, muayenede size uygun görülen plana göre konuşulur. Ön bilgi için ${S.iletisim.tel} numarasını arayabilirsiniz.';
}
bitir(200, ['yanit' => $yanit, 'kaynaklar' => $FOTO ? [] : $kaynaklar]);
`;
fs.writeFileSync(path.join(CIKTI, 'asistan.php'), asistanPhp, 'utf8');


console.log(`${n} sayfa derlendi → ../docs/`);
sayfalar.forEach(s => console.log('  /' + (s.slug ? s.slug + '/' : '') + (s.noindex ? '   [noindex]' : '')));
