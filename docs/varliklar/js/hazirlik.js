/* ============================================================
   GÖRÜŞME ÖNCESİ HAZIRLIK LİSTESİ
   ------------------------------------------------------------
   TASARIM KURALLARI (karar belgesi §8 — değiştirmeyin):
   1. Adı "test/tarama/analiz/risk skoru" DEĞİL. Bu bir hatırlatma listesidir.
   2. SEMPTOM SORUSU YOK. Yalnız kişinin ZATEN BİLDİĞİ tanı/ilaç/öykü sorulur.
      Araç veri toplar, ÇIKARIM YAPMAZ — teşhis olmaktan çıkaran tek karar budur.
   3. Cevaplar hiçbir yere GÖNDERİLMEZ. fetch yok, form action yok.
      localStorage KULLANILMAZ (cihazı paylaşan kişi görebilir) — yalnız bellek.
   4. Çıktı yazdırılabilir; WhatsApp/e-posta ile iletme yolu SUNULMAZ.
   5. Sonuç ekranında CTA YOKTUR (yönlendirme yasağı).
   6. Puan, yüzde, derece, "uygunsunuz/uygun değilsiniz" GÖSTERİLMEZ.
   7. 18 yaş kapısı sorulardan önce zorunludur.
   8. Tek sayfa, 12 soru. Sihirbaz değil. İlerleme çubuğu/geri sayım YOK.
   ============================================================ */
(function () {
  'use strict';

  var SORULAR = [
    { k: 'gebelik', s: 'Hamile misiniz, hamile olma ihtimaliniz var mı ya da emziriyor musunuz?',
      n: 'Uygulamaların gebelik ve emzirme döneminde güvenliliğine ilişkin veriler sınırlıdır; bu nedenle hekiminizin bilmesi gerekir.',
      evet: 'KIRMIZI', bilmiyorum: 'KIRMIZI', et: 'Gebelik veya emzirme durumu' },

    { k: 'aktif', s: 'İşlem düşündüğünüz bölgede şu anda aktif bir cilt sorunu var mı? (Örneğin: uçuk, iltihaplı sivilce, egzama alevlenmesi, mantar, açık yara, kesik, yeni dövme)',
      n: 'Uygulama bölgesinde aktif enfeksiyon veya iltihap varsa, işlemin ertelenmesi gerekebilir.',
      evet: 'KIRMIZI', bilmiyorum: 'SARI', et: 'Bölgede aktif cilt sorunu' },

    { k: 'noromuskuler', s: 'Sinir–kas sistemini etkileyen bir hastalığınız var mı (örneğin myasthenia gravis, Lambert-Eaton sendromu, ALS, kas hastalığı) ya da son iki hafta içinde aminoglikozid grubu bir antibiyotik (gentamisin, amikasin, tobramisin, neomisin) veya kas gevşetici bir ilaç kullandınız mı?',
      n: 'Bazı sinir–kas hastalıkları ve bazı antibiyotikler, kas üzerine etkili uygulamaların etkisini beklenmedik şekilde artırabilir.',
      evet: 'KIRMIZI', bilmiyorum: 'KIRMIZI', et: 'Sinir–kas hastalığı veya ilgili ilaç kullanımı' },

    { k: 'anafilaksi', s: 'Daha önce anafilaksi (ağır alerjik şok) geçirdiniz mi; çoklu ağır alerjiniz, lidokain veya lokal anestezik alerjiniz ya da daha önce bir enjeksiyon uygulamasına karşı gelişmiş bir reaksiyonunuz oldu mu?',
      n: 'Bazı ürünler amid tipi lokal anestezik içerir; ağır alerji öyküsü uygulama kararını doğrudan etkiler.',
      evet: 'KIRMIZI', bilmiyorum: 'KIRMIZI', et: 'Ağır alerji veya önceki enjeksiyon reaksiyonu öyküsü' },

    { k: 'izotretinoin', s: 'Son 6 ay içinde isotretinoin (yaygın ticari adlarıyla bilinen akne ilacı) kullandınız mı ya da hâlen kullanıyor musunuz?',
      n: 'Bu ilacın cilt yenileme uygulamalarıyla ilişkisi konusunda bilimsel görüşler farklılık göstermektedir; bu nedenle karar hekiminize aittir ve mutlaka bildirmeniz gerekir.',
      evet: 'SARI', bilmiyorum: 'SARI', et: 'Son 6 ayda isotretinoin kullanımı' },

    { k: 'kanama', s: 'Kan sulandırıcı bir ilaç kullanıyor musunuz (varfarin, yeni nesil kan sulandırıcılar, günlük aspirin, düzenli ağrı kesici, balık yağı, ginkgo) ya da bilinen bir kanama veya pıhtılaşma bozukluğunuz var mı?',
      n: 'Bu ilaçlar morarma ve kanama eğilimini artırabilir; uygulama planı buna göre değişebilir.',
      evet: 'SARI', bilmiyorum: 'SARI', et: 'Kan sulandırıcı ilaç veya kanama bozukluğu' },

    { k: 'otoimmun', s: 'Otoimmün bir hastalığınız var mı (romatoid artrit, lupus, Behçet, sedef, Hashimoto ve benzeri) ya da bağışıklık sistemini baskılayan bir tedavi mi alıyorsunuz (kortizon, biyolojik ilaç, kemoterapi, organ nakli sonrası ilaçlar)?',
      n: 'Bağışıklık sisteminizin durumu, iyileşme ve doku yanıtını etkileyebilir.',
      evet: 'SARI', bilmiyorum: 'SARI', et: 'Otoimmün hastalık veya bağışıklığı baskılayan tedavi' },

    { k: 'herpes', s: 'Yüzünüzde tekrarlayan uçuk (herpes) çıkma öykünüz var mı?',
      n: 'Bazı uygulamalar uçuğu tetikleyebilir; hekiminiz önceden koruyucu bir plan yapabilir.',
      evet: 'SARI', bilmiyorum: 'SARI', et: 'Tekrarlayan uçuk öyküsü' },

    { k: 'keloid', s: 'Yaralarınız kabarık iz (keloid veya hipertrofik skar) bırakarak mı iyileşir, ya da yaralarınızın iyileşmesi gecikir mi (örneğin kontrol altında olmayan şeker hastalığı nedeniyle)?',
      n: 'İz bırakma eğilimi, yüzey işlemlerinin planlanmasını değiştirir.',
      evet: 'SARI', bilmiyorum: 'SARI', et: 'Kabarık iz bırakma veya gecikmiş yara iyileşmesi' },

    { k: 'gunes', s: 'Son 4 hafta içinde yoğun güneşte kaldınız veya solaryuma girdiniz mi; ya da ışığa duyarlılığı artıran bir ilaç veya bitkisel ürün kullanıyor musunuz (doksisiklin ve benzeri antibiyotikler, bazı idrar söktürücüler, retinoidler, sarı kantaron)?',
      n: 'Bronzlaşmış cilt ve ışığa duyarlılık yapan ürünler, ışık ve enerji temelli uygulamalarda risk oluşturur.',
      evet: 'SARI', bilmiyorum: 'SARI', et: 'Yakın zamanda güneş maruziyeti veya ışığa duyarlılık' },

    { k: 'enfeksiyon', s: 'Şu anda ateşli veya gribal bir hastalık geçiriyor musunuz; son iki hafta içinde aşı oldunuz mu ya da diş tedavisi gördünüz mü?',
      n: 'Yakın zamanlı enfeksiyon, aşı ve diş işlemleri bazı uygulamalardan sonra gecikmiş reaksiyon riskini artırabilir.',
      evet: 'SARI', bilmiyorum: 'SARI', et: 'Yakın zamanlı enfeksiyon, aşı veya diş işlemi' },

    { k: 'oncekiislem', s: 'İşlem düşündüğünüz bölgeye daha önce dolgu, ip askı, yağ enjeksiyonu, implant veya cerrahi bir uygulama yapıldı mı?',
      n: 'Bölgedeki önceki uygulamalar anatomiyi değiştirebilir ve planı etkiler.',
      evet: 'SARI', bilmiyorum: 'SARI', et: 'Bölgede önceki uygulama veya cerrahi' },
  ];

  var SONUC = {
    A: {
      sinif: 'sonuc--a',
      baslik: 'Hekiminize mutlaka bildirin',
      giris: 'Cevaplarınızda, hekiminizin <b>mutlaka bilmesi gereken</b> başlıklar var. Bu, bir işlemin size yapılamayacağı anlamına <b>gelmez</b>; yalnızca kararın muayene sırasında hekiminizle birlikte verilmesi gerektiği anlamına gelir.',
    },
    B: {
      sinif: 'sonuc--b',
      baslik: 'Konuşmanız gereken başlıklar var',
      giris: 'Cevaplarınızda hekiminizle konuşmanız gereken <b>{n}</b> başlık var. Bunlar bir engel değil; planlamayı etkileyebilecek konulardır (örneğin zamanlama veya hazırlık).',
    },
    C: {
      sinif: 'sonuc--c',
      baslik: 'Bu listede belirgin başlık çıkmadı',
      giris: 'Bu kısa liste, hekiminizle konuşmanız gereken belirgin bir başlık göstermedi. <b>Bu, herhangi bir işlemin sizin için uygun veya güvenli olduğu anlamına gelmez.</b> Bu liste 12 maddeden ibarettir ve tıbbi öykünüzün tamamını kapsamaz.',
    },
  };

  var ORTAK_DIP =
    '<p>Bu liste bir teşhis, tarama testi veya uygunluk belgesi değildir ve hekim muayenesinin yerine geçmez. ' +
    'Bir işlemin yapılıp yapılamayacağına, ancak hekimin sizi bizzat muayene etmesi, tıbbi öykünüzü ve kullandığınız ' +
    'ilaçları ayrıntılı olarak alması ve aydınlatılmış onam süreci tamamlandıktan sonra karar verilir.</p>' +
    '<p>Bu liste nedeniyle hiçbir ilacınızı kesmeyin, dozunu değiştirmeyin veya hekiminize danışmadan yeni bir ürün kullanmayın.</p>' +
    '<p>Cevaplarınız yalnızca bu cihazda tutulmuştur; tarafımıza gönderilmemiş ve kaydedilmemiştir. Sayfayı kapattığınızda silinir.</p>';

  /* ---------- durum: yalnız bellekte ---------- */
  var cevaplar = {};

  var kap = document.querySelector('[data-hazirlik]');
  if (!kap) return;

  var kapi = kap.querySelector('[data-kapi]');
  var yas = kap.querySelector('[data-yas]');
  var govde = kap.querySelector('[data-govde]');
  var sonucKap = kap.querySelector('[data-sonuc]');
  var sayac = kap.querySelector('[data-sayac]');
  var gonderDgm = kap.querySelector('[data-goster]');
  var sifirlaDgm = kap.querySelector('[data-sifirla]');

  /* ---------- soruları bas ---------- */
  var html = '';
  SORULAR.forEach(function (q, i) {
    var no = ('0' + (i + 1)).slice(-2);
    html += '<div class="soru">' +
      '<span class="soru__no">Madde ' + no + '</span>' +
      '<p class="soru__met">' + q.s + '</p>' +
      '<p class="soru__nicin"><b>Bu neden soruluyor?</b> ' + q.n + '</p>' +
      '<div class="secenek">' +
        sec(q.k, 'evet', 'Evet') + sec(q.k, 'hayir', 'Hayır') + sec(q.k, 'bilmiyorum', 'Bilmiyorum') +
      '</div></div>';
  });
  govde.innerHTML = html;

  function sec(ad, deger, etiket) {
    return '<label><input type="radio" name="' + ad + '" value="' + deger + '"><span>' + etiket + '</span></label>';
  }

  /* ---------- 18 yaş kapısı ---------- */
  function kapiKontrol() {
    var acik = yas && yas.checked;
    govde.classList.toggle('gizle', !acik);
    kap.querySelector('[data-dip]').classList.toggle('gizle', !acik);
    if (acik) govde.querySelector('.soru').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  if (yas) yas.addEventListener('change', kapiKontrol);
  kapiKontrol();

  /* ---------- cevap yakala ---------- */
  govde.addEventListener('change', function (e) {
    var t = e.target;
    if (t && t.type === 'radio') { cevaplar[t.name] = t.value; guncelle(); }
  });

  function guncelle() {
    var n = Object.keys(cevaplar).length;
    sayac.textContent = n + ' / ' + SORULAR.length + ' madde işaretlendi';
    gonderDgm.disabled = n === 0;
  }
  guncelle();

  /* ---------- puanlama ---------- */
  function degerlendir() {
    var kirmizi = [], sari = [];
    SORULAR.forEach(function (q) {
      var c = cevaplar[q.k];
      if (!c || c === 'hayir') return;
      var d = (c === 'evet') ? q.evet : q.bilmiyorum;
      if (d === 'KIRMIZI') kirmizi.push(q.et);
      else if (d === 'SARI') sari.push(q.et);
    });
    var tip;
    if (kirmizi.length) tip = 'A';
    else if (sari.length >= 3) tip = 'A';
    else if (sari.length >= 1) tip = 'B';
    else tip = 'C';
    return { tip: tip, basliklar: kirmizi.concat(sari) };
  }

  /* ---------- sonuç ---------- */
  gonderDgm.addEventListener('click', function () {
    var r = degerlendir();
    var s = SONUC[r.tip];
    var giris = s.giris.replace('{n}', r.basliklar.length);
    var liste = r.basliklar.length
      ? '<p><b>Randevunuzda şu başlıkları söylemeyi unutmayın:</b></p><ul class="sonuc__basliklar">' +
        r.basliklar.map(function (b) { return '<li>' + b + '</li>'; }).join('') + '</ul>'
      : '<p>Kullandığınız ilaçları, geçirdiğiniz hastalıkları ve alerjilerinizi yine de randevunuzda hekiminize eksiksiz anlatın.</p>';

    sonucKap.className = 'sonuc ' + s.sinif;
    sonucKap.innerHTML =
      '<div class="sonuc__bas"><h2>' + s.baslik + '</h2></div>' +
      '<div class="sonuc__gvd"><p>' + giris + '</p>' + liste +
        '<div style="margin-top:6px"><button type="button" class="dgm dgm--iki dgm--kucuk" data-yazdir>' +
        'Yanımda götüreceğim notu yazdır</button></div></div>' +
      '<div class="sonuc__dip">' + ORTAK_DIP + '</div>';
    sonucKap.hidden = false;
    sonucKap.setAttribute('tabindex', '-1');
    sonucKap.scrollIntoView({ behavior: 'smooth', block: 'start' });
    sonucKap.focus({ preventScroll: true });
  });

  sonucKap.addEventListener('click', function (e) {
    if (e.target.closest('[data-yazdir]')) window.print();
  });

  sifirlaDgm.addEventListener('click', function () {
    cevaplar = {};
    govde.querySelectorAll('input[type=radio]').forEach(function (i) { i.checked = false; });
    sonucKap.hidden = true;
    sonucKap.innerHTML = '';
    guncelle();
    govde.querySelector('.soru').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* sayfadan ayrılırken bellekteki cevapları temizle */
  window.addEventListener('pagehide', function () { cevaplar = {}; });
})();
