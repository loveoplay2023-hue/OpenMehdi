# 🧠 OpenMehdi — Repository Guidelines

- Repo: https://github.com/loveoplay2023-hue/OpenMehdi
- Nom du projet : **OpenMehdi** (pas openclaw, pas OpenClaw)
- GitHub issues/comments/PR comments: use literal multiline strings or `-F - <<'EOF'` (or `$'...'`) for real newlines; never embed `\n`.

## Project Structure & Module Organization

- Source code: `src/` (CLI wiring in `src/cli`, commands in `src/commands`, web provider in `src/provider-web.ts`, infra in `src/infra`, media pipeline in `src/media`).
- Tests: colocated `*.test.ts`.
- Docs: `docs/` (images, queue, Pi config). Built output lives in `dist/`.
- Plugins/extensions: live under `extensions/*` (workspace packages). Keep plugin-only deps in the extension `package.json`; do not add them to the root `package.json` unless core uses them.
- Plugins: install runs `npm install --omit=dev` in plugin dir; runtime deps must live in `dependencies`. Avoid `workspace:*` in `dependencies` (npm install breaks); put `openmehdi` in `devDependencies` or `peerDependencies` instead (runtime resolves `openmehdi/plugin-sdk` via jiti alias).
- Installers served from `https://openmehdi.ai/*`: live in the sibling repo `../openmehdi.ai` (`public/install.sh`, `public/install-cli.sh`, `public/install.psi`).

## Naming Convention

- **TOUJOURS** utiliser `openmehdi` (minuscule) dans le code
- **TOUJOURS** utiliser `OpenMehdi` (PascalCase) dans la documentation et l'UI
- Ne JAMAIS utiliser `openclaw`, `OpenClaw`, `OPENCLAW` dans ce repo
- Fichier binaire principal : `openmehdi.mjs`
- Config utilisateur : `~/.openmehdi/openmehdi.json`
- Workspace : `~/.openmehdi/workspace/`

## Agents & Personas

Ce repo contient 6 agents spécialisés pour le Marché marocain :

| Agent | Domaine | Langues |
|-------|---------|--------|
| SantePro | Santé & Médecine | AR/FR/Darija |
| TradingPro | Bourse Casablanca (BVC) | FR/AR/EN |
| ImmoMehdi | Immobilier Maroc | FR/AR/Darija |
| DarijaAI | Traduction & Darija | AR/FR/EN/Darija |
| GeoAnalyst | Géophysique & Géologie | FR/AR/EN |
| DevMehdi | Développement logiciel | FR/EN |

Voir [AGENTS-OPENMEHDI.md](./AGENTS-OPENMEHDI.md) pour la documentation complète des agents.

## Development Commands

```bash
# Install
pnpm install

# Build
pnpm build

# Dev mode (auto-reload)
pnpm gateway:watch

# Run TypeScript directly
pnpm openmehdi ...

# Tests
pnpm test

# Onboarding
openmehdi onboard --install-daemon
```

## PR Guidelines

- Utilise des commits conventionnels : `feat:`, `fix:`, `docs:`, `ci:`, `chore:`
- Toujours tester avant de soumettre une PR
- Contributions bienvenues en AR, FR, EN ou Darija
- Voir [CONTRIBUTING.md](./CONTRIBUTING.md) pour les guidelines complètes

## Security

- Ne JAMAIS committer de secrets, API keys, tokens OAuth
- Utiliser `.env.example` avec des valeurs fictives
- Voir [SECURITY.md](./SECURITY.md) pour la politique de sécurité

## Context: OpenMehdi for Maroc

OpenMehdi est conçu pour le marché marocain et la région MENA :
- Multilingue : arabe, français, anglais, darija
- Domaines : Santé, Trading BVC, Immobilier, Géophysique
- Local-first : tes données restent sur ta machine
- Extensible : skills et agents custom
