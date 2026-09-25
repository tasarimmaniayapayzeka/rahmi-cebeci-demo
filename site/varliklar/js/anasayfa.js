/* ============================================================
   ANA SAYFA ETKİLEŞİMLERİ
   1. Molekül ağı — canvas'ta 3B döner nokta kafesi (hyalüronik
      asit ağı metaforu). Bağımlılıksız; el yazması perspektif.
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

  /* ---------- 1. MOLEKÜL AĞI ---------- */
  (function () {
    var tuval = document.querySelector('[data-molekul]');
    if (!tuval) return;
    var ctx = tuval.getContext('2d');
    var N = 84, f = 460;                       // nokta sayısı, odak uzaklığı
    var noktalar = [], baglar = [], atomlar = [3, 17, 31, 47, 63, 79];

    // fibonacci küresi — düzgün dağılım
    var ALTIN = Math.PI * (3 - Math.sqrt(5));
    for (var i = 0; i < N; i++) {
      var y = 1 - (i / (N - 1)) * 2;
      var r = Math.sqrt(1 - y * y);
      var t = ALTIN * i;
      noktalar.push({ x: Math.cos(t) * r, y: y, z: Math.sin(t) * r });
    }
    // sabit topoloji: yakın komşular bağlanır (kafes görünümü)
    for (var a = 0; a < N; a++) {
      for (var b = a + 1; b < N; b++) {
        var dx = noktalar[a].x - noktalar[b].x,
            dy = noktalar[a].y - noktalar[b].y,
            dz = noktalar[a].z - noktalar[b].z;
        if (dx * dx + dy * dy + dz * dz < 0.16) baglar.push([a, b]);
      }
    }

    var W = 0, H = 0, DPR = Math.min(2, window.devicePixelRatio || 1);
    function boyutla() {
      var k = tuval.parentElement.getBoundingClientRect();
      W = Math.round(k.width); H = Math.round(k.height);
      tuval.width = W * DPR; tuval.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    boyutla();
    new ResizeObserver(boyutla).observe(tuval.parentElement);

    var a1 = 0.4, a2 = 0.15, calisiyor = false, gorunur = true;
    function kare() {
      if (!gorunur) { calisiyor = false; return; }
      a1 += 0.0028; a2 += 0.0017;
      var R = Math.min(W, H) * 0.36, cx = W / 2, cy = H / 2;
      var c1 = Math.cos(a1), s1 = Math.sin(a1), c2 = Math.cos(a2), s2 = Math.sin(a2);
      var p = new Array(N);
      for (var i = 0; i < N; i++) {
        var n = noktalar[i];
        var x = n.x * c1 + n.z * s1, z1 = -n.x * s1 + n.z * c1;   // Y ekseni
        var y = n.y * c2 - z1 * s2, z = n.y * s2 + z1 * c2;       // X ekseni
        var olcek = f / (f + z * R);
        p[i] = { x: cx + x * R * olcek, y: cy + y * R * olcek, d: (z + 1) / 2, o: olcek };
      }
      ctx.clearRect(0, 0, W, H);
      // bağlar — derinliğe göre solan buz mavisi
      for (var j = 0; j < baglar.length; j++) {
        var u = p[baglar[j][0]], v = p[baglar[j][1]];
        var alfa = 0.34 * (1 - (u.d + v.d) / 2) + 0.05;
        ctx.strokeStyle = 'rgba(143,184,204,' + alfa.toFixed(3) + ')';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(u.x, u.y); ctx.lineTo(v.x, v.y); ctx.stroke();
      }
      // düğümler — petrol; birkaç bakır "atom"
      for (var k2 = 0; k2 < N; k2++) {
        var q = p[k2];
        var atom = atomlar.indexOf(k2) !== -1;
        var yr = (atom ? 4.6 : 2.2) * q.o;
        ctx.fillStyle = atom
          ? 'rgba(142,91,35,' + (0.9 - q.d * 0.55).toFixed(3) + ')'
          : 'rgba(15,74,96,' + (0.85 - q.d * 0.6).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(q.x, q.y, yr, 0, 6.2832); ctx.fill();
      }
      requestAnimationFrame(kare);
    }
    function baslat() { if (!calisiyor) { calisiyor = true; requestAnimationFrame(kare); } }

    if (AZALT) { gorunur = true; a1 = 0.9; a2 = 0.4; kare(); gorunur = false; }  // tek durağan kare
    else {
      new IntersectionObserver(function (g) {
        gorunur = g[0].isIntersecting;
        if (gorunur) baslat();
      }, { threshold: 0.05 }).observe(tuval);
    }
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
