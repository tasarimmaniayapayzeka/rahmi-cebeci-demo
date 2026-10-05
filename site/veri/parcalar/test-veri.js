/* ============================================================
   Etkileşimli araçların (dövme silme yol haritası, muayene rehberi, güneş
   alışkanlığı testi) verisi — sayfada gizli HTML liste (5 Eki 2026).
   veri-liste.js ile aynı ilke: sitede CSS ile gizli (.g-veri), Klasik Editör'de
   başlıklı kutu (wp-tema/editor.css), betik (varliklar/js/arac.js) buradan okur.
   Soru, seçenek, sonuç ve not metinleri panelden değiştirilir; kod değişmez.

   Soru:  <div data-soru="anahtar" data-tur="tek|cok"><b>Soru</b><p>İpucu</p><ul><li data-deger="…">Seçenek</li></ul></div>
   Metin: <div data-metin="anahtar"><b>Başlık</b><p>Metin</p>[<p data-oneri>Öneri</p>]</div>
   Konu:  <div data-konu="anahtar"><b><a href="…">Konu sayfası</a></b><ul><li data-ignesiz="evet|hayir"><a href="…">Uygulama</a> <span>Bir cümle</span></li></ul></div>
   Ayar:  <div data-ayar="anahtar">değer</div>
   ============================================================ */
const kacir = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const kacirA = s => kacir(s).replace(/"/g, '&quot;');

function soru(q) {
  return `  <div data-soru="${kacirA(q.anahtar)}" data-tur="${q.tur || 'tek'}"><b>${kacir(q.soru)}</b>` +
    (q.ipucu ? `<p>${kacir(q.ipucu)}</p>` : '') +
    '<ul>' + q.secenekler.map(s => `<li data-deger="${kacirA(s.deger)}">${kacir(s.metin)}</li>`).join('') + '</ul></div>';
}

function metin(m) {
  return `  <div data-metin="${kacirA(m.anahtar)}"><b>${kacir(m.baslik)}</b><p>${kacir(m.metin)}</p>` +
    (m.oneri ? `<p data-oneri>${kacir(m.oneri)}</p>` : '') + '</div>';
}

function konu(k) {
  return `  <div data-konu="${kacirA(k.anahtar)}"><b><a href="${kacirA(k.yol)}">${kacir(k.ad)}</a></b><ul>` +
    k.uygulamalar.map(u => `<li data-ignesiz="${u.ignesiz ? 'evet' : 'hayir'}"><a href="${kacirA(u.yol)}">${kacir(u.ad)}</a> <span>${kacir(u.hedef)}</span></li>`).join('') +
    '</ul></div>';
}

/* test(id, { sorular, metinler, konular, ayarlar }) → <div class="g-veri" data-test-kaynak="id"> … </div> */
function test(id, v) {
  const s = [];
  (v.sorular || []).forEach(q => s.push(soru(q)));
  (v.metinler || []).forEach(m => s.push(metin(m)));
  (v.konular || []).forEach(k => s.push(konu(k)));
  Object.entries(v.ayarlar || {}).forEach(([k, d]) => s.push(`  <div data-ayar="${kacirA(k)}">${kacir(d)}</div>`));
  return `<div class="g-veri" data-test-kaynak="${kacirA(id)}">\n${s.join('\n')}\n</div>`;
}

module.exports = { test };
