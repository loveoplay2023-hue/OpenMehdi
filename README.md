<div align="center">

<img src="https://raw.githubusercontent.com/loveoplay2023-hue/OpenMehdi/main/docs/assets/openmehdi-banner.svg" alt="OpenMehdi Banner" width="900"/>

# OpenMehdi

**Ton Assistant IA Personnel — Local-First, Multilingue, Multi-Agent**

[![CI](https://img.shields.io/github/actions/workflow/status/loveoplay2023-hue/OpenMehdi/sync-from-openmehdi.yml?branch=main&style=for-the-badge&label=Build&logo=github)](https://github.com/loveoplay2023-hue/OpenMehdi/actions)
[![Release](https://img.shields.io/github/v/release/loveoplay2023-hue/OpenMehdi?style=for-the-badge&logo=github&color=7b2ff7)](https://github.com/loveoplay2023-hue/OpenMehdi/releases)
[![License](https://img.shields.io/badge/License-MIT-00c6ff?style=for-the-badge)](LICENSE)
[![Node](https://img.shields.io/badge/Node-%E2%89%A522-3fb950?style=for-the-badge&logo=node.js)](https://nodejs.org)

</div>

---

## Vue d'ensemble

**OpenMehdi** est un assistant IA personnel souverain, concu pour le contexte marocain.
Il tourne sur **ta propre machine**, repond sur les messageries que tu utilises deja, et parle **arabe, francais, anglais et darija**.

Specialise sur trois domaines strategiques :

| Domaine | Description |
|--------|-------------|
| **Sante** | Conseils medicaux, suivi symptomes, integration SanteProIA |
| **Trading BVC** | Analyse Bourse de Casablanca, signaux techniques, alertes prix |
| **Immobilier** | Recherche biens, estimation prix, annonces Maroc |

---

## Fonctionnalites cles

- **Multilingue** — Arabe (AR), Francais (FR), Anglais (EN), Darija marocaine
- **Multi-Agent** — Routing intelligent entre agents specialises
- **Local-First** — 100% sur ton serveur, tes donnees restent chez toi
- **Multi-Plateforme** — macOS, Linux, Windows (WSL2), iOS, Android
- **Multi-Canal** — WhatsApp, Telegram, Discord, Slack, Signal, Teams, WebChat
- **Raisonnement avance** — Modes de reflexion configurable (low / medium / high)

---

## Installation

> **Prerequis :** Node.js >= 22

```bash
# Installation globale
npm install -g openmehdi@latest

# ou avec pnpm
pnpm add -g openmehdi@latest

# Configuration initiale
openmehdi onboard --install-daemon
```

---

## Demarrage rapide

```bash
# Demarrer la passerelle
openmehdi gateway --port 18789 --verbose

# Envoyer un message de test
openmehdi message send --to +212612345678 --message "Bonjour OpenMehdi"

# Lancer une analyse BVC
openmehdi agent --message "Analyse le titre Maroc Telecom sur la BVC" --thinking high

# Consulter la sante
openmehdi agent --message "Quels sont les symptomes d'une carence en fer?" --agent sante
```

---

## Agents disponibles

| Agent | Commande | Specialite |
|-------|----------|------------|
| **Agent Sante** | `--agent sante` | Conseils medicaux, SanteProIA, symptomes |
| **Agent Trading** | `--agent trading` | BVC, analyse technique, alertes prix |
| **Agent Immobilier** | `--agent immo` | Recherche bien, estimation, annonces Maroc |
| **Agent Recherche** | `--agent recherche` | Web scraping, veille informationnelle |
| **Agent Darija** | `--agent darija` | Traduction et comprehension du dialecte |

---

## Canaux de messagerie supportes

<table>
<tr>
<td><b>Mobile</b></td>
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

## Configuration

Fichier de configuration : `~/.openmehdi/openmehdi.json`

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

## Securite

OpenMehdi se connecte a de vraies surfaces de messagerie.
Traiter les DMs entrants comme des **entrees non fiables** est essentiel.
Consulter la [documentation securite](https://docs.openclaw.ai/gateway/security) avant tout deploiement en production.

---

## Documentation

| Ressource | Lien |
|-----------|------|
| Demarrage rapide | [Getting Started](https://docs.openclaw.ai/start/getting-started) |
| Configuration complete | [Configuration](https://docs.openclaw.ai/gateway/configuration) |
| Securite & permissions | [Security](https://docs.openclaw.ai/gateway/security) |
| Deploiement Docker | [Docker](https://docs.openclaw.ai/install/docker) |

---

## Contribution

Les contributions sont les bienvenues. Voir [CONTRIBUTING.md](./CONTRIBUTING.md) pour les conventions et les directives.

---

## Licence

Distribue sous licence **MIT** — voir [LICENSE](./LICENSE) pour les details.

**OpenMehdi** est bati sur les epaules du projet open-source [OpenClaw](https://github.com/openclaw/openclaw).
Merci a toute la communaute pour leur travail remarquable.

---

<div align="center">

Fait avec en 2026 · Maroc

</div>
