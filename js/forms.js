function handleFormspreeSubmit(e) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('button[type=submit]');
  var orig = btn.textContent;
  btn.textContent = 'Sending...';
  fetch(form.action, { method: form.method, body: new FormData(form), headers: { 'Accept': 'application/json' } })
    .then(function (r) {
      if (r.ok) { btn.textContent = '✓ Sent!'; btn.style.background = '#28a745'; form.reset(); }
      else { btn.textContent = 'Error. Try again'; btn.style.background = '#dc3545'; }
      setTimeout(function () { btn.textContent = orig; btn.style.background = ''; }, 3000);
    }).catch(function () { btn.textContent = 'Error. Try again'; btn.style.background = '#dc3545'; setTimeout(function () { btn.textContent = orig; btn.style.background = ''; }, 3000); });
}