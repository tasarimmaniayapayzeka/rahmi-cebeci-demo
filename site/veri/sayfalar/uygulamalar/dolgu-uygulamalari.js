const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/dolgu-uygulamalari',
  tip: 'tibbi',
  baslik: 'Dolgu uygulamaları: dudak, çene, jawline, elmacık, göz altı',
  aciklama: 'Hyalüronik asit dolgu dudak, çene, jawline, elmacık, göz altı ve nazolabial bölgede nasıl planlanır, kimlerde ertelenir, riskleri ve dolgu çözme nedir?',

  icerik: (r, ik) => `
<!-- ═════ G HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Dolgu uygulamaları</span></nav>
      <p class="g-etiket">Enjeksiyon Uygulamaları · Hacim Desteği</p>
      <h1>Hyalüronik asit ile <span class="g-isik">ölçülü hacim desteği</span></h1>
      <p class="g-hero__alt">Dolgu uygulamasında, suyu tutabilen jel kıvamında bir hyalüronik asit ürünü hekimin seçtiği derinliğe yerleştirilir. Hedef, zamanla desteğini yitirmiş bir alanı toparlamak ya da iki bölge arasındaki sert geçişi yumuşatmaktır. Dudak, çene ucu, jawline, elmacık, göz altı ve nazolabial bölge her biri kendi ölçütleriyle değerlendirilir; ihtiyaç muayenede netleşir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#nedir">Bölgeler ve sınırlar ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Tüm uygulamalar hekimin elinden</span><span><i></i>Az miktarla, aşamalı</span><span><i></i>Kontrol planın parçası</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-dolgu-uygulamalari.webp" width="1400" height="788" alt="Cam yüzey üzerinde duran berrak jel damlalarının yakın plan görünümü" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <div class="g-hud" data-ghud><b>Altı bölge, tek yüz</b><div class="g-cizgi"></div><span>Bir bölgeye verilen destek komşusunu da etkiler; bölgeler birlikte düşünülür.</span></div>
    </div>
  </div>
</section>

<!-- ═════ VERİ BANDI ═════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="6">0</em></b><span>Değerlendirilen bölge</span></div>
  <div data-gr style="--d:60ms"><b><em data-gsay="5">0</em></b><span>Protokol basamağı</span></div>
  <div data-gr style="--d:120ms"><b>Aşamalı</b><span>Adım adım ilerleyen plan</span></div>
  <div data-gr style="--d:180ms"><b>Yazılı</b><span>Onam her uygulamada</span></div>
</div></div>

<!-- ═════ NEDİR / NE DEĞİLDİR ═════ -->
<section class="bolum bolum--buz2" id="nedir">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Tanım ve sınırlar</p>
      <h2>Dolgu uygulaması nedir, hangi bölgelerde düşünülür?</h2>
      <p class="giris">Hyalüronik asit, derinin kendi yapısında da bulunan ve ağırlığının çok üzerinde su bağlayabilen bir şeker zinciridir. Dolgu ürünlerinde bu zincirler birbirine bağlanarak dokuda daha uzun kalan bir jel hâline getirilir. Ürünlerin sertliği ve akışkanlığı farklıdır: dudak gibi hareketli ve yumuşak bir bölge için esnek, çene ucu gibi yapı desteği isteyen bir bölge için daha sıkı bir jel tercih edilir.</p>
    </div>
    <div class="izgara izgara--2" data-gr>
      <div class="kutu kutu--bilgi">
        <b>Bu nedir</b>
        <p>Hekimin belirlediği derinliğe jel kıvamında bir ürünün yerleştirilmesidir; hacim eklemek kendi başına hedef sayılmaz. Yüzdeki bölgeler birbirini etkiler: elmacığa verilen destek nazolabial çizginin görünümünü, çene ucundaki değişiklik dudakların oranını değiştirebilir. Bu nedenle hangi bölgeden, hangi sırayla ve ne kadar çalışılacağı tek bir plan içinde belirlenir.</p>
      </div>
      <div class="kutu kutu--uyari">
        <b>Bu ne değildir</b>
        <p><b>Cerrahi yüz germenin karşılığı değildir;</b> fazla deriyi almaz, sarkan dokuyu yerinden kaldırmaz. Belirgin deri fazlalığında uygun seçenek değildir, cerrahi değerlendirme önerilir. <b>Mimik çizgilerine yönelik değildir;</b> alın ve kaş arasındaki hareket çizgileri <a href="${r}uygulamalar/botulinum-toksin/">botulinum toksin</a> sayfasında ele alınır.</p>
<p><b>Cildin yüzeyini yenilemez:</b> leke, gözenek, pürüzlülük ve akne izi başka yöntemlerin konusudur. <b>Yüzü inceltmez, kilo kaybı sağlamaz.</b> <b>Kalıcı değildir;</b> ürün vücut tarafından zamanla yıkılır.</p>
      </div>
    </div>
    <div class="izgara izgara--3" data-gr style="margin-top:22px;--d:70ms">
      <div class="kart kart--duz">
        <h3>Dudak</h3>
        <p>Dudak kenarının belirginliği, üst ve alt dudak arasındaki denge ve ağız çevresindeki ince çizgiler birlikte incelenir. Hedef, dudakları yüzün geri kalanıyla uyumlu bir oranda tutmaktır; yüzden bağımsız bir büyüklük amaçlanmaz. Bölge ayrıntısı: <a href="${r}bolgeler/dudak/">dudak</a>.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Çene ucu</h3>
        <p>Çenenin öne ve aşağıya uzanımı, profilde burun ve dudakla kurduğu çizgi üzerinden değerlendirilir. Diş kapanışı ve boyun açısı da hesaba katılır; karar yalnız önden bakılarak verilmez.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Jawline (çene hattı)</h3>
        <p>Kulak altından çene ucuna uzanan hattın netliği, yaşla ve kemik desteğinin azalmasıyla belirsizleşebilir. Hattın belirli noktalarına verilen destekle alt yüz sınırının toparlanması hedeflenir. Belirgin gıdı ya da deri sarkması varsa tek başına yeterli olmaz. Bölge ayrıntısı: <a href="${r}bolgeler/cene-ve-jawline/">çene ve jawline</a>.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Elmacık</h3>
        <p>Orta yüzdeki destek azaldığında yanağın tepe noktası aşağı iner, göz altı ile yanak arasındaki geçiş keskinleşir. Kemiğe yakın, derin bir düzlemde çalışılarak orta yüzün desteklenmesi amaçlanır. Birden çok bölgenin aynı planda ele alındığı yaklaşımı <a href="${r}uygulamalar/sivi-yuz-germe/">sıvı yüz germe</a> sayfasında anlattık.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Nazolabial çizgi</h3>
        <p>Burun kanadından ağız köşesine inen çizgi, çoğunlukla üstündeki orta yüz desteğinin azalmasıyla derinleşir. Bu yüzden doğrudan çizginin içine ürün vermek ilk seçenek olmayabilir; önce desteğin kaynağına bakılır. Bütün yüz planı için: <a href="${r}bolgeler/yuz/">yüz</a>.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Göz altı</h3>
        <p>Alt kapak ile yanak arasındaki oluk, yüzün en ince derili ve hata payı en dar bölgesidir; bu yüzden ona ayrı bir başlık ayırdık: <a href="#goz-alti">göz altı dolgusu</a>. Şikâyetinizin kaynağını henüz bilmiyorsanız önce <a href="${r}cilt-sorunlari/hacim-kaybi-ve-sarkma/">hacim kaybı ve sarkma</a> sayfasını okuyun.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ GÖZ ALTI ═════ -->
<section class="bolum bolum--sicak" id="goz-alti">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Göz altı</p>
      <h2>Göz altı dolgusu hangi durumda düşünülür, neden daha temkinli planlanır?</h2>
      <p class="giris">Göz kapağının alt sınırından yanağa geçilen yerde, cildi kemiğe sabitleyen bağ dokusunun çizdiği doğal bir hat vardır. Yaşla birlikte bölgedeki yağ ve kemik desteği azaldığında bu oluk derinleşir, göz altına gölge düşer ve yüz yorgun görünebilir. Dolgunun hedefi, oluğun tabanını derin bir düzlemde ve çok küçük miktarlarla desteklemektir.</p>
    </div>
    <div class="kutu kutu--uyari" data-gr>
      <b>“Işık dolgusu” tıbbi bir terim değildir</b>
      <p>Bu ad altında farklı içerikteki ürünler ve birbirinden çok farklı göz altı tabloları aynı başlıkta toplanıyor. Bizim konuştuğumuz uygulama, göz altı oluğuna yapılan hyalüronik asit dolgusudur ve yalnızca belirli bir tabloda, belirli koşullarla uygun olabilir.</p>
    </div>
    <div class="izgara izgara--3" data-gr style="margin-top:22px;--d:70ms">
      <div class="kart kart--duz">
        <h3>Uygun olabilecek tablo</h3>
        <p>Çukurluğun nedeni gerçekten doku kaybı ve sınırları net. Deri yeterince kalın, ödeme yatkınlık yok, alt kapakta belirgin gevşeklik görülmüyor.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Uygun olmayan tablo</h3>
        <p>Kaynağı pigment olan koyuluk, ince deriden görünen damar ağı, sabahları belirginleşen şişlik ya da yağ yastıkçıklarının öne çıkmasıyla oluşan torbalanma. Torbalanmada dolgu görünümü daha da belirginleştirebilir.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Neden hata payı dar</h3>
        <p>Deri çok ince, altındaki yağ dokusu az, lenf dolaşımı yavaştır; en ufak fazlalık hemen göze çarpar. Bu yüzden bu bölgede sık verilen ve tıbben doğru olan karar, uygulama yapmamaktır.</p>
      </div>
    </div>
    <div class="kutu" style="margin-top:22px" data-gr>
      <p>Göz altı koyuluğunun nedenlerinin nasıl ayrıldığını <a href="${r}cilt-sorunlari/goz-alti-koyulugu/">göz altı koyuluğu</a> sayfasında anlattık; karar vermeden önce okumanızı öneririz. Bölgenin tamamına yönelik planlama için: <a href="${r}bolgeler/goz-cevresi/">göz çevresi</a>.</p>
    </div>
  </div>
</section>

<!-- ═════ BENTO: PLANLAMA ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Süreç</p>
      <h2>Dolgu planı hangi basamaklardan geçer?</h2>
      <p class="giris">İşlemin hemen ardından aynada gördüğünüz görüntü şişliği de içerir ve son hâli göstermez. Bu yüzden asıl değerlendirme, ödem çekildikten sonra yapılan kontrolde yapılır.</p>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="80" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>5 adım</b></div>
        <p><b style="color:var(--murekkep)">Muayeneden kontrole</b><br>Her basamak yazılı onamla ilerler; kontrol günü, şişliğin gerilemesine zaman tanınarak belirlenir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Zaman akışı</span>
        <div class="g-cubuk"><small><span>İşlem günü</span><span>Şişlik başlar</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="25%"></b></div></div>
        <div class="g-cubuk"><small><span>İlk günler</span><span>Ödem çekilir</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="60%"></b></div></div>
        <div class="g-cubuk"><small><span>Kontrol</span><span>Son görünüm</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="95%"></b></div></div>
        <p style="font-size:.72rem;color:var(--sessiz);margin-top:10px">Çubuklar oransal bir simgedir; size özel takvim muayenede netleşir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Protokol</span>
        <ol class="g-protokol">
          <li>Öykü: daha önce yapılan dolgular ve ürünleri, kullandığınız ilaçlar ve bilinen duyarlılıklar kaydedilir.</li>
          <li>Yüz analizi: bölge komşularıyla birlikte, önden ve profilden incelenir; var olan asimetriler not edilir.</li>
          <li>Ürün ve derinlik: bölgeye uygun jel yoğunluğu ve yerleştirileceği düzlem seçilir.</li>
          <li>Bilgilendirme ve onam: hedef, riskler ve hiç uygulama yapmama seçeneği konuşulur; yazılı onam olmadan işlem yapılmaz.</li>
          <li>Uygulama ve takip: sonrasına dair öneriler yazılı verilir, kontrol günü belirlenir.</li>
        </ol>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Hangi durumlarda uygulanmaz, hangilerinde ertelenir?</b>
        <p><b>Uygulamanın yapılmadığı durumlar:</b></p>
        <ul>
          <li>Hyalüronik asit ürünlerine ya da içerdikleri yardımcı maddelere karşı bilinen aşırı duyarlılık</li>
          <li>Uygulama alanında etkin enfeksiyon, iltihaplı sivilce ya da henüz kapanmamış bir yara</li>
          <li>Aynı bölgeye geçmişte verilmiş, içeriği bilinmeyen ya da vücutta yıkılmayan (kalıcı) bir ürün</li>
          <li>Göz altı uygulaması için: bölgede ödem eğilimi, belirgin alt kapak gevşekliği veya yağ yastıkçığı çıkıntısı (torbalanma)</li>
          <li>Gebelik ve emzirme dönemi</li>
          <li>Uygulamanın karşılayamayacağı bir sonuç beklentisi</li>
        </ul>
        <p><b>Ertelenen ya da ayrıca planlanan durumlar:</b></p>
        <ul>
          <li>Son haftalarda geçirilen bir enfeksiyon, aşı ya da diş tedavisi</li>
          <li>Kan sulandırıcı kullanımı veya pıhtılaşma bozukluğu</li>
          <li>Kontrolsüz seyreden otoimmün hastalık veya bağışıklık sistemini baskılayan ilaçlar</li>
          <li>Sık tekrarlayan uçuk öyküsü — özellikle dudak uygulamasından önce koruyucu önlem gerekir</li>
          <li>Anafilaksi öyküsü ya da daha önceki bir enjeksiyonda gelişmiş ağır reaksiyon</li>
        </ul>
        <p>Önceki dolgularınıza ait bir belge, ürün etiketi ya da kayıt varsa randevuya getirmeniz, planın güvenle kurulmasına doğrudan katkı sağlar.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/uyg-dolgu-kutu.webp" alt="Profilden doğal oranlı dudak ve çene" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b3 g-kutu--gece" data-gr><span class="g-ket">İlke</span><p>“Dolguda asıl beceri, nerede duracağını bilmektir. Şişlik çekilip yüz son hâlini göstermeden ürün eklenmez.”</p></div>
      <div class="g-kutu g-b3 g-kutu--cta" data-gr style="--d:70ms"><h3>Bölgenizi birlikte inceleyelim</h3><p>Hangi bölgenin, hangi sırayla ele alınacağı muayenede netleşir.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu talebi</a></div>
    </div>
  </div>
</section>

<!-- ═════ RİSKLER ═════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Riskler</p>
      <h2>Dolgudan sonra neler görülebilir, hangi belirtide beklemeden başvurulur?</h2>
      <p class="giris">Aşağıdaki başlıkların hepsi herkeste görülmez; ancak her biri uygulamadan önce sizinle konuşulur ve onam formunda yer alır.</p>
    </div>
    <div class="izgara izgara--3" data-gr>
      <div class="kart kart--duz">
        <h4>Sık görülen, kısa süreli</h4>
        <p>Şişlik, kızarıklık, morluk, dokunulduğunda hassasiyet ve elle hissedilen geçici pürüzler. Dudakta ve göz altında şişlik daha belirgin olur; dudakta birkaç gün, göz altında daha uzun sürebilir.</p>
      </div>
      <div class="kart kart--duz">
        <h4>Daha az görülen</h4>
        <p>Ürünün yüzeye yakın kalmasıyla ortaya çıkan kabarıklık ya da mavimsi renk, asimetri, uzun süren ödem, uçuk alevlenmesi ve enfeksiyon.</p>
      </div>
      <div class="kart kart--duz">
        <h4>Geç dönemde</h4>
        <p>Uygulamadan haftalar ya da aylar sonra beliren sertlik, şişlik ve nodüller. Bir kısmı bağışıklık sistemiyle ilişkilidir ve bir enfeksiyon, aşı ya da diş tedavisinin ardından tetiklenebilir.</p>
      </div>
    </div>
    <div class="kutu kutu--acil" style="margin-top:22px" data-gr>
      <b>Beklemeden başvurmanız gereken belirtiler</b>
      <p>İşlem sırasında ya da sonrasında orantısız şiddette ağrı, derinin solması ya da beyazlaması, ağ biçiminde mor renk değişimi, görmede bulanıklık veya kayıp ve göz çevresinde şiddetli ağrı, ürünün bir damarı tıkamış olabileceğini düşündürür. Bu tabloda her dakika önemlidir; hemen bize ulaşın, ulaşamazsanız <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
    </div>
    <div class="kutu kutu--bilgi" style="margin-top:16px" data-gr>
      <p><b>Dolgu çözme:</b> Hyalüronik asit dolgular, gerekli görüldüğünde hyalüronidaz adlı bir enzimle dokuda parçalanabilir. Damar tıkanıklığı şüphesinde bu enzim zaman kaybetmeden ve yeterli miktarda kullanılır; fazlalık, yer değiştirme ya da görünür kabarıklık gibi acil olmayan durumlarda ise ayrı bir değerlendirmeyle planlanır. Enzim yalnızca hyalüronik asit içeren ürünleri çözer, bölgedeki doğal hyalüronik asidi de etkileyebildiği için geçici bir çöküklük bırakabilir ve kendisi de aşırı duyarlılık reaksiyonuna yol açabilir. Bu nedenle bir geri alma düğmesi gibi görülmez; yalnız hekim kararıyla ve acil müdahale hazırlığı olan bir ortamda uygulanır.</p>
    </div>
  </div>
</section>

<!-- ═════ SEANS VE SÜRE ═════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Zamanlama</p>
      <h2>Kaç seans planlanır, etkisi ne kadar sürer?</h2>
    </div>
    <div class="izgara izgara--3" data-gr>
      <div class="kart kart--duz">
        <h4>Değerlendirme zamanı</h4>
        <p>İşlemden hemen sonraki görünüm şişliği de içerir. Son hâl, ödem çekildikten sonra yapılan kontrolde değerlendirilir; ekleme gerekip gerekmediğine ancak o zaman karar verilir.</p>
      </div>
      <div class="kart kart--duz">
        <h4>Kalıcılık</h4>
        <p>Ürünün dokuda kalma süresi; jelin yapısına, bölgenin ne kadar hareket ettiğine, metabolizmanıza ve yaşam alışkanlıklarınıza bağlıdır. Dudak gibi hareketli bölgelerde daha kısa, göz altı gibi hareketsiz bölgelerde daha uzun olabilir. Etki bir anda değil, yavaş yavaş azalır.</p>
      </div>
      <div class="kart kart--duz">
        <h4>Aşamalı plan</h4>
        <p>Bir bölge için öngörülen miktarın tamamı her zaman aynı seansta verilmez. Önce bir kısmı uygulanır, sonuç görüldükten sonra gerekiyorsa tamamlanır; böylece fazlalığın önüne geçilir. Her yeni seanstan önce bölge yeniden değerlendirilir. Sonuçlar kişiden kişiye değişir.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ UYARI + KAPSAM + DEVAMI ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="kutu kutu--uyari" data-gr>
      <b>Uyarı</b>
      <p>Bu sayfadaki bilgiler genel bilgilendirme içindir ve kişisel bir tıbbi önerinin yerine geçmez. Dolgunun size uygun olup olmadığı ancak muayene ve öykünüz değerlendirildikten sonra söylenebilir. Girişimsel hiçbir işlemin sonucu önceden taahhüt edilemez; yanıt kişiden kişiye değişir. İçeriğin amacı tanıtım ya da yönlendirme değildir.</p>
    </div>
    <div class="kutu kutu--bilgi" style="margin-top:16px" data-gr>
      <b>Kapsam</b>
      <p>${S.hekim.tam}, uzmanlık alanı ve Sağlık Bakanlığı onaylı medikal estetik sertifikasının çizdiği sınırlar içinde uygulama yapar. Bu sınırların dışında kalan taleplerde işlem yapılmaz; ilgili uzmanlık dalına başvurmanız önerilir. Sınırın nereden geçtiğini <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a> sayfasında anlattık.</p>
    </div>
    <div class="g-haplar" style="margin-top:22px" data-gr>
      <a href="${r}bolgeler/cene-ve-jawline/">Çene ve jawline planlaması</a>
      <a href="${r}uygulamalar/sivi-yuz-germe/">Sıvı yüz germe</a>
      <a href="${r}cilt-sorunlari/goz-alti-koyulugu/">Göz altı koyuluğu</a>
      <a href="${r}uygulamalar/botulinum-toksin/">Botulinum toksin</a>
      <a href="${r}uygulamalar/uygulama-sonrasi-takip/">Uygulama sonrası takip</a>
      <a href="${r}hekim/">Hekim</a>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka} · dolgu · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Günlük hayatıma ne zaman dönebilirim?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Sonucu beğenmezsem dolgu geri alınabilir mi?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Önceki dolgumun içeriğini bilmiyorum; sorun olur mu?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>“Işık dolgusu” ile göz altı dolgusu aynı mı?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Dolgu ile botulinum toksin arasındaki fark ne?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Günlük hayatıma ne zaman dönebilirim?","Şişlik ve morluğun ne kadar süreceği bölgeye ve kişiye göre değişir; dudakta ve göz altında daha belirgin olabilir. Önemli bir davet ya da toplantıdan hemen önceki günlere uygulama planlamamanızı, araya yeterli zaman bırakmanızı öneririz."],["Sonucu beğenmezsem dolgu geri alınabilir mi?","Hyalüronik asit içeren ürünler, gerekli görüldüğünde hyalüronidaz enzimiyle parçalanabilir. Ancak bu rutin bir işlem değildir; kendine özgü riskleri vardır ve hekim kararıyla ayrıca planlanır."],["Önceki dolgumun içeriğini bilmiyorum; sorun olur mu?","Mutlaka belirtin. Vücutta çözünmeyen bir ürünün varlığı hem planı hem güvenliği değiştirir; bazı durumlarda o bölgeye uygulama yapılmaz. Elinizde önceki işleme ait bir belge ya da ürün etiketi varsa randevuya getirin."],["“Işık dolgusu” ile göz altı dolgusu aynı mı?","Hayır. “Işık dolgusu” tıbbi bir işlem adı değildir; farklı ürünler ve birbirinden farklı göz altı tabloları bu adla anılabiliyor. Bizim değerlendirdiğimiz, göz altı oluğuna yapılan hyalüronik asit dolgusudur ve yalnızca belirli bir tabloda uygun olabilir."],["Dolgu ile botulinum toksin arasındaki fark ne?","İkisi farklı amaçlara hizmet eder. Dolgu, desteğini yitirmiş bir alana hacim desteği verir; botulinum toksin ise fazla kasılan bir kası bir süreliğine gevşetir. Aynı planda birlikte yer alıp almayacaklarına muayenede karar verilir."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Muayenede size özel plan netleştiğinde bu bilgi doğrudan size iletilir."]]</script>

<!-- ═════ KAPANIŞ ═════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Bölgenizi ve beklentinizi birlikte konuşalım</h2>
    <p class="g-sonalt">Hangi bölgenin önce ele alınacağını muayeneden sonra birlikte kararlaştırırız. ${S.iletisim.adres}, ${S.iletisim.ilce}.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
