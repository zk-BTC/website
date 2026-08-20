document.addEventListener("click", function (event) {
  var link = event.target.closest("a.copy-link");
  if (!link) return;
  var href = link.getAttribute("href");
  if (!href || href.charAt(0) !== "#") return;
  if (!navigator.clipboard || !navigator.clipboard.writeText) return;
  var url = new URL(href, window.location.href).href;
  navigator.clipboard.writeText(url).then(function () {
    if (!link.getAttribute("data-original")) {
      link.setAttribute("data-original", link.textContent);
    }
    if (link._copyTimer) {
      window.clearTimeout(link._copyTimer);
    }
    link.textContent = link.getAttribute("data-copied") || "Copied";
    link._copyTimer = window.setTimeout(function () {
      link.textContent = link.getAttribute("data-original");
      link._copyTimer = null;
    }, 1600);
  });
});
