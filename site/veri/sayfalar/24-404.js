const S = require('../site');

module.exports = {
  slug: '404',
  tip: 'bilgi',
  baslik: 'Sayfa Bulunamadı — Aradığınız Adres Taşınmış Olabilir',
  aciklama: 'Aradığınız sayfaya ulaşılamadı; bağlantı eski kalmış ya da adres yeniden düzenlenmiş olabilir. Buradan ana bölümlere ve iletişim sayfasına geçebilirsiniz.',

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <span>404</span></nav>
      <p class="g-etiket">404 · Sayfa bulunamadı</p>
      <h1>Bu adreste bir <span class="g-isik">sayfa yok</span></h1>
      <p class="g-hero__alt">Açmaya çalıştığınız sayfa başka bir adrese taşınmış, adı değişmiş ya da hiç yayımlanmamış olabilir. Aşağıdaki bölümlerden birinden devam ederek aradığınız bilgiye ulaşabilirsiniz. Bozuk bir bağlantıya rastladıysanız bize haber vermeniz, düzeltmemizi kolaylaştırır.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="${r}">Ana sayfaya dönün</a>
        <a class="dgm dgm--iki" href="${r}iletisim/">İletişim sayfasına gidin</a>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ YÖNLENDİRME ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar">
    <div class="bolum-bas" data-gr>
      <p class="g-etiket">Buradan devam edin</p>
      <h2>Sitenin ana bölümleri</h2>
    </div>
    <div class="izgara izgara--4" data-gr style="--d:70ms">
      <a class="kart" href="${r}">
        <span class="kart__ikon">${ik.kalp}</span>
        <h3>Ana sayfa</h3>
        <p>Muayenehanenin çalışma düzenini, öne çıkan uygulamaları ve şikâyete göre nereden başlayabileceğinizi özetler.</p>
        <span class="kart__ok">Ana sayfaya dön ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}cilt-sorunlari/">
        <span class="kart__ikon">${ik.mercek}</span>
        <h3>Cilt sorunları</h3>
        <p>Yakınmanızdan yola çıkarak ilerleyin: leke, akne izi, göz altı, saç dökülmesi, selülit, dövme ve diğerleri.</p>
        <span class="kart__ok">Başlıklara git ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}uygulamalar/">
        <span class="kart__ikon">${ik.damla}</span>
        <h3>Uygulamalar</h3>
        <p>Muayenehanede yapılan uygulamalar; her birinin planlaması, olası etkileri ve seans bilgisi kendi sayfasında.</p>
        <span class="kart__ok">Listeyi aç ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}iletisim/">
        <span class="kart__ikon">${ik.pin}</span>
        <h3>İletişim</h3>
        <p>Muayenehanenin Bakırköy’deki yeri, telefon ve WhatsApp numarası, açık olduğu saatler ve randevu formu.</p>
        <span class="kart__ok">İletişime geç ${ik.ok}</span>
      </a>
    </div>

    <div class="kutu kutu--bilgi" data-gr style="--d:140ms;margin-top:28px">
      <b>Hâlâ bulamadıysanız</b>
      <p>Randevu, hazırlık, dövme silme seansları ve uygulama sonrası süreçle ilgili başlıklar sıkça sorulan sorular sayfasında bir arada durur. Çalışmayan bir bağlantı gördüyseniz site editörüne yazmanız yeterli: <a href="mailto:${S.iletisim.editor}">${S.iletisim.editor}</a>.</p>
    </div>
  </div>
</section>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Bir adım ötesi</p>
    <h2>Randevu için mi gelmiştiniz?</h2>
    <p class="g-sonalt">Talebinizi iletişim sayfasındaki formdan gönderebilir ya da çalışma saatleri içinde ${S.iletisim.tel} numarasını arayabilirsiniz.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="${r}iletisim/">İletişim sayfasına gidin</a>
      <a class="dgm dgm--iki" href="${r}">Ana sayfaya dönün</a>
    </div>
  </div>
</section>
`,
};
