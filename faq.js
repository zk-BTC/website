document.addEventListener("click", function (event) {
  var link = event.target.closest("a.copy-link");
  if (!link) return;
  var href = link.getAttribute("href");
  if (!href || href.charAt(0) !== "#") return;
  if (!navigator.clipboard || !navigator.clipboard.writeText) return;
  var url = new URL(href, window.location.href).href;
  navigator.clipboard.writeText(url).then(function () {
    if (link._copyTimer) {
      window.clearTimeout(link._copyTimer);
    }
    link.setAttribute("data-state", "copied");
    var copied = link.getAttribute("data-copied-label");
    if (copied) {
      if (!link.getAttribute("data-idle-label")) {
        link.setAttribute("data-idle-label", link.getAttribute("aria-label") || "");
      }
      link.setAttribute("aria-label", copied);
    }
    link._copyTimer = window.setTimeout(function () {
      link.removeAttribute("data-state");
      var idle = link.getAttribute("data-idle-label");
      if (idle) {
        link.setAttribute("aria-label", idle);
      }
      link._copyTimer = null;
    }, 1600);
  });
});
