/* Dr. Rahmi Cebeci — Klasik Editör eklentisi
   Tablo satırlarının küçük resmi <a class="g-msatir" data-gg="…"> özniteliğinde durur (sitede g.js arka plan yapar).
   - Görsel sekmede bu resimler önizlenir (yalnız editör belgesine <style> eklenir, içeriğe yazılmaz)
   - "Satır görseli" düğmesi: imleç bir satırdayken ortam kütüphanesinden yeni resim seçtirir */
(function () {
  tinymce.PluginManager.add('rcgorsel', function (ed) {
    function onizle() {
      var doc = ed.getDoc();
      if (!doc) return;
      var st = doc.getElementById('rc-gg-onizleme');
      if (!st) { st = doc.createElement('style'); st.id = 'rc-gg-onizleme'; doc.head.appendChild(st); }
      var kurallar = {};
      [].forEach.call(ed.getBody().querySelectorAll('[data-gg]'), function (el) {
        var u = el.getAttribute('data-gg');
        if (u && !kurallar[u]) kurallar[u] = '[data-gg="' + u.replace(/"/g, '\\"') + '"]{--gg:url("' + new URL(u, location.href).href + '")}';
      });
      st.textContent = Object.keys(kurallar).map(function (k) { return kurallar[k]; }).join('\n');
    }
    ed.on('init SetContent Undo Redo', onizle);

    ed.addButton('rcgorsel', {
      icon: 'dashicon dashicons-format-image',
      tooltip: 'Satır görselini değiştir (tablo satırları)',
      onclick: function () {
        var el = ed.dom.getParent(ed.selection.getNode(), '[data-gg]');
        if (!el) {
          ed.windowManager.alert('Önce görselini değiştireceğiniz satırın içine tıklayın (uygulama, bölge ya da cilt sorunu tablolarındaki satırlar).');
          return;
        }
        var cerceve = wp.media({ title: 'Satır görseli', library: { type: 'image' }, multiple: false, button: { text: 'Bu görseli kullan' } });
        cerceve.on('select', function () {
          var ek = cerceve.state().get('selection').first().toJSON();
          var boy = (ek.sizes && (ek.sizes.medium_large || ek.sizes.large)) || ek;
          var u = boy.url.replace(/^https?:\/\/[^/]+/, '');   /* kök-göreli: alan adı değişse de çalışır */
          ed.undoManager.transact(function () { ed.dom.setAttrib(el, 'data-gg', u); });
          ed.setDirty(true);
          ed.nodeChanged();
          onizle();
        });
        cerceve.open();
      },
    });
  });
})();
