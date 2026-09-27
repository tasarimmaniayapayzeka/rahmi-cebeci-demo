<?php
/* Yedek şablon (sayfa dışı istekler) — sayfalar page.php ile, bulunamayan adresler 404.php ile çizilir */
defined('ABSPATH') || exit;
get_header();
while (have_posts()) {
	the_post();
	the_content();
}
get_footer();
