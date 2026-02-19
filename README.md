# 🐍 OpenMehdi — Personal AI Assistant

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=700&size=40&duration=3000&pause=1000&color=00D4FF&center=true&vCenter=true&width=600&lines=🐍+OpenMehdi;Personal+AI+Assistant;Multi-Agent+%7C+Local-First" alt="OpenMehdi Logo" />
</p>

<p align="center">
  <strong>🐍 Un serpent cobra du désert 🐍</strong>
</p>

<p align="center">
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi/actions/workflows/ci.yml?branch=main"><img src="https://img.shields.io/github/actions/workflow/status/loveoplay2023-hue/OpenMehdi/ci.yml?branch=main&style=for-the-badge" alt="CI status"></a>
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi/releases"><img src="https://img.shields.io/github/v/release/loveoplay2023-hue/OpenMehdi?include_prereleases&style=for-the-badge" alt="GitHub release"></a>
  <a href="https://discord.gg/clawd"><img src="https://img.shields.io/discord/1456350064065904867?label=Discord&logo=discord&logoColor=white&color=5865F2&style=for-the-badge" alt="Discord"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License"></a>
</p>
**OpenMehdi** is a _personal AI assistant_ you run on your own devices.
It answers you on the channels you already use (WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, iMessage, Microsoft Teams, WebChat), plus extension channels like BlueBubbles, Matrix, Zalo, and Zalo Personal. It can speak and listen on macOS/iOS/Android, and can render a live Canvas you control. The Gateway is just the control plane — the product is the assistant.
If you want a personal, single-user assistant that feels local, fast, and always-on, this is it.

[Website](https://openmehdi.ai) · [Docs](https://docs.openmehdi.ai) · [Vision](VISION.md) · [DeepWiki](https://deepwiki.com/openmehdi/openmehdi) · [Getting Started](https://docs.openmehdi.ai/start/getting-started) · [Updating](https://docs.openmehdi.ai/install/updating) · [Showcase](https://docs.openmehdi.ai/start/showcase) · [FAQ](https://docs.openmehdi.ai/start/faq) · [Wizard](https://docs.openmehdi.ai/start/wizard) · [Nix](https://github.com/openmehdi/nix-openmehdi) · [Docker](https://docs.openmehdi.ai/install/docker) · [Discord](https://discord.gg/clawd)

Preferred setup: run the onboarding wizard (`openmehdi onboard`) in your terminal.
The wizard guides you step by step through setting up the gateway, workspace, channels, and skills. The CLI wizard is the recommended path and works on **macOS, Linux, and Windows (via WSL2; strongly recommended)**.
Works with npm, pnpm, or bun.

New install? Start here: [Getting started](https://docs.openmehdi.ai/start/getting-started)

**Subscriptions (OAuth):**
- **[Anthropic](https://www.anthropic.com/)** (Claude Pro/Max)
- **[OpenAI](https://openai.com/)** (ChatGPT/Codex)

Model note: while any model is supported, I strongly recommend **Anthropic Pro/Max (100/200) + Opus 4.6** for long‑context strength and better prompt‑injection resistance. See [Onboarding](https://docs.openmehdi.ai/start/onboarding).

## Models (selection + auth)

- Models config + CLI: [Models](https://docs.openmehdi.ai/concepts/models)
- Auth profile rotation (OAuth vs API keys) + fallbacks: [Model failover](https://docs.openmehdi.ai/concepts/model-failover)

## Install (recommended)

Runtime: **Node ≥22**.

```bash
npm install -g openmehdi@latest
# or: pnpm add -g openmehdi@latest
openmehdi onboard --install-daemon
```

The wizard installs the Gateway daemon (launchd/systemd user service) so it stays running.

## Quick start (TL;DR)

Runtime: **Node ≥22**. Full beginner guide (auth, pairing, channels): [Getting started](https://docs.openmehdi.ai/start/getting-started)

```bash
openmehdi onboard --install-daemon
openmehdi gateway --port 18789 --verbose
# Send a message
openmehdi message send --to +1234567890 --message "Hello from OpenMehdi"
# Talk to the assistant
openmehdi agent --message "Ship checklist" --thinking high
```

Upgrading? [Updating guide](https://docs.openmehdi.ai/install/updating) (and run `openmehdi doctor`).

## Development channels

- **stable**: tagged releases, npm dist-tag `latest`.
- **beta**: prerelease tags, npm dist-tag `beta`.
- **dev**: moving head of `main`, npm dist-tag `dev`.

Switch channels: `openmehdi update --channel stable|beta|dev`. Details: [Development channels](https://docs.openmehdi.ai/install/development-channels).

## From source (development)

Prefer `pnpm` for builds from source.

```bash
git clone https://github.com/openmehdi/openmehdi.git
cd openmehdi
pnpm install
pnpm ui:build
pnpm build
pnpm openmehdi onboard --install-daemon
# Dev loop
pnpm gateway:watch
```

## Security defaults (DM access)

OpenMehdi connects to real messaging surfaces. Treat inbound DMs as **untrusted input**. Full security guide: [Security](https://docs.openmehdi.ai/gateway/security)

## Highlights

- **[Local-first Gateway](https://docs.openmehdi.ai/gateway)** — single control plane for sessions, channels, tools, and events.
- **[Multi-channel inbox](https://docs.openmehdi.ai/channels)** — WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, BlueBubbles (iMessage), Microsoft Teams, Matrix, Zalo, WebChat.
- **[Multi-agent routing](https://docs.openmehdi.ai/gateway/configuration)** — route inbound channels/accounts/peers to isolated agents.
- **[Voice Wake](https://docs.openmehdi.ai/nodes/voicewake) + [Talk Mode](https://docs.openmehdi.ai/nodes/talk)** — always-on speech for macOS/iOS/Android.
- **[Live Canvas](https://docs.openmehdi.ai/platforms/mac/canvas)** — agent-driven visual workspace.
- **[First-class tools](https://docs.openmehdi.ai/tools)** — browser, canvas, nodes, cron, sessions.
- **[Companion apps](https://docs.openmehdi.ai/platforms/macos)** — macOS menu bar app + iOS/Android nodes.
- **[Onboarding](https://docs.openmehdi.ai/start/wizard) + [skills](https://docs.openmehdi.ai/tools/skills)** — wizard-driven setup.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=loveoplay2023-hue/OpenMehdi&type=Timeline&theme=dark)](https://star-history.com/#loveoplay2023-hue/OpenMehdi&Timeline)

## Everything we built so far

### Core platform

- [Gateway WS control plane](https://docs.openmehdi.ai/gateway) with sessions, presence, config, cron, webhooks.
- [CLI surface](https://docs.openmehdi.ai/tools/agent-send): gateway, agent, send, wizard, and doctor.
- [Pi agent runtime](https://docs.openmehdi.ai/concepts/agent) in RPC mode with tool streaming.
- [Session model](https://docs.openmehdi.ai/concepts/session): `main` for direct chats, group isolation, activation modes.
- [Media pipeline](https://docs.openmehdi.ai/nodes/images): images/audio/video, transcription hooks.

### Channels

- [Channels](https://docs.openmehdi.ai/channels): WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, BlueBubbles, iMessage, Microsoft Teams, Matrix, Zalo, WebChat.
- [Group routing](https://docs.openmehdi.ai/concepts/group-messages): mention gating, reply tags, per-channel chunking.

### Apps + nodes

- [macOS app](https://docs.openmehdi.ai/platforms/macos): menu bar, Voice Wake, Talk Mode, WebChat, debug tools.
- [iOS node](https://docs.openmehdi.ai/platforms/ios): Canvas, Voice Wake, Talk Mode, camera, screen recording.
- [Android node](https://docs.openmehdi.ai/platforms/android): Canvas, Talk Mode, camera, screen recording, SMS.

### Tools + automation

- [Browser control](https://docs.openmehdi.ai/tools/browser): dedicated Chrome/Chromium, snapshots, actions, uploads.
- [Canvas](https://docs.openmehdi.ai/platforms/mac/canvas): A2UI push/reset, eval, snapshot.
- [Cron + wakeups](https://docs.openmehdi.ai/automation/cron-jobs); [webhooks](https://docs.openmehdi.ai/automation/webhook); [Gmail Pub/Sub](https://docs.openmehdi.ai/automation/gmail-pubsub).
- [Skills platform](https://docs.openmehdi.ai/tools/skills): bundled, managed, and workspace skills.

## How it works (short)

```
WhatsApp / Telegram / Slack / Discord / Google Chat / Signal / iMessage / Microsoft Teams / WebChat
                               │
                               ▼
              ┌───────────────────────────────┐
              │          Gateway              │
              │       (control plane)         │
              │   ws://127.0.0.1:18789        │
              └──────────────┬────────────────┘
                             │
                             ├─ Pi agent (RPC)
                             ├─ CLI (openmehdi …)
                             ├─ WebChat UI
                             ├─ macOS app
                             └─ iOS / Android nodes
```

## Chat commands

- `/status` — compact session status
- `/new` or `/reset` — reset the session
- `/compact` — compact session context
- `/think <level>` — off|minimal|low|medium|high|xhigh
- `/verbose on|off`
- `/usage off|tokens|full`
- `/restart` — restart the gateway
- `/activation mention|always`

## Configuration

Minimal `~/.openmehdi/openmehdi.json`:

```json5
{
  agent: {
    model: "anthropic/claude-opus-4-6",
  },
}
```

[Full configuration reference.](https://docs.openmehdi.ai/gateway/configuration)

## OpenMehdi

🐍 **OpenMehdi** est un assistant IA personnel puissant, multi-agent et Local-First.
Créé pour la communauté, propulsé par l'IA.

- [openmehdi.ai](https://openmehdi.ai)
- [VISION.md](VISION.md)
- [@openmehdi](https://x.com/openmehdi)

## Community

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines, maintainers, and how to submit PRs. AI/vibe-coded PRs welcome! 🤖

Special thanks to [Mario Zechner](https://mariozechner.at/) for his support and for [pi-mono](https://github.com/badlogic/pi-mono).

Thanks to all contributors!
