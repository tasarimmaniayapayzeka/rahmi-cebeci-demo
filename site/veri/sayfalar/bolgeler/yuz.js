const S = require('../../site');

module.exports = {
  slug: 'bolgeler/yuz',
  tip: 'tibbi',
  baslik: 'Yüz bölgesi: üst, orta ve alt yüzü birlikte planlamak',
  aciklama: 'Alın, elmacık ve çene hattı birbirine yaslanır. Yüz planı tek bir çizgiye göre değil; hacim, kas hareketi ve deri kalitesi birlikte okunarak kurulur.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}bolgeler/" style="color:var(--sessiz);text-decoration:none">Bölgeler</a> › <span>Yüz</span></nav>
      <p class="g-etiket">Bölge rehberi · Yüz</p>
      <h1>Tek bir çizgiye değil, <span class="g-isik">yüzün bütününe</span> bakılır.</h1>
      <p class="g-hero__alt">Alın, elmacık ve çene hattı ayrı bölgeler gibi görünse de birbirine yaslanır. Orta yüze eklenen destek ağız kenarının görünümünü, alt yüzdeki bir değişiklik ise yüzün genel oranını etkiler. Muayenede önce değişimin hangi katmanda olduğu ayrılır, ardından bir basamağa gerçekten ihtiyaç olup olmadığı konuşulur; kimi zaman varılan karar hiçbir işlem yapmamaktır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu isteyin</a>
        <a class="dgm dgm--iki" href="#butun">Planlama nasıl yapılır? ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Uygulamayı hekim yapar</span><span><i></i>Adım adım plan</span><span><i></i>Kontrol randevusu planın içinde</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/bolge-yuz.webp" width="1400" height="788" alt="Sade bir fonda önden bakan, doğal görünümlü bir kadın yüzü" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <button class="g-nokta" data-gn="ust" style="--x:50%;--y:13%" aria-label="Üst yüz"><span data-ad="Üst yüz"></span></button>
      <button class="g-nokta" data-gn="orta" style="--x:44%;--y:29%" aria-label="Orta yüz"><span data-ad="Orta yüz"></span></button>
      <button class="g-nokta" data-gn="alt" style="--x:50%;--y:38%" aria-label="Alt yüz"><span data-ad="Alt yüz"></span></button>
      <div class="g-hud" data-ghud><b>Üç bölge birbirine yaslanır</b><div class="g-cizgi"></div><span>Bir noktaya dokunun; o bölgenin yüzde neyi belirlediğini görün.</span></div>
    </div>
  </div>
</section>
<script type="application/json" data-gnokta-veri>{"ust":["Üst yüz","Alın, kaşlar ve şakaklar — mimiklerin en çok iz bıraktığı kat."],"orta":["Orta yüz","Yanak, elmacık ve göz altına geçiş — yüzü ortadan taşıyan kat."],"alt":["Alt yüz","Dudak çevresi, çene ucu ve çene hattı — yüzün alt çerçevesi."]}</script>

<!-- ═════════ VERİ BANDI ═════════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="4">0</em></b><span>İncelenen doku katı</span></div>
  <div data-gr style="--d:70ms"><b><em data-gsay="3">0</em></b><span>Yüz bölgesi</span></div>
  <div data-gr style="--d:140ms"><b><em data-gsay="5">0</em></b><span>Planlama adımı</span></div>
  <div data-gr style="--d:210ms"><b>Ölçülü</b><span>Az ve aşamalı ilerleme</span></div>
</div></div>

<!-- ═════════ NEDEN BÜTÜN ═════════ -->
<section class="bolum" id="butun">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Bakış açısı</p>
      <h2>Yüzde neden tek bir bölgeye bakarak karar verilmez?</h2>
      <p class="giris">Başvuruların büyük kısmı tek bir ayrıntıyla gelir: kaşların arasındaki derin çizgi, ağız kenarında beliren gölge ya da yanakta fark edilen düzleşme. Muayenede bu ayrıntıya odaklanmadan önce bir adım geri çekilip yüzün tamamına bakılır, çünkü bölgelerin hiçbiri ötekilerden bağımsız değildir.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">Kesit 01 · ETKİLEŞİM</span>
      <h3>Bir bölgedeki değişim komşusuna yansır</h3>
      <p>Elmacık hattında desteği artıran bir basamak, ağız kenarına hiç dokunulmadan oradaki gölgeyi hafifletebilir. Tersine, yalnız çene ve dudak çevresine yoğunlaşan bir plan alındaki ve şakaktaki değişimi daha çok öne çıkarabilir. Karar bu nedenle tek bir bölgenin görünümüne dayandırılmaz.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">Kesit 02 · ORAN</span>
      <h3>Amaç yeni bir yüz değil, sizin yüzünüz</h3>
      <p>Yaşla gelen değişim yüzün birkaç noktasında aynı anda ama farklı hızlarda ilerler. Örneğin yalnızca ağız kenarındaki gölgeye yüklenmek, orada bir düzelme sağlasa bile yanağın ve çenenin oranlarıyla çelişen bir görünüm bırakabilir. Planın ölçüsü, kişinin mevcut hatlarının ve ifadesinin korunmasıdır.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">Kesit 03 · SIRA</span>
      <h3>Bir adımın sonucu görülmeden ikincisine geçilmez</h3>
      <p>Plan yazılırken hangi basamağın önce geleceği, hangisinin bekleyebileceği ve hangisine hiç gerek olmadığı baştan belirlenir. Birden çok başlık aynı seansa toplanmaz; önceki adımın etkisi oturduktan sonra sıradaki konuşulur. Böylece görülen değişimin hangi adımdan geldiği de izlenebilir kalır.</p>
    </div>
  </div>
</section>

<!-- ═════════ KATMANLAR ═════════ -->
<section class="bolum bolum--sicak" id="katmanlar">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Doku yapısı</p>
      <h2>Yaş aldıkça yüzün hangi katları değişir?</h2>
      <p class="giris">Zamanla değişen tek bir yapı yoktur; deri, yağ bölmeleri, mimik kasları ve kemik iskelet birlikte etkilenir. Şikâyetin kaynağı olan kat belirlenmeden uygun basamak seçilemez.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kart kart--duz" data-gr>
        <span class="kart__ikon">${ik.yaprak}</span>
        <h3>Deri ve yüzey kalitesi</h3>
        <p>Derinin su bağlama gücü ve kolajen ağının düzeni yıllar içinde zayıflar; yüzey matlaşır, ince çizgiler kalıcı hâle gelir. Bu katta hacim eklemek bir çözüm sunmaz; cilt kalitesine yönelik uygulamalar ve düzenli güneş koruması öne çıkar.</p>
      </div>
      <div class="kart kart--duz" data-gr style="--d:70ms">
        <span class="kart__ikon">${ik.damla}</span>
        <h3>Yağ bölmeleri</h3>
        <p>Yüzdeki yağ dokusu kesintisiz bir tabaka değil, sınırları belli bölmeler hâlindedir. Bu bölmelerin bir kısmı zamanla incelir, bir kısmı ise aşağı kayar. Şakakta çöküklük, elmacıkta düzleşme ve ağız kenarındaki gölge çoğunlukla bu kaymanın sonucudur.</p>
      </div>
      <div class="kart kart--duz" data-gr>
        <span class="kart__ikon">${ik.kalkan}</span>
        <h3>Mimik kasları</h3>
        <p>Gülme, kaş kaldırma ve göz kısma gibi hareketler yıllarca tekrarlandıkça deride iz bırakır. Çizginin yalnız hareket sırasında mı belirdiği, yoksa yüz dinlenirken de mi durduğu, seçilecek yolu doğrudan değiştirir.</p>
      </div>
      <div class="kart kart--duz" data-gr style="--d:70ms">
        <span class="kart__ikon">${ik.mercek}</span>
        <h3>Kemik iskelet</h3>
        <p>Kemikteki değişim yavaş ilerler ama etkisi büyüktür: göz çukurunun kenarları genişler, çene köşesi belirginliğini yitirir. Desteğin kemik düzeyinde azaldığı bir tabloya yüzeysel bir işlemle yanıt verilemez; bu ayrım muayenede yapılır.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ ATLAS: ÜÇ BÖLGE ═════════ -->
<section class="bolum bolum--buz2" id="ucbolge">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Orantı</p>
      <h2>Yüzün üç katı birbirini nasıl etkiler?</h2>
      <p class="giris">Alın ve kaşlar yüzün ifadesini, elmacık ve yanak onu taşıyan desteği, çene ve dudak çevresi ise alt kenarı oluşturur. İncelemeye çoğu zaman ortadaki destekten başlanır; üstteki ve alttaki bölgelerin nasıl göründüğü büyük ölçüde oraya bağlıdır.</p>
    </div>
    <div class="g-atlas-duzen">
      <div class="g-atlas" data-gr>
        <div class="g-atlas-kap">
          <img src="${r}varliklar/gorsel/yuz-3d-d.webp" width="900" height="1200" alt="Üst, orta ve alt yüz bölgelerinin işaretlendiği, sağa dönük üç boyutlu kadın profili" loading="lazy">
          <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
          <button class="g-nokta" data-gn="ust" style="--x:68%;--y:22%" aria-label="Üst yüz"><span data-ad="Üst yüz"></span></button>
          <button class="g-nokta" data-gn="orta" style="--x:66%;--y:40%" aria-label="Orta yüz"><span data-ad="Orta yüz"></span></button>
          <button class="g-nokta" data-gn="alt" style="--x:65%;--y:54%" aria-label="Alt yüz"><span data-ad="Alt yüz"></span></button>
          <div class="g-rozetk" data-grozet><b>Üst yüz</b><span>Alın, kaşlar ve şakaklar — mimiklerin en çok iz bıraktığı kat.</span></div>
        </div>
      </div>
      <div>
        <div class="g-katblok" data-gkat="ust" data-gr>
          <span class="g-kno">Kesit 01 · ÜST KAT</span>
          <h3>Alın, kaş ve şakak</h3>
          <p>Bu bölgede belirleyici olan kas etkinliğidir; alındaki yatay çizgiler ve iki kaş arasındaki dikey çizgi en sık dile getirilen şikâyetlerdir. Şakakta hacim azaldığında üst yüz daralmış ve yorgun görünür. Buradaki her müdahale kaşın yüksekliğini ve kavisini değiştirebileceği için doz ve uygulama noktaları sınırlı tutulur.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/botulinum-toksin/">Botulinum toksin</a><a href="${r}cilt-sorunlari/mimik-cizgileri-ve-kirisiklik/">Mimik çizgileri</a></div>
        </div>
        <div class="g-katblok" data-gkat="orta" data-gr>
          <span class="g-kno">Kesit 02 · ORTA KAT</span>
          <h3>Elmacık, yanak ve göz altı geçişi</h3>
          <p>Orta yüz, üstündeki ve altındaki bölgelere destek veren kattır. Burada hacim azaldığında etkisi iki yönde görülür: göz altında gölge, ağız kenarında belirginleşen kıvrım. Alt yüzden yakınan birinde ilk incelenen yerin çoğu zaman elmacık hattı olması bundandır.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/dolgu-uygulamalari/">Dolgu uygulamaları</a><a href="${r}uygulamalar/sivi-yuz-germe/">Sıvı yüz germe</a><a href="${r}bolgeler/goz-cevresi/">Göz çevresi</a></div>
        </div>
        <div class="g-katblok" data-gkat="alt" data-gr>
          <span class="g-kno">Kesit 03 · ALT KAT</span>
          <h3>Dudak köşeleri, çene ucu ve çene hattı</h3>
          <p>Yüzün alt kenarı ne kadar net görünüyor? Bu bölgede sorulan asıl soru budur. Dudak köşelerinden aşağı uzanan çizgilere, çene ucunun ne kadar öne çıktığına ve kulak önünden çeneye uzanan hattın keskinliğine birlikte bakılır. Çene hattını ve dudağı ayrıntılı olarak kendi sayfalarında ele aldık.</p>
          <div class="g-haplar"><a href="${r}bolgeler/cene-ve-jawline/">Çene ve çene hattı</a><a href="${r}bolgeler/dudak/">Dudak</a></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS: UYGULAMALAR ═════════ -->
<section class="bolum" id="uygulamalar">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Olası yollar</p>
      <h2>Yüz planına hangi uygulamalar girebilir?</h2>
      <p class="giris">Listede yüz planına girebilecek seçenekleri bir arada görüyorsunuz. Bunlar birlikte satılan bir set değildir; çoğu kişide yalnızca bir ya da ikisi gerekir, bazılarında hiçbiri. Hangisinin size uyduğu muayeneden sonra netleşir.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Yöntem</span><span>Amaç</span><span>Toparlanma</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/botulinum-toksin/" data-gg="${r}varliklar/gorsel/uyg-botulinum-toksin.webp" data-gb="Botulinum toksin" data-ga="Hareketle beliren çizgilerde değerlendirilir; önce çizginin yalnız mimik sırasında mı ortaya çıktığı ayrılır."><h4>Botulinum toksin</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">Mimik çizgisi</i></span><span class="g-hucre">Birkaç gün</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/dolgu-uygulamalari/" data-gg="${r}varliklar/gorsel/uyg-dolgu-uygulamalari.webp" data-gb="Dolgu uygulamaları" data-ga="Belirgin hacim kaybında eksilen desteği, yüzün kendi oranlarını aşmadan tamamlamayı amaçlar."><h4>Dolgu uygulamaları</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">Hacim desteği</i></span><span class="g-hucre">Birkaç gün</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/sivi-yuz-germe/" data-gg="${r}varliklar/gorsel/uyg-sivi-yuz-germe.webp" data-gb="Sıvı yüz germe" data-ga="Destek ihtiyacı tek noktada değil, yüzün birkaç bölgesine yayılmışsa bütüncül bir plan olarak konuşulur."><h4>Sıvı yüz germe</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">Bütüncül destek</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/biyostimulan-uygulamalar/" data-gg="${r}varliklar/gorsel/uyg-biyostimulan-uygulamalar.webp" data-gb="Biyostimülan uygulamalar" data-ga="Kolajen yapımını zamana yayarak desteklemeyi hedefler; değişim haftalar içinde ve kademeli olarak ortaya çıkar."><h4>Biyostimülan uygulamalar</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">Doku desteği</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/genclik-asisi-skinbooster/" data-gg="${r}varliklar/gorsel/uyg-genclik-asisi-skinbooster.webp" data-gb="Gençlik aşısı (skinbooster)" data-ga="Hacim eklemeden cildin nem dengesini ve yüzey kalitesini hedefler."><h4>Gençlik aşısı (skinbooster)</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">Cilt kalitesi</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/mezoterapi/" data-gg="${r}varliklar/gorsel/uyg-mezoterapi.webp" data-gb="Mezoterapi" data-ga="Sorun hacimden çok cildin matlığı ve dokusundaysa değerlendirilir."><h4>Mezoterapi</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">Cilt kalitesi</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/fraksiyonel-lazer/" data-gg="${r}varliklar/gorsel/uyg-fraksiyonel-lazer.webp" data-gb="Fraksiyonel lazer" data-ga="Yüzey dokusu, ince çizgi ve iz görünümünde seanslara bölünmüş bir planla ele alınır."><h4>Fraksiyonel lazer</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">Yüzey</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/hifu-ameliyatsiz-yuz-germe/" data-gg="${r}varliklar/gorsel/uyg-hifu-ameliyatsiz-yuz-germe.webp" data-gb="HIFU — ameliyatsız sıkılaştırma" data-ga="Deride gevşemenin ön planda olduğu tablolarda konuşulur; cerrahinin yerini tutmaz."><h4>HIFU</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">Sıkılaştırma</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/altin-igne-radyofrekans/" data-gg="${r}varliklar/gorsel/uyg-altin-igne-radyofrekans.webp" data-gb="Altın iğne radyofrekans" data-ga="Gevşeme ve gözenek görünümünde ikinci bir seçenektir; cerrahi bir germenin karşılığı sayılmaz."><h4>Altın iğne radyofrekans</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">Sıkılaştırma</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-botulinum-toksin.webp" alt=""></div><div class="g-ic"><h4>Botulinum toksin</h4><p>Hareketle beliren çizgilerde değerlendirilir; önce çizginin yalnız mimik sırasında mı ortaya çıktığı ayrılır.</p><a class="dgm dgm--iki" href="${r}uygulamalar/botulinum-toksin/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ MUAYENE + SINIR ═════════ -->
<section class="bolum bolum--buz2" id="muayene">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Akış ve uygunluk</p>
      <h2>Muayenede yüz planı nasıl çıkarılır?</h2>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b4" data-gr>
        <span class="g-ket">PLANLAMA ADIMLARI</span>
        <ol class="g-protokol">
          <li><b>Şikâyet ve beklenti.</b>&nbsp;Aynada sizi en çok neyin rahatsız ettiğini anlatarak başlarsınız; beklentiniz uygulamaların ulaşabileceği noktanın ötesindeyse bunu ilk görüşmede açıkça konuşuruz.</li>
          <li><b>Katların tek tek incelenmesi.</b>&nbsp;Derinin durumu, yağın nereye kaydığı, hangi kasların fazla çalıştığı ve kemiğin ne kadar destek verdiği ayrı ayrı yazılır; yüzünüze hem sakinken hem de gülerken, kaş kaldırırken bakılır, sağ ve sol taraf karşılaştırılır.</li>
          <li><b>Sağlık öyküsü.</b>&nbsp;Daha önce yapılmış işlemler, kan sulandırıcı ilaçlar, bağışıklık sistemi hastalıkları, gebelik ya da emzirme, yakın dönemde geçirilen enfeksiyon veya diş tedavisi sorulur; bilinen aşırı duyarlılıklarınızı belirtin.</li>
          <li><b>Önceliklerin sıralanması.</b>&nbsp;Çoğu planda destek ve cilt kalitesi öne, çizgiye yönelik adımlar sona alınır; gereksiz görülen basamak da bu aşamada açıkça söylenir.</li>
          <li><b>Bilgilendirme, onam ve kontrol.</b>&nbsp;Neyin amaçlandığını ve hangi istenmeyen durumların görülebileceğini yazılı olarak alırsınız; onamınız olmadan işleme başlanmaz. Kontrol tarihi, şişliğin inmesine zaman tanıyacak biçimde seçilir.</li>
        </ol>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr style="--d:70ms"><span class="g-ket">Hekimin notu</span><p>"Bir yüzü başka bir yüze benzetmeye çalışmayız; sahibinin hatlarını korumaya çalışırız."</p></div>
    </div>
    <div class="izgara izgara--2" style="margin-top:22px">
      <div class="kutu kutu--uyari" data-gr>
        <h4>Kimlere uygulanmaz</h4>
        <ul>
          <li>Gebelik ve emzirme süreci</li>
          <li>İşlem yapılacak alanda uçuk, aktif enfeksiyon ya da iltihaplı sivilce</li>
          <li>Kullanılacak ürünün içeriğine karşı bilinen aşırı duyarlılık</li>
          <li>Uygulamanın sağlayabileceğinin ötesinde bir sonuç beklentisi</li>
          <li>Belirgin deri fazlalığı nedeniyle cerrahi değerlendirme gerektiren tablolar</li>
        </ul>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:70ms">
        <h4>Ertelenen ya da ayrıca planlanan durumlar</h4>
        <ul>
          <li>Kan sulandırıcı ilaç kullanımı veya pıhtılaşma sorunu</li>
          <li>Yakın dönemde geçirilen enfeksiyon, yapılan aşı ya da diş tedavisi</li>
          <li>Kontrol altına alınmamış otoimmün hastalık</li>
          <li>Aynı bölgeye daha önce uygulanmış, içeriği bilinmeyen ürün</li>
          <li>Alevlenmiş akne ya da tahriş olmuş, bariyeri zayıflamış cilt</li>
        </ul>
      </div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <p>İşlem gününden sonra genellikle şunları isteriz: ilk gün yüzünüze bastırmamanız ve ovmamanız, birkaç gün sauna, hamam ve ağır spora ara vermeniz, güneş koruyucuyu bırakmamanız ve kontrol gününe gelmeniz. Uygulamaya göre değişen ayrıntılar için <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası takip</a> sayfasına bakabilirsiniz.</p>
<p>Cildiniz çabuk kızarıyor ve tahriş oluyorsa işlemden önce bariyerin toparlanması beklenir; ilk adım kullandığınız ürün sayısını azaltmaktır. Cildinizin eğilimine kabaca bakmak için <a href="${r}cilt-tipi-testi/">cilt eğilimi testi</a> yol gösterebilir. Hangi işlemleri yapmadığımızı ve bu durumda sizi nereye yönlendirdiğimizi <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">ayrı bir sayfada</a> topladık.</p>
    </div>
    <div class="kutu kutu--acil" data-gr style="margin-top:22px">
      <b>Bir sorun gelişirse</b>
      <p>İşlemden sonra sizi tedirgin eden bir değişiklik olursa ilk olarak bizi <a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a> numarasından arayın. Dinmeyen ve giderek artan ağrı, derinin bembeyaz olması ya da morumsu bir ağ görünümü alması, bulanık görme, hızla kabaran şişlik ya da ateş gibi durumlarda vakit kaybetmeyin; telefonla ulaşamazsanız <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Soru–cevap</p><h2>Aklınızdaki soruyu seçin, yanıtı yanda okuyun</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr')} · yüz bölgesi · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Herkesin “botoks” dediği işlemin asıl adı ne?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>“Ameliyatsız yüz germe” gerçekten mümkün mü?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Bütün yüzüm tek seansta ele alınabilir mi?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Değişimi ne zaman görürüm, ne kadar sürer?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Doğal görünümümü kaybetmekten korkuyorum; bu nasıl önleniyor?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nereden öğrenebilirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede birlikte bakalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Herkesin “botoks” dediği işlemin asıl adı ne?","Bu işlem tıpta botulinum toksin uygulaması olarak adlandırılır. “Botoks” kelimesi aslında piyasadaki ürünlerden birinin ticari adıdır ve zamanla işlemin genel adı gibi kullanılmaya başlanmıştır. Hangi çizgilerde düşünüldüğünü ve kimlere uygulanmadığını botulinum toksin sayfasında ayrıntılı anlattık."],["“Ameliyatsız yüz germe” gerçekten mümkün mü?","Bu söz halk arasında iki farklı şey için kullanılır: HIFU gibi ameliyat gerektirmeyen sıkılaştırma yöntemleri ve yüzün birkaç noktasına yayılan dolgu planları. İkisi de derinin bir miktar toparlanmasını amaçlar, ama cerrahi yüz germenin yerini tutmaz. Sarkmış deri fazlaysa ameliyatla elde edilebilecek bir değişimi bu yöntemlerden beklemek doğru olmaz; bu durumda sizi ilgili cerrahi uzmanlık dalına yönlendiririz."],["Bütün yüzüm tek seansta ele alınabilir mi?","Yüzün tamamına dair plan ilk görüşmede çıkarılabilir; uygulamaların hepsini aynı güne sığdırmak ise çoğu zaman doğru olmaz. Birkaç işlem bir arada yapıldığında aynada gördüğünüz değişikliğin hangisinden geldiği anlaşılmaz; bir şişlik ya da morluk çıktığında nedenini bulmak da zorlaşır. Adımları birkaç hafta arayla sıralamak bu karışıklığın önüne geçer."],["Değişimi ne zaman görürüm, ne kadar sürer?","Bu, seçilen uygulamaya bağlıdır: dolguda fark kısa sürede, kolajeni uyaran yöntemlerde ise haftalar içinde yavaş yavaş belirir. Kalıcılık da herkeste aynı değildir; bölgenin ne kadar hareket ettiği, vücudun ürünü ne hızda yıktığı ve ürünün kendi yapısı süreyi etkiler. Bu yüzden size belirli bir ay sayısı ya da sonuç sözü vermeyiz."],["Doğal görünümümü kaybetmekten korkuyorum; bu nasıl önleniyor?","Ölçü sizin kendi oranlarınızdır. Planın hedefi bir modele benzemek değil, var olan hatlarınızı korumaktır. Bunun uygulamadaki karşılığı düşük miktarla başlamak, seansları aralıklı tutmak ve her adımdan sonra durup sonucu birlikte değerlendirmektir. Kimi görüşmelerin sonunda önerilen şey hiçbir işlem yapmamaktır."],["Ücret bilgisini nereden öğrenebilirim?","Sağlık tanıtımına ilişkin yönetmelik, sağlık kuruluşlarının internet sitesinde ücret paylaşmasına izin vermez. Üstelik yüz planı kişiden kişiye çok farklı şekillendiği için burada yazacağımız bir sayı size doğru bir fikir de vermezdi. Plan muayenede netleştikten sonra ücreti size doğrudan bildiririz."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Yüzünüzü bir bütün olarak değerlendirelim</h2>
    <p class="g-sonalt">${S.iletisim.adres}, ${S.iletisim.ilce} — muayenede önce değişimin hangi katmandan kaynaklandığını ayırıyor, ardından bir adıma gerçekten ihtiyaç olup olmadığını birlikte konuşuyoruz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
