const S = require('../../site');

module.exports = {
  slug: 'yasal/kullanim-kosullari',
  tip: 'bilgi',
  baslik: 'Kullanım Koşulları — Bilgilendirme Amacı ve Sorumluluk Sınırı',
  aciklama: 'Sitedeki yazıların yalnız bilgi vermek için hazırlandığı, hekim–hasta ilişkisinin hangi anda kurulduğu, araçların sınırı, telif ve sorumluluk kapsamı.',

  icerik: (r, ik) => `

<!-- ═════════ BELGE HERO ═════════ -->
<section class="g-bhero">
  <div class="sar">
    <p class="g-etiket">Mevzuat notu</p>
    <h1>Kullanım Koşulları</h1>
    <p class="g-bhero__alt">Sitedeki yazılar, listeler ve etkileşimli araçlar yalnız konular hakkında genel bir fikir vermek için hazırlandı. Hiçbiri teşhis koymaya, tedavi seçmeye ya da muayenenin yerini almaya yönelik değildir. Sayfaları okumak, bize yazmak ya da bir aracı denemek, hekimle aranızda hekim–hasta ilişkisi başlatmaz. Siteyi kullanmayı sürdürmeniz, aşağıdaki koşulları kabul ettiğiniz anlamına gelir.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>Amaç: genel bilgi vermek</span>
      <span><i></i>Muayene yerine geçmez</span>
    </div>
  </div>
</section>

<!-- ═════════ BELGE GÖVDESİ ═════════ -->
<section class="g-belge">
  <div class="sar">

    <aside class="g-bmenu" aria-label="Sayfa içi başlıklar">
      <b>Bu sayfada</b>
      <a href="#icerigin-niteligi">Sayfaların amacı</a>
      <a href="#hekim-hasta-iliskisi">İlişkinin başlangıcı</a>
      <a href="#araclarin-kullanimi">Etkileşimli araçlar</a>
      <a href="#tanitim-mevzuati">Tanıtım kuralları</a>
      <a href="#fikri-haklar">Telif ve kullanım izni</a>
      <a href="#sorumlulugun-siniri">Sorumluluk kapsamı</a>
      <a href="#ilgili-basliklar">Bağlantılı sayfalar</a>
    </aside>

    <div class="g-bgov">

      <div class="g-bblk" id="icerigin-niteligi">
        <h2>Sayfaların amacı ve sınırları</h2>
        <div class="yazi">
          <p>Metinler, muayenehaneye gelenlerin en çok merak ettiği konuları anlaşılır biçimde anlatmak ve randevuya hazırlıklı gelmenizi kolaylaştırmak için yazıldı. Konunun genel tıbbi çerçevesini verirler; kimsenin kişisel durumunu değerlendirmezler.</p>
          <p>Tıbbi kararlar kişiye göre verilir. Benzer bir yakınmayla başvuran iki kişide altta yatan neden, izlenecek yol ve bir uygulamaya elverişlilik birbirinden ayrışabilir. Burada okuduklarınızdan yola çıkarak kendinize tanı koymayın, kullandığınız bir ilacın dozunu değiştirmeyin ya da ilacı kesmeyin; bir uygulamanın size uyacağını da peşinen düşünmeyin. Herkes muayene sonrasında ayrı ayrı değerlendirilir.</p>
          <p>Metinlerde verilen süreler, seans aralıkları ve aşamalar sık görülen örneklerdir; sizde de aynı biçimde gerçekleşeceklerini göstermez. Sonuçlar kişiden kişiye değişebilir.</p>
        </div>
        <div class="kutu kutu--acil">
          <b>Acil bir durumda bu siteyle vakit kaybetmeyin</b>
          <p>Soluk almakta güçlük, yüzde, dudakta ya da dilde birden başlayan şişme, yutkunamama, vücuda yayılan döküntüyle beraber sersemlik hissi, göğüste ağrı veya bilincin bulanması gibi belirtilerde siteyi okumaya devam etmeyin. Bir uygulamanın ardından görmenizde ani bir değişiklik olursa ya da uygulanan bölgede ağrı hızla artıyor ve renk değişiyorsa aynı şekilde hareket edin. <b>112</b> Acil Çağrı Merkezi’ni arayın veya size en yakın hastanenin acil servisine gidin.</p>
        </div>
      </div>

      <div class="g-bblk" id="hekim-hasta-iliskisi">
        <h2>İlişki hangi anda başlar?</h2>
        <p class="giris">Bu ayrımı net tutmak hem sizin hem hekimin yararınadır.</p>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <h3>Bunlar ilişki kurmaz</h3>
            <p>Sayfalarda gezinmek, sık sorulan soruları okumak, hazırlık listesini ya da cilt eğilimi testini doldurmak ve iletişim formundan randevu isteği iletmek, hekim–hasta ilişkisini tek başına başlatmaz.</p>
          </div>
          <div class="kart kart--duz">
            <h3>Muayeneyle başlayan ilişki</h3>
            <p>Muayenehanede yüz yüze muayene olduğunuzda ilişki başlar. Öykünüz dinlenip muayeneniz yapıldığında ve adınıza kayıt açıldığında, hekimin size karşı mesleki sorumlulukları da işlemeye başlar.</p>
          </div>
        </div>
        <div class="yazi">
          <p>Bu nedenle telefonda, mesajlaşmada ya da form aracılığıyla tanı konulmaz, ilaç yazılmaz, uygulamaya karar verilmez. Yazdığınız mesaja verdiğimiz yanıt randevu ve işleyişle sınırlı bilgi içerir; tıbbi bir görüş sayılmaz.</p>
        </div>
      </div>

      <div class="g-bblk" id="araclarin-kullanimi">
        <h2>Etkileşimli araçlar hakkında</h2>
        <div class="yazi">
          <p>Sitede cilt eğilimi testi, bölge rehberi, uygulama karşılaştırma ve hazırlık listesi gibi etkileşimli sayfalar var. Bunlar, muayenede hekiminize sormak isteyebileceğiniz konuları toparlamanız ve başlıklara önceden aşina olmanız için tasarlandı.</p>
          <ul>
            <li>Hiçbiri tıbbi cihaz sayılmaz; bir tarama testinin, uygunluk belgesinin ya da risk raporunun yerine kullanılabilecek sonuç vermez.</li>
            <li>Hastalık tespiti yapmaz; benleri ve lekeleri incelemez, bir oluşumun kötü huylu olmadığını söyleyemez.</li>
            <li>Verdiği bilgi hekim görüşü niteliği taşımaz ve tek başına bir karara dayanak yapılamaz.</li>
            <li>Girdiğiniz yanıtlar yalnız kendi cihazınızda kalır; sunucuya iletilmez, saklanmaz, yurt dışına gönderilmez.</li>
            <li>Bir aracın gösterdiği sonuca güvenip muayeneyi ertelemek sizin için sakıncalı olabilir. Aklınıza takılan bir şey varsa hekime görünün.</li>
          </ul>
          <p>Araçları bir başkası adına, o kişinin bilgisi dışında doldurmayın.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}hazirlik-listesi/">Hazırlık listesi ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="tanitim-mevzuati">
        <h2>Sağlık tanıtımı kuralları</h2>
        <div class="yazi">
          <p>Site, sağlık kuruluşlarının tanıtımına ve kamuoyunu bilgilendirmesine dair mevzuat gözetilerek yayımlanmaktadır. Bu yüzden burada ücret bilgisine ya da özel teklif duyurularına yer verilmez; hasta anlatımları, teşekkür mesajları ve işlem sonuçlarını karşılaştıran içerikler de paylaşılmaz.</p>
          <p>Bu tercihlerin nedenlerini, içeriğin kim tarafından hazırlanıp onaylandığını ve ne sıklıkla yeniden gözden geçirildiğini ayrı bir sayfada anlattık.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}yasal/icerik-ve-gorsel-yayin-ilkelerimiz/">Yayın ve görsel kullanım esaslarımız ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="fikri-haklar">
        <h2>Telif ve kullanım izni</h2>
        <div class="yazi">
          <p>Sitede yer alan metinler, görseller, ikonlar, sayfa kurgusu ve yazılım üzerindeki haklar 5846 sayılı Fikir ve Sanat Eserleri Kanunu ile korunur. Bu içeriklerin izin alınmadan kopyalanması, başka sitelerde yayımlanması, ticari amaçla çoğaltılması ya da uyarlanarak kullanılması yasaktır; kaynak belirtilmesi bu durumu değiştirmez.</p>
          <p>Bir sayfayı kendi kullanımınız için yazdırabilir ya da bağlantısını başkalarıyla paylaşabilirsiniz. Bunun ötesindeki her kullanım yazılı izne tabidir; izin isteğinizi <a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a> adresine iletebilirsiniz.</p>
          <p>Metinlerde anılan kurum, dernek, kuruluş ve cihaz üreticisi adları yalnız bilgilendirme amacıyla kullanılır; bu adlara ilişkin haklar sahiplerinde kalır.</p>
        </div>
      </div>

      <div class="g-bblk" id="sorumlulugun-siniri">
        <h2>Sorumluluk kapsamı</h2>
        <div class="yazi">
          <p>Sayfalar, yayımlandıkları tarihte geçerli bilgiler esas alınarak yazılır ve belirli aralıklarla yeniden gözden geçirilir. Yine de tıp bilgisi sürekli geliştiği için bir sayfanın her an tam ve güncel olacağı taahhüt edilemez.</p>
          <p>Sitedeki bilgileri kendi durumunuza uygulamanız sonucunda ortaya çıkabilecek durumlardan sorumluluk üstlenilmez; muayene olmadan alınan kararların sorumluluğu kararı verene aittir. Muayeneyle başlayan hekim–hasta ilişkisinden doğan mesleki sorumluluk ise bu metinle daraltılamaz; genel hukuk kurallarına tabidir.</p>
          <p>Arıza, bakım çalışması ya da barındırma hizmetindeki bir kesinti yüzünden siteye ulaşılamaması hâlinde ortaya çıkan dolaylı zararlar için de sorumluluk üstlenilmez. Siteden dışarıya açılan bağlantılar yalnız konum haritası ve WhatsApp’tır; bu hizmetlerin içerikleri, çalışma biçimi ve veri politikaları ilgili şirketlerin sorumluluğundadır.</p>
          <p>Koşullar önceden haber verilmeden değiştirilebilir. Yürürlükteki metni daima bu sayfada bulursunuz; hangi sürümün yürürlükte olduğunu sayfadaki güncelleme tarihinden görebilirsiniz. Doğabilecek uyuşmazlıklarda Türk hukuku uygulanır; İstanbul mahkemeleri ile İstanbul icra daireleri yetkilidir.</p>
        </div>
      </div>

      <div class="g-bblk" id="ilgili-basliklar">
        <h2>Bağlantılı sayfalar</h2>
        <div class="izgara izgara--2">
          <a class="kart" href="${r}yasal/hasta-haklari/">
            <h3>Hasta hakları</h3>
            <p>Bilgi alma, onam, gizlilik ve şikâyet konusundaki haklarınız.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/kvkk-aydinlatma-metni/">
            <h3>KVKK aydınlatma metni</h3>
            <p>İşlenen kişisel verileriniz, işleme amaçları ve dayanılan hukuki sebepler.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">
            <h3>Bazı işlemleri neden üstlenmiyoruz</h3>
            <p>Muayenehanenin kapsamadığı işlemler ve başka bir uzmanlık alanına başvurmanızı önerdiğimiz hâller.</p>
            <span class="kart__ok">İncele ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}sikca-sorulan-sorular/">
            <h3>Soru ve yanıtlar</h3>
            <p>Muayene süreci, randevu ve işleyişe dair en çok sorulanlar.</p>
            <span class="kart__ok">İncele ${ik.ok}</span>
          </a>
        </div>
      </div>

      <div class="g-bblk">
        <h2>Aklınıza takılan bir madde varsa</h2>
        <p class="giris">Koşullardan birini daha ayrıntılı açıklamamızı isterseniz bize yazabilirsiniz.</p>
        <div class="dgm-sira">
          <a class="dgm dgm--bir" href="${r}iletisim/">İletişim</a>
        </div>
      </div>

    </div>
  </div>
</section>
`,
};
