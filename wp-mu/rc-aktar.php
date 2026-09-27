<?php
/**
 * Plugin Name: Dr. Rahmi Cebeci — içerik aktarıcı
 * Description: site/wp-aktar.js'in ürettiği rc-icerik.json'daki sayfaları WordPress'e aktarır. Elle düzenlenmiş sayfaların üzerine yazmaz.
 *
 * Yerel: php wp-cli.phar --path=wordpress rc aktar [--ustune-yaz]
 * Sunucu: tek seferlik tetik (sabah kurulumda eklenecek).
 * Bir sayfa elle düzenlendiyse (içeriği son aktarımdakinden farklıysa) atlanır ve raporda "elle" listesinde görünür.
 */
defined('ABSPATH') || exit;

/* WordPress sayı olan sayfa adını (404) sayfalamayla çakıştığı için kabul etmez → 404 içeriği bu gizli sayfada durur */
const RC_404_AD = 'sayfa-bulunamadi';

function rc_aktar(array $o = []) {
	$ustune = !empty($o['ustune_yaz']);
	$v = json_decode((string) file_get_contents(__DIR__ . '/rc-icerik.json'), true);
	if (!$v || empty($v['sayfalar'])) return ['hata' => ['rc-icerik.json okunamadı']];

	kses_remove_filters();   /* SVG, data-*, JSON veri blokları kırpılmasın (oturumsuz komut satırında kses açık olurdu) */
	$r = ['yeni' => [], 'guncellenen' => [], 'ayni' => 0, 'elle' => [], 'fark' => [], 'hata' => []];

	/* sayfası olmayan ara klasörler: taslak ebeveyn (adres üretmez, alt sayfaların yolu doğru olur) */
	foreach ($v['eksikEbeveyn'] as $e) {
		if (get_page_by_path($e, OBJECT, 'page')) continue;
		wp_insert_post(['post_type' => 'page', 'post_status' => 'draft', 'post_title' => mb_convert_case($e, MB_CASE_TITLE) . ' (üst klasör)',
			'post_name' => basename($e), 'post_content' => '', 'comment_status' => 'closed', 'ping_status' => 'closed']);
	}

	foreach ($v['sayfalar'] as $s) {
		$ad = $s['yol'] === '' ? 'anasayfa' : ($s['yol'] === '404' ? RC_404_AD : $s['ad']);
		$yol = $s['ebeveyn'] !== '' ? $s['ebeveyn'] . '/' . $ad : $ad;
		$ebeveyn = 0;
		if ($s['ebeveyn'] !== '') {
			$pp = get_page_by_path($s['ebeveyn'], OBJECT, 'page');
			if (!$pp) { $r['hata'][] = "$yol: ebeveyn yok ({$s['ebeveyn']})"; continue; }
			$ebeveyn = $pp->ID;
		}
		$veri = [
			'post_type' => 'page', 'post_status' => $s['yol'] === '404' ? 'private' : 'publish',
			'post_title' => $s['baslik'], 'post_name' => $ad, 'post_parent' => $ebeveyn,
			'post_content' => $s['icerik'], 'post_excerpt' => $s['aciklama'], 'menu_order' => (int) $s['sira'],
			'comment_status' => 'closed', 'ping_status' => 'closed',
		];
		$var = get_page_by_path($yol, OBJECT, 'page');
		if ($var) {
			$son = get_post_meta($var->ID, '_rc_aktarim_ozet', true);
			$simdi = md5($var->post_content);
			if ($simdi === md5($s['icerik'])) {
				$r['ayni']++;
				$id = $var->ID;
			} elseif (!$ustune && $son && $simdi !== $son) {
				$r['elle'][] = $yol;   /* panelde düzenlenmiş — dokunma */
				continue;
			} else {
				$veri['ID'] = $var->ID;
				$id = wp_update_post(wp_slash($veri), true);
				$r['guncellenen'][] = $yol;
			}
		} else {
			$id = wp_insert_post(wp_slash($veri), true);
			$r['yeni'][] = $yol;
		}
		if (is_wp_error($id)) { $r['hata'][] = "$yol: " . $id->get_error_message(); continue; }

		update_post_meta($id, '_rc_baslik', $s['baslik']);
		update_post_meta($id, '_rc_aciklama', $s['aciklama']);
		update_post_meta($id, '_rc_tip', $s['tip'] === 'tibbi' ? 'tibbi' : 'bilgi');
		update_post_meta($id, '_rc_noindex', $s['noindex'] ? 1 : 0);
		update_post_meta($id, '_rc_js', array_values($s['js']));
		/* kaydedilen içerik kaynağın birebir aynısı mı (WordPress kayıtta bir şey değiştirdiyse raporla) */
		$kayitli = get_post_field('post_content', $id, 'raw');
		if ($kayitli !== $s['icerik']) $r['fark'][] = $yol;
		update_post_meta($id, '_rc_aktarim_ozet', md5($kayitli));
	}

	$on = get_page_by_path('anasayfa', OBJECT, 'page');
	if ($on) { update_option('show_on_front', 'page'); update_option('page_on_front', $on->ID); }
	kses_init();
	return $r;
}

/* ---------- İLK KURULUM (sunucuda komut satırı yok): Araçlar › Site içeriği ----------
   Tek düğme: temayı etkinleştirir, kalıcı bağlantıları /%postname%/ yapar, WordPress'in örnek içeriğini
   siler, 66 sayfayı aktarır (elle düzenlenmiş sayfalara dokunmaz), ana sayfayı ayarlar. Tekrar basmak güvenlidir. */
function rc_ilk_kurulum(bool $ustune) {
	$r = ['adimlar' => []];
	if (get_stylesheet() !== 'rahmi-cebeci' && wp_get_theme('rahmi-cebeci')->exists()) {
		switch_theme('rahmi-cebeci');
		$r['adimlar'][] = 'Tema etkinleştirildi: Dr. Rahmi Cebeci';
	}
	if (get_option('permalink_structure') !== '/%postname%/') {
		global $wp_rewrite;
		$wp_rewrite->set_permalink_structure('/%postname%/');
		$r['adimlar'][] = 'Kalıcı bağlantılar: /%postname%/';
	}
	/* WordPress'in kurulumda eklediği örnek yazı/sayfa (başka içerik silinmez) */
	foreach ([['post', 'hello-world'], ['post', 'merhaba-dunya'], ['page', 'sample-page'], ['page', 'ornek-sayfa']] as [$tur, $ad]) {
		$p = get_page_by_path($ad, OBJECT, $tur);
		if ($p && (int) $p->post_author === 1 && strtotime($p->post_modified_gmt) - strtotime($p->post_date_gmt) < 60) {
			wp_delete_post($p->ID, true);
			$r['adimlar'][] = "Örnek içerik silindi: $ad";
		}
	}
	$r['aktarim'] = rc_aktar(['ustune_yaz' => $ustune]);
	flush_rewrite_rules(true);
	return $r;
}

add_action('admin_menu', function () {
	add_management_page('Site içeriği', 'Site içeriği', 'manage_options', 'rc-site-icerigi', 'rc_ilk_kurulum_ekrani');
});

function rc_ilk_kurulum_ekrani() {
	if (!current_user_can('manage_options')) return;
	$sonuc = null;
	if (isset($_POST['rc_kur'])) {
		check_admin_referer('rc_ilk_kurulum');
		$sonuc = rc_ilk_kurulum(!empty($_POST['rc_ustune']));
	}
	$v = json_decode((string) file_get_contents(__DIR__ . '/rc-icerik.json'), true);
	$toplam = count($v['sayfalar'] ?? []);
	$var = 0;
	foreach ($v['sayfalar'] ?? [] as $s) {
		$ad = $s['yol'] === '' ? 'anasayfa' : ($s['yol'] === '404' ? RC_404_AD : $s['ad']);
		if (get_page_by_path($s['ebeveyn'] !== '' ? $s['ebeveyn'] . '/' . $ad : $ad, OBJECT, 'page')) $var++;
	}
	?>
	<div class="wrap">
		<h1>Site içeriği</h1>
		<p>Sitenin <?php echo (int) $toplam; ?> sayfası bu paketle gelir (üretim: <?php echo esc_html(substr((string) ($v['uretim'] ?? ''), 0, 16)); ?>). Şu an WordPress'te bulunan: <b><?php echo (int) $var; ?></b>.</p>
		<p>Tema: <b><?php echo esc_html(wp_get_theme()->get('Name')); ?></b> · Kalıcı bağlantılar: <code><?php echo esc_html(get_option('permalink_structure') ?: 'düz'); ?></code> ·
			Arama motorları: <b><?php echo get_option('blog_public') ? 'AÇIK' : 'kapalı (noindex)'; ?></b></p>
		<?php if ($sonuc) : $a = $sonuc['aktarim']; ?>
			<div class="notice notice-success"><p><b>Tamam.</b> <?php echo esc_html(implode(' · ', $sonuc['adimlar'])); ?></p>
				<p>Yeni <?php echo count($a['yeni'] ?? []); ?> · güncellenen <?php echo count($a['guncellenen'] ?? []); ?> · aynı <?php echo (int) ($a['ayni'] ?? 0); ?>
				· panelde düzenlendiği için atlanan <?php echo count($a['elle'] ?? []); ?> · hata <?php echo count($a['hata'] ?? []); ?></p>
				<?php foreach (['elle' => 'Atlanan (elle düzenlenmiş)', 'fark' => 'Kayıtta değişen', 'hata' => 'Hata'] as $k => $e) if (!empty($a[$k])) echo '<p>' . esc_html($e . ': ' . implode(', ', $a[$k])) . '</p>'; ?>
			</div>
		<?php endif; ?>
		<form method="post">
			<?php wp_nonce_field('rc_ilk_kurulum'); ?>
			<p><label><input type="checkbox" name="rc_ustune" value="1"> Panelde düzenlenmiş sayfaların da üzerine yaz <em>(yalnız ilk kurulumda gerekirse; düzenlemeler kaybolur)</em></label></p>
			<?php submit_button('Kur ve içeriği aktar', 'primary', 'rc_kur'); ?>
		</form>
	</div>
	<?php
}

if (defined('WP_CLI') && WP_CLI) {
	WP_CLI::add_command('rc aktar', function ($args, $assoc) {
		$r = rc_aktar(['ustune_yaz' => isset($assoc['ustune-yaz'])]);
		WP_CLI::log(sprintf('yeni %d · güncellenen %d · aynı %d · elle düzenlenmiş (atlandı) %d · kayıtta değişen %d · hata %d',
			count($r['yeni'] ?? []), count($r['guncellenen'] ?? []), $r['ayni'] ?? 0, count($r['elle'] ?? []), count($r['fark'] ?? []), count($r['hata'] ?? [])));
		foreach (['elle', 'fark', 'hata'] as $k) if (!empty($r[$k])) WP_CLI::log("$k: " . implode(', ', $r[$k]));
	});
}
