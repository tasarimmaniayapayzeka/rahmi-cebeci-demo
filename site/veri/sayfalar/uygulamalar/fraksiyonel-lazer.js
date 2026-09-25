const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/fraksiyonel-lazer',
  tip: 'tibbi',
  baslik: 'Fraksiyonel lazer: akne izi, gözenek ve cilt dokusu',
  aciklama: 'Fraksiyonel lazer deride kontrollü mikro alanlar oluşturur. Akne izi, gözenek ve ince çizgide kimlere uygun olduğu, iyileşme günleri ve güneş kısıtı.',

  icerik: (r, ik) => `
<!-- ═════ HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Fraksiyonel lazer</span></nav>
      <p class="g-etiket">Cihaz Destekli Uygulamalar · Cilt Yenileme</p>
      <h1>Fraksiyonel lazer: cildi <span class="g-isik">mikro alanlarla</span> yenileme</h1>
      <p class="g-hero__alt">Fraksiyonel lazer, ışını cildin tamamına değil, birbirinden ayrık çok sayıda küçük alana verir. Her mikro alanda denetimli bir hasar oluşur; aralarda kalan sağlam deri iyileşmeyi hızlandırır. Akne izi, gözenek görünümü ve ince çizgilerde yüzeyin yenilenmesi hedeflenir; hangi modun, hangi derinlikte kullanılacağına cildiniz görüldükten sonra karar verilir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu isteyin</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Yöntemin işleyişi ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Aradaki sağlam deri korunur</span><span><i></i>Derinlik cilde göre ayarlanır</span><span><i></i>İyileşme günleri önceden konuşulur</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-fraksiyonel-lazer.webp" width="1400" height="788" alt="Cilt yüzeyinde düzenli aralıklarla dizilmiş mikro ışık noktalarının üç boyutlu çizimi" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- ═════ VERİ BANDI ═════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b>4–8&#8239;hf</b><span>Seans aralığı</span></div>
  <div data-gr style="--d:70ms"><b>1–7&#8239;gün</b><span>Derinliğe göre iyileşme</span></div>
  <div data-gr style="--d:140ms"><b><em data-gsay="5">0</em></b><span>Planlama adımı</span></div>
  <div data-gr style="--d:210ms"><b><em data-gsay="4">0</em>&#8239;hf</b><span>Öncesinde ve sonrasında güneş kısıtı</span></div>
</div></div>

<!-- ═════ NEDİR / NE DEĞİLDİR ═════ -->
<section class="bolum bolum--buz2" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Ne yapar, ne yapmaz</p><h2>Fraksiyonel lazer deride ne yapar, neyin yerine geçmez?</h2><p class="giris">“Fraksiyonel” kesirli demektir: ışın, yüzeyin bütününü değil, ızgara düzeninde dizilmiş küçük sütunları etkiler. Beklenen değişim, bu sütunlar kapanırken başlayan onarımdan gelir.</p></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>İki yaklaşım vardır. Er:YAG lazerin ışığı derideki su tarafından çok güçlü soğurulur; mikro sütunlarda dokuyu buharlaştırarak yüzeyi denetimli biçimde açar. Nd:YAG lazer daha derine ulaşır ve yüzeyi açmadan ısı sütunları oluşturur. Yüzeyi açan yöntemde değişim daha belirgin, iyileşme daha uzundur; açmayan yöntemde iyileşme kısa, katkı daha ılımlıdır. Gerektiğinde ikisi aynı seansta art arda kullanılabilir.</p>
<p>Sütunların arasında kalan sağlam deri bir hücre deposu gibi çalışır ve alanın birkaç gün içinde kapanmasını sağlar; yeni kolajen oluşumu ve derinin yeniden yapılanması ise aylar sürer. En sık yuvarlak kenarlı akne izleri, belirgin gözenek görünümü, göz çevresi ve yanaktaki ince çizgiler ile güneşin yorduğu pürüzlü yüzey için konuşulur; beklenen düzelme kısmidir.</p>
<p><b>Kullanılan cihaz:</b> fraksiyonel lazer (Fotona SP Dynamis).</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:80ms">
        <b>Bu ne değildir</b>
        <p><b>Ameliyatın yerine konmaz:</b> sarkan deri fazlalığı ve derin kıvrımlar ışıkla giderilmez; bu tablolar plastik cerrahinin alanındadır. <b>Evde kullanılan ışık cihazlarıyla aynı şey değildir:</b> ev tipi cihazlarda enerji düşüktür; derinlik ayarı, göz koruması ve hekim değerlendirmesi yoktur.</p>
<p><b>Tek seansta dönüşüm sağlamaz:</b> değişim seanslar biriktikçe ve aylar içinde ortaya çıkar. <b>Sivilceler aktifken yapılmaz:</b> iltihaplı lezyonlar sürerken ısı ve açık mikro alanlar tabloyu alevlendirebilir; önce akne yatıştırılır. <b>Her ize uymaz:</b> buz kıracağı ucu gibi dar ve derin izlerde katkı sınırlı kalır; deriden kabarık izler ve keloid bu yöntemin hedefi değildir.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ BENTO ═════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Yol haritası</p><h2>Seanslar nasıl kurgulanır, iyileşme hangi sırayla ilerler?</h2></div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="60" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>2 mod</b></div>
        <p><b style="color:var(--murekkep)">Yüzeyi açan ve açmayan</b><br>Er:YAG yüzeyi mikro alanlarda açar, Nd:YAG yüzeyi koruyarak derine ısı verir; seçim cilt tonuna, hedefe ve iyileşmeye ayrılabilecek güne göre yapılır.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">İYİLEŞME TAKVİMİ</span>
        <div class="g-cubuk"><small><span>KIZARIKLIK–KABUKLANMA</span><span>1–7 gün</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="16%"></b></div></div>
        <div class="g-cubuk"><small><span>İKİ SEANS ARASI</span><span>4–8 hafta</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="55%"></b></div></div>
        <div class="g-cubuk"><small><span>SONUCUN OKUNMASI</span><span>3–6 ay</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="92%"></b></div></div>
        <p style="font-size:.7rem;color:var(--sessiz);margin-top:8px">Çubuk boyları yalnız karşılaştırma içindir; size özel plan muayenede kurulur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Adım adım</span>
        <ol class="g-protokol">
          <li>Muayene: iz tipi, cilt tonu, güneş ve uçuk öyküsü</li>
          <li>İlaç sorgusu: ağızdan retinoid, ışığa duyarlılık yapan ilaçlar</li>
          <li>Bilgilendirme ve yazılı onam; iyileşme günleri takviminize göre seçilir</li>
          <li>Temizlik, uyuşturucu krem, göz koruması ve soğutmalı tarama</li>
          <li>Yazılı bakım notu ve kontrol randevusu</li>
        </ol>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">Hekimin notu</span><p>"Derinliği cihaz seçmez; cilt tonunuz ve iyileşmeye ayırabileceğiniz gün sayısı seçer."</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms"><span class="g-ket">Uygulamadan sonra</span>
        <p style="font-size:.92rem">Yüzeyi açan uygulamadan sonraki ilk bir–iki gün güneş yanığına benzer sıcaklık, kızarıklık ve şişlik olur; ardından mikro alanlara denk gelen ince koyu noktacıklar ve pul pul dökülme birkaç gün sürer. Yüzeyi açmayan uygulamada kızarıklık çoğunlukla bir–iki günde geçer. Daha seyrek: uzayan kızarıklık, sivilce benzeri döküntü, uçuk alevlenmesi, geçici koyulaşma. Riski artıranlar: kabuğa dokunmak, güneşe çıkmak, ilk günlerde makyaj ve ağır kremler, asitli ürünlere ya da retinoide vaktinden önce dönmek. Seyrek görülen ama önemsenmesi gerekenler: enfeksiyon, kalıcı renk değişikliği, iz.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Seans takvimi</span>
        <p style="font-size:.92rem">Çoğu planda üç ile beş seans, dört ile sekiz hafta arayla yapılır; aralık seçilen derinliğe göre uzar ya da kısalır. Deri bir önceki seansın onarımını bitirmeden yeni seans yapılmaz. Değişim seanslar ilerledikçe fark edilir, son seanstan üç ile altı ay sonra birlikte değerlendirilir. Seans sayısı baştan söz verilmez; sonuçlar kişiden kişiye değişir.</p>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Hangi durumlarda yapılmaz ya da ertelenir?</b>
        <p>Muayenede her madde ayrıca konuşulur; bir kısmı yalnızca bekleme gerektirir.</p>
        <ul>
          <li><b>Gebelik ve emzirme:</b> bu dönem bitene kadar lazer uygulamaları planlanmaz.</li>
          <li><b>Yakın zamanda güneşlenme veya bronzlaşma:</b> deri kendi tonuna dönmeden başlanmaz; uygulamadan önceki en az dört hafta güneşten korunmak gerekir.</li>
          <li><b>Yüzde uçuk ya da başka bir enfeksiyon:</b> iyileşme beklenir; sık uçuk çıkaranlarda hekim işlem öncesi koruyucu ilaç planlayabilir.</li>
          <li><b>Keloid ve kabarık iz yapma eğilimi:</b> ciddi bir engeldir; risk açıkça konuşulur.</li>
          <li><b>Ağızdan isotretinoin ve ışığa duyarlılık yapan ilaçlar:</b> ilacın türüne ve bırakılma tarihine göre bekleme süresi belirlenir.</li>
          <li><b>Koyu ten, vitiligo ve renk kaybı eğilimi:</b> koyu tende iltihap sonrası koyulaşma daha sık görülür, temkinli ayar ve deneme alanı gerekir; vitiligoda uygulanmaz.</li>
          <li><b>İyileşmeyi yavaşlatan durumlar:</b> şekeri düzensiz seyreden diyabet, bağışıklığı baskılayan ilaçlar ya da daha önce ışın tedavisi almış bir bölge varsa uygunluk ayrıca tartılır.</li>
          <li><b>İncelenmemiş ben ya da değişen leke:</b> önce büyütmeli olarak bakılır; kuşkulu lezyonun üzerine atım yapılmaz.</li>
        </ul>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr><img src="${r}varliklar/gorsel/uyg-fraksiyonel-lazer-2.webp" alt="Yanak derisinde ince ışık noktalarından oluşan düzenli ızgara" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr><h3>Takviminize uygun bir plan kuralım</h3><p>Derinlik, iyileşmeye ayırabileceğiniz günler konuşulmadan seçilmez.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu isteyin</a></div>
      <div class="kutu kutu--acil g-b4" data-gr>
        <b>Kontrol gününü beklemeyin</b>
        <p>Günler geçtikçe artan ağrı, yayılan kızarıklık ya da şişlik, sarı kabuk veya akıntı, ateş, küme hâlinde su toplaması ya da kapanmayan açık bir alan fark ederseniz ${S.iletisim.tel} numarasından bize ulaşın; ulaşamıyorsanız <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ UYARI + KAPSAM ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="kutu kutu--uyari" data-gr>
      <b>Uyarı</b>
      <p>Bu sayfadaki bilgiler geneldir; kişisel tanı ya da tedavi yerine geçmez. Fraksiyonel lazer deride bilerek küçük hasar alanları oluşturan bir işlemdir; herkese uygun değildir ve enfeksiyon, renk değişikliği, iz gibi istenmeyen sonuçlar görülebilir. Yapılıp yapılmayacağına muayeneden sonra hekim karar verir. Sonuçlar kişiden kişiye değişir.</p>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:16px;--d:70ms">
      <b>Kapsam</b>
      <p>Uygulama ${S.hekim.tam} tarafından, ${S.hekim.sertifika} kapsamında, Bakırköy’deki muayenehanemizin cihaz odasında yapılır. Bu çerçevenin dışında kalan talepleri neden karşılamadığımızı <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a> sayfasında açıkladık. Konunun bütününü akne izleri için <a href="${r}cilt-sorunlari/akne-ve-akne-izi/">akne ve akne izi</a>, gözenek ve pürüzlülük için <a href="${r}cilt-sorunlari/gozenek-ve-cilt-dokusu/">gözenek ve cilt dokusu</a> sayfalarında anlattık; enerjiyi yüzeyden değil iğne ucundan veren seçenek için <a href="${r}uygulamalar/altin-igne-radyofrekans/">altın iğne radyofrekans</a> sayfasına bakabilirsiniz.</p>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLowerCase()} · fraksiyonel lazer · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Er:YAG ile Nd:YAG arasındaki fark nedir?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Kaç gün sosyal hayattan uzak kalırım?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Akne izlerimde kaç seansta fark görürüm?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Koyu tenliyim, uygulama yapılabilir mi?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Yazın fraksiyonel lazer yaptırabilir miyim?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nasıl öğrenebilirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Er:YAG ile Nd:YAG arasındaki fark nedir?","Er:YAG lazerin ışığı derideki su tarafından güçlü soğurulur ve mikro alanlarda yüzeyi açar; değişim daha belirgin, iyileşme daha uzundur. Nd:YAG daha derine ulaşır ve yüzeyi açmadan ısı verir; iyileşme kısa, katkı daha ılımlıdır. Hangisinin, hangi derinlikte kullanılacağı cilt tonunuza ve hedefinize göre seçilir."],["Kaç gün sosyal hayattan uzak kalırım?","Yüzeyi açan uygulamada kızarıklık, şişlik ve ince kabuklanma çoğunlukla üç ile yedi gün sürer; yüzeyi açmayan uygulamada bu süre genellikle bir–iki gündür. Önemli bir davetiniz ya da toplantınız varsa seansı en az iki hafta öncesine almanızı öneririz."],["Akne izlerimde kaç seansta fark görürüm?","Bu, izlerin biçimine, derinliğine ve ne kadar yaygın olduğuna bağlıdır; yüzünüz görülmeden sayı verilemez. Yuvarlak kenarlı, geniş tabanlı izler daha iyi yanıt verirken buz kıracağı ucu gibi dar ve derin izlerde katkı sınırlı kalır."],["Koyu tenliyim, uygulama yapılabilir mi?","Değerlendirilebilir; ancak koyu tende iltihap sonrası koyulaşma daha sık görülür. Daha düşük yoğunlukla, çoğu zaman yüzeyi açmayan ayarlarla ve önce küçük bir deneme alanıyla başlanır; öncesinde ve sonrasında güneş koruması özellikle önemlidir."],["Yazın fraksiyonel lazer yaptırabilir miyim?","Güneşin yoğun olduğu aylarda genellikle önerilmez. Uygulamadan önce en az dört hafta güneşten kaçınmak, sonrasında da haftalarca sıkı koruma sürdürmek gerekir; bunun zor olduğu yaz ve tatil dönemlerinde plan sonbahar ve kışa kaydırılır."],["Ücret bilgisini nasıl öğrenebilirim?","Sağlık hizmetlerinin tanıtımını düzenleyen kurallar ücretlerin internette yayımlanmasına izin vermez. Seçilen mod ve seans sayısı kişiye göre değiştiği için bu konu muayenede konuşulur."]]</script>

<!-- ═════ KAPANIŞ ═════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Cildiniz ve takviminiz için doğru derinliği birlikte seçelim</h2>
    <p class="g-sonalt">Hangi modun, kaç seansla uygun olduğu muayene yapılmadan söylenemez.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
