const S = require('../../site');
const OZ = require('../../parcalar/uygulama-ozet');

/* grup adından çapa kimliği üretir: 'Saç Sağlığı' → 'sac-sagligi' */
const kimlik = t => t
  .replace(/İ/g, 'I').replace(/ı/g, 'i')
  .replace(/Ğ/g, 'G').replace(/ğ/g, 'g')
  .replace(/Ü/g, 'U').replace(/ü/g, 'u')
  .replace(/Ş/g, 'S').replace(/ş/g, 's')
  .replace(/Ö/g, 'O').replace(/ö/g, 'o')
  .replace(/Ç/g, 'C').replace(/ç/g, 'c')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

/* her grubun kendi başına okunabilen tanıtım paragrafı (anahtar = kimlik(grup)) */
const GRUP_NOT = {
  'enjeksiyonla-yapilanlar':
    'Bu gruptaki uygulamalarda ürün, ince iğne ya da kanülle belirli bir deri katmanına ve ölçülü miktarda bırakılır. Kullanılan ürünün adı, seri numarası, miktarı ve uygulandığı bölge dosyanıza yazılır. Hepsi girişimsel işlemlerdir; bu nedenle önce yazılı onamınız alınır. Gebelikte ve emzirirken bu uygulamalar bekletilir; kanamaya yatkınlığınız ve geçmişte yaşadığınız tepkiler ayrıca sorgulanır. Karın, bel ve bacak gibi vücut bölgelerindeki lipoliz ve selülit planları da bu grupta yer alır.',
  'cihaz-destekli-uygulamalar':
    'Bu gruptaki işlemlerde deriye lazer ışığı, radyofrekans, odaklanmış ultrason ya da elektroporasyon yoluyla enerji verilir. Etki cihazın ayarına ve cilt tipine bağlıdır; iki kişide aynı ayarla çalışıldığında bile yanıt farklı olabilir. Bu nedenle kalp pili taşıyıp taşımadığınız, sara nöbeti geçirip geçirmediğiniz, uygulama alanında metal bir parça bulunup bulunmadığı ve son haftalarda güneşlenip güneşlenmediğiniz ayrıca sorulur. Pikosaniye lazerle dövme silme de bu başlık altındadır.',
  'sac-sagligi':
    'Burada atılan ilk adım, dökülmenin neden kaynaklandığını bulmaktır. Düşük demir depoları, tiroid bezinin az ya da çok çalışması, doğumdan sonraki aylar veya kullanılan bir ilaç dökülmenin tek başına sebebi olabilir. Neden ortaya konmadan başlanan bir uygulama beklenen katkıyı sağlamaz; bu yüzden gerekli görülen kan tetkikleri sonuçlanmadan plan yapılmaz.',
  'degerlendirme-ve-takip':
    'Bu iki başlık bir işlem değil, her planın başı ve sonudur. Hekim muayenesinde genel sağlık durumunuz ve beklentiniz değerlendirilerek uygun olan ile olmayan ayrılır; uygulama sonrası takipte ise iyileşme izlenir, gerekiyorsa plan durdurulur ya da değiştirilir.',
};

module.exports = {
  slug: 'uygulamalar',
  js: 'kesif.js',
  tip: 'tibbi',
  baslik: 'Uygulamalar: Bakırköy muayenehanesinde planlanan işlemler',
  aciklama: 'Bakırköy muayenehanemizde yapılan medikal estetik uygulamaları: enjeksiyon, cihaz ve lazer, saç ve saçlı deri, değerlendirme ve takip başlıkları tek sayfada.',

  icerik: (r, ik) => `

<!-- ═════════ G · HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <span>Uygulamalar</span></nav>
      <p class="g-etiket">Uygulamalar · Tüm başlıklar</p>
      <h1>Muayeneden sonra <span class="g-isik">karar verilen</span> uygulamalar</h1>
      <p class="g-hero__alt">Bu sayfada muayenehanede gerçekten yapılan uygulamaların hepsini dört grup altında bulacaksınız. Her başlık, muayene, sağlık öyküsü ve gerekiyorsa tetkikler tamamlandıktan sonra planlanır. Listedeki hiçbir işlem herkes için uygun değildir; hangisinin size uyduğu görüşmenin sonunda belli olur.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu isteyin</a>
        <a class="dgm dgm--iki" href="#${kimlik(S.katalog[0].grup)}">Gruplara göz atın ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Tüm uygulamaları hekim yapar</span><span><i></i>Muayenesiz plan yapılmaz</span><span><i></i>Kontrol planın içinde</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/grup-cihaz.webp" width="1600" height="900" alt="Tepside duran bir lazer cihazı başlığının yakın plan görüntüsü" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- ═════════ G · VERİ BANDI ═════════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="${S.katalog.length}">0</em></b><span>Uygulama grubu</span></div>
  <div data-gr style="--d:60ms"><b><em data-gsay="${S.katalog.reduce((t, g) => t + g.ogeler.length, 0)}">0</em></b><span>Uygulama başlığı</span></div>
  <div data-gr style="--d:120ms"><b><em data-gsay="5">0</em></b><span>Adımlı ortak yol</span></div>
  <div data-gr style="--d:180ms"><b>Tek</b><span>Uygulayan hekim</span></div>
</div></div>

<!-- ═════════ KAPSAM ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Neyi kapsar</p>
      <h2>Listede hangi işlemler var, hangileri yok?</h2>
      <p class="giris">Bir hekimin hangi işlemleri yapabileceğini uzmanlık dalı ve Sağlık Bakanlığı onaylı sertifikaları belirler. Muayenehanede yapılan işlemlerin sınırını kişisel tercih değil, bu mevzuat çizer.</p>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b4" data-gr>
        <span class="g-ket">Liste nasıl hazırlandı</span>
        <p>Bu liste o sınıra göre hazırlandı: gördüğünüz her başlık ${S.hekim.tam} tarafından uygulanan bir işlemdir. Asıl ağırlık işlemleri sıralamaya değil, yakınmanın <b>nedenini ayırt etmeye</b> verilir. Birbirine benzeyen iki tablo farklı kaynaklardan gelebilir; doğru işlem ancak bu fark ortaya konunca seçilebilir. Görüşmelerin bir kısmı işlem yerine evde uygulanacak bir bakım önerisiyle biter.</p>
        <p>Bu nedenle sık sorulan bazı işlemler listede yer almaz. Cerrahi girişimler, saç ekimi, lazer epilasyon ve sertifika kapsamını aşan uygulamalar yapılmaz. Böyle bir isteğiniz olursa muayenede açıkça söylenir ve uygun uzmanlık dalı önerilir. Sınırın nereden geçtiğini <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">ayrı bir sayfada</a> madde madde açıkladık.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr style="--d:80ms"><span class="g-ket">Hekimin notu</span><p>“Gerekmeyen işlem plana yazılmaz.”</p></div>
      <div class="g-kutu g-b4" data-gr style="--d:140ms">
        <span class="g-ket">Her konu ayrı sayfada</span>
        <p>Her uygulamanın sayfasında ne olduğu ve ne olmadığı, kimlerde yapılmadığı, olası istenmeyen etkiler ve iyileşme süreci ayrıntılı olarak anlatılır.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr style="--d:200ms"><h3>İlk adım ne olmalı?</h3><p>Bir yakınmanız varsa işlemin adıyla değil, yakınmanın kendisiyle başlayın.</p><a class="dgm dgm--altin" href="${r}cilt-sorunlari/">Cilt sorunları</a></div>
    </div>
  </div>
</section>

${S.katalog.map((g, i) => `
<!-- ═════════ ${g.grup.toUpperCase()} ═════════ -->
<section class="bolum${i % 2 === 0 ? ' bolum--buz2' : ''}" id="${kimlik(g.grup)}">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">${g.kisa}</p>
      <h2>${g.grup}</h2>
      <p class="giris">${GRUP_NOT[kimlik(g.grup)]}</p>
    </div>
    <div class="izgara izgara--3">
      ${g.ogeler.map(([ad, s, not], j) => `<a class="kart" href="${r}uygulamalar/${s}/" data-gr style="--d:${(j % 3) * 70}ms">
        <span class="kart__ikon">${ik[g.ikon]}</span>
        <h3>${ad}</h3>
        <p>${not}</p>
        <span class="kart__ok">Sayfayı açın ${ik.ok}</span>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>
`).join('')}

<!-- ═════════ ORTAK SIRA ═════════ -->
<section class="bolum bolum--sicak" id="sira">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Ortak akış</p>
      <h2>Hangi uygulama olursa olsun aynı yoldan gidilir</h2>
      <p class="giris">Bu yol kısaltılmaz. İlk görüşmede işlem yapılması şart değildir; planların çoğunda görüşme bir gün, işlem başka bir gün yapılır.</p>
    </div>
    <div class="g-kutu" data-gr>
      <span class="g-ket">Beş durak</span>
      <ol class="g-protokol">
        <li><span><b style="color:var(--murekkep)">Muayene ve öykü.</b> Yakınmanın ne zamandan beri sürdüğü, kullanılan ilaç ve takviyeler, süregelen hastalıklar, gebelik ve emzirme durumu, ilaç ya da kozmetik ürünlere karşı daha önce yaşanan reaksiyonlar kaydedilir.</span></li>
        <li><span><b style="color:var(--murekkep)">Gerekirse tetkik.</b> Bir tetkik ancak sonucu planı etkileyecekse istenir; bu bazen bir kan tahlili, bazen cildin ya da saçlı derinin büyütmeyle incelenmesidir.</span></li>
        <li><span><b style="color:var(--murekkep)">Plan ve bilgilendirme.</b> Uygun adım, beklenen etki, olası istenmeyen durumlar, diğer seçenekler ve hiç işlem yapmama seçeneği birlikte konuşulur; ardından yazılı onam alınır.</span></li>
        <li><span><b style="color:var(--murekkep)">Uygulama.</b> Steril koşullarda yapılır; kullanılan ürünün adı, seri numarası, miktarı ve bölgesi dosyanıza işlenir.</span></li>
        <li><span><b style="color:var(--murekkep)">Takip.</b> İyileşme kontrol randevularıyla izlenir. Beklenmeyen bir durum olursa aynı hekim değerlendirir; gerekirse plan durdurulur ya da değiştirilir.</span></li>
      </ol>
    </div>
  </div>
</section>

<!-- ═════════ ÖNCE DEĞERLENDİRME ═════════ -->
<section class="bolum" id="once">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Önce ne gelir</p>
      <h2>Uygulamadan önce hangi soruyu cevaplıyoruz?</h2>
    </div>
    <div data-gr style="max-width:72ch">
      <p>Benzer görünen iki yakınmanın kaynağı farklı olabilir. Göz altındaki koyuluk pigment birikiminden de kaynaklanabilir, ince derinin altından görünen damarlardan da. Yaygın saç dökülmesinin ardında demir eksikliği ya da tiroid hastalığı bulunabilir. Karın ve bacaklardaki dalgalı görünüm yağlanmadan da, deri gevşekliğinden de gelebilir.</p>
      <p>Bu ayrım yapılmadan uygulanan bir işlem çoğu zaman beklenen katkıyı sağlamaz, bazen tabloyu ağırlaştırır. Bu yüzden <a href="${r}cilt-sorunlari/">yakınmadan yola çıkan sayfaları</a> uygulama sayfalarından önce okumanızı öneririz. Uygulamaların hangi bölgede ve hangi sırayla planlandığını ise <a href="${r}bolgeler/">bölge sayfaları</a> anlatır.</p>
      <p>İğne ya da cihazla yapılacak her işlemden önce sağlık öyküsüne bir kez daha dönülür. Lokal anestezik ilaçlara, antiseptiklere ya da uygulanacak ürünün içeriğine karşı daha önce bir reaksiyon yaşadıysanız bunu hekiminize söylemeniz gerekir; bu bilgi alınmadan işlem yapılmaz. Görüşmeye hazırlanırken <a href="${r}hazirlik-listesi/">hazırlık listesine</a> göz atmanız işinizi kolaylaştırır.</p>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <b>Başka bir yerde yapılan bir uygulamanın ardından sorun mu yaşıyorsunuz?</b>
      <p>Dolgudan haftalar ya da aylar sonra ortaya çıkan şişlik, sertlik ve kızarıklığın nasıl değerlendirildiğini <a href="${r}uygulamalar/dolgu-uygulamalari/">dolgu uygulamaları</a> sayfasının riskler bölümünde bulabilirsiniz. Bu değerlendirme için uygulamanın burada yapılmış olması şart değildir.</p>
    </div>
  </div>
</section>

<!-- ═════════ İLGİLİ ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Buradan devam edin</p>
      <h2>Buradan sonra okunabilecek sayfalar</h2>
    </div>
    <div class="izgara izgara--3">
      <a class="kart kart--duz" href="${r}cilt-sorunlari/" data-gr>
        <h3>Cilt sorunları</h3>
        <p>Yakınmadan yola çıkan sayfalar: nedenin ayırt edilmesi, işlem seçiminden önce gelir.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart kart--duz" href="${r}bolgeler/" data-gr style="--d:70ms">
        <h3>Bölgeler</h3>
        <p>Sekiz bölge için ayrı sayfalar: yüzden saçlı deriye, elden karın ve bacaklara.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart kart--duz" href="${r}yaklasimimiz/" data-gr style="--d:140ms">
        <h3>Randevudan kontrole</h3>
        <p>Önce değerlendirme, sonra uygulama ilkesinin günlük pratikteki karşılığı.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart kart--duz" href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/" data-gr>
        <h3>Bazı işlemleri neden üstlenmiyoruz</h3>
        <p>Listeye almadığımız işlemler ve bu sınırın mevzuattaki gerekçesi.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart kart--duz" href="${r}hekim/" data-gr style="--d:70ms">
        <h3>Hekim</h3>
        <p>Uygulamaları yapan hekim, uzmanlık alanı, sertifikası ve tek hekimli çalışma düzeni.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart kart--duz" href="${r}sikca-sorulan-sorular/" data-gr style="--d:140ms">
        <h3>Soru ve yanıtlar</h3>
        <p>Randevu, hazırlık ve kontrol süreciyle ilgili sık sorulanlar.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
    </div>
  </div>
</section>

<!-- ═════════ G · KAPANIŞ ═════════ -->
<!-- ═════════ YOLCULUK SİMÜLATÖRÜ ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Anlık akış</p>
      <h2>Bir uygulama baştan sona nasıl ilerler?</h2>
      <p class="giris">Listeden bir uygulama seçin; muayeneden kontrole uzanan dört aşama, o uygulamanın özet bilgileriyle ekranda sırayla açılsın. Gördüğünüz genel bir akıştır; her adım muayenede size göre uyarlanır.</p>
    </div>
    <div data-yolc>
      <div class="yolc-sec" data-gr>
        <select data-yolc-sec aria-label="Uygulama seçin">
          ${S.katalog.map(g => `<optgroup label="${g.grup}">` +
            g.ogeler.filter(([, sl]) => OZ[sl]).map(([ad, sl]) => `<option value="${sl}">${ad}</option>`).join('') +
            '</optgroup>').join('')}
        </select>
        <button type="button" class="dgm dgm--iki" data-yolc-oynat>▶ Akışı başlat</button>
        <a class="dgm dgm--iki" href="${r}uygulama-karsilastirma/">İki uygulamayı karşılaştırın ${ik.ok}</a>
      </div>
      <div class="yolc-sahne" data-gr>
        <div class="yolc-ciz" aria-hidden="true"><i></i></div>
        ${['Muayene', 'Plan', 'İşlem günü', 'Kontroller'].map((ad, i) =>
          `<div class="yolc-adim"><span class="yolc-no">${i + 1}</span><img src="${r}varliklar/gorsel/asama-${['muayene', 'plan', 'gun', 'takip'][i]}.webp" width="400" height="400" alt="" loading="lazy"><b>${ad}</b><p></p></div>`).join('')}
      </div>
    </div>
    <script type="application/json" data-yolc-veri>${JSON.stringify(
      Object.fromEntries(Object.entries(OZ).map(([sl, k]) => [sl, { yolculuk: k.yolculuk }])))}</script>
  </div>
</section>

<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Size uygun başlığı muayenede birlikte belirleyelim</h2>
    <p class="g-sonalt">Yakınmanız dinlenip değerlendirilmeden hiçbir uygulama önerilmez. ${S.iletisim.adres}, ${S.iletisim.ilce}.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
