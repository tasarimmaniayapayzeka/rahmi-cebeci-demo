const S = require('../site');
const OZ = require('../parcalar/uygulama-ozet');
const { test } = require('../parcalar/test-veri');

/* Estetik uygulama rehberi (5 Eki 2026): şikâyet → sitede o konuyla ilişkilendirilmiş uygulamalar.
   Konu → uygulama eşleşmesi elle yazılmaz; derlemede her cilt sorunu sayfasının kendi bağlantılarından çıkarılır
   (sayfada yeni bir uygulamaya bağlantı verilirse rehbere de girer). Liste derlendikten sonra panelden düzenlenebilir.
   "Size uygun" dili yok; sonuç muayenede konuşulabilecek başlıklardır. HEKİM ONAYINA SUNULACAK. */
const IGNESIZ = new Set(['pico-lazer-dovme-silme', 'pico-lazer-leke', 'fraksiyonel-lazer', 'hifu-ameliyatsiz-yuz-germe', 'ignesiz-mezoterapi', 'karbon-peeling']);
const DISARIDA = new Set(['hekim-muayenesi', 'uygulama-sonrasi-takip']);
const UYG_AD = {};
S.katalog.forEach(g => g.ogeler.forEach(([ad, sl, not]) => { UYG_AD[sl] = { ad, not }; }));

/* her sorun sayfasındaki uygulama bağlantıları (ilk görünme sırasıyla) */
const KONU_UYG = {};
S.sorunlar.forEach(([, sl]) => {
  const sayfa = require('./cilt-sorunlari/' + sl);
  const html = sayfa.icerik('/', new Proxy({}, { get: () => '' }));
  const sira = [];
  for (const m of html.matchAll(/href="\/uygulamalar\/([a-z0-9-]+)\/[^"]*"/g)) {
    if (!sira.includes(m[1]) && UYG_AD[m[1]] && !DISARIDA.has(m[1])) sira.push(m[1]);
  }
  KONU_UYG[sl] = sira;
});

const VERI = r => ({
  sorular: [
    { anahtar: 'konu', tur: 'cok', soru: 'Hangi konuda bilgi almak istiyorsunuz?', ipucu: 'En çok üç konu seçebilirsiniz.',
      secenekler: S.sorunlar.map(([ad, sl]) => ({ deger: sl, metin: ad })) },
    { anahtar: 'igne', soru: 'İğne konusunda bir tercihiniz var mı?', secenekler: [
      { deger: 'ignesiz', metin: 'Önce iğnesiz yöntemleri görmek isterim' },
      { deger: 'fark', metin: 'Fark etmez' }] },
    { anahtar: 'zaman', soru: 'Yetiştirmek istediğiniz önemli bir gün var mı?', secenekler: [
      { deger: 'yakin', metin: 'Evet, önümüzdeki iki ay içinde' },
      { deger: 'yok', metin: 'Hayır, acelem yok' }] },
    { anahtar: 'soyle', tur: 'cok', soru: 'Aşağıdakilerden size uyanlar var mı?', ipucu: 'Bu yanıtlar yalnızca size hatırlatma göstermek için kullanılır; hiçbir yere gönderilmez.', secenekler: [
      { deger: 'gebelik', metin: 'Gebelik ya da emzirme' },
      { deger: 'kan', metin: 'Kan sulandırıcı ilaç kullanımı' },
      { deger: 'akne', metin: 'Son altı ayda ağızdan akne ilacı' },
      { deger: 'ucuk', metin: 'Sık tekrarlayan uçuk' },
      { deger: 'iz', metin: 'Kabarık iz yapma eğilimi' },
      { deger: 'bronz', metin: 'Son haftalarda bronzlaşma' },
      { deger: 'alerji', metin: 'Daha önce bir uygulamaya ya da ürüne alerjik tepki' },
      { deger: 'yok', metin: 'Hiçbiri' }] },
  ],
  metinler: [
    { anahtar: 'rehber_giris', baslik: 'Seçtiğiniz konularda muayenede konuşulabilecek başlıklar', metin: 'Aşağıdaki uygulamalar sitede bu konularla ilişkilendirilmiş başlıklardır. Hangisinin size uygun olduğu, hatta herhangi birine gerek olup olmadığı muayenede belirlenir.' },
    { anahtar: 'ilk_adim', baslik: 'İlk adım', metin: 'Her plan öykü ve muayeneyle başlar; aşağıdaki başlıklar bu görüşmede konuşulabilir.' },
    { anahtar: 'zaman_yakin', baslik: 'Tarihe göre geriye doğru planlayın', metin: 'Bazı uygulamaların etkisi haftalar içinde ortaya çıkar, bazılarından sonra birkaç gün kızarıklık ya da şişlik olabilir. Önemli bir gününüz varsa muayeneyi erkenden planlayın ve tarihi hekiminize söyleyin.' },
    { anahtar: 'soyle_bas', baslik: 'Muayenede mutlaka söyleyin', metin: '' },
    { anahtar: 'soyle_gebelik', baslik: 'Gebelik ya da emzirme', metin: 'Bu dönemde pek çok uygulama ertelenir; planı doğrudan etkiler.' },
    { anahtar: 'soyle_kan', baslik: 'Kan sulandırıcı ilaç', metin: 'Morarma ve kanama riskini etkiler. İlacı kendi başınıza bırakmayın; adını ve dozunu muayeneye getirin.' },
    { anahtar: 'soyle_akne', baslik: 'Ağızdan akne ilacı', metin: 'Lazer ve bazı işlemlerden önce bekleme süresi gerekebilir; ilacı bıraktığınız tarihi not edin.' },
    { anahtar: 'soyle_ucuk', baslik: 'Tekrarlayan uçuk', metin: 'Dudak çevresi ve yüz uygulamalarından önce konuşulur; gerekirse ek önlem planlanır.' },
    { anahtar: 'soyle_iz', baslik: 'Kabarık iz eğilimi', metin: 'İğne ve lazer içeren uygulamalarda planı değiştirebilir; daha önceki izlerinizi gösterin.' },
    { anahtar: 'soyle_bronz', baslik: 'Yakın zamanda bronzlaşma', metin: 'Lazer ve cihaz uygulamaları çoğu zaman ten eski hâline dönene kadar ertelenir.' },
    { anahtar: 'soyle_alerji', baslik: 'Önceki alerjik tepki', metin: 'Hangi ürüne ya da uygulamaya nasıl bir tepki geliştiğini anlatın; varsa belgeleri getirin.' },
    { anahtar: 'rehber_son', baslik: 'Bu bir öneri listesi değildir', metin: 'Rehber, sitedeki bilgileri seçtiğiniz konulara göre sıralar; tanı koymaz ve uygulama önermez. Kesin değerlendirme yüz yüze muayenede yapılır.' },
  ],
  konular: S.sorunlar.map(([ad, sl]) => ({
    anahtar: sl, ad, yol: `${r}cilt-sorunlari/${sl}/`,
    uygulamalar: KONU_UYG[sl].map(u => ({
      ad: UYG_AD[u].ad, yol: `${r}uygulamalar/${u}/`, ignesiz: IGNESIZ.has(u),
      hedef: (OZ[u] && OZ[u].hedef) || UYG_AD[u].not || '',
    })),
  })),
  ayarlar: {
    en_cok_secim: '3',
    sonuc_etiket: 'Muayenede konuşabileceğiniz başlıklar',
    gizlilik: 'Yanıtlarınız kaydedilmedi ve bir yere gönderilmedi; sayfayı kapattığınızda silinir. WhatsApp mesajına yalnız seçtiğiniz konular yazılır.',
  },
});

module.exports = {
  slug: 'estetik-uygulama-rehberi',
  tip: 'tibbi',
  js: 'arac.js',
  baslik: 'Estetik uygulama rehberi: muayenede ne konuşabilirim?',
  aciklama: 'Estetik uygulama rehberi: şikâyetinizi seçin, muayenede konuşabileceğiniz başlıkları ve söylemeniz gerekenleri görün. Tanı koymaz; öneri de yapmaz.',
  odak: 'estetik uygulama rehberi',   /* Yoast odak anahtar kelimesi */

  icerik: (r, ik) => `
<!-- ═════ HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <span>Estetik uygulama rehberi</span></nav>
      <p class="g-etiket">Araç · Muayene öncesi</p>
      <h1><span class="g-isik">Estetik uygulama rehberi</span>: muayenede ne konuşabilirim?</h1>
      <p class="g-hero__alt">Estetik uygulama rehberi, şikâyetinizden yola çıkarak sitedeki bilgileri sizin için sıralar. Konunuzu, iğne konusundaki tercihinizi ve muayenede bilinmesi gereken durumları işaretleyin; ilgili sayfaları ve görüşmede söylemeniz gerekenleri tek ekranda görün. Uygulama önermez, uygunluğa karar vermez; o karar muayenede verilir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="#arac">Rehberi açın ↓</a>
        <a class="dgm dgm--iki" href="${r}uygulamalar/hekim-muayenesi/">Hekim muayenesi</a>
      </div>
      <div class="g-tikler"><span><i></i>Dört soru</span><span><i></i>Yanıtlar cihazınızda kalır</span><span><i></i>Öneri değil, yol gösterici</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-hekim-muayenesi.webp" width="1400" height="788" alt="Muayene masasında dermatoskop ve büyüteç" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <div class="g-hud"><b>${S.sorunlar.length} konu, ${Object.keys(UYG_AD).length - DISARIDA.size} uygulama</b><div class="g-cizgi"></div><span>Sitedeki sayfalardan derlenen bağlantılar</span></div>
    </div>
  </div>
</section>

<!-- ═════ ARAÇ ═════ -->
<section class="bolum bolum--arac" id="arac">
  <div class="sar">
    <div class="arac-sahne" data-arac="rehber">
      <div data-arac-govde>
        <div class="arac-giris">
          <h2>Nereden başlayacağınızı birlikte bulalım</h2>
          <p>Önce bilgi almak istediğiniz konuları seçin; ardından iğne tercihinizi, yetiştirmek istediğiniz bir tarih olup olmadığını ve muayenede bilinmesi gereken durumları işaretleyin.</p>
          <ul class="arac-adimlar"><li>Konular</li><li>İğne tercihi</li><li>Zaman</li><li>Söylenmesi gerekenler</li></ul>
          <button type="button" class="dgm dgm--gece" data-arac-basla>Başlayın</button>
        </div>
      </div>
      <nav class="arac-baglar" data-arac-bag aria-label="İlgili sayfalar">
        <a data-bag="iletisim" href="${r}iletisim/">Randevu talebi formu</a>
        <a data-bag="muayene" href="${r}uygulamalar/hekim-muayenesi/">Hekim muayenesi</a>
        <a data-bag="hazirlik" href="${r}hazirlik-listesi/">Görüşmeye hazırlık notları</a>
        <a data-bag="bolge" href="${r}bolge-pusulasi/">Bölge rehberi</a>
      </nav>
    </div>
    ${test('rehber', VERI(r))}
  </div>
</section>

<!-- ═════ NASIL ÇALIŞIR ═════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Nasıl çalışır?</p>
      <h2>Rehber neye dayanıyor?</h2>
      <p class="giris">Rehberdeki her bağlantı, sitedeki cilt sorunu sayfalarında hekimin o konu için andığı uygulamalardan derlenir. Yeni bir bilgi eklemez; dağınık sayfaları sizin seçiminize göre bir araya getirir.</p>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <div class="kart kart--duz"><h3>Konudan başlar</h3><p>Leke, akne izi, sarkma, saç dökülmesi ya da dövme gibi on iki başlıktan en çok üçünü seçersiniz. Her biri ilgili cilt sorunu sayfasına bağlanır.</p></div>
      <div class="kart kart--duz"><h3>Tercihinizi dikkate alır</h3><p>İğnesiz yöntemleri önce görmek isterseniz lazer ve cihaz uygulamaları başa alınır; diğerleri listeden çıkmaz, yalnızca sırası değişir.</p></div>
      <div class="kart kart--duz"><h3>Hatırlatma çıkarır</h3><p>Gebelik, kan sulandırıcı kullanımı ya da yakın zamanda bronzlaşma gibi durumları işaretlerseniz muayenede söylemeniz gerekenler ayrıca listelenir.</p></div>
    </div>
  </div>
</section>

<!-- ═════ NEDEN ÖNERMİYORUZ ═════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Sınırları</p>
      <h2>Neden "size şu uygun" demiyoruz?</h2>
    </div>
    <div data-gr style="--d:70ms">
      <p>Aynı şikâyetin arkasında birbirinden çok farklı nedenler olabilir. Yanakta görünen bir koyuluk güneş lekesi de olabilir, sivilce sonrası iz ya da hormonlarla ilişkili bir renk değişikliği de; her birinin planı ayrıdır. Bu ayrım ancak cilt yakından incelendiğinde ve öykünüz dinlendiğinde yapılabilir.</p>
      <p>Sağlık hizmetlerinin tanıtımına ilişkin kurallar da kişiyi bir uygulamaya yönlendirmeyi uygun görmez. Bu yüzden rehber yalnızca konuşulabilecek başlıkları gösterir; hangisinin gerekli olduğu, bazen hiçbirinin gerekmediği muayenede netleşir.</p>
      <p>Muayeneye hazırlanırken <a href="${r}cilt-tipi-testi/">cilt eğilimi testi</a> ve <a href="${r}hazirlik-listesi/">görüşmeye hazırlık notları</a> da işinize yarayabilir.</p>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Rehber hakkında merak edilenler</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLowerCase()} · rehber · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Rehberde çıkan uygulamayı yaptırmam gerekir mi?</button>
        <div class="g-syanit" data-gs-yanit="0">Hayır. Rehber yalnızca sitede o konuyla ilişkilendirilmiş başlıkları gösterir. Muayenede bunlardan biri, birkaçı ya da hiçbiri konuşulmayabilir; karar öykünüze ve muayene bulgularına göre verilir.</div>
        <button class="g-ssoru" data-gs="1"><i>›</i>"İğnesiz" seçeneği ne anlama geliyor?</button>
        <div class="g-syanit" data-gs-yanit="1">Lazer, odaklanmış ultrason ve iğnesiz mezoterapi gibi cilde iğne batırılmadan yapılan uygulamalar listenin başına alınır. İğne ya da mikroiğne içeren uygulamalar listede kalır ve ayrıca etiketlenir.</div>
        <button class="g-ssoru" data-gs="2"><i>›</i>İşaretlediğim sağlık bilgileri bir yere gönderiliyor mu?</button>
        <div class="g-syanit" data-gs-yanit="2">Hayır. Yanıtlar yalnızca tarayıcınızda işlenir ve sayfayı kapattığınızda silinir. Sonuçtaki WhatsApp düğmesine basarsanız hazırlanan mesajda yalnızca seçtiğiniz konular yer alır; sağlık durumunuzla ilgili işaretler mesaja eklenmez.</div>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
`,
};
