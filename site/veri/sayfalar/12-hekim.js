const S = require('../site');

module.exports = {
  slug: 'hekim',
  tip: 'tibbi',
  baslik: `${S.hekim.tam}: eğitim, uzmanlık ve çalışma biçimi`,
  aciklama: `${S.hekim.tam}: Hacettepe mezuniyeti, aile hekimliği uzmanlığı, rotasyonlar, görev yaptığı hastaneler ve Bakanlık onaylı medikal estetik sertifikası.`,

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <span>Hekim</span></nav>
      <p class="g-etiket">Hekim · Aile hekimliği ve medikal estetik</p>
      <h1><span class="g-isik">${S.hekim.tam}</span></h1>
      <p style="margin-top:6px;font-weight:700;color:var(--murekkep)">${S.hekim.dallar}</p>
      <p class="g-hero__alt">2005’te tıp fakültesinden mezun oldu ve o günden bu yana hekim olarak çalışıyor. Aile Hekimliği uzmanıdır; estetik alandaki yetkisi Sağlık Bakanlığı onaylı bir sertifikaya dayanır. ${S.iletisim.semt}’deki muayenehanede muayene, plan, uygulama ve kontrol aynı elde yürür. Çıkış noktası şikâyeti kişinin bütününden ayırmadan değerlendirmek; hedef ise yüzün kendi ifadesini koruyan ölçülü bir sonuçtur.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
        <a class="dgm dgm--iki" href="#tekhekim">Tek hekim düzeni ↓</a>
      </div>
      <div class="g-tikler"><span><i></i>Aile Hekimliği Uzmanı</span><span><i></i>Bakanlık onaylı sertifika</span><span><i></i>2005’ten bu yana hekim</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/foto/hekim-portre.webp" width="1400" height="788" alt="${S.hekim.tam} muayenehanesinde" loading="eager">
      <div class="g-isin"></div>
      <!-- gerçek fotoğraf: yapay zekâ rozeti bilinçli olarak YOK -->
      <div class="g-hud"><b>Süreç tek elde yürür</b><div class="g-cizgi"></div><span>Muayene, plan, uygulama ve kontrol aynı hekimde</span></div>
    </div>
  </div>
</section>

<!-- ═════════ TEK HEKİM ═════════ -->
<section class="bolum" id="tekhekim">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Tek hekimle</p>
      <h2>Sizi muayene eden hekim, uygulamayı da yapıyor mu?</h2>
    </div>
    <div class="g-bento">
      <div class="g-kutu g-b4" data-gr>
        <span class="g-ket">Neden gerekli</span>
        <p>Bir estetik başvurunun yolu birkaç kişiye bölündüğünde, planın hangi gerekçeyle kurulduğu kolayca unutulur. İlk görüşmedeki notlar uygulama anına, uygulamadaki ayrıntılar da kontrol gününe eksik ulaşır.</p>
        <p style="margin-top:10px">Bu muayenehanede zincirin tek halkası vardır. Öykünüzü dinleyen, bölgeyi muayene eden, ürünü ve miktarını belirleyen, işlemi yapan ve kontrolde sonucu değerlendiren aynı hekimdir. İşlem sırasında planı değiştirmek ya da durdurmak gerekirse bu karar da onundur.</p>
        <div class="dgm-sira" style="margin-top:16px">
          <a class="dgm dgm--iki" href="${r}yaklasimimiz/">Randevudan kontrole ${ik.ok}</a>
          <a class="dgm dgm--iki" href="${r}klinik/">Muayenehane ${ik.ok}</a>
        </div>
      </div>
      <div class="g-kutu g-b2 g-kutu--gece" data-gr style="--d:70ms"><span class="g-ket">Hekimin notu</span><p>“Hedef, yüzün kendine ait ifadesini koruyan ölçülü bir sonuçtur.”</p></div>
      <div class="g-kutu g-b2" data-gr style="--d:140ms">
        <span class="g-ket">Uygulama anı</span>
        <p><b style="color:var(--murekkep)">İşlemi hekim yapar</b><br>Enjeksiyonlar da lazer ve cihaz seansları da hekim dışında bir çalışana bırakılmaz.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:210ms">
        <span class="g-ket">Kayıt tutma</span>
        <p><b style="color:var(--murekkep)">Tek dosya</b><br>Öykünüz, muayene notları, kullanılan ürünün lot bilgisi ve uygulanan bölge aynı dosyada toplanır; sonraki kararlar bu kayda dayanır.</p>
      </div>
      <div class="g-kutu g-b2" data-gr style="--d:280ms">
        <span class="g-ket">Başkasına devredilmez</span>
        <p><b style="color:var(--murekkep)">Kime soracağınız belli</b><br>Haftalar sonra bir değişiklik fark ederseniz işlemi yapan hekime ulaşırsınız; her şeyi baştan anlatmanız gerekmez.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ EĞİTİM VE DENEYİM ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Eğitim ve deneyim</p>
      <h2>Hekimlik eğitimi nerede alındı, nerede sürdü?</h2>
      <p class="giris">Aşağıda hekimin tıp eğitimi, uzmanlık süreci, görev yaptığı hastaneler ve medikal estetik yetki belgesi özetlenmiştir. Muayenehanede hangi işlemlerin yapılabileceği de bu çerçeveyle belirlenir.</p>
    </div>
    <div class="izgara izgara--2" data-gr style="--d:70ms">
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.onay}</span>
        <h3>Tıp eğitimi</h3>
        <p>${S.hekim.mezuniyet} mezunudur. 2005’ten bu yana hekim olarak çalışmaktadır.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.onay}</span>
        <h3>Aile Hekimliği Uzmanı</h3>
        <p>${S.hekim.uzmanlik} eğitimini tamamlamıştır. Bu dal; her yaştan kişiyi, kronik hastalıkların izlenmesini ve birden fazla ilacın birlikte kullanımını bir arada ele almayı öğretir. Estetik bir başvuruda da aynı bütüncül bakış kullanılır.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.onay}</span>
        <h3>Uzmanlık eğitimindeki rotasyonlar</h3>
        <p>Uzmanlık eğitimi sırasında ${S.hekim.rotasyonlar.join(', ')} kliniklerinde çalışmıştır. Hormon dengesi, kan değerleri, ruh sağlığı ve gebelik gibi başlıklar, estetik bir planın öncesinde de sorulması gereken sorulara dönüşür.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.onay}</span>
        <h3>Görev yaptığı hastaneler</h3>
        <p>${S.hekim.gorevYerleri.join('<br>')}</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.onay}</span>
        <h3>Medikal estetik sertifikası</h3>
        <p>${S.hekim.sertifika} sahibidir; sertifika eğitimini ${S.hekim.sertifikaYer} bünyesinde tamamlamıştır. Muayenehanede yapılan enjeksiyon ve cihaz uygulamaları bu belgenin kapsamında kalır.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.onay}</span>
        <h3>Birikimin muayeneye yansıması</h3>
        <p>Farklı dallarda ve farklı hastanelerde geçen yıllar, bir cilt ya da yüz şikâyetini genel sağlıktan ayırmadan okumayı gerektirir. Kullanılan ilaçlar, kronik hastalıklar ve yaşam koşulları planın doğal bir parçası sayılır.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ ÇALIŞMA BİÇİMİ ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Günlük işleyiş</p>
      <h2>Muayene odasında öncelik ne?</h2>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.mercek}</span>
        <h3>Kişinin bütünü</h3>
        <p>Aile hekimliği, bir şikâyeti uyku düzeni, kullanılan ilaçlar ve genel sağlıkla birlikte okumayı öğretir. Yorgun görünen bir yüzün ardında demir eksikliği ya da tiroid sorunu da olabilir; bu ihtimal göz ardı edilmez.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.kalkan}</span>
        <h3>Öykü işlemden önce</h3>
        <p>Kan sulandırıcı kullanımı, diyabet ya da tiroid gibi kronik bir hastalık, gebelik veya emzirme, yakın zamanda geçirilmiş bir enfeksiyon ve önceki estetik işlemler uygulama gününden önce dosyaya yazılır. Bu bilgiler planın zamanlamasını değiştirebilir.</p>
      </div>
      <div class="kart kart--duz">
        <span class="kart__ikon">${ik.saat}</span>
        <h3>Ölçülü ve aşamalı</h3>
        <p>Doğal ifadeyi korumak için ilk seansta gerekenden azıyla başlanması, eksik kalan kısmın kontrolde tamamlanması tercih edilir. Muayene günü işlem yapılması şart değildir; kararınızı evde, acele etmeden verebilirsiniz.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ ŞEFFAFLIK ═════════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="kutu kutu--bilgi" data-gr>
      <b>Bu sayfada neden sayı, yorum ya da övgü yok?</b>
      <p>Sağlık hizmetlerinin tanıtımını düzenleyen mevzuat; hasta yorumlarının, memnuniyet beyanlarının, mali bilgilerin ve öncesi–sonrası görsellerinin yayımlanmasına izin vermez. Hekimi başkalarından üstün gösteren ifadeler de bu yasağın içindedir. Diploma, uzmanlık belgesi ve sertifikanın asılları muayenehanede incelenebilir.</p>
    </div>
    <div class="kutu kutu--uyari" data-gr style="--d:70ms;margin-top:16px">
      <b>Kapsam</b>
      <p>Muayenehanede yalnızca Aile Hekimliği uzmanlığının ve medikal estetik sertifikasının izin verdiği işlemler yapılır. Hangi merkezde olursanız olun, işlemi kimin yapacağını sormaktan çekinmeyin: karşınızdaki kişi hekim mi, bu işlem için belgesi var mı?</p>
    </div>
  </div>
</section>

<!-- ═════════ İLGİLİ ═════════ -->
<section class="bolum bolum--sicak">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Okumaya devam</p>
      <h2>Buradan devam edin</h2>
    </div>
    <div class="izgara izgara--3" data-gr style="--d:70ms">
      <a class="kart" href="${r}klinik/">
        <h3>Muayenehanemiz</h3>
        <p>${S.iletisim.semt}’deki muayenehane: odalar, cihazlar, hijyen düzeni ve randevu işleyişi.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yaklasimimiz/">
        <h3>Randevudan kontrole</h3>
        <p>Muayeneden takibe dört adım ve her adımın arkasındaki gerekçe.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yaklasimimiz/neden-bazi-islemleri-yapmiyoruz/">
        <h3>Bazı işlemleri neden üstlenmiyoruz</h3>
        <p>Cerrahi, saç ekimi ve lazer epilasyon gibi burada yapılmayan işlemler ve nedenleri.</p>
        <span class="kart__ok">Oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}uygulamalar/">
        <h3>Uygulamalar</h3>
        <p>Enjeksiyon, lazer ve saç uygulamalarının tamamı, gruplarına ayrılmış olarak.</p>
        <span class="kart__ok">Listeye git ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}cilt-sorunlari/">
        <h3>Cilt sorunları</h3>
        <p>Leke, akne izi, dövme ya da saç dökülmesi gibi şikâyetlere göre düzenlenmiş rehber sayfalar.</p>
        <span class="kart__ok">İncele ${ik.ok}</span>
      </a>
    </div>
  </div>
</section>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Önce konuşalım, sonra birlikte karar verelim</h2>
    <p class="g-sonalt">Randevu talebinizi iletişim sayfasındaki form, telefon ya da WhatsApp üzerinden iletebilirsiniz; plan muayenede birlikte kurulur.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">Randevu talebi oluşturun</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Muayeneye hazırlanın</a>
    </div>
  </div>
</section>
`,
};
