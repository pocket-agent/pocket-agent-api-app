# Agent instructions — pocket-agent-api

**Scope:** Hono Cloudflare Worker only. Global rules: [../INSTRUCTIONS.md](../INSTRUCTIONS.md).

## Responsibilities

- Verify Google ID tokens (`GOOGLE_CLIENT_ID`)
- CORS for web origins (`ALLOWED_ORIGINS`)
- Proxy `/chat` and status to Pocket Node (`POCKET_NODE_URL`)

## Local dev

```bash
cp .env.example .dev.vars
npm install
npm run dev
```

Default `POCKET_NODE_URL=http://127.0.0.1:8787` — run `pocket-agent serve` in `../pocket-agent`.

## Source layout

```
src/
  index.ts      # Hono app entry
  routes/       # health, auth, me, chat, status
```

## Do not add here

- LLM calls (stay on Pocket Node)
- React UI → `../pocket-agent-web/`
- Python tools → `../pocket-agent/`

## Deploy

[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
