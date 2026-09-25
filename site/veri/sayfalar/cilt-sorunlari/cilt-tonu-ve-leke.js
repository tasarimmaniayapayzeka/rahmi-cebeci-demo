const S = require('../../site');

module.exports = {
  slug: 'cilt-sorunlari/cilt-tonu-ve-leke',
  tip: 'tibbi',
  baslik: 'Cilt tonu ve leke: lekenin türü neden önce belirlenir?',
  aciklama: 'Yüzdeki lekelerin kökeni farklıdır. Güneşle biriken leke, melazma ve sivilce sonrası kalan koyu renk birbirinden nasıl ayırt edilir, korunma neden şarttır?',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}cilt-sorunlari/" style="color:var(--sessiz);text-decoration:none">Sorunlar</a> › <span>Cilt tonu ve leke</span></nav>
      <p class="g-etiket">Şikâyet rehberi · Leke</p>
      <h1>Benzer görünen lekeler <span class="g-isik">farklı yollardan</span> gelir</h1>
      <p class="g-hero__alt">Güneşin yıllar içinde bıraktığı lekeler, ışığa ve hormonlara duyarlı melazma ve bir iltihabın ardından kalan koyulaşma birbirine benzeyebilir; ancak her biri başka bir plan ister. Türü belirlenmeden yapılan bir müdahale lekeyi koyulaştırabilir ve toparlanmayı uzatabilir. Bu yüzden önce lekenin türü ayrılır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Muayene için randevu</a>
        <a class="dgm dgm--iki" href="#nedenler">Leke türlerini inceleyin ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Tür ayrımıyla başlanır</span><span><i></i>Muayene ve plan hekimde</span><span><i></i>Güneşten korunma esastır</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/sorun-cilt-tonu-ve-leke.webp" width="1400" height="788" alt="Elmacık bölgesinde açık kahverengi lekeler bulunan yüz cildinin yakın çekimi" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- ═════════ LEKE TİPLERİ ═════════ -->
<section class="bolum bolum--sicak" id="nedenler">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Farkı nerede</p>
      <h2>Lekeniz hangi gruba giriyor olabilir?</h2>
      <p class="giris">Aynı kahverengi ton, derinin farklı katmanlarında ve farklı mekanizmalarla ortaya çıkabilir. Yalnızca rengi hedef almak, leke planlamasında en sık yapılan yanlıştır. Muayenede lekeler dört başlık altında toplanır; hangisinin sizde olduğu yakından bakı ve büyütmeli incelemeyle anlaşılır.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">Kesit 01</span>
      <h3>Güneşe bağlı lekeler</h3>
      <p>Uzun yıllar güneş gören bölgelerde beliren, kenarı net, açık ya da koyu kahverengi, düz lekelerdir. En çok el sırtında, ön kolda, omuzlarda, alında ve elmacık üzerinde görülür. Zamanla sayıları artabilir ve kış aylarında belirgin biçimde açılmazlar. Bu grupta hedef çoğunlukla tek tek lekelerdir.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/pico-lazer-leke/">Pico lazer ile leke</a><a href="${r}bolgeler/el/">El bölgesi</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:60ms">
      <span class="g-kno">Kesit 02</span>
      <h3>Melazma</h3>
      <p>Çoğunlukla yüzün iki yanına birbirine benzer biçimde yerleşen, kenarları düzensiz ve harita gibi yayılan kahverengi alanlardır. En çok alında, elmacıklarda, üst dudağın üzerinde ve çene kenarında görülür.</p>
<p>Güneş ışığı, görünür ışık, sıcak ortam, gebelik ve hormon içeren ilaçlar tetikleyici olabilir. Yaz aylarında koyulaşır; tetikleyici sürdükçe yeniden belirme eğilimi taşır. Tahrişe hassastır: sert soyucu işlemler ya da ısı oluşturan uygulamalar, kısa süreli bir açılmanın ardından daha koyu bir geri dönüşe neden olabilir. Bu grupta ısı oluşturmayan, yavaş ilerleyen seçenekler tercih edilir.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/mezoterapi/">Mezoterapi</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:120ms">
      <span class="g-kno">Kesit 03</span>
      <h3>İltihap sonrası koyulaşma</h3>
      <p>Bir sivilce, sürtünme, kaşıntı, yanık ya da cilde yapılan bir işlem iyileşirken geride kalan koyu renktir. Biçimi genellikle önceki lezyonun şeklini izler ve koyu tenlerde daha uzun sürer. Burada asıl yapılması gereken, koyulaşmayı başlatan iltihabı kontrol altına almaktır; bu sağlanmadan sürdürülen bir leke planı kalıcı sonuç vermez.</p>
      <div class="g-haplar"><a href="${r}cilt-sorunlari/akne-ve-akne-izi/">Akne ve akne izi</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:180ms">
      <span class="g-kno">Kesit 04</span>
      <h3>Lekeyle karışan diğer renk değişiklikleri</h3>
      <p>Kızarıklık ve genişlemiş küçük damarlar bazen leke sanılabilir. Benler, doğuştan gelen renk farklılıkları ve bazı ilaçlara bağlı değişiklikler ayrı bir grupta değerlendirilir. Göz altındaki koyuluk ise çoğu zaman pigmentten değil, damar ve yapı değişikliğinden kaynaklanır.</p>
      <div class="g-haplar"><a href="${r}cilt-sorunlari/goz-alti-koyulugu/">Göz altı koyuluğu</a></div>
    </div>
    <div class="kutu kutu--uyari" data-gr style="margin-top:26px">
      <b>Biçimi, rengi ya da boyutu değişen lekeler</b>
      <p>Birkaç ay içinde büyüdüğünü fark ettiğiniz, içinde birden fazla renk barındıran, kenarları düzensizleşen, kanayan veya kabuk bağlayan bir leke ya da ben estetik bir konu olarak ele alınmaz. Böyle bir lekeye açıcı hiçbir işlem yapılmaz. Muayenede dermatoskopla bakılsa bile tanı ve tedavi kararı burada verilmez; lekenin vakit kaybetmeden bir dermatoloji uzmanı tarafından değerlendirilmesi önerilir.</p>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:18px">
      <b>Güneşten korunma neden her planın temelinde?</b>
      <p>Bütün leke türlerinin ortak tetikleyicisi ışıktır. Korunma olmadan yürütülen bir plan kalıcı olmaz; aylarca emek verilerek sağlanan açılma, korunmasız geçen birkaç yaz gününde geri dönebilir. Bu yüzden mevsimden bağımsız, gün içinde tazelenen bir koruma alışkanlığı hedeflenir. Hava kapalıyken ya da pencere kenarında otururken de ışık derinize ulaşır.</p>
<p>Geniş kenarlı şapka, gölgede kalmak ve öğle saatlerinde dışarıda olmamak bazen tek başına ürün kullanmaktan daha belirleyicidir. Hassas ciltlerde güneş koruyucunun kendisi de tahriş yapabilir; bu nedenle ürün seçimi cildinizin toleransına göre muayenede birlikte gözden geçirilir.</p>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Uygulamadan sonra</p>
      <h2>Leke türü belirlendikten sonra hangi seçenekler konuşulur?</h2>
      <p class="giris">Güneşten korunma alışkanlığı yerleştikten ve cilt sakinleştikten sonra aşağıdaki başlıklar değerlendirilir. Bunlar genel bilgidir; size özel plan muayeneden sonra hekim tarafından kurulur. Tetikleyici devam ettiği sürece lekenin yeniden belirmesi mümkündür.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Yöntem</span><span>Amaç</span><span>Toparlanma</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/pico-lazer-leke/" data-gg="${r}varliklar/gorsel/uyg-pico-lazer-leke.webp" data-gb="Pico lazer ile leke" data-ga="Güneşe bağlı, kenarı net yüzeysel lekelerde pikosaniye atımlarla pigmentin hedeflenmesi amaçlanır; melazmada ilk seçenek değildir."><h4>Pico lazer ile leke</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">PİGMENT</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/mezoterapi/" data-gg="${r}varliklar/gorsel/uyg-mezoterapi.webp" data-gb="Mezoterapi" data-ga="Deri içine uygulanan içeriklerle, ısı oluşturmayan destekleyici bir seçenek olarak uygun görülen kişilerde değerlendirilir."><h4>Mezoterapi</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">DESTEK</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/karbon-peeling/" data-gg="${r}varliklar/gorsel/uyg-karbon-peeling.webp" data-gb="Karbon peeling" data-ga="Cilt tonunda genel donukluk ve yüzeysel düzensizlikte, tolerans değerlendirildikten sonra konuşulabilecek bir yüzey uygulamasıdır."><h4>Karbon peeling</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">YÜZEY</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/hekim-muayenesi/" data-gg="${r}varliklar/gorsel/uyg-hekim-muayenesi.webp" data-gb="Hekim muayenesi" data-ga="Tiroit, kansızlık, kullanılan ilaçlar ve ışığa duyarlılık yaratabilen etkenler bu kapsamda gözden geçirilir."><h4>Hekim muayenesi</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">DAHİLİ</i></span><span class="g-hucre">Aynı gün</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-pico-lazer-leke.webp" alt=""></div><div class="g-ic"><h4>Pico lazer ile leke</h4><p>Güneşe bağlı, kenarı net yüzeysel lekelerde pikosaniye atımlarla pigmentin hedeflenmesi amaçlanır; melazmada ilk seçenek değildir.</p><a class="dgm dgm--iki" href="${r}uygulamalar/pico-lazer-leke/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr-TR')} · leke · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Yaz aylarında koyulaşan, kışın hafifleyen bir lekem var; bu neyi düşündürür?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Muayene olmadan doğrudan işleme başlayabilir miyim?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Melazma bir daha çıkmayacak şekilde geçer mi?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>“Leke yakma” ne anlama geliyor?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>İşlemden sonra lekem koyulaşabilir mi?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Yaz aylarında koyulaşan, kışın hafifleyen bir lekem var; bu neyi düşündürür?","Mevsimle belirgin dalgalanan, yüzün iki yanına benzer biçimde yerleşen ve harita gibi yayılan lekelerde öncelikle melazma düşünülür. Ancak bu özellik tek başına ayrım için yeterli değildir; lekenin yeri, kenarları, ne zaman başladığı ve öykünüz birlikte değerlendirilir."],["Muayene olmadan doğrudan işleme başlayabilir miyim?","Önce lekenin türünün belirlenmesi gerekir. Şüphe uyandıran bir lezyon varsa ayrı ele alınır, tahriş olmuş cilt önce sakinleştirilir ve güneşten korunma düzeni kurulur. Bu adımlar atlandığında yapılan işlem beklenen etkiyi vermeyebilir, hatta rengi daha belirgin hâle getirebilir."],["Melazma bir daha çıkmayacak şekilde geçer mi?","Melazma, tetikleyicisiyle karşılaştıkça yeniden belirebilen bir durumdur. Amaç lekenin daha az fark edilmesini sağlamak ve güneş, ısı gibi tetikleyicileri sınırlayarak seyri dengede tutmaktır. Hiç tekrarlamayacağına dair bir söz verilemez; seyir kişiden kişiye değişir."],["“Leke yakma” ne anlama geliyor?","“Leke yakma” halk arasında lazerle yapılan leke uygulamaları için kullanılan bir ifadedir; muayenehanemizdeki karşılığı pikosaniye lazerle pigmentin hedeflenmesidir. Her lekeye uygun değildir; örneğin melazmada ya da tahriş olmuş ciltte yapılırsa rengi daha da koyulaştırabilir."],["İşlemden sonra lekem koyulaşabilir mi?","Evet, bu olasılık işlemden önce size anlatılır. Özellikle koyu tenlerde ve tahrişe yatkın ciltlerde işlemin kendisi iltihap sonrası koyulaşmayı tetikleyebilir. Bu nedenle ayarlar temkinli seçilir, gerekirse önce küçük bir alanda deneme yapılır ve güneşten korunma vazgeçilmez kabul edilir."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Lekenin türü muayenede belirlendikten sonra bilgi yüz yüze verilir. Randevu için ${S.iletisim.tel} numarasını arayabilir ya da aynı numaradan WhatsApp ile yazabilirsiniz."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Lekenizin nereden geldiğini muayenede ayıralım</h2>
    <p class="g-sonalt">Lekenin kaynağı belirlendikten sonra hangi adımla başlanacağı ve korunmanın nasıl sürdürüleceği birlikte planlanır.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
