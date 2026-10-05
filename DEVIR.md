# DEVİR — 34-Rahmi-Cebeci

**Son güncelleme: 5 Ekim 2026 (gece — görseller 2K yeniden üretildi + etken madde adları çıkarıldı, canlıda)**

## ▶ BURADAN DEVAM ET

**Durum:** rahmicebeci.com.tr WordPress + Klasik Editör olarak canlı, **arama motorlarına kapalı (noindex)**. Yerel = GitHub = sunucu
(dağıtım #20, f40905e; sonraki commit'ler yalnız DEVIR). 66 sayfa canlıda statikle birebir (gövde); bütün metin ve resimler panelden
düzenlenebiliyor. **Yarım kalan iş yok.**

**Sonraki oturumda ilk iş (özet):**
1. Hekim sunumunun dönüşünü sor: `sunum/Etken-Madde-Degisiklikleri-Dr-Rahmi-Cebeci.pdf` (10 sayfa, git dışı; üretici `sunum/olustur.js`).
   Son sayfadaki "onayınıza sunulan 6 yeni cümle" hekimden düzeltme gelirse sayfa dosyalarında değiştir → yayın akışı.
2. ✅ Muayenehane ve cihaz görselleri GERÇEK fotoğraflarına geri döndü (5 Eki, aşağıda) — hekime söylenecek bir şey kalmadı.
3. Aşağıdaki "Kullanıcı kararı bekleyenler" listesi (form testi, Copyscape, odak kelimeler, arama motorlarına açılış…).
4. Test/denetim araçları artık kalıcı: `wp-yerel/araclar/` (git dışı) — mobil-cdp.js (telefon taklidi tarama), islev-test.js
   (davranış testleri), kurulum-dongu.js (canlı aktarım, kalan 0'a kadar 5 sn arayla), canli-gorsel.js / canli-etken.js (canlı örnekleme,
   1,5 sn arayla), nokta-kontrol.js (harita noktası hizası), karsilastir-gorsel.js / cift-pano.js / gorsel-pano.js (görsel panoları),
   gorsel-envanter.js, ilac-tara.js. Yerel WP: `wp-yerel/baslat.bat` → `node wp-yerel/karsilastir.js`.

**28 Eyl akşam yapılanlar (652dff3, 646acbf — canlıda):**
- **Favicon:** eski "RC" yazılı SVG yerine gerçek CR amblemi, antrasit zeminde → `site/varliklar/ikon/` (favicon.ico 16/32/48,
  ikon-192/512, apple-touch-icon 180; üretici `logo-yuksek/favicon-uret.php`). `/favicon.ico` köke de kopyalanır (.cpanel.yml).
  Panelde Görünüm › Özelleştir › Site simgesi seçilirse o geçer (`seo.php rc_ikon_etiketleri`).
- **Bütün görseller Ortam kütüphanesinde (kullanıcı isteği: "seo ya uygun alt isim etiketleriyle"):**
  - Tek kaynak `site/veri/medya.js`: 103 görsel (100 içerik + başlık amblemi + 2 marka dosyası) → SEO dosya adı, alt metin, başlık.
    Alt metin statik çıktıya da, WordPress'e de bu tablodan yazılır; **boş alt kalmadı** (önce 53 boştu). Kapakta odak kelime geçer
    (bolge-pusulasi için `sayfada` ile sayfaya özel alt). Tabloda olmayan görselde render.js durur. Kılavuz: YAZIM-KILAVUZU §5.
  - `wp-mu/rc-medya.php`: görseli sunucudaki `/varliklar/`'dan uploads'a kopyalar (internetten indirmez), parti parti
    (`medya_sinir`, REST varsayılan 12), tekrar güvenli (harita `rc_medya_harita` + `_rc_kaynak`), panelde değişen alt/başlığa dokunmaz.
    Sayfalardaki `/varliklar/…` adresleri kütüphanedekine çevrilir, `<img>`'e `wp-image-N` → WordPress srcset ekler (sunucuda WebP
    düzenleyici var, alt boyutlar üretildi). Panelde düzenlenmiş sayfada metne dokunulmaz, yalnız görsel adresi çevrilir.
  - 55 sayfanın kapağı **öne çıkan görsel** → Yoast og:image + şemada primaryImageOfPage (alt metin = açıklama). Kutuda not var:
    "sayfanın üstündeki görsel içerikten değişir".
  - Başlıktaki logo kütüphaneden; **Site bilgileri › Logo** seçicisi eklendi.
  - Doğrulama: yerel 66/66 birebir (`wp-yerel/medya-norm.js` kütüphane adresini /varliklar/'a çevirir), Klasik Editör gidiş-dönüşü
    68/68, tekrar çalıştırma 0 değişiklik, elle-alt ve elle-sayfa senaryoları denendi. Canlı: 11 partide 103 görsel, hata 0,
    5 örnek sayfa gövdesi birebir, og:image/srcset/favicon doğru.
  - Klasörde 152 görsel artık hiçbir sayfada kullanılmıyor (eski sürümler) → kütüphaneye alınmadı; silinmedi.
- **Dövme silme kapağı değişti (305e631, canlıda — kullanıcı isteği):** muayenehane cihaz odası fotoğrafı yerine Higgsfield
  Nano Banana Pro 4K görsel `gorsel/uyg-pico-lazer-dovme-silme-kapak.webp` (eldivenli elde pico lazer başlığı + ön kolda ince
  çizgili dövme; 5504×3072 → 2560×1440 WebP 108 KB; yapay zekâ notu eklendi). 4 aday üretildi, 16 kredi (aynı dakikalarda
  hesapta 24 kredilik 2 Kling videosu da var — bu sekmeden değil). Adaylar `gorsel-ham/dovme-{A1,A2,B1,B2}-ham.png` (git dışı;
  B1 seçildi). Eski fotoğraf `foto/klinik-cihaz-odasi.webp` kütüphanede duruyor, sayfada yok.
- **Öne çıkan görsel eksik sayfalar (828bcda):** ana sayfa = siyah zeminli yatay logo (`marka/rahmi-cebeci-paylasim-siyah.png`,
  `logo-yuksek/siyah-paylasim.php`); 404, cilt tipi testi, uygulama karşılaştırma, hazırlık aracı = Nano Banana Pro 4K (8 aday,
  32 kredi). Sayfa dosyasında `paylasimGorseli` (sayfada görünmez). 60/66 sayfada öne çıkan görsel; yalnız 6 yasal metinde yok.
- **GÖRSELLER HD (701be21, 56d441d — canlıda; kullanıcı: "çözünürlük düşük, hepsini bul, eskiyi sil, yeniden yükle, alt bozulmasın,
  2 kez görmesin"):** sitedeki yapay zekâ görselleri 25 Eyl'de 0,25 kredilik düşük kalitede üretilmişti (1400×788).
  79 görsel Higgsfield bytedance 4K büyütme → 2560×1440 (dikeyler 1920×2560, kare tuvale konup büyütüldü) WebP; 158 kredi (başarısızlar
  iade). `medya.js` `surum: 'hd'` → WordPress'te yeni ad `…-hd.webp` (resimler 1 yıl immutable önbellekte; aynı adla yüklenseydi eski
  görünürdü). `rc-medya.php` kaynak dosya değişince: yeni ek + alt/başlık taşınır (panelde değiştiyse eldeki) + bütün sayfalarda adres,
  wp-image-N, öne çıkan görsel, logo seçimi çevrilir (her sayfa bir kez, revizyonsuz) + eski ek dosyalarıyla silinir; yarıda kalırsa
  `rc_medya_bekleyen` sonraki çağrıda biter. Canlı: 11 turda 78 yenileme, hata 0. Kütüphane: 104 bizim + 2 kullanıcının Yoast logosu,
  kopya 0. Araçlar/iş kaydı: `gorsel-ham/buyutme/` (isle.sh, isle-kare.sh, takip.txt; git dışı).
  - ✅ **Büyütülemeyen 5 görsel** (prp-tupler, yuz-3d, sorun-terleme, uyg-doku-onarim-uygulamasi-2, hekim-masasi) 5 Eki'de 2K
    yeniden üretimle çözüldü (aşağıda).
  - **Hekimin 3 fotoğrafı (hekim-portre/koltuk/kare) bilerek büyütülmedi ve 5 Eki'de de dokunulmadı (kullanıcı: "hocanın kendi
    görseline dokunma"):** yapay zekâ yüz hatlarını değiştirebilir → asıl yüksek çözünürlüklü fotoğraflar hekimden/fotoğrafçıdan
    istenmeli (1400×788 ve 900×900 duruyor). Cihaz kesimleri 5 Eki'de yenilendi; logo ve 4 aşama ikonu küçük gösterildiği için hariç.
  - **Birebir aynı 3 dosya çifti birleştirildi:** ic3d-goz=bolge-goz-cevresi, bolge-boyun=bolge-boyun-ve-dekolte (ikisinin de alt
    metni "3B çizim" diyordu, fotoğraftı — düzeltildi), uyg-pico-lazer-dovme-silme=sorun-dovme… (dövme satırları artık yeni dövme
    kapağını gösteriyor). Kopyalar `medya.js KALDIRILAN` ile kütüphaneden silindi (kullanımdaysa silinmez; Yoast/site simgesi de sayılır).
  - Sayfa geçmişinde (revizyonlar) eski görsel adresleri yazılı kalır — sitede görünmez, kopya ek değildir; dokunulmadı.
- **LiteSpeed Cache eklentisi etkin** (sunucuda): `/favicon.ico` için eski WordPress yönlendirmesi önbellekte kalmıştı →
  `rc/v1/kurulum` artık sonunda `litespeed_purge_all` çağırıyor.
- **Imunify Security eklentisi** her sayfanın sonuna gizli tuzak bağlantısı koyuyor: `/imunify-bot-check` — **asla ziyaret edilmez**
  (bağlantı izleyen tarama IP'yi yakar). Genel kurala eklendi (~/.claude/CLAUDE.md); karşılaştırma betiği yok sayar.

**5 Eki — GÖRSELLER 2K'DA YENİDEN ÜRETİLDİ (f40905e, dağıtım #20, canlıda; kullanıcı: "kalitesiz görünen tüm görselleri 2k
higgsfield ile yeniden yap… gerçek görseller (muayene, lazer cihazı) yerine sen yap… hocanın kendi görseline dokunma"):**
- 89 görsel: 84'ü eski görsel REFERANS alınarak aynı kompozisyonla (harita noktaları ve atlas etiketleri yerinde kalsın diye)
  Nano Banana Pro 2K ile yeniden üretildi; biyostimülan ve fraksiyonel lazer kapakları alt metne göre sıfırdan; 5 cihaz Seedream 5 Pro
  (referanslı + arka plan silme, saydam WebP). Fotoğraflar 2560 px WebP (3:4'ler 1792×2390). ~182,5 kredi (2/görsel, cihaz 2,5).
  medya.js: 89 kayıt `surum: '2k'` → WordPress'te yeni dosya adı `…-2k.webp`, eski ek silindi. Canlı: 8 partide 89 yenileme, hata 0,
  kütüphane 104 = paket 104, sayfalarda eski -hd adresi 0. Yerel: statik=WP 66/66, gidiş-dönüş 68/68, mobil 10 sayfa temiz.
- **Muayenehane/cihaz görselleri GERİ ALINDI → gerçek fotoğraflar (kullanıcı kararı, 5 Eki gece):** önce yapay zekâ ile rozetsiz
  yeniden işlenmişti (bekleme ×2, uygulama odası, PRP tüpleri, 5 cihaz). Mevzuat araştırması: Tanıtım Yönetmeliği (RG 12.11.2025/33075)
  **md. 7(e) "görsele sonradan teknolojik değişiklik veya düzeltme uygulanamaz"** → kullanıcıya soruldu, "gerçek fotoğraflara dön" seçildi.
  9 dosya `f40905e~1` hâline (bekleme/uygulama odası 28 Eyl'deki 2560 büyütme, cihaz kesimleri ve PRP özgün), medya.js eski satırları
  (`-hd` ve eki olmayan adlar), yayın ilkeleri + mevzuat + klinik/iletişim sayfaları eski hâline döndü. **Kural: muayenehane, hekim ve
  cihaz görselleri yapay zekâ ile ÜRETİLMEZ/DÜZENLENMEZ; yalnız konu anlatan temsilî görseller yapay zekâ ve rozetli.**
  Not: 28 Eyl'de bekleme/uygulama odası fotoğrafları yapay zekâ büyütücüyle 2560'a çıkarılmıştı (içerik aynı); hukukçu "büyütme de
  teknolojik değişiklik" derse özgün 1400 px dosyalar `701be21~1` hâlinde.
- Değişmeyenler: hekimin 3 fotoğrafı, logo/amblem, 28 Eyl'de 4K üretilen 5 görsel (dövme kapağı, cilt tipi, hazırlık, 404, karşılaştırma),
  4 küçük aşama ikonu, kullanılmayan `foto/klinik-cihaz-odasi.webp`. Alt metni/dosya adı yeni görsele göre düzeltilen 5 görsel:
  el, vücut, terleme, bölgesel lipoliz (çene altı profil), selülit (3B deri altı).
- Üretim kayıtları ve betikler: `gorsel-ham/yenile-2k/` (git dışı; liste.js tarifler, durum.json Higgsfield iş/URL kayıtları).

**4–5 Eki — İLAÇ / ETKEN MADDE ADLARI SİTEDEN ÇIKARILDI (913b1fb, dağıtım #19, canlıda; kullanıcı: "bu adlar yerine 'mimik çizgisi
uygulaması', 'dolgu uygulaması' gibi ifadeler kullanılır, öyle yap tüm sitede"):**
- ~315 geçiş / 40 kaynak dosya: botulinum toksin/botoks, hyalüronik asit, hyalüronidaz, polinükleotid/somon DNA/PDRN, CaHA, PLLA,
  deoksikolik asit, izotretinoin, aspirin, varfarin, lidokain, ürün markaları → nötr ifadeler (başlık, Yoast açıklaması 147 kr ve odak,
  H1, SSS + FAQPage, alt metin, menü, harita, karşılaştırma/simülatör verisi, iletişim formu, hazırlık listesi, asistan). Sözlük ve
  kural: `site/veri/YAZIM-KILAVUZU.md §2`. İlaç SINIFLARI (kan sulandırıcı, antibiyotik, kortizon) ve balık kaynaklı madde alerjisi
  uyarısı kaldı; selülitteki "vücutta toksin birikimi" efsanesi ilaç değil, kaldı. Eksozom/PRP/skinbooster/mezoterapi adları kaldı.
- **Adresler:** `uygulamalar/botulinum-toksin` → `mimik-cizgisi-uygulamasi` (odak "mimik çizgisi uygulaması"),
  `uygulamalar/somon-dna-polinukleotid` → `doku-onarim-uygulamasi` (odak "doku onarım uygulaması"). Kaynak `site/veri/tasima.js`.
  WordPress'te aynı kayıt taşındı (ID 46/63 yerelde; panel düzenlemesi, öne çıkan görsel, Yoast korunur) — `rc-aktar.php adres_degisimi`.
  Eski adres `wp-kurulum/htaccess` 301 (canlıda doğrulandı); wp-aktar.js kural eksikse durur. Statik demoda eski adreste yönlendirme sayfası.
- **Görseller:** 4 kaynak dosya yeniden adlandı, kütüphane adı da yenilendi (`rc-medya.php`: `medya_tasi` kaydı taşır + tablodaki `ad`
  değişince yeni adla yükleyip eskiyi siler). Hiçbir yerde kullanılmayan 15 eski adlı görsel depodan ve sunucudan silindi (.cpanel.yml).
- **Denetim:** `node site/denetle.js` artık "İLAÇ / ETKEN MADDE / ÜRÜN ADI" sayar (sayfalar, betikler, görsel adları) → 0 olmalı.
  Asistan dizinindeki "halk dili" eşleştirme sözcükleri (botoks, somon…; ekranda görünmez, ziyaretçi bunu yazarsa doğru sayfa bulunsun)
  bilerek duruyor — hukukçu bunu da istemezse `site/veri/asistan.js HALK_DILI`'den çıkar. Yapay zekâ kuralı 12: ilaç/ürün adı kullanma.
- Doğrulama: yerel statik=WP 66/66, Klasik Editör gidiş-dönüşü 68/68, mobil 14 değişen sayfa temiz, kopya sayfa/görsel yok (68/104).
  Canlı: kurulum = 2 sayfa taşındı, 4 görsel yenilendi, 35 sayfa güncellendi, elle/fark/hata 0; 7 sayfada etken adı 0, og:image yeni ad.
- **Hekimin okuması iyi olur (ajanların işaretlediği):** mimik sayfası SSS "Uygulanan ürün ve miktarı kayda geçer mi?" (mevzuat cümlesi
  yeni); yüz bölgesi SSS 1; terleme ve çene sayfalarındaki "Mimik çizgisi uygulaması" kartları (köprü cümlesi eklendi); "jel yapılı dolgular
  dolguyu çözen enzimle eritilebilir" (göz çevresi, dudak); biyostimülanın iki türü (mikroküreli / toz hâlinde sulandırılan); PRP'de "trombosit
  işlevini etkileyen ilaçlar"; mevzuat sayfasına "ve etken madde adları sitede yer almaz" eklendi.

**4 Eki — MOBİLDE GÖRSEL ÇIKMIYOR incelemesi (kullanıcı şikâyeti; 2 ajan + CDP telefon taklidi):**
- **KÖK NEDEN (düzeltildi, 197a5ed):** LiteSpeed sayfa önbelleği 28 Eyl 15:30'dan kalma HTML sunuyordu (masaüstü ve mobil aynı
  kayıt); bu HTML HD yenilemede SİLİNEN eski görselleri istiyordu → 404 → boş kutular. `do_action('litespeed_purge_all')` REST
  isteğinde İŞLEMİYOR; `rc/v1/kurulum` artık yanıtta `X-LiteSpeed-Purge: *` başlığı gönderiyor. Temizlik sonrası canlı: 66 sayfa,
  1294 görsel adresi (src + srcset + data-gg) telefon kimliğiyle tarandı → kırık 0. Yerel CDP taraması 66 sayfa: yüklenmeyen 0,
  taşma 0, JS hatası 0. Araçlar: `wp-yerel/araclar/mobil-cdp.js` (Chrome DevTools Protocol, 375×812 dpr2 dokunmatik; ek paket yok),
  `wp-yerel/araclar/canli-mobil-denetim.js`. LiteSpeed sayfa optimizasyonu (lazy load / JS geciktirme) canlıda KAPALI.
- **✅ Aşağıdaki 6 maddenin HEPSİ düzeltildi (4bbdd32, canlıda; kullanıcı: "hepsini düzelt en iyi şekilde").** Tanıtım paneli
  kendiliğinden açılmaz (yalnız ?asistan=tanitim) · pusula srcset'i de günceller · rc-js emniyeti (JS 3,5 sn'de çalışmazsa içerik
  görünür; kapak CSS ile belirir) · tablet menü (pointerType=mouse + klavye :focus-visible) · harita: dokunulan yere en yakın nokta ·
  img{height:auto} · şerit sizes · data-gg 768 alt boy · atlas/yolculuk etiketleri · :has'siz yedek · önizleme lazy.
  Doğrulama: yerel 66 sayfa öncesi/sonrası görsel boyutları aynı, 66/66 statik=WP, gidiş-dönüş 68/68, davranış testleri 8/8
  (`wp-yerel/araclar/islev-test.js`); canlı 66 sayfa 1315 görsel adresi kırık 0, pusula ve tanıtım canlıda doğrulandı.
- **Bulgular (4 Eki tespit edildiği hâliyle):**
  1. Ana sayfaya dışarıdan girişte (WhatsApp, QR, adres çubuğu) 1,4 sn sonra TAM EKRAN koyu asistan tanıtım paneli açılıp sayfayı
     kilitliyor (asistan.js ~845; depolama kullanmadığı için her dış girişte). "Mobilde site görünmüyor" algısı yaratıyor.
     Karar: kapat / küçük balon / bir kez göster (depolama gerekir → çerez metni).
  2. BÖLGE PUSULASI HATASI (kesin, canlıda doğrulandı): /bolge-pusulasi ve /bolgeler'de bölgeye dokununca görsel değişmiyor —
     kesif.js yalnız src'yi değiştiriyor, WordPress srcset eklediği için tarayıcı srcset'e bakıyor. Düzeltme: srcset/sizes'ı da güncelle.
  3. Bölge şeridi (ana sayfa, bölgeler) açık kartta görsel object-fit ile ~2,5× büyütülüyor; sizes=100vw yüzünden telefona 768 px
     dosya → yumuşak. Düzeltme: şerit <img>'lerine kendi sizes değeri.
  4. site.css `img{}` kuralında height:auto yok → panelden eklenen resim mobilde dikey uzar (CLAUDE.md kuralına aykırı).
  5. Görünme animasyonları ([data-gr], kapaklar dahil) tamamen JS'ye bağlı, yedeği yok (JS yüklenmezse görünmez kalır).
  6. Küçükler: dokunmatik tablette masaüstü menü ilk dokunuşta kapanıyor (site.js:44); harita noktaları mobilde iç içe; atlas kemeri
     "yapay zekâ" etiketini kesiyor; ana sayfa yolculukta etiket 1. adımı örtüyor; hazırlık aracında :has desteklemeyen eski
     tarayıcıda seçili yanıt beyaz üstüne beyaz; gizli önizleme resmi boşuna iniyor.

**Kullanıcı Yoast'ı kendisi ayarladı (canlıda görüldü):** kuruluş logosu = kendi yüklediği `rahmi-cebeci-amblem-1024.png`,
site görseli = `Dr-Rahmi-Cebeci-Logo.png` (1200×630), site adı "Uzm. Dr. Rahmi Cebeci", slogan kodlaması düzelmiş.
Bizim bu iki dosyanın kopyalarımız (`dr-rahmi-cebeci-logo-kare`, `dr-rahmi-cebeci-paylasim-gorseli`) silindi (701be21, kullanıcı: "2 kez görmesin").

**Kullanıcı kararı bekleyenler (sırayla sor, onaysız başlama):**
1. ✅ **Yoast yayıncı adı** (4 Eki): kullanıcı no. 1'in görünen adı "Uzm. Dr. Rahmi Cebeci" yapıldı (Site temsili "Kişi" korundu);
   canlı şema: Person/Organization "Uzm. Dr. Rahmi Cebeci" + amblem logosu.
2. ✅ **Slogan KARARI (4 Eki, kullanıcı): "Bakırköy Estetik Merkezi" KALIYOR — "daha sorma". Bir daha önerme/sorma.**
   (Sunum 5 Eki.)
3. **Form testi:** info@ adresine "TEST" yazan tek talep (onayla) → webmail'de gör; `randevu-talepleri.log` ve `eposta-hatalari.log`'a bak.
4. **Copyscape** ≈ $8,19 (66 sayfa), bakiye $18,04 → onay.
5. **Odak anahtar kelimeleri** Yoast'a yazıldı; kullanıcı listeyi onaylamadı (değişiklik gerekirse `site/veri/sayfalar/*.js` → `odak`;
   kapak alt metni de `medya.js`'te güncellenir).
6. **Arama motorlarına açılış** (müşteri onayı): `site.js` `CANLI_ACIK=true` + WP Ayarlar › Okuma (blog_public) + Yoast site
   haritası/canonical kontrolü + drrahmicebeci.com'dan 301 (barındırması bilinmiyor, RvDesign yapımı).
7. Hukukçu: ✅ etken madde adları siteden çıkarıldı (5 Eki, yukarıda). Kalan: asistan platformu geçişinde KVKK/çerez metinleri;
   asistan dizinindeki görünmez "botoks" eşleştirme sözcükleri (istenirse çıkar); 28 Eyl'deki yapay zekâ büyütmesinin (gerçek fotoğraflar)
   md. 7(e) açısından durumu — hukukçuya sorulabilir.
7b. **Hekim sunumu (5 Eki):** etken madde değişiklikleri PDF'i hazırlandı (yukarıda "ilk iş" 1). Hekimin onayı/düzeltmeleri bekleniyor.
8. Müşteriden: markaya özel görseller (gelince: dosya → `site/varliklar/` + `medya.js` kaydı → aktarım).
9. Aşama 2 (asistan platformu geçişi): 35 canlıya çıkınca — aşağıdaki plan. (Eski asistan penceresindeki kart resimleri
   betikle `alt=""` basılıyor — dekoratif, platform geçişinde zaten değişecek.)

**Logo dosyaları (613da6c, `logo-yuksek/`):** Higgsfield 4K büyütme (net 4 kredi). `amblem-1024` (Yoast kuruluş logosu),
`paylasim-1200x630` (Yoast site görseli), `logo-yatay` 4000×1284 (baskı), amblem 2048/512/1024-beyaz. GD'li PHP:
`01-EsteTouch/estetouch-wp/php/php.exe` (XAMPP'te GD yok). Ham `*-ham.png` dosyaları git dışı.

**Yayın akışı (değişmedi + görsel):** değişiklik → `node site/render.js && node site/yayin-hazirla.js && node site/wp-aktar.js`
→ denetle → commit/push → `bash site/canli-yayinla.sh` → `POST rc/v1/kurulum` (yeni görsel varsa `kalan` 0 olana kadar 5 sn arayla).

**Kurallar (değişmez):** Imunify — canlıya ardışık, toplu işte 1500 ms, tarayıcı User-Agent, hassas yol ve `/imunify-bot-check`
yoklanmaz, engel belirtisinde dur. Parola/belirteç sohbete yazılmaz (dosyalar: `~/.cpanel-rahmicebeci-token`, `~/.rahmicebeci-wp-pass`).
Higgsfield ve Copyscape para harcar → önce sor. Hekim onaylı metinler onaysız değişmez. HSTS kapalı kalır. Salvera (24) deposuna dokunma.

## 🟢 28 Eyl sabah: rahmicebeci.com.tr WORDPRESS OLARAK CANLI (noindex)

- WordPress 7.1.2 (Softaculous, kök dizin, kullanıcı kurdu), **PHP 8.3.33** (kullanıcı 7.4'ten geçirdi), tema `rahmi-cebeci`,
  66 sayfa aktarıldı (kayıtta değişen 0, hata 0), `/%postname%/`, arama motorlarına KAPALI, ön sayfa ID 7.
- **Canlı doğrulama 66/66 birebir** (`wp-yerel/karsilastir-canli.js`; 51 sayfa PHP 7.4'te, 15 + 3 örnek 8.3'te).
  ⚠️ 650 ms aralık + uydurma User-Agent ile 52. istekte bağlantı koptu → artık 1500 ms + tarayıcı UA (genel kural: ~/.claude/CLAUDE.md).
- **API erişimi:** WP uygulama parolası `C:\Users\İHSAN\.rahmicebeci-wp-pass` (kullanıcı `Cebeci`, ad `claude-rahmi`; kullanıcı
  istediği an Profil › Uygulama Parolaları'ndan iptal eder). Uçlar: `GET /wp-json/rc/v1/durum`, `POST /wp-json/rc/v1/kurulum`.
- **Form:** sunucuda `mail()` kapalı → PHP 8'de ölümcül hata, talep kaybediliyordu. Düzeltildi (e7be4c3): talep önce
  `/home/rahmicebeci/randevu-talepleri.log`'a, e-posta `wp_mail` → yerel SMTP 127.0.0.1:25 (`wp-mu/eposta-yolu.php`).
  Sunucuda SMTP "220 hazır". **Gerçek gönderim testi kullanıcı onayı bekliyor.** E-posta hataları `/home/rahmicebeci/eposta-hatalari.log`.
- **SSS (0aa4143, canlıda):** 46 sayfanın 292 cevabı JSON veri bloğundan sayfanın içine (`<div class="g-syanit">`,
  her sorunun altında, CSS ile gizli) — arama motoru okur, Klasik Editör'de "Cevap" etiketiyle düzenlenir. FAQPage şeması
  render.js + seo.php aynı kuralla (panelde cevap değişince şema da değişir). Canlı 66/66 birebir, editör gidiş-dönüşü 68/68.
- **Kalan veri blokları (620c7cc, canlıda):** harita noktaları (12 sayfa), bölge pusulası (2), karşılaştırma (1), yolculuk (2)
  → `<div class="g-veri" data-*-kaynak>` gizli liste (üretici `site/veri/parcalar/veri-liste.js`); editörde başlıklı kutu.
  17 örnek / 118 öğe birebir; **artık hiçbir sayfada JSON veri bloğu yok** — sitedeki her metin panelden düzenlenir.
- **Yoast SEO 28.5 canlıda etkin** (Softaculous kurdu). 62071d3: 65 sayfaya odak anahtar kelime + **tam 147 karakterlik** meta
  açıklama (kaynak `site/veri/sayfalar/*.js` → `aciklama`, `odak`; odaklar SEO raporundaki öneriler, "leke lazeri" → "pico lazer leke").
  Tema Yoast varken yalnız stil/tema rengi/FAQPage basar; başlık/açıklama/robots/og/WebPage Yoast'ta (tıbbi → MedicalWebPage).
  Canlı doğrulama: her etiket 1 kez, açıklama kaynakla aynı, "Başlık | Dr. Rahmi Cebeci", ayraç `|`. Canonical noindex iken yok
  (Yoast), açılışta gelir. Aktarıcı panelde değiştirilen Yoast alanlarına dokunmaz (`_rc_aktarim_meta_ozet`).
  ⚠️ Karar bekleyen: site temsili ve slogan → yukarıda "YARIN BURADAN BAŞLA" 1–2. Logo dosyaları hazır (`logo-yuksek/`).
- Yayın: değişiklik → commit → push → `bash site/canli-yayinla.sh` (tema/mu-plugin/varlıklar). İçerik güncellemesi:
  `node site/wp-aktar.js` → push/deploy → `POST rc/v1/kurulum` (panelde düzenlenmiş sayfalara dokunmaz).

## ⛔ KARAR (28 Eyl gece, kullanıcı): SİTE WORDPRESS + KLASİK EDİTÖR OLARAK KURULACAK

Şu an sunucudaki statik sürüm **GEÇİCİ**dir, böyle kalmayacak. Kullanıcı: "site wp olarak klasik editöre uygun olarak
kurulacak, bana bir daha bunu dedirtme". Kural genel talimatlara da yazıldı (`~/.claude/CLAUDE.md`).
Standart: kendi temamız (bugünkü tasarım birebir), Classic Editor, Gutenberg kapalı, `wpautop` kapalı (kaydedilen HTML =
görünen HTML), etkileşimli parçalar kısa kod/şablon, SEO meta post meta'da, Yoast veri taşındıktan sonra,
gidiş-dönüş testi. Örnekler: 03-Griarts (statik→WP, 0 piksel fark), 26-TasarimMania-WP şartnamesi, 04-Ramazan-Ersoy.

**✅ 28 Eyl gecesi YERELDE BİTTİ — sabah sunucu kurulumu: `wp-kurulum/KURULUM.md` (adım adım, kim ne yapar).**
- Tema `wp-tema/` (header/menü/altbilgi/künye render.js ile aynı HTML), içerik aktarıcı `wp-mu/rc-aktar.php`
  (Araçlar › Site içeriği tek düğme; elle düzenlenmiş sayfaya dokunmaz), köprü `node site/wp-aktar.js`.
- Ölçümler: WP ↔ statik **66/66 birebir** · Klasik Editör gidiş-dönüşü **67/67** · 8 sayfa gerçekten kaydedildi → aynı ·
  mobil taşma 0/65 · editörde 105/105 resim tıklanabilir · Site bilgileri ekranı (telefon değişimi 38 sayfaya işledi) ·
  boş WP + tek düğme provası → 66/66.
- Yerel: `wp-yerel/baslat.bat` → http://127.0.0.1:8066 (giriş `wp-yerel/giris.txt`, git dışı). Kontrol: `node wp-yerel/karsilastir.js`.
- İçerik kaynağı geçiş boyunca `site/veri/` → `node site/wp-aktar.js` → `wp-mu/rc-icerik.json`. Canlıda müşteri panelden
  düzenlemeye başlayınca kaynak WordPress olur; aktarıcı düzenlenmiş sayfaları atlar.
- SEO/özgünlük denetimi (ayrı ajan, salt okuma; git dışı): `seo-denetim/RAPOR-2026-09-28.md`.
  **SEO: 0/66 geçti** (icerik-denetci ort. 48,8; ölçüm sınırı düzeltilmiş kopya 54,9; eşik 85 + İhsan kuralları tam).
  Salt teknik düzeltmelerle öngörü ~75,6 (ölçüm değil); 85 için hekim onaylı metin değişikliği şart.
  **Kopya: temiz** — Salvera 8-gram %0,0–0,03 · eski drrahmicebeci.com %0,01 · site içinde paragraf kopyası yok
  (10 sayfada birebir aynı "ücret" SSS cevabı; 5 kanibalizasyon çifti, en belirgini selülit sorun ↔ selülit uygulama).
  **Açık kalemler:** ~~SSS cevapları yalnız JSON'da~~ (✅ 0aa4143 sayfanın içine taşındı) · ~~açıklama/odak~~ (✅ 62071d3 Yoast) ·
  Organization/MedicalBusiness (Yoast site temsili Kuruluş yapılınca gelir), og:image (Yoast site görseli yüklenince gelir) ·
  title 65/66 > 60 karakter (YAZIM-KILAVUZU 50–65 diyor, standart ≤60 — karar) · etken madde adları (botulinum toksin 16,
  hyalüronik asit 15, "botoks" 7 sayfa) standart md.61 → hukukçu · odak kelimeler kullanıcı onayı bekliyor · Copyscape ≈ $8,19
  (66 sayfa gövde+SSS), bakiye $18,04 → onay bekliyor · WP'de site haritası noindex modunda kapalı (açılışta kontrol).

## 28 Eylül — site kendi alan adında kuruldu (statik, GEÇİCİ)

🟢 **https://rahmicebeci.com.tr** yayında — **noindex** (arama motorlarına kapalı), demo şeridi yok, form gerçek.
GitHub Pages demosu (`docs/`) olduğu gibi duruyor.

| Ne | Durum (ölçüldü) |
|---|---|
| Sunucu | `mt-lunar.guzelhosting.com:2083`, cPanel hesabı `rahmicebeci`, ana alan adı rahmicebeci.com.tr (başka alan adı yok) |
| Belirteç | `C:\Users\İHSAN\.cpanel-rahmicebeci-token` (kullanıcı Not Defteri'ne yapıştırdı; sohbete yazılmadı) |
| Kurulum öncesi | `public_html` boştu (yalnız cPanel dosyaları) — silinen bir şey yok |
| Git | cPanel deposu `/home/rahmicebeci/repositories/rahmi-cebeci` ← GitHub `rahmi-cebeci-demo` (public), dal `main` |
| Dağıtım | `.cpanel.yml`: `yayin/` → `public_html` (cp; rsync yok) — ilk dağıtım 0 hatayla bitti |
| Dışarıdan | site haritasındaki 66 sayfa 200 · http→https, www→çıplak, `/hekim`→`/hekim/` 301 · 404 doğru · `.htaccess`/`.md`/`.cpanel.yml` 403 · güvenlik başlıkları var · konsol temiz, fontlar yüklü |
| SSL | Let's Encrypt (alan + www + mail), bitiş 26 Ara 2026 — AutoSSL yeniler |
| E-posta | MX yerel. **info@rahmicebeci.com.tr kutusu kullanıcı tarafından 28 Eyl'de açıldı** (öncesinde form postası "No Such User" ile düşecekti) |

**İki hedef, tek kaynak:** `site.js` → `RC_HEDEF=canli` gerçek alan adı + demo kapalı. `CANLI_ACIK = false` → her sayfa
noindex. Arama motorlarına açmak = `true` + yeniden yayın (**müşteri onayıyla**; eski drrahmicebeci.com'dan 301 planı da o gün).

**Yayın akışı (canlı):**
```
node site/render.js && node site/yayin-hazirla.js       # docs/ (demo) + yayin/ (canlı)
node site/denetle.js && node site/denetle.js yayin      # ikisi de 0 hata
git add -A && git commit -m "…" && git push origin main
bash site/canli-yayinla.sh                              # hesap kontrolü → Update from Remote → Deploy → dışarıdan 200
```

**⚠️ Imunify360 — IP engeli yeme (kullanıcı uyarısı; başka projelerde yaşandı):**
- Siteye istekler **ardışık**, saniyede **en çok 2** (`sleep 0.6`), en çok 2 eşzamanlı. Toplu sayfa taraması yapılacaksa yavaş.
- `/.env`, `/.git`, `/wp-admin`, `/.htaccess` gibi saldırı imzalı yollar **yoklanmaz** (28 Eyl gecesi bir kez `.htaccess`/`.cpanel.yml`
  403 kontrolü yapıldı + 66 sayfa beklemesiz tarandı; engel olmadı ama tekrarlanmayacak).
- cPanel API (2083) çağrıları da seyrek: `canli-yayinla.sh` 3 sn aralıkla yoklar, bu yeterli.
- Engel yenirse: site ya da cPanel zaman aşımına düşer / 403 captcha sayfası gelir → kullanıcı guzelhosting'den IP'yi beyaz listeye aldırır.

**Sabah sırayla (28 Eyl gecesi yazıldı — güncel liste en üstte):**
0. ✅ **WordPress kurulumu** — `wp-kurulum/KURULUM.md` 1→5 (28 Eyl sabah bitti).
1. Formu gerçek bir denemeyle sına (kullanıcı onayıyla, "TEST" yazan bir talep) → info@ kutusuna düştüğünü webmail'den gör.
   Düşmezse: bu sunucuda `mail()` kapalı olabilir (Griarts/Ramazan'da kapalıydı) → SMTP; SPF/DKIM (Email Deliverability).
2. Mobil görünüm ve birkaç iç sayfa gözle (375 px).
3. Açık kararlar: arama motorlarına açılış tarihi · drrahmicebeci.com yönlendirmesi (bugünkü site RvDesign yapımı; barındırması bilinmiyor) ·
   HSTS (her şey oturunca) · markaya özel görseller.
4. Asistan: sitede hâlâ ESKİ asistan (hazır yanıt kipi, `canli:false`; `asistan.php` 405/503 döner, anahtar yok).
   Platform geçişi (aşağıda) platform canlıya çıkınca.

**Platform geçişi için not (hukukçuya gidecek):** platform widget'ı asistan AÇILMASA da her sayfa yüklemesinde
`sohbet/baslat` çağırır: kalıcı ziyaretçi belirteci (localStorage `asistan.<pk>.belirtec`), sayfa adresi/başlığı,
referrer, utm/gclid/fbclid, cihaz türü; tam IP 30 gün. Sitenin bugünkü KVKK ve çerez metinleri "izleme yok, yerel depolama
yok" diyor — geçişte bu metinler de değişmeli (yalnız "konuşmalar kaydedilir" cümlesi yetmez). Platformda "yalnız
açılınca bağlan" seçeneği 35 sekmesine önerildi. Yerel platform rahmi sitesine `http://localhost:8060`'ı zaten izinli
tutuyor → geçiş yerelde uçtan uca denenebilir. Canlı platformun izinli alan adlarına `https://rahmicebeci.com.tr` eklenmeli
(yerelde `rahmicebeci.com.tr` ve `*.rahmicebeci.com.tr` var).

Not: `git count-objects` "no corresponding .pack" uyarısı veriyor (eşsiz .idx artıkları) — zararsız, push çalışıyor.

---

> **SIRADAKİ İŞ — asistan platformuna geçiş.** Site, TasarımMania'nın çok müşterili asistan platformuna (35-Asistan-Platformu)
> ilk müşteri olarak bağlanacak. Adım adım plan ve iki sekmenin iş bölümü:
> `../35-Asistan-Platformu/belgeler/RAHMI-GECIS-PLANI.md`. Bu sekme yalnız BU klasörü değiştirir (Aşama 2: eski asistan
> dosyalarının çıkarılması, tek satır gömme kodu, metin/KVKK güncellemesi — hukukçu onayıyla, yayın). Platform tarafı
> (hesap, ayarlar, bilgi bankası) platform sekmesinde yapılır. Önkoşullar ve onaylar planın başında.

_(25 Eylül 2026 öğleden sonra oturumunun notları aşağıda.)_

## Durum (ölçülmüş)

| Ne | Durum |
|---|---|
| Demo canlı | https://tasarimmaniayapayzeka.github.io/rahmi-cebeci-demo/ |
| GitHub = yerel | `main` aynı commit'te (push edildi, SHA karşılaştırıldı) |
| Denetim | 108 bulgu işlendi: 44 dosyalık düzeltme incelendi ve alındı + kalan bulgular elle uygulandı |
| Yayın öncesi denetim | `node site/denetle.js` → kırık bağlantı 0 · eksik görsel 0 · Salvera kalıntısı 0 · yasaklı ifade 0 |
| `denetim-yarim` dalı | main'e birleştirildi; silinebilir (`git branch -d denetim-yarim`) |

## Yayın akışı

```
node site/render.js      # veri → docs/
node site/denetle.js     # 0 hata olmalı (çıkış kodu 0)
git add -A && git commit && git push
```
Pages 1-2 dk gecikir; canlıyı dışarıdan doğrula. Yerel önizleme: `node site/server.js` → http://localhost:8060

## Bu oturumda yapılanlar

- Denetimin doğrulanmadan uyguladığı 44 dosyalık düzeltme tek tek okundu, hepsi doğru bulunup main'e alındı.
- Kalan bulgular: HIFU, karbon peeling, fraksiyonel lazer acil kutularına 112; 6 bölge sayfasında "Kontrol randevusu dâhil" → "planın içinde"; PRP'de "paket" kaldırıldı; terleme sayfasına gebelik/emzirme uyarısı.
- Görsel üstü noktalar (yüz haritası) 4 sayfada yüzün dışında kalıyordu; görsellere bakılarak yeniden konumlandı ve tarayıcıda doğrulandı: bolgeler/yuz, cilt-sorunlari (hub), hacim-kaybi-ve-sarkma, mimik-cizgileri-ve-kirisiklik.
- Tıbbi sayfalarda hekim künyesi + editör satırı basılıyor (render.js).
- `site/denetle.js` eklendi (Türkçe harf duyarlı yasaklı ifade taraması).

- E-posta müşteriden geldi: **info@rahmicebeci.com.tr** (site.js).
- Cadde adı müşteriyle teyit edildi: **Ebuzziya** (çift z), site.js düzeltildi.

## Metin özgünlüğü (Salvera ile karşılaştırma)

`node site/benzerlik.js` — iki sitenin görünen metnini karşılaştırır. Son ölçüm: 8 kelimelik ortak dizi **%0,0**, 5 kelimelik **%1,4** (yalnız kanun/yönetmelik adları ve uygulama/bölge adları), birebir aynı cümle **0 / 3722**. Yeni metin eklendikten sonra tekrar çalıştır; 8 kelime oranı %0,3 üstüne çıkmamalı.

## Görsel özgünlüğü

`node site/gorsel-tekrar.js` — başlık, atlas ve kutu görsellerinin farklı sayfalarda tekrarını dosya içeriğine göre bulur; **0 olmalı**. 25 Eyl: 13 yeni görsel Higgsfield (gpt_image_2_5, görsel başı 0,25 kredi) ile üretildi; üretim istemleri sitenin fildişi-altın tonunda.

## Hekim onayı alınanlar (25 Eyl 2026)

✅ Aşağıdaki süre ve sayılar **hekim tarafından teyit edildi**, sayfalarda olduğu gibi kalır:
- Seans süreleri: mezoterapi 15–30 dk, altın iğne 30–60 dk, HIFU 60–90 dk, iğnesiz mezoterapi 20–40 dk, karbon peeling 20–30 dk, saç mezoterapisi 20–30 dk, saç PRP 40–60 dk.
- Saç PRP kan miktarı 10–20 ml; PRP "~1 saat" ve "~4 hafta aralık"; boyun ve el sayfalarında "2–4 hafta sonra kontrol".
- Dövme silme seans aralığı 6–8 hafta (SSS'de de geçiyor).
- Cihaz ayrıntıları (Fotona'da Er:YAG+Nd:YAG art arda, vücutta RF kullanımı), "lazer epilasyon yapılmaz" cümlesi.

Küçük, ertelenen kozmetik bulgular: tiroid/tiroit tek yazıma indirilmedi; soru-cevap kutusu başlığında marka yazımı sayfalar arasında küçük/büyük harf farkı taşıyor; 31-cilt-tipi-testi, akne ve göz altı sayfalarına ek uyarı kutusu önerisi uygulanmadı (zorunlu değil).

## Ön bilgi asistanı (25 Eyl 2026)

- Dosyalar: `site/veri/asistan.js` (bilgi + kurallar), `site/varliklar/js/asistan.js`, `site/varliklar/css/asistan.css`;
  `render.js` üretir: `varliklar/js/asistan-dizin.js` (sayfa dizini) ve `docs/asistan.php` (OpenAI vekili).
- Şu an `site.js → asistan.canli:false`: yalnız hazır yanıtlar, hiçbir şey cihaz dışına çıkmaz (GitHub demosu da böyle).
- Canlıya alma: `site/sunucu/ASISTAN-KURULUM.md`. Kullanıcı kararı: sunucu tarafı PHP, servis OpenAI, **bu siteye ayrı anahtar**
  (Salvera anahtarı kullanılmaz). Anahtar `/home/<hesap>/rahmi-asistan-gizli.php` (webroot dışı, .gitignore'da).
- `canli:true` olunca KVKK metnindeki asistan/yurt dışı aktarım paragrafları kendiliğinden değişir; hukukçu onayı gerekir.
- Parçalar (25 Eyl): tanıtım ekranı (yalnız ana sayfa + dışarıdan geliş; `?asistan=tanitim` zorlar) · sesli mod
  (Web Speech bas-konuş + cihaz sesiyle okuma) · hizmet/harita/kaynak kartları · 4 adımlı randevu akışı
  (hizmet→gün→saat→iletişim; demo WhatsApp, canlı `iletisim-gonder.php` `bicim=json`) · 5 soruluk cilt eğilimi testi ·
  paylaş (WhatsApp/e-posta/PDF=yazdır) · sayfaya özel öneri kartı (%50 kaydırma/25 sn) · fotoğrafla ön
  değerlendirme (3 onay, EXIF silinir, `GÖZLEM:` satırı, puan/yüzde YOK) · telefon/e-posta/TC gizleme.
- Bilerek YAPILMAYAN: güzellik çarkı/kupon/indirim (33075 Tanıtım Yönetmeliği), fotoğrafta yüzde/skor.
- YÖNETİM PANELİ → ayrı ürün olarak **35-Asistan-Platformu**'nda yapılıyor (25 Eyl gece): lead, konuşma kayıtları,
  denetim/erişim, ekip, tek/çoklu IP, iletişim bırakanlar + aç/kapa modüller. Bu sitenin 59 sayfası orada yerel
  "rahmi" müşterisine aktarıldı (sağlık profili, kurumsal paket, randevu/uyum/fotoğraf açık). Geçiş adımları:
  35'in `belgeler/KURULUM.md` §10 — sitede eski widget dosyaları yerine tek satır gömme kodu gelecek.
  Konuşma kaydı başlayınca widget'taki "cihazınızdan çıkmaz / kaydetmez" cümleleri ve KVKK metni DEĞİŞMELİ
  (platformdaki Uyum Merkezi bilgilendirme metni hazır; kayıt onaysız, dürüst bilgi notuyla — kullanıcı kararı).

## Müşteriden beklenenler

- Markaya özel görseller (şimdiki yapay zekâ görselleri Salvera setinin sıcak tonlu kopyası).
- Alan adı ve canlıya geçiş kararı: `site.js` → `ALAN` + `demo:false`; cPanel paketi `yayin-hazirla.js` ile hazır.

**Salvera (24-Medikal-Estetik) klasörüne ve deposuna DOKUNMA.** Bu proje yalnız kendi deposuna (`rahmi-cebeci-demo`) push eder.
