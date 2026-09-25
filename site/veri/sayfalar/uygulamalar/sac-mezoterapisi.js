const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/sac-mezoterapisi',
  tip: 'tibbi',
  baslik: 'Saç mezoterapisi: nedir, kimlere uygun, sınırları neler?',
  aciklama: 'Saç mezoterapisinde saçlı deriye ne verilir, dökülmenin nedeni neden önce araştırılır, seans aralığı nasıl kurulur ve kimlerde uygulanmaz; sade bir anlatım.',

  icerik: (r, ik) => `
<!-- ═════ HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Saç mezoterapisi</span></nav>
      <p class="g-etiket">Saç ve Saçlı Deri · Mezoterapi</p>
      <h1>Saç mezoterapisi: <span class="g-isik">saçlı deriye ölçülü destek</span></h1>
      <p class="g-hero__alt">Saç mezoterapisinde vitamin, eser element, aminoasit ve düşük yoğunlukta hyalüronik asit içeren bir karışım, ince iğneyle saçlı derinin pek çok noktasına küçük miktarlarda verilir. Hedeflenen, saç kökünü çevreleyen dokunun beslenmesini desteklemektir. Kaybedilmiş saçı geri getirmez; dökülmenin kaynağı araştırılmadan plan yapılmaz, seans sayısı kişiye göre belirlenir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Nasıl ilerler? ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Karışıma reçeteli ilaç katılmaz</span><span><i></i>Seans sayısı kişiye göre</span><span><i></i>Ara kontrolle ilerler</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-sac-mezoterapisi.webp" width="1400" height="788" alt="Sırtı dönük bir kadının omuzlarına uzanan hacimli saçları" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
    </div>
  </div>
</section>

<!-- ═════ VERİ BANDI ═════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b>2–4&#8239;hf</b><span>Seanslar arası</span></div>
  <div data-gr style="--d:70ms"><b>20–30&#8239;dk</b><span>Uygulama süresi</span></div>
  <div data-gr style="--d:140ms"><b><em data-gsay="3">0</em>. ay</b><span>İlk değerlendirme</span></div>
  <div data-gr style="--d:210ms"><b>Birkaç ml</b><span>Seanstaki toplam miktar</span></div>
</div></div>

<!-- ═════ NEDİR / NE DEĞİLDİR ═════ -->
<section class="bolum bolum--buz2" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Tanım ve sınırlar</p><h2>Saç mezoterapisi ne yapar, ne yapamaz?</h2><p class="giris">Saç yakınmasında ilk sorulacak şey uygulamanın adı değil, dökülmenin kaynağıdır. Mezoterapi bu soruyu cevaplamaz; cevap bulunduktan sonra plana eklenip eklenmeyeceği konuşulur.</p></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>Karışım kana geçecek derinliğe değil, kıl köklerinin yerleştiği yüzeye yakın deri katmanına bırakılır. Bir seansta kullanılan toplam miktar birkaç mililitreyi aşmaz ve saçlı derinin geniş bir alanına küçük damlalar hâlinde dağıtılır.</p>
<p>İçerik herkes için aynı değildir, hekim tarafından seçilir. Karışımda B grubu vitaminleri, örneğin çinko ve bakır gibi iz mineraller, aminoasit–peptit grupları ve hafif yapıda hyalüronik asit bulunabilir. Amaç saçlı derinin nemini, küçük damarlardaki dolaşımı ve kıl kökünü besleyen ortamı desteklemektir.</p>
<p>Karışıma reçeteyle verilen bir ilacın etken maddesi katılmaz; ilaç tedavisi gerekiyorsa bu ayrı bir karar olarak ele alınır. Yaygın dökülmenin ardından gelen toparlanma döneminde, saçlı deride kuruluk ve gerginlik yakınmasında ya da tellerin incelmeye başladığı erken evrede destekleyici bir adım olarak düşünülebilir.</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:80ms">
        <b>Bu ne değildir</b>
        <p><b>Saç ekmez, kök oluşturmaz:</b> kıl kökünün artık bulunmadığı alanda saç çıkması beklenmez; bu yönde verilecek bir sözün tıbbi dayanağı yoktur.</p>
<p><b>Dökülmenin kaynağını ortadan kaldırmaz:</b> düşük ferritin ya da demir eksikliği, tiroid hastalıkları, doğum sonrası dönem, yüksek ateşli bir hastalık, sıkı bir diyet ya da bir ilacın yan etkisi tabloyu açıklıyorsa önce bu başlık ele alınır. <b>Saç ekiminin yerini tutmaz:</b> kalıtsal yatkınlıkla geriye çekilen saç çizgisi ve tepede açılma bu uygulamanın hedefi değildir; böyle bir tabloda ilgili uzmanlık dalı önerilir.</p>
<p>Kaşıntı ve kepeklenmeyle seyreden aktif bir saçlı deri hastalığı varsa sıra önce ona gelir. Yüz cildine yapılan <a href="${r}uygulamalar/mezoterapi/">mezoterapi</a> ile adı benzese de hedefi ve içeriği farklı bir uygulamadır.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ BENTO ═════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Plan</p><h2>Seanslar nasıl planlanır, kaç seans gerekir?</h2><p class="giris">Seans sayısını muayeneden önce söylemek mümkün değildir. Herkese aynı seans dizisi uygulanmaz; program her ara kontrolde yanıta bakılarak sürdürülür, değiştirilir ya da bırakılır.</p></div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="62" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>3. ay</b></div>
        <p><b style="color:var(--murekkep)">İlk anlamlı değerlendirme</b><br>Saç kökünün büyüme döngüsü aylar sürer; birkaç seansın hemen ardından yapılan bir karşılaştırma yanıltıcı olabilir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">SÜREÇ ÇİZGİSİ</span>
        <div class="g-cubuk"><small><span>SEANS</span><span>20–30 dk</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="15%"></b></div></div>
        <div class="g-cubuk"><small><span>SEANS ARALIĞI</span><span>2–4 hafta</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="50%"></b></div></div>
        <div class="g-cubuk"><small><span>DEĞERLENDİRME</span><span>3. ay ve sonrası</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="90%"></b></div></div>
        <p style="font-size:.7rem;color:var(--sessiz);margin-top:8px">Çubuklar göreli simgedir; asıl plan muayenede belirlenir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">PROTOKOL</span>
        <ol class="g-protokol">
          <li>Muayene: dökülmenin ne zaman başladığı, hızı ve dağılımı; saçlı derinin büyütmeli incelenmesi</li>
          <li>Gerekirse kan tetkiki: tam kan sayımı, ferritin, tiroid hormonları, B12 ve D vitamini</li>
          <li>Bilgilendirme ve yazılı onam: neyin amaçlandığı, neyin amaçlanmadığı</li>
          <li>Başlangıç serisi; ara kontrolde yanıtın ölçülmesi ve planın güncellenmesi</li>
        </ol>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">İLKE</span><p>"Önce kan tablosu ve öykü, sonra saçlı deri."</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms"><span class="g-ket">SONRASI</span>
        <p style="font-size:.92rem">Aynı gün işe ve günlük düzene dönülebilir. İlk yarım gün saçlı deri yıkanmaz ve ovalanmaz; bere, şapka ya da sıkı saç bağı kullanılmaz. İki gün boyunca hamam, sauna, havuz, deniz ve çok terleten spor ertelenir; boya ve diğer kimyasal saç işlemleri de bu süreden sonraya bırakılır. Ardından ılık su ve yumuşak bir şampuanla alışılmış yıkamaya geçilir. Önerilerin tamamı size yazılı olarak da verilir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">OLASI ETKİLER</span>
        <p style="font-size:.92rem">Sık ve kısa süreli: iğne noktalarında kızarma ve sızı, saçlı deride bir süre gerilme, taranırken ya da dokunulunca duyarlılık; küçük kabuklar birkaç günde kendiliğinden düşer. Daha az sık: küçük morluklar, geçici baş ağrısı ya da sersemlik hissi, ertesi güne uzanan hafif sızı. Nadir: uygulama bölgesinde enfeksiyon, karışımdaki bir bileşene aşırı duyarlılık, uzun süren kızarık kabarıklıklar.</p>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Kimlere uygulanmaz, hangi durumlarda ertelenir?</b>
        <p>Uygun olup olmadığınıza muayene ve öykünün ardından karar verilir; bu listeye bakarak kendi kararınızı vermeyin.</p>
        <p><b>Uygulama yapılmayan durumlar:</b></p>
        <ul>
          <li>Saçlı deride aktif enfeksiyon, iltihaplı sivilce ya da kapanmamış yara</li>
          <li>Karışımdaki bileşenlerden birine karşı daha önce yaşanmış aşırı duyarlılık</li>
          <li>Kontrol altına alınmamış kanama ya da pıhtılaşma bozukluğu</li>
          <li>Gebelik ve emzirme</li>
          <li>Tedavisi süren kanser hastalığı</li>
          <li>Uygulama alanında yeni ortaya çıkmış, henüz tanı konmamış bir lezyon</li>
        </ul>
        <p><b>Ertelenen veya ayrıca planlanan durumlar:</b></p>
        <ul>
          <li>Kaynağı henüz araştırılmamış dökülme — önce neden ortaya konur</li>
          <li>Kan sulandırıcı ilaç kullanımı</li>
          <li>Ateşli bir hastalık ya da yakın zamanda atlatılmış enfeksiyon</li>
          <li>Dengelenmemiş tiroid hastalığı veya belirgin kansızlık</li>
          <li>Saçlı deride egzamayı andıran aktif bir tablo</li>
          <li>İğneyle ilgili yoğun kaygı ya da daha önce bayılma öyküsü</li>
        </ul>
        <p>Karışımlarda vitaminlerin yanında aminoasitler ve koruyucu maddeler de bulunabilir. Daha önce bir ilaç, kozmetik ürün ya da takviye sonrasında tepki yaşadıysanız bunu muayenede mutlaka belirtin.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr><img src="${r}varliklar/gorsel/hekim-masasi.webp" alt="Masadaki açık defterin üzerinde not alan eller" loading="lazy"><span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span></div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr><h3>Nedeni birlikte arayalım</h3><p>Dökülmenin kaynağı belli olmadan uygulama planlanmaz.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu talebi</a></div>
    </div>
  </div>
</section>

<!-- ═════ UYARI + KAPSAM ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="kutu kutu--acil" data-gr>
      <b>Beklemeden başvurmanız gereken durumlar</b>
      <p>Saçlı deride giderek artan ağrı, sıcaklık, akıntı, yayılan kızarıklık ya da ateş ortaya çıkarsa kontrol gününü beklemeden muayenehaneyi arayın. Nefes almada güçlük, yüzde şişme ya da yaygın döküntüyle birlikte baş dönmesi yaşarsanız <b>112</b>’yi arayın veya en yakın acil servise gidin.</p>
    </div>
    <div class="kutu kutu--uyari" data-gr style="margin-top:16px;--d:70ms">
      <b>Uyarı</b>
      <p>Bu sayfa genel bilgi vermek amacıyla hazırlanmıştır. Bir uygulamanın size uygun olup olmadığına ancak muayene ve sağlık öykünüz değerlendirildikten sonra karar verilebilir. Girişimsel işlemlerde sonuç önceden taahhüt edilemez; etkinin ne ölçüde görüleceği ve ne kadar süreceği kişiden kişiye değişir. Amacı bir işlemi tanıtmak ya da sizi bir işleme yönlendirmek değildir.</p>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:16px;--d:140ms">
      <b>Devamı için</b>
      <p>Dökülme türlerini ve olası iç nedenlerini <a href="${r}cilt-sorunlari/sac-dokulmesi/">saç dökülmesi</a> sayfasında ele aldık; ilk görüşmede nelerin konuşulduğu <a href="${r}uygulamalar/hekim-muayenesi/">hekim muayenesi</a> sayfasındadır. Kimi durumlarda <a href="${r}uygulamalar/sac-prp/">saç PRP</a> ile sırayla ilerleyen ortak bir program düşünülebilir; saçlı derideki <a href="${r}uygulamalar/eksozom/">eksozom</a> kullanımı kendi sayfasında anlatılır. Bölgeye göre bakış için <a href="${r}bolgeler/sacli-deri/">saçlı deri</a>, uygulamadan sonraki süreç için <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası takip</a> sayfalarına göz atabilirsiniz.</p>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sorgulayın</p><h2>Sorunuzu seçin, cevap ekrana düşsün</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>rahmi-cebeci · sac-mezoterapisi · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Saç aşısı ile saç mezoterapisi aynı şey mi?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Etkisini ne zaman görürüm?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Kaç seans yapılır, aralar nasıl belirlenir?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Karışımda ilaç bulunuyor mu?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Erkeklerde uygulanabilir mi?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nasıl öğrenirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekim onaylı yanıt</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede konuşalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Saç aşısı ile saç mezoterapisi aynı şey mi?","Evet; saç aşısı ve saç vitamini, bu uygulamaya gündelik dilde verilen adlardır, tıptaki adı saç mezoterapisidir. Aşı sözcüğü bağışıklıkla ilgili bir işlem çağrıştırdığı için yanıltıcıdır; burada bağışıklık sistemine yönelik bir şey yapılmaz. Biz uygulamayı, yaptığı işi anlatan adıyla anıyoruz."],["Etkisini ne zaman görürüm?","Saç kökünün büyüme döngüsü aylar sürdüğü için erken bir yargıya varmak doğru olmaz. Değerlendirme çoğunlukla üçüncü aydan sonra yapılır. Daha önce fark edilen değişiklikler genellikle saçlı derinin nemi ve yüzeyiyle ilgilidir, saçın yoğunluğuyla değil."],["Kaç seans yapılır, aralar nasıl belirlenir?","Muayeneden önce bir sayı vermek doğru olmaz. Seanslar arasında çoğunlukla iki ila dört hafta bırakılır; toplam sayıyı tablonun kendisi ve ara kontrolde görülen yanıt belirler. Baştan sabitlenmiş bir seans sayısıyla çalışmıyoruz."],["Karışımda ilaç bulunuyor mu?","Muayenehanemizde saç mezoterapisi karışımlarına reçeteli bir ilacın etken maddesi eklenmez. İçerik vitaminler, eser elementler, aminoasitler, peptitler ve hyalüronik asit gibi bileşenlerden oluşur. İlaç tedavisi gerekiyorsa bu ayrıca konuşulan bir konudur."],["Erkeklerde uygulanabilir mi?","Karar cinsiyete göre değil, dökülmenin türüne ve kaynağına göre verilir. Kalıtsal yatkınlıkla ilerlemiş belirgin açılmada bu uygulama tek başına yeterli bir plan oluşturmaz ve bu size açıkça söylenir. İncelmenin yeni başladığı dönemde destekleyici bir adım olarak düşünülebilir."],["Ücret bilgisini nasıl öğrenirim?","Sağlık hizmetlerinin tanıtımını düzenleyen mevzuat nedeniyle ücret bilgisi internet sitemizde yer almaz. Planın kapsamı kişiden kişiye değiştiği için bu bilgi muayenede size özel olarak verilir."]]</script>

<!-- ═════ KAPANIŞ ═════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Önce nedeni, sonra planı konuşalım</h2>
    <p class="g-sonalt">Saç dökülmesinin kaynağı ortaya konmadan bir uygulama takvimi hazırlanmaz. ${S.iletisim.adres}, ${S.iletisim.ilce}.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesini doldurun</a>
    </div>
  </div>
</section>
`,
};
