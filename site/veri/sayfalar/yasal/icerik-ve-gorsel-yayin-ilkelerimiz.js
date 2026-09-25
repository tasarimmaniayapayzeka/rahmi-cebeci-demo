const S = require('../../site');

module.exports = {
  slug: 'yasal/icerik-ve-gorsel-yayin-ilkelerimiz',
  tip: 'bilgi',
  baslik: 'İçerik ve Görsel Yayın İlkelerimiz — Neyi Neden Yayımlamıyoruz',
  aciklama: 'Sitede neden ücret bilgisi, hasta yorumu ve öncesi–sonrası görseli yer almadığı; gerçek fotoğraflar, yapay zekâ rozeti, hekim onayı ve güncelleme düzeni.',

  icerik: (r, ik) => `

<!-- ═════════ BELGE HERO ═════════ -->
<section class="g-bhero">
  <div class="sar">
    <p class="g-etiket">Yasal</p>
    <h1>İçerik ve Görsel Yayın İlkelerimiz</h1>
    <p class="g-bhero__alt">Bu sitede bazı içerik türlerine bilerek yer vermiyoruz: ücret bilgisi, hasta yorumu ve deneyim aktarımı, öncesi–sonrası karşılaştırması, hasta görseli ve işlem anı görüntüsü. Bu tercih iki gerekçeye dayanır: yürürlükteki sağlık tanıtım mevzuatı ve hastada gerçekçi olmayan bir beklenti oluşturmama sorumluluğu. Sitedeki gerçek fotoğraflar muayenehaneye aittir; diğer görseller yapay zekâ ile üretilmiş temsilî görsellerdir ve her birinin üzerinde bu durum belirtilir.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>Hasta görseli ve yorumu yayımlanmaz</span>
      <span><i></i>Yapay zekâ görselleri rozetle işaretlenir</span>
    </div>
  </div>
</section>

<!-- ═════════ BELGE GÖVDESİ ═════════ -->
<section class="g-belge">
  <div class="sar">

    <aside class="g-bmenu" aria-label="Sayfa içi başlıklar">
      <b>Bu sayfada</b>
      <a href="#kisaca-cerceve">Çerçeve kısaca</a>
      <a href="#yayimlamadiklarimiz">Yayımlamadıklarımız</a>
      <a href="#yayimladiklarimiz">Yayımladıklarımız</a>
      <a href="#gorsellerin-kaynagi">Görsellerin kaynağı</a>
      <a href="#icerik-ve-onay">Hazırlık ve onay</a>
      <a href="#guncelleme-takvimi">Güncelleme takvimi</a>
      <a href="#ilgili-basliklar">İlgili başlıklar</a>
    </aside>

    <div class="g-bgov">

      <div class="g-bblk" id="kisaca-cerceve">
        <h2>Çerçeve kısaca</h2>
        <div class="yazi">
          <p>Sağlık hizmeti sunucularının tanıtım ve bilgilendirme faaliyetleri ayrı bir yönetmelikle düzenlenir. Bu düzenlemenin özü şudur: sağlık hizmeti, ticari bir mal gibi pazarlanacak bir şey değildir; internet sitesinde yapılabilecek olan, hastanın bilinçli karar vermesine yardımcı olacak nesnel bilgilendirmedir. Talep yaratmaya, kıyaslamaya ya da yönlendirmeye dönük her öğe bu çerçevenin dışında kalır. İlgili düzenlemelerin özetini <a href="${r}mevzuat/">mevzuat sayfasında</a> bulabilirsiniz.</p>
          <p>Denetim birden fazla kurumdan gelir. Mevzuata uygunluğu Sağlık Bakanlığı ve il sağlık müdürlükleri denetler; aynı içerik, tüketiciyi yanıltıcı reklam yönünden Reklam Kurulu tarafından ayrıca incelenebilir. Sınırın tam olarak nereden geçtiğini tartışmak yerine, o sınıra hiç yaklaşmamayı tercih ediyoruz.</p>
        </div>
      </div>

      <div class="g-bblk" id="yayimlamadiklarimiz">
        <h2>Neleri yayımlamıyoruz, neden?</h2>
        <p class="giris">Dört başlık ve her biri için ayrı bir gerekçe.</p>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalkan}</span>
            <h3>Ücret bilgisi ve teklif</h3>
            <p>Sağlık hizmetinde ücret, bir listeden seçilecek bir kalem değildir. Hangi uygulamanın yapılacağı ancak muayeneden sonra netleşir; muayene olmadan söylenen bir rakam, gerçekte uygulanacak planı bilmeden verilmiş olur. Mevzuat da sağlık hizmetinin ücret üzerinden duyurulmasına ve özel teklif ilanına izin vermez. Ücret bilgisi yalnızca muayenede, size özgü plan konuşulduktan sonra kişisel olarak paylaşılır.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalp}</span>
            <h3>Hasta yorumu ve teşekkür yazısı</h3>
            <p>Bir kişinin memnuniyetini aktarmak, onda olanın sizde de olacağı izlenimini yaratır; oysa aynı uygulamanın sonucu kişiden kişiye değişebilir. Deneyim paylaşımı ayrıca kişinin sağlık durumunu açığa çıkararak mahremiyetini zedeler ve mevzuat bakımından tanıtım sayılır. Bu yüzden sitede hasta yorumu, teşekkür mektubu, memnuniyet oranı ya da yıldız puanı yer almaz; başka platformlarda bu tür içerik oluşturulması da istenmez.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.mercek}</span>
            <h3>Öncesi–sonrası karşılaştırması</h3>
            <p>Bu görseller ilk bakışta en nesnel kanıt gibi görünür, ama en çok yanıltabilecek olanlardır. Işığın yönü, poz, çekim mesafesi, makyaj, ödem ve fotoğrafın çekildiği saat görüntüyü belirgin biçimde değiştirir. Böyle bir görsel size ne olacağını değil, bir başkasında olanın seçilmiş bir anını gösterir. Beklenti yaratma etkisi nedeniyle mevzuat da bu paylaşımlara izin vermez.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.damla}</span>
            <h3>İşlem anı görüntüsü</h3>
            <p>İğne, kanül, kanama ya da uygulama anını gösteren fotoğraf ve videolar bilgi vermekten çok dikkat çekmeye yarar. İzleyende ya gereksiz bir kaygı ya da yanıltıcı bir kolaylık algısı uyandırır; üstelik hastanın bedenini tanıtım malzemesine dönüştürür. Sitede uygulama anına ait görüntü yer almaz.</p>
          </div>
        </div>
        <div class="kutu kutu--uyari">
          <b>Hastaya ait hiçbir içerik yayımlanmaz</b>
          <p>Hastaya ait görüntü, kayıt ya da vaka anlatımı, kişi tanınmayacak hâle getirilse bile tanıtım amacıyla yayımlanmaz. Klinik takip için çekilen fotoğraflar yalnızca hasta dosyasında saklanır.</p>
        </div>
      </div>

      <div class="g-bblk" id="yayimladiklarimiz">
        <h2>Neleri yayımlıyoruz?</h2>
        <div class="yazi">
          <p>Kapsamı daralttığımızda geriye asıl işe yarayan bilgiler kalır. Sitede şunları bulabilirsiniz:</p>
          <ul>
            <li>Bir yakınmanın ardında hangi farklı nedenlerin olabileceği ve bunların nasıl ayırt edildiği.</li>
            <li>Bir uygulamanın ne olduğu ve en az bunun kadar önemli olarak ne olmadığı.</li>
            <li>Hangi durumlarda uygulanmadığı ya da ertelendiği.</li>
            <li>Olası etkilerin ve istenmeyen durumların açıkça sıralanması.</li>
            <li>Muayenehanenin kapsamı dışında kalan ve başka bir branşa başvurmanızı önerdiğimiz konular.</li>
            <li>Randevudan önce hazırlanmanızı kolaylaştıracak nesnel bilgiler.</li>
          </ul>
          <p>Marka adları konusundaki ilkemiz de aynı gerekçeye dayanır. Enjeksiyon uygulamalarında kullanılan ürünlerin marka adlarına yer verilmez; hangi ürünün kullanılacağına muayeneden sonra, kişiye göre karar verilir. Muayenehanedeki cihazların marka ve modeli ise yalnızca bilgi amacıyla, <a href="${r}klinik/">klinik sayfasındaki</a> cihaz listesinde ve ilgili uygulama sayfasındaki tek bir “kullanılan cihaz” satırında anılır; metinlerde cihazın genel adı kullanılır. Halk arasında yaygın adlarla bilinen uygulamalarda ise uygulamanın tıbbi karşılığı da aynı sayfada belirtilir.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">Kapsamımızın sınırı ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="gorsellerin-kaynagi">
        <h2>Görseller nereden geliyor, nasıl işaretleniyor?</h2>
        <div class="yazi">
          <p>Sitede iki tür görsel kullanılır ve bunların hiçbiri hasta görüntüsü değildir. Birinci grup gerçek fotoğraflardır: hekimin portreleri, muayenehanenin bekleme salonu, karşılama bankosu, uygulama odası ve cihaz odası ile muayenehanede kullanılan cihazların fotoğrafları muayenehaneye aittir. Bu fotoğraflarda kişi, mekân ve cihazlar olduğundan farklı gösterilmez; bu nedenle üzerlerinde yapay zekâ rozeti bulunmaz.</p>
          <p>İkinci grup, anlatımı desteklemek için yapay zekâ ile üretilmiş temsilî görsellerdir: yüz ve bölge görselleri, cilt katmanlarını gösteren kesitler, doku ve ortam görselleri gibi. Bu görsellerin her birinin üzerinde <b>“Görsel yapay zekâ ile üretilmiştir”</b> rozeti bulunur. Rozet küçük puntoyla gizlenmez ya da sayfanın sonuna taşınmaz; görselin kendisi üzerinde okunur biçimde durur.</p>
          <p>Yapay zekâ ile üretilen görsellerin kullanılmadığı alanlar da bellidir: klinik bulgu anlatımı, bir tedavi sonucunu çağrıştıracak her tür kompozisyon, hekimin ya da çalışanların yerine geçecek bir temsil ve muayenehanenin mekânını ya da cihazlarını gerçekmiş gibi gösterme. Amaç, bir görsele bakan herkesin onun muayenehaneye ait gerçek bir fotoğraf mı, yoksa anlatımı destekleyen temsilî bir öğe mi olduğunu duraksamadan anlayabilmesidir.</p>
        </div>
      </div>

      <div class="g-bblk" id="icerik-ve-onay">
        <h2>İçerikleri kim hazırlıyor, kim onaylıyor?</h2>
        <div class="yazi">
          <p>Sitedeki tıbbi içeriklerin tümü, muayenehanenin sahibi ve sorumlu tabibi <b>${S.hekim.tam}</b> (${S.hekim.dallar}) tarafından hazırlanır ya da hazırlanan taslak tıbbi doğruluk yönünden denetlenip onaylanır. Onaydan geçmemiş tıbbi metin yayımlanmaz.</p>
          <p>Her tıbbi sayfanın sonunda bir künye yer alır. Künyede içeriği onaylayan hekim ve son güncelleme tarihi bulunur; içerikle ilgili bildirimler için site editörüne <a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a> adresinden ulaşılabilir. Bu bilgiler mevzuat gereği zorunludur; okuyucunun metnin ne kadar güncel olduğunu görebilmesi için biz de gerekli buluyoruz.</p>
        </div>
        <ol class="adimlar">
          <li>
            <h4>Taslak ve kaynak kontrolü</h4>
            <p>Konu belirlenir, güncel klinik çerçeve incelenir; doğruluğundan emin olunmayan ayrıntı metne girmez.</p>
          </li>
          <li>
            <h4>Tıbbi denetim</h4>
            <p>Hekim metni satır satır okur; abartılı anlatım, sonuç vaadi ve yönlendirici dil ayıklanır.</p>
          </li>
          <li>
            <h4>Mevzuat denetimi</h4>
            <p>Metin; tanıtım, kişisel veri ve reklam mevzuatı açısından ayrıca kontrol edilir.</p>
          </li>
          <li>
            <h4>Yayın ve tarihleme</h4>
            <p>Sayfa yayına alınır ve künyeye güncelleme tarihi eklenir.</p>
          </li>
        </ol>
      </div>

      <div class="g-bblk" id="guncelleme-takvimi">
        <h2>Güncelleme takvimi</h2>
        <div class="yazi">
          <p>İçerikler yayımlandıktan sonra kendi hâline bırakılmaz. Uyguladığımız düzen şöyledir:</p>
          <ul>
            <li><b>Yılda en az bir kez</b> bütün tıbbi sayfalar baştan sona okunur ve güncelliği doğrulanır.</li>
            <li><b>Altı ayda bir</b> uygulama sayfaları, kapsam ve uygulanmayan durumlar yönünden gözden geçirilir.</li>
            <li><b>Mevzuat değiştiğinde</b> yasal metinler ve değişiklikten etkilenen bütün sayfalar makul bir süre içinde güncellenir.</li>
            <li><b>Muayenehanedeki uygulamada bir değişiklik olduğunda</b> ilgili sayfa beklenmeden düzeltilir.</li>
            <li>Bir sayfa güncellendiğinde künyesindeki tarih de yenilenir; içerikte değişiklik yoksa tarihe dokunulmaz.</li>
          </ul>
          <p>Bir sayfada hatalı, eksik ya da güncelliğini yitirmiş bir bilgi görürseniz bize bildirmenizi rica ederiz. Bildirimlerinizi <a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a> adresine gönderebilirsiniz; incelenir ve gerekiyorsa düzeltilir.</p>
        </div>
      </div>

      <div class="g-bblk" id="ilgili-basliklar">
        <h2>Bunları da okuyabilirsiniz</h2>
        <div class="izgara izgara--2">
          <a class="kart" href="${r}yasal/kullanim-kosullari/">
            <h3>Kullanım koşulları</h3>
            <p>Site içeriğinin neden yalnızca bilgilendirme amaçlı olduğu.</p>
          </a>
          <a class="kart" href="${r}yasal/hasta-haklari/">
            <h3>Hasta hakları</h3>
            <p>Mahremiyet, bilgilendirilme ve onam haklarınız.</p>
          </a>
          <a class="kart" href="${r}yasal/kvkk-aydinlatma-metni/">
            <h3>KVKK aydınlatma metni</h3>
            <p>Klinik takip fotoğrafları da dâhil olmak üzere verilerinizin işlenişi.</p>
          </a>
          <a class="kart" href="${r}yaklasimimiz/">
            <h3>Yaklaşımımız</h3>
            <p>Uygulamadan önce değerlendirme ilkesi.</p>
          </a>
          <a class="kart" href="${r}bilgi/">
            <h3>Bilgi merkezi</h3>
            <p>Bu ilkelere göre hazırlanmış bütün bilgilendirme içerikleri.</p>
          </a>
        </div>
      </div>

      <div class="g-bblk">
        <h2>Görüş ve düzeltme önerisi</h2>
        <p class="giris">İçeriklerimizle ilgili görüşlerinizi ya da randevu talebinizi iletişim sayfasından bize ulaştırabilirsiniz.</p>
        <div class="dgm-sira">
          <a class="dgm dgm--bir" href="${r}iletisim/">İletişim</a>
        </div>
      </div>

    </div>
  </div>
</section>
`,
};
