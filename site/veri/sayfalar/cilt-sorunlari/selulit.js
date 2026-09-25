const S = require('../../site');

module.exports = {
  slug: 'cilt-sorunlari/selulit',
  tip: 'tibbi',
  baslik: 'Selülit görünümü: nedir, neden olur, neler konuşulur?',
  aciklama: 'Selülit bir hastalık değil, deri altındaki yapının yüzeye yansımasıdır. Evreleri, kiloyla ilişkisi, karıştırılan durumlar ve muayenede konuşulan seçenekler.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}cilt-sorunlari/" style="color:var(--sessiz);text-decoration:none">Sorunlar</a> › <span>Selülit görünümü</span></nav>
      <p class="g-etiket">Şikâyet rehberi · Selülit</p>
      <h1>Selülit bir hastalık değil, <span class="g-isik">bir yapı özelliğidir</span></h1>
      <p class="g-hero__alt">Selülit, deri altındaki yağ bölmelerinin ve onları deriye bağlayan ince lif bantlarının yüzeyde dalgalı, portakal kabuğunu andıran bir görünüm oluşturmasıdır. Ergenlik sonrasında kadınların büyük çoğunluğunda bir ölçüde bulunur ve zayıf kişilerde de görülür. Uygulamalarda hedef bu yapıyı değiştirmek değil, yüzeydeki görünümü yumuşatmaktır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Muayene için randevu</a>
        <a class="dgm dgm--iki" href="#nedenler">Evreleri inceleyin ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Önce evre ve eşlik edenler</span><span><i></i>Muayene ve plan hekimde</span><span><i></i>Gerçekçi beklenti</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/sorun-selulit.webp" width="1400" height="788" alt="Bacağın arka yüzünde deri yüzeyini yumuşak yan ışıkla gösteren sade görsel" loading="eager">
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
      <h2>Selülit nedir, ne değildir?</h2>
      <p class="giris">Selülit, deri altındaki yağ dokusunun yerleşim biçimiyle ilgilidir. Yağ, deriye dik uzanan lif bantlarıyla ayrılmış küçük odacıklar içinde durur. Odacıklar dolgunlaştığında ya da bantlar deriyi aşağı çektiğinde yüzeyde çukurlar ve kabarıklıklar belirir. Aşağıdaki başlıklar, muayenede sorulan temel soruları özetler.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">01</span>
      <h3>Neden çoğunlukla kadınlarda görülür?</h3>
      <p>Kadınlarda lif bantları deriye dik uzanır ve yağ odacıkları yukarı doğru kabarmaya daha yatkındır; erkeklerde bantlar çapraz ve daha sık bir ağ örer. Östrojen başta olmak üzere hormonlar, kalıtım, deri kalınlığı, kan dolaşımı ve lenf akışı da görünümü etkiler.</p>
<p>En sık uyluğun arka ve yan yüzünde, kalçada, karnın alt bölümünde ve kol arkasında görülür. Gebelik, hareketsiz yaşam, sigara ve uzun saatler oturmak görünümü belirginleştirebilir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:60ms">
      <span class="g-kno">02</span>
      <h3>Ne değildir?</h3>
      <p>Selülit bir hastalık değildir; vücutta “toksin” birikiminin ya da kötü beslenmenin kanıtı da sayılmaz. Tıpta benzer adla anılan deri enfeksiyonuyla hiçbir ilgisi yoktur: o durum kızarık, sıcak, ağrılı ve hızla yayılan bir şişliktir ve acil tedavi gerektirir. Bu sayfada anlatılan, yalnızca deri yüzeyindeki dalgalı görünümdür.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:120ms">
      <span class="g-kno">03</span>
      <h3>Evreler</h3>
      <p>Görünüm muayenede genellikle dört evrede tanımlanır. Evre 0’da ayakta da yatarken de yüzey düzdür. Evre 1’de deri normal görünür; parmaklarla sıkıştırıldığında ya da kas kasıldığında dalgalanma ortaya çıkar. Evre 2’de dalgalanma ayaktayken kendiliğinden görülür, uzanınca kaybolur. Evre 3’te uzanırken de belirgindir ve çukurlar derinleşmiştir. Hangi seçeneğin ne ölçüde katkı sağlayabileceğini evre doğrudan etkiler.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:180ms">
      <span class="g-kno">04</span>
      <h3>Kiloyla ilişkisi</h3>
      <p>Kilo alımı yağ odacıklarını doldurduğu için görünümü belirginleştirir; ancak selülit kiloya bağlı bir durum değildir ve ideal kilosundaki kişilerde de bulunur. Hızlı ve büyük kilo kaybı ise deriyi gevşetip dalgalanmayı daha görünür kılabilir. Dengeli bir kilo, düzenli hareket ve kas gücünün korunması genel görünümü destekler; ne var ki bunlar tek başına selülitin ortadan kalkmasını sağlamaz.</p>
      <div class="g-haplar"><a href="${r}cilt-sorunlari/bolgesel-yaglanma/">Bölgesel yağlanma</a></div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:26px">
      <b>Hedef neden görünümün yumuşatılmasıdır?</b>
      <p>Selülit deri altındaki yapının bir özelliği olduğundan, muayenehanemizde uygulanan cerrahi olmayan yöntemler bu yapıyı kalıcı olarak değiştirmez. Uygulamaların amacı, deri gerginliği ve doku niteliği desteklenerek yüzeydeki dalgalanmanın daha az fark edilmesidir. Değişim kademelidir; evreye ve kişiye göre farklılık gösterir.</p>
<p>Elde edilen görünümün korunması için çoğunlukla belirli aralıklarla tekrarlanan bir bakım planı gerekir; kilo değişimi, hareket düzeni ve hormonal dönemler bu süreci etkiler. Muayenede evreniz, derinizin esnekliği ve eşlik eden bir yağ birikimi olup olmadığı birlikte değerlendirilir ve beklenti buna göre konuşulur. Gebelik ve emzirme döneminde hiçbir uygulama planlanmaz; değerlendirme bu dönemin sonrasına ertelenir.</p>
    </div>
    <div class="kutu kutu--uyari" data-gr style="margin-top:18px">
      <b>Selülitle karıştırılmaması gereken durumlar</b>
      <p>İki bacakta simetrik, ayak bileğinde birden sona eren, dokunmakla ağrıyan ve kolay morarma eğilimi gösteren bir dolgunluk lipödemi düşündürür; ayaklara kadar inen şişlik ise lenf ya da toplardamar sorunlarının işareti olabilir. Bu durumlar ayrı bir değerlendirme gerektirir. Bacakta aniden gelişen kızarıklık, sıcaklık, ağrı ve ateş bir deri enfeksiyonuna; tek bacakta ani şişlik ve ağrı ise pıhtıya işaret edebilir. Böyle bir durumda beklemeden <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Sonrası</p>
      <h2>Evre belirlendikten sonra hangi seçenekler konuşulur?</h2>
      <p class="giris">Aşağıdaki başlıklar, selülit görünümü ve ona eşlik edebilen yağ birikimi için konuşulan seçeneklerdir. Hangisinin ne amaçla kullanılacağı evrenize ve muayene bulgularınıza göre belirlenir; sonuçlar kişiden kişiye değişir.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Yöntem</span><span>Amaç</span><span>Toparlanma</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/selulit-gorunumu/" data-gg="${r}varliklar/gorsel/uyg-selulit-gorunumu.webp" data-gb="Selülit görünümü" data-ga="Mezoterapi, lipoliz ve cihaz desteğinin bir arada planlandığı, yüzeydeki düzensizliği yumuşatmaya yönelik bir programdır."><h4>Selülit görünümü</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">YÜZEY</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/bolgesel-lipoliz/" data-gg="${r}varliklar/gorsel/uyg-bolgesel-lipoliz.webp" data-gb="Bölgesel lipoliz" data-ga="Selülit alanına kenarları belli bir yağ birikimi eşlik ediyorsa, bu birikimi hedeflemek amacıyla değerlendirilir."><h4>Bölgesel lipoliz</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">YAĞ DOKUSU</i></span><span class="g-hucre">Günler içinde</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/mezoterapi/" data-gg="${r}varliklar/gorsel/uyg-mezoterapi.webp" data-gb="Mezoterapi" data-ga="Deri içine uygulanan karışımlarla doku niteliğini ve yüzey görünümünü desteklemek amacıyla konuşulur."><h4>Mezoterapi</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">DOKU</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/hekim-muayenesi/" data-gg="${r}varliklar/gorsel/uyg-hekim-muayenesi.webp" data-gb="Hekim muayenesi" data-ga="Lipödem, ödem ya da toplardamar sorunu düşündüren bulgular varsa değerlendirme bu kapsamda yapılır."><h4>Hekim muayenesi</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">DAHİLİ</i></span><span class="g-hucre">Aynı gün</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-selulit-gorunumu.webp" alt=""></div><div class="g-ic"><h4>Selülit görünümü</h4><p>Mezoterapi, lipoliz ve cihaz desteğinin bir arada planlandığı, yüzeydeki düzensizliği yumuşatmaya yönelik bir programdır.</p><a class="dgm dgm--iki" href="${r}uygulamalar/selulit-gorunumu/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr-TR')} · selülit · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Selülit bir hastalık mı?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Zayıfım; bende neden selülit var?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Selülit tamamen geçer mi?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Krem, masaj ya da fırçalama işe yarar mı?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Selülit ile bölgesel yağlanma aynı şey mi?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Selülit bir hastalık mı?","Hayır. Selülit, deri altındaki yağ odacıkları ile lif bantlarının dizilişinden kaynaklanan bir görünümdür ve ergenlik sonrası kadınların çoğunda bir ölçüde bulunur. Tıpta benzer adla anılan deri enfeksiyonu ise bambaşka bir durumdur; kızarıklık, sıcaklık, ağrı ve ateşle seyreder ve hemen tedavi gerektirir."],["Zayıfım; bende neden selülit var?","Selülit kiloya bağlı değildir. Lif bantlarının dizilişi, hormonlar, kalıtım ve deri kalınlığı belirleyicidir; bu yüzden ideal kilodaki kişilerde de görülür. Kilo alımı görünümü belirginleştirebilir, ancak kilo vermek tek başına ortadan kaldırmaz."],["Selülit tamamen geçer mi?","Selülit deri altı yapısının bir özelliği olduğundan tümüyle kaybolması beklenmez. Uygulamaların hedefi, yüzeydeki dalgalanmayı yumuşatmak ve dokunun niteliğini desteklemektir. Görünümün korunması için çoğunlukla aralıklı bakım gerekir; değişimin derecesi evreye ve kişiye göre farklıdır."],["Krem, masaj ya da fırçalama işe yarar mı?","Bazı kremler ve masaj, deriyi geçici olarak sıkılaştırıp ödemi azaltarak kısa süreli bir fark yaratabilir. Ancak alttaki yapıyı değiştirmezler ve etkileri kullanım bırakıldığında kaybolur. Düzenli hareket ve kas gücünün korunması uzun vadede daha anlamlı bir destektir."],["Selülit ile bölgesel yağlanma aynı şey mi?","Hayır. Bölgesel yağlanma, belirli bir alanda elle kavranabilen yağ birikimidir; selülit ise deri yüzeyindeki dalgalı görünümdür. İkisi aynı bölgede birlikte bulunabilir. Muayenede hangisinin öne çıktığı belirlenir, çünkü biri için konuşulan seçenek diğerine katkı sağlamayabilir."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Evreniz ve eşlik eden durumlar muayenede belirlendikten sonra bilgi yüz yüze verilir. Randevu için ${S.iletisim.tel} numarasını arayabilir ya da aynı numaradan WhatsApp ile yazabilirsiniz."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Selülit evrenizi ve beklentinizi birlikte değerlendirelim</h2>
    <p class="g-sonalt">Muayenede görünümün evresi, eşlik eden yağ birikimi ve karıştırılabilecek durumlar tek tek ele alınır.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
