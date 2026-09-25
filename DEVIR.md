# DEVİR — 34-Rahmi-Cebeci (25 Eylül 2026, sabah ~06:00'da duraklatıldı)

Kullanıcının kredisi bitti; iş **yarın buradan** devam edecek. Kontroller sonraya bırakıldı.

## Şu anki durum (ölçülmüş)

| Ne | Durum |
|---|---|
| Demo canlı | https://tasarimmaniayapayzeka.github.io/rahmi-cebeci-demo/ — 200, alt sayfalar ve 404 çalışıyor |
| GitHub'daki sürüm | `d699164` (ilk sürüm + yüz haritası çapa düzeltmesi) |
| Yerel `main` | `1288dd7` — GitHub'dan **1 commit ileride, PUSH EDİLMEDİ** (tıbbi sayfalara hekim künyesi + editör satırı; yerel sunucu 404.html) |
| Dal `denetim-yarim` | `febc33f` — çok ajanlı denetimin uyguladığı düzeltmeler, **44 dosya, KONTROL EDİLMEDİ**. main'e alınmadı. |
| Derleme | `node site/render.js` → 66 sayfa, hatasız |
| Yerel önizleme | durduruldu (tekrar: `node site/server.js` → http://localhost:8060) |

## Yarın ilk iş — sırayla

1. `git -C "<34 yolu>" status` — main temiz olmalı, dal `main`.
2. `denetim-yarim` dalını incele: `git diff main denetim-yarim -- site/veri` (108 ekleme / 95 silme).
   Her değişikliği aşağıdaki bulgu listesiyle karşılaştır; doğru olanları al:
   `git checkout main && git merge --no-ff denetim-yarim` (hepsi doğruysa) ya da tek tek `git checkout denetim-yarim -- <dosya>`.
3. Kalan (uygulanmamış) bulguları işle — liste `.qa/bulgular-108.json` (depoya girmez, yerel).
4. `node site/render.js` → kırık bağlantı + yasaklı ifade taraması (aşağıdaki komutlar) → `git push`.
5. Canlıyı dışarıdan doğrula (Pages 1-2 dk gecikir).

## Denetim nasıl kesildi

- 16 grupluk inceleme tamamlandı (yasal grubu hariç: o grup limit yüzünden çalışmadı), **108 bulgu** çıktı.
- Doğrulama (çürütücü) ajanlarının çoğu oturum limitine takıldı; ikinci deneme de kredi bitince durduruldu.
- Bu yüzden `denetim-yarim` dalındaki düzeltmelerin bir kısmı **doğrulanmadan** uygulanmış olabilir.
- İş akışı betiği: `.qa/rc-site-qa.js` · günlük: `~/.claude/projects/C--Users--HSAN-Desktop-Claude-Projeler/b203c375-.../subagents/workflows/wf_bcdb313c-c62/journal.jsonl`
  Kaldığı yerden sürdürmek: Workflow `{scriptPath: ".qa/rc-site-qa.js", resumeFromRunId: "wf_bcdb313c-c62"}` (tamamlanan ajanlar önbellekten döner).
  **Kredi pahalı** — sürdürmek yerine bulguları elle işlemek daha ucuz olabilir.

## 108 bulgunun özeti (önem sırasıyla, en önemliler)

**Orta — tıbbi/olgu (öncelikli):**
- Acil (112) kutusu eksik: bölgeler/boyun, el, saçlı deri, vücut · uygulamalar/pico-lazer-leke · 31-cilt-tipi-testi. 112 numarası yok: genclik-asisi, ignesiz-mezoterapi, hifu, karbon-peeling, cilt-sorunlari/selulit.
- Gebelik/emzirme eksik: altin-igne, karbon-peeling (emzirme), dovme-ve-kalici-makyaj, asiri-terleme, selulit.
- Melanom uyarı bulgularında sevk "gerek görülürse" diye yumuşak: cilt-tonu-ve-leke, gozenek → "vakit kaybetmeden dermatoloji".
- uygulama-sonrasi-takip: dolgu sonrası beyazlama/görme bulgusu "acil değil" gibi okunuyor → acil yap.
- botulinum "yalnız o bölgeyle sınırlı" (mutlak) → "büyük ölçüde". sac-prp "aşırı duyarlılığı ortadan kaldırır" → "büyük ölçüde azaltır".
- uygulama-ozet.js eksozom kaydı enjeksiyon diyor; sayfa "yüzeyden, cihaz kanalı sonrası" diyor → eşitle.
- 20-iletisim ve 25-hazirlik acil listesi alerji eksenli (Salvera kalıntısı) → dolgu/damar tıkanması bulgularını öne al.
- Anasayfa harita adresi elle yazılmış → `S.iletisim` kullan.
- 10-yaklasimimiz "model bilgisi yalnız klinik sayfasında" diyor ama uygulama sayfalarında da var → cümleyi düzelt.
- 23-mevzuat künyeden söz ediyor → künye artık basılıyor (main `1288dd7`), bu bulgu kapandı.
- eksozom hero etiketi katalog grubuyla uyuşmuyor; eksozom soru-cevapta "başka yerlerde abartılı vaatler" (kıyas) → çıkar.
- Görsel üstü noktalar (g-nokta) Salvera görsellerine göre konumlu, yeni görsellerde kayık: bolgeler/yuz, cilt-sorunlari/00-hub, hacim-kaybi, mimik → tarayıcıda yeniden konumla.
- sacli-deri veri bandı "4 dökülme türü", atlasta 3 → 3 yap. sivi-yuz-germe "7 bölge", kartta 5 → 5 yap.

**Düşük (toplu işlenebilir):**
- Teyitsiz süreler/sayılar (seans süresi, kan miktarı, kontrol haftası): mezoterapi 15–30 dk, altın iğne 30–60 dk, HIFU 60–90 dk, iğnesiz mezo 20–40 dk, karbon 20–30 dk, saç mezo 20–30 dk, saç PRP 10–20 ml, PRP ~1 sa / ~4 hf, boyun ve el "2–4 hafta kontrol" → **hekimden teyit** ya da nitel ifade.
- "Kontrol randevusu dâhil" (paket çağrışımı) → "planlanır": boyun, çene, el. "paket" kelimesi: bolgesel-lipoliz, prp.
- Yazım: düz kesme `'yi` → `’yi` (bölge sayfaları), düz tırnak → tipografik, "dahil" → "dâhil", tiroid/tiroit tek yazım, "uyuşturucu" → "uyuşturucu krem / lokal anestezi".
- Soru-cevap başlığında marka tutarsız: `rahmi-cebeci · …` elle yazılmış (sac-mezoterapisi, sac-prp) → `${S.marka}`.
- "istenmeyen durumlar bölümü" diye var olmayan başlığa atıf: uygulamalar/00-hub, uygulama-sonrasi-takip → "riskler / Dolgudan sonra neler görülebilir".
- **Adres yazımı:** cadde adı büyük olasılıkla "Ebuzziya" (çift z). Kaynak sitede "Ebuziya" yazıyor → **müşteriye sor**, sonra `site.js`'te tek satır.

## Hâlâ müşteriden/kullanıcıdan beklenenler

- E-posta adresi (şu an yer tutucu `randevu@drrahmicebeci.com`).
- Hekim onayı: cihaz ayrıntıları, seans aralıkları/süreleri, "lazer epilasyon yapılmaz", dermatoskop var mı, vücutta RF kullanımı.
- Markaya özel görseller (şimdiki yapay zekâ görselleri Salvera setinin sıcak tonlu kopyası).
- Alan adı ve yayın kararı (şu an demo: noindex + üst şerit).

## Kontrol komutları

```
node site/render.js
node -e "..."   # kırık bağlantı taraması: bkz. 00-DEVAM 34 bölümü veya git log'daki ilk sürüm notu
grep -r -o -i -E "iz bırakmadan|kesin çözüm|ağrısız|garanti|mutlu danışan|ücretsiz muayene|referans merkezi|salvera|nişantaşı|teşvikiye|ersoy" docs --include=*.html
```

**Salvera (24-Medikal-Estetik) klasörüne ve deposuna DOKUNMA.** Bu proje yalnız kendi deposuna (`rahmi-cebeci-demo`) push eder.
