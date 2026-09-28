<?php
/* Kare amblemi, temiz büyütülen yatay logodaki amblemden keser (176 px'lik amblem.png'nin 4K büyütmesi kenarlarda
   tırtıklı çıktı; yatay logo 900 px kaynaktan büyütüldüğü için amblemi çok daha net).
   Kullanım: php amblem-yataydan.php   (girdi: rahmi-cebeci-logo-yatay.png, amblem sol ~%31'lik bölümde) */
ini_set('memory_limit', '2048M');
$D = __DIR__;
$src = imagecreatefrompng("$D/rahmi-cebeci-logo-yatay.png");
$sinir = (int) (imagesx($src) * 0.31);          /* amblem ile yazı arasındaki boşluğun ortası */
$h = imagesy($src);
$k = [$sinir, $h, 0, 0];
for ($y = 0; $y < $h; $y++) for ($x = 0; $x < $sinir; $x++) {
	$a = (imagecolorat($src, $x, $y) >> 24) & 0x7F;
	if ($a < 120) { if ($x < $k[0]) $k[0] = $x; if ($y < $k[1]) $k[1] = $y; if ($x > $k[2]) $k[2] = $x; if ($y > $k[3]) $k[3] = $y; }
}
echo "amblem kutusu: ", implode(',', $k), "\n";
function tuval($src, $k, $g, $pay, $renk = null) {
	$cw = $k[2] - $k[0] + 1; $ch = $k[3] - $k[1] + 1;
	$olcek = ($g * (1 - 2 * $pay)) / max($cw, $ch);
	$nw = (int) round($cw * $olcek); $nh = (int) round($ch * $olcek);
	$t = imagecreatetruecolor($g, $g);
	imagealphablending($t, false); imagesavealpha($t, true);
	imagefill($t, 0, 0, $renk === null ? imagecolorallocatealpha($t, 0, 0, 0, 127) : imagecolorallocate($t, ...$renk));
	imagealphablending($t, $renk !== null);
	imagecopyresampled($t, $src, (int) (($g - $nw) / 2), (int) (($g - $nh) / 2), $k[0], $k[1], $nw, $nh, $cw, $ch);
	return $t;
}
foreach ([[2048, null, 'rahmi-cebeci-amblem-2048.png'], [1024, null, 'rahmi-cebeci-amblem-1024.png'], [512, null, 'rahmi-cebeci-amblem-512.png'],
          [1024, [255, 255, 255], 'rahmi-cebeci-amblem-1024-beyaz.png']] as [$g, $renk, $ad]) {
	$t = tuval($src, $k, $g, $renk ? .10 : .06, $renk);
	imagepng($t, "$D/$ad", 9);
	echo "$ad → {$g}×{$g} · ", round(filesize("$D/$ad") / 1024), " KB\n";
}
