const S = require('../../site');

module.exports = {
  slug: 'uygulamalar/uygulama-sonrasi-takip',
  tip: 'tibbi',
  baslik: 'Uygulama sonrası kontrol: randevular ve iyileşmenin izlenmesi',
  aciklama: 'Uygulama sonrası kontrolde iyileşmenin seyri izlenir, bakım düzeni gözden geçirilir ve gecikmiş bir bulgu erken yakalanır; kontrol, planın bir parçasıdır.',

  icerik: (r, ik) => `
<!-- ═════ HERO ═════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <a href="${r}uygulamalar/" style="color:var(--sessiz);text-decoration:none">Uygulamalar</a> › <span>Uygulama sonrası kontrol</span></nav>
      <p class="g-etiket">Değerlendirme ve Takip · Kontrol</p>
      <h1>Uygulama sonrası kontrol: <span class="g-isik">iyileşmeyi birlikte izlemek</span></h1>
      <p class="g-hero__alt">Uygulama sonrası kontrol, işlemden sonraki iyileşmenin önceden planlanmış randevularla izlenmesidir. Bu görüşmelerde iyileşmenin zamanında ilerleyip ilerlemediği değerlendirilir, evdeki bakım adımları birlikte gözden geçirilir ve beklenmeyen bir bulgu varsa büyümeden ele alınır. Süreci uygulamayı yapan hekim yürütür; bu randevular planın ayrılmaz bir parçasıdır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu isteyin</a>
        <a class="dgm dgm--iki" href="#ilkbolum">Seyrini okuyun ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Yazılı bakım talimatı</span><span><i></i>Gerekirse randevu öne alınır</span><span><i></i>Her adım dosyaya işlenir</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/uyg-uygulama-sonrasi-takip.webp" width="1400" height="788" alt="Bir saat, krem kavanozu ve açık not defterinin durduğu masa üstü" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span>
    </div>
  </div>
</section>

<!-- ═════ VERİ BANDI ═════ -->
<div class="g-band"><div class="sar">
  <div data-gr><b>1–2</b><span>Kontrol görüşmesi</span></div>
  <div data-gr style="--d:70ms"><b><em data-gsay="6">0</em></b><span>Takip basamağı</span></div>
  <div data-gr style="--d:140ms"><b>Aylar</b><span>Geç bulgu izlemi</span></div>
  <div data-gr style="--d:210ms"><b>Yazılı</b><span>Evde bakım önerisi</span></div>
</div></div>

<!-- ═════ NEDİR / NE DEĞİLDİR ═════ -->
<section class="bolum bolum--buz2" id="ilkbolum">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Ne yapar, ne yapmaz</p><h2>Kontrolde neye bakılır, takip neyin yerini tutmaz?</h2><p class="giris">Deri, bir işlemin ardından çoğunlukla aynı düzeni izleyerek iyileşir: önce kızarıklık ve şişlik azalır, ardından kabuklar düşer, renk farkları en son kaybolur.</p></div>
    <div class="izgara izgara--2">
      <div class="kutu kutu--bilgi" data-gr>
        <b>Bu nedir</b>
        <p>Takibin ilk işi, bu sıranın beklenen hızda ilerleyip ilerlemediğini görmektir; beklenenden sapan bir seyir erken fark edildiğinde daha kolay yönetilir. Kontrolde bakılanlar bellidir: kızarıklığın yaygınlığı ve sınırı, şişlik, kabuklanma, elle hissedilen sertlik ya da yumru, enfeksiyonu düşündüren işaretler ve renk değişiklikleri.</p>
<p>Evde yapılan bakımın önerilere uyup uymadığı da konuşulur; gecikmelerin önemli bir kısmı atlanan bakım adımlarından kaynaklanır. Takibin bir diğer işi, bazı uygulamalarda ancak haftalar ya da aylar geçtikten sonra beliren gecikmiş bulguları gözden kaçırmamaktır; dolgu sonrasında görülen bu tür durumların nasıl ele alındığı <a href="${r}uygulamalar/dolgu-uygulamalari/">dolgu uygulamaları</a> sayfasının “Dolgudan sonra neler görülebilir” bölümünde anlatılır. Son olarak güneşe, makyaja, spora, saunaya ve etken maddeli ürünlere hangi gün dönebileceğiniz belirlenir.</p>
      </div>
      <div class="kutu kutu--uyari" data-gr style="--d:80ms">
        <b>Bu ne değildir</b>
        <p><b>Yeni bir işlem randevusu değildir:</b> kontrolde ek uygulama yapılması beklenmez; görüşmenin konusu yeni bir seans değil, iyileşmenin kendisidir. <b>Sonuç için söz içermez:</b> sonuçlar kişiden kişiye değişir; takip bu farklılığı görmek ve gerekirse planı düzeltmek için yapılır.</p>
<p><b>Fotoğrafla yapılan uzaktan değerlendirme değildir:</b> görüntüye bakarak muayene yapılmaz; sertlik, sıcaklık artışı ve hassasiyet ancak elle muayenede anlaşılır. <b>Tek görüşmeyle bitmeyebilir:</b> takip birkaç zaman noktasına yayılabilir; ilk kontrolün iyi geçmesi, sonraki haftalarda bir bulgu çıkabilme olasılığını ortadan kaldırmaz.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════ BENTO ═════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr><p class="g-etiket">Yol haritası</p><h2>Takip hangi adımlarla ilerler?</h2></div>
    <div class="g-bento">
      <div class="g-kutu g-b2 g-donutkap" data-gr>
        <div class="g-donut"><svg viewBox="0 0 100 100" width="100" height="100"><circle class="g-iz" cx="50" cy="50" r="45"/><circle class="g-dol" data-gyuzde="66" cx="50" cy="50" r="45"/><circle class="g-kom" cx="50" cy="50" r="45"/></svg><b>3 amaç</b></div>
        <p><b style="color:var(--murekkep)">Takip neden yapılır?</b><br>İyileşmenin seyrini görmek, geç ortaya çıkan bulguları yakalamak ve günlük düzene dönüşü doğru zamanlamak için.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms">
        <span class="g-ket">ZAMAN ÖLÇEĞİ</span>
        <div class="g-cubuk"><small><span>ERKEN KONTROL</span><span>Günler</span></small><div class="g-ciz"><b class="g-cubuk-mavi" data-gw="24%"></b></div></div>
        <div class="g-cubuk"><small><span>GEÇ DÖNEM KONTROLÜ</span><span>Haftalar</span></small><div class="g-ciz"><b class="g-cubuk-petrol" data-gw="58%"></b></div></div>
        <div class="g-cubuk"><small><span>UZUN İZLEM</span><span>Aylar</span></small><div class="g-ciz"><b class="g-cubuk-bakir" data-gw="92%"></b></div></div>
        <p style="font-size:.7rem;color:var(--sessiz);margin-top:8px">Çubuk boyları yalnız karşılaştırma içindir; zamanlama yapılan uygulamaya göre belirlenir.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">Adım adım</span>
        <ol class="g-protokol">
          <li>Uygulama günü: yazılı bakım ve uyarı bilgisi verilir</li>
          <li>İlk günler: bir sorun sezerseniz arayın, kontrol öne çekilir</li>
          <li>Erken kontrol: görünür iyileşme tamamlandığında</li>
          <li>Cildi koruyan bakım ve etken maddeli ürünlere adım adım dönüş</li>
          <li>Geç dönem değerlendirmesi (gereken uygulamalarda)</li>
          <li>Kayıt: işlem, kullanılan ürün, bölge ve tarih dosyanıza işlenir</li>
        </ol>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr><span class="g-ket">Hekimin notu</span><p>"İyi bir plan, kontrol tarihini de içerir."</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:70ms"><span class="g-ket">OLAĞAN SEYİR</span>
        <p style="font-size:.92rem">İlk günlerde kızarıklık ve hafif şişlik görülür, sonra giderek azalır; bazı işlemlerden sonra ince pullanma ya da noktasal kabuklar oluşabilir. Bölgede bir süre hassasiyet ve gerginlik hissedilebilir. Bulgular her gün biraz daha hafifliyorsa seyir beklenen yöndedir. Yeni bir yakınma başlarsa hangi gün başladığını ve aynı dönemde neler olduğunu (yeni bir ilaç, enfeksiyon, aşı, diş tedavisi) not alın; değerlendirmenin yönünü bu bilgiler belirler.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms"><span class="g-ket">HEKİME HABER VERİN</span>
        <p style="font-size:.92rem">Azalması gerekirken artan kızarıklık, geç başlayan ya da tekrarlayan şişlik, elle fark edilen sertlik, koyulaşan veya açılan renkli alanlar, beklenenden uzun süren kabuklar ve kalıcı iz olasılığını düşündüren bulgular. Retinoid ya da asit içeren ürünlere yeniden başlamanın zamanı kontrolde birlikte belirlenir ve adım adım ilerlenir; kolay tahriş olan bir ciltte aynı anda yalnızca tek bir ürün değiştirilir.</p>
      </div>
      <div class="kutu kutu--uyari g-b4" data-gr>
        <b>Hangi durumlarda kontrol günü beklenmez?</b>
        <p>Kontrol gününüzü ileriye atmamanızı öneririz. Şu durumlardan biri varsa o günü de beklemeden görülmeniz gerekir; bazılarında kontrolün içeriği de değişir.</p>
        <ul>
          <li><b>Enfeksiyonu düşündüren bulgular:</b> ağrınız artıyorsa, kızarıklık genişliyorsa, bölge ısınıyorsa, akıntı ya da ateş varsa beklemeyin; sizi daha erken bir güne alalım.</li>
          <li><b>Hızla büyüyen şişlik:</b> saatler içinde artan ve yayılan bir şişlikte vakit kaybetmeden başvurun.</li>
          <li><b>Görme, his, ağrı ya da renk değişikliği:</b> dolgu ve benzeri enjeksiyon uygulamalarından sonra ciltte ani solukluk ya da beyazlama, ağ biçiminde morarma, beklenenle orantısız ağrı, uyuşma ya da görmede bulanıklık veya kayıp olursa bu bir kontrol konusu değil, dakikaların önemli olduğu bir durumdur. Hemen ${S.iletisim.tel} numarasından bizi arayın; ulaşamazsanız <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</li>
          <li><b>İki görüşme arasında geçirilen hastalık, yapılan aşı ya da diş tedavisi:</b> bölgede alevlenmeye yol açabilir; bu durumu bize bildirin.</li>
          <li><b>Yeni başlanan ilaç ve takviyeler:</b> iki görüşme arasında başladığınız her ilaç dosyanıza eklenir.</li>
          <li><b>Elle fark edilen sertlik ya da yumru:</b> olağan kontrol yeterli olmaz; ayrı bir değerlendirme planlanır.</li>
        </ul>
      </div>
      <div class="g-kutu g-b2 g-kutu--gorsel" data-gr><img src="${r}varliklar/gorsel/uyg-yara-bakimi-ve-pansuman.webp" alt="Uygulama sonrası bakımda kullanılan steril gazlı bez ve bant" loading="lazy"><span class="g-ainot">Temsilî görsel · yapay zekâ ile üretildi</span></div>
      <div class="g-kutu g-b2 g-kutu--cta" data-gr><h3>Kontrol tarihinizi belirleyelim</h3><p>Kontrol ayrı bir işlem değil, planın bir parçasıdır.</p><a class="dgm dgm--altin" href="${r}iletisim/">Randevu isteyin</a></div>
    </div>
  </div>
</section>

<!-- ═════ UYARI + KAPSAM ═════ -->
<section class="bolum">
  <div class="sar">
    <div class="kutu kutu--acil" data-gr>
      <b>Acil bulgular</b>
      <p>Nefes almakta zorlanma, yüzde ya da dilde aniden gelişen şişlik, yutkunma güçlüğü veya yaygın döküntüyle birlikte baş dönmesi olursa kontrol randevusunu beklemeyin; <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun. Enjeksiyon uygulamalarından sonra görmede ani bulanıklık ya da kayıp, uygulama bölgesinde ani beyazlama ya da ağ biçiminde morarma da aynı ölçüde acildir: hemen bizi arayın, ulaşamazsanız <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
    </div>
    <div class="kutu kutu--uyari" data-gr style="margin-top:16px;--d:70ms">
      <b>Uyarı</b>
      <p>Bu sayfadaki bilgiler genel niteliktedir ve kişisel bir öneri yerine geçmez. İşlemden sonraki süreç, hangi uygulamanın yapıldığına ve kişinin iyileşme özelliklerine göre farklılaşır; burada yazılanlar hekim muayenesinin ve size verilen yazılı bilgilendirmenin yerini tutmaz. Sonuçlar kişiden kişiye farklılık gösterebilir.</p>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="margin-top:16px;--d:140ms">
      <b>Kapsam</b>
      <p>Muayenehanede yalnızca hekimin uzmanlık alanı ve ${S.hekim.sertifika} kapsamındaki işlemler yapılır; takip de bu sınırlar içinde yürütülür. Kapsam dışında kalan taleplerde <a href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">ilgili uzmanlık dalı</a> önerilir. Her uygulamada hangi bulguların izlendiği, <a href="${r}uygulamalar/">uygulamalar listesinden</a> ulaşacağınız kendi sayfasında yazılıdır; yakınmanız devam ediyorsa ilgili başlığı <a href="${r}cilt-sorunlari/">cilt sorunları</a> bölümünde bulabilirsiniz.</p>
    </div>
  </div>
</section>

<!-- ═════ SORU TERMİNALİ ═════ -->
<section class="bolum bolum--buz2"><div class="sar">
  <div class="bolum-bas" data-gr><p class="g-etiket">Sık gelen sorular</p><h2>Merak ettiğiniz soruya dokunun, yanıtı burada açılsın</h2></div>
  <div class="g-sorgu" data-gr>
    <div class="g-sorgu-bas"><i></i><i></i><i></i><span>rahmi-cebeci · kontrol · soru-cevap</span></div>
    <div class="g-sorgu-ic">
      <div class="g-slistem">
        <button class="g-ssoru" data-akt data-gs="0"><i>›</i>Fotoğraf göndersem değerlendirebilir misiniz?</button>
        <button class="g-ssoru" data-gs="1"><i>›</i>Başka bir yerde yaptırdığım uygulamanın takibini yapıyor musunuz?</button>
        <button class="g-ssoru" data-gs="2"><i>›</i>Kontrole gelmesem sorun olur mu?</button>
        <button class="g-ssoru" data-gs="3"><i>›</i>Güneşe ve spora ne zaman dönebilirim?</button>
        <button class="g-ssoru" data-gs="4"><i>›</i>Kontrol randevusunda neler yapılır?</button>
        <button class="g-ssoru" data-gs="5"><i>›</i>Ücret bilgisini nasıl öğrenirim?</button>
      </div>
      <div class="g-scevap" data-gcevap aria-live="polite"><span class="g-yazan">Hekimin yanıtı</span><b></b><p></p><a class="dgm dgm--altin" href="${r}iletisim/" style="margin-top:8px">Ayrıntısı muayenede</a></div>
    </div>
  </div>
</div></section>
<script type="application/json" data-gsoru-veri>[["Fotoğraf göndersem değerlendirebilir misiniz?","Fotoğraf muayenenin yerini tutmaz; görüntü üzerinden değerlendirme yapmıyoruz. Işık, açı ve ekran ayarı rengi olduğundan farklı gösterir; sertlik, sıcaklık ve hassasiyet ise fotoğrafta görünmez. Endişelendiğiniz bir durum varsa telefonla ulaşın; sizi daha erken bir güne alalım."],["Başka bir yerde yaptırdığım uygulamanın takibini yapıyor musunuz?","Değerlendirme yapılabilir. Hangi ürünün, hangi bölgeye, hangi tarihte uygulandığını gösteren belgeleri getirmeniz önemlidir; bu bilgiler olmadan değerlendirme eksik kalır. Dolgudan haftalar ya da aylar sonra gelişen şişlik veya sertlik, dolgu uygulamaları sayfasının “Dolgudan sonra neler görülebilir” başlığı altında anlatıldığı biçimde ele alınır."],["Kontrole gelmesem sorun olur mu?","Gelmemenizi önermeyiz. Uygulama planı kontrol tarihiyle birlikte kurulur. Hiçbir yakınmanız olmasa da bazı bulgular yalnızca muayenede fark edilir ve bir sonraki adımın kararı bu görüşmeye dayanır. Gelemeyecekseniz randevuyu iptal etmek yerine başka bir güne alın."],["Güneşe ve spora ne zaman dönebilirim?","Bunun cevabı yapılan işleme bağlıdır; size özel süreler uygulama günü yazılı olarak verilir. Genel kural olarak kızarıklık ve şişlik sürerken doğrudan güneş, sıcak ortamlar, çok terleten egzersiz ve havuz ertelenir. İyileşme boyunca güneşten korunma en öncelikli adımdır."],["Kontrol randevusunda neler yapılır?","İyileşmenin takvime uyup uymadığı, şişlik ve morluğun ne kadar gerilediği, dokunmakla sertlik hissedilip hissedilmediği ve iki taraf arasındaki denge incelenir. Cildi koruyan bakım düzeni gözden geçirilir; gerekiyorsa bir sonraki adımın zamanı bu görüşmeye göre yeniden belirlenir."],["Ücret bilgisini nasıl öğrenirim?","Sağlık hizmetlerinin tanıtımını düzenleyen mevzuat nedeniyle ücret bilgisi internet sitemizde yer almaz. Planın kapsamı kişiden kişiye değiştiği için bu bilgi muayenede size özel olarak verilir."]]</script>

<!-- ═════ KAPANIŞ ═════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Kontrol tarihinizi birlikte planlayalım</h2>
    <p class="g-sonalt">Kontrol randevunuzu ${S.iletisim.tel} numarasından telefonla ya da WhatsApp üzerinden teyit edebilirsiniz. ${S.iletisim.adres}, ${S.iletisim.ilce}.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
