const S = require('../site');

module.exports = {
  slug: 'iletisim',
  tip: 'bilgi',
  baslik: `İletişim ve randevu talebi — ${S.iletisim.semt} muayenehanesi`,
  aciklama: `${S.hekim.tam} muayenehanesinin ${S.iletisim.semt} adresi, telefon ve WhatsApp hattı, çalışma saatleri, ulaşım bilgisi ve randevu talep formu.`,

  icerik: (r, ik) => `

<!-- ═════════ HERO ═════════ -->
<section class="g-hero">
  <div class="sar">
    <div>
      <nav class="kirinti" aria-label="Konum" style="position:relative;font-size:.76rem;color:var(--sessiz);display:flex;gap:7px;margin-bottom:18px"><a href="${r}" style="color:var(--sessiz);text-decoration:none">Ana sayfa</a> › <span>İletişim</span></nav>
      <p class="g-etiket">İletişim · ${S.iletisim.semt}</p>
      <h1>Randevu için <span class="g-isik">arayın ya da yazın</span></h1>
      <p class="g-hero__alt">Muayenehane ${S.iletisim.semt}’dedir. Randevu için aramanız, WhatsApp’tan yazmanız ya da aşağıdaki formu doldurmanız yeterli. Formu göndermek randevunun onaylandığı anlamına gelmez; mesajınızı aldıktan sonra mesai saatleri içinde sizi arıyor, gün ve saati sizinle konuşarak belirliyoruz.</p>
      <div class="g-hero__cta">
        <a class="dgm dgm--bir" href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a>
        <a class="dgm dgm--iki" href="https://wa.me/${S.iletisim.waHam}" rel="noopener">WhatsApp ile yazın</a>
      </div>
      <div class="g-tikler"><span><i></i>Mesai içinde geri arama</span><span><i></i>Mesaj yoluyla muayene yapılmaz</span><span><i></i>Yalnızca gerekli bilgi istenir</span></div>
    </div>
    <div class="g-tarama" data-gr>
      <img src="${r}varliklar/foto/klinik-bekleme-2.webp" width="1400" height="788" alt="Muayenehanenin bekleme salonu ve karşılama bankosu" loading="eager">
      <div class="g-isin"></div>
      <!-- gerçek fotoğraf: yapay zekâ rozeti bilinçli olarak YOK -->
      <div class="g-hud"><b>${S.iletisim.ilce}</b><div class="g-cizgi"></div><span>${S.iletisim.adres}</span></div>
    </div>
  </div>
</section>

<!-- ═════════ BİLGİLER + HARİTA ═════════ -->
<section class="bolum bolum--sik">
  <div class="sar">
    <div class="izgara izgara--2" style="gap:clamp(24px,4vw,48px);align-items:start">
      <div>
        <h2>Adres ve ulaşım</h2>
        <p style="margin-top:12px;margin-bottom:24px">Muayenehaneye ait iletişim kanalları aşağıda listelenmiştir. Bu listede yer almayan numara ve hesapların muayenehaneyle bir ilişkisi yoktur.</p>
        <ul class="bilgi-liste">
          <li>${ik.pin}<div><b>Adres</b>${S.iletisim.adres}<br>${S.iletisim.ilce}</div></li>
          <li>${ik.tel}<div><b>Telefon</b><a href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a></div></li>
          ${S.iletisim.cepHam !== S.iletisim.telHam ? `<li>${ik.tel}<div><b>GSM</b><a href="tel:${S.iletisim.cepHam}">${S.iletisim.cep}</a></div></li>` : ''}
          <li>${ik.wa}<div><b>WhatsApp</b><a href="https://wa.me/${S.iletisim.waHam}" rel="noopener">${S.iletisim.wa}</a><br><small style="color:var(--sessiz)">Randevu ayarlamak ve adres sormak içindir; şikâyetler mesajla değerlendirilmez.</small></div></li>
          <li>${ik.posta}<div><b>E-posta</b><a href="mailto:${S.iletisim.eposta}">${S.iletisim.eposta}</a></div></li>
          <li>${ik.saat}<div><b>Çalışma saatleri</b>${S.iletisim.saatler.map(([g, s]) => `${g}: ${s}`).join('<br>')}</div></li>
        </ul>
        <div class="kutu kutu--bilgi" style="margin-top:24px">
          <b>Gelmeden önce</b>
          <p>Düzenli kullandığınız ilaçların adlarını (kutuların fotoğrafı da yeterlidir), yakın tarihli kan tahlillerinizi ve daha önce yaptırdığınız estetik işlemlere dair bilgileri yanınıza almanız muayeneyi hızlandırır. Hazırlık listesi bunları tek tek hatırlatır.</p>
        </div>
      </div>

      <div>
        <div class="harita">
          <iframe src="https://www.google.com/maps?q=${encodeURIComponent(S.iletisim.adres + ' ' + S.iletisim.ilce)}&output=embed" title="${S.marka} — konum haritası" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
        <div class="dgm-sira" style="margin-top:14px">
          <a class="dgm dgm--iki dgm--kucuk" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(S.iletisim.adres + ' ' + S.iletisim.ilce)}" rel="noopener">Yol tarifi al ${ik.ok}</a>
        </div>

        <div class="izgara" style="gap:14px;margin-top:16px">
          <div class="kart kart--sicak">
            <span class="kart__ikon">${ik.pin}</span>
            <h4 style="margin-top:8px">Toplu taşıma ile</h4>
            <p>Marmaray’ın Bakırköy istasyonu ya da Bakırköy’deki metro durakları (İncirli dâhil) toplu taşımada en pratik seçeneklerdir. İstasyondan sonrası için yukarıdaki yol tarifi bağlantısını kullanabilirsiniz.</p>
          </div>
          <div class="kart kart--sicak">
            <span class="kart__ikon">${ik.saat}</span>
            <h4 style="margin-top:8px">Özel araç ile</h4>
            <p>Sahil yolundan ya da İncirli yönünden Bakırköy merkezine ulaşabilirsiniz. Merkezde yol kenarına park etmek çoğu saatte zordur; yakındaki otoparklardan birini tercih etmek ve trafiğe pay bırakmak zaman kazandırır.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ RANDEVU FORMU ═════════ -->
<section class="bolum bolum--buz2">
  <div class="sar sar--dar">
    <div class="bolum-bas">
      <p class="etiket">Form</p>
      <h2>Randevu talep formu</h2>
      <p class="giris">Aşağıdaki alanlar, sizi arayabilmemiz için gerekenlerle sınırlıdır. Mesai saatleri içinde telefonla, telefona ulaşamazsak e-postayla size dönüyoruz.</p>
    </div>

    <div class="kutu kutu--uyari" style="margin-bottom:24px">
      <b>Sağlık bilgilerinizi forma yazmayın</b>
      <p>Formdan tıbbi görüş verilmez. Şikâyetinize, tanılarınıza ve kullandığınız ilaçlara dair ayrıntıları buraya değil, muayenede hekime anlatın. Formda yalnızca randevu için zorunlu olan bilgileri istiyoruz.</p>
    </div>

    <form class="form" action="${r}iletisim-gonder.php" method="post">
      <div class="alan">
        <label for="ad">Ad ve soyad <span aria-hidden="true">*</span></label>
        <input type="text" id="ad" name="ad" autocomplete="name" required maxlength="80">
      </div>

      <div class="alan">
        <label for="tel">Telefon <span aria-hidden="true">*</span></label>
        <input type="tel" id="tel" name="telefon" autocomplete="tel" inputmode="tel" required maxlength="24" placeholder="05XX XXX XX XX">
        <small>Randevu için sizi bu numaradan arayacağız.</small>
      </div>

      <div class="alan">
        <label for="eposta">E-posta</label>
        <input type="email" id="eposta" name="eposta" autocomplete="email" maxlength="120">
        <small>Zorunlu değildir; telefonla ulaşamazsak kullanılır.</small>
      </div>

      <div class="alan">
        <label for="konu">Konu <span aria-hidden="true">*</span></label>
        <select id="konu" name="konu" required>
          <option value="">Seçiniz</option>
          <option value="dovme-silme">Dövme silme (pico lazer)</option>
          <option value="botulinum-toksin">Botulinum toksin</option>
          <option value="dolgu">Dolgu</option>
          <option value="hifu">HIFU</option>
          <option value="altin-igne">Altın iğne</option>
          <option value="fraksiyonel-lazer">Fraksiyonel lazer</option>
          <option value="mezoterapi-prp">Mezoterapi / PRP</option>
          <option value="diger">Diğer</option>
        </select>
      </div>

      <div class="alan">
        <label for="mesaj">Mesajınız</label>
        <textarea id="mesaj" name="mesaj" maxlength="600" placeholder="Örnek: Cumartesi sabah saatleri bana uyar."></textarea>
        <small>Buraya yalnızca uygun gün ve saat gibi randevu notlarınızı yazın; sağlık bilgisi paylaşmayın.</small>
      </div>

      <label class="onay">
        <input type="checkbox" name="kvkk" value="1" required>
        <span>İletişim bilgilerimin, randevu talebimin değerlendirilmesi ve benimle iletişim kurulması amacıyla işlenmesine açık rıza veriyorum; <a href="${r}yasal/kvkk-aydinlatma-metni/">KVKK Aydınlatma Metni</a>’ni ve <a href="${r}yasal/acik-riza/">Açık Rıza Metni</a>’ni okudum. <span aria-hidden="true">*</span></span>
      </label>

      <div class="dgm-sira" style="margin-top:8px">
        <button class="dgm dgm--bir" type="submit">Randevu talebini gönder</button>
      </div>
      <p style="font-size:.82rem;color:var(--sessiz);margin:0">Yıldızlı (<span aria-hidden="true">*</span>) alanlar boş bırakılamaz. Formun gönderilmesi randevunun onaylandığı anlamına gelmez.</p>
    </form>
  </div>
</section>

<!-- ═════════ RANDEVU DÜZENİ ═════════ -->
<section class="bolum">
  <div class="sar">
    <div class="bolum-bas">
      <p class="etiket">Randevu düzeni</p>
      <h2>Randevu günü için birkaç not</h2>
      <p class="giris">Tek hekimli bir muayenehanede her randevu bir sonrakine bağlıdır; aralarda odanın hazırlanması için de süre bırakılır. Aşağıdaki küçük ayrıntılar hem sizin hem de sizden sonra gelecek kişinin beklemesini azaltır.</p>
    </div>
    <div class="izgara izgara--3">
      <div class="kart">
        <span class="kart__ikon">${ik.saat}</span>
        <h3>Saatinde gelmek</h3>
        <p>İlk muayenede öykü alındığı için görüşme uzun sürer ve randevular birbirine bağlıdır. Birkaç dakikalık gecikme bile görüşmenin kısalmasına ya da ertelenmesine yol açabilir. Özellikle akşamüstü Bakırköy trafiği yoğun olabilir; buna pay bırakın.</p>
      </div>
      <div class="kart">
        <span class="kart__ikon">${ik.tel}</span>
        <h3>İptal ve erteleme</h3>
        <p>Gelemeyecekseniz olabildiğince erken haber verin; boşalan saat bekleyen bir başka kişiye verilebilir. Bunun için telefonu ya da WhatsApp hattını kullanabilirsiniz.</p>
      </div>
      <div class="kart">
        <span class="kart__ikon">${ik.kalp}</span>
        <h3>Bir yakınınızla gelebilirsiniz</h3>
        <p>Görüşmeye isterseniz bir yakınınızla gelebilirsiniz. Planı ve sonrasındaki bakım adımlarını iki kişinin dinlemesi, evde hatırlamayı kolaylaştırır.</p>
      </div>
      <div class="kart">
        <span class="kart__ikon">${ik.liste}</span>
        <h3>Kontrol randevuları</h3>
        <p>Kontrolün ne zaman yapılacağı işleme göre değişir; tarihi muayenede birlikte belirleriz. Unutursanız bir telefonla yeni gün ayarlanır.</p>
      </div>
      <div class="kart">
        <span class="kart__ikon">${ik.kalkan}</span>
        <h3>Mahremiyet</h3>
        <p>Muayene kapalı odada, hekimle baş başa yapılır. Takip için fotoğraf gerekirse yalnızca tıbbi kaydınız için ve onayınızla çekilir; hiçbir yerde yayımlanmaz.</p>
      </div>
      <div class="kart">
        <span class="kart__ikon">${ik.posta}</span>
        <h3>Belge ve rapor</h3>
        <p>Muayene sonrasında belge ya da rapor ihtiyacınız olursa muayenehaneyi arayabilirsiniz. Belgenizi yalnızca siz ya da yazılı olarak yetkilendirdiğiniz biri teslim alabilir.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═════════ ACİL ═════════ -->
<section class="bolum">
  <div class="sar sar--dar">
    <div class="kutu kutu--acil">
      <b>Acil bir durumda form doldurmayın</b>
      <p>Göğüs ağrısı, nefes darlığı ya da hırıltılı solunum, dudakta veya dilde hızla büyüyen şişlik, yutkunamama, yaygın döküntüyle birlikte baş dönmesi veya bayılacak gibi olma ya da yüksek ateşle hızla yayılan kızarıklık varsa mesajınıza yanıt gelmesini beklemeyin. Vakit kaybetmeden <b>112</b> Acil Çağrı Merkezi’ni arayın ya da size en yakın acil servise gidin.</p>
      <p>Formlar ve WhatsApp mesajları mesai dışında yanıtlanmaz; bu kanallar acil durumlarda kullanılamaz.</p>
    </div>
  </div>
</section>

<!-- ═════════ İLGİLİ BAŞLIKLAR ═════════ -->
<section class="bolum bolum--sik">
  <div class="sar">
    <div class="bolum-bas">
      <p class="etiket">İlgili başlıklar</p>
      <h2>Gelmeden önce işinize yarayabilecek sayfalar</h2>
    </div>
    <div class="izgara izgara--3">
      <a class="kart" href="${r}hazirlik-listesi/">
        <span class="kart__ikon">${ik.liste}</span>
        <h3>Hazırlık listesi</h3>
        <p>Muayeneye gelmeden önce aklınızdakileri not etmenize yardım eden kısa bir araç. Cihazınızda çalışır; yazdıklarınız bize gönderilmez.</p>
        <span class="kart__ok">Aracı aç ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}sikca-sorulan-sorular/">
        <span class="kart__ikon">${ik.mercek}</span>
        <h3>Sıkça sorulan sorular</h3>
        <p>Hazırlıktan kontrol randevusuna kadar en çok merak edilenler.</p>
        <span class="kart__ok">Soruları gör ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yaklasimimiz/">
        <span class="kart__ikon">${ik.kalkan}</span>
        <h3>Yaklaşımımız</h3>
        <p>Her planın neden muayeneyle başladığı ve dört adımın hangi sırayla ilerlediği.</p>
        <span class="kart__ok">İncele ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}yasal/kvkk-aydinlatma-metni/">
        <span class="kart__ikon">${ik.kalkan}</span>
        <h3>KVKK aydınlatma metni</h3>
        <p>Form aracılığıyla bize ulaşan kişisel verilerin işlenme amacı, saklama süresi ve KVKK kapsamındaki haklarınız.</p>
        <span class="kart__ok">Metni oku ${ik.ok}</span>
      </a>
      <a class="kart" href="${r}mevzuat/">
        <span class="kart__ikon">${ik.liste}</span>
        <h3>Uyduğumuz mevzuat</h3>
        <p>Bu sitede mali bilgiye, hasta yorumuna ve öncesi–sonrası görseline neden yer verilmediği.</p>
        <span class="kart__ok">Listeyi gör ${ik.ok}</span>
      </a>
    </div>
  </div>
</section>

<!-- ═════════ KAPANIŞ ═════════ -->
<section class="g-son">
  <div class="sar">
    <p class="g-etiket g-etiket--orta">Sonraki adım</p>
    <h2>Aklınıza takılan bir şey varsa arayın</h2>
    <p class="g-sonalt">Yol tarifi, uygun gün ya da muayene süresiyle ilgili sorular için mesai saatlerinde bir telefon yeterli.</p>
    <div class="g-sonbtn">
      <a class="dgm dgm--bir" href="tel:${S.iletisim.telHam}">${S.iletisim.tel}</a>
      <a class="dgm dgm--iki" href="${r}hazirlik-listesi/arac/">Hazırlık listesini doldurun</a>
    </div>
  </div>
</section>
`,
};
