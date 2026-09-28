/* ==========================================================
   Sri Parvathi Rolling — Site script
   Small helpers. The site works without JavaScript; this only adds polish.
   ========================================================== */

// If a photo fails to load, remove it so the colored panel behind it shows instead.
document.querySelectorAll('img[data-fallback]').forEach(function (img) {
  function hide() { img.remove(); }
  if (img.complete && img.naturalWidth === 0) hide();
  else img.addEventListener('error', hide);
});

// Keep the footer year current.
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
