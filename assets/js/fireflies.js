// Fireflies drifting in the home hero. Decorative only; stills when reduced motion is preferred.
(function () {
  var c = document.getElementById('fx'); if (!c || !c.getContext) return;
  var x = c.getContext('2d'), dpr = Math.min(2, window.devicePixelRatio || 1);
  var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function size() { c.width = c.clientWidth * dpr; c.height = c.clientHeight * dpr; }
  size(); window.addEventListener('resize', size);
  var flies = [];
  for (var i = 0; i < 46; i++) flies.push({ x: Math.random(), y: Math.random(), r: 1 + Math.random() * 2.2, p: Math.random() * 6.28, s: .0005 + Math.random() * .001 });
  function draw(t) {
    x.clearRect(0, 0, c.width, c.height);
    for (var i = 0; i < flies.length; i++) {
      var f = flies[i], a = .3 + .7 * Math.abs(Math.sin(t * .0011 + f.p));
      var px = (f.x + Math.sin(t * f.s + f.p) * .02) * c.width, py = (f.y + Math.cos(t * f.s * 1.3 + f.p) * .03) * c.height, R = f.r * 6 * dpr;
      var g = x.createRadialGradient(px, py, 0, px, py, R);
      g.addColorStop(0, 'rgba(255,181,71,' + a + ')'); g.addColorStop(1, 'rgba(255,181,71,0)');
      x.fillStyle = g; x.beginPath(); x.arc(px, py, R, 0, 6.28); x.fill();
    }
    if (!still && !document.hidden) requestAnimationFrame(draw);
  }
  document.addEventListener('visibilitychange', function () { if (!document.hidden && !still) requestAnimationFrame(draw); });
  requestAnimationFrame(draw);
})();
