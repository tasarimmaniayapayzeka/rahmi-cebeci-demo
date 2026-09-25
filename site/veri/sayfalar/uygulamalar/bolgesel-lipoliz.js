const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/bolgesel-lipoliz',
  tip: 'tibbi',
  baslik: 'Bölgesel lipoliz: gıdı, karın, bel ve bacak iç yüzü',
  aciklama: 'Bölgesel lipoliz gıdı, karın, bel ve bacak iç yüzündeki sınırlı yağ birikimleri için değerlendirilir. Zayıflama yöntemi değildir; karar muayenede verilir.',

  icerik: (r, ik) => `
<!-- ═════ HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Bölgesel lipoliz</span></nav>
      <p class="g-etiket">Enjeksiyon Uygulamaları · Lokal Yağ Birikimi</p>
      <h1>Tartıyı değil, <span class="g-isik">inatçı bir bölgeyi</span> hedefleyen uygulama.</h1>
      <p class="g-hero__alt">Bölgesel lipoliz, kilonuz dengedeyken bile yerinde kalan küçük yağ birikimlerini hedefler: yağ hücrelerinin zarını bozmak üzere hazırlanmış bir solüsyon, ince iğnelerle doğrudan bu dokuya verilir. Gıdı, karın, bel ve bacak iç yüzü en sık değerlendirilen bölgelerdir. Zayıflama aracı olarak kullanılmaz; genel kilo fazlasında önce başka adımlar konuşulur.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Nedir, ne değildir ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Dört bölge, ayrı planlama</span><span><i></i>Önce dolgunluğun nedeni</span><span><i></i>Santimetre sözü verilmez</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-bolgesel-lipoliz.webp" width="1400" height="788" alt="Bel ve karın hattının yandan, yumuşak ışıkta görünümü" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
      <div class="g-hud" data-ghud><b>Elle kavranan doku</b><div class="g-cizgi"></div><span>Hedef, cildin hemen altında yer alan ve kasın üzerinde duran yüzeysel yağ katmanıdır.</span></div>
    </div>
  </div>
</section>

<!-- ═════ VERİ BANDI ═════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b><em data-gsay="4">0</em></b><span>Değerlendirilen bölge</span></div>
  <div data-gr style="--d:60ms"><b><em data-gsay="4">0</em>–6&#8239;hf</b><span>Seanslar arası kontrol</span></div>
  <div data-gr style="--d:120ms"><b><em data-gsay="3">0</em>–7&#8239;gün</b><span>Şişliğin belirgin olduğu dönem</span></div>
  <div data-gr style="--d:180ms"><b>Kilo değil</b><span>Hedef: sınırlı bir birikim</span></div>
</div></div>

<!-- ═════ BU NEDİR / BU NE DEĞİLDİR ═════ -->
<section class="bolum" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Tanım ve kapsam</p>
      <h2>Bölgesel lipoliz nedir, kilo vermeye yardımcı olur mu?</h2>
      <p class="giris">“Yağ yakan iğne”, “gıdı eritme” gibi adlar sosyal medyada sık geçer ve yöntemin yapabileceklerini gerçekte olduğundan çok daha büyük gösterir. Bu sayfada uygulamanın tıbbi adını kullanıyoruz.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>Solüsyon, deri altında sınırları belli bir yağ birikiminin içine çok sayıda küçük noktadan verilir ve ulaştığı yağ hücrelerinin zarını bozması amaçlanır. Çene altı için geliştirilmiş preparatların çoğunda deoksikolik asit bulunur; bu madde, vücudun yağları sindirmek için ürettiği safra asitlerinin bir türevidir. Vücut bölgelerinde kullanılacak ürünün içeriği ve ruhsat durumu muayenede ayrıca açıklanır.</p>
<p>Etki tek günde ortaya çıkmaz. Hasar gören yağ hücreleri, bağışıklık sisteminin temizlik hücreleri tarafından haftalar içinde ortadan kaldırılır; hücrelerin içindeki yağ ise vücudun yağı kullandığı olağan metabolizma yollarına katılır. Bu temizlik sırasında bölgede ödem, sıcaklık ve dokunma hassasiyeti görülmesi beklenir ve bir sorun işareti sayılmaz.</p>
        <p>Muayenehanemizde dört bölge değerlendirilir: <b>gıdı</b> (çene altı), <b>karın</b>, <b>bel yanları</b> ve <b>bacak iç yüzü</b> (uyluk iç yüzü ile diz içi). Alan genişledikçe bir seansta verilebilecek miktar sınırlandığından, karın gibi geniş bölgelerde plan daha fazla seansa bölünür. Bölge bazında ayrıntı <a href="${r}bolgeler/cene-ve-jawline/">çene ve jawline</a> ile <a href="${r}bolgeler/vucut/">vücut</a> sayfalarındadır.</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:70ms">
        <b>Bu ne değildir</b>
        <p><b>Zayıflama yöntemi değildir:</b> bir seansta etkilenen yağ gram düzeyindedir ve kilonuzda ölçülebilir bir düşüş beklenmez. Vücudun genelinde fazla kilo varsa ilk adım beslenme, hareket ve gerekiyorsa iç hastalıkları açısından değerlendirmedir.</p>
        <p><b>Karın içindeki yağa ulaşmaz:</b> iç organların çevresindeki yağ kasların altında kalır; bu uygulama yalnızca deri altındaki katmanla ilgilidir. Beldeki kalınlaşmanın büyük kısmı iç yağdan kaynaklanıyorsa beklenen fark oluşmaz.</p>
        <p><b>Cilt fazlalığını gidermez:</b> altındaki hacim azaldığında deri, esnekliği zayıfsa daha gevşek görünebilir. Yaygın ve kalın bir yağ dokusu ya da belirgin sarkma estetik cerrahinin alanına girer; böyle bir durumda enjeksiyon planlanmaz.</p>
        <p><b>Rakamla söz verilmez:</b> aynı bölgeye aynı miktar uygulansa bile iki kişinin dokusu farklı yanıt verir. Bu yüzden “şu kadar incelir” gibi bir öngörüde bulunmuyoruz; bazı kişilerde değişiklik belirgin olmayabilir.</p>
      </div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="--d:140ms;margin-top:16px">
      <b>Her dolgunluk yağ birikimi midir?</b>
      <p>Değildir; her bölgede ayırt edilmesi gereken başka nedenler vardır. <b>Gıdı:</b> iki parmak arasında tutulabilen yüzeysel yağ bu uygulamanın hedefidir. Dolgunluk boyun kasının derininde kalan yağdan, tükürük bezlerinden, küçük ya da geride duran bir çene yapısından veya deri gevşekliğinden kaynaklanıyorsa solüsyonun etkisi olmaz; gevşeklik öndeyse <a href="${r}uygulamalar/hifu-ameliyatsiz-yuz-germe/">HIFU</a>, çene desteği gerekiyorsa <a href="${r}uygulamalar/dolgu-uygulamalari/">dolgu uygulamaları</a> konuşulur.</p>
<p><b>Karın ve bel:</b> göbek çevresinde fıtık, doğum sonrası karın kaslarının ayrışması (diastaz) ya da gaz ve şişkinlik yağ birikimi gibi görünebilir; bu ayrım netleşmeden enjeksiyon yapılmaz. <b>Bacak iç yüzü:</b> iki bacakta simetrik, dokunmakla ağrılı ve kolay morarmayla giden yağ artışı lipödemi düşündürür; bu tabloda lipoliz uygun değildir. Damar ve ödem kaynaklı şişlikler de ayrıca araştırılır.</p>
<p>Boyunda yeni fark edilen bir şişlik, tiroit büyümesi ya da ele gelen bir bez varsa önce bunun nedeni aydınlatılır; bu değerlendirmenin nasıl yapıldığı <a href="${r}uygulamalar/hekim-muayenesi/">hekim muayenesi</a> sayfasında anlatılır. Bölgelere göre farklı nedenleri <a href="${r}cilt-sorunlari/bolgesel-yaglanma/">bölgesel yağlanma</a> sayfasında ayrıntılı bulabilirsiniz.</p>
    </div>
  </div>
</section>

<!-- ═════ BENTO ═════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Seans ve iyileşme</p>
      <h2>Seanslar nasıl ilerler, ilk haftalarda neler olur?</h2>
      <p class="giris">Her seansı bir iyileşme dönemi izler. Bu dönem bitmeden bölgeye bakıp karar vermek yanıltıcı olacağından takvim aceleye getirilmez.</p>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="70" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>4–6 hf</b></div>
        <p><b style="color:var(--murekkep)">Kontrol zamanı</b><br>Bir sonraki seansa, önceki uygulamanın etkisi görüldükten sonra karar verilir. Değişiklik beklenenden azsa dizi aynen sürdürülmez.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">İyileşme seyri</span>
        <div class="g-cubuk"><small><span>Şişlik, ısınma, hassasiyet</span><span>3–7 gün</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="25%"></b></div></div>
        <div class="g-cubuk"><small><span>Ele gelen sertlik, morarma</span><span>Birkaç hafta</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="55%"></b></div></div>
        <div class="g-cubuk"><small><span>Değişikliğin değerlendirilmesi</span><span>4–6 hafta</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="88%"></b></div></div>
        <p style="font-size:.72rem;color:var(--sessiz);margin-top:10px">Çubuk uzunlukları yalnız karşılaştırma içindir; size özel süreler muayenede konuşulur.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Protokol</span>
        <ol class="g-protokol">
          <li>Muayene: dolgunluğun kaynağı, son yıllardaki kilo değişimi, hastalıklar ve ilaçlar</li>
          <li>Bölgenin ayakta ve oturarak incelenmesi, işaretleme</li>
          <li>Aydınlatma ve yazılı onam; beklenen şişlik süresi anlatılır</li>
          <li>İlk seans; şişlik döneminde yalnızca iyileşme izlenir</li>
          <li>Kontrol muayenesi: devam, ara verme ya da başka yönteme geçiş</li>
        </ol>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">İlke</span><p>“Bir bölgeye hiç dokunmamayı önermek de hekimliğin parçasıdır.”</p></div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:70ms"><img src="${r}varliklar/gorsel/uyg-bolgesel-lipoliz-2.webp" alt="Çene altı ve boyun hattının yandan yakın planı" loading="lazy"><span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span></div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr style="--d:140ms"><h3>Nedeni birlikte ayırt edelim</h3><p>Sorun yağdan çok yüzeydeki pürüzlü görünümse <a href="${r}uygulamalar/selulit-gorunumu/" style="color:inherit">selülit planı</a> ayrıca değerlendirilir.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu talebi</a></div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Kimlere uygulanmaz, ne zaman ertelenir?</b>
        <ul>
          <li><b>Gebelik ve emzirme:</b> bu dönem boyunca uygulama yapılmaz.</li>
          <li><b>Vücut genelinde fazla kilo:</b> bölgesel bir işlem bu tabloda beklentiyi karşılamaz; beslenme düzeni ve iç hastalıkları açısından değerlendirme önceliklidir.</li>
          <li><b>Bölgede iyileşmemiş bir cilt sorunu:</b> yara, sivilce iltihabı, egzama atağı ya da enfeksiyon varken önce cilt toparlanır.</li>
          <li><b>Aşırı duyarlılık öyküsü:</b> bölgesel uyuşturucular, cilt temizleyici antiseptikler ya da enjeksiyon içeriği karşısında daha önce kaşıntı, kurdeşen veya şişlik yaşadıysanız bunu mutlaka söyleyin.</li>
          <li><b>Kan sulandırıcı ilaç ya da pıhtılaşma sorunu:</b> morluk ve şişlik daha belirgin olabilir. İlacınızı bırakmayın, dozunu değiştirmeyin; gerekiyorsa bu konu ilacı yazan hekiminizle birlikte konuşulur.</li>
          <li><b>Düzenli izlem gerektiren hastalıklar:</b> karaciğer, böbrek ya da tiroit hastalığı, süren bir otoimmün hastalık ya da yara iyileşmesini yavaşlatan genel bir sağlık sorunu.</li>
          <li><b>Gıdı için:</b> yutkunurken takılma hissi, sesinizde son dönemde başlayan kısıklık ya da boyunda yeni bir şişlik varsa uygulama bu belirtilerin nedeni anlaşılana kadar bekletilir.</li>
          <li><b>Karın ve bacak için:</b> değerlendirilmemiş fıtık, yakın zamanda geçirilmiş ameliyat, bacakta belirgin varis, pıhtı (tromboz) öyküsü ya da lipödem şüphesi planı değiştirir veya uygulamayı dışarıda bırakır.</li>
          <li><b>18 yaş altı:</b> planlanmaz.</li>
        </ul>
      </div>
      <div class="kutu kutu--acil g-b2" data-gr style="--d:70ms">
        <b>Beklemeden başvurun</b>
        <p>İyileşmek yerine her gün kötüleşen ağrı ya da şişlik, ciltte koyulaşan renk, kabuklanma veya yara, ateşle birlikte yayılan kızarıklık görürseniz kontrol tarihini beklemeyin. Gıdı uygulamasından sonra soluk almakta ya da yutkunmakta güçlük, seste kısılma; vücutta yaygın kurdeşen veya dudakta ve dilde şişme gelişirse doğrudan <b>112</b>’yi arayın ya da size en yakın acil servise gidin.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ SONRASI ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Sonrası</p>
      <h2>Uygulamadan sonraki günlerde nelere dikkat etmelisiniz?</h2>
      <p class="giris">Günlük yaşamınıza çoğunlukla ertesi gün dönebilirsiniz; ancak bölge birkaç gün dinlenmeye ihtiyaç duyar. Sauna, hamam, çok sıcak banyo ve ağır antrenman iki gün ertelenir, uygulama alanı ovalanmaz ya da yoğurulmaz. Bölgeye göre küçük önlemler işe yarar: gıdıda yastığı biraz yükseltmek, karın ve belde sıkan kemerleri birkaç gün kullanmamak, bacak iç yüzünde uzun süre hareketsiz oturmamak. Şişliğin inmesine yardım etmesi için ilk günlerde tuzlu yiyecekleri azaltıp suyu artırabilirsiniz. Ağrınız olursa kullanabileceğiniz ilaç size önceden söylenir; kanı sulandıran bir ağrı kesiciyi kendiliğinden seçmeyin. Birinci ayın sonuna kadar bölge beklediğinizden dolu görünebilir; bu görüntü bir sonraki seansın gerekçesi sayılmaz. Onamda konuşulan olası durumlar şunlardır: uzun süren ödem, ele gelen düğümcükler, yüzey düzensizliği, geçici his azalması, enfeksiyon ve iz; gıdıda seyrek olarak alt dudağı hareket ettiren sinirin geçici etkilenmesiyle gülüşte asimetri, erkeklerde sakal bölgesinde geçici seyrelme. İzlem ayrıntıları <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası takip</a> sayfasındadır.</p>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sorgulayın</p><h2>Bir soru seçin, yanıtını okuyun</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr')} · bölgesel lipoliz · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Halk arasındaki “yağ yakan iğne” bu mu?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Karın için kaç seans gerekir?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Uygulanan bölgedeki yağ geri gelir mi?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Günlük hayatıma ne zaman dönebilirim?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Bacak iç yüzündeki kalınlık hep yağdan mı kaynaklanır?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sayfada yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekim onaylı yanıt</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede konuşalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Halk arasındaki “yağ yakan iğne” bu mu?","Çoğu zaman kastedilen bu uygulamadır. Ancak yağ “yanmaz”: solüsyonun etkilediği hücreler haftalar içinde vücut tarafından temizlenir. Aynı gün ya da birkaç gün içinde sonuç bekleyenlerin hayal kırıklığı yaşamasının başlıca nedeni bu yavaş süreçtir."],["Karın için kaç seans gerekir?","Karın geniş bir alan olduğundan bir seansta verilebilecek miktar sınırlıdır ve plan çoğunlukla gıdıya göre daha fazla seansa bölünür. Sayı; yağ dokusunun kalınlığına, bölgenin genişliğine ve ilk seanslara verilen yanıta göre belirlenir, baştan bir paket olarak söylenmez."],["Uygulanan bölgedeki yağ geri gelir mi?","Solüsyonun etkilediği hücreler vücuttan uzaklaştırılır; ancak çevrede kalan yağ hücreleri kilo alındığında yeniden hacim kazanabilir. Kazanılan değişikliğin ne kadar süreceği büyük ölçüde kilonuzun seyrine bağlıdır; bu yüzden size “ömür boyu” gibi bir süre söylemiyoruz."],["Günlük hayatıma ne zaman dönebilirim?","Çoğu kişi masa başı işine ertesi gün döner; ağır spor ve sıcak ortamlar birkaç gün ertelenir. Şişlik en çok ilk günlerde belirgindir ve karın gibi geniş alanlarda daha uzun sürebilir. Gıdıya yapılacak bir uygulamayı düğün ya da sunum gibi önemli bir günün hemen öncesine koymamanız, arada en az iki hafta bırakmanız önerilir."],["Bacak iç yüzündeki kalınlık hep yağdan mı kaynaklanır?","Her zaman değil. İki bacakta simetrik, ağrılı ve kolay morarmayla birlikte olan yağ artışı lipödemi düşündürür; bu durumda lipoliz uygun değildir. Varis ya da ödem kaynaklı şişlikler de ayrıca araştırılır. Karar, muayenede bu ayrım yapıldıktan sonra verilir."],["Ücret bilgisi neden sayfada yok?","Sağlık hizmetlerinin tanıtımına ilişkin kurallar, ücretlerin internet üzerinden paylaşılmasına izin vermez. Kaç bölgeye kaç seans uygulanacağı kişiye göre değiştiği için bu konu muayenede, planınızla birlikte konuşulur."]]</script>

<!-- ═════ KAPANIŞ ═════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Nedeni ayırmadan plan kurmayız</h2>
    <p class="g-sonalt">Dolgunluğun kaynağını birlikte ayırt edelim. Muayeneden, bu bölge için lipoliz yerine başka bir yöntemin öne çıktığı bir plan da çıkabilir.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesini doldurun</a>
    </div>
  </div>
</section>
`,
};
