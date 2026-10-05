/* ============================================================
   Etkileşimli araçlar (5 Eki 2026): dövme silme yol haritası · muayene
   rehberi · güneş alışkanlığı testi. Tek motor, üç sonuç ekranı.
   - Soru, seçenek ve sonuç metinleri sayfadaki gizli listeden
     (.g-veri[data-test-kaynak]) okunur → Klasik Editör'den düzenlenir.
   - İlkeler (cilt-tipi.js ile aynı): puan/yüzde gösterilmez, tanı ve
     "size uygun" dili yok, fiyat yok; yanıtlar yalnız bu sekmenin
     belleğinde kalır (sunucu, çerez, localStorage yok).
   - WhatsApp mesajına sağlık bilgisi (gebelik, ilaç vb.) yazılmaz.
   ============================================================ */
(function () {
  'use strict';
  var kap = document.querySelector('[data-arac]');
  if (!kap) return;
  var tur = kap.getAttribute('data-arac');
  var kaynak = document.querySelector('[data-test-kaynak="' + tur + '"]');
  var govde = kap.querySelector('[data-arac-govde]');
  var basla = kap.querySelector('[data-arac-basla]');
  if (!kaynak || !govde || !basla) return;

  /* ---------- veri (sayfadaki gizli liste) ---------- */
  function yazi(el) { return el ? el.textContent.replace(/\s+/g, ' ').trim() : ''; }
  function kac(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function hepsi(el, sec) { return [].slice.call(el.querySelectorAll(sec)); }

  var SORULAR = hepsi(kaynak, '[data-soru]').map(function (d) {
    var p = d.querySelector('p');
    return {
      a: d.getAttribute('data-soru'), tur: d.getAttribute('data-tur') || 'tek', s: yazi(d.querySelector('b')), ipucu: yazi(p),
      sec: hepsi(d, 'li').map(function (li) { return { d: li.getAttribute('data-deger'), m: yazi(li) }; })
    };
  });
  var METIN = {};
  hepsi(kaynak, '[data-metin]').forEach(function (d) {
    METIN[d.getAttribute('data-metin')] = { b: yazi(d.querySelector('b')), p: yazi(d.querySelector('p:not([data-oneri])')), oneri: yazi(d.querySelector('[data-oneri]')) };
  });
  var AYAR = {};
  hepsi(kaynak, '[data-ayar]').forEach(function (d) { AYAR[d.getAttribute('data-ayar')] = yazi(d); });
  var KONU = {};
  hepsi(kaynak, '[data-konu]').forEach(function (d) {
    var a = d.querySelector('b a');
    KONU[d.getAttribute('data-konu')] = {
      ad: yazi(a), yol: a ? a.href : '',
      uyg: hepsi(d, 'li').map(function (li) {
        var la = li.querySelector('a');
        return { ad: yazi(la), yol: la ? la.href : '', hedef: yazi(li.querySelector('span')), ignesiz: li.getAttribute('data-ignesiz') === 'evet' };
      })
    };
  });
  /* sayfadaki ilgili bağlantılar (data-arac-bag içindeki <a data-bag="…">) — sonuç ekranında kullanılır */
  var BAG = {};
  hepsi(document, '[data-arac-bag] a[data-bag]').forEach(function (a) { BAG[a.getAttribute('data-bag')] = { ad: yazi(a), yol: a.href }; });
  var waNo = ((document.querySelector('a[href^="https://wa.me/"]') || {}).href || '').replace(/^https:\/\/wa\.me\//, '').split('?')[0];

  /* ---------- akış ---------- */
  var yanit = {};   /* soru anahtarı → [değer…] — yalnız bellekte */
  var sira = 0;
  var AZAMI = +(AYAR.en_cok_secim || 3);

  function soruBul(a) { for (var i = 0; i < SORULAR.length; i++) if (SORULAR[i].a === a) return SORULAR[i]; return null; }
  function deger(a) { return (yanit[a] || [])[0]; }
  function secilenler(a) {
    var q = soruBul(a), d = yanit[a] || [];
    return q ? q.sec.filter(function (s) { return d.indexOf(s.d) > -1; }) : [];
  }

  function ust() {
    var n = SORULAR.length;
    return '<div class="arac-ust"><span class="arac-sayac">' + (sira + 1) + ' / ' + n + '</span>' +
      '<div class="arac-cubuk" role="progressbar" aria-label="İlerleme" aria-valuemin="0" aria-valuemax="' + n + '" aria-valuenow="' + sira + '">' +
      '<span style="width:' + Math.round(sira / n * 100) + '%"></span></div></div>';
  }

  function soruCiz(yon) {
    var q = SORULAR[sira], secili = yanit[q.a] || [], cok = q.tur === 'cok';
    govde.innerHTML = '<div class="arac-kart arac-gir' + (yon < 0 ? ' arac-gir--geri' : '') + '">' + ust() +
      '<h2 class="arac-soru" tabindex="-1">' + kac(q.s) + '</h2>' +
      (q.ipucu ? '<p class="arac-ipucu">' + kac(q.ipucu) + '</p>' : '') +
      '<div class="arac-secenekler' + (q.sec.length > 4 ? ' arac-secenekler--cok' : '') + '" role="' + (cok ? 'group' : 'radiogroup') + '" aria-label="' + kac(q.s) + '">' +
      q.sec.map(function (s, i) {
        var on = secili.indexOf(s.d) > -1;
        return '<button type="button" class="arac-secenek' + (on ? ' is-secili' : '') + (cok ? ' arac-secenek--kutu' : '') + '" ' +
          (cok ? 'aria-pressed="' + on + '"' : 'role="radio" aria-checked="' + on + '"') + ' data-i="' + i + '"><i aria-hidden="true"></i><span>' + kac(s.m) + '</span></button>';
      }).join('') + '</div>' +
      '<div class="arac-alt">' + (sira > 0 ? '<button type="button" class="arac-geri" data-geri>← Önceki soru</button>' : '<span></span>') +
      (cok ? '<button type="button" class="dgm dgm--bir" data-devam' + (secili.length ? '' : ' disabled') + '>Devam</button>' : '') + '</div></div>';

    hepsi(govde, '.arac-secenek').forEach(function (b) {
      b.addEventListener('click', function () {
        var s = q.sec[+b.getAttribute('data-i')];
        if (!cok) {
          yanit[q.a] = [s.d];
          hepsi(govde, '.arac-secenek').forEach(function (x) { x.classList.toggle('is-secili', x === b); x.setAttribute('aria-checked', x === b); });
          setTimeout(ileri, 170);
          return;
        }
        var l = (yanit[q.a] || []).slice(), i = l.indexOf(s.d);
        if (i > -1) l.splice(i, 1);
        else if (s.d === 'yok') l = ['yok'];   /* "hiçbiri" tek başına seçilir */
        else { l = l.filter(function (x) { return x !== 'yok'; }); if (q.a === 'konu' && l.length >= AZAMI) return; l.push(s.d); }
        yanit[q.a] = l;
        hepsi(govde, '.arac-secenek').forEach(function (x) {
          var on = l.indexOf(q.sec[+x.getAttribute('data-i')].d) > -1;
          x.classList.toggle('is-secili', on); x.setAttribute('aria-pressed', on);
        });
        govde.querySelector('[data-devam]').disabled = !l.length;
      });
    });
    var geri = govde.querySelector('[data-geri]');
    if (geri) geri.addEventListener('click', function () { sira--; soruCiz(-1); });
    var devam = govde.querySelector('[data-devam]');
    if (devam) devam.addEventListener('click', ileri);
    odakla();
  }

  function ileri() {
    sira++;
    if (sira < SORULAR.length) soruCiz(1); else sonucCiz();
  }

  function odakla() {
    var h = govde.querySelector('h2, [data-sonuc-bas]');
    if (!h) return;
    var r = govde.getBoundingClientRect();
    if (r.top < 0 || r.top > window.innerHeight * 0.4) govde.scrollIntoView({ block: 'start', behavior: 'smooth' });
    try { h.focus({ preventScroll: true }); } catch (e) { h.focus(); }
  }

  /* ---------- ortak sonuç parçaları ---------- */
  function kutu(m, ek) {
    if (!m || !m.b) return '';
    return '<div class="arac-not' + (ek ? ' ' + ek : '') + '"><b>' + kac(m.b) + '</b>' + (m.p ? '<p>' + kac(m.p) + '</p>' : '') +
      (m.oneri ? '<p class="arac-not__oneri">' + kac(m.oneri) + '</p>' : '') + '</div>';
  }
  function eylemler(waMetni) {
    var ilet = BAG.iletisim;
    return '<div class="arac-eylem">' +
      (waNo ? '<a class="dgm dgm--bir" target="_blank" rel="noopener" href="https://wa.me/' + waNo + '?text=' + encodeURIComponent(waMetni) + '">WhatsApp’tan randevu isteyin</a>' : '') +
      (ilet ? '<a class="dgm dgm--iki" href="' + kac(ilet.yol) + '">' + kac(ilet.ad) + '</a>' : '') +
      '<button type="button" class="dgm dgm--iki" data-yazdir>Yazdırın</button>' +
      '<button type="button" class="arac-geri" data-tekrar>Yeniden başlayın</button></div>' +
      '<p class="arac-kucuk">' + kac(AYAR.gizlilik || 'Yanıtlarınız kaydedilmedi; sayfayı kapattığınızda silinir.') + '</p>';
  }
  function sonucBagla() {
    var y = govde.querySelector('[data-yazdir]');
    if (y) y.addEventListener('click', function () { window.print(); });
    govde.querySelector('[data-tekrar]').addEventListener('click', function () { yanit = {}; sira = 0; soruCiz(1); });
    odakla();
  }

  /* ---------- 1) dövme silme yol haritası ---------- */
  /* Kirby-Desai (2009): cilt tonu 1–6 · bölge 1–5 · renk 1–4 · mürekkep miktarı 1–4 · iz 0/1/3/5 · kapatma 0/2.
     Toplam, ölçeğin öngördüğü seans sayısına karşılık gelir; ±2 aralık olarak verilir. Toplam asla gösterilmez. */
  var ETKEN = { ten: 6, bolge: 5, renk: 4, miktar: 4, iz: 5, katman: 2 };

  function dovmeSonuc() {
    var top = 0;
    Object.keys(ETKEN).forEach(function (a) { top += +deger(a) || 0; });
    var alt = Math.max(2, top - 2), ust = top + 2;
    var hA = +(AYAR.ara_hafta_alt || 6), hU = +(AYAR.ara_hafta_ust || 8);
    var ayA = Math.max(1, Math.round((alt - 1) * hA / 4.35)), ayU = Math.max(ayA + 1, Math.round((ust - 1) * hU / 4.35));
    var sayiGoster = (AYAR.aralik_goster || 'evet').toLowerCase() !== 'hayir';
    var dizi = top <= 8 ? 'kisa' : (top <= 14 ? 'orta' : 'uzun');

    var bas = sayiGoster
      ? '<p class="arac-buyuk" data-sonuc-bas tabindex="-1">Yaklaşık <b>' + alt + '–' + ust + '</b> seans</p>' +
        '<p class="arac-alt-satir">Seanslar arası ' + hA + '–' + hU + ' hafta · ilk seanstan sona yaklaşık ' + ayA + '–' + ayU + ' ay</p>'
      : '<p class="arac-buyuk" data-sonuc-bas tabindex="-1">' + kac((METIN['dizi_' + dizi] || {}).b || '') + '</p>' +
        '<p class="arac-alt-satir">Seanslar arası ' + hA + '–' + hU + ' hafta</p>';

    /* zaman çizgisi: alt sayıya kadar dolu, üst sayıya kadar kesikli */
    var noktalar = '';
    if (sayiGoster) {
      for (var i = 1; i <= Math.min(ust, 24); i++) {
        noktalar += '<li class="' + (i <= alt ? 'is-dolu' : 'is-olasi') + '"><span></span></li>';
      }
    }
    var cizgi = noktalar ? '<div class="arac-zaman-kap" style="max-width:' + Math.min(ust, 24) * 34 + 'px"><ol class="arac-zaman" aria-hidden="true">' + noktalar + '</ol>' +
      '<div class="arac-zaman-uc" aria-hidden="true"><span>1. seans</span><span>' + Math.min(ust, 24) + '. seans</span></div></div>' +
      '<p class="arac-kucuk">Dolu noktalar ölçeğin alt sınırını, kesikli olanlar üst sınırına kadar olan olası seansları gösterir. Her nokta arasında ' + hA + '–' + hU + ' hafta vardır.</p>' : '';

    /* en çok etkileyen etkenler (oranı yüksek olanlar) — sayı göstermeden */
    var etkenler = Object.keys(ETKEN).map(function (a) { return { a: a, o: (+deger(a) || 0) / ETKEN[a] }; })
      .filter(function (x) { return x.o >= 0.6; }).sort(function (x, y) { return y.o - x.o; }).slice(0, 3);
    var etkenHtml = etkenler.length
      ? '<div class="arac-etkenler"><b>Sayıyı en çok etkileyenler</b><ul>' + etkenler.map(function (x) {
          var m = METIN['etken_' + x.a] || {};
          return '<li><strong>' + kac(m.b) + '</strong><span>' + kac(m.p) + '</span></li>';
        }).join('') + '</ul></div>'
      : kutu(METIN.etken_yok);

    var notlar = '';
    if (deger('tur') === 'kalici') notlar += kutu(METIN.not_kalici, 'arac-not--uyari');
    if ((+deger('renk') || 0) >= 2) notlar += kutu(METIN.not_kirmizi);
    if ((+deger('renk') || 0) >= 4) notlar += kutu(METIN.not_renk);
    if ((+deger('ten') || 0) >= 5) notlar += kutu(METIN.not_koyu);
    if ((+deger('iz') || 0) >= 3) notlar += kutu(METIN.not_iz);
    if ((+deger('katman') || 0) >= 2) notlar += kutu(METIN.not_katman);
    if (deger('bronz') === 'evet' || deger('bronz') === 'emin-degil') notlar += kutu(METIN.not_bronz, 'arac-not--uyari');

    var wa = 'Merhaba, sitedeki dövme silme yol haritasını doldurdum.\n' +
      ['tur', 'bolge', 'renk', 'miktar', 'katman'].map(function (a) {
        var q = soruBul(a), s = secilenler(a)[0];
        return q && s ? '• ' + (METIN['wa_' + a] ? METIN['wa_' + a].b : q.s) + ': ' + s.m : '';
      }).filter(Boolean).join('\n') + '\nMuayene için randevu almak istiyorum.';

    govde.innerHTML = '<div class="arac-kart arac-sonuc arac-gir">' +
      '<p class="arac-sonuc__etiket">' + kac(AYAR.sonuc_etiket || 'Yol haritanız') + '</p>' + bas + cizgi + etkenHtml +
      kutu(METIN.olcek) + notlar + kutu(METIN.kesin, 'arac-not--vurgu') + eylemler(wa) + '</div>';
    sonucBagla();
  }

  /* ---------- 2) muayene rehberi ---------- */
  function uygKart(u) {
    return '<a class="arac-uyg" href="' + kac(u.yol) + '"><span class="arac-uyg__ad">' + kac(u.ad) + '</span>' +
      (u.hedef ? '<span class="arac-uyg__not">' + kac(u.hedef) + '</span>' : '') +
      '<span class="arac-uyg__etiket">' + (u.ignesiz ? 'İğnesiz' : 'İğne ya da mikroiğne içerir') + '</span></a>';
  }

  function rehberSonuc() {
    var ignesizOnce = deger('igne') === 'ignesiz';
    var konular = (yanit.konu || []).map(function (k) { return KONU[k]; }).filter(Boolean);
    var bolumler = konular.map(function (k) {
      var l = k.uyg.slice();
      if (ignesizOnce) l.sort(function (x, y) { return (y.ignesiz ? 1 : 0) - (x.ignesiz ? 1 : 0); });
      return '<section class="arac-konu"><h3><a href="' + kac(k.yol) + '">' + kac(k.ad) + '</a></h3>' +
        '<div class="arac-uyglar">' + l.map(uygKart).join('') + '</div></section>';
    }).join('');

    var soyle = (yanit.soyle || []).filter(function (d) { return d !== 'yok'; });
    var soyleHtml = soyle.length
      ? '<div class="arac-etkenler"><b>' + kac((METIN.soyle_bas || {}).b || 'Muayenede mutlaka söyleyin') + '</b><ul>' + soyle.map(function (d) {
          var m = METIN['soyle_' + d] || {};
          return '<li><strong>' + kac(m.b) + '</strong><span>' + kac(m.p) + '</span></li>';
        }).join('') + '</ul>' + (BAG.hazirlik ? '<p><a href="' + kac(BAG.hazirlik.yol) + '">' + kac(BAG.hazirlik.ad) + ' →</a></p>' : '') + '</div>'
      : '';

    var wa = 'Merhaba, sitedeki muayene rehberini doldurdum.\n• Konuşmak istediğim başlıklar: ' +
      konular.map(function (k) { return k.ad; }).join(', ') +
      (ignesizOnce ? '\n• İğnesiz yöntemleri de konuşmak isterim.' : '') + '\nMuayene için randevu almak istiyorum.';

    var muayene = BAG.muayene ? '<a class="arac-ilk" href="' + kac(BAG.muayene.yol) + '"><span>1</span><b>' + kac(BAG.muayene.ad) + '</b><em>' + kac((METIN.ilk_adim || {}).p || '') + '</em></a>' : '';

    govde.innerHTML = '<div class="arac-kart arac-sonuc arac-gir">' +
      '<p class="arac-sonuc__etiket">' + kac(AYAR.sonuc_etiket || 'Muayenede konuşabileceğiniz başlıklar') + '</p>' +
      '<p class="arac-orta" data-sonuc-bas tabindex="-1">' + kac((METIN.rehber_giris || {}).b || '') + '</p>' +
      '<p class="arac-alt-satir">' + kac((METIN.rehber_giris || {}).p || '') + '</p>' +
      muayene + bolumler +
      (deger('zaman') === 'yakin' ? kutu(METIN.zaman_yakin, 'arac-not--uyari') : '') +
      soyleHtml + kutu(METIN.rehber_son, 'arac-not--vurgu') + eylemler(wa) + '</div>';
    sonucBagla();
  }

  /* ---------- 3) güneş alışkanlığı testi ---------- */
  function gunesSonuc() {
    var liste = SORULAR.map(function (q, i) { return { a: q.a, v: +deger(q.a) || 0, i: i }; })
      .filter(function (x) { return x.v > 0 && METIN['aliskanlik_' + x.a]; })
      .sort(function (x, y) { return y.v - x.v || x.i - y.i; }).slice(0, 3);
    var kartlar = liste.length
      ? '<div class="arac-kartlar">' + liste.map(function (x, n) {
          var m = METIN['aliskanlik_' + x.a];
          return '<article class="arac-alis"><span class="arac-alis__no">0' + (n + 1) + '</span><h3>' + kac(m.b) + '</h3><p>' + kac(m.p) + '</p>' +
            (m.oneri ? '<p class="arac-alis__oneri">' + kac(m.oneri) + '</p>' : '') + '</article>';
        }).join('') + '</div>'
      : kutu(METIN.gunes_iyi, 'arac-not--vurgu');
    var bas = liste.length ? (METIN.gunes_bas || {}) : (METIN.gunes_bas_iyi || METIN.gunes_bas || {});
    var bag = ['leke', 'pico'].map(function (k) { return BAG[k] ? '<a class="dgm dgm--iki" href="' + kac(BAG[k].yol) + '">' + kac(BAG[k].ad) + '</a>' : ''; }).join('');
    var wa = 'Merhaba, sitedeki güneş alışkanlığı testini doldurdum. Lekeler hakkında muayene için randevu almak istiyorum.';

    govde.innerHTML = '<div class="arac-kart arac-sonuc arac-gir">' +
      '<p class="arac-sonuc__etiket">' + kac(AYAR.sonuc_etiket || 'Alışkanlık özetiniz') + '</p>' +
      '<p class="arac-orta" data-sonuc-bas tabindex="-1">' + kac(bas.b || '') + '</p>' +
      (bas.p ? '<p class="arac-alt-satir">' + kac(bas.p) + '</p>' : '') +
      kartlar + kutu(METIN.gunes_genel) + kutu(METIN.ben_uyari, 'arac-not--uyari') +
      (bag ? '<div class="arac-eylem arac-eylem--bag">' + bag + '</div>' : '') + eylemler(wa) + '</div>';
    sonucBagla();
  }

  function sonucCiz() {
    if (tur === 'dovme') dovmeSonuc();
    else if (tur === 'rehber') rehberSonuc();
    else if (tur === 'gunes') gunesSonuc();
  }

  basla.addEventListener('click', function () { yanit = {}; sira = 0; soruCiz(1); });
})();
