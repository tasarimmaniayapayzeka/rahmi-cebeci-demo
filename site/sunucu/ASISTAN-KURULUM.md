# Ön bilgi asistanı — canlıya alma

Asistan iki biçimde çalışır:

| Biçim | Ne zaman | Ne yapar |
|---|---|---|
| Hazır yanıt | `site.js` → `asistan.canli: false` (şu an) ve GitHub demosu | Saat, adres, telefon, randevu, fiyat, acil durum sorularını ve sayfa önerilerini **cihazda** yanıtlar. Hiçbir şey dışarı gitmez. |
| Canlı (yapay zekâ) | Site kendi hosting'ine taşındıktan ve anahtar kurulduktan sonra | Soru `asistan.php` → OpenAI'ye gider. İlk mesajdan önce ziyaretçiden aktarım onayı alınır. |

## Adımlar

1. **Ayrı anahtar açın.** platform.openai.com → API keys → yeni anahtar (adı: `rahmi-cebeci-asistan`).
   Salvera'nın anahtarını kullanmayın. Hesapta aylık harcama sınırı (Usage limits) koyun.
2. **Gizli dosyayı kurun.** `sunucu/rahmi-asistan-gizli.ornek.php` dosyasını kopyalayın, anahtarı yazın ve
   sunucuda `public_html`'in bir üst klasörüne `rahmi-asistan-gizli.php` adıyla yükleyin
   (`/home/<hesap>/rahmi-asistan-gizli.php`, izin **600**).
3. **Açın.** `site/veri/site.js` → `demo: false`, `asistan: { canli: true, … }` yapın.
4. **Derleyin ve yükleyin.** `node render.js && node yayin-hazirla.js` → `yayin/` içeriği `public_html`'e.
5. **Deneyin.** Sitede asistana "Dövme silme kaç seans sürer?" yazın. Onay kutusu çıkmalı, ardından yapay zekâ yanıtı gelmeli.
   Yanıt yerine "bağlantı kurulamadı" görürseniz sunucu hata günlüğünde `[asistan]` satırına bakın
   (401 = anahtar hatalı, 404 = model adı hesabınızda yok, 429 = OpenAI kotası).

## Güvenlik notları

- Anahtar yalnız sunucuda, webroot dışında durur; tarayıcıya hiç gelmez.
- `asistan.php` başka alan adlarından gelen istekleri reddeder (Origin kontrolü).
- Sınırlar: ziyaretçi başına saatlik 20, site geneli günlük 400 soru (gizli dosyada değiştirilebilir).
  Tarayıcıda da sayfa başına 25 soru ve 1,5 sn bekleme vardır.
- Mesaj içerikleri sunucuda **kaydedilmez**; hata günlüğüne yalnız OpenAI'nin durum kodu yazılır.
- IP adresi saklanmaz; hız sınırı için günlük değişen tek yönlü özeti kullanılır.
- Yanıtta fiyat geçerse sunucu yanıtı standart "fiyat paylaşılmıyor" metniyle değiştirir.

## KVKK

`asistan.canli: true` yapıldığında KVKK aydınlatma metnindeki asistan bölümü otomatik olarak
"mesajlar OpenAI'ye (ABD) iletilir" biçimine döner. Yurt dışına aktarım dayanağı (açık rıza / standart
sözleşme) yayına almadan önce hukukçuya onaylatılmalıdır.
