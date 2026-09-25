const S = require('../../site');

module.exports = {
  slug: 'bolgeler/el',
  tip: 'tibbi',
  baslik: 'Eller için medikal estetik: el sırtında hacim ve leke',
  aciklama: 'Eller yaşı çoğu zaman yüzden önce belli eder: damarlar belirginleşir, güneş lekeleri çoğalır. Bakırköy muayenehanemizde hacim ve lekeyi ayrı ayrı planlıyoruz.',

  icerik: (r, ik) => `

<!-- 1 ── HERO -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}bolgeler/" style="color:var(--sessiz);text-decoration:none">Bölgeler</a> › <span>El</span></nav>
      <p class="g-etiket">Bölge rehberi · El</p>
      <h1>Eller yaşı <span class="g-isik">yüzden önce</span> ele verebilir.</h1>
      <p class="g-hero__alt">Yüzünüze gösterdiğiniz özeni çoğu zaman ellerinize gösteremezsiniz; güneş koruyucu nadiren sürülür, eller gün boyu suya ve deterjana değer. Zamanla deri altındaki yağ yastığı incelir, damarlar ve tendonlar belirginleşir, kahverengi lekeler çoğalır. Planda dolgunluk kaybı ile lekeler iki ayrı konu olarak ele alınır ve farklı seanslara bölünür.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu isteyin</a>
        <a class="dgm dgm--iki" href="#neden">Ellerde ne değişir? ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Uygulamayı hekim yapar</span><span><i></i>Hacim ve leke ayrı günlerde</span><span><i></i>Kontrol randevusu planın içinde</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/bolge-el.webp" width="1400" height="788" alt="Ellerin sırt yüzünü gösteren üç boyutlu stilize görsel" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- 2 ── VERİ BANDI -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="2">0</em></b><span>Ana konu: hacim ve leke</span></div>
  <div data-gr style="--d:70ms"><b><em data-gsay="7">0</em></b><span>Konuşulabilecek uygulama</span></div>
  <div data-gr style="--d:140ms"><b>2–4</b><span>Hafta sonra kontrol</span></div>
  <div data-gr style="--d:210ms"><b><em data-gsay="4">0</em></b><span>Hafta güneşten sonra bekleme</span></div>
</div></div>

<!-- 3 ── NEDEN ERKEN -->
<section class="bolum" id="neden">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Bölgeden bölgeye</p><h2>Ellerde değişim neden yüzden önce göze çarpar?</h2></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>İnce deri, az dolgu</b>
        <p>El sırtının derisi incedir ve altındaki yağ katmanı zaten az miktardadır. Yıllar geçtikçe bu katman daha da incelir; damarlar ve tendonlar derinin hemen altında seçilir hâle gelir, el sırtı çukurlaşır, ince kırışıklıklar artar. Esnekliği azalan deriyi hafifçe tutup bıraktığınızda eski yerine dönmesi de gecikir.</p>
      </div>
      <div class="kutu kutu--bilgi" data-gr style="--d:80ms">
        <b>Su, deterjan, güneş ve hareket</b>
        <p>Eller gün boyu suya, sabuna, temizlik ürünlerine ve açık havaya değer; oysa güneş koruyucu çoğu zaman yalnızca yüze sürülür. Parmaklar ve bilek de gün içinde sayısız kez bükülüp açılır. Bütün bunlar işlemden sonraki iyileşmeyi uzatır; bu yüzden ellerdeki plan yüzdekinden daha temkinli yapılır.</p>
      </div>
    </div>
  </div>
</section>

<!-- 4 ── ATLAS -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Katman katman bölge</p><h2>Ellerde hangi sorunlar bir arada görülür?</h2><p class="giris">El sırtıyla ilgili yakınmaların neredeyse hepsi iki başlığa ayrılır: dolgunluk kaybı ve renk. Bunlar farklı süreçlerle oluşur, farklı yöntemlerle ele alınır; aynı gün birlikte planlamak çoğunlukla doğru olmaz.</p></div>
    <div class="g-atlas-duzen">
      <div class="g-atlas" data-gr>
        <div class="g-atlas-kap">
          <img src="${r}varliklar/gorsel/uyg-hassas-cilt-bakim-protokolu.webp" width="1400" height="788" alt="Nemlendirici krem ve pamuk ped" loading="lazy">
          <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
          <div class="g-rozetk" data-grozet><b>Hacim kaybı</b><span>Kemikler ve tendonlar değişmez; üzerlerini örten katman incelir.</span></div>
        </div>
      </div>
      <div data-gr style="--d:80ms">
        <div class="g-katblok" data-gkat="a">
          <span class="g-kno">Kesit 01</span>
          <h3>Belirginleşen damar ve tendonlar</h3>
          <p>Deri altındaki yağ azaldıkça el tarağı kemiklerinin arasında çukurlar oluşur; tendonlar gergin teller, damarlar ise kabarık şeritler gibi öne çıkar. Değişen şey elin kendisi değil, onu örten yastığın kalınlığıdır. Bu yüzden burada düşünülen yol dolgunluk desteğidir; lekelere yönelik bir işlem bu tabloyu değiştirmez.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/dolgu-uygulamalari/">Dolgu uygulamaları</a><a href="${r}uygulamalar/biyostimulan-uygulamalar/">Biyostimülan uygulamalar</a></div>
        </div>
        <div class="g-katblok" data-gkat="b">
          <span class="g-kno">Kesit 02</span>
          <h3>Güneşin bıraktığı lekeler</h3>
          <p>Kenarları belirgin, açık ya da koyu kahverengi, düz lekelerdir ve çoğunlukla yılların güneşiyle ortaya çıkar. Kenarı düzensizleşen, hızla büyüyen ya da renginin koyulaştığını fark ettiğiniz bir leke ise işlemden önce ayırıcı tanı için değerlendirilmelidir.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/pico-lazer-leke/">Pico lazer ile leke</a><a href="${r}cilt-sorunlari/cilt-tonu-ve-leke/">Cilt tonu ve leke</a></div>
        </div>
        <div class="g-katblok" data-gkat="c">
          <span class="g-kno">Kesit 03</span>
          <h3>Kuruluk, incelen deri ve kolay morarma</h3>
          <p>Sık sık yıkanan, deterjana ve soğuğa maruz kalan ellerde derinin koruyucu tabakası zayıflar; yüzey pürüzlenir, ince çatlaklar belirir. Herhangi bir işlemden önce bu zeminin toparlanması gerekir.</p>
          <p>Deri ince ve damarlar yüzeye yakın olduğu için hafif bir çarpma bile morluk bırakabilir. Kan sulandırıcı ilaç kullanıyorsanız bu eğilim artar ve plan buna göre değişir.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/mezoterapi/">Mezoterapi</a><a href="${r}uygulamalar/genclik-asisi-skinbooster/">Gençlik aşısı (skinbooster)</a><a href="${r}cilt-sorunlari/nem-kaybi-ve-donukluk/">Nem kaybı ve donukluk</a></div>
        </div>
      </div>
    </div>
  </div>
</section>
<script type="application/json" data-gnokta-veri>{"a":["Hacim kaybı","Kemikler ve tendonlar değişmez; üzerlerini örten katman incelir."],"b":["Güneş lekesi","Biçimi ya da rengi değişen bir leke önce ayırıcı tanı ister."],"c":["Kuruluk ve morarma","Zayıflamış koruyucu tabaka, işlemden önce toparlanmalıdır."]}</script>

<!-- 5 ── MATRİS -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Uygulama dizini</p><h2>Eller için hangi seçenekler konuşulabilir?</h2><p class="giris">Muayenede gördüğümüz tabloya göre tek bir seçenek yeterli olabilir ya da birkaç seçenek haftalara bölünerek sıralanabilir. Hedefimiz dolgun görünen bir el değil, incelmiş örtüye ölçülü bir destek vermektir.</p></div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Yöntem</span><span>Amaç</span><span>Toparlanma</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/dolgu-uygulamalari/" data-gg="${r}varliklar/gorsel/uyg-dolgu-uygulamalari.webp" data-gb="Dolgu uygulamaları" data-ga="Dolgunluk kaybı belirginse tendon ve damarların üstündeki katmana az miktarda yerleştirilir; fazlası eli şişkin ve yapay gösterir."><h4>Dolgu uygulamaları</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">HACİM</i></span><span class="g-hucre">1–2 hafta dolgunluk hissi</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/biyostimulan-uygulamalar/" data-gg="${r}varliklar/gorsel/uyg-biyostimulan-uygulamalar.webp" data-gb="Biyostimülan uygulamalar" data-ga="Kolajen yapımını zamana yayarak artırmayı hedefler; incelmiş el sırtı derisine kademeli destek olarak düşünülebilir."><h4>Biyostimülan uygulamalar</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">HACİM</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/genclik-asisi-skinbooster/" data-gg="${r}varliklar/gorsel/uyg-genclik-asisi-skinbooster.webp" data-gb="Gençlik aşısı (skinbooster)" data-ga="Dolgunluk eklemez; derinin su tutma gücünü ve dokusunu iyileştirmeyi amaçlar. İnce ve kuru el sırtında sık konuşulan bir seçenektir."><h4>Gençlik aşısı (skinbooster)</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">CİLT KALİTESİ</i></span><span class="g-hucre">Birkaç saat–1 gün</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/mezoterapi/" data-gg="${r}varliklar/gorsel/uyg-mezoterapi.webp" data-gb="Mezoterapi" data-ga="Derinin üst katmanına vitamin, mineral ve hyalüronik asit karışımı verilir; birkaç hafta arayla seriler hâlinde planlanır."><h4>Mezoterapi</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">CİLT KALİTESİ</i></span><span class="g-hucre">Birkaç saat–1 gün</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/somon-dna-polinukleotid/" data-gg="${r}varliklar/gorsel/uyg-somon-dna-polinukleotid.webp" data-gb="Somon DNA ve polinükleotid" data-ga="Dokunun onarım sürecini desteklemek amacıyla düşünülür. Balıktan elde edildiği için balık ve deniz ürünlerine aşırı duyarlılığınız olup olmadığı sorulur."><h4>Somon DNA ve polinükleotid</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">CİLT KALİTESİ</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/pico-lazer-leke/" data-gg="${r}varliklar/gorsel/uyg-pico-lazer-leke.webp" data-gb="Pico lazer ile leke" data-ga="Güneş lekelerinde düşünülür; önce her lekenin türü muayeneyle ayrılır ve kuşkulu hiçbir lezyona işlem yapılmaz."><h4>Pico lazer ile leke</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">ENERJİ</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/fraksiyonel-lazer/" data-gg="${r}varliklar/gorsel/uyg-fraksiyonel-lazer.webp" data-gb="Fraksiyonel lazer" data-ga="Doku pürüzü ile renk düzensizliğinin bir arada olduğu seçilmiş durumlarda düşük ayarla planlanır; eller geç iyileştiği için yüksek ayar seçilmez."><h4>Fraksiyonel lazer</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">DOKU YENİLEME</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-dolgu-uygulamalari.webp" alt=""></div><div class="g-ic"><h4>Dolgu uygulamaları</h4><p>Dolgunluk kaybı belirginse tendon ve damarların üstündeki katmana az miktarda yerleştirilir; fazlası eli şişkin ve yapay gösterir.</p><a class="dgm dgm--iki" href="${r}uygulamalar/dolgu-uygulamalari/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- 6 ── PLAN + SINIRLAR -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Akış</p><h2>Eller için plan hangi adımlarla ilerler?</h2><p class="giris">İlk görüşmede işlem yapılacağını varsaymayın. Ellerde en sık karşılaşılan hata yanlış yöntemi seçmek değil, adımları yanlış sırayla atmaktır.</p></div>
    <div class="g-bento">
      <div class="g-kutu g-b3" data-gr><span class="g-ket">ADIMLAR</span>
        <ol class="g-protokol">
          <li><b>Lekelerin tek tek incelenmesi:</b> ellerinizdeki her renk değişikliğine ayrı ayrı bakılır. Kuşku uyandıran bir leke görülürse plana ara verilir ve önce ayırıcı tanı için ilgili bölüme yönlendirilirsiniz.</li>
          <li><b>Öykü ve ilaçlar:</b> kan sulandırıcı kullanımı, kolay kanama, romatizmal hastalıklar, ellerden geçirilmiş ameliyatlar ve bilinen aşırı duyarlılıklar not edilir.</li>
          <li><b>Zemini hazırlamak:</b> derinin koruyucu tabakası zayıfsa, çatlak ya da egzama varsa önce bu toparlanır; tahrişli bir el sırtına iğneyle ya da cihazla işlem yapılmaz.</li>
          <li><b>İşlem ve kontrol:</b> hacim desteği ile leke işlemi aynı güne konmaz; iki–dört hafta sonra ellerinize yeniden bakarız. Ayrıntıları <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası takip</a> sayfasında bulabilirsiniz.</li>
        </ol>
      </div>
      <div class="g-kutu g-b3 g-kutu--gece" data-gr style="--d:80ms"><span class="g-ket">Hekimin notu</span><p>&#8220;Ellerinizin bir işleme ihtiyacı olmadığını düşünüyorsak bunu açıkça söyler, gereksiz bir plan önermeyiz.&#8221;</p></div>
      <div class="kutu kutu--uyari g-b4" data-gr style="--d:140ms">
        <b>Kimlere yapılmaz ya da ertelenir?</b>
        <ul>
          <li><b>Kuşku uyandıran deri lezyonu:</b> kenarı düzensiz, büyüyen, rengi değişen ya da bir türlü iyileşmeyen bir lekeye estetik işlem yapılmaz; önce ayırıcı tanı konması gerekir.</li>
          <li><b>Gebelik ve emzirme:</b> bu süreçte iğneyle ya da cihazla yapılan işlemlere başlanmaz.</li>
          <li><b>Ellerde etkin enfeksiyon ya da egzama alevlenmesi:</b> önce bu tablo tedavi edilir, işlem el yatıştıktan sonra konuşulur.</li>
          <li><b>Kanamaya yatkınlık ya da kan sulandırıcı ilaç:</b> ilacınızda değişiklik gerekiyorsa bu ancak ilacı veren hekimin onayıyla yapılır.</li>
          <li><b>Raynaud fenomeni ve dolaşım bozuklukları:</b> soğukta parmak uçlarınız beyazlıyor ya da morarıyorsa girişimsel işlemler çoğunlukla seçilmez.</li>
          <li><b>Ellerden geçirilmiş ameliyat ya da tendon yaralanması:</b> sizi ameliyat eden ya da izleyen hekimin görüşü alınmadan plan yapılmaz.</li>
          <li><b>Yeni güneşlenme:</b> lekeye yönelik işlemlerden önce en az dört hafta beklenir.</li>
          <li><b>Bilinen aşırı duyarlılıklar:</b> lokal anestezik, antiseptik ya da daha önce kullanılan bir ürüne verdiğiniz tepkiyi muayenede anlatın.</li>
        </ul>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:210ms"><span class="g-ket">Neyi kapsar</span>
        <p>Muayenehanede yalnızca hekimimizin uzmanlığı ve Sağlık Bakanlığı onaylı sertifikasının kapsadığı işlemler yapılır; bu çerçevenin dışındaki isteklerde sizi ilgili uzmanlık dalına yönlendiririz. Gerekçesini <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a> sayfasında açıkladık.</p>
      </div>
    </div>
  </div>
</section>

<!-- 7 ── SONRASI + BEKLENTİ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Uygulamadan sonra</p><h2>İşlemden sonraki günlerde ellerinize nasıl bakmalısınız?</h2></div>
    <div class="izgara izgara--2">
      <div class="kart kart--duz" data-gr>
        <h3>İlk günler</h3>
        <p>Günlük hayatta en çok kullandığımız organ ellerimiz olduğu için işlem sonrası öneriler burada biraz daha zorlayıcıdır. İlk bir iki gün ağır taşımamanızı, ellerinizi uzun süre suda tutmamanızı, deterjanla temas etmemenizi ve bölgeye masaj yapmamanızı isteriz; bulaşık ve temizlik sırasında eldiven kullanmak işinizi kolaylaştırır.</p>
<p>Dolgunluk desteği yapıldıysa ilk günlerde ellerinizde geçici bir doluluk hissi olabilir; bu his çoğunlukla bir iki hafta içinde kaybolur. Morluk oluşursa geçmesi beş–yedi günü bulabilir.</p>
        <p>El sırtında güneş koruyucu kalıcı bir alışkanlık olmalıdır. Her yıkamadan sonra nemlendirici sürmek ve gündüz güneş koruyucuyu yenilemek, elde edilen değişimin daha uzun sürmesine yardımcı olur. Randevunuzdan önce işinize yarayacak notları <a href="${r}hazirlik-listesi/">hazırlık listesi</a> sayfasında topladık.</p>
      </div>
      <div class="kart kart--duz" data-gr style="--d:80ms">
        <h3>Gerçekçi beklenti</h3>
        <p>Ellerdeki damarların ve tendonların hiç görünmez hâle gelmesi hedeflenmez; bunlar sağlıklı bir elin doğal parçalarıdır ve tümüyle örtülmeye çalışıldığında el şişkin durur. Ulaşılabilecek nokta, çukurların yumuşaması ve derinin daha düzgün görünmesidir.</p>
        <p>Leke işlemlerinde de bütün renklerin eşitleneceğini söyleyemeyiz; birkaç seans gerekebilir ve bazı lekeler umulduğu kadar açılmayabilir. Değişimin ne kadar süreceği kişiden kişiye farklıdır. Genel yaklaşımımızı <a href="${r}yaklasimimiz/">nasıl çalışıyoruz</a> sayfasında anlattık.</p>
      </div>
    </div>
    <div class="kutu kutu--acil" data-gr style="margin-top:22px">
      <b>Beklemeden başvurmanız gereken bulgular</b>
      <p>İşlemden sonra parmaklarınızda ya da el sırtınızda beyazlaşma, soğukluk, morumsu ağ görünümü, giderek artan şiddetli ağrı, hızla büyüyen şişlik ya da ateş olursa bizi <a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a> numarasından hemen arayın. Telefonla ulaşamazsanız <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
    </div>
  </div>
</section>

<!-- 8 ── SORU TERMİNALİ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Soru–cevap</p><h2>Aklınızdaki soruyu seçin, yanıtı yanda okuyun</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr')} · el · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Ellerimdeki damarlar neden bu kadar belirgin?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>El sırtımdaki kahverengi lekelerden endişelenmeli miyim?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Dolgunluk desteği ve leke işlemi aynı gün yapılır mı?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Ellere yapılan dolgunun etkisi ne kadar sürer?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>&#8220;Gençlik aşısı&#8221; ellere de uygulanır mı?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini buradan öğrenebilir miyim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede birlikte bakalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Ellerimdeki damarlar neden bu kadar belirgin?","Çoğu kişide el sırtındaki toplardamarların görünmesi olağandır. Deri ve altındaki yağın incelmesi, vücut yağ oranının düşük olması, sıcak havalar ve spor bu görünümü artırır. Ancak tek elde birden başlayan şişlik, ağrı ya da renk değişikliği varsa konu estetik değildir; hekime görünmeniz gerekir."],["El sırtımdaki kahverengi lekelerden endişelenmeli miyim?","Güneşe bağlı yüzeysel lekelerin büyük çoğunluğu zararsızdır. Yine de kenarı düzensiz, hızla büyüyen, rengi her yerinde aynı olmayan, kanayan ya da iyileşmeyen bir lezyona estetik işlem yapılmaz; önce ayırıcı tanı gerekir ve gerekirse sizi ilgili bölüme yönlendiririz."],["Dolgunluk desteği ve leke işlemi aynı gün yapılır mı?","Çoğunlukla yapılmaz. İki işlem derinin farklı katmanlarına yönelir ve iyileşme süreleri ayrıdır. Aynı gün yapıldıklarında bir şişlik ya da morluğun hangisinden kaynaklandığını anlamak güçleşir. Önce sizi hangi sorunun daha çok rahatsız ettiğini belirler, sırayı buna göre kurarız."],["Ellere yapılan dolgunun etkisi ne kadar sürer?","Bu süre kişiden kişiye değişir. Eller sürekli hareket eden ve yük taşıyan bir bölge olduğundan ürünün yıkılma hızı, daha durağan bölgelerden farklı olabilir. Bu yüzden baştan bir ay sayısı vermeyiz; kontrol görüşmelerinde durumu birlikte izleriz."],["“Gençlik aşısı” ellere de uygulanır mı?","Günlük dilde gençlik aşısı ya da skinbooster diye anılan uygulama, dolgunluk eklemeden derinin nemini ve dokusunu hedefleyen cilt içi hyalüronik asit uygulamasıdır. İncelmiş ve kurumuş el sırtı derisinde düşünülebilir. Dolgunluk kaybı belirginse tek başına yetmez; hangi sırayla ilerleneceğine muayenede karar veririz."],["Ücret bilgisini buradan öğrenebilir miyim?","Hayır. Yürürlükteki sağlık tanıtım mevzuatı, işlem ücretlerini sitemizde paylaşmamıza izin vermez. Size özel plan muayenede netleştikten sonra ücreti ayrıca bildiririz. Ayrıntıyı mevzuat sayfamızda bulabilirsiniz."]]</script>

<!-- 9 ── KAPANIŞ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Ellerinize bakalım, sonra karar verelim</h2>
    <p class="g-sonalt">Ellerinizdeki değişimin dolgunluk kaybından mı yoksa lekelerden mi kaynaklandığını birlikte ayırmak için ${S.iletisim.semt} muayenehanemizden randevu talep edebilirsiniz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
