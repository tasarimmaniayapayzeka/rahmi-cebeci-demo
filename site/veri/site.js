/* ============================================================
   SİTE GENELİ VERİ — tek kaynak
   Uzm. Dr. Rahmi Cebeci · Bakırköy · medikal estetik muayenehanesi
   ------------------------------------------------------------
   34. AYRI PROJE. 24-Medikal-Estetik (Salvera) ile KARIŞTIRILMAZ;
   oradan yalnız site motoru (render.js, css, js) alındı.
   Marka adı, adres, telefon, saatler, hizmet menüsü YALNIZ burada
   düzenlenir; sayfalar bu dosyadan okur.
   ============================================================ */

const MARKA = 'Dr. Rahmi Cebeci';
/* Demo yayını GitHub Pages'te. Alan adına geçince tek satır değişir:
   const ALAN = 'https://drrahmicebeci.com'; ve demo: false yapılır. */
const ALAN  = 'https://tasarimmaniayapayzeka.github.io/rahmi-cebeci-demo';

module.exports = {
  marka: MARKA,
  markaAlt: 'Medikal Estetik',
  alan: ALAN,
  dil: 'tr',

  /* true: her sayfaya noindex + üst demo şeridi basılır (sunum sürümü) */
  demo: true,

  hekim: {
    unvan: 'Uzm. Dr.',
    ad: 'Rahmi Cebeci',
    tam: 'Uzm. Dr. Rahmi Cebeci',
    dallar: 'Aile Hekimliği Uzmanı · Medikal Estetik Sertifikalı',
    dalKisa: 'Medikal estetik uygulamaları',
    mezuniyet: 'Hacettepe Üniversitesi Tıp Fakültesi (2005)',
    uzmanlik: 'Aile Hekimliği Uzmanlığı',
    sertifika: 'Sağlık Bakanlığı onaylı Medikal Estetik Uygulama Sertifikası',
    sertifikaYer: 'Ulus Liv Hospital',
    /* uzmanlık eğitimi sırasında rotasyon yapılan dallar ve görev yerleri */
    rotasyonlar: ['Endokrinoloji', 'Hematoloji', 'Genel Cerrahi', 'Psikiyatri', 'Kadın Hastalıkları ve Doğum', 'Çocuk Sağlığı ve Hastalıkları'],
    gorevYerleri: [
      'Ankara Atatürk Eğitim ve Araştırma Hastanesi',
      'Bakırköy Prof. Dr. Mazhar Osman Ruh Sağlığı ve Sinir Hastalıkları EAH',
      'Bakırköy Yenimahalle Kadın Doğum ve Çocuk Hastalıkları Hastanesi',
      'Ankara Dr. Sami Ulus Kadın Doğum, Çocuk Sağlığı ve Hastalıkları EAH',
    ],
  },

  iletisim: {
    adres: 'Cevizlik Mah. Ebuziya Cad. No:47/1',
    ilce: 'Bakırköy / İstanbul',
    semt: 'Bakırköy',
    tel: '0539 933 08 08',
    telHam: '+905399330808',
    wa: '+90 539 933 08 08',
    waHam: '905399330808',
    cep: '+90 539 933 08 08',
    cepHam: '+905399330808',
    /* ⚠️ e-posta adresi müşteriden teyit edilmedi — yer tutucu */
    eposta: 'randevu@drrahmicebeci.com',
    editor: 'randevu@drrahmicebeci.com',
    saatler: [
      ['Pazartesi – Cumartesi', '09:00 – 19:00'],
      ['Pazar', 'Kapalı'],
    ],
  },

  /* muayenehanedeki cihazlar — klinik sayfası ve cihaz uygulamaları için */
  cihazlar: [
    { ad: 'Pikosaniye lazer', model: 'Picodela II (Nd:YAG)', foto: 'cihaz-pico.webp', kullanim: 'Dövme silme, leke, karbon peeling', slug: 'pico-lazer-dovme-silme' },
    { ad: 'Fraksiyonel lazer', model: 'Fotona SP Dynamis', foto: 'cihaz-fotona.webp', kullanim: 'Cilt yenileme, iz ve leke', slug: 'fraksiyonel-lazer' },
    { ad: 'Altın iğne radyofrekans', model: 'Allura VI++ RF mikroiğne', foto: 'cihaz-altin-igne.webp', kullanim: 'Gözenek, iz, sıkılaşma', slug: 'altin-igne-radyofrekans' },
    { ad: 'HIFU', model: 'Allura IV++ Nano HIFU', foto: 'cihaz-hifu.webp', kullanim: 'Ameliyatsız sıkılaştırma', slug: 'hifu-ameliyatsiz-yuz-germe' },
    { ad: 'İğnesiz mezoterapi', model: 'Mes Button', foto: 'cihaz-mezo.webp', kullanim: 'İğnesiz aktif madde iletimi', slug: 'ignesiz-mezoterapi' },
  ],

  /* ---------- uygulama kataloğu — hub ve menü buradan üretilir ---------- */
  katalog: [
    { grup: 'Enjeksiyon Uygulamaları', kisa: 'Enjeksiyon', ikon: 'damla', ogeler: [
      ['Botulinum Toksin', 'botulinum-toksin', 'Mimik çizgileri, çiğneme kası ve aşırı terleme'],
      ['Dolgu Uygulamaları', 'dolgu-uygulamalari', 'Dudak, çene, jawline ve elmacıkta hacim desteği'],
      ['Sıvı Yüz Germe', 'sivi-yuz-germe', 'Yüzün bütününe yayılan, çok noktalı planlama'],
      ['Gençlik Aşısı (Skinbooster)', 'genclik-asisi-skinbooster', 'Hacim eklemeyen cilt nemi ve kalitesi uygulaması'],
      ['Somon DNA ve Polinükleotid', 'somon-dna-polinukleotid', 'Cilt yenilenmesini destekleyen mikro enjeksiyon'],
      ['Mezoterapi', 'mezoterapi', 'Cilt içi vitamin, mineral ve hyalüronik asit'],
      ['PRP', 'prp', 'Kişinin kendi kanından hazırlanan plazma'],
      ['Biyostimülan Uygulamalar', 'biyostimulan-uygulamalar', 'Kolajen üretimini zamana yayarak destekler'],
      ['Eksozom', 'eksozom', 'Cilt ve saçlı deride hücreler arası sinyal molekülleri'],
      ['Bölgesel Lipoliz', 'bolgesel-lipoliz', 'Gıdı, karın ve bel gibi lokal yağlanmalarda'],
      ['Selülit Görünümü', 'selulit-gorunumu', 'Cilt yüzeyi düzensizliğine yönelik protokol'],
    ]},
    { grup: 'Cihaz Destekli Uygulamalar', kisa: 'Cihaz ve Lazer', ikon: 'kalkan', ogeler: [
      ['Pico Lazer ile Dövme Silme', 'pico-lazer-dovme-silme', 'Pikosaniye atımlarla mürekkep parçacıklarının hedeflenmesi'],
      ['Pico Lazer ile Leke', 'pico-lazer-leke', 'Yüzeysel pigment birikimlerinde'],
      ['Fraksiyonel Lazer', 'fraksiyonel-lazer', 'Kontrollü mikro alanlarla cilt yenileme'],
      ['Altın İğne Radyofrekans', 'altin-igne-radyofrekans', 'Mikroiğne ile radyofrekans enerjisi'],
      ['HIFU — Ameliyatsız Sıkılaştırma', 'hifu-ameliyatsiz-yuz-germe', 'Odaklanmış ultrason ile taşıyıcı tabakaya enerji'],
      ['İğnesiz Mezoterapi', 'ignesiz-mezoterapi', 'Elektroporasyon ile aktif madde iletimi'],
      ['Karbon Peeling', 'karbon-peeling', 'Karbon losyonu ve pico lazerle yüzey yenileme'],
    ]},
    { grup: 'Saç ve Saçlı Deri', kisa: 'Saç', ikon: 'liste', ogeler: [
      ['Saç Mezoterapisi', 'sac-mezoterapisi', 'Saçlı deriye vitamin ve mineral enjeksiyonu'],
      ['Saç PRP', 'sac-prp', 'Kendi plazmanızın saçlı deriye uygulanması'],
    ]},
    { grup: 'Değerlendirme ve Takip', kisa: 'Değerlendirme', ikon: 'kalp', ogeler: [
      ['Hekim Muayenesi', 'hekim-muayenesi', 'Uygulama öncesi değerlendirme ve planlama'],
      ['Uygulama Sonrası Takip', 'uygulama-sonrasi-takip', 'İyileşmenin izlenmesi ve kontrol randevusu'],
    ]},
  ],

  bolgeler: [
    ['Yüz', 'yuz', 'Bütün olarak yüz planlaması'],
    ['Göz Çevresi', 'goz-cevresi', 'Göz altı, kaz ayağı, kaş bölgesi'],
    ['Dudak', 'dudak', 'Hacim, sınır ve nem'],
    ['Çene ve Jawline', 'cene-ve-jawline', 'Çene hattı, gıdı ve profil'],
    ['Boyun ve Dekolte', 'boyun-ve-dekolte', 'İnce cilt bölgesi'],
    ['El', 'el', 'El sırtı cildi'],
    ['Saçlı Deri', 'sacli-deri', 'Saç ve saçlı deri uygulamaları'],
    ['Vücut', 'vucut', 'Karın, bel, kol ve bacak — lipoliz, selülit, dövme'],
  ],

  sorunlar: [
    ['Mimik Çizgileri ve Kırışıklık', 'mimik-cizgileri-ve-kirisiklik'],
    ['Hacim Kaybı ve Sarkma', 'hacim-kaybi-ve-sarkma'],
    ['Göz Altı Koyuluğu', 'goz-alti-koyulugu'],
    ['Akne ve Akne İzi', 'akne-ve-akne-izi'],
    ['Cilt Tonu ve Leke', 'cilt-tonu-ve-leke'],
    ['Gözenek ve Cilt Dokusu', 'gozenek-ve-cilt-dokusu'],
    ['Ciltte Nem Kaybı ve Donukluk', 'nem-kaybi-ve-donukluk'],
    ['Saç Dökülmesi', 'sac-dokulmesi'],
    ['Aşırı Terleme', 'asiri-terleme'],
    ['Bölgesel Yağlanma', 'bolgesel-yaglanma'],
    ['Selülit Görünümü', 'selulit'],
    ['Dövme ve Kalıcı Makyaj', 'dovme-ve-kalici-makyaj'],
  ],

  // Üst menü: Klinik başa alınır, Uygulamalar/Bölgeler/Cilt Sorunları katalogtan üretilir
  menuEk: [
    { ad: 'Klinik', yol: '/klinik/', alt: [
      { ad: 'Hakkımızda', yol: '/klinik/', not: 'Muayenehane ve çalışma düzeni' },
      { ad: 'Hekim', yol: '/hekim/', not: 'Uzm. Dr. Rahmi Cebeci' },
      { ad: 'Nasıl çalışıyoruz', yol: '/yaklasimimiz/', not: 'Muayeneden takibe dört adım' },
      { ad: 'Sıkça sorulan sorular', yol: '/sikca-sorulan-sorular/' },
      { ad: 'Bilgi Merkezi', yol: '/bilgi/' },
      { ad: 'Cilt Tipi Testi', yol: '/cilt-tipi-testi/', not: 'Cihazınızda çalışan 12 soruluk eğilim testi' },
      { ad: 'Bölge Pusulası', yol: '/bolge-pusulasi/', not: 'Sekiz bölgeyi tek ekranda gezin' },
      { ad: 'Uygulama Karşılaştırma', yol: '/uygulama-karsilastirma/', not: 'İki uygulamayı yan yana inceleyin' },
    ]},
    { ad: 'Dövme Silme', yol: '/uygulamalar/pico-lazer-dovme-silme/' },
    { ad: 'İletişim', yol: '/iletisim/' },
  ],

  yasal: [
    ['KVKK Aydınlatma Metni', '/yasal/kvkk-aydinlatma-metni/'],
    ['Açık Rıza', '/yasal/acik-riza/'],
    ['Çerez Politikası', '/yasal/cerez-politikasi/'],
    ['Kullanım Koşulları', '/yasal/kullanim-kosullari/'],
    ['Hasta Hakları', '/yasal/hasta-haklari/'],
    ['İçerik ve Görsel Yayın İlkelerimiz', '/yasal/icerik-ve-gorsel-yayin-ilkelerimiz/'],
  ],

  guncelleme: '25.09.2026',
};
