<?php
/* WordPress'in varsayılan olarak <head>'e, gövdeye ve içeriğe eklediklerini kapatır.
   Amaç: çıktı statik sürümle aynı kalsın (fazladan stil, emoji betiği, çift canonical, metin dönüşümü yok). */
defined('ABSPATH') || exit;

/* <head> */
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('admin_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_shortlink_wp_head', 10);
remove_action('wp_head', 'rest_output_link_wp_head', 10);
remove_action('wp_head', 'wp_oembed_add_discovery_links');
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'rel_canonical');                 /* canonical tema basar (seo.php) */
remove_action('wp_head', 'wp_robots', 1);                  /* robots tema basar */
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10);
remove_action('wp_head', 'wp_resource_hints', 2);
remove_action('wp_head', 'wp_site_icon', 99);              /* favicon tema basar */
remove_action('template_redirect', 'wp_shortlink_header', 11);
remove_action('template_redirect', 'rest_output_link_header', 11);
remove_action('wp_head', 'wp_print_auto_sizes_contain_css_fix', 1);
add_filter('wp_img_tag_add_auto_sizes', '__return_false');
add_filter('wp_speculation_rules_configuration', '__return_null');
add_filter('show_recent_comments_widget_style', '__return_false');

/* blok düzenleyicinin ön yüz stilleri (Klasik Editör kullanılıyor) */
remove_action('wp_enqueue_scripts', 'wp_enqueue_global_styles');
remove_action('wp_footer', 'wp_enqueue_global_styles', 1);
remove_action('wp_body_open', 'wp_global_styles_render_svg_filters');
remove_action('wp_enqueue_scripts', 'wp_enqueue_classic_theme_styles');
add_action('wp_enqueue_scripts', function () {
	foreach (['wp-block-library', 'wp-block-library-theme', 'classic-theme-styles', 'global-styles', 'core-block-supports'] as $s) {
		wp_dequeue_style($s);
		wp_deregister_style($s);
	}
}, 100);
add_filter('should_load_separate_core_block_assets', '__return_false');

/* içerik: editörde kaydedilen HTML sayfada birebir görünür (paragraf ekleme, tırnak/tire dönüşümü, emoji yok) */
foreach (['the_content', 'the_excerpt'] as $f) {
	remove_filter($f, 'wpautop');
	remove_filter($f, 'wptexturize');
	remove_filter($f, 'convert_smilies', 20);
	remove_filter($f, 'convert_chars');
	remove_filter($f, 'capital_P_dangit', 11);
	/* wp_filter_content_tags KALIR: yalnız ortam kütüphanesi resimlerine srcset ekler (editor.php'deki süzgeçlerle
	   tembel yükleme/boyut eklemesi kapalı → mevcut /varliklar/ resimleri değişmez) */
	remove_filter($f, 'wp_replace_insecure_home_url');
}
remove_filter('the_title', 'wptexturize');
remove_filter('the_title', 'convert_chars');
add_filter('run_wptexturize', '__return_false');

/* yorum, geri izleme, XML-RPC kapalı (muayenehane sitesinde yorum yok) */
add_filter('xmlrpc_enabled', '__return_false');
add_filter('pings_open', '__return_false');
add_filter('comments_open', '__return_false');
