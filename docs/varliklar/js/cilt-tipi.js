/* ============================================================
   Cilt Eğilimi Öz Değerlendirmesi — tamamı cihazda, yalnız bellekte.
   Desen: hazirlik.js ile aynı ilkeler — puan/yüzde GÖSTERİLMEZ,
   sonuç hekim onaylı SABİT metinlerden seçilir, CTA yok,
   veri saklanmaz (çerez/localStorage yok).
   ============================================================ */
(function () {
  'use strict';
  var kap = document.querySelector('[data-cilt-tipi]');
  if (!kap) return;
  var govde = kap.querySelector('[data-ct-govde]');

  /* eksenler: nem (nem-yağ dengesi) · has (hassasiyet) · leke (leke eğilimi)
     seçenek puanı: 0 / 1 / 2 — yalnız kademeyi seçmek için, asla gösterilmez */
  var SORULAR = [
    { e: 'nem', s: 'Yüzünüzü sabunla veya temizleyiciyle yıkadıktan yarım saat sonra cildiniz genellikle nasıl hisseder?',
      c: ['Rahat, fark etmiyorum', 'Hafif gergin veya kuru', 'Belirgin gerginlik, pullanma ya da tam tersi hızlı parlama'] },
    { e: 'nem', s: 'Gün ortasında alın, burun ve çene bölgeniz (T bölgesi) nasıl görünür?',
      c: ['Mat veya dengeli', 'Hafif parlama olur', 'Belirgin parlama; kâğıt mendil değdirsem iz bırakır'] },
    { e: 'nem', s: 'Nemlendirici kullanmadığınız bir günde cildiniz sizi uyarır mı?',
      c: ['Hayır, fark etmem', 'Akşama doğru kuruluk hissederim', 'Kısa sürede gerginlik, pullanma veya aşırı yağlanma olur'] },
    { e: 'nem', s: 'Gözenek görünümünüzü nasıl tarif edersiniz?',
      c: ['Zor fark edilir', 'Burun çevresinde seçilebilir', 'Yanaklarda da belirgin görünür'] },
    { e: 'has', s: 'Yeni bir kozmetik ürünü ilk kez denediğinizde ne olur?',
      c: ['Genellikle sorun yaşamam', 'Ara sıra batma veya kızarıklık olur', 'Sık sık yanma, kaşıntı veya kızarıklık gelişir'] },
    { e: 'has', s: 'Rüzgâr, soğuk hava veya sıcak değişimlerinde yüzünüz nasıl tepki verir?',
      c: ['Belirgin değişiklik olmaz', 'Geçici kızarıklık olur', 'Uzun süren kızarıklık, yanma veya kuruluk gelişir'] },
    { e: 'has', s: 'Parfümlü veya köpüren ürünler cildinizde iz bırakır mı?',
      c: ['Hayır', 'Bazen hafif rahatsızlık verir', 'Çoğunlukla batma/kızarıklık yapar, tercih etmem'] },
    { e: 'has', s: 'Yüzünüzde sebepsiz kızarma veya sıcak basması olur mu?',
      c: ['Nadiren', 'Ayda birkaç kez', 'Haftada birkaç kez veya daha sık'] },
    { e: 'leke', s: 'Cildinizde bir sivilce veya yara iyileştikten sonra ne olur?',
      c: ['İz kalmaz', 'Pembelik/koyuluk olur ama haftalar içinde solar', 'Aylarca süren koyu iz kalır'] },
    { e: 'leke', s: 'Güneşe korunmasız çıktığınızda cildiniz nasıl tepki verir?',
      c: ['Nadiren renklenir', 'Kolay bronzlaşır', 'Hızla renklenir ve lekelenmeye eğilimlidir'] },
    { e: 'leke', s: 'Yüzünüzde mevcut leke, çil veya renk düzensizliği var mı?',
      c: ['Yok denecek kadar az', 'Birkaç bölgede var', 'Belirgin ve zamanla artıyor'] },
    { e: 'leke', s: 'Ailenizde (anne, baba, kardeş) belirgin cilt lekesi öyküsü var mı?',
      c: ['Bilmiyorum / yok', 'Hafif düzeyde var', 'Belirgin şekilde var'] },
  ];

  /* hekim onaylı sabit sonuç metinleri — kademe: 0 az · 1 orta · 2 belirgin */
  var SONUC = {
    nem: {
      ad: 'Nem–yağ dengesi',
      m: [
        'Tarifinize göre cildinizin nem–yağ dengesi günlük yaşamda sizi pek uyarmıyor. Bu, bakım rutininin sade tutulabileceğini düşündürür; mevsim geçişlerinde ihtiyaç değişebilir.',
        'Tarifinize göre cildiniz zaman zaman kuruluk veya parlama ile kendini hatırlatıyor. Temizleyici seçimi ve nemlendirme düzeni muayenede konuşulmaya değer başlıklardır.',
        'Tarifinize göre cildinizin nem–yağ dengesi gündelik yaşamda belirgin şekilde hissediliyor. Bariyer destekleyici bir düzen ve doğru temizleyici seçimi muayenede öncelikli konuşulacak konulardır.'],
    },
    has: {
      ad: 'Hassasiyet eğilimi',
      m: [
        'Dış etkenlere ve yeni ürünlere karşı belirgin bir duyarlılık tarif etmiyorsunuz. Yine de her yeni ürünü tek tek denemek genel bir sağduyu kuralıdır.',
        'Cildiniz bazı ürün ve koşullara ara sıra tepki veriyor. Tetikleyicilerin ayrımı (ürün içeriği mi, hava koşulu mu, başka bir neden mi) muayenede netleştirilebilir.',
        'Sık tekrarlayan batma, kızarıklık veya yanma tarif ediyorsunuz. Bu tablo "hassas cilt" başlığı altında tek bir nedene bağlanamaz; ayrımın muayenede yapılması özellikle önemlidir.'],
    },
    leke: {
      ad: 'Leke eğilimi',
      m: [
        'İz ve leke bırakma eğilimini düşük tarif ediyorsunuz. Güneş koruması yine de her cilt için temel bakım adımıdır.',
        'Cildiniz zaman zaman iz bırakıyor veya renkleniyor. Güneş korumasının düzeni ve mevcut renk değişikliklerinin tipi muayenede değerlendirilebilir.',
        'Belirgin bir iz ve leke eğilimi tarif ediyorsunuz. Lekenin tipi belirlenmeden leke uygulamalarına geçilmez; bu ayrım muayenenin ana konusudur.'],
    },
  };

  var yanit = [];  /* yalnız bellekte */
  var sira = 0;

  function ilerleme() {
    return '<div style="height:6px;border-radius:99px;background:var(--buz-3,#EADFCC);overflow:hidden;margin-bottom:18px">' +
      '<span style="display:block;height:100%;width:' + Math.round(sira / SORULAR.length * 100) + '%;background:var(--petrol);transition:width .3s"></span></div>' +
      '<p style="font-size:.78rem;color:var(--sessiz);margin-bottom:10px">Soru ' + (sira + 1) + ' / ' + SORULAR.length + '</p>';
  }

  function soruCiz() {
    var q = SORULAR[sira];
    govde.innerHTML = '<div class="kutu">' + ilerleme() +
      '<h2 style="font-size:1.15rem;margin-bottom:16px">' + q.s + '</h2>' +
      '<div style="display:grid;gap:10px">' + q.c.map(function (m, i) {
        return '<button type="button" class="dgm dgm--iki" style="justify-content:flex-start;text-align:left;min-height:52px;height:auto;padding:14px 18px;line-height:1.4;white-space:normal" data-ct-sec="' + i + '">' + m + '</button>';
      }).join('') + '</div>' +
      (sira > 0 ? '<button type="button" class="dgm dgm--kucuk" style="margin-top:14px;border:0;color:var(--sessiz)" data-ct-geri>← Önceki soru</button>' : '') +
      '</div>';
    govde.querySelectorAll('[data-ct-sec]').forEach(function (b) {
      b.addEventListener('click', function () {
        yanit[sira] = +b.dataset.ctSec;
        sira++;
        if (sira < SORULAR.length) soruCiz(); else sonucCiz();
      });
    });
    var geri = govde.querySelector('[data-ct-geri]');
    if (geri) geri.addEventListener('click', function () { sira--; soruCiz(); });
    /* mobilde soru/sonuç ekran dışında kalıyordu (12 Ağu denetimi) */
    if (sira > 0) govde.firstElementChild.scrollIntoView({ block: 'start' });
  }

  function kademe(toplam) { return toplam <= 2 ? 0 : (toplam <= 5 ? 1 : 2); }
  var KADEME_AD = ['az belirgin', 'ara düzeyde', 'belirgin'];

  function sonucCiz() {
    var toplamlar = { nem: 0, has: 0, leke: 0 };
    SORULAR.forEach(function (q, i) { toplamlar[q.e] += (yanit[i] || 0); });
    var bolumler = ['nem', 'has', 'leke'].map(function (e) {
      var k = kademe(toplamlar[e]);
      return '<div class="kutu kutu--bilgi" style="margin-top:14px"><b>' + SONUC[e].ad +
        ' — eğilim ' + KADEME_AD[k] + '</b><p>' + SONUC[e].m[k] + '</p></div>';
    }).join('');
    govde.innerHTML = '<div data-ct-sonuc>' +
      '<div class="kutu"><b style="font-family:var(--font-baslik);font-size:1.2rem">Cilt tarifiniz hazır</b>' +
      '<p style="margin-top:8px;font-size:.9rem;color:var(--govde)">Aşağıdaki ifadeler verdiğiniz yanıtların tarifidir; tanı değildir ve muayene bulgularının yerine geçmez. Dilerseniz yazdırıp muayeneye getirebilirsiniz — cildinizi anlatmayı kolaylaştırır.</p></div>' +
      bolumler +
      '<div class="kutu" style="margin-top:14px"><b>Muayenede konuşabileceğiniz başlıklar</b>' +
      '<p>Temizleyici ve nemlendirici düzeniniz · tetikleyici olabilecek ürün ve koşullar · güneş koruması alışkanlığınız · varsa mevcut leke ve izlerin süresi.</p></div>' +
      '<div class="dgm-sira" style="margin-top:18px">' +
      '<button type="button" class="dgm dgm--iki" data-ct-yazdir>Sonucu yazdır</button>' +
      '<button type="button" class="dgm dgm--iki" data-ct-sil>Ekrandan kaldır</button>' +
      '<button type="button" class="dgm dgm--iki" data-ct-tekrar>Yeniden başla</button>' +
      '</div></div>';
    govde.querySelector('[data-ct-yazdir]').addEventListener('click', function () { window.print(); });
    govde.querySelector('[data-ct-sil]').addEventListener('click', function () {
      yanit = []; sira = 0;
      govde.innerHTML = '<div class="kutu" style="text-align:center;padding:30px"><p>Sonuç ekrandan kaldırıldı; hiçbir veri saklanmadı.</p></div>';
    });
    govde.querySelector('[data-ct-tekrar]').addEventListener('click', function () { yanit = []; sira = 0; soruCiz(); });
  }

  kap.querySelector('[data-ct-basla]').addEventListener('click', soruCiz);
})();
