<?php
/* ============================================================
   Dr. Rahmi Cebeci — WordPress teması (34-Rahmi-Cebeci)
   Görünüm statik sürümle (site/render.js) birebir aynıdır: başlık, menü, altbilgi ve
   künye aynı HTML'i üretir; sayfa gövdesi Klasik Editör'de düz HTML olarak durur.
   Stil/betik/görseller sitenin kökündeki /varliklar/ klasöründedir (git ile gelir).
   ============================================================ */
defined('ABSPATH') || exit;
define('RC_TEMA', __DIR__);
defined('RC_404_AD') || define('RC_404_AD', 'sayfa-bulunamadi');   /* 404 içeriğinin gizli sayfası (wp-mu/rc-aktar.php) */

/* site bilgisi, menü, altbilgi, ikonlar — site/wp-aktar.js üretir (elle düzenleme) */
function rc($anahtar = null) {
	static $v = null;
	if ($v === null) $v = rc_ayar_uygula(json_decode((string) file_get_contents(RC_TEMA . '/inc/veri.json'), true) ?: []);
	return $anahtar === null ? $v : ($v[$anahtar] ?? null);
}

require RC_TEMA . '/inc/ayarlar.php';    /* "Site bilgileri" ekranı: telefon, adres, hekim künyesi… (panelde kaydedilen veri.json'u ezer) */
require RC_TEMA . '/inc/temizlik.php';   /* WordPress'in başlığa/gövdeye eklediklerini kapatır */
require RC_TEMA . '/inc/editor.php';     /* Klasik Editör + TinyMCE: işaretleme korunur */
require RC_TEMA . '/inc/meta.php';       /* sayfa ayarları kutusu: SEO başlığı, açıklama, tür, noindex, betikler */
require RC_TEMA . '/inc/sablon.php';     /* başlık, menü, altbilgi, künye */
require RC_TEMA . '/inc/seo.php';        /* <head>: title, meta, canonical, og, JSON-LD */

add_action('after_setup_theme', function () {
	add_theme_support('html5', ['search-form', 'gallery', 'caption', 'style', 'script']);
	add_post_type_support('page', 'excerpt');
});
