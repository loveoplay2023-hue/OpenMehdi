# 🧠 OpenMehdi — Ton Assistant IA Personnel

<p align="center">
  <strong>OpenMehdi</strong> — Plateforme d'agents IA professionnels, local-first, multilingue.<br/>
  <em>Arabe • Français • Anglais • Darija marocaine</em>
</p>

<p align="center">
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi/actions"><img src="https://img.shields.io/github/actions/workflow/status/loveoplay2023-hue/OpenMehdi/sync-from-openmehdi.yml?branch=main&style=for-the-badge" alt="CI"/></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="MIT License"/></a>
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi"><img src="https://img.shields.io/badge/Made%20in-Maroc%20🇲🇦-green?style=for-the-badge" alt="Made in Maroc"/></a>
</p>

---

## 🌟 Qu'est-ce que OpenMehdi ?

**OpenMehdi** est un assistant IA personnel multi-agents que tu fais tourner sur tes propres appareils. Il répond sur les canaux que tu utilises déjà (WhatsApp, Telegram, Discord, Signal, iMessage, WebChat) et s'adapte à tes domaines professionnels.

Conçu pour le **Maroc** et la région **MENA**, OpenMehdi comprend le contexte local : Bourse de Casablanca (BVC), immobilier marocain, santé en Darija, et bien plus.

> **Un assistant qui te parle comme toi — en arabe, français, anglais ou darija.**

---

## 🚀 Domaines d'agents professionnels

### 🏥 Santé — Agent SantePro
- Analyse de symptômes en Darija / AR / FR
- Rappels médicaments et consultations
- Informations mutuelles et assurances santé Maroc (CNSS, CNOPS, Assur)
- Orientation vers spécialistes et cliniques
- Suivi nutrition et bien-être

### 📈 Trading BVC — Agent TradingPro
- Suivi en temps réel de la Bourse de Casablanca
- Analyse technique : RSI, MACD, Bollinger, moyennes mobiles
- Alertes cours et volumes sur actions MAse (BCP, Maroc Telecom, Attijariwafa...)
- Analyse fondamentale : bilans, dividendes, PER
- Stratégies court/moyen/long terme adaptées au marché marocain

### 🏠 Immobilier — Agent ImmoMehdi
- Recherche biens au Maroc (Casablanca, Rabat, Marrakech, Tanger...)
- Estimation prix au m² par quartier
- Calcul rentabilité locative et ROI
- Suivi agences, annonces Avito / Mubawab
- Conseils juridiques : titres fonciers, notaires, contrats

### 🗣️ Darija & Langue — Agent DarijaAI
- Traduction instantanée AR ↔ FR ↔ EN ↔ Darija
- Correction grammaticale arabe classique
- Reformulation professionnelle
- Génération contenu marketing en Darija

### 🤖 Agents généraux
- Recherche web intelligente
- Rédaction emails professionnels AR/FR/EN
- Automatisation tâches quotidiennes
- Analyse de documents PDF, Excel, CSV
- Code assistant (Python, TypeScript, Elixir)

---

## ⚡ Installation rapide

**Prérequis : Node.js ≥ 22**

```bash
# Installation globale
npm install -g openmehdi@latest
# ou pnpm
pnpm add -g openmehdi@latest

# Démarrage avec assistant de configuration
openmehdi onboard --install-daemon
```

---

## 📱 Canaux supportés

| Canal | Statut |
|-------|--------|
| WhatsApp | ✅ Supporté |
| Telegram | ✅ Supporté |
| Discord | ✅ Supporté |
| Signal | ✅ Supporté |
| iMessage (BlueBubbles) | ✅ Supporté |
| Slack | ✅ Supporté |
| WebChat | ✅ Supporté |
| Microsoft Teams | ✅ Supporté |
| Google Chat | ✅ Supporté |
| Matrix | ✅ Supporté |

---

## 🧪 Configuration minimale

Crée `~/.openmehdi/openmehdi.json` :

```json
{
  "agent": {
    "model": "anthropic/claude-opus-4-6",
    "language": "fr",
    "persona": "OpenMehdi"
  }
}
```

---

## 💻 Développement depuis les sources

```bash
git clone https://github.com/loveoplay2023-hue/OpenMehdi.git
cd OpenMehdi
pnpm install
pnpm ui:build
pnpm build
pnpm openmehdi onboard --install-daemon

# Mode développement avec rechargement auto
pnpm gateway:watch
```

---

## 🔒 Sécurité

- Les DMs inconnus reçoivent un code de pairing par défaut
- Les outils s'exécutent en local sur ta machine
- Mode sandbox Docker pour les sessions de groupe
- Guide complet : [SECURITY.md](./SECURITY.md)

---

## 🇲🇦 Fait avec ❤️ pour le Maroc

OpenMehdi est conçu et maintenu par la communauté marocaine. Contributions bienvenues en AR, FR, EN ou Darija.

Voir [CONTRIBUTING.md](./CONTRIBUTING.md) pour les guidelines.

---

## 📄 Licence

[MIT License](./LICENSE) — Libre d'utilisation, modification et distribution.

---

<p align="center">
  <strong>OpenMehdi</strong> — L'IA qui parle ton langage.
</p>
