const S = require('../../site');

module.exports = {
  slug: 'yasal/icerik-ve-gorsel-yayin-ilkelerimiz',
  tip: 'bilgi',
  baslik: 'Yayın ve Görsel Kullanım Esaslarımız — Neyi Neden Yayımlamıyoruz',
  aciklama: 'Sitede neden ücret bilgisi, hasta yorumu ve öncesi–sonrası görseli yer almadığı; gerçek fotoğraflar, yapay zekâ rozeti, hekim onayı ve güncelleme düzeni.',

  icerik: (r, ik) => `

<!-- ═════════ BELGE HERO ═════════ -->
<section class="g-bhero">
  <div class="sar">
    <p class="g-etiket">Mevzuat notu</p>
    <h1>Yayın ve Görsel Kullanım Esaslarımız</h1>
    <p class="g-bhero__alt">Sitemizde yer vermediğimiz içerikler bilinçli bir seçimin sonucudur: ücret bilgisi, hasta yorumları ve deneyim anlatıları, öncesi–sonrası karşılaştırmaları, hastalara ait fotoğraflar ve uygulama sırasında çekilmiş görüntüler. Bu seçimin iki dayanağı var: sağlık hizmetlerinin tanıtımına ilişkin güncel mevzuat ve hastada karşılığı olmayan bir beklenti uyandırmama kaygısı. Gerçek fotoğrafların tümü muayenehanemize aittir; geri kalan görseller yapay zekâ ile hazırlanmış temsilî görsellerdir ve sayfadaki büyük hâllerinin üzerinde bir rozetle belirtilir.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>Hastalara ait görüntü ve yorum yok</span>
      <span><i></i>Temsilî görseller rozetlidir</span>
    </div>
  </div>
</section>

<!-- ═════════ BELGE GÖVDESİ ═════════ -->
<section class="g-belge">
  <div class="sar">

    <aside class="g-bmenu" aria-label="Sayfa içi başlıklar">
      <b>Bu sayfada</b>
      <a href="#kisaca-cerceve">Dayanak</a>
      <a href="#yayimlamadiklarimiz">Yer vermediğimiz içerikler</a>
      <a href="#yayimladiklarimiz">Sitede bulacaklarınız</a>
      <a href="#gorsellerin-kaynagi">Fotoğraf ve temsilî görsel</a>
      <a href="#icerik-ve-onay">Hekim onayı</a>
      <a href="#guncelleme-takvimi">Gözden geçirme düzeni</a>
      <a href="#ilgili-basliklar">Diğer metinler</a>
    </aside>

    <div class="g-bgov">

      <div class="g-bblk" id="kisaca-cerceve">
        <h2>Yasal dayanak</h2>
        <div class="yazi">
          <p>Sağlık alanında hizmet verenlerin kendilerini nasıl tanıtabileceği, bu konuya özel bir yönetmelikle belirlenmiştir. Yönetmeliğin temel yaklaşımı açıktır: sağlık hizmeti bir tüketim ürünü gibi satışa sunulamaz; bir internet sitesinin yapabileceği, hastanın bilgiye dayalı karar vermesini kolaylaştıran tarafsız bir anlatım sunmaktır. Talep oluşturan, karşılaştırma yapan ya da hastayı belli bir yere yönelten her unsur bu sınırın dışında kalır. Konuyla ilgili düzenlemelerin kısa bir özeti <a href="${r}mevzuat/">mevzuat sayfasında</a> yer alıyor.</p>
          <p>Bu içerikleri tek bir kurum denetlemez. Tanıtım kurallarına uyulup uyulmadığını il sağlık müdürlükleri ile Sağlık Bakanlığı inceler; aynı metin, tüketiciyi yanıltıp yanıltmadığı açısından Reklam Kurulu’nun da gündemine gelebilir. Biz sınırın tam yerini aramak yerine ona hiç yaklaşmamayı seçiyoruz.</p>
        </div>
      </div>

      <div class="g-bblk" id="yayimlamadiklarimiz">
        <h2>Yer vermediğimiz içerikler ve gerekçeleri</h2>
        <p class="giris">Dört içerik türü, her biri için ayrı bir açıklama.</p>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalkan}</span>
            <h3>Ücret ve teklif duyurusu</h3>
            <p>Sağlık hizmetinin bedeli, bir katalogdan seçilen kalem gibi belirlenemez. Size hangi uygulamanın uygun olduğu muayenede ortaya çıkar; muayeneden önce söylenecek bir tutar, yapılacak işi bilmeden verilmiş olur. Yönetmelik de sağlık hizmetlerinin ücretle tanıtılmasını ve özel teklif duyurularını yasaklar. Tutar, muayenede size uygun plan belirlendikten sonra yalnızca sizinle paylaşılır.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalp}</span>
            <h3>Yorum ve teşekkür mesajları</h3>
            <p>Birinin memnun kaldığını anlatmak, aynı sonucun size de ulaşacağı düşüncesini doğurur; oysa aynı uygulama iki kişide farklı sonuç verebilir. Deneyim anlatıları, kişinin sağlık bilgisini ortaya koyduğu için mahremiyetini de zedeler ve mevzuata göre tanıtım kapsamına girer. Bu nedenle sitede yorum, teşekkür mesajı, memnuniyet yüzdesi ya da puan bulunmaz; hastalarımızdan başka platformlarda bu tür paylaşımlar yapmaları da istenmez.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.mercek}</span>
            <h3>Önce ve sonra fotoğrafları</h3>
            <p>Yan yana konmuş iki fotoğraf tarafsız bir kanıt izlenimi verir, fakat yanıltma olasılığı en yüksek görseller de bunlardır. Işığın geliş açısı, duruş, objektife uzaklık, makyaj, şişlik ve çekimin günün hangi saatinde yapıldığı sonucu belirgin biçimde değiştirir. Böyle bir karşılaştırma sizde ne olacağını anlatmaz; bir başkasında yaşanmış bir anın seçilmiş karesini gösterir. Beklenti oluşturduğu için mevzuat da bu görsellerin paylaşılmasını kabul etmez.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.damla}</span>
            <h3>Uygulama sırasında çekilen görüntüler</h3>
            <p>İğnenin, kanülün, kanamanın ya da uygulama sürecinin gösterildiği fotoğraf ve videolar bilgilendirmekten çok göz almaya yöneliktir. İzleyen kişide ya yersiz bir endişe ya da işin olduğundan kolay olduğu yanılgısını doğurur; ayrıca hastanın bedenini tanıtımın bir parçası hâline getirir. Bu nedenle sitede uygulama sırasında çekilmiş görüntü bulunmaz.</p>
          </div>
        </div>
        <div class="kutu kutu--uyari">
          <b>Hastalarımıza ait içerik paylaşılmaz</b>
          <p>Bir hastaya ait fotoğraf, kayıt ya da vaka öyküsü, kimliği gizlenmiş olsa bile tanıtımda kullanılmaz. Tedavinin izlenmesi için çekilen fotoğraflar hastanın kendi dosyasında saklanır, başka bir yerde kullanılmaz.</p>
        </div>
      </div>

      <div class="g-bblk" id="yayimladiklarimiz">
        <h2>Sitede neler bulacaksınız?</h2>
        <div class="yazi">
          <p>Bu içerikleri dışarıda bıraktığımızda, karar vermenizde gerçekten işe yarayacak bilgiler öne çıkıyor. Sayfalarda şunlara yer veriyoruz:</p>
          <ul>
            <li>Aynı yakınmanın hangi farklı nedenlerden kaynaklanabileceği ve bu nedenlerin birbirinden nasıl ayrıldığı.</li>
            <li>Uygulamanın tanımı ve en az o kadar önemli olan yanıyla, neyi kapsamadığı.</li>
            <li>Uygulamanın yapılmadığı ya da ileri bir tarihe bırakıldığı durumlar.</li>
            <li>Beklenen etkiler ile istenmeyen durumların açık bir dökümü.</li>
            <li>Muayenehanemizde ele alınmayan ve başka bir uzmanlık dalına yönelmenizi önerdiğimiz konular.</li>
            <li>Randevuya hazırlanırken işinize yarayacak tarafsız bilgiler.</li>
          </ul>
          <p>Marka adlarına ilişkin tutumumuz da aynı düşünceden doğar. Enjeksiyonla yapılan uygulamalardaki ürünlerin markası sitede anılmaz; hangi ürünün seçileceği muayeneden sonra, kişiye özel olarak belirlenir. Muayenehanedeki cihazların marka ve modeli yalnızca bilgi vermek için, <a href="${r}klinik/">klinik sayfasındaki</a> cihaz listesinde ve ilgili uygulama sayfasındaki tek bir “kullanılan cihaz” satırında geçer; metinlerde cihazın genel adı kullanılır. Halk arasında farklı adlarla bilinen uygulamalarda da tıbbi adı aynı sayfada belirtilir.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">Kapsamımızın sınırı ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="gorsellerin-kaynagi">
        <h2>Fotoğraflar ve temsilî görseller</h2>
        <div class="yazi">
          <p>Sitede iki çeşit görsel var; ikisi de hasta görüntüsü içermez. İlki gerçek fotoğraflardır: hekimin portreleri, bekleme salonu, karşılama bankosu, uygulama odası, cihaz odası ve muayenehanede kullanılan cihazların fotoğrafları muayenehanemize aittir. Bu fotoğraflarda kişiler, mekân ve cihazlar olduğundan başka türlü gösterilmez; bu yüzden üzerlerinde yapay zekâ rozeti yer almaz.</p>
          <p>İkincisi, anlatılanı somutlaştırmak için yapay zekâ ile hazırlanmış temsilî görsellerdir: yüz ve bölge çizimleri, cilt katmanlarını gösteren kesitler, doku ve ortam görselleri bu gruptadır. Bu görsellerin sayfadaki büyük hâlinde <b>“Temsilî görsel · yapay zekâ ile üretildi”</b> rozeti yer alır. Rozet küçük bir dipnota ya da sayfa sonuna saklanmaz; doğrudan görselin üzerinde, okunabilir biçimde durur. Bölge ve cilt sorunu sayfalarında uygulama tablosunun yanında açılan küçük önizleme kartında ise aynı görsellerin küçük bir kopyası gösterilir; bu kartta ayrıca rozet bulunmaz, rozetli büyük hâli bağlantının götürdüğü uygulama sayfasındadır.</p>
          <p>Yapay zekâ görsellerine başvurmadığımız alanlar da nettir: klinik bir bulguyu anlatmak, herhangi bir tedavi sonucunu düşündürecek bir kompozisyon kurmak, hekimi ya da ekibi temsil etmek, muayenehanenin kendisini veya cihazlarını gerçekmiş gibi göstermek. Amacımız, sitedeki herhangi bir görsele bakan kişinin onun muayenehaneye ait gerçek bir fotoğraf mı, yoksa konuyu anlatmaya yardım eden temsilî bir çizim mi olduğunu hemen ayırt edebilmesi.</p>
        </div>
      </div>

      <div class="g-bblk" id="icerik-ve-onay">
        <h2>Metinleri kim yazıyor, kim onaylıyor?</h2>
        <div class="yazi">
          <p>Sitede yer alan tıbbi metinlerin hepsini muayenehanenin sahibi ve sorumlu tabibi <b>${S.hekim.tam}</b> (${S.hekim.dallar}) yazar ya da bir taslak üzerinden tıbbi doğruluğunu inceleyip onaylar. Hekimin onayından geçmeyen hiçbir tıbbi metin yayına girmez.</p>
          <p>Tıbbi sayfaların altında birer künye yer alır. Bu kutuda metni onaylayan hekimin adı, sayfanın son kez gözden geçirildiği tarih ve bildirimleriniz için site editörünün e-posta adresi (<a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a>) yer alır. Mevzuat bu bilgilerin yazılmasını şart koşar; bizim için asıl yararı, okuduğunuz metnin güncel olup olmadığını bir bakışta görebilmenizdir.</p>
        </div>
        <ol class="adimlar">
          <li>
            <h4>Taslak ve kaynak kontrolü</h4>
            <p>Ele alınacak konu seçilir, güncel tıbbi bilgi gözden geçirilir; doğruluğundan kuşku duyulan hiçbir ayrıntı metne alınmaz.</p>
          </li>
          <li>
            <h4>Tıbbi gözden geçirme</h4>
            <p>Hekim metnin her satırını okur; abartılı ifadeler, sonuca dair vaatler ve hastayı yönlendiren anlatım çıkarılır.</p>
          </li>
          <li>
            <h4>Mevzuata uygunluk kontrolü</h4>
            <p>Metin ayrıca tanıtım kuralları, kişisel verilerin korunması ve reklam düzenlemeleri bakımından kontrol edilir.</p>
          </li>
          <li>
            <h4>Yayın tarihi ve güncelleme</h4>
            <p>Yayına alınan sayfanın künyesine gözden geçirme tarihi işlenir.</p>
          </li>
        </ol>
      </div>

      <div class="g-bblk" id="guncelleme-takvimi">
        <h2>Gözden geçirme düzeni</h2>
        <div class="yazi">
          <p>Bir sayfa yayına girdikten sonra da takip edilmeye devam eder. İzlediğimiz yol şöyle:</p>
          <ul>
            <li><b>Belirli aralıklarla</b> tüm tıbbi sayfalar baştan sona yeniden okunur ve bilgilerin güncel olduğu doğrulanır.</li>
            <li><b>Uygulama sayfaları</b> kapsamları ve uygulamanın yapılmadığı durumlar bakımından daha sık elden geçirilir.</li>
            <li><b>Yeni bir düzenleme çıktığında</b> yasal metinlerle birlikte bundan etkilenen tüm sayfalar makul bir süre içinde yenilenir.</li>
            <li><b>Muayenehanede bir uygulama değiştiğinde</b> bununla ilgili sayfa bir sonraki gözden geçirme beklenmeden düzeltilir.</li>
            <li>Güncellenen sayfanın künyesindeki tarih de değişir; içerik aynı kaldıysa tarih yerinde durur.</li>
          </ul>
          <p>Bir sayfada yanlış, eksik ya da artık geçerliliği kalmamış bir bilgiyle karşılaşırsanız bize haber vermenizden memnuniyet duyarız. Bildiriminizi <a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a> adresine yazabilirsiniz; her bildirim incelenir, gerekiyorsa sayfa düzeltilir.</p>
        </div>
      </div>

      <div class="g-bblk" id="ilgili-basliklar">
        <h2>Diğer metinler</h2>
        <div class="izgara izgara--2">
          <a class="kart" href="${r}yasal/kullanim-kosullari/">
            <h3>Kullanım koşulları</h3>
            <p>Sitedeki içeriğin tıbbi görüşün yerini neden tutmadığı.</p>
          </a>
          <a class="kart" href="${r}yasal/hasta-haklari/">
            <h3>Hasta hakları</h3>
            <p>Bilgi alma, onam verme ve mahremiyetinizin korunması.</p>
          </a>
          <a class="kart" href="${r}yasal/kvkk-aydinlatma-metni/">
            <h3>KVKK aydınlatma metni</h3>
            <p>Takip fotoğrafları dâhil kişisel verilerinizin nasıl işlendiği.</p>
          </a>
          <a class="kart" href="${r}yaklasimimiz/">
            <h3>Randevudan kontrole</h3>
            <p>Her uygulamadan önce değerlendirme yapma ilkemiz.</p>
          </a>
          <a class="kart" href="${r}bilgi/">
            <h3>Okuma köşesi</h3>
            <p>Burada anlatılan ilkelerle yazılmış tüm bilgilendirme yazıları.</p>
          </a>
        </div>
      </div>

      <div class="g-bblk">
        <h2>Önerileriniz ve düzeltmeleriniz</h2>
        <p class="giris">Sitedeki içerikler hakkındaki düşüncelerinizi ya da randevu isteğinizi iletişim sayfası aracılığıyla bize ulaştırabilirsiniz.</p>
        <div class="dgm-sira">
          <a class="dgm dgm--bir" href="${r}iletisim/">İletişim</a>
        </div>
      </div>

    </div>
  </div>
</section>
`,
};
