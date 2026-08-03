# 🚀 SHAHEEN OS

## 🌌 About
SHAHEEN OS is a production-ready AI agent platform that orchestrates, schedules, and operates AI agents at scale, designed for teams and self-hosting. It provides a unified workspace where agents (autonomous processes, integrations, and workflows) collaborate, learn, and deliver outcomes under human governance.

## ✨ Overview
SHAHEEN OS combines a web frontend, edge-capable backend services, and extensible plugin systems—allowing rapid agent creation, integration with multiple LLM providers, secure data storage, and enterprise deployment.

## 🎯 Vision
To create an open, extensible, and privacy-first operating system for human-AI collaboration: where AI agents augment teams reliably, transparently, and safely.

## 💡 Mission
Deliver a robust platform that simplifies agent orchestration, offers consistent developer experience, and enables production-grade deployment for businesses and individuals.

## 🔥 Highlights
- Agent lifecycle management (create, schedule, monitor, version)
- Multi-provider model support (OpenAI, Anthropic, Bedrock, local runtimes)
- Plugin ecosystem for extensibility
- Self-hosted and cloud deployment options with production-grade defaults

## ⭐ Features
- Agent Builder & Templates
- Agent Groups & Workspaces
- Persistent, editable agent memory
- Integrations: IM Gateways, Cloud Storage, Webhooks
- Rich UI with SPA and Electron variants
- Observability and tracing

## 🧠 AI Capabilities
- Multi-model routing and orchestration
- Contextual memory and retrieval
- Tooling and function-call style plugins
- Image generation and multimodal support

## 🤖 Supported Models
- OpenAI (GPT family)
- Anthropic
- AWS Bedrock-compatible runtimes
- Hugging Face / Local runtimes (ollama, custom endpoints)
- Provider-agnostic plugin model adapters

## 🔌 Integrations
- IM Gateways (Slack, Discord, Telegram)
- Cloud storage & S3-compatible storage
- SMTP/Email providers
- OAuth/OIDC providers (Better-Auth integration)
- Observability (OpenTelemetry)

## 🧩 Plugins
- Plugin architecture supports 1) tool plugins, 2) UI extensions, 3) runtime connectors.
- Marketplace-compatible plugin registry (configure via PLUGINS_INDEX_URL).

## 🛠 Tools
- CLI tools for local management
- Web SPA (Vite)
- Next.js server shell
- Electron desktop app template
- E2E test harness with Playwright + Cucumber

## 🏗 Architecture
- Frontend: Vite SPA + Next.js app shell
- Backend: Hono-like server, TRPC endpoints, and worker/cron layers
- Datastore: Postgres via Drizzle ORM
- Cache/queue: Redis
- Storage: S3-compatible (configurable)
- CI/CD: GitHub Actions / container images

## 📐 System Design
- Micro-monorepo structure (apps/, packages/) for modularity
- Agents are runtime processes backed by persistence and memory stores
- Secure secret storage and key management recommended (KEY_VAULTS_SECRET)

## 🔄 Workflow
- Create agent templates → instantiate agent → connect skills/plugins → schedule runs → observe logs/metrics → iterate

## 📊 Performance
- Scales horizontally via containerized services
- Worker pools and Redis-backed queues for throughput
- Observability with tracing & metrics

## 🔐 Security
- Content Security Policy controls (ENABLED_CSP)
- SSRF protection defaults enabled
- Use of encryption keys for secrets and API keys
- Configurable OAuth and SSO integrations

## 🛡 Privacy
- Data residency via S3 endpoints
- Configurable retention and memory purging
- Explicit opt-in for externally-sent telemetry

## 🌐 Deployment
- Supports container-based deployment, serverless, and managed hosting.

## ☁️ Cloud Deployment
- Docker Compose / Kubernetes manifests supported
- Use environment examples to configure: .env.example, docker-compose/*/.env.example

## 🖥 Self Hosting
- Run on your infrastructure with Docker Compose for full-stack (Postgres, Redis, RustFS)
- Recommended production setup: separate Postgres, Redis, object storage, and managed secrets

## 📦 Installation
- Clone repository
- pnpm install
- Configure .env with production values
- Run database migrations
- Build static assets and start services

## ⚙️ Configuration
- Use .env files for runtime configuration.
- Do not commit secrets.
- Keep env keys stable; examples are provided in .env.example.

## 🔑 Environment Variables
(Examples in .env.example; DO NOT change keys unless migrating)
- APP_URL, DATABASE_URL, REDIS_URL, OPENAI_API_KEY, AUTH_SECRET, KEY_VAULTS_SECRET, etc.

## 💻 Development
- Dev SPA: pnpm run dev:spa
- Dev Next: pnpm run dev:next
- Full dev: pnpm run dev (spawns all relevant services or see scripts)

## 🎨 Frontend Development
- SPA entry points: src/spa/entry.web.tsx, entry.mobile.tsx, entry.desktop.tsx
- Use Vite for HMR during UI development

## ⚙️ Backend Development
- Server entry under apps/server.
- TRPC endpoints and Hono-like handlers visible in apps/server/src

## 🧪 Testing
- Unit tests: vitest (see scripts)
- E2E: e2e folder with Cucumber + Playwright
- Run Playwright browsers: npx playwright install chromium

## ✅ Quality Assurance
- ESLint, Prettier, stylelint are configured
- Lint and type-check prior to PRs

## 📚 Documentation
- Docs in docs/ and markdown files in repo
- Auto-i18n pipeline and mdx linting present

## 🔗 API Documentation
- OpenAPI specs (if present) are published in packages/openapi or generated via openapi-typescript scripts

## 🗄 Database
- Postgres with Drizzle ORM
- Migrations via drizzle-kit
- Drizzle config at drizzle.config.ts

## 🧠 Machine Learning Pipeline
- Model selection via provider adapters
- Configured batching and concurrency for embeddings
- Plugin-compatible model runtime

## 📁 Project Structure
(See AGENTS.md and packages/ layout; top-level includes apps/, packages/, docs/, public/)

## 🗂 Repository Structure
- apps/ — desktop, cli, server
- packages/ — shared packages and libraries
- e2e/ — end-to-end tests
- src/ — web app shell & SPA code
- public/ — static assets and manifest

## 🧬 Technology Stack
- TypeScript, Next.js, Vite, React 19, Drizzle ORM, Redis, Postgres, Node runtime, PNPM monorepo

## 🛠 Developer Tools
- pnpm, bun (used in scripts), tsx, vitest, playwright, prettier, eslint

## 🧰 Requirements
- Node 20+ (or as per .nvmrc), pnpm >= 7, Docker for containerized deployment

## 📋 Prerequisites
- Postgres DB
- Redis
- S3-compatible storage if using image pipeline

## 🚀 Quick Start
1. pnpm install
2. cp .env.example .env
3. Configure .env values
4. pnpm run build
5. pnpm run start

## 📝 Usage
- Web UI at APP_URL
- CLI commands via apps/cli if linked

## 💬 Examples
- Agent creation CLI and SPA flows (see docs/features and AGENTS.md)

## 🎨 Customization
- Plugin configuration via PLUGINS_INDEX_URL and PLUGIN_SETTINGS env
- Theme via next-themes and CSS variables

## 🔧 Advanced Configuration
- TLS, CDN asset prefix via NEXT_PUBLIC_ASSET_PREFIX, standalone Docker builds (DOCKER=true)

## 🧱 Building From Source
- root scripts: build (see package.json scripts) — follow the scripts order for SPA and next builds

## 🐳 Docker
- Provided Dockerfile and docker-compose templates in docker-compose/

## ☸️ Kubernetes
- Deploy using your own k8s manifests; recommended to use separate services for db/cache/storage

## ☁️ Infrastructure
- Recommended: managed Postgres + Redis + S3 + Secrets Manager

## 🔄 CI/CD
- GitHub Actions workflows present in .github/workflows — update badges only (we will not change workflow logic)

## 🔁 Continuous Integration
- CI scripts run lint/test/build steps — adjust secrets at repo settings

## 📈 Roadmap
- Expand model adapters, plugin marketplace, enterprise auth connectors, team management UX

## 🗓 Milestones
- v1: core agent runtime, SPA, CLI, basic plugins
- v1.1: marketplace integration, scheduling, memory persistence

## 🚧 Current Status
- Active development. Some features are in alpha; see CHANGELOG.md for details.

## 🐛 Known Issues
- Consult project issue tracker for up-to-date list

## 📝 Changelog
- CHANGELOG.md holds release notes and history

## 🔄 Migration Guide
- Pending for package scope changes; see MIGRATION_NOTES.md if requested

## 🤝 Contributing
- See CONTRIBUTING.md for contribution guidelines and code of conduct

## 🧑‍💻 Contributors
- See contributors list on GitHub

## 💖 Sponsors
- Sponsor information and links (if any)

## 🌍 Community
- Discussions and chat links (discord or other) — update contact info as needed

## 💬 Discussions
- Use GitHub Discussions or repo issue tracker for community topics

## 📢 Announcements
- Use project channels; see README header for links

## 📜 License
- Project license header updated to © 2026 Yousef Z. A. Shaheen. All Rights Reserved.
- Full license text in LICENSE

## ⚖️ Legal
- Legal and licensing queries -> contact via OWNER email (see OWNERSHIP.md)

## 🙏 Acknowledgements
- Thanks to contributors and upstream projects

## ⭐ Star History
- Updated star-history link to reflect https://github.com/0ll-ai/SHAHEEN-OS

## 📞 Contact
- Owner: Yousef Z. A. Shaheen — contact details in OWNERSHIP.md

## 🔗 Links
- Repository: https://github.com/0ll-ai/SHAHEEN-OS
- Issues: https://github.com/0ll-ai/SHAHEEN-OS/issues

## 🏆 Credits
- Project founder and owner: Yousef Z. A. Shaheen
