const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/hekim-muayenesi',
  tip: 'tibbi',
  baslik: 'Hekim muayenesi: uygulama öncesi değerlendirme ve plan',
  aciklama: 'Medikal estetik uygulamasından önce yapılan hekim muayenesi: genel sağlık öyküsü, ilaç sorgusu, yüz analizi, beklenti görüşmesi, onam ve yazılı plan.',

  icerik: (r, ik) => `

<!-- ═════════ G · HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Hekim muayenesi</span></nav>
      <p class="g-etiket">Değerlendirme ve Takip · Muayene</p>
      <h1>Uygulamadan önce <span class="g-isik">kişiye bakılır</span></h1>
      <p class="g-hero__alt">Hekim muayenesi, herhangi bir uygulama konuşulmadan önce yapılan tıbbi değerlendirmedir. Yakınma olan bölge incelenir; süregelen hastalıklar, kullanılan ilaçlar ve önceki uygulamalar sorulur, beklentiniz dinlenir. Sonunda neyin uygun, neyin gereksiz olduğu yazılı bir plana dökülür. Görüşmenin amacı işlem önermek değil, gerekçeli bir karar vermektir.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi</a>
        <a class="dgm dgm--iki" href="#neden">Neden gerekli? ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Değerlendirmeyi hekim yapar</span><span><i></i>Yazılı plan ve onam</span><span><i></i>Gerekirse açık yönlendirme</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/foto/hekim-koltuk.webp" width="1400" height="788" alt="${S.hekim.tam}, muayenehanesinde koltuğunda otururken" loading="eager">
      <div class="g-isin"></div>
    </div>
  </div>
</section>

<!-- ═════════ G · VERİ BANDI ═════════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b>Randevulu</b><span>Acele edilmeyen görüşme</span></div>
  <div data-gr style="--d:60ms"><b><em data-gsay="4">0</em></b><span>Aşamada ilerleyen görüşme</span></div>
  <div data-gr style="--d:120ms"><b><em data-gsay="6">0</em></b><span>Başlıkta yüz incelemesi</span></div>
  <div data-gr style="--d:180ms"><b>Tek</b><span>Hekim, baştan sona</span></div>
</div></div>

<!-- ═════════ NEDEN GEREKLİ ═════════ -->
<section class="bolum" id="neden">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Gerekçe</p>
      <h2>Uygulamadan önce muayene neden gerekli?</h2>
      <p class="giris">Bu muayenehanede her plan aynı kapıdan başlar. Aklınızda bir yakınma da olsa, belirli bir uygulamanın adı da olsa ilk adım değişmez. Yapılacak işlem görüşme bitmeden seçilmez; <b>gereksiz</b> olanlar da çoğu kez tam bu sırada ayıklanır.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Muayene ne işe yarar?</b>
        <p>Birbirine benzeyen iki yakınmanın kaynağı farklı olabilir; yanlış kaynağa yönelen bir uygulama ne kadar özenle yapılsa da amacına ulaşmaz. Göz altındaki koyuluk bir gölge, belirginleşmiş bir damar ağı ya da pigment birikimi olabilir ve her birinin yolu ayrıdır. Bu ayrımı yapabilen tek adım muayenedir.</p>
<p>Aile hekimliği eğitimi, bir yakınmayı tek bir bölgeden değil kişinin genel sağlık tablosundan okumayı öğretir. Bu dahili bakış açısı nedeniyle görüşmede tiroid hastalığı, kansızlık, şeker hastalığı ve tansiyon gibi süregelen durumlar ile düzenli kullanılan ilaçlar ayrıca ele alınır; kâğıt üzerinde uygun görünen bir işlem bu bilgilerle riskli hâle gelebilir. Bir diğer konu beklentidir: bir işlemin değiştirebileceği ile kişinin umduğu her zaman aynı değildir ve bu farkın uygulamadan önce konuşulması gerekir.</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:80ms">
        <b>Muayene ne değildir?</b>
        <p>Muayene bir ürün ya da seans tanıtımı değildir. İnceleme yapılmadan verilen bir uygulama kararı, gerçekte bir tahminden ibarettir. Görüşmenin olası sonuçlarından biri hiçbir işlem yapılmamasıdır; bu bir eksiklik değil, gerekçesi olan tıbbi bir karardır. Yapmadığımız işlemleri ve nedenlerini <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">neden bazı işlemleri yapmıyoruz</a> sayfasında tek tek açıkladık.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ BENTO · SÜREÇ ═════════ -->
<section class="bolum bolum--buz2" id="ne-yapilir">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Süreç</p>
      <h2>Muayenede adım adım ne yapılır?</h2>
      <p class="giris">Görüşme dört bölümden oluşur. Süresi, konuşulacak yakınma sayısına ve öykünün ayrıntısına göre değişir; bölümlerin sırası değişebilir ama hiçbiri atlanmaz.</p>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="100" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>4/4</b></div>
        <p><b style="color:var(--murekkep)">Dört bölümün dördü de</b><br>Her görüşmede bölümlerin tamamı yapılır; yalnızca sıraları kişiye göre değişebilir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">Bölümlerin payı</span>
        <div class="g-cubuk"><small><span>Yakınmayı dinleme</span><span>Açılış</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="45%"></b></div></div>
        <div class="g-cubuk"><small><span>Bölgeye bakış</span><span>Orta</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="60%"></b></div></div>
        <div class="g-cubuk"><small><span>Genel sağlık ve ilaçlar</span><span>En geniş</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="90%"></b></div></div>
        <div class="g-cubuk"><small><span>Yazılı plan ve imza</span><span>Son</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="50%"></b></div></div>
        <p style="font-size:.7rem;color:var(--sessiz);margin:10px 0 0">Çubuk boyları yalnız karşılaştırma içindir; asıl süre görüşmede belirlenir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Dört bölüm</span>
        <ol class="g-protokol">
          <li><span><b style="color:var(--murekkep)">Yakınmanın dinlenmesi.</b> Neyin, ne zamandan beri rahatsız ettiği ve daha önce neler denendiği sorulur; yönlendirici soru sorulmaz.</span></li>
          <li><span><b style="color:var(--murekkep)">İnceleme.</b> Bölge eşit ışık altında, gerekiyorsa büyütmeyle incelenir; cilt tipi ve yüzün yapısal özellikleri kaydedilir.</span></li>
          <li><span><b style="color:var(--murekkep)">Genel sağlık ve ilaç sorgusu.</b> Süregelen hastalıklar, ilaç ve takviyeler, önceki uygulamalar ve reaksiyonlar, gebelik ve emzirme durumu ele alınır.</span></li>
          <li><span><b style="color:var(--murekkep)">Plan, bilgilendirme ve onam.</b> Uygun olanla olmayan ayrılır, plan yazıya dökülür; aynı gün işlem yapılacaksa önce onam alınır.</span></li>
        </ol>
      </div>
      <div class="g-kutu g-b4 kutu--bilgi" data-gr style="--d:210ms">
        <span class="g-ket">Zamanlama</span>
        <p><b style="color:var(--murekkep)">Muayene ile uygulamanın aynı güne denk gelmesi şart değildir.</b> Değerlendirmeden sonra düşünmek istemeniz son derece anlaşılır bir tercihtir. Bazı durumlarda ise beklemek gerekir: bir tetkikin sonucu görülecekse, kullanılan bir ilaca ara verilmesi gerekiyorsa ya da ciltte aktif bir sorun varsa uygulama daha sonraki bir tarihe planlanır.</p>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr style="--d:280ms"><span class="g-ket">İlke</span><p>"Önce kişi, sonra bölge."</p></div>
    </div>
  </div>
</section>

<!-- ═════════ YÜZ ANALİZİ ═════════ -->
<section class="bolum bolum--sicak" id="yuz-analizi">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">İnceleme</p>
      <h2>Yüz analizinde nelere bakılır?</h2>
      <p class="giris">Yüz analizi, yüzü ideal ölçülere uydurma çalışması değildir. Amaç, zamanla değişen özellikleri size ait olan ve korunması gereken özelliklerden ayırmaktır.</p>
    </div>
    <div class="izgara izgara--3">
      <div class="kart kart--sicak" data-gr>
        <span class="kart__ikon">${ik.mercek}</span>
        <h4>Hareketsiz ve hareketli yüz</h4>
        <p>Yüz önce dinlenirken, ardından mimik yaparken incelenir. Yalnızca konuşurken ya da gülerken beliren çizgi ile yüz dinlenirken de görülen çizgi aynı şekilde ele alınmaz.</p>
      </div>
      <div class="kart kart--sicak" data-gr style="--d:70ms">
        <span class="kart__ikon">${ik.kalkan}</span>
        <h4>Asimetrinin kaydı</h4>
        <p>Hiçbir yüzün iki yarısı birebir aynı değildir. Var olan farklar uygulamadan önce not edilir; böylece sonradan fark edildiklerinde işlemin sonucu sanılmaz.</p>
      </div>
      <div class="kart kart--sicak" data-gr style="--d:140ms">
        <span class="kart__ikon">${ik.yaprak}</span>
        <h4>Cilt kalitesi ve koruyucu tabaka</h4>
        <p>Cildin nemine, gözeneklerin görünümüne, kolay kızarıp kızarmadığına ve daha önce tahriş olup olmadığına bakılır. Koruyucu tabakası zayıflamış bir ciltte ilk adım işlem değil, bakım düzenidir.</p>
      </div>
      <div class="kart kart--sicak" data-gr>
        <span class="kart__ikon">${ik.liste}</span>
        <h4>Bölgelerin birbirine etkisi</h4>
        <p>Yüz parça parça değil, bir bütün olarak değerlendirilir. Tek bir noktaya yoğunlaşmak dengeyi bozabileceğinden, yapılacak bir değişikliğin komşu bölgelere yansıması önceden konuşulur.</p>
      </div>
      <div class="kart kart--sicak" data-gr style="--d:70ms">
        <span class="kart__ikon">${ik.saat}</span>
        <h4>Geçmiş uygulamalar</h4>
        <p>Daha önce yaptırılan işlemlerin türü, tarihi ve yapıldığı bölge sorulur. Bu bilgiler hem planın içeriğini hem de güvenliği doğrudan etkiler.</p>
      </div>
      <div class="kart kart--sicak" data-gr style="--d:140ms">
        <span class="kart__ikon">${ik.onay}</span>
        <h4>Gerekmeyenin de yazılması</h4>
        <p>Analiz yalnızca yapılabilecekleri değil, gerek olmayanları da listeler. Bu liste en az öneriler kadar değerlidir ve planın ayrılmaz bir parçasıdır.</p>
      </div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <p>Yakınmanıza göre değerlendirmenin nasıl ilerlediğini <a href="${r}cilt-sorunlari/">cilt sorunları</a> bölümünde, bölgelere göre planlamayı <a href="${r}bolgeler/">bölgeler</a> bölümünde, işlemlerin tam listesini ise <a href="${r}uygulamalar/">uygulamalar</a> sayfasında bulabilirsiniz.</p>
    </div>
  </div>
</section>

<!-- ═════════ İLAÇ VE ÖYKÜ ═════════ -->
<section class="bolum" id="ilac">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Güvenlik</p>
      <h2>Hangi ilaçlar ve sağlık başlıkları sorulur?</h2>
      <p class="giris">Görüşmenin en uzun bölümü burasıdır ve kısaltılmaz. Aşağıdaki her başlık, bir planı değiştirebilecek ya da tümüyle erteletebilecek bilgiler içerir.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kart kart--duz" data-gr>
        <h4>Kullandığınız ilaçlar ve takviyeler</h4>
        <ul>
          <li>Kanı sulandıran ya da trombositlerin çalışmasını etkileyen ilaçlar</li>
          <li>Bağışıklığı baskılayan tedaviler ve kortizon kullanımı</li>
          <li>Düzenli alınan ağrı kesiciler ve iltihap giderici ilaçlar</li>
          <li>Tiroid, şeker ve tansiyon için kullanılan ilaçlar</li>
          <li>Cilde sürülen reçeteli ürünler, bitkisel ürünler, vitamin ve takviyeler</li>
        </ul>
      </div>
      <div class="kart kart--duz" data-gr style="--d:80ms">
        <h4>Genel sağlık öyküsü</h4>
        <ul>
          <li>Süregelen hastalıklar, geçirilmiş ameliyatlar ve hastane yatışları</li>
          <li>Kansızlık, kanama eğilimi ve pıhtılaşma sorunları</li>
          <li>Uçuk öyküsü ve sık tekrarlayan cilt enfeksiyonları</li>
          <li>Gebelik, emzirme ve yakın dönemde gebelik planı</li>
          <li>Önceki estetik uygulamalar ve sonrasında yaşanan istenmeyen durumlar</li>
        </ul>
      </div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <b>Takip edilen bir hastalığınız varsa belgelerini getirin</b>
      <p>Tiroid, şeker, tansiyon ya da kansızlık gibi düzenli izlenen bir durumunuz varsa son kontrolünüze ait belgeleri, son aylarda yaptırdığınız kan tetkikleri varsa çıktılarını yanınızda getirin. Bu bilgiler hem uygulamanın zamanlamasını hem de seçilecek yöntemi etkileyebilir; eksik bir bilgi varsa gerekli tetkik bu görüşmede istenir.</p>
      <p style="margin-top:10px">İlaçlarınızın kutularını ya da adlarını yazdığınız bir listeyi getirmeniz görüşmeyi kolaylaştırır. Yanınızda getirmeniz yararlı olanların tam dökümü <a href="${r}hazirlik-listesi/">hazırlık listesi</a> sayfasında yer alıyor.</p>
    </div>
  </div>
</section>

<!-- ═════════ BEKLENTİ ═════════ -->
<section class="bolum bolum--buz2" id="beklenti">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Görüşme</p>
      <h2>Beklenti görüşmesinde neler konuşulur?</h2>
    </div>
    <div data-gr style="max-width:72ch">
      <p>Bu bölümde asıl soru şudur: aynaya baktığınızda neyin değişmesini istiyorsunuz? Cevap çoğu zaman bir işlemin adı olmaz. “Yüzüm hep asık duruyor” ya da “makyajla bile kapatamıyorum” gibi ifadeler, hangi bölgeye bakılacağı konusunda bir uygulama adından daha çok şey anlatır.</p>
      <p>Sonra bu isteğin tıbbi olarak karşılanıp karşılanamayacağına bakılır. Karşılanabiliyorsa ne ölçüde ve ne kadar sürede karşılanabileceği anlatılır; karşılanamıyorsa bu açıkça söylenir ve ulaşılabilecek gerçekçi hedef tarif edilir.</p>
      <p>Bu görüşmede bir sonuç için söz verilmez, bir işlemin herkese uyduğu söylenmez ve bugün karar vermeniz için baskı yapılmaz. Beklenti ile uygulamanın sınırı örtüşmüyorsa işlem planlanmaz; böyle bir sonuç sık görülür ve tıbben yerindedir. Çalışma biçimimizin tamamını <a href="${r}yaklasimimiz/">yaklaşımımız</a> sayfasında anlattık.</p>
    </div>
  </div>
</section>

<!-- ═════════ ONAM ═════════ -->
<section class="bolum" id="onam">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Onam</p>
      <h2>Aydınlatılmış onam formu neyi kayda geçirir?</h2>
      <p class="giris">Aydınlatılmış onam, yapılacak işlemi, olası sonuçlarını ve seçeneklerini anladığınızı kayda geçiren yazılı belgedir. Girişimsel hiçbir uygulama bu belge imzalanmadan yapılmaz. Amacı sorumluluğu size devretmek değil, bilgilendirmenin yapıldığını belgelemektir.</p>
    </div>
    <div class="izgara izgara--2">
      <div class="kart kart--duz" data-gr>
        <h4>Onam belgesinde neler yazar?</h4>
        <ul>
          <li>İşlemin tıbbi adı ve uygulanacağı bölge</li>
          <li>Amaçlanan ve amaçlanmayan değişiklikler</li>
          <li>Sık, seyrek ve nadir görülen istenmeyen durumlar</li>
          <li>İşlemden sonra dikkat etmeniz gerekenler ve kaçınmanız gerekenler</li>
          <li>Diğer seçenekler ve <b>hiç işlem yapmama</b> seçeneği</li>
          <li>Kontrol tarihi ve bir sorun olursa ulaşacağınız iletişim yolu</li>
        </ul>
      </div>
      <div class="kart kart--duz" data-gr style="--d:80ms">
        <h4>Bu süreçte haklarınız</h4>
        <ul>
          <li>İmzalamadan önce metni kendi hızınızda okumak ve soru sormak</li>
          <li>Anlaşılmayan bir maddenin yeniden açıklanmasını istemek</li>
          <li>Karar için süre istemek ve randevuyu başka güne almak</li>
          <li>Onam verdikten sonra da işlemden vazgeçebilmek</li>
          <li>Dosyanızdaki kayıtları görmek</li>
          <li>Kişisel verilerinizin nasıl işlendiğini öğrenmek</li>
        </ul>
      </div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:22px">
      <p>Haklarınızın tamamı <a href="${r}yasal/hasta-haklari/">hasta hakları</a>, verilerinizin işlenme biçimi <a href="${r}yasal/kvkk-aydinlatma-metni/">KVKK aydınlatma metni</a> sayfasında yer alır. Uygulamadan sonraki dönemde nelerin izlendiğini <a href="${r}uygulamalar/uygulama-sonrasi-takip/">uygulama sonrası takip</a> sayfasında bulabilirsiniz.</p>
    </div>
  </div>
</section>

<!-- ═════════ SORU TERMİNALİ ═════════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>rahmi-cebeci · muayene · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Görüşme ne kadar zaman alır?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Muayeneye gelince mutlaka işlem yapılır mı?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>İstediğim uygulamayı muayenesiz yaptırabilir miyim?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Görüşmeye gelirken yanımda ne olmalı?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Muayene ve uygulama aynı güne denk gelebilir mi?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Fotoğrafım çekilir mi?</button>
        <button class="g-ssoru" data-gs="6"><i>›</i>Ücret bilgisini nasıl öğrenirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[
["Görüşme ne kadar zaman alır?","Süre, konuşulacak yakınma sayısına ve sağlık öykünüzün ayrıntısına göre değişir. Randevular görüşmenin aceleye gelmeyeceği aralıklarla verilir; kontrol görüşmeleri ilk görüşmeye göre daha kısa sürer."],
["Muayeneye gelince mutlaka işlem yapılır mı?","Hayır. Pek çok görüşme hiçbir işlem planlanmadan sona erer. Evdeki bakım düzeninde yapılacak bir değişiklik yeterliyse bunu açıkça duyarsınız; başka bir uzmanlık alanını ilgilendiriyorsa hangi dala başvurmanız gerektiği anlatılır."],
["İstediğim uygulamayı muayenesiz yaptırabilir miyim?","İsteğiniz dikkatle dinlenir ama muayene atlanmaz. Düşündüğünüz uygulama size uygunsa planlanır; uygun değilse nedeni açıklanır ve varsa daha uygun bir seçenek konuşulur. Muayene yapılmadan uygulama kararı vermek hem tıbben hem de mevzuat açısından doğru değildir."],
["Görüşmeye gelirken yanımda ne olmalı?","Kullandığınız ilaç ve takviyelerin listesi, takip edilen bir hastalığınız varsa son kontrol belgeleri, yakın zamanda yaptırdığınız kan tetkiklerinin çıktısı ve önceki uygulamalara ait belgeler işe yarar. Yüzünüze bakılacaksa makyajsız gelin; cilt böylece olduğu gibi görülür."],
["Muayene ve uygulama aynı güne denk gelebilir mi?","Bazı durumlarda mümkündür ama bir kural değildir. Bir tetkik sonucu beklenecekse, ciltte aktif bir sorun varsa ya da düşünmek için zaman istiyorsanız uygulama başka bir güne alınır. Karar vermeniz için baskı yapılmaz."],
["Fotoğrafım çekilir mi?","Yalnızca takip amacıyla, ayrıca izniniz alınarak ve dosyanızda saklanmak üzere fotoğraf çekilebilir. Bu görüntüler tanıtımda kullanılmaz ve sitede yayımlanmaz. İzin vermemeniz muayeneyi ya da uygulamayı engellemez."],
["Ücret bilgisini nasıl öğrenirim?","Sağlık alanındaki tanıtım mevzuatı, ücret bilgisinin internet sitesinde paylaşılmasına izin vermez. Bu bilgi muayenede size özel olarak verilir; sorunuz varsa ${S.iletisim.tel} numarasından muayenehaneyi arayabilirsiniz."]
]</script>

<!-- ═════════ UYARI ═════════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="kutu kutu--uyari" data-gr>
      <b>Uyarı</b>
      <p>Bu sayfa genel bilgi vermek amacıyla hazırlanmıştır. Bir uygulamanın size uygun olup olmadığına ancak muayene ve sağlık öykünüz değerlendirildikten sonra karar verilebilir. Girişimsel işlemlerde sonuç önceden taahhüt edilemez; etkinin ne ölçüde görüleceği ve ne kadar süreceği kişiden kişiye değişir. Amacı bir işlemi tanıtmak ya da sizi bir işleme yönlendirmek değildir.</p>
    </div>
    <p data-gr style="margin-top:18px;font-size:.92rem">Muayeneyi kim yapar? Değerlendirmeyi muayenehanenin sahibi ve sorumlu hekimi ${S.hekim.tam} yapar. Uzmanlık eğitimi sırasında ${S.hekim.rotasyonlar.slice(0, 2).join(' ve ').toLocaleLowerCase('tr')} dâhil çeşitli dallarda rotasyon yapmış, ${S.hekim.sertifika}nı ${S.hekim.sertifikaYer}’da almıştır. Eğitim geçmişi <a href="${r}hekim/">hekim</a> sayfasında, muayenehanenin fiziki koşulları <a href="${r}klinik/">klinik</a> sayfasında yer alır. Yakınmanız medikal estetiğin alanı dışındaysa uygulama yapılmaz; hangi dala başvurmanız gerektiği gerekçesiyle birlikte anlatılır.</p>
  </div>
</section>

<!-- ═════════ İLGİLİ ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Devamı</p>
      <h2>İlgili başlıklar</h2>
    </div>
    <div class="izgara izgara--3">
      <a class="kart" href="${r}cilt-sorunlari/" data-gr>
        <h3>Cilt sorunları</h3>
        <p>Yakınmanızdan yola çıkın: hangi bulgunun hangi başlıkta ele alındığını görün.</p>
        <span class="kart__ok">İncele ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}uygulamalar/" data-gr style="--d:70ms">
        <h3>Tüm uygulamalar</h3>
        <p>Muayeneden sonra planlanabilecek işlemlerin, dört grup altında tam listesi.</p>
        <span class="kart__ok">İncele ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}hazirlik-listesi/" data-gr style="--d:140ms">
        <h3>Hazırlık listesi</h3>
        <p>Görüşmeye gelmeden önce hazırlamanız ve yanınıza almanız gerekenler.</p>
        <span class="kart__ok">İncele ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yaklasimimiz/" data-gr>
        <h3>Yaklaşımımız</h3>
        <p>Çalışma düzenimizin dört aşaması ve neden az ama gerekçeli işlem önerdiğimiz.</p>
        <span class="kart__ok">İncele ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}hekim/" data-gr style="--d:70ms">
        <h3>Hekim</h3>
        <p>${S.hekim.tam} — eğitimi, görev yaptığı kurumlar ve uygulama alanı.</p>
        <span class="kart__ok">İncele ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}sikca-sorulan-sorular/" data-gr style="--d:140ms">
        <h3>Sıkça sorulan sorular</h3>
        <p>Randevudan kontrole kadar en çok merak edilen konuların yanıtları.</p>
        <span class="kart__ok">İncele ${ik.ok}</span>
      </a>
    </div>
  </div>
</section>

<!-- ═════════ G · KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Her plan bir görüşmeyle başlar</h2>
    <p class="g-sonalt">Sorunuzu getirin; hangi uygulamanın gerektiğine, belki de hiçbirinin gerekmediğine birlikte karar verelim. ${S.iletisim.adres}, ${S.iletisim.ilce}.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
