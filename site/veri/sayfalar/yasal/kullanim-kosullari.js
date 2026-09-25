const S = require('../../site');

module.exports = {
  slug: 'yasal/kullanim-kosullari',
  tip: 'bilgi',
  baslik: 'Kullanım Koşulları — Bilgilendirme Amacı ve Sorumluluk Sınırı',
  aciklama: 'Sitedeki içeriğin genel bilgilendirme amacı, hekim–hasta ilişkisinin ne zaman başladığı, etkileşimli araçların niteliği, fikri haklar ve sorumluluğun sınırları.',

  icerik: (r, ik) => `

<!-- ═════════ BELGE HERO ═════════ -->
<section class="g-bhero">
  <div class="sar">
    <p class="g-etiket">Yasal</p>
    <h1>Kullanım Koşulları</h1>
    <p class="g-bhero__alt">Sitedeki yazılar, listeler ve etkileşimli araçlar genel bilgilendirme amacıyla hazırlanmıştır. Hiçbiri tanı koymaz, tedavi önermez ya da hekim muayenesinin yerini tutmaz. Siteyi okumanız, bize mesaj göndermeniz veya araçları kullanmanız aramızda hekim–hasta ilişkisi doğurmaz. Siteyi kullanmaya devam ederek aşağıdaki koşulları kabul etmiş olursunuz.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>Genel bilgilendirme amaçlıdır</span>
      <span><i></i>Hekim–hasta ilişkisi kurmaz</span>
    </div>
  </div>
</section>

<!-- ═════════ BELGE GÖVDESİ ═════════ -->
<section class="g-belge">
  <div class="sar">

    <aside class="g-bmenu" aria-label="Sayfa içi başlıklar">
      <b>Bu sayfada</b>
      <a href="#icerigin-niteligi">İçeriğin niteliği</a>
      <a href="#hekim-hasta-iliskisi">Hekim–hasta ilişkisi</a>
      <a href="#araclarin-kullanimi">Araçların kullanımı</a>
      <a href="#tanitim-mevzuati">Tanıtım mevzuatı</a>
      <a href="#fikri-haklar">Fikri haklar</a>
      <a href="#sorumlulugun-siniri">Sorumluluğun sınırı</a>
      <a href="#ilgili-basliklar">İlgili başlıklar</a>
    </aside>

    <div class="g-bgov">

      <div class="g-bblk" id="icerigin-niteligi">
        <h2>İçeriğin niteliği ve sınırları</h2>
        <div class="yazi">
          <p>Sayfalar, muayenehaneye başvuranların sıkça sorduğu konuları sade bir dille açıklamak ve randevudan önce neyle karşılaşacağınızı bilmenize yardımcı olmak için yazılmıştır. Metinler genel tıbbi çerçeveyi aktarır; kişisel bir durumun değerlendirmesi değildir.</p>
          <p>Tıpta her karar kişiye özgüdür. Aynı yakınmayla gelen iki kişide neden de, plan da, uygunluk da farklı olabilir. Sitede okuduğunuz bir bilgiye dayanarak kendi durumunuz hakkında sonuç çıkarmayın, ilacınızı değiştirmeyin ya da bırakmayın; bir uygulamanın size uygun olduğunu da varsaymayın. Her durum muayene edilerek ayrıca değerlendirilir.</p>
          <p>Sayfalarda geçen süre, seans sıklığı ve aşama bilgileri tipik örnekleri anlatır; aynı değerlerin sizin için geçerli olacağı anlamına gelmez. Sonuçlar kişiden kişiye değişebilir.</p>
        </div>
        <div class="kutu kutu--acil">
          <b>Acil bir durumda siteye değil acil servise başvurun</b>
          <p>Nefes almakta zorlanma, yüzde veya dilde aniden gelişen şişlik, yutkunma güçlüğü, yaygın döküntüyle birlikte baş dönmesi, göğüs ağrısı ya da bilinç bulanıklığı gibi belirtilerde bu sitedeki içeriklerle vakit kaybetmeyin. Bir uygulamadan sonra görmede ani değişiklik ya da uygulama bölgesinde hızla artan ağrı ve renk değişikliği fark ettiğinizde de aynı şekilde davranın. <b>112</b>’yi arayın veya size en yakın acil servise gidin.</p>
        </div>
      </div>

      <div class="g-bblk" id="hekim-hasta-iliskisi">
        <h2>Hekim–hasta ilişkisi ne zaman başlar?</h2>
        <p class="giris">Bu ayrımın açık olması iki taraf için de önemlidir.</p>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <h3>İlişki başlamaz</h3>
            <p>Sayfaları okumak, sık sorulan sorulara göz atmak, hazırlık listesini ya da cilt tipi testini doldurmak veya iletişim formuyla randevu talebi göndermek tek başına hekim–hasta ilişkisi kurmaz.</p>
          </div>
          <div class="kart kart--duz">
            <h3>İlişki başlar</h3>
            <p>İlişki, muayenehanede yüz yüze muayenenin yapılmasıyla kurulur. Öykünüz alınıp muayene edildiğinizde ve kaydınız açıldığında hekimin size karşı mesleki yükümlülükleri de başlar.</p>
          </div>
        </div>
        <div class="yazi">
          <p>Bu yüzden telefonda, mesajda ya da form üzerinden tanı konmaz, ilaç önerilmez ve uygulama kararı verilmez. Mesajınıza verilen yanıt yalnızca randevu ve işleyişle ilgili bilgi niteliğindedir; tıbbi görüş yerine geçmez.</p>
        </div>
      </div>

      <div class="g-bblk" id="araclarin-kullanimi">
        <h2>Sitedeki araçları kullanırken</h2>
        <div class="yazi">
          <p>Sitede hazırlık listesi, cilt tipi testi, bölge pusulası ve uygulama karşılaştırma gibi etkileşimli sayfalar bulunur. Bunların amacı, randevunuzda hekiminizle konuşmak isteyebileceğiniz başlıkları düzenlemenize ve konuları önceden tanımanıza yardımcı olmaktır.</p>
          <ul>
            <li>Araçlar tıbbi cihaz değildir; tarama testi, uygunluk belgesi ya da risk raporu yerine geçen bir sonuç üretmez.</li>
            <li>Hastalık araştırmaz; ben ve leke değerlendirmesi yapmaz, kötü huylu bir oluşumun bulunmadığını gösteremez.</li>
            <li>Sunduğu bilgi hekim görüşü değildir ve tek başına bir kararın dayanağı olamaz.</li>
            <li>Yanıtlarınız cihazınızdan çıkmaz; sunucuya gönderilmez, kaydedilmez ve yurt dışına aktarılmaz.</li>
            <li>Bir araçtan aldığınız sonuca bakarak başvurunuzu ertelemeniz sakıncalı olabilir. Kuşkunuz varsa muayene olun.</li>
          </ul>
          <p>Araçları, başka bir kişi adına ve o kişinin haberi olmadan doldurmayın.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}hazirlik-listesi/">Hazırlık listesi ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="tanitim-mevzuati">
        <h2>Tanıtım mevzuatı çerçevesi</h2>
        <div class="yazi">
          <p>Bu site, sağlık hizmeti sunucularının tanıtım ve bilgilendirme faaliyetlerine ilişkin mevzuata uygun olarak yayımlanır. Bu nedenle sitede ücret bilgisi ya da özel teklif duyurusu yer almaz; hasta deneyimi, teşekkür yazısı ve işlem sonucu karşılaştırması paylaşılmaz.</p>
          <p>Bu tercihlerin gerekçelerini; içeriğin nasıl hazırlandığını, kimin onayladığını ve hangi sıklıkla gözden geçirildiğini ayrı bir sayfada ayrıntısıyla anlattık.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}yasal/icerik-ve-gorsel-yayin-ilkelerimiz/">İçerik ve görsel yayın ilkelerimiz ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="fikri-haklar">
        <h2>Fikri haklar</h2>
        <div class="yazi">
          <p>Sitedeki metinler, başlık düzeni, ikonlar, görseller ve yazılım bileşenleri 5846 sayılı Fikir ve Sanat Eserleri Kanunu’nun koruması altındadır. Bu içerikler kaynak gösterilerek dahi izinsiz kopyalanamaz, başka bir internet sitesinde yeniden yayımlanamaz, ticari amaçla çoğaltılamaz ya da işlenerek kullanılamaz.</p>
          <p>Kişisel kullanımınız için bir sayfayı yazdırabilir veya bağlantısını paylaşabilirsiniz. Bunun dışındaki kullanımlar yazılı izne bağlıdır; izin talebinizi <a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a> adresine gönderebilirsiniz.</p>
          <p>Sayfalarda adı geçen kurum, kuruluş, dernek ve cihaz üreticilerinin adları yalnızca bilgi vermek amacıyla anılır; bu adlar üzerindeki haklar sahiplerine aittir.</p>
        </div>
      </div>

      <div class="g-bblk" id="sorumlulugun-siniri">
        <h2>Sorumluluğun sınırı</h2>
        <div class="yazi">
          <p>İçerikler, yayımlandıkları tarihteki güncel bilgilere dayanılarak hazırlanır ve düzenli aralıklarla gözden geçirilir. Ancak tıbbi bilgi zamanla değişebileceğinden, bir sayfanın her an eksiksiz ve güncel olacağı yönünde taahhütte bulunulamaz.</p>
          <p>Sitedeki bilgilerin kişisel durumunuza uygulanmasından doğabilecek sonuçlar için sorumluluk kabul edilmez; muayene olmadan verilen kararların sorumluluğu kişinin kendisine aittir. Muayeneyle kurulan hekim–hasta ilişkisinden doğan mesleki sorumluluk ise genel hukuk hükümlerine tabidir ve bu metinle sınırlanmaz.</p>
          <p>Teknik arıza, bakım ya da barındırma kaynaklı kesintiler nedeniyle siteye erişilememesinden doğan dolaylı zararlardan sorumluluk kabul edilmez. Sitedeki dış bağlantılar konum haritası ve WhatsApp bağlantısıyla sınırlıdır; bu hizmetlerin içeriği, işleyişi ve veri uygulamaları ilgili şirketlerin sorumluluğundadır.</p>
          <p>Bu koşullar önceden duyurulmaksızın güncellenebilir. Geçerli metin her zaman bu sayfada yayımlanır ve yürürlükteki sürüm sayfadaki güncelleme tarihinden anlaşılır. Uyuşmazlıklarda Türk hukuku uygulanır; İstanbul mahkemeleri ve icra daireleri yetkilidir.</p>
        </div>
      </div>

      <div class="g-bblk" id="ilgili-basliklar">
        <h2>Bunları da okuyabilirsiniz</h2>
        <div class="izgara izgara--2">
          <a class="kart" href="${r}yasal/hasta-haklari/">
            <h3>Hasta hakları</h3>
            <p>Bilgilendirilme, onam, mahremiyet ve başvuru haklarınız.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/kvkk-aydinlatma-metni/">
            <h3>KVKK aydınlatma metni</h3>
            <p>Verilerinizin hangi amaçla ve hangi hukuki sebebe dayanılarak işlendiği.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">
            <h3>Neden bazı işlemleri yapmıyoruz</h3>
            <p>Muayenehanenin kapsamı ve başka bir branşa başvurmanızı önerdiğimiz durumlar.</p>
            <span class="kart__ok">İncele ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}sikca-sorulan-sorular/">
            <h3>Sıkça sorulan sorular</h3>
            <p>Randevu, süreç ve işleyiş hakkında merak edilenler.</p>
            <span class="kart__ok">İncele ${ik.ok}</span>
          </a>
        </div>
      </div>

      <div class="g-bblk">
        <h2>Koşullarla ilgili sorunuz varsa</h2>
        <p class="giris">Bu koşullardaki bir maddeyi açmamızı isterseniz bize yazabilirsiniz.</p>
        <div class="dgm-sira">
          <a class="dgm dgm--bir" href="${r}iletisim/">İletişim</a>
        </div>
      </div>

    </div>
  </div>
</section>
`,
};
