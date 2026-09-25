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
    <p class="g-etiket">Yasal</p>
    <h1>Açık Rıza Metni</h1>
    <p class="g-bhero__alt">Bu metin yalnızca internet sitesindeki iletişim formunu kapsar. Formu gönderdiğinizde yazdığınız ad ve iletişim bilgileri, seçtiğiniz konu ve mesajınız; yalnızca talebinize dönüş yapılabilmesi amacıyla, 6698 sayılı Kanun’un 5/1. maddesi uyarınca açık rızanız temel alınarak işlenir. Rıza vermeniz zorunlu değildir; dilerseniz bize telefonla da ulaşabilirsiniz.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>Yalnızca iletişim formu için geçerli</span>
      <span><i></i>Rıza isteğe bağlıdır</span>
    </div>
  </div>
</section>

<!-- ═════════ BELGE GÖVDESİ ═════════ -->
<section class="g-belge">
  <div class="sar">

    <aside class="g-bmenu" aria-label="Sayfa içi başlıklar">
      <b>Bu sayfada</b>
      <a href="#acik-riza-nedir">Açık rıza nedir?</a>
      <a href="#rizanin-kapsami">Rızanın kapsamı</a>
      <a href="#kapsamda-olmayanlar">Kapsam dışı kalanlar</a>
      <a href="#riza-zorunlu-mu">Zorunlu mu?</a>
      <a href="#rizayi-geri-alma">Rızayı geri alma</a>
      <a href="#ilgili-basliklar">İlgili başlıklar</a>
    </aside>

    <div class="g-bgov">

      <div class="g-bblk" id="acik-riza-nedir">
        <h2>Açık rıza ne demek, neden yalnızca form için isteniyor?</h2>
        <div class="yazi">
          <p>Kanun açık rızayı “belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rıza” olarak tanımlar. Bu tanımın karşılanması için üç koşulun bir arada bulunması gerekir: rızanın neye verildiği açıkça belirlenmiş olmalı, kişi önceden bilgilendirilmiş olmalı ve onay herhangi bir baskı olmaksızın verilmiş olmalıdır.</p>
          <p>Muayenehanedeki veri işleme faaliyetlerinin çoğunun dayanağı açık rıza değildir. Muayenede elde edilen sağlık verileri; koruyucu hekimlik ile tıbbî teşhis, tedavi ve bakım hizmetlerinin yürütülmesi amacıyla, sır saklama yükümlülüğü altındaki hekim tarafından Kanun’un 6/3. maddesine göre işlenir. Hasta kaydının tutulması ise mevzuatın öngördüğü bir yükümlülüktür. Bu işlemlerin hukuki dayanağı farklı olduğundan ayrıca rızanız alınmaz.</p>
          <p>İletişim formu ise hiçbir yasal zorunluluktan doğmayan, tamamen isteğe bağlı bir iletişim yoludur. Formu kullanmadığınız sürece bu kanal üzerinden hakkınızda kayıt oluşmaz; formun tek hukuki dayanağının açık rızanız olmasının nedeni de budur.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}yasal/kvkk-aydinlatma-metni/">Aydınlatma metnini okuyun ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="rizanin-kapsami">
        <h2>Rıza tam olarak neyi kapsıyor?</h2>
        <p class="giris">Kapsamı bilinçli olarak dar tuttuk: aşağıda sayılmayan hiçbir veri form aracılığıyla işlenmez.</p>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <h3>İşlenen veriler</h3>
            <p>Ad ve soyadınız, telefon numaranız, isteğe bağlı olarak e-posta adresiniz, seçtiğiniz başvuru konusu ve mesaj alanına yazdığınız not. Kötüye kullanımı önlemek için gönderimin tarihi, saati ve gönderildiği IP adresi de talebe eklenir. Formda bunların dışında bir alan yer almaz.</p>
          </div>
          <div class="kart kart--duz">
            <h3>İşleme amacı</h3>
            <p>Talebinizin okunması, randevu takviminde uygun zamanın belirlenmesi ve size geri dönülmesi. Veriler bu amacın dışında kullanılmaz.</p>
          </div>
          <div class="kart kart--duz">
            <h3>Kimler erişebilir</h3>
            <p>Yalnızca muayenehanenin sahibi ve sorumlu tabibi ${S.hekim.tam} ile randevu düzenini yürüten muayenehane çalışanı. Veriler üçüncü kişilere aktarılmaz, yurt dışına gönderilmez.</p>
          </div>
          <div class="kart kart--duz">
            <h3>Saklama süresi</h3>
            <p>Talebiniz sonuçlandıktan sonra makul bir süre içinde silinir. Talep randevuya dönüşürse gerekli bilgiler hasta kaydına geçer ve o kaydın tabi olduğu saklama kuralına bağlı olur.</p>
          </div>
        </div>
      </div>

      <div class="g-bblk" id="kapsamda-olmayanlar">
        <h2>Bu rızanın kapsamadığı işlemler</h2>
        <div class="yazi">
          <p>Bu metinle verilen rıza aşağıdakilerin hiçbirini kapsamaz; veriler bu amaçlarla kullanılamaz:</p>
          <ul>
            <li>Tanıtım, duyuru ya da toplu elektronik ileti gönderimi. Formdan edinilen iletişim bilgileriyle size pazarlama iletisi gönderilmez ve ticari elektronik ileti listesi oluşturulmaz.</li>
            <li>Verilerin üçüncü bir kişiye, iş ortağına veya tanıtım ajansına aktarılması.</li>
            <li>Yurt dışına aktarım. Bu rıza, form verilerinin yurt dışındaki bir alıcıya aktarılmasını kapsamaz.</li>
            <li>Profilleme ve otomatik karar. Mesajınızı bir yazılım değerlendirip hakkınızda sonuç üretmez; her mesaj bir kişi tarafından okunur.</li>
            <li>Form aracılığıyla sağlık verisi toplanması. Form bu amaçla tasarlanmamıştır.</li>
          </ul>
        </div>
        <div class="kutu kutu--uyari">
          <b>Mesaj alanına sağlık bilginizi yazmayın</b>
          <p>Şikâyetinizin ayrıntısını, kullandığınız ilaçları, tanılarınızı veya tetkik sonuçlarınızı forma eklemeyin. Bunlar özel nitelikli kişisel veridir ve muayenede, hekimle yüz yüze konuşulmalıdır. Form için uygun gün ve saat tercihiniz gibi kısa bir randevu notu yeterlidir.</p>
        </div>
      </div>

      <div class="g-bblk" id="riza-zorunlu-mu">
        <h2>Rıza vermek zorunlu mu?</h2>
        <div class="yazi">
          <p>Hayır. Açık rıza ancak özgür iradeyle verildiğinde geçerlidir; bir hizmetin ön koşulu hâline getirilen rıza geçerli sayılmaz. Formu doldurmamanız, muayenehaneden hizmet almanızı hiçbir biçimde etkilemez.</p>
          <p>Formu kullanmak istemezseniz randevu talebinizi doğrudan telefonla iletebilirsiniz. Telefonla yapılan görüşmelerde de yalnızca randevu için gereken en az bilgi kayda alınır.</p>
        </div>
        <ul class="bilgi-liste">
          <li>${ik.tel}<div><b>Telefon</b><a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a></div></li>
          <li>${ik.saat}<div><b>Çalışma saatleri</b>${S.iletisim.saatler.map(([g, s]) => `${g}: ${s}`).join('<br>')}</div></li>
        </ul>
      </div>

      <div class="g-bblk" id="rizayi-geri-alma">
        <h2>Rızanızı nasıl geri alabilirsiniz?</h2>
        <div class="yazi">
          <p>Verdiğiniz rızayı dilediğiniz zaman ve herhangi bir gerekçe göstermeden geri alabilirsiniz. Talebinizi <a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a> adresine gönderebilir ya da muayenehaneye yazılı olarak ulaştırabilirsiniz.</p>
        </div>
        <ol class="adimlar">
          <li>
            <h4>Talebinizi gönderin</h4>
            <p>“Açık rızamı geri alıyorum” ifadesini ve formu doldururken kullandığınız ad ile iletişim bilgisini yazmanız, kaydın bulunması için yeterlidir.</p>
          </li>
          <li>
            <h4>Kayıt bulunur ve silinir</h4>
            <p>Talebiniz ulaştığında forma bağlı kayıt beklemeksizin silinir; yedeklerde bir kopyası varsa oradan da çıkarılır.</p>
          </li>
          <li>
            <h4>Yazılı olarak bilgilendirilirsiniz</h4>
            <p>İşlemin tamamlandığı, mevzuattaki otuz günlük süre aşılmadan size bildirilir.</p>
          </li>
        </ol>
        <div class="yazi">
          <p>Rızanın geri alınması ileriye dönük sonuç doğurur: geri alma anına kadar hukuka uygun biçimde yapılmış işlemleri geçersiz kılmaz, yalnızca o andan sonraki işlemeyi sona erdirir.</p>
          <p>Şu noktanın altını çizmek gerekir: muayene olduysanız, rızanızı geri almanız oluşan tıbbi kayıtların silinmesini sağlamaz. Bu kayıtların dayanağı açık rıza değil, sağlık mevzuatındaki saklama yükümlülüğüdür ve mevzuattaki süre dolmadan silinemezler. Geri alma yalnızca iletişim formundan kaynaklanan kaydı kapsar.</p>
        </div>
      </div>

      <div class="g-bblk" id="ilgili-basliklar">
        <h2>Bunları da okuyabilirsiniz</h2>
        <div class="izgara izgara--2">
          <a class="kart" href="${r}yasal/kvkk-aydinlatma-metni/">
            <h3>KVKK aydınlatma metni</h3>
            <p>Veri sorumlusu, işlenen veri türleri, hukuki sebepler, saklama süreleri ve haklarınız.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/cerez-politikasi/">
            <h3>Çerez politikası</h3>
            <p>Sitenin çerez ve izleme yazılımı kullanmama nedeni; harita ve WhatsApp bağlantısı.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/kullanim-kosullari/">
            <h3>Kullanım koşulları</h3>
            <p>İçeriğin bilgilendirme amacı ve hekim–hasta ilişkisinin ne zaman başladığı.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}hazirlik-listesi/">
            <h3>Hazırlık listesi</h3>
            <p>Randevudan önce hazırlanmanıza yardımcı olan ve yalnızca cihazınızda çalışan liste.</p>
            <span class="kart__ok">Aç ${ik.ok}</span>
          </a>
        </div>
      </div>

      <div class="g-bblk">
        <h2>Randevu için</h2>
        <p class="giris">Formu kullanmak istemezseniz telefonla ya da WhatsApp üzerinden ulaşabilirsiniz; bütün talepler aynı randevu takvimine işlenir.</p>
        <div class="dgm-sira">
          <a class="dgm dgm--bir" href="${r}iletisim/">İletişim</a>
        </div>
      </div>

    </div>
  </div>
</section>
`,
};
