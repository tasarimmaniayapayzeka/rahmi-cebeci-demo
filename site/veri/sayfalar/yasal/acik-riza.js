const S = require('../../site');

module.exports = {
  slug: 'yasal/acik-riza',
  tip: 'bilgi',
  baslik: 'Açık Rıza Metni — İletişim Formu ve Rızanın Geri Alınması',
  aciklama: 'Sitedeki iletişim formuyla hangi bilgilerin açık rızanıza dayanılarak işlendiği, rızanın neleri kapsamadığı ve rızanızı her an nasıl geri alabileceğiniz.',

  icerik: (r, ik) => `

<!-- ═════════ BELGE HERO ═════════ -->
<section class="g-bhero">
  <div class="sar">
    <p class="g-etiket">Mevzuat notu</p>
    <h1>Açık Rıza Metni</h1>
    <p class="g-bhero__alt">Buradaki rıza, sitedeki iletişim formuyla sınırlıdır. Formu gönderdiğinizde paylaştığınız ad ve iletişim bilgisi, seçtiğiniz konu ve mesajınız size geri dönebilmemiz dışında hiçbir amaçla kullanılmaz; bu işlemenin hukuki dayanağı açık rızanızdır (6698 sayılı Kanun, m. 5/1). Rıza vermek zorunda değilsiniz; isterseniz telefonla aramanız da mümkündür.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>Kapsam: yalnız iletişim formu</span>
      <span><i></i>Rıza tamamen size bağlıdır</span>
    </div>
  </div>
</section>

<!-- ═════════ BELGE GÖVDESİ ═════════ -->
<section class="g-belge">
  <div class="sar">

    <aside class="g-bmenu" aria-label="Sayfa içi başlıklar">
      <b>Bu sayfada</b>
      <a href="#acik-riza-nedir">Tanım ve gerekçe</a>
      <a href="#rizanin-kapsami">Neleri kapsar?</a>
      <a href="#kapsamda-olmayanlar">Neleri kapsamaz?</a>
      <a href="#riza-zorunlu-mu">Zorunlu mu?</a>
      <a href="#rizayi-geri-alma">Geri çekme</a>
      <a href="#ilgili-basliklar">Diğer yasal metinler</a>
    </aside>

    <div class="g-bgov">

      <div class="g-bblk" id="acik-riza-nedir">
        <h2>Açık rıza nedir, neden yalnız formda gerekir?</h2>
        <div class="yazi">
          <p>Kanun’a göre açık rıza, “belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rıza” demektir. Başka bir deyişle rızanın geçerli olabilmesi için neye onay verildiği net olmalı, onaydan önce bilgi verilmiş olmalı ve kişi hiçbir baskı altında kalmadan karar vermiş olmalıdır.</p>
          <p>Muayenehanede yapılan veri işlemenin çoğunda dayanak açık rıza değildir. Muayenede öğrenilen sağlık bilgilerini, sır saklama yükümlülüğü taşıyan hekim Kanun m. 6/3 çerçevesinde işler; amaç tıbbî teşhis, tedavi ve bakım hizmetleri ile koruyucu hekimliğin sunulmasıdır. Hasta kaydı tutmak da mevzuattan doğan bir görevdir. Dayanakları farklı olduğu için bu işlemlerde sizden ayrıca rıza istenmez.</p>
          <p>Form ise hiçbir yasal yükümlülüğe bağlı olmayan, kullanıp kullanmamanın tümüyle size kaldığı bir iletişim kanalıdır. Formu doldurmadığınız sürece bu yoldan hakkınızda bir kayıt oluşmaz; formun tek dayanağının açık rıza olması bundandır.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}yasal/kvkk-aydinlatma-metni/">KVKK aydınlatma metnine git ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="rizanin-kapsami">
        <h2>Rızanız neleri kapsar?</h2>
        <p class="giris">Kapsamı bilerek dar tuttuk. Aşağıda sayılmayan hiçbir bilgi formdan alınmaz ve işlenmez.</p>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <h3>Formdan alınan bilgiler</h3>
            <p>Ad-soyad, telefon numarası, dilerseniz e-posta adresi, seçtiğiniz konu ve mesaj kutusuna yazdığınız metin. Formun kötüye kullanılmasını önlemek amacıyla gönderimin tarihi, saati ve IP adresi de talebe eklenir. Formda başka bir alan bulunmaz.</p>
          </div>
          <div class="kart kart--duz">
            <h3>Kullanım amacı</h3>
            <p>Mesajınızı okumak, randevu takviminde size uyan bir zaman bulmak ve sizinle iletişime geçmek. Bilgiler bunun dışında bir amaçla kullanılmaz.</p>
          </div>
          <div class="kart kart--duz">
            <h3>Erişim</h3>
            <p>Bilgileri yalnız muayenehanenin sahibi ve sorumlu tabibi ${S.hekim.tam} ile randevuları düzenleyen muayenehane çalışanı görebilir. Hiçbir üçüncü kişiyle paylaşılmaz, Türkiye dışına çıkarılmaz.</p>
          </div>
          <div class="kart kart--duz">
            <h3>Silinme</h3>
            <p>Talebiniz sonuçlanınca, makul bir süre geçmeden silinir. Talep randevuyla sonuçlanırsa gerekli bilgiler hasta kaydınıza geçer; bundan sonra o kaydın saklama kuralları uygulanır.</p>
          </div>
        </div>
      </div>

      <div class="g-bblk" id="kapsamda-olmayanlar">
        <h2>Rızanızın dışında kalan işlemler</h2>
        <div class="yazi">
          <p>Bu sayfadaki rıza, aşağıdaki işlemlerin hiçbirine izin vermez; form bilgileri bu amaçlarla kullanılmaz:</p>
          <ul>
            <li>Tanıtım, duyuru veya toplu ileti gönderimi. Formdaki iletişim bilgilerinize pazarlama mesajı yollanmaz, bu bilgilerle ticari elektronik ileti listesi kurulmaz.</li>
            <li>Bilgilerin başka bir kişiye, iş ortağına ya da reklam ajansına verilmesi.</li>
            <li>Yurt dışına aktarım. Form bilgilerinin yurt dışındaki herhangi bir alıcıya gönderilmesi bu rızaya dâhil değildir.</li>
            <li>Profilleme ve otomatik karar. Mesajlar bir yazılıma değerlendirtilmez, hakkınızda otomatik sonuç üretilmez; her mesajı bir kişi okur.</li>
            <li>Formla sağlık verisi toplanması. Form bu iş için tasarlanmadı.</li>
          </ul>
        </div>
        <div class="kutu kutu--uyari">
          <b>Mesajınıza sağlık bilgisi eklemeyin</b>
          <p>Şikâyetinizin ayrıntılarını, ilaçlarınızı, tanılarınızı ya da tetkik sonuçlarınızı formda paylaşmayın. Bunlar özel nitelikli kişisel verilerdir ve muayenede hekimle yüz yüze konuşulur. Forma, randevu için uygun olduğunuz gün ve saat gibi kısa bir not yazmanız yeterlidir.</p>
        </div>
      </div>

      <div class="g-bblk" id="riza-zorunlu-mu">
        <h2>Formu kullanmak zorunlu mu?</h2>
        <div class="yazi">
          <p>Zorunlu değil. Rızanın hukuken hüküm doğurması için kişinin özgürce karar vermesi gerekir; bir hizmete erişim şartına bağlanan rıza hukuken geçerli kabul edilmez. Formu kullanmamanız, muayenehaneden hizmet almanıza hiçbir şekilde engel olmaz.</p>
          <p>Randevu için doğrudan telefon edebilirsiniz. Telefonda da randevunun gerektirdiğinden fazla bilgi kaydedilmez.</p>
        </div>
        <ul class="bilgi-liste">
          <li>${ik.tel}<div><b>Telefon</b><a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a></div></li>
          <li>${ik.saat}<div><b>Çalışma saatleri</b>${S.iletisim.saatler.map(([g, s]) => `${g}: ${s}`).join('<br>')}</div></li>
        </ul>
      </div>

      <div class="g-bblk" id="rizayi-geri-alma">
        <h2>Rızanızı geri çekmek istediğinizde</h2>
        <div class="yazi">
          <p>Rızanızı istediğiniz an ve gerekçe belirtmeden geri çekebilirsiniz. Bunun için <a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a> adresine yazmanız ya da muayenehaneye yazılı bir talep ulaştırmanız yeterlidir.</p>
        </div>
        <ol class="adimlar">
          <li>
            <h4>Bize yazın</h4>
            <p>“Form için verdiğim rızayı geri çekiyorum” cümlesiyle birlikte formda kullandığınız adı ve iletişim bilgisini yazmanız, kaydınızı bulmamız için yeterlidir.</p>
          </li>
          <li>
            <h4>Kaydınız silinir</h4>
            <p>Talep elimize ulaştığı anda formdan gelen kayıt bekletilmeden silinir; yedeklerde kopyası bulunuyorsa o da kaldırılır.</p>
          </li>
          <li>
            <h4>Yazılı olarak yanıtlanır</h4>
            <p>Silme işleminin tamamlandığı, mevzuattaki otuz günlük süre içinde size bildirilir.</p>
          </li>
        </ol>
        <div class="yazi">
          <p>Geri çekme yalnızca ileriye dönük etki doğurur. Rızanızı geri çektiğiniz tarihe kadar hukuka uygun olarak yapılmış işlemler geçerliliğini korur; o tarihten sonra ise form bilgileriniz artık işlenmez.</p>
          <p>Bir noktayı özellikle belirtelim: muayene olduysanız, rızanızı geri çekmeniz bu muayeneye ait tıbbi kayıtları sildirmez. Bu kayıtların dayanağı sağlık mevzuatındaki saklama yükümlülüğüdür, açık rıza değildir; mevzuattaki süre dolmadan silinemezler. Geri çekme, yalnız iletişim formundan doğan kaydı etkiler.</p>
        </div>
      </div>

      <div class="g-bblk" id="ilgili-basliklar">
        <h2>Diğer yasal metinler</h2>
        <div class="izgara izgara--2">
          <a class="kart" href="${r}yasal/kvkk-aydinlatma-metni/">
            <h3>KVKK aydınlatma metni</h3>
            <p>Verilerinizden kimin sorumlu olduğu, hangi bilgilerin hangi dayanakla tutulduğu, ne zaman silindiği ve size tanınan haklar.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/cerez-politikasi/">
            <h3>Çerez politikası</h3>
            <p>Neden çerez ve izleme yazılımı kullanmadığımız; harita ile WhatsApp bağlantısı.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/kullanim-kosullari/">
            <h3>Kullanım koşulları</h3>
            <p>Sitedeki bilgilerin amacı ve hekim–hasta ilişkisinin hangi noktada kurulduğu.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}hazirlik-listesi/">
            <h3>Görüşmeye hazırlık notları</h3>
            <p>Randevuya hazırlanmanızı kolaylaştıran, yalnız kendi cihazınızda çalışan kontrol listesi.</p>
            <span class="kart__ok">Aç ${ik.ok}</span>
          </a>
        </div>
      </div>

      <div class="g-bblk">
        <h2>Randevu almak isterseniz</h2>
        <p class="giris">Form yerine telefonu ya da WhatsApp’ı da kullanabilirsiniz; hangi yoldan gelirse gelsin bütün talepler aynı randevu takvimine kaydedilir.</p>
        <div class="dgm-sira">
          <a class="dgm dgm--bir" href="${r}iletisim/">İletişim</a>
        </div>
      </div>

    </div>
  </div>
</section>
`,
};
