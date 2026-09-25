const S = require('../site');

module.exports = {
  slug: 'mevzuat',
  tip: 'bilgi',
  baslik: 'Uyduğumuz Mevzuat — Sitede Neyi Neden Yayımlamıyoruz',
  aciklama: 'Sitenin dayandığı yönetmelikler ve kanun. Ücret, hasta yorumu, öncesi–sonrası görseli ve abartılı ifadelere neden yer vermediğimizi açıklıyoruz.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <span>Mevzuat</span></nav>
      <p class="g-etiket">Mevzuat · İçerik sınırları</p>
      <h1>Uyduğumuz <span class="g-isik">mevzuat</span></h1>
      <p class="g-hero__alt">Sitedeki her sayfa, Türkiye’de sağlık hizmeti sunanların tanıtım ve bilgilendirme faaliyetlerine getirilen kurallar gözetilerek yazıldı. Bu sayfada hangi düzenlemeleri esas aldığımızı ve bunun içeriğe nasıl yansıdığını anlatıyoruz. Sitede bulamadığınız bazı bilgiler bir unutkanlık değil, bu kuralların sonucudur.</p>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/mevzuat-hero.webp" width="1400" height="788" alt="Masada düzenli belge yığını, dolma kalem ve masa lambası" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- ═════════ LİSTE ═════════ -->
<section class="bolum bolum--sik">
  <div class="sar">
    <div class="bolum-bas">
      <p class="etiket">Dayanak</p>
      <h2>Site hazırlanırken esas alınan düzenlemeler</h2>
      <p class="giris">Sayfaların içeriği, dili ve görsel tercihleri aşağıdaki dört düzenlemeye göre belirlendi. Her düzenleme için madde numarası vermek yerine, kolayca bulabilmeniz için adını ve Resmî Gazete’de yayımlandığı tarih ile sayıyı yazdık.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kart">
        <span class="kart__ikon">${ik.kalkan}</span>
        <span class="rozet">12.11.2025 tarihli, 33075 sayılı RG</span>
        <h3 style="margin-top:8px">Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik</h3>
        <p>Temel düzenleme budur: sağlık kuruluşları ile sağlık meslek mensupları, internet sitesi dâhil hangi mecrada olursa olsun, tanıtım ve bilgilendirme içeriklerini bu yönetmeliğin sınırları içinde hazırlar. Önceki tanıtım yönetmeliğinin yerini almıştır. Bu sitedeki ifade tercihlerinin çoğu doğrudan bu metne dayanır.</p>
      </div>
      <div class="kart">
        <span class="kart__ikon">${ik.liste}</span>
        <span class="rozet">19.04.2025 tarihli, 32875 sayılı RG</span>
        <h3 style="margin-top:8px">Ayakta Teşhis ve Tedavi Yapılan Özel Sağlık Kuruluşları Hakkında Yönetmelik</h3>
        <p>Ayakta hizmet veren özel sağlık kuruluşlarının (muayenehaneler de bunlara dâhildir) nasıl açılacağını, nasıl işleyeceğini, hangi fiziki ve personel koşullarını taşıyacağını ve hangi işlemleri yapabileceğini belirler. Muayenehanede yapılan uygulamaların sınırı bu çerçevenin içinde kalır.</p>
      </div>
      <div class="kart">
        <span class="kart__ikon">${ik.mercek}</span>
        <span class="rozet">Son değişiklik: 01.07.2026 tarihli, 33297 sayılı RG</span>
        <h3 style="margin-top:8px">Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği</h3>
        <p>Tüketiciye yönelik her reklamın doğru, dürüst ve yanıltmayan bir dille hazırlanmasını zorunlu tutar. Sağlıkla ilgili metinler, Bakanlık düzenlemelerinin yanında tüketiciyi koruyan bu kurallara da tabidir. Gizli reklam, abartılı vaat ve kanıtlanamayan üstünlük iddiası bu yönetmelik kapsamında ele alınır.</p>
      </div>
      <div class="kart">
        <span class="kart__ikon">${ik.kalkan}</span>
        <span class="rozet">6698 sayılı Kanun · 07.04.2016 tarihli, 29677 sayılı RG</span>
        <h3 style="margin-top:8px">Kişisel Verilerin Korunması Kanunu</h3>
        <p>Bir bilginin hangi şartlarla işlenebileceğinin çerçevesini çizer. Sağlık bilgisi özel nitelikli veri sayılır ve daha sıkı korunur. İletişim formunun yalnız gerekli en az bilgiyi istemesi, şikâyet ayrıntısı sormaması bu kanunun sonucudur.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ SONUÇLARI ═════════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="yazi">
      <h2>Bu kurallar sitenin içeriğini nasıl şekillendiriyor?</h2>
      <p>Sağlık alanındaki tanıtım, başka sektörlerden farklı bir anlayışla düzenlenir. Çıkış noktası şudur: hizmeti alacak kişi, neye ihtiyacı olduğunu çoğu zaman muayeneden önce bilemez.</p>
<p>Bir restoranı menüsüne ve yorumlarına bakarak seçebilirsiniz; ancak cildinize hangi uygulamanın uygun olduğunu ya da o uygulamanın sizde nasıl bir sonuç vereceğini muayene olmadan kestirmeniz mümkün değildir. Mevzuat bu bilgi farkını gözeterek talep yaratmaya dönük içeriklere sınır koyar.</p>

      <h3>Ücret bilgisi neden yayımlanmıyor?</h3>
      <p>Bir sağlık hizmetinin ücreti, öykünüze, muayene bulgularına ve üzerinde anlaşılan plana göre şekillenir. İnternette bir liste yayımlamak bu sırayı tersine çevirir: kişi neye ihtiyacı olduğundan önce, hangi işlemin ne tuttuğunu düşünmeye başlar.</p>
<p>Yönetmelik de sağlık hizmetlerinde ücret, indirim, taksit ya da süreli teklif üzerinden yapılan tanıtıma izin vermez. Ücreti bu nedenle ancak muayenede, planınız netleştiğinde öğrenirsiniz.</p>

      <h3>Başka hastaların deneyimlerini neden paylaşmıyoruz?</h3>
      <p>Hasta değerlendirmelerinin tanıtım amacıyla yayımlanması mevzuata aykırıdır. Ayrıca güvenilir bir ölçü de değildir: yayımlanan yorumlar seçilerek yayımlanır ve yayımlanmayanları kimse göremez.</p>
<p>Başka birinin memnun kalması, sizin şikâyetinizin nedeni ya da cildinizin yapısı hakkında bir şey söylemez. Biz bunun yerine hekimin kim olduğunu, eğitimini, hangi yetkiyle uygulama yaptığını ve değerlendirmeyi nasıl kurduğunu açıkça yazmayı seçtik.</p>

      <h3>Öncesi–sonrası görseli neden yayımlanmıyor?</h3>
      <p>Uygulamanın öncesini ve sonrasını yan yana gösteren görsellerin tanıtımda kullanılması kabul edilmez. Işık, açı, duruş, makyaj ve fotoğraf düzenlemesiyle kolayca değişebilen bu görseller gerçekçi bir beklenti kurmaz.</p>
<p>Üstelik sizde neyin değişeceğini göstermezler; girişimsel her uygulamada sonuç kişiden kişiye farklılık gösterebilir. Sitedeki görseller yalnızca ortamı tanıtmak ve konuyu anlatmak içindir; yapay zekâ ile üretilenler ayrıca işaretlenir.</p>

      <h3>Cihaz ve ürün adlarını nasıl kullanıyoruz?</h3>
      <p>Uygulama sayfalarında yöntemin genel adı kullanılır; örneğin “pikosaniye lazer” ya da “hyalüronik asit dolgu” denir. Muayenehanedeki cihazların model adları yalnızca klinik sayfasındaki cihaz listesinde ve ilgili uygulama sayfasındaki tek bir bilgi satırında, tanıtım unsuru olarak değil envanter bilgisi olarak geçer.</p>
<p>Enjeksiyonda kullanılan ürünlerin markaları sitede yer almaz. Size hangi ürünün, hangi gerekçeyle seçileceği muayenede konuşulur ve onam belgesine yazılır.</p>

      <h3>Abartılı ifadelerden neden kaçınıyoruz?</h3>
      <p>Üstünlük iddiası, sonuç vaadi, risk yokmuş izlenimi veren sözler ve doğrulanamayan başarı sayıları hem sağlık hem reklam mevzuatı bakımından sakıncalıdır. Metinlerdeki “hedeflenir”, “amaçlanır”, “değerlendirilir”, “hekim tarafından planlanır” gibi temkinli kalıpların nedeni budur. Her uygulama sayfasında olası istenmeyen etkiler, uygulamanın ertelendiği durumlar ve diğer seçenekler de aynı yerde anlatılır.</p>

      <h3>Başka sitelere neden bağlantı verilmiyor?</h3>
      <p>Başka bir siteye verilen bağlantı, içeriğinden sorumlu olmadığımız bir sayfayı öneriyormuşuz izlenimi yaratabilir. Bu nedenle bilgilendirme sayfalarında dış bağlantı yer almaz. Site dışına açılan adresler yalnızca bize ulaşmanızı kolaylaştıran kanallardır: WhatsApp hattı ve haritadaki yol tarifi gibi. Kaynaklarla ilgili sorularınızı muayenede sorabilirsiniz.</p>

      <h3>Sayfaların sonundaki hekim adı ve tarih ne işe yarar?</h3>
      <p>Tıbbi bilgi içeren her sayfanın sonunda içeriği hazırlayan hekimin adı ve uzmanlığı, metnin en son gözden geçirildiği tarih ve editöre yazabileceğiniz e-posta adresi bulunur. Bu sayede bir metnin güncel olup olmadığını ve hangi hekimin sorumluluğunda hazırlandığını kendiniz kontrol edebilirsiniz. Sayfanın alt kısmında muayenehaneye ait künye bilgileri de yer alır.</p>

      <h3>Denetim iki ayrı kurumda yapılabilir</h3>
      <p>Sağlıkla ilgili tanıtım içerikleri bir yandan il sağlık müdürlükleri ile Sağlık Bakanlığının, öte yandan Reklam Kurulu’nun incelemesine konu olabilir. Aynı metin iki farklı çerçeveden ayrı ayrı değerlendirilebilir. Sitedeki içerik bu nedenle tek bir düzenlemeye göre değil, yukarıdaki başlıkların tümü birlikte gözetilerek yazılmıştır.</p>
    </div>

    <div class="kutu kutu--bilgi" style="margin-top:28px">
      <b>Bir yanlışlık fark ederseniz</b>
      <p>Sitede mevzuata ya da tıbbi doğruluğa uymadığını düşündüğünüz bir ifade görürseniz <a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a> adresinden site editörüne yazabilirsiniz. Her bildirim incelenir; gerekirse ilgili sayfa düzeltilir.</p>
    </div>
  </div>
</section>

<!-- ═════════ İLGİLİ BAŞLIKLAR ═════════ -->
<section class="bolum bolum--sik">
  <div class="sar">
    <div class="bolum-bas">
      <p class="etiket">İlgili başlıklar</p>
      <h2>Konuyla bağlantılı metinler</h2>
    </div>
    <div class="izgara izgara--3">
      <a class="kart" href="${r}yasal/icerik-ve-gorsel-yayin-ilkelerimiz/">
        <h3>İçerik ve görsel yayın ilkelerimiz</h3>
        <p>Yazı ve görsel seçiminde uyguladığımız ölçütlerin tam listesi.</p>
        <span class="kart__ok">Metne git ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yasal/kvkk-aydinlatma-metni/">
        <h3>KVKK aydınlatma metni</h3>
        <p>Verilerinizin neden işlendiği, ne kadar tutulduğu ve bu konudaki başvuru yollarınız.</p>
        <span class="kart__ok">Metne git ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yasal/hasta-haklari/">
        <h3>Hasta hakları</h3>
        <p>Bilgilendirilme, rıza, gizlilik ve şikâyet yollarınızın bu muayenehanede nasıl işlediği.</p>
        <span class="kart__ok">Metne git ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">
        <h3>Neden bazı işlemleri yapmıyoruz</h3>
        <p>Muayenehanenin kapsamının nerede bittiği ve başka bir dala başvurmanızın önerildiği durumlar.</p>
        <span class="kart__ok">Sayfaya git ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}sikca-sorulan-sorular/">
        <h3>Sıkça sorulan sorular</h3>
        <p>Kapsam, uygulama süreci ve randevuyla ilgili en çok sorulanlara kısa yanıtlar.</p>
        <span class="kart__ok">Sorulara git ${ik.ok}</span>
      </a>
    </div>
  </div>
</section>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Aklınızda bir soru kaldıysa</h2>
    <p class="g-sonalt">Sitede yanıtı olmayan konuları muayene sırasında hekime danışabilirsiniz. Randevu için iletişim sayfasındaki kanalları kullanabilirsiniz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">İletişim bilgileri</a>
      <a class="dgm dgm--iki" href="${r}sikca-sorulan-sorular/">Sorulara göz atın</a>
    </div>
  </div>
</section>
`,
};
