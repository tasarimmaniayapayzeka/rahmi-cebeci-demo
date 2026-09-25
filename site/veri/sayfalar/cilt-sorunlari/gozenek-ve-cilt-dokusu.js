const S = require('../../site');

module.exports = {
  slug: 'cilt-sorunlari/gozenek-ve-cilt-dokusu',
  tip: 'tibbi',
  baslik: 'Gözenek ve cilt dokusu: belirgin gözenek, pürüz ve iz',
  aciklama: 'Gözeneğin dikkat çekmesine yol açan yağ salgısı ve destek kaybı, pürüzlü yüzeyin nedenleri, akne izinin bunlardan farkı ve muayenede nelere bakıldığı.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}cilt-sorunlari/" style="color:var(--sessiz);text-decoration:none">Cilt sorunları</a> › <span>Gözenek ve cilt dokusu</span></nav>
      <p class="g-etiket">Cilt sorunları · Doku</p>
      <h1>Gözenekleriniz çoğalmaz; <span class="g-isik">görünürlükleri</span> artar</h1>
      <p class="g-hero__alt">Kaç gözeneğiniz olduğu doğuştan belirlenir ve bu sayı değişmez. Zamanla değişen, gözeneklerin ne kadar dikkat çektiğidir. Yağ salgısı, kanal ağzında tıkanma, yüzeyin kalınlaşması ve çevredeki destek dokunun azalması görünürlüğü artırır. Pürüzlü yüzey ve akne izi başka süreçlerle oluştuğu için ayrıca değerlendirilir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Muayene için randevu</a>
        <a class="dgm dgm--iki" href="#nedenler">Etkenleri inceleyin ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Bileşenler ayrı ayrı incelenir</span><span><i></i>Muayene ve plan hekimde</span><span><i></i>Gerçekçi hedef</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/sorun-gozenek-ve-cilt-dokusu.webp" width="1400" height="788" alt="Yanak ve burun geçişinde cilt yüzeyinin dokusunu gösteren makro çekim" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
    </div>
  </div>
</section>

<!-- ═════════ NEDENLER ═════════ -->
<section class="bolum bolum--sicak" id="nedenler">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Ayrım</p>
      <h2>Doku şikâyetinin ardında hangi etkenler var?</h2>
      <p class="giris">Doku şikâyetleri büyük ölçüde bakış mesafesine bağlıdır: birkaç adım öteden fark edilmez, aynaya iyice yaklaştığınızda ya da parlak bir lambanın altında göze batar. Bu yüzden kişi kendi cildini, çevresindekilerin gördüğünden daha sorunlu algılayabilir. Muayenede aşağıdaki bileşenler tek tek ele alınır.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">01</span>
      <h3>Yağ salgısı ve tıkanma</h3>
      <p>Çok çalışan bir yağ bezinin kanalı da geniş olur. Bu nedenle gözenekler en çok burunda, alnın ortasında ve çenede dikkat çeker; sıcak ve nemli havada daha da belirginleşir. Kanal ağzında yağ ve dökülmüş hücreler biriktiğinde gözenek genişler; biriken madde havayla temas edip koyulaştığı için siyah bir nokta gibi görünür. Burnunuzdaki koyu noktalar kirden oluşmaz.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/karbon-peeling/">Karbon peeling</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:60ms">
      <span class="g-kno">02</span>
      <h3>Destek kaybı ve güneş</h3>
      <p>Gözeneği çevreleyen doku esnekliğini yitirdiğinde gözenek açık kalmaya ve aşağı doğru uzamaya başlar; bu görünüm özellikle yanaklarda, damla biçiminde izlenir ve kuru ciltlerde de görülebilir. Yıllarca biriken güneş etkisi destek liflerini zayıflatır, yüzeyi de kalınlaştırır. Bu etkenler arasında sizin elinizde olan en güçlü adım düzenli güneş korumasıdır.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/altin-igne-radyofrekans/">Altın iğne radyofrekans</a><a href="${r}uygulamalar/fraksiyonel-lazer/">Fraksiyonel lazer</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:120ms">
      <span class="g-kno">03</span>
      <h3>Yüzeyde biriken hücreler</h3>
      <p>Deri kendini yaklaşık bir aylık bir döngüyle yeniler. Bu döngü yavaşladığında yüzeyde kalan ölü hücreler cildi dokunuşta pürüzlü, görünüşte mat yapar. Yağlı ciltte bu hücreler yağla birleşip kümelenir. Cildi kurutmaya yönelik girişimler bariyeri bozar, yağ yapımını artırır ve pürüz derinleşir; nem dengesi yerine oturduğunda bu bileşen belirgin biçimde azalır.</p>
      <div class="g-haplar"><a href="${r}cilt-sorunlari/nem-kaybi-ve-donukluk/">Nem kaybı ve donukluk</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:180ms">
      <span class="g-kno">04</span>
      <h3>Akne izinin yüzeyde yarattığı iniş çıkışlar</h3>
      <p>Akne izi, iltihabın derinde yol açtığı doku kaybının ya da aşırı doku yapımının kalıcı sonucudur. Yüzeyde biriken bir tabaka olmadığı için yüzeysel işlemlerle kaybolmaz. Çukur izler yandan gelen ışıkta belirginleşir; kabarık izler daha çok sırtta, omuzlarda ve çene hattında görülür. Yüzeyi düz olup yalnız rengi farklı kalan alanlar ise iz değil, renk değişikliğidir. İz planlamasına geçmeden önce aktif aknenin sakinleşmiş olması gerekir.</p>
      <div class="g-haplar"><a href="${r}cilt-sorunlari/akne-ve-akne-izi/">Akne ve akne izi</a><a href="${r}cilt-sorunlari/cilt-tonu-ve-leke/">Cilt tonu ve leke</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:240ms">
      <span class="g-kno">05</span>
      <h3>Durumu ağırlaştıran alışkanlıklar</h3>
      <p>En sık karşılaştığımız sorun, düzeltme çabasının tabloyu kötüleştirmesidir. Gözenekleri parmakla sıkmak, tıkanan maddeyi daha derine göndererek iz riskini artırır. Granüllü ürünlerle sert ovmak koruyucu tabakayı aşındırır. Cildi kurutan ürünler yağ bezlerini daha çok çalışmaya iter. Aynı akşam üst üste sürülen aktif içerikler cildin sınırını zorlar. Güneşten korunmamak ise yenilenmeyi yavaşlatıp gözenek çevresindeki desteği zayıflatır. Kapalı komedonlar, küçük beyaz kistler ve büyümüş yağ bezleri de gözenekle karıştırılabilir; bunlar farklı ele alınır.</p>
    </div>
    <div class="kutu kutu--uyari" data-gr style="margin-top:26px">
      <b>Değişen bir kabarıklık doku sorunu sayılmaz</b>
      <p>Birkaç hafta ya da ay içinde büyüyen, kanayan, kabuk bağlayan, bir türlü iyileşmeyen ya da renkleri eşit dağılmayan bir kabarıklık estetik bir konu değildir. Böyle bir lezyona önce dermatoskopla bakılır; gerek görülürse bir dermatoloji uzmanına başvurmanız önerilir.</p>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Sonrası</p>
      <h2>Öne çıkan bileşen belli olunca hangi seçenekler konuşulur?</h2>
      <p class="giris">Cilt hazır olduğunda ve uygun görülürse aşağıdaki başlıklar değerlendirilir. Değişimin ölçüsü kişiden kişiye farklıdır; bakım alışkanlıkları bırakıldığında kazanılan görünüm geriler. Size özel plan yalnızca muayenede kurulur.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Uygulama</span><span>Hedef</span><span>İyileşme</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/altin-igne-radyofrekans/" data-gg="${r}varliklar/gorsel/uyg-altin-igne-radyofrekans.webp" data-gb="Altın iğne radyofrekans" data-ga="Gözenek çevresindeki destek dokuyu ve iz alanlarını hedefler; değişim aylar içinde, aşamalı olarak izlenir."><h4>Altın iğne radyofrekans</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">DESTEK</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/fraksiyonel-lazer/" data-gg="${r}varliklar/gorsel/uyg-fraksiyonel-lazer.webp" data-gb="Fraksiyonel lazer" data-ga="Kontrollü mikro alanlarla yüzey dokusunun ve iz düzensizliğinin yenilenmesini uyarmayı amaçlar."><h4>Fraksiyonel lazer</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">İZ / DOKU</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/karbon-peeling/" data-gg="${r}varliklar/gorsel/uyg-karbon-peeling.webp" data-gb="Karbon peeling" data-ga="Yağlanma ve kanal ağzında tıkanma eğiliminde, yüzeyin daha düzgün görünmesine yönelik bir uygulamadır."><h4>Karbon peeling</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">YÜZEY</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/ignesiz-mezoterapi/" data-gg="${r}varliklar/gorsel/uyg-ignesiz-mezoterapi.webp" data-gb="İğnesiz mezoterapi" data-ga="Nem dengesinin bozulduğu, pürüzlü ve mat yüzeyde aktif maddelerin iğne kullanılmadan deriye iletilmesini amaçlar."><h4>İğnesiz mezoterapi</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">NEM</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-altin-igne-radyofrekans.webp" alt=""></div><div class="g-ic"><h4>Altın iğne radyofrekans</h4><p>Gözenek çevresindeki destek dokuyu ve iz alanlarını hedefler; değişim aylar içinde, aşamalı olarak izlenir.</p><a class="dgm dgm--iki" href="${r}uygulamalar/altin-igne-radyofrekans/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sorgulayın</p><h2>Sorunuzu seçin, cevap ekrana düşsün</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr-TR')} · gözenek ve doku · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Gözeneklerim tümüyle kapanabilir mi?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Burnumdaki siyah noktalar kirden mi oluşuyor?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Buz ya da soğuk su gözenekleri küçültür mü?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Cildim yağlı; yine de nemlendirici kullanmalı mıyım?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Dokudaki değişim ne zaman fark edilir?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekim onaylı yanıt</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede konuşalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Gözeneklerim tümüyle kapanabilir mi?","Hayır. Gözenekler derinin olağan yapısının bir parçasıdır ve kapanmaları beklenmez. Hedeflenen, daha az dikkat çekmeleridir. Gözenekleri tümüyle ortadan kaldırmayı vaat eden bir yaklaşım gerçekçi değildir."],["Burnumdaki siyah noktalar kirden mi oluşuyor?","Hayır. Koyu renk, gözenek ağzındaki yağ ve ölü hücre karışımının havayla temas edip oksitlenmesinden gelir. Sert temizleyicilerle ya da ovarak geçmezler; ovmak yalnızca bariyeri zedeler ve kızarıklığa yol açar."],["Buz ya da soğuk su gözenekleri küçültür mü?","Soğuk, kısa süreli bir gerginlik hissi verebilir; ancak gözenek ağzını kalıcı olarak daraltmaz. Gözeneklerin açılıp kapanmasını sağlayan bir kas yapısı yoktur. Sıcak ve soğukla görülen fark, geçici kan akımı ve şişlik değişikliklerinden kaynaklanır."],["Cildim yağlı; yine de nemlendirici kullanmalı mıyım?","Evet. Yağ ile su farklı ihtiyaçlardır ve yağlı bir cilt de su kaybedebilir. Nemlendirici tümüyle bırakıldığında koruyucu tabaka zayıflar; cilt bunu daha fazla yağ üreterek dengelemeye çalışabilir. Hangi ürünün uygun olduğu cildinizin toleransına göre birlikte belirlenir."],["Dokudaki değişim ne zaman fark edilir?","Yüzeyde biriken hücrelerden kaynaklanan pürüzlülükte birkaç hafta içinde fark görülebilir. Destek dokuya yönelik yöntemlerde değişim çoğunlukla aylar içinde ve aşamalı olarak belirginleşir; süre kişiden kişiye farklıdır."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Dokunuzda hangi bileşenin öne çıktığı muayenede belirlendikten sonra bilgi yüz yüze verilir. Randevu için ${S.iletisim.tel} numarasını arayabilir ya da aynı numaradan WhatsApp ile yazabilirsiniz."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Cildinizde hangi bileşenin öne çıktığını birlikte görelim</h2>
    <p class="g-sonalt">Muayenede cilt yüzeyiniz yandan ışıkla ve büyütmeli olarak incelenir; gözenek, pürüz ve iz ayrı başlıklar hâlinde değerlendirilir.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesini doldurun</a>
    </div>
  </div>
</section>
`,
};
