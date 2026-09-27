<?php
/* ============================================================
   SİTE BİLGİLERİ — yönetim panelinde "Site bilgileri" ekranı
   Başlık, menü altı, altbilgi ve hekim künyesinde görünen bilgiler buradan değişir.
   İsteğe bağlı: aynı değerler sayfa içeriklerinde de (metin, tel: / wa.me bağlantıları, harita adresi)
   tek seferde değiştirilir.
   ============================================================ */
defined('ABSPATH') || exit;

const RC_AYAR = 'rc_site_bilgileri';

function rc_ayar_alanlari() {
	return [
		'iletisim.tel'    => ['Telefon', 'Ekranda görünen biçim, ör. 0539 933 08 08'],
		'iletisim.cep'    => ['GSM', 'Telefonla aynıysa altbilgide ayrıca gösterilmez'],
		'iletisim.wa'     => ['WhatsApp', 'ör. +90 539 933 08 08'],
		'iletisim.eposta' => ['E-posta', 'İletişim ve KVKK başvuru adresi'],
		'iletisim.adres'  => ['Adres', 'Mahalle, cadde, numara'],
		'iletisim.ilce'   => ['İlçe / il', 'ör. Bakırköy / İstanbul'],
		'hekim.tam'       => ['Hekim (unvanıyla)', 'Künyede ve altbilgide'],
		'hekim.dallar'    => ['Uzmanlık satırı', ''],
		'marka'           => ['Marka adı', 'Başlıkta ve altbilgide'],
		'markaAlt'        => ['Logonun alt satırı', 'Sonuna "· Muayenehane" eklenir'],
		'guncelleme'      => ['Son güncelleme tarihi', 'Altbilgide ve hekim künyesinde, ör. 25.09.2026'],
	];
}

function rc_dizi_al(array $v, $yol) {
	foreach (explode('.', $yol) as $p) { if (!is_array($v) || !array_key_exists($p, $v)) return null; $v = $v[$p]; }
	return $v;
}
function rc_dizi_koy(array &$v, $yol, $deger) {
	$r = &$v;
	foreach (explode('.', $yol) as $p) { if (!isset($r[$p]) || !is_array($r[$p])) $r[$p] = $r[$p] ?? []; $r = &$r[$p]; }
	$r = $deger;
}

/* 0539 933 08 08 → +905399330808 (tel:) / 905399330808 (wa.me) */
function rc_ham($s, $arti) {
	$d = preg_replace('/\D/', '', (string) $s);
	if (str_starts_with($d, '0')) $d = '90' . substr($d, 1);
	elseif (strlen($d) === 10) $d = '90' . $d;
	return ($arti ? '+' : '') . $d;
}

/* rc() bunu çağırır: veri.json + panelde kaydedilenler (+ türetilen tel/wa bağlantı biçimleri) */
function rc_ayar_uygula(array $v) {
	$o = get_option(RC_AYAR, []);
	if (!is_array($o) || !$o) return $v;
	foreach (rc_ayar_alanlari() as $yol => $_) if (isset($o[$yol]) && $o[$yol] !== '') rc_dizi_koy($v, $yol, $o[$yol]);
	if (!empty($o['iletisim.tel'])) $v['iletisim']['telHam'] = rc_ham($o['iletisim.tel'], true);
	if (!empty($o['iletisim.cep'])) $v['iletisim']['cepHam'] = rc_ham($o['iletisim.cep'], true);
	if (!empty($o['iletisim.wa'])) $v['iletisim']['waHam'] = rc_ham($o['iletisim.wa'], false);
	if (!empty($o['iletisim.eposta'])) $v['iletisim']['editor'] = $o['iletisim.eposta'];
	return $v;
}

add_action('admin_menu', function () {
	add_menu_page('Site bilgileri', 'Site bilgileri', 'manage_options', 'rc-site-bilgileri', 'rc_ayar_ekrani', 'dashicons-id-alt', 21);
});

/* değişen değerler için içerik değiştirme çiftleri (eski → yeni), uzundan kısaya */
function rc_degisim_ciftleri(array $eski, array $yeni) {
	$c = [];
	$ekle = function ($a, $b) use (&$c) { if ($a !== '' && $a !== null && $a !== $b && strlen((string) $a) >= 4) $c[(string) $a][] = (string) $b; };
	foreach (array_keys(rc_ayar_alanlari()) as $yol) $ekle(rc_dizi_al($eski, $yol), rc_dizi_al($yeni, $yol));
	foreach (['telHam', 'cepHam', 'waHam'] as $k) $ekle($eski['iletisim'][$k] ?? '', $yeni['iletisim'][$k] ?? '');
	/* harita: src="…maps?q=<adres ilçe>" encodeURIComponent biçiminde */
	$enc = fn($s) => str_replace(['%21', '%27', '%28', '%29', '%2A'], ['!', "'", '(', ')', '*'], rawurlencode($s));
	$ekle($enc($eski['iletisim']['adres'] . ' ' . $eski['iletisim']['ilce']), $enc($yeni['iletisim']['adres'] . ' ' . $yeni['iletisim']['ilce']));
	$sonuc = [];
	$catisan = [];
	foreach ($c as $a => $bler) {
		$bler = array_values(array_unique($bler));
		if (count($bler) > 1) { $catisan[] = $a; continue; }   /* aynı eski değer iki farklı yeniye gidiyor → dokunma */
		$sonuc[$a] = $bler[0];
	}
	uksort($sonuc, fn($x, $y) => strlen($y) <=> strlen($x));
	return [$sonuc, $catisan];
}

add_action('admin_init', function () {
	if (($_POST['rc_eylem'] ?? '') !== 'site_bilgileri') return;
	if (!current_user_can('manage_options')) wp_die('Yetkiniz yok.');
	check_admin_referer('rc_site_bilgileri');
	$eski = rc();
	$o = [];
	foreach (array_keys(rc_ayar_alanlari()) as $yol) {
		$k = 'rc_' . str_replace('.', '_', $yol);
		$d = isset($_POST[$k]) ? sanitize_text_field(wp_unslash($_POST[$k])) : '';
		if ($yol === 'iletisim.eposta' && $d !== '' && !is_email($d)) $d = (string) rc_dizi_al($eski, $yol);
		$o[$yol] = $d;
	}
	update_option(RC_AYAR, $o, false);
	$yeni = rc_ayar_uygula(json_decode((string) file_get_contents(RC_TEMA . '/inc/veri.json'), true) ?: []);
	$rapor = ['sayfa' => 0, 'catisan' => []];
	if (!empty($_POST['rc_icerikte'])) {
		[$ciftler, $rapor['catisan']] = rc_degisim_ciftleri($eski, $yeni);
		if ($ciftler) {
			kses_remove_filters();
			foreach (get_posts(['post_type' => 'page', 'post_status' => 'any', 'numberposts' => -1]) as $p) {
				$yeniIcerik = strtr($p->post_content, $ciftler);
				if ($yeniIcerik !== $p->post_content) {
					wp_update_post(wp_slash(['ID' => $p->ID, 'post_content' => $yeniIcerik]));
					$rapor['sayfa']++;
				}
			}
			kses_init();
		}
	}
	set_transient('rc_ayar_rapor_' . get_current_user_id(), $rapor, 120);
	wp_safe_redirect(admin_url('admin.php?page=rc-site-bilgileri&kaydedildi=1'));
	exit;
});

function rc_ayar_ekrani() {
	if (!current_user_can('manage_options')) return;
	$v = rc();
	$rapor = get_transient('rc_ayar_rapor_' . get_current_user_id());
	delete_transient('rc_ayar_rapor_' . get_current_user_id());
	?>
	<div class="wrap">
		<h1>Site bilgileri</h1>
		<p>Buradaki bilgiler her sayfanın başlığında, altbilgisinde ve tıbbi sayfaların hekim künyesinde görünür.</p>
		<?php if (isset($_GET['kaydedildi'])) : ?>
			<div class="notice notice-success"><p>Kaydedildi.<?php
				if ($rapor && $rapor['sayfa']) echo ' Sayfa içeriklerinde de değiştirildi: <b>' . (int) $rapor['sayfa'] . ' sayfa</b>.';
				if ($rapor && $rapor['catisan']) echo ' Aynı eski değer iki farklı yeni değere gittiği için içerikte değiştirilmeyenler: ' . esc_html(implode(', ', $rapor['catisan'])) . '.';
			?></p></div>
		<?php endif; ?>
		<form method="post">
			<?php wp_nonce_field('rc_site_bilgileri'); ?>
			<input type="hidden" name="rc_eylem" value="site_bilgileri">
			<table class="form-table" role="presentation">
				<?php foreach (rc_ayar_alanlari() as $yol => [$etiket, $aciklama]) : $k = 'rc_' . str_replace('.', '_', $yol); ?>
				<tr>
					<th scope="row"><label for="<?php echo esc_attr($k); ?>"><?php echo esc_html($etiket); ?></label></th>
					<td><input type="text" class="regular-text" id="<?php echo esc_attr($k); ?>" name="<?php echo esc_attr($k); ?>" value="<?php echo esc_attr((string) rc_dizi_al($v, $yol)); ?>">
						<?php if ($aciklama) echo '<p class="description">' . esc_html($aciklama) . '</p>'; ?></td>
				</tr>
				<?php endforeach; ?>
				<tr>
					<th scope="row">Sayfa içerikleri</th>
					<td><label><input type="checkbox" name="rc_icerikte" value="1" checked>
						Değişen bilgileri sayfa içeriklerinde de değiştir</label>
						<p class="description">Telefon numarası sayfaların içinde de geçiyor (ör. "Bize ulaşın" kutuları, arama bağlantıları, harita).
						İşaretliyse eski değer bütün sayfalarda yenisiyle değiştirilir. Yalnız birebir aynı yazılmış geçişler değişir.</p></td>
				</tr>
			</table>
			<?php submit_button('Kaydet'); ?>
		</form>
	</div>
	<?php
}
