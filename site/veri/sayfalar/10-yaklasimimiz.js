const S = require('../site');

module.exports = {
  slug: 'yaklasimimiz',
  tip: 'tibbi',
  baslik: 'Randevudan kontrole: muayeneden takibe dört adımlı çalışma düzeni',
  aciklama: 'Her plan muayeneyle başlar: aile hekimliği bakışıyla öykü, plan ve aydınlatma, uygulama günü ve takip. Dört adımın gerekçesi ve kapsamımızın sınırı.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <span>Randevudan kontrole</span></nav>
      <p class="g-etiket">Randevudan kontrole · Çalışma biçimi</p>
      <h1>Önce <span class="g-isik">sizi tanımak</span>, sonra uygulamak</h1>
      <p class="g-hero__alt">Burada her süreç muayeneyle başlar. Şikâyetinizin yanında genel sağlığınız, kullandığınız ilaçlar ve yaşam düzeniniz de konuşulur; aile hekimliğinin kişiyi bütün olarak ele alan bakışı bunu gerektirir. Uygulamaya ancak bu konuşmanın ardından karar verilir. Benzer bir şikâyetle gelen iki kişinin planı bu yüzden çoğu zaman birbirinden farklı olur.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
        <a class="dgm dgm--iki" href="#nedeni">Sıranın gerekçesi ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Her uygulama hekimde</span><span><i></i>Adım adım plan</span><span><i></i>Takip sürecin içinde</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/foto/hekim-koltuk.webp" width="1400" height="788" alt="${S.hekim.tam} muayenehanesinde koltukta otururken" loading="eager">
      <div class="g-isin"></div>
      <!-- gerçek fotoğraf: yapay zekâ rozeti bilinçli olarak YOK -->
      <div class="g-hud"><b>Dört adım</b><div class="g-cizgi"></div><span>Muayene → plan → uygulama günü → takip</span></div>
    </div>
  </div>
</section>

<!-- ═════════ NEDEN BU SIRA ═════════ -->
<section class="bolum" id="nedeni">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Neden böyle</p>
      <h2>Neden işlemin adıyla değil, sizin anlatımınızla başlıyoruz?</h2>
    </div>
    <div data-gr style="--d:70ms">
      <p>Aynı cümleyle anlatılan iki şikâyetin arkasında çoğu zaman farklı nedenler yatar. “Yorgun görünüyorum” diye başlayan bir başvurunun ardında hacim kaybı olabileceği gibi uyku düzensizliği, demir eksikliği ya da tiroid işlevindeki bir değişiklik de olabilir. Saç dökülmesinde, inatçı aknede ve ciltteki lekelerde de durum benzerdir: görünüm aynı, nedenler farklı.</p>
      <p>Başvuru bir işlem adıyla başladığında, bu ayrımı yapmak için durulmayabilir. İşlem yapılır, beklenen karşılık gelmez ve asıl neden yerinde durur.</p>
      <p>Aile hekimliği eğitimi bu yüzden başka bir sıra önerir: önce kişiyi dinlemek, genel sağlığı gözden geçirmek, ardından şikâyete karşılık gelen adımı seçmek. O adım her zaman bir uygulama olmaz; bazen bir kan tahlili, bazen evdeki bakım rutininin sadeleştirilmesi, bazen de başka bir dalın görüşü gerekir.</p>
      <p>Sıranın ikinci gerekçesi güvenliktir. Kan sulandırıcı kullanan, diyabeti kontrol altında olmayan, bağışıklığı baskılayan bir tedavi alan, gebe olan ya da işlem bölgesinde aktif enfeksiyonu bulunan birinde aynı işlem aynı riski taşımaz. Bu bilgilerin uygulama gününden önce konuşulması gerekir.</p>
    </div>
  </div>
</section>

<!-- ═════════ DÖRT ADIM ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Akış</p>
      <h2>Her başvuruda aynı sırayı izleyen dört adım</h2>
      <p class="giris">Sıra bozulmaz. O gün gerekmeyen bir adım atlanabilir; ancak yapılan adımlar hep bu dizilişle ilerler ve ilk adım her zaman muayenedir.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">Madde 01</span>
      <h3>Muayene</h3>
      <p>Şikâyetin ne zaman başladığı, zamanla nasıl değiştiği ve neyin onu artırıp azalttığı konuşulur. Reçeteli ya da reçetesiz ilaçlar, takviyeler, kronik hastalıklar, geçirilmiş ameliyatlar ve daha önce yaptırılan estetik işlemler dosyanıza yazılır. Uygulama düşünülen bölge ayrıntılı olarak incelenir; gerekirse onayınızla fotoğrafla kayda alınır.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:70ms">
      <span class="g-kno">Madde 02</span>
      <h3>Plan ve bilgilendirme</h3>
      <p>Her başvuruda tahlil istenmez; istenen tahlilin sonucu planı bir yöne çevirmelidir. Saç dökülmesinde ferritin ve tiroid hormonlarının değerlendirilmesi buna iyi bir örnektir. Ardından hedef, beklenen süre, olası istenmeyen etkiler, seçenekler ve hiçbir şey yapmamanın ne anlama geldiği konuşulur. Sizin için uygun görülmeyen yollar da açıkça konuşulur; karar birlikte verilir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:140ms">
      <span class="g-kno">Madde 03</span>
      <h3>Uygulama günü</h3>
      <p>Yazılı onamınız alındıktan sonra işlem planlandığı gibi yapılır. Ürün miktarı ya da cihaz ayarı, bölgeye ve o günkü cilt durumuna göre hekim tarafından son kez gözden geçirilir; gerekirse işlem ertelenir. Çıkışta bakım talimatı size yazılı olarak verilir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:210ms">
      <span class="g-kno">Madde 04</span>
      <h3>Kontroller</h3>
      <p>Kontrol randevusu, etkinin yerine oturması beklendikten sonraya verilir. Aradaki günlerde hangi durumda aramanız gerektiği baştan bellidir. Değerlendirmeyi, işlemi yapan hekim önceki kayıtlarla karşılaştırarak yapar.</p>
    </div>
  </div>
</section>

<!-- ═════════ NEYİ NEDEN ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Neden böyle</p>
      <h2>Her tercihin arkasında hangi neden var?</h2>
      <p class="giris">Çalışma düzenindeki her tercihin somut bir karşılığı var. Dördünü aşağıda bulabilirsiniz.</p>
    </div>
    <div class="izgara izgara--2" data-gr style="--d:70ms">
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.liste}</span>
        <h3>Genel sağlığınızı soruyoruz</h3>
        <p>Kan sulandırıcılar, izotretinoin, bağışıklığı baskılayan ilaçlar, yeni geçirilmiş bir enfeksiyon ya da aşı; bunların her biri işlemi ertelemeyi ya da başka bir yola geçmeyi gerektirebilir. Bunları uygulama gününden önce bilmek, riski öngörmenin yoludur.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.kalkan}</span>
        <h3>Uygulamayı hekim yapıyor</h3>
        <p>Enjeksiyonu da lazer seansını da hekim kendi eliyle yapar; bir yardımcıya bırakılan işlem yoktur. Ürün ve miktar seçimi, işlem sırasındaki gözlem ve gerekirse işlemi yarıda kesme kararı aynı kişidedir.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.mercek}</span>
        <h3>Önce nedeni ayırıyoruz</h3>
        <p>Aynı görünen iki şikâyetin kökeni farklı olabilir. Nedeni belirlenmeden seçilen bir işlemden alınacak karşılık sınırlı kalabilir; bu durumda önce ayrımı yapmayı öneriyoruz.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.saat}</span>
        <h3>Acele ettirmiyoruz</h3>
        <p>İlk görüşmede işlem yapılması şart değildir. Çoğu zaman işlem ikinci bir randevuya bırakılır; hem varsa tahlil sonucu beklenir hem de karar vermek için size zaman kalır.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ TEK HEKİM ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Aynı hekimle devam</p>
      <h2>Sizi muayene eden hekim, işlemi de yapıyor mu?</h2>
      <p class="giris">Evet. Muayeneyi bir kişinin yapıp uygulamayı başkasına bıraktığı bir düzen burada yok.</p>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b4" data-gr>
        <span class="g-ket">Tek hekimle</span>
        <p><b style="color:var(--murekkep)">Öykünüzü dinleyen, sizi muayene eden, planı kuran ve uygulamayı yapan kişi ${S.hekim.tam}’dir.</b><br>Bunun gündelik karşılığı basittir: aklınıza bir soru takıldığında ya da beklemediğiniz bir değişiklik fark ettiğinizde her şeyi yeniden anlatmanız gerekmez. Dosyanızı bilen hekim yeni bulguyu eskisiyle yan yana koyar ve ne yapılacağını söyler.</p>
        <div class="dgm-sira" style="margin-top:16px">
          <a class="dgm dgm--iki" href="${r}hekim/">Hekim ${ik.ok}</a>
          <a class="dgm dgm--iki" href="${r}uygulamalar/uygulama-sonrasi-takip/">Uygulama sonrası kontrol ${ik.ok}</a>
        </div>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr style="--d:70ms"><span class="g-ket">Hekimin notu</span><p>“Sizi ilk gün dinleyen hekim, son kontrolde de karşınızda.”</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms">
        <span class="g-ket">Kayıt tutma</span>
        <p><b style="color:var(--murekkep)">Birikimli kayıt</b><br>Her randevunun notu bir öncekinin üstüne eklenir; yeni bir karar verilirken geçmiş ziyaretler de göz önündedir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:210ms">
        <span class="g-ket">Kontrol süreci</span>
        <p><b style="color:var(--murekkep)">Geç fark edilen bulgularda</b><br>Aylar sonra hissedilen bir sertlik ya da şişlikte, ilk işlemin nasıl yapıldığını bilen hekime danışırsınız.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:280ms">
        <span class="g-ket">Başkasına devredilmez</span>
        <p><b style="color:var(--murekkep)">Aracı yok</b><br>Plan ile işlem arasında not aktaran üçüncü bir kişi olmadığından hedef yolda kaybolmaz.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ KAPSAM DÜRÜSTLÜĞÜ ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Neyi kapsar</p>
      <h2>Yapmadıklarımızı da açıkça yazıyoruz</h2>
    </div>
    <div data-gr style="--d:70ms">
      <p>Bir muayenehanede yapılabilecek işlemleri, hekimin uzmanlık alanı ve Sağlık Bakanlığınca verilen sertifikaların kapsamı belirler. Bu sınırı bir kısıt değil, güvenli çalışmanın gereği olarak görüyoruz. Bu yüzden muayenehanede ameliyat yapılmaz, saç ekilmez ve sertifikanın dışında kalan hiçbir işleme girişilmez; lazer epilasyon da sunulan hizmetler arasında değildir.</p>
      <p>İsteğiniz bu sınırın dışında kalıyorsa bunu ilk dakikalarda öğrenirsiniz; boşluğu doldurmak için size farklı bir işlem sunulmaz. Hangi uzmanlık dalına başvurmanızın uygun olacağını belirtiriz. Sınırın ayrıntısı ve gerekçesi ayrı bir sayfada anlatılıyor.</p>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="--d:140ms">
      <b>Şeffaflık notu</b>
      <p>Sitede ürün markası üzerinden tanıtım ya da ticari duyuru bulunmaz; uygulamalar yöntem ve etken madde adıyla anlatılır. Muayenehanedeki cihazların model bilgisi yalnızca muayenehane sayfasındaki cihaz listesinde ve ilgili uygulama sayfasındaki tek bir “kullanılan cihaz” satırında, bilgilendirme amacıyla yer alır.</p>
    </div>
    <div class="dgm-sira" style="margin-top:22px">
      <a class="dgm dgm--iki" href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">Bazı işlemleri neden üstlenmiyoruz ${ik.ok}</a>
    </div>
  </div>
</section>

<!-- ═════════ BEKLENTİ ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Açıkça söyleyelim</p>
      <h2>Bu düzen sizden neler bekliyor?</h2>
      <p class="giris">Bu düzenin size yükleyeceği birkaç şey var; bunları baştan bilmenizi isteriz.</p>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <div class="kart kart--duz">
        <h3>Zaman alır</h3>
        <p>Çoğu başvuruda ilk gün yalnızca muayene yapılır. Varsa tahlil sonucu ve sizin kararınız beklendiği için süreç genellikle iki ya da daha fazla randevuya yayılır.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Cevap bazen “hayır” olur</h3>
        <p>Muayenede istediğiniz işlemin size uygun olmadığı görülürse bunu nedenleriyle birlikte söyleriz. Israr edilse de uygun bulunmayan bir işlem yapılmaz.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Sonuç taahhüt edilmez</h3>
        <p>Hedefi ve gerçekçi beklentiyi muayenede birlikte çizeriz. Yine de vücudun yanıtı kişiden kişiye değişir; sonuçlar da buna göre farklılık gösterir ve bunu açıkça söyleriz.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ İLGİLİ ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Okumaya devam</p>
      <h2>Buradan devam edin</h2>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <a class="kart" href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">
        <h3>Bazı işlemleri neden üstlenmiyoruz</h3>
        <p>Muayenehanede yapılmayan işlemlerin listesi ve bu sınırın nedeni.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}hekim/">
        <h3>Hekim</h3>
        <p>${S.hekim.tam}: tıp eğitimi, aile hekimliği uzmanlığı, görev yerleri ve sertifikası.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}klinik/">
        <h3>Muayenehanemiz</h3>
        <p>${S.iletisim.semt}’deki muayenehane: odalar, cihazlar, hijyen düzeni ve randevu işleyişi.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}hazirlik-listesi/">
        <h3>Muayene öncesi hazırlık listesi</h3>
        <p>İlk randevudan önce not almanızın işe yarayacağı başlıkları hatırlatan kısa liste.</p>
        <span class="kart__ok">Aç ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}uygulamalar/">
        <h3>Uygulamalar</h3>
        <p>Enjeksiyon, lazer ve saç uygulamaları; hangi şikâyette ve hangi koşulla planlandıklarıyla birlikte.</p>
        <span class="kart__ok">Listeye git ${ik.ok}</span>
      </a>
    </div>
  </div>
</section>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>İlk adım bir muayene</h2>
    <p class="g-sonalt">Bir randevuyla başlayabiliriz; uygulamaya karar vermek için önce sizi dinlemek ve muayene etmek gerekir.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
