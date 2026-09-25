const S = require('../site');

module.exports = {
  slug: 'hazirlik-listesi',
  tip: 'bilgi',
  baslik: 'Görüşme Öncesi Hazırlık Listesi — Amacı, Sınırları, Gizliliği',
  aciklama: 'Muayenede söylemeniz gereken ilaç, öykü ve önceki uygulama bilgilerini hatırlatan kısa liste. Tanı koymaz, işlem önermez; cevaplar cihazınızda kalır.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <span>Hazırlık listesi</span></nav>
      <p class="g-etiket">Hazırlık · Randevudan önce</p>
      <h1>Görüşme öncesi <span class="g-isik">hazırlık listesi</span></h1>
      <p class="g-hero__alt">Bu araç, muayenede hekiminize anlatmanız gereken bilgileri önceden toparlamanız için hazırlanmış kısa bir kontrol listesidir. Doldurması birkaç dakika sürer. Tanı koymaz, hastalık aramaz, işlem önermez ve uygun olup olmadığınıza karar vermez. Tek işlevi, görüşmede sık unutulan ayrıntıları önünüze koymaktır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}hazirlik-listesi/arac/">Listeyi açın</a>
        <a class="dgm dgm--iki" href="${r}iletisim/">Randevu talebi oluşturun</a>
      </div>
      <div class="g-tikler"><span><i></i>Tanı koymaz</span><span><i></i>Veriler cihazdan çıkmaz</span><span><i></i>Birkaç dakikalık iş</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/gorsel/yuz-3d.webp" width="900" height="1200" alt="Yandan görülen bir kadın yüzünün üç boyutlu çizimi" loading="eager">
      <div class="g-isin"></div>
      <span class="g-ainot">Görsel yapay zekâ ile üretilmiştir</span>
      <div class="g-hud"><b>12 madde, yaklaşık iki dakika</b><div class="g-cizgi"></div><span>Sonunda randevuya götürebileceğiniz bir özet oluşur</span></div>
    </div>
  </div>
</section>

<!-- ═════════ NEDEN ═════════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Gerekçe</p>
      <h2>Böyle bir listeye neden gerek duyuldu?</h2>
    </div>
    <div data-gr style="--d:70ms">
      <p>Muayenenin önemli bir kısmı öykü almaya ayrılır. Hangi ilaçları kullandığınız, daha önce hangi uygulamaları yaptırdığınız ve bunlara cildinizin nasıl yanıt verdiği, planın yönünü doğrudan belirler.</p>
<p>Oysa bu ayrıntılar görüşme sırasında kolayca akla gelmez. Birkaç yıl önce yaptırdığınız dövmenin tarihi, geçen yaz kullandığınız bir akne ilacı ya da diş tedavisinden sonra aldığınız antibiyotik çoğu zaman ancak muayenehaneden çıktıktan sonra hatırlanır.</p>
      <p>Bu araç tam olarak o anlar için var. Randevudan önce maddelerin üzerinden geçtiğinizde, yanınıza almanız gereken belgeleri, hatırlamanız gereken tarihleri ve hekiminize mutlaka söylemeniz gereken başlıkları tek ekranda görürsünüz.</p>
    </div>
  </div>
</section>

<!-- ═════════ NE DEĞİLDİR ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Sınırları</p>
      <h2>Bu araç neyi yapmaz?</h2>
      <p class="giris">Bunu açıkça belirtmek istiyoruz; internette benzer görünen ama çok farklı şeyler vaat eden testlere sık rastlanıyor.</p>
    </div>
    <div class="izgara izgara--2" data-gr style="--d:70ms">
      <div class="kart kart--duz">
        <h3>Tanı koymaz</h3>
        <p>Ekranda bir hastalık adı, yüzde ya da puan görmezsiniz; araç böyle bir hesap yapmaz.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Hastalık taramaz</h3>
        <p>Gizli bir sorunu yakalamak ya da olmadığını göstermek gibi bir iddiası yoktur.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Uygunluk kararı vermez</h3>
        <p>Bir uygulamaya uygun olup olmadığınızı belirlemez; son ekranda size bir işlem önerilmez.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Muayenenin yerini tutmaz</h3>
        <p>Listeyi doldurmak randevuyu gereksiz kılmaz, süresini kısaltmaz, size sıra önceliği de sağlamaz.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Randevu oluşturmaz</h3>
        <p>Listeyi bitirdiğinizde bize bir istek düşmez; randevu almak isterseniz iletişim sayfasındaki kanallardan birini seçin.</p>
      </div>
      <div class="kart kart--duz">
        <h3>Tek cümleyle</h3>
        <p>Karar muayenede verilir; bu liste yalnızca o görüşmeye hazırlıklı gelmenizi sağlar.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ GİZLİLİK ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Gizlilik</p>
      <h2>Cevaplarınız bize ulaşır mı?</h2>
      <p class="giris">Ulaşmaz. İşaretlediğiniz maddeler ne bir sunucuya çıkar ne de bir kayıt sistemine girer; bizim bunları görmemiz mümkün değildir.</p>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <div class="kart">
        <span class="kart__ikon">${ik.kalkan}</span>
        <h3>İletim yok</h3>
        <p>Liste bütünüyle kullandığınız tarayıcının içinde çalışır. Seçimleriniz ağ üzerinden aktarılmaz, arka planda sessizce çalışan bir kayıt da yoktur.</p>
      </div>
      <div class="kart">
        <span class="kart__ikon">${ik.saat}</span>
        <h3>Kalıcı iz yok</h3>
        <p>Sekmeyi kapattığınızda ya da sayfayı yenilediğinizde işaretlemeler silinir. Sizi tanıyan bir kimlik üretilmez, önceki ziyaretlerinizle ilişkilendirilmez.</p>
      </div>
      <div class="kart">
        <span class="kart__ikon">${ik.liste}</span>
        <h3>Özeti siz getirirsiniz</h3>
        <p>Listeyi tamamladıktan sonra çıktısını alabilir ya da telefonunuza not edebilirsiniz. Bu bilgiler bize yalnızca muayenede sizin anlatmanızla ulaşır.</p>
      </div>
    </div>
    <div class="kutu kutu--bilgi" data-gr style="--d:140ms;margin-top:26px">
      <b>Başkalarıyla paylaştığınız bir cihazdaysanız</b>
      <p>Ekranınızın başkaları tarafından görülebileceği bir yerde doldurduysanız, işiniz bittiğinde sekmeyi kapatmanız yeterlidir. Cihazda kalıcı bir kopya tutulmaz; yazdırdığınız bir sayfa varsa onu ortada bırakmamaya özen gösterin.</p>
    </div>
  </div>
</section>

<!-- ═════════ NASIL KULLANILIR ═════════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Kullanım</p>
      <h2>Listeyi dört adımda nasıl kullanırsınız?</h2>
    </div>
    <div class="g-katblok" data-gr>
      <span class="g-kno">01</span>
      <h3>Randevudan bir gün önce açın</h3>
      <p>İlaç kutularınız ve varsa önceki uygulamalara ait belgeler elinizin altındayken doldurmak işinizi kolaylaştırır.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:70ms">
      <span class="g-kno">02</span>
      <h3>Her maddeyi okuyup yanıtlayın</h3>
      <p>Maddeler birer hatırlatmadır. Sizi ilgilendirenleri işaretleyin; emin olmadıklarınızda “Bilmiyorum” deyin, bu da hekiminiz için bir bilgidir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:140ms">
      <span class="g-kno">03</span>
      <h3>Özeti yanınıza alın</h3>
      <p>Çıktısını alın ya da telefonunuza not edin. Muayenede bu başlıklar birlikte gözden geçirilir.</p>
    </div>
    <div class="g-katblok" data-gr style="--d:210ms">
      <span class="g-kno">04</span>
      <h3>Takıldığınız yerleri sorun</h3>
      <p>Anlamını tam kavrayamadığınız ya da cevabını bilmediğiniz maddeler, muayenede soracağınız sorular olur.</p>
    </div>
    <div class="dgm-sira" data-gr style="margin-top:22px">
      <a class="dgm dgm--bir" href="${r}hazirlik-listesi/arac/">Listeyi açın ${ik.ok}</a>
      <a class="dgm dgm--iki" href="${r}iletisim/">Randevu talebi oluşturun</a>
    </div>
  </div>
</section>

<!-- ═════════ UYARI ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar sar--dar">
    <div class="kutu kutu--uyari" data-gr>
      <b>Bu liste bir tıbbi değerlendirme yerine geçmez</b>
      <p>Maddeler genel bilgilendirme içindir ve muayenenin yerini tutmaz. Listeyi tamamlamak, bir tanı konduğu ya da bir işleme karar verildiği anlamına gelmez. Şikâyetinize yönelik plan, ancak muayene ve gerekirse tetkik sonrasında hekim tarafından kurulur. Sonuçlar kişiden kişiye farklılık gösterebilir.</p>
    </div>
    <div class="kutu kutu--acil" data-gr style="--d:70ms;margin-top:16px">
      <b>Acil bir durumda listeyle vakit kaybetmeyin</b>
      <p>Nefes almakta zorlanma, yutkunma güçlüğü, dudakta ya da dilde hızla gelişen şişlik, yaygın döküntüyle birlikte baş dönmesi gibi bulgularda hemen <b>112</b>’yi arayın ya da en yakın acil servise gidin.</p>
    </div>
  </div>
</section>

<!-- ═════════ İLGİLİ ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">İlgili başlıklar</p>
      <h2>Hazırlanırken bunlara da bakabilirsiniz</h2>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <a class="kart" href="${r}yaklasimimiz/">
        <h3>Yaklaşımımız</h3>
        <p>Muayeneden kontrole izlenen sıra ve ilk görüşmede konuşulan başlıklar.</p>
        <span class="kart__ok">İncele ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}sikca-sorulan-sorular/">
        <h3>Sıkça sorulan sorular</h3>
        <p>Randevuya ne getirileceği, ilk görüşmenin akışı ve uygulamanın ertelendiği durumlar.</p>
        <span class="kart__ok">Sorulara git ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}cilt-tipi-testi/">
        <h3>Cilt tipi eğilim testi</h3>
        <p>Cildinizi muayenede tarif etmenizi kolaylaştıran, cihazınızda çalışan 12 soruluk test.</p>
        <span class="kart__ok">Teste geç ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yasal/kvkk-aydinlatma-metni/">
        <h3>KVKK aydınlatma metni</h3>
        <p>Sitede kişisel verilerin nasıl ele alındığını anlatan metnin tamamı.</p>
        <span class="kart__ok">Metne git ${ik.ok}</span>
      </a>
    </div>
  </div>
</section>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Görüşmeden önce birkaç dakika ayırın</h2>
    <p class="g-sonalt">On iki madde, birkaç dakika. Cevaplarınız cihazınızda kalır; hazırlığınız bittiğinde randevu talebinizi iletebilirsiniz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}hazirlik-listesi/arac/">Listeyi açın</a>
      <a class="dgm dgm--iki" href="${r}iletisim/">Randevu talebi oluşturun</a>
    </div>
  </div>
</section>
`,
};
