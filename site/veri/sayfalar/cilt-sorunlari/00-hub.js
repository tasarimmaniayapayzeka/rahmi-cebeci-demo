const S = require('../../site');

/* şikâyet başlıklarının kart notları — anahtarlar ve sıra site.js > sorunlar'dan gelir */
const NOT = {
  'mimik-cizgileri-ve-kirisiklik': 'Çizgi yalnızca yüzünüz hareket ederken mi beliriyor, yoksa dinlenirken de duruyor mu? Plan bu soruyla başlar.',
  'hacim-kaybi-ve-sarkma': 'Eksilen dolgunluk mu, gerginlik mi? Yüzün hangi katmanının değiştiği belirlenmeden destek ya da sıkılaştırma seçilmez.',
  'goz-alti-koyulugu': 'Koyu görünüm pigmentten, damarlardan, ince deriden, gözyaşı oluğundaki hacim kaybından ya da ödemden gelebilir; önce kaynak ayrılır.',
  'akne-ve-akne-izi': 'Akne sürerken yapılacaklarla geride iz kaldığında yapılacaklar farklıdır. Cildinizin hangi dönemde olduğu saptanır, sıra buna göre kurulur.',
  'cilt-tonu-ve-leke': 'Güneş lekesi, melazma ve iltihap sonrası koyulaşma benzer görünür ama farklı yollarla ilerler; güneşten korunma hepsinin temelidir.',
  'gozenek-ve-cilt-dokusu': 'Gözeneğin ne kadar dikkat çektiği yağ salgısına, yüzey kalınlığına ve destek dokuya bağlıdır; pürüz ve akne izi ayrıca değerlendirilir.',
  'nem-kaybi-ve-donukluk': 'Mat ve gergin ciltte sorun çoğunlukla zayıflamış koruyucu katmandır. İlk adım yeni ürün eklemek değil, cildi yoranı bırakmaktır.',
  'sac-dokulmesi': 'Yaygın dökülmenin ardında demir, tiroit ya da yakın zamanda geçirilmiş bir hastalık olabilir; saçlı deriye bakmadan önce neden araştırılır.',
  'asiri-terleme': 'Koltuk altı, avuç içi ya da ayak tabanında yoğunlaşan bölgesel terleme mi, başka bir nedene bağlı yaygın terleme mi? Ayrım önce yapılır.',
  'bolgesel-yaglanma': 'Diyet ve harekete rağmen küçülmeyen sınırlı bir birikim mi, ödem ya da gevşek deri mi? Gıdı, karın ve bel muayenede ayrı ayrı değerlendirilir.',
  'selulit': 'Selülit bir hastalık değil, deri altı yapısının yüzeye yansımasıdır. Evresi ve eşlik eden durumlar belirlenerek gerçekçi bir hedef konuşulur.',
  'dovme-ve-kalici-makyaj': 'Dövmede ve kalıcı makyajda sonucu rengin, derinliğin ve mürekkep içeriğinin yanıtı belirler; açık tonlarda önce test atışı yapılır.',
};

module.exports = {
  slug: 'cilt-sorunlari',
  tip: 'tibbi',
  baslik: 'Cilt sorunları: on iki şikâyet, her biri için önce ayrım',
  aciklama: 'Kırışıklıktan saç dökülmesine, selülitten dövme pişmanlığına on iki şikâyet: her sayfa nedenin nasıl ayrıldığını ve sonra neyin konuşulduğunu anlatır.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <span>Cilt sorunları</span></nav>
      <p class="g-etiket">Cilt sorunları · ${S.sorunlar.length} başlık</p>
      <h1>Önce <span class="g-isik">ne yaşadığınızı</span> anlamak istiyoruz</h1>
      <p class="g-hero__alt">Dışarıdan aynı görünen iki yakınmanın arkasında bambaşka nedenler olabilir; örneğin göz altı koyuluğunu bazen pigment, bazen gölge oluşturur. Bu bölümdeki on iki sayfa, her şikâyetin nasıl ayrıştırıldığını ve bu ayrımın hangi seçenekleri gündeme getirdiğini anlatır. Hangi uygulamanın konuşulacağına ancak bu adımdan sonra karar verilir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Muayene için randevu</a>
        <a class="dgm dgm--iki" href="#basliklar">Başlıklara göz atın ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Önce kaynak ayrılır</span><span><i></i>Muayene ve plan hekimde</span><span><i></i>Gerekirse tetkik</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/grup-cilt-bakimi.webp" width="1600" height="900" alt="Yüze jel kıvamında bakım ürünü uygulanırken çekilmiş sakin bir kare" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
      <button class="g-nokta" data-gn="ust" style="--x:35%;--y:25%" aria-label="Üst yüz"><span data-ad="Üst yüz"></span></button>
      <button class="g-nokta" data-gn="orta" style="--x:31%;--y:42%" aria-label="Orta yüz"><span data-ad="Orta yüz"></span></button>
      <button class="g-nokta" data-gn="alt" style="--x:35%;--y:55%" aria-label="Alt yüz"><span data-ad="Alt yüz"></span></button>
      <div class="g-hud" data-ghud><b>Yüz haritası</b><div class="g-cizgi"></div><span>Bir noktaya dokunun, o bölgenin notu açılsın</span></div>
    </div>
  </div>
</section>
<script type="application/json" data-gnokta-veri>{"ust":["Üst yüz","Kaş kaldırınca ve çatınca beliren çizgiler ile göz kenarındaki kırışıklıklar bu alandadır"],"orta":["Orta yüz","Elmacık desteği, göz altındaki koyuluk, lekeler ve gözenekler çoğunlukla bu alanda konuşulur"],"alt":["Alt yüz","Ağız çevresindeki ince çizgiler, çene hattının netliği ve gıdı bu alana girer"]}</script>

<!-- ═════════ BAŞLIKLAR ═════════ -->
<section class="bolum bolum--buz2" id="basliklar">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Başlıklar</p>
      <h2>Hangi şikâyet sizi buraya getirdi?</h2>
      <p class="giris">Size en yakın başlığı seçin; birden fazlası tanıdık geliyorsa hepsini okuyabilirsiniz, çünkü şikâyetler sıklıkla bir arada bulunur. Bu sayfalar tanı koymaz; amaçları, muayeneye hangi soruları konuşacağınızı bilerek gelmenizi sağlamaktır.</p>
    </div>
    <div class="izgara izgara--3" data-gr>
${S.sorunlar.map(([ad, s]) => `
      <a class="kart" href="${r}cilt-sorunlari/${s}/">
        <span class="kart__ikon">${ik.mercek}</span>
        <h3>${ad}</h3>
        <p>${NOT[s] || 'Bu şikâyetin olası kaynakları, muayenede nelere bakıldığı ve sonrasında hangi seçeneklerin konuşulabileceği.'}</p>
        <span class="kart__ok">İncele ${ik.ok}</span>
      </a>`).join('')}
    </div>
  </div>
</section>

<!-- ═════════ NEDEN AYRIM + SÜREÇ ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Süreç</p>
      <h2>Neden önce ayırıp sonra uyguluyoruz?</h2>
      <p class="giris">Deri şikâyetlerinin çoğu dışarıdan birbirine benzer. Kızarıklık bir tahrişin de, damarsal bir durumun da işareti olabilir; koyu renk hem pigment artışından hem de ince deriden görünen damarlardan kaynaklanabilir. Görünene bakıp doğrudan işleme geçildiğinde değişim beklendiği gibi olmayabilir, şikâyet kısa sürede geri dönebilir ya da cilt daha çok tahriş olabilir. Bu yüzden sıralama hiç değişmez ve ilk görüşmede işlem yapılması beklenmez.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">01</span>
      <h3>Öykü: şikâyetin zaman çizelgesi</h3>
      <p>Şikâyet ne zaman başladı, nasıl seyretti, mevsimle ya da işinizle değişiyor mu, hangi ürün ve ilaçları kullanıyorsunuz, başka yakınmalarınız var mı? Bu soruların yanıtları kayda geçer; ayrımı en çok belirleyen adım öyküdür.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:60ms">
      <span class="g-kno">02</span>
      <h3>Muayene ve gerektiğinde büyütmeli bakı</h3>
      <p>Bulguların nerede, nasıl dağıldığı, kenarları ve yüzey özellikleri incelenir. Uygun durumlarda deri ya da saçlı deri büyütmeli olarak değerlendirilir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:120ms">
      <span class="g-kno">03</span>
      <h3>Yalnızca planı değiştirecek tetkikler</h3>
      <p>Bir tetkik yalnızca sonucu planı etkileyecekse istenir. Standart bir tahlil paketi yoktur; hangi değere bakılacağı öykünüze ve muayene bulgularınıza göre seçilir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:180ms">
      <span class="g-kno">04</span>
      <h3>Ayrım, plan ve bilgilendirme</h3>
      <p>Öne çıkan neden size açıklanır; hangi seçeneklerin masada olduğu, hangi sonucun gerçekçi olmadığı ve hangi koşullarda işlem yapmayacağımız konuşulur. Karar vermeden önce düşünmeniz için zaman tanınır.</p>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:26px">
      <b>“Uygulama gerekmiyor” da bir sonuç mudur?</b>
      <p>Evet, üstelik sık verilen bir karardır. Koruyucu katmanı zayıflamış bir ciltte önceliğin rutini sadeleştirmek olması, demir eksikliğine bağlı saç dökülmesinde önceliğin genel sağlığa verilmesi bunun örnekleridir. Kimi istekler ise muayenehanemizin kapsamına girmez; o zaman işleme geçmeyiz ve hangi uzmanlık dalına başvurabileceğinizi söyleriz. Nerede durduğumuzu <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a>, nasıl çalıştığımızı <a href="${r}yaklasimimiz/">yaklaşımımız</a> başlıklı sayfalarda bulabilirsiniz.</p>
    </div>
    <div class="kutu kutu--acil" data-gr style="margin-top:18px">
      <b>Randevuyu beklemeniz gerekmeyen durumlar</b>
      <p>Bazı bulgular sıra beklemez: kısa sürede rengi, kenarı ya da boyutu değişen bir ben; iki haftayı geçtiği hâlde kapanmayan bir yara; birkaç gün içinde bütün vücuda yayılan döküntü; ateş, açıklanamayan kilo kaybı ya da gece terlemesiyle birlikte görülen deri değişiklikleri.</p>
<p>Yüzünüzde, dudaklarınızda ya da dilinizde birden şişlik başlarsa, nefes almakta veya yutkunmakta zorlanırsanız, döküntüye baş dönmesi eşlik ederse ya da kızarık ve ağrılı bir alan saatler içinde büyüyorsa vakit kaybetmeden <b>112</b>’yi arayın ya da size en yakın acil servise gidin.</p>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Sonrası</p>
      <h2>Ayrım yapıldıktan sonra hangi sayfalar yol gösterir?</h2>
      <p class="giris">Ayrım tamamlandığında konuşulabilecek uygulamaların hepsi uygulamalar bölümünde yer alır; aşağıdakiler en sık başvurulan kapılardır.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Sayfa</span><span>Kapsam</span><span>İyileşme</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/" data-gg="${r}varliklar/gorsel/grup-cihaz.webp" data-gb="Uygulamalar" data-ga="Muayenehanemizde yapılan enjeksiyon, cihaz ve saçlı deri uygulamalarının tamamı ve kapsamları."><h4>Uygulamalar</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">TÜMÜ</i></span><span class="g-hucre">Uygulamaya göre</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/hekim-muayenesi/" data-gg="${r}varliklar/gorsel/uyg-hekim-muayenesi.webp" data-gb="Hekim muayenesi" data-ga="Deri ve saç şikâyetlerine eşlik edebilecek genel sağlık nedenlerinin gözden geçirildiği ilk adım."><h4>Hekim muayenesi</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">İLK ADIM</i></span><span class="g-hucre">Aynı gün</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/uygulama-sonrasi-takip/" data-gg="${r}varliklar/gorsel/uyg-uygulama-sonrasi-takip.webp" data-gb="Uygulama sonrası takip" data-ga="Uygulamadan sonra iyileşmenin izlendiği kontrol randevuları ve bu dönemde dikkat edilmesi gerekenler."><h4>Uygulama sonrası takip</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">İZLEM</i></span><span class="g-hucre">Randevuya göre</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/grup-cihaz.webp" alt=""></div><div class="g-ic"><h4>Uygulamalar</h4><p>Muayenehanemizde yapılan enjeksiyon, cihaz ve saçlı deri uygulamalarının tamamı ve kapsamları.</p><a class="dgm dgm--iki" href="${r}uygulamalar/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sorgulayın</p><h2>Sorunuzu seçin, cevap ekrana düşsün</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr-TR')} · cilt sorunları · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Şikâyetimin hangi başlığa girdiğinden emin değilim; randevu için bunu bilmem gerekir mi?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Birden çok şikâyetim var; hepsine birlikte mi bakılır?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>İlk görüşmede işlem de yapılıyor mu?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Muayeneye gelirken yanımda ne olmalı?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Şikâyetimin altından bir hastalık çıkarsa ne olur?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekim onaylı yanıt</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede konuşalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Şikâyetimin hangi başlığa girdiğinden emin değilim; randevu için bunu bilmem gerekir mi?","Gerekmez. Yakınmanızı kendi sözcüklerinizle anlatmanız yeterlidir; hangi başlığa girdiğini muayenede birlikte buluruz. Buradaki sayfalar sizi bir kutuya koymak için değil, muayenede sorulan soruların nedenini önceden görebilmeniz için yazıldı."],["Birden çok şikâyetim var; hepsine birlikte mi bakılır?","Tümünü aynı görüşmede dinleriz, fakat hepsi için aynı gün işe koyulmayız. Önce bir öncelik sırası çıkarılır; çoğunlukla diğerlerini etkileyen ya da sizi en çok rahatsız eden yakınmadan başlanır. Aynı anda pek çok değişiklik yapıldığında hangisinin işe yaradığını anlamak güçleşir."],["İlk görüşmede işlem de yapılıyor mu?","Çoğunlukla hayır. İlk randevu öykü, muayene ve gerekirse tetkik planı içindir. Uygulama, ayrım tamamlanıp plan üzerinde uzlaşıldıktan sonra başka bir güne konur; aradaki süre, karar vermeden önce düşünmeniz için de fırsat verir."],["Muayeneye gelirken yanımda ne olmalı?","Kullandığınız ilaç ve takviyelerin listesi, son altı ay içinde yaptırdığınız kan tetkikleri, geçmişte yaptırdığınız estetik işlemlerin ne zaman ve hangi ürünle yapıldığı, kullandığınız bakım ürünleri ve daha önce herhangi bir ilaca ya da ürüne karşı yaşadığınız tepkiler. Unutmamak için hazırlık listesi aracını doldurup yanınızda getirebilirsiniz."],["Şikâyetimin altından bir hastalık çıkarsa ne olur?","O durumda estetik plan bekletilir, önce sağlığınız ele alınır; gerekiyorsa hangi uzmanlık dalına başvurmanız gerektiğini açıkça söyleriz. Kökte bir hastalık dururken yapılan işlem hem umulan etkiyi göstermez hem de hastalığın tanınmasını geciktirebilir."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Size uygun plan muayenede belirlendikten sonra bilgi yüz yüze verilir. Randevu için ${S.iletisim.tel} numarasını arayabilir ya da aynı numaradan WhatsApp ile yazabilirsiniz."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Şikâyetinizin kaynağını birlikte ayıralım</h2>
    <p class="g-sonalt">Telefon ve WhatsApp için aynı numarayı kullanabilirsiniz: ${S.iletisim.tel}. Dilerseniz iletişim sayfasındaki formdan da randevu talebi bırakabilirsiniz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesini doldurun</a>
    </div>
  </div>
</section>
`,
};
