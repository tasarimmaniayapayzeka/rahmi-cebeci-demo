<?php
/**
 * Plugin Name: Dr. Rahmi Cebeci — ortam kütüphanesi
 * Description: Sitenin görsellerini (rc-icerik.json "medya") /varliklar/ klasöründen Ortam kütüphanesine alır, alt metin ve başlığını yazar; sayfalardaki görsel adreslerini kütüphanedekilere çevirir. Kaynak dosya değişince eskisini silip yenisini yükler.
 *
 * Kaynak tablo: site/veri/medya.js (dosya adı, alt metin, başlık). Aktarımı rc-aktar.php başlatır (sayfalardan önce).
 * - Aynı görsel iki kez eklenmez: kaynak → ek kimliği haritası (seçenek rc_medya_harita) + ekte _rc_kaynak.
 * - Panelde (Ortam › görsel ayrıntısı) alt metni ya da başlığı değiştirilen görsele sonraki aktarımda dokunulmaz.
 * - Dosyalar internetten indirilmez; sunucudaki /varliklar/<kaynak> dosyası uploads klasörüne kopyalanır.
 * - YENİLEME: /varliklar/<kaynak> kütüphanedeki dosyadan farklıysa (ör. görsel netleştirildi) yeni ek YENİ ADLA eklenir
 *   (resimler 1 yıl "immutable" önbellekte — aynı adres eski görseli gösterirdi), alt/başlık/açıklama taşınır, bütün
 *   sayfalardaki adres + wp-image-N + öne çıkan görsel + logo seçimi yeniye çevrilir, eski ek dosyalarıyla silinir.
 * - KALDIRMA: rc-icerik.json "medya_kaldir" listesindeki kaynakların ekleri silinir (bir yerde kullanılıyorsa silinmez, raporlanır).
 */
defined('ABSPATH') || exit;

const RC_MEDYA_HARITA = 'rc_medya_harita';

function rc_medya_harita(): array {
	$h = get_option(RC_MEDYA_HARITA, []);
	return is_array($h) ? $h : [];
}
function rc_medya_harita_yaz(string $k, ?int $id): void {
	$h = rc_medya_harita();
	if ($id) $h[$k] = $id; else unset($h[$k]);
	update_option(RC_MEDYA_HARITA, $h, false);
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

/* kütüphanedeki asıl dosya (WordPress 2560 üstünü "-scaled" yapar; asıl dosya ayrı durur) */
function rc_medya_dosya(int $id): string {
	$f = function_exists('wp_get_original_image_path') ? wp_get_original_image_path($id) : '';
	return $f ?: (string) get_attached_file($id);
}

/* /varliklar/<kaynak> dosyasını uploads'a kopyalayıp ek oluşturur; kimlik ya da WP_Error */
function rc_medya_ekle(string $k, array $m, string $baslik, string $alt) {
	$kaynak = ABSPATH . 'varliklar/' . $k;
	$up = wp_upload_dir();
	if (!empty($up['error'])) return new WP_Error('uploads', $up['error']);
	$ad = wp_unique_filename($up['path'], sanitize_file_name($m['ad']));
	$hedef = $up['path'] . '/' . $ad;
	if (!@copy($kaynak, $hedef)) return new WP_Error('kopya', 'kopyalanamadı');
	$tur = wp_check_filetype($ad);
	$id = wp_insert_attachment(['post_title' => $baslik, 'post_mime_type' => $tur['type'], 'post_status' => 'inherit',
		'post_content' => '', 'guid' => $up['url'] . '/' . $ad], $hedef, 0, true);
	if (is_wp_error($id)) { @unlink($hedef); return $id; }
	wp_update_attachment_metadata($id, wp_generate_attachment_metadata($id, $hedef));
	update_post_meta($id, '_wp_attachment_image_alt', $alt);
	update_post_meta($id, '_rc_kaynak', $k);
	return $id;
}

/* eski ek → yeni ek (toplu): sayfa içerikleri (tam boy + alt boy adresleri, wp-image-N), öne çıkan görsel, kapak kaydı, logo
   seçimi; ardından eski ekler dosyalarıyla silinir. Her sayfa bir kez güncellenir, bu makine güncellemesi için revizyon açılmaz.
   Aktarım özeti eski içerikle tutuyorsa (panelde düzenlenmemiş sayfa) yeni içerikle güncellenir; elle düzenlenmiş sayfa öyle kalır.
   Çiftler önce rc_medya_bekleyen seçeneğine yazılır: çağrı yarıda kesilirse sonraki çağrı bitirir (kopya ek kalmaz). */
function rc_medya_degistir_toplu(array $ciftler): int {
	if (!$ciftler) return 0;
	$adres = [];
	$sinif = [];
	foreach ($ciftler as $eski => $yeni) {
		$eski = (int) $eski; $yeni = (int) $yeni;
		if (get_post_type($eski) !== 'attachment' || get_post_type($yeni) !== 'attachment') continue;
		$eskiUrl = wp_make_link_relative((string) wp_get_attachment_url($eski));
		$yeniUrl = wp_make_link_relative((string) wp_get_attachment_url($yeni));
		$adres[$eskiUrl] = $yeniUrl;
		$em = wp_get_attachment_metadata($eski) ?: [];
		$ym = wp_get_attachment_metadata($yeni) ?: [];
		foreach (($em['sizes'] ?? []) as $boy => $b) {
			$adres[dirname($eskiUrl) . '/' . $b['file']] = isset($ym['sizes'][$boy]) ? dirname($yeniUrl) . '/' . $ym['sizes'][$boy]['file'] : $yeniUrl;
		}
		$sinif['/\bwp-image-' . $eski . '\b/'] = 'wp-image-' . $yeni;
	}
	$n = 0;
	add_filter('wp_revisions_to_keep', '__return_zero', 99);
	foreach (get_posts(['post_type' => 'page', 'post_status' => 'any', 'numberposts' => -1]) as $p) {
		$c = strtr($p->post_content, $adres);
		if ($sinif) $c = preg_replace(array_keys($sinif), array_values($sinif), $c);
		if ($c === $p->post_content) continue;
		$tutuyor = get_post_meta($p->ID, '_rc_aktarim_ozet', true) === md5($p->post_content);
		wp_update_post(wp_slash(['ID' => $p->ID, 'post_content' => $c]));
		if ($tutuyor) update_post_meta($p->ID, '_rc_aktarim_ozet', md5(get_post_field('post_content', $p->ID, 'raw')));
		$n++;
	}
	remove_filter('wp_revisions_to_keep', '__return_zero', 99);
	global $wpdb;
	foreach ($ciftler as $eski => $yeni) {
		$eski = (int) $eski; $yeni = (int) $yeni;
		if (get_post_type($yeni) !== 'attachment') continue;
		foreach ($wpdb->get_col($wpdb->prepare("SELECT post_id FROM $wpdb->postmeta WHERE meta_key = '_thumbnail_id' AND meta_value = %s", (string) $eski)) as $pid) {
			set_post_thumbnail((int) $pid, $yeni);
		}
		foreach ($wpdb->get_col($wpdb->prepare("SELECT post_id FROM $wpdb->postmeta WHERE meta_key = '_rc_kapak_id' AND meta_value = %s", (string) $eski)) as $pid) {
			update_post_meta((int) $pid, '_rc_kapak_id', $yeni);
		}
		if ((int) get_option('rc_logo_id') === $eski) update_option('rc_logo_id', $yeni, false);
		if (get_post_type($eski) === 'attachment') wp_delete_attachment($eski, true);
	}
	delete_option('rc_medya_bekleyen');
	return $n;
}

/* ek bir yerde kullanılıyor mu (sayfa içeriği, öne çıkan görsel, logo seçimi, site simgesi, Yoast logosu/paylaşım görseli) */
function rc_medya_kullaniliyor(int $id): bool {
	global $wpdb;
	if ((int) get_option('rc_logo_id') === $id || (int) get_option('site_icon') === $id) return true;
	if (class_exists('WPSEO_Options')) {
		foreach (['company_logo_id', 'person_logo_id', 'og_default_image_id', 'og_frontpage_image_id'] as $a) if ((int) WPSEO_Options::get($a) === $id) return true;
	}
	if ($wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM $wpdb->postmeta WHERE meta_key = '_thumbnail_id' AND meta_value = %s", (string) $id))) return true;
	$u = wp_make_link_relative((string) wp_get_attachment_url($id));
	$govde = pathinfo($u, PATHINFO_FILENAME);
	return (bool) $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM $wpdb->posts WHERE post_type IN ('page','post') AND (post_content LIKE %s OR post_content LIKE %s)",
		'%' . $wpdb->esc_like($govde) . '%', '%wp-image-' . $id . '"%'));
}

/* Listeyi kütüphaneye al. $sinir > 0: bu çağrıda en çok bu kadar YENİ ya da YENİLENEN dosya (alt boyut üretimi ağır — sunucuda
   zaman aşımı olmasın; kalan sonraki çağrıda). Harita her dosyadan sonra kaydedilir: yarıda kesilse de kaldığı yer bilinir. */
function rc_medya_aktar(array $liste, int $sinir = 0, array $kaldir = []): array {
	require_once ABSPATH . 'wp-admin/includes/image.php';
	require_once ABSPATH . 'wp-admin/includes/file.php';
	$r = ['yeni' => [], 'yenilenen' => [], 'guncellenen' => 0, 'ayni' => 0, 'elle' => [], 'kalan' => 0, 'hata' => [],
		'kaldirilan' => [], 'kullanimda' => [], 'sayfa_degisen' => 0];
	$agir = 0;
	/* önceki çağrı yarıda kaldıysa bekleyen eski→yeni çiftlerini önce bitir */
	$bekleyen = get_option('rc_medya_bekleyen', []);
	if (is_array($bekleyen) && $bekleyen) $r['sayfa_degisen'] += rc_medya_degistir_toplu($bekleyen);
	$bekleyen = [];

	foreach ($kaldir as $k) {
		$id = rc_medya_id((string) $k);
		if (!$id) continue;
		if (rc_medya_kullaniliyor($id)) { $r['kullanimda'][] = $k; continue; }
		wp_delete_attachment($id, true);
		rc_medya_harita_yaz((string) $k, null);
		$r['kaldirilan'][] = $k;
	}

	foreach ($liste as $m) {
		$k = (string) $m['kaynak'];
		$kaynak = ABSPATH . 'varliklar/' . $k;
		if (!preg_match('~^(gorsel|foto|marka)/[a-z0-9._-]+$~', $k) || !is_file($kaynak)) { $r['hata'][] = "$k: dosya yok"; continue; }
		$id = rc_medya_id($k);

		if (!$id) {
			if ($sinir > 0 && $agir >= $sinir) { $r['kalan']++; continue; }
			$id = rc_medya_ekle($k, $m, $m['baslik'], $m['alt']);
			if (is_wp_error($id)) { $r['hata'][] = "$k: " . $id->get_error_message(); continue; }
			update_post_meta($id, '_rc_medya_ozet', rc_medya_ozeti($id));
			rc_medya_harita_yaz($k, $id);
			$r['yeni'][] = $k;
			$agir++;
			continue;
		}

		/* kaynak dosya değişmiş (ör. netleştirildi) → yeni adla yükle, bağlantıları çevir, eskiyi sil */
		$ekDosya = rc_medya_dosya($id);
		if ($ekDosya && is_file($ekDosya) && md5_file($ekDosya) !== md5_file($kaynak)) {
			if ($sinir > 0 && $agir >= $sinir) { $r['kalan']++; continue; }
			$son = get_post_meta($id, '_rc_medya_ozet', true);
			$elle = $son && $son !== rc_medya_ozeti($id);
			$baslik = $elle ? get_post_field('post_title', $id, 'raw') : $m['baslik'];
			$alt = $elle ? (string) get_post_meta($id, '_wp_attachment_image_alt', true) : $m['alt'];
			$yeni = rc_medya_ekle($k, $m, $baslik, $alt);
			if (is_wp_error($yeni)) { $r['hata'][] = "$k (yenileme): " . $yeni->get_error_message(); continue; }
			/* panelde yazılmış açıklama/kısa yazı da taşınır */
			$ek = get_post($id);
			if ($ek && ($ek->post_excerpt !== '' || $ek->post_content !== '')) wp_update_post(['ID' => $yeni, 'post_excerpt' => $ek->post_excerpt, 'post_content' => $ek->post_content]);
			update_post_meta($yeni, '_rc_medya_ozet', $elle ? $son : rc_medya_ozeti($yeni));   /* elle ise "elle" kalsın */
			rc_medya_harita_yaz($k, $yeni);
			$bekleyen[$id] = $yeni;
			update_option('rc_medya_bekleyen', $bekleyen, false);
			$r['yenilenen'][] = $k;
			$agir++;
			continue;
		}

		/* var olan, dosya aynı: alt/başlık panelde değiştirilmediyse tabloyla eşitle */
		$son = get_post_meta($id, '_rc_medya_ozet', true);
		if ($son && $son !== rc_medya_ozeti($id)) { $r['elle'][] = $k; continue; }
		if (get_post_field('post_title', $id, 'raw') === $m['baslik'] && get_post_meta($id, '_wp_attachment_image_alt', true) === $m['alt']) { $r['ayni']++; continue; }
		wp_update_post(['ID' => $id, 'post_title' => $m['baslik']]);
		update_post_meta($id, '_wp_attachment_image_alt', $m['alt']);
		update_post_meta($id, '_rc_medya_ozet', rc_medya_ozeti($id));
		$r['guncellenen']++;
	}
	/* bu çağrıda yenilenenler: her sayfa bir kez güncellenir, sonra eski ekler silinir */
	if ($bekleyen) $r['sayfa_degisen'] += rc_medya_degistir_toplu($bekleyen);
	return $r;
}

/* kütüphanede bizim aktarmadığımız ekler (panelden yüklenenler) — kopya denetimi için rc/v1/durum'da listelenir */
function rc_medya_yonetilmeyen(): array {
	$l = [];
	foreach (get_posts(['post_type' => 'attachment', 'post_status' => 'inherit', 'numberposts' => -1, 'fields' => 'ids',
		'meta_query' => [['key' => '_rc_kaynak', 'compare' => 'NOT EXISTS']]]) as $id) {
		$f = rc_medya_dosya($id);
		$l[] = ['id' => $id, 'dosya' => basename($f), 'baslik' => get_post_field('post_title', $id, 'raw'),
			'md5' => is_file($f) ? md5_file($f) : '', 'kullanimda' => rc_medya_kullaniliyor($id)];
	}
	return $l;
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
	/* tablo satırı kart görselleri (data-gg → CSS arka planı, kart üstünde ~150 px şerit): srcset alamaz; tam boy (2560)
	   yerine 768 px alt boy — telefonda 9 karta ~33 MP çözülüyordu (4 Eki). Editördeki "Satır görseli" düğmesi de bu boyu yazar. */
	$html = preg_replace_callback('~data-gg="/varliklar/([^"]+)"~', function ($m) use ($adres) {
		if (!isset($adres[$m[1]])) return $m[0];
		$u = wp_get_attachment_image_url($adres[$m[1]][0], 'medium_large');
		return 'data-gg="' . ($u ? wp_make_link_relative($u) : $adres[$m[1]][1]) . '"';
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
