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

/* sayfa ayarları + Yoast alanlarının özeti (panelde elle değiştirilmiş mi anlamak için) */
function rc_meta_ozeti($id) {
	$m = fn($k) => get_post_meta($id, $k, true);
	return md5((string) wp_json_encode([$m('_rc_baslik'), $m('_rc_aciklama'), $m('_rc_tip'), (int) $m('_rc_noindex'),
		array_values((array) ($m('_rc_js') ?: [])), $m('_yoast_wpseo_focuskw'), $m('_yoast_wpseo_metadesc'), $m('_yoast_wpseo_title'),
		$m('_yoast_wpseo_meta-robots-noindex')]));
}

function rc_aktar(array $o = []) {
	$ustune = !empty($o['ustune_yaz']);
	$v = json_decode((string) file_get_contents(__DIR__ . '/rc-icerik.json'), true);
	if (!$v || empty($v['sayfalar'])) return ['hata' => ['rc-icerik.json okunamadı']];

	kses_remove_filters();   /* SVG, data-*, JSON veri blokları kırpılmasın (oturumsuz komut satırında kses açık olurdu) */
	$r = ['yeni' => [], 'guncellenen' => [], 'ayni' => 0, 'elle' => [], 'fark' => [], 'hata' => [], 'meta_elle' => [], 'meta_yazilan' => [],
		'elle_gorsel' => [], 'kapak' => 0];

	/* önce görseller (rc-medya.php): hepsi Ortam kütüphanesine girmeden sayfalara geçilmez — yarım adresli sayfa olmasın.
	   medya_sinir: bir çağrıda en çok kaç yeni görsel (sunucuda zaman aşımı olmasın); kalan varsa tekrar çağrılır. */
	$adres = [];
	if (!empty($v['medya']) && function_exists('rc_medya_aktar')) {
		$r['medya'] = rc_medya_aktar($v['medya'], (int) ($o['medya_sinir'] ?? 0));
		if ($r['medya']['kalan'] || $r['medya']['hata']) { kses_init(); return $r; }
		$adres = rc_medya_adresleri();
	}
	$tazele = [];
	/* öne çıkan görsel = sayfanın kapağı; panelde başka görsel seçildiyse dokunulmaz */
	$kapakYaz = function ($id, $s) use ($adres, $ustune, &$r, &$tazele) {
		if (($s['kapak'] ?? '') === '' || !isset($adres[$s['kapak']])) return;
		$kid = $adres[$s['kapak']][0];
		$simdiki = (int) get_post_meta($id, '_thumbnail_id', true);
		if ($simdiki && !$ustune && $simdiki !== (int) get_post_meta($id, '_rc_kapak_id', true)) return;
		if ($simdiki !== $kid) { set_post_thumbnail($id, $kid); $r['kapak']++; $tazele[] = $id; }
		update_post_meta($id, '_rc_kapak_id', $kid);
	};

	/* sayfası olmayan ara klasörler: taslak ebeveyn (adres üretmez, alt sayfaların yolu doğru olur) */
	foreach ($v['eksikEbeveyn'] as $e) {
		if (get_page_by_path($e, OBJECT, 'page')) continue;
		wp_insert_post(['post_type' => 'page', 'post_status' => 'draft', 'post_title' => mb_convert_case($e, MB_CASE_TITLE) . ' (üst klasör)',
			'post_name' => basename($e), 'post_content' => '', 'comment_status' => 'closed', 'ping_status' => 'closed']);
	}

	foreach ($v['sayfalar'] as $s) {
		if ($adres) $s['icerik'] = rc_medya_icerige($s['icerik'], $adres);
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
				/* panelde düzenlenmiş — metne dokunma; yalnız /varliklar/ görsel adresleri kütüphanedekine çevrilir
				   (aktarım özeti değişmez: sayfa "elle düzenlenmiş" kalır) */
				$r['elle'][] = $yol;
				if ($adres) {
					$yeniIcerik = rc_medya_icerige($var->post_content, $adres);
					if ($yeniIcerik !== $var->post_content) {
						wp_update_post(wp_slash(['ID' => $var->ID, 'post_content' => $yeniIcerik]));
						$r['elle_gorsel'][] = $yol;
					}
				}
				$kapakYaz($var->ID, $s);
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

		/* sayfa ayarları + Yoast alanları. Panelde (Yoast kutusu ya da Sayfa ayarları) değiştirildiyse dokunulmaz:
		   son aktarımdaki değerlerin özeti tutulur, şimdiki değerler ondan farklıysa atlanır ("meta_elle"). */
		$son = get_post_meta($id, '_rc_aktarim_meta_ozet', true);
		if (!$ustune && $son && $son !== rc_meta_ozeti($id)) {
			$r['meta_elle'][] = $yol;
		} else {
			update_post_meta($id, '_rc_baslik', $s['baslik']);
			update_post_meta($id, '_rc_aciklama', $s['aciklama']);
			update_post_meta($id, '_rc_tip', $s['tip'] === 'tibbi' ? 'tibbi' : 'bilgi');
			update_post_meta($id, '_rc_noindex', $s['noindex'] ? 1 : 0);
			update_post_meta($id, '_rc_js', array_values($s['js']));
			update_post_meta($id, '_yoast_wpseo_metadesc', $s['aciklama']);
			if (($s['odak'] ?? '') !== '') update_post_meta($id, '_yoast_wpseo_focuskw', $s['odak']);
			/* ana sayfa başlığı sonuna site adı eklenmez (statik sürümle aynı) */
			if ($s['yol'] === '') update_post_meta($id, '_yoast_wpseo_title', '%%title%%');
			if ($s['noindex']) update_post_meta($id, '_yoast_wpseo_meta-robots-noindex', '1');
			else delete_post_meta($id, '_yoast_wpseo_meta-robots-noindex');
			update_post_meta($id, '_rc_aktarim_meta_ozet', rc_meta_ozeti($id));
			$r['meta_yazilan'][] = $id;
		}
		$kapakYaz($id, $s);
		/* kaydedilen içerik kaynağın birebir aynısı mı (WordPress kayıtta bir şey değiştirdiyse raporla) */
		$kayitli = get_post_field('post_content', $id, 'raw');
		if ($kayitli !== $s['icerik']) $r['fark'][] = $yol;
		update_post_meta($id, '_rc_aktarim_ozet', md5($kayitli));
	}

	$on = get_page_by_path('anasayfa', OBJECT, 'page');
	if ($on) { update_option('show_on_front', 'page'); update_option('page_on_front', $on->ID); }
	/* Yoast ön yüzde meta alanlarını değil kendi dizinini (indexables) okur; dizin yazının kaydedilmesiyle tazelenir.
	   İçerik değişmeden kaydetmek yeni sürüm (revision) üretmez. */
	if (defined('WPSEO_VERSION')) foreach (array_unique(array_merge($r['meta_yazilan'], $tazele)) as $id) wp_update_post(['ID' => $id]);
	$r['meta_yazilan'] = count(array_unique($r['meta_yazilan']));
	kses_init();
	return $r;
}

/* ---------- İLK KURULUM (sunucuda komut satırı yok): Araçlar › Site içeriği ----------
   Tek düğme: temayı etkinleştirir, kalıcı bağlantıları /%postname%/ yapar, WordPress'in örnek içeriğini
   siler, 66 sayfayı aktarır (elle düzenlenmiş sayfalara dokunmaz), ana sayfayı ayarlar. Tekrar basmak güvenlidir. */
function rc_ilk_kurulum(bool $ustune, int $medya_sinir = 0) {
	$r = ['adimlar' => []];
	/* ilk kurulumda site arama motorlarına KAPALI başlar (Softaculous bu seçeneği sormuyor);
	   açılış müşteri onayıyla Ayarlar › Okuma'dan yapılır — sonraki basışlarda bu ayara dokunulmaz */
	if (!get_option('rc_ilk_kurulum_tarihi')) {
		if (get_option('blog_public')) { update_option('blog_public', '0'); $r['adimlar'][] = 'Arama motorlarına kapalı (açılış onayla)'; }
		update_option('rc_ilk_kurulum_tarihi', current_time('mysql'), false);
	}
	/* Yoast: başlık ayracı "|" (statik sürümdeki "Başlık | Dr. Rahmi Cebeci") — bir kez; sonra Yoast ayarlarından değişirse dokunulmaz */
	if (defined('WPSEO_VERSION') && class_exists('WPSEO_Options') && !get_option('rc_yoast_ayar_tarihi')) {
		WPSEO_Options::set('separator', 'sc-pipe');
		update_option('rc_yoast_ayar_tarihi', current_time('mysql'), false);
		$r['adimlar'][] = 'Yoast başlık ayracı: |';
	}
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
	$r['aktarim'] = rc_aktar(['ustune_yaz' => $ustune, 'medya_sinir' => $medya_sinir]);
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
		$sonuc = rc_ilk_kurulum(!empty($_POST['rc_ustune']), 20);
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
		<?php if ($sonuc && !empty($sonuc['aktarim']['medya']) && ($sonuc['aktarim']['medya']['kalan'] || $sonuc['aktarim']['medya']['hata'])) : $md = $sonuc['aktarim']['medya']; ?>
			<div class="notice notice-warning"><p><b>Görseller Ortam kütüphanesine alınıyor:</b> bu turda <?php echo count($md['yeni']); ?> görsel eklendi,
				<?php echo (int) $md['kalan']; ?> görsel kaldı. <b>Düğmeye bir kez daha basın</b> (sayfalar görseller bitince aktarılır).</p>
				<?php if ($md['hata']) echo '<p>' . esc_html('Hata: ' . implode(', ', $md['hata'])) . '</p>'; ?></div>
		<?php elseif ($sonuc) : $a = $sonuc['aktarim']; ?>
			<div class="notice notice-success"><p><b>Tamam.</b> <?php echo esc_html(implode(' · ', $sonuc['adimlar'])); ?></p>
				<?php if (!empty($a['medya'])) : ?><p>Görseller: yeni <?php echo count($a['medya']['yeni']); ?> · güncellenen <?php echo (int) $a['medya']['guncellenen']; ?>
					· aynı <?php echo (int) $a['medya']['ayni']; ?> · panelde düzenlendiği için atlanan <?php echo count($a['medya']['elle']); ?> · öne çıkan görseli atanan sayfa <?php echo (int) $a['kapak']; ?></p><?php endif; ?>
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

/* ---------- REST: aynı kurulum, uygulama parolasıyla (yalnız yönetici) ----------
   GET  /wp-json/rc/v1/durum   → tema, bağlantı yapısı, arama motoru durumu, kaç sayfa var
   POST /wp-json/rc/v1/kurulum → rc_ilk_kurulum() ("ustune_yaz": true yalnız bilerek) */
function rc_durum() {
	$v = json_decode((string) file_get_contents(__DIR__ . '/rc-icerik.json'), true);
	$var = 0;
	foreach ($v['sayfalar'] ?? [] as $s) {
		$ad = $s['yol'] === '' ? 'anasayfa' : ($s['yol'] === '404' ? RC_404_AD : $s['ad']);
		if (get_page_by_path($s['ebeveyn'] !== '' ? $s['ebeveyn'] . '/' . $ad : $ad, OBJECT, 'page')) $var++;
	}
	return ['paket' => count($v['sayfalar'] ?? []), 'paket_uretim' => $v['uretim'] ?? '', 'wordpressteki' => $var,
		'tema' => get_stylesheet(), 'kalici_baglanti' => get_option('permalink_structure'),
		'arama_motorlari' => get_option('blog_public') ? 'acik' : 'kapali', 'on_sayfa' => (int) get_option('page_on_front'),
		'wp' => get_bloginfo('version'), 'php' => PHP_VERSION, 'mail_kapali' => in_array('mail', array_map('trim', explode(',', (string) ini_get('disable_functions'))), true),
		'smtp_yerel' => rc_smtp_yoklama(), 'yoast' => rc_yoast_durum(),
		'medya' => ['paket' => count($v['medya'] ?? []), 'kutuphanede' => function_exists('rc_medya_adresleri') ? count(rc_medya_adresleri()) : 0,
			'webp_duzenleyici' => wp_image_editor_supports(['mime_type' => 'image/webp']),
			'one_cikan' => count(get_posts(['post_type' => 'page', 'post_status' => 'any', 'numberposts' => -1, 'fields' => 'ids', 'meta_key' => '_thumbnail_id']))]];
}

/* Yoast alanları: kaç sayfada odak anahtar kelime ve meta açıklama var, açıklama uzunlukları */
function rc_yoast_durum() {
	$odak = 0; $aciklama = 0; $uzunluk = [];
	foreach (get_posts(['post_type' => 'page', 'post_status' => ['publish'], 'numberposts' => -1, 'fields' => 'ids']) as $id) {
		if (get_post_meta($id, '_yoast_wpseo_focuskw', true) !== '') $odak++;
		$a = (string) get_post_meta($id, '_yoast_wpseo_metadesc', true);
		if ($a !== '') { $aciklama++; $n = mb_strlen($a); $uzunluk[$n] = ($uzunluk[$n] ?? 0) + 1; }
	}
	ksort($uzunluk);
	return ['etkin' => defined('WPSEO_VERSION') ? WPSEO_VERSION : false, 'odak' => $odak, 'aciklama' => $aciklama, 'uzunluk' => $uzunluk,
		'ayrac' => class_exists('WPSEO_Options') ? WPSEO_Options::get('separator') : null];
}

/* yerel posta servisi (127.0.0.1:25) karşılık veriyor mu — yalnız karşılama satırı okunur, e-posta GÖNDERİLMEZ */
function rc_smtp_yoklama() {
	$s = @fsockopen('127.0.0.1', 25, $no, $hata, 5);
	if (!$s) return 'baglanilamadi: ' . $hata;
	stream_set_timeout($s, 5);
	$karsilama = (string) fgets($s, 512);
	@fwrite($s, "QUIT\r\n");
	fclose($s);
	return str_starts_with($karsilama, '220') ? 'hazir (220)' : 'beklenmeyen: ' . substr(trim($karsilama), 0, 40);
}
add_action('rest_api_init', function () {
	$yonetici = fn() => current_user_can('manage_options');
	register_rest_route('rc/v1', '/durum', ['methods' => 'GET', 'permission_callback' => $yonetici, 'callback' => fn() => rc_durum()]);
	register_rest_route('rc/v1', '/kurulum', ['methods' => 'POST', 'permission_callback' => $yonetici,
		'callback' => fn(WP_REST_Request $r) => array_merge(rc_ilk_kurulum((bool) $r->get_param('ustune_yaz'),
			max(1, (int) ($r->get_param('medya_sinir') ?: 12))), ['durum' => rc_durum()])]);
});

if (defined('WP_CLI') && WP_CLI) {
	WP_CLI::add_command('rc aktar', function ($args, $assoc) {
		$r = rc_aktar(['ustune_yaz' => isset($assoc['ustune-yaz'])]);
		if (!empty($r['medya'])) WP_CLI::log(sprintf('görseller: yeni %d · güncellenen %d · aynı %d · panelde düzenlenmiş (atlandı) %d · hata %d · öne çıkan görsel atanan %d · görsel adresi çevrilen elle sayfa %d',
			count($r['medya']['yeni']), $r['medya']['guncellenen'], $r['medya']['ayni'], count($r['medya']['elle']), count($r['medya']['hata']),
			$r['kapak'] ?? 0, count($r['elle_gorsel'] ?? [])));
		if (!empty($r['medya']['hata'])) WP_CLI::log('görsel hatası: ' . implode(', ', $r['medya']['hata']));
		WP_CLI::log(sprintf('yeni %d · güncellenen %d · aynı %d · elle düzenlenmiş (atlandı) %d · kayıtta değişen %d · hata %d · meta yazılan %d · meta elle (atlandı) %d',
			count($r['yeni'] ?? []), count($r['guncellenen'] ?? []), $r['ayni'] ?? 0, count($r['elle'] ?? []), count($r['fark'] ?? []), count($r['hata'] ?? []),
			(int) ($r['meta_yazilan'] ?? 0), count($r['meta_elle'] ?? [])));
		foreach (['elle', 'fark', 'hata', 'meta_elle'] as $k) if (!empty($r[$k])) WP_CLI::log("$k: " . implode(', ', $r[$k]));
	});
}
