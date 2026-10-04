<?php
/* <head> çıktısı — render.js duzen() ile aynı sıra ve biçim.
   Yoast kurulunca başlık/açıklama/canonical/og ona devredilir; o güne kadar veriler sayfa ayarları kutusundadır. */
defined('ABSPATH') || exit;

function rc_kacir($s) {
	return htmlspecialchars((string) $s, ENT_COMPAT | ENT_SUBSTITUTE, 'UTF-8');
}

function rc_alan() {
	return untrailingslashit(home_url());
}

/* geçerli sayfanın verisi (404'te "404" sayfası) */
function rc_sayfa() {
	static $s = null;
	if ($s !== null) return $s;
	$p = is_404() ? get_page_by_path(RC_404_AD) : get_queried_object();
	if (!($p instanceof WP_Post)) $p = null;
	$m = fn($k) => $p ? get_post_meta($p->ID, $k, true) : '';
	$js = array_values(array_filter((array) ($m('_rc_js') ?: []), fn($j) => is_string($j) && preg_match('/^[a-z0-9-]+\.js$/', $j)));
	$s = [
		'post'     => $p,
		'yol'      => rc_yol(),
		'baslik'   => (string) ($m('_rc_baslik') ?: ($p ? $p->post_title : get_bloginfo('name'))),
		'aciklama' => (string) ($m('_rc_aciklama') ?: ($p ? wp_strip_all_tags($p->post_excerpt) : get_bloginfo('description'))),
		'tip'      => $m('_rc_tip') === 'tibbi' ? 'tibbi' : 'bilgi',
		'noindex'  => (bool) $m('_rc_noindex'),
		'js'       => $js,
	];
	return $s;
}

/* Yoast SEO etkin mi — etkinse başlık, açıklama, canonical, robots, og ve WebPage şeması Yoast'ındır */
function rc_yoast() {
	return defined('WPSEO_VERSION');
}

/* sekme simgesi: panelden (Görünüm › Özelleştir › Site simgesi) yüklendiyse WordPress'inki, yoksa temanın CR amblemi */
function rc_ikon_etiketleri() {
	if (has_site_icon()) {
		ob_start();
		wp_site_icon();
		return ob_get_clean();
	}
	$i = rc_kok() . 'varliklar/ikon/';
	return '<link rel="icon" href="' . $i . 'favicon.ico" sizes="16x16 32x32 48x48">
<link rel="icon" href="' . $i . 'ikon-192.png" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="' . $i . 'apple-touch-icon.png">
';
}

/* yazı tipi ön yüklemesi, simge, stiller — her iki durumda da tema basar */
function rc_varlik_etiketleri() {
	$r = rc_kok();
	/* rc-js: görünme animasyonlarının gizlemesi yalnız JS varken; g.js 3,5 sn'de çalışmazsa sınıf kalkar, içerik görünür (4 Eki) */
	return '<script>document.documentElement.classList.add(\'rc-js\');setTimeout(function(){var d=document,w=window;if(!w.rcHazir||(d.querySelector(\'[data-reveal]\')&&!w.rcAnaHazir)||(d.querySelector(\'.pus-kart\')&&!w.rcKesifHazir))d.documentElement.classList.remove(\'rc-js\')},3500)</script>
<link rel="preload" as="font" type="font/woff2" href="' . $r . 'varliklar/fonts/outfit-var-lat.woff2" crossorigin>
' . rc_ikon_etiketleri() . '<link rel="preload" as="font" type="font/woff2" href="' . $r . 'varliklar/fonts/mulish-400-lat.woff2" crossorigin>
<link rel="stylesheet" href="' . rc_varlik('varliklar/css/tokens.css') . '">
<link rel="stylesheet" href="' . rc_varlik('varliklar/css/site.css') . '">
<link rel="stylesheet" href="' . rc_varlik('varliklar/css/g.css') . '">
<link rel="stylesheet" href="' . rc_varlik('varliklar/css/asistan.css') . '">
';
}

function rc_head(array $s) {
	if (rc_yoast()) {
		/* Yoast etkin: <title> (title-tag desteğiyle), açıklama, canonical, robots, og ve sayfa şeması Yoast'tan gelir
		   (tıbbi sayfada tür ve hekim onayı aşağıdaki süzgeçle eklenir). Tema yalnız Yoast'ın üretmediklerini basar. */
		return '<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#FAF7F1">
' . rc_varlik_etiketleri() . rc_sss_sema($s['post'] ? $s['post']->post_content : '');
	}
	$S = rc();
	$r = rc_kok();
	$url = rc_alan() . '/' . ($s['yol'] !== '' ? $s['yol'] . '/' : '');
	$ld = [
		'@context'    => 'https://schema.org',
		'@type'       => $s['tip'] === 'tibbi' ? 'MedicalWebPage' : 'WebPage',
		'name'        => $s['baslik'],
		'description' => $s['aciklama'],
		'url'         => $url,
		'inLanguage'  => 'tr-TR',
		'isPartOf'    => ['@type' => 'WebSite', 'name' => $S['marka'], 'url' => rc_alan()],
	];
	if ($s['tip'] === 'tibbi') {
		$ld['reviewedBy'] = ['@type' => 'Physician', 'name' => $S['hekim']['tam'], 'medicalSpecialty' => 'PrimaryCare'];
		$ld['lastReviewed'] = $S['sonInceleme'];
	}
	$robots = $s['noindex'] ? '<meta name="robots" content="noindex,follow">' . "\n"
		: (!get_option('blog_public') ? '<meta name="robots" content="noindex,nofollow">' . "\n" : '');
	$b = rc_kacir($s['baslik']);
	$a = rc_kacir($s['aciklama']);
	return '<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>' . $b . ($s['yol'] !== '' ? ' | ' . $S['marka'] : '') . '</title>
<meta name="description" content="' . $a . '">
<link rel="canonical" href="' . $url . '">
' . $robots . '<meta name="theme-color" content="#FAF7F1">
<meta property="og:type" content="website">
<meta property="og:locale" content="tr_TR">
<meta property="og:site_name" content="' . $S['marka'] . '">
<meta property="og:title" content="' . $b . '">
<meta property="og:description" content="' . $a . '">
<meta property="og:url" content="' . $url . '">
' . rc_varlik_etiketleri() . '<script type="application/ld+json">' . wp_json_encode($ld, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . '</script>
' . rc_sss_sema($s['post'] ? $s['post']->post_content : '');
}

/* Yoast şeması: tıbbi sayfada WebPage → MedicalWebPage + hekim onayı (Yoast'ın bilmediği; statik sürümdeki alanlar) */
add_filter('wpseo_schema_webpage', function ($d) {
	$s = rc_sayfa();
	if ($s['tip'] !== 'tibbi' || !is_array($d)) return $d;
	$S = rc();
	$d['@type'] = ['WebPage', 'MedicalWebPage'];
	$d['reviewedBy'] = ['@type' => 'Physician', 'name' => $S['hekim']['tam'], 'medicalSpecialty' => 'PrimaryCare'];
	$d['lastReviewed'] = $S['sonInceleme'];
	return $d;
});

/* SSS şeması (FAQPage): soru terminalindeki <button class="g-ssoru">Soru</button> + <div class="g-syanit">Cevap</div>
   çiftlerinden — panelde bir cevap değişince şema da kendiliğinden değişir. site/render.js sssSema() ile AYNI kural. */
function rc_sss_metin($h) {
	$ad = ['amp' => '&', 'lt' => '<', 'gt' => '>', 'quot' => '"', 'apos' => "'", 'nbsp' => ' ', 'rsquo' => '’', 'lsquo' => '‘',
		'rdquo' => '”', 'ldquo' => '“', 'hellip' => '…', 'ndash' => '–', 'mdash' => '—'];
	$h = preg_replace('~<[^>]+>~', '', str_replace('<i>›</i>', '', (string) $h));
	$h = preg_replace_callback('~&#x([0-9a-f]+);~i', fn($m) => mb_chr(hexdec($m[1]), 'UTF-8'), $h);
	$h = preg_replace_callback('~&#(\d+);~', fn($m) => mb_chr((int) $m[1], 'UTF-8'), $h);
	$h = preg_replace_callback('~&([a-z]+);~i', fn($m) => $ad[$m[1]] ?? $m[0], $h);
	return trim(preg_replace('~[ \t\r\n\f\v]+~', ' ', str_replace("\u{00A0}", ' ', $h)));
}
function rc_sss_sema($html) {
	if (!preg_match_all('~<button class="g-ssoru"[^>]*>([\s\S]*?)</button>\s*<div class="g-syanit"[^>]*>([\s\S]*?)</div>~u', (string) $html, $m, PREG_SET_ORDER)) return '';
	$sorular = [];
	foreach ($m as $c) {
		$q = rc_sss_metin($c[1]);
		$a = rc_sss_metin($c[2]);
		if ($q !== '' && $a !== '') $sorular[] = ['@type' => 'Question', 'name' => $q, 'acceptedAnswer' => ['@type' => 'Answer', 'text' => $a]];
	}
	if (!$sorular) return '';
	return '<script type="application/ld+json">' . wp_json_encode(['@context' => 'https://schema.org', '@type' => 'FAQPage', 'mainEntity' => $sorular],
		JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_LINE_TERMINATORS) . "</script>\n";
}

/* sayfa sonundaki betikler (render.js ile aynı sıra) */
function rc_betikler(array $s) {
	$o = '<script src="' . rc_varlik('varliklar/js/site.js') . '" defer></script>
<script src="' . rc_varlik('varliklar/js/g.js') . '" defer></script>
<script src="' . rc_varlik('varliklar/js/asistan-dizin.js') . '" defer></script>
<script src="' . rc_varlik('varliklar/js/asistan.js') . '" defer></script>
';
	foreach ($s['js'] as $j) $o .= "\n" . '<script src="' . rc_varlik('varliklar/js/' . $j) . '" defer></script>';
	return $o;
}
