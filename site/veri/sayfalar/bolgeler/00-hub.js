const S = require('../../site');

/* bölge kartları ve pusula için kısa tarifler — kartların sırası site.js'teki S.bolgeler dizisinden gelir */
const NOT = {
  'yuz': 'Alın, elmacık ve çene hattı birbirine yaslanır. Bir noktaya verilen destek komşusunun görünüşünü de değiştirdiği için yüz, parçalara bölünmeden tek plan olarak ele alınır.',
  'goz-cevresi': 'Kaz ayağı çizgilerini, göz altını ve kaşın çevresini kapsar. Derinin en ince olduğu bu alanda küçük bir fark bile göze çarpar; karar başka bölgelerden çok daha temkinli verilir.',
  'dudak': 'Dudakta üç ayrı konu vardır: dolgunluk, kenar çizgisinin netliği ve yüzeyin nemi. Çoğu yakınma daha fazla hacimle değil, mevcut oranı koruyarak karşılanır.',
  'cene-ve-jawline': 'Kemik desteği, çene altındaki yağ, derinin gerginliği ve çiğneme kası çene hattının netliğini birlikte belirler. Planı, bunlardan hangisinin ağır bastığı yönlendirir.',
  'boyun-ve-dekolte': 'Boyun gün boyu eğilip döner, derisi yüzdekinden incedir ve altında yastık görevi görecek yağ azdır. Yüz için seçilen ayar burada yeniden hesaplanır.',
  'el': 'Deri altı yağı inceldikçe el sırtında damarlar ve tendonlar belirir; aynı deri yılların güneşini de taşır. Hacim ve leke iki ayrı başlık olarak planlanır.',
  'sacli-deri': 'Saçlı deride ilk adım bir uygulama değil, dökülmenin nedenini bulmaktır. Demir, tiroid ve kullanılan ilaçlar ilk bakılan konular arasındadır.',
  'vucut': 'Karın, bel, kol ve bacakta yerel yağlanma, selülit görünümü ve dövme silme. Alan geniş, seanslar aralıklıdır; hiçbir uygulama kilo vermenin yerine geçmez.',
};

/* bölge → pusula görseli (varliklar/gorsel/bolge-<slug>.webp deseni) */
const PUS_GORSEL = {
  'yuz': 'bolge-yuz', 'goz-cevresi': 'bolge-goz-cevresi', 'dudak': 'bolge-dudak',
  'cene-ve-jawline': 'bolge-cene-ve-jawline', 'boyun-ve-dekolte': 'bolge-boyun-ve-dekolte',
  'el': 'bolge-el', 'sacli-deri': 'bolge-sacli-deri', 'vucut': 'bolge-vucut',
};

module.exports = {
  slug: 'bolgeler',
  js: 'kesif.js',
  tip: 'tibbi',
  baslik: 'Bölgeler: yüzden vücuda her bölge kendi kurallarıyla planlanır',
  aciklama: 'Yüz, göz çevresi, dudak, çene hattı, boyun, el, saçlı deri ve vücut için ayrı sayfalar: deri ve hareket farklı olduğundan her bölgenin planı da ayrıdır.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <span>Bölgeler</span></nav>
      <p class="g-etiket">Bölgeler · Bölgeye göre planlama</p>
      <h1>Planı işlemin adı değil, <span class="g-isik">bölgenin kendisi</span> belirler.</h1>
      <p class="g-hero__alt">Göz altındaki deri ile karındaki doku arasında kalınlık, hareket, çevredeki damar-sinir yapıları ve iyileşme süresi bakımından büyük farklar vardır. Dudakta uygun görülen miktar, derinlik ya da seans aralığı bu yüzden göz çevresine, çene hattına veya karına olduğu gibi taşınamaz. Bu bölümde sekiz bölgenin her biri için ayrı bir sayfa bulacaksınız.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#bolgeler">Bölgelere göz atın ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Uygulamayı hekim yapar</span><span><i></i>Adım adım plan</span><span><i></i>Kontrol randevusu planın içinde</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/yuz-3d-c.webp" width="900" height="1200" alt="Bölgelere göre planlamayı simgeleyen, sola dönük üç boyutlu kadın profili" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <button class="g-nokta" data-gn="ust" style="--x:35%;--y:25%" aria-label="Üst yüz"><span data-ad="Üst yüz"></span></button>
      <button class="g-nokta" data-gn="orta" style="--x:31%;--y:42%" aria-label="Orta yüz"><span data-ad="Orta yüz"></span></button>
      <button class="g-nokta" data-gn="alt" style="--x:35%;--y:55%" aria-label="Alt yüz"><span data-ad="Alt yüz"></span></button>
      <div class="g-hud" data-ghud><b>Bölgeye göre plan</b><div class="g-cizgi"></div><span>Bir noktaya dokunun; yüzün üç katı birbirine yaslanır.</span></div>
    </div>
  </div>
</section>
<script type="application/json" data-gnokta-veri>{"ust":["Üst yüz","Alın, kaş ve şakak — mimik hareketinin en belirgin olduğu kat."],"orta":["Orta yüz","Yanak ve elmacık — üst ve alt yüzü taşıyan orta kat."],"alt":["Alt yüz","Dudak çevresi ve çene hattı — yüzün alt sınırını çizer."]}</script>

<!-- ═════════ VERİ BANDI ═════════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="8">0</em></b><span>Bölge sayfası</span></div>
  <div data-gr style="--d:70ms"><b><em data-gsay="4">0</em></b><span>Planı değiştiren ölçüt</span></div>
  <div data-gr style="--d:140ms"><b><em data-gsay="5">0</em></b><span>Muayene adımı</span></div>
  <div data-gr style="--d:210ms"><b>Bütüncül</b><span>Yüz tek plan olarak ele alınır</span></div>
</div></div>

<!-- ═════════ BÖLGE KARTLARI ═════════ -->
<section class="bolum" id="bolgeler">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Bölgeler</p>
      <h2>Merak ettiğiniz bölge hangisi?</h2>
      <p class="giris">Her bölge sayfasında aynı sırayı izledik: önce o bölgenin anatomisi, ardından yakınmaların hangi süreçten doğduğu, sonra konuşulabilecek uygulamalar ve son olarak işlem yapılmayan durumlar.</p>
    </div>
    <div class="izgara izgara--3">
${S.bolgeler.map(([ad, s], i) => `
      <a class="kart" href="${r}bolgeler/${s}/" data-gr style="--d:${(i % 3) * 70}ms">
        <span class="kart__ikon">${ik.pin}</span>
        <h3>${ad}</h3>
        <p>${NOT[s] || 'Bölgenin anatomisi, konuşulabilecek uygulamalar ve işlem yapılmayan durumlar.'}</p>
        <span class="kart__ok">İncele ${ik.ok}</span>
      </a>`).join('')}
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <p>Sorununuzun nereden kaynaklandığından emin değilseniz <a href="${r}cilt-sorunlari/">cilt sorunları bölümü</a> iyi bir başlangıç noktasıdır. Belirli bir uygulamanın ne olduğunu, taşıdığı riskleri ve sonrasında neler beklendiğini merak ediyorsanız <a href="${r}uygulamalar/">uygulamalar bölümüne</a> geçebilirsiniz. Buradaki sayfalar ise tek bir soruya odaklanır: “Benim bölgemde neler yapılabilir, neler yapılmaz?”</p>
    </div>
  </div>
</section>

<!-- ═════════ DÖRT DEĞİŞKEN ═════════ -->
<section class="bolum bolum--sicak" id="degiskenler">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Ölçütler</p>
      <h2>Bir bölgenin planını hangi dört ölçüt değiştirir?</h2>
      <p class="giris">Her bölgenin planı dört soruya verilen yanıtla şekillenir: deri ne kadar kalın, bölge ne kadar hareketli, çevresinde hangi damar ve sinirler var, iyileşme ne kadar sürer? Yanıtlar farklı yönleri gösterdiğinde plan küçültülür.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kart kart--duz" data-gr>
        <span class="kart__ikon">${ik.mercek}</span>
        <h3>Deri kalınlığı ve altındaki destek</h3>
        <p>İnce bir derinin altına yerleştirilen ürünün dışarıdan seçilmesi ya da parmakla fark edilmesi daha olasıdır. Göz altında ve boyunda miktar bu yüzden en düşük düzeyde tutulur ve katman özenle seçilir. El sırtında deri altı yağın az olması ise ayrıca hesaba katılır.</p>
      </div>
      <div class="kart kart--duz" data-gr style="--d:70ms">
        <span class="kart__ikon">${ik.saat}</span>
        <h3>Hareket yükü ve etkinin süresi</h3>
        <p>Konuşurken, gülerken ve yemek yerken dokular sürekli yer değiştirir ve ürün bölgeden daha çabuk çekilir. Dudakta etkinin, çene hattı gibi durağan bir alana göre çoğu zaman daha erken azalması bundandır. Kaç ay süreceği önceden söylenemez; kişiden kişiye farklılık gösterir.</p>
      </div>
      <div class="kart kart--duz" data-gr>
        <span class="kart__ikon">${ik.kalkan}</span>
        <h3>Damar ve sinir komşuluğu</h3>
        <p>Şakakta, burun sırtında, dudak çevresinde ve göz çevresinde atardamarlar deriye oldukça yakın seyreder. Bu alanlarda ürün miktarı küçültülür, farklı bir katmanda çalışılır ve kimi başvurularda işlemden tümüyle vazgeçilir.</p>
      </div>
      <div class="kart kart--duz" data-gr style="--d:70ms">
        <span class="kart__ikon">${ik.yaprak}</span>
        <h3>İyileşme süresi ve takviminiz</h3>
        <p>Göz çevresinde morarma ve şişlik bir haftaya kadar uzayabilirken çene hattında çoğunlukla birkaç gün içinde çekilir. Bu yüzden önünüzdeki düğün, sunum ya da seyahat gibi tarihler randevu planına baştan eklenir ve gerekirse işlem ileri bir tarihe alınır.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ NEDEN AYNI YAPILMAZ ═════════ -->
<section class="bolum bolum--buz2" id="neden">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Yöntem</p>
      <h2>Aynı adı taşıyan uygulama bölgeden bölgeye neden değişir?</h2>
      <p class="giris">Çene hattına ve göz altına yapılan hyalüronik asit dolgusu aynı adla anılır; oysa seçilen ürünün kıvamı, yerleştirildiği katman, miktarı, iki seans arasındaki süre ve göze alınabilecek risk iki bölgede çok farklıdır. Lazerde de durum değişmez: yüz için seçilen ayar bacağa ya da boyuna olduğu gibi uygulanmaz.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">01 · DOKU FARKI</span>
      <h3>Milimetreden santimetreye: doku farkı</h3>
      <p>Deri kalınlığı vücutta geniş bir aralıkta değişir: göz altında milimetrenin altında kalırken çene hattında ve el sırtında birkaç kat artar; karında ve uylukta ise altında kalın bir yağ tabakası bulunur. İnce derinin altına konan ürün kolayca görünür ya da hissedilir, kalın bir dokuda aynı miktar fark edilmeyebilir. Tüm bölgeler için tek bir ölçü, teknik ya da aralık bu yüzden kullanılamaz.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">02 · HAREKET YÜKÜ</span>
      <h3>Hareket, tekrar sıklığını belirler</h3>
      <p>Tekrar sıklığını belirleyen başlıca etken, bölgenin gün içindeki hareketidir. Konuşma ve yemek dudağı, göz kırpma göz çevresini durmadan çalıştırır; ürün bu alanlarda daha çabuk azalır. Çene hattında ve el sırtında hareket sınırlı olduğundan aynı ürün daha geç çekilir. “Kaç ayda bir?” sorusuna bu yüzden bölge bölge yanıt verilir.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">03 · RİSK HARİTASI</span>
      <h3>Kimi alanlarda yanılma payı yok denecek kadar azdır</h3>
      <p>Göz çevresinde, burun sırtında ve dudak çevresinde atardamarlar deriye çok yaklaşır; bu damarların bir kısmı gözü besleyen dolaşımla da bağlantılıdır. Söz konusu alanlarda en dikkatli teknikle çalışılsa bile göze alınabilecek risk daha küçüktür. En küçük bir kuşku varsa işlem ertelenir ya da hiç yapılmaz.</p>
    </div>
  </div>
</section>

<!-- ═════════ MUAYENE + SINIRLAR ═════════ -->
<section class="bolum" id="muayene">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Süreç</p>
      <h2>Bölgeye özel muayene hangi adımlardan oluşur?</h2>
      <p class="giris">Görüşme sizin gösterdiğiniz yerden başlar; ardından komşu bölgelere, yüzün ya da vücudun geneline ve sağlık öykünüze geçilir. Hepsi aynı muayenede ele alınır.</p>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b4" data-gr>
        <span class="g-ket">MUAYENE ADIMLARI</span>
        <ol class="g-protokol">
          <li><b>Yakınma ile bölgenin eşleştirilmesi.</b>&nbsp;Gösterdiğiniz yer ile sizi rahatsız eden görünümün kaynağı her zaman aynı olmayabilir; örneğin ağız kenarındaki gölgenin nedeni elmacık hattındaki destek kaybı olabilir. Kaynak belirlenmeden plana geçilmez.</li>
          <li><b>Bölgenin incelenmesi.</b>&nbsp;Derinin kalınlığına ve esnekliğine, yağın nasıl dağıldığına, kasların ne kadar etkin olduğuna ve iki taraf arasında fark olup olmadığına bakılır; geçmişte hangi işlemin, ne zaman ve ne kadar yapıldığı not edilir.</li>
          <li><b>Sağlık ve ilaç öyküsü.</b>&nbsp;Kan sulandırıcı kullanıp kullanmadığınız, pıhtılaşma sorunu, kontrol altında olmayan otoimmün bir hastalık, gebelik ya da emzirme, yakın zamanda geçirdiğiniz bir enfeksiyon veya diş tedavisi sorulur; bilinen aşırı duyarlılıklarınızı mutlaka belirtin.</li>
          <li><b>Seçenekler ve hiç işlem yapmamak.</b>&nbsp;Hangi adımların uygun olabileceği, her birinin nereye kadar katkı sağlayabileceği ve neyin beklenmemesi gerektiği konuşulur; işlem yapılmaması da gerekçesiyle birlikte önünüze konan bir seçenektir.</li>
          <li><b>Yazılı bilgilendirme ve onam.</b>&nbsp;Amaçlanan etki, görülebilecek istenmeyen durumlar ve böyle bir durumda neler yapılacağı size yazılı olarak verilir. Onamınız alınmadan işleme geçilmez; kontrol tarihini aynı gün birlikte belirleriz.</li>
        </ol>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/hekim-masasi.webp" alt="Hekim masasında, açık bir not defterinin yanında masaya konmuş, üst üste duran eller" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
    </div>
    <div class="izgara izgara--2" style="margin-top:22px">
      <div class="kutu kutu--uyari" data-gr>
        <h4>Uygulama yapılmayan durumlar</h4>
        <ul>
          <li>Gebelik ya da emzirme dönemi</li>
          <li>İşlem alanında etkin bir enfeksiyon, açık yara ya da iltihaplı lezyon</li>
          <li>Kullanılacak içeriğe karşı daha önce görülmüş aşırı duyarlılık tepkisi</li>
          <li>Uygulamanın sağlayabileceğini aşan beklentiler</li>
          <li>Muayenehanenin kapsamı dışında kalan istekler</li>
        </ul>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:70ms">
        <h4>Ertelenen ya da ayrıca planlanan durumlar</h4>
        <ul>
          <li>Yeni geçirilmiş bir enfeksiyon, yakın zamanda yapılan aşı ya da diş tedavisi</li>
          <li>Kan sulandırıcı kullanımı ya da pıhtılaşma sorunu</li>
          <li>Kontrol altına alınmamış otoimmün hastalık</li>
          <li>Aynı bölgeye daha önce uygulanmış, içeriği bilinmeyen ürün</li>
          <li>Önemli bir güne yalnızca birkaç gün kalmışken yapılan başvurular</li>
        </ul>
      </div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <p>Çoğu işlemden sonra benzer öneriler geçerlidir: ilk günlerde bölgeye bastırmamak ve ovmamak, sıcak ortamlardan ve ağır egzersizden bir süre uzak durmak, güneş koruyucuyu aksatmamak ve kontrol randevusunu kaçırmamak. Her uygulamaya özgü ayrıntıları <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası takip</a> sayfasında bulabilirsiniz.</p>
<p>Hangi işlemleri yapmadığımızı ve bu durumda sizi nereye yönlendirdiğimizi <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">ayrı bir sayfada</a> topladık. Sitede neden öncesi–sonrası fotoğrafı ya da hasta yorumu bulunmadığını ise <a href="${r}yasal/icerik-ve-gorsel-yayin-ilkelerimiz/">içerik ve görsel yayın ilkelerimiz</a> sayfasında açıklıyoruz.</p>
    </div>
    <div class="kutu kutu--acil" data-gr style="margin-top:22px">
      <b>Bir sorun gelişirse</b>
      <p>İşlemden sonra sizi kaygılandıran bir değişiklik olursa ilk adım bizi <a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a> numarasından aramaktır. Artarak süren şiddetli ağrı, derinin beyazlaşması ya da morumsu, ağ gibi bir renk alması, görme bulanıklığı, kısa sürede büyüyen bir şişlik ya da ateş gibi bulgularda zaman kaybetmeyin. Telefonla bize ulaşamazsanız <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Soru–cevap</p><h2>Aklınızdaki soruyu seçin, yanıtı yanda okuyun</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr')} · bölgeler · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>İki farklı bölgeye aynı gün işlem yapılır mı?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Sorunum hangi bölgeyle ilgili, emin değilim; nereden başlayayım?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Yalnızca bir bölgeye işlem yaptırırsam yüzümün dengesi bozulur mu?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Etki neden bazı bölgelerde daha kısa sürüyor?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Eskiden yaptırdığım işlemin belgesi elimde yok; bu bir engel mi?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nereden öğrenebilirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede birlikte bakalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["İki farklı bölgeye aynı gün işlem yapılır mı?","Bu, bölgelerin iyileşme sürelerine ve taşıdıkları risklere bağlıdır. Örneğin göz çevresi yakından izlenmesi gereken bir alandır; aynı gün başka bir yere de işlem yapılırsa ortaya çıkabilecek bir sorunun hangi bölgeden kaynaklandığı anlaşılmayabilir. Böyle durumlarda bölgeler farklı günlere dağıtılır. İyileşmesi kısa ve riski düşük bazı birleşimler ise aynı seansta ele alınabilir."],["Sorunum hangi bölgeyle ilgili, emin değilim; nereden başlayayım?","Bölgeyi bilmeniz gerekmiyor. Sizi rahatsız eden durumu anlatan başlığı cilt sorunları bölümünde bulabilirsiniz; oradan ilgili bölgelere ve uygulamalara geçiş vardır. Muayenede yakınmanız zaten baştan ele alınır ve doğru bölgeyle eşleştirilir, yani hangi sayfadan başladığınızın bir önemi yoktur."],["Yalnızca bir bölgeye işlem yaptırırsam yüzümün dengesi bozulur mu?","Bozulup bozulmayacağını planın nasıl yapıldığı belirler. Komşu bölgeler hesaba katılmadan tek bir noktaya yoğunlaşıldığında oranlar değişebilir. Bu yüzden karar verirken her zaman yüzün tamamına bakarız; asıl ele alınması gereken yer başka bir bölgeyse bunu size açıkça söyleriz."],["Etki neden bazı bölgelerde daha kısa sürüyor?","Süreyi üç şey belirler: bölgenin gün içindeki hareketi, dokudaki kan akışı ve seçilen ürünün kıvamı. Dudak gibi sürekli çalışan bir alanda ürün daha kısa sürede yıkılırken el sırtı gibi daha az hareket eden bir alanda daha uzun süre kalabilir. Bu nedenle bir süre sözü verilmez; etki kişiden kişiye farklıdır ve kontrollerde birlikte izlenir."],["Eskiden yaptırdığım işlemin belgesi elimde yok; bu bir engel mi?","Belge olmadan da değerlendirme yapılabilir; yalnızca biraz daha özen ister. İşlemin yaklaşık tarihini, hangi bölgeye yapıldığını ve kaç kez tekrarlandığını hatırladığınız kadarıyla paylaşmanız yol gösterir. İçeriği bilinmeyen bir ürün söz konusuysa aynı bölgeye yeni bir işlem planlamadan önce bekleme süresi uzatılabilir ya da ek inceleme istenebilir."],["Ücret bilgisini nereden öğrenebilirim?","Sağlık hizmetlerinin tanıtımını düzenleyen yönetmelik, ücret bilgisinin internet sitelerinde yayımlanmasına izin vermez. Plan kişiye ve bölgeye göre şekillendiği için burada yazılacak bir rakam gerçeği de yansıtmazdı. Ücret, muayenede size özel plan belli olduktan sonra yüz yüze paylaşılır."]]</script>

<!-- ═════════ BÖLGE PUSULASI ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Bölge pusulası</p>
      <h2>Bir bölgeye dokunun, ayrıntısı karşınıza gelsin</h2>
      <p class="giris">Listeden bir bölge seçtiğinizde görsel ve kısa tarif yenilenir; o bölgeyle ilgili her şey kendi sayfasında sizi bekliyor.</p>
    </div>
    <div class="pus" data-pus>
      <div class="pus-merkez" data-gr>
        <img src="${r}varliklar/gorsel/bolge-yuz.webp" width="1400" height="788" alt="Yüz bölgesini temsil eden görsel" loading="lazy">
        <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
        <div class="pus-kart"><b></b><p></p><a class="dgm dgm--bir dgm--kucuk" href="#">Bu bölgenin sayfasını açın</a></div>
      </div>
      <div class="pus-liste" data-gr>
        ${S.bolgeler.map(([ad, sl]) => `<button type="button" class="pus-oge" data-pus-oge="${sl}"><i></i>${ad}</button>`).join('')}
      </div>
    </div>
    <script type="application/json" data-pus-veri>${JSON.stringify(
      Object.fromEntries(S.bolgeler.map(([ad, sl]) => [sl, {
        ad, tarif: NOT[sl] || '',
        gorsel: r + 'varliklar/gorsel/' + (PUS_GORSEL[sl] || 'bolge-yuz') + '.webp',
        yol: r + 'bolgeler/' + sl + '/',
      }])))}</script>
  </div>
</section>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Planınızı bölgenizden başlayarak kuralım</h2>
    <p class="g-sonalt">${S.marka} · ${S.iletisim.adres}, ${S.iletisim.ilce}. Randevu için ${S.iletisim.tel} numarasını arayabilir, aynı numaraya WhatsApp’tan yazabilir ya da iletişim sayfasındaki formu doldurabilirsiniz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
