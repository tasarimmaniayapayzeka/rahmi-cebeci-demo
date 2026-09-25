/* ============================================================
   [MARKA] — site.js  (vanilla, bağımlılık yok)
   Menü davranışı, Ramazan Ersoy projesinde bulunan 3 hatayı
   baştan kapatacak şekilde yazıldı:
     1. ASİMETRİK HOVER — tıklayınca açılıp fare çıkınca kapanıyordu.
        Masaüstünde mouseenter/leave + focusin/out, çıkışta 140ms
        gecikme, Escape kapatır. Mobilde YALNIZ tıklama.
     2. GÖRÜNMEZ KÖPRÜ — buton ile menü arasındaki .5rem boşlukta
        fare kayboluyordu. CSS'te .alt::before ile köprülendi.
     3. Menü kırılması CSS tarafında nowrap + flex:0 0 auto ile
        çözüldü; buraya JS gerekmiyor.
   ============================================================ */
(function () {
  'use strict';

  var MASAUSTU = window.matchMedia('(min-width: 1024px)');

  /* ---------- açılır menüler ---------- */
  var ogeler = [].slice.call(document.querySelectorAll('[data-acilir]'));

  function ac(oge) {
    ogeler.forEach(function (o) { if (o !== oge) kapa(o); });
    oge.dataset.acik = '1';
    var b = oge.querySelector('.nav__bag');
    if (b) b.setAttribute('aria-expanded', 'true');
  }
  function kapa(oge) {
    delete oge.dataset.acik;
    var b = oge.querySelector('.nav__bag');
    if (b) b.setAttribute('aria-expanded', 'false');
  }
  function hepsiniKapa() { ogeler.forEach(kapa); }

  ogeler.forEach(function (oge) {
    var zaman = null;
    var btn = oge.querySelector('.nav__bag');

    // tıklama her iki modda da çalışır (mobilde tek yol budur)
    if (btn) btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (oge.dataset.acik) kapa(oge); else ac(oge);
    });

    oge.addEventListener('mouseenter', function () {
      if (!MASAUSTU.matches) return;
      clearTimeout(zaman); ac(oge);
    });
    oge.addEventListener('mouseleave', function () {
      if (!MASAUSTU.matches) return;
      clearTimeout(zaman);
      // 140ms: fare butondan menüye inerken kapanma/titreme olmasın
      zaman = setTimeout(function () { kapa(oge); }, 140);
    });
    oge.addEventListener('focusin', function () { if (MASAUSTU.matches) ac(oge); });
    oge.addEventListener('focusout', function (e) {
      if (!MASAUSTU.matches) return;
      if (!oge.contains(e.relatedTarget)) kapa(oge);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { hepsiniKapa(); cekmeceKapa(); }
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('[data-acilir]')) hepsiniKapa();
  });

  /* ---------- mobil çekmece ---------- */
  var cekmece = document.querySelector('[data-cekmece]');
  var acDgm = document.querySelector('[data-menu-ac]');

  function cekmeceAc() {
    if (!cekmece) return;
    cekmece.dataset.acik = '1';
    cekmece.setAttribute('aria-hidden', 'false');
    if (acDgm) acDgm.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    var ilk = cekmece.querySelector('a, button');
    if (ilk) ilk.focus();
  }
  function cekmeceKapa() {
    if (!cekmece || !cekmece.dataset.acik) return;
    delete cekmece.dataset.acik;
    cekmece.setAttribute('aria-hidden', 'true');
    if (acDgm) { acDgm.setAttribute('aria-expanded', 'false'); acDgm.focus(); }
    document.body.style.overflow = '';
  }

  if (acDgm) acDgm.addEventListener('click', cekmeceAc);
  [].slice.call(document.querySelectorAll('[data-menu-kapa]'))
    .forEach(function (b) { b.addEventListener('click', cekmeceKapa); });

  // masaüstüne geçilince çekmece açık kalmasın
  var mqDinle = MASAUSTU.addEventListener ? 'addEventListener' : 'addListener';
  MASAUSTU[mqDinle]('change', function () { cekmeceKapa(); hepsiniKapa(); });

  /* ---------- aynı sayfa çapalarında yumuşak kaydırma ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    if (!id) return;
    var h = document.getElementById(id);
    if (!h) return;
    e.preventDefault();
    var ust = document.querySelector('.ust');
    var pay = ust ? ust.offsetHeight + 12 : 12;
    window.scrollTo({ top: h.getBoundingClientRect().top + window.scrollY - pay, behavior: 'smooth' });
    h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true });
  });
})();


/* ---------- demo modu: form alıcısı (PHP) yokken WhatsApp'a aktar ----------
   Canlı sunucuda body[data-demo] olmadığı için bu blok hiç çalışmaz. */
(function () {
  'use strict';
  if (!document.body.hasAttribute('data-demo')) return;
  var f = document.querySelector('form[action$="iletisim-gonder.php"]');
  if (!f) return;
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var al = function (ad) { var el = f.querySelector('[name="' + ad + '"]'); return el && el.value ? el.value.trim() : ''; };
    var metin = 'Merhaba, randevu talebi iletmek istiyorum.' +
      (al('ad') ? '\nAd: ' + al('ad') : '') +
      (al('konu') ? '\nKonu: ' + al('konu') : '') +
      (al('mesaj') ? '\nNot: ' + al('mesaj') : '');
    var tel = (document.querySelector('a[href^="https://wa.me/"]') || {}).href || '';
    var num = tel.replace(/^https:\/\/wa\.me\//, '').split('?')[0];
    window.open('https://wa.me/' + num + '?text=' + encodeURIComponent(metin), '_blank', 'noopener');
  });
})();
