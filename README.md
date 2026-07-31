<img src=".github/pocket-agent-image.png" width="200" alt="Pocket Agent" align="left"/>

<div>
<h3>Pocket Agent API</h3>
<p>
Hono <strong>Cloudflare Worker</strong> for Pocket Agent — validates Google OAuth ID tokens (or optional local auth bypass) and proxies chat and profile requests to the Pocket Node on your machine.
</p>
<a href="https://github.com/pocket-agent/pocket-agent-desktop-app/releases"><img src="https://img.shields.io/badge/Download%20for%20macOS-007ec6?style=flat-square&logo=apple" width="175" alt="Download for macOS"/></a>
</div>

<br/><br/>

<div align="center">

[![Release](https://img.shields.io/github/v/release/pocket-agent/pocket-agent-api-app)](https://github.com/pocket-agent/pocket-agent-api-app/releases)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/pocket-agent/pocket-agent-api-app/blob/main/LICENSE)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-blue)](https://github.com/pocket-agent/pocket-agent-api-app)
[![CI](https://github.com/pocket-agent/pocket-agent-api-app/actions/workflows/ci.yml/badge.svg)](https://github.com/pocket-agent/pocket-agent-api-app/actions/workflows/ci.yml)

<br/>
<br/>

<img src=".github/screenshot.png" width="824" alt="Pocket Agent" style="border-radius: 5px;"/><br/>

</div>

<hr>

## Features

| Route | Auth | Description |
|-------|------|-------------|
| `GET /health` | No | Liveness |
| `GET /status` | No | Worker + Pocket Node reachability |
| `GET /auth` | Google JWT | Token validation |
| `GET /me` | Google JWT | Profile from claims |
| `POST /chat` | Google JWT | Proxy to Pocket Node |

- Response envelopes from `pocket-agent-sdk`
- CORS via `ALLOWED_ORIGINS`
- Local dev with `wrangler dev` on `:8788`
- Bundled inside the desktop app for offline-local use

## Requirements

- **Node 20+** and npm
- **Wrangler** for local worker dev
- Pocket Node at `POCKET_NODE_URL` (default `http://127.0.0.1:8787`)

## Install

Shipped inside the **Pocket Agent** macOS app, or run locally beside Pocket Node for browser dev.

## Quick start

```bash
cd ../pocket-agent-sdk && npm run build
cp .env.example .dev.vars
npm install
npm run dev
```

Set `GOOGLE_CLIENT_ID` and `POCKET_NODE_URL`. Run `pocket-agent serve` in [pocket-agent](https://github.com/pocket-agent/pocket-agent).

Pair with [pocket-agent-web-app](https://github.com/pocket-agent/pocket-agent-web-app) or [pocket-agent-desktop-app](https://github.com/pocket-agent/pocket-agent-desktop-app).

## Development

```bash
git clone https://github.com/pocket-agent/pocket-agent-api-app.git
cd pocket-agent-api-app
npm install && npm run dev
```

See [INSTRUCTIONS.md](INSTRUCTIONS.md) and [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Documentation

| Doc | Description |
|-----|-------------|
| [INSTRUCTIONS.md](INSTRUCTIONS.md) | Worker scope |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Cloudflare deploy |
| [CHANGELOG.md](CHANGELOG.md) | Release history |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Contributing |

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

Pocket Agent API is released under the [MIT License](LICENSE).
