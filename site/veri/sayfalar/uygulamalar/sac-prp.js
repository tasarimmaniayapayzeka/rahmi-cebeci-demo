const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/sac-prp',
  tip: 'tibbi',
  baslik: 'Saç PRP: kendi plazmanızla saçlı deri uygulaması ve sınırı',
  aciklama: 'Saç PRP’de kendi kanınızdan ayrılan plazma saçlı deriye nasıl uygulanır, hangi tetkikler istenir, kimlerde yapılmaz ve dökülmenin nedeni neden önce aranır.',

  icerik: (r, ik) => `
<!-- ═════ HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Saç PRP</span></nav>
      <p class="g-etiket">Saç uygulaması · PRP</p>
      <h1>Saç PRP: <span class="g-isik">kendi kanınızdan hazırlanan plazma</span></h1>
      <p class="g-hero__alt">Saç PRP’de koldan alınan az miktarda kan kapalı bir tüpte santrifüj edilir; trombositten zengin plazma bölümü ayrılarak aynı seansta saçlı deriye uygulanır. Hedeflenen, kıl kökünü çevreleyen dokunun kendi onarım süreçlerinin desteklenmesidir. Yeni saç kökü oluşturmaz ve dökülmenin nedenini araştırmanın yerine geçmez.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu isteyin</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Seyrini okuyun ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Hazırlık ve uygulama aynı seansta</span><span><i></i>Plazma yalnız size ait, saklanmaz</span><span><i></i>Karar kan tetkikiyle birlikte</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-sac-prp.webp" width="1400" height="788" alt="Işıkta parlayan sağlıklı saç tellerinin yakın plan görüntüsü" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- ═════ VERİ BANDI ═════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b>10–20&#8239;ml</b><span>Alınan kan miktarı</span></div>
  <div data-gr style="--d:70ms"><b>40–60&#8239;dk</b><span>Toplam seans süresi</span></div>
  <div data-gr style="--d:140ms"><b>4–6&#8239;hf</b><span>Seanslar arası</span></div>
  <div data-gr style="--d:210ms"><b><em data-gsay="3">0</em>. ay</b><span>İlk değerlendirme</span></div>
</div></div>

<!-- ═════ NEDİR / NE DEĞİLDİR ═════ -->
<section class="bolum bolum--buz2" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Ne yapar, ne yapmaz</p><h2>Saç PRP nedir, neyin yerini tutmaz?</h2><p class="giris">Saç PRP kendi başına bir tedavi planı değildir. Dökülmenin kaynağı ortaya konduktan sonra, plana destek olarak eklenip eklenmeyeceği değerlendirilen bir adımdır.</p></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>Kişinin kendi kanından elde edilen ve trombosit oranı yükseltilmiş plazma, yine aynı kişiye ve aynı randevuda saçlı deriye verilir. Trombositler pıhtılaşmada görev alan küçük kan hücresi parçalarıdır; içlerinde doku onarımına ve yara iyileşmesine katkı veren sinyal molekülleri taşırlar.</p>
<p>Uygulama şöyle ilerler: koldan yaklaşık 10–20 mililitre kan alınır, adınıza etiketlenen kapalı bir tüpte santrifüj edilir ve plazma katmanı ayrılır. Hazırlanan plazma bekletilmeden kullanılır; saklanmaz, başka birine uygulanmaz.</p>
<p><b>Bilimsel kanıta dair açık bir not:</b> çalışmalarda kullanılan hazırlık yöntemleri, trombosit yoğunlukları ve uygulama aralıkları birbirinden farklıdır. Bu yüzden sonuçları birbiriyle kıyaslamak ve her kişiye aynı biçimde uyarlamak mümkün değildir; beklenti bu sınırın içinde konuşulur.</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:80ms">
        <b>Bu ne değildir</b>
        <p><b>Nedeni araştırmanın yerine geçmez:</b> dökülmenin altında demir ya da ferritin eksikliği, tiroid hastalığı, doğum sonrası dönem, yüksek ateşli bir hastalık, sıkı bir diyet ya da bir ilacın yan etkisi varsa PRP bunu ne gösterir ne de düzeltir; önce bu başlıklar ele alınır.</p>
<p>Kaynak ortadan kalkmadan seanslara devam etmek, sorunu yalnızca ileri bir tarihe taşır. <b>Kaybolmuş kökleri geri getirmez:</b> kıl kökünün kalmadığı alanda saç çıkması beklenmez.</p>
<p><b>Saç ekiminin karşılığı değildir:</b> kalıtsal yatkınlıkla ilerlemiş belirgin açılmada tek başına bir çözüm sunmaz; bu durumda <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">ilgili uzmanlık dalı</a> önerilir. <b>Genel sağlığı güçlendiren bir işlem değildir:</b> etkisi uygulandığı alanla sınırlıdır; aktif bir saçlı deri hastalığı varsa önce onun tedavisi yapılır.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ BENTO ═════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Yol haritası</p><h2>Program nasıl kurulur, kaç seans gerekir?</h2><p class="giris">Toplam seans sayısı baştan belli değildir. Önceden sabitlenmiş bir seans dizisi sunulmaz; her ara kontrolde yanıta bakılarak devam, değişiklik ya da bırakma kararı verilir.</p></div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="62" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>3. ay</b></div>
        <p><b style="color:var(--murekkep)">Yanıtın değerlendirilmesi</b><br>Tek seansta fark beklenmez; saç döngüsü aylar sürer ve beklenen yanıt görülmezse program sürdürülmez.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">ZAMAN ÖLÇEĞİ</span>
        <div class="g-cubuk"><small><span>SEANS</span><span>40–60 dk</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="18%"></b></div></div>
        <div class="g-cubuk"><small><span>SEANSLAR ARASI</span><span>4–6 hafta</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="55%"></b></div></div>
        <div class="g-cubuk"><small><span>DEĞERLENDİRME</span><span>3. aydan itibaren</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="90%"></b></div></div>
        <p style="font-size:.7rem;color:var(--sessiz);margin-top:8px">Çubuk boyları yalnız karşılaştırma içindir; asıl plan muayenede belirlenir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Adım adım</span>
        <ol class="g-protokol">
          <li>Muayene: dökülmenin türü, süresi ve yayılımı; saçlı derinin büyütmeli incelenmesi</li>
          <li>Kan tetkiki: trombosit sayısı ve hemoglobin; yakınmaya göre ferritin, tiroid, B12 ve D vitamini</li>
          <li>Bilgilendirme ve yazılı onam; bilimsel kanıtın nerede sınırlandığı konuşulur</li>
          <li>Başlangıç serisi; ara kontrolde yanıta göre devam ya da bırakma kararı</li>
        </ol>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">Hekimin notu</span><p>"Kan tablosunu okumadan plazma hazırlanmaz."</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms"><span class="g-ket">Uygulamadan sonra</span>
        <p style="font-size:.92rem">Aynı gün olağan düzene dönülebilir. İlk yarım gün saçlı deri yıkanmaz, kaşınmaz ve ovalanmaz; şapka, bere ya da sıkı toka takılmaz, kan alınan kolla ağır yük taşınmaz. İki gün boyunca hamam, sauna, havuz, deniz ve yoğun terleten egzersiz ertelenir; saç boyası ve kimyasal işlemler de bu süreden sonraya bırakılır. Sonrasında ılık su ve yumuşak şampuanla normal yıkamaya geçilir; iğne noktaları birkaç gün dokununca duyarlı kalabilir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">BEKLENEBİLECEK ETKİLER</span>
        <p style="font-size:.92rem">Kendi plazmanız kullanıldığı için ürüne karşı aşırı duyarlılık beklenmez; yine de her girişimsel işlemde olduğu gibi istenmeyen etkiler görülebilir. Sık ve kısa süreli: kızarıklık, şişlik, batma, kan alınan yerde morluk. Daha az sık: kan verirken sersemlik, gün içinde geçen bir baş ağrısı, ilk haftalarda dökülen saç miktarında geçici artış. Nadir: uygulama alanında enfeksiyon, uzun süre ele gelen küçük sertlik, kan alınan kolda geçici his azalması.</p>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Kimlere uygulanmaz, hangi durumlarda ertelenir?</b>
        <p>Bir kan ürünüyle çalışıldığı için uygunluk ayrıca dikkatle değerlendirilir ve çoğu zaman öncesinde kan tetkiki istenir.</p>
        <p><b>Bu durumlarda uygulama yapılmaz:</b></p>
        <ul>
          <li>Trombositlerin sayısını ya da çalışmasını etkileyen kan hastalıkları</li>
          <li>Kontrolsüz pıhtılaşma bozukluğu veya ileri evre karaciğer hastalığı</li>
          <li>Tedavisi süren kanser hastalığı</li>
          <li>Saçlı deride aktif enfeksiyon ya da kapanmamış yara</li>
          <li>Gebelik ve emzirme</li>
        </ul>
        <p><b>Ertelenen veya ayrıca planlanan durumlar:</b></p>
        <ul>
          <li>Kan sulandırıcı ya da trombosit işlevini etkileyen ilaç kullanımı</li>
          <li>Belirgin kansızlık veya düşük trombosit sayısı</li>
          <li>Ateşle seyreden bir hastalık, yeni atlatılmış bir enfeksiyon ya da kısa süre önce yapılan aşı</li>
          <li>Kaynağı araştırılmamış dökülme — önce neden ortaya konur</li>
          <li>Damar bulmada güçlük, iğne kaygısı ya da bayılma öyküsü</li>
        </ul>
        <p>Uygulanan plazma size aittir; ancak cildin temizlenmesinde kullanılan antiseptik ve yüzeye sürülen ürünler dışarıdan gelir. Bir ilaca ya da cilde temas eden bir ürüne daha önce tepki verdiyseniz muayenede bunu belirtin.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr><img src="${r}varliklar/foto/prp-tupler.webp" alt="Etiketli kan tüpleri" loading="lazy"></div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr><h3>Önce tablo, sonra plazma</h3><p>Dökülmenin nedeni ve kan değerleri görülmeden bu uygulama planlanmaz.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu isteyin</a></div>
    </div>
  </div>
</section>

<!-- ═════ UYARI + KAPSAM ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="kutu kutu--acil" data-gr>
      <b>Beklemeden başvurmanız gereken durumlar</b>
      <p>Saçlı deride ya da kan alınan kolda giderek artan ağrı, sıcaklık, akıntı, yayılan kızarıklık veya ateş gelişirse kontrol gününü beklemeden muayenehaneyi arayın. Solunum güçlüğü, dudak ya da göz kapaklarında hızla gelişen şişlik veya bayılacak gibi olmayla birlikte yayılan kaşıntılı döküntü acil bir durumdur: <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
    </div>
    <div class="kutu kutu--uyari" data-gr style="margin-top:16px;--d:70ms">
      <b>Uyarı</b>
      <p>Bu sayfa genel bilgi vermek amacıyla hazırlanmıştır. Bir uygulamanın size uygun olup olmadığına ancak muayene ve sağlık öykünüz değerlendirildikten sonra karar verilebilir. Girişimsel işlemlerde sonuç önceden taahhüt edilemez; etkinin ne ölçüde görüleceği ve ne kadar süreceği kişiden kişiye değişir. Amacı bir işlemi tanıtmak ya da sizi bir işleme yönlendirmek değildir.</p>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:16px;--d:140ms">
      <b>Devamı için</b>
      <p><a href="${r}uygulamalar/sac-mezoterapisi/">Saç mezoterapisi</a> sık sık saç PRP ile karıştırılır; oysa ikisinin işleyişi ayrıdır. PRP’de kendi plazmanız kullanılır, kan alınması gerekir ve kan değerleriniz kararı doğrudan etkiler; mezoterapide ise hazır bir karışım verilir ve içeriğe karşı duyarlılık ayrıca sorgulanır.</p>
<p>Bazı planlarda iki uygulama dönüşümlü olarak kullanılabilir. Dökülme türlerinin ayrımı için <a href="${r}cilt-sorunlari/sac-dokulmesi/">saç dökülmesi</a>, yüz cildinde plazma kullanımı için <a href="${r}uygulamalar/prp/">PRP</a>, bölgeye özel bakış için <a href="${r}bolgeler/sacli-deri/">saçlı deri</a>, iyileşmenin izlenmesi için <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası takip</a> sayfalarına bakabilirsiniz.</p>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr')} · saç prp · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Saç PRP ile açılan bölgelerde yeniden saç çıkar mı?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Kendi kanım kullanıldığına göre risk yok mu?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Kaç seans gerekir?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Uygulama günü aç gelmem gerekir mi?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>İlk haftalarda dökülme artarsa ne yapmalıyım?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nasıl öğrenirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Saç PRP ile açılan bölgelerde yeniden saç çıkar mı?","Böyle bir söz vermiyoruz. Kökü kaybolmuş saçlar bu uygulamayla geri gelmez. Değerlendirdiğimiz, PRP’nin mevcut tabloda destekleyici bir adım olarak yer alıp alamayacağıdır; bu karar da dökülmenin nedeni belli olduktan sonra verilir."],["Kendi kanım kullanıldığına göre risk yok mu?","Kendi plazmanızın kullanılması, ürüne karşı aşırı duyarlılık olasılığını büyük ölçüde azaltır; tüpteki pıhtı önleyici madde, cildi temizleyen antiseptik ve yüzeye sürülen ürünler ise dışarıdan gelir. Kan alma, iğneyle uygulama ve hijyenle ilgili istenmeyen durumlar da yine görülebilir. Bunların hepsi uygulamadan önce tek tek anlatılır ve onam formunda yer alır."],["Kaç seans gerekir?","Muayeneden önce bir sayı söylemek doğru olmaz. Başlangıç serisinde seanslar çoğunlukla dört ila altı hafta arayla yapılır; toplam sayı ara kontrolde görülen yanıta göre belirlenir. Tahmine dayalı bir seans sayısı plan yerine geçmez."],["Uygulama günü aç gelmem gerekir mi?","Hayır. Kahvaltınızı yapmış ve yeterince su içmiş olmanız kan almayı kolaylaştırır, baş dönmesi olasılığını da azaltır. Düzenli aldığınız ilaçları, özellikle kanı sulandıranları, bir kâğıda yazıp getirmeniz yeterlidir."],["İlk haftalarda dökülme artarsa ne yapmalıyım?","İlk haftalarda dökülmenin geçici olarak belirginleşmesi bildirilen bir durumdur ve çoğunlukla kendiliğinden yatışır. Artış belirgin ve sürekliyse kontrol randevusunu öne alın; altta yatan bir nedenin sürüp sürmediği yeniden gözden geçirilir."],["Ücret bilgisini nasıl öğrenirim?","Sağlık hizmetlerinde tanıtımı düzenleyen mevzuat, ücret bilgisinin internet sitesinde yayımlanmasına izin vermez. Planın kapsamı kişiden kişiye değiştiği için bu bilgi muayenede size özel olarak paylaşılır."]]</script>

<!-- ═════ KAPANIŞ ═════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Önce kan tablosu, sonra plan</h2>
    <p class="g-sonalt">Dökülmenin nedeni ve kan değerleriniz görülmeden saç PRP planlanmaz. ${S.iletisim.adres}, ${S.iletisim.ilce}.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
