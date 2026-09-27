# WordPress kurulumu — rahmicebeci.com.tr

Hazırlandı: 28 Eylül 2026 gecesi. Sunucuya henüz dokunulmadı; bu belge sabah birlikte uygulanacak.

## Yerelde ölçülenler (http://127.0.0.1:8066, WordPress 7.1 + SQLite)

| Kontrol | Sonuç |
|---|---|
| WordPress çıktısı ↔ statik site (66 sayfa, `<head>` + menü + içerik + altbilgi + betikler) | **66/66 birebir** (`wp-yerel/karsilastir.js`) |
| Klasik Editör gidiş-dönüşü (görsel sekmeye yükle → kaydedilecek HTML) | **67/67** aynı DOM (`rc-test/gidis-donus.js`) |
| Gerçekten "Güncelle" ile kaydedilen 8 ağır sayfa → ön yüz | 8/8 aynı |
| Mobil 375 px yatay taşma | 0/65 |
| Editörde resim tıklanabilirliği | 105/105 (şerit ve yüz haritası editörde açık düzende) |
| "Site bilgileri" ekranı + içerikte toplu değişim | telefon değişti → 38 sayfa + başlık + altbilgi; geri alınca 66/66 |
| Boş WordPress + "Kur ve içeriği aktar" provası | tema + kalıcı bağlantı + 66 sayfa → **66/66** |

## Kurulum sırası

1. **[İhsan] WordPress'i cPanel'den kur** (Softaculous/WordPress yükleyicisi): alan adı `rahmicebeci.com.tr`, **dizin boş (kök)**,
   dil Türkçe, site adı "Dr. Rahmi Cebeci". Yönetici kullanıcı adı ve parolasını **sen seç**, sohbete yazma.
   "Arama motorlarının dizinlemesini engelle" işaretli kalsın. Varsa "Classic Editor" eklentisini işaretle;
   "LiteSpeed Cache" gelirse şimdilik kapalı kalsın (önbellek ölçümden sonra açılır).
2. **[Claude] Tema ve dosyaları gönder:** `.cpanel.yml` ← `wp-kurulum/cpanel-wp.yml`; `node site/render.js && node site/yayin-hazirla.js`;
   denetimler; commit + push; `bash site/canli-yayinla.sh`. Bu adım statik sürümün klasörlerini siler (hepsi git'te duruyor),
   tema, içerik aktarıcı, `/varliklar/`, form dosyası ve `.htaccess` gelir.
3. **[İhsan] wp-admin › Araçlar › Site içeriği › "Kur ve içeriği aktar"** — tema etkinleşir, bağlantılar `/%postname%/` olur,
   örnek içerik silinir, 66 sayfa gelir, ana sayfa ayarlanır.
4. **[Claude] Dışarıdan doğrulama** (Imunify kuralı: ardışık, ≤2 istek/sn): 66 sayfa yerel çıktıyla karşılaştırılır; 404,
   yönlendirmeler, mobil. Form: senin onayınla bir "TEST" talebi → info@ kutusu. PHP `mail()` kapalıysa SMTP.
5. **Sonra:** Yoast (başlık/açıklama "Sayfa ayarları" kutusundan taşınır, sonra kurulur), Rahmi Bey'in ekibine kullanıcı
   (Editör rolü), yedekleme, arama motorlarına açılış (müşteri onayı).

## Panelde ne nerede

- **Sayfa metinleri ve resimleri:** Sayfalar › sayfayı aç › Klasik Editör. Metne tıklayıp yaz; resme tıkla → Düzenle → Değiştir
  (ortam kütüphanesi). Tablo satırlarının küçük resmi: satıra tıkla → araç çubuğunda resim simgesi ("Satır görselini değiştir").
- **Telefon, adres, WhatsApp, e-posta, hekim künyesi:** sol menü › Site bilgileri. "Sayfa içeriklerinde de değiştir" işaretliyse
  sayfaların içindeki geçişler de değişir.
- **Arama motoru başlığı/açıklaması, sayfa türü (tıbbi → künye), gizleme:** her sayfanın altındaki "Sayfa ayarları" kutusu.
- **İçerik paketi yeniden aktarma:** Araçlar › Site içeriği. Panelde düzenlenmiş sayfalara dokunmaz.

## Geri dönüş

`.cpanel.yml`'i statik sürüme geri al (git geçmişi) + `canli-yayinla.sh` → `yayin/` yeniden kopyalanır, `index.html` önce sunulur.

## Bilinen sınırlar

- Sitenin mevcut resimleri `/varliklar/` klasöründe; ortam kütüphanesinde görünmezler (yeni yüklenenler görünür).
  İstenirse mevcut resimler kütüphaneye taşınır — ayrı iş.
- Menü ve altbilgi bağlantıları şimdilik temadan (site/veri/site.js → veri.json); Görünüm › Menüler'e taşınabilir.
- Sitede her genişlikte gizli olan işaretleme var (21 sayfada önizleme paneli, 46 sayfada soru başlığı): ziyaretçi görmüyor,
  editörde de görünmez; temizlenebilir.
