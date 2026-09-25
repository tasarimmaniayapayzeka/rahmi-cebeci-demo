const S = require('../../site');

module.exports = {
  slug: 'cilt-sorunlari/bolgesel-yaglanma',
  tip: 'tibbi',
  baslik: 'Bölgesel yağlanma: inatçı yağ mı, ödem mi, gevşek deri mi?',
  aciklama: 'Beslenme ve harekete rağmen küçülmeyen sınırlı yağ birikimi; ödem, gevşek deri ve duruştan ayrımı, değerlendirilen bölgeler ve uygulama yapılmayan durumlar.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}cilt-sorunlari/" style="color:var(--sessiz);text-decoration:none">Sorunlar</a> › <span>Bölgesel yağlanma</span></nav>
      <p class="g-etiket">Şikâyet rehberi · Bölgesel yağlanma</p>
      <h1>Sınırlı bir birikim, <span class="g-isik">sınırlı bir hedef</span></h1>
      <p class="g-hero__alt">Bölgesel yağlanma, düzenli beslenme ve harekete rağmen küçülmeyen, kenarları belirlenebilen yağ birikimlerini anlatır; bir kilo verme yöntemi ya da genel bir zayıflama başlığı değildir. Muayenehanemizde gıdı, karın, bel yanları ve bacak iç yüzü gibi bölgeler değerlendirilir. Karar vermeden önce yağ dokusu, ödem ve deri gevşekliği birbirinden ayrılır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Muayene için randevu</a>
        <a class="dgm dgm--iki" href="#nedenler">Doku ayrımını inceleyin ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Doku ayrımıyla başlanır</span><span><i></i>Muayene ve plan hekimde</span><span><i></i>Kilo verme yöntemi değildir</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/sorun-yag.webp" width="1400" height="788" alt="Bel ve karın hattını yumuşak ışıkla gösteren sade bir vücut silueti" loading="eager">
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
      <h2>Aynada gördüğünüz dolgunluğun kaynağı ne?</h2>
      <p class="giris">Dolgun görünen her bölgede yağ dokusu bulunmayabilir. Sıvı birikimi, kas kütlesi, deri gevşekliği ve duruş bozukluğu benzer bir görüntü oluşturabilir. Bu dört olasılık birbirinden ayrılmadan işlem konuşulmaz; çünkü yanlış dokuyu hedefleyen bir uygulama sonuç vermediği gibi mevcut görünümü daha da belirginleştirebilir. Ayrım elle muayene, gün içindeki değişimin sorulması ve derinin esnekliğine bakılarak yapılır.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">01</span>
      <h3>Yağ dokusu</h3>
      <p>Bölge parmaklar arasında tutulduğunda yumuşak, kayabilen ve kenarları hissedilebilen bir doku vardır. Sabahtan akşama pek değişmez; değişimi aylar ve yıllar içinde, yavaşça olur.</p>
<p>Yağın vücudun neresinde toplanacağını büyük ölçüde kalıtım ve hormonlar belirler; bu yüzden zayıf kişilerde de inatçı bir bölge görülebilir. Derinin hemen altındaki yağ, karın boşluğunda organları saran iç yağdan farklı bir dokudur. Deri yüzeyinden yapılan uygulamaların hiçbiri o derin yağa ulaşmaz.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:60ms">
      <span class="g-kno">02</span>
      <h3>Ödem</h3>
      <p>Sıvı birikiminde görünüm gün içinde dalgalanır: akşam sabaha göre daha dolgundur, tuzlu bir yemekten ya da uzun süre ayakta kalmaktan sonra artar, parmakla bastırınca kısa süreli bir iz kalabilir. Burada ilk iş bir işlem değil, nedeni bulmaktır; tiroit, böbrek ve kalp işlevleriyle kullandığınız ilaçlar gözden geçirilir.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/hekim-muayenesi/">Hekim muayenesi</a></div>
    </div>
    <div class="g-katblok" data-gr style="--d:120ms">
      <span class="g-kno">03</span>
      <h3>Deri gevşekliği</h3>
      <p>Bölge tutulduğunda kalın bir yağ katmanı yerine ince ve esnekliğini yitirmiş bir deri hissedilir. Bu durum özellikle belirgin kilo kaybından ya da gebelikten sonra ve yaş ilerledikçe ortaya çıkar. Yağ dokusuna yönelik bir uygulama böyle bir görünümü düzeltmez, hatta gevşekliği daha fark edilir kılabilir. Konu <a href="${r}cilt-sorunlari/hacim-kaybi-ve-sarkma/">hacim kaybı ve sarkma</a> başlığına ya da cerrahi bir değerlendirmeye kayar.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:180ms">
      <span class="g-kno">04</span>
      <h3>Kas kütlesi ve duruş</h3>
      <p>Karın ve bel çevresindeki dolgunluğun bir bölümü karın duvarının gevşekliği, kas yapısı ve duruşla ilgilidir: öne eğik bir duruşta karın öne itilir ve bel yanlarında katlanma izlenimi oluşur. Doğumdan sonra karın kaslarının orta hatta ayrılması da benzer bir görüntü verebilir. Bu durumların karşılığı yağa yönelik bir uygulama değil, egzersiz ve gerekirse ilgili uzmanlık değerlendirmesidir.</p>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:26px">
      <b>Hangi bölgelere bakılır, sınır nerede?</b>
      <p>Bölgesel yağlanma başlığı altında muayenehanemizde en çok gıdı (çene altı), karın, bel yanları ve bacak iç yüzü değerlendirilir. Ortak nokta, elle kavranabilen, kenarları belli ve deri altında yüzeysel duran bir birikimin bulunmasıdır. Deri yüzeyindeki portakal kabuğu görünümü ise yağ birikiminden ayrı bir konudur ve <a href="${r}cilt-sorunlari/selulit/">selülit görünümü</a> sayfasında anlatılır.</p>
<p>Yaygın kilo fazlalığı, karın içindeki derin yağ ve belirgin deri fazlalığı bu başlığın dışında kalır. Böyle bir tabloda bunu ilk görüşmede söyler, beslenme, endokrinoloji ya da plastik cerrahi gibi ilgili bir uzmanlık alanına başvurmanızı öneririz (<a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a>). Bölgesel yağ dokusunu hedeflemek vücut ağırlığını azaltan bir yöntem değildir; kilo yönetimi ayrı bir tıbbi konudur.</p>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:18px">
      <b>Kimler için uygun, kimler için değil?</b>
      <p>En uygun aday; son altı ayda kilosu sabit kalmış, rahatsız olduğu yeri tek bir bölge olarak gösterebilen, o bölgede parmaklarla tutulabilen bir doku bulunan ve derisi hâlâ esnek olan kişidir.</p>
<p>Sıvı birikiminin baskın olduğu, deri gevşekliğinin öne çıktığı, hızlı kilo değişiminin sürdüğü, gebelik ya da emzirme dönemindeki kişilerde ve beklentinin bölgesel bir değişiklikle karşılanamayacağı durumlarda uygulama yapılmaz. Bu karar size açıkça söylenir; sık verilen ve geçerli bir sonuçtur.</p>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Sonrası</p>
      <h2>Ayrım netleşince hangi seçenekler konuşulur?</h2>
      <p class="giris">Gerçekçi beklenti, sınırlı bir bölgede görünümün değişmesidir. Değişim kademeli gelişir, çoğunlukla haftalar ile aylar arasında belirginleşir ve kişiden kişiye farklıdır. Belirli bir santim kaybı ya da belirli sayıda seansta belirli bir sonuç vaat edilmez; size özel plan muayeneden sonra hekim tarafından kurulur.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Yöntem</span><span>Amaç</span><span>Toparlanma</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/bolgesel-lipoliz/" data-gg="${r}varliklar/gorsel/uyg-bolgesel-lipoliz.webp" data-gb="Bölgesel lipoliz" data-ga="Gıdı, karın, bel yanları ve bacak iç yüzündeki kenarları belli, yüzeysel birikimlerde uygun bulunan kişilerde değerlendirilir."><h4>Bölgesel lipoliz</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">YAĞ DOKUSU</i></span><span class="g-hucre">Günler içinde</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/selulit-gorunumu/" data-gg="${r}varliklar/gorsel/uyg-selulit-gorunumu.webp" data-gb="Selülit görünümü" data-ga="Asıl şikâyet deri yüzeyindeki dalgalı görünümse hedef değişir; mezoterapi, lipoliz ve cihaz desteği birlikte planlanır."><h4>Selülit görünümü</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">YÜZEY</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/hekim-muayenesi/" data-gg="${r}varliklar/gorsel/uyg-hekim-muayenesi.webp" data-gb="Hekim muayenesi" data-ga="Sıvı birikimi öndeyse tiroit, böbrek ve kalp yönünden değerlendirme bu kapsamda yapılır."><h4>Hekim muayenesi</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">ÖDEM</i></span><span class="g-hucre">Aynı gün</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-bolgesel-lipoliz.webp" alt=""></div><div class="g-ic"><h4>Bölgesel lipoliz</h4><p>Gıdı, karın, bel yanları ve bacak iç yüzündeki kenarları belli, yüzeysel birikimlerde uygun bulunan kişilerde değerlendirilir.</p><a class="dgm dgm--iki" href="${r}uygulamalar/bolgesel-lipoliz/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr-TR')} · bölgesel yağlanma · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Bölgesel incelme ile kilo vermek aynı şey mi?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Karnım ve bel yanlarım için de uygun mu?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>“Yağ yakma iğnesi” ne demek?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Uygulanan bölgedeki yağ başka yere mi gider?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Kaç seans gerekecek?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Bölgesel incelme ile kilo vermek aynı şey mi?","Değildir. Gündelik dilde “bölgesel incelme” denen konu, sınırlı bir alandaki yağ dokusunun hedeflenmesidir ve kilo verdirmez. Biri belirli bir bölgenin görünümüyle, diğeri genel sağlığınızla ilgilidir; beklentinizin hangisi olduğu ilk görüşmede açıklığa kavuşturulur."],["Karnım ve bel yanlarım için de uygun mu?","Evet. Karın, bel yanları, bacak iç yüzü ve gıdı değerlendirdiğimiz bölgeler arasındadır. Ancak uygunluğu bölgenin adı değil, orada elle kavranabilen, kenarları belli bir birikim olup olmadığı ve derinin esnekliği belirler."],["“Yağ yakma iğnesi” ne demek?","Gündelik dilde “yağ yakma iğnesi” diye anılan uygulamanın tıbbi karşılığı bölgesel lipolizdir. Kenarları belli, yüzeysel ve küçük bir birikimde konuşulur. Yaygın dolgunlukta ya da asıl sorunun deri gevşekliği olduğu durumlarda uygun değildir."],["Uygulanan bölgedeki yağ başka yere mi gider?","Hedeflenen bölgedeki yağın vücudun başka bir yerine taşındığı yönündeki inanış doğru değildir. Bununla birlikte kilonuz belirgin biçimde artarsa, vücudunuz fazlayı kendi dağılım düzenine göre başka bölgelerde depolayabilir; bu, genel dengedeki değişimin sonucudur."],["Kaç seans gerekecek?","Bu sayıyı hangi bölgenin ele alındığı, birikimin ne kadar kalın olduğu ve vücudunuzun ilk seansa nasıl yanıt verdiği belirler; baştan sabit bir rakam söylenmez. Plan ara kontrollerle güncellenir. İlk seanstan sonra beklenen değişim görülmezse devam edip etmeme kararı yeniden konuşulur."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Bölge ve dokunun durumu muayenede netleştikten sonra bilgi yüz yüze verilir. Randevu için ${S.iletisim.tel} numarasını arayabilir ya da aynı numaradan WhatsApp ile yazabilirsiniz."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Hangi bölgenin, ne ölçüde değişebileceğini konuşalım</h2>
    <p class="g-sonalt">Uygun olmayan durumlar ilk görüşmede açıkça söylenir; gerekiyorsa hangi uzmanlık alanına başvurmanız gerektiği belirtilir.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
