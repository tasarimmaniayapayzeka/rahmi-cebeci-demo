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

  /* Ön bilgi asistanı. canli:false iken yalnız sayfadaki hazır yanıtlarla
     çalışır (sunucuya, dışarıya hiçbir şey gitmez). Anahtar sunucuya
     kurulduktan sonra (bkz. sunucu/ASISTAN-KURULUM.md) canli:true yapılıp
     yeniden derlenir; KVKK metni ve asistan onay notu buna göre değişir. */
  asistan: {
    canli: false,
    saglayici: 'OpenAI',
    saglayiciUlke: 'ABD',
  },

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
    adres: 'Cevizlik Mah. Ebuzziya Cad. No:47/1',
    ilce: 'Bakırköy / İstanbul',
    semt: 'Bakırköy',
    tel: '0539 933 08 08',
    telHam: '+905399330808',
    wa: '+90 539 933 08 08',
    waHam: '905399330808',
    cep: '+90 539 933 08 08',
    cepHam: '+905399330808',
    eposta: 'info@rahmicebeci.com.tr',
    editor: 'info@rahmicebeci.com.tr',
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
    { grup: 'Enjeksiyonla Yapılanlar', kisa: 'Enjeksiyonlar', ikon: 'damla', ogeler: [
      ['Botulinum Toksin', 'botulinum-toksin', 'Kaş arası, alın ve göz kenarı çizgileri; terleme'],
      ['Dolgu Uygulamaları', 'dolgu-uygulamalari', 'Dudaktan elmacığa, yüzün kaybolan desteği'],
      ['Sıvı Yüz Germe', 'sivi-yuz-germe', 'Birkaç bölgenin tek planda ele alınması'],
      ['Gençlik Aşısı (Skinbooster)', 'genclik-asisi-skinbooster', 'Cildin su tutma gücüne yönelik ince enjeksiyon'],
      ['Somon DNA ve Polinükleotid', 'somon-dna-polinukleotid', 'Somon kaynaklı nükleotidlerle doku desteği'],
      ['Mezoterapi', 'mezoterapi', 'Kişiye göre hazırlanan karışımın deriye verilmesi'],
      ['PRP', 'prp', 'Kendi kanınızdan ayrıştırılan trombositten zengin plazma'],
      ['Biyostimülan Uygulamalar', 'biyostimulan-uygulamalar', 'Etkisi haftalar içinde ortaya çıkan kolajen uyarımı'],
      ['Eksozom', 'eksozom', 'Cihaz sonrası yüzeye uygulanan sinyal vezikülleri'],
      ['Bölgesel Lipoliz', 'bolgesel-lipoliz', 'Diyete direnen küçük yağ birikimleri için'],
      ['Selülit Görünümü', 'selulit-gorunumu', 'Portakal kabuğu görünümüne birleşik yaklaşım'],
    ]},
    { grup: 'Cihaz Destekli Uygulamalar', kisa: 'Cihaz ve Lazer', ikon: 'kalkan', ogeler: [
      ['Pico Lazer ile Dövme Silme', 'pico-lazer-dovme-silme', 'Siyah ve renkli dövmelerde kademeli açılma'],
      ['Pico Lazer ile Leke', 'pico-lazer-leke', 'Güneş ve yaş lekelerinde seçici atım'],
      ['Fraksiyonel Lazer', 'fraksiyonel-lazer', 'İz, gözenek ve doku için noktasal yenileme'],
      ['Altın İğne Radyofrekans', 'altin-igne-radyofrekans', 'Derinin alt katmanına iğne ucundan ısı'],
      ['HIFU — Ameliyatsız Sıkılaştırma', 'hifu-ameliyatsiz-yuz-germe', 'Kesi olmadan derin katmanda sıkılaşma hedefi'],
      ['İğnesiz Mezoterapi', 'ignesiz-mezoterapi', 'İğne kullanmadan etken maddenin deriye taşınması'],
      ['Karbon Peeling', 'karbon-peeling', 'Yağlı ve gözenekli ciltte lazerle arınma'],
    ]},
    { grup: 'Saç Sağlığı', kisa: 'Saç sağlığı', ikon: 'liste', ogeler: [
      ['Saç Mezoterapisi', 'sac-mezoterapisi', 'Kıl kökünün çevresini besleyen mikro enjeksiyon'],
      ['Saç PRP', 'sac-prp', 'Seyrelen bölgeye kendi plazmanız'],
    ]},
    { grup: 'Değerlendirme ve Takip', kisa: 'Değerlendirme', ikon: 'kalp', ogeler: [
      ['Hekim Muayenesi', 'hekim-muayenesi', 'Her kararın başladığı ilk görüşme'],
      ['Uygulama Sonrası Kontrol', 'uygulama-sonrasi-takip', 'İşlemden sonraki günler ve kontrol'],
    ]},
  ],

  bolgeler: [
    ['Yüz', 'yuz', 'Üst, orta ve alt yüz birlikte'],
    ['Göz Çevresi', 'goz-cevresi', 'Göz altı çukuru, kaz ayağı, kaş'],
    ['Dudak', 'dudak', 'Kontur, dolgunluk ve kuruluk'],
    ['Çene ve Jawline', 'cene-ve-jawline', 'Çene hattı, gıdı ve profil'],
    ['Saçlı Deri', 'sacli-deri', 'Saç ve saçlı deri uygulamaları'],
    ['Boyun ve Dekolte', 'boyun-ve-dekolte', 'Yatay çizgiler ve güneş izi'],
    ['El', 'el', 'El sırtı cildi'],
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
    { ad: 'Tanışalım', yol: '/klinik/', alt: [
      { ad: 'Muayenehanemiz', yol: '/klinik/', not: 'Muayenehane ve çalışma düzeni' },
      { ad: 'Hekim', yol: '/hekim/', not: 'Uzm. Dr. Rahmi Cebeci' },
      { ad: 'Randevudan kontrole', yol: '/yaklasimimiz/', not: 'Dört adımda planlama düzeni' },
      { ad: 'Soru ve yanıtlar', yol: '/sikca-sorulan-sorular/' },
      { ad: 'Okuma Köşesi', yol: '/bilgi/' },
      { ad: 'Cilt Eğilimi Testi', yol: '/cilt-tipi-testi/', not: 'On iki soruda cildinizin eğilimi' },
      { ad: 'Bölge Rehberi', yol: '/bolge-pusulasi/', not: 'Yüzden vücuda sekiz bölge' },
      { ad: 'Yan Yana Karşılaştır', yol: '/uygulama-karsilastirma/', not: 'Seçtiğiniz iki uygulama karşı karşıya' },
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
    ['Yayın ve Görsel Kullanım Esaslarımız', '/yasal/icerik-ve-gorsel-yayin-ilkelerimiz/'],
  ],

  guncelleme: '25.09.2026',
};
