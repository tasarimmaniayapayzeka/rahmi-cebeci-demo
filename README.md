# 34-Rahmi-Cebeci — Uzm. Dr. Rahmi Cebeci · Bakırköy medikal estetik sitesi

**34. AYRI PROJE.** Kendi klasörü, kendi GitHub deposu (`rahmi-cebeci-demo`), kendi portu (**8060**).
**24-Medikal-Estetik (Salvera) ile KARIŞTIRILMAZ.** Oradan yalnız site motoru alındı; Salvera
klasörüne bu projeden hiçbir zaman yazılmaz, oradaki depoya push edilmez.

## Ne bu?
Müşterinin mevcut sitesi (drrahmicebeci.com, RvDesign yapımı 7 sayfalık PHP) yerine geçmek üzere
hazırlanan statik site. Yapı Salvera motoruyla aynı (veri → render.js → HTML), ama:
- marka, hekim, adres, hizmet menüsü **tümüyle bu muayenehaneye ait** (`site/veri/site.js`),
- **bütün metinler baştan yazıldı** (kopya içerik yok),
- renk sistemi farklı: **"Gece Altın"** (fildişi zemin, antrasit eylem, altın vurgu — logodan türetildi),
- başlık fontu Outfit (Salvera: Fraunces),
- chatbot ve yapay zekâ cilt aracı **yok** (sunucu tarafı gerekmiyor; ileride eklenebilir).

## Klasörler
```
site/
  veri/site.js            marka · iletişim · katalog · menü — TEK KAYNAK
  veri/YAZIM-KILAVUZU.md  içerik kuralları, slug haritası, mevzuat kilidi
  veri/sayfalar/          sayfa dosyaları (uygulamalar/ bolgeler/ cilt-sorunlari/ yasal/)
  veri/parcalar/          yüz haritası, uygulama özeti (karşılaştırma + simülatör verisi)
  varliklar/              css · js · fonts · gorsel (yapay zekâ yer tutucu) · foto (GERÇEK fotoğraflar)
  render.js               derleyici → docs/
  docs/                   ÇIKTI — GitHub Pages buradan yayınlar (depoda tutulur)
  server.js               yerel önizleme  http://localhost:8060
  yayin-hazirla.js        ileride cPanel paketi (docs/ → yayin/ + .htaccess)
```

## Çalıştırma
```
node site/render.js        # veri/ → docs/
node site/server.js        # http://localhost:8060
```

## Yayın (demo)
GitHub Pages, `main` dalı `/docs` klasöründen:
https://tasarimmaniayapayzeka.github.io/rahmi-cebeci-demo/
`site.js` içinde `demo: true` olduğu sürece her sayfa **noindex** ve üstte demo şeridi taşır.
Alan adına geçişte: `ALAN` değişir, `demo: false` yapılır, `.cpanel.yml` eklenir.

## Bilinen açık kalemler
- E-posta adresi müşteriden teyit edilmedi (`site.js` → yer tutucu).
- Yapay zekâ yer tutucu görseller (gorsel/) Salvera setinin sıcak tonlanmış kopyası; markaya özel üretim bekliyor.
- İletişim formu demo modunda WhatsApp'a yönlendirir; canlıda `iletisim-gonder.php` (render.js üretir) kullanılır.
- "Klinik" kelimesi menüde kaldı, metinde "muayenehane" kullanıldı (mevzuat: tek hekimli yer muayenehanedir). Müşteri isterse değiştirilir.
