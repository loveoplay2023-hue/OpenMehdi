<div align="center">

<img src="https://raw.githubusercontent.com/loveoplay2023-hue/OpenMehdi/main/docs/assets/openmehdi-banner.svg" alt="OpenMehdi Banner" width="900"/>

# OpenMehdi

**Ton Assistant IA Personnel — Souverain, Local-First, Multilingue**

[![CI](https://img.shields.io/github/actions/workflow/status/loveoplay2023-hue/OpenMehdi/sync-from-openmehdi.yml?branch=main&style=for-the-badge&label=Build&logo=github)](https://github.com/loveoplay2023-hue/OpenMehdi/actions)
[![Release](https://img.shields.io/github/v/release/loveoplay2023-hue/OpenMehdi?style=for-the-badge&logo=github&color=7b2ff7)](https://github.com/loveoplay2023-hue/OpenMehdi/releases)
[![License](https://img.shields.io/badge/License-MIT-00c6ff?style=for-the-badge)](LICENSE)
[![Node](https://img.shields.io/badge/Node-%E2%89%A522-3fb950?style=for-the-badge&logo=node.js)](https://nodejs.org)

</div>

---

## 🌍 Vue d'ensemble

**OpenMehdi** est un assistant IA personnel souverain, conçu spécifiquement pour le contexte marocain. Il s'exécute sur **votre propre machine** (local-first), garantissant une confidentialité totale. OpenMehdi communique via vos messageries habituelles et maîtrise parfaitement l'**arabe, le français, l'anglais et la darija**.

### 🎯 Domaines d'expertise stratégiques

| Domaine | Description |
| :--- | :--- |
| 🏥 **Santé** | Conseils médicaux, suivi des symptômes, intégration native avec **SantéProIA**. |
| 📈 **Trading BVC** | Analyse de la Bourse de Casablanca, signaux techniques, alertes de prix en temps réel. |
| 🏠 **Immobilier** | Recherche de biens, estimations de prix, analyse des annonces au Maroc. |

---

## 🚀 Fonctionnalités clés

- 🗣️ **Multilingue natif** — Arabe (AR), Français (FR), Anglais (EN), Darija marocaine.
- 🤖 **Multi-Agent** — Routage intelligent vers des agents spécialisés selon vos besoins.
- 🔒 **Local-First** — 100% de contrôle sur vos données, hébergé sur votre propre serveur.
- 💻 **Multi-Plateforme** — macOS, Linux, Windows (WSL2), iOS, Android.
- 📱 **Omnicanal** — WhatsApp, Telegram, Discord, Slack, Signal, Teams, WebChat.
- 🧠 **Raisonnement avancé** — Modes de réflexion configurables (bas / moyen / haut).

---

## 🛠️ Installation

> **Prérequis :** Node.js >= 22

```bash
# Installation globale via NPM
npm install -g openmehdi@latest

# Ou via PNPM
pnpm add -g openmehdi@latest

# Initialisation et configuration
openmehdi onboard --install-daemon
```

---

## ⚡ Démarrage rapide

```bash
# Lancer la passerelle de communication
openmehdi gateway --port 18789 --verbose

# Envoyer un message de test
openmehdi message send --to +212612345678 --message "Bonjour OpenMehdi"

# Analyser une action à la BVC
openmehdi agent --message "Analyse le titre Maroc Telecom sur la BVC" --thinking high

# Demander un conseil santé
openmehdi agent --message "Quels sont les symptômes d'une carence en fer ?" --agent sante
```

---

## 🤖 Agents spécialisés disponibles

| Agent | Commande | Spécialité |
| :--- | :--- | :--- |
| 🏥 **Santé** | `--agent sante` | Conseils médicaux, SantéProIA, analyse de symptômes. |
| 📈 **Trading** | `--agent trading` | BVC, analyse technique, alertes prix. |
| 🏠 **Immobilier** | `--agent immo` | Recherche, estimations, annonces Maroc. |
| 🌐 **Recherche** | `--agent recherche` | Web scraping, veille stratégique, résumés. |
| 💬 **Darija** | `--agent darija` | Traduction et compréhension fine du dialecte marocain. |

---

## 📱 Canaux supportés

<table>
<tr>
<td width="30%"><b>Mobile</b></td>
<td>WhatsApp · Telegram · Signal · iMessage (BlueBubbles)</td>
</tr>
<tr>
<td><b>Professionnel</b></td>
<td>Discord · Slack · Microsoft Teams · Google Chat</td>
</tr>
<tr>
<td><b>Autres</b></td>
<td>Matrix · WebChat · Zalo</td>
</tr>
</table>

---

## ⚙️ Configuration

Le fichier se trouve dans : `~/.openmehdi/openmehdi.json`

```json
{
  "agent": {
    "model": "anthropic/claude-opus-4-6",
    "thinking": "high"
  },
  "gateway": {
    "port": 18789
  },
  "locale": "fr-MA"
}
```

---

## 🛡️ Sécurité

OpenMehdi interagit avec des interfaces de messagerie réelles. Il est impératif de considérer les messages entrants comme des **entrées non fiabilisées**. Veuillez consulter la [documentation de sécurité](https://docs.openclaw.ai/gateway/security) avant toute mise en production.

---

## 📚 Documentation

| Ressource | Lien |
| :--- | :--- |
| Guide de démarrage | [Getting Started](https://docs.openclaw.ai/start/getting-started) |
| Configuration avancée | [Configuration](https://docs.openclaw.ai/gateway/configuration) |
| Sécurité & Droits | [Security](https://docs.openclaw.ai/gateway/security) |
| Déploiement Docker | [Docker](https://docs.openclaw.ai/install/docker) |

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez [CONTRIBUTING.md](./CONTRIBUTING.md) pour nos directives de développement.

---

## 📄 Licence

Distribué sous licence **MIT** — voir [LICENSE](./LICENSE) pour plus de détails.

**OpenMehdi** est fièrement bâti sur le projet open-source [OpenClaw](https://github.com/openclaw/openclaw). Un immense merci à la communauté pour leur travail exceptionnel.

---

<div align="center">

Propulsé par l'IA au Maroc · 2026

</div>
