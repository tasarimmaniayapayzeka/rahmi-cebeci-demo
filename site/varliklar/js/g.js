/* ============================================================
   G TASARIM SİSTEMİ — davranış katmanı
   Sözleşme (işaretleme g.css bileşenleriyle birlikte):
     [data-gr]                reveal (isteğe bağlı --d gecikme)
     [data-gsay="42"]         sayaç (rAF + 1.6s emniyet)
     .g-nokta[data-gn=X]      sahne noktası; [data-ghud] kartını günceller
       — nokta metinleri sayfada <div class="g-veri" data-gnokta-kaynak> (eski: data-gnokta-veri JSON)
     .g-katblok[data-gkat=X]  kaydırınca X noktasını seçer (atlas senkron)
     .g-donut .g-dol[data-gyuzde] / .g-ciz b[data-gw]  görününce dolar
     .g-msatir[data-gg|-gb|-ga] → [data-gonizle] önizlemesini günceller
     .g-ssoru[data-gs] + [data-gcevap] terminal (daktilo)
       — cevaplar her sorunun altında: <div class="g-syanit" data-gs-yanit="N"> (eski: data-gsoru-veri JSON)
     .g-okucu                 okuma çubuğu
     .g-bmenu a[href^="#"]    yasal belge gezgini (scrollspy → [data-akt])
   Dersler: IO eşiği ≤.15 (uzun kart/kısa ekran), rAF emniyeti,
   AZ'de tüm süsler kapalı ama bilgi tam.
   ============================================================ */
(function () {
  'use strict';
  var AZ = matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* okuma çubuğu */
  var okucu = document.querySelector('.g-okucu');
  if (okucu) addEventListener('scroll', function () {
    var h = document.documentElement;
    okucu.style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + '%';
  }, { passive: true });

  /* reveal */
  var ioR = new IntersectionObserver(function (g) {
    g.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('g-gorunur'); ioR.unobserve(x.target); } });
  }, { threshold: .1 });
  document.querySelectorAll('[data-gr]').forEach(function (e) { AZ ? e.classList.add('g-gorunur') : ioR.observe(e); });

  /* sayaç */
  document.querySelectorAll('[data-gsay]').forEach(function (el) {
    var hedef = +el.dataset.gsay;
    if (AZ) { el.textContent = hedef; return; }
    setTimeout(function () { el.textContent = hedef; }, 1600); /* rAF çalışmayan görünümler */
    var io = new IntersectionObserver(function (g) {
      if (!g[0].isIntersecting) return; io.disconnect();
      var t0 = null;
      requestAnimationFrame(function adim(t) {
        if (!t0) t0 = t;
        var p = Math.min(1, (t - t0) / 900); p = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(hedef * p);
        if (p < 1) requestAnimationFrame(adim);
      });
    }, { threshold: .1 });
    io.observe(el);
  });

  /* sahne noktaları + hud + atlas senkron */
  var hud = document.querySelector('[data-ghud]');
  /* nokta metinleri: sayfadaki <div class="g-veri" data-gnokta-kaynak> listesi (28 Eyl; editörde düzenlenir),
     yoksa eski <script data-gnokta-veri> JSON'u */
  var noktaKaynak = document.querySelector('[data-gnokta-kaynak]');
  var noktaVeriEl = document.querySelector('script[data-gnokta-veri]');
  var NOKTA = {};
  if (noktaKaynak) {
    noktaKaynak.querySelectorAll('[data-anahtar]').forEach(function (o) {
      var nb = o.querySelector('b'), ns = o.querySelector('span');
      NOKTA[o.getAttribute('data-anahtar')] = [nb ? nb.innerHTML.trim() : '', ns ? ns.innerHTML.trim() : ''];
    });
  } else if (noktaVeriEl) { try { NOKTA = JSON.parse(noktaVeriEl.textContent); } catch (e) {} }
  function noktaSec(ad) {
    document.querySelectorAll('.g-nokta').forEach(function (x) {
      if (x.dataset.gn === ad) x.setAttribute('data-akt', ''); else x.removeAttribute('data-akt');
    });
    if (hud && NOKTA[ad]) {
      hud.innerHTML = '<b>' + NOKTA[ad][0] + '</b><div class="g-cizgi"></div><span>' + NOKTA[ad][1] + '</span>';
    }
    var roz = document.querySelector('[data-grozet]');
    if (roz && NOKTA[ad]) roz.innerHTML = '<b>' + NOKTA[ad][0] + '</b><span>' + NOKTA[ad][1] + '</span>';
  }
  document.querySelectorAll('.g-nokta').forEach(function (n) {
    n.addEventListener('click', function () { noktaSec(n.dataset.gn); });
  });
  /* IO bandı (%38-48) dar kaldığı için kart geç değişiyordu (12 Ağu):
     anlık hesap — ekran ortasını son geçen blok aktiftir. rAF yok,
     kısıtlı görünümlerde de çalışsın. */
  var katlar = document.querySelectorAll('.g-katblok[data-gkat]');
  if (katlar.length) {
    var aktifKat = null;
    var secKat = function () {
      var orta = innerHeight * .45, secilen = katlar[0];
      katlar.forEach(function (b) {
        if (b.getBoundingClientRect().top <= orta) secilen = b;
      });
      if (secilen !== aktifKat) {
        aktifKat = secilen; noktaSec(secilen.dataset.gkat);
        /* 34: okunan kat kartı öne çıkar */
        katlar.forEach(function (b) { if (b === secilen) b.setAttribute('data-akt', ''); else b.removeAttribute('data-akt'); });
      }
    };
    addEventListener('scroll', secKat, { passive: true });
    addEventListener('resize', secKat, { passive: true });
    secKat();
  }

  /* canlı infografikler — görününce dol (eşik düşük!) */
  var ioG = new IntersectionObserver(function (g) {
    g.forEach(function (x) {
      if (!x.isIntersecting) return;
      x.target.querySelectorAll('.g-dol[data-gyuzde]').forEach(function (d) {
        d.style.strokeDashoffset = 283 - 283 * (+d.dataset.gyuzde / 100);
      });
      x.target.querySelectorAll('.g-ciz b[data-gw]').forEach(function (b) {
        b.style.width = b.dataset.gw;
      });
      ioG.unobserve(x.target);
    });
  }, { threshold: .1 });
  document.querySelectorAll('.g-kutu, .g-donutkap').forEach(function (k) {
    if (k.querySelector('[data-gyuzde],[data-gw]')) ioG.observe(k);
  });

  /* 34: tablo satırları kart olur — görsel satırın kendi data-gg'sinden,
     hücre etiketleri tablo başlığından gelir (başlık satırı gizli) */
  document.querySelectorAll('.g-mtab').forEach(function (t) {
    var etk = [].map.call(t.querySelectorAll('.g-mbas span'), function (s) { return s.textContent.trim(); });
    t.querySelectorAll('.g-msatir').forEach(function (s) {
      /* mutlak adres: göreli yol stil dosyasının klasörüne göre çözülüyordu, alt klasörde (GitHub Pages) görsel boş kalıyordu */
      if (s.dataset.gg) s.style.setProperty('--gg', 'url("' + new URL(s.dataset.gg, location.href).href + '")');
      s.querySelectorAll('.g-hucre').forEach(function (h, i) { if (etk[i + 1]) h.setAttribute('data-etiket', etk[i + 1]); });
    });
  });

  /* matris → önizleme */
  var oniz = document.querySelector('[data-gonizle]');
  if (oniz) {
    var oGor = oniz.querySelector('img'), oBas = oniz.querySelector('h4'),
        oAlt = oniz.querySelector('p'), oGit = oniz.querySelector('a');
    document.querySelectorAll('.g-msatir').forEach(function (s) {
      function sec() {
        document.querySelectorAll('.g-msatir').forEach(function (x) {
          if (x === s) x.setAttribute('data-akt', ''); else x.removeAttribute('data-akt');
        });
        if (s.dataset.gg) oGor.src = s.dataset.gg;
        if (s.dataset.gb) oBas.textContent = s.dataset.gb;
        if (s.dataset.ga) oAlt.textContent = s.dataset.ga;
        oGit.href = s.getAttribute('href');
      }
      s.addEventListener('pointerenter', sec);
      s.addEventListener('focus', sec);
    });
  }

  /* soru terminali — daktilo.
     28 Eyl: cevaplar sayfada her sorunun altında durur (<div class="g-syanit" data-gs-yanit="N">, CSS ile gizli) —
     arama motoru okur, Klasik Editör'de düzenlenir. Eski sayfalar için <script data-gsoru-veri> JSON'u hâlâ okunur
     (N'inci .g-sorgu ↔ N'inci veri betiği). */
  var soruVerileri = document.querySelectorAll('script[data-gsoru-veri]');
  var kacir = function (t) { return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };
  document.querySelectorAll('.g-sorgu').forEach(function (kap, ti) {
    var cevapKap = kap.querySelector('[data-gcevap]');
    if (!cevapKap) return;
    var SORU = [];   /* [soru metni, cevap düz metni, cevap HTML'i] */
    if (kap.querySelector('[data-gs-yanit]')) {
      kap.querySelectorAll('.g-ssoru').forEach(function (b) {
        var y = kap.querySelector('[data-gs-yanit="' + b.dataset.gs + '"]');
        var soru = b.textContent.replace(/^\s*›\s*/, '').trim();
        SORU[+b.dataset.gs] = y ? [soru, y.textContent.trim(), y.innerHTML.trim()] : [soru, '', ''];
      });
    } else {
      var soruVeriEl = soruVerileri[ti] || soruVerileri[0];
      if (!soruVeriEl) return;
      try { SORU = JSON.parse(soruVeriEl.textContent).map(function (s) { return [s[0], s[1], s[1]]; }); } catch (e) {}
    }
    var cB = cevapKap.querySelector('b'), cP = cevapKap.querySelector('p'), yaziyor = null;
    function yaz(i) {
      var s = SORU[i]; if (!s) return;
      cB.textContent = s[0];
      if (yaziyor) clearInterval(yaziyor);
      if (AZ) { cP.innerHTML = s[2]; return; }
      /* daktilo düz metin üzerinden yürür (yarım etiket görünmesin); sonunda editördeki biçim (kalın, bağlantı) aynen konur */
      cP.innerHTML = ''; var j = 0, metin = s[1];
      yaziyor = setInterval(function () {
        j += 3;
        if (j >= metin.length) { clearInterval(yaziyor); cP.innerHTML = s[2]; return; }
        cP.innerHTML = kacir(metin.slice(0, j)) + '<span class="g-imlec"></span>';
      }, 14);
      /* zamanlayıcı kısıtlanan görünümler için emniyet */
      setTimeout(function () { if (cP.textContent.length < metin.length) { clearInterval(yaziyor); cP.innerHTML = s[2]; } }, 4000);
    }
    /* ---- MOBİL AKORDİYON (12 Ağu) ----
       Masaüstünde yanıt sağ sütunda durur. Mobilde tek sütuna inince yanıt
       listenin ALTINDA kalıyor, kullanıcı tıkladığını göremiyordu. Mobilde
       yanıt kutusu tıklanan sorunun HEMEN ALTINA taşınır; ikinci dokunuş
       veya × kapatır. */
    var mobil = matchMedia('(max-width:959px)');
    var sorguIc = kap.querySelector('.g-sorgu-ic');
    var liste = kap.querySelector('.g-slistem');
    var acikDgm = null;

    var kapaDgm = document.createElement('button');
    kapaDgm.type = 'button';
    kapaDgm.className = 'g-skapa';
    kapaDgm.setAttribute('aria-label', 'Yanıtı kapat');
    kapaDgm.textContent = '×';
    cevapKap.appendChild(kapaDgm);
    kapaDgm.addEventListener('click', kapat);

    function kapat() {
      if (acikDgm) { acikDgm.removeAttribute('data-akt'); acikDgm.setAttribute('aria-expanded', 'false'); }
      acikDgm = null;
      if (mobil.matches) { cevapKap.hidden = true; if (sorguIc) sorguIc.appendChild(cevapKap); }
    }
    function ac(b) {
      kap.querySelectorAll('.g-ssoru').forEach(function (x) {
        if (x === b) x.setAttribute('data-akt', ''); else { x.removeAttribute('data-akt'); x.setAttribute('aria-expanded', 'false'); }
      });
      acikDgm = b;
      if (mobil.matches) {
        b.setAttribute('aria-expanded', 'true');
        b.insertAdjacentElement('afterend', cevapKap);
        cevapKap.hidden = false;
      }
      yaz(+b.dataset.gs);
    }
    function duzenTazele() {
      if (mobil.matches) {
        /* mobil: seçili soru yoksa yanıt gizli, liste tam görünür */
        if (!acikDgm) { cevapKap.hidden = true; if (sorguIc) sorguIc.appendChild(cevapKap); }
        else acikDgm.insertAdjacentElement('afterend', cevapKap);
      } else {
        cevapKap.hidden = false;
        if (sorguIc) sorguIc.appendChild(cevapKap);
        if (!acikDgm) {
          var ilk = kap.querySelector('.g-ssoru');
          if (ilk) { ilk.setAttribute('data-akt', ''); acikDgm = ilk; yaz(+ilk.dataset.gs); }
        }
      }
    }

    kap.querySelectorAll('.g-ssoru').forEach(function (b) {
      b.setAttribute('aria-expanded', 'false');
      b.addEventListener('click', function () {
        if (mobil.matches && acikDgm === b) { kapat(); return; }  /* ikinci dokunuş kapatır */
        ac(b);
      });
    });
    (mobil.addEventListener ? mobil.addEventListener('change', duzenTazele) : mobil.addListener(duzenTazele));
    duzenTazele();   /* masaüstünde ilk soruyu açar, mobilde hepsi kapalı başlar */
  });

  /* yasal belge — "Bu sayfada" gezgini (scrollspy) */
  var bmenu = document.querySelector('.g-bmenu');
  if (bmenu) {
    var bciftler = [];
    bmenu.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var h = document.getElementById(a.getAttribute('href').slice(1));
      if (h) bciftler.push([h, a]);
    });
    var ioB = new IntersectionObserver(function (g) {
      g.forEach(function (x) {
        if (!x.isIntersecting) return;
        bciftler.forEach(function (c) {
          if (c[0] === x.target) {
            c[1].setAttribute('data-akt', '');
            /* mobil yatay şeritte aktif başlık görünür kalsın (12 Ağu) */
            if (innerWidth < 960) c[1].scrollIntoView({ block: 'nearest', inline: 'center' });
          } else c[1].removeAttribute('data-akt');
        });
      });
    }, { rootMargin: '-18% 0px -72% 0px' });
    bciftler.forEach(function (c) { ioB.observe(c[0]); });
    if (bciftler.length) bciftler[0][1].setAttribute('data-akt', '');
  }
})();
