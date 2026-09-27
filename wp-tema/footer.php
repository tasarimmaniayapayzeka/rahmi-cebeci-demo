<?php defined('ABSPATH') || exit; $rc_s = rc_sayfa();
if ($rc_s['tip'] === 'tibbi') echo '<div class="sar sar--dar">' . rc_kunye() . '</div>'; ?>

</main>
<?php echo rc_alt(); ?>

<?php echo rc_betikler($rc_s); wp_footer(); ?>
</body>
</html>
