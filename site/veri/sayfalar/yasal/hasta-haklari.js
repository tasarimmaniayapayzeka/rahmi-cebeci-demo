const S = require('../../site');

module.exports = {
  slug: 'yasal/hasta-haklari',
  tip: 'bilgi',
  baslik: 'Hasta Hakları — Bilgilendirme, Onam, Mahremiyet ve Başvuru',
  aciklama: 'Bilgi alma, onam, mahremiyet ve hekim seçimi gibi haklarınızın Hasta Hakları Yönetmeliği’ndeki karşılığı ve şikâyet için başvurabileceğiniz resmî kanallar.',

  icerik: (r, ik) => `

<!-- ═════════ BELGE HERO ═════════ -->
<section class="g-bhero">
  <div class="sar">
    <p class="g-etiket">Yasal</p>
    <h1>Hasta Hakları</h1>
    <p class="g-bhero__alt">Muayenehaneye başvuran her kişinin hakları, Anayasa’dan ve Hasta Hakları Yönetmeliği’nden güç alır. Hekim bu kurallara uymakla yükümlüdür; bunlar iyi niyete ya da kişisel takdire bırakılmış ayrıcalıklar sayılmaz. Aşağıda her hakkın burada nasıl karşılandığını ve bir sorun yaşarsanız kime, hangi yolla başvurabileceğinizi okuyabilirsiniz.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>Temel düzenleme: Hasta Hakları Yönetmeliği</span>
      <span><i></i>Sağlık Bakanlığı İletişim Merkezi: 184</span>
    </div>
  </div>
</section>

<!-- ═════════ BELGE GÖVDESİ ═════════ -->
<section class="g-belge">
  <div class="sar">

    <aside class="g-bmenu" aria-label="Sayfa içi başlıklar">
      <b>Bu sayfada</b>
      <a href="#dayanak-nedir">Hukuki çerçeve</a>
      <a href="#temel-haklariniz">Sekiz temel hak</a>
      <a href="#aydinlatilmis-onam">Onamın alınması</a>
      <a href="#hastanin-sorumluluklari">Sizden beklenenler</a>
      <a href="#basvuru-yollari">Şikâyet kanalları</a>
      <a href="#ilgili-basliklar">Bağlantılı sayfalar</a>
    </aside>

    <div class="g-bgov">

      <div class="g-bblk" id="dayanak-nedir">
        <h2>Haklarınızın hukuki çerçevesi</h2>
        <div class="yazi">
          <p>Hasta haklarının ana kaynağı, 1998’de yürürlüğe giren Hasta Hakları Yönetmeliği’dir. Yönetmelik kamu ya da özel ayrımı yapmaz; muayenehaneler de doğrudan kapsamındadır. Başka metinler de bağlayıcıdır: Türkiye’nin taraf olduğu Biyoloji ve Tıbbın Uygulanması Bakımından İnsan Hakları ve İnsan Haysiyetinin Korunması Sözleşmesi; hekimliğin nasıl icra edileceğini düzenleyen 1219 sayılı Tababet ve Şuabatı San'atlarının Tarzı İcrasına Dair Kanun; sağlık verilerinizi koruyan 6698 sayılı Kişisel Verilerin Korunması Kanunu; sağlık hizmetlerinin genel düzenini kuran 3359 sayılı Sağlık Hizmetleri Temel Kanunu.</p>
          <p>Burada yazılanlar yönetmelik metninin yerine geçmez. Amaç, haklarınızı kısaca tanıtmak ve muayenehanede gündelik olarak nasıl uygulandığını göstermektir.</p>
        </div>
      </div>

      <div class="g-bblk" id="temel-haklariniz">
        <h2>Sekiz temel hak ve buradaki karşılığı</h2>
        <p class="giris">Yönetmelikte sayılan başlıca hakları ve her birinin muayenehanede nasıl hayata geçtiğini kartlarda özetledik.</p>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalp}</span>
            <h3>Eşit ve hakkaniyete uygun hizmet</h3>
            <p>Cinsiyetiniz, ırkınız, inancınız, ana diliniz, siyasi düşünceniz ya da maddi ve sosyal koşullarınız hizmete erişiminizi kısıtlamaz. Kimin önce görüleceğini yalnız tıbbi aciliyet ile randevu saatleri belirler.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.liste}</span>
            <h3>Bilgi alma hakkı</h3>
            <p>Ne durumda olduğunuzu, size neden belirli bir planın önerildiğini, bu planın ne gibi etkiler doğurabileceğini, başka hangi yolların bulunduğunu ve hiçbir şey yapılmazsa ne olabileceğini öğrenmeye hakkınız vardır. Açıklama sizin anlayacağınız sözcüklerle yapılır; merak ettiğiniz her şeyi sorabilirsiniz.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.onay}</span>
            <h3>Onayınız olmadan işlem yapılmaz</h3>
            <p>Size gerekli açıklama yapılıp onayınız alınmadıkça tıbbi bir işleme başlanamaz. İmzalanan form bu sürecin yalnız son adımıdır; asıl onam, sorularınıza karşılık bulduğunuz konuşmada oluşur.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalkan}</span>
            <h3>Kabul etmeme ve vazgeçme</h3>
            <p>Size önerilen bir işleme hayır diyebilir, başlamış bir tedaviyi yarıda bırakabilirsiniz. Bu tercih sizi hizmetten yoksun bırakmaz; doğabilecek sonuçlar size açıklanır ve bu açıklama dosyanıza not edilir.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.mercek}</span>
            <h3>Gizlilik ve mahremiyet</h3>
            <p>Muayene kapalı bir odada, yalnız siz ve hekim varken yapılır. İzin vermediğiniz sürece sağlık bilgileriniz, aile üyeleriniz de dâhil olmak üzere hiç kimseye aktarılmaz. Hekimin bu bilgileri gizli tutma borcu siz hayatta olmasanız bile sürer.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.yaprak}</span>
            <h3>Hekim seçimi ve ikinci görüş</h3>
            <p>Kimden hizmet alacağınıza siz karar verirsiniz; dilerseniz başka bir hekimin görüşünü alabilir ya da tedavinizi başka bir hekimle sürdürebilirsiniz. Talep ettiğinizde dosyanızın bir kopyası size teslim edilir.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.damla}</span>
            <h3>Dosyanıza ulaşma</h3>
            <p>Sağlık kayıtlarınızı görebilir, kopyasını alabilir, yanlış ya da eksik gördüğünüz bir bilginin düzeltilmesini isteyebilirsiniz. Bu isteklerinizi yazılı olarak alır ve dosyanıza ekleriz.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.saat}</span>
            <h3>Güvenli ortam ve saygı</h3>
            <p>Hizmeti sağlığınızı tehlikeye atmayan bir ortamda ve size saygı gösterilerek almak hakkınızdır. Ne kadar bekleyeceğinizi öğrenmek ve özenle karşılanmak da bu hakkın parçasıdır.</p>
          </div>
        </div>
      </div>

      <div class="g-bblk" id="aydinlatilmis-onam">
        <h2>Onamınız nasıl alınır?</h2>
        <div class="yazi">
          <p>Girişimsel bir uygulama gündeme geldiğinde hep aynı adımlar izlenir. Hedef, imza almaktan çok kararı sizinle ortaklaşa vermektir.</p>
        </div>
        <ol class="adimlar">
          <li>
            <h4>Bulguların anlatılması</h4>
            <p>Muayenede görülenler ve yapıldıysa tahlil ya da görüntüleme sonuçları, tıp dili yerine gündelik Türkçeyle açıklanır.</p>
          </li>
          <li>
            <h4>Seçeneklerin tartılması</h4>
            <p>Size uygun olabilecek yollar tek tek konuşulur: her birinden ne beklenebileceği, hangi istenmeyen etkilerin görülebileceği ve hiç uygulama yapmamanın ne anlama geldiği.</p>
          </li>
          <li>
            <h4>Sorular ve düşünme payı</h4>
            <p>Açık kalan noktaları sorabilir, kararınızı sonraya bırakabilirsiniz. Görüşmenin yapıldığı gün yanıt vermeniz gerekmez.</p>
          </li>
          <li>
            <h4>Kararın yazıya geçirilmesi</h4>
            <p>Verdiğiniz karar yazılı bir onam formuyla belgelenir. Formu imzalamış olmanız, sonradan fikir değiştirmenize engel değildir.</p>
          </li>
        </ol>
        <div class="kutu kutu--bilgi">
          <b>Yanınızda biri olsun isterseniz</b>
          <p>Görüşmeye güvendiğiniz bir yakınınızla gelebilirsiniz. Türkçeyi rahat konuşamıyorsanız, açıklamaların size anlaşılır bir dilde ulaşması için birlikte yol ararız.</p>
        </div>
      </div>

      <div class="g-bblk" id="hastanin-sorumluluklari">
        <h2>Sizden beklenenler</h2>
        <div class="yazi">
          <p>Yönetmelik yalnız hakları değil, hastaya düşen bazı görevleri de sayar. Bu görevler bir formalite değildir; uygulamanın sizin için güvenli olmasını sağlar.</p>
          <ul>
            <li>Şikâyetinizi, geçmişteki rahatsızlıklarınızı ve bugüne kadar gördüğünüz her türlü reaksiyonu atlamadan aktarmak.</li>
            <li>Düzenli ya da ara sıra kullandığınız ilaçları, bitkisel ürün ve besin desteklerini de sayarak tam bir liste vermek.</li>
            <li>Hafif geçmiş olsa bile bilinen aşırı duyarlılıklarınızı söylemek.</li>
            <li>Gebe olduğunuzu, emzirdiğinizi ya da gebelik ihtimali bulunduğunu belirtmek.</li>
            <li>Birlikte kararlaştırılan plana uymak; uyamayacağınız bir nokta varsa bunu açıkça söylemek ve kontrol randevularını aksatmamak.</li>
            <li>Katılamayacağınız bir randevuyu vaktinden önce haber vermek.</li>
          </ul>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}hazirlik-listesi/">Muayeneye hazırlık listesi ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="basvuru-yollari">
        <h2>Şikâyet ve talepleriniz için kanallar</h2>
        <div class="yazi">
          <p>Haklarınızdan birine uyulmadığını düşünüyorsanız kullanabileceğiniz kanallar tanımlıdır. Bunlar yan yana işler; birine gitmiş olmanız ötekilerine başvurmanıza engel olmaz.</p>
        </div>
        <ul class="bilgi-liste">
          <li>${ik.posta}<div><b>Önce bize yazın</b>Şikâyet ya da talebinizi <a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a> adresine e-postayla veya muayenehane adresine yazılı olarak iletebilirsiniz. Her başvuru kayda alınır; yazılı yanıtımız otuz günü aşmadan size ulaşır.</div></li>
          <li>${ik.tel}<div><b>Sağlık Bakanlığı İletişim Merkezi</b>Aldığınız sağlık hizmetine dair şikâyet ve önerilerinizi <b>184</b> numarayı arayarak Bakanlığa bildirebilirsiniz.</div></li>
          <li>${ik.pin}<div><b>İl Sağlık Müdürlüğü</b>Muayenehaneyi denetleyen kurum İstanbul İl Sağlık Müdürlüğü’dür; müdürlük bünyesindeki hasta hakları birimine başvuru yapabilirsiniz.</div></li>
          <li>${ik.kalkan}<div><b>İstanbul Tabip Odası</b>Mesleki tutum ve uygulamalara ilişkin şikâyetlerinizi, hekimin kayıtlı olduğu tabip odasına iletebilirsiniz.</div></li>
          <li>${ik.liste}<div><b>Kişisel veri talepleri</b>Verilerinizle ilgili isteklerinizi ilk olarak veri sorumlusu sıfatıyla bize yöneltmeniz gerekir; yanıt alamaz ya da yanıtı yetersiz bulursanız Kişisel Verileri Koruma Kurulu’na başvurma yolunuz açıktır.</div></li>
        </ul>
        <div class="yazi">
          <p>Bu idari yollardan herhangi birini kullanmanız mahkemeye gitmenize engel değildir; hukuk ve ceza yargısına başvurma imkânınız her koşulda korunur.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}yasal/kvkk-aydinlatma-metni/">Verilerinizle ilgili başvuru ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="ilgili-basliklar">
        <h2>Bağlantılı sayfalar</h2>
        <div class="izgara izgara--2">
          <a class="kart" href="${r}yasal/kullanim-kosullari/">
            <h3>Kullanım koşulları</h3>
            <p>Sitedeki bilgilerin nerede bittiği ve hekimle aranızdaki ilişkinin başlangıç noktası.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/kvkk-aydinlatma-metni/">
            <h3>KVKK aydınlatma metni</h3>
            <p>Muayene kayıtlarındaki sağlık verilerinizin işlenme gerekçesi, saklama süresi ve bu verilere ilişkin haklarınız.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yaklasimimiz/">
            <h3>Yaklaşımımız</h3>
            <p>Her uygulamadan önce değerlendirme yapma ilkemizin ayrıntıları.</p>
            <span class="kart__ok">İncele ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}hekim/">
            <h3>Hekim</h3>
            <p>${S.hekim.tam} hakkında eğitim, uzmanlık ve sertifika bilgisi.</p>
            <span class="kart__ok">İncele ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/icerik-ve-gorsel-yayin-ilkelerimiz/">
            <h3>İçerik ve görsel yayın ilkelerimiz</h3>
            <p>Mahremiyetiniz için sitede bilerek yayımlamadığımız içerikler.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
        </div>
      </div>

      <div class="g-bblk">
        <h2>İletişim için</h2>
        <p class="giris">Haklarınızla ilgili bir sorunuzu ya da randevu talebinizi iletişim sayfası üzerinden bize ulaştırabilirsiniz.</p>
        <div class="dgm-sira">
          <a class="dgm dgm--bir" href="${r}iletisim/">İletişim</a>
        </div>
      </div>

    </div>
  </div>
</section>
`,
};
