/* İlgili sayfalardan etkileşimli araçlara çağrı bandı (5 Eki 2026). Sayfa içeriğinde düz bağlantı olarak durur;
   Klasik Editör'de metni ve adresi değiştirilebilir. Görünüm: g.css .arac-cagri */
const ARAC = {
  dovme: { yol: 'dovme-silme-yol-haritasi/', baslik: 'Dövmeniz kaç seans sürebilir?', metin: 'Sekiz soruda tahmini seans aralığınızı, seanslar arasındaki bekleme süresini ve dikkat edilecekleri görün. Fotoğraf istemez.', dugme: 'Yol haritasını açın' },
  gunes: { yol: 'gunes-aliskanligi-testi/', baslik: 'Lekeyi hangi alışkanlıklar besliyor?', metin: 'Güneş koruyucu, öğle güneşi, solaryum ve cam arkasında geçen saatler: sekiz soruda öne çıkan alışkanlıklarınızı görün.', dugme: 'Güneş testini açın' },
  rehber: { yol: 'estetik-uygulama-rehberi/', baslik: 'Nereden başlayacağınızı bilmiyor musunuz?', metin: 'Şikâyetinizi seçin; muayenede konuşabileceğiniz başlıkları ve söylemeniz gerekenleri tek ekranda görün.', dugme: 'Rehberi açın' },
};

const GIZLI = require('../site.js').gizliSayfalar || [];

module.exports = (r, tur) => {
  const a = ARAC[tur];
  if (GIZLI.includes(a.yol.replace(/\/$/, ''))) return '';   /* araç yayında değilse bant da yok */
  return `<section class="bolum bolum--sik"><div class="sar">
  <a class="arac-cagri" href="${r}${a.yol}" data-gr><span class="arac-cagri__etiket">Araç</span><b>${a.baslik}</b><span class="arac-cagri__metin">${a.metin}</span><span class="arac-cagri__ok">${a.dugme} →</span></a>
</div></section>
`;
};
