/* Union Home Improvements Ltd — script.js (vanilla JS, no dependencies) */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Logo fallback: assets/logo.jpeg is dropped in by the client. Until
     it exists (or if it ever fails to load), show the text wordmark
     instead of a broken image icon.
     ------------------------------------------------------------------ */
  function markLogoMissing(img) {
    var brand = img.closest('.brand');
    if (brand) brand.classList.add('logo-missing');
  }

  document.querySelectorAll('.logo-img').forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) {
      markLogoMissing(img);
    } else {
      img.addEventListener('error', function () { markLogoMissing(img); });
    }
  });

  /* ------------------------------------------------------------------
     Quote form: submit to Formspree via fetch and show the inline
     success message without leaving the page. If JS is disabled or
     fetch is unavailable, the form falls back to a normal POST to
     Formspree (their hosted thank-you page).
     NOTE: the real Formspree form ID must replace PLACEHOLDER in the
     form's action attribute in quote.html.
     ------------------------------------------------------------------ */
  var form = document.getElementById('quoteForm');
  if (form && window.fetch) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Use native browser validation messages for required fields
      if (!form.reportValidity()) return;

      var errorBox = document.getElementById('formError');
      var successBox = document.getElementById('formSuccess');
      var submitBtn = form.querySelector('button[type="submit"]');

      errorBox.hidden = true;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (!response.ok) throw new Error('Formspree responded with ' + response.status);
          form.hidden = true;
          successBox.hidden = false;
          successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
        .catch(function () {
          errorBox.hidden = false;
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Request My Free Quote';
        });
    });
  }
})();
