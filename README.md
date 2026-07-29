# Pocket Agent API

Hono **Cloudflare Worker** — validates **Google OAuth ID tokens** and proxies to the Pocket Node Python agent.

Workspace: [../docs/WORKSPACE_LAYOUT.md](../docs/WORKSPACE_LAYOUT.md) · Flow: [../docs/APPS_ARCHITECTURE.md](../docs/APPS_ARCHITECTURE.md)

## Auth

1. Web/desktop sign in with **Google** using `GOOGLE_CLIENT_ID`.
2. Client sends `Authorization: Bearer <google_id_token>`.
3. Worker verifies JWT via Google JWKS; checks `aud` matches `GOOGLE_CLIENT_ID`.

## Routes

| Route | Auth | Description |
|-------|------|-------------|
| `GET /health` | No | Liveness |
| `GET /auth` | Google JWT | Token valid + identity |
| `GET /me` | Google JWT | Profile from claims |
| `GET /status` | No | Worker + Pocket Node reachability |
| `POST /chat` | Google JWT | Proxy to `POCKET_NODE_URL` |

## Local dev

```bash
cp .env.example .dev.vars
# GOOGLE_CLIENT_ID, POCKET_NODE_URL=http://127.0.0.1:8787
npm install
npm run dev   # :8788
```

Pair with `../pocket-agent-web-app` and `../core` (`pocket-agent serve`).

Deploy: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) · [INSTRUCTIONS.md](INSTRUCTIONS.md)
