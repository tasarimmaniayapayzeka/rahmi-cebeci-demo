/* ============================================================
   Etkileşimli bileşenlerin verisi — sayfada gizli HTML liste (28 Eyl 2026)
   Eskiden <script type="application/json" data-*-veri> idi: arama motoru görmüyor,
   Klasik Editör'de düzenlenemiyordu. Şimdi <div class="g-veri" data-*-kaynak> içinde
   düzenli öğeler var: sitede CSS ile gizli (g.css), editörde başlıklı kutu (wp-tema/editor.css),
   betikler (kesif.js, g.js) buradan okur. Resim <img>, bağlantı <a> → editörde tıklanıp değişir.
   ============================================================ */
const kacir = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const kacirA = s => kacir(s).replace(/"/g, '&quot;');

/* karşılaştırma masasının satırları (32-uygulama-karsilastirma.js) ile aynı sıra ve adlar */
const KAR_ALAN = [['hedef', 'Hedef'], ['his', 'Uygulama sırasında'], ['iyilesme', 'İyileşme'], ['etki', 'Etkinin ortaya çıkışı'], ['kalicilik', 'Kalıcılık']];
/* yolculuk simülatörünün adımları (anasayfa + uygulamalar hub) ile aynı sıra ve adlar */
const YOLC_ASAMA = [['muayene', 'Muayene'], ['plan', 'Plan'], ['gun', 'İşlem günü'], ['takip', 'Kontroller']];

/* bölge pusulası: [{ anahtar, ad, tarif, gorsel, yol }] */
function pus(ogeler) {
  return '<div class="g-veri" data-pus-kaynak>\n' + ogeler.map(o =>
    `      <div data-anahtar="${kacirA(o.anahtar)}"><img src="${kacirA(o.gorsel)}" alt="" loading="lazy"><b>${kacir(o.ad)}</b><p>${kacir(o.tarif)}</p><a href="${kacirA(o.yol)}">Bölge sayfası</a></div>`
  ).join('\n') + '\n    </div>';
}

/* karşılaştırma masası: uygulama-ozet (slug → { ad, hedef, his, iyilesme, etki, kalicilik, … }) */
function kar(OZ) {
  return '<div class="g-veri" data-kar-kaynak>\n' + Object.entries(OZ).map(([sl, k]) =>
    `  <div data-anahtar="${kacirA(sl)}"><b>${kacir(k.ad)}</b>` +
    KAR_ALAN.map(([alan, ad]) => `<p><small>${ad}</small> <span data-alan="${alan}">${kacir(k[alan])}</span></p>`).join('') + '</div>'
  ).join('\n') + '\n</div>';
}

/* yolculuk simülatörü: uygulama-ozet (slug → { ad, yolculuk: { muayene, plan, gun, takip } }) */
function yolc(OZ) {
  return '<div class="g-veri" data-yolc-kaynak>\n' + Object.entries(OZ).map(([sl, k]) =>
    `      <div data-anahtar="${kacirA(sl)}"><b>${kacir(k.ad)}</b>` +
    YOLC_ASAMA.map(([asama, ad]) => `<p><small>${ad}</small> <span data-asama="${asama}">${kacir((k.yolculuk || {})[asama])}</span></p>`).join('') + '</div>'
  ).join('\n') + '\n    </div>';
}

module.exports = { pus, kar, yolc, KAR_ALAN, YOLC_ASAMA };
