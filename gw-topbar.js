/* Growth Window top bar: real Black Friday countdown (UK only, hides itself at the deadline) + rotating trust messages.
   Usage: <script src="/gw-topbar.js" data-region="uk|us" defer></script> */
(function () {
  var me = document.currentScript || document.querySelector('script[src*="gw-topbar.js"]');
  var region = (me && me.getAttribute('data-region')) || 'uk';
  var END = Date.parse('2026-12-01T00:00:00Z'); // midnight Mon 30 Nov (UK)
  var bf = region === 'uk' && Date.now() < END;
  var sport = (me && me.getAttribute('data-sport')) || (region === 'us' ? 'soccer' : 'football');
  var icon = sport === 'basketball' ? '🏀' : '⚽';
  var msgs = [
    '<span class="gwtb-st">★★★★★</span> 5-star reviews from ' + sport + ' parents',
    '🛡️ 14-day money-back guarantee',
    icon + ' Built by a ' + sport + ' dad, for ' + sport + ' parents',
    '📩 Your report lands in minutes',
    '🏠 5 minutes at home. No X-ray'
  ];
  var css = '.gwtb{font-family:inherit;text-align:center;line-height:1.3;position:relative;z-index:50}' +
    '.gwtb-cd{background:#0D2041;color:#fff;padding:10px 12px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:6px 18px}' +
    '.gwtb-cd b{color:#FFC629;font-weight:900;letter-spacing:.02em;text-transform:uppercase;font-size:15px}' +
    '.gwtb-cd small{display:block;font-size:12.5px;opacity:.85;font-weight:600}' +
    '.gwtb-t{display:flex;gap:6px;font-variant-numeric:tabular-nums}' +
    '.gwtb-u{display:flex;flex-direction:column;align-items:center;min-width:38px}' +
    '.gwtb-u span{font-size:22px;font-weight:900;color:#fff;line-height:1}' +
    '.gwtb-u em{font-style:normal;font-size:10px;opacity:.75;text-transform:uppercase;letter-spacing:.06em;margin-top:2px}' +
    '.gwtb-sep{font-size:20px;font-weight:900;opacity:.5;line-height:1}' +
    '.gwtb-m{background:#FFC629;color:#0D2041;font-weight:800;font-size:14px;padding:8px 12px;min-height:19px}' +
    '.gwtb-m span{transition:opacity .35s}.gwtb-m{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:13.5px}.gwtb-st{color:#0D2041;letter-spacing:1px}' +
    '@media (prefers-reduced-motion:reduce){.gwtb-m span{transition:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var bar = document.createElement('div'); bar.className = 'gwtb'; bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', 'Offers and guarantees');
  var h = '';
  if (bf) {
    h += '<div class="gwtb-cd"><div><b>Black Friday: £40 off the full report</b><small>£99 → £59. Code applied automatically at checkout.</small></div>' +
      '<div class="gwtb-t" aria-label="Time left"><div class="gwtb-u"><span data-k="d">0</span><em>Days</em></div><div class="gwtb-sep">:</div>' +
      '<div class="gwtb-u"><span data-k="h">00</span><em>Hrs</em></div><div class="gwtb-sep">:</div>' +
      '<div class="gwtb-u"><span data-k="m">00</span><em>Mins</em></div><div class="gwtb-sep">:</div>' +
      '<div class="gwtb-u"><span data-k="s">00</span><em>Secs</em></div></div></div>';
  }
  h += '<div class="gwtb-m" aria-live="polite"><span>' + msgs[0] + '</span></div>';
  bar.innerHTML = h;
  function mount() {
    document.querySelectorAll('.announce').forEach(function (a) { a.style.display = 'none'; });
    document.body.insertBefore(bar, document.body.firstChild);
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
  if (bf) {
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    var tick = function () {
      var left = END - Date.now();
      if (left <= 0) { var cd = bar.querySelector('.gwtb-cd'); if (cd) cd.remove(); clearInterval(iv); return; }
      var s = Math.floor(left / 1000);
      bar.querySelector('[data-k=d]').textContent = Math.floor(s / 86400);
      bar.querySelector('[data-k=h]').textContent = p(Math.floor(s % 86400 / 3600));
      bar.querySelector('[data-k=m]').textContent = p(Math.floor(s % 3600 / 60));
      bar.querySelector('[data-k=s]').textContent = p(s % 60);
    };
    tick(); var iv = setInterval(tick, 1000);
  }
  var i = 0, span = bar.querySelector('.gwtb-m span');
  setInterval(function () {
    span.style.opacity = 0;
    setTimeout(function () { i = (i + 1) % msgs.length; span.innerHTML = msgs[i]; span.style.opacity = 1; }, 350);
  }, 3500);
})();
