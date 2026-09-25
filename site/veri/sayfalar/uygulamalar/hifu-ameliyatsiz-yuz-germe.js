const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/hifu-ameliyatsiz-yuz-germe',
  tip: 'tibbi',
  baslik: 'HIFU ile ameliyatsız yüz germe: ne yapar, ne yapamaz?',
  aciklama: 'Halk arasında ameliyatsız yüz germe denen HIFU, odaklanmış ultrasonla derin katmanlara ısı verir. Kimlere uygun olduğu, cerrahiden farkı ve sonrası.',

  icerik: (r, ik) => `
<!-- HERO -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>HIFU ile ameliyatsız yüz germe</span></nav>
      <p class="g-etiket">Cihaz ve Lazer · Cilt Sıkılığı</p>
      <h1>HIFU ile ameliyatsız yüz germe: ultrason <span class="g-isik">derin katmana</span> odaklanır.</h1>
      <p class="g-hero__alt">Büyüteçle toplanan güneş ışığı gibi, HIFU başlığından çıkan ses dalgaları da deri yüzeyini ısıtmadan geçip belirli bir derinlikte tek noktada birleşir. Bu noktalarda oluşan küçük ısı odakları dokuda yavaş ilerleyen bir onarımı başlatır. Halk arasında “ameliyatsız yüz germe” diye anılsa da cerrahinin yerini tutmaz; hedef, hafif–orta gevşemede sıkılıkta görünür bir değişimdir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Yöntemin işleyişi ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Seansı hekim uygular</span><span><i></i>Cerrahinin yerini tutmaz</span><span><i></i>İkinci–üçüncü ayda kontrol</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-hifu-ameliyatsiz-yuz-germe.webp" width="1400" height="788" alt="Deri katmanlarında tek noktada toplanan ses dalgalarının üç boyutlu çizimi" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- VERİ BANDI -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="3">0</em></b><span>Hedeflenebilen katman</span></div>
  <div data-gr style="--d:70ms"><b>60–90&#8239;dk</b><span>Tüm yüz için seans</span></div>
  <div data-gr style="--d:140ms"><b><em data-gsay="8">0</em>.&#8239;hafta</b><span>Değişimin fark edilmeye başlaması</span></div>
  <div data-gr style="--d:210ms"><b>Tek</b><span>Çoğu planda ilk seans sayısı</span></div>
</div></div>

<!-- BU NEDİR / BU NE DEĞİLDİR -->
<section class="bolum" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Tanım ve sınırlar</p><h2>HIFU ne yapar, neden bir ameliyat değildir?</h2><p class="giris">Yıllar içinde yüzde üç şey birden değişir: deri ve onu taşıyan bağ dokusu gevşer, yanaktaki yağ yastıkçıkları aşağı kayar ya da incelir, kemik desteği geriler. Ultrason enerjisinin etki ettiği yer bunlardan yalnızca biridir: gevşeyen taşıyıcı doku. Bu yüzden karar, yüzün bütünü değerlendirildikten sonra verilir. Tablonun bütününe <a href="${r}cilt-sorunlari/hacim-kaybi-ve-sarkma/">hacim kaybı ve sarkma</a> sayfasından ulaşabilirsiniz.</p></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>Enerjinin toplandığı yerde milimetreden küçük ısı noktaları oluşur; deride kesi, açık yara ya da soyulma olmaz. Isınan noktalarda kolajen lifleri büzülür, sonraki haftalarda vücut bu noktaları onarırken yeni kolajen yapar. Görülecek değişim o gün değil, bu onarım ilerledikçe ortaya çıkar.</p>
<p>Bir başlık derinin hemen altına, bir başkası daha aşağıdaki derin deriye, en derini ise yüz germe ameliyatında cerrahın da ele aldığı kas–bağ dokusu tabakasına odaklanır. Göz kapağına yakın, derinin kâğıt kadar ince olduğu yerlerde en derin başlığa yer yoktur; seçim, deri kalınlığına ve sinirlerin seyrine göre bölge bölge yapılır.</p>
<p><b>Kullanılan cihaz:</b> Nano HIFU (Allura IV++).</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:80ms">
        <b>Bu ne değildir</b>
        <p>HIFU cerrahi yüz germenin yerini tutmaz; deri fazlalığında cerrahi önerilir. Ameliyatta fazla deri alınır ve dokular yeniden konumlandırılır; HIFU’da deri yerinde kalır ve sarkan fazlalığı ortadan kaldıracak bir etki beklenmez. “Ameliyatsız yüz germe” adı bu yüzden bir benzetmedir, eşdeğerlik anlamına gelmez.</p>
<p>Değişimi en çok, gevşemesi yeni başlamış ve derisi hâlâ dolgun kişiler fark eder. Çene altında ve boyunda deri katlanıyorsa, yüz çok zayıflamışsa ya da uzun yıllar sigara içilmişse beklenen katkı düşüktür ve HIFU önerilmez. Asıl sorun hacim kaybıysa ısı değil hacim desteği konuşulur; bu seçenek <a href="${r}uygulamalar/sivi-yuz-germe/">sıvı yüz germe</a> sayfasında anlatılır. Beklentiniz ancak ameliyatla karşılanabilecekse bunu açıkça söyleriz; gerekçesini <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a> başlığı altında yazdık.</p>
      </div>
    </div>
  </div>
</section>

<!-- BENTO -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Planlama</p><h2>Seans nasıl ilerler, hangi durumlarda yapılmaz?</h2><p class="giris">Önce yüz temizlenir ve enerji verilecek hatlar kalemle çizilir. Kemiğe yakın noktalar daha çok hissedilebilir; rahatsızlık artarsa enerji azaltılır.</p></div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="72" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>3 katman</b></div>
        <p><b style="color:var(--murekkep)">Başlık seçimi</b><br>Her bölgeye aynı derinlik uygulanmaz; seçim deri kalınlığına ve o bölgede sinir ile damarların ne kadar yüzeyde seyrettiğine göre yapılır.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Bölgeye göre odak</span>
        <div class="g-cubuk"><small><span>ALIN VE GÖZ ÇEVRESİ</span><span>Sığ odak</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="24%"></b></div></div>
        <div class="g-cubuk"><small><span>BOYUN VE ÇENE ALTI</span><span>Orta odak</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="58%"></b></div></div>
        <div class="g-cubuk"><small><span>YANAK VE ÇENE HATTI</span><span>Derin odak</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="92%"></b></div></div>
        <p style="font-size:.68rem;color:var(--sessiz);margin-top:8px">Çubuk boyları yalnız karşılaştırma içindir; size özel plan muayenede kurulur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Protokol</span>
        <ol class="g-protokol">
          <li>Yüzün bütünüyle değerlendirilmesi: gevşeme, deri kalınlığı, yağ dağılımı, geçmiş işlemler</li>
          <li>Onam görüşmesi; hiç işlem yapmamak da seçenekler arasındadır</li>
          <li>Temizlik, hatların çizilmesi ve ultrason jeli</li>
          <li>Başlığın hat boyunca kaydırılarak sıralı atım yapılması</li>
          <li>Soğuk uygulama, bakım notu ve ikinci–üçüncü ayda kontrol</li>
        </ol>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Uygulamanın yapılmadığı ya da ertelendiği durumlar</b>
        <p>Gebelik ve emzirme boyunca yapılmaz. Yüzde uçuk, iltihaplı sivilce, alevlenmiş egzama, açık yara ya da henüz kapanmamış bir kesi varsa önce deri toparlanır.</p>
<p>Son aylarda dolgu, askı ipi ya da ameliyat olduysanız dokunun yerine oturması beklenir; <a href="${r}uygulamalar/dolgu-uygulamalari/">dolgu uygulaması</a> geçmişiniz varsa hangi bölgeye ve ne zaman yapıldığını söyleyin. Yanaklarındaki yağ dokusu zaten ince olan birinde HIFU planlanmaz; ısı yüzü daha çökük gösterebilir.</p>
<p>Keloid eğilimi, etkin bağ dokusu hastalıkları ve şekeri düzensiz seyreden diyabet uygunluğu değiştirir. Uygulama alanında metal implant, kalıcı yapay malzeme ya da incelenmemiş bir şişlik varsa o bölge atlanır; tiroid bezinin üzeri ve büyük damar ile sinirlerin deriye yakın geçtiği hatlar da uygulama dışında tutulur. Herhangi bir ilaca ya da maddeye aşırı duyarlılığınız varsa bunu da not ettirin.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/uyg-hifu-ameliyatsiz-yuz-germe-2.webp" alt="Yandan ışık alan çene hattı ve boyun profilinin yumuşak tonlu görünümü" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">İlke</span><p>"Beklentiniz ancak cerrahiyle karşılanacaksa bunu seanstan önce söyleriz."</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Seans sonrası</span>
        <p style="font-size:.92rem">Seanstan çıkınca işe ya da eve dönebilirsiniz. Birkaç gün sauna, hamam, çok sıcak duş ve ağır antrenman ertelenir; yüze sert masaj yapılmaz ve her sabah güneş koruyucu sürülür. Hafif pembelik ve şişlik çoğunlukla aynı gün geçer, dokununca hissedilen hassasiyet birkaç hafta sürebilir. Onarım yavaş ilerlediği için ilk fark iki ay dolaylarında, en belirgin hâli ise üç ila altı ay arasında görülür. Yaşlanma durmadığından etki kalıcı değildir; ek seans kontrollerde konuşulur. Sonuçlar kişiden kişiye değişir.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr style="--d:140ms"><h3>Yüzünüzü görmeden karar vermeyelim</h3><p>Deri kalınlığınız ve yağ dağılımınız muayenede değerlendirilir.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu talebi</a></div>
      <div class="kutu kutu--acil g-b6" data-gr>
        <b>Beklemeden bize ulaşmanız gereken durumlar</b>
        <p>Sonraki günlerde deride kabarcık ya da açık yara belirirse, kızarıklık yayılır, ağrı artar, akıntı ya da ateş olursa; aynaya baktığınızda yüzünüzde bir yamukluk ya da gülümserken bir tarafta zayıflık görürseniz kontrol gününü beklemeyin. ${S.iletisim.tel} numarasından bize ulaşın; telefonla ulaşamıyorsanız <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
      </div>
    </div>
  </div>
</section>

<!-- SORU TERMİNALİ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLowerCase()} · hifu · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Ameliyatsız yüz germe, ameliyatla aynı sonucu verir mi?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Seans sırasında neler hissederim?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Tek seans yeterli olur mu?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Değişimi ne zaman görürüm, ne kadar sürer?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Daha önce dolgu yaptırdım, HIFU olur mu?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nasıl öğrenebilirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Ameliyatsız yüz germe, ameliyatla aynı sonucu verir mi?","Hayır. HIFU cerrahi yüz germenin yerini tutmaz. Ameliyatta sarkan deri kesilip alınır; ultrasonla ise hiçbir doku çıkarılmaz. Hafif–orta gevşemede sıkılıkta görünür bir değişim hedeflenir; belirgin deri fazlalığında cerrahi önerilir."],["Seans sırasında neler hissederim?","Yüzeysel başlıkta çoğu kişi ılık bir karıncalanma tarif eder. En derin başlıkla çalışılırken çene kenarı ve elmacık kemiği gibi yerlerde anlık bir sızı duyulabilir. Rahatsızlık belirginleşirse enerji azaltılır ya da seans ikiye bölünür."],["Tek seans yeterli olur mu?","Başlangıçta genellikle yalnız bir seans planlıyoruz; ne kadar değişim olduğuna üç ay sonra birlikte bakıyoruz. Onarım aylar sürdüğü için erken yapılan ikinci seans ek fayda sağlamaz; gerekirse iki seans arasına genellikle en az altı ay konur."],["Değişimi ne zaman görürüm, ne kadar sürer?","İlk fark çoğunlukla sekizinci hafta dolaylarında görülür ve üçüncü ile altıncı aylar arasında belirginleşir. Yaşlanma sürdüğü için etki kalıcı değildir. Yaşam biçimi de rol oynar: korumasız güneş ve sigara etkiyi kısaltır, hızlı kilo değişimleri görünümü değiştirir. Sonuçlar kişiden kişiye değişir."],["Daha önce dolgu yaptırdım, HIFU olur mu?","Dolgu tek başına engel değildir; hangi bölgeye, ne zaman ve hangi ürünle yapıldığını bilmemiz gerekir. Yeni yapılmış dolgunun yerine oturması beklenir ve enerji o bölgeye göre planlanır. Geçmişteki bütün işlemlerinizi muayenede paylaşın."],["Ücret bilgisini nasıl öğrenebilirim?","Sağlık hizmetlerinin tanıtımını düzenleyen kurallar ücretlerin internette yayımlanmasına izin vermez. Çalışılacak bölgeler kişiye göre değiştiği için bu konu muayenede konuşulur."]]</script>

<!-- KAPANIŞ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>HIFU’nun yüzünüzdeki yerini birlikte görelim</h2>
    <p class="g-sonalt">Sıkılık kaybının hangi katmandan kaynaklandığı belli olmadan HIFU’nun katkısı tahmin edilemez.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
