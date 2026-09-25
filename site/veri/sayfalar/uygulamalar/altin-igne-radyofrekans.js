const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/altin-igne-radyofrekans',
  tip: 'tibbi',
  baslik: 'Altın iğne radyofrekans: akne izi ve gözenekte plan',
  aciklama: 'Altın iğne radyofrekans uygulamasında enerji mikroiğne uçlarından derinin alt katmanına verilir. Akne izi, gözenek ve doku için seans planı muayenede kurulur.',

  icerik: (r, ik) => `
<!-- HERO -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Altın iğne radyofrekans</span></nav>
      <p class="g-etiket">Cihaz ve Lazer · Akne İzi ve Doku</p>
      <h1>Altın iğne radyofrekans: ısıyı <span class="g-isik">derinin içinde</span> üreten mikroiğne.</h1>
      <p class="g-hero__alt">Radyofrekans enerjisi burada deri yüzeyine değil, deriye giren çok ince iğnelerin uçlarına taşınır. Isı, iğne ucunun durduğu yerde oluşur; üst katman büyük ölçüde sağlam kalırken derinde bir onarım süreci tetiklenir. En çok akne izi, belirgin gözenek ve pürüzlü doku için gündeme gelir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu isteyin</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Yöntemin işleyişi ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Steril, tek kullanımlık uç</span><span><i></i>Yüzey büyük ölçüde korunur</span><span><i></i>4. haftada kontrol</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-altin-igne-radyofrekans.webp" width="1400" height="788" alt="Deri katmanlarının içinde altın renkli küçük ısı odaklarını gösteren üç boyutlu çizim" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- VERİ BANDI -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="3">0</em></b><span>Bölgeye göre derinlik düzeyi</span></div>
  <div data-gr style="--d:70ms"><b>3–6</b><span>Seans, iz tedavisinde olağan dizi</span></div>
  <div data-gr style="--d:140ms"><b>4–6&#8239;hf</b><span>İki seans arası</span></div>
  <div data-gr style="--d:210ms"><b>30–60&#8239;dk</b><span>Tüm yüzde seans süresi</span></div>
</div></div>

<!-- BU NEDİR / BU NE DEĞİLDİR -->
<section class="bolum" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Ne yapar, ne yapmaz</p><h2>Radyofrekans mikroiğne deriye ne yapar, neyi yapamaz?</h2><p class="giris">İki kişinin akne izi aynaya aynı yansısa bile izin biçimi, derinliği ve altındaki bağ dokusu çekintileri farklı olabilir. Bu yüzden önce izin türü adlandırılır, yöntem ondan sonra seçilir. Konuya genel bakış için önce <a href="${r}cilt-sorunlari/akne-ve-akne-izi/">akne ve akne izi</a> ya da <a href="${r}cilt-sorunlari/gozenek-ve-cilt-dokusu/">gözenek ve cilt dokusu</a> sayfasını okumanız yararlı olur.</p></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>İnce iğneler seçilen derinliğe kadar ilerler ve radyofrekans akımı uçlardan dokuya geçer. Doku akıma direnç gösterdiği için enerji ısıya dönüşür; her ucun çevresinde küçük bir ısı odağı oluşur.</p>
<p>Böylece tek seansta iki uyarı birlikte verilir: iğnenin açtığı mikro kanalın mekanik etkisi ve ısının tetiklediği onarım. Gövdesi yalıtılmış uçlarda akım yalnızca iğnenin ucundan çıkar ve yüzey daha az ısınır; koyu tenlerde ton değişikliği riskini azaltmak için bu ayrıntı önemlidir.</p>
<p>Derinlik, milimetrenin altından birkaç milimetreye kadar bölgeye göre ayarlanır. Adındaki “altın”, bazı uçlarda iğnelerin ince bir altın tabakasıyla kaplanmasına işaret eder; bu kaplama metal duyarlılığını azaltmak içindir, etkiyi güçlendirdiği anlamına gelmez.</p>
<p><b>Kullanılan cihaz:</b> RF mikroiğne (Allura VI++).</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:80ms">
        <b>Bu ne değildir</b>
        <p>Akne izlerini silen bir işlem değildir. Seanslar sonunda umulan, çukurların kenarındaki keskin geçişin azalması ve yan ışıkta gölgelerin hafiflemesidir; değişimin derecesi izin türüne bağlıdır. Buz kıracağı ucu gibi dar ve derin izler bu yöntemle tek başına yeterince yanıt vermez, önce ayrı bir hazırlık gerekebilir. Kabarık izler ve keloid ise hedef dışıdır; ısı bu izleri daha belirgin hâle getirebilir.</p>
<p>Sivilceler aktifken iz dönemine geçilmez; önce akne hekim planıyla yatıştırılır. Yüzeyi mikro alanlarda açan <a href="${r}uygulamalar/fraksiyonel-lazer/">fraksiyonel lazerden</a> farkı, enerjinin deri yüzeyinden değil iğne ucundan verilmesidir; yüzey daha az etkilendiği için koyu tenlerde tercih nedeni olabilir, buna karşılık derin ayarlarda iyileşme uzar.</p>
      </div>
    </div>
  </div>
</section>

<!-- BENTO -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Plan nasıl kurulur</p><h2>Ayar neye göre seçilir, uygulamaya ne engel olur?</h2><p class="giris">Alında deri ince, yanakta ve çene hattında daha kalındır; ayar bu farka göre bölge bölge değiştirilir. Daha derine inmek daha güçlü bir uyarı demektir, ama iyileşme de o ölçüde uzar.</p></div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="66" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>3–6</b></div>
        <p><b style="color:var(--murekkep)">Dizinin uzunluğu</b><br>İzler için planlanan dizi çoğunlukla üç–altı seanstır; ilk iki seanstaki tepki, dizinin kısalıp uzayacağını gösterir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Derinlik ayarı</span>
        <div class="g-cubuk"><small><span>İNCE DERİ: ALIN, ŞAKAK</span><span>Sığ</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="20%"></b></div></div>
        <div class="g-cubuk"><small><span>YANAK ORTASI</span><span>Orta</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="55%"></b></div></div>
        <div class="g-cubuk"><small><span>ÇUKUR İZLİ ALAN</span><span>Derin</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="92%"></b></div></div>
        <p style="font-size:.68rem;color:var(--sessiz);margin-top:8px">Çubuk boyları yalnız karşılaştırma içindir; size özel plan muayenede kurulur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Adım adım</span>
        <ol class="g-protokol">
          <li>İzlerin tek tek haritalanması, gerçekçi beklentinin konuşulması</li>
          <li>Cilt hassas ya da lekeliyse birkaç haftalık ön bakım</li>
          <li>Onam formunun birlikte okunup imzalanması</li>
          <li>Uyuşturucu krem etkisini gösterince tek kullanımlık steril uçla çalışma</li>
          <li>Soğuk uygulama, bakım notu ve dördüncü haftada kontrol</li>
        </ol>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Uygulamaya engel olan ya da bekleten durumlar</b>
        <p>Vücudunuzda elektrikle çalışan bir cihaz, örneğin kalp pili, şok cihazı ya da benzeri bir implant varsa radyofrekans akımı kullanılmaz. Bölgede metal plaka, vida, kalıcı dolgu maddesi veya başka bir yapay malzeme varsa muayenede mutlaka söyleyin.</p>
<p>Yüzde iltihaplı sivilce, uçuk, alevlenmiş egzama, güneş yanığı ya da açık yara varken iğne ve ısı iyileşmeyi bozabileceği için önce deri toparlanır. Akne için isotretinoin kullandıysanız bırakma tarihinizi söyleyin; ne kadar bekleneceğine hekim karar verir.</p>
<p>Kabarık iz ya da keloid yapma eğilimi, vitiligo gibi renk kaybıyla giden tablolar, gebelik ve emzirme, şekeri düzensiz seyreden diyabet, bağışıklığı baskılayan ilaçlar, kanama eğilimi ve kan sulandırıcı kullanımı planı değiştirir. Altın, nikel gibi metallere, uyuşturucu kremlere ya da ilaçlara karşı bilinen duyarlılığınızı işlemden önce bildirin.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/uyg-altin-igne-radyofrekans-2.webp" alt="Altın kaplama ince iğneli radyofrekans başlığının yakın görünümü" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">Hekimin notu</span><p>"İzin adını koymadan yöntem seçmiyoruz."</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Seans sonrası</span>
        <p style="font-size:.92rem">İlk iki gün cilde yalnızca yumuşak bir temizleyici, nemlendirici ve güneş koruyucu sürülür; asit ve retinoid içeren ürünlere birkaç gün ara verilir, makyaj çoğunlukla ikinci günden sonra yapılabilir. Yüzdeki pembelik genellikle üçüncü güne kadar solar; ilk gece hafif şişlik olabilir ve iğne noktalarında ince kabuklar görülebilir. Değişim çoğu kişide ikinci seanstan sonra fark edilmeye başlar ve dizi bittikten sonra üç aya kadar sürebilir. Sonuçlar kişiden kişiye değişir.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr style="--d:140ms"><h3>İzlerinize birlikte bakalım</h3><p>Yöntem, izlerin biçimi ve derinliği görüldükten sonra seçilir.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu isteyin</a></div>
      <div class="kutu kutu--acil g-b6" data-gr>
        <b>Beklemeden bize ulaşmanız gereken durumlar</b>
        <p>Birkaç gün içinde yatışması beklenen bulgular tersine artıyorsa, yani kızarıklık yayılıyor, ağrı şiddetleniyor, akıntı, ateş, kabarcık ya da uzayan şişlik görülüyorsa kendiliğinden geçmesini beklemeyin. ${S.iletisim.tel} numarasından bize ulaşın; telefonla ulaşamıyorsanız en yakın acil servise gidin. Kontrol ve izlem düzenini <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası takip</a> sayfasında bulabilirsiniz.</p>
      </div>
    </div>
  </div>
</section>

<!-- SORU TERMİNALİ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLowerCase()} · altın iğne · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>İzlerim ne ölçüde düzelir?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Fraksiyonel lazerden farkı nedir?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>İşlem acıtır mı?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Seanstan kaç gün sonra işe dönebilirim?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Koyu tenlerde güvenle yapılabilir mi?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nasıl öğrenebilirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["İzlerim ne ölçüde düzelir?","İzlerin tümüyle kaybolması beklenmez. Çoğu kişide iz kenarları yumuşar ve yüz ışıkta daha düzgün görünür; değişimin derecesi izin türüne bağlıdır. İğne ucu gibi dar izler bu yönteme en az yanıt veren gruptur. Muayenede izlerinizin türü ve sizin için gerçekçi olan değişim birlikte konuşulur."],["Fraksiyonel lazerden farkı nedir?","Fraksiyonel lazer enerjiyi deri yüzeyinden verir ve bazı modlarda yüzeyi mikro alanlarda açar. Altın iğne radyofrekansta enerji iğne uçlarıyla doğrudan alt katmana taşınır, yüzey daha az etkilenir. Hangisinin uygun olduğunu iz türü, cilt tonu ve iyileşmeye ayırabileceğiniz süre belirler; bazen ikisi aynı planda sırayla yer alır."],["İşlem acıtır mı?","Uyuşturucu krem etkisini gösterdikten sonra başlanır; yine de batma, ısınma ve baskı hissedilebilir. En çok alın ile çene kenarında hissedilir; orada deri ile kemik arasında yumuşak doku azdır. Rahatsızlık artarsa enerji düşürülür ya da ara verilir."],["Seanstan kaç gün sonra işe dönebilirim?","Çoğu kişi ertesi gün işine dönebilir; kızarıklık genellikle bir ile üç gün içinde solar, ilk gece hafif şişlik eşlik edebilir. Önemli bir davetiniz varsa seansı en az birkaç gün öncesine alın. Derin ayarlarda kızarıklık daha uzun sürebilir."],["Koyu tenlerde güvenle yapılabilir mi?","Enerji yüzeyden değil iğne ucundan verildiği için koyu tenlerde değerlendirilebilir. Yine de ton değişikliği olasılığı tümüyle ortadan kalkmaz; temkinli ayarlarla başlanır, gerekirse önce küçük bir alanda deneme yapılır."],["Ücret bilgisini nasıl öğrenebilirim?","Sağlık hizmetlerinin tanıtımını düzenleyen kurallar ücretlerin internette yayımlanmasına izin vermez. Seans sayısı ve çalışılacak alan kişiye göre değiştiği için bu konu muayenede konuşulur."]]</script>

<!-- KAPANIŞ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>İzlerinizin türünü birlikte adlandıralım</h2>
    <p class="g-sonalt">Hangi yöntemin işe yarayacağı, izlerinizin biçimine, derinliğine ve cilt tonunuza göre değişir.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
