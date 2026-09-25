const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/prp',
  tip: 'tibbi',
  baslik: 'PRP (trombositten zengin plazma): yüz ve cilt uygulaması',
  aciklama: 'Yüz ve ciltte PRP: kendi kanınızdan aynı randevuda hazırlanan plazma ne hedefler, kimlere uygulanmaz, seans planı muayenede nasıl kurulur.',

  icerik: (r, ik) => `
<!-- ═════ HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>PRP</span></nav>
      <p class="g-etiket">Enjeksiyonla Yapılanlar · Otolog Plazma</p>
      <h1>Kaynağı kendi kanınız, <span class="g-isik">hedefi cilt kalitesi</span> olan bir uygulama.</h1>
      <p class="g-hero__alt">PRP, koldan alınan az miktarda kanın santrifüjle ayrıştırılmasıyla elde edilen, trombosit oranı yükseltilmiş plazmanın aynı randevuda yüz, boyun, dekolte ya da el sırtı cildine verilmesidir. Cildin kendi yenilenme süreçlerinin desteklenmesi amaçlanır. Saç dökülmesine yönelik uygulama ayrı bir sayfada anlatılır; hangi bölgeye ne planlanacağı muayenede belirlenir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu isteyin</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Nedir, ne değildir ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Adınıza etiketli kapalı tüp</span><span><i></i>Aynı randevuda hazırlık</span><span><i></i>Seans sayısı kişiye göre</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-prp.webp" width="1400" height="788" alt="Santrifüj tüplerinde katmanlarına ayrılmış açık sarı plazmanın yakın planı" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <div class="g-hud" data-ghud><b>Neden “PRP”?</b><div class="g-cizgi"></div><span>İngilizce platelet-rich plasma ifadesinin kısaltmasıdır; Türkçe karşılığı trombositten zengin plazmadır.</span></div>
    </div>
  </div>
</section>

<!-- ═════ VERİ BANDI ═════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b>Otolog</b><span>Kendi kanınızdan hazırlanır</span></div>
  <div data-gr style="--d:60ms"><b>~<em data-gsay="4">0</em>&#8239;hf</b><span>Seanslar arasında sık bırakılan süre</span></div>
  <div data-gr style="--d:120ms"><b>Steril</b><span>Size ayrılmış tüp ve set</span></div>
  <div data-gr style="--d:180ms"><b>Haftalar</b><span>Cilt yanıtının izlendiği dönem</span></div>
</div></div>

<!-- ═════ BU NEDİR / BU NE DEĞİLDİR ═════ -->
<section class="bolum" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Tanım ve kapsam</p>
      <h2>PRP cilde ne yapar, hangi beklentiyi karşılamaz?</h2>
      <p class="giris">Bu sayfa yüz, boyun, dekolte ve el sırtı cildine yönelik PRP’yi anlatır. Şikâyetiniz saç seyrelmesiyse <a href="${r}uygulamalar/sac-prp/">saç PRP</a> sayfasına geçebilirsiniz; cilt tarafında <a href="${r}cilt-sorunlari/nem-kaybi-ve-donukluk/">nem kaybı ve donukluk</a> ile <a href="${r}cilt-sorunlari/gozenek-ve-cilt-dokusu/">gözenek ve cilt dokusu</a> sayfaları, bölge planı için <a href="${r}bolgeler/yuz/">yüz</a> sayfası yol gösterir.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>Bir yara oluştuğunda kanamayı durdurmak için ilk harekete geçen trombositler, iyileşmeyi yönlendiren büyüme faktörlerini de salgılar. PRP bu doğal mekanizmadan yararlanır: kanınızdaki trombositler küçük bir hacimde toplanır ve cildin desteklenmek istenen katmanına bırakılır.</p>
<p>Tüp, siz odadayken üzerine adınız yazılarak hazırlanır ve kan alındıktan sonra santrifüj cihazına yerleştirilir. Kısa bir döndürmenin ardından kırmızı hücreler dibe çöker, üstte açık renkli plazma kalır; kullanılacak bölüm buradan ayrılır. Plazma o gün yalnızca size uygulanmak üzere hazırlanır, artan kısım saklanmaz.</p>
        <p><b>Kullanıldığı alanlar</b> yüz, boyun, dekolte ve el sırtıdır; cildin dokusu, inceliği ve parlaklığıyla ilgili şikâyetlerde değerlendirilir. İnce iğnelerle tek başına verilebildiği gibi, <a href="${r}uygulamalar/altin-igne-radyofrekans/">altın iğne radyofrekans</a> ya da <a href="${r}uygulamalar/fraksiyonel-lazer/">fraksiyonel lazer</a> seansında açılan mikro kanallara yayılarak da planlanabilir. Göz çevresi gibi ince deri bölgelerinde miktar ve derinlik ayrıca ayarlanır.</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:70ms">
        <b>Bu ne değildir</b>
        <p><b>Dolgu yerine geçmez:</b> elmacıkta, çene hattında ya da göz altında belirgin çöküntü varsa plazma bu boşluğu doldurmaz; hacim konusu <a href="${r}uygulamalar/dolgu-uygulamalari/">dolgu uygulamaları</a> sayfasında ele alınır.</p>
        <p><b>Mimik çizgilerini gevşetmez:</b> alında ya da kaş arasında kas hareketiyle derinleşen çizgiler başka bir planlamanın konusudur.</p>
        <p><b>Sarkmayı kaldırmaz:</b> deri ve alt doku belirgin biçimde yer değiştirdiyse PRP bu tabloyu geri çevirmez; cerrahi gerektiren bir durumun karşılığı olarak sunulamaz.</p>
        <p><b>Vücudun geneline etki etmez:</b> PRP bir “kür” değildir; bağışıklık, enerji ya da genel sağlık üzerine öne sürülen iddiaların bilimsel dayanağı yoktur. Plazmanın etkisi, verildiği cilt bölgesiyle sınırlı kalır; vücudun başka bir yerinde etki göstermesi beklenmez.</p>
      </div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="--d:140ms;margin-top:16px">
      <b>Bilimsel veriler ne söylüyor?</b>
      <p>Cilt için PRP üzerine yayımlanmış çok sayıda çalışma var; ancak her ekip kanı farklı bir düzenekle hazırlıyor, farklı sıklıkla uyguluyor ve sonucu farklı ölçütlerle değerlendiriyor. Bu çeşitlilik, “PRP şu kadar etkilidir” diye tek bir rakam söylemeyi olanaksız kılıyor. Önerimiz, PRP’yi cilt kalitesini destekleyebilecek ama yanıtı kişiden kişiye değişen bir seçenek olarak görmenizdir.</p>
    </div>
  </div>
</section>

<!-- ═════ BENTO ═════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Randevu ve iyileşme</p>
      <h2>Randevu günü neler olur, sonraki günlerde ne görürsünüz?</h2>
      <p class="giris">Randevu, kısa bir sağlık sorgusu ve gerekiyorsa kan değerlerinize bakılmasıyla başlar. Uygulamanın kendisi hızlıdır; asıl süreç, cildin sonraki haftalarda vereceği yanıttır.</p>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="100" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>~1 sa</b></div>
        <p><b style="color:var(--murekkep)">Randevu süresi</b><br>Uyuşturucu kremin beklenmesi, kan alma, hazırlık ve uygulama birlikte yaklaşık bir saatlik bir zaman dilimine sığar.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">İlk günler ve sonrası</span>
        <div class="g-cubuk"><small><span>Kızarıklık, hafif şişlik</span><span>1–3 gün</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="20%"></b></div></div>
        <div class="g-cubuk"><small><span>İğne noktalarında morarma</span><span>Bir haftaya dek</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="42%"></b></div></div>
        <div class="g-cubuk"><small><span>Cilt yanıtının izlenmesi</span><span>Haftalar</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="88%"></b></div></div>
        <p style="font-size:.72rem;color:var(--sessiz);margin-top:10px">Çubuk uzunlukları yalnız karşılaştırma içindir; size özel süreler muayenede konuşulur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Adım adım</span>
        <ol class="g-protokol">
          <li>Muayene: cilt tipi, şikâyetin kaynağı, kullandığınız ilaçlar</li>
          <li>Gerekirse tam kan sayımı; trombosit değeri ve kansızlık açısından</li>
          <li>Beklentinin ve verinin sınırlarının konuşulduğu aydınlatma, yazılı onam</li>
          <li>Koldan kan alma ve steril koşullarda santrifüj</li>
          <li>Uygulama; bakım talimatı yazılı verilir, <a href="${r}uygulamalar/uygulama-sonrasi-takip/">kontrol</a> günü belirlenir</li>
        </ol>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">Hekimin notu</span><p>“Seans sayısını artırmak, yanıt vermeyen bir cildin çözümü değildir.”</p></div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/uyg-prp-2.webp" alt="Plazmayı simgeleyen saydam akışkan" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr style="--d:140ms"><h3>Cildinize uygun mu, birlikte bakalım</h3><p>Karar, muayene ve öykünüz değerlendirildikten sonra verilir.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu isteyin</a></div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Hangi durumlarda uygulanmaz, hangilerinde beklenir?</b>
        <p style="margin-bottom:6px"><b>Uygulama yapılmayan durumlar:</b></p>
        <ul>
          <li>Trombositlerin az olduğu ya da görevini yapamadığı kan hastalıkları</li>
          <li>Kanser nedeniyle tedavi görmek ya da tedavi sonrası yakın izlemde olmak</li>
          <li>Uygulanacak alanda uçuk, iltihaplı sivilce, enfeksiyon veya kapanmamış yara</li>
          <li>Karaciğerin ciddi biçimde etkilendiği hastalıklar, düzenlenememiş pıhtılaşma sorunları</li>
          <li>Kana yayılmış, ağır seyirli enfeksiyonlar (sepsis)</li>
          <li>Hamilelik ve bebeğin emzirildiği dönem</li>
        </ul>
        <p style="margin:10px 0 6px"><b>Ertelenen ya da ayrıca planlanan durumlar:</b></p>
        <ul>
          <li>Aspirin benzeri ilaçlar ya da kan sulandırıcılar — ilacı kendi başınıza bırakmayın; gerekiyorsa reçeteyi yazan hekimle konuşulur</li>
          <li>Son günlerde geçirilen ateşli bir hastalık, enfeksiyon ya da yapılan bir aşı</li>
          <li>Kan sayımında trombositin düşük ya da hemoglobinin belirgin azalmış çıkması</li>
          <li>Kol damarlarından kan almanın zor olması ya da iğne karşısında bayılma öyküsü</li>
          <li>Saç seyrelmesi şikâyeti — bu başlık <a href="${r}uygulamalar/sac-prp/">saç PRP</a> kapsamında ayrıca değerlendirilir</li>
        </ul>
      </div>
      <div class="kutu kutu--acil g-b2" data-gr style="--d:70ms">
        <b>Beklemeden başvurmanız gereken durumlar</b>
        <p>İlk günlerdeki hafif kızarıklık ve şişlik her gün biraz daha azalmalıdır. Tersine ağrı artıyor, bölge ısınıyor, iltihaplı bir akıntı ya da büyüyen bir kızarıklık beliriyor veya ateşiniz çıkıyorsa kontrol gününü beklemeden muayenehaneye ulaşın. Soluk almakta güçlük, vücuda yayılan döküntü ya da bayılma hissi acil durumdur: <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ SEANS VE ETKİ ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Seans takvimi</p>
      <h2>Kaç seans planlanır, etkinin süresi neye bağlıdır?</h2>
      <p class="giris">Yüz, boyun, dekolte ve el sırtı cildinde PRP genellikle birkaç seanslık bir dizi hâlinde, aralarında birkaç hafta bırakılarak uygulanır; kaç seans yapılacağı ilk görüşmede sabit bir sayı olarak belirlenmez. Deri hücrelerinin yenilenmesi zaman aldığından, ilk seanstan birkaç gün sonra aynaya bakarak karar vermek doğru olmaz; değerlendirme dizinin ortasında ve sonunda yapılır. Bu kontrollerde üç yol vardır: aynı planla devam etmek, PRP’yi bir cihaz uygulamasıyla birleştirmek ya da diziyi bitirmek. Değişikliğin ne kadar süre korunacağını yaşınız, güneşle ilişkiniz, sigara ve genel sağlığınız belirler; aynı plan iki kişide farklı sonuç verebilir. Saçlı derideki takvim farklıdır ve <a href="${r}uygulamalar/sac-prp/">saç PRP</a> sayfasında ayrıca anlatılmıştır.</p>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Bir soru seçin, yanıtını okuyun</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr')} · prp · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>PRP yüzümdeki çukurlukları doldurur mu?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Kendi kanım kullanıldığına göre hiç risk yok mu?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Ne kadar kan alınıyor, randevu ne kadar sürer?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>“Vampir” diye anılan işlem bu mu?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Saç dökülmem için de aynı işlem mi yapılır?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sayfada yer almıyor?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["PRP yüzümdeki çukurlukları doldurur mu?","Hayır. Plazma hacim oluşturan bir madde değildir; belirgin çöküntü ya da hacim kaybı varsa başka bir planlama gerekir. PRP’de hedeflenen, cildin dokusu, inceliği ve parlaklığı gibi kalite özelliklerinin zaman içinde desteklenmesidir."],["Kendi kanım kullanıldığına göre hiç risk yok mu?","Plazma size ait olduğu için vücudun onu yabancı bir madde gibi algılaması beklenmez; bu önemli bir avantajdır. Ama her iğnenin kendi riski vardır: morluk, birkaç gün süren şişlik, çok seyrek olarak da enfeksiyon. Onam formunda bunları birlikte okuruz."],["Ne kadar kan alınıyor, randevu ne kadar sürer?","Genellikle bir ya da iki küçük tüp yeterlidir; yüzün yanında boyun ve dekolte de planlanmışsa miktar biraz artar. Kanın ayrıştırılması kısa sürer. Asıl zamanı uyuşturucu kremin etkisini göstermesi alır; randevunuzu bir saat civarında düşünebilirsiniz."],["“Vampir” diye anılan işlem bu mu?","Sosyal medyada bu adla dolaşan uygulamaların çoğu, kanın yüze sürülmesini ya da iğneyle verilmesini anlatır ve aslında PRP’dir. Ancak “vampir” sözcüğü işlemi açıklamaz, yalnızca dikkat çeker. Dosyanıza, ne yapıldığını tarif eden tıbbi ad yazılır."],["Saç dökülmem için de aynı işlem mi yapılır?","Hazırlık benzer olsa da saçlı deri ayrı bir değerlendirme ister: önce dökülmenin nedeni araştırılır, seans düzeni ve kontrol zamanı da farklı kurulur. Bu başlık Saç PRP sayfasında ayrıca anlatılmıştır."],["Ücret bilgisi neden sayfada yer almıyor?","Sağlık hizmetlerinin tanıtımını düzenleyen mevzuat gereği ücret bilgisi internette yayımlanmaz. Seans sayısı ve kapsam kişiye göre değiştiği için bu konu muayenede, planınızla birlikte konuşulur."]]</script>

<!-- ═════ KAPANIŞ ═════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Cildinizi önce birlikte değerlendirelim</h2>
    <p class="g-sonalt">Hangi uygulamanın size uygun olduğu, şikâyetiniz ve öykünüz dinlendikten sonra belli olur; ${S.iletisim.semt}’deki muayenehanemiz için randevu talebi bırakabilirsiniz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
