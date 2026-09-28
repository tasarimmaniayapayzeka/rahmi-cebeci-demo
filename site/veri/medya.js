/* ============================================================
   MEDYA — sitedeki her görselin kimliği (tek kaynak)
   Anahtar: site/varliklar/ altındaki yol. Her kayıt:
     ad     WordPress ortam kütüphanesindeki dosya adı (uzantısız; SEO: konu kelimesi başta, Türkçe harfsiz)
     alt    alt metin — sayfalarda bu görseli kullanan HER <img>'e yazılır (statik ve WordPress)
     baslik ortam kütüphanesinde görünen başlık
     sayfada (isteğe bağlı) aynı görsel iki sayfanın kapağıysa sayfaya özel alt metin: { 'sayfa/yolu': '…' }
   Alt metin kuralları (00-SEO-STANDART/ICERIK-URETIM-STANDARDI.md):
     - görselde ne varsa onu anlatır; "görsel/resim" diye başlamaz; 125 karakteri geçmez
     - sayfa kapağında sayfanın odak kelimesi doğal biçimde geçer (sayfa yanında not edildi)
     - sonuç vaadi, önce-sonra ima eden ifade yok (Tanıtım Yönetmeliği); her görselin metni farklı
   Yeni görsel eklenirse buraya da kayıt eklenir — eksikse render.js ve wp-aktar.js durur.
   WordPress'e aktarım: node site/wp-aktar.js → wp-mu/rc-icerik.json "medya" → rc-aktar.php (sunucudaki
   /varliklar/ dosyasından kopyalar; panelde değiştirilen alt/başlığa sonraki aktarımda dokunmaz).
   ============================================================ */

const TABLO = {
  /* ---------- marka ---------- */
  'foto/amblem.png': { ad: 'dr-rahmi-cebeci-logo-amblem', alt: 'Dr. Rahmi Cebeci logosu', baslik: 'Logo — CR amblemi (site başlığı)' },
  'marka/rahmi-cebeci-amblem-1024.png': { ad: 'dr-rahmi-cebeci-logo-kare', alt: 'Dr. Rahmi Cebeci logosu, altın CR amblemi', baslik: 'Logo — kare, şeffaf (Yoast kuruluş logosu)' },
  'marka/rahmi-cebeci-paylasim-1200x630.png': { ad: 'dr-rahmi-cebeci-paylasim-gorseli', alt: 'Dr. Rahmi Cebeci Bakırköy medikal estetik muayenehanesi logosu', baslik: 'Paylaşım görseli 1200×630 (Yoast site görseli)' },

  /* ---------- hekim ve muayenehane (gerçek fotoğraflar) ---------- */
  'foto/hekim-portre.webp': { ad: 'uzm-dr-rahmi-cebeci-portre', alt: 'Uzm. Dr. Rahmi Cebeci, Bakırköy’deki muayenehanesinde ayakta ve kolları bağlı', baslik: 'Uzm. Dr. Rahmi Cebeci — portre' },   /* hekim · rahmi cebeci */
  'foto/hekim-koltuk.webp': { ad: 'muayene-sureci-dr-rahmi-cebeci', alt: 'Muayene sürecini yürüten Uzm. Dr. Rahmi Cebeci, Bakırköy’deki muayenehanesinde koltukta otururken', baslik: 'Uzm. Dr. Rahmi Cebeci — muayenehanede' },   /* yaklasimimiz · muayene süreci */
  'foto/hekim-kare.webp': { ad: 'hekim-muayenesi-dr-rahmi-cebeci', alt: 'Hekim muayenesini yapan Uzm. Dr. Rahmi Cebeci, muayenehanesindeki koltuğunda', baslik: 'Uzm. Dr. Rahmi Cebeci — hekim muayenesi' },   /* uygulamalar/hekim-muayenesi · hekim muayenesi */
  'foto/klinik-bekleme.webp': { ad: 'bakirkoy-muayenehane-bekleme-salonu', alt: 'Dr. Rahmi Cebeci’nin Bakırköy muayenehanesindeki bekleme salonu', baslik: 'Muayenehane — bekleme salonu' },   /* klinik · bakırköy muayenehane */
  'foto/klinik-bekleme-2.webp': { ad: 'iletisim-ve-randevu-karsilama-bankosu', alt: 'İletişim ve randevu işlemlerinin yapıldığı karşılama bankosu ve muayenehanenin bekleme salonu', baslik: 'Muayenehane — karşılama bankosu' },   /* iletisim · iletişim ve randevu */
  'foto/klinik-cihaz-odasi.webp': { ad: 'dovme-silme-pikosaniye-lazer-cihaz-odasi', alt: 'Dövme silme için kullanılan pikosaniye lazer cihazının pencere önünde durduğu cihaz odası', baslik: 'Muayenehane — lazer ve cihaz odası' },   /* 28 Eyl'e kadar dövme silme kapağıydı; şu an sayfada yok, kütüphanede duruyor */
  'foto/klinik-uygulama-odasi.webp': { ad: 'bakirkoy-muayenehane-uygulama-odasi', alt: 'Bakırköy muayenehanemizde uygulamaların yapıldığı uygulama odası', baslik: 'Muayenehane — uygulama odası' },
  'foto/prp-tupler.webp': { ad: 'sac-prp-kan-tupleri', alt: 'Saç PRP için alınan kanın konduğu etiketli tüpler', baslik: 'Saç PRP — kan tüpleri' },
  'foto/cihaz-pico-dekupe.webp': { ad: 'pikosaniye-lazer-cihazi-picodela-ii', alt: 'Muayenehanede kullanılan pikosaniye lazer cihazı Picodela II (Nd:YAG)', baslik: 'Cihaz — Picodela II pikosaniye lazer' },
  'foto/cihaz-fotona-dekupe.webp': { ad: 'fraksiyonel-lazer-cihazi-fotona-sp-dynamis', alt: 'Muayenehanede kullanılan fraksiyonel lazer cihazı Fotona SP Dynamis', baslik: 'Cihaz — Fotona SP Dynamis' },
  'foto/cihaz-altin-igne-dekupe.webp': { ad: 'altin-igne-radyofrekans-cihazi-allura', alt: 'Muayenehanede kullanılan altın iğne radyofrekans cihazı Allura VI++ RF mikroiğne', baslik: 'Cihaz — Allura VI++ RF mikroiğne' },
  'foto/cihaz-hifu-dekupe.webp': { ad: 'hifu-cihazi-allura-nano-hifu', alt: 'Muayenehanede kullanılan HIFU cihazı Allura IV++ Nano HIFU', baslik: 'Cihaz — Allura IV++ Nano HIFU' },
  'foto/cihaz-mezo-dekupe.webp': { ad: 'ignesiz-mezoterapi-cihazi-mes-button', alt: 'Muayenehanede kullanılan iğnesiz mezoterapi cihazı Mes Button', baslik: 'Cihaz — Mes Button iğnesiz mezoterapi' },

  /* ---------- sayfa kapakları (üst kısım) ---------- */
  'gorsel/bolgeler-hero.webp': { ad: 'medikal-estetik-bolgeleri-yuz-boyun-omuz', alt: 'Medikal estetik bölgeleri: yüzü, boynu ve omuzları yumuşak ışıkta görünen kadın', baslik: 'Bölgeler — kapak' },   /* bolgeler · medikal estetik bölgeleri */
  'gorsel/bolge-yuz.webp': { ad: 'yuz-estetigi-dogal-portre', alt: 'Yüz estetiğinde bütüncül bakışı anlatan, sade fonda önden bakan doğal görünümlü kadın yüzü', baslik: 'Bölge — yüz',
    sayfada: { 'bolge-pusulasi': 'Bölge rehberi: sade fonda önden bakan, doğal görünümlü bir kadın yüzü' } },   /* bolgeler/yuz · yüz estetiği; bolge-pusulasi · bölge rehberi */
  'gorsel/ic3d-goz.webp': { ad: 'goz-cevresi-alt-goz-kapagi-3d', alt: 'Göz çevresi: alt göz kapağı ve göz kenarının yakın plan üç boyutlu çizimi', baslik: 'Bölge — göz çevresi (3B)' },   /* bolgeler/goz-cevresi · göz çevresi */
  'gorsel/ic3d-dudak.webp': { ad: 'dudak-dolgusu-dudak-kenari-3d', alt: 'Dudak dolgusu öncesi değerlendirilen dudak kenarı ve yüzey dokusunun üç boyutlu yakın çizimi', baslik: 'Bölge — dudak (3B)' },   /* bolgeler/dudak · dudak dolgusu */
  'gorsel/bolge-cene-ve-jawline.webp': { ad: 'cene-hatti-jawline-profil', alt: 'Çene hattı belirgin bir kadının yandan yakın plan görünümü', baslik: 'Bölge — çene hattı' },   /* bolgeler/cene-ve-jawline · çene hattı */
  'gorsel/bolge-boyun-ve-dekolte.webp': { ad: 'boyun-ve-dekolte-3d', alt: 'Boyun ve dekolte bölgesini gösteren üç boyutlu stilize çizim', baslik: 'Bölge — boyun ve dekolte (3B)' },   /* bolgeler/boyun-ve-dekolte · boyun ve dekolte */
  'gorsel/bolge-sacli-deri.webp': { ad: 'sacli-deri-sac-cizgisi-portre', alt: 'Saçlı deri ve düzgün saç çizgisi görünen, sade fonda çekilmiş kadın portresi', baslik: 'Bölge — saçlı deri' },   /* bolgeler/sacli-deri · saçlı deri */
  'gorsel/bolge-el.webp': { ad: 'el-estetigi-el-sirti-3d', alt: 'El estetiğinde değerlendirilen el sırtı derisini gösteren üç boyutlu stilize çizim', baslik: 'Bölge — el (3B)' },   /* bolgeler/el · el estetiği */
  'gorsel/bolge-vucut.webp': { ad: 'vucut-estetigi-bel-karin-3d', alt: 'Vücut estetiğinde ele alınan bel ve karın bölgesinin üç boyutlu stilize çizimi', baslik: 'Bölge — vücut (3B)' },   /* bolgeler/vucut · vücut estetiği */
  'gorsel/grup-cilt-bakimi.webp': { ad: 'cilt-sorunlari-jel-bakim', alt: 'Cilt sorunlarına yönelik bakımda yüze jel kıvamında ürün uygulanırken çekilmiş sakin bir kare', baslik: 'Cilt sorunları — kapak' },   /* cilt-sorunlari · cilt sorunları */
  'gorsel/grup-cihaz.webp': { ad: 'medikal-estetik-uygulamalari-lazer-basligi', alt: 'Medikal estetik uygulamalarında kullanılan lazer cihazı başlığının tepside yakın plan görüntüsü', baslik: 'Uygulamalar — kapak' },   /* uygulamalar · medikal estetik uygulamaları */
  'gorsel/anasayfa-hero.webp': { ad: 'sik-sorulan-sorular-soru-soran-kadin', alt: 'Aydınlık bir odada oturmuş, sık sorulan sorulardan birini soran kadın', baslik: 'Sık sorulan sorular — kapak' },   /* sikca-sorulan-sorular · sık sorulan sorular */
  'gorsel/bilgi-hero.webp': { ad: 'okuma-kosesi-deri-katmanlari-defter', alt: 'Okuma köşesinde, masada deri katmanlarının çizildiği açık defter ve dolma kalem', baslik: 'Okuma köşesi — kapak' },   /* bilgi · okuma köşesi */
  'gorsel/mevzuat-hero.webp': { ad: 'tanitim-yonetmeligi-mevzuat-belgeleri', alt: 'Tanıtım yönetmeliği ve sağlık mevzuatını simgeleyen belge yığını, dolma kalem ve masa lambası', baslik: 'Mevzuat — kapak' },   /* mevzuat · tanıtım yönetmeliği */
  'gorsel/yuz-3d.webp': { ad: 'gorusmeye-hazirlik-yuz-profili-3d', alt: 'Görüşmeye hazırlık rehberinde yandan görülen kadın yüzünün üç boyutlu çizimi', baslik: 'Hazırlık listesi — kapak (3B)' },   /* hazirlik-listesi · görüşmeye hazırlık */
  'gorsel/ic3d-gece-yuz.webp': { ad: 'yapilmayan-islemler-koyu-yuz-calismasi', alt: 'Yapılmayan işlemler konusunu karşılayan, koyu tonlarda sakin ifadeli bir yüz çalışması', baslik: 'Yapmadığımız işlemler — kapak' },   /* yaklasimimiz/neden-bazi-islemleri-yapmiyoruz · yapılmayan işlemler */

  /* cilt sorunları kapakları */
  'gorsel/sorun-akne-ve-akne-izi.webp': { ad: 'akne-izi-yanak-cilt-dokusu', alt: 'Akne izi değerlendirmesinde incelenen yanak cildi yüzey dokusunun yumuşak ışıkta yakın çekimi', baslik: 'Akne ve akne izi — kapak' },   /* akne izi */
  'gorsel/sorun-terleme.webp': { ad: 'asiri-terleme-su-damlalari', alt: 'Aşırı terleme sorununu simgeleyen, açık mavi yüzeyde irili ufaklı su damlaları', baslik: 'Aşırı terleme — kapak' },   /* aşırı terleme */
  'gorsel/sorun-yag.webp': { ad: 'bolgesel-yaglanma-bel-karin-silueti', alt: 'Bölgesel yağlanmanın sık görüldüğü bel ve karın hattını yumuşak ışıkla gösteren vücut silueti', baslik: 'Bölgesel yağlanma — kapak' },   /* bölgesel yağlanma */
  'gorsel/sorun-cilt-tonu-ve-leke.webp': { ad: 'cilt-lekesi-elmacik-bolgesi', alt: 'Elmacık bölgesinde açık kahverengi cilt lekesi bulunan yüz cildinin yakın çekimi', baslik: 'Cilt tonu ve leke — kapak' },   /* cilt lekesi */
  'gorsel/sorun-dovme-ve-kalici-makyaj.webp': { ad: 'kalici-makyaj-silme-lazer-basligi', alt: 'Dövme ve kalıcı makyaj silme işleminde kullanılan lazer başlığının yakın görünümü', baslik: 'Dövme ve kalıcı makyaj — kapak' },   /* kalıcı makyaj silme */
  'gorsel/sorun-goz-alti-koyulugu.webp': { ad: 'goz-alti-koyulugu-dogal-isik', alt: 'Göz altı koyuluğu değerlendirmesi için doğal ışıkta göz çevresinin yakın plan görünümü', baslik: 'Göz altı koyuluğu — kapak' },   /* göz altı koyuluğu */
  'gorsel/sorun-gozenek-ve-cilt-dokusu.webp': { ad: 'belirgin-gozenek-cilt-dokusu-makro', alt: 'Yanak ve burun geçişinde belirgin gözenek ve cilt dokusunu gösteren makro çekim', baslik: 'Gözenek ve cilt dokusu — kapak' },   /* belirgin gözenek */
  'gorsel/sorun-hacim-kaybi-ve-sarkma.webp': { ad: 'hacim-kaybi-elmacik-cene-hatti', alt: 'Hacim kaybı ve sarkmada izlenen elmacık ve çene hattının yumuşak ışıklı yan portresi', baslik: 'Hacim kaybı ve sarkma — kapak' },   /* hacim kaybı */
  'gorsel/sorun-mimik-cizgileri.webp': { ad: 'mimik-cizgileri-goz-kenari', alt: 'Göz kenarında hafif mimik çizgileri görülen, gülümseyen bir kadın yüzü', baslik: 'Mimik çizgileri — kapak' },   /* mimik çizgileri */
  'gorsel/sorun-nem-kaybi-ve-donukluk.webp': { ad: 'nem-kaybi-cilt-su-damlasi', alt: 'Ciltte nem kaybı konusunu simgeleyen, cilt yüzeyinde parlayan küçük su damlasının yakın çekimi', baslik: 'Nem kaybı ve donukluk — kapak' },   /* nem kaybı */
  'gorsel/sorun-sac-dokulmesi.webp': { ad: 'sac-dokulmesi-tarak-sac-telleri', alt: 'Saç dökülmesi konusunda mermer yüzeyde ahşap tarak ve birkaç saç telinden oluşan sade kompozisyon', baslik: 'Saç dökülmesi — kapak' },   /* saç dökülmesi */
  'gorsel/sorun-selulit.webp': { ad: 'selulit-nedir-uyluk-deri-dokusu', alt: 'Selülit nedir: uyluk arka yüzündeki doğal deri dokusunun yan ışıkta görünümü', baslik: 'Selülit — kapak' },   /* selülit nedir */

  /* uygulama kapakları (tablo satırlarında da küçük resim olarak geçer) */
  'gorsel/uyg-botulinum-toksin.webp': { ad: 'botulinum-toksin-alin-goz-cevresi', alt: 'Botulinum toksin uygulamasında değerlendirilen alın ve göz çevresi; dingin ifadeli kadın portresi', baslik: 'Botulinum toksin — kapak' },   /* botulinum toksin */
  'gorsel/uyg-dolgu-uygulamalari.webp': { ad: 'dolgu-uygulamasi-berrak-jel', alt: 'Dolgu uygulamasında kullanılan jeli simgeleyen, cam yüzeyde berrak jel damlalarının yakın planı', baslik: 'Dolgu uygulamaları — kapak' },   /* dolgu uygulaması */
  'gorsel/uyg-genclik-asisi-skinbooster.webp': { ad: 'genclik-asisi-skinbooster-yanak-cildi', alt: 'Gençlik aşısı (skinbooster) konusunda gün ışığında nemli görünen yanak cildinin yakın planı', baslik: 'Gençlik aşısı (skinbooster) — kapak' },   /* gençlik aşısı */
  'gorsel/uyg-mezoterapi.webp': { ad: 'cilt-mezoterapisi-ampul-serum', alt: 'Cilt mezoterapisinde kullanılan cam ampuller ve küçük serum şişesi, açık renk kumaş üzerinde', baslik: 'Cilt mezoterapisi — kapak' },   /* cilt mezoterapisi */
  'gorsel/uyg-ignesiz-mezoterapi.webp': { ad: 'ignesiz-mezoterapi-serum-damlaciklari', alt: 'İğnesiz mezoterapi uygulamasını simgeleyen, cilt yüzeyinde parlayan şeffaf serum damlacıkları', baslik: 'İğnesiz mezoterapi — kapak' },   /* iğnesiz mezoterapi */
  'gorsel/uyg-somon-dna-polinukleotid.webp': { ad: 'somon-dna-polinukleotid-sarmal-3d', alt: 'Somon DNA (polinükleotid) uygulamasını simgeleyen, cilt katmanları üzerinde sarmal zincirin üç boyutlu çizimi', baslik: 'Somon DNA (polinükleotid) — kapak (3B)' },   /* somon dna */
  'gorsel/uyg-altin-igne-radyofrekans.webp': { ad: 'altin-igne-radyofrekans-isi-odaklari-3d', alt: 'Altın iğne radyofrekans uygulamasında deri katmanlarında oluşan küçük ısı odaklarının üç boyutlu çizimi', baslik: 'Altın iğne radyofrekans — kapak (3B)' },   /* altın iğne radyofrekans */
  'gorsel/uyg-hifu-ameliyatsiz-yuz-germe.webp': { ad: 'hifu-ameliyatsiz-yuz-germe-ses-dalgalari-3d', alt: 'Ameliyatsız yüz germe (HIFU): deri katmanlarında tek noktada toplanan ses dalgalarının üç boyutlu çizimi', baslik: 'HIFU ameliyatsız yüz germe — kapak (3B)' },   /* ameliyatsız yüz germe */
  'gorsel/uyg-sivi-yuz-germe.webp': { ad: 'sivi-yuz-germe-profil-portre', alt: 'Sıvı yüz germe konusunda yüzü yumuşak yan ışıkla aydınlanmış orta yaşlı bir kadının profil portresi', baslik: 'Sıvı yüz germe — kapak' },   /* sıvı yüz germe */
  'gorsel/uyg-biyostimulan-uygulamalar.webp': { ad: 'biyostimulan-uygulama-kolajen-ag-3d', alt: 'Biyostimülan uygulama konusunda deri altındaki kolajen liflerini simgeleyen ağ yapısının üç boyutlu çizimi', baslik: 'Biyostimülan uygulamalar — kapak (3B)' },   /* biyostimülan uygulama */
  'gorsel/uyg-pico-lazer-leke.webp': { ad: 'pico-lazer-leke-yanak-lekeleri', alt: 'Pico lazer leke uygulamasının konusu olan, yanak cildindeki açık kahverengi yüzeysel lekeler', baslik: 'Pico lazer leke — kapak' },   /* pico lazer leke */
  'gorsel/uyg-fraksiyonel-lazer.webp': { ad: 'fraksiyonel-lazer-mikro-isik-noktalari-3d', alt: 'Fraksiyonel lazer uygulamasında cilt yüzeyine düzenli aralıklarla dizilen mikro ışık noktalarının üç boyutlu çizimi', baslik: 'Fraksiyonel lazer — kapak (3B)' },   /* fraksiyonel lazer */
  'gorsel/uyg-karbon-peeling.webp': { ad: 'karbon-peeling-siyah-losyon', alt: 'Karbon peeling öncesi cilde sürülen mat siyah losyonun mermer yüzeyde spatulayla yayılmış hâli', baslik: 'Karbon peeling — kapak' },   /* karbon peeling */
  'gorsel/uyg-prp.webp': { ad: 'prp-uygulamasi-santrifuj-tupleri', alt: 'PRP uygulaması için santrifüj tüplerinde katmanlarına ayrılmış açık sarı plazmanın yakın planı', baslik: 'PRP — kapak' },   /* prp uygulaması */
  'gorsel/uyg-bolgesel-lipoliz.webp': { ad: 'bolgesel-lipoliz-bel-karin-hatti', alt: 'Bölgesel lipoliz için değerlendirilen bel ve karın hattının yandan, yumuşak ışıkta görünümü', baslik: 'Bölgesel lipoliz — kapak' },   /* bölgesel lipoliz */
  'gorsel/uyg-selulit-gorunumu.webp': { ad: 'selulit-gorunumu-uyluk-cilt-dokusu', alt: 'Uyluk arka yüzünde selülit görünümü veren hafif pürüzlü cilt dokusunun yumuşak ışıkta yakın planı', baslik: 'Selülit görünümü — kapak' },   /* selülit görünümü */
  'gorsel/uyg-sac-mezoterapisi.webp': { ad: 'sac-mezoterapisi-hacimli-saclar', alt: 'Saç mezoterapisi konusunda sırtı dönük bir kadının omuzlarına uzanan hacimli saçları', baslik: 'Saç mezoterapisi — kapak' },   /* saç mezoterapisi */
  'gorsel/uyg-sac-prp.webp': { ad: 'sac-prp-isikta-sac-telleri', alt: 'Saç PRP uygulamasını simgeleyen, ışıkta parlayan saç tellerinin yakın plan görüntüsü', baslik: 'Saç PRP — kapak' },   /* saç prp */
  'gorsel/uyg-eksozom.webp': { ad: 'eksozom-uygulamasi-hucre-kesecikleri-3d', alt: 'Eksozom uygulamasını anlatan, hücre zarından ayrılan küçük keseciklerin üç boyutlu çizimi', baslik: 'Eksozom — kapak (3B)' },   /* eksozom uygulaması */
  'gorsel/uyg-uygulama-sonrasi-takip.webp': { ad: 'uygulama-sonrasi-kontrol-saat-not-defteri', alt: 'Uygulama sonrası kontrol dönemini simgeleyen saat, krem kavanozu ve açık not defteri', baslik: 'Uygulama sonrası kontrol — kapak' },   /* uygulama sonrası kontrol */
  'gorsel/uyg-pico-lazer-dovme-silme-kapak.webp': { ad: 'dovme-silme-pico-lazer-basligi-onkol', alt: 'Dövme silme seansında eldivenli elle tutulan pico lazer başlığı, ön koldaki ince çizgili dövmenin üzerinde', baslik: 'Pico lazer dövme silme — kapak' },   /* uygulamalar/pico-lazer-dovme-silme · dövme silme (Higgsfield Nano Banana Pro 4K, 28 Eyl) */
  'gorsel/uyg-hekim-muayenesi.webp': { ad: 'hekim-muayenesi-dermatoskop-buyutec', alt: 'Hekim muayenesinde kullanılan dermatoskop ve büyüteç, muayene masasının üzerinde', baslik: 'Hekim muayenesi — tablo satırı' },
  'gorsel/uyg-pico-lazer-dovme-silme.webp': { ad: 'pico-lazer-dovme-silme-lazer-baslik', alt: 'Pico lazer dövme silmede kullanılan beyaz lazer başlığı, cam tepsinin üzerinde', baslik: 'Pico lazer dövme silme — tablo satırı' },

  /* ---------- sayfa içi kutu görselleri ---------- */
  'gorsel/uyg-botulinum-toksin-2.webp': { ad: 'botulinum-toksin-yuz-oranlari-portre', alt: 'Botulinum toksin planlamasında göz önüne alınan yüz oranlarını ince çizgilerle gösteren portre', baslik: 'Botulinum toksin — yüz oranları' },
  'gorsel/uyg-dolgu-kutu.webp': { ad: 'dolgu-dogal-oranli-dudak-cene-profil', alt: 'Dolguda korunmak istenen doğal oranlı dudak ve çene hattı, profilden', baslik: 'Dolgu — doğal oranlar' },
  'gorsel/ic3d-katman.webp': { ad: 'deri-katmanlari-kesit-3d', alt: 'Üst deri, dermis ve deri altı katmanlarını gösteren üç boyutlu kesit çizimi', baslik: 'Deri katmanları — kesit (3B)' },
  'gorsel/uyg-mezoterapi-hazirlik.webp': { ad: 'mezoterapi-hazirlik-enjektor-serum', alt: 'Mezoterapi hazırlığında altın kenarlı tepside ince iğneli enjektör, serum flakonu ve gazlı bez', baslik: 'Mezoterapi — hazırlık tepsisi' },
  'gorsel/uyg-ignesiz-mezoterapi-2.webp': { ad: 'ignesiz-mezoterapi-uygulama-basligi-ampuller', alt: 'Mermer tepside iğnesiz mezoterapi uygulama başlığı ve serum ampulleri', baslik: 'İğnesiz mezoterapi — başlık ve ampuller' },
  'gorsel/uyg-somon-dna-polinukleotid-2.webp': { ad: 'polinukleotid-nem-su-dokusu', alt: 'Cilt nemini simgeleyen su dokusu', baslik: 'Somon DNA — su dokusu' },
  'gorsel/uyg-altin-igne-radyofrekans-2.webp': { ad: 'altin-igne-radyofrekans-baslik-yakin', alt: 'Altın kaplama ince iğneli radyofrekans başlığının yakın görünümü', baslik: 'Altın iğne — başlık' },
  'gorsel/uyg-hifu-ameliyatsiz-yuz-germe-2.webp': { ad: 'hifu-cene-hatti-boyun-gecisi', alt: 'HIFU uygulamasında ele alınan çene hattı ve boyun geçişinin yakından görünümü', baslik: 'HIFU — çene ve boyun' },
  'gorsel/uyg-sivi-yuz-germe-2.webp': { ad: 'sivi-yuz-germe-elmacik-sakak-cene', alt: 'Elmacık, şakak ve çene hattını yumuşak ışıkla gösteren yüz', baslik: 'Sıvı yüz germe — yüz hatları' },
  'gorsel/uyg-biyostimulan-uygulamalar-2.webp': { ad: 'biyostimulan-deri-yuzeyi-koyu-zemin', alt: 'Koyu zeminde deri yüzeyinin yakın görünümü', baslik: 'Biyostimülan — deri yüzeyi' },
  'gorsel/uyg-pico-lazer-leke-2.webp': { ad: 'pico-lazer-leke-gunes-alan-yuz', alt: 'Gün ışığı alan yüz; lekelerin sık görüldüğü güneşe açık cilt bölgesi', baslik: 'Pico lazer leke — güneşe açık cilt' },
  'gorsel/uyg-pico-lazer-dovme-silme-2.webp': { ad: 'dovme-silme-kol-ic-yuzu', alt: 'Kol iç yüzündeki deri; dövmenin sık yapıldığı alanlardan biri', baslik: 'Dövme silme — kol iç yüzü' },
  'gorsel/uyg-fraksiyonel-lazer-2.webp': { ad: 'fraksiyonel-lazer-isik-izgarasi', alt: 'Fraksiyonel lazeri simgeleyen, yanak derisinde ince ışık noktalarından oluşan düzenli ızgara', baslik: 'Fraksiyonel lazer — ışık ızgarası' },
  'gorsel/uyg-karbon-peeling-2.webp': { ad: 'karbon-peeling-cilt-bakim-urunleri', alt: 'Cilt bakımında kullanılan ürün şişeleri', baslik: 'Karbon peeling — bakım ürünleri' },
  'gorsel/uyg-prp-2.webp': { ad: 'prp-plazma-saydam-akiskan', alt: 'PRP’deki plazmayı simgeleyen saydam akışkan', baslik: 'PRP — plazma' },
  'gorsel/uyg-bolgesel-lipoliz-2.webp': { ad: 'bolgesel-lipoliz-bel-karin-yandan', alt: 'Krem renkli spor kıyafetle bel ve karın bölgesinin yandan görünümü', baslik: 'Bölgesel lipoliz — bel ve karın' },
  'gorsel/uyg-selulit-gorunumu-2.webp': { ad: 'selulit-isik-alan-kol-vucut-derisi', alt: 'Işık alan kol ve vücut derisi', baslik: 'Selülit görünümü — vücut derisi' },
  'gorsel/uyg-skalp-ekzozom.webp': { ad: 'sac-mezoterapisi-sac-ayrim-cizgisi', alt: 'Saç mezoterapisinde ele alınan saçlı deri, saç ayrım çizgisinden', baslik: 'Saç mezoterapisi — saçlı deri' },
  'gorsel/uyg-eksozom-kutu.webp': { ad: 'eksozom-altin-sivida-kesecikler', alt: 'Altın renkli sıvı içinde süzülen küçük saydam eksozom kesecikleri', baslik: 'Eksozom — kesecikler' },
  'gorsel/uyg-yara-bakimi-ve-pansuman.webp': { ad: 'uygulama-sonrasi-steril-gazli-bez-bant', alt: 'Uygulama sonrası bakımda kullanılan steril gazlı bez ve bant', baslik: 'Uygulama sonrası — gazlı bez ve bant' },
  'gorsel/hekim-masasi.webp': { ad: 'hekim-masasi-not-defteri-eller', alt: 'Hekim masasında, açık bir not defterinin yanında üst üste duran eller', baslik: 'Hekim masası' },
  'gorsel/grup-saglik.webp': { ad: 'hekim-calisma-masasi-ustten', alt: 'Üstten görünen hekim çalışma masası', baslik: 'Hekim çalışma masası' },

  /* ---------- bölge atlası ve bölge şeridi ---------- */
  'gorsel/bolge-dudak.webp': { ad: 'dudak-bolgesi-yakin-plan', alt: 'Dudak bölgesinin doğal ışıkta, burun altından çene ucuna kadar yakın plan görünümü', baslik: 'Bölge — dudak' },
  'gorsel/bolge-boyun.webp': { ad: 'boyun-bolgesi-profil', alt: 'Boyun bölgesini gösteren, pencere önünde yüksek yakalı bluzla yandan duran kadın', baslik: 'Bölge — boyun' },
  'gorsel/bolge-goz-cevresi.webp': { ad: 'goz-cevresi-bolgesi-kapali-goz', alt: 'Göz çevresi bölgesinde kapalı göz kapağı ve kaş hattının yakın plan görünümü', baslik: 'Bölge — göz çevresi' },
  'gorsel/bolge-goz-atlas.webp': { ad: 'goz-cevresi-dis-kose-ince-cizgiler', alt: 'Göz çevresinin yakından görünümü; dış köşede ince çizgiler', baslik: 'Göz çevresi — atlas' },
  'gorsel/bolge-vucut-atlas.webp': { ad: 'vucut-omuz-ust-sirt-havlu', alt: 'Havluya sarılı, omuz ve üst sırtı görünen kadın', baslik: 'Vücut — atlas' },
  'gorsel/doku-cilt.webp': { ad: 'boyun-dekolte-deri-yuzey-dokusu', alt: 'Deri yüzeyinin dokusunu yakın plan gösteren çekim', baslik: 'Deri dokusu — atlas' },
  'gorsel/grup-sac.webp': { ad: 'sacli-deri-sac-ayrim-cizgisi-arkadan', alt: 'Arkadan görülen, saç ayrım çizgisi belirgin koyu saçlı bir kadın başı', baslik: 'Saçlı deri — atlas' },
  'gorsel/uyg-hassas-cilt-bakim-protokolu.webp': { ad: 'el-bakimi-nemlendirici-krem-pamuk', alt: 'Nemlendirici krem ve pamuk ped; el ve cilt bakımında kullanılan ürünler', baslik: 'El — nemlendirici krem' },
  'gorsel/yuz-3d-b.webp': { ad: 'cene-hatti-yuz-profili-3d', alt: 'Çene hattını yandan gösteren, sağa dönük üç boyutlu yüz profili', baslik: 'Çene hattı — atlas (3B)' },
  'gorsel/yuz-3d-c.webp': { ad: 'dudak-yuz-butunu-profil-3d', alt: 'Dudağın yüz bütünündeki yerini gösteren, sola dönük üç boyutlu kadın profili', baslik: 'Dudak — atlas (3B)' },
  'gorsel/yuz-3d-d.webp': { ad: 'yuz-bolgeleri-ust-orta-alt-3d', alt: 'Üst, orta ve alt yüz bölgelerinin işaretlendiği, sağa dönük üç boyutlu kadın profili', baslik: 'Yüz bölgeleri — atlas (3B)' },

  /* ---------- süreç adımları (ana sayfa ve uygulamalar) ---------- */
  'gorsel/asama-muayene.webp': { ad: 'surec-muayene-asamasi', alt: 'Muayene aşamasını simgeleyen, altın ayrıntılı iki cam büyüteç', baslik: 'Süreç — 1. muayene' },
  'gorsel/asama-plan.webp': { ad: 'surec-plan-asamasi', alt: 'Kişiye özel plan aşamasını simgeleyen, yüz hatları çizili cam not panosu', baslik: 'Süreç — 2. plan' },
  'gorsel/asama-gun.webp': { ad: 'surec-uygulama-gunu', alt: 'Uygulama gününü simgeleyen, saydam bir küre içindeki uygulama koltuğu', baslik: 'Süreç — 3. uygulama günü' },
  'gorsel/asama-takip.webp': { ad: 'surec-kontrol-ve-takip', alt: 'Kontrol ve takip aşamasını simgeleyen, onay işaretli cam takvim', baslik: 'Süreç — 4. takip' },
};

const kacir = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/* <img src="…varliklar/<yol>" alt="…"> → alt tablodaki metin. Tabloda olmayan yerel görsel = hata (sessiz eksik kalmasın) */
function altUygula(html, yol) {
  return html.replace(/<img\b[^>]*>/g, etiket => {
    const m = etiket.match(/\ssrc="[^"]*?varliklar\/((?:gorsel|foto|marka)\/[^"]+)"/);
    if (!m) return etiket;
    const k = TABLO[m[1]];
    if (!k) throw new Error(`medya.js: ${m[1]} için kayıt yok (sayfa: /${yol || ''})`);
    const alt = ` alt="${kacir((k.sayfada && k.sayfada[yol]) || k.alt)}"`;
    return / alt="[^"]*"/.test(etiket) ? etiket.replace(/ alt="[^"]*"/, alt) : etiket.replace(/^<img\b/, '<img' + alt);
  });
}

module.exports = { TABLO, altUygula, kacir };
