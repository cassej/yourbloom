// Mobile nav toggle
function toggleMenu() {
  var links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:72px;left:0;right:0;background:var(--cream);padding:20px 8%;border-bottom:1px solid var(--border);z-index:99;gap:16px;';
  }
}

// Cookie consent
if (!localStorage.getItem('cookie_consent')) {
  setTimeout(function () {
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.add('show');
  }, 1000);
}

function acceptCookies() {
  localStorage.setItem('cookie_consent', 'accepted');
  var banner = document.getElementById('cookie-banner');
  if (banner) banner.classList.remove('show');
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', { 'analytics_storage': 'granted' });
  }
}

function declineCookies() {
  localStorage.setItem('cookie_consent', 'declined');
  var banner = document.getElementById('cookie-banner');
  if (banner) banner.classList.remove('show');
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', { 'analytics_storage': 'denied' });
  }
}