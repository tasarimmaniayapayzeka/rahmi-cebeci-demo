const S = require('../../site');

module.exports = {
  slug: 'cilt-sorunlari/mimik-cizgileri-ve-kirisiklik',
  tip: 'tibbi',
  baslik: 'Mimik çizgileri ve kırışıklık: hareket mi, doku kaybı mı?',
  aciklama: 'Kaş kaldırınca beliren çizgi ile yüz dinlenirken de duran kırışıklığın kaynağı farklıdır. Kas, deri ve hacim payı muayenede nasıl ayrılır, neler konuşulur?',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}cilt-sorunlari/" style="color:var(--sessiz);text-decoration:none">Cilt sorunları</a> › <span>Mimik çizgileri ve kırışıklık</span></nav>
      <p class="g-etiket">Cilt sorunları · Mimik ve kırışıklık</p>
      <h1>Önce çizginin <span class="g-isik">nereden geldiğine</span> bakıyoruz</h1>
      <p class="g-hero__alt">Yüzdeki çizgilerin bir kısmı yalnız kaş kaldırdığınızda ya da gülümsediğinizde ortaya çıkar; bir kısmı ise yüzünüz tamamen dinlenirken de yerinde durur. İlki kas hareketinin, ikincisi deride yerleşmiş yapısal değişimin izidir. Hangisinin ağır bastığı anlaşılmadan hangi yöntemin konuşulacağına karar verilemez.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Muayene için randevu</a>
        <a class="dgm dgm--iki" href="#nedenler">Çizgi türlerini inceleyin ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Kaynak ayrımıyla başlanır</span><span><i></i>Muayene ve plan hekimde</span><span><i></i>Mimik doğallığı gözetilir</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/sorun-mimik-cizgileri.webp" width="1400" height="788" alt="Göz kenarında hafif mimik çizgileri bulunan, gülümseyen bir kadın yüzü" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
      <button class="g-nokta" data-gn="ust" style="--x:23%;--y:13%" aria-label="Alın ve kaş arası"><span data-ad="Alın"></span></button>
      <button class="g-nokta" data-gn="orta" style="--x:51%;--y:29%" aria-label="Göz kenarı"><span data-ad="Göz kenarı"></span></button>
      <button class="g-nokta" data-gn="alt" style="--x:40%;--y:69%" aria-label="Dudak çevresi"><span data-ad="Dudak çevresi"></span></button>
      <div class="g-hud" data-ghud><b>Mimik haritası</b><div class="g-cizgi"></div><span>Bir noktaya dokunun, o bölgenin notu açılsın</span></div>
    </div>
  </div>
</section>
<script type="application/json" data-gnokta-veri>{"ust":["Alın ve kaş arası","Kaş kaldırınca yatay, kaş çatınca dikey çizgiler belirir; bu bölgede kas hareketi çoğunlukla öndedir"],"orta":["Göz kenarı","Deri burada çok incedir; gülümseme çizgileri genellikle ilk bu bölgede fark edilir"],"alt":["Dudak çevresi","Büzme hareketi, güneş hasarı ve sigara birlikte ince dikey çizgiler bırakabilir"]}</script>

<!-- ═════════ ÇİZGİ TİPLERİ ═════════ -->
<section class="bolum bolum--sicak" id="nedenler">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Ayrım</p>
      <h2>Kırışıklıklar hangi yollarla oluşur?</h2>
      <p class="giris">Her mimik, deriyi aynı hat boyunca katlar. Genç deri bu katlanmanın hemen ardından düzleşir; yıllar geçtikçe esneklik azalır ve kat yeri kalıcı bir çizgiye dönüşür. Bu dönüşümde kasın çalışma gücü, deri içindeki destek liflerinin azalması, güneşin birikimli etkisi ve yüz hacminin yer değiştirmesi birlikte rol oynar.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">01</span>
      <h3>Hareketle beliren (dinamik) çizgiler</h3>
      <p>Mimik kaslarının kasılmasıyla ortaya çıkar. Alındaki yatay çizgiler, iki kaş arasındaki dikey çizgi ve göz kenarındaki kaz ayağı bu grubun tipik örnekleridir. Yüzünüzü gevşettiğinizde çizgi neredeyse hiç görünmüyorsa baskın bileşen harekettir; bu durumda konuşulan, ilgili kasın ne kadar güçlü çalıştığıdır.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/botulinum-toksin/">Botulinum toksin</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:60ms">
      <span class="g-kno">02</span>
      <h3>Dinlenirken de görünen (statik) çizgiler</h3>
      <p>Yüz hareketsizken de izlenen çizgilerdir. Burada tek etken kas değildir; deri içindeki kolajen ve elastik liflerin azalması, yıllarca aynı yerden katlanma ve alttaki hacmin incelmesi birlikte etkilidir. Korunmasız güneş ve sigara bu dönüşümü hızlandırır. Amaç derinin kendi destek yapısını güçlendirmek, derin çizgilerde ise hacmi desteklemektir; değişim haftalar ile aylar arasında, kademeli olarak izlenir.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/genclik-asisi-skinbooster/">Gençlik aşısı (skinbooster)</a><a href="${r}uygulamalar/dolgu-uygulamalari/">Dolgu uygulamaları</a><a href="${r}uygulamalar/fraksiyonel-lazer/">Fraksiyonel lazer</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:120ms">
      <span class="g-kno">03</span>
      <h3>Kuruluğa bağlı ince çizgilenme</h3>
      <p>Mimikle bağlantısı olmayan, yüzeyde ağ gibi yayılan çok ince çizgilerdir. Cildin su tutma kapasitesi düştüğünde belirginleşir, nem dengesi yerine oturduğunda bir kısmı geriler. Bu tablo <a href="${r}cilt-sorunlari/nem-kaybi-ve-donukluk/">nem kaybı ve donukluk</a> sayfasında ayrıca anlatılır.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:180ms">
      <span class="g-kno">04</span>
      <h3>Süreci hızlandıran etkenler</h3>
      <p>Deri içindeki kolajen yapımı genç erişkinlikten itibaren her yıl bir miktar azalır. Bu biyolojik süreci durdurmak mümkün değildir, ancak hızını etkileyen etkenler vardır. En belirleyici ve en kolay değiştirilebilen etken güneştir. Sigara hem deriye giden kan akımını azaltır hem de dudak çevresinde kendine özgü dikey çizgiler oluşturur.</p>
<p>Düzensiz uyku, sık tekrarlanan kilo alıp verme ve hep aynı yanağın üzerine yatma alışkanlığı da katkı verebilir. Burun kanadından ağız köşesine uzanan belirgin hat ise bir kırışıklık değil, yanak ile dudak arasındaki doğal sınırdır; derinleşmesi daha çok hacim dağılımıyla ilgilidir. Bu konuyu <a href="${r}cilt-sorunlari/hacim-kaybi-ve-sarkma/">hacim kaybı ve sarkma</a> sayfasında anlatıyoruz.</p>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:26px">
      <b>Muayenede ne yapılır, neye dokunulmaz?</b>
      <p>Önce yüzünüz tamamen gevşekken incelenir; bu anda görünen her çizgi statik bileşeni gösterir. Ardından kaş kaldırmanız, kaş çatmanız ve gülümsemeniz istenerek kasların gücü ve iki taraf arasındaki farklar izlenir. Derinin kalınlığı, nem durumu, hacim dağılımı, kullandığınız ilaçlar ve daha önceki uygulamalar <a href="${r}uygulamalar/hekim-muayenesi/">hekim muayenesi</a> sırasında kayda geçer.</p>
<p>Her çizginin ele alınması gerekmez. Gülümsediğinizde göz kenarınızda oluşan çizgiler ifadenizin bir parçasıdır; amaç onları ortadan kaldırmak değil, yorgun ya da gergin bir görüntü veriyorsa yumuşatmaktır. Belirgin deri fazlalığı ya da görmeyi etkileyen göz kapağı düşüklüğü cerrahi olmayan yöntemlerin sınırı dışında kalır; böyle bir durumda bunu açıkça söyleriz (<a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a>).</p>
    </div>
    <div class="kutu kutu--uyari" data-gr style="margin-top:18px">
      <b>Birden ortaya çıkan yüz asimetrisi acil bir durumdur</b>
      <p>Saatler ya da günler içinde gelişen tek taraflı yüz düşüklüğü, göz kapağını kapatamama, ağız kenarından sıvı kaçırma veya konuşmada bozulma estetik değerlendirmenin konusu değildir. Böyle bir durumda beklemeden 112’yi arayın ya da en yakın acil servise başvurun.</p>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Sonrası</p>
      <h2>Çizginin kaynağı netleşince hangi seçenekler konuşulur?</h2>
      <p class="giris">Genel ilke basittir: hareketten doğan çizgide kasın gücü, dokudan doğan çizgide derinin kendisi ya da alttaki hacim hedef alınır. Aşağıdaki liste bilgi vermek içindir; sizin için hangisinin uygun olduğunu muayene belirler.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Uygulama</span><span>Hedef</span><span>İyileşme</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/botulinum-toksin/" data-gg="${r}varliklar/gorsel/uyg-botulinum-toksin.webp" data-gb="Botulinum toksin" data-ga="Hareketin baskın olduğu çizgilerde ilgili kasların çalışma gücünün azaltılması hedeflenir; etkinin süresi kişiden kişiye değişir."><h4>Botulinum toksin</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">HAREKET</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/dolgu-uygulamalari/" data-gg="${r}varliklar/gorsel/uyg-dolgu-uygulamalari.webp" data-gb="Dolgu uygulamaları" data-ga="Derinleşmiş statik çizgilerde ve hacim kaybının eşlik ettiği bölgelerde ölçülü miktarla destek sağlanması amaçlanır."><h4>Dolgu uygulamaları</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">HACİM</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/genclik-asisi-skinbooster/" data-gg="${r}varliklar/gorsel/uyg-genclik-asisi-skinbooster.webp" data-gb="Gençlik aşısı (skinbooster)" data-ga="Hacim eklemeden derinin nem ve esneklik niteliğini desteklemeye yöneliktir; ince statik çizgilerde konuşulur."><h4>Gençlik aşısı (skinbooster)</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">DOKU</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/fraksiyonel-lazer/" data-gg="${r}varliklar/gorsel/uyg-fraksiyonel-lazer.webp" data-gb="Fraksiyonel lazer" data-ga="Yüzey dokusunda ve ince çizgilerde kontrollü yenilenmeyi uyarmayı hedefler; toparlanma süresi seçilen ayara göre değişir."><h4>Fraksiyonel lazer</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">YÜZEY</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-botulinum-toksin.webp" alt=""></div><div class="g-ic"><h4>Botulinum toksin</h4><p>Hareketin baskın olduğu çizgilerde ilgili kasların çalışma gücünün azaltılması hedeflenir; etkinin süresi kişiden kişiye değişir.</p><a class="dgm dgm--iki" href="${r}uygulamalar/botulinum-toksin/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sorgulayın</p><h2>Sorunuzu seçin, cevap ekrana düşsün</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr-TR')} · mimik çizgileri · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Çizgimin türünü evde nasıl ayırt edebilirim?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Botoks her kırışıklığı açar mı?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Çizgiler oluşmadan önlem almak mümkün mü?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Kırışıklık kremleri gerçekten işe yarar mı?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Uygulamadan sonra mimiklerim donuk görünür mü?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekim onaylı yanıt</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede konuşalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Çizgimin türünü evde nasıl ayırt edebilirim?","Aynaya bakın, yüzünüzü tamamen gevşetin ve birkaç saniye hiç kıpırdamayın. Çizgi bu anda kayboluyorsa büyük olasılıkla hareketle ilgilidir; gevşek yüzde de seçiliyorsa statik bir bileşen vardır. Çoğu yüzde ikisi birlikte bulunduğundan bu gözlem yalnızca bir ön fikir verir."],["Botoks her kırışıklığı açar mı?","“Botoks” halk arasındaki addır; tıbbi karşılığı botulinum toksin uygulamasıdır ve etkisi kas hareketi üzerinedir. Güneş hasarı ya da hacim kaybıyla yerleşmiş bir çizgide kas gevşetilse bile çizgi tam olarak kaybolmayabilir. Bu yüzden önce çizginin kaynağı belirlenir."],["Çizgiler oluşmadan önlem almak mümkün mü?","Mevsim fark etmeksizin her gün güneşten korunmak ve koruyucuyu gün içinde yenilemek en etkili adımdır. Sigarayı bırakmak, uyku düzenine ve cildin nem dengesine özen göstermek de destek olur. Bu önlemler yaşlanmayı durdurmaz; çizgilerin ortaya çıkış hızını yavaşlatabilir."],["Kırışıklık kremleri gerçekten işe yarar mı?","Bakım ürünleri yüzeyin nemini ve görünümünü iyileştirebilir; kuruluğa bağlı ince çizgilerde fark edilir bir değişim sağlayabilir. Derine yerleşmiş statik çizgilerde beklentiyi düşük tutmak gerekir. Ürünlerin etkisi de ancak düzenli kullanıldıkları sürece devam eder."],["Uygulamadan sonra mimiklerim donuk görünür mü?","Planlama, yüzünüzün hareket edebilmesini koruyacak biçimde yapılır. Hedef çizgiyi tümüyle silmek değil, yumuşatmaktır; bazı bölgelerde daha az yapmayı seçmek de bilinçli bir karardır. Nasıl bir görünüm beklediğinizi muayenede açıkça konuşuruz."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Size uygun plan muayenede belirlendikten sonra bilgi yüz yüze verilir. Randevu için ${S.iletisim.tel} numarasını arayabilir ya da aynı numaradan WhatsApp ile yazabilirsiniz."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Çizgilerinizin kaynağını muayenede birlikte görelim</h2>
    <p class="g-sonalt">Yüzünüz önce dinlenirken, sonra hareket hâlindeyken incelenir; hangi çizginin hangi gruba ait olduğu size tek tek gösterilir.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesini doldurun</a>
    </div>
  </div>
</section>
`,
};
