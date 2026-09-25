const S = require('../../site');

module.exports = {
  slug: 'bolgeler/vucut',
  tip: 'tibbi',
  baslik: 'Vücut: karın, bel, kol ve bacakta lipoliz, selülit, dövme',
  aciklama: 'Karın, bel, kol ve bacakta bölgesel yağlanma, selülit görünümü ve dövme silme için değerlendirme. Plan kilo verme vaadi olmadan, bölgeye ve dokuya göre kurulur.',

  icerik: (r, ik) => `

<!-- 1 ── HERO -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}bolgeler/" style="color:var(--sessiz);text-decoration:none">Bölgeler</a> › <span>Vücut</span></nav>
      <p class="g-etiket">Bölge rehberi · Vücut</p>
      <h1>Vücutta plan <span class="g-isik">bölgeye ve dokuya</span> göre kurulur.</h1>
      <p class="g-hero__alt">Karın, bel, kol ve bacakta en sık dile getirilen konular yerel yağ birikimi, selülit görünümü ve silinmek istenen dövmelerdir. Üçü farklı dokularda, farklı süreçlerle ortaya çıkar; aynı muayenede konuşulsalar da ayrı planlanırlar. Bu uygulamalar kilo vermenin yerine geçmez; amaç, belirli bir alandaki görünümde ölçülü bir değişim hedeflemektir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#kapsam">Hangi bölgeler? ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Uygulamayı hekim yapar</span><span><i></i>Bölgeye göre ayrı plan</span><span><i></i>Lazerde önce deneme atışı</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/bolge-vucut.webp" width="1400" height="788" alt="Bel ve karın bölgesini gösteren üç boyutlu stilize görsel" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- 2 ── VERİ BANDI -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="4">0</em></b><span>Bölge: karın, bel, kol, bacak</span></div>
  <div data-gr style="--d:70ms"><b><em data-gsay="3">0</em></b><span>Ana başlık</span></div>
  <div data-gr style="--d:140ms"><b><em data-gsay="8">0</em></b><span>Değerlendirilen uygulama</span></div>
  <div data-gr style="--d:210ms"><b><em data-gsay="48">0</em></b><span>Saat sıcak ortam ve spor arası</span></div>
</div></div>

<!-- 3 ── KAPSAM -->
<section class="bolum" id="kapsam">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Kapsam</p><h2>Vücut bölgesi neleri kapsar, plan neden bölgeye göre ayrılır?</h2></div>
    <div class="kutu kutu--bilgi" data-gr>
      <b>Hangi bölgelerde çalışıyoruz?</b>
      <p>Vücuda yönelik uygulamalarda karın, bel ve yan bel, üst kolun iç yüzü, uyluklar ve diz üstü değerlendirilir. Dövme silmede ise dövmenin bulunduğu yer ayrıca incelenir; mürekkebin rengi ve derinliği ile cildin yapısı planı belirler.</p>
    </div>
    <div class="izgara izgara--2" style="margin-top:20px">
      <div class="kart kart--duz" data-gr>
        <h3>Bu bölgeler neden ayrı ele alınır?</h3>
        <p>Karın ve belde deri altı yağ tabakası kalındır; kolun iç yüzünde deri ince ve gevşemeye yatkındır; uyluklar ise selülit görünümünün en sık belirdiği bölgedir. Aynı uygulama her alanda aynı miktar, derinlik ve seans aralığıyla yapılmaz; iyileşme süresi ve giysi sürtünmesi de bölgeden bölgeye değişir.</p>
      </div>
      <div class="kart kart--duz" data-gr style="--d:80ms">
        <h3>Nerede duruyoruz?</h3>
        <p>Bu uygulamaların hepsi cerrahi olmayan yöntemlerdir. Belirgin deri fazlalığı, karın duvarında gevşeme ya da geniş hacimli yağ birikimi gibi tablolarda beklenen değişimi sağlayamazlar; cerrahi yağ alma ya da karın germe gibi işlemler muayenehanenin kapsamı dışındadır.</p>
<p>Böyle bir tablo görülürse bunu ilk görüşmede açıkça söyler, ilgili cerrahi uzmanlık dalına yönlendirme yaparız. Bu sınırı neden koyduğumuzu <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a> sayfasında açıkladık.</p>
      </div>
    </div>
  </div>
</section>

<!-- 4 ── ATLAS -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Bölge atlası</p><h2>Vücut için en çok hangi isteklerle geliniyor?</h2><p class="giris">Vücut bölgelerinde gelen isteklerin büyük bölümü üç başlıkta toplanır; her biri farklı bir dokuya ve farklı bir sürece dayanır.</p></div>
    <div class="g-atlas-duzen">
      <div class="g-atlas" data-gr>
        <div class="g-atlas-kap">
          <img src="${r}varliklar/gorsel/grup-cihaz.webp" width="1600" height="900" alt="Tepside duran lazer başlığının yakın plan görünümü" loading="lazy">
          <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
          <div class="g-rozetk" data-grozet><b>Bölgesel yağlanma</b><span>Kilo vermeye dirençli yerel birikim; genel kilo fazlasının yerine geçen bir çözüm değildir.</span></div>
        </div>
      </div>
      <div data-gr style="--d:80ms">
        <div class="g-katblok" data-gkat="a">
          <span class="g-kno">01</span>
          <h3>Bölgesel yağlanma</h3>
          <p>Karın altında, belin iki yanında, üst kolun iç yüzünde ya da uylukların iç tarafında, diyet ve egzersize karşın azalmayan yerel yağ birikimleridir. Genetik yatkınlık ve hormonlar bu birikimin yerini belirler. Genel kilo fazlası varsa önce o ele alınır; yerel uygulamalar bu tabloda anlamlı bir fark yaratmaz.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/bolgesel-lipoliz/">Bölgesel lipoliz</a><a href="${r}cilt-sorunlari/bolgesel-yaglanma/">Bölgesel yağlanma</a></div>
        </div>
        <div class="g-katblok" data-gkat="b">
          <span class="g-kno">02</span>
          <h3>Selülit görünümü</h3>
          <p>Deri altındaki yağ bölmelerinin bağ dokusu bantları arasından yüzeye doğru itilmesiyle oluşan, portakal kabuğunu andıran dalgalı bir görünümdür. En sık uyluklarda görülür ve kilolu olmayan kişilerde de bulunabilir.</p>
          <p>Dolaşım, bağ dokusunun esnekliği ve hormonal etkenler tabloyu değiştirir. Bu nedenle tek bir yöntemle değil, mezoterapi, lipoliz ve cihaz uygulamalarının birlikte düşünüldüğü bir planla ele alınır; tümüyle kaybolması beklenmez.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/selulit-gorunumu/">Selülit görünümü</a><a href="${r}uygulamalar/mezoterapi/">Mezoterapi</a><a href="${r}cilt-sorunlari/selulit/">Selülit</a></div>
        </div>
        <div class="g-katblok" data-gkat="c">
          <span class="g-kno">03</span>
          <h3>Dövme ve istenmeyen renk</h3>
          <p>Vücudun herhangi bir yerindeki dövme, pikosaniye lazerin çok kısa atımlarıyla mürekkep parçacıklarını küçültmek amacıyla seanslara bölünerek ele alınır. Seans sayısı mürekkebin rengine, derinliğine, dövmenin yaşına ve cilt tipine göre değişir; görünümün seanslar içinde açılması hedeflenir.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/pico-lazer-dovme-silme/">Pico lazer ile dövme silme</a><a href="${r}cilt-sorunlari/dovme-ve-kalici-makyaj/">Dövme ve kalıcı makyaj</a></div>
        </div>
      </div>
    </div>
  </div>
</section>
<script type="application/json" data-gnokta-veri>{"a":["Bölgesel yağlanma","Kilo vermeye dirençli yerel birikim; genel kilo fazlasının yerine geçen bir çözüm değildir."],"b":["Selülit görünümü","Tek yöntemle değil, birleşik bir planla ele alınır; tümüyle kaybolması beklenmez."],"c":["Dövme","Seans sayısını mürekkebin rengi, derinliği ve cilt tipi belirler."]}</script>

<!-- 5 ── MATRİS -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Uygulamalar</p><h2>Vücut için hangi seçenekler konuşulabilir?</h2><p class="giris">Aşağıdaki seçenekler muayenenin sonucuna göre ve ilgili bölgeye uyarlanarak değerlendirilir. Vücutta işlem yapılan alan yüzden çok daha geniştir; seans sayısı, aralıklar ve iyileşme süresi de buna göre değişir.</p></div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Yöntem</span><span>Amaç</span><span>Toparlanma</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/bolgesel-lipoliz/" data-gg="${r}varliklar/gorsel/uyg-bolgesel-lipoliz.webp" data-gb="Bölgesel lipoliz" data-ga="Karın, bel, kol iç yüzü ve uylukta diyete dirençli yerel yağ birikiminde değerlendirilir. Kilo verme yöntemi değildir; genel kilo fazlası olanlarda planlanmaz."><h4>Bölgesel lipoliz</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">YEREL YAĞ</i></span><span class="g-hucre">Birkaç gün şişlik</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/selulit-gorunumu/" data-gg="${r}varliklar/gorsel/uyg-selulit-gorunumu.webp" data-gb="Selülit görünümü" data-ga="Mezoterapi, lipoliz ve cihaz desteğinin birlikte düşünüldüğü bir protokoldür; amaç yüzeydeki dalgalanmanın hafiflemesidir."><h4>Selülit görünümü</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">CİLT YÜZEYİ</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/pico-lazer-dovme-silme/" data-gg="${r}varliklar/gorsel/uyg-pico-lazer-dovme-silme.webp" data-gb="Pico lazer ile dövme silme" data-ga="Pikosaniye atımlarla mürekkep parçacıklarının küçültülmesi hedeflenir; seanslar arasında genellikle birkaç hafta bırakılır."><h4>Pico lazer ile dövme silme</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">ENERJİ</i></span><span class="g-hucre">Birkaç gün–1 hafta</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/mezoterapi/" data-gg="${r}varliklar/gorsel/uyg-mezoterapi.webp" data-gb="Mezoterapi" data-ga="Selülit görünümünde ve kol iç yüzü gibi ince, kuru derili alanlarda cilt kalitesine yönelik destekleyici basamaktır."><h4>Mezoterapi</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">CİLT KALİTESİ</i></span><span class="g-hucre">Birkaç saat–1 gün</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/altin-igne-radyofrekans/" data-gg="${r}varliklar/gorsel/uyg-altin-igne-radyofrekans.webp" data-gb="Altın iğne radyofrekans" data-ga="Karın ve uylukta çatlak görünümü ile hafif gevşemede, seçilmiş durumlarda değerlendirilebilir."><h4>Altın iğne radyofrekans</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">ENERJİ</i></span><span class="g-hucre">2–3 gün kızarıklık</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/fraksiyonel-lazer/" data-gg="${r}varliklar/gorsel/uyg-fraksiyonel-lazer.webp" data-gb="Fraksiyonel lazer" data-ga="Çatlak ve iz görünümünde, bölgenin iyileşme hızı gözetilerek aralıklı seanslarla planlanır."><h4>Fraksiyonel lazer</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">ENERJİ</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/biyostimulan-uygulamalar/" data-gg="${r}varliklar/gorsel/uyg-biyostimulan-uygulamalar.webp" data-gb="Biyostimülan uygulamalar" data-ga="Kol iç yüzü ve diz üstü gibi gevşemeye yatkın alanlarda kolajen yapımını zamana yayarak desteklemek için konuşulabilir."><h4>Biyostimülan uygulamalar</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">DOKU DESTEĞİ</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/pico-lazer-leke/" data-gg="${r}varliklar/gorsel/uyg-pico-lazer-leke.webp" data-gb="Pico lazer ile leke" data-ga="Omuz, kol ve bacaktaki güneşe bağlı yüzeysel lekelerde, önce lekenin türü ayrıldıktan sonra değerlendirilir."><h4>Pico lazer ile leke</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">ENERJİ</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-bolgesel-lipoliz.webp" alt=""></div><div class="g-ic"><h4>Bölgesel lipoliz</h4><p>Karın, bel, kol iç yüzü ve uylukta diyete dirençli yerel yağ birikiminde değerlendirilir. Kilo verme yöntemi değildir; genel kilo fazlası olanlarda planlanmaz.</p><a class="dgm dgm--iki" href="${r}uygulamalar/bolgesel-lipoliz/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- 6 ── PLAN + SINIRLAR -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Süreç</p><h2>Vücut için plan hangi adımlarla ilerler?</h2><p class="giris">İlk görüşmede işlem yapılacağını varsaymayın. İlk adım, isteğinizin cerrahi olmayan bir yöntemle karşılanıp karşılanamayacağını netleştirmektir.</p></div>
    <div class="g-bento">
      <div class="g-kutu g-b3" data-gr><span class="g-ket">ADIMLAR</span>
        <ol class="g-protokol">
          <li><b>Beklenti ve uygunluk:</b> hangi bölgede ne tür bir değişim istediğiniz konuşulur; beklenen sonuç ancak cerrahiyle elde edilebilecekse bu uygulamalar önerilmez, ilgili branşa yönlendirilirsiniz.</li>
          <li><b>Muayene ve altta yatan nedenin araştırılması:</b> yağ dağılımı, deri esnekliği ve selülitin derecesi değerlendirilir; hızlı kilo alımı, hormonal düzensizlik ya da tiroid kuşkusu varsa önce bunlar araştırılır, gerekirse tahlil istenir.</li>
          <li><b>Deneme alanı ve ayar:</b> lazerle yapılan işlemlerde önce küçük bir alanda deneme atışı yapılır; cildin yanıtı görülmeden bütün alana geçilmez.</li>
          <li><b>Seans serisi ve kontrol:</b> seans aralıklarını bölge ve yöntem belirler; her yeni seanstan önce bölgeyi yeniden muayene ederiz. Kontrollerde nelere bakıldığını <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası takip</a> sayfasında bulabilirsiniz.</li>
        </ol>
      </div>
      <div class="g-kutu g-b3 g-kutu--gece" data-gr style="--d:80ms"><span class="g-ket">İLKE</span><p>&#8220;Bölgesel bir uygulamayı kilo vermenin yerine koymayız; beklenen değişim ölçülü değilse işleme başlamayız.&#8221;</p></div>
      <div class="kutu kutu--uyari g-b4" data-gr style="--d:140ms">
        <b>Kimlere yapılmaz ya da ertelenir?</b>
        <ul>
          <li><b>Gebelik ve emzirme:</b> bu dönemlerde girişimsel işlem yapılmaz.</li>
          <li><b>Genel kilo fazlası ve kilo verme beklentisi:</b> yerel yağ uygulamaları bu amaçla planlanmaz; önce genel değerlendirme gerekir.</li>
          <li><b>Bölgede aktif enfeksiyon:</b> açık yara, kıl kökü iltihabı ya da mantar kuşkusunda bölge yatışana kadar beklenir.</li>
          <li><b>Yeni bronzlaşmış ya da güneşte yanmış deri:</b> lazer uygulamalarında çoğunlukla en az dört hafta beklenir; solaryum ve bronzlaştırıcı ürünler de buna dâhildir.</li>
          <li><b>Kalın iz (keloid) eğilimi:</b> özellikle dövme silmede yöntem ve ayar seçimi daralır.</li>
          <li><b>Yeni yapılmış ya da iyileşmemiş dövme:</b> dövme bölgesi bütünüyle iyileşene kadar beklenir; kabuklu ya da kızarık bir alana lazer uygulanmaz.</li>
          <li><b>Işığa duyarlılık yaratan ilaçlar:</b> bazı antibiyotikler ve sivilce ilaçları lazer işlemlerinin ertelenmesini gerektirir.</li>
          <li><b>Kontrol altında olmayan diyabet, karaciğer ya da böbrek hastalığı, kanama eğilimi ve bilinen aşırı duyarlılıklar:</b> düzenli kullandığınız ilaçları ve daha önce yaşadığınız tepkileri muayenede mutlaka anlatın.</li>
        </ul>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:210ms"><span class="g-ket">KAPSAM</span>
        <p>Muayenehanede yalnızca hekimin uzmanlığı ve Sağlık Bakanlığı onaylı sertifikası kapsamındaki işlemler yapılır. Cerrahi yağ alma, karın germe ve deri fazlalığının alınması bu kapsamda yer almaz; bu isteklerde yönlendirme yapılır.</p>
      </div>
    </div>
  </div>
</section>

<!-- 7 ── SONRASI + BEKLENTİ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Sonrası</p><h2>İşlemden sonraki günler nasıl geçer?</h2></div>
    <div class="izgara izgara--2">
      <div class="kart kart--duz" data-gr>
        <h3>İlk günler</h3>
        <p>İşlem sonrası önerilerin çoğu, bölgeyi sürtünmeden, sıcaktan ve terden korumaya yöneliktir. İşlemden sonraki iki gün sauna, hamam, havuz, deniz ve ağır spor bekleyebilir. Lipolizden sonra bölgede birkaç gün sürebilen şişlik, hassasiyet ve morarma olabilir; bu dönemde bölgeyi sıkan dar giysilerden kaçınmak rahatlatır.</p>
        <p>Dövme silmeden sonra işlem yapılan alanda kızarıklık, hafif şişlik, kabuklanma ve kimi zaman su kabarcıkları görülebilir; kabukları koparmamanız ve bölgeyi verilen talimata göre temiz tutmanız istenir. İyileşme süresince alanı doğrudan güneşten korumanız gerekir. Randevudan önce bilmeniz gerekenleri <a href="${r}hazirlik-listesi/">hazırlık listesi</a> sayfasında topladık.</p>
      </div>
      <div class="kart kart--duz" data-gr style="--d:80ms">
        <h3>Gerçekçi beklenti</h3>
        <p>Vücutta değişim, yüze kıyasla daha geç ve daha sınırlı görünür. Yerel yağ uygulamalarında tartıdaki değerin değişmesi beklenmez; hedeflenen, belirli bir alandaki çevre ve hattın hafiflemesidir. Selülit görünümü tümüyle kaybolmaz; yüzeydeki dalgalanmanın azalması hedeflenir ve etkinin sürmesi yaşam alışkanlıklarına bağlıdır.</p>
        <p>Dövme silmede seans sayısı önceden söylenemez; bazı renkler ve yoğun işlenmiş mürekkepler daha dirençlidir, görünüm seanslar içinde açılır ve kimi zaman hafif bir iz ya da renk farkı kalabilir. Belirgin deri fazlalığında cerrahi olmayan yöntemlerin sınırı biter. Yaklaşımımızın çerçevesi <a href="${r}yaklasimimiz/">nasıl çalışıyoruz</a> sayfasında.</p>
      </div>
    </div>
  </div>
</section>

<!-- 8 ── SORU TERMİNALİ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Soru–cevap</p><h2>Aklınızdaki soruyu seçin, yanıtı yanda okuyun</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr')} · vücut · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Bölgesel lipoliz kilo vermemi sağlar mı?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Selülit tamamen geçer mi?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Dövmem kaç seansta silinir?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Karın ve bacak için aynı gün birden fazla uygulama yapılabilir mi?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Tatilden bronz döndüm; lazere ne zaman başlayabilirim?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini buradan öğrenebilir miyim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede birlikte bakalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Bölgesel lipoliz kilo vermemi sağlar mı?","Hayır. Bölgesel lipoliz, diyet ve egzersize karşın azalmayan yerel yağ birikimini hedefleyen bir uygulamadır; tartıdaki değeri değiştirmesi beklenmez. Genel kilo fazlası varsa önce o ele alınır. Uygun kişilerde amaç, belirli bir alandaki hattın ve çevrenin hafiflemesidir; değişimin ölçüsü kişiden kişiye farklıdır."],["Selülit tamamen geçer mi?","Selülit görünümü deri altındaki yapının bir özelliğidir ve tümüyle ortadan kalkması beklenmez. Mezoterapi, lipoliz ve cihaz desteğinin birlikte düşünüldüğü bir planla yüzeydeki dalgalanmanın hafiflemesi hedeflenir. Etkinin sürmesi hareket, kilo dengesi ve dolaşım gibi günlük alışkanlıklarla yakından ilişkilidir."],["Dövmem kaç seansta silinir?","Seans sayısı önceden söylenemez. Mürekkebin rengi ve yoğunluğu, dövmenin ne kadar derine ve ne zaman yapıldığı, bulunduğu bölge ve cilt tipi belirleyicidir. Siyah ve koyu mavi mürekkep genellikle daha iyi yanıt verirken bazı açık ve parlak renkler daha dirençlidir. Seanslar arasında birkaç hafta beklenir ve görünümün seanslar boyunca açılması hedeflenir."],["Karın ve bacak için aynı gün birden fazla uygulama yapılabilir mi?","Bazı birleşimler aynı gün planlanabilir, ancak çoğunlukla ayrılır. Aynı bölgeye aynı gün birden çok işlem yapıldığında şişlik, morarma ya da olası bir tepkinin hangi adımdan geldiğini ayırt etmek zorlaşır. Geniş alanlarda uygulama yükünü seanslara bölmek iyileşmeyi de kolaylaştırır."],["Tatilden bronz döndüm; lazere ne zaman başlayabilirim?","Bronzlaşmış deri lazer ışığını daha fazla emer; bu da istenmeyen renk değişikliği ya da yanık riskini artırır. Bu yüzden son güneşlenmenizin üzerinden çoğunlukla en az dört hafta geçmesini bekleriz. Solaryuma girdiyseniz ya da bronzlaştırıcı bir ürün kullandıysanız da aynı süre geçerlidir."],["Ücret bilgisini buradan öğrenebilir miyim?","Hayır. Sağlık hizmetlerinin tanıtımına ilişkin mevzuat nedeniyle sitemizde işlem ücretleri yayımlanmaz. Vücut planı bölgeye ve seans sayısına göre kişiden kişiye değiştiği için ücret, muayenede plan netleştikten sonra size ayrıca bildirilir. Çerçeveyi mevzuat sayfasında anlattık."]]</script>

<!-- 9 ── KAPANIŞ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Vücut planınızı muayenede netleştirelim</h2>
    <p class="g-sonalt">İsteğinizin cerrahi olmayan bir yöntemle karşılanıp karşılanamayacağını ilk görüşmede açıkça konuşuyoruz. Değerlendirme için ${S.iletisim.semt} muayenehanemizden randevu talep edebilirsiniz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
