const S = require('../../site');

module.exports = {
  slug: 'bolgeler/goz-cevresi',
  tip: 'tibbi',
  baslik: 'Göz çevresi planlaması: göz altı, kaz ayağı ve kaş',
  aciklama: 'Göz altındaki koyuluk, kaz ayağı ve kaş konumu farklı nedenlerden doğar. Bakırköy muayenehanemizde önce nedeni ayırıyor, işlem kararını ardından veriyoruz.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}bolgeler/" style="color:var(--sessiz);text-decoration:none">Bölgeler</a> › <span>Göz Çevresi</span></nav>
      <p class="g-etiket">Bölgeler · Göz çevresi</p>
      <h1>Yüzün en ince derisi, <span class="g-isik">en temkinli</span> planı ister.</h1>
      <p class="g-hero__alt">Alt göz kapağında deri milimetrenin altına iner ve burada oluşan en küçük düzensizlik bile karşınızdakinin gözüne çarpar. Koyu halkalar, göz kenarındaki kırışıklar ve kaşın düşmesi dışarıdan birbirine karışsa da her birinin nedeni başkadır. Muayenede önce bu nedenler ayrılır; sonuç çoğu zaman beklemek ya da hiç işlem yapmamak olur ve bu da tıbben yerinde bir yanıttır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#tolerans">Neden bu kadar dikkat? ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Uygulamayı hekim yapar</span><span><i></i>Adım adım plan</span><span><i></i>Kontrol randevusu dâhil</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/ic3d-goz.webp" width="1400" height="788" alt="Alt göz kapağı ve göz kenarının yakın plan üç boyutlu çizimi" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
      <div class="g-hud"><b>Milimetrenin altında deri</b><div class="g-cizgi"></div><span>Burada karar eşiği, yüzün diğer bölgelerinden daha yüksek tutulur.</span></div>
    </div>
  </div>
</section>

<!-- ═════════ VERİ BANDI ═════════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="4">0</em></b><span>Temkin nedeni</span></div>
  <div data-gr style="--d:70ms"><b><em data-gsay="5">0</em></b><span>Koyu halka nedeni</span></div>
  <div data-gr style="--d:140ms"><b><em data-gsay="7">0</em></b><span>Güne uzayabilen şişlik</span></div>
  <div data-gr style="--d:210ms"><b>Az</b><span>Küçük miktar, basamaklı plan</span></div>
</div></div>

<!-- ═════════ TOLERANS ═════════ -->
<section class="bolum" id="tolerans">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Anatomi</p>
      <h2>Göz çevresinde neden bu kadar dikkatli olunur?</h2>
      <p class="giris">Göz çevresi için muayeneye gelen pek çok kişi, beklediğinden daha az işlemle ya da hiç işlem yapılmadan ayrılır. Bunun ardında bölgenin dört anatomik özelliği yatar; bu özellikler bir araya geldiğinde yüzün başka hiçbir yerinde olmadığı kadar küçük bir hata payı kalır. Örneğin yanağa konduğunda hiç belli olmayacak bir damla ürün, göz altında haftalarca fark edilebilir.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kart kart--duz" data-gr>
        <span class="kart__ikon">${ik.mercek}</span>
        <h3>Milimetrenin altında bir deri</h3>
        <p>Alt kapak derisi, insan vücudundaki en ince deri tabakalarındandır. Altına konan ürün ışıkta seçilebilir, parmakla yoklandığında hissedilebilir, hatta ışığı saçarak mavimsi bir gölge oluşturabilir. Kullanılan miktarın yüzün geri kalanıyla kıyaslanamayacak kadar küçük tutulması bundandır.</p>
      </div>
      <div class="kart kart--duz" data-gr style="--d:70ms">
        <span class="kart__ikon">${ik.damla}</span>
        <h3>Sıvı geç boşalır</h3>
        <p>Göz çevresinden lenf sıvısının uzaklaşması ağır işler. İşlemden sonra şişliğin başka bölgelere göre uzun sürmesi ve su bağlayan bir ürünün burada aylarca süren bir kabarıklık bırakabilmesi bu yüzdendir. Sonucu yorumlamak için şişliğin bütünüyle inmesini bekleriz.</p>
      </div>
      <div class="kart kart--duz" data-gr>
        <span class="kart__ikon">${ik.kalkan}</span>
        <h3>Göze uzanan damar bağlantıları</h3>
        <p>Bu bölgedeki atardamarların bir kısmı, gözün iç dolaşımıyla doğrudan bağlantılıdır. Nadir olsa da bu yolla görmeyi etkileyen damar tıkanıklıkları bildirilmiştir. Olasılığı düşük ama sonucu ağır ve geri çevrilmesi zor bir risk söz konusu olduğundan, karar vermeden önce aranan güvence de daha yüksektir.</p>
      </div>
      <div class="kart kart--duz" data-gr style="--d:70ms">
        <span class="kart__ikon">${ik.saat}</span>
        <h3>Her an hareket, her an göz önünde</h3>
        <p>Göz kapakları gün içinde binlerce kez kırpılır ve karşınızdaki kişinin ilk baktığı yer gözlerinizdir. Milimetrik bir düzensizlik bile bu yüzden fark edilir. Plan küçük adımlarla ilerler: ilk seansta az miktar kullanılır, etkisi yerleşince ikinci bir adıma gerek olup olmadığına birlikte bakılır.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ ATLAS: ÜÇ ALT KONU ═════════ -->
<section class="bolum bolum--buz2" id="altkonular">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Üç ayrı konu</p>
      <h2>Göz altı, kaz ayağı ve kaş neden ayrı konulardır?</h2>
      <p class="giris">Birbirine birkaç santimetre uzaklıkta olsalar da bu üç konunun nedeni, yanıtı ve riski farklıdır. Aşağı indikçe görseldeki kart, okuduğunuz başlığa göre değişir.</p>
    </div>
    <div class="g-atlas-duzen">
      <div class="g-atlas" data-gr>
        <div class="g-atlas-kap">
          <img src="${r}varliklar/gorsel/yuz-3d-c.webp" width="900" height="1200" alt="Göz çevresinin yüzdeki yerini gösteren, sola dönük üç boyutlu kadın profili" loading="lazy">
          <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
          <div class="g-rozetk" data-grozet><b>Göz altı</b><span>Koyu halkanın arkasında beş ayrı neden olabilir; hangisi olduğu bilinmeden işlem düşünülmez.</span></div>
        </div>
      </div>
      <div>
        <div class="g-katblok" data-gkat="gozalti" data-gr>
          <span class="g-kno">01 · GÖZ ALTI</span>
          <h3>Koyu halkanın arkasındaki beş neden</h3>
          <p>Göz altının koyu görünmesine şunlardan biri ya da birkaçı yol açar: deride biriken pigment, ince deriden seçilen damarlar, zamanla incelen deri, yanakla kapak arasındaki çukurun oluşturduğu gölge ve biriken sıvı. Uzaktan bakıldığında hepsi aynı “yorgun göz” izlenimini verir; oysa birine uygun bir işlem ötekinde görünümü kötüleştirebilir. Göz altı yağının öne doğru taşmasıyla oluşan torba ise bambaşka bir konudur ve cerrahi değerlendirme ister.</p>
          <div class="g-haplar"><a href="${r}cilt-sorunlari/goz-alti-koyulugu/">Göz altı koyuluğu</a><a href="${r}uygulamalar/dolgu-uygulamalari/#goz-alti">Göz altı dolgusu</a></div>
        </div>
        <div class="g-katblok" data-gkat="kazayagi" data-gr>
          <span class="g-kno">02 · KAZ AYAĞI</span>
          <h3>Gülümsemenin bıraktığı izler</h3>
          <p>Gülerken göz kenarında yelpaze gibi açılan kırışıklar, gözü çember gibi saran kasın yıllar boyunca kasılmasıyla derinleşir; halk arasında bunlara “kaz ayağı” denir. Alt kapağın hemen altındaki ince kırışıklıkların kaynağı ise çoğunlukla kas değil, incelen ve nemini yitiren deridir.</p>
<p>Kasın yol açtığı çizgilerde az sayıda noktaya düşük doz uygulanır; amaç gülümsemenizi silmek değil, çizgilerin keskinliğini azaltmaktır. Yüzünüz dinlenirken de kaybolmayan çizgiler için yalnızca kası gevşetmek çoğu zaman yeterli olmaz.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/botulinum-toksin/">Botulinum toksin</a><a href="${r}cilt-sorunlari/mimik-cizgileri-ve-kirisiklik/">Mimik çizgileri</a></div>
        </div>
        <div class="g-katblok" data-gkat="kas" data-gr>
          <span class="g-kno">03 · KAŞ BÖLGESİ</span>
          <h3>Kaş, şakak ve göz kapağı dengesi</h3>
          <p>Kaşın yüksekliği, onu yukarı çeken alın kası ile aşağı çeken kaslar arasındaki çekişmeyle belirlenir; bu dengeye dokunan her işlem kaşın yerini ve kavisini değiştirebilir. Göz kapağınızda hafif bir düşüklük varsa ya da görüşünüzü açmak için farkında olmadan kaşlarınızı kaldırıyorsanız işlem yapılmaz veya kapsamı daraltılır. Kaşın dış ucu şakaktaki hacim kaybı yüzünden düşmüşse de yanıt göz çevresinde değil, şakakta aranır.</p>
          <div class="g-haplar"><a href="${r}bolgeler/yuz/">Yüz bölgesi planlaması</a></div>
        </div>
      </div>
    </div>
  </div>
</section>
<script type="application/json" data-gnokta-veri>{"gozalti":["Göz altı","Koyu halkanın arkasında beş ayrı neden olabilir; hangisi olduğu bilinmeden işlem düşünülmez."],"kazayagi":["Kaz ayağı","Kasın bıraktığı izler — az nokta, düşük doz; gülümseme yerinde kalır."],"kas":["Kaş bölgesi","Kaşın yeri kas dengesine ve şakaktaki desteğe bağlıdır."]}</script>

<!-- ═════════ KOYULUK MEKANİZMALARI ═════════ -->
<section class="bolum" id="gozalti-mekanizma">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Ayrım</p>
      <h2>Koyu halkanın nedeni muayenede nasıl ayırt edilir?</h2>
      <p class="giris">Işığın yönünü değiştirmek, deriyi hafifçe germek ve farklı açılardan bakmak, hangi nedenin öne çıktığını gösterir. Her nedenin kendi yanıtı vardır; bazılarında dolgu hiç gündeme gelmez.</p>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b2" data-gr>
        <span class="g-ket">PİGMENT</span>
        <p><b style="color:var(--murekkep)">Renk birikimi</b><br>Kahverengimsi bir tondur; deriyi hafifçe gerdiğinizde bile silinmez. Hacim eklemek bu rengi değiştirmez; önce güneşten korunma, ardından lekeye yönelik seçenekler konuşulur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">DAMARSAL</span>
        <p><b style="color:var(--murekkep)">Seçilen damarlar</b><br>Morumsu ya da mavimsi bir renktir ve ışık değiştikçe koyulaşıp açılır. Dolgu çoğunlukla bu görünümü azaltmaz; kimi durumda damarları daha da öne çıkarabilir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms">
        <span class="g-ket">İNCELME</span>
        <p><b style="color:var(--murekkep)">İncelen deri</b><br>Deri inceldikçe altındaki kas ve damarlar daha çok görünür; bölge hem koyu hem buruşuk bir hâl alır. Bu durumda deri kalitesini desteklemeye yönelik seçenekler öne çıkar.</p>
      </div>
      <div class="g-kutu g-b2" data-gr>
        <span class="g-ket">HACİM KAYBI</span>
        <p><b style="color:var(--murekkep)">Çukurun gölgesi</b><br>Yanakla alt kapak arasındaki geçiş derinleştikçe altında bir gölge oluşur. Dolgu yalnızca bu tabloda düşünülebilir ve çukurun sınırlarının net olması şarttır.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">ÖDEM</span>
        <p><b style="color:var(--murekkep)">Biriken sıvı</b><br>Sabah uyandığınızda belirgin, akşama doğru azalan bir şişliktir. Az uyku, tuzlu yemekler, mevsimsel burun akıntısı, tiroid ya da böbrek kaynaklı sıvı tutulması bunu artırabilir. Böyle bir göz altına dolgu yapmak şişliği büyütebilir.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr style="--d:140ms">
        <span class="g-ket">CERRAHİ SINIR</span>
        <p>"Göz altında yağın öne taşmasıyla oluşan torba, iğneyle değil cerrahiyle ele alınan bir durumdur; bu tabloda sizi ilgili uzmanlık dalına yönlendiririz."</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS: UYGULAMALAR ═════════ -->
<section class="bolum bolum--sicak" id="uygulamalar">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Seçenekler</p>
      <h2>Göz çevresi için hangi seçenekler var?</h2>
      <p class="giris">Buradaki başlıklar ancak doğru neden bulunduğunda konuşulur. Göz çevresinde seçenek sayısı azdır; işlem yapılmayan durumların listesi ise öteki bölgelerden uzundur.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Uygulama</span><span>Hedef</span><span>İyileşme</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/botulinum-toksin/" data-gg="${r}varliklar/gorsel/uyg-botulinum-toksin.webp" data-gb="Botulinum toksin" data-ga="Gülerken göz kenarında beliren kas kaynaklı çizgilerde, az noktaya düşük dozla düşünülür."><h4>Botulinum toksin</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">Kaz ayağı</i></span><span class="g-hucre">Birkaç gün</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/dolgu-uygulamalari/#goz-alti" data-gg="${r}varliklar/gorsel/uyg-dolgu-uygulamalari.webp" data-gb="Göz altı dolgusu" data-ga="Yalnızca yanakla kapak arasındaki çukurun belirgin olduğu tabloda konuşulur; uygun olmadığı durumlar çoktur."><h4>Göz altı dolgusu</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">Hacim kaybı</i></span><span class="g-hucre">1 haftaya varabilir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/somon-dna-polinukleotid/" data-gg="${r}varliklar/gorsel/uyg-somon-dna-polinukleotid.webp" data-gb="Somon DNA ve polinükleotid" data-ga="İncelmiş ve yorgun görünen alt kapak derisinde dokunun toparlanmasını desteklemek amacıyla düşünülür; hacim vermez."><h4>Somon DNA ve polinükleotid</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">Cilt kalitesi</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/genclik-asisi-skinbooster/" data-gg="${r}varliklar/gorsel/uyg-genclik-asisi-skinbooster.webp" data-gb="Gençlik aşısı (skinbooster)" data-ga="Nem kaybı ve incelme ön plandaysa cilt kalitesine yönelik ikinci bir seçenektir."><h4>Gençlik aşısı (skinbooster)</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">Cilt kalitesi</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/pico-lazer-leke/" data-gg="${r}varliklar/gorsel/uyg-pico-lazer-leke.webp" data-gb="Pico lazer ile leke" data-ga="Renk birikimine bağlı koyulukta, gözler korunarak ve seçilmiş durumlarda değerlendirilebilir."><h4>Pico lazer ile leke</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">Pigment</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/fraksiyonel-lazer/" data-gg="${r}varliklar/gorsel/uyg-fraksiyonel-lazer.webp" data-gb="Fraksiyonel lazer" data-ga="Alt kapaktaki ince kırışıklık ve pürüzlü yüzeyde, uygun görülürse düşük ayarlarla planlanır."><h4>Fraksiyonel lazer</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">Yüzey</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-botulinum-toksin.webp" alt=""></div><div class="g-ic"><h4>Botulinum toksin</h4><p>Gülerken göz kenarında beliren kas kaynaklı çizgilerde, az noktaya düşük dozla düşünülür.</p><a class="dgm dgm--iki" href="${r}uygulamalar/botulinum-toksin/">Sayfasına git →</a></div></div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <p>Koyuluğun nedeni renk birikimiyse ilk ve en önemli adım güneşten korunmaktır; lekelerle ilgili genel bilgiyi <a href="${r}cilt-sorunlari/cilt-tonu-ve-leke/">cilt tonu ve leke</a> sayfasında bulabilirsiniz. Daha önce yapılmış bir dolgu göz altında şişlik ya da dalgalanma bıraktıysa yeni bir ekleme yerine önce mevcut durum incelenir; dolgunun eritilmesiyle ilgili bilgi <a href="${r}uygulamalar/dolgu-uygulamalari/">dolgu uygulamaları</a> sayfasında.</p>
    </div>
  </div>
</section>

<!-- ═════════ SINIR ═════════ -->
<section class="bolum" id="sinir">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Uygunluk</p>
      <h2>Göz çevresine hangi durumlarda işlem yapılmaz?</h2>
      <p class="giris">Göz çevresinde işlemden kaçınılan durumlar, yüzün diğer bölgelerine göre daha fazladır. En ufak bir tereddüt kalırsa işlem yapmayız; bu bölgede beklemek her zaman kabul edilebilir bir yoldur.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--uyari" data-gr>
        <h4>Uygulama yapılmayan durumlar</h4>
        <ul>
          <li>Sıvı tutmaya yatkınlık, sabahları kabaran göz altı, tiroid ya da böbrek kökenli ödem</li>
          <li>Alt kapakta belirgin sarkma ya da öne taşan yağ torbası</li>
          <li>Koyuluğun renk birikiminden ya da seçilen damarlardan kaynaklandığı tablolar — dolgu bu durumlarda uygulanmaz; renk ve damar sorunu kendi başlıkları altında konuşulur</li>
          <li>Düşük göz kapağı ya da görme alanını daraltan bir sorun</li>
          <li>Gebelik, emzirme ya da kullanılacak ürüne karşı bilinen aşırı duyarlılık</li>
        </ul>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:70ms">
        <h4>Ertelenen ya da ayrıca planlanan durumlar</h4>
        <ul>
          <li>Mevsimsel göz kaşıntısının ya da burun akıntısının arttığı dönemler</li>
          <li>Kan sulandırıcı ilaç ya da pıhtılaşma sorunu</li>
          <li>Bölgede daha önce kullanılmış ve içeriği bilinmeyen bir ürün</li>
          <li>Yeni geçirilmiş göz enfeksiyonu ya da göz ameliyatı</li>
          <li>Uykusuzluk, tuzlu beslenme gibi değiştirilebilir etkenlerin sürmesi</li>
        </ul>
      </div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <p>İşlem günü ve ertesinde göz çevrenize bastırmamanızı, ovmamanızı ve yüzüstü uyumamanızı isteriz. Göz makyajına hekiminizin belirttiği süre boyunca ara verin; birkaç gün sıcak ortamlar ve ağır spor da bekleyebilir. Kontakt lens kullanıyor olmanız işleme engel değildir, yalnızca işlem günü ve sonrasındaki kısa bir süre lenslerinizi takmamanız istenebilir. Genel öneriler için <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası takip</a> sayfasına bakabilirsiniz.</p>
    </div>
    <div class="kutu kutu--acil" data-gr style="margin-top:22px">
      <b>Beklemeden başvurmanız gereken bulgular</b>
      <p>İşlem sırasında ya da sonrasında görüşünüzde bulanıklaşma, görme alanınızda kararma ya da kayıp, göz çevresinde dayanılmaz ağrı, deride beyazlaşma veya morumsu ağ görünümü fark ederseniz hiç beklemeden bizi <a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a> numarasından arayın. Telefonla ulaşamazsanız <b>112</b>’yi arayın ya da doğrudan en yakın acil servise gidin.</p>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Soru–cevap</p><h2>Aklınızdaki soruyu seçin, yanıtı yanda okuyun</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr')} · göz çevresi · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>“Işık dolgusu” denen şey nedir?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Göz kenarımdaki çizgiler için “botoks” olur mu?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Göz altımdaki mor halkalar dolguyla geçer mi?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Göz altım sabahları kabarık oluyor; işlem yapılabilir mi?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Sonuçtan memnun kalmazsam dolgu eritilebilir mi?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nereden öğrenebilirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede birlikte bakalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["“Işık dolgusu” denen şey nedir?","Tıbbi kaynaklarda bu adla tanımlanmış bir işlem, ürün ya da kullanım alanı yoktur. Bu sözle anlatılmak istenen çoğunlukla göz altına yapılan hyalüronik asit dolgusudur. O işlem de ancak yanakla kapak arasında sınırları belli bir çukur varsa düşünülür."],["Göz kenarımdaki çizgiler için “botoks” olur mu?","Halk arasında “botoks” denen işlem tıpta botulinum toksin uygulaması olarak bilinir ve gülerken belirginleşen kaz ayağı çizgilerinde düşünülebilir. Göz çevresinde az sayıda noktaya düşük doz uygulanır; gülümsemenizin doğal kalması baştan belirlenen bir hedeftir. Yüzünüz dinlenirken de duran çizgilerde tek başına yeterli olmayabilir."],["Göz altımdaki mor halkalar dolguyla geçer mi?","Önce mor halkanın nedenini bulmak gerekir. Renk birikimi, ince deriden görünen damarlar, incelen deri, çukurun gölgesi ve biriken sıvı birbirine çok benzeyen beş ayrı durumdur. Dolgu yalnızca çukurun gölgesi baskınsa düşünülür; öteki durumlarda katkı sağlamaz, kimi zaman halkayı daha da belirgin hâle getirir."],["Göz altım sabahları kabarık oluyor; işlem yapılabilir mi?","Sabah belirginleşip gün içinde azalan bir şişlik, göz altında sıvı biriktiğini düşündürür. Böyle bir tabloda dolgu yapılmaz, çünkü şişliği artırabilir. Önce nedeni araştırırız: uyku düzeni, tuz tüketimi, mevsimsel burun şikâyetleri, tiroid ve böbrek işlevleri gözden geçirilir. Gerekirse kan tahlili ister, bulguya göre sizi ilgili bölüme yönlendiririz."],["Sonuçtan memnun kalmazsam dolgu eritilebilir mi?","Hyalüronik asit içeren dolgular, gerekli görüldüğünde özel bir enzimle çözülebilir. Bu yine de sonucu önceden güvenceye bağlayan bir çıkış yolu sayılmamalıdır: enzimin kendine özgü riskleri vardır ve çevredeki doğal dokuyu da etkileyebilir. Göz altı için yapılan muayenelerin önemli bir kısmı zaten hiç işlem yapılmadan sonuçlanır; bu da tıbben yerinde bir karardır."],["Ücret bilgisini nereden öğrenebilirim?","Sağlık hizmetlerinin tanıtımına dair yürürlükteki yönetmelik, ücretlerin internet sitesinde yayımlanmasını yasaklar. Göz çevresinde plan kişiye göre çok değiştiği için burada verilecek bir rakam zaten yol gösterici olmazdı. Ücreti, muayenede plan belirlendikten sonra size ayrıca bildiririz."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Göz çevrenizi önce birlikte inceleyelim</h2>
    <p class="g-sonalt">${S.iletisim.adres}, ${S.iletisim.ilce} — muayenede önce koyu halkanın ya da çizginin nedenini buluyor, bir işleme gerek olup olmadığını ancak ondan sonra konuşuyoruz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesini doldurun</a>
    </div>
  </div>
</section>
`,
};
