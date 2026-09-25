const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/eksozom',
  tip: 'tibbi',
  baslik: 'Eksozom uygulaması: cilt ve saçlı deride kanıt ve sınırlar',
  aciklama: 'Eksozomlar, hücrelerin birbirine haber taşıyan mikroskobik kesecikleridir. Ülkemizde cihaz eşliğinde yüzeye uygulanır; ruhsat durumu muayenede konuşulur.',

  icerik: (r, ik) => `
<!-- ═════ HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Eksozom</span></nav>
      <p class="g-etiket">Cilt ve Saçlı Deri · Hücreler Arası Sinyal</p>
      <h1>Umut verici ama <span class="g-isik">henüz genç</span> bir alan.</h1>
      <p class="g-hero__alt">Eksozom adı verilen mikroskobik kesecikler, hücrelerin birbirine gönderdiği biyolojik mesajları taşır. Bu keseciklerden hazırlanan ürünler, ülkemizde çoğunlukla bir cihazla açılan mikro kanalların ardından cilde veya saçlı deriye yüzeyden uygulanır. Bilimsel veri henüz sınırlıdır; ürünün niteliği ve beklenti muayenede açıkça ele alınır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Nedir, ne değildir ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>İçinde canlı hücre yok</span><span><i></i>Verinin sınırı açıkça</span><span><i></i>Ürün kaydı dosyada</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-eksozom.webp" width="1400" height="788" alt="Hücre zarından ayrılan küçük keseciklerin üç boyutlu çizimi" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
      <div class="g-hud" data-ghud><b>Kesecik ne taşır?</b><div class="g-cizgi"></div><span>Protein ve RNA parçaları taşır; doku doldurmaz, komşu hücrelere haber iletir.</span></div>
    </div>
  </div>
</section>

<!-- ═════ VERİ BANDI ═════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b>30–150&#8239;nm</b><span>Keseciklerin boyut aralığı</span></div>
  <div data-gr style="--d:60ms"><b><em data-gsay="2">0</em>–4&#8239;hf</b><span>Seanslar arasında sık bırakılan süre</span></div>
  <div data-gr style="--d:120ms"><b>Cihazla</b><span>Mikro kanal sonrası yüzeye uygulama</span></div>
  <div data-gr style="--d:180ms"><b>Gelişmekte</b><span>Bugünkü bilimsel veri</span></div>
</div></div>

<!-- ═════ BU NEDİR / BU NE DEĞİLDİR ═════ -->
<section class="bolum" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Tanım ve kapsam</p>
      <h2>Eksozom nedir, kök hücreyle aynı şey midir?</h2>
      <p class="giris">Aynı şey değildir. Kök hücre uygulamasında canlı hücreler kullanılır; eksozomlar ise hücrelerin salgıladığı, kendi başına yaşamayan ve çoğalamayan zarlı paketçiklerdir. Kök hücre uygulamaları hem içerik hem mevzuat bakımından ayrı bir alandır ve muayenehanemizin kapsamı dışındadır.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>Yaklaşık 30–150 nanometre çapındaki bu zarlı kesecikleri neredeyse bütün hücre tipleri üretir. Yükleri proteinler, yağ yapıları ve RNA adı verilen genetik haberci parçalarından oluşur; hücrelerin birbirine bilgi aktarmasında görev aldıkları kabul edilir. Türkçe kaynaklarda adı “ekzozom” olarak da yazılır.</p>
        <p>Ürün üretiminde, kontrollü koşullarda büyütülen hücrelerin içinde yaşadığı besi sıvısı toplanır; kesecikler bu sıvıdan ince süzgeçler ve yüksek hızlı döndürme ile ayrılır. Cilde ulaşan sinyallerin, kolajen üreten hücreleri harekete geçirerek onarımı desteklemesi umulur.</p>
<p>Ülkemizde eksozom içeren ürünler çoğunlukla iğneyle derin katmanlara verilmez; <a href="${r}uygulamalar/altin-igne-radyofrekans/">altın iğne radyofrekans</a>, <a href="${r}uygulamalar/fraksiyonel-lazer/">fraksiyonel lazer</a> ya da <a href="${r}uygulamalar/ignesiz-mezoterapi/">iğnesiz mezoterapi</a> gibi bir cihaz basamağıyla açılan mikro kanalların hemen ardından cilde yayılarak kullanılır. Ürünün kayıt ve ruhsat durumu muayenede ayrıca aktarılır. Saçlı derideki kullanım aşağıda <a href="#sac">ayrı bir bölümde</a> ele alınmıştır.</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:70ms">
        <b>Bu ne değildir</b>
        <p><b>Hücre nakli değildir:</b> şişedeki üründe yaşayan bir hücre yoktur; bu nedenle reklamlarda “kök hücre” diye anılması yanıltıcıdır ve iki uygulama birbirinin yerine konamaz.</p>
        <p><b>Dolgu işlevi yoktur:</b> kesecikler dokuda yer kaplamaz. Yüzde çöken, incelen alanlar için <a href="${r}cilt-sorunlari/hacim-kaybi-ve-sarkma/">hacim kaybı ve sarkma</a> sayfasına bakabilirsiniz.</p>
        <p><b>Bir cilt hastalığını iyileştirmez:</b> yüzde sürekli kızarıklık, kepeklenme, kaşıntılı lekeler ya da iltihaplı sivilceler varsa önce tanı konur ve tedavi edilir; eksozom bunun yerine geçmez.</p>
        <p><b>Herkeste aynı sonucu vermez:</b> aynı ürün ve aynı cihazla yapılan seanslarda bile ciltlerin tepkisi farklıdır. Hiçbir değişiklik görmeyen kişiler de olabilir; bunu uygulamadan önce bilmeniz gerekir.</p>
      </div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="--d:140ms;margin-top:16px">
      <b>Bilimsel veri bugün hangi aşamada?</b>
      <p>Bugün elimizdeki bilgi çoğunlukla hücre kültürü ve hayvan deneylerinden geliyor; insanlarda yapılan çalışmalar ise az sayıda gönüllüyle ve birkaç aylık izlemle sınırlı. Piyasada “eksozom” adıyla sunulan ürünler de birbirinin aynısı değil: bitki kaynaklı olandan insan hücre kültürü kaynaklı olana kadar farklı üretim yöntemleri var ve birinin sonucunu diğerine genellemek mümkün değil.</p>
<p>Cilt kalitesindeki değişiklik çoğu zaman gözle değerlendiriliyor ve uzun dönem güvenlik bilgisi henüz yeterli değil. Ürünlerin kayıt ve ruhsat durumu da değişken bir konudur; size bir ürün önerilecekse muayene gününde geçerli yasal durumu açıkça anlatırız. Bazı işlemleri neden hiç yapmadığımızı <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a> sayfasında bulabilirsiniz.</p>
    </div>
  </div>
</section>

<!-- ═════ SAÇLI DERİ ═════ -->
<section class="bolum bolum--buz2" id="sac">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Saçlı deri</p><h2>Saçlı deride eksozom: ne hedeflenir, nerede durulur?</h2><p class="giris">Saç seyrelmesi için eksozom soran kişi sayısı hızla artıyor; buna karşın bu alandaki çalışmalar az, küçük ve kısa süreli. Bu yüzden saçlı deride eksozomu ana tedavi değil, ek bir seçenek sayıyoruz.</p></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Saçlı deride nasıl uygulanır</b>
        <p>Saçlı derinin yüzeyinde bir cihazla ya da çok ince iğneli bir başlıkla mikro kanallar açılır ve eksozom içeren ürün bu alana yayılır. Amaç, kıl köklerini (folikülleri) saran dokudaki hücrelerin birbirine gönderdiği onarım sinyallerini güçlendirmektir.</p>
<p>Ürün sizin kanınızdan ya da dokunuzdan hazırlanmadığı için <a href="${r}uygulamalar/sac-prp/">saç PRP</a> uygulamasından temelde ayrışır: kan alınmaz, buna karşılık hazır bir ürün kullanıldığından içindeki maddelere daha önce tepki verip vermediğiniz özellikle sorulur. <a href="${r}uygulamalar/sac-mezoterapisi/">Saç mezoterapisi</a> ise başka bir içerikle yürütülen ayrı bir yöntemdir.</p>
<p>Verisi daha yerleşik basamaklar önce konuşulur. Eksozom plana eklendiyse, üçüncü ay civarındaki kontrolde yanıt izlenmiyorsa sürdürülmez.</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:80ms">
        <b>Saçlı deride bu ne değildir</b>
        <p><b>Kaybedilmiş saçı geri getirmez:</b> saç kökleri tamamen kaybolmuş, derinin parlak ve pürüzsüz göründüğü alanlarda eksozomun yapabileceği bir şey yoktur; bu alanlar için konuşulacak seçenek cerrahi bir işlem olan saç ekimidir.</p>
<p><b>Dökülmenin altındaki sorunu çözmez:</b> demir depolarında azalma, tiroit hastalıkları, doğum sonrası dönem, geçirilmiş ateşli hastalık ya da ilaç etkisi söz konusuysa tedavinin odağı bu nedenlerdir; neden arayışı <a href="${r}cilt-sorunlari/sac-dokulmesi/">saç dökülmesi</a> sayfasında anlatılır. Bölge planı için <a href="${r}bolgeler/sacli-deri/">saçlı deri</a> sayfasına bakabilirsiniz.</p>
      </div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="--d:140ms;margin-top:16px">
      <b>Saçlı deri uygulamasından sonra</b>
      <p>Aynı gün işinize dönebilirsiniz. Saçınızı ertesi sabah yıkayın, o zamana dek bölgeyi kaşımayın; iki gün boyunca spor, sauna, havuz ve deniz gibi terleten ortamlardan, dar şapkadan ve saç boyasından uzak durun. Birkaç gün hafif gerginlik ve ince kabuklanma olabilir; ağrı artarsa, akıntı ya da ateş olursa kontrolü beklemeden bize ulaşın.</p>
    </div>
  </div>
</section>

<!-- ═════ BENTO ═════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Randevu ve seyir</p>
      <h2>Seanslar nasıl planlanır, sonraki günlerde neler olur?</h2>
      <p class="giris">Tanışma görüşmesi ile uygulama günü ayrıdır. Burada beklentiyi gerçekçi kurmak, takvimden daha önemlidir.</p>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="60" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>2–4 hf</b></div>
        <p><b style="color:var(--murekkep)">Seans aralığı</b><br>Cildin bir önceki cihaz basamağından toparlanması için arada birkaç hafta bırakılır; dizinin uzunluğu baştan sabitlenmez.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">İyileşme seyri</span>
        <div class="g-cubuk"><small><span>Kızarıklık, sıcaklık hissi</span><span>1–3 gün</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="20%"></b></div></div>
        <div class="g-cubuk"><small><span>İnce kabuklanma, pullanma</span><span>Birkaç gün</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="45%"></b></div></div>
        <div class="g-cubuk"><small><span>Olası değişikliğin izlenmesi</span><span>Haftalar içinde</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="88%"></b></div></div>
        <p style="font-size:.72rem;color:var(--sessiz);margin-top:10px">Çubuk uzunlukları yalnız karşılaştırma içindir; size özel süreler muayenede konuşulur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Protokol</span>
        <ol class="g-protokol">
          <li>Muayene: şikâyetin kaynağı, ilaçlar, gebelik olasılığı, geçmiş hastalıklar</li>
          <li>Neyin beklenip neyin beklenmeyeceği konuşulur</li>
          <li>Ürünün hangi kaynaktan üretildiği ve kayıt durumu anlatılır; onam yazılı alınır</li>
          <li>Cihaz basamağı, ürünün uygulanması ve <a href="${r}uygulamalar/uygulama-sonrasi-takip/">kontrol</a> randevusu</li>
        </ol>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">İlke</span><p>“Emin olmadığımız bir sonucu vaat etmeyiz; neyi bildiğimizi ve neyi henüz bilmediğimizi aynı açıklıkla söyleriz.”</p></div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/ic3d-katman.webp" alt="Üst deri, alt deri ve deri altı dokuyu ayrı tonlarda gösteren üç boyutlu kesit" loading="lazy"><span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span></div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr style="--d:140ms"><h3>Beklentinizi birlikte tartalım</h3><p>Kararsız kaldığınızda uygulamayı ertelemek de sağlıklı bir seçimdir.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu talebi</a></div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Kimlerde uygulanmaz, ne zaman beklenir?</b>
        <ul>
          <li><b>Gebelik ve emzirme:</b> bu dönem boyunca uygulanmaz.</li>
          <li><b>Kanser tanısı ya da süren onkolojik tedavi:</b> hücre çoğalmasını etkileyebilecek sinyaller nedeniyle planlanmaz.</li>
          <li><b>Cilt ya da saçlı deride süren bir sorun:</b> uçuk döküntüsü, iltihaplı sivilce, egzama atağı, enfeksiyon veya kapanmamış yara geçmeden uygulama yapılmaz.</li>
          <li><b>Aşırı duyarlılık öyküsü:</b> ürün içeriğine, uyuşturucu kreme ya da antiseptiğe karşı geçmişteki her reaksiyonu muayenede söyleyin.</li>
          <li><b>Bağışıklığı baskılayan tedavi,</b> aktif otoimmün hastalık ve keloid eğilimi.</li>
          <li><b>Kan sulandırıcı ilaç ya da pıhtılaşma sorunu:</b> mikro kanal açan cihaz basamağında sızıntı ve morluk artabilir; ilacınızda yapılacak her değişiklik, onu yazan hekimle birlikte kararlaştırılır.</li>
          <li><b>18 yaşından küçükler:</b> uygulama planlanmaz.</li>
          <li><b>Nedeni aydınlatılmamış saç dökülmesi:</b> önce neden araştırılır.</li>
        </ul>
      </div>
      <div class="kutu kutu--acil g-b2" data-gr style="--d:70ms">
        <b>Beklemeden başvurun</b>
        <p>İşlemden sonraki saatlerde vücudunuzda kurdeşen yayılır, göz kapakları, dudaklar ya da dil şişer, yutkunmak veya nefes almak zorlaşırsa vakit kaybetmeden <b>112</b>’yi arayın ya da size en yakın acil servise gidin. Sonraki günlerde uygulama alanında giderek artan ağrı, akıntı, büyüyen kızarıklık ya da ateş gelişirse kontrol gününü beklemeden muayenehaneye ulaşın.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ SONRASI VE ALTERNATİFLER ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Sonrası ve seçenekler</p>
      <h2>Uygulamadan sonra neye dikkat edilir, başka bir yol daha uygun olabilir mi?</h2>
      <p class="giris">Cihaz basamağı cilt yüzeyinde mikro kanallar açtığı için ilk gün yalnızca size verilen sakinleştirici ürün sürülür, makyaj ve terleten ortamlar ertesi güne kalır; retinoid, asit ve soyucu ürünlere iki gün ara verilir, güneş koruyucu her sabah kullanılır. Eksozom çoğu zaman ilk seçenek değildir. Cildin susuz ve donuk görünmesi öndeyse <a href="${r}uygulamalar/genclik-asisi-skinbooster/">gençlik aşısı</a> ile <a href="${r}uygulamalar/mezoterapi/">mezoterapi</a>; iz, gözenek ve pürüzlü doku öne çıkıyorsa <a href="${r}uygulamalar/fraksiyonel-lazer/">fraksiyonel lazer</a> daha uzun süredir kullanılan yollardır. Hazır bir ürün yerine kendi kanınızdan hazırlanan bir seçenek isterseniz <a href="${r}uygulamalar/prp/">PRP</a>, ince ve yorgun görünen ciltte <a href="${r}uygulamalar/somon-dna-polinukleotid/">somon DNA ve polinükleotid</a> de konuşulabilir. Hangisinin önce geleceğine, <a href="${r}cilt-sorunlari/">cilt sorunları</a> başlığında anlatılan ayrım yapıldıktan sonra birlikte karar veririz.</p>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sorgulayın</p><h2>Bir soru seçin, yanıtını okuyun</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr')} · eksozom · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>PRP ile eksozom arasındaki fark nedir?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Evde sürdüğüm eksozom serumu ile muayenehanedeki uygulama aynı mı?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>İlk seanstan sonra değişiklik görür müyüm?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Verisi sınırlı bir yöntemi neden sunuyorsunuz?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Hangi ürünün kullanıldığını nasıl öğrenirim?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sayfada yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekim onaylı yanıt</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede konuşalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["PRP ile eksozom arasındaki fark nedir?","Temel fark kaynaktadır. PRP aynı randevuda sizin kanınızdan hazırlanır ve size uygulanır; eksozom ürünleri ise laboratuvarda üretilmiş hücre kültürlerinden elde edilen hazır ürünlerdir. PRP tıpta daha uzun süredir kullanılmaktadır; eksozomda ise hazır bir ürün söz konusu olduğundan, ürünün içeriğini ve kaydını bilmek önem kazanır."],["Evde sürdüğüm eksozom serumu ile muayenehanedeki uygulama aynı mı?","Hayır. Deri yüzeyi bütünlüğünü koruduğunda, nanometre boyutundaki bu yapıların alt katmanlara geçişi oldukça kısıtlıdır. Muayenehanede ürün, bir cihazla açılan mikro kanalların hemen ardından uygulanır ve bu, ulaşılabilen katmanı değiştirir. Yine de ne kadarının hangi derinliğe ulaştığı henüz ölçülebilmiş değildir."],["İlk seanstan sonra değişiklik görür müyüm?","Genellikle hayır. Cilt yenilenmesi haftalar alan bir süreçtir; birkaç hafta arayla yapılan seanslardan sonra bile değişiklik sınırlı kalabilir. Dizinin uzunluğuna, ilk seanslardan sonra cildinizin nasıl yanıt verdiğine bakılarak karar verilir."],["Verisi sınırlı bir yöntemi neden sunuyorsunuz?","Eksozom hakkında soru soran pek çok kişiyle karşılaşıyoruz; bu kişilerin bir bölümü yöntemi başka yerlerde abartılı vaatlerle dinlemiş oluyor. Bizim tutumumuz, yöntemi saklamak ya da parlatmak değil; ne kadarının bilindiğini anlatıp kararı size bırakmak. Denememeyi seçmek de sizin hakkınızdır."],["Hangi ürünün kullanıldığını nasıl öğrenirim?","Size uygulanan ürünün adı ve parti numarası dosyanıza işlenir; isterseniz kutuyu uygulamadan önce birlikte inceleriz. Seçimde yasal satış izni, açık üretici ve içerik bilgisi ile parti numarasıyla izlenebilirlik aranır."],["Ücret bilgisi neden sayfada yok?","Sağlık hizmetlerinin tanıtımını düzenleyen kurallar gereği ücret bilgisi internette yayımlanmaz. Uygulanacak alan, eşlik eden cihaz basamağı ve seans sayısı kişiye göre değiştiğinden bu konu muayenede, planla birlikte konuşulur."]]</script>

<!-- ═════ KAPANIŞ ═════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Önce konuşalım, sonra karar verelim</h2>
    <p class="g-sonalt">Görüşmenin sonunda “şu an bir uygulamaya gerek yok” noktasına varmak da mümkündür; bu da sağlıklı bir sonuçtur.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesini doldurun</a>
    </div>
  </div>
</section>
`,
};
