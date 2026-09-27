<?php
/* Başlık, menü, altbilgi, künye — site/render.js'teki ust(), alt(), kunye() ile birebir aynı HTML.
   Kaynak veri inc/veri.json (menü ve altbilgi site/veri/site.js'ten üretilir). */
defined('ABSPATH') || exit;

/* sitenin kök yolu ('/'); WordPress alt klasörde kurulursa da doğru çalışır */
function rc_kok() {
	return trailingslashit((string) wp_parse_url(home_url('/'), PHP_URL_PATH) ?: '/');
}

/* varlık adresi + içerik damgası (render.js varlik(): md5'in ilk 8 hanesi) */
function rc_varlik($gorece) {
	static $bellek = [];
	if (!isset($bellek[$gorece])) {
		$dosya = ABSPATH . $gorece;
		$bellek[$gorece] = is_file($dosya) ? substr((string) md5_file($dosya), 0, 8) : '1';
	}
	return rc_kok() . $gorece . '?s=' . $bellek[$gorece];
}

/* şu anki sayfanın yolu: '' (ana sayfa), 'uygulamalar/prp', '404' … */
function rc_yol() {
	if (is_404()) return '404';
	if (is_front_page()) return '';
	$p = get_queried_object();
	return ($p instanceof WP_Post) ? get_page_uri($p) : trim((string) wp_parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH), '/');
}

function rc_bag($yol) {
	return str_starts_with($yol, 'http')
		? 'href="' . $yol . '" target="_blank" rel="noopener"'
		: 'href="' . rc_kok() . substr($yol, 1) . '"';
}

function rc_ust($yol) {
	$ik = rc('ik');
	$S = rc();
	$r = rc_kok();
	$simdi = '/' . ($yol !== '' ? $yol . '/' : '');
	$akt = fn($y) => $y === $simdi ? ' aria-current="page"' : '';
	$ustAkt = function ($m) use ($simdi) {
		$a = !empty($m['yol']) && $m['yol'] !== '/' && ($simdi === $m['yol'] || str_starts_with($simdi, $m['yol']));
		foreach ($m['alt'] ?? [] as $x) if ($x['yol'] === $simdi) $a = true;
		return $a ? ' nav__oge--akt' : '';
	};

	$nav = '';
	foreach ($S['menu'] as $m) {
		if (empty($m['alt'])) {
			$nav .= '<div class="nav__oge' . $ustAkt($m) . '"><a class="nav__bag" ' . rc_bag($m['yol']) . $akt($m['yol']) . '>' . $m['ad'] . '</a></div>';
			continue;
		}
		if (!empty($m['mega'])) {
			$sut = '';
			foreach ($m['mega'] as $g) {
				$sut .= '<div class="mega__sutun"><p class="mega__baslik">' . $g['baslik'] . '</p>';
				foreach ($g['ogeler'] as $a) $sut .= '<a ' . rc_bag($a['yol']) . $akt($a['yol']) . '>' . $a['ad'] . '</a>';
				$sut .= '</div>';
			}
			$ic = '<div class="mega">' . $sut . "</div>\n        <a class=\"mega__tumu\" " . rc_bag($m['yol']) . $akt($m['yol']) . '>Uygulamaların tamamı ' . $ik['ok'] . '</a>';
		} else {
			$ic = '';
			foreach ($m['alt'] as $a) $ic .= '<a ' . rc_bag($a['yol']) . $akt($a['yol']) . '><b>' . $a['ad'] . '</b>' . (!empty($a['not']) ? '<span>' . $a['not'] . '</span>' : '') . '</a>';
		}
		$nav .= '<div class="nav__oge' . (!empty($m['mega']) ? ' nav__oge--mega' : '') . $ustAkt($m) . "\" data-acilir>\n"
			. '      <button class="nav__bag" type="button" aria-expanded="false">' . $m['ad'] . '<span class="nav__ok">' . $ik['asagi'] . "</span></button>\n"
			. '      <div class="alt' . (!empty($m['mega']) ? ' alt--mega' : '') . '">' . $ic . "</div>\n"
			. '    </div>';
	}

	$cekmece = '';
	foreach ($S['menu'] as $m) {
		if (empty($m['alt'])) {
			$cekmece .= '<div class="cekmece__grup"><b><a ' . rc_bag($m['yol']) . $akt($m['yol']) . ' style="border:0;padding:10px 0;display:block">' . $m['ad'] . '</a></b></div>';
			continue;
		}
		$onceki = null;
		$satir = '';
		foreach ($m['alt'] as $a) {
			$grup = $a['grup'] ?? null;
			$bas = ($grup && $grup !== $onceki) ? '<span class="cekmece__alt">' . $grup . '</span>' : '';
			$onceki = $grup ?: $onceki;
			$satir .= $bas . '<a ' . rc_bag($a['yol']) . $akt($a['yol']) . '>' . $a['ad'] . '</a>';
		}
		$cekmece .= '<details class="cekmece__grup"' . ($ustAkt($m) ? ' open' : '') . '><summary><b>' . $m['ad'] . '</b></summary>' . $satir . '</details>';
	}

	$i = $S['iletisim'];
	return '<a class="atla" href="#ana">İçeriğe atla</a>
<header class="ust">
  <div class="sar ust__ic">
    <a class="marka" href="' . $r . '">
      <img class="marka__logo" src="' . $r . 'varliklar/foto/amblem.png" alt="" width="44" height="44">
      <span class="marka__ad">' . $S['marka'] . '</span>
      <span class="marka__alt">' . $S['markaAlt'] . ' · Muayenehane</span>
    </a>
    <nav class="nav" aria-label="Ana menü">' . $nav . '</nav>
    <a class="dgm dgm--bir dgm--kucuk ust__cta" href="' . $r . 'iletisim/">Randevu isteyin</a>
    <button class="menu-dgm" type="button" data-menu-ac aria-label="Menüyü aç" aria-expanded="false">' . $ik['menu'] . '</button>
  </div>
</header>
<div class="cekmece" data-cekmece aria-hidden="true">
  <div class="cekmece__perde" data-menu-kapa></div>
  <div class="cekmece__panel" role="dialog" aria-label="Menü">
    <div class="cekmece__bas">
      <span class="marka__ad">' . $S['marka'] . '</span>
      <button class="cekmece__kapa" type="button" data-menu-kapa aria-label="Menüyü kapat">' . $ik['kapa'] . '</button>
    </div>
    ' . $cekmece . '
    <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px">
      <a class="dgm dgm--bir" href="' . $r . 'iletisim/">Randevu isteyin</a>
      <a class="dgm dgm--iki" href="tel:' . $i['telHam'] . '">' . $i['tel'] . '</a>
    </div>
  </div>
</div>';
}

function rc_alt() {
	$ik = rc('ik');
	$S = rc();
	$r = rc_kok();
	$i = $S['iletisim'];
	$sut = '';
	foreach ($S['altbilgi'] as $g) {
		$sut .= '<div><h4>' . $g['baslik'] . '</h4><ul>';
		foreach ($g['bag'] as [$a, $y]) $sut .= '<li><a href="' . $r . substr($y, 1) . '">' . $a . '</a></li>';
		if (!empty($g['tumu'])) $sut .= '<li class="tumu"><a href="' . $r . substr($g['tumu'][1], 1) . '">' . $g['tumu'][0] . ' →</a></li>';
		$sut .= '</ul></div>';
	}
	$yasal = '';
	foreach ($S['yasal'] as [$a, $y]) $yasal .= '<a href="' . $r . substr($y, 1) . '">' . $a . '</a>';
	return '<footer class="alt-bilgi">
  <div class="sar">
    <div class="alt-bilgi__ust">
      <div class="alt-bilgi__marka">
        <span class="marka__ad" style="font-size:1.2rem">' . $S['marka'] . '</span>
        <span class="marka__alt" style="display:block;margin-top:3px">' . $S['markaAlt'] . ' · Muayenehane</span>
        <p style="margin-top:16px;font-size:.9rem;max-width:34ch">' . $i['adres'] . '<br>' . $i['ilce'] . '</p>
        <ul style="margin-top:14px">
          <li><a href="tel:' . $i['telHam'] . '">' . $i['tel'] . '</a></li>
          ' . ($i['cepHam'] !== $i['telHam'] ? '<li><a href="tel:' . $i['cepHam'] . '">GSM · ' . $i['cep'] . '</a></li>' : '') . '
          <li><a href="https://wa.me/' . $i['waHam'] . '" rel="noopener">WhatsApp · ' . $i['wa'] . '</a></li>
        </ul>
      </div>
      ' . $sut . '
    </div>
    <div class="alt-bilgi__yasal">
      <div class="satirlar">' . $yasal . '</div>
      <div class="satirlar">
        <span>Muayenehane sahibi ve sorumlu tabip: ' . $S['hekim']['tam'] . '</span>
        <span>' . $S['hekim']['dallar'] . '</span>
      </div>
      <div class="satirlar">
        <span>Son güncelleme: ' . $S['guncelleme'] . '</span>
        <span>© ' . wp_date('Y') . ' ' . $S['marka'] . '</span>
      </div>
    </div>
  </div>
</footer>
<nav class="cubuk" aria-label="Hızlı iletişim">
  <a href="tel:' . $i['telHam'] . '">' . $ik['tel'] . ' Ara</a>
  <button class="cubuk__sor" type="button" data-asistan-ac aria-controls="asis-panel" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5h16v10H9l-5 4z"/><path d="M9 9.5h6M9 12.5h4"/></svg> Sor</button>
  <a class="vurgu" href="' . $r . 'iletisim/">' . $ik['posta'] . ' Randevu</a>
</nav>';
}

/* tıbbi sayfaların sonundaki hekim künyesi (render.js kunye()) */
function rc_kunye() {
	$S = rc();
	return '<div class="kunye">
  <p>Metni hazırlayan ve tıbbi açıdan gözden geçiren: <b>' . $S['hekim']['tam'] . '</b> (' . $S['hekim']['dallar'] . ').</p>
  <div class="kunye__tarih">
    <span>Son güncelleme: <b>' . $S['guncelleme'] . '</b></span>
    <span>Editör: ' . $S['iletisim']['editor'] . '</span>
  </div>
  <p>Buradaki anlatım herkese yöneliktir; size özel bir teşhis ya da tedavi planı sunmaz, muayenenin yerini tutmaz. Her uygulamanın etkisi kişiye göre farklı olur.</p>
</div>';
}
