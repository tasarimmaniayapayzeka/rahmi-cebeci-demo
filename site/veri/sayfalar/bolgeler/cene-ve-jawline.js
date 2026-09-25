const S = require('../../site');

module.exports = {
  slug: 'bolgeler/cene-ve-jawline',
  tip: 'tibbi',
  baslik: 'Çene hattı (jawline): netliği belirleyen dört etken',
  aciklama: 'Keskin bir çene hattı istiyorsanız önce hattı neyin sildiğini bulmak gerekir: kemik, yağ, gevşeyen deri ya da çiğneme kası. Bakırköy’de bu ayrımla başlıyoruz.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}bolgeler/" style="color:var(--sessiz);text-decoration:none">Bölgeler</a> › <span>Çene ve Jawline</span></nav>
      <p class="g-etiket">Bölgeler · Çene ve çene hattı</p>
      <h1>Silik bir çene hattının <span class="g-isik">tek bir nedeni</span> yoktur.</h1>
      <p class="g-hero__alt">Kulak önünden çene ucuna uzanan hattın ne kadar keskin göründüğü; alt çene kemiğinin şekline, çene altında biriken yağa, derinin toparlanma gücüne ve çiğneme kasının kalınlığına bağlıdır. Her birinin yanıtı ayrı olduğu için önce hangisinin öne çıktığını anlamamız gerekir. Bu bölgede yüzünüze yandan bakmak, karşıdan bakmak kadar bilgi verir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#belirleyen">Dört etken ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Uygulamayı hekim yapar</span><span><i></i>Adım adım plan</span><span><i></i>Kontrol randevusu dâhil</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/bolge-cene-ve-jawline.webp" width="1400" height="788" alt="Çene hattı belirgin bir kadının yandan yakın plan görünümü" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
      <div class="g-hud"><b>Alt yüzün kenarı</b><div class="g-cizgi"></div><span>Kulak önünden çene ucuna uzanan bu hatta günlük dilde “jawline” da deniyor.</span></div>
    </div>
  </div>
</section>

<!-- ═════════ VERİ BANDI ═════════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="4">0</em></b><span>Belirleyici etken</span></div>
  <div data-gr style="--d:70ms"><b><em data-gsay="3">0</em></b><span>Plan adımı</span></div>
  <div data-gr style="--d:140ms"><b><em data-gsay="2">0</em></b><span>İnceleme açısı: ön ve yan</span></div>
  <div data-gr style="--d:210ms"><b>Yandan</b><span>Karar için şart olan bakış</span></div>
</div></div>

<!-- ═════════ DÖRT ETKEN ═════════ -->
<section class="bolum" id="belirleyen">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Etkenler</p>
      <h2>Çene hattını belirginleştiren ya da silen ne?</h2>
      <p class="giris">“Jawline” dediğimiz şey, alt çene kemiğinin kulak önünden çeneye uzanan kenarı ve onu örten dokulardır. Bu hatta dair yakınmalar çoğu zaman tek bir işlemin adıyla gelir; oysa hattı dört ayrı etken şekillendirir. Aynı kişide birkaçı birlikte bulunabilir ve plan, en belirgin olanına göre yapılır.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kart kart--duz" data-gr>
        <span class="kart__ikon">${ik.mercek}</span>
        <h3>Kemik yapısı ve çene açısı</h3>
        <p>Alt çenenin köşesindeki açı ve çene ucunun ne kadar önde durduğu, bu bölgenin iskeletini oluşturur. Bu iskelet yeterli destek vermiyorsa üstteki deri ve yağ ne kadar sıkı olursa olsun çizgi keskinleşmez. Böyle bir durumda yalnızca deriye yönelik işlemlerle ilerlemek sonuç vermez.</p>
      </div>
      <div class="kart kart--duz" data-gr style="--d:70ms">
        <span class="kart__ikon">${ik.damla}</span>
        <h3>Çene altındaki yağ</h3>
        <p>Çenenin altında toplanan yağ, kemik yapısı yerinde olsa bile hattın üstünü örter. Bu birikim zayıf yapılı kişilerde de görülebilir; ailede benzer bir yapının bulunması sık rastlanan bir ipucudur.</p>
      </div>
      <div class="kart kart--duz" data-gr>
        <span class="kart__ikon">${ik.yaprak}</span>
        <h3>Derinin toparlanma gücü</h3>
        <p>Deri esnekliğini yitirdikçe hat aşağıya doğru yumuşar. Burada ince bir ayrım vardır: gevşemiş bir deri ile gerçekten fazlalık oluşturmuş bir deri farklı şeylerdir. Deri fazlalığı söz konusuysa yanıt ameliyattır; hangisinin olduğunu muayenede belirleriz.</p>
      </div>
      <div class="kart kart--duz" data-gr style="--d:70ms">
        <span class="kart__ikon">${ik.kalkan}</span>
        <h3>Çiğneme kasının kalınlığı</h3>
        <p>Kulak önünde, çenenin köşesinde yer alan çiğneme kası kalınlaştıkça alt yüz iki yandan genişler ve yüz oval görünümden köşeli bir görünüme geçer. Bunun en yaygın nedeni diş sıkmak ve gıcırdatmaktır; yani konu yalnızca görünüm değil, bir alışkanlık ve bazen bir ağrı meselesidir.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ ATLAS: ÜÇ ALT KONU ═════════ -->
<section class="bolum bolum--buz2" id="ayrim">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Ayrım</p>
      <h2>Muayenede çene bölgesine nasıl bakıyoruz?</h2>
      <p class="giris">Çene altındaki dolgunluğun nereden geldiğini, çiğneme kasının kalınlığını ve yüzünüzün profilini tek tek inceleriz. Aşağı indikçe soldaki kart, okuduğunuz başlığa uyum sağlar.</p>
    </div>
    <div class="g-atlas-duzen">
      <div class="g-atlas" data-gr>
        <div class="g-atlas-kap">
          <img src="${r}varliklar/gorsel/yuz-3d-b.webp" width="900" height="1200" alt="Çene hattını yandan gösteren, sağa dönük üç boyutlu yüz profili" loading="lazy">
          <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
          <div class="g-rozetk" data-grozet><b>Çene altı</b><span>Buradaki dolgunluğu yapanın yağ, gevşek deri ya da kas olduğu birkaç basit muayene hareketiyle anlaşılır.</span></div>
        </div>
      </div>
      <div>
        <div class="g-katblok" data-gkat="cenealti" data-gr>
          <span class="g-kno">01 · ÇENE ALTI</span>
          <h3>Dolgunluğu oluşturan ne: yağ, gevşek deri ya da kas?</h3>
          <p>Çene altını iki parmakla tuttuğumuzda kalın ve yumuşak bir tabaka hissediliyorsa ve başınızı öne eğdiğinizde bölge daha da doluyorsa, yağ ön plandadır. Parmaklar arasında ince bir deri kalıyor, çekildiğinde kolayca uzuyor ve yavaş toparlanıyorsa, sorun daha çok gevşemedir.</p>
<p>Konuşurken boynun önünde beliren ve dinlenince kaybolan dikey bantlar ise deri altındaki ince bir kastan gelir. Çene ucu geride kalmışsa, altında hiç fazla yağ bulunmasa bile hat bulanık görünebilir; o zaman konu kemik desteğine kayar.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/bolgesel-lipoliz/">Bölgesel lipoliz</a><a href="${r}uygulamalar/hifu-ameliyatsiz-yuz-germe/">HIFU</a><a href="${r}cilt-sorunlari/bolgesel-yaglanma/">Bölgesel yağlanma</a></div>
        </div>
        <div class="g-katblok" data-gkat="kas" data-gr>
          <span class="g-kno">02 · ÇİĞNEME KASI</span>
          <h3>Diş sıkmanın yüzdeki izi</h3>
          <p>Çiğneme kasının kalınlaşmasına en sık diş sıkma ve gıcırdatma yol açar; bu çoğunlukla gece, uykuda ve farkına varılmadan olur. Sabah uyanınca çenede ağrı, şakaklarda baş ağrısı ya da dişlerde aşınma fark ediyorsanız bir diş hekiminin de görüşünü almak gerekebilir.</p>
<p>Kası normal kalınlıkta olan birinde kası gevşeten bir işlem çene hattını inceltmez. Bu yüzden önce kasın gerçekten kalınlaşıp kalınlaşmadığını muayenede yoklarız.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/botulinum-toksin/">Botulinum toksin</a></div>
        </div>
        <div class="g-katblok" data-gkat="profil" data-gr>
          <span class="g-kno">03 · PROFİL</span>
          <h3>Karar yandan verilir</h3>
          <p>Bu bölgedeki yakınmaların büyük bir kısmı yandan bakınca anlaşılır. Çene ucunun ne kadar önde olduğu, çene altı ile boyun arasındaki açı ve alt dudakla çene ucunun birbirine göre yeri ancak profilden değerlendirilebilir.</p>
<p>Geride kalan bir çene ucu burnu olduğundan iri, boynu da olduğundan kısa gösterebilir; bu durumda çene altına değil, çene ucunun desteğine bakmak gerekir. Muayenede başınızın duruşunu sabitler, yüzünüze hem sessizken hem konuşurken bakar ve sağ–sol farklarını not ederiz.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/dolgu-uygulamalari/">Dolgu uygulamaları</a><a href="${r}bolgeler/yuz/">Yüz bölgesi planlaması</a></div>
        </div>
      </div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <p>Bu ayrımın sonunda bazen “bu tabloya medikal estetik yöntemlerle yaklaşmak doğru değil” deriz. Sarkma ileri düzeydeyse ya da belirgin deri fazlalığı varsa sizi ilgili cerrahi uzmanlık dalına yönlendiririz; bunun nasıl işlediğini <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">kapsamımızın sınırı</a> sayfasında anlattık.</p>
    </div>
  </div>
</section>
<script type="application/json" data-gnokta-veri>{"cenealti":["Çene altı","Buradaki dolgunluğu yapanın yağ, gevşek deri ya da kas olduğu birkaç basit muayene hareketiyle anlaşılır."],"kas":["Çiğneme kası","Kalınlaşınca alt yüzü genişletir; çoğunlukla diş sıkmayla ilişkilidir."],"profil":["Profil","Çene ucunun yeri ve boyunla yaptığı açı ancak yandan görülür."]}</script>

<!-- ═════════ MATRİS: UYGULAMALAR ═════════ -->
<section class="bolum bolum--sicak" id="uygulamalar">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Seçenekler</p>
      <h2>Çene hattı için hangi seçenekler var?</h2>
      <p class="giris">Buradaki başlıklar, en belirgin etken bulunduktan sonra konuşulur. Etken yanlış belirlenirse doğru bir yöntem bile işe yaramayabilir.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Uygulama</span><span>Hedef</span><span>İyileşme</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/dolgu-uygulamalari/" data-gg="${r}varliklar/gorsel/uyg-dolgu-uygulamalari.webp" data-gb="Dolgu uygulamaları" data-ga="Kemik desteği zayıfsa çene ucuna ve çene hattı boyunca düşünülür; burada şeklini koruyabilen, daha yoğun kıvamlı ürünler seçilir."><h4>Dolgu uygulamaları</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">Kemik desteği</i></span><span class="g-hucre">Şişlik inince</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/botulinum-toksin/" data-gg="${r}varliklar/gorsel/uyg-botulinum-toksin.webp" data-gb="Botulinum toksin" data-ga="Kalınlaşmış çiğneme kasında gündeme gelir; incelme yavaş olur ve çoğunlukla birkaç hafta içinde fark edilir."><h4>Botulinum toksin</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">Kas kalınlığı</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/bolgesel-lipoliz/" data-gg="${r}varliklar/gorsel/uyg-bolgesel-lipoliz.webp" data-gb="Bölgesel lipoliz" data-ga="Çene altındaki yerel yağ birikimi ön plandaysa düşünülebilir; kilo vermeye yönelik bir yöntem değildir."><h4>Bölgesel lipoliz</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">Yerel yağ</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/sivi-yuz-germe/" data-gg="${r}varliklar/gorsel/uyg-sivi-yuz-germe.webp" data-gb="Sıvı yüz germe" data-ga="Alt yüzdeki destek kaybı orta yüzle birlikte ele alınacaksa bütüncül planın bir parçası olabilir."><h4>Sıvı yüz germe</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">Bütüncül destek</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/hifu-ameliyatsiz-yuz-germe/" data-gg="${r}varliklar/gorsel/uyg-hifu-ameliyatsiz-yuz-germe.webp" data-gb="HIFU — ameliyatsız sıkılaştırma" data-ga="Derinin toparlanma gücü azalmışsa konuşulur; ameliyatla yapılan germenin yerini tutmaz."><h4>HIFU</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">Sıkılaştırma</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/altin-igne-radyofrekans/" data-gg="${r}varliklar/gorsel/uyg-altin-igne-radyofrekans.webp" data-gb="Altın iğne radyofrekans" data-ga="Gevşemede başvurulabilecek ikinci bir yöntemdir; cerrahi bir işlemin karşılığı sayılmaz."><h4>Altın iğne radyofrekans</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">Sıkılaştırma</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/biyostimulan-uygulamalar/" data-gg="${r}varliklar/gorsel/uyg-biyostimulan-uygulamalar.webp" data-gb="Biyostimülan uygulamalar" data-ga="Deri desteği zayıflamışsa kolajen yapımını zamana yayarak desteklemek amacıyla düşünülür."><h4>Biyostimülan uygulamalar</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">Doku desteği</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/genclik-asisi-skinbooster/" data-gg="${r}varliklar/gorsel/uyg-genclik-asisi-skinbooster.webp" data-gb="Gençlik aşısı (skinbooster)" data-ga="Deri kalitesi ayrı bir sorun olarak öne çıkıyorsa plana eklenebilir."><h4>Gençlik aşısı (skinbooster)</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">Cilt kalitesi</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-dolgu-uygulamalari.webp" alt=""></div><div class="g-ic"><h4>Dolgu uygulamaları</h4><p>Kemik desteği zayıfsa çene ucuna ve çene hattı boyunca düşünülür; burada şeklini koruyabilen, daha yoğun kıvamlı ürünler seçilir.</p><a class="dgm dgm--iki" href="${r}uygulamalar/dolgu-uygulamalari/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ SÜREÇ + SINIR ═════════ -->
<section class="bolum" id="sinir">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Süreç ve uygunluk</p>
      <h2>Çene bölgesinde hangi durumlarda işlem yapılmaz?</h2>
      <p class="giris">Bu bölgede bir işlemi konuşabilmek için en belirgin etkenin bulunmuş ve beklentinizin yöntemin sınırlarıyla örtüşüyor olması gerekir. Aşağıdaki durumlardan biri varsa işlem yapılmaz ya da ileri bir tarihe bırakılır.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--uyari" data-gr>
        <h4>Uygulama yapılmayan durumlar</h4>
        <ul>
          <li>Gebelik ya da emzirme</li>
          <li>İşlem alanında etkin enfeksiyon ya da iltihaplı sivilce</li>
          <li>Kullanılacak ürüne karşı bilinen aşırı duyarlılık</li>
          <li>Belirgin deri fazlalığı nedeniyle cerrahi değerlendirme gerektiren tablolar</li>
          <li>Çene altındaki şişliğin tükürük bezi ya da lenf bezi kaynaklı olduğu durumlar</li>
          <li>Miyastenia gravis, Lambert–Eaton sendromu gibi sinir ile kas arasındaki iletimi bozan hastalıklar — kası gevşeten uygulamalar bu durumlarda yapılmaz</li>
        </ul>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:70ms">
        <h4>Ertelenen ya da ayrıca planlanan durumlar</h4>
        <ul>
          <li>Kan sulandırıcı ilaç ya da pıhtılaşma sorunu</li>
          <li>Yeni yapılmış diş tedavisi ya da geçirilmiş enfeksiyon</li>
          <li>Kontrol altına alınmamış otoimmün hastalık</li>
          <li>Çene ekleminde nedeni henüz bulunmamış ağrı ya da ağız açmada güçlük</li>
          <li>Bölgeye daha önce uygulanmış, içeriği bilinmeyen ürün</li>
        </ul>
      </div>
    </div>
    <div class="g-bento" style="margin-top:22px">
      <div class="g-kutu g-b4" data-gr>
        <span class="g-ket">PLAN ADIMLARI</span>
        <ol class="g-protokol">
          <li><b>En belirgin etkeni bulmak.</b>&nbsp;Kemik yapısı, yağ, deri ve kas tek tek incelenir. Yüzünüze karşıdan ve yandan, dinlenirken ve dişlerinizi sıkarken ayrı ayrı bakarız.</li>
          <li><b>Sağlık öyküsü.</b>&nbsp;Diş sıkıp sıkmadığınızı, çenenizde ağrı ya da tıklama olup olmadığını, daha önce yapılan işlemleri, kan sulandırıcı kullanımını ve gebelik durumunu sorarız; bilinen aşırı duyarlılıklarınızı belirtin.</li>
          <li><b>Sıra ve yazılı bilgilendirme.</b>&nbsp;Birkaç etken bir aradaysa hangisinin önce ele alınacağını birlikte belirleriz; hepsi tek seansa sıkıştırılmaz. Amaçlanan etki ve olası istenmeyen durumlar size yazılı verilir, onamınız olmadan işleme başlanmaz.</li>
        </ol>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr style="--d:70ms"><span class="g-ket">İLKE</span><p>&#8220;‘Keskin bir çene hattı istiyorum’ cümlesi bir işlemin adı değildir; önce hattı neyin sildiğini buluruz, plan ondan sonra gelir.&#8221;</p></div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <p>İşlem gününün ardından ilk gün bölgeye bastırmamanızı, ovmamanızı ve yüzüstü yatmamanızı isteriz. Birkaç gün sauna, hamam ve ağır spora ara verin; hekiminizin söylediği süre boyunca sakız, sert et ya da kuruyemiş gibi uzun çiğnenen yiyeceklerden kaçının. Boynunuzdaki bir yakınmaya da aynı muayenede bakarız, ancak iki bölge her zaman aynı gün ele alınmaz; ayrıntısı <a href="${r}bolgeler/boyun-ve-dekolte/">boyun ve dekolte</a> sayfasında. Bütün uygulamalar için geçerli öneriler <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası takip</a> sayfasında toplandı.</p>
    </div>
    <div class="kutu kutu--acil" data-gr style="margin-top:22px">
      <b>Beklemeden başvurmanız gereken bulgular</b>
      <p>İşlemden sonra giderek artan şiddetli ağrı, deride beyazlaşma ya da morumsu ağ görünümü, hızla kabaran şişlik, ateş, yutkunurken zorlanma ya da nefes darlığı olursa bekletmeden bizi <a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a> numarasından arayın. Telefonla ulaşamazsanız <b>112</b>’yi arayın ya da size en yakın acil servise gidin.</p>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Soru–cevap</p><h2>Aklınızdaki soruyu seçin, yanıtı yanda okuyun</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr')} · çene hattı · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>“Jawline” bir işlemin adı mı?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>“Botoks” yüzümü inceltir mi?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Kilo verirsem gıdım kaybolur mu?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Diş sıkmak yüzümün şeklini değiştirir mi?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Boynumdaki sarkmaya da aynı anda bakılır mı?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nereden öğrenebilirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede birlikte bakalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["“Jawline” bir işlemin adı mı?","Değil. “Jawline” İngilizceden günlük dile geçmiş bir sözcüktür ve tıpta çene hattı olarak anılır: alt çene kemiğinin kulak önünden çene ucuna kadar süren kenarı. Bu hattın keskin ya da silik görünmesini dört ayrı etken belirler; hangi işlemin uygun olduğu da bu etkenlere bakılarak kararlaştırılır."],["“Botoks” yüzümü inceltir mi?","Günlük dildeki “botoks”, tıpta botulinum toksin uygulaması olarak bilinir. Alt yüzü ancak çiğneme kası kalınlaşmışsa daraltabilir; kası normal kalınlıkta olan birinde çene hattını keskinleştirmesi beklenmez. Bunu anlamak için muayenede dişlerinizi sıkmanızı ister ve kası elimizle yoklarız."],["Kilo verirsem gıdım kaybolur mu?","Kiminde azalır, kiminde kilo verilse bile yerinde kalır. Çene altındaki yağ birikimi ailesel bir yapıya bağlı olabilir ve kilo değişimlerinden az etkilenebilir. Bu bölgede konuşulan uygulamaların amacı kilo verdirmek değil, yalnızca o bölgedeki yerel yağı hedeflemektir."],["Diş sıkmak yüzümün şeklini değiştirir mi?","Değiştirebilir. Gece boyunca sıkılan dişler çiğneme kasını tıpkı düzenli çalıştırılan bir kas gibi güçlendirir; kas kalınlaştıkça alt yüz yanlara doğru genişler. Sabah uyandığınızda çenenizin ağrıması, başınızın şakaklardan zonklaması ya da dişlerinizde aşınma fark etmeniz bu alışkanlığın işaretleri olabilir. Böyle belirtiler varsa bir diş hekiminin görüşü de alınmalıdır."],["Boynumdaki sarkmaya da aynı anda bakılır mı?","Aynı muayenede bakılır; ancak iki bölge her zaman aynı seansta ele alınmaz. Boyun derisi daha incedir, altında yağ azdır ve bölge sürekli hareket eder; çene hattı için seçilen miktar ve derinlik boyna olduğu gibi uygulanmaz. Belirgin deri fazlalığı varsa bunun cerrahi bir konu olduğunu size açıkça söyleriz."],["Ücret bilgisini nereden öğrenebilirim?","Sağlık tanıtım mevzuatı, sağlık kuruluşlarının ücret bilgisini internet sitesinde paylaşmasına izin vermez. Çene hattı için yapılacak plan kişiden kişiye çok değiştiğinden sayfada bir rakam vermek yanıltıcı da olurdu. Ücret, plan muayenede belirlendikten sonra size özel olarak bildirilir."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Çene hattınıza yandan da birlikte bakalım</h2>
    <p class="g-sonalt">${S.iletisim.adres}, ${S.iletisim.ilce} — muayenede kemik yapısını, çene altını, derinin gerginliğini ve çiğneme kasını ayrı ayrı inceliyor; planı ancak en belirgin etkeni bulduktan sonra yazıyoruz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesini doldurun</a>
    </div>
  </div>
</section>
`,
};
