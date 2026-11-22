// Install guide: show one device/browser guide at a time, starting with the visitor's own.
(function () {
  var tabs = document.querySelector('.ptabs'); if (!tabs) return;
  var guides = document.querySelectorAll('.guide');
  function guess() {
    var u = navigator.userAgent, ios = /iPhone|iPad|iPod/.test(u) || (/Macintosh/.test(u) && navigator.maxTouchPoints > 1);
    if (ios) return /CriOS|EdgiOS/.test(u) ? 'ios-chrome' : 'ios-safari';
    if (/Android/.test(u)) return /EdgA/.test(u) ? 'android-edge' : 'android-chrome';
    if (/Edg\//.test(u)) return 'desktop-edge';
    if (/Chrome\//.test(u)) return 'desktop-chrome';
    if (/Safari\//.test(u) && /Macintosh/.test(u)) return 'mac-safari';
    return null;
  }
  function pick(id) {
    guides.forEach(function (g) { g.hidden = g.id !== id; });
    tabs.querySelectorAll('[data-g]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-g') === id)); });
  }
  tabs.hidden = false;
  var hash = location.hash.slice(1), g = guess();
  var start = document.getElementById(hash) && hash || g || 'desktop-chrome';
  if (g && start === g) document.getElementById('detect').hidden = false;
  pick(start);
  tabs.addEventListener('click', function (e) { var b = e.target.closest('[data-g]'); if (b) { pick(b.getAttribute('data-g')); history.replaceState(null, '', '#' + b.getAttribute('data-g')); } });
})();
