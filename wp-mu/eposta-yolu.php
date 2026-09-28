<?php
/**
 * Plugin Name: Dr. Rahmi Cebeci — e-posta yolu (yerel SMTP)
 * Description: Sunucuda PHP mail() kapalı; WordPress'in e-postaları (randevu formu, parola sıfırlama, bildirimler) sunucunun kendi posta servisine SMTP ile gider.
 *
 * NEDEN: guzelhosting (mt-lunar) hesabında mail() disable_functions ile kapalı (28 Eyl 2026 ölçüldü, PHP 7.4 ve 8.3).
 * wp_mail() varsayılan olarak mail() çağırır → PHP 8'de ölümcül hata: parola sıfırlama, bildirim, form — hepsi kırılır.
 * ÇÖZÜM: PHPMailer'ı 127.0.0.1:25'e bağla; kimlik doğrulama gerekmez, Exim yerel bağlantıya güvenir ve alan adı
 * SPF/DKIM'iyle imzalar. Aynı yöntem 04-Ramazan-Ersoy'da (wp-mu/eposta-yolu.php, 25 Ağu 2026) sınandı.
 * Gönderen alan adına ait olmalı; yoksa Gmail SPF uyuşmazlığıyla spam'e atar.
 */
defined('ABSPATH') || exit;

add_action('phpmailer_init', function ($posta) {
	$posta->isSMTP();
	$posta->Host        = '127.0.0.1';
	$posta->Port        = 25;
	$posta->SMTPAuth    = false;
	$posta->SMTPSecure  = '';
	$posta->SMTPAutoTLS = false;   /* yerel bağlantıda TLS pazarlığı gereksiz */
	$posta->Timeout     = 10;
	$posta->CharSet     = 'UTF-8';
	$posta->Encoding    = '8bit';
});

/* gönderen kimliği alan adından olsun ki SPF/DKIM tutsun */
add_filter('wp_mail_from', function ($adres) {
	return (strpos((string) $adres, '@rahmicebeci.com.tr') !== false) ? $adres : 'site@rahmicebeci.com.tr';
});
add_filter('wp_mail_from_name', function ($ad) {
	return ($ad === 'WordPress' || $ad === '') ? 'Dr. Rahmi Cebeci' : $ad;
});

/* başarısız gönderim günlüğe (webroot dışı), içerik yazılmaz — yalnız hata iletisi */
add_action('wp_mail_failed', function ($hata) {
	@file_put_contents(dirname(ABSPATH) . '/eposta-hatalari.log',
		date('d.m.Y H:i') . ' · ' . $hata->get_error_message() . "\n", FILE_APPEND | LOCK_EX);
});
