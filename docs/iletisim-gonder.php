<?php
/* Dr. Rahmi Cebeci — randevu talebi alıcısı (render.js üretir, elle DÜZENLEME) */
declare(strict_types=1);
session_start();

function cikis(string $tur, string $baslik, string $mesaj): void {
  $renk = $tur === 'ok' ? '#1C1B18' : '#85641C';
  echo '<!doctype html><html lang="tr"><head><meta charset="utf-8">'
     . '<meta name="viewport" content="width=device-width,initial-scale=1">'
     . '<meta name="robots" content="noindex"><title>' . htmlspecialchars($baslik) . '</title>'
     . '<style>body{font-family:system-ui,sans-serif;background:#FAF7F1;color:#1C1B18;margin:0;'
     . 'display:grid;place-items:center;min-height:100vh;padding:24px;line-height:1.6}'
     . '.k{background:#fff;border:1px solid #E6DED0;border-radius:20px;padding:32px 28px;max-width:520px;'
     . 'box-shadow:0 24px 60px -30px rgba(28,27,24,.35)}h1{font-size:1.4rem;margin:0 0 12px;color:' . $renk . '}'
     . 'a{display:inline-block;margin-top:18px;background:#1C1B18;color:#fff;text-decoration:none;'
     . 'padding:13px 22px;border-radius:12px;font-weight:700}</style></head><body><div class="k">'
     . '<h1>' . htmlspecialchars($baslik) . '</h1><p>' . $mesaj . '</p>'
     . '<a href="/">Ana sayfaya dön</a></div></body></html>';
  exit;
}

$TEL = '0539 933 08 08';
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { header('Location: /iletisim/'); exit; }

/* bal küpü + hız sınırı (spam) */
if (!empty($_POST['website'] ?? '')) { cikis('ok', 'Talebiniz alındı', 'Teşekkür ederiz.'); }
$son = $_SESSION['son_gonderim'] ?? 0;
if (time() - (int)$son < 30) {
  cikis('hata', 'Çok hızlı gönderim', 'Az önce bir talep gönderdiniz. Lütfen biraz bekleyin veya bizi arayın: ' . htmlspecialchars($TEL));
}
$_SESSION['son_gonderim'] = time();

$al = function (string $ad, int $sinir = 200): string {
  $d = trim((string)($_POST[$ad] ?? ''));
  $d = str_replace(["\r", "\n", '%0a', '%0d'], ' ', $d);   /* başlık enjeksiyonu koruması */
  return mb_substr($d, 0, $sinir);
};
$ad = $al('ad', 80);
$tel = $al('telefon', 24);
$eposta = filter_var($al('eposta', 120), FILTER_VALIDATE_EMAIL) ?: '';
$konu = $al('konu', 120);
$mesaj = mb_substr(trim((string)($_POST['mesaj'] ?? '')), 0, 2000);

if ($ad === '' || $tel === '') {
  cikis('hata', 'Eksik bilgi', 'Ad ve telefon zorunludur. Lütfen <a href="/iletisim/">forma geri dönüp</a> tamamlayın.');
}

$govde = "Yeni randevu talebi\n\n"
  . "Ad: $ad\nTelefon: $tel\n"
  . ($eposta !== '' ? "E-posta: $eposta\n" : '')
  . ($konu !== '' ? "Konu: $konu\n" : '')
  . "\nMesaj:\n" . ($mesaj !== '' ? $mesaj : '(yok)')
  . "\n\n---\nGönderim: " . date('d.m.Y H:i') . "\nIP: " . ($_SERVER['REMOTE_ADDR'] ?? '-');

$baslik = "From: Dr. Rahmi Cebeci <no-reply@" . ($_SERVER['HTTP_HOST'] ?? 'localhost') . ">\r\n";
$baslik .= "Content-Type: text/plain; charset=UTF-8\r\n";
if ($eposta !== '') $baslik .= "Reply-To: $eposta\r\n";

$gitti = @mail('randevu@drrahmicebeci.com', '=?UTF-8?B?' . base64_encode('Randevu talebi — ' . $ad) . '?=', $govde, $baslik);

/* e-posta gitmese bile talep kaybolmasın: sunucuda günlük tut (webroot DIŞI) */
$kayit = dirname(__DIR__) . '/randevu-talepleri.log';
@file_put_contents($kayit, $govde . "\nE-POSTA: " . ($gitti ? 'gonderildi' : 'BASARISIZ') . "\n====\n", FILE_APPEND | LOCK_EX);

cikis('ok', 'Talebiniz bize ulaştı',
  'Randevu talebiniz alındı. Çalışma saatleri içinde size dönüş yapılacak ve gün ile saat birlikte belirlenecek. '
  . 'Acil bir durumunuz varsa lütfen bizi arayın: <strong>' . htmlspecialchars($TEL) . '</strong><br><br>'
  . '<small>Bu bir randevu onayı değildir.</small>');
