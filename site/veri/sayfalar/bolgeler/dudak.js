const S = require('../../site');

module.exports = {
  slug: 'bolgeler/dudak',
  tip: 'tibbi',
  baslik: 'Dudak planlaması: oranı koruyan, ölçülü bir yaklaşım',
  aciklama: 'Dudakta ince görünüm, silik kenar ve kuruluk farklı sorunlardır; hepsinin yanıtı hacim değildir. Bakırköy muayenehanemizde plan yüzünüzün oranına göre yapılır.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}bolgeler/" style="color:var(--sessiz);text-decoration:none">Bölgeler</a> › <span>Dudak</span></nav>
      <p class="g-etiket">Bölge rehberi · Dudak</p>
      <h1>Dudakta amaç daha fazlası değil, <span class="g-isik">doğru oran</span>.</h1>
      <p class="g-hero__alt">Dudağınızın ince göründüğünü, kenarının silikleştiğini ya da sürekli kuruduğunu düşünüyor olabilirsiniz; bu üç yakınmanın kaynağı da çözümü de birbirinden farklıdır. Çoğu zaman gereken daha çok ürün değil, üst ve alt dudak arasındaki dengenin korunmasıdır. Ölçüyü bir fotoğraf ya da moda değil, yüzünüzün kendi oranları belirler; kimi durumda en doğru adım hiçbir şey eklememektir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#uc-baslik">Üç ayrı konu ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Uygulamayı hekim yapar</span><span><i></i>Adım adım plan</span><span><i></i>Kontrol randevusu planın içinde</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/ic3d-dudak.webp" width="1400" height="788" alt="Dudak kenarını ve yüzey dokusunu yakından gösteren üç boyutlu çizim" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <div class="g-hud"><b>Her gülüşte görünür</b><div class="g-cizgi"></div><span>Konuşma, gülümseme, yemek: dudaktaki her değişiklik en çok bu anlarda göze çarpar.</span></div>
    </div>
  </div>
</section>

<!-- ═════════ VERİ BANDI ═════════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="3">0</em></b><span>Ayrı konu</span></div>
  <div data-gr style="--d:70ms"><b><em data-gsay="5">0</em></b><span>Planlama adımı</span></div>
  <div data-gr style="--d:140ms"><b><em data-gsay="2">0</em></b><span>İnceleme açısı: ön ve yan</span></div>
  <div data-gr style="--d:210ms"><b>Kademeli</b><span>Küçük miktarla başlanır</span></div>
</div></div>

<!-- ═════════ ATLAS: ÜÇ BAŞLIK ═════════ -->
<section class="bolum" id="uc-baslik">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Ayrım</p>
      <h2>Dudakla ilgili yakınma hangi konuya giriyor?</h2>
      <p class="giris">Muayeneye gelenlerin çoğu “dudaklarım çok ince” diyerek söze başlar; yakından bakıldığında ise sorun sıklıkla kenar çizgisinde ya da yüzeyin kuruluğunda çıkar. Üç konu aynı kişide bir arada olabilir. Hangisinin ağır bastığı anlaşılmadan plan yazmayız.</p>
    </div>
    <div class="g-atlas-duzen">
      <div class="g-atlas" data-gr>
        <div class="g-atlas-kap">
          <img src="${r}varliklar/gorsel/yuz-3d-c.webp" width="900" height="1200" alt="Dudağın yüz bütünündeki yerini gösteren, sola dönük üç boyutlu kadın profili" loading="lazy">
          <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
          <div class="g-rozetk" data-grozet><b>Hacim</b><span>Ne kadar dolgunluğun uygun olduğunu iki dudağın oranı ve yüz genişliği söyler.</span></div>
        </div>
      </div>
      <div>
        <div class="g-katblok" data-gkat="hacim" data-gr>
          <span class="g-kno">01 · HACİM</span>
          <h3>Gövdedeki dolgunluk</h3>
          <p>Kimi dudaklar doğuştan incedir, kimileri yıllar içinde dolgunluğunu yitirir. Bu konuda iki ölçüye bakarız: üst dudağın alt dudağa oranı ve dudak genişliğinin yüz genişliğine göre durumu. Kullanılacak miktarın üst sınırını bu iki ölçü çizer.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/dolgu-uygulamalari/">Dolgu uygulamaları</a></div>
        </div>
        <div class="g-katblok" data-gkat="sinir" data-gr>
          <span class="g-kno">02 · KENAR NETLİĞİ</span>
          <h3>Dudağın kenar çizgisi</h3>
          <p>Dudakla deri arasındaki ince sınır zamanla silikleşebilir; böyle olunca dolgunluk yerinde olsa bile dudak dağınık bir görünüm alır. Bu yakınmaya gövdeyi büyüterek yanıt vermek yanlış olur. Çalışılan yer yalnızca kenar hattıdır ve burada çok küçük miktarlarla yetinilir.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/dolgu-uygulamalari/">Dolgu uygulamaları</a></div>
        </div>
        <div class="g-katblok" data-gkat="nem" data-gr>
          <span class="g-kno">03 · NEM VE YÜZEY</span>
          <h3>Kuruluk ve dikey kırışıklar</h3>
          <p>Dudakların sık kuruması, kabuk bağlaması ve üzerinde dikine uzanan ince çizgiler bu konuya girer. Sigara içmek, dudağı güneşten korumamak, ağızdan nefes alma alışkanlığı ve bazı ilaçlar kuruluğu artırır. Buradaki hedef dudağı büyütmek değil, yüzeyi nemli ve korunaklı tutmaktır.</p>
          <div class="g-haplar"><a href="${r}uygulamalar/genclik-asisi-skinbooster/">Gençlik aşısı (skinbooster)</a><a href="${r}uygulamalar/mezoterapi/">Mezoterapi</a></div>
        </div>
      </div>
    </div>
  </div>
</section>
<script type="application/json" data-gnokta-veri>{"hacim":["Hacim","Ne kadar dolgunluğun uygun olduğunu iki dudağın oranı ve yüz genişliği söyler."],"sinir":["Kenar netliği","Yalnızca kenar hattında, çok küçük miktarla çalışılır; gövde büyütülmez."],"nem":["Nem ve yüzey","Hedef dudağı büyütmek değil, yüzeyi nemli ve korunaklı tutmak."]}</script>

<!-- ═════════ ORAN ═════════ -->
<section class="bolum bolum--sicak" id="oran">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Ölçü</p>
      <h2>Dudağınız için doğru oranı ne belirler?</h2>
      <p class="giris">Başka birinden ya da bir fotoğraftan alınan ölçü, sizin yüzünüzde aynı sonucu vermez. Oranı sizin yüzünüzün kendi çizgileri belirler.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">01 · ÜÇ ÖLÇÜ</span>
      <h3>Üç ölçü, tek karar</h3>
      <p>Muayenede üç şeye birlikte bakarız: iki dudağın birbirine göre dolgunluğu, dudağın yüz genişliği içinde kapladığı yer ve yandan bakıldığında burun ucu ile çene ucu arasındaki konumu. Bu üçü aynı yönü gösterdiğinde nerede durulacağı da kendiliğinden anlaşılır.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">02 · EĞİLİM, KURAL DEĞİL</span>
      <h3>Alttaki dudağın bir parça dolgun olması sık görülür</h3>
      <p>Pek çok kişide alttaki dudak, üsttekine göre bir parça daha dolgundur. Bu değişmez bir kural değil, yalnızca sık rastlanan bir eğilimdir; tersi de uyumlu durabilir. Amacımız ideal sayılan bir orana ulaşmak değil, sizin dudağınızdaki dengenin korunmasıdır.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">03 · PROFİL</span>
      <h3>Yandan bakış çoğu zaman unutulur</h3>
      <p>Karşıdan dolgun ve uyumlu görünen bir dudak, profilden bakıldığında fazla öne çıkmış olabilir. Kararı bu yüzden tek bir ön fotoğrafa dayandırmayız; dudağı en az iki farklı açıdan inceleriz.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">04 · KOMŞU YAPILAR</span>
      <h3>Dudak tek başına okunmaz</h3>
      <p>Ağız köşelerindeki çöküklük, çene ucunun ne kadar önde olduğu ve elmacıktaki destek, dudağın nasıl algılandığını doğrudan etkiler. Bu bağlantıyı <a href="${r}bolgeler/yuz/">yüz bölgesi planlaması</a> sayfasında ayrıntılı anlattık.</p>
    </div>
  </div>
</section>

<!-- ═════════ AŞIRI DOLGUNLUK ═════════ -->
<section class="bolum" id="asiri">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Sınır</p>
      <h2>Dudak neden fazla dolgun görünür ve bu nasıl önlenir?</h2>
      <p class="giris">Fazla dolgun bir dudak çoğunlukla tek bir seansın değil, birbiri ardına eklenen seansların sonucudur. Bunu önlemek için miktarı küçük tutmak kadar seansları seyrek planlamak ve her seferinde dudağa yeniden bakmak gerekir.</p>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b2" data-gr>
        <span class="g-ket">1 · BİRİKME</span>
        <p><b style="color:var(--murekkep)">Eskisi dururken yenisi</b><br>Önceki seanstan kalan ürün hâlâ dokudayken yeni bir seans yapılırsa toplam miktar fark edilmeden artar. Bu yüzden “zamanı geldi” diye otomatik tekrar yapmayız; yeni bir seanstan önce dudakta ne kadar ürün kaldığını muayeneyle anlamaya çalışırız.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">2 · ERKEN KARAR</span>
        <p><b style="color:var(--murekkep)">Şişken hâline bakıp eklemek</b><br>İşlemden hemen sonra dudak şiş olduğu için gerçek sonuç henüz görünmez. Bu dönemde “yeterince olmamış” deyip üzerine eklemek sık yapılan bir yanlıştır; karar, şişlik tamamen indikten sonra verilir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms">
        <span class="g-ket">3 · SINIR AŞIMI</span>
        <p><b style="color:var(--murekkep)">Ürünün kenarı aşması</b><br>Ürün dudak gövdesinin sınırından dışarı taşarsa dudak dolgun değil kabarık görünür, kenar çizgisi de bulanıklaşır. Bunu önlemek için kenar ve gövde ayrı planlanır; kenara çok daha az ürün konur.</p>
      </div>
      <div class="g-kutu g-b3 g-kutu--gece" data-gr>
        <span class="g-ket">İLKE</span>
        <p>"En güvenli yol, işe az miktarla başlayıp adım adım ilerlemektir; geri dönmesi güç bir noktaya gelmeden durabilmek de planın içindedir."</p>
      </div>
      <div class="g-kutu g-b3" data-gr style="--d:70ms">
        <span class="g-ket">MEVCUT DOLGUNLUK</span>
        <p>Şu anki dudağınızı fazla dolgun buluyorsanız yanıt yeni bir işlem değildir. Hyalüronik asit içeren dolgular, gerekli görüldüğünde enzimle eritilebilir; bu seçeneğin riskleri ve hangi durumlarda düşünüldüğü <a href="${r}uygulamalar/dolgu-uygulamalari/">dolgu uygulamaları</a> sayfasının istenmeyen durumlar bölümünde anlatılıyor.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS: UYGULAMALAR ═════════ -->
<section class="bolum bolum--buz2" id="uygulamalar">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Seçenekler</p>
      <h2>Dudak için hangi seçenekler konuşulabilir?</h2>
      <p class="giris">Listedeki seçenekler, muayenede uygun bir tablo görüldüğünde konuşulur. Çoğu başvuruda bunlardan yalnızca biri gerekir; kimi görüşmeler hiçbir işlem konuşulmadan biter.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Yöntem</span><span>Amaç</span><span>Toparlanma</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/dolgu-uygulamalari/" data-gg="${r}varliklar/gorsel/uyg-dolgu-uygulamalari.webp" data-gb="Dolgu uygulamaları" data-ga="Hacmin azaldığı ya da kenarın silikleştiği tabloda düşünülür; dudak için yumuşak kıvamlı, dokuya uyum sağlayan ürünler seçilir."><h4>Dolgu uygulamaları</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">Hacim / kenar</i></span><span class="g-hucre">İlk hafta</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/genclik-asisi-skinbooster/" data-gg="${r}varliklar/gorsel/uyg-genclik-asisi-skinbooster.webp" data-gb="Gençlik aşısı (skinbooster)" data-ga="Kuru, mat ve dikey ince çizgili dudak yüzeyinde konuşulur; dudağı büyütmez."><h4>Gençlik aşısı (skinbooster)</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">Nem / yüzey</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/mezoterapi/" data-gg="${r}varliklar/gorsel/uyg-mezoterapi.webp" data-gb="Mezoterapi" data-ga="Yüzeyin nemini ve koruyucu bariyerini desteklemeye yönelik ikinci bir seçenektir."><h4>Mezoterapi</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">Nem / yüzey</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/somon-dna-polinukleotid/" data-gg="${r}varliklar/gorsel/uyg-somon-dna-polinukleotid.webp" data-gb="Somon DNA ve polinükleotid" data-ga="Dudak dokusunun yenilenmesinin ön planda olduğu durumlarda düşünülebilir."><h4>Somon DNA ve polinükleotid</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">Doku</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/botulinum-toksin/" data-gg="${r}varliklar/gorsel/uyg-botulinum-toksin.webp" data-gb="Botulinum toksin" data-ga="Gülümserken diş etinin fazla görünmesi ya da dudak köşelerinin aşağı inmesi gibi kas kaynaklı durumlarda çok düşük dozla konuşulabilir."><h4>Botulinum toksin</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">Kas kaynaklı</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/sivi-yuz-germe/" data-gg="${r}varliklar/gorsel/uyg-sivi-yuz-germe.webp" data-gb="Sıvı yüz germe" data-ga="Dudak çevresindeki çöküklük elmacık ve çene desteğiyle birlikte ele alınacaksa bütüncül bir planın parçası olabilir."><h4>Sıvı yüz germe</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">Çevre desteği</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-dolgu-uygulamalari.webp" alt=""></div><div class="g-ic"><h4>Dolgu uygulamaları</h4><p>Hacmin azaldığı ya da kenarın silikleştiği tabloda düşünülür; dudak için yumuşak kıvamlı, dokuya uyum sağlayan ürünler seçilir.</p><a class="dgm dgm--iki" href="${r}uygulamalar/dolgu-uygulamalari/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ PLANLAMA + SINIR ═════════ -->
<section class="bolum" id="planlama">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Süreç ve uygunluk</p>
      <h2>Dudak planı hangi adımlarla yapılır, kimlere uygun değildir?</h2>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b4" data-gr>
        <span class="g-ket">PLANLAMA ADIMLARI</span>
        <ol class="g-protokol">
          <li><b>Beklentinizi dinlemek.</b>&nbsp;Görüşme, sizin ne istediğinizi dinlemekle başlar. Başka birinin dudağına benzeme isteği karşılanabilecek bir beklenti değildir; ölçüyü sizin yüzünüz belirler.</li>
          <li><b>Üç konuyu ayırmak.</b>&nbsp;Dolgunluk, kenar ve nem ayrı ayrı not edilir. Üst dudağın boyu, konuşurken görünen diş miktarı, ağız köşelerinin yukarı mı aşağı mı baktığı ve profil ölçüleri de kaydedilir; iki yarım arasında hafif bir fark çoğu insanda doğaldır.</li>
          <li><b>Sağlık öyküsü.</b>&nbsp;Daha önce yapılan işlemleri, uçuk sıklığınızı, kan sulandırıcı kullanıp kullanmadığınızı, gebelik ya da emzirme durumunu sorarız; bilinen aşırı duyarlılıklarınızı belirtin. Sık uçuk çıkıyorsa işlemden önce koruyucu önlem planlanır.</li>
          <li><b>Az miktarla, basamak basamak.</b>&nbsp;Hedefe tek seansta varmaya çalışmayız. Küçük bir miktarla başlar, şişliğin inmesini bekler, ihtiyaç kalırsa ikinci seansı ondan sonra konuşuruz.</li>
          <li><b>Yazılı bilgilendirme ve kontrol.</b>&nbsp;Amaçlanan etkiyi ve görülebilecek istenmeyen durumları yazılı olarak alırsınız; onamınız olmadan işleme geçilmez. Kontrol randevusu şişliğin geçeceği bir tarihe verilir.</li>
        </ol>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/foto/klinik-uygulama-odasi.webp" alt="Bakırköy muayenehanemizin uygulama odası" loading="lazy"></div>
    </div>
    <div class="izgara izgara--2" style="margin-top:22px">
      <div class="kutu kutu--uyari" data-gr>
        <h4>Uygulama yapılmayan durumlar</h4>
        <ul>
          <li>Gebelik ya da emzirme</li>
          <li>Dudakta ya da çevresinde etkin uçuk, enfeksiyon veya açık yara</li>
          <li>Kullanılacak içeriğe karşı daha önce görülmüş aşırı duyarlılık tepkisi</li>
          <li>Yüzün kendi oranlarını aşmayı hedefleyen istekler</li>
          <li>Dudakta zaten sınıra ulaşmış miktarda ürün bulunması</li>
        </ul>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:70ms">
        <h4>Ertelenen ya da ayrıca planlanan durumlar</h4>
        <ul>
          <li>Sık tekrarlayan uçuk — koruyucu önlem alınmadan işlem yapılmaz</li>
          <li>Yeni yapılmış bir diş tedavisi ya da geçirilmiş enfeksiyon</li>
          <li>Kan sulandırıcı ilaç ya da pıhtılaşma sorunu</li>
          <li>Dudağa daha önce konmuş, içeriği bilinmeyen ürün</li>
          <li>Önemli bir güne yalnızca birkaç gün kalmışken yapılan başvurular</li>
        </ul>
      </div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <p>İşlemden sonraki ilk iki gün dudağın belirgin biçimde şişmesi olağandır ve bu, sonucun son hâli değildir; şişliğin büyük kısmı çoğunlukla bir hafta içinde iner. İlk gün dudağınıza bastırmamanızı, ovmamanızı, ruj ve makyaj kullanmamanızı öneririz. İlk gün çayınızı, kahvenizi ve yemeğinizi ılık tüketmeniz, sauna ile ağır sporu da birkaç gün ertelemeniz iyileşmeyi kolaylaştırır. Bütün uygulamalar için geçerli öneriler <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası takip</a> sayfasında toplandı.</p>
    </div>
    <div class="kutu kutu--acil" data-gr style="margin-top:22px">
      <b>Beklemeden başvurmanız gereken bulgular</b>
      <p>İşlemden sonraki günlerde giderek artan şiddetli ağrı, dudakta ya da çevresinde beyazlaşma veya morumsu ağ görünümü, hızla büyüyen şişlik, ateş ya da görmede değişiklik olursa bizi <a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a> numarasından hemen arayın. Telefonla ulaşamazsanız <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Soru–cevap</p><h2>Aklınızdaki soruyu seçin, yanıtı yanda okuyun</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr')} · dudak bölgesi · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>“Dudak dolgusu” yaptırmak istiyorum; bu tam olarak hangi işlem?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Dudağa yapılan dolgunun etkisi kaç ay sürer?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Sık sık uçuk çıkarıyorum; dudak işlemi yaptırabilir miyim?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Dudağım ince sayılmaz ama kenarı belli değil; yine de dolgunluk mu eklenir?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Beğendiğim bir dudak fotoğrafıyla gelebilir miyim?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nereden öğrenebilirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede birlikte bakalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["“Dudak dolgusu” yaptırmak istiyorum; bu tam olarak hangi işlem?","Tıptaki adıyla bu, dudağa yapılan hyalüronik asit dolgu uygulamasıdır. “Dolgu” sözcüğü tek bir ürünü değil, kıvamı ve dokudaki davranışı birbirinden farklı bir ürün ailesini anlatır. Dudak için yumuşak ve dokuyla kaynaşan ürünler seçilir; elmacık ya da çene gibi destek bölgelerinde kullanılan sert kıvamlı ürünler dudağa uygun değildir."],["Dudağa yapılan dolgunun etkisi kaç ay sürer?","Dudak, konuşma ve yemek sırasında hiç durmayan bir bölge olduğu için ürün burada öteki bölgelere göre çoğunlukla daha erken yıkılır. Ne kadar süreceğini dudağın hareketi, vücudunuzun ürünü yıkma hızı ve seçilen ürünün yapısı belirler; bu da kişiden kişiye farklıdır. Bu nedenle size belirli bir ay sayısı ya da kalıcılık sözü vermeyiz."],["Sık sık uçuk çıkarıyorum; dudak işlemi yaptırabilir miyim?","Sık uçuk çıkarmanız işleme tek başına engel değildir. Ancak iğne uçuğu tetikleyebileceği için önceden koruyucu önlem alınmadan işlem yapmayız; bu yüzden uçuk öykünüzü mutlaka söyleyin. Randevu günü dudağınızda uçuk varsa, uçuk kuruyup bölge iyileşene kadar işlemi erteleriz."],["Dudağım ince sayılmaz ama kenarı belli değil; yine de dolgunluk mu eklenir?","Hayır. Kenar çizgisi silikleşmişse gövdeye ürün eklemek dudağı daha da dağınık gösterebilir. Böyle bir durumda yalnızca kenar hattında, çok küçük miktarlarla çalışılır. Sorunun gövdede mi kenarda mı olduğunu muayenede birlikte ayırırız."],["Beğendiğim bir dudak fotoğrafıyla gelebilir miyim?","Elbette; fotoğraf ne istediğinizi anlatmanızı kolaylaştırır. Ancak başka birinin dudağını kopyalamak mümkün değildir, çünkü dudak altındaki dişlerle, çenenin yapısıyla ve yüzün genişliğiyle birlikte görünür. Aynı miktar ürün iki farklı yüzde bambaşka duracaktır. Planı sizin yüzünüzün ölçüleri belirler."],["Ücret bilgisini nereden öğrenebilirim?","Sağlık tanıtımını düzenleyen yönetmelik, ücretlerin internet sitelerinde paylaşılmasına izin vermez. Dudak planı kişiden kişiye değiştiği için buraya yazılacak bir rakam gerçek bir fikir de vermezdi. Ücret, muayenede plan netleştikten sonra size ayrıca bildirilir."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Dudağınız için ölçülü bir plan yapalım</h2>
    <p class="g-sonalt">${S.iletisim.adres}, ${S.iletisim.ilce} — muayenede dolgunluğu, kenarı ve nemi tek tek inceliyor, bir işleme gerçekten ihtiyaç olup olmadığına birlikte karar veriyoruz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
