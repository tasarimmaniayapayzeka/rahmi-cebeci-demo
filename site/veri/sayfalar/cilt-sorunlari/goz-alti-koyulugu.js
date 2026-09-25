const S = require('../../site');

module.exports = {
  slug: 'cilt-sorunlari/goz-alti-koyulugu',
  tip: 'tibbi',
  baslik: 'Göz altı koyuluğu: beş olası kaynak ve muayenedeki ayrım',
  aciklama: 'Koyu göz altının ardında pigment, seçilen damarlar, incelen deri, gözyaşı oluğu ya da sıvı birikimi olabilir. Muayenede hangisinin öne çıktığı nasıl anlaşılır?',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}cilt-sorunlari/" style="color:var(--sessiz);text-decoration:none">Sorunlar</a> › <span>Göz altı koyuluğu</span></nav>
      <p class="g-etiket">Şikâyet rehberi · Göz altı</p>
      <h1>Göz altındaki koyuluğun <span class="g-isik">birden çok kaynağı</span> olabilir</h1>
      <p class="g-hero__alt">Koyu görünüm beş ayrı kaynaktan gelebilir: deride artan pigment, ince deriden seçilen damarlar, zamanla incelen deri, gözyaşı oluğunda azalan hacim ve biriken sıvı. Çoğu kişide bunlardan birkaçı bir aradadır. Öne çıkan kaynak bulunmadan seçilen bir yöntemden beklenen sonuç alınamayabilir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Muayene için randevu</a>
        <a class="dgm dgm--iki" href="#nedenler">Kaynakları inceleyin ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Kaynak ayrımıyla başlanır</span><span><i></i>Muayene ve plan hekimde</span><span><i></i>Gerekirse kan tetkiki</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/sorun-goz-alti-koyulugu.webp" width="1400" height="788" alt="Doğal ışıkta göz çevresi ve göz altı bölgesinin yakın plan görünümü" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- ═════════ NEDENLER ═════════ -->
<section class="bolum bolum--sicak" id="nedenler">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Farkı nerede</p>
      <h2>Göz altında koyu görünüm hangi yollarla oluşur?</h2>
      <p class="giris">Göz çevresindeki deri, vücudun en ince derisidir; altındaki damarı, kası ve hacim değişimini kolayca dışarı yansıtır. Muayenede beş ana kaynak ayrı ayrı sorgulanır. Çoğu zaman karma bir tablo görülür ve hangisinin ağır bastığı planı baştan sona belirler.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">Kesit 01</span>
      <h3>Pigment artışı</h3>
      <p>Derideki melanin miktarının artmasıyla oluşur. Ailede benzer görünüm, güneş, gözleri sık ovuşturma ya da geçirilmiş bir tahriş bu tabloya zemin hazırlayabilir. Rengi kahverengiye yakındır; gün içinde pek değişmez ve ışığın açısı değiştiğinde de aynı kalır.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/mezoterapi/">Mezoterapi</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:60ms">
      <span class="g-kno">Kesit 02</span>
      <h3>Damarların seçilmesi</h3>
      <p>İnce derinin altındaki toplardamar ağı ve kas, dışarıdan mavi-mor bir renk olarak görünebilir. Uykusuzluk, yorgunluk, vücuttaki sıvı dengesinin değişmesi ve kronik burun tıkanıklığı bu görünümü artırır. Deriyi hafifçe gerdiğinizde renk açılıyorsa damarsal bileşen düşünülür; eşlik eden bir sağlık sorunu varsa önce o ele alınır.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:120ms">
      <span class="g-kno">Kesit 03</span>
      <h3>Derinin incelmesi</h3>
      <p>Yıllar içinde deri içindeki destek dokusu azaldıkça deri daha saydam hâle gelir. Burada koyuluk aslında bir renk artışı değil, alttaki yapıların daha çok görünmesidir. Bu durumda derinin niteliğini düşük yoğunlukla ve aşamalı olarak desteklemek hedeflenir; değişim sınırlıdır ve zaman alır.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/somon-dna-polinukleotid/">Somon DNA ve polinükleotid</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:180ms">
      <span class="g-kno">Kesit 04</span>
      <h3>Gözyaşı oluğunda hacim kaybı</h3>
      <p>Göz altı ile yanak arasındaki geçiş derinleştiğinde, yukarıdan gelen ışık burada gölge bırakır. Derinin rengi değişmemiş olsa da bölge koyu görünür. Başınızı eğdiğinizde ya da ışığın yönü değiştiğinde koyuluğun artıp azalması bu tablonun tipik işaretidir. Deri yüzeyine yönelik uygulamaların burada belirgin katkısı olmaz.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/dolgu-uygulamalari/#goz-alti">Göz altı dolgusu</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:240ms">
      <span class="g-kno">Kesit 05</span>
      <h3>Sıvı birikimi (ödem)</h3>
      <p>Sabah uyandığınızda belirgin olup öğlene doğru azalan şişlik sıvı birikimini düşündürür. Tuzlu beslenme, uyku süresi ve pozisyonu, tiroit ya da böbrekle ilgili durumlar ve bazı ilaçlar katkıda bulunabilir. Burada ilk iş nedeni bulmaktır; neden araştırılmadan yapılan bir uygulama yanıltıcı bir sonuç verebilir.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/hekim-muayenesi/">Hekim muayenesi</a></div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:26px">
      <b>Ayrım muayenede nasıl yapılır?</b>
      <p>Birkaç basit gözlem yol gösterir. Deri hafifçe gerildiğinde pigment olduğu gibi kalır, damarsal renk ise açılır. Işığın yönü değiştirildiğinde azalan koyuluk gölgeye işaret eder; sabahları daha fazla olup akşama doğru azalan görünüm ise ödemi akla getirir. Büyütmeli inceleme, pigmentin ne kadar derinde durduğu hakkında ek bilgi sağlar.</p>
<p>Öykü de en az muayene kadar önemlidir: uyku düzeniniz, tuz tüketiminiz, güneşle ilişkiniz, demir ve tiroit geçmişiniz sorulur. Göz çevresine yeni bir ürün sürmeye başladıktan sonra kaşıntı ya da kızarıklık olduysa önce bakım rutini sadeleştirilir; cilt sakinleşmeden bir uygulama planlanmaz.</p>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Uygulamadan sonra</p>
      <h2>Kaynak belirlendikten sonra hangi seçenekler gündeme gelir?</h2>
      <p class="giris">Buradaki başlıklar genel bilgi amaçlıdır. Size özel plan muayeneden sonra hekim tarafından kurulur ve sonuçlar kişiden kişiye değişir.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Yöntem</span><span>Amaç</span><span>Toparlanma</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/dolgu-uygulamalari/#goz-alti" data-gg="${r}varliklar/gorsel/uyg-dolgu-uygulamalari.webp" data-gb="Göz altı dolgusu" data-ga="Yalnız gözyaşı oluğundaki hacim kaybının öne çıktığı durumlarda konuşulur; bölgenin ince yapısı özenli planlama gerektirir."><h4>Göz altı dolgusu</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">HACİM</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/somon-dna-polinukleotid/" data-gg="${r}varliklar/gorsel/uyg-somon-dna-polinukleotid.webp" data-gb="Somon DNA ve polinükleotid" data-ga="İncelmiş ve saydamlaşmış göz altı derisinde doku niteliğini aşamalı olarak desteklemeyi amaçlar."><h4>Somon DNA ve polinükleotid</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">İNCELİK</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/mezoterapi/" data-gg="${r}varliklar/gorsel/uyg-mezoterapi.webp" data-gb="Mezoterapi" data-ga="Pigment bileşeninde, göz çevresine uygun içerik ve derinlikte, uygun bulunan kişilerde değerlendirilir."><h4>Mezoterapi</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">PİGMENT</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/hekim-muayenesi/" data-gg="${r}varliklar/gorsel/uyg-hekim-muayenesi.webp" data-gb="Hekim muayenesi" data-ga="Ödem öndeyse tiroit, böbrek, kan sayımı ve kullanılan ilaçlar bu kapsamda gözden geçirilir."><h4>Hekim muayenesi</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">ÖDEM</i></span><span class="g-hucre">Aynı gün</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-dolgu-uygulamalari.webp" alt=""></div><div class="g-ic"><h4>Göz altı dolgusu</h4><p>Yalnız gözyaşı oluğundaki hacim kaybının öne çıktığı durumlarda konuşulur; bölgenin ince yapısı özenli planlama gerektirir.</p><a class="dgm dgm--iki" href="${r}uygulamalar/dolgu-uygulamalari/#goz-alti">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr-TR')} · göz altı · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Göz altı morluğunun sebebi uykusuzluk mu?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Göz altı koyuluğu bir hastalığın işareti olabilir mi?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Göz kremiyle koyuluk geçer mi?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>“Işık dolgusu” ne demek?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Tek bir işlemle bütün koyuluk düzelir mi?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Göz altı morluğunun sebebi uykusuzluk mu?","Uykusuzluk var olan koyuluğu daha görünür kılabilir, ama tek başına sebep olduğu durumlar azdır. Uykunuz düzene girdiğinde koyuluk biraz açılıp tamamen kaybolmuyorsa, altta pigment, damar ya da hacim kaynaklı bir bileşen olabilir. Bunu ayırmak için muayene gerekir."],["Göz altı koyuluğu bir hastalığın işareti olabilir mi?","Olabilir. Demir eksikliği, tiroit bozuklukları, böbrekle ilgili durumlar ve kronik burun tıkanıklığı göz çevresinin görünümünü etkileyebilir. Bu yüzden ilk görüşmede genel sağlık öyküsü de alınır ve gerekli görülürse kan tetkiki istenir."],["Göz kremiyle koyuluk geçer mi?","Bu, koyuluğun kaynağına bağlıdır. Pigment ağır basıyorsa düzenli güneş koruması ve uygun bir bakım planı yardımcı olabilir. Görünüm gölgeden ya da hacim kaybından geliyorsa kremlerden belirgin bir etki beklenmez. Göz çevresi hassas olduğu için ürün seçimi özen ister."],["“Işık dolgusu” ne demek?","“Işık dolgusu” halk arasında kullanılan bir addır; tıbbi karşılığı göz altına yapılan hyalüronik asit dolgusudur. Yalnızca gözyaşı oluğundaki hacim kaybının baskın olduğu kişilerde konuşulur. Koyuluk pigmentten ya da damarlardan kaynaklanıyorsa beklenen katkıyı sağlamaz."],["Tek bir işlemle bütün koyuluk düzelir mi?","Çoğu kişide göz altındaki koyuluk birden fazla etkenin birleşimidir; tek bir yöntemin bunların hepsine yanıt vermesi beklenmez. Plan genellikle en baskın bileşenden başlar ve ara kontrollerle ilerler. Değişimin derecesi ve süresi kişiden kişiye farklıdır."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Koyuluğun kaynağı muayenede belirlendikten sonra bilgi yüz yüze verilir. Randevu için ${S.iletisim.tel} numarasını arayabilir ya da aynı numaradan WhatsApp ile yazabilirsiniz."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Göz altınızdaki koyuluğun kaynağını birlikte bulalım</h2>
    <p class="g-sonalt">Muayenede beş olası kaynak tek tek gözden geçirilir; hangisinden başlanacağı size özel olarak planlanır.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
