const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/selulit-gorunumu',
  tip: 'tibbi',
  baslik: 'Selülit görünümü: mezoterapi, lipoliz ve cihaz planı',
  aciklama: 'Selülit bir hastalık değil, doku görünümüdür. Mezoterapi, lipoliz ve cihaz basamaklarıyla görünümün düzelmesi hedeflenir; diyetin yerine geçmez.',

  icerik: (r, ik) => `
<!-- HERO -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Selülit görünümü</span></nav>
      <p class="g-etiket">Enjeksiyon Uygulamaları · Selülit Görünümü</p>
      <h1>Selülit bir hastalık değil, <span class="g-isik">bir doku görünümüdür</span>.</h1>
      <p class="g-hero__alt">Selülit, deri altındaki yağ bölmelerinin, deriyi alttaki dokulara bağlayan ince bağ dokusu bantlarının arasından yukarı doğru kabarmasıyla oluşan pürüzlü görünümdür. Muayenehanemizde mezoterapi, bölgesel lipoliz ve cihaz basamaklarının kişiye göre birleştirildiği bir planla görünümün düzelmesi hedeflenir. Kilo vermenin ya da beslenme düzeninin yerine geçmez.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Nasıl çalışır? ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Hastalık değil, görünüm</span><span><i></i>Basamaklı, kişiye özel plan</span><span><i></i>İlk değerlendirme 2.–3. ayda</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-selulit-gorunumu.webp" width="1400" height="788" alt="Uyluk arka yüzünde hafif pürüzlü cilt dokusunun yumuşak ışıkta yakın planı" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
    </div>
  </div>
</section>

<!-- VERİ BANDI -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="3">0</em></b><span>Birleştirilebilen yöntem</span></div>
  <div data-gr style="--d:70ms"><b>1–4&#8239;hf</b><span>Yönteme göre seans aralığı</span></div>
  <div data-gr style="--d:140ms"><b>8–12&#8239;hf</b><span>İlk ara değerlendirme</span></div>
  <div data-gr style="--d:210ms"><b>0–3</b><span>Görünümün derecelendirildiği evre</span></div>
</div></div>

<!-- BU NEDİR / BU NE DEĞİLDİR -->
<section class="bolum" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Tanım ve kapsam</p><h2>Selülit nedir, neden zayıf kişilerde de görülür?</h2><p class="giris">Selülit, ergenlikten sonra kadınların büyük çoğunluğunda bir ölçüde görülür ve kiloyla doğrudan ilişkili değildir. Nedenleri ve evreleri <a href="${r}cilt-sorunlari/selulit/">selülit görünümü</a> sayfasında ayrıca anlatılmıştır.</p></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>Deri, alttaki kas zarına dikey uzanan ince bağ dokusu bantlarıyla tutturulmuştur. Bantların arasında kalan yağ bölmeleri yukarı doğru itilirken bantlar deriyi aşağı çektiğinde yüzeyde çukurcuklar ve kabarıklıklar belirir; “portakal kabuğu” benzetmesi buradan gelir. Kadınlarda bu bantların dizilimi görünüme daha yatkındır; hormonlar, kalıtım, dolaşım ve kilo değişimleri de etkilidir.</p>
<p>Tek bir yöntem bu bileşenlerin hepsine yanıt vermediği için plan basamaklardan oluşur: deri altına ince iğnelerle verilen <a href="${r}uygulamalar/mezoterapi/">mezoterapi</a> karışımları, eşlik eden sınırlı yağ fazlası varsa <a href="${r}uygulamalar/bolgesel-lipoliz/">bölgesel lipoliz</a>, deri sıkılığını desteklemek için <a href="${r}uygulamalar/altin-igne-radyofrekans/">altın iğne radyofrekans</a> gibi radyofrekans temelli bir cihaz basamağı ya da <a href="${r}uygulamalar/ignesiz-mezoterapi/">iğnesiz mezoterapi</a>. Hangisinin, hangi sırayla kullanılacağı muayenede belirlenir.</p>
<p>En sık uyluğun arka ve yan yüzü, kalça ve karnın alt bölümü değerlendirilir. Bölgeye göre ayrıntı <a href="${r}bolgeler/vucut/">vücut</a> sayfasındadır.</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:80ms">
        <b>Bu ne değildir</b>
        <p>Bir hastalık değildir ve “tedavi edilmesi gereken” bir durum gibi sunulmamalıdır; pek çok kişide yaşam boyu bir ölçüde bulunur. Kilo verme ya da diyet programının yerini tutmaz: beslenme, düzenli hareket ve kilo dengesinin görünüm üzerindeki etkisi uygulamalardan bağımsızdır. Tıpta aynı adla anılan <b>selülit enfeksiyonu</b> ise bambaşka bir tablodur; derinin kızarık, sıcak, ağrılı ve şiş olduğu bu bakteriyel enfeksiyon beklemeden hekime başvurmayı gerektirir.</p>
<p>Uygulamalar doku yapısını ortadan kaldırmaz; hedef, yüzeyin daha düzgün görünmesidir ve değişikliğin derecesi kişiden kişiye değişir, bazen sınırlı kalır. Deri gevşekliği ve belirgin sarkma öndeyse bu plan yeterli olmaz; o durumda farklı sıkılaştırma yöntemleri ya da cerrahi görüş konuşulur. Görünüm zamanla ve yaşla yeniden belirginleşebilir. Yağ birikimi ile selülit arasındaki fark için <a href="${r}cilt-sorunlari/bolgesel-yaglanma/">bölgesel yağlanma</a> sayfasına bakabilirsiniz.</p>
      </div>
    </div>
  </div>
</section>

<!-- BENTO -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Planlama</p><h2>Plan nasıl kurulur, kimlere uygulanmaz?</h2><p class="giris">İlk görüşmede bölge ayakta, yatarken ve deri hafifçe sıkıştırılarak incelenir; görünümün evresi ile eşlik eden yağ ya da gevşeklik plana yön verir.</p></div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="50" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>3</b></div>
        <p><b style="color:var(--murekkep)">Basamaklı plan</b><br>Mezoterapi, lipoliz ve cihaz basamakları herkese birlikte uygulanmaz; bulgulara göre biri, ikisi ya da üçü seçilir ve sıraya konur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Takvim</span>
        <div class="g-cubuk"><small><span>SEANS SONRASI</span><span>Morarma, hassasiyet</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="20%"></b></div></div>
        <div class="g-cubuk"><small><span>2. AY</span><span>Ara değerlendirme</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="60%"></b></div></div>
        <div class="g-cubuk"><small><span>3. AY</span><span>Planın gözden geçirilmesi</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="92%"></b></div></div>
        <p style="font-size:.68rem;color:var(--sessiz);margin-top:8px">Çubuk uzunlukları yalnız karşılaştırma içindir; size özel süreler muayenede konuşulur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Protokol</span>
        <ol class="g-protokol">
          <li>Muayene: ayakta, yatarken ve sıkıştırma testiyle evrenin belirlenmesi</li>
          <li>Eşlik eden yağ fazlası, ödem, varis ve deri gevşekliğinin ayrılması</li>
          <li>Sağlık öyküsü, ilaçlar ve yazılı onam</li>
          <li>Basamakların seçimi, sıralanması ve seanslar</li>
          <li>İki–üç ay sonra ara değerlendirme ve planın güncellenmesi</li>
        </ol>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Kimlere uygulanmaz, hangi durumlarda beklenir?</b>
        <p>Gebelik ve emzirme döneminde hiçbir basamak planlanmaz. Uygulama alanında enfeksiyon, açık yara, egzama alevlenmesi ya da yakın zamanda yapılmış bir ameliyat kesisi varsa iyileşme beklenir. Bölgede kızarık, sıcak ve ağrılı bir şişlik varsa bu estetik değil tıbbi bir tablodur ve önce tedavi edilir.</p>
<p>Bacakta belirgin varis, derin toplardamar pıhtısı öyküsü, nedeni bilinmeyen ödem ya da lipödem şüphesi varsa önce bu durumlar değerlendirilir; kalp veya böbrek kaynaklı ödemde uygulama yapılmaz. Kan sulandırıcı kullanıyorsanız ya da pıhtılaşma sorununuz varsa bunu belirtin; ilacınızı kendi başınıza bırakmayın. Mezoterapi ya da lipoliz içeriğine karşı daha önce aşırı duyarlılık yaşadıysanız mutlaka söyleyin.</p>
<p>Cihaz basamağı için kalp pili ya da vücuda yerleştirilmiş başka bir elektronik cihaz, uygulama alanında metal implant, his kaybı olan bölgeler ve süren kanser tedavisi ayrıca değerlendirilir; bu durumlarda radyofrekans basamağı çoğu zaman plandan çıkarılır. Kontrolsüz şeker hastalığı ve bağışıklığı baskılayan tedavilerde karar, sizi izleyen hekimin görüşüyle verilir.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/uyg-selulit-gorunumu-2.webp" alt="Uyluk ve kalça hattının yandan, doğal ışıkta görünümü" loading="lazy"><span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span></div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">İlke</span><p>“Pürüzsüz bir yüzey değil, daha düzgün bir görünüm hedeflenir; beklenti buna göre kurulur.”</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Seans sonrası</span>
        <p style="font-size:.92rem">Sık görülenler: iğne noktalarında küçük kabarcıklar ve morluk, birkaç gün süren hassasiyet; lipoliz yapılan alanda şişlik, sıcaklık ve ele gelen sertlik; cihaz basamağından sonra kızarıklık ve ısınma hissi. Arada bir görülenler: uzun süren morluk, kaşıntı, yüzeyde geçici düzensizlik ya da renk değişikliği. Seyrek ama ciddiye alınması gerekenler: enfeksiyon, kalıcı sertlik (nodül), deride yara ya da cihaza bağlı yanık; hepsi onam sırasında tek tek konuşulur. İlk günlerde sıcak banyo, sauna, ağır spor ve sıkı giysiye ara verilir. Kazanılan değişikliğin ne kadar süreceğini kilo dengesi ve hareket düzeni belirler; aynı plan her bedende aynı sonucu vermez.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr style="--d:140ms"><h3>Evrenizi birlikte belirleyelim</h3><p>Plan, bölge görülmeden ve evre belirlenmeden önerilmez.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu talebi</a></div>
      <div class="kutu kutu--acil g-b6" data-gr>
        <b>Hemen arayın</b>
        <p>Uygulama alanında giderek büyüyen, sıcak ve ağrılı bir kızarıklık, ateş, akıntı, deride kararma ya da su toplaması fark ederseniz kontrol gününü beklemeden ${S.iletisim.tel} numarasından muayenehaneye ulaşın. Bacakta tek taraflı, ani başlayan şişlik ve ağrı, nefes darlığı ya da göğüs ağrısı olursa doğrudan <b>112</b>’yi arayın veya size en yakın acil servise gidin.</p>
      </div>
    </div>
  </div>
</section>

<!-- SORU TERMİNALİ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sorgulayın</p><h2>Bir soru seçin, yanıtını okuyun</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr')} · selülit görünümü · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Selülitten tamamen kurtulabilir miyim?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Zayıflarsam selülit geçer mi?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Mezoterapi, lipoliz ve cihaz birlikte mi yapılıyor?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Değişikliği ne zaman görürüm?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Selülit ile selülit enfeksiyonu aynı şey mi?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sayfada yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekim onaylı yanıt</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede konuşalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Selülitten tamamen kurtulabilir miyim?","Bu soruya dürüst yanıt hayırdır. Selülit bir doku yapısı olduğu için uygulamalarla hedeflenen, yüzeyin daha düzgün görünmesidir; değişikliğin ne kadar olacağı evreye, deri yapısına ve yaşam düzenine göre değişir. Zamanla görünüm yeniden belirginleşebilir."],["Zayıflarsam selülit geçer mi?","Kilo vermek bazı kişilerde görünümü hafifletir, bazılarında ise deri gevşekliği nedeniyle fark yaratmaz. Selülit ince kişilerde de görülür, çünkü asıl belirleyici deri altındaki bağ dokusu bantlarının yapısıdır. Beslenme ve hareket yine de planın doğal bir parçasıdır."],["Mezoterapi, lipoliz ve cihaz birlikte mi yapılıyor?","Herkese üçü birden uygulanmaz. Yüzeydeki pürüz öndeyse mezoterapi ve cihaz basamağı, eşlik eden belirgin yağ birikimi varsa lipoliz öne çıkar. Seçim ve sıralama muayene bulgularına göre yapılır, ara kontrolde de güncellenir."],["Değişikliği ne zaman görürüm?","Bağ dokusu ve cilt yavaş yanıt verdiği için ilk ara değerlendirme genellikle iki–üç ay sonra yapılır. Seanslardan sonraki şişlik ve morarma bu değerlendirmeyi yanıltabileceğinden erken dönemde karar verilmez."],["Selülit ile selülit enfeksiyonu aynı şey mi?","Hayır. Estetik anlamda selülit, deri yüzeyindeki pürüzlü görünümü anlatır ve ağrı yapmaz. Tıpta aynı adla anılan enfeksiyon ise derinin kızarık, sıcak, ağrılı ve şiş olduğu, çoğu zaman ateşle seyreden bakteriyel bir tablodur ve beklemeden hekime başvurmayı gerektirir."],["Ücret bilgisi neden sayfada yok?","Sağlık hizmetlerinin tanıtımına ilişkin kurallar gereği ücret bilgisi internette paylaşılmaz. Hangi basamakların, kaç seans uygulanacağı kişiye göre değiştiği için bu konu muayenede, planınızla birlikte konuşulur."]]</script>

<!-- KAPANIŞ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Gerçekçi bir hedefle başlayalım</h2>
    <p class="g-sonalt">Deri gevşekliği ön plandaysa ya da beklenti dokunun tümüyle ortadan kalkmasıysa bu plan önerilmez; bunu ilk görüşmede açıkça konuşuruz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesini doldurun</a>
    </div>
  </div>
</section>
`,
};
