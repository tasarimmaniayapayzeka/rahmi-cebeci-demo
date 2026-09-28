<?php
/* Ana sayfanın öne çıkan görseli: yatay logo (şeffaf, 4000 px) antrasit-siyah zeminde, paylaşım oranı 1,91:1.
   Zemin #141416 (sitenin koyu bölümleri ve favicon ailesi) + ortada çok hafif altın ışıma.
   Çıktı: site/varliklar/marka/rahmi-cebeci-paylasim-siyah.png (2400×1260). GD'li PHP: 01-EsteTouch/estetouch-wp/php/php.exe */
ini_set('memory_limit', '2048M');
$D = __DIR__;
[$G, $Y] = [2400, 1260];
$t = imagecreatetruecolor($G, $Y);
imagealphablending($t, true);
/* zemin + radyal ışıma (merkezde altın, kenarda zemin) */
for ($y = 0; $y < $Y; $y++) for ($x = 0; $x < $G; $x++) {
	$d = sqrt((($x - $G / 2) / ($G * .55)) ** 2 + (($y - $Y / 2) / ($Y * .75)) ** 2);
	$k = max(0, 1 - $d) ** 2 * .10;   /* en çok %10 altın karışımı */
	imagesetpixel($t, $x, $y, imagecolorallocate($t, (int) (0x14 + (0xD9 - 0x14) * $k), (int) (0x14 + (0xB7 - 0x14) * $k), (int) (0x16 + (0x5A - 0x16) * $k)));
}
$logo = imagecreatefrompng("$D/rahmi-cebeci-logo-yatay.png");
/* logonun görünen kutusu (şeffaf pay hariç) */
$w = imagesx($logo); $h = imagesy($logo); $k = [$w, $h, 0, 0];
for ($y = 0; $y < $h; $y += 2) for ($x = 0; $x < $w; $x += 2) {
	if (((imagecolorat($logo, $x, $y) >> 24) & 0x7F) < 110) { $k[0] = min($k[0], $x); $k[1] = min($k[1], $y); $k[2] = max($k[2], $x); $k[3] = max($k[3], $y); }
}
$cw = $k[2] - $k[0] + 1; $ch = $k[3] - $k[1] + 1;
$olcek = min(($G * .68) / $cw, ($Y * .46) / $ch);
$nw = (int) round($cw * $olcek); $nh = (int) round($ch * $olcek);
imagecopyresampled($t, $logo, (int) (($G - $nw) / 2), (int) (($Y - $nh) / 2), $k[0], $k[1], $nw, $nh, $cw, $ch);
$hedef = dirname($D) . '/site/varliklar/marka/rahmi-cebeci-paylasim-siyah.png';
imagepng($t, $hedef, 9);
echo basename($hedef), ' → ', $G, '×', $Y, ' · ', round(filesize($hedef) / 1024), " KB\n";
