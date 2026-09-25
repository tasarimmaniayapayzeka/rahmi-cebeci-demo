const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/pico-lazer-leke',
  tip: 'tibbi',
  baslik: 'Pico lazer ile leke: önce leke tipi, sonra uygulama',
  aciklama: 'Pikosaniye lazerle yüzeysel pigment lekelerinde önce lekenin tipi incelenir. Melazmada neden temkinli olunduğu, güneş korumasının rolü ve seans sonrası.',

  icerik: (r, ik) => `
<!-- HERO -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Pico lazer ile leke</span></nav>
      <p class="g-etiket">Cihaz ve Lazer · Cilt Tonu ve Leke</p>
      <h1>Pico lazerle leke: atımdan önce <span class="g-isik">lekenin adı</span> konur.</h1>
      <p class="g-hero__alt">Pikosaniye lazer, derinin üst katmanlarında kümelenmiş melanin pigmentini çok kısa atımlarla hedef alır. Ancak ciltteki her koyu alan aynı kökenden gelmez ve hepsi lazere uygun değildir. Bu yüzden ilk iş, her lekeye büyütmeli ışık altında tek tek bakmaktır; adı konamayan bir lekeye atım yapılmaz.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu isteyin</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Yöntemin işleyişi ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Büyütmeli inceleme ilk adım</span><span><i></i>Tipi belirsiz lekeye atım yok</span><span><i></i>Güneş koruması zorunlu</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-pico-lazer-leke.webp" width="1400" height="788" alt="Yanak cildinde dağınık, açık kahverengi yüzeysel lekelerin yumuşak ışıkta yakın planı" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- VERİ BANDI -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="6">0</em></b><span>İncelemede ayrılan leke tipi</span></div>
  <div data-gr style="--d:70ms"><b><em data-gsay="5">0</em></b><span>Adımda kurulan plan</span></div>
  <div data-gr style="--d:140ms"><b>İlk iş</b><span>Lekeyi büyüterek incelemek</span></div>
  <div data-gr style="--d:210ms"><b>Her gün</b><span>Güneş koruması</span></div>
</div></div>

<!-- BU NEDİR / BU NE DEĞİLDİR -->
<section class="bolum" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Ne yapar, ne yapmaz</p><h2>Pico lazer lekeye nasıl etki eder, nerede durur?</h2><p class="giris">Yanaktaki kahverengi bir alan, yıllarca güneşe çıkmanın bıraktığı bir lentigo olabileceği gibi geçmiş bir sivilcenin ardından kalan koyulaşma, hormonlarla ilişkili melazma ya da seyrek de olsa kötü huylu bir lezyonun erken hâli olabilir. Aynaya bakarak bunları ayırmak mümkün değildir. Olası nedenleri <a href="${r}cilt-sorunlari/cilt-tonu-ve-leke/">cilt tonu ve leke</a> sayfasında anlattık.</p></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>Pikosaniye atımlar melanin kümelerinde ani bir basınç etkisi yaratır ve pigmenti küçük parçalara ayırır; parçalar derinin yenilenmesi ve savunma hücreleri aracılığıyla zamanla uzaklaşır. Atım çok kısa olduğundan çevre dokunun ısınması sınırlı tutulur. Bu, iltihap sonrası koyulaşma olasılığını azaltmayı amaçlar ama ortadan kaldırmaz.</p>
<p>Güneşe bağlı yüzeysel lentigolar en öngörülebilir gruptur. Çiller çoğu zaman uygulama gerektirmez ve her yaz yeniden belirir; seboreik keratoz ise deri yüzeyinde kabarık bir büyümedir, pigment kümesi değildir. Sivilce sonrası koyulaşmada önce sivilcenin durması gerekir; melazma ve ayırt edilemeyen lekeler lazerden önce inceleme konusudur.</p>
<p>Koyu tende derinin kendi pigmenti de enerjiyi soğurduğu için istenmeyen ton değişikliği olasılığı yükselir; düşük enerjiyle ve önce küçük bir deneme alanında çalışılır, bazen uygulama hiç önerilmez. Kullanılan pikosaniye lazer, <a href="${r}uygulamalar/pico-lazer-dovme-silme/">dövme silme</a> sayfasında tanıtılan cihazdır.</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:80ms">
        <b>Bu ne değildir</b>
        <p>Amacı cildin genel rengini açmak değildir; lazer yalnızca adı konmuş bir pigment kümesine yöneltilir, çevresindeki sağlıklı deriye değil. Lekeyi oluşturan nedeni de durdurmaz: her yaz korumasız güneşlenen, hormonal ilaç kullanmayı sürdüren ya da sivilceleri sık iltihaplanan birinde yeni lekeler çıkması beklenir. Bazı lekelerde işe yaramaz, bazılarında görünümü kötüleştirebilir.</p>
<p>Melazma ayrı bir başlıktır. Isıya, güneşe ve hormonlara duyarlı bu lekede lazer ilk düşünülen yol olmaz; ayar uygun değilse leke birkaç hafta açılıp sonra öncekinden koyu dönebilir, bazen alacalı açık noktalar kalabilir. Sıra şöyledir: her gün geniş spektrumlu ve renkli güneş koruyucu, sıcak ortamlardan kaçınma, hormonal ilaçların gözden geçirilmesi, gerekirse hekim önerisiyle krem tedavisi. Lazer ancak bu düzen aylarca sürdürüldükten sonra, düşük enerjiyle konuşulur. Hormon ve ilaç öyküsünün nasıl ele alındığını <a href="${r}uygulamalar/hekim-muayenesi/">hekim muayenesi</a> sayfasında bulabilirsiniz.</p>
      </div>
    </div>
  </div>
</section>

<!-- BENTO -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Plan nasıl kurulur</p><h2>Lazerden önce neler yapılır, hangi durumlar bekletir?</h2><p class="giris">Kuşkulu bir lekeye atım yapmak, olası bir hastalığın fark edilmesini geciktirir ve sonradan yapılacak incelemeyi zorlaştırır. Bu yüzden her plan, yüzdeki ve ellerdeki lekelerin tek tek işaretlendiği bir haritayla başlar.</p></div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="60" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>6 tip</b></div>
        <p><b style="color:var(--murekkep)">Altı ayrı yol</b><br>Lentigodan melazmaya, sık görülen altı leke tipinin her biri başka bir yaklaşım ister; lazer bunların yalnız bir kısmında gündeme gelir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Leke tipine göre uygunluk</span>
        <div class="g-cubuk"><small><span>YÜZEYSEL GÜNEŞ LEKESİ</span><span>Yanıt daha belirgin</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="85%"></b></div></div>
        <div class="g-cubuk"><small><span>SİVİLCE SONRASI KOYULAŞMA</span><span>Önce sivilce durmalı</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="45%"></b></div></div>
        <div class="g-cubuk"><small><span>MELAZMA</span><span>Son basamak, düşük enerji</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="15%"></b></div></div>
        <p style="font-size:.68rem;color:var(--sessiz);margin-top:8px">Çubuk boyları yalnız karşılaştırma içindir; size özel plan muayenede kurulur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Adım adım</span>
        <ol class="g-protokol">
          <li>Hikâye: leke ne zaman çıktı, büyüdü mü, yazın koyulaşıyor mu?</li>
          <li>Büyütmeli ışıkla her lekeye tek tek bakış ve fotoğraf kaydı</li>
          <li>Hazırlık haftaları: her gün güneş koruyucu, sert ürünlere ara</li>
          <li>Küçük bir alanda deneme; bilgilendirme ve imzalı onam</li>
          <li>Seans, kontrol ve güneş koruması eşliğinde izlem</li>
        </ol>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Hangi durumlarda yapılmaz ya da ertelenir?</b>
        <p>Ne olduğu anlaşılamayan ya da kuşku uyandıran her pigmentli lezyon lazerin dışında tutulur. Yazdan yeni dönmüş, bronzlaşmış bir ciltte ton yerine oturana kadar beklenir; bronzlaştırıcı sprey veya krem kullandıysanız bunu da söyleyin.</p>
<p>Deriyi ışığa duyarlı yapan ilaçlar ve bitkisel takviyeler, akne için ağızdan alınan isotretinoin ve bölgeye yakın zamanda yapılmış başka işlemler bekleme gerektirebilir. Yüzde uçuk, iltihaplı sivilce, alevlenmiş egzama ya da açık yara varken lazer iyileşmeyi uzatabileceği için önce deri toparlanır.</p>
<p>Güneşle alevlenen deri hastalıkları, vitiligo gibi renk kaybıyla giden tablolar ve keloid eğilimi lazeri uygun olmaktan çıkarır. Gebelik ve emzirmede leke davranışı hormonlarla değiştiğinden plan bu dönemin sonrasına bırakılır. Tatil, açık havada çalışma ya da deniz sezonu gibi güneşten korunmanın aksayacağı bir dönem yaklaşıyorsa uygulamayı ertelemek daha doğrudur.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/uyg-pico-lazer-leke-2.webp" alt="Gün ışığı alan yüz; güneşe açık cilt bölgesi" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">Hekimin notu</span><p>"Önce tanı, sonra atım; bu sıra hiç değişmez."</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Seans sonrası</span>
        <p style="font-size:.92rem">Atım yapılan leke birkaç saat içinde bir ton koyulaşır ve çevresi hafifçe kızarır; bu beklenen bir görüntüdür. Üzerinde oluşan ince kabuk yaklaşık bir hafta içinde kendiliğinden düşer, koparılmaz. Seyrek de olsa ton açılması ya da koyulaşma, yanık ve iz görülebilir; koyu tende koyulaşma olasılığı daha yüksektir. Kaç seans gerektiği baştan söylenemez. Sonucun ne kadar kalıcı olacağını en çok güneş koruması belirler: geniş spektrumlu, yüksek faktörlü koruyucu her sabah sürülür ve gün içinde yenilenir; melazmada görünür ışığı da süzen renkli koruyucular tercih edilebilir. Sonuçlar kişiden kişiye değişir.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr style="--d:140ms"><h3>Lekelerinize birlikte bakalım</h3><p>Hangi yolun uygun olduğu büyütmeli incelemeden sonra belli olur.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu isteyin</a></div>
      <div class="kutu kutu--acil g-b6" data-gr>
        <b>Beklemeden bize ulaşmanız gereken durumlar</b>
        <p>Lekenin bir ton koyulaşması ve üzerinde ince bir kabuk oluşması beklenen seyirdir. Buna karşılık atım yapılan alanda kızarıklık çevreye yayılıyor, ağrı geçeceğine artıyor, su toplaması, sarı kabuk, akıntı ya da ateş oluyor veya kabuk düştüğünde altında kapanmayan bir yara kalıyorsa kontrol gününü beklemeyin. ${S.iletisim.tel} numarasından bize ulaşın; telefonla ulaşamıyorsanız en yakın acil servise gidin.</p>
      </div>
    </div>
  </div>
</section>

<!-- SORU TERMİNALİ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLowerCase()} · leke · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Her koyu lekeye pico lazer yapılır mı?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Melazmada pico lazerin yeri nedir?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Hangi mevsimde başlamak daha doğru?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Lekeler bir daha çıkmaz mı?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Seanstan sonraki günler nasıl geçer?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nasıl öğrenebilirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Her koyu lekeye pico lazer yapılır mı?","Yapılmaz. Güneş lekesi, sivilce sonrası koyulaşma, melazma ve ben birbirine çok benzeyebilir ama her birinin yolu farklıdır; bir kısmında lazer hiç yer almaz. Muayenede önce büyütmeli ışıkla bakılır, lazerin uygun olup olmadığı ondan sonra söylenir."],["Melazmada pico lazerin yeri nedir?","Sıranın en sonundadır. Melazma güneş, ısı ve hormonlarla alevlenir; bu etkenler düzenlenmeden yapılan atım lekeyi bir süre açıp sonra daha koyu geri getirebilir. Aylarca sürdürülen koruma ve gerekirse krem tedavisinden sonra, yalnızca uygun kişilerde düşük enerjiyle konuşulur."],["Hangi mevsimde başlamak daha doğru?","Sonbahar ve kış daha elverişlidir. Uygulamadan önce cildin bronz olmaması, sonrasında da haftalarca güneşten korunması gerekir; yaz aylarında, tatil ve deniz döneminde bunu sağlamak zordur."],["Lekeler bir daha çıkmaz mı?","Çıkabilir. Güneş lekeleri çoğu zaman belirgin biçimde açılır, ancak güneş koruması bırakıldığında aynı yerde ya da yakınında yenileri oluşur. Melazmada geri dönüş daha sıktır. Tam düzelme taahhüt edilmez; sonuçlar kişiden kişiye değişir."],["Seanstan sonraki günler nasıl geçer?","İlk saatlerde leke bir ton koyulaşır ve çevresi hafifçe kızarır. Birkaç gün içinde lekenin üzerinde ince bir kabuk belirir ve yaklaşık bir hafta içinde kendiliğinden düşer; koparılmaz. Bu dönemde de her gün güneş koruyucu kullanılır."],["Ücret bilgisini nasıl öğrenebilirim?","Sağlık hizmetlerinin tanıtımını düzenleyen kurallar ücretlerin internette yayımlanmasına izin vermez. Kaç lekeye kaç seans gerektiği kişiye göre değiştiği için bu konu muayenede konuşulur."]]</script>

<!-- KAPANIŞ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Lekelerinizin haritasını birlikte çıkaralım</h2>
    <p class="g-sonalt">Hangi lekenin lazere uygun olduğu, hangisinin yalnızca izlenmesi gerektiği muayenede belli olur.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
