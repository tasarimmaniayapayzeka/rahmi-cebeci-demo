const S = require('../site');
const YH = require('../parcalar/yuz-harita');
const OZ = require('../parcalar/uygulama-ozet');

/* Ana sayfa — molekül hero, öne çıkan dövme silme kartı, süreç akışı,
   yüz haritası, filtreli SSS, gerçek harita. Etkileşim: varliklar/js/anasayfa.js */

const HARITA_EMBED = 'https://www.google.com/maps?q=' + encodeURIComponent(S.iletisim.adres + ' ' + S.iletisim.ilce) + '&output=embed';

module.exports = {
  slug: '',
  tip: 'tibbi',
  js: ['anasayfa.js', 'kesif.js'],
  baslik: `${S.marka} — Medikal Estetik ve Dövme Silme, Bakırköy`,
  aciklama: 'Bakırköy’de tek hekimli medikal estetik muayenehanesi. Pico lazerle dövme silme, dolgu, botulinum toksin ve cihaz uygulamaları muayeneyle planlanır.',

  icerik: (r, ik) => {
    /* hub'daki bölüm id'leri grup adının slug'ı — kartlar oraya iner */
    const slugla = t => t.toLowerCase()
      .replace(/[çğıöşü]/g, c => ({ 'ç':'c','ğ':'g','ı':'i','ö':'o','ş':'s','ü':'u' }[c]))
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    const grupKart = S.katalog.map((g, i) => `
      <a class="kart" data-egim href="${r}uygulamalar/#${slugla(g.grup)}" data-reveal style="--d:${i * 70}ms">
        <span class="kart__ikon">${ik[g.ikon]}</span>
        <h3>${g.grup}</h3>
        <p>${g.ogeler.slice(0, 4).map(o => o[0]).join(' · ')}${g.ogeler.length > 4 ? ' ve diğerleri' : ''}</p>
        <span class="kart__ok">${g.ogeler.length} uygulama ${ik.ok}</span>
      </a>`).join('');

    const sorunKart = S.sorunlar.slice(0, 8).map(([ad, s], i) => `
      <a class="kart" data-egim href="${r}cilt-sorunlari/${s}/" data-reveal style="--d:${i * 55}ms">
        <h4>${ad}</h4>
        <span class="kart__ok">Sayfaya git ${ik.ok}</span>
      </a>`).join('');

    return `

<!-- ═════════ HERO — molekül sahnesi ═════════ -->
<section class="hero hero--v2">
  <div class="sar hero__ic">
    <div>
      <p class="etiket">Bakırköy · İstanbul</p>
      <h1>Tek hekim, net bir plan ve yüzünüze göre ölçülen uygulamalar.</h1>
      <p class="hero__giris">${S.hekim.tam}’nin ${S.iletisim.semt}’deki muayenehanesinde her uygulama bir muayeneyle başlar. Neyin, hangi sırayla ve ne ölçüde yapılacağı sizinle birlikte konuşulur; işlemi yapan ve kontrolünüzü üstlenen hekim aynıdır.</p>
      <div class="dgm-sira">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
        <a class="dgm dgm--iki" href="${r}uygulamalar/">Uygulamalara göz atın ${ik.ok}</a>
      </div>
      <ul class="hero__guven">
        <li>${ik.onay} Muayene ve uygulama aynı hekimde</li>
        <li>${ik.onay} Randevulu çalışma düzeni</li>
        <li>${ik.onay} Kontrol randevusu planın içinde</li>
      </ul>
    </div>
    <div class="molekul">
      <canvas data-molekul aria-hidden="true"></canvas>
      <div class="molekul__rozet molekul__rozet--1">
        <b>Karar muayenede</b>
        <span>Hangi uygulamanın uygun olduğu, bölge görülüp öykünüz dinlendikten sonra konuşulur.</span>
      </div>
      <div class="molekul__rozet molekul__rozet--2">
        <b>Cildin yapı taşları</b>
        <span>Hyalüronik asit ve kolajen: pek çok uygulamanın desteklemeyi hedeflediği doğal yapılar.</span>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ ÖNE ÇIKAN — pico lazer ile dövme silme ═════════ -->
<section class="bolum bolum--sik">
  <div class="sar">
    <a class="kart kart--sicak" data-egim href="${r}uygulamalar/pico-lazer-dovme-silme/" data-reveal style="--d:0ms">
      <span class="kart__ikon">${ik.kalkan}</span>
      <span class="rozet rozet--bakir">Öne çıkan uygulama</span>
      <h3 style="margin-top:8px">Pico lazer ile dövme silme</h3>
      <p>Pikosaniye süren lazer atımlarıyla dövme mürekkebinin küçük parçacıklara ayrılması, bu parçacıkların da zamanla vücudun kendi temizleme yollarıyla uzaklaştırılması hedeflenir. Kaç seans gerekeceği mürekkebin rengine, derinliğine ve dövmenin yaşına göre değişir; bu sayı muayenede, dövme görülerek konuşulur.</p>
      <span class="kart__ok">Dövme silme sayfası ${ik.ok}</span>
    </a>
  </div>
</section>

<!-- ═════════ SAYAÇ ═════════ -->
<section class="bolum bolum--sik bolum--gece">
  <div class="sar sayac">
    <div><b><span data-say="${S.katalog.reduce((a, g) => a + g.ogeler.length, 0)}">0</span></b><span>Ayrı sayfada anlatılan uygulama</span></div>
    <div><b><span data-say="${S.bolgeler.length}">0</span></b><span>Bölge sayfası</span></div>
    <div><b><span data-say="${S.sorunlar.length}">0</span></b><span>Şikâyet başlığı</span></div>
    <div><b>Tek</b><span>Hekim, muayeneden kontrole</span></div>
  </div>
</section>

<!-- ═════════ SÜREÇ AKIŞI ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-reveal>
      <p class="etiket">Çalışma düzeni</p>
      <h2>Her uygulamada izlenen beş basamak</h2>
      <p class="giris">Sıra değişmez, basamak atlanmaz. Benzer bir istekle gelen iki kişinin farklı planlarla ayrılması da bu basamaklardan kaynaklanır.</p>
    </div>
    <div class="akis" data-reveal>
      <div class="akis__adim" data-reveal style="--d:0ms">
        <span class="akis__nokta">${ik.mercek}</span>
        <h4>Muayene ve öykü</h4>
        <p>Ne istediğiniz, cildinizin özellikleri, yüz yapınız ve kullandığınız ilaçlar birlikte ele alınır.</p>
      </div>
      <div class="akis__adim" data-reveal style="--d:120ms">
        <span class="akis__nokta">${ik.liste}</span>
        <h4>Plan</h4>
        <p>Uygulamanın türü, bölgesi, sırası ve gerekiyorsa seans aralıkları belirlenir.</p>
      </div>
      <div class="akis__adim" data-reveal style="--d:240ms">
        <span class="akis__nokta">${ik.kalkan}</span>
        <h4>Bilgilendirme ve yazılı onam</h4>
        <p>Hedeflenen etki, görülebilecek yan etkiler ve diğer seçenekler anlatılır; onamınız yazılı alınır.</p>
      </div>
      <div class="akis__adim" data-reveal style="--d:360ms">
        <span class="akis__nokta">${ik.damla}</span>
        <h4>Uygulama günü</h4>
        <p>İşlemi hekim kendisi yapar; enjeksiyon ve lazer uygulamaları başka birine bırakılmaz.</p>
      </div>
      <div class="akis__adim" data-reveal style="--d:480ms">
        <span class="akis__nokta">${ik.saat}</span>
        <h4>Kontrol</h4>
        <p>Kontrol günü baştan takvime yazılır; sonradan fark edilen bir durumda sizi yine aynı hekim görür.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ YOLCULUK SİMÜLATÖRÜ (uygulamalar hub'ıyla aynı bileşen) ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-reveal>
      <p class="etiket">Adım adım</p>
      <h2>Seçtiğiniz uygulamada bu süreç nasıl işler?</h2>
      <p class="giris">Listeden bir uygulama seçin; muayene, plan, uygulama günü ve takip aşamaları o uygulamanın kendi sayfasındaki bilgilerle sırayla açılsın. Burada gördüğünüz genel çerçevedir; ayrıntılar muayenede size göre belirlenir.</p>
    </div>
    <div data-yolc>
      <div class="yolc-sec" data-reveal>
        <select data-yolc-sec aria-label="Uygulama seçin">
          ${S.katalog.map(g => `<optgroup label="${g.grup}">` +
            g.ogeler.filter(([, sl]) => OZ[sl]).map(([ad, sl]) => `<option value="${sl}">${ad}</option>`).join('') +
            '</optgroup>').join('')}
        </select>
        <button type="button" class="dgm dgm--iki" data-yolc-oynat>▶ Akışı başlat</button>
        <a class="dgm dgm--iki" href="${r}uygulama-karsilastirma/">Uygulamaları yan yana koyun ${ik.ok}</a>
      </div>
      <div class="yolc-sahne" data-reveal>
        <div class="yolc-ciz" aria-hidden="true"><i></i></div>
        <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
        ${['Muayene', 'Planlama', 'Uygulama günü', 'Takip ve kontrol'].map((ad, i) =>
          `<div class="yolc-adim"><span class="yolc-no">${i + 1}</span><img src="${r}varliklar/gorsel/asama-${['muayene', 'plan', 'gun', 'takip'][i]}.webp" width="400" height="400" alt="" loading="lazy"><b>${ad}</b><p></p></div>`).join('')}
      </div>
    </div>
    <script type="application/json" data-yolc-veri>${JSON.stringify(
      Object.fromEntries(Object.entries(OZ).map(([sl, k]) => [sl, { yolculuk: k.yolculuk }])))}</script>
  </div>
</section>

<!-- ═════════ YÜZ HARİTASI ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-reveal>
      <p class="etiket">Bölgeler</p>
      <h2>Haritada bir bölge seçin</h2>
      <p class="giris">Her bölgenin deri kalınlığı, damar yapısı ve kas hareketi farklıdır; aynı uygulama bu yüzden her bölgede aynı biçimde yapılmaz. Haritadaki noktalardan ya da yandaki listeden bir bölgeye dokunarak başlayın.</p>
    </div>
    <div class="yuz-harita" data-yuz-harita data-reveal>
      <div class="yuz-harita__sahne">${YH.sahneUret(r)}</div>
      <div class="yuz-harita__sag">
        <div class="yuz-harita__liste" role="group" aria-label="Bölge seçimi">${YH.listeUret()}</div>
        ${YH.panelUret(r)}
      </div>
    </div>
  </div>
</section>

<!-- ═════════ UYGULAMA GRUPLARI ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-reveal>
      <p class="etiket">Uygulamalar</p>
      <h2>Dört grupta toplanan uygulamalar</h2>
      <p class="giris">Enjeksiyonlar, lazer ve cihaz uygulamaları, saçlı deri çalışmaları, değerlendirme ve takip. Her sayfada uygulamanın ne olduğu, kimlere yapılmadığı ve sonrasında nelerle karşılaşabileceğiniz ayrı başlıklar altında anlatılır.</p>
    </div>
    <div class="izgara izgara--3">${grupKart}</div>
  </div>
</section>

<!-- ═════════ CİLT SORUNLARI ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-reveal>
      <p class="etiket">Şikâyetten başlayın</p>
      <h2>İşlemin adını bilmeniz gerekmiyor</h2>
      <p class="giris">Sizi rahatsız eden durumu seçin. Açılan sayfada olası nedenlerin birbirinden nasıl ayrıldığını ve hangi seçeneklerin konuşulabileceğini bulursunuz.</p>
    </div>
    <div class="izgara izgara--4">${sorunKart}</div>
    <div class="dgm-sira" style="margin-top:24px" data-reveal>
      <a class="dgm dgm--iki" href="${r}cilt-sorunlari/">Bütün şikâyet başlıkları ${ik.ok}</a>
    </div>
  </div>
</section>

<!-- ═════════ NEDEN BURASI ═════════ -->
<section class="bolum bolum--gece">
  <div class="sar">
    <div class="izgara izgara--2" style="align-items:center;gap:clamp(24px,4vw,52px)">
      <div data-reveal>
        <p class="etiket">Yaklaşımımız</p>
        <h2>Ölçü, uygulamanın kendisi kadar önemlidir</h2>
        <p style="margin-top:14px">Bu alanda sonucu bozan şey çoğu zaman eksiklik değil, aşırılıktır. Yüz ifadesinin size ait kalması için bazı istekler <em>ertelenir</em>, bazıları hiç uygulanmaz.</p>
        <p>Bir uygulama, beklentinizle bölgenin özellikleri örtüştüğünde önerilir. Örtüşmüyorsa gerekçesi açık bir dille anlatılır; bazen doğru karar beklemektir.</p>
        <div class="dgm-sira" style="margin-top:24px">
          <a class="dgm dgm--gece" href="${r}yaklasimimiz/">Çalışma biçimimiz</a>
          <a class="dgm dgm--gece-hayalet" href="${r}klinik/">Muayenehaneyi tanıyın</a>
        </div>
      </div>
      <div class="izgara" style="gap:14px">
        <div class="kart kart--gece" data-reveal style="--d:0ms"><h4>Küçük adımlarla ilerleme</h4><p>İlk uygulamada ölçülü bir miktarla başlanır; etkisi görüldükten sonra ek ihtiyaç varsa tamamlanır.</p></div>
        <div class="kart kart--gece" data-reveal style="--d:120ms"><h4>Geri alınabilirliği gözetme</h4><p>Seçenekler arasında, gerektiğinde geri alınabilen ya da zamanla vücut tarafından parçalanan ürünler öncelikle düşünülür.</p></div>
        <div class="kart kart--gece" data-reveal style="--d:240ms"><h4>Kontrol planın içinde</h4><p>Uygulama günü sürecin sonu değildir; kontrol randevusu en baştan takvime eklenir.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ HEKİM ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="izgara izgara--2" style="gap:clamp(24px,4vw,48px);align-items:start">
      <div data-reveal>
        <p class="etiket">Hekim</p>
        <h2>${S.hekim.tam}</h2>
        <p style="margin-top:6px;font-weight:700;color:var(--murekkep)">${S.hekim.dallar}</p>
        <p style="margin-top:16px">Hacettepe Üniversitesi Tıp Fakültesi’nden 2005’te mezun oldu; aile hekimliği uzmanıdır ve Sağlık Bakanlığı onaylı medikal estetik uygulama sertifikasına sahiptir. Muayenehanedeki bütün uygulamaları, bu sertifikanın tanımladığı işlemler sınırında kendisi yapar.</p>
        <p>İsteğiniz bu kapsamın dışında kalıyorsa bunu açıkça söyler ve hangi uzmanlık dalına başvurmanızın uygun olacağını anlatır.</p>
        <div class="dgm-sira" style="margin-top:22px">
          <a class="dgm dgm--iki" href="${r}hekim/">Hekimi yakından tanıyın ${ik.ok}</a>
        </div>
      </div>
      <div class="izgara" style="gap:14px">
        <figure class="gorsel" data-reveal style="margin:0">
          <img src="${r}varliklar/foto/hekim-koltuk.webp" width="1400" height="788" alt="${S.hekim.tam}, ${S.iletisim.semt}’deki muayenehanesinde koltukta otururken" loading="lazy">
        </figure>
        <div class="kart kart--sicak" data-reveal style="--d:0ms">
          <span class="rozet rozet--bakir">Uygulama</span>
          <h4 style="margin-top:8px">Hekimin kendi eliyle</h4>
          <p>Enjeksiyonlar ile lazer ve cihaz uygulamaları hekim tarafından yapılır; başka bir personele bırakılmaz.</p>
        </div>
        <div class="kart kart--sicak" data-reveal style="--d:120ms">
          <span class="rozet rozet--bakir">Kapsam</span>
          <h4 style="margin-top:8px">Sertifikanın sınırları içinde</h4>
          <p>Yapılan işlemler, Bakanlıkça onaylı medikal estetik sertifikasının tanımladığı uygulamalarla sınırlı tutulur.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ ARAÇLAR ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-reveal>
      <p class="etiket">Hazırlık</p>
      <h2>Randevudan önce birkaç dakika ayırın</h2>
      <p class="giris">Hazırlık listesi ve cilt tipi testi tarayıcınızın içinde çalışır. Verdiğiniz cevaplar bize ulaşmaz, bir sunucuya yazılmaz ve sayfayı kapattığınızda silinir.</p>
    </div>
    <div class="izgara izgara--2">
      <a class="kart" data-egim href="${r}hazirlik-listesi/arac/" data-reveal style="--d:0ms">
        <span class="kart__ikon">${ik.liste}</span>
        <span class="rozet">12 madde · 2 dakika</span>
        <h3 style="margin-top:8px">Görüşme öncesi hazırlık listesi</h3>
        <p>Muayenede söylemeniz gereken ilaç, sağlık öyküsü ve önceki uygulama bilgilerini toparlamanıza yardım eder. Tanı koymaz, tarama yapmaz, işlem önermez ve uygunluk kararı vermez.</p>
        <span class="kart__ok">Listeyi açın ${ik.ok}</span>
      </a>
      <a class="kart" data-egim href="${r}cilt-tipi-testi/" data-reveal style="--d:120ms">
        <span class="kart__ikon">${ik.mercek}</span>
        <span class="rozet">Cihazınızda çalışır</span>
        <h3 style="margin-top:8px">Cilt tipi eğilim testi</h3>
        <p>On iki kısa soruyla cildinizin nem–yağ dengesini, hassasiyetini ve leke eğilimini tarif etmenize yardımcı olur. Bir tanı aracı değildir; cilt tipiniz muayenede değerlendirilir.</p>
        <span class="kart__ok">Teste geçin ${ik.ok}</span>
      </a>
    </div>
  </div>
</section>

<!-- ═════════ SSS v2 — filtreli ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="sss2">
      <div class="sss2__sol" data-reveal>
        <div class="bolum-bas" style="margin-bottom:0">
          <p class="etiket">Sık sorulanlar</p>
          <h2>Aklınıza takılabilecekler</h2>
          <p class="giris" style="margin-top:10px">Bir kategori seçerek listeyi daraltabilirsiniz. Burada yer almayan sorular için sık sorulan sorular sayfasına göz atın.</p>
        </div>
        <div class="sss2__filtre" data-sss-filtre role="group" aria-label="Soru kategorileri">
          <button type="button" data-kat="hepsi" aria-pressed="true">Tümü <span class="adet">8</span></button>
          <button type="button" data-kat="randevu" aria-pressed="false">Randevu ve süreç <span class="adet">3</span></button>
          <button type="button" data-kat="uygulama" aria-pressed="false">Uygulamalar <span class="adet">3</span></button>
          <button type="button" data-kat="kapsam" aria-pressed="false">Kapsam ve mevzuat <span class="adet">2</span></button>
        </div>
        <div class="dgm-sira">
          <a class="dgm dgm--iki dgm--kucuk" href="${r}sikca-sorulan-sorular/">Bütün sorular ${ik.ok}</a>
        </div>
      </div>
      <div class="sss2__liste" data-sss-liste data-reveal style="--d:120ms">
        <div class="sss">
          <details data-kat="randevu"><summary>İlk görüşmede hemen uygulama yapılır mı?</summary><div class="sss__cvp"><p>Şart değildir. İlk randevu, beklentinizin konuşulduğu ve muayenenin yapıldığı görüşmedir. Uygun bulunan bazı işlemler aynı gün yapılabilir; birçok durumda ise plan bir sonraki randevuya bırakılır ve kararı acele etmeden verirsiniz.</p></div></details>
          <details data-kat="randevu"><summary>Randevuya gelmeden önce neleri hazırlamalıyım?</summary><div class="sss__cvp"><p>Düzenli kullandığınız ilaç ve takviyelerin adlarını, daha önce bir ilaca ya da ürüne karşı yaşadığınız reaksiyonları ve geçmişte yaptırdığınız estetik uygulamaları not edin. Sitedeki hazırlık listesi bu bilgileri birkaç dakikada toparlamanızı kolaylaştırır; cevaplarınız cihazınızda kalır.</p></div></details>
          <details data-kat="randevu"><summary>WhatsApp’tan fotoğraf göndererek değerlendirme alabilir miyim?</summary><div class="sss__cvp"><p>Hayır. WhatsApp hattı yalnızca randevu düzenlemek için kullanılır; fotoğraf ya da mesaj üzerinden tıbbi değerlendirme yapılmaz, uygulama önerilmez. Işık, açı ve ekran farkları görüntüyü yanıltıcı kılar; karar ancak muayenede verilebilir.</p></div></details>
          <details data-kat="uygulama"><summary>Pico lazerle dövme silme kaç seans sürer?</summary><div class="sss__cvp"><p>Seans sayısı mürekkebin rengine, yoğunluğuna, derinliğine, dövmenin yaşına ve bulunduğu bölgeye göre değişir; bu yüzden baştan tek bir sayı verilmez. Seanslar arasında cildin toparlanması için genellikle birkaç haftalık ara bırakılır. Hedeflenen, dövme görünümünün seanslar ilerledikçe açılmasıdır; sonuçlar kişiden kişiye değişir.</p></div></details>
          <details data-kat="uygulama"><summary>Uygulamadan sonra ne zaman günlük hayatıma dönerim?</summary><div class="sss__cvp"><p>Bu, yapılan işleme bağlıdır. Bazı uygulamalardan sonra aynı gün işinize dönebilirsiniz; bazılarında birkaç gün süren kızarıklık, şişlik ya da morarma görülebilir. Her uygulama sayfasında iyileşme dönemi ayrı bir başlık altında anlatılır.</p></div></details>
          <details data-kat="uygulama"><summary>İşlemi kim uyguluyor?</summary><div class="sss__cvp"><p>Muayenehanedeki bütün medikal estetik uygulamalarını ${S.hekim.tam} kendisi yapar. Sizi muayene eden, planı kuran, işlemi uygulayan ve kontrolünüzü yapan hekim aynı kişidir.</p></div></details>
          <details data-kat="kapsam"><summary>Ücret bilgisi neden sitede yer almıyor?</summary><div class="sss__cvp"><p>Sağlık hizmetlerinin tanıtımını düzenleyen mevzuat, internet sitesinde ücret, indirim ya da kampanya duyurusu yapılmasına izin vermez. Ayrıca ücret, muayenede ortaya çıkan plana göre değişir; bu bilgi size muayene sırasında, kişisel olarak iletilir.</p></div></details>
          <details data-kat="kapsam"><summary>Muayenehanede yapılmayan işlemler var mı?</summary><div class="sss__cvp"><p>Var. Cerrahi girişimler, saç ekimi ve hekimin sertifikasının kapsamadığı işlemler burada uygulanmaz. Böyle bir talepte nedeni açıklanır ve ilgili uzmanlık dalına başvurmanız önerilir.</p></div></details>
        </div>
        <p class="sss2__bos">Bu kategoride henüz soru yok.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ İLETİŞİM + HARİTA ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="izgara izgara--2" style="gap:clamp(24px,4vw,48px)">
      <div data-reveal>
        <p class="etiket">İletişim</p>
        <h2>Bakırköy, Cevizlik Mahallesi</h2>
        <p class="giris" style="margin-bottom:26px">Randevu için telefonla arayabilir, aynı numaradan WhatsApp’a yazabilir ya da iletişim sayfasındaki formu doldurabilirsiniz.</p>
        <ul class="bilgi-liste">
          <li>${ik.pin}<div><b>Adres</b>${S.iletisim.adres}<br>${S.iletisim.ilce}</div></li>
          <li>${ik.tel}<div><b>Telefon</b><a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a></div></li>
          <li>${ik.wa}<div><b>WhatsApp</b><a href="https://wa.me/${S.iletisim.waHam}" rel="noopener">${S.iletisim.wa}</a></div></li>
          <li>${ik.saat}<div><b>Çalışma saatleri</b>${S.iletisim.saatler.map(([g, s]) => `${g}: ${s}`).join('<br>')}</div></li>
        </ul>
        <div class="dgm-sira" style="margin-top:26px">
          <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
          <a class="dgm dgm--iki" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(S.iletisim.adres + ' ' + S.iletisim.ilce)}" rel="noopener">Yol tarifi alın</a>
        </div>
      </div>
      <div data-reveal style="--d:120ms">
        <div class="harita">
          <iframe src="${HARITA_EMBED}" title="${S.marka} — Bakırköy muayenehane konumu" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
`;
  },
};
