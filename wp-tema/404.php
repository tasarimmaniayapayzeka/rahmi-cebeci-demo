<?php
/* Bulunamayan adres: içerik "404" sayfasından gelir (Klasik Editör'de düzenlenir), durum kodu 404 kalır */
defined('ABSPATH') || exit;
get_header();
$rc_404 = get_page_by_path(RC_404_AD);
if ($rc_404) echo apply_filters('the_content', $rc_404->post_content);
get_footer();
