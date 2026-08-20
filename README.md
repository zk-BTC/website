# zkBTC.com

Static site for [zkbtc.com](https://zkbtc.com).

There is **no marketing homepage** yet. `/` serves a `noindex` HTML page with Open Graph tags for `https://zkbtc.com/` and sends humans to `/white-paper/` via script and link. When a homepage ships, `/white-paper/` stays put.

| Path | Role |
| --- | --- |
| `/` | Open Graph HTML for `https://zkbtc.com/` (`noindex`); humans go to `/white-paper/` via script and link |
| `/white-paper/` | English whitepaper PDF (200 proxy via `_redirects`; address bar stays on `/white-paper/`; HTML is a no-chrome fallback) |
| `/de/white-paper/` | German whitepaper PDF (same 200 proxy pattern; HTML is a no-chrome fallback) |
| `/faq/` | English FAQ |
| `/de/faq/` | German FAQ |

PDFs live in `files/` and match the current papers in [zk-BTC/zkbtc](https://github.com/zk-BTC/zkbtc). Refresh them when that repository publishes a new revision.

## Deploy

Static files, no build. Production is Cloudflare Pages project `zkbtc-website` (Direct Upload). Push to `main` runs `.github/workflows/prd.yaml` (`wrangler pages deploy .`). Apex `zkbtc.com` is attached in the infrastructure Terraform; `www` 301-redirects to the apex.

Secrets in this repository:

- `CLOUDFLARE_API_TOKEN` — Pages Edit token
- `CLOUDFLARE_ACCOUNT_ID` — Cloudflare account that owns `zkbtc-website`

The `_redirects` file is the host redirect/proxy table for paper PDFs and alias paths. `index.html` is the document served at `/` (Open Graph plus the user-facing redirect). The white-paper HTML files are a no-chrome PDF fallback for hosts that ignore `_redirects`.

## License

MIT — see [LICENSE](./LICENSE).
