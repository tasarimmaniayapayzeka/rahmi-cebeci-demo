const S = require('../site');

module.exports = {
  slug: 'yaklasimimiz/neden-bazi-islemleri-yapmiyoruz',
  tip: 'tibbi',
  baslik: 'Kapsamımızın sınırı: burada yapılmayan işlemler ve nedenleri',
  aciklama: 'Ameliyat gerektiren girişimler, saç ekimi, lazer epilasyon ve sertifika dışı işlemler neden yapılmıyor; talebiniz kapsam dışındaysa izlenen yol.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}yaklasimimiz/" style="color:var(--sessiz);text-decoration:none">Yaklaşımımız</a> › <span>Kapsamın sınırı</span></nav>
      <p class="g-etiket">Yaklaşımımız · Kapsam</p>
      <h1>Yapmadığımız işlemler ve <span class="g-isik">nedenleri</span></h1>
      <p class="g-hero__alt">Hekimin çalışma alanı, uzmanlık belgesi ve Bakanlığın verdiği yetki belgeleriyle çizilir. Bu çerçevenin dışına çıkmak hem mevzuata aykırıdır hem de güvenli değildir. Bu sayfada muayenehanede yapılmayan işlemleri ve talebiniz kapsam dışında kaldığında nasıl bir yol izlendiğini bulacaksınız.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}uygulamalar/">Burada yapılan uygulamalar</a>
        <a class="dgm dgm--iki" href="#kural">Kapsamı ne belirler? ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Sınır açıkça yazılı</span><span><i></i>Doğru uzmanlık dalı söylenir</span><span><i></i>Yerine başka işlem önerilmez</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/ic3d-gece-yuz.webp" width="900" height="1200" alt="Koyu tonlarda, sakin ifadeli bir yüz çalışması" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
      <div class="g-hud"><b>Tek ölçüt</b><div class="g-cizgi"></div><span>Uzmanlık dalı ve Bakanlık yetki belgesi</span></div>
    </div>
  </div>
</section>

<!-- ═════════ KURAL ═════════ -->
<section class="bolum" id="kural">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Çerçeve</p>
      <h2>Kapsamı ne belirler?</h2>
    </div>
    <div data-gr style="--d:70ms">
      <p>Ülkemizde bir hekimin neyi yapıp neyi yapamayacağı keyfî değildir. Birinci belirleyici, sınavla kazanılan ve yıllar süren eğitimle tamamlanan uzmanlık dalıdır. İkincisi, belirli uygulamalar için Sağlık Bakanlığının ayrıca verdiği sertifikalardır; her sertifikanın hangi işlemleri içerdiği tek tek tanımlıdır. Çalışma alanı, bu iki belgenin çizdiği çerçevede biter.</p>
      <p>${S.hekim.tam}’nin uzmanlık dalı Aile Hekimliğidir; estetik uygulamalardaki yetkisi ise ${S.hekim.sertifika}’na dayanır.</p>
      <p>Muayenehanenin işi bu yüzden üç başlıkta toplanır: değerlendirme, planlama ve sertifikanın izin verdiği enjeksiyon, lazer ve cihaz uygulamaları. Ameliyat eğitimi gerektiren ya da başka bir uzmanlık dalının asıl alanına giren işler bu çerçevenin dışındadır.</p>
      <p>Bir talebi geri çevirmek, o işlemin gereksiz ya da yanlış olduğunu söylemek anlamına gelmez; yalnızca yapılacağı yerin burası olmadığını gösterir. Bir işlemde, uygulayan kişinin o işlem için yetkin olması en az işlemin kendisi kadar önemlidir.</p>
    </div>
  </div>
</section>

<!-- ═════════ YAPILMAYANLAR ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Kapsam dışı</p>
      <h2>Hangi işlemler bu muayenehanenin dışında kalıyor?</h2>
      <p class="giris">Bu başlıklardan biri için gelseniz de işlem yapılmaz. Yine de şikâyetiniz dinlenir ve doğru adresin hangi uzmanlık dalı olduğu söylenir.</p>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.kalkan}</span>
        <h3>Cerrahi girişimler</h3>
        <p>Göz kapağı ya da burun ameliyatı, yüz germe ameliyatı, yağ aldırma, meme ve vücut şekillendirme ameliyatları, protez ve iple askılama muayenehanenin dışında kalır. Bu girişimlerin yeri ameliyathanedir; anestezi desteği ve cerrahi branş eğitimi olmadan yapılamaz. Başvurulacak adres Plastik, Rekonstrüktif ve Estetik Cerrahi başta olmak üzere ilgili cerrahi branşlardır.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.yaprak}</span>
        <h3>Saç ekimi</h3>
        <p>Kıl köklerinin alınıp başka bölgeye taşındığı saç ekimi burada yapılmaz. Ancak dökülmenin arkasındaki nedeni aramak mümkündür: ferritin, tiroid ve diğer iç hastalık bulguları değerlendirilir, saçlı deri yakından incelenir. Uygun kişilerde saç mezoterapisi ya da saç PRP planlanabilir.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.damla}</span>
        <h3>Sertifika kapsamı dışındaki işlemler</h3>
        <p>Uzmanlık belgesinin ya da medikal estetik sertifikasının kapsamına girmeyen hiçbir işlem, talep edilse de uygulanmaz. Enerji temelli cihazlarda da ölçüt aynıdır: yetkisiz kullanım hukuka aykırıdır ve yanık ya da kalıcı iz gibi sonuçlara yol açabilir.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.liste}</span>
        <h3>Lazer epilasyon</h3>
        <p>Lazerle tüy azaltma bu muayenehanenin hizmetleri arasında yer almaz. Buradaki lazerler dövme silme, leke ve cilt yenileme uygulamalarında kullanılır. Tüylenmenin hormonal bir nedeni olabileceği düşünülüyorsa bu yöndeki değerlendirme muayenede konuşulabilir.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.mercek}</span>
        <h3>Ben ve deri oluşumlarının çıkarılması</h3>
        <p>Ben, kist ya da benzeri deri oluşumlarının kesilerek alınması burada yapılmaz; şüpheli görünen bir ben lazerle de silinmez. Boyutu, rengi ya da sınırı değişen bir ben fark edilirse dermatoloji muayenesi önerilir; gerekiyorsa cerrahi bir dal devreye girer. Patolojik incelemeden geçmemiş bir oluşumun yok edilmesi doğru değildir.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.saat}</span>
        <h3>Diş, göz ve kulak burun boğaz girişimleri</h3>
        <p>Diş hekimliğinin, göz hastalıklarının ve kulak burun boğazın alanına giren girişimler burada yapılmaz. Böyle bir şikâyetiniz varsa doğru branşı muayenede birlikte belirleriz.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ YÖNLENDİRME ═════════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Başvuru yolu</p>
      <h2>Talebiniz kapsam dışında kalırsa ne olur?</h2>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">01</span>
      <h3>Beklemeden söylenir</h3>
      <p>Talebiniz kapsam dışındaysa bunu randevunun ilk dakikalarında öğrenirsiniz. Size başka bir işlem teklif edilerek süre uzatılmaz.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:70ms">
      <span class="g-kno">02</span>
      <h3>Şikâyetiniz yine de değerlendirilebilir</h3>
      <p>İşlem yapılmasa da şikâyetin kendisi incelenebilir. Ekim yaptırmayı planlayan biri için dökülmenin hangi tipte olduğu ve buna eşlik eden bir iç hastalık bulunup bulunmadığı konuşulabilir; bu değerlendirme, ekimi yapacak hekime de fikir verir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:140ms">
      <span class="g-kno">03</span>
      <h3>Uygun uzmanlık dalı söylenir</h3>
      <p>Hangi dala başvurmanızın doğru olacağı ve o başvuruda yanınıza hangi bilgileri almanızın faydalı olacağı anlatılır. Bu sayfada belli bir kurumun ya da hekimin adı geçmez; yol gösterme branş düzeyinde kalır ve yalnızca muayenede yapılır.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:210ms">
      <span class="g-kno">04</span>
      <h3>Sonrası için kapı açık</h3>
      <p>Başka bir merkezde yapılmış bir işlemin ardından bir sorunla karşılaşırsanız, değerlendirme için muayeneye gelebilirsiniz. Dolgu sonrasında geç ortaya çıkan şişlik ve sertlikler, dolgu sayfasındaki istenmeyen durumlar bölümünde anlatılıyor.</p>
    </div>
  </div>
</section>

<!-- ═════════ NEDEN ÖNEMLİ ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Gerekçe</p>
      <h2>Sınırı yazıya dökmek neden önemli?</h2>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b4" data-gr>
        <span class="g-ket">Sınırın işlevi</span>
        <p>Sınırı yazılı olmayan bir muayenehanede her yeni istek “bunu da yapalım mı?” sorusunu doğurur. Bu soru sık sorulduğunda yetkinliğin kenarı zamanla silikleşir. Kapsamın baştan ve herkesin görebileceği biçimde yazılması, hekimi de başvuran kişiyi de bu kaymaya karşı korur.</p>
        <p style="margin-top:10px">Açıklık zamandan da tasarruf ettirir: talebiniz bu listedeyse randevu sırası beklemeden ilgili branşa gidebilirsiniz. Bu sayfa bunun için yazıldı.</p>
        <div class="dgm-sira" style="margin-top:16px">
          <a class="dgm dgm--iki" href="${r}uygulamalar/">Burada yapılan uygulamalar ${ik.ok}</a>
          <a class="dgm dgm--iki" href="${r}yaklasimimiz/">Yaklaşımımız ${ik.ok}</a>
        </div>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr style="--d:70ms"><span class="g-ket">İlke</span><p>“Neyin yapılmayacağını söylemek de hekimliğin bir parçasıdır.”</p></div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr style="--d:140ms"><img src="${r}varliklar/gorsel/grup-saglik.webp" alt="Üstten görünen hekim çalışma masası" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b2" data-gr style="--d:210ms">
        <span class="g-ket">Hakkınız</span>
        <p><b style="color:var(--murekkep)">Sormaktan çekinmeyin</b><br>İşlemi yapacak kişiye hekim olup olmadığını, bu işleme ilişkin yetki belgesinin bulunup bulunmadığını işlemden önce sorabilirsiniz; bu sizin hakkınızdır.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr style="--d:280ms"><h3>Randevudan önce sorun</h3><p>Bir telefonla, isteğinizin burada karşılanıp karşılanmadığını öğrenebilirsiniz.</p><a class="dgm dgm--altin" href="${r}iletisim/">İletişime geçin</a></div>
    </div>
  </div>
</section>

<!-- ═════════ UYARI ═════════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="kutu kutu--uyari" data-gr>
      <b>Önemli</b>
      <p>Yetkisiz ellerde yapılan girişimsel işlemlerin sonucu yanık, kalıcı iz, cilt renginde bozulma ya da damar tıkanması olabilir. İşlem nerede yapılırsa yapılsın, uygulayıcının hekim olduğunu ve o işlem için yetkili olduğunu önceden doğrulayın.</p>
    </div>
    <div class="kutu kutu--acil" data-gr style="--d:70ms;margin-top:16px">
      <b>Acil durumlarda</b>
      <p>Herhangi bir uygulamanın ardından nefes almakta zorlanırsanız, yüzünüz ya da diliniz aniden şişerse, işlem bölgesinde hızla yayılan solukluk, dayanılmaz ağrı veya görmede bozulma olursa randevuyu beklemeyin: vakit kaybetmeden size en yakın acil servise başvurun ya da <b>112</b>’yi arayın.</p>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka} · kapsam · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Hekimin hangi işlemlere yetkili olduğunu nereden anlarım?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Yapılmayan bir işlemin yerine başka bir uygulama önerir misiniz?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Lazer cihazınız varken neden lazer epilasyon yapmıyorsunuz?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Talebimin kapsamda olup olmadığını randevudan önce sorabilir miyim?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Bu liste ileride değişebilir mi?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücreti nasıl öğrenirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Hekimin hangi işlemlere yetkili olduğunu nereden anlarım?","Hekimin uzmanlık dalını ve yetki belgelerini sorabilirsiniz; sağlık kuruluşları bu belgeleri görülebilir biçimde bulundurur. Bir işlemden önce ‘bu işlem için sertifikanız var mı?’ diye sormak yersiz değil, gereklidir."],["Yapılmayan bir işlemin yerine başka bir uygulama önerir misiniz?","Hayır. Kapsam dışında kalan bir talebin karşılığı olarak amacı farklı bir işlem önermeyiz. Muayenede size gerçekten uygun başka bir adım görülürse bu ayrıca ve gerekçesiyle konuşulur."],["Lazer cihazınız varken neden lazer epilasyon yapmıyorsunuz?","Muayenehanedeki lazerler dövme silme, leke ve cilt yenileme amacıyla kullanılır; lazer epilasyon hizmetlerimiz arasında yer almaz. Tüylenmenin hormonal bir nedeni olabileceği düşünülüyorsa bu konu muayenede değerlendirilebilir."],["Talebimin kapsamda olup olmadığını randevudan önce sorabilir miyim?","Evet. Telefonla ya da WhatsApp üzerinden sorduğunuzda, talebinizin burada karşılanıp karşılanmadığı randevu verilmeden söylenir. Kapsam dışında olduğu belli olan bir başvuru için randevu açılmaz."],["Bu liste ileride değişebilir mi?","Değişebilir. Yeni bir yetki belgesi alınırsa ya da mevzuat güncellenirse bu sayfa da güncellenir. Geçerli durumu sayfanın sonundaki son güncelleme tarihinden izleyebilirsiniz."],["Ücreti nasıl öğrenirim?","Muayene ve uygulamalara ilişkin mali bilgiler, başvuru sırasında yalnızca size özel olarak bildirilir. Sağlık hizmetlerinin tanıtımını düzenleyen mevzuat, bu bilgilerin internet sitesinde yayımlanmasına izin vermez."]]</script>

<!-- ═════════ İLGİLİ ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Devamı</p>
      <h2>İlgili başlıklar</h2>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <a class="kart" href="${r}uygulamalar/">
        <h3>Burada yapılan uygulamalar</h3>
        <p>Muayenehanede planlanabilen enjeksiyon, lazer, cihaz ve saç uygulamalarının tam listesi.</p>
        <span class="kart__ok">Listeye git ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}hekim/">
        <h3>Hekim</h3>
        <p>${S.hekim.tam}: eğitim, aile hekimliği uzmanlığı ve medikal estetik sertifikası.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}uygulamalar/dolgu-uygulamalari/">
        <h3>Dolgu uygulamaları</h3>
        <p>Dolgu sonrası şişlik ve sertlik gibi istenmeyen durumlar ve bunların nasıl değerlendirildiği.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}cilt-sorunlari/sac-dokulmesi/">
        <h3>Saç dökülmesi</h3>
        <p>Dökülmenin tipini ve arkasındaki nedenleri anlamaya yönelik değerlendirme; ekim düşünenler için de.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yaklasimimiz/">
        <h3>Yaklaşımımız</h3>
        <p>Muayene, plan, uygulama günü ve takip: dört adımın sırası ve gerekçesi.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
    </div>
  </div>
</section>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Emin değilseniz randevudan önce sorun</h2>
    <p class="g-sonalt">İsteğinizin bu muayenehanenin kapsamına girip girmediğini bir telefon ya da WhatsApp mesajıyla öğrenebilirsiniz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">İletişime geçin</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
