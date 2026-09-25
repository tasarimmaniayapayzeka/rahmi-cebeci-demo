const S = require('../site');

module.exports = {
  slug: 'klinik',
  tip: 'tibbi',
  baslik: `Muayenehane — ${S.iletisim.semt}: odalar, cihazlar ve randevu düzeni`,
  aciklama: `${S.iletisim.semt}’deki muayenehane: bekleme salonu, uygulama odası, lazer ve cihaz odası, tek kullanımlık malzeme ve sterilizasyon düzeni, randevu işleyişi.`,

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero g-hero--genis">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <span>Muayenehanemiz</span></nav>
      <p class="g-etiket">Muayenehane · ${S.iletisim.semt}</p>
      <h1>Bekleme salonundan cihaz odasına: <span class="g-isik">${S.iletisim.semt}’deki</span> muayenehane</h1>
      <p class="g-hero__alt">İçeri girdiğinizde sizi önce bekleme salonu karşılar. Muayene ve enjeksiyonlar uygulama odasında, lazer ve diğer cihaz uygulamaları ise ayrı bir cihaz odasında yapılır. Randevular tek tek verilir; her işlemi hekim kendisi uygular ve kontrolü de yine o yürütür. Aşağıda muayenehanenin düzenini adım adım bulabilirsiniz.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
        <a class="dgm dgm--iki" href="#konum">Konum ve saatler ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Tek tek verilen randevular</span><span><i></i>Ayrı cihaz odası</span><span><i></i>Kontrol aynı hekimde</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/foto/klinik-bekleme.webp" width="1400" height="788" alt="${S.iletisim.semt}’deki muayenehanenin bekleme salonu" loading="eager">
      <div class="g-isin"></div>
      <!-- gerçek fotoğraf: yapay zekâ rozeti bilinçli olarak YOK -->
      <div class="g-hud"><b>${S.iletisim.ilce}</b><div class="g-cizgi"></div><span>${S.iletisim.adres}</span></div>
    </div>
  </div>
</section>

<!-- ═════════ KONUM ═════════ -->
<section class="bolum bolum--buz2" id="konum">
  <div class="sar">
    <div class="izgara izgara--2" style="gap:clamp(24px,4vw,48px);align-items:start">
      <div data-gr>
        <p class="g-etiket">Nerede</p>
        <h2>${S.iletisim.ilce}</h2>
        <p style="margin-top:14px">Muayenehane ${S.iletisim.adres} adresindedir. Toplu taşımada Marmaray’ın Bakırköy istasyonu ve Bakırköy’e ulaşan metro hatları kullanılabilir; özel araçla sahil yolundan ya da İncirli yönünden gelinebilir. Harita ve ayrıntılı yol tarifi iletişim sayfasında yer alır.</p>
        <p>Binayı ilk kez ziyaret edecekseniz gelmeden önce telefonla ya da WhatsApp üzerinden sorabilirsiniz; giriş tarifi kısaca paylaşılır.</p>
        <div class="dgm-sira" style="margin-top:22px">
          <a class="dgm dgm--iki" href="${r}iletisim/">Adres ve yol tarifi ${ik.ok}</a>
        </div>
      </div>
      <div class="izgara" style="gap:14px" data-gr>
        <div class="kart kart--duz">
          <span class="kart__ikon">${ik.pin}</span>
          <h4>Adresimiz</h4>
          <p>${S.iletisim.adres}<br>${S.iletisim.ilce}</p>
        </div>
        <div class="kart kart--duz">
          <span class="kart__ikon">${ik.saat}</span>
          <h4>Açık olduğumuz saatler</h4>
          <p>${S.iletisim.saatler.map(([g, s]) => `${g}: ${s}`).join('<br>')}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ TEK HEKİM ═════════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Tek hekimle</p>
      <h2>Muayenehanede sizinle kim ilgileniyor?</h2>
    </div>
    <div data-gr style="--d:70ms">
      <p>Bu muayenehanede tek bir hekim çalışır: ${S.hekim.tam}. Sizi dinleyen, muayene eden, planı çıkaran, ürünü ve miktarı seçen, işlemi yapan ve kontrolde sonucu değerlendiren odur. Arada bilgiyi aktaran bir danışman ya da satış görüşmesi yoktur; masada yalnızca tıbbi plan konuşulur.</p>
      <p>Bunun gündelik bir karşılığı var: uygulamadan günler sonra aklınıza bir soru takıldığında ya da bir değişiklik fark ettiğinizde, işlemin ayrıntısını bilen kişiye ulaşırsınız. Önceki muayene notları da aynı dosyada durur.</p>
      <p>Tek hekimle çalışmanın bir başka sonucu, gün içindeki randevu sayısının sınırlı kalmasıdır. Aynı saate iki kişi alınmaz ve her randevunun süresi önceden bellidir; bu yüzden uygun bir gün için birkaç gün beklemeniz gerekebilir.</p>
    </div>
    <div class="dgm-sira" style="margin-top:22px">
      <a class="dgm dgm--iki" href="${r}hekim/">Hekim ${ik.ok}</a>
      <a class="dgm dgm--iki" href="${r}yaklasimimiz/">Randevudan kontrole ${ik.ok}</a>
    </div>
  </div>
</section>

<!-- ═════════ CİHAZLAR ═════════ -->
<section class="bolum bolum--buz2" id="cihazlar">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Cihazlar</p>
      <h2>Lazer ve cihaz odasında neler var?</h2>
      <p class="giris">Lazer ve enerji temelli uygulamalar, enjeksiyonların yapıldığı odadan ayrı tutulan cihaz odasında yapılır. Lazer seanslarında hem sizin hem hekimin gözleri, cihazın dalga boyuna uygun koruyucu gözlükle korunur. Hangi cihazın size uygun olduğuna muayeneden sonra karar verilir.</p>
    </div>
    <div class="vitrin" data-gr style="--d:70ms">
      ${S.cihazlar.map((c, i) => `<a class="vitrin__kart${i < 2 ? ' vitrin__kart--genis' : ''}" href="${r}uygulamalar/${c.slug}/" style="--i:${i}">
        <span class="vitrin__model">${c.model}</span>
        <div class="vitrin__sahne">
          <span class="vitrin__hale" aria-hidden="true"></span>
          <img src="${r}varliklar/foto/${c.foto.replace('.webp', '-dekupe.webp')}" alt="${c.ad} cihazı — ${c.model}" loading="lazy">
          <span class="vitrin__zemin" aria-hidden="true"></span>
        </div>
        <div class="vitrin__alt">
          <h3>${c.ad}</h3>
          <p>${c.kullanim}</p>
          <span class="vitrin__git">Uygulama sayfası ${ik.ok}</span>
        </div>
      </a>`).join('\n      ')}
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <b>Model bilgisi neden burada?</b>
      <p>Cihaz adları yalnızca bilgilendirme amacıyla listelenmiştir. Bir cihazın bulunması, o uygulamanın size uygun olduğu ya da belirli bir sonuç vereceği anlamına gelmez; sonuçlar kişiden kişiye değişir.</p>
    </div>
  </div>
</section>

<!-- ═════════ HİJYEN ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Hijyen ve sterilizasyon</p>
      <h2>Uygulama ve cihaz odalarında hangi kurallar geçerli?</h2>
      <p class="giris">İğneyle ya da cilde enerji verilerek yapılan her işlem, küçük de olsa bir enfeksiyon riski taşır. Bu risk ortadan kalkmaz; her gün aynı biçimde uygulanan kurallarla düşük tutulur.</p>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <div class="kart kart--sicak">
        <span class="kart__ikon">${ik.kalkan}</span>
        <h3>Her hastaya yeni malzeme</h3>
        <p>Cilde temas eden iğne, kanül ve mikroiğne uçları ile örtüler her kişi için yeni ambalajından çıkarılır. Kullanılan malzeme bir başkası için saklanmaz; tıbbi atık olarak ayrılır ve mevzuata uygun biçimde bertaraf edilir.</p>
      </div>
      <div class="kart kart--sicak">
        <span class="kart__ikon">${ik.damla}</span>
        <h3>Ürün sizin önünüzde açılır</h3>
        <p>Uygulanacak ürünün kutusu ve etiketi işlemden önce size gösterilir, ambalaj gözünüzün önünde açılır. Kutusu önceden açılmış ya da menşei belgelenemeyen bir ürün, hangi gerekçeyle olursa olsun kullanıma alınmaz.</p>
      </div>
      <div class="kart kart--sicak">
        <span class="kart__ikon">${ik.liste}</span>
        <h3>Ürün ve lot kaydı</h3>
        <p>Hangi ürünün hangi lot numarasıyla, ne miktarda ve nereye uygulandığı dosyanıza not edilir. Aylar sonra bir soru doğarsa cevap önce bu satırlarda aranır.</p>
      </div>
      <div class="kart kart--sicak">
        <span class="kart__ikon">${ik.onay}</span>
        <h3>Antisepsi ve sterilizasyon</h3>
        <p>Uygulama bölgesi işlemden önce antiseptikle temizlenir. Tek kullanımlık olmayan metal aletler her kullanımdan sonra yıkanır ve sterilizasyon işleminden geçirilir; lazer ve cihaz başlıkları her kişiden sonra üretici talimatına uygun biçimde dezenfekte edilir.</p>
      </div>
      <div class="kart kart--sicak">
        <span class="kart__ikon">${ik.kalp}</span>
        <h3>Beklenmeyen tepkiye hazırlık</h3>
        <p>Nadir de olsa gelişebilecek bir tepkiye karşı gerekli ilaç ve malzeme odada hazır tutulur. Hastane koşulu gerektirebilecek bir işlem muayenehanede planlanmaz.</p>
      </div>
      <div class="kart kart--sicak">
        <span class="kart__ikon">${ik.saat}</span>
        <h3>Randevular arasında ara</h3>
        <p>Her randevudan sonra oda temizlenir, yüzeyler silinir ve ortam havalandırılır. Randevu saatleri bu arayı hesaba katarak verilir.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ RANDEVU DÜZENİ ═════════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Randevu akışı</p>
      <h2>Randevudan kontrole: süreç nasıl işliyor?</h2>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">Madde 01</span>
      <h3>Talep</h3>
      <p>Aramanız, WhatsApp’tan yazmanız ya da iletişim sayfasındaki formu doldurmanız yeterlidir. Şikâyetiniz muayenehanenin kapsamı dışında kalıyorsa bu, randevu verilmeden önce söylenir; boş yere gelmeniz istenmez.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:70ms">
      <span class="g-kno">Madde 02</span>
      <h3>İlk muayene</h3>
      <p>Öykü baştan alındığı için ilk randevu, kontrol randevularından uzun sürer. Düzenli kullandığınız ilaçların adlarını, varsa yakın tarihli kan tahlillerinizi ve daha önce yaptırdığınız işlemlere dair bilgileri getirmeniz görüşmeyi kolaylaştırır.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:140ms">
      <span class="g-kno">Madde 03</span>
      <h3>Plan ve yazılı onam</h3>
      <p>Neyin hedeflendiği, sınırları, görülebilecek istenmeyen etkiler, varsa seçenekler ve hiç işlem yapmamanın ne anlama geldiği konuşulur. Yazılı onamınız alınmadan uygulamaya geçilmez; isterseniz işlem başka bir güne bırakılır.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:210ms">
      <span class="g-kno">Madde 04</span>
      <h3>Gecikme ve iptal</h3>
      <p>Randevular arka arkaya planlandığı için bir gecikme, sonraki kişinin saatini de kaydırır. Gelemeyecekseniz bunu olabildiğince erken bildirmenizi rica ederiz; bizim tarafımızda bir değişiklik olursa size de önceden haber verilir.</p>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <b>Mali bilgiler</b>
      <p>Muayene ve uygulamaların bedeli, başvuru sırasında yalnızca size özel olarak bildirilir. Sağlık hizmetlerinin tanıtımını düzenleyen mevzuat, bu bilgilerin internet sitesinde yer almasına izin vermez.</p>
    </div>
  </div>
</section>

<!-- ═════════ SONRASI ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Uygulamadan sonra</p>
      <h2>İşlemden sonra neler oluyor?</h2>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b4" data-gr>
        <span class="g-ket">Kontrol takvimi</span>
        <p>Muayenehaneden ayrılırken elinizde bir bakım notu olur: ilk günlerde neye dikkat edeceğiniz, nelerden kaçınacağınız ve hangi belirtide hemen arayacağınız bu notta yazar. Sözlü anlatım tek başına yeterli görülmez.</p>
        <p style="margin-top:10px">Kontrol tarihi, etkinin tam olarak görülebileceği zamana göre seçilir; birkaç gün içinde bakılan bir sonuç eksik bilgi verir. Aradan zaman geçtikten sonra fark ettiğiniz bir değişikliği de aynı hekim, ilk muayene kaydıyla karşılaştırarak ele alır.</p>
        <div class="dgm-sira" style="margin-top:16px">
          <a class="dgm dgm--iki" href="${r}uygulamalar/uygulama-sonrasi-takip/">Uygulama sonrası kontrol ${ik.ok}</a>
          <a class="dgm dgm--iki" href="${r}sikca-sorulan-sorular/">Soru ve yanıtlar ${ik.ok}</a>
        </div>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr style="--d:70ms"><span class="g-ket">Hekimin notu</span><p>“Takip, uygulamanın ayrılmaz bir parçasıdır.”</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms">
        <span class="g-ket">Yapılacaklar</span>
        <p><b style="color:var(--murekkep)">Size özel bakım notu</b><br>Uygulamanın türüne ve bölgeye göre yazılır; herkese aynı broşür verilmez.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:210ms">
        <span class="g-ket">Kontrol günü</span>
        <p><b style="color:var(--murekkep)">Kontrol tarihi</b><br>Hangi gün geleceğiniz, işlem biter bitmez birlikte ayarlanır.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:280ms">
        <span class="g-ket">Önce ne gelir</span>
        <p><b style="color:var(--murekkep)">Olağan dışı bir belirti</b><br>Bildirdiğiniz duruma göre size öncelik verilir; sıradaki boş günü beklemeniz gerekmez.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ ACİL ═════════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="kutu kutu--acil" data-gr>
      <b>Randevu beklemeyin</b>
      <p>Uygulamadan sonra nefes almakta zorlanırsanız, yüzünüzde ya da dilinizde hızla artan bir şişlik olursa, işlem bölgesinde giderek yayılan solukluk veya morumsu, ağ görünümlü bir renk değişikliği, dayanılmaz ağrı ya da görme bozukluğu fark ederseniz vakit kaybetmeden <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
    </div>
  </div>
</section>

<!-- ═════════ İLGİLİ ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Okumaya devam</p>
      <h2>Buradan devam edin</h2>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <a class="kart" href="${r}hekim/">
        <h3>Hekim</h3>
        <p>${S.hekim.tam}: tıp eğitimi, uzmanlık, görev yaptığı hastaneler ve sertifikası.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yaklasimimiz/">
        <h3>Randevudan kontrole</h3>
        <p>Muayene, plan, uygulama günü ve takip: dört adımın her birinde neler olduğu.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">
        <h3>Bazı işlemleri neden üstlenmiyoruz</h3>
        <p>Cerrahi, saç ekimi ve lazer epilasyon gibi burada yapılmayan işlemler ve gerekçesi.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}hazirlik-listesi/">
        <h3>Randevuya hazırlanma listesi</h3>
        <p>İlk muayeneden önce not almanızın işe yarayacağı başlıkların kısa bir listesi.</p>
        <span class="kart__ok">Aç ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}iletisim/">
        <h3>İletişim</h3>
        <p>Harita, yol tarifi, telefon ve WhatsApp bağlantısı, çalışma saatleri ve form.</p>
        <span class="kart__ok">Git ${ik.ok}</span>
      </a>
    </div>
  </div>
</section>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Randevu için bize ulaşın</h2>
    <p class="g-sonalt">${S.iletisim.adres}, ${S.iletisim.ilce}. Arayabilir, WhatsApp’tan yazabilir ya da formu doldurabilirsiniz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
