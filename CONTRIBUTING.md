# Contributing to OpenMehdi

> **Build the future of personal AI — together.**
> OpenMehdi is open-source, community-driven, and built on the belief that powerful AI should be accessible to everyone, everywhere.

We're thrilled you're here. Whether you're fixing a typo, squashing a critical bug, or architecting a new multi-agent subsystem — **every contribution matters**. This guide will get you up to speed quickly.

---

## Quick Links

| Resource | Link |
|---|---|
| Repository | [github.com/openmehdi/openmehdi](https://github.com/openmehdi) |
| Vision & Roadmap | [`VISION.md`](VISION.md) |
| Community Discord | [discord.gg/qkhbAGHRBT](https://discord.gg/qkhbAGHRBT) |
| X / Twitter | [@steipete](https://x.com/steipete) / [@openmehdi](https://x.com/openmehdi) |

---

## Meet the Core Team

OpenMehdi is maintained by a passionate group of engineers, designers, and community builders from around the world.

| Maintainer | Area of Ownership |
|---|---|
| **[Peter Steinberger](https://github.com/steipete)** — [@steipete](https://x.com/steipete) | Project Lead & Architecture |
| **[Shadow](https://github.com/thewilloftheshadow)** — [@4shad0wed](https://x.com/4shad0wed) | Discord, Community &  App |
| **[Mariano Belinky](https://github.com/mbelinky)** — [@belimad](https://x.com/belimad) | iOS App & Security |
| **[Seb Slight](https://github.com/sebslight)** — [@sebslig](https://x.com/sebslig) | Docs, Agent Reliability & Runtime |
| **[Christoph Nakazawa](https://github.com/cpojer)** — [@cnakazawa](https://x.com/cnakazawa) | JavaScript Infrastructure |
| **[Gustavo Madeira Santana](https://github.com/gumadeiras)** — [@gumadeiras](https://x.com/gumadeiras) | Multi-Agents, CLI & Web UI |

---

## How to Contribute

Contributing to OpenMehdi is designed to be **fast, clear, and rewarding**. Here's how to get started:

### 1. Bug Fixes & Small Improvements
Spotted something broken? Have a quick fix? **Open a PR directly** — no need to ask for permission first. We review actively and merge fast.

### 2. New Features & Architectural Changes
Big ideas deserve a conversation first. Start a [GitHub Discussion](https://github.com/openmehdi/openmehdi/discussions) or drop by **#proposals** on Discord. This ensures your effort lands in the right direction.

### 3. Questions & Support
Stuck on setup or configuration? Head to **#setup-help** on Discord — our community responds quickly.

### 4. Skills & Integrations
Want to add a new skill or integration? Head to [openmehdiHub](https://openmehdihub.ai/) — the official community hub for OpenMehdi-compatible skills.

---

## Pull Request Checklist

Before submitting your PR, make sure you:

- [ ] Tested your changes locally on your OpenMehdi instance
- [ ] Ran the full test suite: `pnpm build && pnpm check && pnpm test`
- [ ] Confirmed all CI checks pass
- [ ] Kept the PR focused — **one clear goal per PR** (no mixed concerns)
- [ ] Wrote a clear description: **what** you changed and **why**

> **Pro tip:** Small, focused PRs get reviewed and merged significantly faster than large ones.

---

## Technical Notes: Control UI Decorators

The Control UI is built with **Lit** using **legacy decorators**. The current Rollup parser does not support the `accessor` fields required by standard decorators.

When adding reactive fields, always use the legacy style:

```ts
@state()
foo = "bar";

@property({ type: Number })
count = 0;
```

The root `tsconfig.json` is pre-configured with `experimentalDecorators: true` and `useDefineForClassFields: false`. Please do not change these settings unless you are also upgrading the UI build toolchain to support standard decorators.

---

## AI-Assisted Contributions Welcome 🤖

Built your contribution with Codex, Claude, Cursor, or another AI tool? **Fantastic — we love it.** AI-assisted PRs are first-class citizens in OpenMehdi.

All we ask is **transparency**. Please include in your PR:

- [ ] An "AI-assisted" label in the PR title or description
- [ ] The degree of testing (untested / lightly tested / fully tested)
- [ ] Prompts or session logs if available (extremely helpful for reviewers!)
- [ ] Confirmation that you understand and own the code being submitted

Transparency helps reviewers know what to focus on — that's it.

---

## Current Focus & Roadmap 🗺️

Here's where we're investing right now. Contributions in these areas have the highest impact:

| Priority | Focus Area |
|---|---|
| 🔴 High | **Stability** — Edge cases in WhatsApp & Telegram channel connections |
| 🟠 Medium | **UX** — Onboarding wizard improvements and clearer error messages |
| 🟡 Medium | **Skills** — New skill contributions |
| 🟢 Ongoing | **Performance** — Token usage optimization and compaction logic |

Looking for a starting point? Browse issues tagged [`good first issue`](https://github.com/openmehdi/openmehdi/issues?q=label%3A%22good+first+issue%22) on GitHub.

---

## Become a Maintainer

We are **selectively growing** the OpenMehdi maintainer team. If you are an experienced contributor who wants to actively shape the project's direction — through code, documentation, or community leadership — we'd love to hear from you.

**What being a maintainer means:**
This is an active, ongoing responsibility — not an honorary title. Maintainers are expected to triage issues, review PRs, and contribute consistently to the project's momentum.

**To apply**, email **contributing@openmehdi.ai** with the following:

1. Links to your merged PRs on OpenMehdi *(don't have any yet? start there first)*
2. Links to open-source projects you maintain or actively contribute to
3. Your GitHub, Discord, and X/Twitter handles
4. A brief intro: your background, experience, and areas of interest
5. Languages you speak and where you're based
6. A realistic estimate of how much time you can commit

We welcome contributors across all disciplines — engineering, documentation, community management, and more. Applications are reviewed carefully and maintainers are added **slowly and deliberately**. Please allow a few weeks for a response.

---

## Reporting a Security Vulnerability

We take security seriously. Please report vulnerabilities **directly to the repository** where the issue lives — do not open a public issue.

| Component | Repository |
|---|---|
| Core CLI & Gateway | [openmehdi/openmehdi](https://github.com/openmehdi/openmehdi) |
| macOS Desktop App | [openmehdi/openmehdi](https://github.com/openmehdi/openmehdi) (apps/macos) |
| iOS App | [openmehdi/openmehdi](https://github.com/openmehdi/openmehdi) (apps/ios) |
| Android App | [openmehdi/openmehdi](https://github.com/openmehdi/openmehdi) (apps/android) |

| Trust & Threat Model | [openmehdi/trust](https://github.com/openmehdi/trust) |

Unsure which repo to use? Email **security@openmehdi.ai** and we'll route it to the right team.

### Required Fields in a Security Report

To help us triage efficiently, please include:

1. **Title** — A clear, descriptive name for the vulnerability
2. **Severity Assessment** — Your evaluation of the risk level
3. **Impact** — What can an attacker achieve?
4. **Affected Component** — Which module, file, or feature is impacted?
5. **Technical Reproduction** — Step-by-step instructions to reproduce
6. **Demonstrated Impact** — Proof-of-concept or evidence
7. **Environment** — OS, version, configuration details
8. **Remediation Advice** — Your suggested fix or mitigation

> Reports without reproduction steps, demonstrated impact, and remediation advice will be deprioritized. Given the volume of AI-generated scanner findings we receive, we must prioritize vetted reports from researchers who genuinely understand the issue.

---

*Thank you for helping make OpenMehdi better for everyone. We can't wait to see what you build.*
