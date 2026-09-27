<?php
/* Sayfa: gövde Klasik Editör'deki HTML'dir (wpautop kapalı — inc/temizlik.php) */
defined('ABSPATH') || exit;
get_header();
while (have_posts()) {
	the_post();
	the_content();
}
get_footer();
