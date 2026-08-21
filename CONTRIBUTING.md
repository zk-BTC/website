# Contributing

This repository is a static site. Changes land through pull requests into `main`. Do not push directly to `main`.

- Keep `/` a user-facing redirect to `/white-paper/` via `index.html` (script + link). Do not HTTP-301 `/` at the edge. Share crawlers must receive that HTML with `og:title`, `og:description`, and `og:image` for `https://zkbtc.com/`. Do not put a generic `robots noindex` on `/` (Googlebot-only noindex is fine). Do not put the whitepaper body on `/`. Do not send known share-crawler user-agents through the script redirect.
- Keep `/white-paper/` the canonical English paper URL.
- On the production host, `/white-paper/` and `/de/white-paper/` proxy the PDFs in `files/` (200). The HTML under those paths is a no-chrome fallback for hosts that ignore `_redirects`.
- Update both language fallback pages when you change shared paper-page copy.
- When the paper in zk-BTC/zkbtc changes, replace `files/*.pdf` in the same pull request.
- Signed commits. Public-repo text is English.

The site has no application code and no test suite. Check pages locally with any static file server (root HTML and paper fallbacks) and confirm the `_redirects` 200 lines for the paper URLs before opening a pull request. `/` must not be an edge 301.
