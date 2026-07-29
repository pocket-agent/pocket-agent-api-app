# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-07-29

### Added

- **Hono Cloudflare Worker** — TypeScript API at `:8788` (`wrangler dev` / `wrangler deploy`)
- **Google OAuth** — verify ID tokens via Google JWKS; `GOOGLE_CLIENT_ID` must match web/desktop
- **Routes** — `GET /health`, `GET /status`, `GET /auth`, `GET /me`, `POST /chat`
- **Pocket Node proxy** — forwards authenticated chat to `POCKET_NODE_URL` (default `127.0.0.1:8787`)
- **Standardized responses** — `{ success, data }` / `{ success: false, error }` via `@pocket-agent/sdk`
- **CORS** — configurable `ALLOWED_ORIGINS` for local and production frontends

---

## Repository documents

[README](README.md) | [INSTRUCTIONS](INSTRUCTIONS.md) | **CHANGELOG** | [CONTRIBUTING](CONTRIBUTING.md) | [SECURITY](SECURITY.md) | [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)
