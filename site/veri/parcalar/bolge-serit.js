/* ============================================================
   BÖLGE ŞERİDİ — ana sayfa bölge seçici
   Sekiz dikey şerit; seçilen şerit genişler ve bölgenin görseli,
   açıklaması, ilgili uygulamaları açılır. Kendi kendine ilerler,
   fareyle ya da dokunarak seçilir. Etkileşim: varliklar/js/anasayfa.js
   Veri (açıklama + uygulama eşlemesi) yuz-harita.js'ten gelir.
   ============================================================ */
const { BOLGELER, BOLGE_UYGULAMA } = require('./yuz-harita');

const GORSEL = {
  'yuz': 'bolge-yuz', 'goz-cevresi': 'ic3d-goz', 'dudak': 'bolge-dudak',
  'cene-ve-jawline': 'bolge-cene-ve-jawline', 'sacli-deri': 'bolge-sacli-deri',
  'boyun-ve-dekolte': 'bolge-boyun', 'el': 'bolge-el', 'vucut': 'bolge-vucut',
};
const OK = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';
const iki = n => String(n).padStart(2, '0');

function seritUret(r) {
  const toplam = iki(BOLGELER.length);
  const ogeler = BOLGELER.map(([slug, ad, aciklama], i) => {
    const hap = (BOLGE_UYGULAMA[slug] || []).map(([uad, uslug]) => {
      const yol = uslug.includes('#') ? uslug.replace('/#', '#').replace('#', '/#') : uslug + '/';
      return `<a href="${r}uygulamalar/${yol}">${uad}</a>`;
    }).join('');
    const acik = i === 0;
    return `<article class="serit__oge" data-serit-oge${acik ? ' data-acik' : ''}>
      <img src="${r}varliklar/gorsel/${GORSEL[slug] || 'bolge-yuz'}.webp" alt="" loading="lazy" width="1400" height="788">
      <button class="serit__bas" type="button" role="tab" id="srb-${slug}" aria-controls="sr-${slug}" aria-selected="${acik}">
        <span class="serit__no">${iki(i + 1)}</span><span class="serit__ad">${ad}</span>
      </button>
      <div class="serit__metin" id="sr-${slug}" role="tabpanel" aria-labelledby="srb-${slug}">
        <p class="serit__sayi">${iki(i + 1)} / ${toplam} · Bölge</p>
        <h3>${ad}</h3>
        <p>${aciklama}</p>
        <div class="serit__haplar">${hap}</div>
        <a class="serit__git" href="${r}bolgeler/${slug}/">Bölgeyi inceleyin ${OK}</a>
      </div>
    </article>`;
  }).join('\n    ');
  return `<div class="serit" data-serit>
    <div class="serit__raf" role="tablist" aria-label="Uygulama bölgeleri">
    ${ogeler}
    </div>
    <div class="serit__alt"><div class="serit__ilerleme" aria-hidden="true"><i></i></div><span>Temsilî görseller · yapay zekâ ile üretildi</span></div>
  </div>`;
}

module.exports = { seritUret };
