const S = require('../site');
const OZ = require('../parcalar/uygulama-ozet');

module.exports = {
  slug: 'uygulama-karsilastirma',
  tip: 'tibbi',
  js: 'kesif.js',
  baslik: 'Yan Yana Tablo — Seçtiğiniz İki Uygulama Karşı Karşıya',
  aciklama: 'İki uygulamayı hedef, uygulama sırasındaki his, iyileşme, etkinin ortaya çıkışı ve kalıcılık açısından yan yana görün; bilgiler uygulama sayfalarından alınır.',

  icerik: (r, ik) => `

<!-- ═════════ BELGE HERO ═════════ -->
<section class="g-bhero">
  <div class="sar">
    <p class="g-etiket">Yan yana tablo</p>
    <h1>İki uygulama, beş başlık, tek tablo</h1>
    <p class="g-bhero__alt">Bir şikâyetin karşılığı tek bir uygulama olmayabilir. Bu masada seçtiğiniz iki uygulamayı hedef, uygulama sırasındaki his, iyileşme süreci, etkinin ortaya çıkma zamanı ve kalıcılık başlıklarında karşılaştırabilirsiniz. Metinler, her uygulamanın kendi sayfasındaki bilgilerden derlenmiştir.</p>
    <div class="g-bmeta">
      <span><i></i>Son güncelleme: ${S.guncelleme}</span>
      <span><i></i>Genel bilgilendirme</span>
      <span><i></i>Uygunluk muayenede belirlenir</span>
    </div>
  </div>
</section>

<section class="bolum">
  <div class="sar">
    <div data-kar>
      <div class="kar-sec" data-gr>
        <select data-kar-a aria-label="Birinci uygulama">
          ${S.katalog.map(g => `<optgroup label="${g.grup}">` +
            g.ogeler.filter(([, sl]) => OZ[sl]).map(([ad, sl]) =>
              `<option value="${sl}"${sl === 'botulinum-toksin' ? ' selected' : ''}>${ad}</option>`).join('') +
            '</optgroup>').join('')}
        </select>
        <span class="kar-vs">karşı</span>
        <select data-kar-b aria-label="İkinci uygulama">
          ${S.katalog.map(g => `<optgroup label="${g.grup}">` +
            g.ogeler.filter(([, sl]) => OZ[sl]).map(([ad, sl]) =>
              `<option value="${sl}"${sl === 'dolgu-uygulamalari' ? ' selected' : ''}>${ad}</option>`).join('') +
            '</optgroup>').join('')}
        </select>
      </div>
      <div class="kar-tablo">
        <div class="kar-satir" data-gorunur>
          <b>Uygulama</b><p class="kar-ad"></p><p class="kar-ad"></p>
        </div>
        ${[['hedef', 'Hedef'], ['his', 'Uygulama sırasında'], ['iyilesme', 'İyileşme'], ['etki', 'Etkinin ortaya çıkışı'], ['kalicilik', 'Kalıcılık']].map(([alan, ad]) =>
          `<div class="kar-satir" data-kar-alan="${alan}"><b>${ad}</b><p></p><p></p></div>`).join('')}
      </div>
    </div>
    <div class="kutu kutu--bilgi" style="margin-top:24px" data-gr>
      <b>Tablonun sınırı</b>
      <p>Hangi uygulamanın size uygun olduğunu bu tablo belirleyemez; bu seçim, şikâyetinizin kaynağı muayenede anlaşıldıktan sonra yapılır. Yan yana gördüğünüz iki uygulama her zaman birbirinin seçeneği değildir, bazen bambaşka sorunlara yöneliktir. Süre ve his tarifleri genel niteliktedir ve kişiye göre değişir.</p>
    </div>
    <div class="dgm-sira" style="margin-top:20px" data-gr>
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}uygulamalar/">Bütün uygulamalar ${ik.ok}</a>
    </div>
  </div>
</section>

<script type="application/json" data-kar-veri>${JSON.stringify(
    Object.fromEntries(Object.entries(OZ).map(([sl, k]) => [sl, {
      ad: k.ad, hedef: k.hedef, his: k.his, iyilesme: k.iyilesme, etki: k.etki, kalicilik: k.kalicilik,
    }])))}</script>
`,
};
