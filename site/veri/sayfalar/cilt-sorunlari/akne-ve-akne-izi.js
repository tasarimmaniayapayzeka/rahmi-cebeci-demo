const S = require('../../site');

module.exports = {
  slug: 'cilt-sorunlari/akne-ve-akne-izi',
  tip: 'tibbi',
  baslik: 'Akne ve akne izi: aktif dönem ile iz dönemi neden ayrılır?',
  aciklama: 'Akne sürerken ve geride iz kaldığında yapılacaklar ayrıdır. Lezyon ve iz türleri muayenede nasıl tanımlanır, hangi dönemde neler konuşulur, sıra neden bozulmaz?',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}cilt-sorunlari/" style="color:var(--sessiz);text-decoration:none">Sorunlar</a> › <span>Akne ve akne izi</span></nav>
      <p class="g-etiket">Şikâyet rehberi · Akne</p>
      <h1>Aktif akne başka, <span class="g-isik">geride kalan iz</span> başka</h1>
      <p class="g-hero__alt">Akne sürerken hedef, yeni lezyonların çıkışını azaltmak ve iltihabı sakinleştirmektir. İz ise ancak bu dönem geride kaldıktan sonra, türü belirlenerek ele alınır. Bu yüzden ilk görüşmede cildinizin hangi dönemde olduğu saptanır ve plan bu sıraya göre kurulur.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Muayene için randevu</a>
        <a class="dgm dgm--iki" href="#nedenler">Dönemleri inceleyin ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Önce dönem saptanır</span><span><i></i>Muayene ve plan hekimde</span><span><i></i>Sıra atlanmaz</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/sorun-akne-ve-akne-izi.webp" width="1400" height="788" alt="Yumuşak ışık altında yanak cildinin yüzey dokusunu gösteren yakın çekim" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- ═════════ AŞAMALAR ═════════ -->
<section class="bolum bolum--sicak" id="nedenler">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Fark nerede</p>
      <h2>Cildinizde şu an hangi tablo ağır basıyor?</h2>
      <p class="giris">Akne planlamasında en sık görülen yanlış, dönem atlamaktır. İltihap sürerken yapılan bir işlem tabloyu alevlendirebilir; iz dönemine geçmiş bir ciltte aktif akneye yönelik plan sürdürmek ise beklenen değişimi getirmez. İkinci yanlış, bütün izleri tek bir başlıkta toplamaktır. Muayenede izler elle, yandan gelen ışıkla ve büyütmeli incelemeyle birbirinden ayrılır.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">Kesit 01</span>
      <h3>Aktif dönem</h3>
      <p>Deride açık ya da kapalı komedonlar, kızarık kabarcıklar, iltihaplı sivilceler veya derinde ağrılı sertlikler bulunur. Bu dönemde öncelik yeni lezyon çıkışını azaltmaktır. Deri yüzeyine yönelik işlemler çoğunlukla ertelenir; erken yapılan bazı girişimler iltihabı artırarak kalıcı iz olasılığını yükseltebilir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:60ms">
      <span class="g-kno">Kesit 02</span>
      <h3>Renk olarak kalan izler</h3>
      <p>Aynada iz gibi görünen şeylerin önemli bir kısmı, deride çukur ya da kabarıklık olmadan kalan renk farklılıklarıdır. Kırmızı-pembe izler iyileşme sırasında genişleyen küçük damarlardan kaynaklanır ve zamanla solma eğilimi taşır. Kahverengi izler ise iltihap sonrası koyulaşmadır; koyu tenlerde daha belirgin ve uzun sürelidir. Sivilceyi sıkmak, kabuğu koparmak ve güneşten korunmamak koyulaşmanın uzun sürmesine yol açar.</p>
      <div class="g-haplar"><a href="${r}cilt-sorunlari/cilt-tonu-ve-leke/">Cilt tonu ve leke</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:120ms">
      <span class="g-kno">Kesit 03</span>
      <h3>Çukur izler</h3>
      <p>İltihabın deri altında doku kaybına yol açmasıyla oluşur ve kendiliğinden düzelmez. Dar, derin ve keskin kenarlı olanlar; geniş, düz tabanlı ve belirgin kenarlı olanlar; yumuşak geçişli, dalgalı bir yüzey bırakanlar birbirinden farklı davranır. Her birinin karşılığı başka olduğu için yalnızca “izim var” demek planlama için yeterli değildir.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/fraksiyonel-lazer/">Fraksiyonel lazer</a><a href="${r}uygulamalar/altin-igne-radyofrekans/">Altın iğne radyofrekans</a><a href="${r}uygulamalar/prp/">PRP</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:180ms">
      <span class="g-kno">Kesit 04</span>
      <h3>Kabarık izler</h3>
      <p>İyileşme sırasında gereğinden fazla doku yapıldığında gelişir; en sık sırt, omuzlar, göğsün ön yüzü ve çene hattında görülür. Bu bölgelerde işlem kararı daha dikkatli verilir, çünkü uygun olmayan bir zamanda yapılan müdahale izi daha belirgin hâle getirebilir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:240ms">
      <span class="g-kno">Kesit 05</span>
      <h3>Akneye benzeyen başka tablolar</h3>
      <p>Sivilceye benzeyen her döküntü akne değildir. İlaçlara bağlı döküntüler, çene ve alt yüze yerleşen hormonal tablolar, ağır kıvamlı ürünlerin yol açtığı tıkanmalar, yüzde kalıcı kızarıklıkla seyreden durumlar ve ileri yaşta başlayan akne muayenede ayrıca sorgulanır. Gerekli görülürse genel sağlık değerlendirmesi aynı görüşmede yapılır.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/hekim-muayenesi/">Hekim muayenesi</a></div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:26px">
      <b>Sıralama neden bozulmaz?</b>
      <p>Plan beş adımda ilerler ve adımlar atlanmaz: önce tablo, sırt ve göğüs dâhil bütünüyle tanımlanır; ardından tetikleyiciler gözden geçirilir; aktif dönem sakinleştirilir; yüzeye yönelik işlemlerin zamanı belirlenir ve iz dönemi ayrı bir plan olarak ele alınır.</p>
<p>İz dönemindeki yöntemlerin çoğu, derinin kendi onarım sürecini harekete geçirerek sonuç almayı hedefler. Onarım haftalar, hatta aylar sürer ve aktif iltihap varken düzgün ilerlemez. Sırayı korumak hem gereksiz seanslardan hem de yeni iz oluşumundan kaçınmanın yoludur. Kontrol randevularının nasıl planlandığını <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası kontrol</a> sayfasında bulabilirsiniz.</p>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Buradan sonrası</p>
      <h2>Dönem belirlendikten sonra hangi seçenekler konuşulur?</h2>
      <p class="giris">Aşağıdaki başlıklar iz dönemine ve yüzey bakımına yöneliktir; aktif iltihap sürerken çoğu ertelenir. Size özel plan muayeneden sonra hekim tarafından kurulur ve sonuçlar kişiden kişiye değişir.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Yöntem</span><span>Amaç</span><span>Toparlanma</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/fraksiyonel-lazer/" data-gg="${r}varliklar/gorsel/uyg-fraksiyonel-lazer.webp" data-gb="Fraksiyonel lazer" data-ga="Çukur izlerde, aktif iltihap geçtikten sonra kontrollü mikro alanlarla dokunun yenilenmesini uyarmayı hedefler."><h4>Fraksiyonel lazer</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">İZ</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/altin-igne-radyofrekans/" data-gg="${r}varliklar/gorsel/uyg-altin-igne-radyofrekans.webp" data-gb="Altın iğne radyofrekans" data-ga="İz türü belirlendikten sonra, deri içine iletilen enerjiyle doku yapısını desteklemek amacıyla değerlendirilir."><h4>Altın iğne radyofrekans</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">İZ</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/karbon-peeling/" data-gg="${r}varliklar/gorsel/uyg-karbon-peeling.webp" data-gb="Karbon peeling" data-ga="Yağlanma ve yüzeyde tıkanma eğiliminde, iltihaplı lezyonlar sakinleştikten sonra uygun görülürse konuşulur."><h4>Karbon peeling</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">YÜZEY</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/prp/" data-gg="${r}varliklar/gorsel/uyg-prp.webp" data-gb="PRP" data-ga="Kendi kanınızdan hazırlanan plazma, iz planında diğer yöntemlere eşlik eden bir destek olarak değerlendirilebilir."><h4>PRP</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">DESTEK</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-fraksiyonel-lazer.webp" alt=""></div><div class="g-ic"><h4>Fraksiyonel lazer</h4><p>Çukur izlerde, aktif iltihap geçtikten sonra kontrollü mikro alanlarla dokunun yenilenmesini uyarmayı hedefler.</p><a class="dgm dgm--iki" href="${r}uygulamalar/fraksiyonel-lazer/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr-TR')} · akne · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Sivilce ile akne arasında fark var mı?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Kırmızı izlerim için bir işlem gerekli mi?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Sivilcelerimi sıkarsam kalıcı iz kalır mı?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Aknem sürerken lazer ya da peeling yaptırabilir miyim?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>İzim için hangi yöntemin uygun olduğu nasıl belirlenir?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Sivilce ile akne arasında fark var mı?","Halk arasında “sivilce” denen tablonun tıbbi adı aknedir. Akne tek bir görünüm değildir; siyah ve beyaz noktalar, kırmızı kabarcıklar, iltihaplı sivilceler ve derin nodüllerden oluşan bir ailedir. Hangisinin ağır bastığı planı değiştirdiği için muayenede her lezyon türü ayrı ayrı not edilir."],["Kırmızı izlerim için bir işlem gerekli mi?","Deri yüzeyi düzse ve fark yalnızca renkteyse, zaman tanımak ve güneşten korunmak çoğu kez yeterli olur. Solma süresi kişiden kişiye değişir. Gerçek bir yüzey çukurluğu bulunup bulunmadığına muayenede büyütmeli bakıyla karar verilir."],["Sivilcelerimi sıkarsam kalıcı iz kalır mı?","İltihaplı bir sivilceye bastırmak iltihabı daha derine itebilir ve iyileşmeyi uzatabilir. Bu da hem kahverengi koyulaşma hem de çukur iz olasılığını artırır. Siyah noktaların boşaltılmasının uygun olup olmadığına hekim değerlendirmesiyle karar verilir."],["Aknem sürerken lazer ya da peeling yaptırabilir miyim?","Tabloya göre değişir. Yaygın iltihaplı lezyonlar, açık yara ya da kabuklanma varsa işlem ertelenir. Cildinizin o günkü durumu, kullandığınız ilaçlar ve yakın zamandaki cilt sorunlarınız kararı belirler; bu karar her seanstan önce yeniden verilir."],["İzim için hangi yöntemin uygun olduğu nasıl belirlenir?","Önce izin türü tanımlanır: kızarıklık, kahverengi koyulaşma, çukur ve kabarık izler farklı yollara ayrılır. Sonra cildinizin toleransı, güneşle temasınız ve süregelen bir cilt sorunu olup olmadığı değerlendirilir. Bu bilgiler bir araya gelmeden yöntem seçilmez."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Cildinizin hangi dönemde olduğu muayenede belirlendikten sonra bilgi yüz yüze verilir. Randevu için ${S.iletisim.tel} numarasını arayabilir ya da aynı numaradan WhatsApp ile yazabilirsiniz."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Cildinizin hangi dönemde olduğunu birlikte belirleyelim</h2>
    <p class="g-sonalt">Dönem netleştikten sonra hangi adımın ne zaman atılacağı muayenede size özel olarak konuşulur.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
