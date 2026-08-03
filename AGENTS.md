# SHAHEEN OS Development Guidelines

Guidelines for using AI coding agents in this open-source SHAHEEN OS repository.

## Tech Stack

- Next.js 16 + React 19 + TypeScript
- SPA inside Next.js with `react-router-dom`
- `@lobehub/ui` and related packages are part of the monorepo; do not rename package scopes in this change
- react-i18next for i18n; zustand for state management
- SWR for data fetching; TRPC for type-safe backend
- Drizzle ORM with PostgreSQL; Vitest for testing

## Project Structure

```plaintext
SHAHEEN-OS/
├── apps/
│   ├── desktop/            # Electron desktop app
│   ├── cli/                # CLI
│   └── server/             # Backend service
├── packages/               # Shared packages
│   ├── database/           # Database schemas, models, repositories
│   └── ...
├── src/
└── e2e/                    # E2E tests (Cucumber + Playwright)
```

## SPA Routes and Features

SPA-related code is grouped under `src/spa/` (entries + router) and `src/routes/` (page segments). We use a roots vs features split: route trees only hold page segments; business logic and UI live under `src/features/`.

## Development

### Starting the Dev Environment

```bash
# SPA dev mode (frontend only, proxies API to localhost:3010)
bun run dev:spa

# Full-stack dev (Next.js + Vite SPA concurrently)
pnpm run dev

# Standalone backend service
pnpm --filter @lobechat/server dev
```

### Git Workflow

- Branch strategy: `canary` is the development branch (cloud production); `main` is the release branch
- New branches should be created from `canary`; PRs should target `canary`
- Use rebase for `git pull`
- Commit messages: prefix with gitmoji

### Package Management

- `pnpm` for dependency management
- `bun` to run npm scripts

### Quality Check

```bash
bun run check [changed-files...]
```

### i18n

- Add keys to a namespace file under `packages/locales/src/default/` (e.g. `agent.ts`, `auth.ts`)

### Code Style

- Keep files focused; split files over ~800 lines

---

This guide replaces previous branding references. All outward-facing text in docs, badges, meta and assets should use the SHAHEEN OS identity. Internal package scopes such as `@lobehub/*` and `@lobechat/*` are unchanged to preserve build behavior and imports.
