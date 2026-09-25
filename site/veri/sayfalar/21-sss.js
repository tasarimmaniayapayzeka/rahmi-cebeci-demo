const S = require('../site');

module.exports = {
  slug: 'sikca-sorulan-sorular',
  tip: 'tibbi',
  baslik: 'Soru ve Yanıtlar — Randevu, Dövme Silme ve Süreç',
  aciklama: 'Bakırköy’deki muayenehaneye ulaşım, randevu, görüşme öncesi hazırlık, pico lazerle dövme silme, uygulama sonrası ve kapsam hakkında sık sorulan sorular.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <span>Soru ve yanıtlar</span></nav>
      <p class="g-etiket">Merak edilenler · Yirmi bir yanıt</p>
      <h1>Soru ve <span class="g-isik">yanıtlar</span></h1>
      <p class="g-hero__alt">Bu sayfada, telefonda ve muayenede en sık duyduğumuz soruların yanıtları iki bölüm hâlinde yer alıyor. İlkinde randevu, ulaşım ve görüşme öncesi hazırlık; ikincisinde dövme silme dâhil uygulamaların seyri, sonrası, kapsam ve mevzuat yer alıyor. Yanıtlar genel bilgi verir; size özel plan muayeneden sonra kurulur.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
        <a class="dgm dgm--iki" href="#randevu-sorulari">Sorulara geçin ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Hekim tarafından gözden geçirildi</span><span><i></i>Genel bilgilendirme</span><span><i></i>Karar muayenede verilir</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/anasayfa-hero.webp" width="1400" height="788" alt="Aydınlık bir odada oturan, soru soran bir kadın" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <div class="g-hud"><b>İki bölüm, yirmi bir soru</b><div class="g-cizgi"></div><span>Randevu · hazırlık · dövme silme · sonrası · kapsam</span></div>
    </div>
  </div>
</section>

<!-- ═════════ TERMİNAL 1 · RANDEVU + HAZIRLIK ═════════ -->
<section class="bolum bolum--buz2" id="randevu-sorulari"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Randevu öncesi</p><h2>Randevudan ilk görüşmeye kadar neler merak ediliyor?</h2><p class="giris">Randevu, ulaşım ve görüşme öncesi hazırlıkla ilgili sorular. Bir soruya dokunduğunuzda yanıtı yan tarafta açılır.</p></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka} · randevu ve hazırlık · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Randevu için hangi yollarla ulaşabilirim?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Muayenehane nerede?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>İlk görüşmede neler konuşulur?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>İlk gelişimde işlem yapılması şart mı?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Muayeneye gelirken hangi belgeleri yanıma almalıyım?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>WhatsApp’tan fotoğraf gönderirsem değerlendirme yapılır mı?</button>
        <button class="g-ssoru" data-gs="6"><i>›</i>Uygulama öncesinde hangi bilgileri paylaşmam gerekir?</button>
        <button class="g-ssoru" data-gs="7"><i>›</i>Başka bir yerde dövme silme seansı aldım; burada devam edebilir miyim?</button>
        <button class="g-ssoru" data-gs="8"><i>›</i>Randevumu değiştirmem gerekirse ne yapmalıyım?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekim tarafından gözden geçirildi</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede sorun</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Randevu için hangi yollarla ulaşabilirim?","Telefonla arayabilir, aynı numaradan WhatsApp üzerinden yazabilir ya da iletişim sayfasındaki formu doldurabilirsiniz. Formu doldurduğunuzda randevunuz henüz oluşmuş sayılmaz: çalışma saatlerinde sizinle iletişime geçilir, uygun gün ve saat o görüşmede belirlenir. Çalışma saatleri: ${S.iletisim.saatler.map(([g, s]) => g + ': ' + s).join('; ')}."],["Muayenehane nerede?","Muayenehane ${S.iletisim.semt}’de, ${S.iletisim.adres} adresindedir. Harita ve yol tarifi iletişim sayfasında yer alır. Randevulu çalışıldığı için gelmeden önce gün ve saatin netleşmiş olması gerekir."],["İlk görüşmede neler konuşulur?","İlk görüşme sonraki kontrollerden daha uzun sürer, çünkü öykünüz baştan alınır. Ne istediğiniz, şikâyetin ne zamandır sürdüğü, kullandığınız ilaç ve takviyeler, geçirdiğiniz hastalıklar ve daha önce yaptırdığınız uygulamalar sorulur; ardından ilgili bölge muayene edilir. Dövme silme için geldiyseniz dövmenin rengi, yaşı ve bulunduğu bölge de bu görüşmede değerlendirilir."],["İlk gelişimde işlem yapılması şart mı?","Hayır. İlk görüşmenin amacı beklentinizi ve bölgenin durumunu anlamaktır. Uygun görülen bazı işlemler aynı gün yapılabilir; ancak birçok planda uygulama ayrı bir güne alınır. Kararı düşünerek vermeniz için bu ara bilerek bırakılır."],["Muayeneye gelirken hangi belgeleri yanıma almalıyım?","Kullandığınız ilaçların güncel listesini ya da kutularını, daha önce yaptırdığınız estetik uygulamalara ait belgeleri ve varsa son dönemde yapılmış tetkiklerinizi getirin. Yüz uygulamaları için makyajsız gelmeniz muayeneyi kolaylaştırır; dövme silme için dövmenin hangi yıl yapıldığını hatırlamanız yararlı olur."],["WhatsApp’tan fotoğraf gönderirsem değerlendirme yapılır mı?","Hayır. WhatsApp hattı randevu vermek, randevuyu değiştirmek ve yol tarifi gibi düzenleme işleri içindir. Fotoğraf ya da mesaj üzerinden tıbbi değerlendirme yapılmaz, seans sayısı söylenmez, uygulama önerilmez. Işık, açı ve ekran ayarı renk ve derinlik algısını değiştirir; değerlendirme ancak yüz yüze muayenede yapılabilir."],["Uygulama öncesinde hangi bilgileri paylaşmam gerekir?","Üç başlığı atlamayın: ilaçlar, sağlık durumu ve geçmiş uygulamalar. İlaç tarafında kan sulandırıcılar ve bitkisel takviyeler; sağlık tarafında kronik hastalıklar, gebelik ya da emzirme ve sık tekrarlayan uçuk; geçmiş tarafında ise daha önce bir ilaca veya enjeksiyona gösterdiğiniz reaksiyonlar önemlidir. Son haftalarda enfeksiyon, aşı ya da diş tedavisi geçirdiyseniz bunu da ekleyin."],["Başka bir yerde dövme silme seansı aldım; burada devam edebilir miyim?","Bu, muayeneden sonra değerlendirilir. Önceki seansların sayısı, tarihleri ve kullanılan yöntem biliniyorsa plan buna göre kurulur; bu bilgileri yanınızda getirmeniz işe yarar. Ciltte iz, renk değişikliği ya da tam iyileşmemiş bir alan varsa yeni seans ertelenebilir."],["Randevumu değiştirmem gerekirse ne yapmalıyım?","Çalışma saatleri içinde ${S.iletisim.tel} numarasını arayabilir ya da aynı numaraya WhatsApp üzerinden yazabilirsiniz. Olabildiğince erken haber vermeniz, o saatin başka birine ayrılabilmesini sağlar."]]</script>

<!-- ═════════ TERMİNAL 2 · UYGULAMALAR + SONRASI + KAPSAM ═════════ -->
<section class="bolum bolum--sicak"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Uygulama, sonrası, sınırlar</p><h2>İşlem günü ve sonrasında neler merak ediliyor?</h2><p class="giris">Dövme silme dâhil uygulamaların seyri, sonrasında dikkat edilecekler, kapsam ve mevzuatla ilgili en sık gelen sorular.</p></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka} · uygulamalar ve kapsam · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Hangi uygulama grupları var?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Pico lazerle dövme silmede seanslar arasında ne kadar beklenir?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Dövme silme seansından sonra ne beklemeliyim?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Enjeksiyonda hangi ürünün kullanılacağını nasıl öğrenirim?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Uygulama hangi durumlarda ertelenir?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>İşlemden sonra işe ya da okula dönebilir miyim?</button>
        <button class="g-ssoru" data-gs="6"><i>›</i>Etki ne zaman görülür?</button>
        <button class="g-ssoru" data-gs="7"><i>›</i>Uygulamadan sonra umulmadık bir şişlik görürsem ne yapmalıyım?</button>
        <button class="g-ssoru" data-gs="8"><i>›</i>Hasta deneyimlerine ve öncesi–sonrası fotoğraflarına neden yer verilmiyor?</button>
        <button class="g-ssoru" data-gs="9"><i>›</i>Burada hangi işlemler yapılmıyor?</button>
        <button class="g-ssoru" data-gs="10"><i>›</i>Sitedeki test ve listeler bana uygunluk kararı verir mi?</button>
        <button class="g-ssoru" data-gs="11"><i>›</i>Ücret bilgisi neden internette yayımlanmıyor?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekim tarafından gözden geçirildi</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede sorun</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Hangi uygulama grupları var?","Uygulamalar dört grupta toplanır: enjeksiyonla yapılanlar, cihaz destekli uygulamalar, saç sağlığı uygulamaları ile değerlendirme ve takip. Hepsi hekimin sertifika kapsamındaki işlemlerdir. Listenin tamamını uygulamalar sayfasında, her birinin ayrıntısını kendi sayfasında bulabilirsiniz."],["Pico lazerle dövme silmede seanslar arasında ne kadar beklenir?","Seanslar arasında çoğunlukla altı ila sekiz hafta, bazı durumlarda daha uzun bir ara bırakılır. Bu süre, cildin toparlanması ve parçalanan mürekkebin vücut tarafından uzaklaştırılması için gerekir; aralığı kısaltmak genellikle bir kazanç sağlamaz, cildin toparlanmasını zorlaştırabilir. Toplam seans sayısı mürekkebin rengine, derinliğine ve dövmenin yaşına göre değişir."],["Dövme silme seansından sonra ne beklemeliyim?","Seanstan hemen sonra dövmenin üzerinde geçici beyazlama, kızarıklık ve hafif şişlik görülebilir; bazı kişilerde sonraki günlerde kabuklanma ya da küçük kabarcıklar oluşur. Kabukları koparmamanız, bölgeyi güneşten korumanız ve size verilen bakım önerilerine uymanız istenir. İyileşme beklenen hızda ilerlemiyorsa ya da bulgular artıyorsa muayenehaneye haber verin."],["Enjeksiyonda hangi ürünün kullanılacağını nasıl öğrenirim?","Ürün markaları sitede tanıtım amacıyla yayımlanmaz. Size hangi ürünün, hangi gerekçeyle seçildiği muayenede anlatılır ve onam belgesine yazılır. Uygulamadan sonra kullanılan ürünün bilgisini isteyip saklayabilirsiniz; ileride başka bir hekime başvurduğunuzda işinize yarar."],["Uygulama hangi durumlarda ertelenir?","Uygulama yapılacak bölgede aktif enfeksiyon, uçuk, açık yara ya da alevlenmiş bir cilt hastalığı varsa önce bu tablonun yatışması beklenir. Gebelik ve emzirme döneminde birçok girişimsel işlem bekletilir. Lazer uygulamalarında yakın zamanda güneşte kalmış ya da bronzlaşmış cilt de erteleme nedeni olabilir. Gebelik olasılığınız varsa muayenede söyleyin."],["İşlemden sonra işe ya da okula dönebilir miyim?","Çoğu uygulamadan sonra günlük işlerinize dönebilirsiniz; ancak kızarıklık, şişlik ya da morarma birkaç gün sürebilir. Makyaja ne zaman başlayacağınız, spor ve sauna gibi etkinliklere ne kadar ara vereceğiniz ve güneşten nasıl korunacağınız, yapılan işleme göre size ayrıca anlatılır."],["Etki ne zaman görülür?","Bu, uygulamaya ve kişiye bağlıdır. Bazı değişiklikler günler içinde fark edilir; kolajen yanıtına dayanan uygulamalarda haftalar gerekir, dövme silmede ise seanslara yayılan bir süreç söz konusudur. Ne zaman bir değişiklik bekleyebileceğiniz plan yapılırken size söylenir; sonuçlar kişiden kişiye değişir."],["Uygulamadan sonra umulmadık bir şişlik görürsem ne yapmalıyım?","Şişlik ya da kızarıklık günler geçtikçe azalmıyor, tersine büyüyor ya da ağrı veriyorsa muayenehaneyi arayın; gerekiyorsa muayeneye çağrılırsınız. Nefes almakta zorlanma, dudak ya da dilde hızla büyüyen şişlik, vücuda yayılan döküntüyle birlikte baş dönmesi acil durum işaretidir: muayenehaneyi aramakla vakit kaybetmeden 112’yi arayın veya en yakın acil servise gidin."],["Hasta deneyimlerine ve öncesi–sonrası fotoğraflarına neden yer verilmiyor?","Bu tür içeriklerin tanıtım amacıyla yayımlanması mevzuata aykırıdır. Üstelik bir başkasında görülen değişim, sizin cildinizde ve sizin öykünüzle aynı biçimde ortaya çıkmaz. Gerekçelerin tamamı mevzuat sayfasında anlatılır."],["Burada hangi işlemler yapılmıyor?","Cerrahi girişimler, saç ekimi ve hekimin sertifika kapsamına girmeyen işlemler bu muayenehanede uygulanmaz. Kapsam dışındaki bir talepte gerekçesi anlatılır ve ilgili uzmanlık dalına başvurmanız önerilir. Konunun ayrıntısı ayrı bir sayfada yer alır."],["Sitedeki test ve listeler bana uygunluk kararı verir mi?","Hayır. Hazırlık listesi, cilt eğilimi testi, bölge rehberi ve yan yana karşılaştırma tanı koymaz, işlem önermez ve bir uygulamaya uygun olup olmadığınıza karar vermez. Bu araçlar randevuya hazırlanmanıza yardım eder; verdiğiniz cevaplar bize gönderilmez."],["Ücret bilgisi neden internette yayımlanmıyor?","Sağlık hizmetlerinin tanıtımını düzenleyen yönetmelik, internet sitesinde ücret, indirim, taksit ya da kampanya duyurusu yapılmasına izin vermez. Bunun yanında ücret, muayenede belirlenen plana, bölgeye ve seans sayısına göre değişir. Bu nedenle bilgi muayene sırasında size özel olarak verilir; telefonda ya da WhatsApp’ta işlem bazında liste paylaşılmaz."]]</script>

<!-- ═════════ İLGİLİ BAŞLIKLAR ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Buradan devam edin</p>
      <h2>Buradan devam edebilirsiniz</h2>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <a class="kart" href="${r}yaklasimimiz/">
        <h3>Randevudan kontrole</h3>
        <p>Muayeneden kontrole uzanan basamakların neden kısaltılmadığını anlatan sayfa.</p>
        <span class="kart__ok">İncele ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}uygulamalar/">
        <h3>Uygulamalar</h3>
        <p>Muayenehanede yapılan uygulamalar; her birinin planlaması, sınırları ve olası etkileri.</p>
        <span class="kart__ok">Listeye git ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">
        <h3>Bazı işlemleri neden üstlenmiyoruz</h3>
        <p>Kapsamın nerede bittiği ve hangi durumlarda başka bir uzmanlık dalına başvurmanızın önerildiği.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}mevzuat/">
        <h3>Bağlı olduğumuz mevzuat</h3>
        <p>Sitede ücret, yorum ve öncesi–sonrası görseli bulunmamasının yasal dayanağı.</p>
        <span class="kart__ok">Dayanağı gör ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}hazirlik-listesi/">
        <h3>Görüşmeye hazırlık notları</h3>
        <p>Randevudan önce ilaç, öykü ve önceki uygulama bilgilerinizi toparlamanıza yardım eden araç.</p>
        <span class="kart__ok">Aracı tanıyın ${ik.ok}</span>
      </a>
    </div>
  </div>
</section>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Başka bir sorunuz mu var?</h2>
    <p class="g-sonalt">İletişim sayfasındaki formdan randevu isteyebilir, muayenehane açıkken bizi telefonla da arayabilirsiniz. Sorunuzu muayenede, hekiminize doğrudan sorarsınız.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesine geçin</a>
    </div>
  </div>
</section>
`,
};
