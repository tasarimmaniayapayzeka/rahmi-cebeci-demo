const S = require('../site');
const { test } = require('../parcalar/test-veri');

/* Dövme silme yol haritası (5 Eki 2026). Seans aralığı Kirby-Desai ölçeğinden (J Clin Aesthet Dermatol 2009;2(3):32-37);
   toplam puan gösterilmez. Sayı göstermek istenmezse panelde "aralik_goster" ayarı "hayir" yapılır. HEKİM ONAYINA SUNULACAK. */
const VERI = {
  sorular: [
    { anahtar: 'tur', soru: 'Neyi sildirmeyi düşünüyorsunuz?', secenekler: [
      { deger: 'dovme', metin: 'Bir dövme' },
      { deger: 'kalici', metin: 'Kalıcı makyaj (kaş, dudak çevresi ya da göz kenarı)' }] },
    { anahtar: 'ten', soru: 'Cildiniz güneşe nasıl tepki verir?', ipucu: 'Yazın güneşe korunmasız çıktığınız ilk günleri düşünün.', secenekler: [
      { deger: '1', metin: 'Çok açık: hep yanarım, hiç bronzlaşmam' },
      { deger: '2', metin: 'Açık: kolay yanarım, zor bronzlaşırım' },
      { deger: '3', metin: 'Buğday: bazen yanarım, yavaş yavaş bronzlaşırım' },
      { deger: '4', metin: 'Esmer: nadiren yanarım, kolay bronzlaşırım' },
      { deger: '5', metin: 'Koyu esmer: çok nadir yanarım' },
      { deger: '6', metin: 'Çok koyu: hiç yanmam' }] },
    { anahtar: 'bolge', soru: 'Dövme vücudunuzun neresinde?', ipucu: 'Dolaşımın daha yavaş olduğu, kalpten uzak bölgelerde mürekkep kırıntıları daha yavaş taşınır.', secenekler: [
      { deger: '1', metin: 'Baş, yüz ya da boyun' },
      { deger: '2', metin: 'Göğüs, sırtın üst kısmı ya da omuz' },
      { deger: '3', metin: 'Karın, belin alt kısmı ya da kalça' },
      { deger: '4', metin: 'Üst kol ya da uyluk' },
      { deger: '5', metin: 'Ön kol, el, alt bacak ya da ayak' }] },
    { anahtar: 'renk', soru: 'Dövmede hangi renkler var?', secenekler: [
      { deger: '1', metin: 'Yalnız siyah ya da koyu gri' },
      { deger: '2', metin: 'Çoğunlukla siyah, biraz kırmızı' },
      { deger: '3', metin: 'Siyah ve kırmızının yanında bir-iki renk daha' },
      { deger: '4', metin: 'Çok renkli; yeşil, mavi, sarı ya da beyaz da var' }] },
    { anahtar: 'miktar', soru: 'Dövme nasıl yapılmış, mürekkep ne kadar yoğun?', secenekler: [
      { deger: '1', metin: 'Elle ya da ev koşullarında yapılmış (amatör)' },
      { deger: '2', metin: 'Profesyonel, ince çizgili ve az mürekkepli' },
      { deger: '3', metin: 'Profesyonel, gölgeli ve orta yoğunlukta' },
      { deger: '4', metin: 'Profesyonel, koyu boyanmış dolgun alanlar çok' }] },
    { anahtar: 'iz', soru: 'Dövmenin üzerinde iz ya da kabarıklık var mı?', secenekler: [
      { deger: '0', metin: 'Yok, deri düz' },
      { deger: '1', metin: 'Hafif pürüz ya da kabarıklık' },
      { deger: '3', metin: 'Belirgin kabarıklık ya da doku farkı' },
      { deger: '5', metin: 'Yoğun iz; deri sertleşmiş ya da çekmiş' }] },
    { anahtar: 'katman', soru: 'Bu dövme eski bir dövmenin üzerine mi yapıldı?', secenekler: [
      { deger: '0', metin: 'Hayır' },
      { deger: '2', metin: 'Evet, kapatma dövmesi' }] },
    { anahtar: 'bronz', soru: 'Son dört haftada dövmenin olduğu bölge güneşte bronzlaştı mı?', secenekler: [
      { deger: 'hayir', metin: 'Hayır' },
      { deger: 'evet', metin: 'Evet' },
      { deger: 'emin-degil', metin: 'Emin değilim' }] },
  ],
  metinler: [
    { anahtar: 'etken_ten', baslik: 'Cilt tonu', metin: 'Koyu tende derinin kendi pigmenti de enerjiyi soğurur; daha temkinli ayarlarla çalışıldığı için dizi uzayabilir.' },
    { anahtar: 'etken_bolge', baslik: 'Dövmenin yeri', metin: 'Ön kol, el, alt bacak ve ayakta mürekkep kırıntıları gövdeye göre daha yavaş taşınır.' },
    { anahtar: 'etken_renk', baslik: 'Renk sayısı', metin: 'Her renk farklı bir dalga boyuna yanıt verir; çok renkli dövmelerde bazı renkler geride kalabilir.' },
    { anahtar: 'etken_miktar', baslik: 'Mürekkep yoğunluğu', metin: 'Koyu boyanmış ve katmanlı alanlarda ufalanması gereken mürekkep miktarı fazladır.' },
    { anahtar: 'etken_iz', baslik: 'İz dokusu', metin: 'Dövme sırasında oluşmuş iz dokusu, enerjinin mürekkebe ulaşmasını güçleştirebilir.' },
    { anahtar: 'etken_katman', baslik: 'Kapatma dövmesi', metin: 'Üst üste iki dövmede iki ayrı mürekkep katmanı bulunur; ikisinin de açılması zaman alır.' },
    { anahtar: 'etken_yok', baslik: 'Belirgin bir zorlaştırıcı etken işaretlemediniz', metin: 'Yanıtlarınızda seans sayısını belirgin biçimde uzatan bir etken öne çıkmıyor; yine de dövmenin ilk seanslara verdiği yanıt tahmini değiştirebilir.' },
    { anahtar: 'olcek', baslik: 'Bu aralık nereden geliyor?', metin: 'Hesap, dövme silmede seans sayısını öngörmek için yayımlanmış Kirby-Desai ölçeğine (2009) dayanır. Ölçek pikosaniye lazerlerden önceki teknolojiyle geliştirildi; gerçek sayı kişiden kişiye değişir ve çoğu zaman ilk iki seanstan sonra netleşir.' },
    { anahtar: 'kesin', baslik: 'Bu bir vaat değildir', metin: 'Tam silinme taahhüt edilmez; bazı dövmelerde silik bir gölge ya da ton farkı kalabilir. Kesin plan, dövmeniz muayenede görüldükten sonra yapılır.' },
    { anahtar: 'not_kalici', baslik: 'Kalıcı makyajda önce deneme atımı', metin: 'Kaş, dudak ve göz kenarında kullanılan ten, kahve ve pembe tonların bir kısmı atımla griye ya da siyaha dönebilir. Bu yüzden önce küçük bir noktada deneme yapılır; göz kenarındaki uygulamalar ayrıca değerlendirilir.' },
    { anahtar: 'not_kirmizi', baslik: 'Kırmızı tonlar', metin: 'Kırmızı mürekkep, yıllar sonra bile kaşıntı ya da kabarıklık yapabilen bir renktir. Dövmenizde böyle bir tepki olduysa muayenede anlatın.' },
    { anahtar: 'not_renk', baslik: 'Yeşil, mavi, sarı ve beyaz', metin: 'Bu renkler lazere daha sınırlı yanıt verebilir; bazılarında belirgin açılma görülmeyebilir. Hangi rengin ne ölçüde açılacağı muayenede konuşulur.' },
    { anahtar: 'not_koyu', baslik: 'Koyu ten', metin: 'Koyu tende açık ya da koyu leke kalma olasılığı daha yüksektir; seanslar daha düşük enerjiyle ve aralıklara uyularak planlanır.' },
    { anahtar: 'not_iz', baslik: 'Var olan iz', metin: 'Dövmedeki kabarıklık ya da iz muayenede ayrıca değerlendirilir; kabarık iz yapma eğiliminiz varsa bunu da belirtin.' },
    { anahtar: 'not_katman', baslik: 'Alttaki desen', metin: 'Kapatma dövmesi açılırken alttaki eski desen yeniden belirebilir; bu, sürecin beklenen bir parçasıdır.' },
    { anahtar: 'not_bronz', baslik: 'Önce bronzluğun geçmesi gerekir', metin: 'Yakın zamanda bronzlaşmış deride lazer seansı ertelenir; ten eski hâline dönene kadar beklenir ve bu sürede bölge güneşten korunur.' },
    { anahtar: 'dizi_kisa', baslik: 'Görece kısa bir dizi', metin: '' },
    { anahtar: 'dizi_orta', baslik: 'Orta uzunlukta bir dizi', metin: '' },
    { anahtar: 'dizi_uzun', baslik: 'Uzun bir dizi', metin: '' },
    { anahtar: 'wa_tur', baslik: 'Silinecek', metin: '' },
    { anahtar: 'wa_bolge', baslik: 'Bölge', metin: '' },
    { anahtar: 'wa_renk', baslik: 'Renkler', metin: '' },
    { anahtar: 'wa_miktar', baslik: 'Dövme türü', metin: '' },
    { anahtar: 'wa_katman', baslik: 'Kapatma dövmesi', metin: '' },
  ],
  ayarlar: {
    aralik_goster: 'evet',
    ara_hafta_alt: '6',
    ara_hafta_ust: '8',
    sonuc_etiket: 'Yol haritanız',
    gizlilik: 'Yanıtlarınız kaydedilmedi ve bir yere gönderilmedi; sayfayı kapattığınızda silinir. WhatsApp mesajı yalnız siz gönderirseniz iletilir.',
  },
};

module.exports = {
  slug: 'dovme-silme-yol-haritasi',
  tip: 'tibbi',
  js: 'arac.js',
  baslik: 'Dövme silme kaç seans sürer? Yol haritanızı çıkarın',
  aciklama: 'Dövme silme kaç seans sürer? Sekiz soruda cilt tonu, bölge, renk ve mürekkebe göre tahmini seans aralığını ve takvimi görün. Kesin plan, muayenede.',
  odak: 'dövme silme kaç seans',   /* Yoast odak anahtar kelimesi */

  icerik: (r, ik) => `
<!-- ═════ HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/pico-lazer-dovme-silme/" style="color:var(--sessiz);text-decoration:none">Dövme silme</a> › <span>Yol haritası</span></nav>
      <p class="g-etiket">Araç · Dövme silme</p>
      <h1>Dövme silme <span class="g-isik">kaç seans</span> sürer?</h1>
      <p class="g-hero__alt">Dövme silme kaç seans sürer sorusunun tek bir cevabı yok: cilt tonu, dövmenin yeri, renkleri, mürekkebin yoğunluğu, varsa iz dokusu ve kapatma dövmesi sayıyı değiştirir. Sekiz kısa soruyu yanıtlayın; yayımlanmış bir ölçeğe göre tahmini seans aralığınızı, seanslar arasındaki bekleme süresini ve sizi neyin beklediğini görün. Fotoğraf istemez, yanıtlar cihazınızdan çıkmaz.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="#arac">Yol haritamı çıkarın ↓</a>
        <a class="dgm dgm--iki" href="${r}uygulamalar/pico-lazer-dovme-silme/">Pico lazerle dövme silme</a>
      </div>
      <div class="g-tikler"><span><i></i>Fotoğraf istemez</span><span><i></i>Yanıtlar cihazınızda kalır</span><span><i></i>Kesin plan muayenede</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-pico-lazer-dovme-silme-kapak.webp" width="1400" height="788" alt="Eldivenli elde pico lazer başlığı ve ön koldaki ince çizgili dövme" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <div class="g-hud"><b>Sekiz soru, yaklaşık bir dakika</b><div class="g-cizgi"></div><span>Sonunda tahmini aralık, takvim ve dikkat edilecekler</span></div>
    </div>
  </div>
</section>

<!-- ═════ ARAÇ ═════ -->
<section class="bolum bolum--arac" id="arac">
  <div class="sar">
    <div class="arac-sahne" data-arac="dovme">
      <div data-arac-govde>
        <div class="arac-giris">
          <h2>Dövmenizi tarif edin, yol haritanız çıksın</h2>
          <p>Sorular dövme silmede seans sayısını tahmin etmek için yayımlanmış bir ölçeğin altı ölçütünü izler. Sonuç bir aralıktır; dövmenizin lazere ilk yanıtını görmeden kesin sayı verilemez.</p>
          <ul class="arac-adimlar"><li>Cilt tonu</li><li>Bölge</li><li>Renk</li><li>Mürekkep</li><li>İz</li><li>Kapatma</li></ul>
          <button type="button" class="dgm dgm--gece" data-arac-basla>Başlayın</button>
        </div>
      </div>
      <nav class="arac-baglar" data-arac-bag aria-label="İlgili sayfalar">
        <a data-bag="iletisim" href="${r}iletisim/">Randevu talebi formu</a>
        <a data-bag="pico" href="${r}uygulamalar/pico-lazer-dovme-silme/">Pico lazerle dövme silme</a>
        <a data-bag="kalici" href="${r}cilt-sorunlari/dovme-ve-kalici-makyaj/">Dövme ve kalıcı makyaj</a>
        <a data-bag="hazirlik" href="${r}hazirlik-listesi/">Görüşmeye hazırlık notları</a>
      </nav>
    </div>
    ${test('dovme', VERI)}
  </div>
</section>

<!-- ═════ ETKENLER ═════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Sayıyı ne belirler?</p>
      <h2>Aynı büyüklükteki iki dövme neden farklı sürede açılır?</h2>
      <p class="giris">Lazer, mürekkebi derinin içinde ufalar; kırıntıları ise vücudun kendi temizlik sistemi haftalar içinde taşır. Bu iki işin hızını altı ölçüt belirler.</p>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <div class="kart kart--duz"><h3>Cilt tonu</h3><p>Açık tende enerji büyük ölçüde mürekkebe gider. Koyu tende derinin kendi pigmenti de enerjiyi paylaşır; güvenli kalmak için ayarlar düşürülür, dizi uzar.</p></div>
      <div class="kart kart--duz"><h3>Bölge</h3><p>Yüz ve boyun gibi dolaşımı güçlü bölgelerde kırıntılar daha hızlı uzaklaşır. Ön kol, el ve ayakta aynı dövme daha fazla seansa ihtiyaç duyabilir.</p></div>
      <div class="kart kart--duz"><h3>Renk</h3><p>Siyah, lazerin en kolay yakaladığı renktir. Kırmızı, yeşil, mavi ve sarı farklı dalga boyları ister; bazıları sınırlı açılır.</p></div>
      <div class="kart kart--duz"><h3>Mürekkep miktarı</h3><p>Elle yapılmış dövmelerde mürekkep seyrektir. Makineyle koyu boyanmış dolgun alanlarda ufalanacak mürekkep çok daha fazladır.</p></div>
      <div class="kart kart--duz"><h3>İz dokusu</h3><p>Dövme yapılırken oluşmuş kabarıklık ya da sertlik, enerjinin mürekkebe ulaşmasını zorlaştırır ve seans planını değiştirir.</p></div>
      <div class="kart kart--duz"><h3>Kapatma dövmesi</h3><p>Eski bir dövmenin üzerine yapılan dövmede iki katman mürekkep vardır; açılırken alttaki desen yeniden görünür hâle gelebilir.</p></div>
    </div>
  </div>
</section>

<!-- ═════ ÖLÇEK NOTU ═════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Dürüst bir not</p>
      <h2>Tahmin ne kadar güvenilir?</h2>
    </div>
    <div data-gr style="--d:70ms">
      <p>Bu araç, 2009'da dermatoloji literatüründe yayımlanan Kirby-Desai ölçeğini kullanır. Ölçek altı ölçüte puan verir; toplam, dövmenin kaç seansta açılabileceğine dair kaba bir öngörüdür. Biz toplam puanı göstermiyor, yalnızca ona karşılık gelen aralığı veriyoruz.</p>
      <p>Ölçek, pikosaniye lazerlerden önceki cihazlarla yapılan seanslar üzerinden geliştirildi. Bu yüzden aralığı bir başlangıç noktası olarak görün: dövmenizin lazere gerçek yanıtı genellikle ilk iki seansta belli olur ve plan o zaman güncellenir.</p>
      <p>Seanslar arasındaki altı ila sekiz haftalık bekleme, ufalanan mürekkebin taşınması ve derinin toparlanması içindir. Bu süreyi kısaltmak açılmayı hızlandırmaz, iz riskini artırabilir.</p>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Yol haritası hakkında merak edilenler</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLowerCase()} · yol haritası · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Çıkan aralık kesin mi?</button>
        <div class="g-syanit" data-gs-yanit="0">Hayır. Aralık, yanıtlarınıza karşılık gelen genel bir öngörüdür. Mürekkebin derinliği, markası ve dövmenin yaşı gibi araçla ölçülemeyen etkenler de sonucu değiştirir; dövmenizin lazere ilk yanıtı görüldükten sonra plan netleşir.</div>
        <button class="g-ssoru" data-gs="1"><i>›</i>Kalıcı makyaj için de kullanabilir miyim?</button>
        <div class="g-syanit" data-gs-yanit="1">Kullanabilirsiniz; ancak kaş, dudak ve göz kenarındaki ten ve kahve tonları atımla koyulaşabildiği için önce küçük bir deneme yapılır. Bu tür uygulamalarda takvimi deneme sonrası yanıt belirler.</div>
        <button class="g-ssoru" data-gs="2"><i>›</i>Yanıtlarım bir yere kaydediliyor mu?</button>
        <div class="g-syanit" data-gs-yanit="2">Hayır. Hesap tamamen tarayıcınızda yapılır; yanıtlar sunucuya gönderilmez, çerez olarak yazılmaz ve sayfayı kapattığınızda silinir. Sonucu WhatsApp ile paylaşmak isterseniz mesajı kendiniz gönderirsiniz.</div>
        <button class="g-ssoru" data-gs="3"><i>›</i>Sonucu muayeneye getirmem gerekir mi?</button>
        <div class="g-syanit" data-gs-yanit="3">Gerekmez, ama işinize yarayabilir. Sonuç sayfasını yazdırabilir ya da WhatsApp mesajıyla gönderebilirsiniz; dövmenin ne zaman ve nasıl yapıldığını hatırlamak da muayenede yardımcı olur.</div>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
`,
};
