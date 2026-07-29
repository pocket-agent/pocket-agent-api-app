# Pocket Agent API — Cloudflare Workers deployment

Hono worker: Google JWT verification + proxy to Pocket Node.

## Prerequisites

- Cloudflare account
- `wrangler login` or `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` for CI
- Google OAuth client ID (same as `pocket-agent-web`)
- Pocket Node at a URL (local or Cloudflare Tunnel)

## Secrets (production)

```bash
wrangler secret put GOOGLE_CLIENT_ID --env production
wrangler secret put POCKET_NODE_URL --env production
wrangler secret put ALLOWED_ORIGINS --env production
```

| Secret | Example |
|--------|---------|
| `GOOGLE_CLIENT_ID` | Google Cloud OAuth client ID |
| `POCKET_NODE_URL` | `https://agent.yourdomain.com` (tunnel to `:8787`) |
| `ALLOWED_ORIGINS` | `https://your-pages.pages.dev` |

## Pocket Node + Tunnel

```bash
cd ../pocket-agent && pocket-agent serve
cloudflared tunnel --url http://127.0.0.1:8787
```

Use tunnel HTTPS URL as `POCKET_NODE_URL`.

Flow: **Web (Pages)** → **Worker** → **Tunnel** → **Pocket Node**

## Deploy manually

```bash
npm ci
npm run type-check
wrangler deploy --env production
```

## CI

`.github/workflows/` in this repo.

## Local dev

```bash
cp .env.example .dev.vars
npm run dev
```

## Related

- [../docs/APPS_ARCHITECTURE.md](../docs/APPS_ARCHITECTURE.md)
- [../docs/GOOGLE_OAUTH.md](../docs/GOOGLE_OAUTH.md)
- [../pocket-agent-web/docs/DEPLOYMENT.md](../pocket-agent-web/docs/DEPLOYMENT.md)
