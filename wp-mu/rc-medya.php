<?php
/**
 * Plugin Name: Dr. Rahmi Cebeci — ortam kütüphanesi
 * Description: Sitenin görsellerini (rc-icerik.json "medya") /varliklar/ klasöründen Ortam kütüphanesine alır, alt metin ve başlığını yazar; sayfalardaki görsel adreslerini kütüphanedekilere çevirir.
 *
 * Kaynak tablo: site/veri/medya.js (dosya adı, alt metin, başlık). Aktarımı rc-aktar.php başlatır (sayfalardan önce).
 * - Aynı görsel iki kez eklenmez: kaynak → ek kimliği haritası (seçenek rc_medya_harita) + ekte _rc_kaynak.
 * - Panelde (Ortam › görsel ayrıntısı) alt metni ya da başlığı değiştirilen görsele sonraki aktarımda dokunulmaz.
 * - Dosyalar internetten indirilmez; sunucudaki /varliklar/<kaynak> dosyası uploads klasörüne kopyalanır.
 */
defined('ABSPATH') || exit;

const RC_MEDYA_HARITA = 'rc_medya_harita';

function rc_medya_harita(): array {
	$h = get_option(RC_MEDYA_HARITA, []);
	return is_array($h) ? $h : [];
}

/* kaynak (ör. gorsel/uyg-prp.webp) → ek kimliği; ek silinmişse 0 */
function rc_medya_id(string $kaynak): int {
	$id = (int) (rc_medya_harita()[$kaynak] ?? 0);
	return ($id && get_post_type($id) === 'attachment') ? $id : 0;
}

/* kaynak → [kimlik, kök-göreli adres] (alan adı değişse de içerik çalışsın; editördeki satır görseli de böyle yazar) */
function rc_medya_adresleri(): array {
	$a = [];
	foreach (rc_medya_harita() as $k => $id) {
		$id = (int) $id;
		if (get_post_type($id) !== 'attachment') continue;
		$u = wp_get_attachment_url($id);
		if ($u) $a[$k] = [$id, wp_make_link_relative($u)];
	}
	return $a;
}

function rc_medya_ozeti(int $id): string {
	return md5(get_post_field('post_title', $id, 'raw') . '|' . get_post_meta($id, '_wp_attachment_image_alt', true));
}

/* Listeyi kütüphaneye al. $sinir > 0: bu çağrıda en çok bu kadar YENİ dosya (alt boyut üretimi ağır — sunucuda
   zaman aşımı olmasın; kalan sonraki çağrıda). Harita her dosyadan sonra kaydedilir: yarıda kesilse de kaldığı yer bilinir. */
function rc_medya_aktar(array $liste, int $sinir = 0): array {
	require_once ABSPATH . 'wp-admin/includes/image.php';
	require_once ABSPATH . 'wp-admin/includes/file.php';
	$r = ['yeni' => [], 'guncellenen' => 0, 'ayni' => 0, 'elle' => [], 'kalan' => 0, 'hata' => []];
	foreach ($liste as $m) {
		$k = (string) $m['kaynak'];
		$id = rc_medya_id($k);
		if (!$id) {
			if ($sinir > 0 && count($r['yeni']) >= $sinir) { $r['kalan']++; continue; }
			$kaynak = ABSPATH . 'varliklar/' . $k;
			if (!preg_match('~^(gorsel|foto|marka)/[a-z0-9._-]+$~', $k) || !is_file($kaynak)) { $r['hata'][] = "$k: dosya yok"; continue; }
			$up = wp_upload_dir();
			if (!empty($up['error'])) { $r['hata'][] = 'uploads: ' . $up['error']; break; }
			$ad = wp_unique_filename($up['path'], sanitize_file_name($m['ad']));
			$hedef = $up['path'] . '/' . $ad;
			if (!@copy($kaynak, $hedef)) { $r['hata'][] = "$k: kopyalanamadı"; continue; }
			$tur = wp_check_filetype($ad);
			$id = wp_insert_attachment(['post_title' => $m['baslik'], 'post_mime_type' => $tur['type'], 'post_status' => 'inherit',
				'post_content' => '', 'guid' => $up['url'] . '/' . $ad], $hedef, 0, true);
			if (is_wp_error($id)) { @unlink($hedef); $r['hata'][] = "$k: " . $id->get_error_message(); continue; }
			wp_update_attachment_metadata($id, wp_generate_attachment_metadata($id, $hedef));
			update_post_meta($id, '_wp_attachment_image_alt', $m['alt']);
			update_post_meta($id, '_rc_kaynak', $k);
			update_post_meta($id, '_rc_medya_ozet', rc_medya_ozeti($id));
			$h = rc_medya_harita();
			$h[$k] = $id;
			update_option(RC_MEDYA_HARITA, $h, false);
			$r['yeni'][] = $k;
			continue;
		}
		/* var olan: alt/başlık panelde değiştirilmediyse tabloyla eşitle */
		$son = get_post_meta($id, '_rc_medya_ozet', true);
		if ($son && $son !== rc_medya_ozeti($id)) { $r['elle'][] = $k; continue; }
		if (get_post_field('post_title', $id, 'raw') === $m['baslik'] && get_post_meta($id, '_wp_attachment_image_alt', true) === $m['alt']) { $r['ayni']++; continue; }
		wp_update_post(['ID' => $id, 'post_title' => $m['baslik']]);
		update_post_meta($id, '_wp_attachment_image_alt', $m['alt']);
		update_post_meta($id, '_rc_medya_ozet', rc_medya_ozeti($id));
		$r['guncellenen']++;
	}
	return $r;
}

/* Sayfa HTML'inde /varliklar/<kaynak> → kütüphanedeki adres.
   <img>'in sonuna wp-image-<kimlik> sınıfı eklenir: WordPress bu sınıfı görünce srcset/sizes ekler (küçük ekranlara küçük dosya).
   Diğer geçişler (tablo satırı data-gg, veri listeleri) yalnız adres olarak değişir. */
function rc_medya_icerige(string $html, array $adres): string {
	if (!$adres) return $html;
	$html = preg_replace_callback('/<img\b[^>]*>/', function ($m) use ($adres) {
		$e = $m[0];
		if (!preg_match('~\ssrc="/varliklar/([^"]+)"~', $e, $s) || !isset($adres[$s[1]])) return $e;
		[$id, $u] = $adres[$s[1]];
		$e = str_replace($s[0], ' src="' . $u . '"', $e);
		if (preg_match('/\bwp-image-\d+\b/', $e)) return $e;
		if (preg_match('/\sclass="([^"]*)"/', $e, $c)) return str_replace($c[0], ' class="' . trim($c[1] . ' wp-image-' . $id) . '"', $e);
		return preg_replace('~\s*/?>$~', ' class="wp-image-' . $id . '">', $e);
	}, $html);
	$ciftler = [];
	foreach ($adres as $k => [$id, $u]) $ciftler['/varliklar/' . $k . '"'] = $u . '"';
	return strtr($html, $ciftler);
}

/* Öne çıkan görsel (sayfaların kapağı): Yoast paylaşım görseli ve şemadaki birincil görsel buradan gelir.
   Sayfadaki üst görsel içerikte durur; bu kutu yalnız paylaşım/arama için. */
add_action('after_setup_theme', function () {
	add_theme_support('post-thumbnails', ['page']);
}, 20);
add_filter('admin_post_thumbnail_html', function ($html, $post_id) {
	if (get_post_type($post_id) !== 'page') return $html;
	return $html . '<p class="description">Facebook, WhatsApp ve Google\'da bu sayfa paylaşıldığında görünen görsel. Sayfanın üstündeki görsel içerikten (düzenleyicide) değişir.</p>';
}, 10, 2);
