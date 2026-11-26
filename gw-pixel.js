/* Growth Window – Meta Pixel + funnel events.
   Usage: <script src="/gw-pixel.js" data-pixel="PIXEL_ID" defer></script>
   Fires: PageView, ViewContent, scroll ReadDepth 50/75 (custom), InitiateCheckout on Stripe link clicks. */
(function () {
  var s = document.currentScript, id = s && s.getAttribute('data-pixel');
  if (!id || window.__gwPixel) return; window.__gwPixel = 1;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', id);
  fbq('track', 'PageView');
  var page = location.pathname.replace(/^\/|\.html$/g, '') || 'home';
  var cur = /us|basketball/.test(page) ? 'USD' : 'GBP';
  fbq('track', 'ViewContent', { content_name: page, content_category: 'Growth Window' });

  var fired = {};
  function onScroll() {
    var d = document.documentElement, h = d.scrollHeight - window.innerHeight;
    if (h <= 0) return;
    var pct = (window.scrollY || d.scrollTop) / h * 100;
    [50, 75].forEach(function (p) {
      if (pct >= p && !fired[p]) { fired[p] = 1; fbq('trackCustom', 'Read' + p, { page: page }); }
    });
    if (fired[75]) window.removeEventListener('scroll', onScroll);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="buy.stripe.com"]');
    if (!a) return;
    var txt = (a.textContent || '').toLowerCase();
    var silver = /silver|99|59|full/.test(txt);
    fbq('track', 'InitiateCheckout', { content_name: page, currency: cur, value: silver ? (cur === 'GBP' ? 59 : 99) : 29 });
  }, true);
})();
