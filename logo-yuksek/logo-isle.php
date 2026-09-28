<?php
/* Higgsfield ile büyütülen logoları Yoast/WordPress için hazırlar (GD'li PHP gerekir; XAMPP'te yok →
   01-EsteTouch/estetouch-wp/php/php.exe kullanıldı).
   Büyütücü şeffaf zemini beyaza çeviriyor. Şeffaflık doygunluktan (kırmızı − mavi) hesaplanır: altın tonları opak kalır,
   beyaz zemin ve yapay zekânın bıraktığı gri kırıntılar şeffaf olur, kenar pikselleri beyazdan ayrıştırılır.
   Kullanım:
     php logo-isle.php amblem  amblem-4k-ham.png
     php logo-isle.php yatay   logo-4k-ham.png  <kırpma x,y,g,y>   (kare tuvaldeki yatay logo bandı) */
ini_set('memory_limit', '3072M');
[$_, $kip, $giris] = $argv;
$DIZIN = __DIR__;

function seffaflastir($src) {
	$w = imagesx($src); $h = imagesy($src);
	$out = imagecreatetruecolor($w, $h);
	imagealphablending($out, false); imagesavealpha($out, true);
	imagefill($out, 0, 0, imagecolorallocatealpha($out, 0, 0, 0, 127));
	$k = [$w, $h, 0, 0];
	for ($y = 0; $y < $h; $y++) for ($x = 0; $x < $w; $x++) {
		$c = imagecolorat($src, $x, $y);
		$r = ($c >> 16) & 255; $g = ($c >> 8) & 255; $b = $c & 255;
		$a = (($r - $b) - 10) / 75;              /* 10'un altı zemin/gri, 85'in üstü tam altın */
		if ($a <= 0.04) continue;
		if ($a > 1) $a = 1;
		$ay = fn($v) => (int) round(max(0, min(255, ($v - (1 - $a) * 255) / $a)));   /* c = a·C + (1−a)·beyaz */
		imagesetpixel($out, $x, $y, imagecolorallocatealpha($out, $ay($r), $ay($g), $ay($b), (int) round(127 - $a * 127)));
		if ($x < $k[0]) $k[0] = $x; if ($y < $k[1]) $k[1] = $y; if ($x > $k[2]) $k[2] = $x; if ($y > $k[3]) $k[3] = $y;
	}
	return [$out, $k];
}
/* içeriği ortalayıp paylı tuvale koy (şeffaf ya da düz renk) */
function tuval($src, $k, $g, $y, $pay, $renk = null) {
	$cw = $k[2] - $k[0] + 1; $ch = $k[3] - $k[1] + 1;
	$olcek = min(($g * (1 - 2 * $pay)) / $cw, ($y * (1 - 2 * $pay)) / $ch);
	$nw = (int) round($cw * $olcek); $nh = (int) round($ch * $olcek);
	$t = imagecreatetruecolor($g, $y);
	imagealphablending($t, false); imagesavealpha($t, true);
	imagefill($t, 0, 0, $renk === null ? imagecolorallocatealpha($t, 0, 0, 0, 127) : imagecolorallocate($t, ...$renk));
	imagealphablending($t, $renk !== null);   /* düz zeminde harmanla, şeffafta alfa koru */
	imagecopyresampled($t, $src, (int) (($g - $nw) / 2), (int) (($y - $nh) / 2), $k[0], $k[1], $nw, $nh, $cw, $ch);
	return $t;
}
function kaydet($im, $ad) { global $DIZIN; imagepng($im, "$DIZIN/$ad", 9); echo "$ad → ", imagesx($im), '×', imagesy($im), ' · ', round(filesize("$DIZIN/$ad") / 1024), " KB\n"; }

$src = imagecreatefrompng("$DIZIN/$giris");
if ($kip === 'yatay' && !empty($argv[3])) {
	[$x, $y, $gw, $gh] = array_map('intval', explode(',', $argv[3]));
	$src = imagecrop($src, ['x' => $x, 'y' => $y, 'width' => $gw, 'height' => $gh]);
}
[$seffaf, $k] = seffaflastir($src);
echo "içerik kutusu: ", implode(',', $k), "\n";

if ($kip === 'amblem') {
	kaydet(tuval($seffaf, $k, 4096, 4096, .06), 'rahmi-cebeci-amblem-4096.png');
	kaydet(tuval($seffaf, $k, 1024, 1024, .06), 'rahmi-cebeci-amblem-1024.png');           /* Yoast: kuruluş logosu */
	kaydet(tuval($seffaf, $k, 512, 512, .06), 'rahmi-cebeci-amblem-512.png');              /* WordPress: site simgesi */
	kaydet(tuval($seffaf, $k, 1024, 1024, .10, [255, 255, 255]), 'rahmi-cebeci-amblem-1024-beyaz.png');
} else {
	$cw = $k[2] - $k[0] + 1; $ch = $k[3] - $k[1] + 1;
	$g = 4000; $y = (int) round($g * ($ch / $cw) * 1.16);
	kaydet(tuval($seffaf, $k, $g, $y, .04), 'rahmi-cebeci-logo-yatay.png');
	kaydet(tuval($seffaf, $k, 1200, 630, .12, [250, 247, 241]), 'rahmi-cebeci-paylasim-1200x630.png');   /* Yoast: sosyal varsayılan görsel (#FAF7F1) */
}
