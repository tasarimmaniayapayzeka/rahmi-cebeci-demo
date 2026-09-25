const S = require('../../site');

module.exports = {
  slug: 'yasal/cerez-politikasi',
  tip: 'bilgi',
  aciklama: 'Sitenin sayfaları çerez, yerel depolama, reklam pikseli ve analitik araç kullanmaz. Gömülü Google haritası ve WhatsApp bağlantısı üçüncü taraf olarak açıklanır.',
  baslik: 'Çerez Politikası — Sayfalarımız Çerez ve Yerel Depolama Kullanmaz',

  icerik: (r, ik) => `

<!-- ═════════ BELGE HERO ═════════ -->
<section class="g-bhero">
  <div class="sar">
    <p class="g-etiket">Yasal</p>
    <h1>Çerez Politikası</h1>
    <p class="g-bhero__alt">Bu internet sitesinin sayfaları tarayıcınıza çerez yazmaz; yerel depolama (localStorage) ya da benzeri bir yöntemle cihazınızda kayıt da bırakmaz. Reklam pikseli, sosyal ağ izleyicisi, ısı haritası, oturum kaydı veya üçüncü taraf analitik aracı kullanılmaz; bu yüzden karşınıza çerez onay penceresi de çıkmaz. Sitede yer verilen üçüncü taraf hizmetler yalnızca ikidir: Google tarafından sunulan konum haritası ve WhatsApp bağlantısı.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>Çerez ve yerel depolama yok</span>
      <span><i></i>Üçüncü taraf: harita ve WhatsApp</span>
    </div>
  </div>
</section>

<!-- ═════════ BELGE GÖVDESİ ═════════ -->
<section class="g-belge">
  <div class="sar">

    <aside class="g-bmenu" aria-label="Sayfa içi başlıklar">
      <b>Bu sayfada</b>
      <a href="#cerez-nedir">Çerez nedir?</a>
      <a href="#ne-yok">Bu sitede ne yok?</a>
      <a href="#zorunlu-unsurlar">Sitede ne var?</a>
      <a href="#ucuncu-taraf">Harita ve WhatsApp</a>
      <a href="#erisim-kayitlari">Erişim kayıtları</a>
      <a href="#cerez-yonetimi">Çerez yönetimi</a>
      <a href="#ilgili-basliklar">İlgili başlıklar</a>
    </aside>

    <div class="g-bgov">

      <div class="g-bblk" id="cerez-nedir">
        <h2>Çerez nedir?</h2>
        <div class="yazi">
          <p>Çerez, bir internet sitesinin tarayıcınız aracılığıyla cihazınıza bıraktığı küçük bir metin dosyasıdır. Çerezin kendisi zararlı değildir; belirleyici olan hangi amaçla kullanıldığıdır. Aynı teknik bir oturumu açık tutmak için de, sizi siteden siteye izleyip reklam profili çıkarmak için de kullanılabilir.</p>
          <p>Çerezler genellikle üç grupta ele alınır. <b>Zorunlu çerezler</b> sitenin çalışabilmesi için gerekir ve kapatılamaz. <b>İşlevsel ve performans çerezleri</b> tercihlerinizi hatırlar ya da sayfa performansını ölçer. <b>Pazarlama ve hedefleme çerezleri</b> ise davranışınızı kaydeder ve çoğunlukla üçüncü taraf şirketlere aittir. Tarayıcıdaki yerel depolama (localStorage, sessionStorage) da cihaza veri bırakmanın bir başka yoludur. Bu sitenin sayfaları ne çerez yazar ne de yerel depolamayı kullanır; iletişim formuna ilişkin tek teknik istisna aşağıda açıklanmıştır.</p>
        </div>
      </div>

      <div class="g-bblk" id="ne-yok">
        <h2>Bu sitede ne yok?</h2>
        <p class="giris">Aşağıdaki teknolojilerin hiçbiri sitede yer almaz. Bu bir eksiklik değil, bilinçli bir tasarım kararıdır: sağlık alanında hizmet veren bir internet sitesinin ziyaretçisini izlemesi için makul bir gerekçe görmüyoruz.</p>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalkan}</span>
            <h3>Reklam ve yeniden hedefleme pikseli</h3>
            <p>Arama motoru ya da sosyal ağ reklam pikseli bulunmaz. Bu siteyi açtığınız için başka bir platformda karşınıza reklam çıkmaz.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.mercek}</span>
            <h3>Üçüncü taraf analitik</h3>
            <p>Siteye, ziyaretçi davranışını ölçen dışarıdan bir istatistik hizmeti bağlanmamıştır. Hangi sayfada ne kadar süre kaldığınız kayda geçmez.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.liste}</span>
            <h3>Sohbet penceresi ve sosyal ağ eklentisi</h3>
            <p>Canlı sohbet penceresi, video oynatıcı veya beğeni düğmesi yer almaz. Yazı tipleri ve görseller dâhil sayfa dosyaları sitenin kendi sunucusundan yüklenir; tek istisna gömülü konum haritasıdır.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.damla}</span>
            <h3>Oturum kaydı ve ısı haritası</h3>
            <p>Fare hareketlerinizi, sayfayı kaydırma biçiminizi ya da tıklamalarınızı kaydeden bir yazılım çalışmaz.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalp}</span>
            <h3>Profilleme</h3>
            <p>Ziyaretçiler için ilgi alanı profili çıkarılmaz; kimse bir segmente ayrılmaz ya da pazarlama listesine eklenmez.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.yaprak}</span>
            <h3>Onay penceresi</h3>
            <p>Sayfalar onaya tabi bir çerez kullanmadığından, ekranı kaplayan bir çerez bildirimi de gösterilmez.</p>
          </div>
        </div>
      </div>

      <div class="g-bblk" id="zorunlu-unsurlar">
        <h2>Peki sitede ne var?</h2>
        <div class="yazi">
          <p>Site tamamen statik sayfalardan oluşur. Menünün açılıp kapanması gibi işlevleri tarayıcınızda çalışan küçük betikler sağlar; bu betikler cihazınıza çerez ya da başka bir kayıt yazmaz.</p>
          <p>Hazırlık listesi, cilt tipi testi, bölge pusulası ve uygulama karşılaştırma sayfaları da aynı ilkeyle çalışır: verdiğiniz yanıtlar yalnızca açık olan sayfanın belleğinde tutulur, sunucuya gönderilmez, tarafımıza ulaşmaz ve sayfayı kapattığınızda silinir. Yanıtları bir sonraki ziyaretinize saklamak için yerel depolama kullanılmaz; bu, cihazınızı paylaştığınız bir başkasının yanıtlarınızı görmesini de önler.</p>
          <p>Teknik açıdan zorunlu tek istisna iletişim formudur. Formu gönderdiğinizde, sunucudaki form alıcısı art arda yapılan ve kötüye kullanım amacı taşıyan gönderimleri engellemek için kısa ömürlü bir oturum çerezi oluşturur. Bu çerez yalnızca gönderimin güvenliğini denetler; sizi tanımlamaz, tarayıcınızı kapattığınızda geçerliliğini yitirir ve pazarlama amacıyla kullanılmaz. Formu kullanmadığınız sürece bu çerez hiç oluşmaz.</p>
        </div>
        <div class="kutu kutu--bilgi">
          <b>Zorunlu unsurlar için onay istenmez</b>
          <p>Mevzuat, hizmetin sunulabilmesi için zorunlu olan teknik unsurları açık rıza şartının dışında tutar. Sitede kullanılan tek çerez bu gruptadır ve yalnızca form gönderildiğinde oluşur; bu nedenle sizden ayrıca onay istenmez.</p>
        </div>
      </div>

      <div class="g-bblk" id="ucuncu-taraf">
        <h2>Üçüncü taraf hizmetler: harita ve WhatsApp</h2>
        <div class="yazi">
          <p>Sitenin kendisi izleme amaçlı hiçbir çerez yazmasa da iki noktada başka şirketlerin hizmetlerine bağlanır. Bu hizmetler kendi sunucularından çalışır ve kendi gizlilik politikalarına tabidir; hangi verileri işlediklerini ya da cihazınıza ne yazdıklarını biz belirlemeyiz.</p>
        </div>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.pin}</span>
            <h3>Gömülü Google haritası</h3>
            <p>Muayenehanenin konumunu gösteren harita, Google tarafından sunulan gömülü bir içeriktir. Haritanın bulunduğu sayfa açıldığında tarayıcınız doğrudan Google sunucularına bağlanır; Google bu sırada IP adresi gibi teknik verileri işleyebilir ve kendi çerezlerini yerleştirebilir. Haritayı kullanmak zorunda değilsiniz; sayfadaki açık adres bilgisi muayenehaneyi bulmanız için yeterlidir.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.wa}</span>
            <h3>WhatsApp bağlantısı</h3>
            <p>WhatsApp bağlantısı yalnızca siz tıkladığınızda çalışır ve sizi WhatsApp uygulamasına ya da web sayfasına yönlendirir. Bu noktadan sonraki yazışma WhatsApp’ın kendi koşullarına ve gizlilik politikasına tabidir. WhatsApp hattı randevu ve yol tarifi içindir; mesajla tıbbi değerlendirme yapılmaz.</p>
          </div>
        </div>
      </div>

      <div class="g-bblk" id="erisim-kayitlari">
        <h2>Çerez değil ama kayda geçen bilgi: sunucu erişim kayıtları</h2>
        <div class="yazi">
          <p>Bu başlığı açıkça yazmayı gerekli buluyoruz, çünkü “hiçbir veri işlenmiyor” demek doğru olmaz. Çerez kullanılmasa da bir internet sitesine bağlandığınız anda sunucu tarafında teknik bir erişim kaydı oluşur. Bu kayıt; IP adresinizi, erişim tarihi ve saatini, açtığınız sayfanın adresini, sunucunun yanıt kodunu ve tarayıcı bilgisini içerir.</p>
          <p>Erişim kayıtları tarayıcınıza yazılan bir dosya değildir; barındırma sunucusunda oluşur ve oluşup oluşmaması bizim tercihimize bağlı değildir. Sistem güvenliği, arıza ve saldırı tespiti ile mevzuattan doğan yükümlülükler için tutulur. Reklam ya da ölçümleme amacıyla kullanılmaz, üçüncü taraflarla paylaşılmaz ve mevzuatta öngörülen sürenin sonunda silinir. Ayrıntılar aydınlatma metninde yer alır.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}yasal/kvkk-aydinlatma-metni/">KVKK aydınlatma metni ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="cerez-yonetimi">
        <h2>Tarayıcınızda çerezleri nasıl yönetebilirsiniz?</h2>
        <div class="yazi">
          <p>Bu sitede engellemeniz gereken bir izleme çerezi olmasa da bütün tarayıcılar çerez yönetimine imkân tanır. Ayarlar menüsündeki gizlilik ya da site izinleri bölümünden kayıtlı çerezleri silebilir, yeni çerez yazılmasını engelleyebilir veya üçüncü taraf çerezlerini tamamen kapatabilirsiniz.</p>
          <p>Çerezleri tümüyle engellemeniz sayfaların görüntülenmesini etkilemez. Üçüncü taraf çerezlerini kapattığınızda gömülü harita sınırlı çalışabilir; çerezleri bütünüyle engellediğiniz katı ayarlarda ise form gönderiminin güvenlik denetimi tamamlanamayabilir. Bu durumlarda adres bilgisini kullanabilir, randevu talebinizi telefonla iletebilirsiniz.</p>
        </div>
        <div class="sss">
          <details>
            <summary>Bu sayfayı ziyaret ettiğimi biliyor musunuz?</summary>
            <div class="sss__cvp"><p>Kişi olarak hayır. Sunucu erişim kayıtlarında IP adresi düzeyinde teknik bir iz kalır; bu iz bir isimle eşleştirilmez, bir ziyaretçi profiline bağlanmaz ve tarafımızca tek tek incelenmez. Bu kayıtlara yalnızca güvenlik ya da arıza incelemesi gerektiğinde bakılır.</p></div>
          </details>
          <details>
            <summary>Haritayı ya da WhatsApp bağlantısını kullanırsam ne olur?</summary>
            <div class="sss__cvp"><p>Haritanın bulunduğu sayfa açıldığında tarayıcınız Google sunucularına bağlanır ve Google, kendi politikası doğrultusunda teknik veri işleyebilir. WhatsApp bağlantısına tıklarsanız yazışma <b>WhatsApp’ın koşullarına</b> tabi olur. Her iki hizmette de verileri ilgili şirket işler; bu nedenle sağlık bilgilerinizi mesajla değil, muayenede paylaşmanızı öneririz.</p></div>
          </details>
          <details>
            <summary>İleride analitik ya da reklam aracı eklenirse ne olur?</summary>
            <div class="sss__cvp"><p>Böyle bir değişiklik olursa bu sayfa güncellenir; eklenen araç ve kullanım amacı burada açıkça yazılır ve mevzuatın aradığı durumlarda onayınız alınır. Hangi sürümün geçerli olduğunu sayfadaki güncelleme tarihinden görebilirsiniz.</p></div>
          </details>
        </div>
      </div>

      <div class="g-bblk" id="ilgili-basliklar">
        <h2>Bunları da okuyabilirsiniz</h2>
        <div class="izgara izgara--2">
          <a class="kart" href="${r}yasal/kvkk-aydinlatma-metni/">
            <h3>KVKK aydınlatma metni</h3>
            <p>İşlenen veri türleri, hukuki sebepler, saklama süreleri ve haklarınız.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/acik-riza/">
            <h3>Açık rıza metni</h3>
            <p>İletişim formuyla sınırlı rızanın neyi kapsadığı ve nasıl geri alınacağı.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/kullanim-kosullari/">
            <h3>Kullanım koşulları</h3>
            <p>Siteyi kullanırken geçerli kurallar ve sorumluluğun kapsamı.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/icerik-ve-gorsel-yayin-ilkelerimiz/">
            <h3>İçerik ve görsel yayın ilkelerimiz</h3>
            <p>Hangi içerikleri yayımladığımız, hangilerine bilerek yer vermediğimiz.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
        </div>
      </div>

      <div class="g-bblk">
        <h2>Gizlilikle ilgili sorunuz mu var?</h2>
        <p class="giris">Gizlilik uygulamalarımıza ilişkin sorularınızı iletişim sayfası üzerinden bize ulaştırabilirsiniz.</p>
        <div class="dgm-sira">
          <a class="dgm dgm--bir" href="${r}iletisim/">İletişim</a>
        </div>
      </div>

    </div>
  </div>
</section>
`,
};
