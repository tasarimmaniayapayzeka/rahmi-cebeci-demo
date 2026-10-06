const S = require('../site');
const { test } = require('../parcalar/test-veri');

/* Güneş alışkanlığı testi (5 Eki 2026). Puan gösterilmez; yanıtlardan en belirgin üç alışkanlık seçilir ve
   panelden düzenlenen sabit metinler gösterilir. HEKİM ONAYINA SUNULACAK. */
const VERI = {
  sorular: [
    { anahtar: 'spf', soru: 'Güneş koruyucuyu ne sıklıkla kullanırsınız?', secenekler: [
      { deger: '0', metin: 'Her gün, mevsim fark etmeksizin' },
      { deger: '1', metin: 'Yalnız yazın ya da güneşli günlerde' },
      { deger: '2', metin: 'Nadiren ya da hiç' }] },
    { anahtar: 'yenileme', soru: 'Gün içinde dışarıdayken koruyucuyu yeniler misiniz?', secenekler: [
      { deger: '0', metin: 'Evet, birkaç saatte bir' },
      { deger: '1', metin: 'Bazen' },
      { deger: '2', metin: 'Hayır, sabah sürdüğüm yeter diye düşünürüm' }] },
    { anahtar: 'saat', soru: 'Öğle saatlerinde (11.00–15.00) güneşte ne kadar kalırsınız?', secenekler: [
      { deger: '0', metin: 'Çok az, gölgeyi seçerim' },
      { deger: '1', metin: 'Hafta sonları ya da tatilde uzun süre' },
      { deger: '2', metin: 'Hemen her gün uzun süre' }] },
    { anahtar: 'bronz', soru: 'Bronzlaşmak sizin için ne ifade ediyor?', secenekler: [
      { deger: '0', metin: 'Bronzlaşmaktan kaçınırım' },
      { deger: '1', metin: 'Hafif renk almayı severim' },
      { deger: '2', metin: 'Bilerek güneşlenir, koyu bronz isterim' }] },
    { anahtar: 'solaryum', soru: 'Solaryum kullandınız mı?', secenekler: [
      { deger: '0', metin: 'Hiç' },
      { deger: '1', metin: 'Geçmişte birkaç kez' },
      { deger: '2', metin: 'Düzenli olarak' }] },
    { anahtar: 'aksesuar', soru: 'Güneşli havada şapka ve güneş gözlüğü kullanır mısınız?', secenekler: [
      { deger: '0', metin: 'Düzenli olarak' },
      { deger: '1', metin: 'Bazen' },
      { deger: '2', metin: 'Hiç' }] },
    { anahtar: 'pencere', soru: 'Uzun süre araç kullanır ya da gün ışığı alan bir pencerenin yanında çalışır mısınız?', secenekler: [
      { deger: '0', metin: 'Hayır' },
      { deger: '1', metin: 'Haftada birkaç gün' },
      { deger: '2', metin: 'Hemen her gün' }] },
    { anahtar: 'yanik', soru: 'Son birkaç yılda güneş yanığı yaşadınız mı?', secenekler: [
      { deger: '0', metin: 'Hayır' },
      { deger: '1', metin: 'Bir-iki kez' },
      { deger: '2', metin: 'Hemen her yaz' }] },
  ],
  metinler: [
    { anahtar: 'aliskanlik_spf', baslik: 'Güneş koruyucu yalnız yazın değil', metin: 'Lekelenmede rol oynayan ultraviyole ışınlar kışın ve bulutlu havada da cilde ulaşır. Etkisi birikimlidir; yıllar içinde toplanır.', oneri: 'Her sabah yüz, boyun ve el sırtına en az SPF 30, geniş spektrumlu bir koruyucu sürün.' },
    { anahtar: 'aliskanlik_yenileme', baslik: 'Sabah sürülen koruyucu akşama kadar yetmez', metin: 'Koruyucu ter, sürtünme ve dokunmayla azalır; uzun süre dışarıda kalınan günlerde sabahki uygulamanın koruması öğleden sonraya ulaşmaz.', oneri: 'Dışarıdayken yaklaşık iki saatte bir ve terleme ya da yüzme sonrasında yenileyin.' },
    { anahtar: 'aliskanlik_saat', baslik: 'Öğle saatleri en yoğun dönem', metin: 'Ultraviyole ışınların en yoğun olduğu 11.00–15.00 arası, kısa sürede en fazla ışın alınan zaman dilimidir.', oneri: 'Bu saatlerde gölgeyi seçin; dışarıdaysanız koruyucuyu şapka ve giysiyle destekleyin.' },
    { anahtar: 'aliskanlik_bronz', baslik: 'Bronzluk, derinin savunma tepkisidir', metin: 'Ten rengindeki koyulaşma, derinin güneşe karşı ürettiği pigmentin artmasıdır; aynı süreç var olan lekelerin de koyulaşmasına zemin hazırlar.', oneri: 'Güneşlenmeyi kısa tutun; leke ya da lazer planınız varsa bronzlaşmadan önce muayenede konuşun.' },
    { anahtar: 'aliskanlik_solaryum', baslik: 'Solaryum da bir ultraviyole kaynağıdır', metin: 'Solaryum cihazları, Dünya Sağlık Örgütü’ne bağlı Uluslararası Kanser Araştırma Ajansı tarafından insanlar için kanserojen grubunda sınıflandırılır; lekelenmeyi de hızlandırabilir.', oneri: 'Solaryumu bırakmayı düşünün ve muayenede ne sıklıkla kullandığınızı belirtin.' },
    { anahtar: 'aliskanlik_aksesuar', baslik: 'Şapka ve gözlük, koruyucunun tamamlayıcısı', metin: 'Geniş kenarlı bir şapka alnı, elmacıkları ve burun sırtını; güneş gözlüğü göz çevresinin ince derisini korur. Lekeler en sık bu bölgelerde belirginleşir.', oneri: 'Uzun süre dışarıda kalacağınız günlerde şapka ve gözlüğü koruyucuyla birlikte kullanın.' },
    { anahtar: 'aliskanlik_pencere', baslik: 'Cam, ışınların bir kısmını geçirir', metin: 'Sıradan cam, yanığa yol açan ışınların çoğunu tutar; ama lekelenmede rol oynayan uzun dalga boylu ışınların bir bölümü camdan geçer. Direksiyonda ya da pencere kenarında geçen saatler bu yüzden önemlidir.', oneri: 'Gün ışığı alan bir yerde uzun saatler geçiriyorsanız iç mekânda da koruyucu kullanın.' },
    { anahtar: 'aliskanlik_yanik', baslik: 'Yanık, sınırın aşıldığını gösterir', metin: 'Güneş yanığı, derinin aldığı ışının onarabileceğinden fazla olduğunu gösterir; tekrarlayan yanıklar leke ve diğer güneş hasarı için de bir uyarıdır.', oneri: 'Yanık yaşadığınız ortamları ve saatleri not edin; korumayı o koşullara göre planlayın.' },
    { anahtar: 'gunes_bas', baslik: 'Öne çıkan alışkanlıklarınız', metin: 'Aşağıdaki başlıklar yanıtlarınızdan seçildi. Bu bir tanı değil, muayenede konuşabileceğiniz bir alışkanlık özetidir.' },
    { anahtar: 'gunes_bas_iyi', baslik: 'Alışkanlıklarınız güneşe karşı koruyucu görünüyor', metin: 'Yanıtlarınızda lekelenmeyi belirgin biçimde artıran bir alışkanlık öne çıkmadı.' },
    { anahtar: 'gunes_iyi', baslik: 'Bu düzeni koruyun', metin: 'Lekeler yalnız güneşle ilişkili değildir; hormonlar, sivilce sonrası izler ve bazı ilaçlar da rol oynayabilir. Var olan lekelerin tipi muayenede ayırt edilir.' },
    { anahtar: 'gunes_genel', baslik: 'Leke uygulaması düşünüyorsanız', metin: 'Leke uygulamalarına başlamadan önce lekenin tipi belirlenir ve güneş koruması düzene sokulur; koruma olmadan yapılan uygulamaların etkisi kısa sürebilir.' },
    { anahtar: 'ben_uyari', baslik: 'Değişen ben ve lekeler için beklemeyin', metin: 'Yeni çıkan, büyüyen, rengi ya da sınırı değişen, kanayan veya kaşınan ben ve lekeler estetik değil tıbbi bir değerlendirme gerektirir; bunun için bir dermatoloji uzmanına başvurun.' },
  ],
  ayarlar: {
    sonuc_etiket: 'Alışkanlık özetiniz',
    gizlilik: 'Yanıtlarınız kaydedilmedi ve bir yere gönderilmedi; sayfayı kapattığınızda silinir.',
  },
};

module.exports = {
  slug: 'gunes-aliskanligi-testi',
  tip: 'tibbi',
  js: 'arac.js',
  baslik: 'Güneş lekesi testi: alışkanlıklarınız lekeyi nasıl etkiler?',
  aciklama: 'Güneş lekesi eğiliminizi artıran alışkanlıkları sekiz soruda görün: koruyucu, öğle güneşi, solaryum, cam ve yanık. Puan yok; yanıtlar yalnız sizde.',
  odak: 'güneş lekesi',   /* Yoast odak anahtar kelimesi */

  icerik: (r, ik) => `
<!-- ═════ HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}cilt-sorunlari/cilt-tonu-ve-leke/" style="color:var(--sessiz);text-decoration:none">Cilt tonu ve leke</a> › <span>Güneş alışkanlığı testi</span></nav>
      <p class="g-etiket">Araç · Leke ve güneş</p>
      <h1><span class="g-isik">Güneş lekesi</span> eğiliminizi hangi alışkanlıklar artırıyor?</h1>
      <p class="g-hero__alt">Güneş lekesi çoğu zaman tek bir yazın değil, yılların birikiminin sonucudur. Sekiz kısa soruda güneş koruyucu, öğle güneşi, solaryum, cam arkasında geçen saatler ve yanık öykünüzü yanıtlayın; lekelenmeyi en çok etkileyebilecek alışkanlıklarınızı ve her biri için uygulanabilir bir öneriyi görün. Puan vermez, tanı koymaz; yanıtlar cihazınızdan çıkmaz.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="#arac">Teste başlayın ↓</a>
        <a class="dgm dgm--iki" href="${r}cilt-sorunlari/cilt-tonu-ve-leke/">Cilt tonu ve leke</a>
      </div>
      <div class="g-tikler"><span><i></i>Puan ve sıralama yok</span><span><i></i>Yanıtlar cihazınızda kalır</span><span><i></i>Yaklaşık bir dakika</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/sorun-cilt-tonu-ve-leke.webp" width="1400" height="788" alt="Elmacık bölgesinde açık kahverengi lekeler bulunan yüz cildinin yakın çekimi" loading="eager">
      <div class="g-isin"></div>
      <div class="g-hud"><b>Sekiz soru</b><div class="g-cizgi"></div><span>Sonunda öne çıkan alışkanlıklar ve pratik öneriler</span></div>
    </div>
  </div>
</section>

<!-- ═════ ARAÇ ═════ -->
<section class="bolum bolum--arac" id="arac">
  <div class="sar">
    <div class="arac-sahne" data-arac="gunes">
      <div data-arac-govde>
        <div class="arac-giris">
          <h2>Güneşle ilişkinizi sekiz soruda tarif edin</h2>
          <p>Doğru ya da yanlış cevap yok; gündelik hayatınızı düşünerek size en yakın seçeneği işaretleyin. Sonunda lekelenmeyi en çok etkileyebilecek alışkanlıklarınız, nedenleri ve küçük değişiklik önerileriyle sıralanır.</p>
          <ul class="arac-adimlar"><li>Koruyucu</li><li>Öğle güneşi</li><li>Bronzlaşma</li><li>Solaryum</li><li>Cam arkası</li><li>Yanık</li></ul>
          <button type="button" class="dgm dgm--gece" data-arac-basla>Başlayın</button>
        </div>
      </div>
      <nav class="arac-baglar" data-arac-bag aria-label="İlgili sayfalar">
        <a data-bag="iletisim" href="${r}iletisim/">Randevu talebi formu</a>
        <a data-bag="leke" href="${r}cilt-sorunlari/cilt-tonu-ve-leke/">Cilt tonu ve leke</a>
        <a data-bag="pico" href="${r}uygulamalar/pico-lazer-leke/">Pico lazer ile leke</a>
        <a data-bag="cilt" href="${r}cilt-tipi-testi/">Cilt eğilimi testi</a>
      </nav>
    </div>
    ${test('gunes', VERI)}
  </div>
</section>

<!-- ═════ NASIL OLUŞUR ═════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Arka plan</p>
      <h2>Güneş lekesi nasıl oluşur?</h2>
      <p class="giris">Derideki pigment hücreleri, ultraviyole ışığa karşı koruyucu bir renk maddesi üretir. Işık yıllar boyunca aynı bölgelere düştükçe bu üretim bazı noktalarda düzensizleşir ve kalıcı koyu alanlar ortaya çıkar.</p>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <div class="kart kart--duz"><h3>Birikimli bir süreç</h3><p>Bugün görülen lekeler çoğu zaman yıllar önceki güneş alışkanlıklarının izidir. Bu yüzden korumaya başlamak için hiçbir zaman geç değildir; yeni lekelerin oluşumu yavaşlar.</p></div>
      <div class="kart kart--duz"><h3>En açık bölgeler</h3><p>Elmacıklar, alın, burun sırtı, el sırtı ve dekolte, güneşi en çok ve en dik açıyla alan bölgelerdir. Lekeler de çoğunlukla buralarda belirginleşir.</p></div>
      <div class="kart kart--duz"><h3>Her leke aynı değildir</h3><p>Güneş lekesi, hormonlarla ilişkili renk değişikliği ve sivilce sonrası iz birbirine benzeyebilir. Hangi tür olduğu muayenede ayırt edilir; plan da buna göre kurulur.</p></div>
    </div>
  </div>
</section>

<!-- ═════ KORUYUCU ═════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Gündelik koruma</p>
      <h2>Koruyucu seçerken ve kullanırken</h2>
    </div>
    <div data-gr style="--d:70ms">
      <p>Ambalajında "geniş spektrum" ifadesi geçen ve koruma faktörü en az 30 olan bir ürün, gündelik kullanım için yaygın kabul gören başlangıç noktasıdır. Ürünün etkisi kadar kullanılan miktar da önemlidir: yüz ve boyun için ince bir tabaka çoğu zaman yeterli korumayı sağlamaz.</p>
      <p>Koruyucu, şapka, gölge ve giysiyle birlikte düşünüldüğünde anlam kazanır. Uzun süre dışarıda kalınan günlerde birkaç saatte bir yenilemek, terleme ya da yüzme sonrasında yeniden sürmek gerekir.</p>
      <p>Leke uygulaması planlanıyorsa koruma düzeni daha da önemli hâle gelir; uygulama öncesinde ve sonrasında bölgenin güneşten korunması, sonucun kalıcılığını doğrudan etkiler.</p>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Güneş ve leke hakkında merak edilenler</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLowerCase()} · güneş ve leke · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Kışın da güneş koruyucu kullanmak gerekir mi?</button>
        <div class="g-syanit" data-gs-yanit="0">Leke eğiliminiz varsa evet. Kışın yanığa yol açan ışınlar azalır, ama lekelenmede rol oynayan uzun dalga boylu ışınlar yıl boyunca ve bulutlu havada da cilde ulaşır.</div>
        <button class="g-ssoru" data-gs="1"><i>›</i>Makyaj ürünümde koruma faktörü var, yeterli mi?</button>
        <div class="g-syanit" data-gs-yanit="1">Çoğu zaman tek başına yeterli olmaz; makyaj ürünleri, etiketteki korumayı sağlayacak kalınlıkta sürülmez. Altına ayrı bir koruyucu sürmek daha güvenilir bir düzendir.</div>
        <button class="g-ssoru" data-gs="2"><i>›</i>Leke uygulaması sırasında güneşe çıkabilir miyim?</button>
        <div class="g-syanit" data-gs-yanit="2">Gündelik hayatınıza devam edebilirsiniz, ancak uygulama döneminde bölgenin güneşten özenle korunması gerekir. Ne kadar süre ve nasıl korunacağınız uygulamanın türüne göre muayenede anlatılır.</div>
        <button class="g-ssoru" data-gs="3"><i>›</i>Yanıtlarım bir yere kaydediliyor mu?</button>
        <div class="g-syanit" data-gs-yanit="3">Hayır. Test tamamen tarayıcınızda çalışır; yanıtlar sunucuya gönderilmez, çerez olarak yazılmaz ve sayfayı kapattığınızda silinir.</div>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
`,
};
