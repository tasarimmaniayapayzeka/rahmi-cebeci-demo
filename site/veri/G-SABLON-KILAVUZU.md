# G ŞABLON KILAVUZU — iç sayfa dönüşümü

Bu belge, `veri/sayfalar/**.js` dosyalarının `icerik()` fonksiyonlarını G tasarım diline
taşıyan ajanlar içindir. **Bileşen işaretlemeleri birebir buradan kopyalanır** — sınıf adı
uydurulmaz. Davranışlar `varliklar/js/g.js`'te hazırdır; **sayfaya JS yazılmaz.**
Stiller `varliklar/css/g.css` + mevcut `tokens.css`/`site.css`.

## DEĞİŞMEYENLER
- Dosya sözleşmesi aynı: `module.exports = { slug, tip, baslik, aciklama, icerik(r, ik) }`.
  `tip:'tibbi'` künyeyi OTOMATİK basar — elle künye yazma. `js:` alanı EKLENMEZ (g.js global).
- Mevcut sayfanın METNİ korunur ve yeniden yerleştirilir — içerik denetimden geçti,
  sıfırdan yazma; yalnızca G bölümlerine dağıt. Cümleleri kısaltıp sıkılaştırabilirsin.
- Yasak dil kuralları aynen: fiyat/garanti/"en iyi"/marka adı/dış link yok;
  "botoks" yalnız SSS'de tırnak içinde düzeltici.
- Eski şablon sınıfları (`sayfa-hero`, `icindekiler`, `sss`, `yazi`, `kirinti`…) yeni
  sayfada KULLANILMAZ — tamamı G bileşenlerine çevrilir.
  (`.sar`, `.bolum`, `.dgm`, `.dgm--bir/--iki`, `.kutu kutu--bilgi/--uyari/--acil`,
   `.izgara`, `.kart` site.css'ten aynen kullanılabilir.)

## GÖRSEL HAVUZU (başka dosya adı YAZMA — yoksa bu listeden en yakını seç)
`${r}varliklar/gorsel/` altında:
- yuz-3d-c.webp   → sarışın profil, sola bakar (hero sağ kolon için ideal)
- yuz-3d-d.webp   → güzel esmer profil, sağa bakar (görsel sol kolondayken)
- yuz-3d-b.webp   → gerçekçi esmer profil, sağa bakar (yedek çeşitlilik)
- ic3d-goz.webp   → göz çevresi makro (16:9)
- ic3d-dudak.webp → dudak makro (16:9)
- ic3d-katman.webp→ cilt katmanları 3B kesit (4:3)
- ic3d-akiskan.webp→ jel/serum dalgası (16:9)
- doku-cilt.webp  → gerçek yanak dokusu makro (16:9)
- grup-enjeksiyon.webp → alt yüz/çene hattı yakın plan (16:9)
- grup-cihaz.webp → lazer başlığı tepside (16:9)
- grup-cilt-bakimi.webp → bakım anı, el+jel (16:9)
- grup-sac.webp   → saç/saçlı deri yakın plan (16:9)
- grup-saglik.webp→ hekim masası üstten (16:9)
- klinik-ic-mekan.webp → tedavi odası (16:9)
- hekim-masasi.webp → eller+defter (16:9)
- YENİ (üretimde, adlar sabit): bolge-boyun.webp, bolge-el.webp,
  bolge-belustu.webp, sorun-terleme.webp, sorun-tuy.webp, sorun-yag.webp
Her `<img>`de: gerçek `alt`, `width`/`height`, hero'da `loading="eager"` diğerlerinde `lazy`.
İğne/şırınga/işlem anı tarif eden alt metin YASAK.

## SAYFA İSKELETİ (sıra sabit; aile planına göre bölümler seçilir)

### 1 · HERO (her sayfada)
```html
<section class="g-hero">
  <div class="sar">
    <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}AILE/" style="color:var(--sessiz);text-decoration:none">AİLE ADI</a> › <span>SAYFA</span></nav>
    <div class="sar-ic" style="display:grid;gap:clamp(26px,5vw,66px);grid-template-columns:1fr;align-items:center"></div>
  </div>
</section>
```
DİKKAT: g-hero .sar zaten grid — iç sarmalayıcı KULLANMA, doğrudan iki çocuk:
```html
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" ...>...</nav>
      <p class="g-etiket">AİLE ETİKETİ · KONU</p>
      <h1>Başlıkta bir <span class="g-isik">vurgu öbeği</span> olsun.</h1>
      <p class="g-hero__alt">40–55 kelimelik doğrudan cevap paragrafı (eski sayfa-hero__ozet metni).</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">BİRİNCİL CTA</a>
        <a class="dgm dgm--iki" href="#ilkbolum">İkincil ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Uygulamalar hekim tarafından</span><span><i></i>Aşamalı plan</span><span><i></i>Kontrol dâhil</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/UYGUN.webp" width="900" height="1200" alt="..." loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <!-- İSTEĞE BAĞLI noktalar (yalnız yüz görseli varsa): -->
      <button class="g-nokta" data-gn="X" style="--x:..%;--y:..%" aria-label="..."><span data-ad="KISA AD"></span></button>
      <div class="g-hud" data-ghud><b>...</b><div class="g-cizgi"></div><span>...</span></div>
    </div>
  </div>
</section>
```
Nokta koordinatları görsele göre: yuz-3d-c → ust(35,25) orta(31,42) alt(35,55);
yuz-3d-d → ust(68,22) orta(66,40) alt(65,54). Nokta kullanılırsa sayfada bir kez:
```html
<script type="application/json" data-gnokta-veri>{"ust":["Üst yüz","..."],"orta":["Orta yüz","..."],"alt":["Alt yüz","..."]}</script>
```
16:9 görsel kullanılıyorsa width/height 1400x788 yaz ve nokta koyma.

### 2 · VERİ BANDI (uygulama+bölge sayfalarında; sayı yoksa atla)
```html
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="3">0</em></b><span>ETİKET</span></div>
  ... 3–4 öğe; sayı olmayan hücrede <b>Tek</b> gibi metin ...
</div></div>
```
SAYILAR GERÇEK OLMALI (sayfa içeriğinden: seans aralığı sayısı, adım sayısı vb.).
Uydurma istatistik YAZMA.

### 3 · GÖVDE — aile planına göre (aşağıda)
Bölüm kabuğu her zaman: `<section class="bolum"><div class="sar">…</div></section>`
(dönüşümlü `bolum--buz2`/`bolum--sicak`), başlık bloğu:
`<div class="bolum-bas" data-gr><p class="g-etiket">…</p><h2>Soru formatlı başlık?</h2><p class="giris">…</p></div>`

**BENTO** (dosya özeti):
```html
<div class="g-bento">
  <div class="g-kutu g-b2 g-donutkap" data-gr>
    <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="72" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>3&#8239;kat</b></div>
    <p><b style="color:var(--murekkep)">Başlık</b><br>Açıklama.</p>
  </div>
  <div class="g-kutu g-b2" data-gr style="--d:70ms">
    <span class="g-ket">ETİKET</span>
    <div class="g-cubuk"><small><span>AD</span><span>DEĞER</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="24%"></b></div></div>
    <div class="g-cubuk"><small><span>AD</span><span>DEĞER</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="58%"></b></div></div>
    <div class="g-cubuk"><small><span>AD</span><span>DEĞER</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="92%"></b></div></div>
  </div>
  <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">PROTOKOL</span>
    <ol class="g-protokol"><li>…</li>…(4–5)…</ol></div>
  <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">İLKE</span><p>"Alıntı cümle."</p></div>
  <div class="g-kutu g-b2 g-kutu--gorsel" data-gr><img src="…" alt="…" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
  <div class="g-kutu g-b2 g-kutu--cta" data-gr><h3>CTA başlığı</h3><p>Tek cümle.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu talebi</a></div>
</div>
```
Çubuk yüzdeleri GÖRECELİ simgedir; yanında mutlaka
"Çubuklar göreli simgedir; kesin plan muayenede belirlenir." notu.

**ATLAS** (yalnız bölge sayfaları): tasarim-g'deki gibi
`g-atlas-duzen > (g-atlas > g-atlas-kap[img+g-nokta+g-rozetk[data-grozet]]) + (g-katblok[data-gkat=X]×3)`.
Kat blokları o sayfanın kendi alt konuları olur; her blokta `g-haplar` ile ilgili uygulama linkleri.

**MATRİS** (uygulama listesi gereken yerde):
```html
<div class="g-matris">
  <div class="g-mtab" data-gr>
    <div class="g-mbas"><span>Uygulama</span><span>Hedef</span><span>İyileşme</span><span></span></div>
    <a class="g-msatir" href="${r}uygulamalar/SLUG/" data-gg="${r}varliklar/gorsel/X.webp" data-gb="AD" data-ga="Tek cümle."><h4>AD</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">KAT 1</i></span><span class="g-hucre">Aynı gün</span><span class="g-git">→</span></a>
    …
  </div>
  <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="İLK.webp" alt=""></div><div class="g-ic"><h4>İLK AD</h4><p>İlk açıklama.</p><a class="dgm dgm--iki" href="İLK">Sayfasına git →</a></div></div>
</div>
```
İlk satıra `data-akt` koy. İyileşme süreleri sayfa metninden; bilinmiyorsa "Muayenede belirlenir".

**SORU TERMİNALİ** (her içerik sayfasının sonunda, kapanıştan önce):
```html
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sorgulayın</p><h2>Sorunuzu seçin, cevap ekrana düşsün</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>salvera · KONU · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Soru 1?</button>
        … (5–6 soru; eski sayfanın SSS'inden seç) …
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekim onaylı yanıt</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede konuşalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Soru 1?","Cevap 1."],["Soru 2?","Cevap 2."],…]</script>
```
JSON içinde çift tırnak kaçır; cevaplar eski SSS cevaplarından, kısaltılmış.
"Ücreti nasıl öğrenirim?" sorusu HER sayfada son soru olarak bulunur (standart cevapla).

### 4 · KAPANIŞ (her sayfada, en son)
```html
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Konuya özel davet cümlesi</h2>
    <p class="g-sonalt">Tek cümle destek.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesini doldurun</a>
    </div>
  </div>
</section>
```
(Künyeyi render.js basıyor — ekleme.)

## AİLE PLANLARI
- **bolgeler/**: HERO(yüz görseli+noktalar; el/boyun/vücutta uygun görsel, nokta yok) →
  BANT → ATLAS(3 alt konu) → MATRİS(o bölgenin uygulamaları) → TERMİNAL → KAPANIŞ.
- **uygulamalar/**: HERO(konu görseli, nokta yok) → BANT(seans/iyileşme gerçek sayıları) →
  "Bu nedir / Bu ne değildir" ikili kart bölümü (`izgara izgara--2` + `kutu kutu--bilgi` & `kutu--uyari`) →
  BENTO(protokol=planlama adımları; çubuklar=süreç zaman çizgisi VEYA hedef derinlik; ilke kartı;
  kimlerde uygulanmaz `kutu--uyari` g-b4 + görsel g-b2) → TERMİNAL(eski SSS'ten) → KAPANIŞ.
  "Kimlerde uygulanmaz" içeriği MUTLAKA korunur.
- **cilt-sorunlari/**: HERO → nedenler bölümü (g-katblok yapısı görselsiz: `g-kno` numaralı
  3–5 neden bloğu, `bolum--sicak`) → "Hangi kapılar açık" MATRİS(kısaltılmış, 3–4 satır) →
  TERMİNAL → KAPANIŞ. İşlem satmaz, tarif eder — CTA'lar "değerlendirme" dilinde.
- **kurumsal** (klinik, hekim, yaklaşım, SSS, hazırlık-tanıtım, bilgi-hub, iletişim):
  HERO(uygun görsel) → içerik BENTO/izgara karışımı → KAPANIŞ. İletişim sayfasında form
  ve harita bölümü AYNEN korunur (eski işaretlemeyle kalabilir), yalnız hero+kapanış G olur.
  21-sss.js: sorular gruplu TERMİNAL×2 (uzun listeyi iki terminale böl) + KAPANIŞ.
- **DOKUNMA**: 26-hazirlik-araci.js, 30-cilt-gorunumu.js (araçlar), yasal/* (yalnız hero
  eklenebilir ama bento/animasyon YOK — sade kalsın; sadece g-son kapanışı ekle).

## KALİTE
- Tek h1. Başlıklar soru formatlı olabilir. baslik ≤60, aciklama 150–160 (mevcutları koru).
- data-gr'yi her ana bloğa ver; --d ile 60–90ms kademelendir.
- Ters tırnak içinde ${r} dışındaki ${ ifadeleri kaçır.
- Yazdıktan sonra dosyanın sözdizimini `node -e "require('./dosya')"` ile DOĞRULA.
