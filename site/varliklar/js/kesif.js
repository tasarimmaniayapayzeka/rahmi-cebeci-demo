/* ============================================================
   Keşif bileşenleri — yolculuk simülatörü · bölge pusulası ·
   karşılaştırma masası. Veri sayfaya gömülü JSON bloklarından gelir
   (script[data-*-veri]); ağ isteği ve depolama YOK.
   IO eşik dersi: ≤.15 · zamanlayıcı emniyetleri var.
   ============================================================ */
(function () {
  'use strict';
  var AZ = matchMedia('(prefers-reduced-motion:reduce)').matches;
  function veriAl(sec) {
    var e = document.querySelector('script[' + sec + ']');
    if (!e) return null;
    try { return JSON.parse(e.textContent); } catch (h) { return null; }
  }

  /* ---------- 1) YOLCULUK SİMÜLATÖRÜ ---------- */
  var yolc = document.querySelector('[data-yolc]');
  var YV = veriAl('data-yolc-veri');
  if (yolc && YV) {
    var secim = yolc.querySelector('[data-yolc-sec]');
    var adimlar = yolc.querySelectorAll('.yolc-adim');
    var dolgu = yolc.querySelector('.yolc-ciz i');
    var ASAMALAR = ['muayene', 'plan', 'gun', 'takip'];
    var oynatici = null;

    function metinYaz(slug) {
      var k = YV[slug];
      if (!k) return;
      adimlar.forEach(function (a, i) {
        a.querySelector('p').textContent = k.yolculuk[ASAMALAR[i]] || '';
      });
    }
    function oynat() {
      if (oynatici) { clearInterval(oynatici); oynatici = null; }
      adimlar.forEach(function (a) { a.removeAttribute('data-akt'); });
      if (dolgu) dolgu.style.width = '0';
      var i = 0;
      var tikla = function () {
        if (i >= adimlar.length) { clearInterval(oynatici); oynatici = null; return; }
        adimlar[i].setAttribute('data-akt', '');
        if (dolgu) dolgu.style.width = ((i + 1) / adimlar.length * 100) + '%';
        i++;
      };
      if (AZ) { while (i < adimlar.length) tikla(); return; }
      tikla();
      oynatici = setInterval(tikla, 1100);
      /* zamanlayıcı kısıtlanan görünümler için emniyet */
      setTimeout(function () {
        adimlar.forEach(function (a) { a.setAttribute('data-akt', ''); });
        if (dolgu) dolgu.style.width = '100%';
      }, 6000);
    }
    secim.addEventListener('change', function () { metinYaz(secim.value); oynat(); });
    var oynatDgm = yolc.querySelector('[data-yolc-oynat]');
    if (oynatDgm) oynatDgm.addEventListener('click', oynat);
    metinYaz(secim.value);
    /* görününce kendiliğinden oynat (eşik düşük!) */
    var ioY = new IntersectionObserver(function (g) {
      if (g[0].isIntersecting) { ioY.disconnect(); oynat(); }
    }, { threshold: .12 });
    ioY.observe(yolc);
    setTimeout(function () { if (!adimlar[0].hasAttribute('data-akt')) oynat(); }, 2500);
  }

  /* ---------- 2) BÖLGE PUSULASI ---------- */
  var pus = document.querySelector('[data-pus]');
  var PV = veriAl('data-pus-veri');
  if (pus && PV) {
    var gorsel = pus.querySelector('.pus-merkez img');
    var kart = pus.querySelector('.pus-kart');
    var ogeler = pus.querySelectorAll('.pus-oge');
    function pusSec(slug) {
      var b = PV[slug];
      if (!b) return;
      ogeler.forEach(function (o) {
        if (o.dataset.pusOge === slug) o.setAttribute('data-akt', ''); else o.removeAttribute('data-akt');
      });
      kart.removeAttribute('data-akt');
      gorsel.classList.add('pus-gecis');
      setTimeout(function () {
        gorsel.src = b.gorsel;
        gorsel.alt = b.ad + ' bölgesinin temsili görseli';
        gorsel.onload = function () { gorsel.classList.remove('pus-gecis'); };
        setTimeout(function () { gorsel.classList.remove('pus-gecis'); }, 900); /* emniyet */
        kart.querySelector('b').textContent = b.ad;
        kart.querySelector('p').textContent = b.tarif;
        kart.querySelector('a').href = b.yol;
        kart.setAttribute('data-akt', '');
      }, AZ ? 0 : 200);
    }
    /* fare hızlıca listenin üzerinden geçerken her düğmede tetiklenmesin */
    var bekleme = null;
    ogeler.forEach(function (o) {
      o.addEventListener('click', function () {
        if (bekleme) clearTimeout(bekleme);
        pusSec(o.dataset.pusOge);
      });
      o.addEventListener('pointerenter', function (e) {
        if (e.pointerType && e.pointerType !== 'mouse') return;
        if (bekleme) clearTimeout(bekleme);
        bekleme = setTimeout(function () { pusSec(o.dataset.pusOge); }, 160);
      });
      o.addEventListener('pointerleave', function () { if (bekleme) clearTimeout(bekleme); });
    });
    var ilk = ogeler[0];
    if (ilk) pusSec(ilk.dataset.pusOge);
  }

  /* ---------- 3) KARŞILAŞTIRMA MASASI ---------- */
  var kar = document.querySelector('[data-kar]');
  var KV = veriAl('data-kar-veri');
  if (kar && KV) {
    var secA = kar.querySelector('[data-kar-a]');
    var secB = kar.querySelector('[data-kar-b]');
    var satirlar = kar.querySelectorAll('.kar-satir');
    var ALANLAR = ['hedef', 'his', 'iyilesme', 'etki', 'kalicilik'];
    function doldur() {
      var a = KV[secA.value], b = KV[secB.value];
      if (!a || !b) return;
      satirlar.forEach(function (s) { s.removeAttribute('data-gorunur'); });
      kar.querySelectorAll('.kar-ad')[0].textContent = a.ad;
      kar.querySelectorAll('.kar-ad')[1].textContent = b.ad;
      satirlar.forEach(function (s, i) {
        var alan = s.dataset.karAlan;
        if (alan) {
          var pl = s.querySelectorAll('p');
          pl[0].textContent = a[alan] || '—';
          pl[1].textContent = b[alan] || '—';
        }
        setTimeout(function () { s.setAttribute('data-gorunur', ''); }, AZ ? 0 : 120 * (i + 1));
      });
      /* zamanlayıcı emniyeti */
      setTimeout(function () { satirlar.forEach(function (s) { s.setAttribute('data-gorunur', ''); }); }, 2500);
    }
    secA.addEventListener('change', doldur);
    secB.addEventListener('change', doldur);
    doldur();
  }
})();
