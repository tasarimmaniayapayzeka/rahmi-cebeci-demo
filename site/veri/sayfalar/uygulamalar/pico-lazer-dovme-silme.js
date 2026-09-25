const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/pico-lazer-dovme-silme',
  tip: 'tibbi',
  baslik: 'Pico lazer ile dövme silme: seans planı ve beklentiler',
  aciklama: 'Pikosaniye lazerle dövme silmede yanıt mürekkebin rengine, derinliğine ve dövmenin türüne göre değişir. Seans aralığı, kimlere uygulanmadığı ve sonrası.',

  icerik: (r, ik) => `
<!-- HERO -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Pico lazer ile dövme silme</span></nav>
      <p class="g-etiket">Cihaz Destekli Uygulamalar · Dövme Silme</p>
      <h1>Pico lazerle dövme silme: mürekkep <span class="g-isik">seanslar içinde</span> açılır.</h1>
      <p class="g-hero__alt">Pikosaniye, saniyenin trilyonda biridir; pico lazer enerjisini bu kadar kısa süren atımlarla verir. Hedef, deri içindeki mürekkep taneciklerini ısınmaya fırsat bulmadan ufalamak ve bu kırıntıların vücut tarafından haftalar içinde taşınmasını sağlamaktır. Tam silinme taahhüt edilmez; amaç, görünümün her seansla biraz daha açılmasıdır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu isteyin</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Yöntemin işleyişi ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Tam silinme taahhüt edilmez</span><span><i></i>Önce küçük alanda deneme</span><span><i></i>Ben üzerine atım yapılmaz</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/foto/klinik-cihaz-odasi.webp" width="1400" height="788" alt="Muayenehanenin lazer ve cihaz odası; pikosaniye lazer cihazı pencere önünde" loading="eager">
      <div class="g-isin"></div>
    </div>
  </div>
</section>

<!-- VERİ BANDI -->
<div class="g-band"><div class="sar">
  <div data-gr><b>6–8&#8239;hf</b><span>İki seans arasındaki süre</span></div>
  <div data-gr style="--d:70ms"><b><em data-gsay="6">0</em></b><span>Ayrı değerlendirilen dövme türü</span></div>
  <div data-gr style="--d:140ms"><b><em data-gsay="5">0</em></b><span>Protokol adımı</span></div>
  <div data-gr style="--d:210ms"><b>Test</b><span>Önce küçük bir alanda</span></div>
</div></div>

<!-- BU NEDİR / BU NE DEĞİLDİR -->
<section class="bolum" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Ne yapar, ne yapmaz</p><h2>Lazer dövmedeki mürekkebe ne yapar, dövme bütünüyle kaybolur mu?</h2><p class="giris">Dövme iğnesi mürekkebi derinin orta katmanına bırakır. Tanecikler onları yutan savunma hücrelerinin içinde kalır; taşınamayacak kadar iri oldukları için yıllarca yerinden oynamaz. Lazer taneciği taşınabilir boyuta indirir, gerisini vücut yapar. Genel çerçeve için <a href="${r}cilt-sorunlari/dovme-ve-kalici-makyaj/">dövme ve kalıcı makyaj</a> sayfasına bakabilirsiniz.</p></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>Enerji çok kısa sürede verildiğinde çevre dokuya ısı olarak yayılacak zaman kalmaz; mürekkep taneciği ani bir basınç dalgasıyla kırıntılara ayrılır. Buna fotoakustik etki denir ve amaç çevre derinin daha az ısınmasıdır.</p>
<p>Kırıntıları uzaklaştıran lazer değil, bağışıklık sistemidir; savunma hücreleri parçaları lenf yollarıyla taşır. Bu yüzden açılma seans günü değil, izleyen haftalarda fark edilir.</p>
<p>İki dövme aynı renkte olsa bile biri daha derine, daha yoğun işlenmiş ya da daha yeni olabilir; bu farklar seans sayısını değiştirir. Dolaşım da rol oynar: ayak bileği ve el sırtı gibi kalpten uzak bölgelerde süreç yavaşlar.</p>
<p><b>Kullanılan cihaz:</b> pikosaniye Nd:YAG lazer (Picodela II).</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:80ms">
        <b>Bu ne değildir</b>
        <p>Dövmeyi bütünüyle silme sözü veren bir işlem değildir. Dizinin sonunda silik bir gölge, çevre deriden açık ya da koyu bir ton veya hafif doku farkı kalabilir; bu olasılık ilk görüşmede konuşulur ve onam formunda yazılıdır.</p>
<p>Deriyi kazımaz, yüzeyi soymaz; mürekkep yerinde ufalanır. Sık aralıkla gelmek de işi hızlandırmaz: vücut önceki seansın kırıntılarını taşımayı bitirmeden verilen yeni enerji açılmaya bir şey katmaz, tersine ton bozulması ve iz riskini büyütür. Aralığı kısaltma isteğini bu yüzden kabul etmiyoruz.</p>
<p>Açılmayacağını öngördüğümüz bir dövme için seans başlatmıyoruz. Bu sınırı neden koyduğumuzu <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a> başlığı altında açıkladık.</p>
      </div>
    </div>
  </div>
</section>

<!-- RENK VE DÖVME TÜRÜ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Renk ve tür</p><h2>Renk ve dövme türüne göre yanıt nasıl değişir?</h2><p class="giris">Aynı sayıda seanstan sonra iki dövme çok farklı görünebilir. Aşağıdakiler genel eğilimlerdir; sonuçlar kişiden kişiye değişir.</p></div>
    <div class="izgara izgara--3">
      <div class="kart" data-gr><h3>Siyah ve koyu tonlar</h3><p>Siyah, koyu gri ve lacivert mürekkep lazer ışığını iyi soğurur; yanıtı öngörmesi en kolay gruptur. Yoğun siyah dövmelerde yine de dizi uzun sürebilir.</p></div>
      <div class="kart" data-gr style="--d:70ms"><h3>Kırmızı, turuncu ve pembe</h3><p>Farklı bir dalga boyu gerekir, yanıt orta düzeydedir. Kırmızı mürekkep, dövmede gecikmiş kaşıntı ve kabarıklığa en sık yol açan renktir; bu öykü lazer öncesinde mutlaka konuşulur.</p></div>
      <div class="kart" data-gr style="--d:140ms"><h3>Yeşil, mavi ve sarı</h3><p>Nd:YAG dalga boylarıyla uyumu zayıf renklerdir; açılma yavaş ve sınırlı kalabilir, sarı ve beyazda belirgin değişim olmayabilir. Birden çok renk taşıyan bir dövmede siyah kısımlar solarken yeşil kısımlar yerinde kalabilir; dizinin ortasında dövme yamalı görünebilir.</p></div>
      <div class="kart" data-gr><h3>Kalıcı makyaj</h3><p>Kaş, dudak ve eyeliner uygulamalarındaki ten, kahve ve pembe tonların bir kısmı demir oksit ya da titanyum dioksit içerir; atımla anında griye veya siyaha dönüp açılmayabilir. Bu yüzden ilk atım, kaşın dış ucu gibi göze batmayan bir noktaya yapılır ve sonucu birkaç hafta beklenir. Kaş kıllarının rengi açılabilir; göz kapağı kenarı göz güvenliği için ayrıca değerlendirilir.</p></div>
      <div class="kart" data-gr style="--d:70ms"><h3>Amatör ve profesyonel dövme</h3><p>Elle ya da ev koşullarında yapılan dövmelerde mürekkep seyrek ve düzensiz derinliktedir; çoğu zaman daha az seansla açılır. Makineyle, yoğun ve katmanlı işlenmiş profesyonel dövmelerde dizi uzar. Yıllar içinde solmuş dövmeler daha hızlı yanıt verebilir.</p></div>
      <div class="kart" data-gr style="--d:140ms"><h3>Kapatma dövmesi</h3><p>Eski dövmenin üzerine yapılan ikinci dövmede iki mürekkep katmanı üst üste bulunur; seans sayısı artar, açılırken alttaki desen yeniden belirebilir. Yeni bir kapatma düşünülüyorsa eski dövmeyi birkaç seansla soldurmak işi kolaylaştırabilir.</p></div>
    </div>
  </div>
</section>

<!-- BENTO -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Plan nasıl kurulur</p><h2>Seans sayısını ne belirler, kimlerde beklemek gerekir?</h2><p class="giris">Muayenede renk, derinlik, yoğunluk, dövmenin yaşı, bölgenin dolaşımı ve genel sağlık durumunuz not edilir. İlk aralık kabaca bir tahmindir; dövmenin lazere tepkisini ilk iki seans gösterir, sayı ondan sonra daraltılır.</p></div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="70" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>6–8 hf</b></div>
        <p><b style="color:var(--murekkep)">Seanslar arası süre</b><br>Ufalanan mürekkebin taşınması zaman alır; yeni seans, bu taşınma büyük ölçüde tamamlandığında yapılır.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Renk ve yanıt</span>
        <div class="g-cubuk"><small><span>SİYAH–KOYU GRİ</span><span>Belirgin açılma</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="90%"></b></div></div>
        <div class="g-cubuk"><small><span>KIRMIZI–PEMBE</span><span>Değişken</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="55%"></b></div></div>
        <div class="g-cubuk"><small><span>YEŞİL–MAVİ–SARI</span><span>Yavaş ve sınırlı</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="15%"></b></div></div>
        <p style="font-size:.68rem;color:var(--sessiz);margin-top:8px">Çubuk boyları yalnız karşılaştırma içindir; size özel plan muayenede kurulur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Adım adım</span>
        <ol class="g-protokol">
          <li>Muayene: renk, derinlik, dövmenin yaşı, alandaki benler</li>
          <li>Görünmeyen küçük bir noktada deneme atımı</li>
          <li>Bilgilendirme ve yazılı onam; kalabilecek gölge açıkça konuşulur</li>
          <li>Koruyucu gözlükle sıralı atımlar; kısa süren beyazlama olağandır</li>
          <li>Soğutma, örtü ve 6–8 hafta sonrasına kontrol</li>
        </ol>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Kimlerde yapılmaz ya da ertelenir?</b>
        <p>Yakın zamanda bronzlaşan deride ton eski hâline dönene kadar beklenir; sprey ya da krem bronzlaştırıcı kullandıysanız söyleyin. Bazı antibiyotikler ve sarı kantaron gibi ürünler deriyi ışığa duyarlı yapabildiğinden kullandığınız her ilacı ve takviyeyi listeleyin. Geçmişte romatizmal hastalık için altın tuzu tedavisi aldıysanız mutlaka bildirin; lazer deride kalıcı renk değişikliği yapabilir.</p>
<p>Dövmenin bulunduğu deride güneş yanığı, açık yara, iltihap ya da alevlenmiş egzama varsa önce deri toparlanır; lazer iyileşmeyi uzatabilir. Dövmede daha önce mürekkebe bağlı kaşıntı, kabarma ya da sertleşme olduysa lazer bu tepkiyi artırabilir.</p>
<p>Kabarık iz ya da keloid yapma eğilimi, vitiligo gibi renk kaybıyla giden tablolar, gebelik ve emzirme, kontrolsüz diyabet ve yara iyileşmesini bozan durumlar uygulamayı engeller ya da erteler. Alan içindeki benlere ve incelenmemiş pigmentli lekelere atım yapılmaz; önce büyütmeli olarak bakılır. Akne için ağızdan ilaç (isotretinoin) kullandıysanız ya da bölgeye yakın zamanda başka bir işlem yapıldıysa bir süre beklenir.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/uyg-pico-lazer-dovme-silme-2.webp" alt="Kol iç yüzündeki deri; dövmenin sık yapıldığı alanlardan biri" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">Hekimin notu</span><p>"Açılmayacağını öngördüğümüz bir dövme için seans dizisi başlatmıyoruz."</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Uygulamadan sonra</span>
        <p style="font-size:.92rem">İlk günlerde kızarıklık, hafif şişlik ve hassasiyet olağandır; noktasal kanama, küçük su kabarcıkları ve ince kabuk görülebilir, bunlar çoğunlukla bir–iki haftada yatışır. Seans günü ve sonrasında yapılacakları aşağıda adım adım yazdık.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr style="--d:140ms"><h3>Dövmenize birlikte bakalım</h3><p>Renk ve derinlik görülmeden seans aralığı söylenmez.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu isteyin</a></div>
      <div class="kutu kutu--acil g-b6" data-gr>
        <b>Beklemeden bize ulaşmanız gereken durumlar</b>
        <p>Kızarıklık yayılıyor, ağrı azalacağına artıyor, akıntı ya da ateş oluyor, büyük su kabarcıkları çıkıyor veya şişlik uzuyorsa kontrol gününü beklemeyin. ${S.iletisim.tel} numarasından bize ulaşın; telefonla ulaşamıyorsanız en yakın acil servise gidin.</p>
      </div>
    </div>
  </div>
</section>

<!-- SEANS GÜNÜ VE SONRASI BAKIM -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Seans günü ve bakım</p><h2>Seans günü ne olur, sonraki haftalarda neye dikkat edilir?</h2><p class="giris">Bakırköy’deki muayenehanemizde her seans aynı sırayla ilerler; size özel bakım notu seansın sonunda yazılı olarak verilir.</p></div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">Kesit 01</span>
      <h3>Gelmeden önce</h3>
      <p>Seanstan önceki dört hafta bölgeyi güneşten ve bronzlaştırıcılardan koruyun. Seans günü alana krem sürmeyin; kıl varsa bir gün önce jiletle alın, ağda yapmayın. Bol bir giysi tercih edin.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:60ms">
      <span class="g-kno">Kesit 02</span>
      <h3>Hazırlık ve göz koruması</h3>
      <p>Bölge temizlenir ve yalnızca dosyanızda saklanmak üzere fotoğraflanır. Size ve hekime lazere uygun koruyucu gözlük takılır; gerekirse uyuşturucu krem ya da soğuk hava kullanılır.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:120ms">
      <span class="g-kno">Kesit 03</span>
      <h3>Atımlar</h3>
      <p>Süre, dövmenin büyüklüğüne göre birkaç dakikadan yarım saate kadar değişir. Atımlar lastik bant çarpması ya da sıcak bir kıvılcım gibi hissedilebilir. Dövmenin üzerinde oluşan anlık beyazlama dakikalar içinde söner.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:180ms">
      <span class="g-kno">Kesit 04</span>
      <h3>İlk 48 saat</h3>
      <p>Bölge soğutulur, ince bir tabaka merhem sürülüp steril örtüyle kapatılır. Evde buzu doğrudan değdirmeden, beze sararak uygulayın. Kısa ve ılık duş alın, bölgeyi ovmadan kurulayın.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:240ms">
      <span class="g-kno">Kesit 05</span>
      <h3>İlk iki hafta</h3>
      <p>Su kabarcıklarını patlatmayın, kabukları koparmayın, kaşımayın. Kabuklar tamamen dökülmeden deniz, havuz, hamam ve saunaya girmeyin; yoğun spor ve sürtünen sıkı giysiler ilk günlerde ertelenir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:300ms">
      <span class="g-kno">Kesit 06</span>
      <h3>Seanslar arasında</h3>
      <p>Deri kapandıktan sonra bölgeyi her gün yüksek korumalı güneş koruyucuyla ya da giysiyle örtün; koruma dizi boyunca sürer. Altı–sekiz hafta sonraki kontrolde açılma değerlendirilir ve sonraki seansa birlikte karar verilir. İzlem düzeni <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası kontrol</a> sayfasında.</p>
    </div>
  </div>
</section>

<!-- SORU TERMİNALİ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLowerCase()} · dövme silme · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Dizinin sonunda dövmeden bir şey kalır mı?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Kaç seans gerekeceğini baştan söyleyebilir misiniz?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Seansları daha sık yapamaz mıyız?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Koyu tenliyim, uygulama yapılabilir mi?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Uygulama sırasında ne hissedilir?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nasıl öğrenebilirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Dizinin sonunda dövmeden bir şey kalır mı?","Kalabilir. Pek çok dövme seanslar boyunca belirgin biçimde açılır; ama sonunda silik bir gölge, çevresinden farklı bir ton ya da hafif doku farkı görülebilir. İz riskini en çok artıran iki alışkanlık, kabuğa dokunmak ve bölgeyi güneşe açık bırakmaktır."],["Kaç seans gerekeceğini baştan söyleyebilir misiniz?","Kabaca bir aralık verebiliriz. Aralığı renk, derinlik ve bölge belirler; yoğun ve çok renkli profesyonel dövmelerde dizi uzar. Dövmenin lazere tepkisi ilk iki seansta ortaya çıkar ve tahmin o zaman daraltılır."],["Seansları daha sık yapamaz mıyız?","Yapmıyoruz. Lazer mürekkebi ufalar, ama kırıntıları vücut haftalar içinde taşır; altı–sekiz haftalık ara bu iş içindir. Erken seans açılmayı hızlandırmaz, ton bozulması ve iz riskini büyütür."],["Koyu tenliyim, uygulama yapılabilir mi?","Yapılabilir; ancak derinin kendi pigmenti de enerjiyi soğurduğu için açık ya da koyu leke kalma olasılığı artar. Düşük enerjiyle, iyi soğutmayla ve önce deneme atımıyla başlanır; gerekirse seans aralığı uzatılır."],["Uygulama sırasında ne hissedilir?","Çoğu kişi atımları lastik bant çarpmasına benzetir. Kemiğe yakın ve ince derili bölgeler daha duyarlıdır; gerekirse uyuşturucu krem ve soğuk hava kullanılır."],["Ücret bilgisini nasıl öğrenebilirim?","Sağlık hizmetlerinin tanıtımını düzenleyen kurallar ücretlerin internette yayımlanmasına izin vermez. Plan her dövmede farklı olduğundan bu konu muayenede konuşulur."]]</script>

<!-- KAPANIŞ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Önce dövmenize bakalım, sonra planı konuşalım</h2>
    <p class="g-sonalt">Rengi, derinliği ve bulunduğu bölgeyi görmeden verilecek her seans tahmini eksik kalır.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
