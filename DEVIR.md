# DEVİR — 34-Rahmi-Cebeci

**Son güncelleme: 25 Eylül 2026 (öğleden sonra oturumu)**

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

## Bilerek bırakılanlar (hekim onayı gerekiyor)

Aşağıdaki süre ve sayılar sayfalarda genel bilgi olarak duruyor; muayenehaneden teyit edilmedi. Hekim onaylamazsa nitel ifadeye çevrilecek:
- Seans süreleri: mezoterapi 15–30 dk, altın iğne 30–60 dk, HIFU 60–90 dk, iğnesiz mezoterapi 20–40 dk, karbon peeling 20–30 dk, saç mezoterapisi 20–30 dk, saç PRP 40–60 dk.
- Saç PRP kan miktarı 10–20 ml; PRP "~1 saat" ve "~4 hafta aralık"; boyun ve el sayfalarında "2–4 hafta sonra kontrol".
- Dövme silme seans aralığı 6–8 hafta (SSS'de de geçiyor).
- Cihaz ayrıntıları (Fotona'da Er:YAG+Nd:YAG art arda, vücutta RF kullanımı), "lazer epilasyon yapılmaz" cümlesi.

Küçük, ertelenen kozmetik bulgular: tiroid/tiroit tek yazıma indirilmedi; soru-cevap kutusu başlığında marka yazımı sayfalar arasında küçük/büyük harf farkı taşıyor; 31-cilt-tipi-testi, akne ve göz altı sayfalarına ek uyarı kutusu önerisi uygulanmadı (zorunlu değil).

## Müşteriden beklenenler

- **Cadde adı yazımı:** kaynak sitede "Ebuziya", resmî ad büyük olasılıkla "Ebuzziya" (çift z). Teyit gelince `site/veri/site.js` → `adres` tek satır.
- E-posta adresi (şu an yer tutucu `randevu@drrahmicebeci.com`).
- Yukarıdaki hekim onayı listesi.
- Markaya özel görseller (şimdiki yapay zekâ görselleri Salvera setinin sıcak tonlu kopyası).
- Alan adı ve canlıya geçiş kararı: `site.js` → `ALAN` + `demo:false`; cPanel paketi `yayin-hazirla.js` ile hazır.

**Salvera (24-Medikal-Estetik) klasörüne ve deposuna DOKUNMA.** Bu proje yalnız kendi deposuna (`rahmi-cebeci-demo`) push eder.
