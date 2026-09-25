const S = require('../../site');

module.exports = {
  slug: 'yasal/hasta-haklari',
  tip: 'bilgi',
  baslik: 'Hasta Hakları — Bilgilendirme, Onam, Mahremiyet ve Başvuru',
  aciklama: 'Hasta Hakları Yönetmeliği çerçevesinde bilgilendirilme, onam, mahremiyet ve hekim seçme haklarınız ile başvurabileceğiniz resmî başvuru ve şikâyet yolları.',

  icerik: (r, ik) => `

<!-- ═════════ BELGE HERO ═════════ -->
<section class="g-bhero">
  <div class="sar">
    <p class="g-etiket">Yasal</p>
    <h1>Hasta Hakları</h1>
    <p class="g-bhero__alt">Sağlık hizmetinden yararlanan herkesin, Anayasa ve Hasta Hakları Yönetmeliği ile korunan hakları vardır. Bu haklar hekimin takdirine bırakılmış bir incelik değil, uymakla yükümlü olduğu kurallardır. Bu sayfada söz konusu hakların muayenehanedeki karşılığını ve bir sorunla karşılaştığınızda başvurabileceğiniz yolları bulabilirsiniz.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>Dayanak: Hasta Hakları Yönetmeliği</span>
      <span><i></i>Bakanlık iletişim hattı: 184</span>
    </div>
  </div>
</section>

<!-- ═════════ BELGE GÖVDESİ ═════════ -->
<section class="g-belge">
  <div class="sar">

    <aside class="g-bmenu" aria-label="Sayfa içi başlıklar">
      <b>Bu sayfada</b>
      <a href="#dayanak-nedir">Dayanak</a>
      <a href="#temel-haklariniz">Temel haklarınız</a>
      <a href="#aydinlatilmis-onam">Aydınlatılmış onam</a>
      <a href="#hastanin-sorumluluklari">Sorumluluklar</a>
      <a href="#basvuru-yollari">Başvuru yolları</a>
      <a href="#ilgili-basliklar">İlgili başlıklar</a>
    </aside>

    <div class="g-bgov">

      <div class="g-bblk" id="dayanak-nedir">
        <h2>Haklarınız hangi düzenlemelere dayanıyor?</h2>
        <div class="yazi">
          <p>Temel çerçeveyi 1998 tarihli Hasta Hakları Yönetmeliği belirler. Yönetmelik, kamu–özel ayrımı gözetmeden bütün sağlık kuruluşlarına ve dolayısıyla muayenehanelere de uygulanır. Bunun yanında 1219 sayılı Tababet ve Şuabatı San'atlarının Tarzı İcrasına Dair Kanun, 3359 sayılı Sağlık Hizmetleri Temel Kanunu, 6698 sayılı Kişisel Verilerin Korunması Kanunu ve Biyoloji ve Tıbbın Uygulanması Bakımından İnsan Hakları ve İnsan Haysiyetinin Korunması Sözleşmesi de yürürlüktedir.</p>
          <p>Bu sayfa yönetmeliğin yerini almaz; haklarınızı özetler ve muayenehanede nasıl uygulandığını gösterir.</p>
        </div>
      </div>

      <div class="g-bblk" id="temel-haklariniz">
        <h2>Temel haklarınız</h2>
        <p class="giris">Yönetmelikte yer alan hakları, muayenehanedeki uygulamalarıyla birlikte aşağıda bulabilirsiniz.</p>
        <div class="izgara izgara--2">
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalp}</span>
            <h3>Hizmetten adalet ve hakkaniyetle yararlanma</h3>
            <p>Irk, dil, din, cinsiyet, siyasi görüş, ekonomik ya da sosyal durumunuz ne olursa olsun hizmete erişim hakkınız vardır. Sıra; tıbbi aciliyet ve randevu düzeni dışında bir ölçüte göre değiştirilmez.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.liste}</span>
            <h3>Bilgi isteme ve bilgilendirilme</h3>
            <p>Sağlık durumunuz, önerilen planın gerekçesi, olası etkileri, seçenekleri ve hiçbir işlem yapılmazsa neler beklenebileceği konusunda anlayabileceğiniz bir dille bilgilendirilme hakkınız vardır. Sorularınızı çekinmeden sorabilirsiniz.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.onay}</span>
            <h3>Rıza ve aydınlatılmış onam</h3>
            <p>Bilgilendirilmeniz ve onayınız alınmadan hiçbir tıbbi işlem yapılamaz. Onam, imzalanan bir form olmadan önce, sorularınızın yanıtlandığı bir görüşmenin sonucudur.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.kalkan}</span>
            <h3>Reddetme ve durdurma</h3>
            <p>Önerilen bir işlemi kabul etmeyebilir, başlamış bir süreci durdurabilirsiniz. Bu karar hizmet almanıza engel olmaz; yalnızca olası sonuçlarının size anlatılması ve kayda geçirilmesi gerekir.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.mercek}</span>
            <h3>Mahremiyet ve sır saklama</h3>
            <p>Muayene, kapısı kapalı bir odada, hekim ile sizin aranızda yapılır. Sağlık bilgileriniz izniniz olmadan yakınlarınız da dâhil kimseyle paylaşılmaz. Hekimin sır saklama yükümlülüğü ölümünüzden sonra da devam eder.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.yaprak}</span>
            <h3>Hekimi seçme ve değiştirme</h3>
            <p>Hekiminizi seçebilir, ikinci bir görüş alabilir ya da başka bir hekime başvurabilirsiniz. İstediğinizde kayıtlarınızın bir örneği size verilir.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.damla}</span>
            <h3>Kayıtlara erişim</h3>
            <p>Hasta dosyanızı inceleyebilir, bir örneğini isteyebilir, eksik veya hatalı bilgilerin düzeltilmesini talep edebilirsiniz. Bu talepler yazılı olarak alınıp dosyanıza işlenir.</p>
          </div>
          <div class="kart kart--duz">
            <span class="kart__ikon">${ik.saat}</span>
            <h3>Güvenlik ve insani değerlere saygı</h3>
            <p>Sağlıklı ve güvenli bir ortamda, saygıyla karşılanarak hizmet alma hakkınız vardır. Bekleme süresi hakkında bilgi almayı ve düzenli bir karşılama görmeyi bekleyebilirsiniz.</p>
          </div>
        </div>
      </div>

      <div class="g-bblk" id="aydinlatilmis-onam">
        <h2>Aydınlatılmış onam süreci nasıl ilerler?</h2>
        <div class="yazi">
          <p>Girişimsel bir uygulama planlandığında süreç her defasında aynı sırayla ilerler. Amaç imza almak değil, kararı sizinle birlikte vermektir.</p>
        </div>
        <ol class="adimlar">
          <li>
            <h4>Durumun açıklanması</h4>
            <p>Muayene bulguları ve varsa tetkik sonuçları, tıbbi terimlerin gündelik karşılıkları kullanılarak anlatılır.</p>
          </li>
          <li>
            <h4>Seçeneklerin değerlendirilmesi</h4>
            <p>Uygun seçenekler, beklenen etkiler, olası istenmeyen durumlar, alternatifler ve hiçbir uygulama yapılmaması seçeneği birlikte ele alınır.</p>
          </li>
          <li>
            <h4>Soru sorma ve düşünme süresi</h4>
            <p>Aklınıza takılanları sorabilir, karar vermek için zaman isteyebilirsiniz. Aynı gün karar vermeniz beklenmez.</p>
          </li>
          <li>
            <h4>Onamın kayda alınması</h4>
            <p>Kararınız yazılı onam belgesiyle kayda geçirilir. Belgeyi imzaladıktan sonra da vazgeçme hakkınız sürer.</p>
          </li>
        </ol>
        <div class="kutu kutu--bilgi">
          <b>Refakatçi ve tercüman</b>
          <p>Görüşme sırasında bir yakınınızın yanınızda bulunmasını isteyebilirsiniz. Türkçe iletişimde zorlanıyorsanız, anlayabileceğiniz dilde bilgilendirilmeniz için birlikte bir çözüm aranır.</p>
        </div>
      </div>

      <div class="g-bblk" id="hastanin-sorumluluklari">
        <h2>Hastanın sorumlulukları</h2>
        <div class="yazi">
          <p>Yönetmelik, hakların yanında bazı sorumluluklara da yer verir. Bunlar şekilden ibaret değildir; doğrudan güvenliğinizle ilgilidir.</p>
          <ul>
            <li>Yakınmanızı, geçirdiğiniz hastalıkları ve daha önce yaşadığınız reaksiyonları eksiksiz anlatmak.</li>
            <li>Kullandığınız bütün ilaçları, bitkisel ürünleri ve takviyeleri bildirmek; hiçbirini önemsiz görüp atlamamak.</li>
            <li>Bilinen aşırı duyarlılık öykünüzü, hafif atlatmış olsanız bile paylaşmak.</li>
            <li>Gebelik ya da emzirme durumunu, gebelik olasılığı da dâhil olmak üzere bildirmek.</li>
            <li>Verilen plana uymak, uyamayacaksanız bunu söylemek ve kontrol randevularına gelmek.</li>
            <li>Gelemeyeceğiniz bir randevuyu önceden bildirmek.</li>
          </ul>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}hazirlik-listesi/">Görüşme öncesi hazırlık listesi ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="basvuru-yollari">
        <h2>Başvuru ve şikâyet yolları</h2>
        <div class="yazi">
          <p>Bir hakkınızın çiğnendiğini düşünüyorsanız başvurabileceğiniz kanallar bellidir. Bu yollar birbirinin seçeneğidir; birini kullanmanız diğerlerine başvurma hakkınızı ortadan kaldırmaz.</p>
        </div>
        <ul class="bilgi-liste">
          <li>${ik.posta}<div><b>Doğrudan muayenehaneye</b>Talebinizi yazılı olarak <a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a> adresine veya muayenehane adresine gönderebilirsiniz. Başvurunuz kayda geçirilir ve size en geç otuz gün içinde yazılı yanıt verilir.</div></li>
          <li>${ik.tel}<div><b>Sağlık Bakanlığı iletişim merkezi</b>Sağlık hizmetleriyle ilgili başvurularınızı <b>184</b> numaralı hat aracılığıyla Bakanlığa iletebilirsiniz.</div></li>
          <li>${ik.pin}<div><b>İl Sağlık Müdürlüğü</b>İstanbul İl Sağlık Müdürlüğü’ndeki hasta hakları birimine başvurabilirsiniz. Muayenehane bu müdürlüğün denetimi altındadır.</div></li>
          <li>${ik.kalkan}<div><b>İstanbul Tabip Odası</b>Hekimin meslek uygulamalarına ilişkin başvurularınızı, hekimin kayıtlı olduğu tabip odasına yapabilirsiniz.</div></li>
          <li>${ik.liste}<div><b>Kişisel verilere ilişkin başvurular</b>Kişisel verilerinize dair taleplerinizi önce veri sorumlusuna iletir, sonuç alamazsanız Kişisel Verileri Koruma Kurulu’na başvurabilirsiniz.</div></li>
        </ul>
        <div class="yazi">
          <p>İdari başvuru yolları dava açma hakkınızı sınırlamaz. Hukuki ve cezai yollara başvurma hakkınız her durumda saklıdır.</p>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki" href="${r}yasal/kvkk-aydinlatma-metni/">Veri başvuru usulü ${ik.ok}</a>
        </div>
      </div>

      <div class="g-bblk" id="ilgili-basliklar">
        <h2>Bunları da okuyabilirsiniz</h2>
        <div class="izgara izgara--2">
          <a class="kart" href="${r}yasal/kullanim-kosullari/">
            <h3>Kullanım koşulları</h3>
            <p>Sitedeki içeriğin sınırı ve hekim–hasta ilişkisinin ne zaman başladığı.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/kvkk-aydinlatma-metni/">
            <h3>KVKK aydınlatma metni</h3>
            <p>Sağlık verilerinizin nasıl işlendiği, ne kadar saklandığı ve haklarınız.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yaklasimimiz/">
            <h3>Yaklaşımımız</h3>
            <p>Uygulamadan önce değerlendirme ilkesinin işleyişi.</p>
            <span class="kart__ok">İncele ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}hekim/">
            <h3>Hekim</h3>
            <p>${S.hekim.tam}: eğitim, uzmanlık ve sertifika bilgileri.</p>
            <span class="kart__ok">İncele ${ik.ok}</span>
          </a>
          <a class="kart" href="${r}yasal/icerik-ve-gorsel-yayin-ilkelerimiz/">
            <h3>İçerik ve görsel yayın ilkelerimiz</h3>
            <p>Mahremiyetinizi korumak adına sitede yer vermediğimiz içerikler.</p>
            <span class="kart__ok">Oku ${ik.ok}</span>
          </a>
        </div>
      </div>

      <div class="g-bblk">
        <h2>Bize ulaşmak için</h2>
        <p class="giris">Haklarınızla ilgili bir talebi ya da randevu isteğinizi iletişim sayfasından iletebilirsiniz.</p>
        <div class="dgm-sira">
          <a class="dgm dgm--bir" href="${r}iletisim/">İletişim</a>
        </div>
      </div>

    </div>
  </div>
</section>
`,
};
