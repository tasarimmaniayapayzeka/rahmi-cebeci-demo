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
    <p class="g-etiket">Mevzuat notu</p>
    <h1>Çerez Politikası</h1>
    <p class="g-bhero__alt">Sitemizi gezerken tarayıcınıza hiçbir sayfamız çerez bırakmaz; localStorage gibi yerel depolama alanlarına da kayıt yazılmaz. Sayfalarda reklam pikseli, sosyal medya takip kodu, tıklama ısı haritası, ekran kaydı yapan yazılım ya da dışarıdan bağlanmış bir istatistik aracı bulunmadığı için sizden çerez onayı istenmez. Dış kaynaklı yalnızca iki hizmet vardır: Google’ın sağladığı konum haritası ve WhatsApp bağlantısı.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>İzleme çerezi ve yerel depolama yok</span>
      <span><i></i>Üçüncü taraf: harita ve WhatsApp</span>
    </div>
  </div>
</section>

<!-- ═════════ BELGE GÖVDESİ ═════════ -->
<section class="g-belge">
  <div class="sar">

    <aside class="g-bmenu" aria-label="Sayfa içi başlıklar">
      <b>Bu sayfada</b>
      <a href="#cerez-nedir">Çerez ne demek?</a>
      <a href="#ne-yok">Kullanmadığımız teknolojiler</a>
      <a href="#zorunlu-unsurlar">Sitede ne var?</a>
      <a href="#ucuncu-taraf">Harita ve WhatsApp</a>
      <a href="#erisim-kayitlari">Sunucu kayıtları</a>
      <a href="#cerez-yonetimi">Tarayıcı ayarları</a>
      <a href="#ilgili-basliklar">Diğer yasal metinler</a>
    </aside>

    <div class="g-bgov">

      <div class="g-bblk" id="cerez-nedir">
        <h2>Çerez ne demek?</h2>
        <div class="yazi">
          <p>Ziyaret ettiğiniz bir site, tarayıcınız üzerinden cihazınıza küçük metin dosyaları kaydedebilir; bunlara çerez denir. Dosyanın kendisinde bir tehlike yoktur, önemli olan ne için kullanıldığıdır. Aynı yöntemle bir oturumun açık kalması da sağlanabilir, sizi farklı sitelerde takip ederek reklam profili oluşturmak da.</p>
          <p>Çerezler çoğunlukla üç başlıkta sınıflandırılır. Sitenin işleyişi için gereken <b>zorunlu çerezler</b> kapatılamaz. Seçtiğiniz ayarları aklında tutan ya da sayfanın hızını ölçen türler <b>işlevsel ve performans çerezleri</b> adını alır. Gezinme alışkanlıklarınızı kaydeden ve genellikle dış şirketlere ait olanlar ise <b>pazarlama ve hedefleme çerezleridir</b>. Tarayıcının localStorage ve sessionStorage alanları da cihazda iz bırakmanın bir diğer yoludur. Sayfalarımız bunların hiçbirini kullanmaz; iletişim formuyla ilgili tek teknik ayrıksı durum aşağıda anlatılmıştır.</p>
        </div>
      </div>

      <div class="g-bblk" id="ne-yok">
        <h2>Kullanmadığımız teknolojiler</h2>
        <p class="giris">Aşağıda sayılanların hiçbiri sitede çalışmaz. Bunu bir eksik olarak değil, bilerek verilmiş bir karar olarak görüyoruz: sağlıkla ilgili bilgi sunan bir sitenin ziyaretçilerini izlemesini haklı kılacak bir neden bulmuyoruz.</p>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalkan}</span>
            <h3>Yeniden hedefleme ve reklam pikseli</h3>
            <p>Sayfalarda arama motorlarının ya da sosyal ağların reklam pikseli yoktur. Sitemize girmiş olmanız, başka yerlerde reklamla karşılaşmanıza neden olmaz.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.mercek}</span>
            <h3>Dış analitik araçlar</h3>
            <p>Ziyaretçi hareketlerini ölçen harici bir istatistik servisi siteye eklenmemiştir. Hangi sayfayı ne kadar süre okuduğunuz kaydedilmez.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.liste}</span>
            <h3>Sohbet penceresi ve sosyal ağ eklentisi</h3>
            <p>Sayfalarda canlı destek kutusu, gömülü video ya da beğen düğmesi bulunmaz. Yazı tipleri ve görseller de içinde olmak üzere bütün dosyalar sitenin kendi sunucusundan gelir; bunun dışında kalan tek öğe gömülü konum haritasıdır.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.damla}</span>
            <h3>Isı haritası ve ekran kaydı</h3>
            <p>İmlecin nerede gezindiğini, sayfanın nasıl kaydırıldığını ya da nerelere tıklandığını kaydeden bir yazılım kullanılmaz.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalp}</span>
            <h3>Kişisel profil çıkarma</h3>
            <p>Ziyaretçilerin ilgi alanlarına göre profil oluşturulmaz; kimse bir hedef kitleye yerleştirilmez, hiçbir tanıtım listesine alınmaz.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.yaprak}</span>
            <h3>Çerez uyarısı</h3>
            <p>Onay gerektiren bir çerez olmadığı için ekranın önüne gelen bir çerez uyarısıyla da karşılaşmazsınız.</p>
          </div>
        </div>
      </div>

      <div class="g-bblk" id="zorunlu-unsurlar">
        <h2>Peki sitede ne var?</h2>
        <div class="yazi">
          <p>Sitenin bütün sayfaları statiktir. Açılır menü gibi özellikler, tarayıcınızın çalıştırdığı kısa betiklerle sağlanır; bu betikler cihazınıza çerez ya da benzeri bir kayıt bırakmaz.</p>
          <p>Hazırlık listesi, cilt eğilimi testi, bölge rehberi ve uygulama karşılaştırma araçları da aynı mantıkla çalışır: yanıtlarınız yalnızca o an açık olan sekmenin belleğinde durur, sunucuya iletilmez, bize ulaşmaz ve sekmeyi kapattığınız anda kaybolur. Yanıtlar sonraki ziyaretinize kadar yerel depolamada saklanmaz; böylece aynı cihazı kullanan başka biri de yanıtlarınızı göremez.</p>
          <p>Teknik zorunluluk taşıyan tek ayrıksı durum iletişim formudur. Form gönderildiğinde sunucudaki form alıcısı, kısa sürede tekrarlanan kötü niyetli gönderimleri durdurabilmek için geçici bir oturum çerezi üretir. Bu çerezin tek görevi gönderimin güvenliğini sınamaktır; kimliğinizi belirlemez, tarayıcı kapanınca geçersiz olur ve tanıtım amacıyla hiçbir yerde kullanılmaz. Formu doldurmadığınız sürece böyle bir çerez oluşmaz.</p>
        </div>
        <div class="kutu kutu--bilgi">
          <b>Zorunlu unsurlar için onay istenmez</b>
          <p>Hizmetin sunulması için kaçınılmaz olan teknik unsurlar, mevzuatta açık rıza koşulunun dışında bırakılmıştır. Sitede yer alan tek çerez bu türdendir ve yalnızca form gönderiminde oluşur; bu yüzden ayrıca onayınız alınmaz.</p>
        </div>
      </div>

      <div class="g-bblk" id="ucuncu-taraf">
        <h2>Üçüncü taraf hizmetler: harita ve WhatsApp</h2>
        <div class="yazi">
          <p>Sitemiz izleme amacıyla çerez yazmasa da iki yerde dış şirketlerin hizmetlerine bağlantı kurar. Bu hizmetler kendi altyapılarında çalışır ve kendi gizlilik kurallarına bağlıdır; hangi verileri işleyeceklerine ya da cihazınıza ne kaydedeceklerine biz karar vermeyiz.</p>
        </div>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.pin}</span>
            <h3>Gömülü Google haritası</h3>
            <p>Muayenehanenin yerini gösteren harita, Google’ın sunduğu gömülü bir içeriktir. Haritanın yer aldığı sayfayı açtığınızda tarayıcınız doğrudan Google’ın sunucularıyla iletişim kurar; Google bu aşamada IP adresi gibi teknik bilgileri işleyebilir ve kendi çerezlerini bırakabilir. Haritayı kullanmanız gerekmez; sayfada yazılı açık adres, muayenehaneye ulaşmanız için yeterlidir.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.wa}</span>
            <h3>WhatsApp bağlantısı</h3>
            <p>WhatsApp bağlantısı ancak üzerine tıkladığınızda devreye girer ve sizi WhatsApp uygulamasına ya da web sürümüne götürür. Oradan sonraki yazışmalar WhatsApp’ın kendi kullanım ve gizlilik koşullarına bağlıdır. Bu hat randevu almanız ve muayenehaneyi bulmanız için açıktır; yazışma yoluyla tıbbi değerlendirme yapılmaz.</p>
          </div>
        </div>
      </div>

      <div class="g-bblk" id="erisim-kayitlari">
        <h2>Çerez olmayan ama kaydedilen bilgi: sunucu kayıtları</h2>
        <div class="yazi">
          <p>Bu konuyu ayrıca anlatmak istiyoruz, çünkü “hiçbir veri işlenmiyor” dersek gerçeği eksik söylemiş oluruz. Çerez olmasa bile bir siteye bağlandığınız anda, bu bağlantıya ait teknik bir kayıt sunucuda kendiliğinden oluşur. Kayıtta IP adresiniz, bağlantının tarihi ve saati, görüntülediğiniz sayfanın adresi, sunucunun döndürdüğü durum kodu ve tarayıcınıza ilişkin bilgiler bulunur.</p>
          <p>Bu kayıtlar sizin tarayıcınızda değil, sitenin barındırıldığı sunucuda tutulur; tutulup tutulmayacakları da bizim seçimimize bırakılmamıştır. Amaçları sistem güvenliğini sağlamak, arızaları ve saldırıları saptamak ve yasal yükümlülükleri yerine getirmektir. Reklam ya da istatistik için kullanılmaz, başka kişi ve kurumlara aktarılmaz; mevzuatın belirlediği süre dolunca silinir. Ayrıntıları aydınlatma metninde bulabilirsiniz.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}yasal/kvkk-aydinlatma-metni/">KVKK aydınlatma metni ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="cerez-yonetimi">
        <h2>Çerezleri tarayıcınızdan nasıl yönetirsiniz?</h2>
        <div class="yazi">
          <p>Sitemizde kapatmanızı gerektirecek bir izleme çerezi bulunmasa da her tarayıcı çerezleri denetlemenize olanak verir. Ayarlardaki gizlilik ya da site izinleri kısmından mevcut çerezleri temizleyebilir, yenilerinin kaydedilmesini durdurabilir ya da dış kaynaklı çerezleri toptan kapatabilirsiniz.</p>
          <p>Çerezleri tamamen kapatsanız da sayfalar sorunsuz açılır. Dış kaynaklı çerezleri engellediğinizde gömülü harita kısıtlı çalışabilir; bütün çerezleri reddeden sıkı ayarlarda ise formun güvenlik kontrolü tamamlanmayabilir. Böyle bir durumda açık adresten yararlanabilir, randevu için muayenehaneyi arayabilirsiniz.</p>
        </div>
        <div class="sss">
          <details>
            <summary>Sitenize girdiğimi siz görebiliyor musunuz?</summary>
            <div class="sss__cvp"><p>Adınızla birlikte, hayır. Sunucu kayıtlarında yalnızca IP adresinden ibaret teknik bir iz bulunur; bu bilgi herhangi bir kişiyle ilişkilendirilmez, bir ziyaretçi profiline dönüştürülmez ve kayıtlar tek tek okunmaz. Bu kayıtlar ancak bir güvenlik sorunu ya da arıza araştırılırken açılır.</p></div>
          </details>
          <details>
            <summary>Haritayı ya da WhatsApp bağlantısını kullanırsam ne olur?</summary>
            <div class="sss__cvp"><p>Haritanın yer aldığı sayfa açılınca tarayıcınız Google’a bağlanır ve Google kendi kuralları çerçevesinde teknik veri işleyebilir. WhatsApp bağlantısına tıkladığınızda ise yazışma <b>WhatsApp’ın koşullarına</b> bağlı hâle gelir. Her iki durumda da veriyi o şirket işlediği için sağlığınıza dair ayrıntıları yazışarak değil, muayene sırasında anlatmanızı rica ederiz.</p></div>
          </details>
          <details>
            <summary>Siteye ileride ölçüm ya da reklam aracı eklenirse?</summary>
            <div class="sss__cvp"><p>Öyle bir karar alınırsa önce bu sayfa yenilenir; eklenen aracın adı ve ne için kullanılacağı burada açıkça belirtilir, mevzuatın onay aradığı durumlarda da izniniz istenir. Geçerli sürümü, sayfanın üstündeki güncelleme tarihine bakarak anlayabilirsiniz.</p></div>
          </details>
        </div>
      </div>

      <div class="g-bblk" id="ilgili-basliklar">
        <h2>Diğer yasal metinler</h2>
        <div class="izgara izgara--2">
          <a class="kart" href="${r}yasal/kvkk-aydinlatma-metni/">
            <h3>KVKK aydınlatma metni</h3>
            <p>Hangi verilerin, hangi hukuki gerekçeyle, ne kadar süre tutulduğu ve bu konudaki haklarınız.</p>
            <span class="kart__ok">Metni açın ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/acik-riza/">
            <h3>Açık rıza metni</h3>
            <p>İletişim formuna verdiğiniz rızanın sınırları ve onu nasıl geri çekebileceğiniz.</p>
            <span class="kart__ok">Metni açın ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/kullanim-kosullari/">
            <h3>Kullanım koşulları</h3>
            <p>Siteden yararlanırken uyulan kurallar ve sorumluluğun sınırları.</p>
            <span class="kart__ok">Metni açın ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/icerik-ve-gorsel-yayin-ilkelerimiz/">
            <h3>Yayın ve görsel kullanım esaslarımız</h3>
            <p>Sitede neye yer verdiğimiz, neyi bilinçli olarak dışarıda bıraktığımız.</p>
            <span class="kart__ok">Sayfaya git ${ik.ok}</span>
          </a>
        </div>
      </div>

      <div class="g-bblk">
        <h2>Gizlilikle ilgili sorunuz mu var?</h2>
        <p class="giris">Kişisel verilerinizin ve gizliliğinizin nasıl korunduğuna dair sorularınızı iletişim sayfasından bize yazabilirsiniz.</p>
        <div class="dgm-sira">
          <a class="dgm dgm--bir" href="${r}iletisim/">İletişim</a>
        </div>
      </div>

    </div>
  </div>
</section>
`,
};
