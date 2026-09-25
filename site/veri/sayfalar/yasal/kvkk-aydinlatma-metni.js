const S = require('../../site');
/* ön bilgi asistanı canlıya alınınca (site.js → asistan.canli) aktarım metinleri değişir */
const ASIS = S.asistan || {};
const ASIS_CANLI = !!ASIS.canli;

module.exports = {
  slug: 'yasal/kvkk-aydinlatma-metni',
  tip: 'bilgi',
  baslik: 'KVKK Aydınlatma Metni — Kişisel Verilerin İşlenmesi',
  aciklama: 'Muayenehanede ve sitede kişisel verilerin hangi amaç ve hukuki sebeple işlendiği, kimlere aktarıldığı, saklama süreleri ve KVKK kapsamındaki haklarınız.',

  icerik: (r, ik) => `

<!-- ═════════ BELGE HERO ═════════ -->
<section class="g-bhero">
  <div class="sar">
    <p class="g-etiket">Mevzuat notu</p>
    <h1>KVKK Aydınlatma Metni</h1>
    <p class="g-bhero__alt">Muayenehaneye gelen hastalar ve bu siteyi gezen ziyaretçiler hakkında hangi bilgilerin tutulduğunu, bunların ne için ve hangi hukuki dayanakla kullanıldığını, kimlerle paylaşılabileceğini, ne zaman silindiğini ve bu konuda hangi haklara sahip olduğunuzu bu sayfada bulabilirsiniz. Metin, aydınlatma yükümlülüğü gereği 6698 sayılı Kişisel Verilerin Korunması Kanunu (m. 10) esas alınarak hazırlanmıştır. Sitede ziyaretçileri izleyen bir reklam pikseli, dışarıdan bağlanan bir analitik hizmeti ya da profil çıkaran bir yazılım bulunmaz.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>${ASIS_CANLI ? 'Yurt dışına aktarım yalnız asistanda, onayınızla' : 'Yurt dışına aktarım yapılmaz'}</span>
      <span><i></i>İzleme ve profil çıkarma yok</span>
    </div>
  </div>
</section>

<!-- ═════════ BELGE GÖVDESİ ═════════ -->
<section class="g-belge">
  <div class="sar">

    <aside class="g-bmenu" aria-label="Sayfa içi başlıklar">
      <b>Bu sayfada</b>
      <a href="#veri-sorumlusu">Sorumlu kişi</a>
      <a href="#islenen-veriler">Tutulan bilgiler</a>
      <a href="#erisim-kayitlari">Sunucu kayıtları</a>
      <a href="#site-araclari">Etkileşimli araçlar</a>
      <a href="#isleme-amaclari">Amaç ve dayanak</a>
      <a href="#veri-aktarimi">Paylaşım</a>
      <a href="#saklama-sureleri">Silinme zamanı</a>
      <a href="#haklariniz">Başvuru haklarınız</a>
      <a href="#ilgili-basliklar">Diğer yasal metinler</a>
    </aside>

    <div class="g-bgov">

      <div class="g-bblk" id="veri-sorumlusu">
        <h2>Verilerinizden kim sorumlu?</h2>
        <div class="yazi">
          <p>Kanunun uygulanmasında veri sorumlusu, muayenehaneyi işleten ve sorumlu tabip olarak görev yapan <b>${S.hekim.tam}</b>’dir (${S.hekim.dallar}). Muayenehane ${S.iletisim.adres}, ${S.iletisim.ilce} adresinde bulunur.</p>
          <p>Veri sorumlusu kavramı, verinin neden ve hangi yöntemle işleneceğini belirleyen, kayıt düzenini kuran ve işleten kişiyi anlatır. Bunun yanında muayenede hekime anlatılan her sağlık bilgisi bir meslek sırrıdır; 1219 sayılı Kanun ile Türk Ceza Kanunu’ndaki sır saklama hükümleri bu bilgiler için de geçerlidir.</p>
        </div>
        <ul class="bilgi-liste">
          <li>${ik.pin}<div><b>Adres</b>${S.iletisim.adres}<br>${S.iletisim.ilce}</div></li>
          <li>${ik.tel}<div><b>Telefon</b><a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a></div></li>
          <li>${ik.posta}<div><b>Başvuru e-postası</b><a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a></div></li>
        </ul>
      </div>

      <div class="g-bblk" id="islenen-veriler">
        <h2>Hakkınızda hangi bilgiler tutulur?</h2>
        <p class="giris">Tutulan bilgiler, bizimle hangi yoldan temas kurduğunuza bağlıdır. Yalnızca sayfaları gezen bir ziyaretçi ile muayeneye gelen bir hastanın kaydı aynı kapsamda olmaz.</p>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <h3>Kimlik ve iletişim bilgileri</h3>
            <p>Ad-soyad, doğum tarihi ve T.C. kimlik numarası; size geri dönebilmek için telefon numaranız ve e-posta adresiniz. Kimlik numarasını yalnızca hasta kaydını mevzuata uygun tutmak ve zorunlu bildirimleri yapabilmek için isteriz.</p>
          </div>
          <div class="kart kart--duz">
            <h3>Özel nitelikli sağlık bilgileri</h3>
            <p>Sizi muayenehaneye getiren şikâyet ve geçmiş öyküyle birlikte muayene bulguları, tanı ve uygulama planına dair notlar, düzenli kullandığınız ilaçlar, daha önce yaşadığınız aşırı duyarlılık tepkileri, istenen tetkiklerin sonuçları, yapılan işlemlerin kayıtları ve imzaladığınız onam formları.</p>
          </div>
          <div class="kart kart--duz">
            <h3>Fotoğraflar</h3>
            <p>Takip için fotoğraf çekilecekse bu önce size açıklanır ve onayınız alınır; onay yoksa fotoğraf çekilmez. Görüntüler hasta dosyanızın dışına çıkmaz; tanıtım, yayın ya da sosyal medya için kullanılmaz.</p>
          </div>
          <div class="kart kart--duz">
            <h3>Teknik güvenlik kayıtları</h3>
            <p>Siteyi barındıran sunucu, teknik bir zorunluluk olarak her ziyarette şunları kaydeder: IP adresi, ziyaretin tarih ve saati, açılan sayfanın adresi, sunucunun döndürdüğü durum kodu ve kullanılan tarayıcıya ait bilgi.</p>
          </div>
        </div>
      </div>

      <div class="g-bblk" id="erisim-kayitlari">
        <h2>Sunucunun tuttuğu kayıtlarda neler var?</h2>
        <div class="yazi">
          <p>Bu sitede sizi tanımaya, gezinmenizi takip etmeye veya tarayıcınızda iz bırakmaya yönelik bir yazılım yoktur. Buna karşın bir sayfa açıldığında, barındırma firmasının sunucusu tüm sitelerde olduğu gibi kısa bir teknik kayıt oluşturur. <b>IP adresiniz</b>, ziyaretin zamanı ve görüntülediğiniz sayfanın adresi bu kayda yazılır.</p>
          <p>Kayıtlar; sistemi güvende tutmak, hataları ve olası saldırıları fark etmek ve 5651 sayılı Kanun’un getirdiği yükümlülüklere uymak için işlenir. Dayanak, hukuki yükümlülüğün yerine getirilmesi (Kanun m. 5/2-ç) ve meşru menfaattir (Kanun m. 5/2-f). Bu kayıtlarla pazarlama yapılmaz, kişi profili oluşturulmaz, üçüncü taraflara verilmez.</p>
        </div>
      </div>

      <div class="g-bblk" id="site-araclari">
        <h2>Etkileşimli araçlar yanıtlarınızla ne yapar?</h2>
        <div class="yazi">
          <p>Hazırlık listesi, cilt eğilimi testi, bölge rehberi ve uygulama karşılaştırma sayfaları etkileşimlidir. Bu sayfalar, olabildiğince az veriyle çalışacak şekilde tasarlandı.</p>
        </div>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalkan}</span>
            <h3>Hesaplama cihazınızda yapılır</h3>
            <p>Seçtiğiniz maddeler ve yanıtlarınız tarayıcınızın içinde değerlendirilir; sunucuya iletilmez, bize ulaşmaz, hiçbir yerde kayıtlı kalmaz.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.mercek}</span>
            <h3>Cihazınızda iz kalmaz</h3>
            <p>Araçlar çerez, yerel depolama (localStorage) veya benzer bir yöntem kullanmaz. Sayfa kapandığında ya da yenilendiğinde yanıtlar bellekten silinir; bu nedenle yurt dışına aktarım (Kanun m. 9) da söz konusu olmaz.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.liste}</span>
            <h3>Sonucu siz saklarsınız</h3>
            <p>Hazırlık listesinin sonucunu muayeneye getirmek isterseniz yazıcıdan çıktı alabilir ya da ekran görüntüsünü kaydedebilirsiniz. Sonucu bize göndermenin ayrı bir yolu yoktur.</p>
          </div>
        </div>
        <div class="kutu kutu--bilgi">
          <b>Araçlar muayene değildir</b>
          <p>Bu sayfalar tanı koymaz, hastalık taraması yapmaz. Hangi uygulamanın size uyduğuna, muayenenizi yaptıktan sonra hekim karar verir.</p>
        </div>
      </div>

      <div class="g-bblk" id="asistan">
        <h2>Ön bilgi asistanına yazdıklarınız</h2>
        <div class="yazi">
          ${ASIS_CANLI ? `
          <p>Sayfaların köşesindeki ön bilgi asistanı yapay zekâ ile çalışır. Yazdığınız mesaj ve sohbetin son birkaç satırı, yanıt üretilebilmesi için ${ASIS.saglayici} şirketinin ${ASIS.saglayiciUlke}’deki sunucularına iletilir; bu bir yurt dışına aktarımdır (Kanun m. 9). Aktarım, ilk mesajınızdan önce asistan penceresinde verdiğiniz onaya dayanır. Onay vermezseniz asistan yalnız sitedeki hazır bilgilerle, cihazınızda çalışmaya devam eder.</p>
          <p>Muayenehane sohbet içeriğini kaydetmez ve saklamaz. Kötüye kullanımı sınırlamak için IP adresinizin kendisi değil, her gün değişen tek yönlü bir özeti en fazla iki gün tutulur. Sohbet, sayfa kapandığında tarayıcınızdan da silinir.</p>` : `
          <p>Sayfaların köşesindeki ön bilgi asistanı bu sürümde yalnız sitedeki hazır bilgilerle çalışır. Yazdığınız soru tarayıcınızın içinde değerlendirilir; sunucuya ya da üçüncü bir hizmete iletilmez, hiçbir yerde kayıtlı kalmaz ve sayfa kapandığında silinir.</p>`}
          <p>Asistan tanı koymaz, tedavi önermez ve muayenenin yerini tutmaz. Lütfen asistana sağlık durumunuzu ayrıntılı anlatan bilgiler, kimlik numarası, telefon ya da e-posta gibi kişisel veriler yazmayın; bunlar muayenede ya da <a href="${r}iletisim/">iletişim</a> kanallarından konuşulur.</p>
        </div>
      </div>

      <div class="g-bblk" id="isleme-amaclari">
        <h2>Bilgileriniz ne için ve hangi dayanakla kullanılır?</h2>
        <div class="yazi">
          <p>Sağlık bilgileriniz, sır saklama yükümlülüğü taşıyan hekim tarafından <b>Kanun m. 6/3</b> çerçevesinde işlenir. Amaç; tıbbî teşhis, tedavi ve bakım hizmetleri ile koruyucu hekimliği yürütmek, sağlık hizmetlerini planlayıp yönetmektir. Bu amaçlarla sınırlı işleme için sizden ayrıca açık rıza alınmaz.</p>
          <p>Randevunuzu ayarlamak, hasta kaydınızı oluşturmak ve kontrol ya da sonuç bilgisini size ulaştırmak için kimlik ve iletişim bilgileriniz kullanılır. Buradaki dayanaklar, hukuki yükümlülüğün yerine getirilmesi (Kanun m. 5/2-ç) ve işlemenin, aramızdaki sözleşmenin kurulması veya ifasıyla doğrudan ilgili olmasıdır (Kanun m. 5/2-c).</p>
          <p>İletişim formunu doldurursanız yazdıklarınız yalnızca talebinize dönüş yapmak için ve <b>açık rızanız</b> temel alınarak işlenir. Bu rızanın sınırlarını ve nasıl geri çekebileceğinizi ayrı bir sayfada açıkladık.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}yasal/acik-riza/">Açık rıza metnine git ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="veri-aktarimi">
        <h2>Bilgileriniz kimlerle paylaşılabilir?</h2>
        <div class="yazi">
          <p>Verileriniz hiçbir koşulda satılmaz, kiralanmaz, bir pazarlama listesine konmaz. Paylaşım yalnızca aşağıda sayılan durumlarla sınırlıdır ve amacın gerektirdiğinden fazla bilgi verilmez:</p>
          <ul>
            <li>Mevzuatın öngördüğü bildirimler için <b>T.C. Sağlık Bakanlığı</b>’na ve yetkili diğer kamu kurumlarına,</li>
            <li>Sizin isteğinizle sevk edildiğiniz ya da görüşüne başvurulan hekime veya sağlık kuruluşuna,</li>
            <li>Bir tetkik gerekirse, yalnızca o tetkikin gerektirdiği bilgilerle sınırlı olmak üzere tetkiki yapacak kuruluşa,</li>
            <li>Hukuken geçerli bir istem bulunduğunda mahkemelere ve idari makamlara,</li>
            <li>Vergi mevzuatının zorunlu kıldığı belgelerin düzenlenmesi için mali müşavire.</li>
          </ul>
          <p><b>Muayenehane yurt dışına veri aktarmaz.</b> Hasta dosyanız ve muayene notlarınız Türkiye dışına gönderilmez; sitedeki etkileşimli araçlar da yanıtlarınızı cihazınızın dışına taşımaz.${ASIS_CANLI ? ` Tek istisna, onay verdiğinizde ön bilgi asistanına yazdığınız mesajlardır (bkz. <a href="#asistan">ön bilgi asistanı</a>).` : ''}</p>
          <p>Sitede iki dış hizmet kullanılır. Konum haritası Google’ın sağladığı gömülü bir içeriktir; haritalı sayfayı açtığınızda tarayıcınız Google sunucularıyla doğrudan bağlantı kurar ve IP adresi gibi teknik bilgiler Google’ın gizlilik politikasına tabi olur. WhatsApp bağlantısıyla yazmayı tercih ederseniz yazışmanız WhatsApp’ın koşullarına göre yürür. Her iki hizmetin sağlayıcısı da yurt dışındadır. Sağlık durumunuzla ilgili ayrıntıları bu yollarla yazmak yerine muayenede anlatmanızı öneririz.</p>
        </div>
      </div>

      <div class="g-bblk" id="saklama-sureleri">
        <h2>Bilgiler ne zaman silinir?</h2>
        <div class="yazi">
          <p>Kişisel Sağlık Verileri Hakkında Yönetmelik ve diğer sağlık mevzuatı, hasta dosyaları ile sağlık kayıtları için asgari bir saklama süresi belirler; kayıtlar bu süre boyunca korunur. Süre dolunca silinir, yok edilir veya anonimleştirilir.</p>
          <p>İletişim formuyla gelen bilgiler, talebiniz yanıtlandıktan kısa ve makul bir süre sonra silinir; rıza geri çekildiğinde ise silme beklenmeden yapılır. Sunucu kayıtları mevzuatın öngördüğü süre kadar tutulur, sürenin bitiminde kendiliğinden silinir.</p>
        </div>
      </div>

      <div class="g-bblk" id="haklariniz">
        <h2>Kişisel verilerinizle ilgili haklarınız</h2>
        <div class="yazi">
          <p>6698 sayılı Kanun’un 11. maddesi uyarınca, veri sorumlusuna başvurarak şunları isteyebilirsiniz:</p>
          <ul>
            <li>Hakkınızda kişisel veri işlenip işlenmediğini öğrenmek,</li>
            <li>Veri işlendiyse bununla ilgili bilgi istemek,</li>
            <li>Verilerin hangi amaçla işlendiğini ve bu amaca uygun kullanılıp kullanılmadığını öğrenmek,</li>
            <li>Verilerin Türkiye içinde ya da dışında aktarıldığı üçüncü kişilerin kimler olduğunu bilmek,</li>
            <li>Eksik ya da hatalı işlenen verilerin düzeltilmesini istemek,</li>
            <li>Kanun’un 7. maddesindeki koşullar oluştuğunda verilerin silinmesini veya yok edilmesini istemek,</li>
            <li>Yapılan düzeltme, silme ya da yok etme işlemlerinin, verilerin aktarıldığı üçüncü kişilere de bildirilmesini istemek,</li>
            <li>Verilerin yalnızca otomatik sistemlerle analiz edilmesi sonucunda aleyhinize bir sonuç çıkmasına itiraz etmek,</li>
            <li>Verilerin Kanun’a aykırı işlenmesi nedeniyle zarar gördüyseniz bu zararın giderilmesini istemek.</li>
          </ul>
          <p>Başvurunun, kimliğinizi doğrulamaya yetecek bilgilerle birlikte ve Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ’deki usule uygun olarak yapılması gerekir. Başvurunuzu muayenehane adresine yazılı olarak gönderebilir ya da daha önce bize bildirdiğiniz, kayıtlarımızda yer alan e-posta adresinizden <a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a> adresine yazabilirsiniz. Talepler <b>otuz gün</b> aşılmadan yanıtlanır. Başvurunuz reddedilirse ya da bu süre dolduğu hâlde yanıt alamazsanız, şikâyetinizi Kişisel Verileri Koruma Kurulu önüne götürebilirsiniz.</p>
          <p>Bu metin gerektiğinde güncellenir. Geçerli metin daima bu sayfada yayımlanır; en son hangi tarihte değiştiğini yukarıdaki güncelleme tarihinden izleyebilirsiniz.</p>
        </div>
      </div>

      <div class="g-bblk" id="ilgili-basliklar">
        <h2>İlgili diğer sayfalar</h2>
        <div class="izgara izgara--2">
          <a class="kart" href="${r}yasal/acik-riza/">
            <h3>Açık rıza metni</h3>
            <p>Formda rızanıza dayanarak işlenen bilgiler ve rızanızı geri çekmenin yolu.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/cerez-politikasi/">
            <h3>Çerez politikası</h3>
            <p>Çereze ve yerel depolamaya neden ihtiyaç duymadığımız; harita ile WhatsApp bağlantısının nasıl çalıştığı.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/hasta-haklari/">
            <h3>Hasta hakları</h3>
            <p>Bilgi alma, onam, mahremiyet ve başvuru yollarınız.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/icerik-ve-gorsel-yayin-ilkelerimiz/">
            <h3>Yayın ve görsel kullanım esaslarımız</h3>
            <p>Sitede neden öncesi–sonrası fotoğrafına ve hasta yorumuna yer vermediğimiz.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yaklasimimiz/">
            <h3>Randevudan kontrole</h3>
            <p>Her uygulamadan önce değerlendirme yapma ilkesinin muayenehanede nasıl işlediği.</p>
            <span class="kart__ok">İncele ${ik.ok}</span>
          </a>
        </div>
      </div>

      <div class="g-bblk">
        <h2>Aklınızda soru mu kaldı?</h2>
        <p class="giris">Verilerinizle ilgili taleplerinizi yazılı olarak iletebilirsiniz; randevu için iletişim sayfasındaki yolları kullanabilirsiniz.</p>
        <div class="dgm-sira">
          <a class="dgm dgm--bir" href="${r}iletisim/">İletişim</a>
        </div>
      </div>

    </div>
  </div>
</section>
`,
};
