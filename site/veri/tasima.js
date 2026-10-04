/* ============================================================
   ADI DEĞİŞEN SAYFALAR VE GÖRSELLER (eski → yeni)
   wp-aktar.js bunları rc-icerik.json'a yazar:
   - SAYFA: WordPress'te eski sayfa yeni adına taşınır (aynı kayıt, kopya sayfa doğmaz;
     panelde yapılmış düzenlemeler ve öne çıkan görsel korunur). Eski adres
     wp-kurulum/htaccess'te 301 ile yeniye gider — WordPress sayfalarda eski adı hatırlamaz.
   - GORSEL: /varliklar/ kaynağının adı değişince Ortam kütüphanesindeki kayıt yeni kaynağa
     geçer; kütüphanedeki dosya adı da medya.js'teki yeni adla yenilenir (rc-medya.php).
   4 Eki 2026: ilaç / etken madde adları siteden çıkarıldı (kullanıcı kararı, hukuk).
   ============================================================ */
module.exports = {
  SAYFA: {
    'uygulamalar/botulinum-toksin': 'uygulamalar/mimik-cizgisi-uygulamasi',
    'uygulamalar/somon-dna-polinukleotid': 'uygulamalar/doku-onarim-uygulamasi',
  },
  GORSEL: {
    'gorsel/uyg-botulinum-toksin.webp': 'gorsel/uyg-mimik-cizgisi-uygulamasi.webp',
    'gorsel/uyg-botulinum-toksin-2.webp': 'gorsel/uyg-mimik-cizgisi-uygulamasi-2.webp',
    'gorsel/uyg-somon-dna-polinukleotid.webp': 'gorsel/uyg-doku-onarim-uygulamasi.webp',
    'gorsel/uyg-somon-dna-polinukleotid-2.webp': 'gorsel/uyg-doku-onarim-uygulamasi-2.webp',
  },
};
