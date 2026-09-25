const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/sivi-yuz-germe',
  tip: 'tibbi',
  baslik: 'Sıvı yüz germe: çok noktalı dolgu ve destek planlaması',
  aciklama: 'Sıvı yüz germe, yüzün birden çok bölgesine aynı planda dolgu ve destek uygulanmasıdır; cerrahinin yerini tutmaz. Kimlere uygun, riskleri neler?',

  icerik: (r, ik) => `
<!-- ═════ G HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Sıvı yüz germe</span></nav>
      <p class="g-etiket">Enjeksiyon Uygulamaları · Bütüncül Planlama</p>
      <h1>Tek bölge değil, <span class="g-isik">yüzün bütünü</span> planlanır</h1>
      <p class="g-hero__alt">“Sıvı yüz germe” (liquid facelift), yüzün birden çok noktasına aynı plan içinde hyalüronik asit dolgu ve gerektiğinde destekleyici uygulamalar yapılmasını anlatan halk arasındaki addır. Amaç, zamanla dağılan desteği birkaç kilit noktadan toparlayarak yüzün daha dinlenmiş görünmesine katkı sağlamaktır. Cerrahi yüz germenin yerini tutmaz; deri fazlalığı belirgin olan kişilerde cerrahi değerlendirme önerilir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#nedir">Kimler için uygun ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Tek plan, aşamalı seanslar</span><span><i></i>Cerrahinin yerini tutmaz</span><span><i></i>Kontrol planın parçası</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-sivi-yuz-germe.webp" width="1400" height="788" alt="Yüzü yumuşak yan ışıkla aydınlanmış orta yaşlı bir kadının profil portresi" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <div class="g-hud" data-ghud><b>Kilit noktalar, küçük miktarlar</b><div class="g-cizgi"></div><span>Orta yüzde kurulan destek, alt yüzdeki gölgelerin görünümünü de değiştirebilir.</span></div>
    </div>
  </div>
</section>

<!-- ═════ VERİ BANDI ═════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="5">0</em></b><span>Değerlendirilen bölge</span></div>
  <div data-gr style="--d:60ms"><b><em data-gsay="5">0</em></b><span>Protokol basamağı</span></div>
  <div data-gr style="--d:120ms"><b>Aşamalı</b><span>Seanslara yayılan plan</span></div>
  <div data-gr style="--d:180ms"><b>Yazılı</b><span>Onam her seansta</span></div>
</div></div>

<!-- ═════ NEDİR / NE DEĞİLDİR ═════ -->
<section class="bolum bolum--buz2" id="nedir">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Tanım ve sınırlar</p>
      <h2>Sıvı yüz germe nedir, cerrahi yüz germeden farkı nedir?</h2>
      <p class="giris">Yaş ilerledikçe yüzde tek bir değişiklik olmaz: kemik desteği azalır, yağ bölmeleri incelir ve aşağı doğru yer değiştirir, deri esnekliğini yitirir. Tek bir çizgiye odaklanan uygulama bu tabloyu çoğu zaman karşılamaz. Bu yaklaşımda yüz bütün olarak incelenir ve desteğin en çok azaldığı noktalar tek plan içinde, öncelik sırasıyla ele alınır.</p>
    </div>
    <div class="izgara izgara--2" data-gr>
      <div class="kutu kutu--bilgi">
        <b>Bu nedir</b>
        <p>Farklı yoğunluktaki hyalüronik asit ürünlerinin, yüzün birkaç kilit noktasına aynı değerlendirme üzerinden ve çoğunlukla birkaç seansa bölünerek yerleştirilmesidir. Plan gerektiğinde <a href="${r}uygulamalar/botulinum-toksin/">botulinum toksin</a>, <a href="${r}uygulamalar/biyostimulan-uygulamalar/">biyostimülan</a> ya da cilt kalitesine yönelik uygulamalarla desteklenebilir. Hedef yüze yeni bir şekil vermek değil, kaybolan desteği yerine koyarak bölgeler arasındaki geçişi yumuşatmaktır; kullanılacak toplam miktar da bu hedefe göre sınırlanır.</p>
      </div>
      <div class="kutu kutu--uyari">
        <b>Bu ne değildir</b>
        <p><b>Cerrahi yüz germenin yerini tutmaz:</b> adında “germe” sözcüğü geçse de deri gerilmez, fazla deri alınmaz, sarkan doku ameliyattaki gibi yerinden kaldırılmaz. <b>Belirgin deri fazlalığında uygun değildir:</b> çene hattının altında ve boyunda katlanan deri varsa plastik cerrahi değerlendirmesi önerilir.</p>
<p><b>Tek seansta tamamlanan bir işlem değildir;</b> toplam miktar ve seans sayısı kişiye göre belirlenir. <b>Daha fazla ürün daha doğal görünüm demek değildir:</b> aşırı hacim yüzü ağırlaştırır. <b>Kalıcı değildir;</b> kullanılan ürünler zamanla vücut tarafından yıkılır.</p>
      </div>
    </div>
    <div class="izgara izgara--3" data-gr style="margin-top:22px;--d:70ms">
      <div class="kart kart--duz">
        <h3>Şakak ve alın geçişi</h3>
        <p>Şakaklardaki çökme, yüzün üst kısmını daha köşeli ve yorgun gösterebilir. Bölgede önemli damar ve sinirler bulunduğu için derinlik seçimi titizlik ister; her planda yer almaz.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Elmacık ve orta yüz</h3>
        <p>Çoğu planın ilk basamağıdır. Orta yüzde kurulan destek, göz altı oluğunun ve nazolabial çizginin görünümünü de etkileyebilir; bu yüzden alt bölgelere geçmeden önce bu basamağın sonucunu görmek gerekir.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Göz altı oluğu</h3>
        <p>Uygun bir tablo varsa, çok küçük miktarla ve genellikle orta yüz desteğinden sonra ele alınır. Yüzün en dar toleranslı bölgesi olduğu için ayrıntıyı <a href="${r}uygulamalar/dolgu-uygulamalari/#goz-alti">göz altı dolgusu</a> bölümünde anlattık.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Nazolabial ve ağız köşesi</h3>
        <p>Burun kenarından ağız köşesine inen çizgi ve ağız köşesinden çeneye uzanan gölge, çoğunlukla üst bölgelerdeki destek kaybının yansımasıdır. Bu çizgilere doğrudan ürün vermek ancak kaynağa bakıldıktan sonra düşünülür.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Çene ucu ve jawline</h3>
        <p>Alt yüz sınırının belirsizleşmesi, çene ucunun geride kalması ve çene hattındaki çentiklenme birlikte değerlendirilir. Profil, diş kapanışı ve boyun açısı plana dâhil edilir. Bölge ayrıntısı: <a href="${r}bolgeler/cene-ve-jawline/">çene ve jawline</a>.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Önce doğru başlık</h3>
        <p>Şikâyetinizin daha çok sarkmadan mı yoksa hacim kaybından mı kaynaklandığını <a href="${r}cilt-sorunlari/hacim-kaybi-ve-sarkma/">hacim kaybı ve sarkma</a> sayfası ayırt etmenize yardımcı olur. Tek bölgeye odaklı bilgi için <a href="${r}uygulamalar/dolgu-uygulamalari/">dolgu uygulamaları</a>, bütün yüz planı için <a href="${r}bolgeler/yuz/">yüz</a> sayfasına bakabilirsiniz.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ BENTO: PLANLAMA ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Süreç</p>
      <h2>Çok bölgeli plan adım adım nasıl kurulur?</h2>
      <p class="giris">Bütün bölgeler aynı gün ele alınmaz. Önce yüzün taşıyıcı noktaları desteklenir; ödem çekilip sonuç görüldükten sonra bir sonraki basamağa geçilir.</p>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="70" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>3 basamak</b></div>
        <p><b style="color:var(--murekkep)">Taşıyıcıdan ayrıntıya</b><br>Önce orta yüz ve şakak, sonra alt yüz, en son ince ayar: her basamak, bir öncekinin sonucu görüldükten sonra planlanır.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Zaman akışı</span>
        <div class="g-cubuk"><small><span>İlk seans</span><span>Taşıyıcı noktalar</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="35%"></b></div></div>
        <div class="g-cubuk"><small><span>Kontrol</span><span>Ödem çekildikten sonra</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="65%"></b></div></div>
        <div class="g-cubuk"><small><span>Sonraki basamak</span><span>Alt yüz ve ince ayar</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="95%"></b></div></div>
        <p style="font-size:.72rem;color:var(--sessiz);margin-top:10px">Çubuklar oransal bir simgedir; size özel takvim muayenede netleşir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Protokol</span>
        <ol class="g-protokol">
          <li>Öykü: önceki dolgular ve ürünleri, ilaçlar, kronik hastalıklar ve bilinen duyarlılıklar kaydedilir.</li>
          <li>Bütüncül yüz analizi: yüz önden, yandan ve hareket hâlinde incelenir; onay verirseniz aynı ışık ve açıyla fotoğraf kaydı alınır.</li>
          <li>Seçeneklerin konuşulması: deri fazlalığı belirginse cerrahi değerlendirme önerilir; uygunsa bölgelerin sırası ve seans planı yazılı hâle getirilir.</li>
          <li>Bilgilendirme ve onam: her seansın riskleri ve hiç uygulama yapmama seçeneği ayrıca konuşulur; yazılı onam alınır.</li>
          <li>Uygulama ve kontrol: her basamaktan sonra ödemin çekilmesi beklenir, sıradaki adım kontrolde yeniden değerlendirilir.</li>
        </ol>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Hangi durumlarda uygulanmaz, hangilerinde ertelenir?</b>
        <p><b>Uygulamanın yapılmadığı durumlar:</b></p>
        <ul>
          <li>Hyalüronik asit ürünlerine ya da yardımcı maddelerine karşı bilinen aşırı duyarlılık</li>
          <li>Belirgin deri fazlalığı ve sarkma — bu tabloda cerrahi değerlendirme önceliklidir</li>
          <li>Uygulama bölgelerinin herhangi birinde aktif enfeksiyon, iltihaplı sivilce ya da açık yara</li>
          <li>Daha önce uygulanmış, içeriği bilinmeyen ya da çözünmeyen ürünlerin bulunduğu bölgeler</li>
          <li>Gebelik ve emzirme dönemi</li>
          <li>Yüzün bütünüyle değişmesi gibi uygulamanın karşılayamayacağı beklentiler</li>
        </ul>
        <p><b>Ertelenen ya da ayrıca planlanan durumlar:</b></p>
        <ul>
          <li>Son haftalarda geçirilen bir enfeksiyon, aşı ya da diş tedavisi</li>
          <li>Pıhtılaşmayı etkileyen ilaçlar ya da kanama bozukluğu</li>
          <li>Kontrolsüz seyreden otoimmün hastalık veya bağışıklık sistemini baskılayan ilaçlar</li>
          <li>Hızlı kilo kaybının sürdüğü dönem — yüz hacmi değişmeye devam ederken plan kurulmaz</li>
          <li>Anafilaksi öyküsü ya da daha önceki bir enjeksiyonda gelişmiş ağır reaksiyon</li>
        </ul>
        <p>Önceki uygulamalarınıza ait belge ve fotoğraflar, planın hangi noktadan başlayacağını belirlemede yol gösterir.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/uyg-sivi-yuz-germe-2.webp" alt="Yüzün orta ve alt bölümünü yumuşak yan ışıkta gösteren yakın plan" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b3 g-kutu--gece" data-gr><span class="g-ket">İlke</span><p>“Bütün yüze bakmak, her yere ürün vermek demek değildir. Çoğu planda birkaç doğru nokta yeterlidir.”</p></div>
      <div class="g-kutu g-b3 g-kutu--cta" data-gr style="--d:70ms"><h3>Yüzünüzü bütün olarak değerlendirelim</h3><p>Planın kapsamı ve sırası muayeneden sonra netleşir.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu talebi</a></div>
    </div>
  </div>
</section>

<!-- ═════ RİSKLER ═════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Riskler</p>
      <h2>Çok bölgeli uygulamadan sonra neler görülebilir, ne zaman beklemeden başvurulur?</h2>
      <p class="giris">Birden çok bölge ele alındığında her bölgenin kendi riskleri geçerlidir; toplam miktar arttıkça ödem ve düzensizlik olasılığı da artabilir. Planın seanslara bölünmesinin bir nedeni de budur.</p>
    </div>
    <div class="izgara izgara--3" data-gr>
      <div class="kart kart--duz">
        <h4>Sık görülen, kısa süreli</h4>
        <p>Birden fazla bölgede şişlik, morluk, hassasiyet ve çiğnerken ya da gülerken hissedilen gerginlik. Çoğunlukla birkaç gün ile iki hafta arasında geriler.</p>
      </div>
      <div class="kart kart--duz">
        <h4>Daha az görülen</h4>
        <p>Asimetri, görünür kabarıklık, ürünün yer değiştirmesi, uzun süren ödem ve toplam hacmin fazla olmasına bağlı olarak yüzün ağırlaşmış görünmesi.</p>
      </div>
      <div class="kart kart--duz">
        <h4>Geç dönemde</h4>
        <p>Haftalar ya da aylar sonra ortaya çıkan sertlik, nodül ve tekrarlayan şişlik. Bağışıklık sistemiyle ilişkili olabilir; bir enfeksiyon, aşı ya da diş tedavisinin ardından tetiklenebilir.</p>
      </div>
    </div>
    <div class="kutu kutu--acil" style="margin-top:22px" data-gr>
      <b>Beklemeden başvurmanız gereken belirtiler</b>
      <p>Uygulama sırasında ya da sonrasında beklenenden çok daha şiddetli ağrı, derinin solması ya da beyazlaması, ağ biçiminde mor renk değişimi, görmede bulanıklık veya kayıp ve göz çevresinde şiddetli ağrı gelişirse vakit kaybetmeyin. Bu bulgular ürünün bir damarı tıkamış olabileceğini düşündürür. Hemen bize ulaşın; ulaşamazsanız <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
    </div>
    <div class="kutu kutu--bilgi" style="margin-top:16px" data-gr>
      <p>Hyalüronik asit ürünlerinin gerekli durumlarda enzimle çözülmesine ilişkin bilgiyi <a href="${r}uygulamalar/dolgu-uygulamalari/">dolgu uygulamaları</a> sayfasının riskler bölümünde bulabilirsiniz. Bu olasılık ve izlenecek yol, uygulamadan önce sizinle ayrıca konuşulur.</p>
    </div>
  </div>
</section>

<!-- ═════ SEANS VE SÜRE ═════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Zamanlama</p>
      <h2>Plan kaç seansa yayılır, etkisi ne kadar sürer?</h2>
    </div>
    <div class="izgara izgara--3" data-gr>
      <div class="kart kart--duz">
        <h4>Seans düzeni</h4>
        <p>Toplam plan çoğunlukla birkaç seansa bölünür ve aralarında ödemin çekilmesi için birkaç hafta bırakılır. Seans sayısı baştan sabitlenmez; her kontrolde bir sonraki basamağın gerekip gerekmediğine yeniden karar verilir.</p>
      </div>
      <div class="kart kart--duz">
        <h4>Kalıcılık</h4>
        <p>Ürünlerin dokuda kalma süresi bölgeden bölgeye değişir; sürekli hareket eden ağız çevresinde daha kısa, derin ve görece hareketsiz elmacık bölgesinde daha uzun olabilir. Etki tek seferde değil, bölge bölge ve yavaş yavaş azalır.</p>
      </div>
      <div class="kart kart--duz">
        <h4>Sürdürme</h4>
        <p>Etki azaldığında bütün planın baştan tekrarlanması gerekmez; yüz yeniden değerlendirilir ve yalnız ihtiyaç duyulan noktalar ele alınır. Yaşla birlikte deri gevşekliği arttığında bu yaklaşımın katkısı azalır ve başka seçenekler konuşulur. Sonuçlar kişiden kişiye değişir.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ UYARI + KAPSAM + DEVAMI ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="kutu kutu--uyari" data-gr>
      <b>Uyarı</b>
      <p>Bu sayfa genel bilgilendirme amacıyla hazırlanmıştır ve kişisel bir tıbbi önerinin yerine geçmez. Çok bölgeli bir planın size uygun olup olmadığı ancak muayene ve öykünüz değerlendirildikten sonra anlaşılır. Girişimsel hiçbir işlemin sonucu önceden taahhüt edilemez; yanıt kişiden kişiye değişir. İçerik tanıtım ya da yönlendirme amacı taşımaz.</p>
    </div>
    <div class="kutu kutu--bilgi" style="margin-top:16px" data-gr>
      <b>Kapsam</b>
      <p>${S.hekim.tam}, uzmanlık alanı ve Sağlık Bakanlığı onaylı medikal estetik sertifikasının tanımladığı sınırlar içinde çalışır. Cerrahi gerektiren bir tabloda enjeksiyonla çözüm aranmaz; plastik cerrahi uzmanlık dalına başvurmanız önerilir. Sınırın nereden geçtiğini <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a> sayfasında anlattık.</p>
    </div>
    <div class="g-haplar" style="margin-top:22px" data-gr>
      <a href="${r}uygulamalar/dolgu-uygulamalari/">Dolgu uygulamaları</a>
      <a href="${r}uygulamalar/biyostimulan-uygulamalar/">Biyostimülan uygulamalar</a>
      <a href="${r}uygulamalar/hifu-ameliyatsiz-yuz-germe/">HIFU ile sıkılaştırma</a>
      <a href="${r}cilt-sorunlari/hacim-kaybi-ve-sarkma/">Hacim kaybı ve sarkma</a>
      <a href="${r}uygulamalar/hekim-muayenesi/">Hekim muayenesi</a>
      <a href="${r}bolgeler/yuz/">Yüz planlaması</a>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka} · sıvı yüz germe · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Sıvı yüz germe gerçekten yüzü gerer mi?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Ne kadar ürün kullanılır?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Ameliyat yerine bunu yaptırabilir miyim?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Sonuç doğal görünür mü?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>HIFU ile farkı nedir?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Sıvı yüz germe gerçekten yüzü gerer mi?","Adı yanıltıcı olabilir. Uygulamada deri gerilmez; yüzün taşıyıcı noktalarına verilen destekle gölgelerin azalması ve yüzün daha dinlenmiş görünmesi amaçlanır. Sarkmanın ana nedeni deri fazlalığıysa bu yöntemin katkısı sınırlı kalır."],["Ne kadar ürün kullanılır?","Toplam miktar; yüzün yapısına, hacim kaybının derecesine ve hangi bölgelerin plana alındığına göre değişir. Önceden bir sayı vermek yerine plan basamaklara bölünür ve her kontrolde gerçekten ihtiyaç olup olmadığına yeniden bakılır."],["Ameliyat yerine bunu yaptırabilir miyim?","Deri fazlalığı ve belirgin sarkma varsa hayır. Bu tabloda cerrahi yüz germe ayrı bir değerlendirme gerektirir ve plastik cerrahi uzmanlık dalının konusudur. Hacim kaybının ön planda olduğu, deri esnekliğinin korunduğu kişilerde sıvı yüz germe bir seçenek olarak konuşulabilir."],["Sonuç doğal görünür mü?","Doğal görünüm, kullanılan ürünün miktarından çok nereye ve ne ölçüde verildiğiyle ilgilidir. Bu nedenle plan aşamalı ilerler ve her basamakta durulup durulmayacağı birlikte değerlendirilir. Sonuçlar kişiden kişiye değişir."],["HIFU ile farkı nedir?","HIFU, odaklanmış ultrason enerjisiyle derinin alt katmanlarında sıkılaşmayı hedefleyen bir cihaz uygulamasıdır ve hacim eklemez. Sıvı yüz germe ise kaybolan hacmin dolgu ürünleriyle desteklenmesine dayanır. Bazı planlarda ikisi birlikte düşünülebilir; karar muayenede verilir."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Muayenede size özel plan netleştiğinde bu bilgi doğrudan size iletilir."]]</script>

<!-- ═════ KAPANIŞ ═════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Yüzünüzün bütününe birlikte bakalım</h2>
    <p class="g-sonalt">Hangi noktaların önce ele alınacağını ve cerrahi değerlendirmenin gerekip gerekmediğini muayenede konuşuruz. ${S.iletisim.adres}, ${S.iletisim.ilce}.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
