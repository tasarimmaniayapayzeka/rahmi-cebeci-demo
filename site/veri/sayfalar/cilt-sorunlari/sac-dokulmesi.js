const S = require('../../site');

module.exports = {
  slug: 'cilt-sorunlari/sac-dokulmesi',
  tip: 'tibbi',
  baslik: 'Saç dökülmesi: geçici mi, kalıtsal mı, başka bir işaret mi?',
  aciklama: 'Saç dökülmesinin tek bir nedeni yoktur. Geçici dökülmeyi kalıtsal seyrelmeden ayıran ipuçları, kan değerlerinin yeri ve saçlı derinin büyütmeli incelenmesi.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}cilt-sorunlari/" style="color:var(--sessiz);text-decoration:none">Cilt sorunları</a> › <span>Saç dökülmesi</span></nav>
      <p class="g-etiket">Cilt sorunları · Saç</p>
      <h1>Dökülen saçın ardındaki <span class="g-isik">nedeni</span> arıyoruz</h1>
      <p class="g-hero__alt">Saç dökülmesi tek bir hastalığın adı değildir; birbirinden farklı süreçlerin ortak görünümüdür. Kimi dökülmeler geçicidir ve tetikleyici ortadan kalkınca durulur, kimi ise yıllar içinde yavaşça ilerleyen bir seyrelmedir. İkisinin planı farklı olduğundan saçlı deriye herhangi bir uygulama konuşulmadan önce neden araştırılır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Muayene için randevu</a>
        <a class="dgm dgm--iki" href="#nedenler">Dökülme türlerini inceleyin ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Neden araştırılarak başlanır</span><span><i></i>Muayene ve plan hekimde</span><span><i></i>Gerekirse kan tetkiki</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/sorun-sac-dokulmesi.webp" width="1400" height="788" alt="Mermer bir yüzeyde ahşap tarak ve birkaç saç telinden oluşan sade kompozisyon" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
    </div>
  </div>
</section>

<!-- ═════════ TABLOLAR ═════════ -->
<section class="bolum bolum--sicak" id="nedenler">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Ayrım</p>
      <h2>Dökülme yaygın mı, yoksa belli bir bölgede mi yoğunlaşıyor?</h2>
      <p class="giris">Saç, vücuttaki genel dengenin bozulduğunu erkenden ve gözle görülür biçimde yansıtır. Dökülmeyi çoğu zaman saçın kendisinden değil, vücudun başka bir yerindeki değişimden okuruz. Saç döngüsü ağır işlediği için muayenede sorulan soru geçen hafta değil, üç–dört ay önce neler yaşandığıdır.</p>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">01</span>
      <h3>Geçici yaygın dökülme</h3>
      <p>Saç tellerinin olağandan fazlası aynı dönemde dinlenme evresine girdiğinde ortaya çıkar. Yastıkta, duşta ve tarakta kalan saç belirgin biçimde artar; ancak belli bir yerde açıklık oluşmaz, saçın bütününde gürlük azalmış gibi hissedilir.</p>
<p>En ayırt edici özelliği gecikmeli başlamasıdır: dökülme, tetikleyici olaydan ortalama iki–dört ay sonra fark edilir. Tetikleyici ortadan kalktığında çoğu kişide birkaç ay içinde durulma eğilimi görülür.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:60ms">
      <span class="g-kno">02</span>
      <h3>Kalıtsal yatkınlığa bağlı seyrelme</h3>
      <p>Bu tabloda teller her döngüde biraz daha incelir ve kısa kalır; süreç yıllara yayılır. Kadınlarda en sık tepe bölgesinde ayrım çizgisi genişler; erkeklerde ön saç çizgisi geriler ve tepe açılır. Ense çoğunlukla etkilenmez. Kişinin asıl şikâyeti çok saç dökmesi değil, saçının eskisi kadar gür durmamasıdır. Bu tabloya geçici bir dökülme eklendiğinde seyrelme bir anda hızlanmış izlenimi verebilir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:120ms">
      <span class="g-kno">03</span>
      <h3>Bölgesel ve iz bırakan dökülmeler</h3>
      <p>Bozuk para büyüklüğünde tümüyle saçsız kalan alanlar, kızarıklık ve kepeklenmeyle seyreden bölgeler ya da ağrı ve yanmayla birlikte kalıcı açılmalar ayrı bir grup oluşturur. Bu bulgular varsa değerlendirme öne alınır; tabloya ad konmadan saçlı deriye yönelik bir uygulama düşünülmez; gerek görülürse bir dermatoloji uzmanına başvurmanız önerilir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:180ms">
      <span class="g-kno">04</span>
      <h3>Genel sağlıkla ilgili nedenler</h3>
      <p>Yaygın dökülmenin ardında çoğu zaman saç dışı bir etken bulunur: kansızlık olmasa bile azalmış demir depoları, tiroit işlevindeki değişiklikler, kısa sürede çok kilo verilmesi, çok düşük kalorili beslenme, yüksek ateşli bir hastalık, geçirilmiş bir ameliyat ya da doğum, bazı ilaç ve takviyeler. Tepe bölgesindeki seyrelmeye adet düzensizliği ve vücutta tüylenme artışı eşlik ediyorsa hormonal değerlendirme öne çekilir.</p>
      <div class="g-haplar"><a href="${r}uygulamalar/hekim-muayenesi/">Hekim muayenesi</a></div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:26px">
      <b>Değerlendirme hangi adımlarla ilerler?</b>
      <p>Beş adım izlenir. Önce dökülmeden önceki üç–dört aylık dönem için bir zaman çizelgesi çıkarılır. Sonra ayrım çizgisine, tellerin çapına ve saçlı derinin kendisine büyütmeli olarak bakılır. Sonucu planı etkileyecekse ferritin, tam kan sayımı ve tiroit hormonları gibi kan tetkikleri istenir. Sıkı toplanan saç modelleri, sık ısı ve boya gibi mekanik yükler konuşulur. Saptanan bir neden varsa ilk o düzeltilir.</p>
<p>Saç döngüsü ağır işlediği için değişim aylar içinde, aynı koşullarda ve aynı bölgelerden yapılan karşılaştırmalarla izlenir. Bölgeye göre öncelikler ve seans düzeni <a href="${r}bolgeler/sacli-deri/">saçlı deri</a> sayfasında ayrıntılı anlatılmıştır.</p>
    </div>
    <div class="kutu kutu--uyari" data-gr style="margin-top:18px">
      <b>Kapsam dışı olanlar ve ertelenen durumlar</b>
      <p>Muayenehanemizde saç ekimi yapılmaz; bu sınırın gerekçesini <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">ayrı bir sayfada</a> açıkladık. Saçlı deride iltihaplı bir bölge, yara ya da henüz kontrol altına alınmamış bir deri hastalığı varsa ve gebelik süresince uygulama yapılmaz, ertelenir. Kan sulandırıcı ilaç kullanıp kullanmadığınız ayrıca sorulur.</p>
    </div>
  </div>
</section>

<!-- ═════════ MATRİS ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Sonrası</p>
      <h2>Neden netleşince hangi seçenekler konuşulur?</h2>
      <p class="giris">Saçlı deriye yönelik uygulamalar, dökülmenin türü belirlendikten ve varsa genel sağlıkla ilgili neden ele alındıktan sonra konuşulur. Bunlar genel bir çerçevedir; size özel plan muayeneden sonra hekim tarafından kurulur ve yanıt kişiden kişiye değişir.</p>
    </div>
    <div class="g-matris">
      <div class="g-mtab" data-gr>
        <div class="g-mbas"><span>Uygulama</span><span>Hedef</span><span>İyileşme</span><span></span></div>
        <a class="g-msatir" data-akt href="${r}uygulamalar/sac-mezoterapisi/" data-gg="${r}varliklar/gorsel/uyg-sac-mezoterapisi.webp" data-gb="Saç mezoterapisi" data-ga="Saçlı deriye vitamin ve mineral içeren karışımların uygulanmasıdır; kalıtsal seyrelmede aylara yayılan bir planın içinde yer alabilir."><h4>Saç mezoterapisi</h4><span class="g-hucre"><i class="g-kcip g-kcip--1">SEYRELME</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/sac-prp/" data-gg="${r}varliklar/gorsel/uyg-sac-prp.webp" data-gb="Saç PRP" data-ga="Kendi kanınızdan hazırlanan plazmanın saçlı deriye uygulanmasıdır; hedef, var olan tellerin niteliğini desteklemektir."><h4>Saç PRP</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">TEL NİTELİĞİ</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/eksozom/#sac" data-gg="${r}varliklar/gorsel/uyg-eksozom.webp" data-gb="Eksozom (saçlı deri)" data-ga="Hücreler arası sinyal molekülleri içeren ürünlerin saçlı deriye uygulanmasıdır; uygun görülen kişilerde diğer seçeneklerle birlikte konuşulur."><h4>Eksozom (saçlı deri)</h4><span class="g-hucre"><i class="g-kcip g-kcip--2">DESTEK</i></span><span class="g-hucre">Muayenede belirlenir</span><span class="g-git">→</span></a>
        <a class="g-msatir" href="${r}uygulamalar/hekim-muayenesi/" data-gg="${r}varliklar/gorsel/uyg-hekim-muayenesi.webp" data-gb="Hekim muayenesi" data-ga="Demir, tiroit ve diğer genel sağlık başlıkları bu kapsamda gözden geçirilir; öncelik nedenin ele alınmasıdır."><h4>Hekim muayenesi</h4><span class="g-hucre"><i class="g-kcip g-kcip--3">NEDEN</i></span><span class="g-hucre">Aynı gün</span><span class="g-git">→</span></a>
      </div>
      <div class="g-onizle" data-gonizle data-gr><div class="g-gor"><img src="${r}varliklar/gorsel/uyg-sac-mezoterapisi.webp" alt=""></div><div class="g-ic"><h4>Saç mezoterapisi</h4><p>Saçlı deriye vitamin ve mineral içeren karışımların uygulanmasıdır; kalıtsal seyrelmede aylara yayılan bir planın içinde yer alabilir.</p><a class="dgm dgm--iki" href="${r}uygulamalar/sac-mezoterapisi/">Sayfasına git →</a></div></div>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sorgulayın</p><h2>Sorunuzu seçin, cevap ekrana düşsün</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>${S.marka.toLocaleLowerCase('tr-TR')} · saç dökülmesi · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Günlük ne kadar saç dökülmesi olağandır?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Üç aydır dökülüyor; beklemeli miyim?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Kendi kendime vitamin takviyesine başlasam olur mu?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Saçta “vampir işlemi” denen şey nedir?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Doğumdan sonra başlayan dökülmem ne zaman durur?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisi neden sitede yok?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekim onaylı yanıt</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Muayenede konuşalım</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Günlük ne kadar saç dökülmesi olağandır?","Her gün bir miktar saç dökülmesi döngünün doğal parçasıdır; ne kadar olduğu saçınızın uzunluğuna, ne sıklıkla yıkadığınıza ve kişisel özelliklerinize göre farklıdır. Tel saymaktan daha anlamlı olan, dökülmenin sizin için alışılmış düzeyin belirgin biçimde üzerine çıkıp çıkmadığı ve ne kadar süredir devam ettiğidir."],["Üç aydır dökülüyor; beklemeli miyim?","Belirgin bir tetikleyiciden sonra başlayan dökülmelerin bir kısmı zamanla durulur. Ancak süre uzuyorsa, saçlı deride kaşıntı ya da kızarıklık varsa veya belli bir bölgede açılma görüyorsanız beklemek yerine muayene olmanız önerilir. Erken bakı, düzeltilebilir bir nedenin gözden kaçmamasını sağlar."],["Kendi kendime vitamin takviyesine başlasam olur mu?","Kan değerlerinde bir eksiklik yokken alınan takviyeler genellikle saça bir şey katmaz; bazılarının yüksek dozu ise zarar verebilir. Takviyeye başlamak, asıl nedeni bulmayı da erteleyebilir. Hangi değerlere bakılması gerektiği muayenede belirlenir."],["Saçta “vampir işlemi” denen şey nedir?","“Vampir işlemi” gündelik dilde kullanılan bir addır; tıbbi karşılığı trombositten zengin plazma, kısaca PRP’dir. Kişinin kendi kanından hazırlanan plazmanın saçlı deriye uygulanmasına dayanır. Hangi durumlarda gündeme geldiği saç PRP sayfasında ayrıntılı olarak anlatılır."],["Doğumdan sonra başlayan dökülmem ne zaman durur?","Lohusalık döneminde başlayan dökülme, vücut dengesini yeniden kurdukça çoğu annede kendiliğinden yavaşlar; ne kadar süreceği kişiden kişiye değişir. Bu dönemde emzirip emzirmediğiniz dikkate alınır ve saçlı deriye yönelik uygulamalar genellikle ertelenir. Dökülme beklenenden uzun sürerse demir ve tiroit yönünden bakılır."],["Ücret bilgisi neden sitede yok?","Sağlık hizmetlerinin tanıtımına ilişkin mevzuat gereği ücret bilgisi internette yayımlanmaz. Dökülmenin türü ve nedeni muayenede belirlendikten sonra bilgi yüz yüze verilir. Randevu için ${S.iletisim.tel} numarasını arayabilir ya da aynı numaradan WhatsApp ile yazabilirsiniz."]]</script>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Saçınızdaki değişimin kaynağını muayenede bulalım</h2>
    <p class="g-sonalt">Dökülmeye ilişkin zaman çizelgeniz, muayene bulgularınız ve gerekirse kan tetkikleriniz birlikte yorumlanır.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesini doldurun</a>
    </div>
  </div>
</section>
`,
};
