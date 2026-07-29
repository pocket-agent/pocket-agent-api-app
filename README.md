# pocket-agent-api-app

Hono **Cloudflare Worker** — validates **Google OAuth ID tokens** and proxies to the Pocket Node.

Part of the open-source **[Pocket Agent](https://github.com/pocket-agent)** ecosystem · **v0.1.0**

## What's included (0.1.0)

| Route | Auth | Description |
|-------|------|-------------|
| `GET /health` | No | Liveness |
| `GET /status` | No | Worker + Pocket Node reachability |
| `GET /auth` | Google JWT | Token validation |
| `GET /me` | Google JWT | Profile from claims |
| `POST /chat` | Google JWT | Proxy to Pocket Node |

- Response envelopes from `@pocket-agent/sdk`
- CORS via `ALLOWED_ORIGINS`
- Local dev with `wrangler dev` on `:8788`

## Quick start

```bash
cd ../pocket-agent-sdk && npm run build
cp .env.example .dev.vars
npm install
npm run dev
```

Set `GOOGLE_CLIENT_ID` and `POCKET_NODE_URL=http://127.0.0.1:8787`. Run `pocket-agent serve` in [pocket-agent](../pocket-agent/).

Pair with [pocket-agent-web-app](../pocket-agent-web-app/) or [pocket-agent-desktop-app](../pocket-agent-desktop-app/).

## Docs

[INSTRUCTIONS.md](INSTRUCTIONS.md) · [CHANGELOG.md](CHANGELOG.md) · [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) · [../docs/APPS_ARCHITECTURE.md](../docs/APPS_ARCHITECTURE.md)
