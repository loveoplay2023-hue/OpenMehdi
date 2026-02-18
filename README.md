# 🧠 OpenMehdi — Ton Assistant IA Personnel

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text-dark.png">
    <img src="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png" alt="OpenMehdi" width="500">
  </picture>
</p>

<p align="center">
  <strong>🇲🇦 L'assistant IA personnel pour le Maroc. Local-first. Multilingue. Multi-agent.</strong>
</p>

<p align="center">
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi/actions/workflows/sync-from-openmehdi.yml?branch=main"><img src="https://img.shields.io/github/actions/workflow/status/loveoplay2023-hue/OpenMehdi/sync-from-openmehdi.yml?branch=main&style=for-the-badge" alt="CI status"></a>
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi/releases"><img src="https://img.shields.io/github/release/loveoplay2023-hue/OpenMehdi?style=for-the-badge" alt="Release"></a>
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="MIT License"></a>
</p>

---

**OpenMehdi** est ton assistant IA personnel que tu fais tourner sur tes propres appareils. Il répond sur les canaux que tu utilises déjà (WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, iMessage, Microsoft Teams, WebChat). Il parle **arabe, français, anglais et darija**. Il peut raisonner, analyser et agir sur des domaines clés au Maroc : **Santé, Trading BVC, Immobilier**.

> Basé sur le projet open-source [OpenClaw](https://github.com/openclaw/openclaw), adapté et étendu pour le contexte marocain.

---

## 🌟 Fonctionnalités principales

- 🗣️ **Multilingue** — Arabe (AR), Français (FR), Anglais (EN), Darija (MA)
- 🤖 **Multi-agent** — Routing intelligent entre agents spécialisés
- 🏥 **Santé** — Conseils médicaux, SantéProIA, suivi médical
- 📈 **Trading BVC** — Analyse de la Bourse de Casablanca, signaux, alertes
- 🏠 **Immobilier Maroc** — Recherche, analyse de prix, annonces
- 💻 **Local-first** — Fonctionne sur ton propre serveur/machine
- 📱 **Multi-plateforme** — macOS, Linux, Windows (WSL2), iOS, Android

---

## 🚀 Installation rapide

**Prérequis : Node ≥ 22**

```bash
npm install -g openmehdi@latest
# ou
pnpm add -g openmehdi@latest
openmehdi onboard --install-daemon
```

---

## ⚡ Démarrage rapide

```bash
openmehdi onboard --install-daemon
openmehdi gateway --port 18789 --verbose

# Envoyer un message
openmehdi message send --to +212612345678 --message "Bonjour OpenMehdi"

# Lancer l'agent
openmehdi agent --message "Analyse le titre Maroc Telecom sur la BVC" --thinking high
```

---

## 🤖 Agents spécialisés

| Agent | Description |
|-------|-------------|
| 🏥 **Agent Santé** | Conseils médicaux, SantéProIA, symptômes |
| 📈 **Agent Trading** | BVC, analyse technique, alertes prix |
| 🏠 **Agent Immobilier** | Recherche bien, estimation prix, annonces Maroc |
| 🌐 **Agent Recherche** | Web scraping, veille, résumés |
| 💬 **Agent Darija** | Traduction, compréhension dialecte marocain |

---

## 📱 Canaux supportés

- WhatsApp, Telegram, Signal, iMessage (BlueBubbles)
- Discord, Slack, Microsoft Teams
- Google Chat, Matrix, WebChat
- Zalo, Zalo Personal

---

## 🔧 Configuration minimale

`~/.openmehdi/openmehdi.json` :

```json
{
  "agent": {
    "model": "anthropic/claude-opus-4-6"
  }
}
```

---

## 🛡️ Sécurité

OpenMehdi se connecte à de vraies surfaces de messagerie. Traite les DMs entrants comme des **entrées non fiables**.

---

## 📚 Documentation

- [Démarrage](https://docs.openclaw.ai/start/getting-started)
- [Configuration complète](https://docs.openclaw.ai/gateway/configuration)
- [Sécurité](https://docs.openclaw.ai/gateway/security)
- [Docker](https://docs.openclaw.ai/install/docker)

---

## 🤝 Contribution

Voir [CONTRIBUTING.md](./CONTRIBUTING.md) pour les directives.

**OpenMehdi** est construit sur [OpenClaw](https://github.com/openclaw/openclaw) — merci à toute la communauté OpenClaw.

---

## 📄 Licence

MIT — voir [LICENSE](./LICENSE)
