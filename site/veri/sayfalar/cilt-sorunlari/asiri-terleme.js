const S = require('../../site');

module.exports = {
  slug: 'cilt-sorunlari/asiri-terleme',
  tip: 'tibbi',
  baslik: 'Aşırı terleme: kendi başına bir durum mu, bir işaret mi?',
  aciklama: 'Fazla terleme bazen yalnız belli bölgelerle sınırlı bir yatkınlık, bazen başka bir hastalığın işaretidir. İki grup nasıl ayrılır, muayenede neye bakılır?',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}cilt-sorunlari/" style="color:var(--sessiz);text-decoration:none">Sorunlar</a> › <span>Aşırı terleme</span></nav>
      <p class="g-etiket">Şikâyet rehberi · Terleme</p>
      <h1>Terlemeniz <span class="g-isik">kendi başına mı</span>, bir işaret mi?</h1>
      <p class="g-hero__alt">Beklenenden fazla terleme iki grupta incelenir. Birincisinde altta başka bir hastalık yoktur ve terleme belirli bölgelerde yoğunlaşır. İkincisinde terleme bir hastalığın, hormonal bir değişimin ya da kullanılan bir ilacın işaretidir. Plan bu ayrıma göre kurulur; ikinci grupta asıl hedef altta yatan nedeni bulmaktır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Muayene için randevu</a>
        <a class="dgm dgm--iki" href="#nedenler">İki grubu inceleyin ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Önce neden araştırılır</span><span><i></i>Muayene ve plan hekimde</span><span><i></i>Gerekirse kan tetkiki</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/sorun-terleme.webp" width="1400" height="788" alt="Açık mavi tonlu bir yüzeyde irili ufaklı su damlaları" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- ═════════ AYRIM ═════════ -->
<section class="bolum bolum--sicak" id="nedenler">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Ayrım</p>
      <h2>Hangi soruların yanıtı iki grubu birbirinden ayırır?</h2>
      <p class="giris">Dört soru yol gösterir: terleme hangi yaşta başladı, belli bölgelerle mi sınırlı, iki tarafta eşit mi ve uykuda da sürüyor mu? Aşağıdaki özellikler bir ön fikir verir; ayrım ise öykünüz, muayene ve gerekirse tetkiklerle tamamlanır.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">01</span>
      <h3>Birincil (bölgesel) terleme</h3>
      <p>Yakınma çoğunlukla ellerde, ayaklarda ve koltuk altında, daha seyrek olarak yüzde ya da saçlı deride yoğunlaşır. Genellikle ilk gençlik yıllarında fark edilir, sağ ve sol tarafta aşağı yukarı aynı şiddettedir ve haftada birkaç kez tekrarlar. Ailede benzer yakınması olan birinin bulunması sık rastlanan bir durumdur.</p>
<p>En güçlü ipucu, uyku sırasında terlemenin belirgin biçimde azalması ya da hiç olmamasıdır. Heyecan, sınav ya da sıcak bir oda terlemeyi artırabilir; ancak kişiler çoğu zaman serin bir ortamda da ellerinin ıslandığını anlatır.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:60ms">
      <span class="g-kno">02</span>
      <h3>İkincil terleme</h3>
      <p>Başka bir durumun ya da kullanılan bir ilacın sonucu olarak ortaya çıkar. Belli bölgelerle sınırlı kalmaz, genellikle bütün vücutta hissedilir, gece uykuda da devam edebilir ve çoğunlukla ileri yaşlarda, daha önce olmayan bir yakınma olarak başlar.</p>
<p>Tiroit bezinin fazla çalışması, kan şekeri düşmeleri, bazı enfeksiyonlar, menopoz dönemi, bazı nörolojik hastalıklar ve kimi ilaçlar akla gelen nedenler arasındadır. Bu grupta değerlendirme genel bir muayeneyle başlar.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/hekim-muayenesi/">Hekim muayenesi</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:120ms">
      <span class="g-kno">03</span>
      <h3>Hayatınızı ne kadar kısıtladığı</h3>
      <p>Terlemenin miktarı kadar gündelik yaşamı ne ölçüde daralttığı da önemlidir: tokalaşmaktan kaçınmak, kâğıtta ve klavyede ıslak iz bırakmak, dokunmatik ekranı kullanmakta zorlanmak, kıyafetleri renge göre seçmek ya da gün içinde üst değiştirmek gibi. Hep ıslak kalan deride pişik, mantar ya da bakteri enfeksiyonu da gelişebilir. Böyle bir durum varsa önce o tedavi edilir; tahriş sürerken bölgeye yönelik uygulama yapılmaz.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:180ms">
      <span class="g-kno">04</span>
      <h3>Muayenede izlenen sıra</h3>
      <p>Muayenede sıralama değişmez. Önce yakınmanızın ne zaman başladığı, hangi bölgeleri tuttuğu, iki tarafta eşit olup olmadığı, ne sıklıkla tekrarladığı ve uykuda ne olduğu konuşulur. Kullandığınız ilaç ve takviyeler gözden geçirilir. Ateş, kilo değişimi ve çarpıntı gibi yakınmaları da kapsayan genel bir muayene yapılır. Sonucu planı etkileyecekse tiroit hormonları, açlık kan şekeri ya da tam kan sayımı istenir. Deri bulgularına bakıldıktan sonra seçenekler en basitinden başlayarak konuşulur. Muayenehanemizin kapsamı dışında kalan yöntemler söz konusuysa bunu <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">açıkça belirtiriz</a>.</p>
    </div>
    <div class="kutu kutu--uyari" data-gr style="margin-top:26px">
      <b>Beklemeden değerlendirilmesi gereken bulgular</b>
      <p>Gece kıyafetinizi ve çarşafınızı ıslatan terleme, nedeni açıklanamayan kilo kaybı, haftalarca süren ateş, vücudun yalnızca bir yarısında ya da tek bir bölümünde görülen terleme ve ileri yaşta aniden başlayıp bütün vücuda yayılan terleme estetik değerlendirmenin konusu değildir. Bu durumlarda önce genel sağlık değerlendirmesi yapılır; o tamamlanmadan bölgesel bir işlem konuşulmaz.</p>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Sonrası</p>
      <h2>Diğer nedenler dışlandıktan sonra hangi seçenekler konuşulur?</h2>
      <p class="giris">Başka bir hastalık olmadığı anlaşıldıktan sonra da ilk sırada basit önlemler yer alır: ter önleyici ürünü akşam saatlerinde ve kuru deriye sürmek, nefes alan kumaşlar ve uygun ayakkabı seçmek. Bu önlemler yetmezse bölgesel bir uygulama hekim tarafından değerlendirilir.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Yöntem</span><span>Amaç</span><span>Toparlanma</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/botulinum-toksin/" data-gg="${r}varliklar/gorsel/uyg-botulinum-toksin.webp" data-gb="Botulinum toksin" data-ga="Koltuk altı ve avuç içi gibi bölgesel terlemede kullanılan yöntemlerden biridir; ilk basamak değildir ve etkisi zamanla azalır."><h4>Botulinum toksin</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">TER BEZİ</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/hekim-muayenesi/" data-gg="${r}varliklar/gorsel/uyg-hekim-muayenesi.webp" data-gb="Hekim muayenesi" data-ga="Terlemeye yol açabilecek başka bir sağlık sorunu olup olmadığı bu kapsamda araştırılır; önce neden aranır."><h4>Hekim muayenesi</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">NEDEN</i></span><span class="g-hucre">Aynı gün</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/uygulama-sonrasi-takip/" data-gg="${r}varliklar/gorsel/uyg-uygulama-sonrasi-takip.webp" data-gb="Uygulama sonrası takip" data-ga="Uygulamanın ardından etkinin başlangıcı, süresi ve başka bölgelerde terleme artışı olup olmadığı kontrol randevusunda izlenir."><h4>Uygulama sonrası takip</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">İZLEM</i></span><span class="g-hucre">Randevuya göre</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-botulinum-toksin.webp" alt=""></div><div class="g-ic"><h4>Botulinum toksin</h4><p>Koltuk altı ve avuç içi gibi bölgesel terlemede kullanılan yöntemlerden biridir; ilk basamak değildir ve etkisi zamanla azalır.</p><a class="dgm dgm--iki" href="${r}uygulamalar/botulinum-toksin/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr-TR')} · terleme · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Ne kadar terleme fazla sayılır?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Gece uykumda da terliyorum; bu önemli mi?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Eczaneden aldığım ter önleyici işe yaramıyor; ne yapabilirim?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Botoks terlemede de kullanılır mı?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Bir bölgedeki terleme azalınca başka yerde artar mı?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Ne kadar terleme fazla sayılır?","Bunun için bir ölçü birimi ya da sınır değer yoktur. Bulunduğunuz ortamın sıcaklığına ve yaptığınız işe göre olağanın belirgin biçimde üstünde olup olmadığına, altı ay ya da daha uzun süredir devam edip etmediğine ve günlük yaşamınızı ne kadar zorlaştırdığına birlikte bakılır. Hayatınızı ne ölçüde etkilediği, miktarı kadar önemlidir."],["Gece uykumda da terliyorum; bu önemli mi?","Bölgesel terlemede uyku sırasında belirgin bir azalma beklenir. Gece boyunca süren, kıyafeti ve yatağı ıslatan terleme başka bir grubu akla getirir ve öncelikle genel sağlık yönünden araştırılır. Böyle bir durumda bölgesel bir işlem, neden ortaya konmadan konuşulmaz."],["Eczaneden aldığım ter önleyici işe yaramıyor; ne yapabilirim?","Bu ürünlerin günün hangi saatinde ve nasıl sürüldüğü sonucu büyük ölçüde değiştirir; pek çok kişi onları uygun olmayan bir zamanda kullanır. Doğru kullanıma rağmen yakınmanız sürüyorsa hekim diğer seçenekleri sizinle birlikte değerlendirir; hangisinin size uygun olduğu muayeneden sonra konuşulur."],["Botoks terlemede de kullanılır mı?","Gündelik dildeki “botoks” adının tıbbi karşılığı botulinum toksindir ve bölgesel terlemede başvurulan yöntemlerden biridir. Yine de ilk başvurulan yol değildir: başka bir hastalığın olmadığı gösterilmeli, basit önlemler denenmeli ve size uygunluğu muayenede değerlendirilmelidir. Gebelik ve emzirme döneminde uygulanmaz. Etkisi kalıcı değildir, zamanla azalır."],["Bir bölgedeki terleme azalınca başka yerde artar mı?","Bir bölgeye yönelik uygulamanın ardından vücudun başka yerlerinde terlemenin arttığını hisseden kişiler olabilir; bu artış çoğunlukla sınırlı kalır. Bu olasılık işlemden önce size anlatılır ve belirgin bir artış olursa plan yeniden gözden geçirilir."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Terlemenizin nedeni muayenede netleştikten sonra bilgi yüz yüze verilir. Randevu için ${S.iletisim.tel} numarasını arayabilir ya da aynı numaradan WhatsApp ile yazabilirsiniz."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Terlemenizin kaynağını birlikte netleştirelim</h2>
    <p class="g-sonalt">Öykünüz, muayene bulgularınız ve gerekirse tetkikleriniz birlikte ele alınarak hangi adımla başlanacağı belirlenir.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
