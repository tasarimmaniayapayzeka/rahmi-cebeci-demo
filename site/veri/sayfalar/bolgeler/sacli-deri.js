const S = require('../../site');

module.exports = {
  slug: 'bolgeler/sacli-deri',
  tip: 'tibbi',
  baslik: 'Saç dökülmesi ve saçlı deri: nedeni bulmadan başlamıyoruz',
  aciklama: 'Saçınız dökülüyorsa ilk soru “hangi uygulama?” değil “neden?” olmalı. Bakırköy muayenehanemizde öykü, muayene ve gerekirse tahlil olmadan seans planlamıyoruz.',

  icerik: (r, ik) => `

<!-- 1 ── HERO -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}bolgeler/" style="color:var(--sessiz);text-decoration:none">Bölgeler</a> › <span>Saçlı Deri</span></nav>
      <p class="g-etiket">Bölgeler · Saçlı deri</p>
      <h1>Dökülen saçta ilk soru: <span class="g-isik">neden?</span></h1>
      <p class="g-hero__alt">Saç dökülmesi kalıtsal yatkınlıktan, geçirilen bir hastalık ya da doğumdan, demir eksikliğinden ya da tiroid bozukluğundan kaynaklanabilir. Aynada hepsi benzer görünür; oysa her birinin yolu farklıdır. Bu yüzden önce sizi muayene eder, öykünüzü dinler ve gerekirse tahlil isteriz; nedeni belli olmayan bir dökülmede seans serisine başlamayız.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#neden">Önce neden, sonra plan ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Uygulamayı hekim yapar</span><span><i></i>Gerekirse tahlil</span><span><i></i>Üçüncü ayda değerlendirme</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/bolge-sacli-deri.webp" width="1400" height="788" alt="Saç çizgisi düzgün, sade bir fonda çekilmiş kadın portresi" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
    </div>
  </div>
</section>

<!-- 2 ── VERİ BANDI -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="3">0</em></b><span>En sık dökülme türü</span></div>
  <div data-gr style="--d:70ms"><b><em data-gsay="5">0</em></b><span>Konuşulabilecek adım</span></div>
  <div data-gr style="--d:140ms"><b><em data-gsay="3">0</em>. ay</b><span>İlk anlamlı kontrol</span></div>
  <div data-gr style="--d:210ms"><b>50–100</b><span>Günlük olağan dökülme (tel)</span></div>
</div></div>

<!-- 3 ── NEDEN ÖNCE TANI -->
<section class="bolum" id="neden">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Yaklaşım</p><h2>Saçlı derideki işlemden önce neden tanı gerekir?</h2></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Dökülme bir işarettir</b>
        <p>Saç dökülmesi tek başına bir hastalık adı değildir; arkasındaki bir sürecin dışa yansımasıdır. Aynı görüntünün altında birbirinden çok farklı nedenler yatabilir: aileden gelen yatkınlıkla ilerleyen androgenetik dökülme, ateşli bir hastalık ya da ağır stresin iki–dört ay ardından başlayan telogen effluvium, demir ve tiroid sorunları, saçlı derinin kendi hastalıkları ve iz bırakarak ilerleyen dökülmeler. Her birinin yolu ayrıdır.</p>
      </div>
      <div class="kutu kutu--bilgi" data-gr style="--d:80ms">
        <b>Nedeni bilinmeden başlamanın bedeli</b>
        <p>Nedeni aranmadan başlanan bir seri iki şekilde zarar verir. Birincisi, kolayca düzeltilebilecek bir eksiklik gözden kaçar ve aylar boşa geçer. İkincisi, size uymayan bir seriyi bitirdiğinizde her yönteme olan inancınızı yitirirsiniz. Bu yüzden muayene ve öykü tamamlanmadan saçlı deriye yönelik bir uygulama planlamayız. Dökülme türlerini <a href="${r}cilt-sorunlari/sac-dokulmesi/">saç dökülmesi</a> sayfasında ayrıntılı anlattık.</p>
      </div>
    </div>
  </div>
</section>

<!-- 4 ── ATLAS -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Bölge atlası</p><h2>En sık karşılaşılan dökülme türleri nelerdir?</h2><p class="giris">Muayenede önce dökülmenin saçlı derinin neresinde yoğunlaştığına, ne zamandır sürdüğüne ve nasıl ilerlediğine bakarız. Aşağıda en sık karşılaştığımız türleri bulacaksınız; kimi kişide bunlardan birkaçı birlikte görülür.</p></div>
    <div class="g-atlas-duzen">
      <div class="g-atlas" data-gr>
        <div class="g-atlas-kap">
          <img src="${r}varliklar/gorsel/grup-sac.webp" width="1600" height="900" alt="Arkadan görülen, saç ayrım çizgisi belirgin koyu saçlı bir kadın başı" loading="lazy">
          <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
          <div class="g-rozetk" data-grozet><b>Androgenetik dökülme</b><span>Yıllar içinde yavaşça ilerler; plan da uzun soluklu yapılır.</span></div>
        </div>
      </div>
      <div data-gr style="--d:80ms">
        <div class="g-katblok" data-gkat="a">
          <span class="g-kno">01</span>
          <h3>Androgenetik dökülme</h3>
          <p>Aileden gelen yatkınlıkla ortaya çıkar; saç telleri her döngüde biraz daha incelir ve kısalır. Erkeklerde alın hattı geriler ve tepe seyrelir; kadınlarda ise saçın ortadan ayrıldığı çizgi giderek genişler. Yıllar içinde yavaşça ilerlediği için plan da uzun soluklu yapılır.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/sac-mezoterapisi/">Saç mezoterapisi</a><a href="${r}uygulamalar/sac-prp/">Saç PRP</a><a href="${r}uygulamalar/eksozom/#sac">Saçlı deride eksozom</a></div>
        </div>
        <div class="g-katblok" data-gkat="b">
          <span class="g-kno">02</span>
          <h3>Telogen effluvium</h3>
          <p>Yüksek ateşli bir hastalık, ameliyat, doğum, hızlı kilo kaybı ya da ağır bir stres döneminden iki–dört ay sonra başlayan, saçlı derinin her yerine yayılan geçici bir dökülmedir. Neden ortadan kalktıktan sonra birkaç ay içinde çoğu kişide dökülme kendi kendine azalır.</p>
          <div class="g-haplar"><a href="${r}cilt-sorunlari/sac-dokulmesi/">Saç dökülmesi</a></div>
        </div>
        <div class="g-katblok" data-gkat="c">
          <span class="g-kno">03</span>
          <h3>Eksiklikler, genel hastalıklar ve saçlı deri sorunları</h3>
          <p>Demir, B12 vitamini ya da tiroid hormonu dengesindeki bir sorun, saçın büyüme döngüsünü doğrudan bozar. Böyle bir tabloda önce eksiklik giderilir; eksiklik sürdükçe saçlı deriye yapılan hiçbir işlem beklenen katkıyı sağlamaz.</p>
          <p>Seboreik dermatit, sedef, saçlı derinin mantar enfeksiyonu ve iz bırakarak ilerleyen dökülmeler çoğunlukla kaşıntı, kızarıklık ya da kepekle birlikte seyreder. Önce hastalığın kendisi tedavi edilir; iz bırakan bir dökülmeden şüpheleniliyorsa estetik amaçlı işlem yapılmaz.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/hekim-muayenesi/">Hekim muayenesi</a></div>
        </div>
      </div>
    </div>
  </div>
</section>
<script type="application/json" data-gnokta-veri>{"a":["Androgenetik dökülme","Yıllar içinde yavaşça ilerler; plan da uzun soluklu yapılır."],"b":["Telogen effluvium","Geçici bir dökülmedir; neden ortadan kalkınca çoğunlukla azalır."],"c":["Eksiklik ve hastalıklar","İlk iş, eksikliği ya da hastalığı düzeltmektir."]}</script>

<!-- 5 ── MATRİS -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Uygulamalar</p><h2>Saçlı deri için hangi seçenekler konuşulabilir?</h2><p class="giris">Buradaki adımlar, dökülmenin nedeni bulunmuş ve uygun olduğu görülmüş kişilerde gündeme gelir. Her biri hekimin çizdiği ana planı destekleyen birer yardımcıdır, kendi başına bir çözüm değildir. Saç nakli ve öteki cerrahi yöntemler muayenehanede yapılmaz.</p></div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Uygulama</span><span>Hedef</span><span>İyileşme</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/sac-mezoterapisi/" data-gg="${r}varliklar/gorsel/uyg-sac-mezoterapisi.webp" data-gb="Saç mezoterapisi" data-ga="Vitamin, mineral ve amino asitlerden oluşan karışımlar saçlı derinin üst katmanına küçük noktalar hâlinde verilir; seri olarak, haftalar arayla yapılır."><h4>Saç mezoterapisi</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">DESTEK</i></span><span class="g-hucre">1 gün içinde</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/sac-prp/" data-gg="${r}varliklar/gorsel/uyg-sac-prp.webp" data-gb="Saç PRP" data-ga="Kendi kanınızdan ayrıştırılan, trombositten zengin plazmanın saçlı deriye uygulanmasıdır. Kansızlık, pıhtılaşma sorunları ve bazı ilaçlar planı değiştirir."><h4>Saç PRP</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">PLAZMA</i></span><span class="g-hucre">1 gün içinde</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/eksozom/#sac" data-gg="${r}varliklar/gorsel/uyg-eksozom.webp" data-gb="Saçlı deride eksozom" data-ga="Hücrelerin birbirine gönderdiği sinyal moleküllerinden yararlanır; seçilmiş durumlarda konuşulur ve bilimsel kanıtın bugün hangi düzeyde olduğu size açıkça anlatılır."><h4>Saçlı deride eksozom</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">DESTEK</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/hekim-muayenesi/" data-gg="${r}varliklar/gorsel/uyg-hekim-muayenesi.webp" data-gb="Hekim muayenesi" data-ga="Her uygulamadan önce atılması zorunlu adımdır; dökülmenin dağılımı, ne zamandır sürdüğü ve ailenizdeki benzer durumlar burada konuşulur."><h4>Hekim muayenesi</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">İLK BASAMAK</i></span><span class="g-hucre">Aynı gün</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/uygulama-sonrasi-takip/" data-gg="${r}varliklar/gorsel/uyg-uygulama-sonrasi-takip.webp" data-gb="Uygulama sonrası takip" data-ga="Saçta yanıt aylar içinde ölçülür. Her kontrolde aynı ışık ve açıyla alınan kayıtlar, izlenime dayalı yorumların önüne geçer."><h4>Uygulama sonrası takip</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">TAKİP</i></span><span class="g-hucre">Aylarla ölçülür</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-sac-mezoterapisi.webp" alt=""></div><div class="g-ic"><h4>Saç mezoterapisi</h4><p>Vitamin, mineral ve amino asitlerden oluşan karışımlar saçlı derinin üst katmanına küçük noktalar hâlinde verilir; seri olarak, haftalar arayla yapılır.</p><a class="dgm dgm--iki" href="${r}uygulamalar/sac-mezoterapisi/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- 6 ── PLAN + SINIRLAR -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Süreç</p><h2>Saçlı deri için plan hangi adımlarla ilerler?</h2><p class="giris">İlk görüşmede işlem yapılacağını varsaymayın. Saç dökülmesinde en yaygın yanlış, nedeni aramadan seanslara geçmektir.</p></div>
    <div class="g-bento">
      <div class="g-kutu g-b3" data-gr><span class="g-ket">ADIMLAR</span>
        <ol class="g-protokol">
          <li><b>Muayene:</b> dökülmenin ne zaman başladığı, saçlı derinin tamamına mı yoksa belli bir bölgeye mi yayıldığı, tellerin incelip incelmediği ve saçlı deride kızarıklık ya da kepek olup olmadığı incelenir.</li>
          <li><b>Öykü ve tahlil:</b> ailenizdeki dökülme öyküsü, son altı ay içinde geçirdiğiniz hastalıklar ya da doğum, kullandığınız ilaç ve takviyeler not edilir. Gerekli görülürse kanınızdaki ferritin, tiroid hormonları ve bazı vitaminler ölçülür.</li>
          <li><b>Öncelikler:</b> tahlilde bir eksiklik ya da muayenede bir hastalık çıkarsa ilk iş onu düzeltmektir; saçlı deriye yönelik destek bu tedavinin yanında yürütülür.</li>
          <li><b>Üçüncü ay kontrolü:</b> uygun görülen uygulama seri hâlinde planlanır ve çoğunlukla üçüncü ayın sonunda yanıtına bakılır. Belirgin bir yanıt yoksa seriyi uzatmayız.</li>
        </ol>
      </div>
      <div class="g-kutu g-b3 g-kutu--gece" data-gr style="--d:80ms"><span class="g-ket">İLKE</span><p>&#8220;Nedeni bilinmeyen bir dökülmede seriye başlamayız; uygulama, değerlendirmenin yerine değil ardından gelir.&#8221;</p></div>
      <div class="kutu kutu--uyari g-b4" data-gr style="--d:140ms">
        <b>Kimlere yapılmaz ya da ertelenir?</b>
        <ul>
          <li><b>Nedeni bulunmamış dökülme:</b> muayene ve gerekli tahliller tamamlanmadan iğneyle yapılan bir işlem planlanmaz.</li>
          <li><b>Saçlı deride etkin enfeksiyon:</b> mantar, kıl kökü iltihabı (folikülit) ya da açık yara varsa önce bu iyileşir.</li>
          <li><b>İz bırakan dökülme şüphesi:</b> parlak, kılsız ve sertleşmiş alanlar görülürse estetik amaçlı işlem yapılmaz; önce ayırıcı tanı konur.</li>
          <li><b>Gebelik ve emzirme:</b> bu süreçte iğneyle yapılan işlemlere başlanmaz.</li>
          <li><b>Kanama sorunu ya da kan sulandırıcı ilaç:</b> saçlı deri bol kanlanan bir bölgedir; ilacınızda değişiklik gerekirse bu ancak ilacı veren hekimin onayıyla konuşulur.</li>
          <li><b>Plazma uygulamasına özel engeller:</b> ağır kansızlık, düşük trombosit sayısı ve bazı kan hastalıklarında PRP seçilmez.</li>
          <li><b>Etkin kanser tanısı ya da tedavisi:</b> tedavinizi yürüten hekimin görüşü alınmadan plan yapılmaz.</li>
          <li><b>Bilinen aşırı duyarlılıklar:</b> lokal anestezik, antiseptik ya da daha önce denediğiniz bir karışıma verdiğiniz tepkiyi muayenede anlatın.</li>
        </ul>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:210ms"><span class="g-ket">KAPSAM</span>
        <p>Muayenehanede yalnızca hekimimizin uzmanlığı ve Sağlık Bakanlığı onaylı sertifikasının kapsadığı işlemler yapılır; saç ekimi ve diğer cerrahi girişimler bu çerçevede yer almaz. Gerekçesini <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a> sayfasında açıkladık.</p>
      </div>
    </div>
  </div>
</section>

<!-- 7 ── SONRASI + BEKLENTİ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Sonrası</p><h2>İşlemden sonraki günlerde nelere dikkat etmelisiniz?</h2></div>
    <div class="izgara izgara--2">
      <div class="kart kart--duz" data-gr>
        <h3>İlk günler</h3>
        <p>Saçlı deriye yapılan işlemlerden sonra çoğunlukla o gün saç yıkanmaz; planların çoğunda altı ile on iki saat arasında beklemeniz istenir. İlk iki gün sauna, hamam, havuz ve denizden uzak durmanızı, çok terleten sporlara da ara vermenizi öneririz. İğne yerlerinde küçük kabarıklıklar, hafif kızarıklık ve birkaç saatlik bir hassasiyet olağandır; çoğunlukla ertesi güne kalmaz.</p>
        <p>Boya, keratin gibi kimyasal saç işlemleri için genellikle bir hafta beklenir; ilk günlerde saçınızı sıkı toplamamanız da iyi olur. Onay verirseniz her kontrolde aynı ışık ve açıyla, aynı saç ayrımıyla fotoğraf alırız; böylece değişimi izlenime göre değil kayda göre değerlendiririz. Randevunuzdan önce işinize yarayacak notları <a href="${r}hazirlik-listesi/">hazırlık listesi</a> sayfasında topladık.</p>
      </div>
      <div class="kart kart--duz" data-gr style="--d:80ms">
        <h3>Gerçekçi beklenti</h3>
        <p>Destekleyici uygulamalar ölmüş bir kıl kökünü canlandırmaz; uzun zamandır kılsız ve parlak görünen bir alanda beklentiyi buna göre tutmak gerekir. Hedef, kıl köklerinin hâlâ çalıştığı yerlerde telin kalınlığını ve büyüme döngüsünü desteklemektir.</p>
        <p>Bir seriyi tamamlamak, yavaş ilerleyen bir dökülmenin durduğu anlamına gelmez; androgenetik dökülme ömür boyu süren bir yatkınlıktır ve belli aralıklarla yeniden ele alınır. Değişim aylar içinde ortaya çıkar; ilk anlamlı kontrol genellikle üçüncü ayı bekler. Yanıt kişiden kişiye değişir ve kimi kişilerde beklenen fark görülmeyebilir.</p>
      </div>
    </div>
  </div>
</section>

<!-- 8 ── SORU TERMİNALİ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Soru–cevap</p><h2>Aklınızdaki soruyu seçin, yanıtı yanda okuyun</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr')} · saçlı deri · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Günde ne kadar saç dökülmesi olağan sayılır?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Muayeneye gelmeden önce tahlil yaptırmalı mıyım?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Doğum yaptıktan sonra saçlarım dökülmeye başladı; ne yapmalıyım?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Değişimi ne zaman görmeye başlarım?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Muayenehanenizde saç nakli yapılıyor mu?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini buradan öğrenebilir miyim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede birlikte bakalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Günde ne kadar saç dökülmesi olağan sayılır?","Sağlıklı bir yetişkinde günde ortalama elli ile yüz tel dökülmesi olağan kabul edilir. Tek tek tel saymaktan çok gidişat önemlidir: son haftalarda belirgin biçimde artan dökülme, genişleyen saç ayrımı, incelen teller ya da saçlı deride kızarıklık varsa değerlendirme zamanı gelmiş demektir."],["Muayeneye gelmeden önce tahlil yaptırmalı mıyım?","Gerek yok; önce muayeneye gelin. Hangi tahlillerin isteneceği, dökülmenin dağılımına ve öykünüze bakılarak belirlenir. Son üç ay içinde yaptırdığınız kan tahlilleri varsa yanınızda getirmeniz işimizi kolaylaştırır. Nedeni belli olmayan bir dökülmede uygulamaya geçmeyiz."],["Doğum yaptıktan sonra saçlarım dökülmeye başladı; ne yapmalıyım?","Doğumdan iki–dört ay sonra saçların tutam tutam dökülmesi sık görülür; bu çoğunlukla telogen effluvium denen geçici bir tablodur ve aylar içinde kendiliğinden yatışır. Emzirdiğiniz sürece iğneyle yapılan bir işlem planlamayız. İlk iş demir ve tiroid değerlerinize bakmaktır. Altı aydan uzun süren bir dökülmede sizi yeniden muayene ederiz."],["Değişimi ne zaman görmeye başlarım?","Saçın büyüme döngüsü yavaş işler; bu yüzden anlamlı bir değerlendirme için genellikle üçüncü ayı bekleriz. İlk haftalarda saçınızın daha parlak ya da daha canlı durduğunu hissedebilirsiniz; bu his, tel sayısının arttığını göstermez. Yanıt kişiden kişiye değişir."],["Muayenehanenizde saç nakli yapılıyor mu?","Hayır. Saç nakli ve diğer cerrahi yöntemler muayenehanemizde yapılmaz. Muayenede tablonuzun cerrahi bir çözüm gerektirdiğini görürsek bunu size açıkça söyler, ilgili uzmanlık dalını öneririz. Kapsamımız dışındaki bir istek için başka bir uygulamayı alternatif gibi sunmayız."],["Ücret bilgisini buradan öğrenebilir miyim?","Hayır. Sağlık tanıtım mevzuatı nedeniyle sitemizde işlem ücretleri bulunmaz. Size özel plan muayenede belli olduktan sonra ücret bilgisini ayrıca paylaşırız. Konunun ayrıntısını mevzuat sayfamızda okuyabilirsiniz."]]</script>

<!-- 9 ── KAPANIŞ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Önce nedeni bulalım, planı sonra yapalım</h2>
    <p class="g-sonalt">Dökülmenizin hangi türe uyduğunu birlikte anlamak için ${S.iletisim.semt} muayenehanemizden randevu talep edebilirsiniz. Son üç ay içinde yaptırdığınız tahliller varsa yanınızda getirin.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesini doldurun</a>
    </div>
  </div>
</section>
`,
};
