# Contributing

This repository is a static site. Changes land through pull requests into `main`. Do not push directly to `main`.

- Keep `/` a redirect. Do not put the whitepaper body on `/`.
- Keep `/white-paper/` the canonical English paper URL.
- On the production host, `/white-paper/` and `/de/white-paper/` proxy the PDFs in `files/` (200). The HTML under those paths is a no-chrome fallback for hosts that ignore `_redirects`.
- Update both language fallback pages when you change shared paper-page copy.
- When the paper in zk-BTC/zkbtc changes, replace `files/*.pdf` in the same pull request.
- Signed commits. Public-repo text is English.

The site has no application code and no test suite. Check pages locally with any static file server (fallback HTML) and confirm the `_redirects` 200 lines before opening a pull request.
