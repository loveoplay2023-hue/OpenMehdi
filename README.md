# 🦞 OpenMehdi — Personal AI Assistant

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/loveoplay2023-hue/OpenMehdi/main/docs/assets/openmehdi-logo-text-dark.png">
    <img src="https://raw.githubusercontent.com/loveoplay2023-hue/OpenMehdi/main/docs/assets/openmehdi-logo-text.png" alt="OpenMehdi" width="500">
  </picture>
</p>

<p align="center">
  <strong>EXFOLIATE! EXFOLIATE!</strong>
</p>

<p align="center">
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi/actions/workflows/ci.yml?branch=main"><img src="https://img.shields.io/github/actions/workflow/status/loveoplay2023-hue/OpenMehdi/ci.yml?branch=main&style=for-the-badge" alt="CI status"></a>
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi/releases"><img src="https://img.shields.io/github/v/release/loveoplay2023-hue/OpenMehdi?include_prereleases&style=for-the-badge" alt="GitHub release"></a>
  <a href="https://discord.gg/clawd"><img src="https://img.shields.io/discord/1456350064065904867?label=Discord&logo=discord&logoColor=white&color=5865F2&style=for-the-badge" alt="Discord"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License"></a>
</p>

**OpenMehdi** is a _personal AI assistant_ you run on your own devices. It answers you on the channels you already use (WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, iMessage, Microsoft Teams, WebChat), plus extension channels like BlueBubbles, Matrix, Zalo, and Zalo Personal. It can speak and listen on macOS/iOS/Android, and can render a live Canvas you control. The Gateway is just the control plane — the product is the assistant.

If you want a personal, single-user assistant that feels local, fast, and always-on, this is it.

[Website](https://openmehdi.ai) · [Docs](https://docs.openmehdi.ai) · [Vision](VISION.md) · [DeepWiki](https://deepwiki.com/loveoplay2023-hue/OpenMehdi) · [Getting Started](https://docs.openmehdi.ai/start/getting-started) · [Updating](https://docs.openmehdi.ai/install/updating) · [Showcase](https://docs.openmehdi.ai/start/showcase) · [FAQ](https://docs.openmehdi.ai/start/faq) · [Wizard](https://docs.openmehdi.ai/start/wizard) · [Nix](https://github.com/loveoplay2023-hue/OpenMehdi) · [Docker](https://docs.openmehdi.ai/install/docker) · [Discord](https://discord.gg/clawd)

Preferred setup: run the onboarding wizard (`openmehdi onboard`) in your terminal. The wizard guides you step by step through setting up the gateway, workspace, channels, and skills. The CLI wizard is the recommended path and works on **macOS, Linux, and Windows (via WSL2; strongly recommended)**. Works with npm, pnpm, or bun. New install? Start here: [Getting started](https://docs.openmehdi.ai/start/getting-started)

**Subscriptions (OAuth):**

* • **[Anthropic](https://www.anthropic.com/)** (Claude Pro/Max)
* • **[OpenAI](https://openai.com/)** (ChatGPT/Codex)

Model note: while any model is supported, I strongly recommend **Anthropic Pro/Max (100/200) + Opus 4.6** for long‑context strength and better prompt‑injection resistance. See [Onboarding](https://docs.openmehdi.ai/start/onboarding).

## Models (selection + auth)

* • Models config + CLI: [Models](https://docs.openmehdi.ai/concepts/models)
* • Auth profile rotation (OAuth vs API keys) + fallbacks: [Model failover](https://docs.openmehdi.ai/concepts/model-failover)

## Install (recommended)

Runtime: **Node ≥22**.

```bash
npm install -g openmehdi@latest
# or:
pnpm add -g openmehdi@latest
openmehdi onboard --install-daemon
```

The wizard installs the Gateway daemon (launchd/systemd user service) so it stays running.

## Quick start (TL;DR)

Runtime: **Node ≥22**.

Full beginner guide (auth, pairing, channels): [Getting started](https://docs.openmehdi.ai/start/getting-started)

```bash
openmehdi onboard --install-daemon
openmehdi gateway --port 18789 --verbose

# Send a message
openmehdi message send --to +1234567890 --message "Hello from OpenMehdi"

# Talk to the assistant (optionally deliver back to any connected channel: WhatsApp/Telegram/Slack/Discord/Google Chat/Signal/iMessage/BlueBubbles/Microsoft Teams/Matrix/Zalo/Zalo Personal/WebChat)
openmehdi agent --message "Ship checklist" --thinking high
```

Upgrading? [Updating guide](https://docs.openmehdi.ai/install/updating) (and run `openmehdi doctor`).

## Development channels

* • **stable**: tagged releases (`vYYYY.M.D` or `vYYYY.M.D-`), npm dist-tag `latest`.
* • **beta**: prerelease tags (`vYYYY.M.D-beta.N`), npm dist-tag `beta` (macOS app may be missing).
* • **dev**: moving head of `main`, npm dist-tag `dev` (when published).

Switch channels (git + npm): `openmehdi update --channel stable|beta|dev`. Details: [Development channels](https://docs.openmehdi.ai/install/development-channels).

## From source (development)

Prefer `pnpm` for builds from source. Bun is optional for running TypeScript directly.

```bash
git clone https://github.com/loveoplay2023-hue/OpenMehdi.git
cd OpenMehdi
pnpm install
pnpm ui:build # auto-installs UI deps on first run
pnpm build
pnpm openmehdi onboard --install-daemon

# Dev loop (auto-reload on TS changes)
pnpm gateway:watch
```

Note: `pnpm openmehdi ...` runs TypeScript directly (via `tsx`). `pnpm build` produces `dist/` for running via Node / the packaged `openmehdi` binary.

## Security defaults (DM access)

OpenMehdi connects to real messaging surfaces. Treat inbound DMs as **untrusted input**.

Full security guide: [Security](https://docs.openmehdi.ai/gateway/security)

Default behavior on Telegram/WhatsApp/Signal/iMessage/Microsoft Teams/Discord/Google Chat/Slack:

* • **DM pairing** (`dmPolicy=\"pairing\"` / `channels.discord.dmPolicy=\"pairing\"` / `channels.slack.dmPolicy=\"pairing\"`; legacy: `channels.discord.dm.policy`, `channels.slack.dm.policy`): unknown senders receive a short pairing code and the bot does not process their message.
* • Approve with: `openmehdi pairing approve <sender-id>` (then the sender is added to a local allowlist store).
* • Public inbound DMs require an explicit opt-in: set `dmPolicy=\"open\"` and include `\"*\"` in the channel allowlist (`allowFrom` / `channels.discord.allowFrom` / `channels.slack.allowFrom`; legacy: `channels.discord.dm.allowFrom`, `channels.slack.dm.allowFrom`).

Run `openmehdi doctor` to surface risky/misconfigured DM policies.

## Highlights

* • **[Local-first Gateway](https://docs.openmehdi.ai/gateway)** — single control plane for sessions, channels, tools, and events.
* • **[Multi-channel inbox](https://docs.openmehdi.ai/channels)** — WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, BlueBubbles (iMessage), iMessage (legacy), Microsoft Teams, Matrix, Zalo, Zalo Personal, WebChat, macOS, iOS/Android.
* • **[Multi-agent routing](https://docs.openmehdi.ai/gateway/configuration)** — route inbound channels/accounts/peers to isolated agents (workspaces + per-agent sessions).
* • **[Voice Wake](https://docs.openmehdi.ai/nodes/voicewake) + [Talk Mode](https://docs.openmehdi.ai/nodes/talk)** — always-on speech for macOS/iOS/Android with ElevenLabs.
* • **[Live Canvas](https://docs.openmehdi.ai/platforms/mac/canvas)** — agent-driven visual workspace with [A2UI](https://docs.openmehdi.ai/platforms/mac/canvas#canvas-a2ui).
* • **[First-class tools](https://docs.openmehdi.ai/tools)** — browser, canvas, nodes, cron, sessions, and Discord/Slack actions.
* • **[Companion apps](https://docs.openmehdi.ai/platforms/macos)** — macOS menu bar app + iOS/Android [nodes](https://docs.openmehdi.ai/nodes).
* • **[Onboarding](https://docs.openmehdi.ai/start/wizard) + [skills](https://docs.openmehdi.ai/tools/skills)** — wizard-driven setup with bundled/managed/workspace skills.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=loveoplay2023-hue/OpenMehdi&type=date&legend=top-left)](https://www.star-history.com/#loveoplay2023-hue/OpenMehdi&type=date&legend=top-left)

## Everything we built so far

### Core platform

* • [Gateway WS control plane](https://docs.openmehdi.ai/gateway) with sessions, presence, config, cron, webhooks, [Control UI](https://docs.openmehdi.ai/web), and [Canvas host](https://docs.openmehdi.ai/platforms/mac/canvas#canvas-a2ui).
* • [CLI surface](https://docs.openmehdi.ai/tools/agent-send): gateway, agent, send, [wizard](https://docs.openmehdi.ai/start/wizard), and [doctor](https://docs.openmehdi.ai/gateway/doctor).
* • [Pi agent runtime](https://docs.openmehdi.ai/concepts/agent) in RPC mode with tool streaming and block streaming.
* • [Session model](https://docs.openmehdi.ai/concepts/session): `main` for direct chats, group isolation, activation modes, queue modes, reply-back. Group rules: [Groups](https://docs.openmehdi.ai/concepts/groups).
* • [Media pipeline](https://docs.openmehdi.ai/nodes/images): images/audio/video, transcription hooks, size caps, temp file lifecycle. Audio details: [Audio](https://docs.openmehdi.ai/nodes/audio).

### Channels

* • [Channels](https://docs.openmehdi.ai/channels): [WhatsApp](https://docs.openmehdi.ai/channels/whatsapp) (Baileys), [Telegram](https://docs.openmehdi.ai/channels/telegram) (grammY), [Slack](https://docs.openmehdi.ai/channels/slack) (Bolt), [Discord](https://docs.openmehdi.ai/channels/discord) (discord.js), [Google Chat](https://docs.openmehdi.ai/channels/googlechat) (Chat API), [Signal](https://docs.openmehdi.ai/channels/signal) (signal-cli), [BlueBubbles](https://docs.openmehdi.ai/channels/bluebubbles) (iMessage, recommended), [iMessage](https://docs.openmehdi.ai/channels/imessage) (legacy imsg), [Microsoft Teams](https://docs.openmehdi.ai/channels/msteams) (extension), [Matrix](https://docs.openmehdi.ai/channels/matrix) (extension), [Zalo](https://docs.openmehdi.ai/channels/zalo) (extension), [Zalo Personal](https://docs.openmehdi.ai/channels/zalouser) (extension), [WebChat](https://docs.openmehdi.ai/web/webchat).
* • [Group routing](https://docs.openmehdi.ai/concepts/group-messages): mention gating, reply tags, per-channel chunking and routing. Channel rules: [Channels](https://docs.openmehdi.ai/channels).

### Apps + nodes

* • [macOS app](https://docs.openmehdi.ai/platforms/macos): menu bar control plane, [Voice Wake](https://docs.openmehdi.ai/nodes/voicewake)/PTT, [Talk Mode](https://docs.openmehdi.ai/nodes/talk) overlay, [WebChat](https://docs.openmehdi.ai/web/webchat), debug tools, [remote gateway](https://docs.openmehdi.ai/gateway/remote) control.
* • [iOS node](https://docs.openmehdi.ai/platforms/ios): [Canvas](https://docs.openmehdi.ai/platforms/mac/canvas), [Voice Wake](https://docs.openmehdi.ai/nodes/voicewake), [Talk Mode](https://docs.openmehdi.ai/nodes/talk), camera, screen recording, Bonjour pairing.
* • [Android node](https://docs.openmehdi.ai/platforms/android): [Canvas](https://docs.openmehdi.ai/platforms/mac/canvas), [Talk Mode](https://docs.openmehdi.ai/nodes/talk), camera, screen recording, optional SMS.
* • [macOS node mode](https://docs.openmehdi.ai/nodes): system.run/notify + canvas/camera exposure.

### Tools + automation

* • [Browser control](https://docs.openmehdi.ai/tools/browser): dedicated openmehdi Chrome/Chromium, snapshots, actions, uploads, profiles.
* • [Canvas](https://docs.openmehdi.ai/platforms/mac/canvas): [A2UI](https://docs.openmehdi.ai/platforms/mac/canvas#canvas-a2ui) push/reset, eval, snapshot.
* • [Nodes](https://docs.openmehdi.ai/nodes): camera snap/clip, screen record, [location.get](https://docs.openmehdi.ai/nodes/location-command), notifications.
* • [Cron + wakeups](https://docs.openmehdi.ai/automation/cron-jobs); [webhooks](https://docs.openmehdi.ai/automation/webhook); [Gmail Pub/Sub](https://docs.openmehdi.ai/automation/gmail-pubsub).
* • [Skills platform](https://docs.openmehdi.ai/tools/skills): bundled, managed, and workspace skills with install gating + UI.

### Runtime + safety

* • [Channel routing](https://docs.openmehdi.ai/concepts/channel-routing), [retry policy](https://docs.openmehdi.ai/concepts/retry), and [streaming/chunking](https://docs.openmehdi.ai/concepts/streaming).
* • [Presence](https://docs.openmehdi.ai/concepts/presence), [typing indicators](https://docs.openmehdi.ai/concepts/typing-indicators), and [usage tracking](https://docs.openmehdi.ai/concepts/usage-tracking).
* • [Models](https://docs.openmehdi.ai/concepts/models), [model failover](https://docs.openmehdi.ai/concepts/model-failover), and [session pruning](https://docs.openmehdi.ai/concepts/session-pruning).
* • [Security](https://docs.openmehdi.ai/gateway/security) and [troubleshooting](https://docs.openmehdi.ai/channels/troubleshooting).

### Ops + packaging

* • [Control UI](https://docs.openmehdi.ai/web) + [WebChat](https://docs.openmehdi.ai/web/webchat) served directly from the Gateway.
* • [Tailscale Serve/Funnel](https://docs.openmehdi.ai/gateway/tailscale) or [SSH tunnels](https://docs.openmehdi.ai/gateway/remote) with token/password auth.
* • [Nix mode](https://docs.openmehdi.ai/install/nix) for declarative config; [Docker](https://docs.openmehdi.ai/install/docker)-based installs.
* • [Doctor](https://docs.openmehdi.ai/gateway/doctor) migrations, [logging](https://docs.openmehdi.ai/logging).

## How it works (short)

```
WhatsApp / Telegram / Slack / Discord / Google Chat / Signal / iMessage / BlueBubbles / Microsoft Teams / Matrix / Zalo / Zalo Personal / WebChat
│
▼
┌───────────────────────────────┐
│           Gateway             │
│       (control plane)         │
│    ws://127.0.0.1:18789       │
└──────────────┬────────────────┘
               │
               ├─ Pi agent (RPC)
               ├─ CLI (openmehdi …)
               ├─ WebChat UI
               ├─ macOS app
               └─ iOS / Android nodes
```

## Key subsystems

* • **[Gateway WebSocket network](https://docs.openmehdi.ai/concepts/architecture)** — single WS control plane for clients, tools, and events (plus ops: [Gateway runbook](https://docs.openmehdi.ai/gateway)).
* • **[Tailscale exposure](https://docs.openmehdi.ai/gateway/tailscale)** — Serve/Funnel for the Gateway dashboard + WS (remote access: [Remote](https://docs.openmehdi.ai/gateway/remote)).
* • **[Browser control](https://docs.openmehdi.ai/tools/browser)** — openmehdi‑managed Chrome/Chromium with CDP control.
* • **[Canvas + A2UI](https://docs.openmehdi.ai/platforms/mac/canvas)** — agent‑driven visual workspace (A2UI host: [Canvas/A2UI](https://docs.openmehdi.ai/platforms/mac/canvas#canvas-a2ui)).
* • **[Voice Wake](https://docs.openmehdi.ai/nodes/voicewake) + [Talk Mode](https://docs.openmehdi.ai/nodes/talk)** — always‑on speech and continuous conversation.
* • **[Nodes](https://docs.openmehdi.ai/nodes)** — Canvas, camera snap/clip, screen record, `location.get`, notifications, plus macOS‑only `system.run`/`system.notify`.

## Tailscale access (Gateway dashboard)

OpenMehdi can auto-configure Tailscale **Serve** (tailnet-only) or **Funnel** (public) while the Gateway stays bound to loopback. Configure `gateway.tailscale.mode`:

* • `off`: no Tailscale automation (default).
* • `serve`: tailnet-only HTTPS via `tailscale serve` (uses Tailscale identity headers by default).
* • `funnel`: public HTTPS via `tailscale funnel` (requires shared password auth).

Notes:

* • `gateway.bind` must stay `loopback` when Serve/Funnel is enabled (OpenMehdi enforces this).
* • Serve can be forced to require a password by setting `gateway.auth.mode: \"password\"` or `gateway.auth.allowTailscale: false`.
* • Funnel refuses to start unless `gateway.auth.mode: \"password\"` is set.
* • Optional: `gateway.tailscale.resetOnExit` to undo Serve/Funnel on shutdown.

Details: [Tailscale guide](https://docs.openmehdi.ai/gateway/tailscale) · [Web surfaces](https://docs.openmehdi.ai/web)

## Remote Gateway (Linux is great)

It’s perfectly fine to run the Gateway on a small Linux instance. Clients (macOS app, CLI, WebChat) can connect over **Tailscale Serve/Funnel** or **SSH tunnels**, and you can still pair device nodes (macOS/iOS/Android) to execute device‑local actions when needed.

* • **Gateway host** runs the exec tool and channel connections by default.
* • **Device nodes** run device‑local actions (`system.run`, camera, screen recording, notifications) via `node.invoke`. In short: exec runs where the Gateway lives; device actions run where the device lives.

Details: [Remote access](https://docs.openmehdi.ai/gateway/remote) · [Nodes](https://docs.openmehdi.ai/nodes) · [Security](https://docs.openmehdi.ai/gateway/security)

## macOS permissions via the Gateway protocol

The macOS app can run in **node mode** and advertises its capabilities + permission map over the Gateway WebSocket (`node.list` / `node.describe`). Clients can then execute local actions via `node.invoke`:

* • `system.run` runs a local command and returns stdout/stderr/exit code; set `needsScreenRecording: true` to require screen-recording permission (otherwise you’ll get `PERMISSION_MISSING`).
* • `system.notify` posts a user notification and fails if notifications are denied.
* • `canvas.*`, `camera.*`, `screen.record`, and `location.get` are also routed via `node.invoke` and follow TCC permission status.

Elevated bash (host permissions) is separate from macOS TCC:

* • Use `/elevated on|off` to toggle per‑session elevated access when enabled + allowlisted.
* • Gateway persists the per‑session toggle via `sessions.patch` (WS method) alongside `thinkingLevel`, `verboseLevel`, `model`, `sendPolicy`, and `groupActivation`.

Details: [Nodes](https://docs.openmehdi.ai/nodes) · [macOS app](https://docs.openmehdi.ai/platforms/macos) · [Gateway protocol](https://docs.openmehdi.ai/concepts/architecture)

## Agent to Agent (sessions\\_\\* tools)

* • Use these to coordinate work across sessions without jumping between chat surfaces.
* • `sessions_list` — discover active sessions (agents) and their metadata.
* • `sessions_history` — fetch transcript logs for a session.
* • `sessions_send` — message another session; optional reply‑back ping‑pong + announce step (`REPLY_SKIP`, `ANNOUNCE_SKIP`).

Details: [Session tools](https://docs.openmehdi.ai/concepts/session-tool)

## Skills registry (ClawHub)

ClawHub is a minimal skill registry. With ClawHub enabled, the agent can search for skills automatically and pull in new ones as needed.

[ClawHub](https://clawhub.com)

## Chat commands

Send these in WhatsApp/Telegram/Slack/Google Chat/Microsoft Teams/WebChat (group commands are owner-only):

* • `/status` — compact session status (model + tokens, cost when available)
* • `/new` or `/reset` — reset the session
* • `/compact` — compact session context (summary)
* • `/think` — off|minimal|low|medium|high|xhigh (GPT-5.2 + Codex models only)
* • `/verbose on|off`
* • `/usage off|tokens|full` — per-response usage footer
* • `/restart` — restart the gateway (owner-only in groups)
* • `/activation mention|always` — group activation toggle (groups only)

## Apps (optional)

The Gateway alone delivers a great experience. All apps are optional and add extra features.

If you plan to build/run companion apps, follow the platform runbooks below.

### macOS (OpenMehdi.app) (optional)

* • Menu bar control for the Gateway and health.
* • Voice Wake + push-to-talk overlay.
* • WebChat + debug tools.
* • Remote gateway control over SSH.

Note: signed builds required for macOS permissions to stick across rebuilds (see `docs/mac/permissions.md`).

### iOS node (optional)

* • Pairs as a node via the Bridge.
* • Voice trigger forwarding + Canvas surface.
* • Controlled via `openmehdi nodes …`.

Runbook: [iOS connect](https://docs.openmehdi.ai/platforms/ios).

### Android node (optional)

* • Pairs via the same Bridge + pairing flow as iOS.
* • Exposes Canvas, Camera, and Screen capture commands.
* • Runbook: [Android connect](https://docs.openmehdi.ai/platforms/android).

## Agent workspace + skills

* • Workspace root: `~/.openmehdi/workspace` (configurable via `agents.defaults.workspace`).
* • Injected prompt files: `AGENTS.md`, `SOUL.md`, `TOOLS.md`.
* • Skills: `~/.openmehdi/workspace/skills/<owner>/<skill>/SKILL.md`.

## Configuration

Minimal `~/.openmehdi/openmehdi.json` (model + defaults):

```json5
{
  agent: {
    model: \"anthropic/claude-opus-4-6\",
  },
}
```

[Full configuration reference (all keys + examples).](https://docs.openmehdi.ai/gateway/configuration)

## Security model (important)

* • **Default:** tools run on the host for the **main** session, so the agent has full access when it’s just you.
* • **Group/channel safety:** set `agents.defaults.sandbox.mode: \"non-main\"` to run **non‑main sessions** (groups/channels) inside per‑session Docker sandboxes; bash then runs in Docker for those sessions.
* • **Sandbox defaults:** allowlist `bash`, `process`, `read`, `write`, `edit`, `sessions_list`, `sessions_history`, `sessions_send`, `sessions_spawn`; denylist `browser`, `canvas`, `nodes`, `cron`, `discord`, `gateway`.

Details: [Security guide](https://docs.openmehdi.ai/gateway/security) · [Docker + sandboxing](https://docs.openmehdi.ai/install/docker) · [Sandbox config](https://docs.openmehdi.ai/gateway/configuration)

### [WhatsApp](https://docs.openmehdi.ai/channels/whatsapp)

* • Link the device: `pnpm openmehdi channels login` (stores creds in `~/.openmehdi/credentials`).
* • Allowlist who can talk to the assistant via `channels.whatsapp.allowFrom`.
* • If `channels.whatsapp.groups` is set, it becomes a group allowlist; include `\"*\"` to allow all.

### [Telegram](https://docs.openmehdi.ai/channels/telegram)

* • Set `TELEGRAM_BOT_TOKEN` or `channels.telegram.botToken` (env wins).
* • Optional: set `channels.telegram.groups` (with `channels.telegram.groups.\"*\".requireMention`); when set, it is a group allowlist (include `\"*\"` to allow all). Also `channels.telegram.allowFrom` or `channels.telegram.webhookUrl` + `channels.telegram.webhookSecret` as needed.

```json5
{
  channels: {
    telegram: {
      botToken: \"123456:ABCDEF\",
    },
  },
}
```

### [Slack](https://docs.openmehdi.ai/channels/slack)

* • Set `SLACK_BOT_TOKEN` + `SLACK_APP_TOKEN` (or `channels.slack.botToken` + `channels.slack.appToken`).

### [Discord](https://docs.openmehdi.ai/channels/discord)

* • Set `DISCORD_BOT_TOKEN` or `channels.discord.token` (env wins).
* • Optional: set `commands.native`, `commands.text`, or `commands.useAccessGroups`, plus `channels.discord.allowFrom`, `channels.discord.guilds`, or `channels.discord.mediaMaxMb` as needed.

```json5
{
  channels: {
    discord: {
      token: \"1234abcd\",
    },
  },
}
```

### [Signal](https://docs.openmehdi.ai/channels/signal)

* • Requires `signal-cli` and a `channels.signal` config section.

### [BlueBubbles (iMessage)](https://docs.openmehdi.ai/channels/bluebubbles)

* • **Recommended** iMessage integration.
* • Configure `channels.bluebubbles.serverUrl` + `channels.bluebubbles.password` and a webhook (`channels.bluebubbles.webhookPath`).
* • The BlueBubbles server runs on macOS; the Gateway can run on macOS or elsewhere.

### [iMessage (legacy)](https://docs.openmehdi.ai/channels/imessage)

* • Legacy macOS-only integration via `imsg` (Messages must be signed in).
* • If `channels.imessage.groups` is set, it becomes a group allowlist; include `\"*\"` to allow all.

### [Microsoft Teams](https://docs.openmehdi.ai/channels/msteams)

* • Configure a Teams app + Bot Framework, then add a `msteams` config section.
* • Allowlist who can talk via `msteams.allowFrom`; group access via `msteams.groupAllowFrom` or `msteams.groupPolicy: \"open\"`.

### [WebChat](https://docs.openmehdi.ai/web/webchat)

* • Uses the Gateway WebSocket; no separate WebChat port/config.

Browser control (optional):

```json5
{
  browser: {
    enabled: true,
    color: \"#FF4500\",
  },
}
```

## Docs

Use these when you’re past the onboarding flow and want the deeper reference.

* • [Start with the docs index for navigation and “what’s where.”](https://docs.openmehdi.ai)
* • [Read the architecture overview for the gateway + protocol model.](https://docs.openmehdi.ai/concepts/architecture)
* • [Use the full configuration reference when you need every key and example.](https://docs.openmehdi.ai/gateway/configuration)
* • [Run the Gateway by the book with the operational runbook.](https://docs.openmehdi.ai/gateway)
* • [Learn how the Control UI/Web surfaces work and how to expose them safely.](https://docs.openmehdi.ai/web)
* • [Understand remote access over SSH tunnels or tailnets.](https://docs.openmehdi.ai/gateway/remote)
* • [Follow the onboarding wizard flow for a guided setup.](https://docs.openmehdi.ai/start/wizard)
* • [Wire external triggers via the webhook surface.](https://docs.openmehdi.ai/automation/webhook)
* • [Set up Gmail Pub/Sub triggers.](https://docs.openmehdi.ai/automation/gmail-pubsub)
* • [Learn the macOS menu bar companion details.](https://docs.openmehdi.ai/platforms/mac/menu-bar)
* • [Platform guides: Windows (WSL2)](https://docs.openmehdi.ai/platforms/windows), [Linux](https://docs.openmehdi.ai/platforms/linux), [macOS](https://docs.openmehdi.ai/platforms/macos), [iOS](https://docs.openmehdi.ai/platforms/ios), [Android](https://docs.openmehdi.ai/platforms/android)
* • [Debug common failures with the troubleshooting guide.](https://docs.openmehdi.ai/channels/troubleshooting)
* • [Review security guidance before exposing anything.](https://docs.openmehdi.ai/gateway/security)

## Advanced docs (discovery + control)

* • [Discovery + transports](https://docs.openmehdi.ai/gateway/discovery)
* • [Bonjour/mDNS](https://docs.openmehdi.ai/gateway/bonjour)
* • [Gateway pairing](https://docs.openmehdi.ai/gateway/pairing)
* • [Remote gateway README](https://docs.openmehdi.ai/gateway/remote-gateway-readme)
* • [Control UI](https://docs.openmehdi.ai/web/control-ui)
* • [Dashboard](https://docs.openmehdi.ai/web/dashboard)

## Operations & troubleshooting

* • [Health checks](https://docs.openmehdi.ai/gateway/health)
* • [Gateway lock](https://docs.openmehdi.ai/gateway/gateway-lock)
* • [Background process](https://docs.openmehdi.ai/gateway/background-process)
* • [Browser troubleshooting (Linux)](https://docs.openmehdi.ai/tools/browser-linux-troubleshooting)
* • [Logging](https://docs.openmehdi.ai/logging)

## Deep dives

* • [Agent loop](https://docs.openmehdi.ai/concepts/agent-loop)
* • [Presence](https://docs.openmehdi.ai/concepts/presence)
* • [TypeBox schemas](https://docs.openmehdi.ai/concepts/typebox)
* • [RPC adapters](https://docs.openmehdi.ai/reference/rpc)
* • [Queue](https://docs.openmehdi.ai/concepts/queue)

## Workspace & skills

* • [Skills config](https://docs.openmehdi.ai/tools/skills-config)
* • [Default AGENTS](https://docs.openmehdi.ai/reference/AGENTS.default)
* • [Templates: AGENTS](https://docs.openmehdi.ai/reference/templates/AGENTS)
* • [Templates: BOOTSTRAP](https://docs.openmehdi.ai/reference/templates/BOOTSTRAP)
* • [Templates: IDENTITY](https://docs.openmehdi.ai/reference/templates/IDENTITY)
* • [Templates: SOUL](https://docs.openmehdi.ai/reference/templates/SOUL)
* • [Templates: TOOLS](https://docs.openmehdi.ai/reference/templates/TOOLS)
* • [Templates: USER](https://docs.openmehdi.ai/reference/templates/USER)

## Platform internals

* • [macOS dev setup](https://docs.openmehdi.ai/platforms/mac/dev-setup)
* • [macOS menu bar](https://docs.openmehdi.ai/platforms/mac/menu-bar)
* • [macOS voice wake](https://docs.openmehdi.ai/platforms/mac/voicewake)
* • [iOS node](https://docs.openmehdi.ai/platforms/ios)
* • [Android node](https://docs.openmehdi.ai/platforms/android)
* • [Windows (WSL2)](https://docs.openmehdi.ai/platforms/windows)
* • [Linux app](https://docs.openmehdi.ai/platforms/linux)

## Email hooks (Gmail)

* • [docs.openmehdi.ai/gmail-pubsub](https://docs.openmehdi.ai/automation/gmail-pubsub)

## Molty

OpenMehdi was built for **Molty**, a space lobster AI assistant. 🦞 by Peter Steinberger and the community.

* • [openmehdi.ai](https://openmehdi.ai)
* • [soul.md](https://soul.md)
* • [steipete.me](https://steipete.me)
* • [@openmehdi](https://x.com/openmehdi)

## Community

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines, maintainers, and how to submit PRs. AI/vibe-coded PRs welcome! 🤖

Special thanks to [Mario Zechner](https://mariozechner.at/) for his support and for [pi-mono](https://github.com/badlogic/pi-mono). Special thanks to Adam Doppelt for lobster.bot.

Thanks to all clawtributors: [steipete](https://github.com/steipete) [joshp123](https://github.com/joshp123) [cpojer](https://github.com/cpojer) [Mariano Belinky](https://github.com/mbelinky) [sebslight](https://github.com/sebslight) [Takhoffman](https://github.com/Takhoffman) [quotentiroler](https://github.com/quotentiroler) [bohdanpodvirnyi](https://github.com/bohdanpodvirnyi) [tyler6204](https://github.com/tyler6204) [iHildy](https://github.com/iHildy) [jaydenfyi](https://github.com/jaydenfyi) [gumadeiras](https://github.com/gumadeiras) [joaohlisboa](https://github.com/joaohlisboa) [mneves75](https://github.com/mneves75) [MatthieuBizien](https://github.com/MatthieuBizien) [Glucksberg](https://github.com/Glucksberg) [MaudeBot](https://github.com/MaudeBot) [rahthakor](https://github.com/rahthakor) [vrknetha](https://github.com/vrknetha) [vignesh07](https://github.com/vignesh07) [radek-paclt](https://github.com/radek-paclt) [abdelsfane](https://github.com/abdelsfane) [Tobias Bischoff](https://github.com/tobiasbischoff) [christianklotz](https://github.com/christianklotz) [czekaj](https://github.com/czekaj) [ethanpalm](https://github.com/ethanpalm) [mukhtharcm](https://github.com/mukhtharcm) [maxsumrall](https://github.com/maxsumrall) [rodrigouroz](https://github.com/rodrigouroz) [xadenryan](https://github.com/xadenryan) [VACInc](https://github.com/VACInc) [juanpablodlc](https://github.com/juanpablodlc) [conroywhitney](https://github.com/conroywhitney) [hsrvc](https://github.com/hsrvc) [magimetal](https://github.com/magimetal) [zerone0x](https://github.com/zerone0x) [advaitpaliwal](https://github.com/advaitpaliwal) [meaningfool](https://github.com/meaningfool) [patelhiren](https://github.com/patelhiren) [NicholasSpisak](https://github.com/NicholasSpisak) [jonisjongithub](https://github.com/jonisjongithub) [abhisekbasu1](https://github.com/AbhisekBasu1) [theonejvo](https://github.com/theonejvo) [jamesgroat](https://github.com/jamesgroat) [BunsDev](https://github.com/BunsDev) [claude](https://github.com/claude) [JustYannicc](https://github.com/JustYannicc) [Hyaxia](https://github.com/Hyaxia) [dantelex](https://github.com/dantelex) [SocialNerd42069](https://github.com/SocialNerd42069) [daveonkels](https://github.com/daveonkels) [Yida-Dev](https://github.com/Yida-Dev) [google-labs-jules[bot]](https://github.com/apps/google-labs-jules) [riccardogiorato](https://github.com/riccardogiorato) [lc0rp](https://github.com/lc0rp) [adam91holt](https://github.com/adam91holt) [mousberg](https://github.com/mousberg) [clawdinator[bot]](https://github.com/apps/clawdinator) [hougangdev](https://github.com/hougangdev) [shakkernerd](https://github.com/shakkernerd) [coygeek](https://github.com/coygeek) [mteam88](https://github.com/mteam88) [hirefrank](https://github.com/hirefrank) [M00N7682](https://github.com/M00N7682) [joeynyc](https://github.com/joeynyc) [orlyjamie](https://github.com/orlyjamie) [dbhurley](https://github.com/dbhurley) [Eng. Juan Combetto](https://github.com/omniwired) [TSavo](https://github.com/TSavo) [aerolalit](https://github.com/aerolalit) [julianengel](https://github.com/julianengel) [bradleypriest](https://github.com/bradleypriest) [benithors](https://github.com/benithors) [lsh411](https://github.com/lsh411) [gut-puncture](https://github.com/gut-puncture) [rohannagpal](https://github.com/rohannagpal) [timolins](https://github.com/timolins) [f-trycua](https://github.com/f-trycua) [benostein](https://github.com/benostein) [elliotsecops](https://github.com/elliotsecops) [nachx639](https://github.com/Nachx639) [pvoo](https://github.com/pvoo) [sreekaransrinath](https://github.com/sreekaransrinath) [gupsammy](https://github.com/gupsammy) [cristip73](https://github.com/cristip73) [stefangalescu](https://github.com/stefangalescu) [nachoiacovino](https://github.com/nachoiacovino) [Vasanth Rao Naik Sabavat](https://github.com/vsabavat) [thewilloftheshadow](https://github.com/thewilloftheshadow) [petter-b](https://github.com/petter-b) [leszekszpunar](https://github.com/leszekszpunar) [scald](https://github.com/scald) [pycckuu](https://github.com/pycckuu) [AnonO6](https://github.com/AnonO6) [andranik-sahakyan](https://github.com/andranik-sahakyan) [davidguttman](https://github.com/davidguttman) [jarvis89757](https://github.com/jarvis89757) [sleontenko](https://github.com/sleontenko) [denysvitali](https://github.com/denysvitali) [TinyTb](https://github.com/TinyTb) [sircrumpet](https://github.com/sircrumpet) [peschee](https://github.com/peschee) [nicolasstanley](https://github.com/nicolasstanley) [davidiach](https://github.com/davidiach) [nonggia.liang](https://github.com/nonggialiang) [ironbyte-rgb](https://github.com/ironbyte-rgb) [dominicnunez](https://github.com/dominicnunez) [lploc94](https://github.com/lploc94) [ratulsarna](https://github.com/ratulsarna) [sfo2001](https://github.com/sfo2001) [lutr0](https://github.com/lutr0) [kiranjd](https://github.com/kiranjd) [danielz1z](https://github.com/danielz1z) [Iranb](https://github.com/Iranb) [cdorsey](https://github.com/cdorsey) [AdeboyeDN](https://github.com/AdeboyeDN) [obviyus](https://github.com/obviyus) [Alg0rix](https://github.com/Alg0rix) [papago2355](https://github.com/papago2355) [peetzweg/](https://github.com/peetzweg) [emanuelst](https://github.com/emanuelst) [evanotero](https://github.com/evanotero) [KristijanJovanovski](https://github.com/KristijanJovanovski) [jlowin](https://github.com/jlowin) [rdev](https://github.com/rdev) [rhuanssauro](https://github.com/rhuanssauro) [joshrad-dev](https://github.com/joshrad-dev) [osolmaz](https://github.com/osolmaz) [adityashaw2](https://github.com/adityashaw2) [shadril238](https://github.com/shadril238) [CashWilliams](https://github.com/CashWilliams) [sheeek](https://github.com/search?q=sheeek) [ryan](https://github.com/ryancontent) [jasonsschin](https://github.com/jasonsschin) [artuskg](https://github.com/artuskg) [onutc](https://github.com/onutc) [pauloportella](https://github.com/pauloportella) [HirokiKobayashi-R](https://github.com/HirokiKobayashi-R) [ThanhNguyxn](https://github.com/ThanhNguyxn) [18-RAJAT](https://github.com/18-RAJAT) [kimitaka](https://github.com/kimitaka) [yuting0624](https://github.com/yuting0624) [neooriginal](https://github.com/neooriginal) [manuelhettich](https://github.com/ManuelHettich) [unisone](https://github.com/unisone) [baccula](https://github.com/baccula) [manikv12](https://github.com/manikv12) [sbking](https://github.com/sbking) [travisirby](https://github.com/travisirby) [fujiwara-tofu-shop](https://github.com/fujiwara-tofu-shop) [buddyh](https://github.com/buddyh) [connorshea](https://github.com/connorshea) [bjesuiter](https://github.com/bjesuiter) [kyleok](https://github.com/kyleok) [mcinteerj](https://github.com/mcinteerj) [slonce70](https://github.com/slonce70) [calvin-hpnet](https://github.com/calvin-hpnet) [gitpds](https://github.com/gitpds) [ide-rea](https://github.com/ide-rea) [badlogic](https://github.com/badlogic) [grp06](https://github.com/grp06) [dependabot[bot]](https://github.com/apps/dependabot) [amitbiswal007](https://github.com/amitbiswal007) [John-Rood](https://github.com/John-Rood) [timkrase](https://github.com/timkrase) [gerardward2007](https://github.com/gerardward2007) [roshanasingh4](https://github.com/roshanasingh4) [tosh-hamburg](https://github.com/tosh-hamburg) [azade-c](https://github.com/azade-c) [dlauer](https://github.com/dlauer) [ezhikkk](https://github.com/ezhikkk) [JonUleis](https://github.com/JonUleis) [shivamraut101](https://github.com/shivamraut101) [cheeeee](https://github.com/cheeeee) [jabezborja](https://github.com/jabezborja) [robbyczgw-cla](https://github.com/robbyczgw-cla) [YuriNachos](https://github.com/YuriNachos) [Josh Phillips](https://github.com/j1philli) [Wangnov](https://github.com/Wangnov) [kaizen403](https://github.com/kaizen403) [patrickshao](https://github.com/patrickshao) [Whoaa512](https://github.com/Whoaa512) [chriseidhof](https://github.com/chriseidhof) [ngutman](https://github.com/ngutman) [wangai-studio](https://github.com/wangai-studio) [ysqander](https://github.com/ysqander) [Yurii Chukhlib](https://github.com/search?q=Yurii%20Chukhlib) [aj47](https://github.com/aj47) [kennyklee](https://github.com/kennyklee) [superman32432432](https://github.com/superman32432432) [Hisleren](https://github.com/Hisleren) [antons](https://github.com/antons) [austinm911](https://github.com/austinm911) [blacksmith-sh[bot]](https://github.com/apps/blacksmith-sh) [damoahdominic](https://github.com/damoahdominic) [dan-dr](https://github.com/dan-dr) [doodlewind](https://github.com/doodlewind) [GHesericsu](https://github.com/GHesericsu) [HeimdallStrategy](https://github.com/HeimdallStrategy) [imfing](https://github.com/imfing) [jalehman](https://github.com/jalehman) [jarvis-medmatic](https://github.com/jarvis-medmatic) [kkarimi](https://github.com/kkarimi) [Lukavyi](https://github.com/Lukavyi) [mahmoudashraf93](https://github.com/mahmoudashraf93) [pkrmf](https://github.com/pkrmf) [RandyVentures](https://github.com/RandyVentures) [Ryan Lisse](https://github.com/search?q=Ryan%20Lisse) [Yeom-JinHo](https://github.com/Yeom-JinHo) [dougvk](https://github.com/dougvk) [erikpr1994](https://github.com/erikpr1994) [fal3](https://github.com/fal3) [Ghost](https://github.com/search?q=Ghost) [hyf0-agent](https://github.com/hyf0-agent) [jonasjancarik](https://github.com/jonasjancarik) [Keith the Silly Goose](https://github.com/search?q=Keith%20the%20Silly%20Goose) [L36 Server](https://github.com/search?q=L36%20Server) [Marc](https://github.com/search?q=Marc) [mitschabaude-bot](https://github.com/mitschabaude-bot) [mkbehr](https://github.com/mkbehr) [neist](https://github.com/neist) [orenyomtov](https://github.com/orenyomtov) [sibbl](https://github.com/sibbl) [zats](https://github.com/zats) [abhijeet117](https://github.com/abhijeet117) [chrisrodz](https://github.com/chrisrodz) [Friederike Seiler](https://github.com/search?q=Friederike%20Seiler) [gabriel-trigo](https://github.com/gabriel-trigo) [hudson-rivera](https://github.com/hudson-rivera) [iamadig](https://github.com/Iamadig) [itsjling](https://github.com/itsjling) [Jonathan D. Rhyne (DJ-D)](https://github.com/jdrhyne) [Joshua Mitchell](https://github.com/search?q=Joshua%20Mitchell) [kelvinCB](https://github.com/kelvinCB) [Kit](https://github.com/search?q=Kit) [koala73](https://github.com/koala73) [lailoo](https://github.com/lailoo) [manmal](https://github.com/manmal) [mattqdev](https://github.com/mattqdev) [mcaxtr](https://github.com/mcaxtr) [mitsuhiko](https://github.com/mitsuhiko) [ogulcancelik](https://github.com/ogulcancelik) [petradonka](https://github.com/petradonka) [rubyrunsstuff](https://github.com/rubyrunsstuff) [rybnikov](https://github.com/rybnikov) [siddhantjain](https://github.com/siddhantjain) [suminhthanh](https://github.com/suminhthanh) [svkozak](https://github.com/svkozak) [wes-davis](https://github.com/wes-davis) [24601](https://github.com/24601) [ameno-](https://github.com/ameno-) [bonald](https://github.com/bonald) [bravostation](https://github.com/bravostation) [Chris Taylor](https://github.com/search?q=Chris%20Taylor) [damaozi](https://github.com/search?q=damaozi) [dguido](https://github.com/dguido) [Django Navarro](https://github.com/djangonavarro220) [evalexpr](https://github.com/evalexpr) [henrino3](https://github.com/henrino3) [humanwritten](https://github.com/humanwritten) [j2h4u](https://github.com/j2h4u) [larlyssa](https://github.com/larlyssa) [liuxiaopai-ai](https://github.com/liuxiaopai-ai) [odysseus0](https://github.com/odysseus0) [oswalpalash](https://github.com/oswalpalash) [pcty-nextgen-service-account](https://github.com/pcty-nextgen-service-account) [pi0](https://github.com/pi0) [rmorse](https://github.com/rmorse) [Roopak Nijhara](https://github.com/search?q=Roopak%20Nijhara) [Syhids](https://github.com/Syhids) [tmchow](https://github.com/tmchow) [Ubuntu](https://github.com/search?q=Ubuntu) [xiaose](https://github.com/search?q=xiaose) [Aaron Konyer](https://github.com/search?q=Aaron%20Konyer) [aaronveklabs](https://github.com/aaronveklabs) [akramcodez](https://github.com/akramcodez) [aldoeliacim](https://github.com/aldoeliacim) [andreabadesso](https://github.com/andreabadesso) [Andrii](https://github.com/search?q=Andrii) [BinaryMuse](https://github.com/BinaryMuse) [bqcfjwhz85-arch](https://github.com/bqcfjwhz85-arch) [cash-echo-bot](https://github.com/cash-echo-bot) [Clawd](https://github.com/search?q=Clawd) [ClawdFx](https://github.com/search?q=ClawdFx) [danballance](https://github.com/danballance) [danielcadenhead](https://github.com/danielcadenhead) [Elarwei001](https://github.com/Elarwei001) [EnzeD](https://github.com/EnzeD) [erik-agens](https://github.com/erik-agens) [Evizero](https://github.com/Evizero) [fcatuhe](https://github.com/fcatuhe) [gildo](https://github.com/gildo) [hclsys](https://github.com/hclsys) [itsjaydesu](https://github.com/itsjaydesu) [ivancasco](https://github.com/ivancasco) [ivanrvpereira](https://github.com/ivanrvpereira) [Jarvis](https://github.com/search?q=Jarvis) [jayhickey](https://github.com/jayhickey) [jeffersonwarrior](https://github.com/jeffersonwarrior) [jverdi](https://github.com/jverdi) [longmaba](https://github.com/longmaba) [Marco Marandiz](https://github.com/search?q=Marco%20Marandiz) [MarvinCui](https://github.com/MarvinCui) [mattezell](https://github.com/mattezell) [mjrussell](https://github.com/mjrussell) [odnxe](https://github.com/odnxe) [optimikelabs](https://github.com/optimikelabs) [p6l-richard](https://github.com/p6l-richard) [philipp-spiess](https://github.com/philipp-spiess) [Pocket Clawd](https://github.com/search?q=Pocket%20Clawd) [RayBB](https://github.com/RayBB) [robaxelsen](https://github.com/robaxelsen) [Sash Catanzarite](https://github.com/search?q=Sash%20Catanzarite) [Suksham-sharma](https://github.com/Suksham-sharma) [T5-AndyML](https://github.com/T5-AndyML) [thejhinvirtuoso](https://github.com/thejhinvirtuoso) [travisp](https://github.com/travisp) [VAC](https://github.com/search?q=VAC) [william arzt](https://github.com/search?q=william%20arzt) [yudshj](https://github.com/yudshj) [zknicker](https://github.com/zknicker) [0oAstro](https://github.com/0oAstro) [Abdul535](https://github.com/Abdul535) [abhaymundhara](https://github.com/abhaymundhara) [aduk059](https://github.com/aduk059) [aisling404](https://github.com/aisling404) [alejandro maza](https://github.com/search?q=alejandro%20maza) [Alex-Alaniz](https://github.com/Alex-Alaniz) [alexanderatallah](https://github.com/alexanderatallah) [alexstyl](https://github.com/alexstyl) [AlexZhangji](https://github.com/AlexZhangji) [andrewting19](https://github.com/andrewting19) [anpoirier](https://github.com/anpoirier) [araa47](https://github.com/araa47) [arthyn](https://github.com/arthyn) [Asleep123](https://github.com/Asleep123) [Ayush Ojha](https://github.com/search?q=Ayush%20Ojha) [Ayush10](https://github.com/Ayush10) [bguidolim](https://github.com/bguidolim) [bolismauro](https://github.com/bolismauro) [caelum0x](https://github.com/caelum0x) [championswimmer](https://github.com/championswimmer) [chenyuan99](https://github.com/chenyuan99) [Chloe-VP](https://github.com/Chloe-VP) [Claude Code](https://github.com/search?q=Claude%20Code) [Clawdbot Maintainers](https://github.com/search?q=Clawdbot%20Maintainers) [conhecendoia](https://github.com/conhecendoia) [dasilva333](https://github.com/dasilva333) [David-Marsh-Photo](https://github.com/David-Marsh-Photo) [deepsoumya617](https://github.com/deepsoumya617) [Developer](https://github.com/search?q=Developer) [Dimitrios Ploutarchos](https://github.com/search?q=Dimitrios%20Ploutarchos) [Drake Thomsen](https://github.com/search?q=Drake%20Thomsen) [dvrshil](https://github.com/dvrshil) [dxd5001](https://github.com/dxd5001) [dylanneve1](https://github.com/dylanneve1) [Felix Krause](https://github.com/search?q=Felix%20Krause) [foeken](https://github.com/foeken) [frankekn](https://github.com/frankekn) [fredheir](https://github.com/fredheir) [Fronut](https://github.com/Fronut) [ganghyun kim](https://github.com/search?q=ganghyun%20kim) [grrowl](https://github.com/grrowl) [gtsifrikas](https://github.com/gtsifrikas) [HassanFleyah](https://github.com/HassanFleyah) [HazAT](https://github.com/HazAT) [hrdwdmrbl](https://github.com/hrdwdmrbl) [hugobarauna](https://github.com/hugobarauna) [iamEvanYT](https://github.com/iamEvanYT) [ichbinlucaskim](https://github.com/ichbinlucaskim) [Jamie Openshaw](https://github.com/search?q=Jamie%20Openshaw) [Jane](https://github.com/search?q=Jane) [Jarvis Deploy](https://github.com/search?q=Jarvis%20Deploy) [Jefferson Nunn](https://github.com/search?q=Jefferson%20Nunn) [jogi47](https://github.com/jogi47) [kentaro](https://github.com/kentaro) [Kevin Lin](https://github.com/search?q=Kevin%20Lin) [kira-ariaki](https://github.com/kira-ariaki) [kitze](https://github.com/kitze) [Kiwitwitter](https://github.com/Kiwitwitter) [kossoy](https://github.com/kossoy) [levifig](https://github.com/levifig) [liuy](https://github.com/liuy) [Lloyd](https://github.com/search?q=Lloyd) [loganaden](https://github.com/loganaden) [longjos](https://github.com/longjos) [loukotal](https://github.com/loukotal) [mac mimi](https://github.com/search?q=mac%20mimi) [markusbkoch](https://github.com/markusbkoch) [martinpucik](https://github.com/martinpucik) [Matt mini](https://github.com/search?q=Matt%20mini) [mertcicekci0](https://github.com/mertcicekci0) [Miles](https://github.com/search?q=Miles) [minghinmatthewlam](https://github.com/search?q=minghinmatthewlam) [mrdbstn](https://github.com/mrdbstn) [MSch](https://github.com/MSch) [mudrii](https://github.com/search?q=mudrii) [Mustafa Tag Eldeen](https://github.com/search?q=Mustafa%20Tag%20Eldeen) [myfunc](https://github.com/search?q=myfunc) [mylukin](https://github.com/mylukin) [nathanbosse](https://github.com/nathanbosse) [ndraiman](https://github.com/ndraiman) [nexty5870](https://github.com/nexty5870) [Noctivoro](https://github.com/Noctivoro) [Omar-Khaleel](https://github.com/Omar-Khaleel) [ozgur-polat](https://github.com/ozgur-polat) [pasogott](https://github.com/search?q=pasogott) [plum-dawg](https://github.com/search?q=plum-dawg) [pookNast](https://github.com/search?q=pookNast) [ppamment](https://github.com/ppamment) [prathamdby](https://github.com/prathamdby) [ptn1411](https://github.com/ptn1411) [rafaelreis-r](https://github.com/search?q=rafaelreis-r) [rafelbev](https://github.com/rafelbev) [reeltimeapps](https://github.com/reeltimeapps) [RLTCmpe](https://github.com/RLTCmpe) [robhparker](https://github.com/search?q=robhparker) [rohans sachinpatil](https://github.com/rohansachinpatil) [Rony Kelner](https://github.com/search?q=Rony%20Kelner) [ryancnelson](https://github.com/ryancnelson) [Samrat Jha](https://github.com/search?q=Samrat%20Jha) [seans-openmehdibot](https://github.com/search?q=seans-openmehdibot) [senoldogann](https://github.com/senoldogann) [Seredeep](https://github.com/Seredeep) [sergical](https://github.com/sergical) [shatner](https://github.com/search?q=shatner) [shiv19](https://github.com/shiv19) [shiyuanhai](https://github.com/shiyuanhai) [Shrinija17](https://github.com/Shrinija17) [siraht](https://github.com/siraht) [snopoke](https://github.com/snopoke) [spiceoogway](https://github.com/search?q=spiceoogway) [stephenchen2025](https://github.com/stephenchen2025) [succ985](https://github.com/search?q=succ985) [Suvink](https://github.com/Suvink) [techboss](https://github.com/search?q=techboss) [testingabc321](https://github.com/testingabc321) [tewatia](https://github.com/search?q=tewatia) [The Admiral](https://github.com/search?q=The%20Admiral) [therealZpoint-bot](https://github.com/search?q=therealZpoint-bot) [thesash](https://github.com/thesash) [uos-status](https://github.com/search?q=uos-status) [vcastellm](https://github.com/vcastellm) [Vibe Kanban](https://github.com/search?q=Vibe%20Kanban) [vincentkoc](https://github.com/vincentkoc) [void](https://github.com/search?q=void) [Vultr-Clawd Admin](https://github.com/search?q=Vultr-Clawd%20Admin) [Wimmie](https://github.com/search?q=Wimmie) [wolfred](https://github.com/search?q=wolfred) [wstock](https://github.com/wstock) [wytheme](https://github.com/wytheme) [YangHuang2280](https://github.com/YangHuang2280) [yazinsai](https://github.com/yazinsai) [yevhen](https://github.com/yevhen) [YiWang24](https://github.com/YiWang24) [ymat19](https://github.com/search?q=ymat19) [Zach Knickerbocker](https://github.com/search?q=Zach%20Knickerbocker) [zackerthescar](https://github.com/zackerthescar) [zhixian](https://github.com/search?q=zhixian) [0xJonHoldsCrypto](https://github.com/0xJonHoldsCrypto) [aaronn](https://github.com/aaronn) [Alphonse-arianee](https://github.com/Alphonse-arianee) [atalovesyou](https://github.com/atalovesyou) [Azade](https://github.com/search?q=Azade) [carlulsoe](https://github.com/carlulsoe) [ddyo](https://github.com/search?q=ddyo) [Erik](https://github.com/search?q=Erik) [jiulingyun](https://github.com/jiulingyun) [latitudeki5223](https://github.com/latitudeki5223) [Manuel Maly](https://github.com/search?q=Manuel%20Maly) [minghinmatthewlam](https://github.com/minghinmatthewlam) [Mourad Boustani](https://github.com/search?q=Mourad%20Boustani) [odrobnik](https://github.com/odrobnik) [pcty-nextgen-ios-builder](https://github.com/pcty-nextgen-ios-builder) [Quentin](https://github.com/search?q=Quentin) [rafaelreis-r](https://github.com/rafaelreis-r) [Randy Torres](https://github.com/search?q=Randy%20Torres) [rhjoh](https://github.com/rhjoh) [Rolf Fredheim](https://github.com/search?q=Rolf%20Fredheim) [ronak-guliani](https://github.com/ronak-guliani) [William Stock](https://github.com/search?q=William%20Stock) [Akash Kobal](https://github.com/AkashKobal)
