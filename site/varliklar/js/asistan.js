/* ============================================================
   ÖN BİLGİ ASİSTANI — tarayıcı tarafı
   Veri: window.RC_ASISTAN (render.js → varliklar/js/asistan-dizin.js)
   İki çalışma biçimi:
     - hazır yanıt: saat/adres/randevu/fiyat/acil + sayfa önerisi,
       tamamen cihazda; demo sürümünde ve canli:false iken tek yol budur
     - canlı: asistan.php üzerinden yapay zekâ; ilk mesajdan önce
       ziyaretçiden aktarım onayı alınır
   Çerez, localStorage, sessionStorage KULLANILMAZ (çerez politikası);
   sohbet sayfa kapanınca silinir.
   ============================================================ */
(function () {
  'use strict';
  var V = window.RC_ASISTAN;
  if (!V || !document.body) return;

  /* site kökü: bu betiğin adresinden (…/varliklar/js/asistan.js) çıkarılır */
  var betik = document.currentScript || document.querySelector('script[src*="varliklar/js/asistan.js"]');
  var KOK = betik ? betik.src.split('varliklar/js/')[0] : '/';
  var CANLI = V.canli && !document.body.hasAttribute('data-demo');
  var SINIR_MESAJ = 25, SINIR_KARAKTER = 600, BEKLEME = 1500;

  /* ---------- yardımcılar ---------- */
  function kacir(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  /* karşılaştırma için: küçük harf, Türkçe harfler sadeleşir, noktalama gider */
  function sade(s) {
    return String(s).toLocaleLowerCase('tr')
      .replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u')
      .replace(/[âà]/g, 'a').replace(/[îì]/g, 'i').replace(/[ûù]/g, 'u')
      .replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function bag(ad, yol) { return '[' + ad + '](/' + yol.replace(/^\//, '') + ')'; }

  /* yanıt metnini güvenli HTML'e çevirir: yalnız [ad](/site-ici-yol/) bağlantı olur */
  function bicimle(metin) {
    var satirlar = kacir(metin).split(/\n+/), html = '', liste = false;
    satirlar.forEach(function (s) {
      s = s.trim(); if (!s) return;
      s = s.replace(/\[([^\]]{1,80})\]\((\/[a-z0-9\-\/#]*)\)/g, function (_, ad, yol) {
        return '<a href="' + KOK + yol.slice(1) + '">' + ad + '</a>';
      }).replace(/\*\*([^*]{1,80})\*\*/g, '<b>$1</b>');
      var madde = /^[-•]\s+/.test(s);
      if (madde && !liste) { html += '<ul>'; liste = true; }
      if (!madde && liste) { html += '</ul>'; liste = false; }
      html += madde ? '<li>' + s.replace(/^[-•]\s+/, '') + '</li>' : '<p>' + s + '</p>';
    });
    return html + (liste ? '</ul>' : '');
  }

  /* ---------- hazır yanıtlar ---------- */
  var SAAT = V.saatler.map(function (x) { return x[0] + ': ' + x[1]; }).join('\n- ');
  var KURAL = [
    { ad: 'acil', rx: /(nefes al|nefes darl|bogul|dilim sis|dudagim sis|yuzum sis|hizla sis|gorme bozuk|gorme kayb|goremiyorum|bulanik gor|bayil|yuksek ates|morar\w* yayil|beyazla|acil durum)/,
      yanit: 'Tarif ettiğiniz durum acil değerlendirme gerektirebilir. Lütfen beklemeden **112**\'yi arayın ya da en yakın acil servise gidin.\nYakın zamanda burada bir uygulama yaptırdıysanız ayrıca ' + V.tel + ' numarasından hekime haber verin.' },
    { ad: 'yapay', rx: /(yapay zeka|robot|bot mu|insan mi|gercek kisi|kiminle konusuyorum)/,
      yanit: 'Ben bir yapay zekâ asistanıyım; muayenehane çalışanı ya da hekim değilim. Sitedeki bilgilerle genel sorularınızı yanıtlar, sizi ilgili sayfaya yönlendiririm. Tanı koymam; kişisel değerlendirme için ' + bag('muayene', 'uygulamalar/hekim-muayenesi/') + ' gerekir.' },
    { ad: 'yapilmaz', rx: /(sac ekimi|sac ektir|epilasyon|ameliyat|cerrahi|burun estetigi|goz kapagi estetigi|meme|liposuction|liposaksiyon|ben aldir|ben aldirmak|et beni|sigil)/,
      yanit: 'Bu işlem muayenehanede yapılmıyor. Cerrahi girişimler, saç ekimi, lazer epilasyon ve ben ya da deri oluşumlarının çıkarılması kapsam dışındadır; nedenlerini ve hangi uzmanlık dalına başvurulabileceğini ' + bag('Kapsamımızın sınırı', 'yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/') + ' sayfasında bulabilirsiniz.' },
    { ad: 'fiyat', rx: /(fiyat|ucret|kac para|kac tl|ne kadar tutar|ne kadar ode|indirim|kampanya|taksit|paket)/,
      yanit: 'Fiyat bilgisi sitede ve bu sohbette paylaşılmıyor. Ücret, muayenede size uygun görülen plana göre konuşulur. Ön bilgi için ' + V.tel + ' numarasını arayabilir ya da ' + bag('iletişim', 'iletisim/') + ' sayfasından yazabilirsiniz.' },
    { ad: 'saat', rx: /(calisma saat|saatleriniz|saat kaca|kaca kadar acik|acik mi|acik misiniz|kacta|kapaniyor|kapali mi|pazar|cumartesi|hafta ?sonu|mesai|bayram)/,
      yanit: 'Çalışma saatleri:\n- ' + SAAT + '\nRandevuyla çalışılır; gelmeden önce ' + V.tel + ' numarasından saat almanız önerilir.' },
    { ad: 'adres', rx: /(adres|nerede|nerde|konum|yol tarifi|nasil gelir|nasil ulas|otopark|park yeri|metro|marmaray|metrobus|harita)/,
      yanit: 'Muayenehane adresi: **' + V.adres + '**.\nUlaşım seçenekleri ve harita ' + bag('iletişim', 'iletisim/') + ' sayfasında yer alıyor.' },
    { ad: 'iletisim', rx: /(telefon|numara|arayabilir|whatsapp|watsap|wp|e ?posta|mail|ulasabilir)/,
      yanit: 'Telefon ve WhatsApp: **' + V.tel + '**\nE-posta: ' + V.eposta + '\nİsterseniz ' + bag('iletişim', 'iletisim/') + ' sayfasındaki formdan da yazabilirsiniz.' },
    { ad: 'randevu', rx: /(randevu|muayene olmak|gelmek istiyorum|kayit olmak|gorusme ayarla)/,
      yanit: 'Randevu için ' + V.tel + ' numarasını arayabilir, aynı numaradan WhatsApp\'a yazabilir ya da ' + bag('iletişim', 'iletisim/') + ' sayfasındaki formu doldurabilirsiniz. Her süreç önce ' + bag('hekim muayenesi', 'uygulamalar/hekim-muayenesi/') + ' ile başlar.' },
    { ad: 'selam', rx: /^(merhaba|merhabalar|selam|selamlar|iyi gunler|gunaydin|iyi aksamlar|hey)\b/,
      yanit: 'Merhaba. Uygulamalar, bölgeler, cilt sorunları, randevu ya da ulaşım hakkında sorunuzu yazabilirsiniz.' },
    { ad: 'tesekkur', rx: /^(tesekkur|tesekkurler|sagol|sagolun|eyvallah|tamam)\b/,
      yanit: 'Rica ederim. Başka bir sorunuz olursa buradayım; kişisel değerlendirme için ' + V.tel + ' numarasından randevu alabilirsiniz.' },
  ];

  /* sayfa dizininden en ilgili üç sayfa */
  var DIZIN = V.sayfalar.map(function (s) {
    return { ad: s[0], yol: s[1], ac: s[2], ifade: [sade(s[0])].concat(s[3] ? s[3].split('|').map(sade) : []) };
  });
  function sayfaBul(soru) {
    var q = ' ' + sade(soru) + ' ', kelime = q.trim().split(' ').filter(function (k) { return k.length > 3; });
    return DIZIN.map(function (d) {
      var puan = 0;
      d.ifade.forEach(function (f, i) {
        if (!f) return;
        if (q.indexOf(' ' + f + ' ') > -1 || (f.length > 5 && q.indexOf(f) > -1)) puan += 4 + f.split(' ').length * 3;
        else if (i === 0) f.split(' ').forEach(function (p) {
          if (p.length < 4) return;
          kelime.forEach(function (k) { if (k.slice(0, 5) === p.slice(0, 5)) puan += 2; });
        });
      });
      if (d.yol.indexOf('uygulamalar/') === 0 || d.yol.indexOf('cilt-sorunlari/') === 0) puan += puan ? 0.5 : 0;
      return { d: d, puan: puan };
    }).filter(function (x) { return x.puan > 0; })
      .sort(function (a, b) { return b.puan - a.puan; }).slice(0, 3).map(function (x) { return x.d; });
  }

  function hazirYanit(soru) {
    var q = sade(soru);
    for (var i = 0; i < KURAL.length; i++) if (KURAL[i].rx.test(q)) return KURAL[i].yanit;
    var bul = sayfaBul(soru);
    if (bul.length) {
      return 'Sorunuzla ilgili şu sayfalar yol gösterebilir:\n' +
        bul.map(function (d) { return '- ' + bag(d.ad, d.yol) + (d.ac ? ' — ' + d.ac.replace(/\s+\S*$/, '') + '…' : ''); }).join('\n') +
        '\nSize uygun olup olmadığı ise muayenede değerlendirilir.';
    }
    return 'Bu soruya hazır bir yanıtım yok. ' + bag('Soru ve yanıtlar', 'sikca-sorulan-sorular/') +
      ' sayfasına göz atabilir ya da ' + V.tel + ' numarasından doğrudan sorabilirsiniz.';
  }

  /* ---------- arayüz ---------- */
  var ik = {
    sor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5h16v10H9l-5 4z"/><path d="M9 9.5h6M9 12.5h4"/></svg>',
    gonder: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10h11M11 5.5 15.5 10 11 14.5"/></svg>',
    kapa: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15"/></svg>',
    wa: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l1.1-3.6A7 7 0 1 1 6.9 16z"/><path d="M7.4 7.6c.3 2.6 2.4 4.7 5 5l.9-1.4 1.5.7-.2 1.2c-2.9.4-6.5-2.6-6.9-6l1.1-.2z" stroke-width="1.2"/></svg>',
  };
  var ONERI = ['Dövme silme nasıl ilerliyor?', 'Botoks ile dolgu arasındaki fark ne?', 'Saç dökülmesinde nereden başlanır?', 'Çalışma saatleriniz nedir?'];

  var kok = document.createElement('div');
  kok.className = 'asis';
  kok.innerHTML =
    '<button class="asis__ac" type="button" aria-expanded="false" aria-controls="asis-panel" data-asistan-ac>' +
      '<span class="asis__ac-ikon">' + ik.sor + '</span>' +
      '<span class="asis__ac-yazi"><b>Sorunuzu yazın</b><small>Ön bilgi asistanı</small></span>' +
    '</button>' +
    '<section class="asis__panel" id="asis-panel" role="dialog" aria-label="Ön bilgi asistanı" hidden>' +
      '<header class="asis__bas">' +
        '<div><p class="asis__ad">Ön bilgi asistanı</p><p class="asis__alt">Yapay zekâ · tanı koymaz · acilde 112</p></div>' +
        '<div class="asis__dugmeler">' +
          '<a class="asis__ikon" href="https://wa.me/' + V.waHam + '" target="_blank" rel="noopener" data-asis-wa aria-label="Sorunuzu WhatsApp\'tan hekime iletin" title="WhatsApp\'tan iletin">' + ik.wa + '</a>' +
          '<button class="asis__ikon" type="button" data-asis-kapa aria-label="Asistanı kapat">' + ik.kapa + '</button>' +
        '</div>' +
      '</header>' +
      '<div class="asis__akis" role="log" aria-live="polite" aria-relevant="additions"></div>' +
      '<form class="asis__form" novalidate>' +
        '<label class="gizli" for="asis-girdi">Sorunuz</label>' +
        '<textarea id="asis-girdi" rows="1" maxlength="' + SINIR_KARAKTER + '" placeholder="Örneğin: göz altı morluğu için ne yapılıyor?" autocomplete="off"></textarea>' +
        '<button class="asis__gonder" type="submit" aria-label="Gönder">' + ik.gonder + '</button>' +
      '</form>' +
      '<p class="asis__not">' + (CANLI
        ? 'Yanıtlar yapay zekâ ile üretilir ve hata içerebilir. Sağlık, kimlik ya da iletişim bilgisi yazmayın.'
        : 'Bu sürümde yanıtlar sitedeki hazır bilgilerden gelir; yazdıklarınız cihazınızdan çıkmaz.') + '</p>' +
    '</section>';
  document.body.appendChild(kok);

  var acDugme = kok.querySelector('.asis__ac'), panel = kok.querySelector('.asis__panel'),
      sohbetAlani = kok.querySelector('.asis__akis'), form = kok.querySelector('.asis__form'),
      girdi = kok.querySelector('textarea'), waBag = kok.querySelector('[data-asis-wa]');
  var gecmis = [], sonSoruAni = 0, sayac = 0, onay = !CANLI, bekliyor = false, sonAcan = null;

  function ekle(rol, html) {
    var d = document.createElement('div');
    d.className = 'asis__m asis__m--' + rol;
    d.innerHTML = html;
    sohbetAlani.appendChild(d);
    sohbetAlani.scrollTop = sohbetAlani.scrollHeight;
    return d;
  }
  function karsila() {
    ekle('a', '<p>Merhaba, ben ' + kacir(V.marka) + ' muayenehanesinin ön bilgi asistanıyım. Uygulamalar, bölgeler, randevu ve ulaşımla ilgili genel sorularınızı yanıtlayabilirim; tanı koymam, fiyat vermem.</p>');
    var o = ekle('oneri', ONERI.map(function (s) { return '<button type="button">' + kacir(s) + '</button>'; }).join(''));
    o.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      o.remove(); sor(b.textContent);
    });
  }
  function onayIste(sonra) {
    var d = ekle('onay',
      '<p><b>Göndermeden önce:</b> Yazdığınız mesaj, yanıt üretilebilmesi için ' + kacir(V.saglayici) + ' şirketinin ' + kacir(V.ulke) +
      '\'deki sunucularına iletilir. Muayenehane sohbeti kaydetmez. Lütfen sağlık, kimlik ya da iletişim bilgisi yazmayın. Ayrıntılar ' +
      '<a href="' + KOK + 'yasal/kvkk-aydinlatma-metni/">KVKK aydınlatma metninde</a>.</p>' +
      '<div class="asis__onay-dugme"><button type="button" data-evet>Anladım, gönder</button><button type="button" data-hayir>Hazır yanıtla devam et</button></div>');
    d.addEventListener('click', function (e) {
      if (e.target.closest('[data-evet]')) { onay = true; d.remove(); sonra(true); }
      else if (e.target.closest('[data-hayir]')) { d.remove(); sonra(false); }
    });
  }

  function ac() {
    sonAcan = document.activeElement;
    panel.hidden = false;
    kok.classList.add('asis--acik');
    document.querySelectorAll('[data-asistan-ac]').forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
    if (!sohbetAlani.children.length) karsila();
    setTimeout(function () { girdi.focus(); }, 60);
  }
  function kapa() {
    panel.hidden = true;
    kok.classList.remove('asis--acik');
    document.querySelectorAll('[data-asistan-ac]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    if (sonAcan && sonAcan.focus) sonAcan.focus();
  }
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-asistan-ac]')) { e.preventDefault(); panel.hidden ? ac() : kapa(); }
    else if (e.target.closest('[data-asis-kapa]')) kapa();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) kapa(); });

  /* textarea kendi yüksekliğini ayarlar; Enter gönderir, Shift+Enter yeni satır */
  girdi.addEventListener('input', function () {
    girdi.style.height = 'auto'; girdi.style.height = Math.min(girdi.scrollHeight, 120) + 'px';
  });
  girdi.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit')); }
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var s = girdi.value.trim();
    if (!s || bekliyor) return;
    girdi.value = ''; girdi.style.height = 'auto';
    sor(s);
  });

  function sor(soru) {
    var suan = Date.now();
    if (suan - sonSoruAni < BEKLEME) return;
    sonSoruAni = suan;
    soru = soru.slice(0, SINIR_KARAKTER);
    sohbetAlani.querySelectorAll('.asis__m--oneri').forEach(function (o) { o.remove(); });
    ekle('k', '<p>' + kacir(soru) + '</p>');
    waBag.href = 'https://wa.me/' + V.waHam + '?text=' + encodeURIComponent('Merhaba, sitedeki asistana şunu sordum: ' + soru);
    if (++sayac > SINIR_MESAJ) {
      ekle('a', bicimle('Bu sayfadaki soru sınırına ulaştınız. Devam etmek için ' + V.tel + ' numarasını arayabilir ya da WhatsApp\'tan yazabilirsiniz.'));
      return;
    }
    var q = sade(soru);
    /* acil ve yapay zekâ sorusu her durumda cihazda yanıtlanır */
    if (!CANLI || KURAL[0].rx.test(q) || KURAL[1].rx.test(q)) return yanitla(hazirYanit(soru), soru);
    if (!onay) return onayIste(function (evet) { evet ? uzaktan(soru) : yanitla(hazirYanit(soru), soru); });
    uzaktan(soru);
  }
  function yanitla(metin, soru) {
    gecmis.push({ rol: 'k', metin: soru }, { rol: 'a', metin: metin });
    ekle('a', bicimle(metin));
  }
  function uzaktan(soru) {
    bekliyor = true;
    var yaziyor = ekle('bekle', '<span></span><span></span><span></span><span class="gizli">Yanıt hazırlanıyor</span>');
    var gidecek = gecmis.slice(-6).concat([{ rol: 'k', metin: soru }]);
    var iptal = window.AbortController ? new AbortController() : null;
    var sure = setTimeout(function () { if (iptal) iptal.abort(); }, 30000);
    fetch(KOK + 'asistan.php', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin',
      body: JSON.stringify({ mesajlar: gidecek, sayfa: document.title.slice(0, 120) }),
      signal: iptal ? iptal.signal : undefined,
    }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (x) {
        if (!x.ok || !x.j || typeof x.j.yanit !== 'string') throw new Error((x.j && x.j.hata) || 'yanit');
        yanitla(x.j.yanit, soru);
      })
      .catch(function (h) {
        var sinir = /sinir/.test(String(h && h.message));
        yanitla((sinir ? 'Şu anda çok sayıda soru geliyor; ' : 'Yapay zekâ bağlantısı kurulamadı; ') + 'hazır bilgilerle yanıtlıyorum.\n' + hazirYanit(soru), soru);
      })
      .then(function () { clearTimeout(sure); yaziyor.remove(); bekliyor = false; });
  }
})();
