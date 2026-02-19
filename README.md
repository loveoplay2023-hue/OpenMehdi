<div align="center">

# ◆ OPENMEHDI ◆

### *Intelligence Artificielle de Prestige*

---

**`AR`** &nbsp;·&nbsp; **`FR`** &nbsp;·&nbsp; **`EN`** &nbsp;·&nbsp; **`ⴷⴰⵔⵉⵊⴰ`**

[![Build](https://img.shields.io/github/actions/workflow/status/loveoplay2023-hue/OpenMehdi/sync-from-openmehdi.yml?branch=main&style=flat-square&color=gold&label=BUILD)](https://github.com/loveoplay2023-hue/OpenMehdi/actions)
[![License](https://img.shields.io/badge/LICENSE-MIT-gold?style=flat-square)](LICENSE)
[![Maroc](https://img.shields.io/badge/MADE%20IN-MAROC%20🇲🇦-darkgreen?style=flat-square)](https://github.com/loveoplay2023-hue/OpenMehdi)
[![Platform](https://img.shields.io/badge/PLATFORM-Any%20OS-gold?style=flat-square)](https://github.com/loveoplay2023-hue/OpenMehdi)

</div>

---

<div align="center">

*« L'assistant qui comprend ton monde — ta langue, ton marché, ta culture. »*

</div>

---

## ◈ Présentation

**OpenMehdi** est une plateforme d'intelligence artificielle **multi-agents**, **local-first** et **multilingue**, conçue pour répondre aux exigences les plus élevées du professionnel marocain moderne.

Déployé sur tes propres appareils, OpenMehdi garantit une **confidentialité totale** de tes données tout en offrant des capacités d'analyse dignes des meilleurs systèmes d'IA au monde.

> Pas un simple chatbot. Une suite d'agents experts, disponibles 24h/24, qui parlent ta langue et connaissent ton marché.

---

## ◈ Suite d'Agents Experts

<table>
<tr>
<td width="50%">

### 🏥 SantePro
*Agent Santé & Bien-être*

- Analyse symptômes en **Darija / AR / FR**
- Couverture CNSS · CNOPS · AMO
- Orientation spécialistes & cliniques Maroc
- Rappels médicaments & consultations
- Nutrition, prévention, hygiène de vie
- Urgences : `15 SAMU` · `150 Urgences`

</td>
<td width="50%">

### 📈 TradingPro
*Agent Bourse de Casablanca*

- Suivi temps réel **MASI · MADEX · BVC**
- Analyse technique : RSI · MACD · Bollinger
- Alertes cours personnalisées
- Analyse fondamentale : PER · PBR · dividendes
- Stratégies adaptées au marché marocain
- Veille AMMC & réglementation

</td>
</tr>
<tr>
<td width="50%">

### 🏛️ ImmoMehdi
*Agent Immobilier Premium*

- Prix au m² par ville & quartier
- **Casa · Rabat · Marrakech · Tanger · Agadir**
- Calcul rentabilité locative & ROI
- Veille Avito · Mubawab · Sarouty
- Titres fonciers & procédures notariales
- Crédits : CIH · BMCE · Attijariwafa

</td>
<td width="50%">

### 🗣️ DarijaAI
*Agent Linguistique Marocain*

- Traduction **AR ↔ FR ↔ EN ↔ Darija**
- Transcription **3arabizi** (phonétique)
- Rédaction contenu pro en Darija
- Slogans & marketing en Darija
- Correction arabe classique
- Culture & expressions marocaines

</td>
</tr>
<tr>
<td width="50%">

### 🔬 GeoAnalyst
*Agent Géophysique & Géologie*

- Analyse sismique & parasismique
- Cartographie géologique du Maroc
- Évaluation risques naturels
- Rapports techniques AR/FR
- Interprétation données capteurs

</td>
<td width="50%">

### 💻 DevMehdi
*Agent Développeur Full-Stack*

- TypeScript · JavaScript · Node.js
- Python · Elixir · React · Next.js
- Docker · Podman · GitHub Actions
- Ollama · Hugging Face (LLM local)
- APIs REST · WebSocket
- Débogage & optimisation

</td>
</tr>
</table>

---

## ◈ Canaux Supportés

| Canal | Statut | Canal | Statut |
|:------|:------:|:------|:------:|
| WhatsApp | ✦ Actif | Signal | ✦ Actif |
| Telegram | ✦ Actif | Microsoft Teams | ✦ Actif |
| Discord | ✦ Actif | Google Chat | ✦ Actif |
| iMessage / BlueBubbles | ✦ Actif | Matrix | ✦ Actif |
| Slack | ✦ Actif | WebChat | ✦ Actif |

---

## ◈ Installation

**Prérequis : Node.js ≥ 22**

```bash
# Via npm
npm install -g openmehdi@latest

# Via pnpm (recommandé)
pnpm add -g openmehdi@latest

# Lancement de l'assistant de configuration
openmehdi onboard --install-daemon
```

---

## ◈ Démarrage Rapide

```bash
# Démarrer le Gateway
openmehdi gateway --port 18789 --verbose

# Envoyer un message
openmehdi message send --to +212600000000 --message "Salam OpenMehdi!"

# Activer un agent expert
openmehdi agent --persona TradingPro --message "Analyse BCP pour aujourd'hui"
openmehdi agent --persona SantePro --message "3andi douleur f rasi, chno n9der dir?"
openmehdi agent --persona ImmoMehdi --message "Prix appart Hay Riad Rabat 3 pièces?"
```

---

## ◈ Configuration

Fichier `~/.openmehdi/openmehdi.json` :

```json
{
  "agent": {
    "model": "anthropic/claude-opus-4-6",
    "language": "fr",
    "persona": "OpenMehdi"
  },
  "agents": {
    "trading": { "persona": "TradingPro" },
    "sante":   { "persona": "SantePro"  },
    "immo":    { "persona": "ImmoMehdi" },
    "darija":  { "persona": "DarijaAI"  }
  }
}
```

---

## ◈ Architecture

```
WhatsApp · Telegram · Discord · Signal · Teams · WebChat
                        │
              ┌─────────▼──────────┐
              │     G A T E W A Y   │
              │   ws://127.0.0.1   │
              │      :18789        │
              └────────┬───────────┘
                       │
          ┌────────────┼────────────┐
          │            │            │
    Pi Agent       CLI Tools    WebChat UI
   (Experts)    (openmehdi …)  (Dashboard)
          │
   ┌──────┴──────┐
   │  6 Agents   │
   │  Experts    │
   │  Maroc 🇲🇦  │
   └─────────────┘
```

---

## ◈ Développement

```bash
git clone https://github.com/loveoplay2023-hue/OpenMehdi.git
cd OpenMehdi
pnpm install
pnpm ui:build      # Build interface
pnpm build         # Build complet
pnpm gateway:watch # Mode dev avec rechargement auto
```

---

## ◈ Canaux de Mise à Jour

| Canal | Description | Tag npm |
|:------|:------------|:-------:|
| **stable** | Releases officielles `vYYYY.M.D` | `latest` |
| **beta** | Pré-releases `vYYYY.M.D-beta.N` | `beta` |
| **dev** | Tête de branche `main` | `dev` |

```bash
openmehdi update --channel stable
```

---

## ◈ Sécurité

- **Local-first** — tes données ne quittent jamais ta machine
- DMs inconnus → **code de pairing obligatoire**
- Mode **sandbox Docker** pour sessions de groupe
- Permissions macOS via protocole Gateway
- Guide complet : [SECURITY.md](./SECURITY.md)

```bash
openmehdi doctor  # Vérification configuration & sécurité
```

---

## ◈ Commandes Chat

| Commande | Action |
|:---------|:-------|
| `/status` | Statut session (modèle · tokens · coût) |
| `/new` ou `/reset` | Réinitialiser la session |
| `/compact` | Compresser le contexte |
| `/think high` | Activer le mode réflexion avancé |
| `/verbose on` | Mode verbeux |
| `/usage full` | Afficher l'utilisation détaillée |

---

<div align="center">

---

### ◆ OPENMEHDI ◆

*Plateforme d'Intelligence Artificielle Professionnelle*  
*Conçue au Maroc · Pour le Monde*

**[GitHub](https://github.com/loveoplay2023-hue/OpenMehdi)** &nbsp;·&nbsp; **[Licence MIT](./LICENSE)** &nbsp;·&nbsp; **[Agents](./AGENTS-OPENMEHDI.md)**

---

</div>
