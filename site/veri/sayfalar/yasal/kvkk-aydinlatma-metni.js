const S = require('../../site');

module.exports = {
  slug: 'yasal/kvkk-aydinlatma-metni',
  tip: 'bilgi',
  baslik: 'KVKK Aydınlatma Metni — Kişisel Verilerin İşlenmesi',
  aciklama: 'Muayenehanede ve sitede kişisel verilerin hangi amaç ve hukuki sebeple işlendiği, kimlere aktarıldığı, saklama süreleri ve KVKK kapsamındaki haklarınız.',

  icerik: (r, ik) => `

<!-- ═════════ BELGE HERO ═════════ -->
<section class="g-bhero">
  <div class="sar">
    <p class="g-etiket">Yasal</p>
    <h1>KVKK Aydınlatma Metni</h1>
    <p class="g-bhero__alt">6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 10. maddesindeki aydınlatma yükümlülüğü kapsamında hazırlanan bu metin; muayenehaneye başvuran hastalar ile internet sitesini ziyaret edenlere ait kişisel verilerin hangi amaçlarla ve hangi hukuki sebeplere dayanılarak işlendiğini, kimlere aktarılabileceğini, ne kadar süre saklandığını ve ilgili kişi olarak sahip olduğunuz hakları anlatır. Sitede reklam pikseli, üçüncü taraf analitik aracı ya da profilleme yazılımı yer almaz.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>Muayenehane yurt dışına veri aktarmaz</span>
      <span><i></i>Reklam pikseli ve profilleme yok</span>
    </div>
  </div>
</section>

<!-- ═════════ BELGE GÖVDESİ ═════════ -->
<section class="g-belge">
  <div class="sar">

    <aside class="g-bmenu" aria-label="Sayfa içi başlıklar">
      <b>Bu sayfada</b>
      <a href="#veri-sorumlusu">Veri sorumlusu</a>
      <a href="#islenen-veriler">İşlenen veriler</a>
      <a href="#erisim-kayitlari">Erişim kayıtları</a>
      <a href="#site-araclari">Site araçları</a>
      <a href="#isleme-amaclari">İşleme amaçları</a>
      <a href="#veri-aktarimi">Veri aktarımı</a>
      <a href="#saklama-sureleri">Saklama süreleri</a>
      <a href="#haklariniz">Haklarınız</a>
      <a href="#ilgili-basliklar">İlgili başlıklar</a>
    </aside>

    <div class="g-bgov">

      <div class="g-bblk" id="veri-sorumlusu">
        <h2>Veri sorumlusu kimdir?</h2>
        <div class="yazi">
          <p>6698 sayılı Kanun bakımından veri sorumlusu, muayenehanenin sahibi ve sorumlu tabibi sıfatıyla <b>${S.hekim.tam}</b> (${S.hekim.dallar}) olup muayenehane ${S.iletisim.adres}, ${S.iletisim.ilce} adresinde hizmet vermektedir.</p>
          <p>Veri sorumlusu; kişisel verilerin hangi amaçla ve hangi araçlarla işleneceğine karar veren, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan gerçek kişidir. Muayene sırasında öğrenilen sağlık bilgileri ayrıca 1219 sayılı Kanun ile Türk Ceza Kanunu’nun sır saklamaya ilişkin hükümleri gereğince hekimin meslek sırrı yükümlülüğü altındadır.</p>
        </div>
        <ul class="bilgi-liste">
          <li>${ik.pin}<div><b>Adres</b>${S.iletisim.adres}<br>${S.iletisim.ilce}</div></li>
          <li>${ik.tel}<div><b>Telefon</b><a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a></div></li>
          <li>${ik.posta}<div><b>Başvuru e-postası</b><a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a></div></li>
        </ul>
      </div>

      <div class="g-bblk" id="islenen-veriler">
        <h2>Hangi kişisel verileri işliyoruz?</h2>
        <p class="giris">İşlenen veri türleri, sizinle kurulan ilişkinin niteliğine göre değişir. Siteyi yalnızca ziyaret eden bir kişiden ve muayene olan bir hastadan aynı bilgiler alınmaz.</p>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <h3>Kimlik ve iletişim verileri</h3>
            <p>Adınız ve soyadınız, doğum tarihiniz, T.C. kimlik numaranız ile size ulaşabilmemiz için telefon ve e-posta bilgileriniz. Kimlik numarası; hasta kaydının mevzuata uygun biçimde tutulması ve yasal bildirimlerin yapılabilmesi dışında bir amaçla istenmez.</p>
          </div>
          <div class="kart kart--duz">
            <h3>Sağlık verileri (özel nitelikli)</h3>
            <p>Başvuru nedeniniz ve öykünüz, muayene bulguları, tanı ve uygulama planı kayıtları, kullandığınız ilaçlar, bilinen aşırı duyarlılık ve reaksiyon öyküsü, istenen tetkiklerin sonuçları, yapılan işlemlere ait kayıtlar ve imzaladığınız aydınlatılmış onam belgeleri.</p>
          </div>
          <div class="kart kart--duz">
            <h3>Görsel kayıtlar</h3>
            <p>Klinik takip amacıyla fotoğraf çekilmesi, ancak bu konuda ayrıca bilgilendirilmeniz ve onay vermeniz hâlinde mümkündür. Çekilen görüntüler yalnızca hasta dosyanızda saklanır; tanıtımda, yayında veya sosyal medyada kullanılmaz.</p>
          </div>
          <div class="kart kart--duz">
            <h3>İşlem güvenliği verileri</h3>
            <p>Sitenin barındırıldığı sunucu, teknik zorunluluk gereği erişim kaydı tutar: IP adresi, erişim tarihi ve saati, istenen sayfa adresi, sunucunun yanıt kodu ve tarayıcı bilgisi.</p>
          </div>
        </div>
      </div>

      <div class="g-bblk" id="erisim-kayitlari">
        <h2>Sunucu erişim kayıtları ne içerir?</h2>
        <div class="yazi">
          <p>Sitede sizi tanıyan, davranışınızı izleyen ya da tarayıcınıza kayıt bırakan bir yazılım çalışmaz. Yine de her internet sitesinde olduğu gibi, bir sayfayı açtığınızda barındırma hizmeti sağlayıcısının sunucusu teknik bir kayıt üretir; bu kayıtta <b>IP adresiniz</b>, erişim zamanı ve açtığınız sayfanın adresi bulunur.</p>
          <p>Bu kayıtlar; sistem güvenliğini sağlamak, hata ve saldırıları tespit etmek ve 5651 sayılı Kanun’dan doğan yükümlülükleri yerine getirmek amacıyla işlenir. Hukuki sebepleri Kanun’un 5/2-ç maddesi (hukuki yükümlülük) ile 5/2-f maddesidir (meşru menfaat). Kayıtlar pazarlamada kullanılmaz, kişi profili çıkarmak için işlenmez ve üçüncü taraflarla paylaşılmaz.</p>
        </div>
      </div>

      <div class="g-bblk" id="site-araclari">
        <h2>Sitedeki etkileşimli araçlar verinizi nasıl kullanıyor?</h2>
        <div class="yazi">
          <p>Sitede hazırlık listesi, cilt tipi testi, bölge pusulası ve uygulama karşılaştırma gibi etkileşimli sayfalar bulunur. Bu sayfalar, veri işlemeyi en aza indirecek biçimde kurgulanmıştır.</p>
        </div>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalkan}</span>
            <h3>Yanıtlar cihazınızdan çıkmaz</h3>
            <p>İşaretlediğiniz maddeler ve verdiğiniz yanıtlar yalnızca tarayıcınızın içinde değerlendirilir. Sunucuya gönderilmez, tarafımıza ulaşmaz ve herhangi bir yerde saklanmaz.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.mercek}</span>
            <h3>Tarayıcıya kayıt yazılmaz</h3>
            <p>Araçlar çerez, yerel depolama (localStorage) ya da benzeri bir yöntemle cihazınıza kayıt bırakmaz. Sayfayı kapattığınızda veya yenilediğinizde yanıtlar bellekten silinir; Kanun’un 9. maddesi anlamında bir yurt dışına aktarım da gerçekleşmez.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.liste}</span>
            <h3>Çıktı sizin elinizde</h3>
            <p>Hazırlık listesinin sonucunu görüşmenize getirmek isterseniz yazdırabilir ya da ekran görüntüsü alabilirsiniz. Sonucu bize iletmek için ayrı bir gönderim yolu sunulmaz.</p>
          </div>
        </div>
        <div class="kutu kutu--bilgi">
          <b>Bu araçlar tıbbi değerlendirme yerine geçmez</b>
          <p>Araçlar tanı koymaz, hastalık taraması yapmaz ve muayenenin yerini tutmaz. Bir uygulamanın sizin için uygun olup olmadığına ancak muayeneden sonra hekim karar verir.</p>
        </div>
      </div>

      <div class="g-bblk" id="isleme-amaclari">
        <h2>Veriler hangi amaçla ve hangi hukuki sebeple işleniyor?</h2>
        <div class="yazi">
          <p>Sağlık verileriniz; koruyucu hekimlik, tıbbî teşhis, tedavi ve bakım hizmetlerinin yürütülmesi ile sağlık hizmetlerinin planlanması ve yönetimi amacıyla, sır saklama yükümlülüğü altındaki hekim tarafından <b>Kanun’un 6/3. maddesi</b> kapsamında işlenir. Bu amaçlarla yapılan işleme için ayrıca açık rızanız istenmez.</p>
          <p>Kimlik ve iletişim verileriniz; randevu oluşturmak, hasta kaydını tutmak, kontrol ve sonuç bilgisini size iletmek amacıyla Kanun’un 5/2-ç maddesi (hukuki yükümlülük) ile 5/2-c maddesi (sözleşmenin kurulması ve ifası) çerçevesinde işlenir.</p>
          <p>Sitedeki iletişim formunu kullanırsanız, formda paylaştığınız bilgiler yalnızca talebinize yanıt verilebilmesi için ve <b>açık rızanıza</b> dayanılarak işlenir. Bu rızanın neyi kapsadığı ve nasıl geri alınacağı ayrı bir metinde anlatılmıştır.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}yasal/acik-riza/">Açık rıza metni ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="veri-aktarimi">
        <h2>Veriler kimlere aktarılabilir?</h2>
        <div class="yazi">
          <p>Kişisel verileriniz satılmaz, kiraya verilmez ve herhangi bir pazarlama listesine eklenmez. Aktarım yalnızca aşağıdaki sınırlı durumlarda ve amacın gerektirdiği ölçüde yapılır:</p>
          <ul>
            <li>Mevzuattan kaynaklanan bildirim yükümlülükleri çerçevesinde <b>T.C. Sağlık Bakanlığı</b> ile yetkili kamu kurum ve kuruluşlarına,</li>
            <li>Talebiniz üzerine sevk veya konsültasyon için başvurduğunuz hekime ya da sağlık kuruluşuna,</li>
            <li>Tetkik gerekmesi hâlinde, tetkiki yapacak sağlık kuruluşuna ve yalnızca o tetkik için gereken bilgilerle sınırlı olarak,</li>
            <li>Hukuken geçerli bir talep bulunduğunda yargı mercileri ile idari makamlara,</li>
            <li>Mali mevzuat uyarınca belge düzenlenmesi için mali müşavire.</li>
          </ul>
          <p><b>Muayenehane tarafından yurt dışına veri aktarımı yapılmaz.</b> Hasta dosyanız ve muayene kayıtlarınız yurt dışına gönderilmez; sitedeki etkileşimli araçlar da verinizi cihazınızdan dışarı çıkarmaz.</p>
          <p>Sitede iki üçüncü taraf hizmete yer verilir. Konum haritası Google tarafından sunulan gömülü bir içeriktir; haritanın bulunduğu sayfa açıldığında tarayıcınız doğrudan Google sunucularına bağlanır ve IP adresi gibi teknik veriler Google’ın kendi gizlilik politikasına göre işlenir. WhatsApp bağlantısını kullanarak yazmayı seçerseniz yazışma, WhatsApp’ın kendi koşullarına tabi olur. Bu hizmetlerin işletmecileri yurt dışında yerleşiktir; bu nedenle sağlık durumunuza ilişkin ayrıntıları mesajla değil, muayenede paylaşmanızı rica ederiz.</p>
        </div>
      </div>

      <div class="g-bblk" id="saklama-sureleri">
        <h2>Ne kadar süreyle saklanıyor?</h2>
        <div class="yazi">
          <p>Hasta dosyaları ve sağlık kayıtları, Kişisel Sağlık Verileri Hakkında Yönetmelik ve ilgili sağlık mevzuatında öngörülen asgari süre boyunca saklanır. Bu süre dolduğunda kayıtlar silinir, yok edilir ya da anonim hâle getirilir.</p>
          <p>İletişim formundan gelen bilgiler, talebiniz sonuçlandıktan sonra makul bir süre içinde; rızanızı geri almanız durumunda ise beklemeksizin silinir. Sunucu erişim kayıtları mevzuatta öngörülen süre boyunca tutulur ve bu sürenin sonunda otomatik olarak silinir.</p>
        </div>
      </div>

      <div class="g-bblk" id="haklariniz">
        <h2>6698 sayılı Kanun’un 11. maddesi kapsamındaki haklarınız</h2>
        <div class="yazi">
          <p>İlgili kişi olarak veri sorumlusuna başvurup aşağıdaki taleplerde bulunabilirsiniz:</p>
          <ul>
            <li>Kişisel verinizin işlenip işlenmediğini öğrenme,</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında verinin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
            <li>Kanun’un 7. maddesindeki şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
            <li>Düzeltme, silme ve yok etme işlemlerinin verinin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li>Münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonuç doğmasına itiraz etme,</li>
            <li>Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
          </ul>
          <p>Başvurunuzu, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ’de öngörülen biçimde ve kimliğinizi doğrulayan bilgilerle birlikte; muayenehane adresine yazılı olarak ya da daha önce bildirdiğiniz ve kayıtlarımızda bulunan e-posta adresinizden <a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a> adresine gönderebilirsiniz. Başvurular en geç <b>otuz gün</b> içinde sonuçlandırılır. Başvurunuz reddedilir ya da süresi içinde yanıtlanmazsa Kişisel Verileri Koruma Kurulu’na şikâyette bulunma hakkınız saklıdır.</p>
          <p>Bu aydınlatma metni zaman zaman güncellenebilir. Geçerli sürüm her zaman bu sayfada yer alır; hangi sürümün yürürlükte olduğunu sayfadaki güncelleme tarihinden görebilirsiniz.</p>
        </div>
      </div>

      <div class="g-bblk" id="ilgili-basliklar">
        <h2>Bunları da okuyabilirsiniz</h2>
        <div class="izgara izgara--2">
          <a class="kart" href="${r}yasal/acik-riza/">
            <h3>Açık rıza metni</h3>
            <p>İletişim formunda rızaya dayanan bilgilerin neler olduğu ve rızanın geri alınma yolu.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/cerez-politikasi/">
            <h3>Çerez politikası</h3>
            <p>Sitenin neden çerez ve yerel depolama kullanmadığı; harita ve WhatsApp bağlantısının işleyişi.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/hasta-haklari/">
            <h3>Hasta hakları</h3>
            <p>Bilgilendirilme, onam, mahremiyet ve başvuru haklarınız.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/icerik-ve-gorsel-yayin-ilkelerimiz/">
            <h3>İçerik ve görsel yayın ilkelerimiz</h3>
            <p>Öncesi–sonrası görseli ve hasta yorumu yayımlamayışımızın gerekçeleri.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yaklasimimiz/">
            <h3>Yaklaşımımız</h3>
            <p>Uygulamadan önce değerlendirme ilkesinin muayenehanedeki karşılığı.</p>
            <span class="kart__ok">İncele ${ik.ok}</span>
          </a>
        </div>
      </div>

      <div class="g-bblk">
        <h2>Aklınıza takılan bir nokta mı var?</h2>
        <p class="giris">Kişisel verilerinize ilişkin taleplerinizi yazılı olarak iletebilir, randevu için bizimle iletişime geçebilirsiniz.</p>
        <div class="dgm-sira">
          <a class="dgm dgm--bir" href="${r}iletisim/">İletişim</a>
        </div>
      </div>

    </div>
  </div>
</section>
`,
};
