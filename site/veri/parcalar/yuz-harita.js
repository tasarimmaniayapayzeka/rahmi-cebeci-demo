/* ============================================================
   YÜZ HARİTASI — 3B profil görseli + tıklanabilir bölgeler
   ------------------------------------------------------------
   Sağa bakan profil görselinin üzerine bölge noktaları bindirilir;
   bir nokta ya da liste düğmesi seçildiğinde sağdaki bilgi kartı
   değişir. El ve Vücut profil görseline oturmadığı için yalnız
   listede yer alır. Tüm etkileşim anasayfa.js'te.
   ============================================================ */

const BOLGELER = [
  ['yuz',            'Yüz',              'Yüzün tamamı tek plan olarak ele alınır; alına, elmacığa ve çene hattına birlikte bakılır, çünkü her biri ötekinin görünümünü değiştirir.', [252, 282]],
  ['goz-cevresi',    'Göz Çevresi',      'Koyu halkalar, göz kenarındaki çizgiler ve kaşın konumu. Hata payı en dar bölge olduğundan plan küçük adımlarla ilerler.', [284, 236]],
  ['dudak',          'Dudak',            'Dolgunluk, kenar netliği ve nem ayrı ele alınır. Ölçü kişinin kendi oranıdır; amaç büyütmek değil, dengeyi korumaktır.', [306, 322]],
  ['cene-ve-jawline','Çene ve Jawline',  'Çene hattının netliğini kemik desteği, çene altı yağı, deri gerginliği ve çiğneme kası birlikte belirler.', [268, 402]],
  ['sacli-deri',     'Saçlı Deri',       'Önce dökülmenin nedeni ayrılır; saç mezoterapisi, saç PRP ve eksozom ancak bundan sonra konuşulur.', [196, 98]],
  ['boyun-ve-dekolte','Boyun ve Dekolte','Boyundaki halka çizgileri, dikey bantlar ve göğüs üstündeki güneş lekeleri; yüzden ayrı ayarlarla planlanır.', [200, 500]],
  ['el',             'El',               'El sırtında hacim azaldıkça damar ve tendonlar öne çıkar; güneş lekeleri de ilk burada birikir.', null],
  ['vucut',          'Vücut',            'Karın, bel, kol ve bacakta bölgesel yağlanma, selülit görünümü ve dövme silme. Hiçbir uygulama kilo vermenin yerine geçmez.', null],
];

const BOLGE_UYGULAMA = {
  'yuz':             [['Dolgu Uygulamaları','dolgu-uygulamalari'],['Sıvı Yüz Germe','sivi-yuz-germe'],['Botulinum Toksin','botulinum-toksin'],['Mezoterapi','mezoterapi'],['HIFU','hifu-ameliyatsiz-yuz-germe'],['Fraksiyonel Lazer','fraksiyonel-lazer'],['Altın İğne Radyofrekans','altin-igne-radyofrekans']],
  'sacli-deri':      [['Saç Mezoterapisi','sac-mezoterapisi'],['Saç PRP','sac-prp'],['Saçlı Deride Eksozom','eksozom/#sac']],
  'goz-cevresi':     [['Göz Altı Dolgusu','dolgu-uygulamalari/#goz-alti'],['Somon DNA ve Polinükleotid','somon-dna-polinukleotid'],['Botulinum Toksin','botulinum-toksin']],
  'dudak':           [['Dolgu Uygulamaları','dolgu-uygulamalari'],['Gençlik Aşısı (Skinbooster)','genclik-asisi-skinbooster']],
  'cene-ve-jawline': [['Dolgu Uygulamaları','dolgu-uygulamalari'],['Botulinum Toksin','botulinum-toksin'],['Bölgesel Lipoliz','bolgesel-lipoliz'],['HIFU','hifu-ameliyatsiz-yuz-germe']],
  'boyun-ve-dekolte':[['Mezoterapi','mezoterapi'],['Gençlik Aşısı (Skinbooster)','genclik-asisi-skinbooster'],['Botulinum Toksin','botulinum-toksin'],['HIFU','hifu-ameliyatsiz-yuz-germe']],
  'el':              [['Mezoterapi','mezoterapi'],['Pico Lazer ile Leke','pico-lazer-leke'],['Gençlik Aşısı (Skinbooster)','genclik-asisi-skinbooster']],
  'vucut':           [['Bölgesel Lipoliz','bolgesel-lipoliz'],['Selülit Görünümü','selulit-gorunumu'],['Pico Lazer ile Dövme Silme','pico-lazer-dovme-silme'],['Mezoterapi','mezoterapi']],
};

const OK_MINI = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';

/* 3B render (varliklar/gorsel/yuz-3d.webp — 900x1200, sağa bakan
   profil). Noktalar görselin üzerine yüzde konumla bindirilir;
   koordinatlar bu görsele göre elle yerleştirildi. Görsel değişirse
   konumlar yeniden ayarlanmalı. */
const NOKTA_KONUM = {
  'sacli-deri':      [47, 13],
  'goz-cevresi':     [71, 31],
  'yuz':             [62, 41],
  'dudak':           [78, 46],
  'cene-ve-jawline': [63, 54],
  'boyun-ve-dekolte':[52, 67],
};

function sahneUret(r) {
  const noktalar = BOLGELER.filter(b => NOKTA_KONUM[b[0]]).map(([slug, ad]) => {
    const [x, y] = NOKTA_KONUM[slug];
    return `<button type="button" class="yh3-nokta" data-nokta="${slug}" aria-label="${ad}" style="--x:${x}%;--y:${y}%"><span></span></button>`;
  }).join('');
  return `<img src="${r}varliklar/gorsel/yuz-3d.webp" alt="Sağa bakan kadın profili — uygulama bölgeleri bu görüntü üzerinde işaretli" width="900" height="1200" loading="lazy">
    ${noktalar}
    <p class="yh3-not">Temsilî görsel · yapay zekâ ile üretildi</p>`;
}

function listeUret() {
  return BOLGELER.map(([slug, ad], i) =>
    `<button type="button" data-liste="${slug}" aria-pressed="${i === 0 ? 'true' : 'false'}">${ad}</button>`).join('');
}

function panelUret(r) {
  return BOLGELER.map(([slug, ad, aciklama], i) => {
    const haplar = (BOLGE_UYGULAMA[slug] || []).map(([uad, uslug]) =>
      `<a class="yh-hap" href="${r}uygulamalar/${uslug.includes('#') ? uslug.replace('/#', '#').replace('#', '/#') : uslug + '/'}">${uad}${OK_MINI}</a>`).join('');
    return `<div class="yh-kart" data-kart="${slug}"${i === 0 ? ' data-acik="1"' : ' hidden'}>
      <span class="yh-kart__etiket">Seçili bölge</span>
      <h3>${ad}</h3>
      <p class="yh-kart__aciklama">${aciklama}</p>
      <div class="yh-kart__uygulamalar">${haplar}</div>
      <a class="dgm dgm--iki dgm--kucuk" href="${r}bolgeler/${slug}/">Bu bölgeyi ayrıntılı okuyun ${OK_MINI}</a>
    </div>`;
  }).join('\n');
}

module.exports = { sahneUret, listeUret, panelUret, BOLGELER };
