const S = require('../site');

module.exports = {
  slug: 'cilt-tipi-testi',
  tip: 'tibbi',
  js: 'cilt-tipi.js',
  baslik: 'Cilt Eğilimi Öz Değerlendirmesi — Nem, Duyarlılık ve Leke Eğilimi',
  aciklama: 'On iki soruda yağlanma ya da kuruluk, hassasiyet ve leke bırakma eğiliminizi tarif etmenize yardım eden test. Yanıtlar cihazınızda kalır, gönderilmez.',

  icerik: (r, ik) => `

<section class="bolum bolum--sik">
  <div class="sar">
    <nav class="kirinti" aria-label="Konum">
      <a href="${r}">Ana sayfa</a><span aria-hidden="true">›</span>
      <span>Cilt eğilimi öz değerlendirmesi</span>
    </nav>
  </div>
</section>

<section class="bolum" style="padding-top:0">
  <div class="sar">
    <div class="arac" data-cilt-tipi>

      <p class="etiket">Öz gözlem aracı</p>
      <h1>Cilt Eğilimi Öz Değerlendirmesi</h1>
      <p class="giris" style="margin:12px 0 24px">On iki kısa soru, cildinizin üç konudaki <em>eğilimini</em> tarif etmenize yardım eder: yağ ile nem arasındaki denge, çevreye karşı hassasiyet ve iz ya da leke bırakma. Bir tanı aracı değildir; cilt tipinizi belirlemek için cildin muayenede, yakından incelenmesi gerekir. Amacı, randevuya gelmeden önce cildinizi kendi gözlemlerinizle anlatmayı kolaylaştırmaktır.</p>

      <div class="kutu kutu--bilgi" style="margin-bottom:22px">
        <b>Yanıtlarınız nerede kalır?</b>
        <p>Verdiğiniz yanıtlar yalnızca bu sayfada, cihazınızın geçici belleğinde işlenir; bir sunucuya gitmez, kaydedilmez, çerez olarak yazılmaz ve sekme kapandığında silinir. Sonuç metinleri hekim tarafından önceden yazılmış sabit ifadeler arasından <strong>seçilir</strong>; yapay zekâ tarafından üretilmez.</p>
      </div>

      <div data-ct-govde>
        <div class="kutu" style="text-align:center;padding:34px 22px">
          <p style="margin-bottom:18px">Test ortalama iki dakikanızı alır. Hazır olduğunuzda başlayabilirsiniz.</p>
          <button type="button" class="dgm dgm--bir" data-ct-basla>Teste başlayın</button>
        </div>
      </div>

      <div class="kutu kutu--bilgi" style="margin-top:30px">
        <b>Test size ne anlatır, ne anlatmaz?</b>
        <p><strong>Anlattıkları:</strong> günlük hayatta cildinizde fark ettiklerinize göre; yağlanma ya da kuruluk, güneşe, rüzgâra ve ürünlere tepki, sivilce ya da güneş sonrası kalan izler konusunda genel bir tablo.</p>
        <p><strong>Anlatmadıkları:</strong> bir hastalığın varlığı ya da yokluğu, son sözü söylenmiş bir cilt tipi, önerilecek bir ürün ya da işlem. Sonuçlar kişiden kişiye değişir; asıl değerlendirme muayenede yapılır.</p>
      </div>

    </div>
  </div>
</section>
`,
};
