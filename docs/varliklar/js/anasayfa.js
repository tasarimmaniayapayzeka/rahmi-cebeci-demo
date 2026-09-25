/* ============================================================
   ANA SAYFA ETKİLEŞİMLERİ
   1. Katman kesiti — üç cihazın hangi deri derinliğine çalıştığı;
      SVG + CSS animasyon, sırayla ya da tıklayınca.
   2. Kayarak açılma — IntersectionObserver, kademeli gecikme.
   3. Sayaç bandı — görününce sayılar yukarı sayar.
   4. Yüz haritası — SVG nokta ↔ liste ↔ bilgi kartı senkronu.
   5. SSS filtresi — kategori düğmeleri.
   6. 3B kart eğimi — yalnız fare (pointer:fine), ≤6°.
   Hepsi prefers-reduced-motion'a saygılı.
   ============================================================ */
(function () {
  'use strict';
  var AZALT = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. KATMAN KESİTİ ----------
     Üç cihaz sırayla kendi derinliğinde "atım" yapar; düğmeye
     basılınca otomatik geçiş durur. Görünür değilken döngü bekler. */
  (function () {
    var kok = document.querySelector('[data-katman]');
    if (!kok) return;
    var dgm = kok.querySelectorAll('[data-katman-sec]');
    var gruplar = kok.querySelectorAll('[data-katman-g]');
    var not = kok.querySelector('[data-katman-not]');
    var sira = ['pico', 'rf', 'hifu'], i = 0, zaman = null, durdu = false;
    function sec(k) {
      gruplar.forEach(function (g) { g.classList.toggle('aktif', g.getAttribute('data-katman-g') === k); });
      dgm.forEach(function (b) {
        var a = b.getAttribute('data-katman-sec') === k;
        b.setAttribute('aria-pressed', a ? 'true' : 'false');
        if (a && not) not.textContent = b.getAttribute('data-not');
      });
    }
    function dur() { if (zaman) { clearInterval(zaman); zaman = null; } }
    dgm.forEach(function (b) {
      b.addEventListener('click', function () {
        durdu = true; dur();
        i = sira.indexOf(b.getAttribute('data-katman-sec'));
        sec(sira[i]);
      });
    });
    sec(sira[0]);
    if (AZALT || !('IntersectionObserver' in window)) return;
    new IntersectionObserver(function (e) {
      if (e[0].isIntersecting && !durdu && !zaman) {
        zaman = setInterval(function () { i = (i + 1) % sira.length; sec(sira[i]); }, 3800);
      } else if (!e[0].isIntersecting) dur();
    }, { threshold: 0.15 }).observe(kok);
  })();

  /* ---------- 2. KAYARAK AÇILMA ---------- */
  (function () {
    var ogeler = document.querySelectorAll('[data-reveal]');
    if (!ogeler.length) return;
    if (AZALT) { ogeler.forEach(function (e) { e.setAttribute('data-gorunur', '1'); }); return; }
    var io = new IntersectionObserver(function (girisler) {
      girisler.forEach(function (g) {
        if (g.isIntersecting) { g.target.setAttribute('data-gorunur', '1'); io.unobserve(g.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    ogeler.forEach(function (e) { io.observe(e); });
  })();

  /* ---------- 3. SAYAÇ ---------- */
  (function () {
    var sayaclar = document.querySelectorAll('[data-say]');
    if (!sayaclar.length) return;
    function say(el) {
      var hedef = parseInt(el.getAttribute('data-say'), 10);
      var ek = el.getAttribute('data-ek') || '';
      if (AZALT) { el.textContent = hedef + ek; return; }
      var t0 = null;
      function adim(t) {
        if (!t0) t0 = t;
        var o = Math.min(1, (t - t0) / 1100);
        o = 1 - Math.pow(1 - o, 3);                    // easeOutCubic
        el.textContent = Math.round(hedef * o) + ek;
        if (o < 1) requestAnimationFrame(adim);
      }
      requestAnimationFrame(adim);
    }
    var io = new IntersectionObserver(function (g) {
      g.forEach(function (x) { if (x.isIntersecting) { say(x.target); io.unobserve(x.target); } });
    }, { threshold: 0.6 });
    sayaclar.forEach(function (e) { io.observe(e); });
  })();

  /* ---------- 4. YÜZ HARİTASI ---------- */
  (function () {
    var kap = document.querySelector('[data-yuz-harita]');
    if (!kap) return;
    var noktalar = kap.querySelectorAll('[data-nokta]');
    var liste = kap.querySelectorAll('[data-liste]');
    var kartlar = kap.querySelectorAll('[data-kart]');

    function sec(slug) {
      noktalar.forEach(function (n) { n.dataset.secili = n.dataset.nokta === slug ? '1' : ''; });
      liste.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.liste === slug ? 'true' : 'false'); });
      kartlar.forEach(function (k) {
        var acik = k.dataset.kart === slug;
        k.hidden = !acik;
        // yeniden akıştan sonra geçişin oynaması için çift kare
        if (acik) { k.removeAttribute('data-acik'); requestAnimationFrame(function () { requestAnimationFrame(function () { k.setAttribute('data-acik', '1'); }); }); }
      });
    }
    noktalar.forEach(function (n) {
      n.addEventListener('click', function () { sec(n.dataset.nokta); });
      n.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sec(n.dataset.nokta); } });
    });
    liste.forEach(function (b) { b.addEventListener('click', function () { sec(b.dataset.liste); }); });
    sec('yuz');
  })();

  /* ---------- 5. SSS FİLTRESİ ---------- */
  (function () {
    var kap = document.querySelector('[data-sss-filtre]');
    if (!kap) return;
    var dugmeler = kap.querySelectorAll('button[data-kat]');
    var sorular = document.querySelectorAll('[data-sss-liste] details');
    dugmeler.forEach(function (d) {
      d.addEventListener('click', function () {
        var kat = d.dataset.kat;
        dugmeler.forEach(function (x) { x.setAttribute('aria-pressed', x === d ? 'true' : 'false'); });
        sorular.forEach(function (s) {
          var gizle = kat !== 'hepsi' && s.dataset.kat !== kat;
          s.dataset.sakla = gizle ? '1' : '';
          if (gizle) s.open = false;
        });
      });
    });
  })();

  /* ---------- 6. 3B KART EĞİMİ ---------- */
  (function () {
    if (AZALT || !window.matchMedia('(pointer:fine)').matches) return;
    document.querySelectorAll('[data-egim]').forEach(function (k) {
      var cerceve = null;
      k.addEventListener('pointermove', function (e) {
        if (cerceve) return;
        cerceve = requestAnimationFrame(function () {
          cerceve = null;
          var b = k.getBoundingClientRect();
          var x = (e.clientX - b.left) / b.width - 0.5;
          var y = (e.clientY - b.top) / b.height - 0.5;
          k.style.transform = 'perspective(700px) rotateY(' + (x * 6).toFixed(2) + 'deg) rotateX(' + (-y * 6).toFixed(2) + 'deg) translateY(-2px)';
        });
      });
      k.addEventListener('pointerleave', function () {
        if (cerceve) { cancelAnimationFrame(cerceve); cerceve = null; }
        k.style.transform = '';
      });
    });
  })();
})();
