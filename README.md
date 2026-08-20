# zkBTC.com

Static site for [zkbtc.com](https://zkbtc.com).

There is **no marketing homepage** yet. `/` permanently redirects to `/white-paper/` so search engines list the paper at its final URL from day one. When a homepage ships, `/white-paper/` stays put.

| Path | Role |
| --- | --- |
| `/` | 301 to `/white-paper/` (`noindex`) |
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

The `_redirects` file is the host redirect/proxy table; `index.html` is a fallback redirect for hosts that ignore `_redirects`. The white-paper HTML files are a no-chrome PDF fallback for the same reason.

## License

MIT — see [LICENSE](./LICENSE).
