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

function rc_head(array $s) {
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
<link rel="preload" as="font" type="font/woff2" href="' . $r . 'varliklar/fonts/outfit-var-lat.woff2" crossorigin>
<link rel="icon" href="' . $r . 'varliklar/favicon.svg" type="image/svg+xml">
<link rel="preload" as="font" type="font/woff2" href="' . $r . 'varliklar/fonts/mulish-400-lat.woff2" crossorigin>
<link rel="stylesheet" href="' . rc_varlik('varliklar/css/tokens.css') . '">
<link rel="stylesheet" href="' . rc_varlik('varliklar/css/site.css') . '">
<link rel="stylesheet" href="' . rc_varlik('varliklar/css/g.css') . '">
<link rel="stylesheet" href="' . rc_varlik('varliklar/css/asistan.css') . '">
<script type="application/ld+json">' . wp_json_encode($ld, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . '</script>
';
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
