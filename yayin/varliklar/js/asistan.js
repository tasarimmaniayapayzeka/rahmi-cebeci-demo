/* ============================================================
   ÖN BİLGİ ASİSTANI — tarayıcı tarafı
   Veri: window.RC_ASISTAN (render.js → varliklar/js/asistan-dizin.js)
   Çalışma biçimleri:
     - hazır yanıt: saat/adres/randevu/fiyat/acil + sayfa önerisi, cihazda;
       demo sürümünde ve canli:false iken tek yol budur
     - canlı: asistan.php üzerinden yapay zekâ (ilk mesajdan önce aktarım onayı)
   Parçalar: tanıtım ekranı · sesli mod (bas-konuş, sesli okuma) · hizmet ve
   harita kartları · sohbet içi randevu formu · kaynaklar · akıllı öneri kartı ·
   fotoğrafla ön değerlendirme (ayrı açık onayla) · kişisel bilgi gizleme
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
  var DEMO = document.body.hasAttribute('data-demo');
  var CANLI = V.canli && !DEMO;
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
  /* sesli okuma için düz metin */
  function duzYazi(metin) {
    return String(metin).replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\*\*/g, '').replace(/^[-•]\s+/gm, '').replace(/\s+/g, ' ').trim();
  }
  /* yapay zekâya gitmeden önce kişisel bilgiler gizlenir */
  function gizle(metin) {
    var degisti = false;
    var s = String(metin)
      .replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, function () { degisti = true; return '[e-posta gizlendi]'; })
      .replace(/\b[1-9]\d{10}\b/g, function () { degisti = true; return '[kimlik no gizlendi]'; })
      .replace(/(?:\+?90[\s-]?)?\(?0?5\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}\b/g, function () { degisti = true; return '[telefon gizlendi]'; });
    return { s: s, degisti: degisti };
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
  /* bulunulan sayfa */
  var BURASI = YOLDAN[location.href.split('#')[0].split('?')[0].replace(KOK, '').replace(/index\.html$/, '')] || null;

  /* Türkçe ekler için kök eşleşmesi: "altım" ~ "altı", "dişlerim" ~ "diş" */
  var DOLGU = ' icin nasil neden nedir hangi kadar olur olsa yapiliyor yapilir musunuz misiniz istiyorum benim bana sonra once daha gibi oluyor yapiyor sizde burada acaba mumkun ediyor var yok cok az ';
  function kokUyar(p, k) {
    if (p.length < 3 || k.length < 3) return false;
    if (k.indexOf(p.slice(0, Math.min(p.length, 5))) === 0) return true;
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
    { ad: 'foto', rx: /(fotograf|foto|resim|goruntu|selfie|cilt analiz)/,
      m: '', foto: true },
    { ad: 'yapilmaz', rx: /(sac ekimi|sac ektir|epilasyon|ameliyat|cerrahi|burun estetigi|goz kapagi estetigi|meme|liposuction|liposaksiyon|ben aldir|et beni|sigil)/,
      m: 'Bu işlem muayenehanede yapılmıyor. Cerrahi girişimler, saç ekimi, lazer epilasyon ve ben ya da deri oluşumlarının çıkarılması kapsam dışındadır; nedenlerini ve hangi uzmanlık dalına başvurulabileceğini aşağıdaki sayfada bulabilirsiniz.',
      k: ['yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/'] },
    { ad: 'fiyat', rx: /(fiyat|ucret|kac para|kac tl|ne kadar tutar|ne kadar ode|indirim|kampanya|taksit|paket)/,
      m: 'Fiyat bilgisi sitede ve bu sohbette paylaşılmıyor. Ücret, muayenede size uygun görülen plana göre konuşulur. Ön bilgi için ' + V.tel + ' numarasını arayabilir ya da WhatsApp\'tan yazabilirsiniz.' },
    { ad: 'test', rx: /(cilt tipi|cilt testi|cilt egilimi|\btest\b|testi|yagli mi kuru mu|cildim ne tip)/,
      m: 'Beş kısa soruyla cildinizin eğilimine birlikte bakalım. Yanıtlarınız yalnız bu sayfada kalır.', test: true },
    { ad: 'randevu', rx: /(randevu|muayene olmak|gelmek istiyorum|kayit olmak|gorusme ayarla)/,
      m: 'Randevu talebinizi buradan iletebilirsiniz; çalışma saatleri içinde size dönülür ve gün ile saat birlikte belirlenir. İsterseniz ' + V.tel + ' numarasını da arayabilirsiniz.',
      form: true },
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
    { ad: 'selam', rx: /^(merhaba|merhabalar|selam|selamlar|iyi gunler|gunaydin|iyi aksamlar|hey)$/,
      m: 'Merhaba. Uygulamalar, bölgeler, cilt sorunları, randevu ya da ulaşım hakkında sorunuzu yazabilirsiniz.' },
    { ad: 'tesekkur', rx: /^(tesekkur|tesekkurler|sagol|sagolun|eyvallah|tamam)/,
      m: 'Rica ederim. Başka bir sorunuz olursa buradayım; kişisel değerlendirme için ' + V.tel + ' numarasından randevu alabilirsiniz.' },
  ];
  function ilkKural(q) {
    for (var i = 0; i < KURAL.length; i++) if (KURAL[i].rx.test(q)) return KURAL[i];
    return null;
  }

  /* yanıt nesnesi: { m, k: [dizin kaydı], harita, form, foto, eylem } */
  function hazirYanit(soru) {
    var K = ilkKural(sade(soru));
    if (K) return { m: K.m, k: K.vitrin ? sec(V.vitrin) : sec(K.k || []), harita: !!K.harita, form: !!K.form, foto: !!K.foto, test: !!K.test };
    var bul = sayfaBul(soru);
    if (bul.length) return { m: 'Sorunuzla ilgili sayfalar aşağıda. Size uygun olup olmadığı ise muayenede değerlendirilir.', k: bul, eylem: true };
    return { m: 'Bu soruya hazır bir yanıtım yok. Soru ve yanıtlar sayfasına göz atabilir ya da ' + V.tel + ' numarasından doğrudan sorabilirsiniz.',
      k: sec(['sikca-sorulan-sorular/']) };
  }

  /* ---------- simgeler ---------- */
  var s20 = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
  var ik = {
    sor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5h16v10H9l-5 4z"/><path d="M9 9.5h6M9 12.5h4"/></svg>',
    gonder: s20 + '<path d="M4 10h11M11 5.5 15.5 10 11 14.5" stroke-width="1.8"/></svg>',
    kapa: s20 + '<path d="M5 5l10 10M15 5L5 15" stroke-width="1.7"/></svg>',
    tel: s20 + '<path d="M6.4 3.2 8 6.3 6.4 8c.9 1.9 2.4 3.4 4.3 4.3l1.7-1.6 3.1 1.6-.4 2.6c-.1.7-.7 1.2-1.4 1.2C8.2 16.1 3.9 11.8 3.2 6.3c-.1-.7.4-1.4 1.2-1.5z"/></svg>',
    wa: s20 + '<path d="M3 17l1.1-3.6A7 7 0 1 1 6.9 16z"/><path d="M7.4 7.6c.3 2.6 2.4 4.7 5 5l.9-1.4 1.5.7-.2 1.2c-2.9.4-6.5-2.6-6.9-6l1.1-.2z" stroke-width="1.2"/></svg>',
    pin: s20 + '<path d="M10 17.5s5.5-4.9 5.5-9a5.5 5.5 0 1 0-11 0c0 4.1 5.5 9 5.5 9z"/><circle cx="10" cy="8.4" r="2.1"/></svg>',
    posta: s20 + '<rect x="2.6" y="4.4" width="14.8" height="11.2" rx="1.6"/><path d="M2.9 5.4 10 10.6l7.1-5.2"/></svg>',
    ok: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',
    mik: s20 + '<rect x="7.2" y="2.6" width="5.6" height="9.4" rx="2.8"/><path d="M4.6 9.6a5.4 5.4 0 0 0 10.8 0M10 15v2.4"/></svg>',
    hop: s20 + '<path d="M3.5 7.8h2.6L10 4.6v10.8l-3.9-3.2H3.5z"/><path d="M13 7.2a3.6 3.6 0 0 1 0 5.6M15.2 5a6.6 6.6 0 0 1 0 10"/></svg>',
    kamera: s20 + '<path d="M3 6.5h3l1.4-2h5.2l1.4 2h3v9H3z"/><circle cx="10" cy="10.8" r="2.9"/></svg>',
    takvim: s20 + '<rect x="3" y="4.2" width="14" height="12.6" rx="1.6"/><path d="M3 8h14M7 2.6v3M13 2.6v3"/></svg>',
    kaynak: s20 + '<path d="M5 3.5h7l3 3v10H5z"/><path d="M12 3.5v3h3M7.5 10h5M7.5 13h4"/></svg>',
    belge: s20 + '<path d="M5 2.8h6.5L15 6.3v10.9H5z"/><path d="M11.3 2.8v3.7H15M7.5 11h5M7.5 14h3.5"/></svg>',
    test: s20 + '<path d="M7 3.5h6M8 3.5v4.2L4.4 14.3A1.6 1.6 0 0 0 5.8 16.7h8.4a1.6 1.6 0 0 0 1.4-2.4L12 7.7V3.5"/><path d="M6 12h8"/></svg>',
  };
  var ONERI = ['Hizmetleriniz neler?', '1 dakikalık cilt tipi testi', 'Fotoğrafla ön değerlendirme', 'Randevu almak istiyorum'];

  /* ---------- kart, harita, kaynak ---------- */
  function kartlar(liste) {
    if (!liste || !liste.length) return '';
    var uyg = liste.filter(function (d) { return d.tur === 'Uygulama'; })[0];
    if (uyg) sonUyg = uyg.ad;   /* randevu formunda konu olarak önerilir */
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
  function kaynakListesi(liste) {
    if (!liste || !liste.length) return '';
    return '<div class="asis__kaynak"><p>' + ik.kaynak + '<span>Yanıtın dayandığı sayfalar</span></p><ol>' + liste.map(function (d) {
      return '<li><a href="' + KOK + d.yol + '">' + kacir(d.ad) + '</a>' + (d.ac ? '<small>' + kacir(d.ac.slice(0, 110)) + '…</small>' : '') + '</li>';
    }).join('') + '</ol></div>';
  }
  /* sayfa önerisinin altında "bu konuda randevu" eylemi */
  function eylemler(liste) {
    var uyg = (liste || []).filter(function (d) { return d.tur === 'Uygulama'; })[0];
    return '<div class="asis__eylem">' +
      '<button type="button" data-asis-form="' + kacir(uyg ? uyg.ad : '') + '">' + ik.takvim + (uyg ? kacir(uyg.ad) + ' için randevu iste' : 'Randevu iste') + '</button>' +
      '<a href="https://wa.me/' + V.waHam + '" target="_blank" rel="noopener" data-asis-wa>' + ik.wa + 'Hekime sor</a></div>';
  }

  /* ---------- randevu akışı: hizmet → tarih → saat → iletişim ----------
     Takvime bağlı değildir: seçilen gün ve saat TERCİHTİR, kesin saat telefonla teyit edilir. */
  var RA = {}, raNo = 0;
  var AYLAR = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
  var GUNLER = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
  var SAATLER = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30'];
  function randevuAkisi(konu) {
    var id = 'ra' + (++raNo);
    RA[id] = { adim: konu ? 2 : 1, hizmet: konu || '', tarih: '', saat: '' };
    return '<div class="asis__ra" data-ra="' + id + '">' + raIcerik(id) + '</div>';
  }
  function uygunGunler() {
    var l = [], d = new Date();
    for (var i = 0; l.length < 8 && i < 14; i++) {
      var g = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i);
      if (g.getDay() === 0) continue;   /* pazar kapalı */
      if (i === 0 && d.getHours() >= 17) continue;   /* 19:00'da kapanıyor: akşam saatlerinde bugün sunulmaz */
      var ad = i === 0 ? 'Bugün' : i === 1 ? 'Yarın' : GUNLER[g.getDay()];
      l.push({ ad: ad, gun: g.getDate() + ' ' + AYLAR[g.getMonth()], deger: g.getDate() + ' ' + AYLAR[g.getMonth()] + ' ' + GUNLER[g.getDay()] });
    }
    return l;
  }
  function raIcerik(id) {
    var s = RA[id], bas = ['Hizmet seçimi', 'Tarih tercihi', 'Saat tercihi', 'İletişim bilgileri'];
    var h = '<div class="asis__ra-ust"><p class="asis__rform-bas">' + ik.takvim + '<b>Randevu talebi</b></p><span>' + s.adim + ' / 4</span></div>' +
      '<div class="asis__ra-ilerleme"><i style="width:' + (s.adim * 25) + '%"></i></div>' +
      '<p class="asis__ra-adim">' + bas[s.adim - 1] + '</p>';
    if (s.adim === 1) {
      var liste = sec(V.vitrin);
      h += '<div class="asis__ra-hizmetler">' + liste.map(function (d) {
        return '<button type="button" data-ra-hizmet="' + kacir(d.ad) + '">' +
          (d.gorsel ? '<img src="' + KOK + d.gorsel + '" alt="" loading="lazy">' : '') +
          '<span><b>' + kacir(d.ad) + '</b><small>' + kacir((d.ac || '').slice(0, 60)) + '…</small></span>' + ik.ok + '</button>';
      }).join('') + '</div>' +
      '<select class="asis__ra-hepsi" data-ra-hepsi aria-label="Diğer uygulamalar"><option value="">Listede yok mu? Tüm uygulamalar…</option>' +
        V.konular.map(function (k) { return '<option>' + kacir(k) + '</option>'; }).join('') + '</select>' +
      '<button type="button" class="asis__ra-bilmiyorum" data-ra-hizmet="Henüz karar vermedim (hekim muayenesi)">Henüz karar vermedim — önce muayene</button>';
    } else if (s.adim === 2) {
      h += '<p class="asis__ra-secim">' + kacir(s.hizmet) + '</p><div class="asis__ra-gunler">' + uygunGunler().map(function (g) {
        return '<button type="button" data-ra-tarih="' + kacir(g.deger) + '"' + (s.tarih === g.deger ? ' class="is-secili"' : '') + '><small>' + g.ad + '</small><b>' + g.gun + '</b></button>';
      }).join('') + '</div><button type="button" class="asis__ra-bilmiyorum" data-ra-tarih="Fark etmez">Fark etmez, en yakın uygun gün</button>';
    } else if (s.adim === 3) {
      h += '<p class="asis__ra-secim">' + kacir(s.hizmet) + ' · ' + kacir(s.tarih) + '</p><div class="asis__ra-saatler">' + SAATLER.map(function (t) {
        return '<button type="button" data-ra-saat="' + t + '"' + (s.saat === t ? ' class="is-secili"' : '') + '>' + t + '</button>';
      }).join('') + '</div><button type="button" class="asis__ra-bilmiyorum" data-ra-saat="Fark etmez">Saat fark etmez</button>' +
      '<p class="asis__uyari">Saat bir tercihtir; kesin saat sizi aradığımızda birlikte belirlenir.</p>';
    } else {
      h += '<p class="asis__ra-secim">' + kacir(s.hizmet) + ' · ' + kacir(s.tarih) + ' · ' + kacir(s.saat) + '</p>' +
        '<form class="asis__rform asis__rform--ic" novalidate data-asis-rform data-ra-form="' + id + '">' +
        '<label>Ad soyad<input name="ad" autocomplete="name" required maxlength="80"></label>' +
        '<label>Telefon<input name="telefon" type="tel" inputmode="tel" autocomplete="tel" required maxlength="24" placeholder="05xx xxx xx xx"></label>' +
        '<label>Not <small>(isteğe bağlı; sağlık bilgisi yazmanız gerekmez)</small><textarea name="mesaj" rows="2" maxlength="500"></textarea></label>' +
        '<div class="asis__tuzak" aria-hidden="true"><input name="website" tabindex="-1" autocomplete="off"></div>' +
        '<label class="asis__onay"><input type="checkbox" name="kvkk" value="1" required><span>Bilgilerimin randevu için kullanılmasına ilişkin <a href="' + KOK + 'yasal/kvkk-aydinlatma-metni/" target="_blank" rel="noopener">aydınlatma metnini</a> okudum.</span></label>' +
        '<button type="submit" class="asis__rform-gonder">' + (DEMO ? 'Talebi WhatsApp ile gönder' : 'Randevu talebi oluştur') + '</button>' +
        '<p class="asis__rform-durum" role="status"></p></form>';
    }
    if (s.adim > 1) h += '<button type="button" class="asis__ra-geri" data-ra-geri>← Geri</button>';
    return h;
  }
  function raGuncelle(kutu, degisim) {
    var id = kutu.getAttribute('data-ra'), s = RA[id];
    for (var k in degisim) s[k] = degisim[k];
    kutu.innerHTML = raIcerik(id);
    var ust = kutu.closest('.asis__m');
    if (ust) sohbetAlani.scrollTop = Math.max(0, ust.offsetTop - 12);
  }
  function formGonder(f) {
    var durum = f.querySelector('.asis__rform-durum');
    var s = RA[f.getAttribute('data-ra-form')] || { hizmet: '', tarih: 'Fark etmez', saat: 'Fark etmez' };
    var al = function (ad) { var e = f.elements[ad]; return e ? String(e.value || '').trim() : ''; };
    if (!al('ad') || al('telefon').replace(/\D/g, '').length < 10) { durum.textContent = 'Lütfen adınızı ve geçerli bir telefon numarası yazın.'; return; }
    if (!f.elements.kvkk.checked) { durum.textContent = 'Göndermeden önce aydınlatma metnini onaylayın.'; return; }
    var tercih = 'Tercih: ' + s.tarih + ', ' + s.saat;
    if (DEMO) {
      /* demo sürümünde form alıcısı (PHP) yok: talep WhatsApp mesajı olarak açılır */
      var metin = 'Merhaba, randevu talebi iletmek istiyorum.\nAd: ' + al('ad') + '\nTelefon: ' + al('telefon') +
        '\nHizmet: ' + s.hizmet + '\n' + tercih + (al('mesaj') ? '\nNot: ' + al('mesaj') : '');
      window.open('https://wa.me/' + V.waHam + '?text=' + encodeURIComponent(metin), '_blank', 'noopener');
      durum.textContent = 'WhatsApp açıldı; mesajı göndermeniz yeterli.';
      return;
    }
    var veri = new FormData();
    veri.append('ad', al('ad')); veri.append('telefon', al('telefon')); veri.append('konu', s.hizmet);
    veri.append('mesaj', tercih + (al('mesaj') ? '\n' + al('mesaj') : '') + '\n(Sitedeki asistan üzerinden gönderildi)');
    veri.append('website', al('website')); veri.append('kvkk', '1'); veri.append('bicim', 'json');
    durum.textContent = 'Gönderiliyor…';
    f.querySelector('.asis__rform-gonder').disabled = true;
    fetch(KOK + 'iletisim-gonder.php', { method: 'POST', body: veri, credentials: 'same-origin' })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j.tur !== 'ok') throw new Error(j.mesaj || 'hata');
        var kutu = f.closest('.asis__ra');
        kutu.innerHTML = '<div class="asis__rform--tamam"><p class="asis__rform-bas">' + ik.takvim + '<b>' + kacir(j.baslik) + '</b></p>' +
          '<p class="asis__ra-secim">' + kacir(s.hizmet) + ' · ' + kacir(s.tarih) + ' · ' + kacir(s.saat) + '</p><p>' + kacir(j.mesaj) + '</p></div>';
      })
      .catch(function (h) {
        f.querySelector('.asis__rform-gonder').disabled = false;
        durum.textContent = (h && h.message && h.message !== 'hata' ? h.message + ' ' : 'Talep iletilemedi. ') + 'İsterseniz ' + V.tel + ' numarasını arayabilir ya da WhatsApp\'tan yazabilirsiniz.';
      });
  }

  /* ---------- 1 dakikalık cilt eğilimi testi (sohbet içinde, 5 soru) ----------
     Yanıtlar yalnız bellekte tutulur; sonuç bir eğilimdir, tanı değildir. */
  var TEST = [
    { s: 'Yüzünüzü yıkadıktan bir iki saat sonra cildiniz nasıl hissettiriyor?',
      c: [['Gergin ve kuru', 'k'], ['Rahat, dengeli', 'n'], ['Alın ve burun parlamaya başlıyor', 't'], ['Her yeri parlıyor', 'y']] },
    { s: 'Gün ortasında yüzünüz nasıl görünüyor?',
      c: [['Mat, yer yer pul pul', 'k'], ['Sabahki gibi', 'n'], ['Alın, burun ve çene parlak', 't'], ['Yüzün tamamı parlak', 'y']] },
    { s: 'Gözenekleriniz ne kadar belirgin?',
      c: [['Neredeyse görünmüyor', 'k'], ['Pek dikkat çekmiyor', 'n'], ['Yalnız burun çevresinde belirgin', 't'], ['Yanaklar dahil belirgin', 'y']] },
    { s: 'Yeni bir krem ya da ürün kullandığınızda ne olur?',
      c: [['Sık sık kızarır ya da batar', 'h'], ['Ara sıra tepki olur', 'x'], ['Neredeyse hiç tepki olmaz', 'x']] },
    { s: 'Güneşte cildiniz nasıl davranır?',
      c: [['Kolay kızarır, zor bronzlaşır', 'h'], ['Önce kızarır, sonra bronzlaşır', 'x'], ['Kolayca bronzlaşır', 'x']] },
  ];
  var TEST_SONUC = {
    k: { ad: 'kuru', m: 'Cildiniz nemini çabuk kaybetme eğiliminde görünüyor. Bu tabloda genellikle koruyucu katmanın desteklenmesi ve cildin su tutma gücü ön plana çıkar.',
      y: ['cilt-sorunlari/nem-kaybi-ve-donukluk/', 'uygulamalar/genclik-asisi-skinbooster/', 'uygulamalar/mezoterapi/'] },
    n: { ad: 'dengeli', m: 'Yanıtlarınız dengeli bir cilde işaret ediyor. Bu durumda öncelik, cilt kalitesinin korunması ve güneşten korunmadır.',
      y: ['uygulamalar/genclik-asisi-skinbooster/', 'bolgeler/yuz/', 'cilt-tipi-testi/'] },
    t: { ad: 'karma', m: 'Orta bölgeniz (alın, burun, çene) yağlanırken yanaklar daha dengeli ya da kuru kalıyor gibi görünüyor. Bölgelere göre farklı bakım gerekebilir.',
      y: ['cilt-sorunlari/gozenek-ve-cilt-dokusu/', 'uygulamalar/karbon-peeling/', 'cilt-sorunlari/nem-kaybi-ve-donukluk/'] },
    y: { ad: 'yağlı', m: 'Cildiniz gün içinde belirgin şekilde yağlanıyor ve gözenekler daha görünür olabiliyor. Gözenek, doku ve akne eğilimi bu başlıkta birlikte ele alınır.',
      y: ['cilt-sorunlari/gozenek-ve-cilt-dokusu/', 'cilt-sorunlari/akne-ve-akne-izi/', 'uygulamalar/karbon-peeling/'] },
  };
  var TT = {}, ttNo = 0;
  function testBaslat() {
    var id = 'tt' + (++ttNo);
    TT[id] = { i: 0, cevap: [] };
    return '<div class="asis__test" data-tt="' + id + '">' + testIcerik(id) + '</div>';
  }
  function testIcerik(id) {
    var t = TT[id], q = TEST[t.i];
    return '<div class="asis__ra-ust"><p class="asis__rform-bas">' + ik.test + '<b>Cilt eğilimi testi</b></p><span>' + (t.i + 1) + ' / ' + TEST.length + '</span></div>' +
      '<div class="asis__ra-ilerleme"><i style="width:' + ((t.i + 1) / TEST.length * 100) + '%"></i></div>' +
      '<p class="asis__test-soru">' + kacir(q.s) + '</p><div class="asis__test-secenek">' +
      q.c.map(function (c, j) { return '<button type="button" data-tt-cevap="' + j + '">' + kacir(c[0]) + '</button>'; }).join('') + '</div>' +
      (t.i > 0 ? '<button type="button" class="asis__ra-geri" data-tt-geri>← Önceki soru</button>' : '');
  }
  function testCevap(kutu, j) {
    var id = kutu.getAttribute('data-tt'), t = TT[id];
    t.secim = t.secim || [];
    t.secim[t.i] = j; t.cevap[t.i] = TEST[t.i].c[j][1]; t.i++;
    if (t.i < TEST.length) { kutu.innerHTML = testIcerik(id); return; }
    var r = testSonuc(id);
    kutu.innerHTML = r.html + kartlar(r.k) + paylasSatiri(r.baslik, r.ozet);
    var ust = kutu.closest('.asis__m'); if (ust) sohbetAlani.scrollTop = Math.max(0, ust.offsetTop - 12);
    oku(r.baslik);
  }
  function testSonuc(id) {
    var t = TT[id], say = { k: 0, n: 0, t: 0, y: 0, h: 0 };
    t.cevap.forEach(function (c) { if (say[c] !== undefined) say[c]++; });
    var tur = ['t', 'y', 'k', 'n'].sort(function (a, b) { return say[b] - say[a]; })[0];
    var R = TEST_SONUC[tur];
    var hassas = say.h >= 2 ? 'belirgin' : say.h === 1 ? 'hafif' : '';
    var ozet = 'Cilt eğilimi: ' + R.ad + (hassas ? ' · hassasiyet eğilimi: ' + hassas : '') + '\n' +
      TEST.map(function (q, i) { return '- ' + q.s + ' → ' + q.c.filter(function (c, j) { return j === t.secim[i]; })[0][0]; }).join('\n');
    return { baslik: 'Cildiniz ' + R.ad + ' eğilimli görünüyor', ozet: ozet,
      html: '<div class="asis__test-sonuc"><p class="asis__rform-bas">' + ik.test + '<b>Cildiniz ' + R.ad + ' eğilimli görünüyor</b></p>' +
        '<div class="asis__gozlem"><span><small>Eğilim</small>' + R.ad + '</span>' + (hassas ? '<span><small>Hassasiyet</small>' + hassas + '</span>' : '') + '</div>' +
        '<p>' + R.m + (hassas ? ' Yanıtlarınızda hassasiyet işaretleri de var; yeni uygulamalar muayenede daha temkinli planlanır.' : '') + '</p>' +
        '<p class="asis__uyari">Bu kısa test bir eğilim gösterir, tanı değildir. 12 soruluk ayrıntılı sürüm için ' +
        '<a href="' + KOK + 'cilt-tipi-testi/">Cilt Eğilimi Testi</a> sayfasına bakabilirsiniz.</p></div>',
      k: sec(R.y.concat(hassas ? ['uygulamalar/hekim-muayenesi/'] : [])).slice(0, 3) };
  }

  /* ---------- sonucu paylaş: WhatsApp · e-posta · PDF ---------- */
  var PAY = {}, payNo = 0;
  function paylasSatiri(baslik, ozet) {
    var id = 'pp' + (++payNo);
    PAY[id] = { baslik: baslik, ozet: ozet };
    return '<div class="asis__paylas" data-pay="' + id + '"><p>Sonucu paylaşın</p><div>' +
      '<button type="button" data-pay-tur="wa">' + ik.wa + 'WhatsApp</button>' +
      '<button type="button" data-pay-tur="posta">' + ik.posta + 'E-posta</button>' +
      '<button type="button" data-pay-tur="pdf">' + ik.belge + 'PDF</button></div></div>';
  }
  function paylas(id, tur) {
    var p = PAY[id]; if (!p) return;
    var metin = p.baslik + '\n\n' + p.ozet + '\n\n(Sitedeki ön bilgi asistanından; tanı değildir.)';
    if (tur === 'wa') window.open('https://wa.me/' + V.waHam + '?text=' + encodeURIComponent('Merhaba, ' + metin), '_blank', 'noopener');
    else if (tur === 'posta') location.href = 'mailto:' + V.eposta + '?subject=' + encodeURIComponent(p.baslik) + '&body=' + encodeURIComponent(metin);
    else {
      /* PDF: biçimlenmiş özet yeni pencerede açılır, yazdır → "PDF olarak kaydet" */
      var w = window.open('', '_blank');
      if (!w) { ekle('a', bicimle('Tarayıcınız yeni pencereyi engelledi; PDF için açılır pencerelere izin verin.')); return; }
      var tarih = new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
      w.document.write('<!doctype html><html lang="tr"><head><meta charset="utf-8"><title>' + kacir(p.baslik) + '</title><style>' +
        'body{font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#1C1B18;margin:0;padding:48px 56px;line-height:1.6}' +
        'header{display:flex;align-items:center;gap:14px;border-bottom:2px solid #D9B75A;padding-bottom:14px;margin-bottom:26px}' +
        'header img{width:44px;height:44px}header b{font-size:1.1rem;letter-spacing:.12em;text-transform:uppercase}header small{display:block;color:#6C675E}' +
        'h1{font-size:1.4rem;margin:0 0 14px}pre{white-space:pre-wrap;font:inherit;background:#FAF7F1;border:1px solid #E6DED0;border-radius:10px;padding:16px 18px}' +
        'footer{margin-top:28px;font-size:.82rem;color:#6C675E;border-top:1px solid #E6DED0;padding-top:12px}</style></head><body>' +
        '<header><img src="' + KOK + V.amblem + '" alt=""><div><b>' + kacir(V.marka) + '</b><small>' + kacir(V.hekim) + ' · ' + kacir(V.adres) + '</small></div></header>' +
        '<h1>' + kacir(p.baslik) + '</h1><pre>' + kacir(p.ozet) + '</pre>' +
        '<footer>' + tarih + ' · Bu belge sitedeki ön bilgi asistanıyla hazırlandı; tanı ya da tedavi önerisi değildir. Randevu: ' + kacir(V.tel) + '</footer>' +
        '<script>window.onload=function(){setTimeout(function(){window.print()},300)}<\/script></body></html>');
      w.document.close();
    }
  }

  /* fotoğraf yanıtının ilk satırındaki "GÖZLEM: a=b | c=d" özeti notlara çevrilir */
  function gozlemAyir(metin) {
    var m = String(metin).match(/^\s*G[ÖO]ZLEM:\s*(.+)$/im);
    if (!m) return { metin: metin, notlar: [] };
    var notlar = m[1].split('|').map(function (p) { var x = p.split('='); return x.length === 2 ? [x[0].trim(), x[1].trim()] : null; }).filter(Boolean).slice(0, 6);
    return { metin: String(metin).replace(m[0], '').trim(), notlar: notlar };
  }
  function gozlemHtml(notlar) {
    if (!notlar.length) return '';
    return '<div class="asis__gozlem">' + notlar.map(function (n) {
      return '<span data-duzey="' + kacir(sade(n[1]).split(' ')[0]) + '"><small>' + kacir(n[0]) + '</small>' + kacir(n[1]) + '</span>';
    }).join('') + '</div>';
  }

  /* ---------- fotoğrafla ön değerlendirme ---------- */
  function fotoKarti() {
    if (!CANLI) {
      return '<div class="asis__foto"><p class="asis__rform-bas">' + ik.kamera + '<b>Fotoğrafla ön değerlendirme</b></p>' +
        '<p>Bu özellik site yayına alındığında açılacak. Şimdilik fotoğrafınızı WhatsApp\'tan doğrudan hekime iletebilirsiniz; kesin değerlendirme her zaman muayenede yapılır.</p>' +
        '<div class="asis__eylem"><a href="https://wa.me/' + V.waHam + '" target="_blank" rel="noopener">' + ik.wa + 'WhatsApp\'tan gönder</a></div></div>';
    }
    return '<div class="asis__foto" data-asis-foto><p class="asis__rform-bas">' + ik.kamera + '<b>Fotoğrafla ön değerlendirme</b></p>' +
      '<p>Yüzünüzün ya da cildinizin iyi ışıkta, makyajsız bir fotoğrafını seçin. Yanıt yalnız genel görünümü betimler ve ilgili sayfaları önerir; <b>tanı değildir</b>.</p>' +
      '<label class="asis__onay"><input type="checkbox" data-f-onay><span>18 yaşından büyüğüm.</span></label>' +
      '<label class="asis__onay"><input type="checkbox" data-f-onay><span>Fotoğrafımın, değerlendirme için ' + kacir(V.saglayici) + ' şirketinin ' + kacir(V.ulke) + '\'deki sunucularına iletilmesine açık rıza veriyorum. Fotoğraf muayenehanede saklanmaz. (<a href="' + KOK + 'yasal/kvkk-aydinlatma-metni/#asistan" target="_blank" rel="noopener">ayrıntılar</a>)</span></label>' +
      '<label class="asis__onay"><input type="checkbox" data-f-onay><span>Bunun bir muayene ya da tanı olmadığını biliyorum.</span></label>' +
      '<label class="asis__foto-sec" aria-disabled="true">' + ik.kamera + '<span>Fotoğraf seç</span><input type="file" accept="image/*" data-f-dosya disabled></label>' +
      '<p class="asis__rform-durum" role="status"></p></div>';
  }
  /* fotoğraf tarayıcıda küçültülür ve yeniden kodlanır: konum dahil EXIF bilgileri silinir */
  function fotoHazirla(dosya, bitti) {
    var okuyucu = new FileReader();
    okuyucu.onload = function () {
      var img = new Image();
      img.onload = function () {
        var en = 1024, o = Math.min(1, en / Math.max(img.width, img.height));
        var c = document.createElement('canvas');
        c.width = Math.round(img.width * o); c.height = Math.round(img.height * o);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        bitti(c.toDataURL('image/jpeg', 0.82));
      };
      img.onerror = function () { bitti(null); };
      img.src = okuyucu.result;
    };
    okuyucu.onerror = function () { bitti(null); };
    okuyucu.readAsDataURL(dosya);
  }
  function fotoGonder(kart, dosya) {
    var durum = kart.querySelector('.asis__rform-durum');
    if (!/^image\//.test(dosya.type) || dosya.size > 15e6) { durum.textContent = 'Lütfen 15 MB\'tan küçük bir fotoğraf seçin.'; return; }
    durum.textContent = 'Fotoğraf hazırlanıyor…';
    fotoHazirla(dosya, function (veri) {
      if (!veri) { durum.textContent = 'Fotoğraf açılamadı; başka bir dosya deneyin.'; return; }
      kart.remove();
      ekle('k', '<img class="asis__foto-onizle" src="' + veri + '" alt="Gönderdiğiniz fotoğraf">');
      bekliyor = true;
      var yaziyor = ekle('bekle', '<span></span><span></span><span></span><span class="gizli">Fotoğraf değerlendiriliyor</span>');
      istek({ tur: 'foto', gorsel: veri }, 50000).then(function (j) {
        yaziyor.remove();
        var g = gozlemAyir(j.yanit);
        var ozet = (g.notlar.length ? g.notlar.map(function (n) { return '- ' + n[0] + ': ' + n[1]; }).join('\n') + '\n\n' : '') + duzYazi(g.metin);
        yanitla({ m: g.metin, k: bagKartlari(g.metin), eylem: true,
          ek: gozlemHtml(g.notlar) + paylasSatiri('Fotoğrafla ön değerlendirme özeti', ozet) }, '(fotoğraf)');
      }).catch(function (h) {
        yaziyor.remove();
        yanitla({ m: (/sinir/.test(String(h && h.message)) ? 'Fotoğraf değerlendirme sınırına ulaşıldı. ' : 'Fotoğraf şu anda değerlendirilemedi. ') +
          'Fotoğrafınızı WhatsApp\'tan doğrudan hekime iletebilirsiniz.' }, '(fotoğraf)');
      }).then(function () { bekliyor = false; });
    });
  }

  /* ---------- arayüz ---------- */
  var SES_DESTEK = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  var OKUMA_DESTEK = 'speechSynthesis' in window;
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
        '<div class="asis__bas-dugme">' +
          (OKUMA_DESTEK ? '<button class="asis__ikon" type="button" data-asis-okuma aria-pressed="false" aria-label="Yanıtları sesli oku" title="Yanıtları sesli oku">' + ik.hop + '</button>' : '') +
          '<button class="asis__ikon" type="button" data-asis-kapa aria-label="Asistanı kapat">' + ik.kapa + '</button>' +
        '</div>' +
      '</header>' +
      '<nav class="asis__hizli" aria-label="Hızlı iletişim">' +
        '<a href="tel:' + V.telHam + '">' + ik.tel + '<span>Ara</span></a>' +
        '<a href="https://wa.me/' + V.waHam + '" target="_blank" rel="noopener" data-asis-wa>' + ik.wa + '<span>WhatsApp</span></a>' +
        '<a href="' + V.yolTarifi + '" target="_blank" rel="noopener">' + ik.pin + '<span>Yol tarifi</span></a>' +
        '<a href="' + KOK + 'iletisim/">' + ik.posta + '<span>İletişim</span></a>' +
      '</nav>' +
      '<div class="asis__akis" role="log" aria-live="polite" aria-relevant="additions"></div>' +
      '<form class="asis__form" novalidate>' +
        '<button class="asis__arac" type="button" data-asis-foto-ac aria-label="Fotoğrafla ön değerlendirme" title="Fotoğrafla ön değerlendirme">' + ik.kamera + '</button>' +
        '<label class="gizli" for="asis-girdi">Sorunuz</label>' +
        '<textarea id="asis-girdi" rows="1" maxlength="' + SINIR_KARAKTER + '" placeholder="Sorunuzu yazın…" autocomplete="off"></textarea>' +
        (SES_DESTEK ? '<button class="asis__arac asis__mik" type="button" data-asis-mik aria-pressed="false" aria-label="Sesle sor" title="Sesle sor">' + ik.mik + '</button>' : '') +
        '<button class="asis__gonder" type="submit" aria-label="Gönder">' + ik.gonder + '</button>' +
      '</form>' +
    '</section>';
  document.body.appendChild(kok);

  var panel = kok.querySelector('.asis__panel'),
      sohbetAlani = kok.querySelector('.asis__akis'), form = kok.querySelector('.asis__form'),
      girdi = kok.querySelector('#asis-girdi'), waBag = kok.querySelector('.asis__hizli [data-asis-wa]'),
      mikDugme = kok.querySelector('[data-asis-mik]'), okumaDugme = kok.querySelector('[data-asis-okuma]');
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
    ekle('a', '<p>Merhaba, ben ' + kacir(V.marka) + ' muayenehanesinin ön bilgi asistanıyım. Uygulamalar, bölgeler, cilt sorunları, randevu ve ulaşımla ilgili sorularınızı yanıtlayıp sizi doğru sayfaya yönlendirebilirim.</p>' +
      '<p class="asis__uyari">' + (CANLI
        ? 'Yanıtlar yapay zekâ ile üretilir, hata içerebilir ve muayenenin yerini tutmaz. Sağlık, kimlik ya da iletişim bilgisi yazmayın.'
        : 'Yanıtlar sitedeki bilgilerden gelir ve muayenenin yerini tutmaz; yazdıklarınız cihazınızdan çıkmaz.') + '</p>');
    ekle('oneri', ONERI.map(function (s) { return '<button type="button">' + kacir(s) + '</button>'; }).join(''));
  }
  function onayIste(sonra) {
    var d = ekle('onay',
      '<p><b>Göndermeden önce:</b> Yazdığınız mesaj, yanıt üretilebilmesi için ' + kacir(V.saglayici) + ' şirketinin ' + kacir(V.ulke) +
      '\'deki sunucularına iletilir. Muayenehane sohbeti kaydetmez; telefon, e-posta ve kimlik numarası gönderilmeden gizlenir. Ayrıntılar ' +
      '<a href="' + KOK + 'yasal/kvkk-aydinlatma-metni/#asistan">KVKK aydınlatma metninde</a>.</p>' +
      '<div class="asis__onay-dugme"><button type="button" data-evet>Anladım, gönder</button><button type="button" data-hayir>Hazır yanıtla devam et</button></div>');
    d.addEventListener('click', function (e) {
      if (e.target.closest('[data-evet]')) { onay = true; d.remove(); sonra(true); }
      else if (e.target.closest('[data-hayir]')) { d.remove(); sonra(false); }
    });
  }

  /* ---------- sesli mod ---------- */
  var sesliOku = false, tanima = null, dinliyor = false, sesNotu = false;
  function oku(metin) {
    if (!sesliOku || !OKUMA_DESTEK) return;
    var u = new SpeechSynthesisUtterance(duzYazi(metin).slice(0, 600));
    u.lang = 'tr-TR'; u.rate = 1.02;
    /* mümkünse cihazdaki Türkçe ses (ağa bağlı sesler metni dışarı gönderebilir) */
    var sesler = speechSynthesis.getVoices().filter(function (v) { return /^tr/i.test(v.lang); });
    var yerel = sesler.filter(function (v) { return v.localService; })[0] || sesler[0];
    if (yerel) u.voice = yerel;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }
  function okumaDegistir(ac) {
    sesliOku = typeof ac === 'boolean' ? ac : !sesliOku;
    if (okumaDugme) okumaDugme.setAttribute('aria-pressed', String(sesliOku));
    if (!sesliOku && OKUMA_DESTEK) speechSynthesis.cancel();
    kok.querySelectorAll('[data-tanit-ses]').forEach(function (b) { b.setAttribute('aria-pressed', String(sesliOku)); });
  }
  function dinle() {
    if (!SES_DESTEK) return;
    if (dinliyor && tanima) { tanima.stop(); return; }
    if (!sesNotu) {
      sesNotu = true;
      ekle('a', '<p class="asis__uyari">Sesle sorma, tarayıcınızın konuşma tanıma hizmetini kullanır (Chrome\'da konuşmanız yazıya çevrilmek üzere Google\'a iletilir). Muayenehaneye ses kaydı ulaşmaz.</p>');
    }
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    tanima = new SR();
    tanima.lang = 'tr-TR'; tanima.interimResults = true; tanima.maxAlternatives = 1;
    var son = '';
    tanima.onresult = function (e) {
      var metin = '';
      for (var i = 0; i < e.results.length; i++) metin += e.results[i][0].transcript;
      girdi.value = metin; son = metin;
    };
    tanima.onend = function () {
      dinliyor = false; kok.classList.remove('asis--dinliyor');
      if (mikDugme) mikDugme.setAttribute('aria-pressed', 'false');
      if (son.trim()) { girdi.value = ''; sor(son.trim()); }
    };
    tanima.onerror = function (e) {
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') ekle('a', bicimle('Mikrofon izni verilmedi. Sorunuzu yazarak da sorabilirsiniz.'));
    };
    try { tanima.start(); dinliyor = true; kok.classList.add('asis--dinliyor'); if (mikDugme) mikDugme.setAttribute('aria-pressed', 'true'); }
    catch (h) { dinliyor = false; }
  }

  /* ---------- mobil: tam ekran panel ----------
     - arka sayfa sabitlenir (iOS'ta overflow:hidden yetmez; body fixed + kaydırma konumu saklanır)
     - panel yüksekliği görünen alana (visualViewport) eşitlenir: klavye açılınca ya da
       adres çubuğu gizlenip göründüğünde yazı kutusu ekranın dışına kaçmaz
     - açılışta yazı kutusuna otomatik odak YOK: klavye kendiliğinden açılıp sohbeti örtüyordu */
  var MOBIL = window.matchMedia('(max-width: 820px)');
  var kilitY = 0, kilitli = false;
  function kilitle() {
    if (!MOBIL.matches || kilitli) return;
    kilitY = window.scrollY || window.pageYOffset || 0;
    var b = document.body.style;
    b.position = 'fixed'; b.top = -kilitY + 'px'; b.left = '0'; b.right = '0'; b.width = '100%';
    document.documentElement.classList.add('asis-kilit');
    kilitli = true;
  }
  function kilitAc() {
    if (!kilitli) return;
    var b = document.body.style;
    b.position = ''; b.top = ''; b.left = ''; b.right = ''; b.width = '';
    document.documentElement.classList.remove('asis-kilit');
    /* sitede scroll-behavior:smooth var; geri dönüş animasyonsuz olmalı */
    var h = document.documentElement, eski = h.style.scrollBehavior;
    h.style.scrollBehavior = 'auto';
    window.scrollTo(0, kilitY);
    h.style.scrollBehavior = eski;
    kilitli = false;
  }
  function alanAyarla() {
    if (panel.hidden || !MOBIL.matches || !window.visualViewport) { panel.style.height = ''; panel.style.top = ''; return; }
    var vv = window.visualViewport;
    panel.style.height = Math.round(vv.height) + 'px';
    panel.style.top = Math.round(vv.offsetTop) + 'px';
  }
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', alanAyarla);
    window.visualViewport.addEventListener('scroll', alanAyarla);
  }
  girdi.addEventListener('focus', function () {
    if (MOBIL.matches) setTimeout(function () { alanAyarla(); sohbetAlani.scrollTop = sohbetAlani.scrollHeight; }, 300);
  });

  function ac(odak) {
    if (!panel.hidden) return;
    sonAcan = document.activeElement;
    panel.hidden = false;
    kok.classList.add('asis--acik');
    kilitle();
    alanAyarla();
    oneriKapat();
    document.querySelectorAll('[data-asistan-ac]').forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
    if (!sohbetAlani.children.length) karsila();
    if (odak !== false && !MOBIL.matches) setTimeout(function () { girdi.focus(); }, 60);
    else panel.querySelector('[data-asis-kapa]').focus({ preventScroll: true });
  }
  function kapa() {
    panel.hidden = true;
    kok.classList.remove('asis--acik');
    kilitAc();
    alanAyarla();
    if (dinliyor && tanima) tanima.stop();
    if (OKUMA_DESTEK) speechSynthesis.cancel();
    document.querySelectorAll('[data-asistan-ac]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    if (sonAcan && sonAcan.focus) sonAcan.focus({ preventScroll: true });
  }
  (MOBIL.addEventListener ? MOBIL.addEventListener.bind(MOBIL, 'change') : MOBIL.addListener.bind(MOBIL))(function () {
    if (panel.hidden) return;
    if (MOBIL.matches) kilitle(); else kilitAc();
    alanAyarla();
  });

  /* ---------- olaylar ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target, b;
    if (t.closest('[data-asistan-ac]')) { e.preventDefault(); panel.hidden ? ac() : kapa(); }
    else if (t.closest('[data-asis-kapa]')) kapa();
    else if (t.closest('.asis__m--oneri button')) sor(t.closest('button').textContent);
    else if (t.closest('[data-asis-okuma]')) okumaDegistir();
    else if (t.closest('[data-asis-mik]')) dinle();
    else if (t.closest('[data-asis-foto-ac]')) { sohbetAlani.querySelectorAll('.asis__m--oneri').forEach(function (o) { o.remove(); }); ekle('a', fotoKarti()); }
    else if ((b = t.closest('[data-asis-form]'))) { b.closest('.asis__eylem').remove(); ekle('a', randevuAkisi(b.getAttribute('data-asis-form'))); }
    else if ((b = t.closest('[data-ra-hizmet]'))) raGuncelle(b.closest('[data-ra]'), { hizmet: b.getAttribute('data-ra-hizmet'), adim: 2 });
    else if ((b = t.closest('[data-ra-tarih]'))) raGuncelle(b.closest('[data-ra]'), { tarih: b.getAttribute('data-ra-tarih'), adim: 3 });
    else if ((b = t.closest('[data-ra-saat]'))) raGuncelle(b.closest('[data-ra]'), { saat: b.getAttribute('data-ra-saat'), adim: 4 });
    else if ((b = t.closest('[data-ra-geri]'))) { var rk = b.closest('[data-ra]'); raGuncelle(rk, { adim: Math.max(1, RA[rk.getAttribute('data-ra')].adim - 1) }); }
    else if ((b = t.closest('[data-tt-cevap]'))) testCevap(b.closest('[data-tt]'), +b.getAttribute('data-tt-cevap'));
    else if ((b = t.closest('[data-tt-geri]'))) { var tk = b.closest('[data-tt]'), tv = TT[tk.getAttribute('data-tt')]; tv.i = Math.max(0, tv.i - 1); tk.innerHTML = testIcerik(tk.getAttribute('data-tt')); }
    else if ((b = t.closest('[data-pay-tur]'))) paylas(b.closest('[data-pay]').getAttribute('data-pay'), b.getAttribute('data-pay-tur'));
    else if (t.closest('.asis__harita-ac')) {
      /* harita yalnız istenince yüklenir (Google'a bağlantı ziyaretçinin tıklamasıyla kurulur) */
      var alan = t.closest('[data-asis-harita]');
      alan.innerHTML = '<iframe src="' + V.haritaGomu + '" title="' + kacir(V.marka) + ' konum haritası" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden && !tanitim) kapa(); });
  /* fotoğraf onayları: üçü de işaretlenince dosya seçimi açılır */
  sohbetAlani.addEventListener('change', function (e) {
    if (e.target.matches('[data-ra-hepsi]') && e.target.value) { raGuncelle(e.target.closest('[data-ra]'), { hizmet: e.target.value, adim: 2 }); return; }
    var kart = e.target.closest('[data-asis-foto]');
    if (kart && e.target.matches('[data-f-onay]')) {
      var hepsi = [].every.call(kart.querySelectorAll('[data-f-onay]'), function (c) { return c.checked; });
      var dosya = kart.querySelector('[data-f-dosya]');
      dosya.disabled = !hepsi;
      kart.querySelector('.asis__foto-sec').setAttribute('aria-disabled', String(!hepsi));
    } else if (kart && e.target.matches('[data-f-dosya]') && e.target.files[0]) fotoGonder(kart, e.target.files[0]);
  });
  sohbetAlani.addEventListener('submit', function (e) {
    var f = e.target.closest('[data-asis-rform]');
    if (f) { e.preventDefault(); formGonder(f); }
  });

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

  /* ---------- soru akışı ---------- */
  function sor(soru) {
    var suan = Date.now();
    if (suan - sonSoruAni < BEKLEME) return;
    sonSoruAni = suan;
    soru = soru.slice(0, SINIR_KARAKTER);
    sohbetAlani.querySelectorAll('.asis__m--oneri').forEach(function (o) { o.remove(); });
    var g = gizle(soru);
    ekle('k', '<p>' + kacir(g.s) + '</p>' + (g.degisti ? '<small class="asis__gizli-not">Kişisel bilgiler gönderilmeden gizlendi.</small>' : ''));
    soru = g.s;
    waBag.href = 'https://wa.me/' + V.waHam + '?text=' + encodeURIComponent('Merhaba, sitedeki asistana şunu sordum: ' + soru);
    if (++sayac > SINIR_MESAJ) {
      yanitla({ m: 'Bu sayfadaki soru sınırına ulaştınız. Devam etmek için ' + V.tel + ' numarasını arayabilir ya da WhatsApp\'tan yazabilirsiniz.' }, soru);
      return;
    }
    var K = ilkKural(sade(soru));
    /* acil, yapay zekâ, konum, randevu, test ve fotoğraf istekleri her durumda cihazda karşılanır */
    if (!CANLI || (K && /^(acil|yapay|adres|randevu|foto|test)$/.test(K.ad))) return yanitla(hazirYanit(soru), soru);
    if (!onay) return onayIste(function (evet) { evet ? uzaktan(soru) : yanitla(hazirYanit(soru), soru); });
    uzaktan(soru);
  }
  function yanitla(y, soru) {
    gecmis.push({ rol: 'k', metin: soru }, { rol: 'a', metin: y.m || '' });
    if (y.foto) { ekle('a', fotoKarti()); return; }
    ekle('a', (y.m ? bicimle(y.m) : '') + (y.harita ? haritaKarti() : '') + kartlar(y.k) +
      (y.form ? randevuAkisi(sonKonu()) : '') + (y.test ? testBaslat() : '') + (y.ek || '') + kaynakListesi(y.kaynak) + (y.eylem ? eylemler(y.k) : ''));
    if (y.m) oku(y.m);
  }
  /* son önerilen uygulama (randevu formunda konu olarak gelir) */
  var sonUyg = '';
  function sonKonu() { return sonUyg || (BURASI && BURASI.tur === 'Uygulama' ? BURASI.ad : ''); }
  /* yapay zekâ yanıtındaki site içi bağlantılar kart olarak da gösterilir */
  function bagKartlari(metin) {
    var gorulen = {}, liste = [];
    String(metin).replace(/\]\(\/([a-z0-9\-\/]+?)\/?(?:#[^)]*)?\)/g, function (_, yol) {
      var d = YOLDAN[yol.replace(/\/?$/, '/')];
      if (d && !gorulen[d.yol] && liste.length < 3) { gorulen[d.yol] = 1; liste.push(d); }
    });
    return liste;
  }
  function istek(govde, sure) {
    var iptal = window.AbortController ? new AbortController() : null;
    var zaman = setTimeout(function () { if (iptal) iptal.abort(); }, sure || 30000);
    return fetch(KOK + 'asistan.php', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin',
      body: JSON.stringify(govde), signal: iptal ? iptal.signal : undefined,
    }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (x) {
        clearTimeout(zaman);
        if (!x.ok || !x.j || typeof x.j.yanit !== 'string') throw new Error((x.j && x.j.hata) || 'yanit');
        return x.j;
      }, function (h) { clearTimeout(zaman); throw h; });
  }
  function uzaktan(soru) {
    bekliyor = true;
    var yaziyor = ekle('bekle', '<span></span><span></span><span></span><span class="gizli">Yanıt hazırlanıyor</span>');
    var gidecek = gecmis.slice(-6).concat([{ rol: 'k', metin: soru }]);
    istek({ mesajlar: gidecek, sayfa: document.title.slice(0, 120) })
      .then(function (j) {
        yaziyor.remove();
        var kartListe = bagKartlari(j.yanit);
        var kaynak = (j.kaynaklar || []).map(function (x) { return YOLDAN[x.y]; }).filter(Boolean)
          .filter(function (d) { return kartListe.indexOf(d) < 0; });
        yanitla({ m: j.yanit, k: kartListe, kaynak: kaynak, eylem: kartListe.length > 0 }, soru);
      })
      .catch(function (h) {
        yaziyor.remove();
        var y = hazirYanit(soru), sinir = /sinir/.test(String(h && h.message));
        y.m = (sinir ? 'Şu anda çok sayıda soru geliyor; ' : 'Yapay zekâ bağlantısı kurulamadı; ') + 'hazır bilgilerle yanıtlıyorum.\n' + y.m;
        yanitla(y, soru);
      })
      .then(function () { bekliyor = false; });
  }

  /* ---------- akıllı öneri kartı ----------
     Bulunulan sayfa bir uygulama, bölge ya da cilt sorunuysa; ziyaretçi sayfanın
     yarısına indiğinde ya da 25 sn geçtiğinde köşede tek bir öneri kartı çıkar.
     Kapatılırsa bu sayfada bir daha çıkmaz; hiçbir şey saklanmaz. */
  var oneriKarti = null, oneriGosterildi = false;
  function oneriSorulari(d) {
    if (d.tur === 'Uygulama') return [d.ad + ' kaç seans sürer?', d.ad + ' sonrası nelere dikkat etmeliyim?', 'Randevu almak istiyorum'];
    if (d.tur === 'Bölge') return [d.ad + ' için hangi uygulamalar var?', 'Randevu almak istiyorum'];
    return [d.ad + ' için nereden başlanır?', 'Randevu almak istiyorum'];
  }
  function oneriGoster() {
    if (oneriGosterildi || !panel.hidden || tanitim || !BURASI || !/^(Uygulama|Bölge|Cilt sorunu)$/.test(BURASI.tur)) return;
    oneriGosterildi = true;
    oneriKarti = document.createElement('aside');
    oneriKarti.className = 'asis-oneri';
    oneriKarti.setAttribute('aria-label', 'Asistan önerisi');
    oneriKarti.innerHTML = '<button type="button" class="asis-oneri__kapa" aria-label="Öneriyi kapat">' + ik.kapa + '</button>' +
      '<p class="asis-oneri__etiket">' + ik.sor + '<span>Ön bilgi asistanı</span></p>' +
      '<p class="asis-oneri__bas">' + kacir(BURASI.ad) + ' hakkında sorunuz mu var?</p>' +
      '<div class="asis-oneri__sorular">' + oneriSorulari(BURASI).map(function (s) { return '<button type="button">' + kacir(s) + '</button>'; }).join('') + '</div>';
    document.body.appendChild(oneriKarti);
    requestAnimationFrame(function () { oneriKarti.classList.add('asis-oneri--acik'); });
    oneriKarti.addEventListener('click', function (e) {
      if (e.target.closest('.asis-oneri__kapa')) { oneriKapat(); return; }
      var b = e.target.closest('.asis-oneri__sorular button');
      if (b) { var s = b.textContent; oneriKapat(); ac(false); setTimeout(function () { sor(s); }, 80); }
    });
  }
  function oneriKapat() { if (oneriKarti) { oneriKarti.remove(); oneriKarti = null; } }
  if (BURASI && /^(Uygulama|Bölge|Cilt sorunu)$/.test(BURASI.tur)) {
    var sure = setTimeout(oneriGoster, 25000);
    window.addEventListener('scroll', function izle() {
      var h = document.documentElement;
      if ((window.scrollY + window.innerHeight) / h.scrollHeight > 0.5) { clearTimeout(sure); window.removeEventListener('scroll', izle); oneriGoster(); }
    }, { passive: true });
  }

  /* ---------- tanıtım ekranı ----------
     Yalnız ana sayfada ve siteye DIŞARIDAN gelindiğinde açılır (iç gezinmede tekrar
     çıkmaz). Bunu hatırlamak için depolama kullanılmaz; ?asistan=tanitim ile zorlanabilir. */
  var tanitim = null;
  var disaridan = !document.referrer || document.referrer.indexOf(location.origin) !== 0;
  var anaSayfa = location.href.split('#')[0].split('?')[0].replace(KOK, '').replace(/index\.html$/, '') === '';
  function tanitimAc() {
    tanitim = document.createElement('div');
    tanitim.className = 'asis-tanit';
    tanitim.setAttribute('role', 'dialog');
    tanitim.setAttribute('aria-modal', 'true');
    tanitim.setAttribute('aria-labelledby', 'asis-tanit-bas');
    var oneriler = ['Hizmetleriniz neler?', 'Dövme silme nasıl ilerliyor?', 'Randevu almak istiyorum'];
    tanitim.innerHTML =
      '<div class="asis-tanit__ic">' +
        '<div class="asis-tanit__ust"><span class="asis-tanit__rozet"><i></i>Yeni · Ön bilgi asistanı</span>' +
          '<div class="asis-tanit__ses">' +
            (OKUMA_DESTEK ? '<button type="button" data-tanit-ses aria-pressed="false">' + ik.hop + '<span>Sesli yanıt</span></button>' : '') +
            (SES_DESTEK ? '<button type="button" data-tanit-konus>' + ik.mik + '<span>Bas, konuş</span></button>' : '') +
          '</div>' +
          '<button type="button" class="asis-tanit__kapa" data-tanit-kapa aria-label="Kapat">' + ik.kapa + '</button></div>' +
        '<div class="asis-tanit__govde">' +
          '<div class="asis-tanit__amblem" aria-hidden="true"><span class="asis-tanit__halka"></span><span class="asis-tanit__halka asis-tanit__halka--2"></span>' +
            '<span class="asis-tanit__cekirdek"><img src="' + KOK + V.amblem + '" alt=""></span></div>' +
          '<div class="asis-tanit__metin">' +
            '<p class="asis-tanit__etiket">' + kacir(V.hekim) + ' · ' + kacir(V.semt) + '</p>' +
            '<h2 id="asis-tanit-bas"><span data-tanit-yaz></span><i class="asis-tanit__imlec" aria-hidden="true"></i></h2>' +
            '<p class="asis-tanit__alt">Uygulamalar, bölgeler, cilt sorunları, randevu ve ulaşım hakkında sorunuzu yazın ya da söyleyin; sizi doğru sayfaya, gerekirse doğrudan hekime yönlendirelim.</p>' +
            '<div class="asis-tanit__oneriler">' + oneriler.map(function (s) { return '<button type="button" data-tanit-soru>' + kacir(s) + '</button>'; }).join('') + '</div>' +
            '<div class="asis-tanit__dugmeler"><button type="button" class="asis-tanit__git" data-tanit-git>Asistana geç ' + ik.ok + '</button>' +
              '<button type="button" class="asis-tanit__gez" data-tanit-kapa>Siteyi gezeyim</button></div>' +
          '</div></div></div>';
    document.body.appendChild(tanitim);
    kilitle();
    document.documentElement.classList.add('asis-tanit-acik');
    requestAnimationFrame(function () { tanitim.classList.add('asis-tanit--acik'); });
    /* başlık harf harf yazılır */
    var hedef = 'Sorunuzu yazın, doğru sayfayı birlikte bulalım.', yer = tanitim.querySelector('[data-tanit-yaz]'), i = 0;
    var azHareket = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (azHareket) yer.textContent = hedef;
    else (function yaz() { if (!tanitim) return; yer.textContent = hedef.slice(0, ++i); if (i < hedef.length) setTimeout(yaz, 34); })();
    tanitim.querySelector('[data-tanit-git]').focus({ preventScroll: true });
    tanitim.addEventListener('click', function (e) {
      var t = e.target;
      if (t.closest('[data-tanit-kapa]') || t === tanitim) tanitimKapat();
      else if (t.closest('[data-tanit-git]')) { tanitimKapat(); ac(); }
      else if (t.closest('[data-tanit-soru]')) { var s = t.closest('button').textContent; tanitimKapat(); ac(false); setTimeout(function () { sor(s); }, 80); }
      else if (t.closest('[data-tanit-ses]')) okumaDegistir();
      else if (t.closest('[data-tanit-konus]')) { tanitimKapat(); ac(false); setTimeout(dinle, 120); }
    });
    tanitim.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.stopPropagation(); tanitimKapat(); }
      if (e.key === 'Tab') {   /* odak tanıtım içinde kalır */
        var odaklar = tanitim.querySelectorAll('button'), ilk = odaklar[0], son = odaklar[odaklar.length - 1];
        if (e.shiftKey && document.activeElement === ilk) { e.preventDefault(); son.focus(); }
        else if (!e.shiftKey && document.activeElement === son) { e.preventDefault(); ilk.focus(); }
      }
    });
  }
  function tanitimKapat() {
    if (!tanitim) return;
    var t = tanitim; tanitim = null;
    document.documentElement.classList.remove('asis-tanit-acik');
    t.classList.remove('asis-tanit--acik');
    setTimeout(function () { t.remove(); }, 320);
    if (panel.hidden) kilitAc();
  }
  if (/[?&]asistan=tanitim\b/.test(location.search) || (anaSayfa && disaridan)) setTimeout(tanitimAc, 1400);
})();
