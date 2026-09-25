const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/mezoterapi',
  tip: 'tibbi',
  baslik: 'Mezoterapi: yüz, boyun, dekolte ve el için cilt içi uygulama',
  aciklama: 'Cilt mezoterapisi nedir; yüz, boyun, dekolte ve el sırtında nasıl planlanır, kimlerde ertelenir, hangi istenmeyen etkiler görülebilir, seanslar nasıl ilerler?',

  icerik: (r, ik) => `
<!-- ═════ G HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Mezoterapi</span></nav>
      <p class="g-etiket">Enjeksiyon Uygulamaları · Cilt Kalitesi</p>
      <h1>Küçük hacimler, <span class="g-isik">çok sayıda nokta</span>: mezoterapi</h1>
      <p class="g-hero__alt">Mezoterapide, ihtiyaca göre hazırlanan bir solüsyon derinin içine çok sayıda küçük noktadan damla damla bırakılır. Her noktaya düşen miktar çoğunlukla 0,01 ile 0,05 mililitre arasındadır; böylece madde vücudun geri kalanına dağılmadan, ihtiyaç duyulan katmanda kalır. Yüz, boyun, dekolte ve el sırtından hangisinin programa gireceği muayenede ve öykünüz dinlendikten sonra belirlenir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#nedir">Solüsyonda neler var ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Tüm uygulamalar hekimin elinden</span><span><i></i>Kullanılan ürün dosyanızda</span><span><i></i>Kontrol randevusu verilir</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-mezoterapi.webp" width="1400" height="788" alt="Açık renk kumaş üzerinde duran cam ampuller ve küçük bir serum şişesi" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <div class="g-hud" data-ghud><b>Karışım kişiye göre hazırlanır</b><div class="g-cizgi"></div><span>Hangi üründen, hangi seriden, nereye ne kadar verildiği kayıt altına alınır.</span></div>
    </div>
  </div>
</section>

<!-- ═════ VERİ BANDI ═════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b>0,01–0,05</b><span>ml, her noktaya</span></div>
  <div data-gr style="--d:60ms"><b>2–4</b><span>Haftada bir seans aralığı</span></div>
  <div data-gr style="--d:120ms"><b>15–30</b><span>Dakika (yüz için)</span></div>
  <div data-gr style="--d:180ms"><b><em data-gsay="4">0</em></b><span>Protokol basamağı</span></div>
</div></div>

<!-- ═════ NEDİR / NE DEĞİLDİR ═════ -->
<section class="bolum bolum--buz2" id="nedir">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Tanım ve sınırlar</p>
      <h2>Mezoterapide cilde ne verilir, nasıl etki etmesi beklenir?</h2>
      <p class="giris">Bir vitamini ağızdan almak ya da serumla damardan vermek ile onu doğrudan derinin içine bırakmak farklı şeylerdir. Mezoterapide ikinci yol izlenir: çok ince bir iğneyle, birbirine birkaç milimetre uzaklıktaki noktalara verilen solüsyon derinin orta katmanında kalır ve dolaşıma ancak çok az bir kısmı geçer.</p>
    </div>
    <div class="izgara izgara--2" data-gr>
      <div class="kutu kutu--bilgi">
        <b>Bu nedir</b>
        <p>Her kişiye aynı karışım uygulanmaz. Solüsyonlarda sıklıkla serbest (çapraz bağsız) hyalüronik asit bulunur; buna B vitaminleri, aminoasitler, çinko ve silisyum gibi mineraller ya da antioksidan maddeler eklenebilir. Karışımı, cildinizde gördüğü soruna ve öykünüze göre hekim belirler. Hedeflenen, cildin nemini daha uzun tutması ve yüzeyinin biraz daha düzgün görünmesidir; değişiklik sınırlıdır ve yanıt kişiden kişiye değişir.</p>
      </div>
      <div class="kutu kutu--uyari">
        <b>Bu ne değildir</b>
        <p><b>Dolgunluk vermez:</b> solüsyon su gibi akışkandır; çökmüş bir bölgeyi kabartmaz. <b>Toparlamaz:</b> gevşemiş ve aşağı inmiş dokuyu yerine kaldırmaz; sarkma şikâyetinde başka seçenekler konuşulur.</p>
<p><b>Mimikleri etkilemez:</b> kasların hareketine dokunmadığı için alın ve göz çevresi çizgilerinde <a href="${r}uygulamalar/botulinum-toksin/">botulinum toksin</a> uygulamasının yerini tutmaz. <b>Cilt hastalığını iyileştirmez:</b> egzama, rozasea ya da aktif akne gibi tablolarda önce altta yatan sorun ele alınır.</p>
      </div>
    </div>
    <div class="kutu" style="margin-top:22px" data-gr>
      <p>Bu sayfada yüz, boyun, dekolte ve el sırtına yapılan cilt mezoterapisini anlatıyoruz. Saçlı deriye yönelik uygulama, saç dökülmesinin nedenleri araştırıldıktan sonra ayrıca planlanır ve <a href="${r}uygulamalar/sac-mezoterapisi/">saç mezoterapisi</a> sayfasında ele alınır; iğne kullanılmadan yapılan yöntem için <a href="${r}uygulamalar/ignesiz-mezoterapi/">iğnesiz mezoterapi</a> sayfasına bakabilirsiniz. Cildiniz mat ve kuru görünüyorsa <a href="${r}cilt-sorunlari/nem-kaybi-ve-donukluk/">ciltte nem kaybı ve donukluk</a>, yüzeyi pürüzlü ve gözenekleri belirginse <a href="${r}cilt-sorunlari/gozenek-ve-cilt-dokusu/">gözenek ve cilt dokusu</a> sayfası yol gösterir. Bölgelere göre planlama: <a href="${r}bolgeler/yuz/">yüz</a>, <a href="${r}bolgeler/boyun-ve-dekolte/">boyun ve dekolte</a>, <a href="${r}bolgeler/el/">el</a>.</p>
    </div>
  </div>
</section>

<!-- ═════ BENTO: PLANLAMA ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Süreç</p>
      <h2>Mezoterapi programı nasıl planlanır?</h2>
      <p class="giris">Program bir kez yazılıp bırakılmaz: her kontrolde cildinizin nasıl yanıt verdiğine bakılır, karışım ya da aralık gerekirse değiştirilir.</p>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="70" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>2–4 hf</b></div>
        <p><b style="color:var(--murekkep)">Seans aralığı</b><br>İlk dönemde seanslar iki–dört haftada bir yapılır; cilt yanıt verdikçe aralık açılır ve bakım seansları konuşulur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Zaman akışı</span>
        <div class="g-cubuk"><small><span>Uygulama günü</span><span>Kızarıklık söner</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="25%"></b></div></div>
        <div class="g-cubuk"><small><span>İlk hafta</span><span>Olası morluk solar</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="60%"></b></div></div>
        <div class="g-cubuk"><small><span>2–4. hafta</span><span>Sonraki seans kararı</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="90%"></b></div></div>
        <p style="font-size:.72rem;color:var(--sessiz);margin-top:10px">Çubuklar oransal bir simgedir; size özel takvim muayenede netleşir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Protokol</span>
        <ol class="g-protokol">
          <li>Değerlendirme: ilaçlarınız, geçmiş hastalıklarınız, gebelik olasılığı ve önceki enjeksiyonlara verdiğiniz tepkiler sorulur; cildiniz iyi ışık altında incelenir.</li>
          <li>Karar ve onam: neyin beklenip neyin beklenmeyeceği, başka yollar ve hiçbir şey yapmamak da konuşulur; yazılı onam alınır. İlk görüşmede uygulama yapmak zorunlu değildir.</li>
          <li>Uygulama günü: bölge dezenfekte edilir, istenirse önceden uyuşturucu krem sürülür; iğneler ve diğer malzemeler steril ve tek kullanımlıktır.</li>
          <li>Sonrası: bölgeyi soğutmanız, güneşten korumanız ve elinizle dokunmamanız önerilir; bir sonraki görüşmenin tarihi verilir.</li>
        </ol>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Hangi durumlarda uygulanmaz, hangilerinde ertelenir?</b>
        <p>Bu başlıkların bir kısmı kalıcı değil, geçici bir erteleme nedenidir; tablo düzeldiğinde karar yeniden gözden geçirilir.</p>
        <ul>
          <li><b>Gebelik ve emzirme dönemi:</b> bu süreçte estetik amaçlı enjeksiyon planlanmaz.</li>
          <li><b>Bölgede aktif enfeksiyon:</b> uçuk, kıl dibi iltihabı, impetigo ya da iltihaplı sivilce varsa bölge iyileşene kadar beklenir.</li>
          <li><b>İçerikteki maddelere karşı bilinen duyarlılık:</b> benzer bir enjeksiyondan sonra belirgin kızarıklık, şişlik ya da başka bir tepki yaşadıysanız bunu muayenede söyleyin.</li>
          <li><b>Dengesiz seyreden kronik hastalıklar ve bağışıklık sistemini baskılayan ilaçlar:</b> kan şekeri düzensiz diyabet, otoimmün hastalıklar, kemoterapi ya da yüksek doz kortizon tedavisi sürerken zamanlama ayrıca konuşulur.</li>
          <li><b>Kan sulandırıcılar ve pıhtılaşma sorunları:</b> bu ilaçları kullanıyorsanız durum hekiminizle konuşulur; ilacınızı kendiliğinizden bırakmayın.</li>
          <li><b>Yeni geçirilmiş enfeksiyon, aşı ya da diş tedavisi:</b> enjeksiyon sonrası görülen bazı geç tepkilerle ilişkilendirildiğinden uygulama tarihi buna göre seçilir.</li>
          <li><b>Gerçekçi olmayan beklenti:</b> hacim, sıkılaşma ya da çizgilerin silinmesi gibi mezoterapinin veremeyeceği bir sonuç bekleniyorsa uygulama önerilmez.</li>
        </ul>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/uyg-mezoterapi-2.webp" alt="Boyun ve dekolte cildinin yumuşak gün ışığında yakın plan görünümü" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b3 g-kutu--gece" data-gr><span class="g-ket">İlke</span><p>“Şişenin üzerindeki ad değil, içindekiler önemlidir. Size uygulanacak her bileşeni adıyla söyler, dosyanıza yazarız.”</p></div>
      <div class="g-kutu g-b3 g-kutu--cta" data-gr style="--d:70ms"><h3>Cildinizi yakından görelim</h3><p>Hangi karışımın, hangi aralıkla uygulanacağı muayeneden sonra belli olur.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu talebi</a></div>
    </div>
  </div>
</section>

<!-- ═════ RİSKLER ═════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Riskler</p>
      <h2>Uygulamadan sonra neler olabilir, ne zaman beklemeden başvurmalısınız?</h2>
      <p class="giris">İğneyle yapılan her uygulamada beklenmedik bir durum yaşanabilir. Hangi bulgunun olağan, hangisinin dikkat gerektiren olduğunu ayırabilmeniz için bunları gruplara ayırdık; çoğu kişide bunların yalnızca bir kısmı görülür.</p>
    </div>
    <div class="izgara izgara--2" data-gr>
      <div class="kart kart--duz">
        <h4>Sık görülen, kısa süreli</h4>
        <p>Her iğne noktasında kısa süreli kızarıklık ve küçük kabarcıklar görülür; bunlar çoğu kişide aynı gün söner. Batma hissi ve dokununca hassasiyet olabilir. Morluk gelişirse sararıp kaybolması bir haftayı bulabilir.</p>
      </div>
      <div class="kart kart--duz">
        <h4>Daha az görülen</h4>
        <p>Birkaç gün süren ödem, kaşıntı ya da iğne izlerinde ince kabuklar. Esmer ve koyu tenlerde iz yerlerinde geçici bir kararma kalabilir; genellikle zamanla açılır.</p>
      </div>
      <div class="kart kart--duz">
        <h4>Nadir ama önemli</h4>
        <p>Deride iltihaplanma ya da apse, içerikteki bir maddeye karşı gelişen duyarlılık tepkisi, solüsyonun bir damara girmesiyle dolaşımın bozulması ve kalıcı iz. Seyrek görülürler, ancak tanınmaları önemlidir.</p>
      </div>
      <div class="kart kart--duz">
        <h4>Geç dönemde</h4>
        <p>Uygulamadan haftalar, hatta aylar sonra ortaya çıkan şişlik ya da ele gelen küçük sertlikler bildirilmiştir. Böyle bir değişiklik fark ederseniz bölgenin muayenede incelenmesi gerekir.</p>
      </div>
    </div>
    <div class="kutu kutu--acil" style="margin-top:22px" data-gr>
      <b>Hemen başvurun</b>
      <p>Saatler içinde azalmak yerine artan ağrı, derinin bembeyaz kesilmesi ya da mor lekeli bir görünüm alması, büyüyen şişlik, ateş, görmede değişiklik, nefes almakta zorlanma ya da dilde şişme olursa kontrol gününü beklemeyin. ${S.iletisim.tel} numarasından bize ulaşın ya da en yakın acil servise gidin; tablo ağırsa <b>112</b>’yi arayın.</p>
    </div>
  </div>
</section>

<!-- ═════ SEANS VE SÜRE ═════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Düzen</p>
      <h2>Seanslar hangi aralıkla yapılır, etkisi ne kadar kalır?</h2>
    </div>
    <div class="izgara izgara--3" data-gr>
      <div class="kart kart--duz">
        <h4>Seans düzeni</h4>
        <p>Kaç seans gerektiği, şikâyetin türüne ve cildin ilk seanslara verdiği yanıta bağlıdır. Tipik bir planda ilk dönemde iki–dört haftada bir görüşülür; cilt yanıt verdikçe seansların arası açılır ve bakım aralıkları konuşulur.</p>
      </div>
      <div class="kart kart--duz">
        <h4>Ne kadar sürer?</h4>
        <p>Güneşten korunmayan, sigara içilen ya da evde düzenli bakım yapılmayan bir ciltte kazanım daha kısa sürer. Yaş ve cildin başlangıçtaki durumu da belirleyicidir. Mezoterapinin katkısı geçicidir ve aylar içinde azalır. Sonuçlar kişiden kişiye değişir.</p>
      </div>
      <div class="kart kart--duz">
        <h4>Değişiklik görülmezse</h4>
        <p>Birkaç seansa rağmen bir fark göremiyorsanız aynı uygulamayı sürdürmek yerine durup yeniden bakarız. Bu tablo çoğunlukla yöntemin kendisinden değil, şikâyetin altında başka bir nedenin yatmasından kaynaklanır; o neden ayrıca araştırılır.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ UYARI + KAPSAM + DEVAMI ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="kutu kutu--uyari" data-gr>
      <b>Uyarı</b>
      <p>Buradaki bilgiler okuru bilgilendirmek içindir; size özel bir tanı ya da tedavi önerisi içermez. İğneyle yapılan her işlem gibi mezoterapinin de riskleri vardır ve herkese uygun değildir. Size uygulanıp uygulanmayacağı muayenede netleşir. Sonuçlar kişiden kişiye değişir.</p>
    </div>
    <div class="kutu kutu--bilgi" style="margin-top:16px" data-gr>
      <b>Kapsam</b>
      <p>Mezoterapiyi ${S.hekim.tam} kendisi uygular; çalışma alanı, uzmanlığı ve Sağlık Bakanlığı onaylı medikal estetik sertifikasıyla sınırlıdır. Bu alana girmeyen bir talep için hangi <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">uzmanlık dalına başvurabileceğinizi</a> ayrıca anlattık.</p>
    </div>
    <div class="g-haplar" style="margin-top:22px" data-gr>
      <a href="${r}bolgeler/boyun-ve-dekolte/">Boyun ve dekolte planlaması</a>
      <a href="${r}uygulamalar/genclik-asisi-skinbooster/">Gençlik aşısı (skinbooster)</a>
      <a href="${r}uygulamalar/ignesiz-mezoterapi/">İğnesiz mezoterapi</a>
      <a href="${r}uygulamalar/sac-mezoterapisi/">Saç mezoterapisi</a>
      <a href="${r}uygulamalar/">Tüm uygulamalar</a>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka} · mezoterapi · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Farklı adlarla anılan kokteyller aynı şey mi?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>“Gençlik aşısı” ile mezoterapi aynı mı?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>İşlem sırasında ne hissederim?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Ne zaman makyaj yapıp dışarı çıkabilirim?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Saç dökülmesi için de aynı uygulama mı yapılıyor?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Farklı adlarla anılan kokteyller aynı şey mi?","Piyasada cilt içi karışımlar için akılda kalan pek çok ad dolaşıyor. Bu adların tıpta tanımlı bir karşılığı yoktur; tek bir adın arkasında bambaşka karışımlar olabiliyor. Biz uygulamayı adıyla değil, içindeki maddelerle anlatırız: hangi bileşenin, ne kadar ve nereye verildiği size söylenir ve dosyanıza yazılır."],["“Gençlik aşısı” ile mezoterapi aynı mı?","Tam olarak aynı değildir. Sitemizde “gençlik aşısı” adını, hacim eklemeyen ve cildin nemini hedefleyen skinbooster uygulaması için kullanıyoruz; ayrıntısı kendi sayfasında. Mezoterapide ise hyalüronik asidin yanında vitamin, aminoasit ve mineraller de bulunabilen daha geniş içerikli karışımlar kullanılır. Hangisinin uygun olduğuna muayenede karar verilir."],["İşlem sırasında ne hissederim?","İğne sayısı fazla olduğu için art arda gelen hafif batmalar hissedersiniz. Ne kadar rahatsız edeceği bölgeye ve kişinin hassasiyetine bağlıdır; boyun ve el sırtı gibi ince derili yerler daha duyarlı olabilir. İstenirse işlemden önce uyuşturucu krem sürülür, ancak bu his tümüyle ortadan kalkmaz."],["Ne zaman makyaj yapıp dışarı çıkabilirim?","Kabarcıklar ve kızarıklık çoğunlukla aynı gün içinde geçer; birçok kişi ertesi gün günlük işine döner. Morluk gelişirse birkaç gün görünür kalabilir, bu yüzden önemli bir davetin hemen öncesine uygulama planlamamak daha rahat olur. İşlem günü makyaj yapmamanız; sauna, hamam ve ağır spora 24 saat ara vermeniz istenir."],["Saç dökülmesi için de aynı uygulama mı yapılıyor?","Hayır. Saçlı deriye yapılan uygulama, saç dökülmesinin nedenleri araştırıldıktan sonra ayrı bir planla yürütülür ve saç mezoterapisi sayfasında anlatılmıştır. Bu sayfadaki uygulama yüz, boyun, dekolte ve el sırtı içindir."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Muayenede size özel plan netleştiğinde bu bilgi doğrudan size iletilir."]]</script>

<!-- ═════ KAPANIŞ ═════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Cildinize uygun planı birlikte kuralım</h2>
    <p class="g-sonalt">Öykünüzü ve cildinizi değerlendirmeden mezoterapinin sizin için doğru seçenek olup olmadığını söyleyemeyiz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
