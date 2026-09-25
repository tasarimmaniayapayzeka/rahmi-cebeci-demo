const S = require('../site');

/* bölge → kanonik görsel */
const PUS_GORSEL = {
  'yuz': 'bolge-yuz', 'goz-cevresi': 'ic3d-goz', 'dudak': 'ic3d-dudak',
  'cene-ve-jawline': 'bolge-cene-ve-jawline', 'boyun-ve-dekolte': 'bolge-boyun',
  'el': 'bolge-el', 'sacli-deri': 'bolge-sacli-deri', 'vucut': 'bolge-vucut',
};

const NOT = {
  'yuz': 'Alın, orta yüz ve çene hattı birbirini etkiler. Bir noktaya eklenen destek komşu alanın görünümünü de değiştirdiği için yüz, parçalara ayrılarak değil bütün olarak planlanır.',
  'goz-cevresi': 'Derinin en ince, hata payının en dar olduğu bölge. Göz altı, kaz ayağı ve kaş çevresinde uygulama kararı, yüzün geri kalanına göre çok daha temkinli verilir.',
  'dudak': 'Dolgunluk, kenar belirginliği ve nem birbirinden ayrı konulardır. Dudakla ilgili isteklerin bir bölümü, daha fazla hacimle değil başka yollarla karşılanır.',
  'cene-ve-jawline': 'Çene hattının netliği; kemik desteği, yağ dokusu, derinin gerginliği ve çiğneme kasının birlikte ortaya çıkardığı bir sonuçtur. Planın yönünü hangisinin öne çıktığı belirler.',
  'boyun-ve-dekolte': 'Buradaki deri yüzdekinden incedir, altında yastık görevi gören yağ azdır ve boyun gün boyu hareket eder. Yüz için seçilen miktar ve derinlik bu bölgeye olduğu gibi taşınmaz.',
  'el': 'El sırtında dolgunluk azaldıkça damarlar ve tendonlar belirginleşir. Aynı deri yıllar boyunca güneşe de maruz kaldığı için hacim ve leke birlikte ele alınır.',
  'sacli-deri': 'Saçlı deride ilk adım bir işlem değil, dökülmenin arkasındaki nedeni anlamaktır. Demir düzeyi, tiroid ve kullanılan ilaçlar ilk sorulanlar arasındadır.',
  'vucut': 'Karın, bel, kol ve bacak gibi geniş alanlarda bölgesel lipoliz, selülit görünümüne yönelik protokoller ve dövme silme konuşulur. Alan büyüdükçe seans planı uzar; beklenti en baştan açıkça tanımlanır.',
};

module.exports = {
  slug: 'bolge-pusulasi',
  tip: 'tibbi',
  js: 'kesif.js',
  baslik: 'Bölge Pusulası — Yüzden Vücuda Sekiz Bölge Tek Ekranda',
  aciklama: 'Yüz, göz çevresi, dudak, çene, boyun, el, saçlı deri ve vücut: her bölgenin kendine özgü yanlarını tek ekranda görün, ayrıntı için sayfasına geçin.',

  icerik: (r, ik) => `

<!-- ═════════ BELGE HERO ═════════ -->
<section class="g-bhero">
  <div class="sar">
    <p class="g-etiket">Etkileşimli araç</p>
    <h1>Bölge Pusulası</h1>
    <p class="g-bhero__alt">Bir uygulamanın miktarı, derinliği ve tekrar sıklığı bölgeden bölgeye değişir. Bu araçla yüzden vücuda sekiz bölgeyi tek ekranda dolaşabilirsiniz: listeden bir bölge seçtiğinizde görseli ve o bölgeye özgü kısa bir not açılır. Daha fazlası her bölgenin kendi sayfasında.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>${S.bolgeler.length} bölge</span>
      <span><i></i>Tanı aracı değildir</span>
    </div>
  </div>
</section>

<section class="bolum">
  <div class="sar">
    <div class="pus" data-pus>
      <div class="pus-merkez" data-gr>
        <img src="${r}varliklar/gorsel/bolge-yuz.webp" width="1400" height="788" alt="Yüz bölgesini temsil eden görsel" loading="eager">
        <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
        <div class="pus-kart"><b></b><p></p><a class="dgm dgm--bir dgm--kucuk" href="#">Bölge sayfasını açın</a></div>
      </div>
      <div class="pus-liste" data-gr>
        ${S.bolgeler.map(([ad, sl]) => `<button type="button" class="pus-oge" data-pus-oge="${sl}"><i></i>${ad}</button>`).join('')}
      </div>
    </div>
    <script type="application/json" data-pus-veri>${JSON.stringify(
      Object.fromEntries(S.bolgeler.map(([ad, sl]) => [sl, {
        ad, tarif: NOT[sl] || '',
        gorsel: r + 'varliklar/gorsel/' + (PUS_GORSEL[sl] || 'bolge-yuz') + '.webp',
        yol: r + 'bolgeler/' + sl + '/',
      }])))}</script>

    <div class="kutu kutu--bilgi" style="margin-top:26px" data-gr>
      <b>Pusula yön gösterir, karar vermez</b>
      <p>Bir bölgede sizin için hangi uygulamanın doğru olduğunu belirlemek bu aracın işi değildir. Notlar genel bir çerçeve çizer; sizin yüzünüz ya da vücudunuz için geçerli olanı ancak muayene ortaya koyar.</p>
    </div>

    <div class="dgm-sira" style="margin-top:20px" data-gr>
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}bolgeler/">Bütün bölge sayfaları ${ik.ok}</a>
      <a class="dgm dgm--iki" href="${r}uygulama-karsilastirma/">Uygulama karşılaştırma ${ik.ok}</a>
    </div>
  </div>
</section>
`,
};
