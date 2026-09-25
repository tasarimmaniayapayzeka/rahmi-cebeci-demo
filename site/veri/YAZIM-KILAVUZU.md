# YAZIM KILAVUZU — Dr. Rahmi Cebeci sitesi (34. proje)

Bu belge, sayfa dosyalarını yazan herkes (insan veya ajan) için bağlayıcıdır.

## 0. Sınırlar — ÖNCE OKU

- Bu proje: `C:\Users\İHSAN\Desktop\Claude-Projeler\34-Rahmi-Cebeci\site\`
- Kaynak şablon: `C:\Users\İHSAN\Desktop\Claude-Projeler\24-Medikal-Estetik\medikal-estetik-web\` (SALVERA).
  **Salvera klasörü SALT OKUNUR.** Orada hiçbir dosya oluşturulmaz, değiştirilmez, silinmez;
  orada `git` çalıştırılmaz. Yalnız `veri/sayfalar/...` dosyaları okunup yapı örnek alınır.
- Yazılacak dosyalar yalnız bu projenin `veri/` altına yazılır.
- `git` komutu çalıştırma (depo işini proje sahibi yapar).

## 1. Marka ve gerçekler (site.js ile birebir)

- Marka: **Dr. Rahmi Cebeci** · alt başlık **Medikal Estetik** · tür: **muayenehane** (tek hekim).
  "Klinik" kelimesi menüde başlık olarak kalır; metin içinde "muayenehane" kullan.
- Hekim: **Uzm. Dr. Rahmi Cebeci**, Aile Hekimliği Uzmanı, Sağlık Bakanlığı onaylı Medikal Estetik
  Uygulama Sertifikası (Ulus Liv Hospital). Hacettepe Tıp 2005 mezunu. Uzmanlık eğitiminde
  Endokrinoloji, Hematoloji, Genel Cerrahi, Psikiyatri, Kadın Doğum, Çocuk rotasyonları.
  Görev yerleri: Ankara Atatürk EAH, Bakırköy Mazhar Osman, Bakırköy Yenimahalle Kadın Doğum ve
  Çocuk, Ankara Sami Ulus. 2005'ten bu yana hekim (yaklaşık 20 yıl).
- Yer: **Bakırköy, İstanbul** — Cevizlik Mah. Ebuzziya Cad. No:47/1. Semt adı geçecekse **Bakırköy**.
  Nişantaşı / Teşvikiye / Şişli asla geçmez.
- Telefon ve WhatsApp aynı numara: site.js'ten `S.iletisim.tel`, `S.iletisim.waHam` ile al; elle yazma.
- Saatler: Pazartesi–Cumartesi 09:00–19:00, Pazar kapalı (`S.iletisim.saatler`).
- Cihazlar: pikosaniye lazer (Picodela II, Nd:YAG), fraksiyonel lazer (Fotona SP Dynamis),
  altın iğne RF (Allura VI++), Nano HIFU (Allura IV++), iğnesiz mezoterapi (Mes Button).
  Metin içinde **cihazın genel adını** kullan ("pikosaniye lazer"); marka/model adı yalnız
  klinik sayfasındaki cihaz listesinde ve cihaz sayfasının tek bir "kullanılan cihaz" satırında geçer.
- Öne çıkan hizmet: **Pico lazer ile dövme silme**. Ama "kesin çözüm", "iz bırakmadan",
  "tamamen silinir" gibi taahhüt YOK; "görünümün seanslarla açılması hedeflenir" dili.

## 2. Mevzuat kilidi (12.11.2025/33075 Tanıtım Yönetmeliği) — ihlal = sayfa reddedilir

YASAK: fiyat/ücret/indirim/kampanya/paket · "fiyat bilgisi alın" · hasta yorumu, memnuniyet, puan ·
"10.000 mutlu danışan" tipi sayılar · öncesi–sonrası tarifi · "ücretsiz muayene/ön muayene" ·
"en iyi", "referans merkezi", "devrim", "eşsiz", "mucize", "garanti", "kesin", "sıfır risk",
"iz bırakmadan", "ağrısız" · başka klinik/hekimle kıyas · yönlendirme vaadi · emoji.
ZORUNLU: her tıbbi sayfa `tip: 'tibbi'` (künye ve "son güncelleme" otomatik basılır) ·
"sonuçlar kişiden kişiye değişir" tonu · kontrendikasyon ve "bu ne değildir" bölümleri korunur ·
acil uyarı kutuları korunur.

## 3. Dosya yapısı — DEĞİŞMEYEN sözleşme

```js
const S = require('../site');            // uygulamalar/ bolgeler/ cilt-sorunlari/ yasal/ altında '../../site'
module.exports = {
  slug: 'uygulamalar/<slug>',            // '' ana sayfa; 'hekim'; 'bolgeler/<slug>' ...
  tip: 'tibbi' | 'bilgi',
  js: ['x.js'],                          // yalnız etkileşimli sayfalarda, kaynaktaki gibi
  baslik: '…',                           // <title>; 50-65 karakter
  aciklama: '…',                         // meta description; 130-160 karakter
  icerik: (r, ik) => `…html…`,
};
```

- Kaynak sayfanın **HTML iskeleti, class adları, data-öznitelikleri, `${r}` bağlantı biçimi,
  `${ik.x}` ikonları, `data-gr`/`--d` gecikmeleri, bölüm sırası** aynen korunur.
  Değişen şey METİN ve BAĞLANTI HEDEFLERİ'dir. Yeni bileşen/class icat etme.
- Tüm iç bağlantılar `${r}` ile başlar (`href="${r}uygulamalar/prp/"`). Kök göreli `/` ile başlayan
  href YASAK.
- Alıntı: kaynak sayfadan **hiçbir cümle aynen ya da kelime değiştirilerek alınmaz.** Aynı bilgiyi
  farklı cümle kuruluşu, farklı örnek ve farklı sırayla anlat. Paragraf sayısı ±1, uzunluk ±%20.
- Kaynakta geçen "alerji/immünoloji", "bel üstü sınırı", "Online İşlemler", "Web Randevu",
  "laboratuvar sonuçları", "Demo marka/renk" ifadeleri YENİ SİTEDE YOK. Bu muayenehanede vücut
  uygulamaları (lipoliz, selülit, dövme) yapılır; "bel üstüyle sınırlıyız" cümlesi kurulmaz.
- Kaynakta hedef sayfası kaldırılmış bağlantılar (aşağıdaki tabloya bak) ya yeni karşılığına
  çevrilir ya da cümleyle birlikte çıkarılır. Var olmayan slug'a link vermek YASAK.

## 4. Slug haritası (kaynak → yeni)

### Uygulamalar (`uygulamalar/…`)
| Kaynak (Salvera) | Yeni | Not |
|---|---|---|
| botulinum-toksin-uygulamasi | botulinum-toksin | |
| hyaluronik-asit-dolgu-uygulamasi | dolgu-uygulamalari | dudak, çene, jawline, elmacık, göz altı hepsi bu sayfada |
| goz-alti-dolgu-uygulamasi | dolgu-uygulamalari#goz-alti | ayrı sayfa YOK; dolgu sayfasında bölüm |
| (yeni) | sivi-yuz-germe | çok noktalı, bütüncül dolgu+destek planı; kaynak: dolgu + yuz bölge sayfası |
| cilt-ici-hyaluronik-asit-uygulamasi | genclik-asisi-skinbooster | |
| polinukleotid-uygulamasi | somon-dna-polinukleotid | |
| cilt-mezoterapisi | mezoterapi | |
| trombositten-zengin-plazma | prp | |
| (yeni) | biyostimulan-uygulamalar | kolajen uyarıcı enjektabl (kalsiyum hidroksiapatit, poli-L-laktik asit sınıfı); ürün adı verme |
| ekzozom-uygulamasi | eksozom | |
| lipolitik-enjeksiyon | bolgesel-lipoliz | gıdı + karın + bel + bacak iç yüz |
| (yeni) | selulit-gorunumu | mezoterapi + lipoliz + cihaz kombinasyonu; iddiasız |
| dovme-silme-pico-lazer | pico-lazer-dovme-silme | öne çıkan sayfa; en uzun ve en ayrıntılı |
| lazerle-yuzeysel-pigmentasyon | pico-lazer-leke | |
| (yeni) | fraksiyonel-lazer | kaynak: mikroigneleme + altin-igne yapısı; Er:YAG/Nd:YAG genel dili |
| altin-igne-radyofrekans-mikroigne | altin-igne-radyofrekans | |
| hifu-odaklanmis-ultrason | hifu-ameliyatsiz-yuz-germe | "ameliyatsız yüz germe" halk dili; "cerrahinin yerini tutmaz" cümlesi zorunlu |
| ignesiz-mezoterapi | ignesiz-mezoterapi | |
| karbon-peeling | karbon-peeling | |
| sac-mezoterapisi | sac-mezoterapisi | |
| sac-prp | sac-prp | |
| uzman-hekim-muayenesi | hekim-muayenesi | |
| uygulama-sonrasi-takip | uygulama-sonrasi-takip | |
| KALDIRILDI: lazer-epilasyon, soguk-lipoliz, hidrodermabrazyon, mikroigneleme, yuzeysel-kimyasal-peeling, akne-ve-komedon-uygulamalari, hassas-cilt-bakim-protokolu, hyaluronidaz-ve-komplikasyon-yonetimi, skalp-ekzozom, damar-yolu-ile-sivi-ve-vitamin-uygulamasi, yara-bakimi-ve-pansuman | — | Bunlara link verme. Dolgu çözme (hyaluronidaz) bilgisi dolgu sayfasının "istenmeyen durumlar" bölümünde 1 paragraf olarak yer alır. Skalp eksozom → eksozom sayfasında saç bölümü. |

### Bölgeler (`bolgeler/…`)
yuz · goz-cevresi · dudak · cene-ve-jawline · boyun-ve-dekolte · el · sacli-deri ·
**vucut** (kaynak: bel-ustu-vucut; içerik: karın, bel, kol, bacak; lipoliz, selülit, dövme silme; "bel üstü sınırı" YOK)

### Cilt sorunları (`cilt-sorunlari/…`)
mimik-cizgileri-ve-kirisiklik · hacim-kaybi-ve-sarkma · goz-alti-koyulugu · akne-ve-akne-izi ·
cilt-tonu-ve-leke · gozenek-ve-cilt-dokusu · nem-kaybi-ve-donukluk · sac-dokulmesi · asiri-terleme ·
bolgesel-yaglanma · **selulit** (yeni) · **dovme-ve-kalici-makyaj** (yeni) ·
KALDIRILDI: istenmeyen-tuyler (lazer epilasyon yok).

### Kurumsal
`''` ana sayfa · klinik · hekim · yaklasimimiz · yaklasimimiz/neden-bazi-islemleri-yapmiyoruz ·
sikca-sorulan-sorular · bilgi · mevzuat · iletisim · hazirlik-listesi · hazirlik-listesi/arac ·
cilt-tipi-testi · uygulama-karsilastirma · bolge-pusulasi · 404 · yasal/* (6 sayfa).
KALDIRILDI: cilt-gorunumu (yapay zekâ fotoğraf aracı) — link verme.

## 5. Görseller

Kaynak sayfadaki `varliklar/gorsel/…webp` yolu **aynı desenle** yeni slug'a çevrilir:
- Uygulama: `uyg-<yeni-slug>.webp` (+ ikinci görsel `uyg-<yeni-slug>-2.webp`)
- Bölge: `bolge-<slug>.webp` · Sorun: `sorun-<slug>.webp` · grup/ic3d/yuz-3d görselleri aynen kalır.
- Görsel dosyalarını SEN üretmezsin; yol ve alt metni yazarsın (alt metin yeni içeriğe göre yeniden yazılır).
- Yapay zekâ rozeti (`<span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>`) kaynakta
  olduğu yerde KALIR; yalnız aşağıdaki GERÇEK fotoğraflarda kaldırılır.

GERÇEK fotoğraflar (`varliklar/foto/…`, 1400×788 kırpılmış):
- `hekim-portre.webp` — Uzm. Dr. Rahmi Cebeci, ayakta, kollar bağlı (hekim sayfası hero)
- `hekim-koltuk.webp` — hekim koltukta (ana sayfa hekim bloğu, yaklaşım sayfası)
- `klinik-bekleme.webp` — bekleme salonu (klinik hero) · `klinik-bekleme-2.webp` — bekleme + karşılama bankosu (iletişim hero)
- `klinik-cihaz-odasi.webp` — lazer ve cihaz odası (dövme silme hero, cihaz uygulamaları)
- `klinik-uygulama-odasi.webp` — uygulama odası (enjeksiyon uygulamaları hero'sunda tercih edilebilir)
- `cihaz-pico.webp`, `cihaz-fotona.webp`, `cihaz-altin-igne.webp`, `cihaz-hifu.webp`, `cihaz-mezo.webp` — ürün fotoğrafları (kare/dikey; yalnız klinik sayfası cihaz listesi ve ilgili cihaz sayfasının "kullanılan cihaz" kartında)
Gerçek fotoğrafta alt metin gerçeği anlatır; "yapay zekâ" rozeti konmaz.

## 6. Üslup

Sakin, ölçülü, hekim dili; ikinci çoğul ("siz"). Kısa cümle. Pazarlama sıfatı yok. Her tıbbi
iddia "hedeflenir / amaçlanır / değişebilir" kipinde. Bakırköy'e ve gerçek muayenehaneye
(tek hekim, randevulu, cihaz odası + uygulama odası) atıf yapılabilir. Türkçe tipografi:
"–" aralık, "’" kesme, `&#8239;` ince boşluk sayı-birim arasında (kaynaktaki gibi).

## 7. Teslim öncesi öz denetim (her dosya için)

```
node -e "const p=require('<dosya>'); const h=p.icerik('./',new Proxy({}, {get:()=>'<i></i>'})); console.log(p.slug, h.length)"
```
Hata vermemeli. Ardından yasak kelime taraması:
`grep -n -i -E "fiyat|ücret|indirim|kampanya|garanti|kesin çözüm|iz bırakmadan|ağrısız|en iyi|referans merkezi|mutlu danışan|ücretsiz|nişantaşı|teşvikiye|ramazan|ersoy|alerji|bel üstü|web randevu|laboratuvar sonuç" <dosya>`
Yalnız "ücret bilgisi internette yayımlanmaz" türü mevzuat açıklaması ve "ücretsiz araç
(cihazınızda çalışır)" ifadesi istisnadır.
