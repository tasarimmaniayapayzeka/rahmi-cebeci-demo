const S = require('../site');

module.exports = {
  slug: 'hazirlik-listesi/arac',
  tip: 'tibbi',
  js: 'hazirlik.js',
  baslik: 'Görüşmeye Hazırlık Notları — 12 Maddelik Kontrol',
  aciklama: 'Muayenede hekiminize söylemeniz gereken 12 başlığı sırayla hatırlatan liste. Cevaplar yalnız cihazınızda işlenir; bize gönderilmez, hiçbir yerde saklanmaz.',

  icerik: (r, ik) => `

<section class="bolum bolum--sik">
  <div class="sar">
    <nav class="kirinti" aria-label="Konum">
      <a href="${r}">Ana sayfa</a><span aria-hidden="true">›</span>
      <a href="${r}hazirlik-listesi/">Hazırlık notları</a><span aria-hidden="true">›</span>
      <span>Doldurulabilir liste</span>
    </nav>
  </div>
</section>

<section class="bolum" style="padding-top:0">
  <div class="sar">
    <div class="arac" data-hazirlik>

      <p class="etiket">Muayene öncesi araç</p>
      <h1>Görüşmeye Hazırlık Notları</h1>

      <div class="arac__kapi" data-kapi>
        <p>Buradaki 12 madde, muayenede hekiminize anlatmanız gereken bilgileri önceden hatırlamanız için hazırlandı. <strong>Verdiğiniz cevaplar yalnızca bu cihazda işlenir; bize iletilmez ve hiçbir yerde saklanmaz.</strong> Cevabını bilmediğiniz maddelerde “Bilmiyorum” seçeneğini işaretlemekten çekinmeyin; hekiminiz o konuyu muayenede sizinle birlikte netleştirir.</p>
        <p><strong>Liste bir tanı, tarama ya da uygunluk değerlendirmesi değildir.</strong> Sizin için hastalık taraması yapmaz, teşhise varmaz, ilaç ya da işlem tavsiye etmez; hiçbir uygulama için “uygunsunuz” ya da “uygun değilsiniz” gibi bir sonuç üretmez.</p>

        <div class="kutu kutu--acil" style="margin-top:16px">
          <b>Şu anda acil bir şikâyetiniz varsa listeyi bırakın</b>
          <p>Nefes almakta zorlanma, yüzde hızla gelişen şişlik, dayanılmaz ağrı ya da görmede ani değişiklik gibi bir durumda vakit kaybetmeden <b>112</b> Acil Çağrı Merkezi’ni arayın ya da en yakın hastanenin acil birimine başvurun.</p>
        </div>

        <div class="arac__onay">
          <label class="onay"><input type="checkbox" data-yas> <span>18 yaşını doldurdum. <em>(Bu kutu işaretlenmeden maddeler görünmez.)</em></span></label>
        </div>
      </div>

      <div data-govde class="gizle"></div>

      <div class="arac__dip gizle" data-dip>
        <span class="arac__sayac" data-sayac></span>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button type="button" class="dgm dgm--iki dgm--kucuk" data-sifirla>Temizle</button>
          <button type="button" class="dgm dgm--bir dgm--kucuk" data-goster disabled>Özeti göster</button>
        </div>
      </div>

      <div class="sonuc" data-sonuc hidden></div>

      <div class="kutu kutu--bilgi" style="margin-top:30px">
        <b>Liste nasıl işler?</b>
        <p>Maddeler yalnızca sizin <em>önceden bildiğiniz</em> tanı, ilaç ve sağlık öyküsü bilgilerini sorar; belirtilerle ilgili bir soru yoktur. Araç cevaplarınızdan bir sonuç çıkarmaz, sadece hekiminize iletmeniz gereken başlıkları bir araya getirir. Seçimleriniz yalnızca açık olan sekmede yaşar, sekme kapanınca kaybolur; sayfada sunucuya veri taşıyan bir bağlantı yoktur.</p>
      </div>

    </div>
  </div>
</section>
`,
};
