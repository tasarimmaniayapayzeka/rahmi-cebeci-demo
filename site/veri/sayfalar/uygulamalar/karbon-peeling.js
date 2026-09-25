const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/karbon-peeling',
  tip: 'tibbi',
  baslik: 'Karbon peeling: karbon losyonu ve pikosaniye lazer',
  aciklama: 'Karbon peelingde yüze sürülen karbon losyonu pikosaniye lazerle taranır. Gözenek, yağlanma ve donuklukta etkinin sınırları, seans düzeni ve sonrası.',

  icerik: (r, ik) => `
<!-- HERO -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Karbon peeling</span></nav>
      <p class="g-etiket">Cihaz ve Lazer · Gözenek ve Yağlanma</p>
      <h1>Karbon peeling: siyah losyon ve pico lazerle <span class="g-isik">yüzeysel</span> tazelenme.</h1>
      <p class="g-hero__alt">Yüze ince bir tabaka siyah karbon losyonu sürülür ve kuruması beklenir. Ardından pikosaniye lazer yüz boyunca gezdirilir; koyu tanecikler enerjiyi üzerine çeker ve dağılırken yüzeydeki ölü hücreleri, gözenek ağzındaki birikimi de beraberinde götürür. Etki derine inmez; bu yüzden birkaç seanslık bir dizi olarak planlanır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu isteyin</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Yöntemin işleyişi ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Etki yüzeyde kalır</span><span><i></i>Günlük bakımla birlikte düşünülür</span><span><i></i>Gözler mutlaka korunur</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-karbon-peeling.webp" width="1400" height="788" alt="Mermer bir yüzeyde spatulayla yayılmış mat siyah losyonun yakın planı" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- VERİ BANDI -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="2">0</em></b><span>Aşamalı tarama</span></div>
  <div data-gr style="--d:70ms"><b>4–6</b><span>Seans, olağan seri uzunluğu</span></div>
  <div data-gr style="--d:140ms"><b>2–4&#8239;hf</b><span>Seanslar arası</span></div>
  <div data-gr style="--d:210ms"><b>20–30&#8239;dk</b><span>Bir seans</span></div>
</div></div>

<!-- BU NEDİR / BU NE DEĞİLDİR -->
<section class="bolum" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Ne yapar, ne yapmaz</p><h2>Karbon peeling cilde ne yapar, nerede yetersiz kalır?</h2><p class="giris">Gün ortasında parlayan alın ve burun, belirginleşen gözenekler ve mat, yorgun bir görünüm çoğunlukla aynı kişide bir arada görülür. Bunun altında çoğu zaman yağ bezlerinin çalışkanlığı ve evdeki bakım alışkanlıkları yatar. Nedenleri iki ayrı sayfada ele aldık: <a href="${r}cilt-sorunlari/nem-kaybi-ve-donukluk/">ciltte nem kaybı ve donukluk</a> ve <a href="${r}cilt-sorunlari/gozenek-ve-cilt-dokusu/">gözenek ve cilt dokusu</a>.</p></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>Karbon tanecikleri, lazer ışığı için bir hedef tahtası görevi görür. Losyon kuruyunca mikron boyutlu tanecikler yüzeydeki ölü hücrelere ve gözenek ağızlarına tutunur; atım geldiğinde enerjiyi emip dağılırlar ve tutundukları birikimi de yüzeyden koparırlar.</p>
<p>Seansın ilk yarısı karbon tabakasını kaldırmaya ayrılır. Losyon tamamen temizlendikten sonra cilt, bu kez karbonsuz ve düşük enerjili bir taramadan daha geçirilir; bu ikinci geçişte yüzeye hafif bir ısı uyarısı verilmesi amaçlanır.</p>
<p>Losyonun kendisi bir ilaç değildir, yalnızca lazer ile deri arasında aracılık eder. Bu yüzden ince ve eşit sürülmesi, iyice kuruması ve gözlerin kapalı gözlükle korunması işin parçasıdır. En çok yağlanması belirgin, gözenekleri görünür ciltlerde konuşulur. Kullanılan pikosaniye lazerin tanıtımı <a href="${r}uygulamalar/pico-lazer-dovme-silme/">dövme silme</a> sayfasındadır.</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:80ms">
        <b>Bu ne değildir</b>
        <p>Yerleşmiş kahverengi lekeler için bir çözüm değildir; bu başlıkta önce lekenin tipi incelenir ve <a href="${r}uygulamalar/pico-lazer-leke/">pico lazer ile leke</a> sayfasındaki yol izlenir. Çukur akne izlerinde de etkisi yüzeyde kaldığı için derine çalışan <a href="${r}uygulamalar/altin-igne-radyofrekans/">altın iğne radyofrekans</a> ya da <a href="${r}uygulamalar/fraksiyonel-lazer/">fraksiyonel lazer</a> gibi seçenekler konuşulur.</p>
<p>Seanstan çıkınca cildin daha aydınlık görünmesi, üstteki ölü hücre tabakasının incelmesindendir; renk açılması değildir ve birkaç günde azalır. Gözenekler için de benzer bir durum geçerlidir: ağızlarındaki tıkaç temizlendiği için bir süre daha küçük görünürler, ancak yağ üretimi sürdükçe eski görünümleri geri gelir.</p>
      </div>
    </div>
  </div>
</section>

<!-- BENTO -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Plan nasıl kurulur</p><h2>Bir seans nasıl ilerler, kimlere yapılmaz?</h2><p class="giris">Losyonun sürülmesinden son taramaya kadar yaklaşık yarım saat geçer. Çoğu kişi seanstan doğrudan işine döner; yüzde kalan pembelik genellikle akşama kadar geçer.</p></div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="55" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>2 aşama</b></div>
        <p><b style="color:var(--murekkep)">Önce karbon, sonra temiz cilt</b><br>İlk tarama karbon tabakasını kaldırır, ikincisi temizlenmiş cilde düşük enerjiyle yapılır; ikisinde de etki derinin en üst katmanında kalır.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Nerede ne beklenir?</span>
        <div class="g-cubuk"><small><span>GÖZENEK GÖRÜNÜMÜ</span><span>Geçici azalma</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="70%"></b></div></div>
        <div class="g-cubuk"><small><span>PARLAMA VE DONUKLUK</span><span>Yüzeyde tazelenme</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="60%"></b></div></div>
        <div class="g-cubuk"><small><span>ÇUKUR İZ VE LEKE</span><span>Hedef dışı</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="8%"></b></div></div>
        <p style="font-size:.68rem;color:var(--sessiz);margin-top:8px">Çubuk boyları yalnız karşılaştırma içindir; size özel plan muayenede kurulur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Adım adım</span>
        <ol class="g-protokol">
          <li>Cilt tipi, yağlanma, güneş geçmişi ve kullandığınız ürünlerin konuşulması</li>
          <li>Onam; etkinin yüzeysel ve geçici olduğunun açıkça söylenmesi</li>
          <li>Yüz temizliği, losyonun ince bir katman hâlinde sürülmesi, gözlerin kapatılması</li>
          <li>Karbonlu ve karbonsuz iki aşamalı pikosaniye lazer taraması</li>
          <li>Soğuk uygulama, nemlendirici, güneş koruyucu; üç gün asit ve retinole ara</li>
        </ol>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Kimlere yapılmaz, ne zaman beklenir?</b>
        <p>Yazdan yeni dönmüş, bronzlaşmış bir ciltte ton yerine oturana kadar beklenir; bronzlaştırıcı sprey ya da krem kullandıysanız söyleyin. Yüzde iltihaplı sivilce, uçuk, alevlenmiş egzama, güneş yanığı ya da açık yara varsa önce deri toparlanır.</p>
<p>Deriyi ışığa duyarlı yapan ilaçları ve sarı kantaron gibi bitkisel ürünleri soruyoruz. Akne için ağızdan isotretinoin kullandıysanız ya da asitli ürünlerinizi henüz bırakmadıysanız seans ertelenir. Daha önce bir yüz ürününe ya da uyuşturucu kreme tepki verdiyseniz ürünün adını getirin; losyon içeriği buna göre seçilir ya da uygulamadan vazgeçilir.</p>
<p>Birçok üründe yanan, gerilen ya da kızaran bir cildin koruyucu tabakası zaten zayıflamıştır; lazerden önce bu tabakanın onarılması gerekir. Güneşle alevlenen deri hastalıkları, vitiligo gibi renk kaybıyla giden tablolar, keloid eğilimi, gebelik ve emzirme, yara iyileşmesini bozan durumlar ve alan içinde incelenmemiş pigmentli lekeler uygulamaya engeldir.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/uyg-karbon-peeling-2.webp" alt="Cilt bakımında kullanılan ürün şişeleri" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">Hekimin notu</span><p>"Günlük bakım oturmadıysa seans sayısını artırmak çözüm olmaz."</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Seans sonrası</span>
        <p style="font-size:.92rem">Yüzdeki pembelik ve ılıklık çoğunlukla akşama kadar geçer; sonraki günlerde cilt biraz kuru hissettirebilir ve burun kenarı ile alında ince bir pullanma olabilir. Üç gün boyunca asitli ve retinollü ürünleri kullanmayın; makyajı bir gece bekletmek çoğu kişi için yeterlidir. Tek seansın bıraktığı tazelik yüzeyseldir ve günler ya da birkaç hafta içinde azalır; yağ üretimi sürdükçe gözenekler yeniden belirginleşir. Gözenek görünümünde daha kalıcı bir değişim hedefleniyorsa derine çalışan seçenekler muayenede konuşulabilir. Sonuçlar kişiden kişiye değişir.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr style="--d:140ms"><h3>Sırayı birlikte kuralım</h3><p>Plan, cildinizin yağlanma eğilimi görüldükten sonra kurulur.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu isteyin</a></div>
      <div class="kutu kutu--acil g-b6" data-gr>
        <b>Ne zaman hemen haber vermelisiniz?</b>
        <p>Seanstan sonra kızarıklık azalacağına yayılıyorsa, ağrı artıyorsa, deride su toplaması, açık yara, akıntı ya da ateş fark ederseniz bekleyip görmeyin. ${S.iletisim.tel} numarasından bize ulaşın; telefonla ulaşamıyorsanız <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
      </div>
    </div>
  </div>
</section>

<!-- SORU TERMİNALİ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLowerCase()} · karbon peeling · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>“Hollywood peeling” ile karbon peeling aynı şey mi?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Bir seans yeterli olur mu?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Pico lazerle leke uygulamasından farkı nedir?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Sivilcelerim varken yapılabilir mi?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Seanstan sonra nelerden kaçınmalıyım?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nasıl öğrenebilirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["“Hollywood peeling” ile karbon peeling aynı şey mi?","Aynı işlemi anlatan iki ad. “Hollywood” sözcüğü bir pazarlama benzetmesidir; tıbbi bir anlamı yoktur ve sonuç hakkında bir şey söylemez. Biz sayfalarımızda işlemi yaptığı şeyle anıyoruz: cilde sürülen karbon tabakasının pico lazerle kaldırılması."],["Bir seans yeterli olur mu?","Çoğu kişi ilk seanstan çıkarken cildini daha pürüzsüz ve mat bulur; ama bu tazelik yüzeyseldir ve birkaç gün ile birkaç hafta içinde azalır. Kalıcı bir değişim için tek seans beklenmez; bu yüzden seanslar aralıklarla tekrarlanır ve evdeki bakım da plana dâhil edilir."],["Pico lazerle leke uygulamasından farkı nedir?","İkisinde de pikosaniye lazer kullanılır, ama hedef farklıdır. Leke uygulamasında enerji deri içindeki melanin kümelerine yöneltilir ve önce lekenin tipi incelenir. Karbon peelingde enerji cilde sürülen karbon tabakasında toplanır ve etki yüzeyle sınırlı kalır; yerleşmiş lekelerde anlamlı bir katkı beklenmez."],["Sivilcelerim varken yapılabilir mi?","Kızarık, dolgun ve ağrılı sivilceler varken lazer tutulmaz; ısı iltihabı artırabilir. Önce bu dönem ilaç ya da bakım düzeniyle geçirilir. Yüzünüzde daha çok parlama ve siyah nokta varsa, iltihaplı lezyon olmadığı sürece seans planlanabilir."],["Seanstan sonra nelerden kaçınmalıyım?","Üç gün asitli ve retinollü ürünleri bırakın; pullanma olursa kazımayın. Seans günü sauna ve ağır spordan kaçının, her sabah güneş koruyucu sürün. Makyaja çoğunlukla ertesi gün dönülebilir; pullanma varsa pudralı ürünler cildi daha kuru gösterebilir."],["Ücret bilgisini nasıl öğrenebilirim?","Sağlık hizmetlerinin tanıtımını düzenleyen kurallar ücretlerin internette yayımlanmasına izin vermez. Dizinin uzunluğu kişiye göre değiştiği için bu konu muayenede konuşulur."]]</script>

<!-- KAPANIŞ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Önce bakım düzeni mi, önce seans mı?</h2>
    <p class="g-sonalt">Yağlanmaya eğilimli ciltte kalıcı farkı çoğu zaman seans değil, evde her gün yapılan bakım belirler.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
