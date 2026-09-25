/* ============================================================
   ÖN BİLGİ ASİSTANI — tarayıcı tarafı
   Veri: window.RC_ASISTAN (render.js → varliklar/js/asistan-dizin.js)
   İki çalışma biçimi:
     - hazır yanıt: saat/adres/randevu/fiyat/acil + sayfa önerisi,
       tamamen cihazda; demo sürümünde ve canli:false iken tek yol budur
     - canlı: asistan.php üzerinden yapay zekâ; ilk mesajdan önce
       ziyaretçiden aktarım onayı alınır
   Önerilen sayfalar görselli kart, konum soruları harita kartı olarak açılır.
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

  /* ---------- sayfa dizini: [ad, yol, açıklama, halk dili, görsel, tür, başlıklar] ---------- */
  var DIZIN = V.sayfalar.map(function (s) {
    return { ad: s[0], yol: s[1], ac: s[2], gorsel: s[4], tur: s[5],
      ifade: [sade(s[0])].concat(s[3] ? s[3].split('|').map(sade) : []),
      baslik: ' ' + (s[6] || '') + ' ' };
  });
  var YOLDAN = {};
  DIZIN.forEach(function (d) { YOLDAN[d.yol] = d; });
  function sec(yollar) { return yollar.map(function (y) { return YOLDAN[y]; }).filter(Boolean); }

  /* Türkçe ekler için kök eşleşmesi: "altım" ~ "altı", "dişlerim" ~ "diş" */
  var DOLGU = ' icin nasil neden nedir hangi kadar olur olsa yapiliyor yapilir musunuz misiniz istiyorum benim bana sonra once daha gibi oluyor yapiyor sizde burada acaba mumkun ediyor var yok cok az ';
  function kokUyar(p, k) {
    if (p.length < 3 || k.length < 3) return false;
    if (k.indexOf(p.slice(0, Math.min(p.length, 5))) === 0) return true;
    /* sorudaki sözcük kısa kök olabilir: "kas" ~ "kasi" değil, "cene" ~ "cenemi" gibi */
    return k.length >= 4 && p.indexOf(k.slice(0, Math.min(k.length, 5))) === 0 && k.length >= p.length - 1;
  }
  function sayfaBul(soru) {
    /* ünsüz yumuşaması: cildim → cilt, dudağım → dudak (yalnız sık geçen kökler) */
    var q = (' ' + sade(soru) + ' ').replace(/ cild/g, ' cilt').replace(/ dudag/g, ' dudak').replace(/ yanag/g, ' yanak').replace(/ ayag/g, ' ayak');
    var kelime = q.trim().split(' ').filter(function (k) { return k.length > 2 && DOLGU.indexOf(' ' + k + ' ') < 0; });
    return DIZIN.map(function (d) {
      var puan = 0;
      d.ifade.forEach(function (f, i) {
        if (!f) return;
        if (q.indexOf(' ' + f + ' ') > -1 || (f.length > 5 && q.indexOf(f) > -1)) { puan += 4 + f.split(' ').length * 3; return; }
        var parca = f.split(' ').filter(function (p) { return p.length > 2; });
        var tutan = parca.filter(function (p) { return kelime.some(function (k) { return kokUyar(p, k); }); }).length;
        if (i === 0) puan += tutan * 2;                                                   /* sayfa adı: tutan her sözcük */
        else if (parca.length && tutan === parca.length) puan += 2 + parca.length * 2;    /* gündelik ifade: hepsi tutmalı */
      });
      /* sayfanın kendi ara başlıklarında geçen sözcükler de sayılır (siteyi tanıma) */
      var ek = 0;
      kelime.forEach(function (k) { if (k.length > 3 && d.baslik.indexOf(' ' + k.slice(0, Math.min(k.length, 5))) > -1) ek += 1; });
      puan += Math.min(ek, 3);
      if (puan && (d.tur === 'Uygulama' || d.tur === 'Cilt sorunu')) puan += 0.5;
      return { d: d, puan: puan };
    }).filter(function (x) { return x.puan >= 3; })
      .sort(function (a, b) { return b.puan - a.puan; })
      /* en iyi eşleşmenin yarısına ulaşamayan zayıf öneriler gösterilmez */
      .filter(function (x, i, l) { return x.puan >= l[0].puan * 0.5; })
      .slice(0, 3).map(function (x) { return x.d; });
  }

  /* ---------- hazır yanıtlar ---------- */
  var SAAT = V.saatler.map(function (x) { return x[0] + ': ' + x[1]; }).join('\n- ');
  var KURAL = [
    { ad: 'acil', rx: /(nefes al|nefes darl|bogul|dilim sis|dudagim sis|yuzum sis|hizla sis|gorme bozuk|gorme kayb|goremiyorum|bulanik gor|bayil|yuksek ates|morar\w* yayil|beyazla|acil durum)/,
      m: 'Tarif ettiğiniz durum acil değerlendirme gerektirebilir. Lütfen beklemeden **112**\'yi arayın ya da en yakın acil servise gidin.\nYakın zamanda burada bir uygulama yaptırdıysanız ayrıca ' + V.tel + ' numarasından hekime haber verin.' },
    { ad: 'yapay', rx: /(yapay zeka|robot|bot mu|insan mi|gercek kisi|kiminle konusuyorum)/,
      m: 'Ben bir yapay zekâ asistanıyım; muayenehane çalışanı ya da hekim değilim. Sitedeki bilgilerle genel sorularınızı yanıtlar, sizi ilgili sayfaya yönlendiririm. Kişisel değerlendirme için muayene gerekir.',
      k: ['uygulamalar/hekim-muayenesi/'] },
    { ad: 'yapilmaz', rx: /(sac ekimi|sac ektir|epilasyon|ameliyat|cerrahi|burun estetigi|goz kapagi estetigi|meme|liposuction|liposaksiyon|ben aldir|et beni|sigil)/,
      m: 'Bu işlem muayenehanede yapılmıyor. Cerrahi girişimler, saç ekimi, lazer epilasyon ve ben ya da deri oluşumlarının çıkarılması kapsam dışındadır; nedenlerini ve hangi uzmanlık dalına başvurulabileceğini aşağıdaki sayfada bulabilirsiniz.',
      k: ['yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/'] },
    { ad: 'fiyat', rx: /(fiyat|ucret|kac para|kac tl|ne kadar tutar|ne kadar ode|indirim|kampanya|taksit|paket)/,
      m: 'Fiyat bilgisi sitede ve bu sohbette paylaşılmıyor. Ücret, muayenede size uygun görülen plana göre konuşulur. Ön bilgi için ' + V.tel + ' numarasını arayabilir ya da WhatsApp\'tan yazabilirsiniz.' },
    { ad: 'hizmet', rx: /(hizmet|neler yapiyor|neler yapilir|neler var|hangi uygulamalar|uygulamalariniz|tedavileriniz|islemleriniz|neler sunuyor)/,
      m: 'Muayenehanede enjeksiyon uygulamaları, cihaz ve lazer uygulamaları, saç sağlığı ve hekim değerlendirmesi başlıklarında 22 uygulama yapılıyor. Öne çıkanlardan bazıları aşağıda; tamamı ' + bag('Uygulamalar', 'uygulamalar/') + ' sayfasında.',
      vitrin: true },
    { ad: 'saat', rx: /(calisma saat|saatleriniz|saat kaca|kaca kadar acik|acik mi|acik misiniz|kacta|kapaniyor|kapali mi|pazar|cumartesi|hafta ?sonu|mesai|bayram)/,
      m: 'Çalışma saatleri:\n- ' + SAAT + '\nRandevuyla çalışılır; gelmeden önce ' + V.tel + ' numarasından saat almanız önerilir.' },
    { ad: 'adres', rx: /(adres|nerede|nerde|konum|yol tarifi|nasil gelir|nasil ulas|otopark|park yeri|metro|marmaray|metrobus|harita|lokasyon)/,
      m: 'Muayenehanenin adresi: **' + V.adres + '**. Haritayı buradan açabilir ya da yol tarifi alabilirsiniz; ulaşım seçenekleri ' + bag('iletişim', 'iletisim/') + ' sayfasında.',
      harita: true },
    { ad: 'iletisim', rx: /(telefon|numara|arayabilir|whatsapp|watsap|wp|e ?posta|mail|ulasabilir|iletisim)/,
      m: 'Telefon ve WhatsApp: **' + V.tel + '**\nE-posta: ' + V.eposta + '\nPanelin üstündeki düğmelerle doğrudan arayabilir ya da WhatsApp\'tan yazabilirsiniz.' },
    { ad: 'randevu', rx: /(randevu|muayene olmak|gelmek istiyorum|kayit olmak|gorusme ayarla)/,
      m: 'Randevu için ' + V.tel + ' numarasını arayabilir, aynı numaradan WhatsApp\'a yazabilir ya da ' + bag('iletişim', 'iletisim/') + ' sayfasındaki formu doldurabilirsiniz. Her süreç önce hekim muayenesiyle başlar.',
      k: ['uygulamalar/hekim-muayenesi/', 'hazirlik-listesi/'] },
    { ad: 'selam', rx: /^(merhaba|merhabalar|selam|selamlar|iyi gunler|gunaydin|iyi aksamlar|hey)$/,
      m: 'Merhaba. Uygulamalar, bölgeler, cilt sorunları, randevu ya da ulaşım hakkında sorunuzu yazabilirsiniz.' },
    { ad: 'tesekkur', rx: /^(tesekkur|tesekkurler|sagol|sagolun|eyvallah|tamam)/,
      m: 'Rica ederim. Başka bir sorunuz olursa buradayım; kişisel değerlendirme için ' + V.tel + ' numarasından randevu alabilirsiniz.' },
  ];

  function ilkKural(q) {
    for (var i = 0; i < KURAL.length; i++) if (KURAL[i].rx.test(q)) return KURAL[i].ad;
    return '';
  }

  /* yanıt nesnesi: { m: metin, k: [dizin kaydı], harita: bool } */
  function hazirYanit(soru) {
    var q = sade(soru);
    for (var i = 0; i < KURAL.length; i++) {
      var K = KURAL[i];
      if (!K.rx.test(q)) continue;
      return { m: K.m, k: K.vitrin ? sec(V.vitrin) : sec(K.k || []), harita: !!K.harita };
    }
    var bul = sayfaBul(soru);
    if (bul.length) return { m: 'Sorunuzla ilgili sayfalar aşağıda. Size uygun olup olmadığı ise muayenede değerlendirilir.', k: bul };
    return { m: 'Bu soruya hazır bir yanıtım yok. Soru ve yanıtlar sayfasına göz atabilir ya da ' + V.tel + ' numarasından doğrudan sorabilirsiniz.',
      k: sec(['sikca-sorulan-sorular/']) };
  }

  /* ---------- simgeler ---------- */
  var ik = {
    sor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5h16v10H9l-5 4z"/><path d="M9 9.5h6M9 12.5h4"/></svg>',
    gonder: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10h11M11 5.5 15.5 10 11 14.5"/></svg>',
    kapa: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15"/></svg>',
    tel: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M6.4 3.2 8 6.3 6.4 8c.9 1.9 2.4 3.4 4.3 4.3l1.7-1.6 3.1 1.6-.4 2.6c-.1.7-.7 1.2-1.4 1.2C8.2 16.1 3.9 11.8 3.2 6.3c-.1-.7.4-1.4 1.2-1.5z"/></svg>',
    wa: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l1.1-3.6A7 7 0 1 1 6.9 16z"/><path d="M7.4 7.6c.3 2.6 2.4 4.7 5 5l.9-1.4 1.5.7-.2 1.2c-2.9.4-6.5-2.6-6.9-6l1.1-.2z" stroke-width="1.2"/></svg>',
    pin: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M10 17.5s5.5-4.9 5.5-9a5.5 5.5 0 1 0-11 0c0 4.1 5.5 9 5.5 9z"/><circle cx="10" cy="8.4" r="2.1"/></svg>',
    posta: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><rect x="2.6" y="4.4" width="14.8" height="11.2" rx="1.6"/><path d="M2.9 5.4 10 10.6l7.1-5.2"/></svg>',
    ok: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',
  };
  var ONERI = ['Hizmetleriniz neler?', 'Dövme silme nasıl ilerliyor?', 'Saç dökülmesinde nereden başlanır?', 'Muayenehane nerede?'];

  /* ---------- kart ve harita ---------- */
  function kartlar(liste) {
    if (!liste || !liste.length) return '';
    return '<div class="asis__kartlar' + (liste.length > 2 ? ' asis__kartlar--kay' : '') + '">' + liste.map(function (d) {
      return '<a class="asis__kart" href="' + KOK + d.yol + '">' +
        (d.gorsel ? '<span class="asis__kart-g"><img src="' + KOK + d.gorsel + '" alt="" loading="lazy" decoding="async"></span>' : '') +
        '<span class="asis__kart-i"><small>' + kacir(d.tur) + '</small><b>' + kacir(d.ad) + '</b>' +
        (d.ac ? '<em>' + kacir(d.ac) + '</em>' : '') + '<i>İncele ' + ik.ok + '</i></span></a>';
    }).join('') + '</div>';
  }
  function haritaKarti() {
    return '<div class="asis__harita">' +
      '<div class="asis__harita-alan" data-asis-harita><button type="button" class="asis__harita-ac">' + ik.pin +
        '<span>Haritayı göster</span><small>Google Haritalar yüklenir</small></button></div>' +
      '<div class="asis__harita-alt"><p>' + ik.pin + '<span>' + kacir(V.adres) + '</span></p>' +
      '<div><a href="' + V.yolTarifi + '" target="_blank" rel="noopener">Yol tarifi al</a>' +
      '<a href="' + V.haritaAc + '" target="_blank" rel="noopener">Haritalar\'da aç</a></div></div></div>';
  }

  /* ---------- arayüz ---------- */
  var kok = document.createElement('div');
  kok.className = 'asis';
  kok.innerHTML =
    '<button class="asis__ac" type="button" aria-expanded="false" aria-controls="asis-panel" data-asistan-ac>' +
      '<span class="asis__ac-ikon">' + ik.sor + '</span>' +
      '<span class="asis__ac-yazi"><b>Sorunuzu yazın</b><small>Ön bilgi asistanı</small></span>' +
    '</button>' +
    '<section class="asis__panel" id="asis-panel" role="dialog" aria-label="Ön bilgi asistanı" hidden>' +
      '<header class="asis__bas">' +
        '<div><p class="asis__ad">Ön bilgi asistanı</p><p class="asis__alt">' + kacir(V.hekim) + ' · ' + kacir(V.semt) + '</p></div>' +
        '<button class="asis__ikon" type="button" data-asis-kapa aria-label="Asistanı kapat">' + ik.kapa + '</button>' +
      '</header>' +
      '<nav class="asis__hizli" aria-label="Hızlı iletişim">' +
        '<a href="tel:' + V.telHam + '">' + ik.tel + '<span>Ara</span></a>' +
        '<a href="https://wa.me/' + V.waHam + '" target="_blank" rel="noopener" data-asis-wa>' + ik.wa + '<span>WhatsApp</span></a>' +
        '<a href="' + V.yolTarifi + '" target="_blank" rel="noopener">' + ik.pin + '<span>Yol tarifi</span></a>' +
        '<a href="' + KOK + 'iletisim/">' + ik.posta + '<span>İletişim</span></a>' +
      '</nav>' +
      '<div class="asis__akis" role="log" aria-live="polite" aria-relevant="additions"></div>' +
      '<form class="asis__form" novalidate>' +
        '<label class="gizli" for="asis-girdi">Sorunuz</label>' +
        '<textarea id="asis-girdi" rows="1" maxlength="' + SINIR_KARAKTER + '" placeholder="Sorunuzu yazın…" autocomplete="off"></textarea>' +
        '<button class="asis__gonder" type="submit" aria-label="Gönder">' + ik.gonder + '</button>' +
      '</form>' +
      '<p class="asis__not">' + (CANLI
        ? 'Yanıtlar yapay zekâ ile üretilir, hata içerebilir ve muayenenin yerini tutmaz. Sağlık, kimlik ya da iletişim bilgisi yazmayın.'
        : 'Yanıtlar sitedeki bilgilerden gelir ve muayenenin yerini tutmaz; yazdıklarınız cihazınızdan çıkmaz.') + '</p>' +
    '</section>';
  document.body.appendChild(kok);

  var panel = kok.querySelector('.asis__panel'),
      sohbetAlani = kok.querySelector('.asis__akis'), form = kok.querySelector('.asis__form'),
      girdi = kok.querySelector('textarea'), waBag = kok.querySelector('[data-asis-wa]');
  var gecmis = [], sonSoruAni = 0, sayac = 0, onay = !CANLI, bekliyor = false, sonAcan = null;

  function ekle(rol, html) {
    var d = document.createElement('div');
    d.className = 'asis__m asis__m--' + rol;
    d.innerHTML = html;
    sohbetAlani.appendChild(d);
    /* yeni yanıtın başı görünsün (kartlar uzun olabilir) */
    sohbetAlani.scrollTop = rol === 'a' ? Math.max(0, d.offsetTop - 12) : sohbetAlani.scrollHeight;
    return d;
  }
  function karsila() {
    ekle('a', '<p>Merhaba, ben ' + kacir(V.marka) + ' muayenehanesinin ön bilgi asistanıyım. Uygulamalar, bölgeler, cilt sorunları, randevu ve ulaşımla ilgili sorularınızı yanıtlayıp sizi doğru sayfaya yönlendirebilirim.</p>');
    ekle('oneri', ONERI.map(function (s) { return '<button type="button">' + kacir(s) + '</button>'; }).join(''));
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
    var t = e.target;
    if (t.closest('[data-asistan-ac]')) { e.preventDefault(); panel.hidden ? ac() : kapa(); }
    else if (t.closest('[data-asis-kapa]')) kapa();
    else if (t.closest('.asis__m--oneri button')) sor(t.closest('button').textContent);
    else if (t.closest('.asis__harita-ac')) {
      /* harita yalnız istenince yüklenir (Google'a bağlantı ziyaretçinin tıklamasıyla kurulur) */
      var alan = t.closest('[data-asis-harita]');
      alan.innerHTML = '<iframe src="' + V.haritaGomu + '" title="' + kacir(V.marka) + ' konum haritası" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) kapa(); });

  /* textarea kendi yüksekliğini ayarlar; Enter gönderir, Shift+Enter yeni satır */
  girdi.addEventListener('input', function () {
    girdi.style.height = 'auto'; girdi.style.height = Math.min(girdi.scrollHeight, 120) + 'px';
    girdi.style.overflowY = girdi.scrollHeight > 120 ? 'auto' : 'hidden';
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
      yanitla({ m: 'Bu sayfadaki soru sınırına ulaştınız. Devam etmek için ' + V.tel + ' numarasını arayabilir ya da WhatsApp\'tan yazabilirsiniz.' }, soru);
      return;
    }
    var q = sade(soru);
    /* acil, yapay zekâ ve konum soruları her durumda cihazda yanıtlanır */
    if (!CANLI || /^(acil|yapay|adres)$/.test(ilkKural(q))) return yanitla(hazirYanit(soru), soru);
    if (!onay) return onayIste(function (evet) { evet ? uzaktan(soru) : yanitla(hazirYanit(soru), soru); });
    uzaktan(soru);
  }
  function yanitla(y, soru) {
    gecmis.push({ rol: 'k', metin: soru }, { rol: 'a', metin: y.m });
    ekle('a', bicimle(y.m) + (y.harita ? haritaKarti() : '') + kartlar(y.k));
  }
  /* yapay zekâ yanıtındaki site içi bağlantılar kart olarak da gösterilir */
  function bagKartlari(metin) {
    var gorulen = {}, liste = [];
    String(metin).replace(/\]\(\/([a-z0-9\-\/]+?)\/?(?:#[^)]*)?\)/g, function (_, yol) {
      var d = YOLDAN[yol.replace(/\/?$/, '/')];
      if (d && !gorulen[d.yol] && liste.length < 3) { gorulen[d.yol] = 1; liste.push(d); }
    });
    return liste;
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
        yaziyor.remove();
        yanitla({ m: x.j.yanit, k: bagKartlari(x.j.yanit) }, soru);
      })
      .catch(function (h) {
        yaziyor.remove();
        var y = hazirYanit(soru), sinir = /sinir/.test(String(h && h.message));
        y.m = (sinir ? 'Şu anda çok sayıda soru geliyor; ' : 'Yapay zekâ bağlantısı kurulamadı; ') + 'hazır bilgilerle yanıtlıyorum.\n' + y.m;
        yanitla(y, soru);
      })
      .then(function () { clearTimeout(sure); bekliyor = false; });
  }
})();
