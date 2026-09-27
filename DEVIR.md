# DEVİR — 34-Rahmi-Cebeci

**Son güncelleme: 27 Eylül 2026**

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
