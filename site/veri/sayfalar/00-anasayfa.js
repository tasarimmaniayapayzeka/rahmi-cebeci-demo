const S = require('../site');
const BS = require('../parcalar/bolge-serit');
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
        <p>${g.ogeler.length > 4 ? g.ogeler.slice(0, 4).map(o => o[0]).join(', ') + ' ve diğerleri' : g.ogeler.slice(0, -1).map(o => o[0]).join(', ') + ' ve ' + g.ogeler[g.ogeler.length - 1][0]}</p>
        <span class="kart__ok">${g.ogeler.length} ayrı sayfa ${ik.ok}</span>
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
    <div class="katman" data-katman>
      <p class="katman__etiket">Her cihaz kendi derinliğinde çalışır</p>
      <div class="katman__sahne" data-egim>
      <svg viewBox="0 0 480 440" role="img" aria-label="Deri kesiti: pikosaniye lazer üst deriye, altın iğne radyofrekans orta deriye, HIFU derin destek katmanına etki eder">
        <defs>
          <clipPath id="kDeri"><path d="M20 100 C80 88 140 110 200 98 S320 88 380 100 S440 104 460 96 V398 Q460 420 438 420 H42 Q20 420 20 398 Z"/></clipPath>
          <linearGradient id="kPico" gradientUnits="userSpaceOnUse" x1="0" y1="58" x2="0" y2="122"><stop offset="0" stop-color="#E6CF8E"/><stop offset="1" stop-color="#B4452F"/></linearGradient>
          <linearGradient id="kRf" gradientUnits="userSpaceOnUse" x1="0" y1="56" x2="0" y2="208"><stop offset="0" stop-color="#E6CF8E"/><stop offset="1" stop-color="#C9822E"/></linearGradient>
          <linearGradient id="kHifu" gradientUnits="userSpaceOnUse" x1="0" y1="62" x2="0" y2="302"><stop offset="0" stop-color="#E6CF8E"/><stop offset="1" stop-color="#85641C"/></linearGradient>
          <radialGradient id="kParilti"><stop offset="0" stop-color="#FFF4D6" stop-opacity=".9"/><stop offset="1" stop-color="#FFF4D6" stop-opacity="0"/></radialGradient>
        </defs>
        <g clip-path="url(#kDeri)">
          <rect x="20" y="80" width="440" height="60" fill="#F5E1CE"/>
          <rect x="20" y="140" width="440" height="130" fill="#EDCFB5"/>
          <rect x="20" y="270" width="440" height="150" fill="#F4E7CF"/>
          <g class="lif" fill="none" stroke="#D6A987" stroke-width="1.4" opacity=".6">
            <path d="M0 170 C90 160 150 182 230 170 S380 160 480 172" style="--g:0s"/>
            <path d="M0 196 C100 186 170 206 250 194 S400 186 480 198" style="--g:-1.5s"/>
            <path d="M0 222 C80 214 160 232 240 220 S390 212 480 224" style="--g:-3s"/>
            <path d="M0 246 C110 238 180 256 260 244 S400 238 480 250" style="--g:-4.5s"/>
          </g>
          <g class="yag" fill="#F9EFDD" stroke="#E6D2AE" stroke-width="1.2"><circle cx="60" cy="300" r="18" style="--g:0s"/><circle cx="102" cy="332" r="22" style="--g:0.7s"/><circle cx="152" cy="304" r="15" style="--g:1.4s"/><circle cx="192" cy="346" r="20" style="--g:2.0999999999999996s"/><circle cx="242" cy="312" r="17" style="--g:2.8s"/><circle cx="292" cy="350" r="22" style="--g:0s"/><circle cx="322" cy="392" r="17" style="--g:0.7s"/><circle cx="410" cy="330" r="20" style="--g:1.4s"/><circle cx="66" cy="372" r="20" style="--g:2.0999999999999996s"/><circle cx="140" cy="386" r="18" style="--g:2.8s"/><circle cx="232" cy="392" r="20" style="--g:0s"/><circle cx="418" cy="392" r="16" style="--g:0.7s"/><circle cx="404" cy="296" r="13" style="--g:1.4s"/><circle cx="270" cy="300" r="12" style="--g:2.0999999999999996s"/></g>
          <path d="M20 140 C90 134 150 146 240 139 S390 133 460 141" fill="none" stroke="#DDB99A" stroke-width="1.2"/>
          <path d="M20 270 C100 262 170 280 250 268 S400 262 460 272" fill="none" stroke="#C9A27A" stroke-width="2.2" opacity=".75"/>
          <ellipse class="tarama" cx="240" cy="200" rx="60" ry="170" fill="url(#kParilti)"/>
        </g>
        <path d="M20 100 C80 88 140 110 200 98 S320 88 380 100 S440 104 460 96" fill="none" stroke="#C99E7E" stroke-width="1.6"/>
        <g class="katman__ad" font-size="11" fill="#6C675E" letter-spacing=".08em">
          <text x="444" y="130" text-anchor="end">ÜST DERİ</text>
          <text x="444" y="260" text-anchor="end">ORTA DERİ</text>
          <text x="444" y="408" text-anchor="end">DERİN DESTEK KATMANI</text>
        </g>
        <g data-katman-g="pico">
          <g fill="#3E2A1C"><circle class="pig" cx="110" cy="117" r="3.2" style="--dx:-14px;--dy:3px;--g:0s"/><circle class="pig" cx="118" cy="124" r="2.6" style="--dx:-5px;--dy:12px;--g:0.12s"/><circle class="pig" cx="127" cy="116" r="3" style="--dx:13px;--dy:-3px;--g:0.24s"/><circle class="pig" cx="131" cy="125" r="2.4" style="--dx:15px;--dy:9px;--g:0.36s"/><circle class="pig" cx="114" cy="129" r="2.2" style="--dx:-10px;--dy:13px;--g:0s"/><circle class="pig" cx="123" cy="111" r="2.2" style="--dx:5px;--dy:-11px;--g:0.12s"/><circle class="pig" cx="104" cy="126" r="2" style="--dx:-17px;--dy:10px;--g:0.24s"/><circle class="pig" cx="136" cy="119" r="1.8" style="--dx:18px;--dy:1px;--g:0.36s"/></g>
          <g class="kay">
            <g class="bas"><rect x="108" y="20" width="24" height="36" rx="7" fill="#1C1B18"/><rect x="113" y="50" width="14" height="6" rx="2" fill="#D9B75A"/></g>
            <line class="isin" x1="120" y1="58" x2="120" y2="120" stroke="url(#kPico)" stroke-width="3" style="--u:64"/>
            <line class="akis" x1="120" y1="58" x2="120" y2="120" stroke="#FFF1D0" stroke-width="3"/>
            <circle class="odak" cx="120" cy="120" r="10" fill="none" stroke="#B4452F" stroke-width="2"/>
          </g>
        </g>
        <g data-katman-g="rf">
          <g class="kay">
            <g class="bas"><rect x="220" y="24" width="40" height="30" rx="6" fill="#1C1B18"/><rect x="224" y="50" width="32" height="5" rx="2" fill="#D9B75A"/></g>
            <g stroke="url(#kRf)" stroke-width="2"><line class="isin" x1="228" y1="56" x2="228" y2="206" style="--u:152"/><line class="isin" x1="234" y1="56" x2="234" y2="206" style="--u:152"/><line class="isin" x1="240" y1="56" x2="240" y2="206" style="--u:152"/><line class="isin" x1="246" y1="56" x2="246" y2="206" style="--u:152"/><line class="isin" x1="252" y1="56" x2="252" y2="206" style="--u:152"/></g>
            <g stroke="#FFF1D0" stroke-width="2"><line class="akis" x1="228" y1="56" x2="228" y2="206" style="--g:0s"/><line class="akis" x1="240" y1="56" x2="240" y2="206" style="--g:0.2s"/><line class="akis" x1="252" y1="56" x2="252" y2="206" style="--g:0.4s"/></g>
            <g fill="rgba(217,150,70,.55)"><ellipse class="odak" cx="228" cy="206" rx="7" ry="5" style="--g:0s"/><ellipse class="odak" cx="240" cy="206" rx="7" ry="5" style="--g:0.25s"/><ellipse class="odak" cx="252" cy="206" rx="7" ry="5" style="--g:0.5s"/></g>
          </g>
        </g>
        <g data-katman-g="hifu">
          <g class="kay">
            <g class="bas"><path d="M332 28h56a6 6 0 0 1 6 6v12a14 14 0 0 1-14 14h-40a14 14 0 0 1-14-14v-12a6 6 0 0 1 6-6z" fill="#1C1B18"/><rect x="340" y="56" width="40" height="4" rx="2" fill="#D9B75A"/></g>
            <g stroke="url(#kHifu)" stroke-width="2">
              <line class="isin" x1="338" y1="62" x2="360" y2="300" style="--u:242"/>
              <line class="isin" x1="360" y1="62" x2="360" y2="300" style="--u:240"/>
              <line class="isin" x1="382" y1="62" x2="360" y2="300" style="--u:242"/>
            </g>
            <g stroke="#FFF1D0" stroke-width="2">
              <line class="akis" x1="338" y1="62" x2="360" y2="300"/>
              <line class="akis" x1="360" y1="62" x2="360" y2="300" style="--g:.3s"/>
              <line class="akis" x1="382" y1="62" x2="360" y2="300" style="--g:.15s"/>
            </g>
            <ellipse class="odak" cx="360" cy="300" rx="13" ry="7" fill="none" stroke="#85641C" stroke-width="2"/>
            <ellipse class="odak" cx="360" cy="300" rx="13" ry="7" fill="none" stroke="#85641C" stroke-width="1.5" style="--g:.85s"/>
            <ellipse cx="360" cy="300" rx="4" ry="2.6" fill="#85641C"/>
          </g>
        </g>
        <g class="toz" fill="#D9B75A"><circle cx="40" cy="380" r="1.2" style="--g:0s;--s:6s"/><circle cx="137" cy="327" r="1.7999999999999998" style="--g:0.61s;--s:7s"/><circle cx="234" cy="274" r="2.4" style="--g:1.22s;--s:8s"/><circle cx="331" cy="221" r="1.2" style="--g:1.83s;--s:9s"/><circle cx="428" cy="168" r="1.7999999999999998" style="--g:2.44s;--s:6s"/><circle cx="125" cy="375" r="2.4" style="--g:3.05s;--s:7s"/><circle cx="222" cy="322" r="1.2" style="--g:3.66s;--s:8s"/><circle cx="319" cy="269" r="1.7999999999999998" style="--g:4.27s;--s:9s"/><circle cx="416" cy="216" r="2.4" style="--g:4.88s;--s:6s"/><circle cx="113" cy="163" r="1.2" style="--g:5.49s;--s:7s"/><circle cx="210" cy="370" r="1.7999999999999998" style="--g:0.09999999999999964s;--s:8s"/><circle cx="307" cy="317" r="2.4" style="--g:0.71s;--s:9s"/><circle cx="404" cy="264" r="1.2" style="--g:1.3200000000000003s;--s:6s"/><circle cx="101" cy="211" r="1.7999999999999998" style="--g:1.9299999999999997s;--s:7s"/><circle cx="198" cy="158" r="2.4" style="--g:2.539999999999999s;--s:8s"/><circle cx="295" cy="365" r="1.2" style="--g:3.1500000000000004s;--s:9s"/></g>
      </svg>
      </div>
      <div class="katman__secim">
        <button type="button" data-katman-sec="pico" aria-pressed="true" data-not="Atım, saniyenin trilyonda biri ölçeğinde sürer. Deri içindeki mürekkep ya da pigment ufalanır; vücut bu parçacıkları sonraki haftalarda kendi yoluyla uzaklaştırır."><b>Pikosaniye lazer</b><span>Üst deri · pigment, mürekkep</span></button>
        <button type="button" data-katman-sec="rf" aria-pressed="false" data-not="Çok ince iğneler orta deriye iner ve ısıyı yalnız uçlarından verir. Hedef, kolajen ağının yenilenmesini uyarmaktır; deri yüzeyi büyük ölçüde korunur."><b>Altın iğne RF</b><span>Orta deri · kolajen ağı</span></button>
        <button type="button" data-katman-sec="hifu" aria-pressed="false" data-not="Ultrason dalgaları deriyi geçip derindeki taşıyıcı katmanda tek bir noktada toplanır. Kesi yapılmaz; sıkılaşma hedefi haftalar içinde değerlendirilir."><b>HIFU</b><span>Derin destek katmanı</span></button>
      </div>
      <p class="katman__not" data-katman-not aria-live="polite">Atım, saniyenin trilyonda biri ölçeğinde sürer. Deri içindeki mürekkep ya da pigment ufalanır; vücut bu parçacıkları sonraki haftalarda kendi yoluyla uzaklaştırır.</p>
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
        <h4>Muayene ve sağlık geçmişi</h4>
        <p>Ne istediğiniz, cildinizin özellikleri, yüz yapınız ve kullandığınız ilaçlar birlikte ele alınır.</p>
      </div>
      <div class="akis__adim" data-reveal style="--d:120ms">
        <span class="akis__nokta">${ik.liste}</span>
        <h4>Planın yazılması</h4>
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
        <h4>Kontrol görüşmesi</h4>
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
        <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
        ${['Muayene', 'Plan', 'İşlem günü', 'Kontroller'].map((ad, i) =>
          `<div class="yolc-adim"><span class="yolc-no">${i + 1}</span><img src="${r}varliklar/gorsel/asama-${['muayene', 'plan', 'gun', 'takip'][i]}.webp" width="400" height="400" alt="" loading="lazy"><b>${ad}</b><p></p></div>`).join('')}
      </div>
    </div>
    <script type="application/json" data-yolc-veri>${JSON.stringify(
      Object.fromEntries(Object.entries(OZ).map(([sl, k]) => [sl, { yolculuk: k.yolculuk }])))}</script>
  </div>
</section>

<!-- ═════════ BÖLGE ŞERİDİ ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-reveal>
      <p class="etiket">Bölge dizini</p>
      <h2>Sekiz bölge, sekiz ayrı plan</h2>
      <p class="giris">Deri kalınlığı, damar ağı ve kas hareketi bölgeden bölgeye değişir; dudakta uygun olan miktar göz çevresine taşınmaz. Bir şeride dokunun ya da imleci üzerine getirin: o bölgenin nasıl ele alındığı ve hangi uygulamaların konuşulduğu açılır.</p>
    </div>
    <div data-reveal>${BS.seritUret(r)}</div>
  </div>
</section>

<!-- ═════════ UYGULAMA GRUPLARI ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-reveal>
      <p class="etiket">Uygulama dizini</p>
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
        <p class="etiket">Randevudan kontrole</p>
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
        <p class="etiket">Hekimi tanıyın</p>
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
      <p class="etiket">Hazırlanırken</p>
      <h2>Randevudan önce birkaç dakika ayırın</h2>
      <p class="giris">Hazırlık listesi ve cilt eğilimi testi tarayıcınızın içinde çalışır. Verdiğiniz cevaplar bize ulaşmaz, bir sunucuya yazılmaz ve sayfayı kapattığınızda silinir.</p>
    </div>
    <div class="izgara izgara--2">
      <a class="kart" data-egim href="${r}hazirlik-listesi/arac/" data-reveal style="--d:0ms">
        <span class="kart__ikon">${ik.liste}</span>
        <span class="rozet">12 madde, yaklaşık 2 dakika</span>
        <h3 style="margin-top:8px">Görüşmeye hazırlık notları</h3>
        <p>Muayenede söylemeniz gereken ilaç, sağlık öyküsü ve önceki uygulama bilgilerini toparlamanıza yardım eder. Tanı koymaz, tarama yapmaz, işlem önermez ve uygunluk kararı vermez.</p>
        <span class="kart__ok">Listeyi açın ${ik.ok}</span>
      </a>
      <a class="kart" data-egim href="${r}cilt-tipi-testi/" data-reveal style="--d:120ms">
        <span class="kart__ikon">${ik.mercek}</span>
        <span class="rozet">Cihazınızda çalışır</span>
        <h3 style="margin-top:8px">Cilt eğilimi öz değerlendirmesi</h3>
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
          <p class="etiket">Akla takılanlar</p>
          <h2>Aklınıza takılabilecekler</h2>
          <p class="giris" style="margin-top:10px">Bir kategori seçerek listeyi daraltabilirsiniz. Burada yer almayan sorular için Soru ve yanıtlar sayfasına göz atın.</p>
        </div>
        <div class="sss2__filtre" data-sss-filtre role="group" aria-label="Soru kategorileri">
          <button type="button" data-kat="hepsi" aria-pressed="true">Hepsi <span class="adet">8</span></button>
          <button type="button" data-kat="randevu" aria-pressed="false">Randevu ve işleyiş <span class="adet">3</span></button>
          <button type="button" data-kat="uygulama" aria-pressed="false">Uygulama soruları <span class="adet">3</span></button>
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
        <p class="etiket">Ulaşım ve iletişim</p>
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
          <a class="dgm dgm--iki" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(S.iletisim.adres + ' ' + S.iletisim.ilce)}" rel="noopener">Haritada rota açın</a>
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
