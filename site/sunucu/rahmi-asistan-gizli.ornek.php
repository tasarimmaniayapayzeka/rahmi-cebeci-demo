<?php
/* ============================================================
   ÖRNEK — Dr. Rahmi Cebeci ön bilgi asistanı gizli ayarları
   Bu dosyanın kopyası sunucuda public_html'in BİR ÜST klasörüne,
   /home/<hesap>/rahmi-asistan-gizli.php adıyla konur (izin 600).
   public_html içine, GitHub'a ya da e-postaya ASLA konmaz.
   Salvera'nın anahtarı KULLANILMAZ; bu site için ayrı anahtar açılır.
   ============================================================ */
return [
  'anahtar' => 'BURAYA-OPENAI-ANAHTARI',   // platform.openai.com → API keys (bu siteye özel)
  'model'   => 'gpt-5-mini',               // hesabınızda açık olan model adı
  'akil'    => 'low',                      // gpt-5 ailesi için; başka modelde boş bırakın: ''
  'cikti'   => 900,                        // yanıt başına en fazla belirteç
  'saatlik' => 20,                         // bir ziyaretçi için saatlik soru sınırı
  'gunluk'  => 400,                        // sitenin tamamı için günlük soru sınırı (maliyet tavanı)
];
