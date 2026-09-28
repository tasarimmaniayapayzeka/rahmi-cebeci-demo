<?php
/* Favicon takımı: altın CR amblemi antrasit zemin üstünde (açık ve koyu sekme çubuğunda da seçilsin diye).
   Girdi: rahmi-cebeci-amblem-2048.png (şeffaf). Çıktı: site/varliklar/ikon/
     favicon.ico (16+32+48, PNG gömülü) · ikon-192.png, ikon-512.png (yuvarlak köşe, Android/Google) ·
     apple-touch-icon.png (180, köşesiz — iOS kendi yuvarlar)
   Kullanım: php favicon-uret.php   (GD'li PHP: 01-EsteTouch/estetouch-wp/php/php.exe) */
ini_set('memory_limit', '1024M');
$D = __DIR__;
$HEDEF = dirname($D) . '/site/varliklar/ikon';
@mkdir($HEDEF, 0777, true);
$amblem = imagecreatefrompng("$D/rahmi-cebeci-amblem-2048.png");
const ZEMIN = [0x1A, 0x1A, 0x1D];   /* tokens.css antrasit */

/* $g boyutunda kare; $kose yarıçap oranı (0 = köşesiz), $pay amblem çevresindeki boşluk oranı.
   Büyük tuvalde çizilip küçültülür: yumuşak köşe + temiz ince çizgi. */
function ikon($amblem, $g, $kose, $pay) {
	$B = 1024;
	$t = imagecreatetruecolor($B, $B);
	imagealphablending($t, false); imagesavealpha($t, true);
	imagefill($t, 0, 0, imagecolorallocatealpha($t, 0, 0, 0, 127));
	$z = imagecolorallocate($t, ...ZEMIN);
	$r = (int) round($B * $kose);
	if ($r > 0) {
		imagefilledrectangle($t, $r, 0, $B - 1 - $r, $B - 1, $z);
		imagefilledrectangle($t, 0, $r, $B - 1, $B - 1 - $r, $z);
		foreach ([[$r, $r], [$B - 1 - $r, $r], [$r, $B - 1 - $r], [$B - 1 - $r, $B - 1 - $r]] as [$cx, $cy]) imagefilledellipse($t, $cx, $cy, 2 * $r, 2 * $r, $z);
	} else {
		imagefilledrectangle($t, 0, 0, $B - 1, $B - 1, $z);
	}
	imagealphablending($t, true);
	$ic = (int) round($B * (1 - 2 * $pay));
	$o = (int) (($B - $ic) / 2);
	imagecopyresampled($t, $amblem, $o, $o, 0, 0, $ic, $ic, imagesx($amblem), imagesy($amblem));
	imagealphablending($t, false);
	$k = imagecreatetruecolor($g, $g);
	imagealphablending($k, false); imagesavealpha($k, true);
	imagefill($k, 0, 0, imagecolorallocatealpha($k, 0, 0, 0, 127));
	imagecopyresampled($k, $t, 0, 0, 0, 0, $g, $g, $B, $B);
	return $k;
}
function png($im) { ob_start(); imagepng($im, null, 9); return ob_get_clean(); }
function yaz($ad, $veri) { global $HEDEF; file_put_contents("$HEDEF/$ad", $veri); echo "$ad · ", strlen($veri), " bayt\n"; }

/* amblem kendi dosyasında %6 payla duruyor; küçük boyutta çizgiler kaybolmasın diye pay az tutulur */
$ico = [];
foreach ([16 => [.18, .02], 32 => [.18, .04], 48 => [.18, .06]] as $g => [$kose, $pay]) $ico[$g] = png(ikon($amblem, $g, $kose, $pay));
/* ICO: 6 bayt başlık + 16'şar bayt dizin + PNG verileri */
$bas = pack('vvv', 0, 1, count($ico));
$ofs = 6 + 16 * count($ico);
$dizin = ''; $veri = '';
foreach ($ico as $g => $p) {
	$dizin .= pack('CCCCvvVV', $g % 256, $g % 256, 0, 0, 1, 32, strlen($p), $ofs);
	$ofs += strlen($p); $veri .= $p;
}
yaz('favicon.ico', $bas . $dizin . $veri);
yaz('ikon-192.png', png(ikon($amblem, 192, .18, .10)));
yaz('ikon-512.png', png(ikon($amblem, 512, .18, .10)));
yaz('apple-touch-icon.png', png(ikon($amblem, 180, 0, .12)));
/* göz kontrolü için: 16 ve 32'yi 8 kat büyütülmüş hâlde yan yana (git dışı) */
$on = imagecreatetruecolor(16 * 8 + 32 * 8 + 48 * 4 + 40, 32 * 8);
imagefill($on, 0, 0, imagecolorallocate($on, 250, 247, 241));
$x = 0;
foreach ([16 => 8, 32 => 8, 48 => 4] as $g => $c) {
	$im = imagecreatefromstring($ico[$g]);
	imagealphablending($on, true);
	imagecopyresized($on, $im, $x, 0, 0, 0, $g * $c, $g * $c, $g, $g);
	$x += $g * $c + 20;
}
imagepng($on, "$D/favicon-onizleme-ham.png");
