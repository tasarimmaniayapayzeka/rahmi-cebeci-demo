const S = require('../../site');

module.exports = {
  slug: 'cilt-sorunlari/hacim-kaybi-ve-sarkma',
  tip: 'tibbi',
  baslik: 'Hacim kaybı ve sarkma: yüzün hangi katmanı değişiyor?',
  aciklama: 'Yorgun ve düşmüş görünen yüzde kemik, yağ bölmeleri, bağlar ve deri birlikte değişir. Destek ile sıkılaştırma arasındaki seçim muayenede nasıl yapılır?',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}cilt-sorunlari/" style="color:var(--sessiz);text-decoration:none">Sorunlar</a> › <span>Hacim kaybı ve sarkma</span></nav>
      <p class="g-etiket">Şikâyet rehberi · Hacim ve sarkma</p>
      <h1>Düşen yüz, çoğu zaman <span class="g-isik">desteğini yitirmiş</span> bir yüzdür</h1>
      <p class="g-hero__alt">Yaş ilerledikçe yüz iskeleti küçülür, yağ bölmeleri incelir ya da aşağı kayar, dokuları yerinde tutan bağlar gevşer. Aynada gördüğünüz yorgunluk bu değişimlerin bileşkesidir. Plan, hangi katmanın önde olduğuna göre değiştiği için ilk iş katmanları birbirinden ayırmaktır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Muayene için randevu</a>
        <a class="dgm dgm--iki" href="#nedenler">Katmanları inceleyin ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Katman katman değerlendirme</span><span><i></i>Muayene ve plan hekimde</span><span><i></i>Ölçülü planlama</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/sorun-hacim-kaybi-ve-sarkma.webp" width="1400" height="788" alt="Elmacık ve çene hattı belirgin bir kadın yüzünün yumuşak ışıklı yan portresi" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <button class="g-nokta" data-gn="ust" style="--x:57%;--y:18%" aria-label="Şakak ve göz çevresi"><span data-ad="Şakak"></span></button>
      <button class="g-nokta" data-gn="orta" style="--x:53%;--y:27%" aria-label="Elmacık"><span data-ad="Elmacık"></span></button>
      <button class="g-nokta" data-gn="alt" style="--x:53%;--y:35%" aria-label="Çene hattı"><span data-ad="Çene hattı"></span></button>
      <div class="g-hud" data-ghud><b>Destek haritası</b><div class="g-cizgi"></div><span>Bir noktaya dokunun, o bölgenin notu açılsın</span></div>
    </div>
  </div>
</section>
<script type="application/json" data-gnokta-veri>{"ust":["Şakak ve göz çevresi","Şakakta çukurlaşma ve kaş kuyruğunun alçalması hacim kaybının erken işaretleri arasındadır"],"orta":["Elmacık","Elmacık desteği azaldığında yanak düzleşir, göz altından yanağa geçiş gölgelenir"],"alt":["Çene hattı","Çene hattındaki bulanıklık bazen yukarıdaki destek kaybının aşağıya yansımasıdır"]}</script>

<!-- ═════════ KATMANLAR ═════════ -->
<section class="bolum bolum--sicak" id="nedenler">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Farkı nerede</p>
      <h2>Yüzün hangi katmanları zamanla değişir?</h2>
      <p class="giris">Yüzü katlı bir yapı gibi düşünebilirsiniz: en altta kemik, üstünde bağlar ve kaslar, onun üstünde yağ bölmeleri, en dışta deri. Yaşla birlikte bu katmanların hepsi farklı hızda değişir. Bu yüzden çoğu kişi tek bir çizgiden değil, yüzünün bütün olarak aşağı indiğinden yakınır.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">Kesit 01</span>
      <h3>Kemik iskelet</h3>
      <p>Yüz kemikleri de zamanla yeniden biçimlenir. Göz çukurunun kenarları genişler, elmacık kemiğinin öne çıkıklığı azalır, alt çenenin açısı belirginliğini yitirir. Temel küçüldükçe üzerine oturan dokular daha az desteklenir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:60ms">
      <span class="g-kno">Kesit 02</span>
      <h3>Yağ bölmeleri</h3>
      <p>Yüzdeki yağ tek bir tabaka değil, ince zarlarla ayrılmış bölmelerdir ve bu bölmeler aynı hızla değişmez. Bazıları erir, bazıları aşağı doğru yer değiştirir; sonuçta yüzün üst kısmı boşalırken alt kısmı daha dolgun görünebilir. Kısa sürede çok kilo vermek bu değişimi belirgin biçimde hızlandırır.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:120ms">
      <span class="g-kno">Kesit 03</span>
      <h3>Tutucu bağlar</h3>
      <p>Derin katmanları kemiğe sabitleyen bağlar zamanla esnekliğini kaybeder. Bağın zayıfladığı yerde doku aşağı iner, güçlü kaldığı yerde sabit durur; oluklar ve çöküntüler bu iki bölgenin buluştuğu hatlarda belirir. Yani sarkma yalnızca yer çekiminin işi değil, azalan destekle süren ağırlığın ortak sonucudur.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:180ms">
      <span class="g-kno">Kesit 04</span>
      <h3>Deri</h3>
      <p>Deri içindeki kolajen yapımı genç erişkinlikten sonra her yıl biraz azalır ve deri incelir. İnce deri, alttaki hacim değişikliklerini gizleyemez; tersine onları daha görünür kılar. Güneş, destek liflerini doğrudan yıprattığı için dış etkenlerin başında gelir; sigara ise dokunun beslenmesini azaltır.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:240ms">
      <span class="g-kno">Kesit 05</span>
      <h3>Işığın yüzdeki dağılımı</h3>
      <p>Bir yüzün dinç ya da yorgun algılanması büyük ölçüde ışığın nereye düştüğüne bağlıdır. Dolgun ve öne bakan alanlar ışığı geri yansıtır, çöken alanlar gölgede kalır. Hacim azaldıkça gölgeli alanlar büyür ve belirgin bir kırışıklık olmasa da yüzde yorgunluk izlenimi oluşur. Planlamada çoğu zaman bu dengenin yeniden kurulması amaçlanır.</p>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:26px">
      <b>Destek mi eklenmeli, sıkılaştırma mı yapılmalı?</b>
      <p>Muayenedeki ilk soru, bu yüzde azalanın dolgunluk mu yoksa gerginlik mi olduğudur. Şakakta çukurlaşma, göz çevresinde derinleşme ve elmacıkta düzleşme öndeyse hacim kaybı ağır basar. Hacim yerinde durduğu hâlde dokunun aşağı indiği, çene hattının netliğini yitirdiği yüzlerde ise gevşeme öne çıkar.</p>
<p>Pratikte çoğu yüz ikisinin karışımıdır ve genellikle önce destek noktaları ele alınır. Boşalmış bir bölgeyi sıkılaştırmak boşluğu gidermez; gevşemiş dokuya fazla hacim eklemek ise ağırlığı artırıp görünümü daha aşağı çekebilir.</p>
<p>Cerrahi olmayan yöntemler fazla deriyi almaz ve cerrahinin yerini tutmaz; belirgin deri fazlalığında bu durum açıkça söylenir (<a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a>). Yüzünüz bütün hâlinde, hem otururken hem ayaktayken, karşıdan ve profilden incelenir; kilo geçmişiniz, güneş alışkanlıklarınız ve ilaçlarınız <a href="${r}uygulamalar/hekim-muayenesi/">hekim muayenesi</a> sırasında sorulur.</p>
    </div>
    <div class="kutu kutu--uyari" data-gr style="margin-top:18px">
      <b>Tek tarafta ve hızla gelişen değişiklik</b>
      <p>Kısa süre içinde yüzün bir yarısında düşme, mimik kaybı, ağız köşesinde sarkma ya da konuşma zorluğu fark ederseniz bu estetik bir konu değildir. Vakit kaybetmeden 112’yi arayın ya da size en yakın acil servise gidin.</p>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Uygulamadan sonra</p>
      <h2>Öne çıkan katman belli olunca hangi seçenekler konuşulur?</h2>
      <p class="giris">Aşağıdakiler genel bir çerçeve sunar; hangisinin size uygun olduğu ve etkinin ne kadar süreceği muayenede belirlenir. Çene hattındaki bulanıklık her zaman sarkmadan kaynaklanmaz; bazen çene altındaki sınırlı yağ birikiminden gelir ve bu ayrım <a href="${r}bolgeler/cene-ve-jawline/">çene ve jawline</a> değerlendirmesinde yapılır.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Yöntem</span><span>Amaç</span><span>Toparlanma</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/hifu-ameliyatsiz-yuz-germe/" data-gg="${r}varliklar/gorsel/uyg-hifu-ameliyatsiz-yuz-germe.webp" data-gb="HIFU (ameliyatsız yüz germe)" data-ga="Gevşemenin önde olduğu yüzlerde odaklanmış ultrasonla derin destek katmanında sıkılaşma hedeflenir; cerrahinin yerini tutmaz."><h4>HIFU (ameliyatsız yüz germe)</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">SIKILAŞMA</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/sivi-yuz-germe/" data-gg="${r}varliklar/gorsel/uyg-sivi-yuz-germe.webp" data-gb="Sıvı yüz germe" data-ga="Hacim kaybının birden çok bölgede görüldüğü yüzlerde, destek noktalarına yayılan bütüncül bir dolgu planıdır."><h4>Sıvı yüz germe</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">HACİM</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/biyostimulan-uygulamalar/" data-gg="${r}varliklar/gorsel/uyg-biyostimulan-uygulamalar.webp" data-gb="Biyostimülan uygulamalar" data-ga="Derinin kendi kolajen yapımını zamana yayarak desteklemeyi amaçlar; değişim aylar içinde kademeli izlenir."><h4>Biyostimülan uygulamalar</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">DOKU</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/altin-igne-radyofrekans/" data-gg="${r}varliklar/gorsel/uyg-altin-igne-radyofrekans.webp" data-gb="Altın iğne radyofrekans" data-ga="Mikroiğne ile deri içine iletilen radyofrekans enerjisiyle doku sıkılığının desteklenmesi hedeflenir."><h4>Altın iğne radyofrekans</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">SIKILAŞMA</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-hifu-ameliyatsiz-yuz-germe.webp" alt=""></div><div class="g-ic"><h4>HIFU (ameliyatsız yüz germe)</h4><p>Gevşemenin önde olduğu yüzlerde odaklanmış ultrasonla derin destek katmanında sıkılaşma hedeflenir; cerrahinin yerini tutmaz.</p><a class="dgm dgm--iki" href="${r}uygulamalar/hifu-ameliyatsiz-yuz-germe/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr-TR')} · hacim ve sarkma · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Yüzüm düşmüş gibi ama yerini gösteremiyorum; bu olağan mı?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Kilo verdikten sonra yüzüm çöktü; kilo alırsam eski hâline döner mi?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Ameliyatsız yüz germe, cerrahi germeyle aynı sonucu verir mi?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Sarkma varken dolgu yapılırsa ne olur?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Etkisi ne kadar sürer?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Yüzüm düşmüş gibi ama yerini gösteremiyorum; bu olağan mı?","Oldukça sık duyduğumuz bir ifadedir. Hacim değişimi tek bir noktada değil, geniş bir alanda ve yavaş yavaş gerçekleştiği için parmakla göstermek zordur. Yüz bütün olarak incelendiğinde değişimin hangi bölgeden başladığı çoğunlukla ortaya çıkar."],["Kilo verdikten sonra yüzüm çöktü; kilo alırsam eski hâline döner mi?","Kilo alındığında dolgunluğun bir kısmı geri gelebilir; ancak yağ, eski bölmelere aynı oranlarla dağılmayabilir. Sık tekrarlanan kilo dalgalanmaları bağ dokusunu da yıprattığından kiloyla oynamayı bir çözüm yolu olarak önermeyiz."],["Ameliyatsız yüz germe, cerrahi germeyle aynı sonucu verir mi?","Hayır. “Ameliyatsız yüz germe” halk arasında HIFU gibi sıkılaştırma yöntemleri için kullanılan bir addır; bu yöntemler cerrahinin yerini tutmaz ve fazla deriyi almaz. Hedef, destek dokusunda sınırlı ve kademeli bir sıkılaşmadır; değişimin miktarı kişiye göre farklıdır."],["Sarkma varken dolgu yapılırsa ne olur?","Gevşek bir dokuya gereğinden fazla hacim verildiğinde yük artar ve alt yüz daha ağır görünebilir. O yüzden planlamadan önce gevşemenin mi, hacim kaybının mı öne çıktığı ayrılır. Karma durumlarda çoğunlukla destek noktalarından başlanır ve aralıklarla sonuç izlenir."],["Etkisi ne kadar sürer?","Kullanılan yönteme, bölgeye, deri yapınıza ve güneşten ne kadar korunduğunuza göre değişir. Kalıcı bir sonuç vaadi verilmez; sizin için gerçekçi olan süre aralığı muayenede konuşulur."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Hangi katmanın ele alınacağı muayenede netleştikten sonra bilgi yüz yüze verilir. Randevu için ${S.iletisim.tel} numarasını arayabilir ya da aynı numaradan WhatsApp ile yazabilirsiniz."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Yüzünüzde hangi katmanın değiştiğini birlikte görelim</h2>
    <p class="g-sonalt">Muayenede yüzünüzün tamamı değerlendirilir; önceliğin hacimde mi yoksa destekte mi olduğu size açıkça anlatılır.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
