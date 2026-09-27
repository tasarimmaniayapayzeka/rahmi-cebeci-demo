<?php
/* ============================================================
   KLASİK EDİTÖR
   Sayfalar tasarım işaretlemesi taşır: SVG ikonlar, data-* öznitelikleri, boş süs öğeleri,
   bileşenlerin JSON veri blokları. Görsel sekmede açılıp kaydedildiğinde hiçbiri silinmemeli,
   metin ve resimler ise görsel sekmeden değiştirilebilmeli.
   Sunucuda ayrıca "Classic Editor" eklentisi kurulur; buradaki satırlar onsuz da blok düzenleyiciyi kapatır.
   ============================================================ */
defined('ABSPATH') || exit;

add_filter('use_block_editor_for_post', '__return_false', 100);
add_filter('use_block_editor_for_post_type', '__return_false', 100);
add_filter('use_widgets_block_editor', '__return_false');

add_filter('tiny_mce_before_init', function ($in) {
	$in['wpautop'] = false;                 /* <p> eklenmez/silinmez: kaydedilen HTML = görünen HTML */
	$in['verify_html'] = false;             /* öğe/öznitelik temizliği yok (SVG, data-*, aria-*, boş <i>) */
	$in['valid_elements'] = '*[*]';
	$in['extended_valid_elements'] = '*[*]';
	$in['valid_children'] = '+body[style|script|svg|section|header|footer|nav|aside|article|figure|details|form],'
		. '+a[div|p|h2|h3|h4|span|svg|img|ul|ol|li|b|section|figure|article],+button[svg|span|b|i|div|img],'
		. '+div[svg|script|section|details|form],+span[svg|div|b|img],+li[svg|div|a|details],+p[svg],'
		. '+label[svg|input|span|div],+summary[svg|span|b|i],+figure[svg|div]';
	$in['element_format'] = 'html';         /* xhtml olsaydı <script> içi CDATA ile sarılır → JSON veri blokları bozulurdu */
	$in['forced_root_block'] = false;       /* üst düzeydeki bölümleri <p> içine almaz */
	$in['remove_trailing_brs'] = false;
	$in['keep_styles'] = true;
	$in['allow_unsafe_link_target'] = true; /* target="_blank" bağlantılara kendiliğinden rel eklemesin */
	$in['allow_html_in_named_anchor'] = true;
	$in['convert_urls'] = false;
	$in['relative_urls'] = false;
	$in['remove_script_host'] = false;
	$in['entity_encoding'] = 'raw';
	$in['indent'] = false;
	$in['fix_list_elements'] = false;
	/* editör içinde sitenin görünümü: gövde sınıfı + site stilleri (add_editor_style) */
	$in['body_class'] = ($in['body_class'] ?? '') . ' rc-editor';
	return $in;
});

/* editör, sitenin kendi stilleriyle açılır — yazı nasıl görünecekse öyle görünür */
add_action('admin_init', function () {
	add_editor_style([
		rc_varlik('varliklar/css/tokens.css'),
		rc_varlik('varliklar/css/site.css'),
		rc_varlik('varliklar/css/g.css'),
		get_theme_file_uri('editor.css'),
	]);
});

/* TinyMCE eklentisi: tablo satırlarının küçük resmi (data-gg) ortam kütüphanesinden değiştirilir;
   görsel sekmede bu resimler de önizlenir */
add_filter('mce_external_plugins', function ($p) {
	$p['rcgorsel'] = get_theme_file_uri('editor.js') . '?s=' . substr((string) md5_file(get_theme_file_path('editor.js')), 0, 8);
	return $p;
});
add_filter('mce_buttons', function ($b) {
	$b[] = 'rcgorsel';
	return $b;
});
add_action('admin_enqueue_scripts', function ($sayfa) {
	if (in_array($sayfa, ['post.php', 'post-new.php'], true)) wp_enqueue_media();
});

/* ortam kütüphanesinden eklenen resimler: WordPress yalnız KENDİ resimlerine srcset ekler;
   sitenin mevcut /varliklar/ resimlerine dokunmaz (tembel yükleme/boyut eklemesi kapalı → görünüm aynı kalır) */
add_filter('wp_img_tag_add_loading_attr', '__return_false');
add_filter('wp_img_tag_add_loading_optimization_attrs', '__return_false');
add_filter('wp_img_tag_add_decoding_attr', '__return_false');
add_filter('wp_img_tag_add_width_and_height_attr', '__return_false');
add_filter('wp_lazy_loading_enabled', '__return_false');
add_filter('wp_get_loading_optimization_attributes', fn() => [], 10, 0);   /* ilk resme fetchpriority eklemesin */

/* oturum açıkken üstteki yönetim çubuğu yapışkan başlığı örtmesin (ziyaretçi görmez) */
add_action('wp_head', function () {
	if (!is_admin_bar_showing()) return;
	echo "<style>.ust{top:32px}@media (max-width:782px){.ust{top:46px}}@media (max-width:600px){.ust{top:0}}</style>\n";
}, 99);
