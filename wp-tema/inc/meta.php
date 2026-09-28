<?php
/* Sayfa ayarları kutusu — her sayfanın arama motoru bilgisi ve görünüm seçenekleri.
   (Yoast kurulunca başlık/açıklama ona taşınır; tür, noindex ve betikler burada kalır.) */
defined('ABSPATH') || exit;

const RC_META = ['_rc_baslik', '_rc_aciklama', '_rc_tip', '_rc_noindex', '_rc_js'];

add_action('init', function () {
	$yetki = fn() => current_user_can('edit_pages');
	foreach (['_rc_baslik' => 'string', '_rc_aciklama' => 'string', '_rc_tip' => 'string', '_rc_noindex' => 'boolean'] as $k => $t) {
		register_post_meta('page', $k, ['type' => $t, 'single' => true, 'show_in_rest' => true, 'auth_callback' => $yetki]);
	}
	register_post_meta('page', '_rc_js', ['type' => 'array', 'single' => true, 'auth_callback' => $yetki,
		'show_in_rest' => ['schema' => ['type' => 'array', 'items' => ['type' => 'string']]]]);
});

add_action('add_meta_boxes_page', function () {
	add_meta_box('rc-sayfa-ayar', 'Sayfa ayarları — arama motoru ve görünüm', 'rc_meta_kutu', 'page', 'normal', 'high');
});

function rc_meta_kutu($post) {
	wp_nonce_field('rc_meta_kaydet', 'rc_meta_nonce');
	$m = fn($k) => get_post_meta($post->ID, $k, true);
	$js = implode(', ', (array) ($m('_rc_js') ?: []));
	?>
	<style>
		.rc-meta p { margin: 0 0 14px; } .rc-meta label b { display: block; margin-bottom: 4px; }
		.rc-meta input[type=text], .rc-meta textarea { width: 100%; } .rc-meta small { color: #646970; }
	</style>
	<div class="rc-meta">
		<?php if (defined('WPSEO_VERSION')) : ?>
		<p><small><b>Arama motoru başlığı, açıklaması ve odak anahtar kelimesi Yoast SEO kutusunda</b> (bu sayfanın altında).
			Açıklamalar 147 karakter olarak yazıldı.</small></p>
		<input type="hidden" name="rc_baslik" value="<?php echo esc_attr($m('_rc_baslik')); ?>">
		<input type="hidden" name="rc_aciklama" value="<?php echo esc_attr($m('_rc_aciklama')); ?>">
		<?php else : ?>
		<p><label><b>Arama motoru başlığı</b>
			<input type="text" name="rc_baslik" maxlength="120" value="<?php echo esc_attr($m('_rc_baslik')); ?>"></label>
			<small>Google'da ve tarayıcı sekmesinde görünen başlık. Boş kalırsa sayfa adı kullanılır. Sonuna "| <?php echo esc_html(rc('marka')); ?>" kendiliğinden eklenir.</small></p>
		<p><label><b>Arama motoru açıklaması</b>
			<textarea name="rc_aciklama" rows="3" maxlength="320"><?php echo esc_textarea($m('_rc_aciklama')); ?></textarea></label>
			<small>Google sonuçlarında başlığın altındaki 1–2 cümle (150–160 karakter iyidir).</small></p>
		<?php endif; ?>
		<p><label><b>Sayfa türü</b>
			<select name="rc_tip">
				<option value="bilgi" <?php selected($m('_rc_tip'), 'bilgi'); ?>>Genel bilgi sayfası</option>
				<option value="tibbi" <?php selected($m('_rc_tip'), 'tibbi'); ?>>Tıbbi içerik (sonuna hekim künyesi eklenir)</option>
			</select></label></p>
		<p><label><input type="checkbox" name="rc_noindex" value="1" <?php checked((bool) $m('_rc_noindex')); ?>>
			Bu sayfayı arama motorlarında gösterme</label></p>
		<?php if (current_user_can('manage_options')) : ?>
		<p><label><b>Sayfaya özel betikler</b>
			<input type="text" name="rc_js" value="<?php echo esc_attr($js); ?>" placeholder="ör. kesif.js"></label>
			<small>Etkileşimli bölümlerin çalışması için gereken dosyalar (/varliklar/js/). Bilmiyorsanız değiştirmeyin.</small></p>
		<?php endif; ?>
	</div>
	<?php
}

add_action('save_post_page', function ($id) {
	if (!isset($_POST['rc_meta_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['rc_meta_nonce'])), 'rc_meta_kaydet')) return;
	if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
	if (!current_user_can('edit_page', $id)) return;
	$al = fn($k) => isset($_POST[$k]) ? wp_unslash($_POST[$k]) : '';
	update_post_meta($id, '_rc_baslik', sanitize_text_field($al('rc_baslik')));
	update_post_meta($id, '_rc_aciklama', sanitize_textarea_field($al('rc_aciklama')));
	update_post_meta($id, '_rc_tip', $al('rc_tip') === 'tibbi' ? 'tibbi' : 'bilgi');
	update_post_meta($id, '_rc_noindex', $al('rc_noindex') === '1' ? 1 : 0);
	if (current_user_can('manage_options') && isset($_POST['rc_js'])) {
		$js = array_values(array_filter(array_map('trim', explode(',', (string) $al('rc_js'))), fn($j) => preg_match('/^[a-z0-9-]+\.js$/', $j)));
		update_post_meta($id, '_rc_js', $js);
	}
});
