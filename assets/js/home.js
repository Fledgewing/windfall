// Home page: category filter chips and the "Most wanted" list of app requests from GitHub.
(function () {
  var chips = document.querySelector('.chips');
  if (chips) {
    chips.hidden = false;
    chips.addEventListener('click', function (e) {
      var b = e.target.closest('[data-cat]'); if (!b) return;
      var cat = b.getAttribute('data-cat');
      chips.querySelectorAll('[data-cat]').forEach(function (c) { c.setAttribute('aria-pressed', String(c === b)); });
      var shown = 0;
      document.querySelectorAll('.prod[data-cat]').forEach(function (p) { var on = cat === 'All' || p.getAttribute('data-cat') === cat; p.hidden = !on; if (on) shown++; });
      var soonShown = 0;
      document.querySelectorAll('.soon article[data-cat]').forEach(function (p) { var on = cat === 'All' || p.getAttribute('data-cat') === cat; p.hidden = !on; if (on) soonShown++; });
      var soon = document.getElementById('soon'); if (soon) soon.hidden = soonShown === 0;
      document.getElementById('empty').hidden = shown > 0;
    });
  }

  var list = document.getElementById('votes');
  if (!list) return;
  var repo = 'Fledgewing/windfall';
  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  function show(html) { list.innerHTML = html; }
  var q = encodeURIComponent('repo:' + repo + ' is:issue is:open label:app-request');
  fetch('https://api.github.com/search/issues?q=' + q + '&sort=reactions-%2B1&order=desc&per_page=5', { headers: { Accept: 'application/vnd.github+json' } })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (d) {
      if (!d.items || !d.items.length) { show('<li class="mute">No requests yet. Be the first.</li>'); return; }
      show(d.items.map(function (i) {
        var n = (i.reactions && i.reactions['+1']) || 0;
        return '<li><span class="n">▲ ' + n + '</span><a href="' + esc(i.html_url) + '">' + esc(i.title) + '</a></li>';
      }).join(''));
    })
    .catch(function () { show('<li class="mute">Couldn’t load requests right now. See them on GitHub.</li>'); });
})();
