const S = require('../site');

module.exports = {
  slug: 'bilgi',
  tip: 'bilgi',
  baslik: 'Okuma Köşesi — Yayın İlkeleri ve Hazırlanan Başlıklar',
  aciklama: 'Dövme silme, enjeksiyon, lazer, vücut ve saç uygulamaları üzerine hekim denetimli yazıların yayımlanacağı bölüm; yayın ilkeleri ve hazırlanan başlıklar.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <span>Okuma Köşesi</span></nav>
      <p class="g-etiket">Okuma Köşesi · Yayına hazırlanıyor</p>
      <h1>Okuma <span class="g-isik">köşesi</span></h1>
      <p class="g-hero__alt">Bu bölümde lazer, enjeksiyon, vücut ve saç uygulamalarına dair yazılar yer alacak. Her yazıyı ${S.hekim.tam} hazırlayacak ya da tıbbi doğruluk yönünden denetleyecek. Bölüm henüz açılmadı; aşağıda önce hangi kurallarla yazacağımızı, ardından üzerinde çalışılan başlıkları bulabilirsiniz.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
        <a class="dgm dgm--iki" href="#ilkeler">Yazım kurallarına inin ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Yazarı ve tarihi belli</span><span><i></i>Reklam değil, bilgi</span><span><i></i>Bilinmeyen açıkça yazılır</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/bilgi-hero.webp" width="1400" height="788" alt="Masada deri katmanlarının çizimleri olan açık defter ve dolma kalem" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <div class="g-hud"><b>Hekim denetiminden geçen yazılar</b><div class="g-cizgi"></div><span>Her yazıda hazırlayan hekim ve son güncelleme tarihi yer alır</span></div>
    </div>
  </div>
</section>

<!-- ═════════ YAYIN İLKELERİ ═════════ -->
<section class="bolum bolum--buz2" id="ilkeler">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Yazım kuralları</p>
      <h2>Bu bölümdeki her yazı hangi kurallara uyacak?</h2>
      <p class="giris">Sağlık içeriğinin çok, güvenilir olanının az olduğu bir ortamda, okuduğunuz metnin nasıl hazırlandığını bilmek önemlidir. Bu yüzden kuralları yazılardan önce yayımlıyoruz.</p>
    </div>
    <div class="izgara izgara--2" data-gr style="--d:70ms">
      <div class="kart">
        <span class="kart__ikon">${ik.onay}</span>
        <h3>Kim yazdı, ne zaman güncellendi</h3>
        <p>Her yazının sonunda hazırlayan hekimin adı ve uzmanlığı, son güncelleme tarihi ve site editörüne ulaşabileceğiniz adres bulunur. Yazarı belirsiz bir metin bu bölümde yer almaz.</p>
      </div>
      <div class="kart">
        <span class="kart__ikon">${ik.kalkan}</span>
        <h3>Muayenenin yerini tutmaz</h3>
        <p>Yazılar genel bilgi içindir; kimseye teşhis koymak, tedavi seçmek ya da kişisel plan yapmak için yazılmaz. Amaçları, muayeneye sorularınızı toparlamış olarak gelmenizi kolaylaştırmaktır.</p>
      </div>
      <div class="kart">
        <span class="kart__ikon">${ik.mercek}</span>
        <h3>Bilinmeyen açıkça yazılır</h3>
        <p>Bilimsel verinin sınırlı olduğu konularda bu durum saklanmaz, olduğundan güçlü bir dil kurulmaz. Sonucun kişiye göre değişebileceği her noktada bu hatırlatılır.</p>
      </div>
      <div class="kart">
        <span class="kart__ikon">${ik.liste}</span>
        <h3>Reklam değil, bilgi</h3>
        <p>Bir yazıda karşınıza marka adı, ücret ya da kampanya duyurusu, hasta deneyimi, öncesi–sonrası karşılaştırması veya başka bir siteye gönderen bağlantı çıkmaz. Nedenini mevzuat sayfasında bulabilirsiniz.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ HAZIRLANAN BAŞLIKLAR ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Üzerinde çalışılanlar</p>
      <h2>Hangi başlıklar hazırlanıyor?</h2>
      <p class="giris">Başlıklar, muayenede en sık duyulan sorulardan seçildi. Yazımı ve denetimi biten yazılar bu sayfadan açılacak. Bir başlığın bağlantısız olması, o yazının henüz yayımlanmadığını gösterir.</p>
    </div>

    <div class="g-akor" data-gr>
      <details open>
        <summary><span class="g-okc">+</span>Lazer ve dövme silme<span class="g-adet">6 başlık</span></summary>
        <div class="g-aic">
          <div class="g-aog">
            <h4>Pikosaniye lazer dövme mürekkebine ne yapar?</h4>
            <p>Çok kısa atımların mürekkebi parçalaması ve vücudun bu parçacıkları zamanla uzaklaştırma süreci.</p>
          </div>
          <div class="g-aog">
            <h4>Renkli dövmeler neden daha fazla seans isteyebilir?</h4>
            <p>Lazerin dalga boyu ile mürekkep rengi arasındaki ilişki ve bazı renklerin daha yavaş yanıt vermesi.</p>
          </div>
          <div class="g-aog">
            <h4>Seanslar arasında neden haftalarca beklenir?</h4>
            <p>Cildin toparlanması ve mürekkep parçacıklarının temizlenmesi için gereken zamanın mantığı.</p>
          </div>
          <div class="g-aog">
            <h4>Kalıcı makyaj silinirken nelere bakılır?</h4>
            <p>Kaş ve dudak çevresinin özellikleri; açık ve ten rengi pigmentlerde koyulaşma olasılığı.</p>
          </div>
          <div class="g-aog">
            <h4>Lazer sonrası güneş ve bakım</h4>
            <p>Kabuk bakımı, güneşten korunma ve iz ya da renk değişikliği olasılığını azaltmaya yönelik öneriler.</p>
          </div>
          <div class="g-aog">
            <h4>Her leke lazerle mi ele alınır?</h4>
            <p>Yüzeysel pigment birikimleri ile hormon ve güneşle ilişkili tabloların neden ayrı değerlendirildiği.</p>
          </div>
        </div>
      </details>
      <details>
        <summary><span class="g-okc">+</span>Enjeksiyon uygulamaları<span class="g-adet">6 başlık</span></summary>
        <div class="g-aic">
          <div class="g-aog">
            <h4>Dolgu, sıvı yüz germe ve biyostimülan arasındaki fark</h4>
            <p>Hacim eklemek, yüzü bütün olarak desteklemek ve kolajen üretimini uyarmak arasındaki ayrım.</p>
          </div>
          <div class="g-aog">
            <h4>Botulinum toksinde ifade nasıl korunur?</h4>
            <p>Doz, nokta seçimi ve ilk uygulamada ölçülü başlamanın mimik üzerindeki etkisi.</p>
          </div>
          <div class="g-aog">
            <h4>Skinbooster, polinükleotid ve eksozom aynı şey mi?</h4>
            <p>Cilt kalitesine yönelik üç yaklaşımın içerik ve hedef bakımından nasıl ayrıştığı.</p>
          </div>
          <div class="g-aog">
            <h4>Morarma olasılığını azaltmak için neler yapılabilir?</h4>
            <p>İlaç ve takviyelerin rolü, zamanlama ve uygulama sonrası ilk saatlerde dikkat edilecekler.</p>
          </div>
          <div class="g-aog">
            <h4>Hyalüronidaz hangi durumlarda konuşulur?</h4>
            <p>Hyalüronik asit dolgunun çözülmesinin gündeme geldiği tablolar ve bu işlemin kendi sınırları.</p>
          </div>
          <div class="g-aog">
            <h4>Haftalar sonra ortaya çıkan şişlik ve sertlik</h4>
            <p>Geç dönem bulgularında olası nedenlerin muayene ve öyküyle nasıl ayrıştırıldığı.</p>
          </div>
        </div>
      </details>
      <details>
        <summary><span class="g-okc">+</span>Vücut, saç ve süreç<span class="g-adet">6 başlık</span></summary>
        <div class="g-aic">
          <div class="g-aog">
            <h4>Bölgesel lipoliz kilo vermenin yerini tutar mı?</h4>
            <p>Lokal yağlanmaya yönelik uygulamaların hangi durumda konuşulduğu ve beklentinin sınırı.</p>
          </div>
          <div class="g-aog">
            <h4>Selülit görünümünde gerçekçi beklenti</h4>
            <p>Cilt yüzeyindeki düzensizliğin nedenleri ve birleşik protokollerin neyi hedeflediği.</p>
          </div>
          <div class="g-aog">
            <h4>Saç dökülmesinde uygulamadan önce neye bakılır?</h4>
            <p>Demir, tiroid ve ilaç öyküsü gibi dahili başlıkların saçlı deri uygulamalarından önce gözden geçirilmesi.</p>
          </div>
          <div class="g-aog">
            <h4>HIFU ile cerrahi yüz germe aynı şey değil</h4>
            <p>Odaklanmış ultrasonun hedeflediği etki ve cerrahinin yerini neden tutmadığı.</p>
          </div>
          <div class="g-aog">
            <h4>Uygulamadan sonraki ilk günler</h4>
            <p>Olağan kabul edilen bulgular, olağan dışı işaretler ve hangi durumda muayenehaneyi aramanız gerektiği.</p>
          </div>
          <div class="g-aog">
            <h4>Onam formunda neler yazar?</h4>
            <p>Planlama görüşmesinde konuşulan başlıkların neden yazıya geçirildiği ve sizin açınızdan anlamı.</p>
          </div>
        </div>
      </details>
    </div>
  </div>
</section>

<!-- ═════════ YAYIMLANMIŞ BÖLÜMLER ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Bugün okuyabilecekleriniz</p>
      <h2>Sitede yayında olan bölümler</h2>
      <p class="giris">Okuma Köşesi hazırlanırken aşağıdaki bölümlere hemen göz atabilirsiniz.</p>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <a class="kart" href="${r}sikca-sorulan-sorular/">
        <h3>Soru ve yanıtlar</h3>
        <p>Randevu, ulaşım, dövme silme seansları ve uygulama sonrasına dair en çok gelen sorular.</p>
        <span class="kart__ok">Sorulara git ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}cilt-sorunlari/">
        <h3>Cilt sorunları</h3>
        <p>Şikâyetten yola çıkan sayfalar; olası nedenlerin birbirinden nasıl ayrıldığını anlatır.</p>
        <span class="kart__ok">Başlıkları gör ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}uygulamalar/">
        <h3>Uygulamalar</h3>
        <p>Muayenehanede yapılan her uygulama için ayrı ayrı hazırlanmış bilgi sayfaları.</p>
        <span class="kart__ok">Listeyi aç ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yasal/icerik-ve-gorsel-yayin-ilkelerimiz/">
        <h3>Yayın ve görsel kullanım esaslarımız</h3>
        <p>Metinlerin ve görsellerin hangi kurallarla seçildiğini anlatan ilke metninin tamamı.</p>
        <span class="kart__ok">Metne git ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}mevzuat/">
        <h3>Bağlı olduğumuz mevzuat</h3>
        <p>Yayın tercihlerimizin dayandığı yönetmelikler ve kanun, tek sayfada.</p>
        <span class="kart__ok">Dayanağı gör ${ik.ok}</span>
      </a>
    </div>
  </div>
</section>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Yazılmasını istediğiniz bir konu var mı?</h2>
    <p class="g-sonalt">Bu bölümün başlıklarını muayenede sorulan sorular şekillendiriyor. Aklınızdaki konuyu görüşmede iletebilir ya da iletişim kanallarından bize yazabilirsiniz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">İletişim sayfasına gidin</a>
      <a class="dgm dgm--iki" href="${r}sikca-sorulan-sorular/">Sık sorulanlara göz atın</a>
    </div>
  </div>
</section>
`,
};
