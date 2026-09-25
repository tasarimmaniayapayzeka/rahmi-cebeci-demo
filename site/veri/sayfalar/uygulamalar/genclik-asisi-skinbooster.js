const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/genclik-asisi-skinbooster',
  tip: 'tibbi',
  baslik: 'Gençlik aşısı (skinbooster): hacim eklemeyen nem desteği',
  aciklama: 'Halk arasında gençlik aşısı denen skinbooster, cilde nem desteği veren ve hacim eklemeyen bir hyalüronik asit uygulamasıdır. Kimlere uygun, kaç seans?',

  icerik: (r, ik) => `
<!-- ═════ HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Gençlik aşısı (skinbooster)</span></nav>
      <p class="g-etiket">Enjeksiyon Uygulamaları · Cilt Kalitesi</p>
      <h1>Şekil değil, <span class="g-isik">cildin nemi ve dokusu</span> hedeflenir.</h1>
      <p class="g-hero__alt">Halk arasında “gençlik aşısı” olarak anılan skinbooster uygulamasında, akışkan kıvamda ve çapraz bağı düşük bir hyalüronik asit, çok ince iğnelerle derinin orta katmanına dağıtılır. Yüze hacim eklemez, hatları değiştirmez; cildin su tutma kapasitesini ve dokusunu desteklemeyi amaçlar. Dolgu ile aynı işlem değildir ve onun yerini tutmaz; size uygun olup olmadığına muayeneden sonra karar verilir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Dolgudan farkı ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Önce muayene, sonra karar</span><span><i></i>Program hekimden</span><span><i></i>Kontrol dâhil</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-genclik-asisi-skinbooster.webp" width="1400" height="788" alt="Nemli görünen yanak cildinin gün ışığında yakın plan görünümü" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <div class="g-hud" data-ghud><b>Hedef katman: dermis</b><div class="g-cizgi"></div><span>Akışkan jel ince bir ağ gibi yayılır; kabarıklık ya da hacim oluşturmaz.</span></div>
    </div>
  </div>
</section>

<!-- ═════ VERİ BANDI ═════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="5">0</em></b><span>Protokol basamağı</span></div>
  <div data-gr style="--d:60ms"><b>Dizi</b><span>Seanslara yayılan program</span></div>
  <div data-gr style="--d:120ms"><b>Saatler</b><span>Kabarcıkların sönme süresi</span></div>
  <div data-gr style="--d:180ms"><b>Hacimsiz</b><span>Yüz hatları değişmez</span></div>
</div></div>

<!-- ═════ BU NEDİR / BU NE DEĞİLDİR ═════ -->
<section class="bolum" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Tanım ve sınır</p>
      <h2>Gençlik aşısı (skinbooster) nedir, neyin yerine geçmez?</h2>
      <p class="giris">Bu uygulamaya dair yanlış beklentilerin çoğu, onu dolguyla aynı sanmaktan doğuyor. Bu yüzden ne olduğunu ve ne olmadığını yan yana yazdık.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>Hyalüronik asit, derinin ara maddesinde kendiliğinden bulunan ve suyu tutarak cildin esnek ve dolgun kalmasına katkı veren bir moleküldür. Yaş, güneş, sigara ve kuru ortamlar bu molekülün hem miktarını hem işlevini azaltabilir. Skinbooster uygulamasında, dışarıdan verilen hyalüronik asitle derinin nem ortamının desteklenmesi hedeflenir.</p>
        <p>Kullanılan ürünler dolgu jellerinden farklıdır: çapraz bağ oranları düşüktür ya da hiç yoktur, dokuda yer kaplayan bir kütle oluşturmazlar ve verildikleri katmanda ince bir tabaka hâlinde yayılırlar.</p>
<p>Bazı ürünlerde hyalüronik asidin yanında aminoasit, vitamin ya da antioksidanlar da bulunur; bu tür karışımlar <a href="${r}uygulamalar/mezoterapi/">mezoterapiye</a> yaklaşır. Uygulama tekniğini bölgeye ve deri kalınlığına göre hekim seçer; beklenen değişiklik ölçülüdür ve kişiden kişiye değişir.</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:70ms">
        <b>Bu ne değildir</b>
        <p><b>Dolgunun yerine geçmez, yüze hacim vermez:</b> dudak, elmacık, çene ya da şakakta dolgunluk oluşturmaz, yüzün hatlarını değiştirmez. Asıl şikâyetiniz hacim kaybıysa <a href="${r}uygulamalar/dolgu-uygulamalari/">dolgu uygulamaları</a> ayrıca değerlendirilir.</p>
        <p><b>Bir aşı değildir:</b> “gençlik aşısı” halk arasında kullanılan bir addır; uygulamanın bağışıklık sistemiyle ya da aşılamayla ilgisi yoktur. <b>Sarkmayı düzeltmez:</b> yerçekimine bağlı doku sarkmasında ve deri fazlalığında cerrahinin yerini tutmaz.</p>
        <p><b>Etkisi kalıcı değildir:</b> vücut, verilen hyalüronik asidi zaman içinde doğal yollarla parçalar; bakım seansı gerekip gerekmediği ayrıca konuşulur.</p>
        <p><b>Nedeni ortadan kaldırmaz:</b> ciltteki donukluğun ya da kuruluğun ardında bir cilt hastalığı veya dahili bir neden olabilir; bunu ortaya koymak <a href="${r}uygulamalar/hekim-muayenesi/">hekim muayenesinin</a> işidir.</p>
      </div>
    </div>
    <div class="kutu" data-gr style="--d:140ms;margin-top:16px">
      <p>Cildiniz mat ve susuz görünüyorsa <a href="${r}cilt-sorunlari/nem-kaybi-ve-donukluk/">ciltte nem kaybı ve donukluk</a> sayfasıyla başlamak yararlı olur; hacim kaybı ve sarkma ise <a href="${r}cilt-sorunlari/hacim-kaybi-ve-sarkma/">kendi sayfasında</a> ayrıca ele alınıyor. Bölge planı için <a href="${r}bolgeler/yuz/">yüz</a>, <a href="${r}bolgeler/boyun-ve-dekolte/">boyun ve dekolte</a> ve <a href="${r}bolgeler/el/">el</a> sayfalarına göz atabilirsiniz.</p>
    </div>
  </div>
</section>

<!-- ═════ BENTO ═════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Planlama ve seyir</p>
      <h2>Program nasıl kurulur, uygulamadan sonra neler olur?</h2>
      <p class="giris">İlk randevuda uygulama yapılacağı varsayılmaz. Muayene ve bilgilendirme tamamlandıktan sonra program çoğunlukla ayrı bir günde başlar.</p>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="55" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>Dermis</b></div>
        <p><b style="color:var(--murekkep)">Hedef katman</b><br>Ürün derinin orta katmanında kalır; ince çizgilerin yumuşaması ve yüzeydeki pürüzlülüğün azalması amaçlanır.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">İyileşme seyri</span>
        <div class="g-cubuk"><small><span>Kabarcık ve kızarıklık</span><span>Birkaç saat</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="18%"></b></div></div>
        <div class="g-cubuk"><small><span>Morluk olursa</span><span>Birkaç gün</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="46%"></b></div></div>
        <div class="g-cubuk"><small><span>Değerlendirme</span><span>Kontrol randevusunda</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="88%"></b></div></div>
        <p style="font-size:.72rem;color:var(--sessiz);margin-top:10px">Çubuklar oransal bir simgedir; size özel takvim muayenede netleşir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Protokol</span>
        <ol class="g-protokol">
          <li>Muayene ve öykü: ilaçlar, hastalıklar, gebelik durumu</li>
          <li>Cildin yakından incelenmesi: kuruluk, ince çizgi, doku</li>
          <li>Bölge, teknik ve program kararı — hekim belirler</li>
          <li>Bilgilendirme ve yazılı onam</li>
          <li>Uygulama, bakım önerileri ve <a href="${r}uygulamalar/uygulama-sonrasi-takip/">kontrol</a></li>
        </ol>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">İlke</span><p>“Cildin susuzluğu hacimle, hacim kaybı nemle giderilmez. Önce hangisiyle karşı karşıya olduğumuzu ayırırız.”</p></div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/ic3d-katman.webp" alt="Üst deri, dermis ve deri altı katmanlarını gösteren üç boyutlu kesit çizimi" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr style="--d:140ms"><h3>Size uygun olup olmadığını konuşalım</h3><p>Karar, cildiniz değerlendirildikten sonra birlikte verilir.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu talebi</a></div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Hangi durumlarda uygulanmaz, hangilerinde ertelenir?</b>
        <ul>
          <li><b>Bölgede aktif bir sorun:</b> enfeksiyon, uçuk, iltihaplı sivilce, alevlenmiş egzama ya da açık yara varsa uygulama yapılmaz; bölge iyileştiğinde yeniden değerlendirilir.</li>
          <li><b>Gebelik ve emzirme:</b> bu dönemlerde program başlatılmaz.</li>
          <li><b>Bilinen aşırı duyarlılık:</b> hyalüronik aside, uyuşturucu kremlere, antiseptiklere ya da üründeki yardımcı maddelere karşı daha önce reaksiyon geliştiyse plan buna göre değişir; bu bilgiyi muayenede mutlaka paylaşın.</li>
          <li><b>Alevlenme dönemindeki otoimmün ya da iltihaplı hastalık:</b> lupus gibi bağ dokusu hastalıklarının aktif döneminde uygulama ertelenir.</li>
          <li><b>Kanama eğilimi:</b> pıhtılaşma bozukluğu ya da kan sulandırıcı kullanımı morluk olasılığını artırır; ilacınızdaki bir değişiklik ancak onu düzenleyen hekimin onayıyla konuşulur.</li>
          <li><b>Yakın zamanda enfeksiyon, aşı ya da diş tedavisi:</b> bölgesel reaksiyon olasılığını artırabileceği için uygulama bir süre ertelenir.</li>
          <li><b>İçeriği bilinmeyen önceki uygulama:</b> aynı bölgeye daha önce ne verildiği bilinmiyorsa, bölge önce muayenede ayrıca değerlendirilir.</li>
          <li><b>Keloid eğilimi</b> ve yara iyileşmesini bozan genel durumlar.</li>
        </ul>
      </div>
      <div class="kutu kutu--acil g-b2" data-gr style="--d:70ms">
        <b>Beklemeden başvurun</b>
        <p>Uygulamadan sonra giderek artan ağrı, deride solma ya da mor–gri renk değişimi, görmeyle ilgili herhangi bir yakınma, yayılan şişlik veya ateş gelişirse randevu gününü beklemeyin. Bizi <a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a> numarasından arayın; telefonla ulaşamazsanız <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ SEANS VE ETKİ ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Zamanlama</p>
      <h2>Kaç seanslık bir program gerekir, etkisi ne kadar kalır?</h2>
      <p class="giris">Skinbooster tek seferlik bir işlem olarak değil, birkaç seanstan oluşan bir program olarak düşünülür. Seanslar arasında cildin toparlanmasına zaman tanınır; aralıkları ve toplam seans sayısını, ilk seansa verdiğiniz yanıta bakarak hekim belirler. Etkinin ne kadar süreceğini tek bir rakamla söylemek mümkün değildir: yaş, deri kalınlığı, güneşle temas, sigara ve eşlik eden cilt sorunları bu süreyi değiştirir. Değişikliği yalnız izlenime bırakmamak için, onay verirseniz aynı ışık ve açıyla fotoğraf kaydı alınır; bu kayıtlar yalnızca dosyanızda tutulur ve tanıtımda kullanılmaz.</p>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka} · gençlik aşısı · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Neden “gençlik aşısı” deniyor, gerçekten aşı mı?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Dolgu ile skinbooster arasındaki fark nedir?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Hangi bölgelere uygulanabilir?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Makyaj ve güneş için ne kadar beklemeliyim?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Kaç seanslık bir program planlanır?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Neden “gençlik aşısı” deniyor, gerçekten aşı mı?","Hayır, bir aşı değildir. “Gençlik aşısı” halk arasında yaygınlaşmış bir addır; tıbbi dilde skinbooster ya da cilt içi hyalüronik asit uygulaması olarak geçer. Farklı içerikteki ürünler aynı adla anılabildiği için, size uygulanacak ürünün içeriği muayenede açıkça konuşulur ve dosyanıza yazılır."],["Dolgu ile skinbooster arasındaki fark nedir?","Dolgu jeli sıkı bağlı ve kıvamlıdır; verildiği yerde bir hacim oluşturur ve yüzün hatlarını değiştirebilir. Skinbooster ürünü ise akışkandır, derinin içinde ince bir tabaka hâlinde yayılır ve nem ortamını destekler; yüzün şekline dokunmaz. Kısaca dolgu hatlarla, skinbooster cildin kalitesiyle ilgilenir."],["Hangi bölgelere uygulanabilir?","En sık yüz, boyun, dekolte ve el sırtında uygulanır. Göz çevresi gibi ince derili bölgelerde uygun ürün ve teknik ayrıca seçilir. Hangi bölgenin programa alınacağı cildinizin durumuna göre belirlenir."],["Makyaj ve güneş için ne kadar beklemeliyim?","İğne noktaları kapanana kadar makyaj yapmamanız istenir. İlk günlerde doğrudan güneşten, sıcak ortamlardan, saunadan ve yoğun spordan uzak durmanız önerilir. Süre bölgeye göre değiştiği için size yazılı bir bakım talimatı verilir."],["Kaç seanslık bir program planlanır?","Herkese aynı sayıda seans uygulanmaz. Çoğu planda önce birbirine yakın birkaç seans yapılır; cildin yanıtı görüldükten sonra seansların arası açılır. Yanıt beklenenin altında kalırsa seans sayısını artırmak yerine önce bunun nedenini konuşuruz."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Muayenede size özel plan netleştiğinde bu bilgi doğrudan size iletilir."]]</script>

<!-- ═════ KAPANIŞ ═════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Cildinizi değerlendirerek başlayalım</h2>
    <p class="g-sonalt">Cildinizde fark ettiğiniz değişikliği muayenede birlikte değerlendirir, size uyan seçeneği orada netleştiririz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
