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

if (defined('WP_CLI') && WP_CLI) {
	WP_CLI::add_command('rc aktar', function ($args, $assoc) {
		$r = rc_aktar(['ustune_yaz' => isset($assoc['ustune-yaz'])]);
		WP_CLI::log(sprintf('yeni %d · güncellenen %d · aynı %d · elle düzenlenmiş (atlandı) %d · kayıtta değişen %d · hata %d',
			count($r['yeni'] ?? []), count($r['guncellenen'] ?? []), $r['ayni'] ?? 0, count($r['elle'] ?? []), count($r['fark'] ?? []), count($r['hata'] ?? [])));
		foreach (['elle', 'fark', 'hata'] as $k) if (!empty($r[$k])) WP_CLI::log("$k: " . implode(', ', $r[$k]));
	});
}
