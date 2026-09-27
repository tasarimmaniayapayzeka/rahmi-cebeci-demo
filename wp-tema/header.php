<?php defined('ABSPATH') || exit; $rc_s = rc_sayfa(); ?><!doctype html>
<html lang="tr">
<head>
<?php echo rc_head($rc_s); wp_head(); ?>
</head>
<body>
<?php wp_body_open(); ?>
<div class="g-okucu" aria-hidden="true"></div>
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<linearGradient id="gDonutGrad" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#E6CF8E"/><stop offset="1" stop-color="#85641C"/>
</linearGradient></defs></svg>
<?php echo rc_ust($rc_s['yol']); ?>

<main id="ana">
