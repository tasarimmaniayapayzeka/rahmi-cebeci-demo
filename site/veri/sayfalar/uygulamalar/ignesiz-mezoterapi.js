const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/ignesiz-mezoterapi',
  tip: 'tibbi',
  baslik: 'İğnesiz mezoterapi: elektroporasyon nasıl çalışır?',
  aciklama: 'İğnesiz mezoterapide solüsyon, elektrik darbeleriyle kısa süre aralanan deri bariyerinden iletilir. İğneli yöntemden farkı, kimlerde yapılmadığı ve kür düzeni.',

  icerik: (r, ik) => `
<!-- HERO -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>İğnesiz mezoterapi</span></nav>
      <p class="g-etiket">Cihaz ve Lazer · Cilt Bakımı</p>
      <h1>İğnesiz mezoterapi: iğne yerine <span class="g-isik">elektrik darbeleriyle</span> iletim.</h1>
      <p class="g-hero__alt">Cildin en dış katmanı, sürülen ürünlerin büyük kısmını içeri almayan bir kalkan gibidir. Elektroporasyonda çok kısa elektrik darbeleri bu kalkanda geçici aralıklar açar ve cilde sürülen solüsyon bu aralıklardan ilerler. Deri delinmez; buna karşılık ulaşılan derinlik ve içeri geçen miktar iğneli mezoterapiden azdır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Yöntemin işleyişi ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Deriye iğne girmez</span><span><i></i>Aynı gün işe dönülür</span><span><i></i>Elektronik implantta yapılmaz</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-ignesiz-mezoterapi.webp" width="1400" height="788" alt="Cilt yüzeyinde parlayan şeffaf serum damlacıklarının makro görünümü" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- VERİ BANDI -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="12">0</em>&#8239;saat</b><span>Sonrasında asit ve retinole ara</span></div>
  <div data-gr style="--d:70ms"><b>4–8</b><span>Seanslık kür</span></div>
  <div data-gr style="--d:140ms"><b>1–2&#8239;hf</b><span>İki seans arası</span></div>
  <div data-gr style="--d:210ms"><b>20–40&#8239;dk</b><span>Yüzde seans süresi</span></div>
</div></div>

<!-- BU NEDİR / BU NE DEĞİLDİR -->
<section class="bolum" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Tanım ve sınırlar</p><h2>Elektroporasyon cilde ne yapar, hangi yöntemin yerine geçmez?</h2><p class="giris">Kuru, donuk ya da yorgun görünen bir cildin arkasında bariyer bozukluğundan yanlış ürün kullanımına kadar farklı nedenler olabilir. İğnesiz mezoterapi bu nedenler ayrıştırıldıktan sonra, bir bakım planının parçası olarak konuşulur. Şikâyet başlıklarının tamamı <a href="${r}cilt-sorunlari/">cilt sorunları</a> bölümünde yer alıyor.</p></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>Cilde temas eden başlık milisaniyeler süren, düşük şiddetli elektrik darbeleri gönderir. Bu darbeler derinin en dış katmanındaki yağlı yapıların arasında kısa ömürlü geçiş aralıkları açar; tıptaki adı elektroporasyondur. Bu sırada deriye iğne girmez, kesi ya da delik oluşmaz.</p>
<p>Açılan aralıklar uzun ömürlü değildir; kısa süre sonra deri onları kendisi kapatır ve solüsyonun içeri yol bulabildiği zaman dilimi bu kadardır. İçeri ne kadar ürün geçeceği molekülün boyutuna ve elektrik yüküne, bir de o gün derinin ne kadar sağlıklı olduğuna bağlıdır.</p>
<p>Bu yüzden solüsyon rastgele seçilmez. Tercih edilenler, düşük ağırlıklı hyalüronik asit ya da peptit gibi küçük moleküllü, steril ve bu kullanım için hazırlanmış içeriklerdir; evdeki serum şişeleri bu iş için tasarlanmamıştır.</p>
<p><b>Kullanılan cihaz:</b> elektroporasyon cihazı (Mes Button).</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:80ms">
        <b>Bu ne değildir</b>
        <p>İğneli mezoterapide ürünün hangi derinliğe, ne kadar bırakıldığını hekim belirler ve dosyaya yazar. Elektroporasyonda ise solüsyonun hangi katmana kadar ilerlediğini seçmek ya da içeri geçen miktarı ölçmek mümkün değildir. Bu nedenle iğnesiz yöntem <a href="${r}uygulamalar/mezoterapi/">iğneli mezoterapinin</a> yerine konmaz.</p>
<p>İri moleküller bu yolla neredeyse hiç geçmez. Sık karıştırılan bir nokta da şudur: “gençlik aşısı” adıyla bilinen işlem, hyalüronik asidin iğneyle cilt içine verildiği <a href="${r}uygulamalar/genclik-asisi-skinbooster/">skinbooster</a> uygulamasıdır; bu yöntemle ilgisi yoktur.</p>
<p>Morluk ya da ürünün damara kaçması gibi iğneye özgü sorunlar burada görülmez. Bu, yöntemin tamamen zararsız olduğu anlamına gelmez: akım kızarıklık ve karıncalanma, solüsyon ise tahriş ya da aşırı duyarlılık tepkisi yapabilir. Etkisi yüzeyde kalır ve birkaç hafta içinde azalır; cilt kalitesinde daha kalıcı bir değişim hedefleniyorsa iğneli seçenekler öne çıkar.</p>
      </div>
    </div>
  </div>
</section>

<!-- BENTO -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Planlama</p><h2>Kür nasıl planlanır, kimler için uygun değildir?</h2><p class="giris">İğne fikri sizi rahatsız ediyorsa, kolay morarıyorsanız ya da cildiniz birçok üründe kızarıyorsa bu yöntem gündeme gelebilir.</p></div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="65" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>4–8</b></div>
        <p><b style="color:var(--murekkep)">Kür</b><br>Tek seanslık bir etki beklenmez; seanslar birkaç hafta boyunca kısa aralıklarla tekrarlanır. Cildinizin tepkisine göre kür ara kontrollerde kısaltılır ya da uzatılır.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Hangi içerik ne kadar geçer?</span>
        <div class="g-cubuk"><small><span>KÜÇÜK, SUDA ÇÖZÜNEN</span><span>Kolay ilerler</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="85%"></b></div></div>
        <div class="g-cubuk"><small><span>ORTA BOY</span><span>Kısmen</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="45%"></b></div></div>
        <div class="g-cubuk"><small><span>İRİ MOLEKÜL</span><span>Neredeyse hiç</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="10%"></b></div></div>
        <p style="font-size:.68rem;color:var(--sessiz);margin-top:8px">Çubuk boyları yalnız karşılaştırma içindir; size özel plan muayenede kurulur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Protokol</span>
        <ol class="g-protokol">
          <li>Hedefin konuşulması: bu yöntem beklentinizi karşılayabilir mi?</li>
          <li>Elektronik implant, nöbet öyküsü, gebelik ve ilaçların sorulması</li>
          <li>Onam formunun birlikte okunup imzalanması</li>
          <li>Makyajın temizlenmesi, solüsyonun sürülmesi ve başlıkla eşit geçişler</li>
          <li>Cildin tepkisinin kaydı ve <a href="${r}uygulamalar/uygulama-sonrasi-takip/" style="color:inherit">takip planı</a></li>
        </ol>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Kimlerde yapılmaz ya da ertelenir?</b>
        <p>Vücudunuzda kalp pili, şok cihazı, insülin pompası ya da sinir uyarıcı gibi elektronik bir cihaz varsa elektrik akımı kullanılan hiçbir uygulama yapılmaz. Sara ya da nöbet öykünüz varsa ilgili hekiminizin görüşü alınmadan başlanmaz. Gebelik ve emzirmede hem akımın hem de solüsyon içeriklerinin güvenliğine dair yeterli bilgi olmadığı için beklenir.</p>
<p>Yüzde uçuk, kıl dibi iltihabı, alevlenmiş egzama, enfeksiyon ya da kapanmamış bir yara varsa önce deri toparlanır. Vitamin, peptit, koruyucu madde ya da bitki özlerine karşı bilinen bir aşırı duyarlılığınız varsa solüsyon buna göre seçilir.</p>
<p>Yüzünüzde sürekli kızarıklık yapan gül hastalığı (rozasea), kepeklenmeyle giden seboreik dermatit ya da yaygın iltihaplı sivilce varsa önce bunlar yatıştırılır. Kuşkulu bir ben önce büyütmeli olarak incelenir. Yüzde metal plaka ya da vida gibi bir implant varsa akımın o bölgeye verilip verilmeyeceğine ayrıca karar verilir. Yakın zamanda peeling, <a href="${r}uygulamalar/fraksiyonel-lazer/">lazer</a> ya da <a href="${r}uygulamalar/altin-igne-radyofrekans/">radyofrekans mikroiğne</a> yaptırdıysanız cildin önce kendini toparlaması gerekir.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/uyg-ignesiz-mezoterapi-2.webp" alt="Mermer tepside iğnesiz uygulama başlığı ve serum ampulleri" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">İlke</span><p>"İğnesiz yöntem iğneli yöntemin yedeği değil, başka bir hedefin aracıdır."</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Seans sonrası</span>
        <p style="font-size:.92rem">Seanstan sonra doğrudan işe dönebilirsiniz; hafif pembelik ya da gerginlik varsa birkaç saatte kaybolur. Cildiniz o akşam hâlâ normalden geçirgen olacağı için ertesi sabaha kadar yalnızca nemlendirici ve güneş koruyucu kullanın; asitli ya da retinollü ürünleri, taneli peelingleri ve alkollü tonikleri 12 saat bekletin. Sauna, hamam ve ağır antrenman için de ertesi günü bekleyin. Katkı birkaç hafta içinde azaldığından planların çoğunda aralıklı bakım seansları yer alır. Sonuçlar kişiden kişiye değişir. Cildiniz kolay tahriş oluyorsa uygulama sırasını <a href="${r}uygulamalar/hekim-muayenesi/">hekim muayenesi</a> sırasında birlikte belirleriz.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr style="--d:140ms"><h3>Hedefinizi birlikte netleştirelim</h3><p>Hedef belli olmadan seans planı yapılmaz.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu talebi</a></div>
      <div class="kutu kutu--acil g-b6" data-gr>
        <b>Hangi durumda hemen aramalısınız?</b>
        <p>Seanstan sonra ciltte kaşıntılı kabarıklıklar belirir, kızarıklık yüzün başka bölgelerine yayılır ya da yanma hissi birkaç günde geçmezse kontrol gününü beklemeden ${S.iletisim.tel} numarasını arayın. Kabarıklıklar vücuda yayılır, dudakta ya da göz kapaklarında hızla şişlik gelişir, nefes almak ya da yutkunmak zorlaşırsa bizi aramakla vakit kaybetmeyin; doğrudan <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
      </div>
    </div>
  </div>
</section>

<!-- SORU TERMİNALİ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLowerCase()} · iğnesiz mezoterapi · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>İğne istemiyorum; bu yöntem bana yeter mi?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Seans sırasında ne hissederim?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>“Gençlik aşısı” ile aynı şey mi?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Kalp pili ya da insülin pompası kullanıyorum, olur mu?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Boyun ve ellere de yapılır mı?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nasıl öğrenebilirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["İğne istemiyorum; bu yöntem bana yeter mi?","Hedefinize bağlı. Amaç cildin belirli bir katmanına ölçülü miktarda ürün bırakmaksa bunu yalnızca iğneli yöntem sağlar. Amaç daha çok yüzeyde nem ve canlılık desteğiyse, özellikle iğneden çekinen ya da kolay moraran kişilerde iğnesiz yöntem mantıklı bir seçenek olabilir; ancak iri moleküllü ürünler bu yolla taşınamaz."],["Seans sırasında ne hissederim?","Çoğu kişi hafif bir karıncalanma ve ılıklık tarif eder, bazen de başlığın altında belli belirsiz bir titreşim. Elmacık kemiği ve göz çevresi gibi ince derili yerlerde his artabilir; rahatsız ederse cihazın gücü azaltılır ya da ara verilir."],["“Gençlik aşısı” ile aynı şey mi?","Değil. Halk arasında gençlik aşısı denen uygulama, hyalüronik asidin ince iğnelerle cilt içine verildiği skinbooster uygulamasıdır. Burada iğne kullanılmaz; solüsyon elektrik darbeleriyle açılan geçici aralıklardan ilerler ve daha yüzeyde kalır. Bu iki işlem birbirinin yerine anılmamalıdır."],["Kalp pili ya da insülin pompası kullanıyorum, olur mu?","Olmaz. Yöntem elektrik akımıyla çalıştığı için vücutta elektronik bir cihaz taşıyan herkeste kullanılmaz. Böyle bir durumda cildinize uygun, akım gerektirmeyen başka basamakları birlikte planlarız."],["Boyun ve ellere de yapılır mı?","Yapılır. Yüzün ardından en çok boynun ve göğüs üstünün ince derisi ile ellerin üst yüzü çalışılır. Bu bölgeler daha yavaş yanıt verdiği için seans aralığı farklı planlanabilir. Saçlı deri ayrı bir konudur; dökülmenin nedeni anlaşılmadan plan yapılmaz."],["Ücret bilgisini nasıl öğrenebilirim?","Sağlık hizmetlerinin tanıtımını düzenleyen kurallar ücretlerin internette yayımlanmasına izin vermez. Kaç seanslık kür gerektiği kişiye göre değiştiği için bu konu muayenede konuşulur."]]</script>

<!-- KAPANIŞ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Hangi yöntemin size uyduğunu birlikte seçelim</h2>
    <p class="g-sonalt">İğneli ya da iğnesiz yöntem arasındaki tercih, hedefinize ve cildinizin durumuna göre muayenede yapılır.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
