<div align="center">

# 🔒 Politique de Sécurité — OpenMehdi

*La sécurité de tes données est notre priorité absolue*

</div>

---

## ◈ Signaler une Vulnérabilité

Si tu penses avoir découvert une vulnérabilité de sécurité dans OpenMehdi, **ne l'ouvre pas publiquement**.

Signale-la de manière privée via :

- **GitHub Security Advisories :** [Signaler ici](https://github.com/loveoplay2023-hue/OpenMehdi/security/advisories/new)
- **Repository principal :** [loveoplay2023-hue/OpenMehdi](https://github.com/loveoplay2023-hue/OpenMehdi)

---

## ◈ Composants Concernés

| Composant | Description |
|:----------|:------------|
| **Gateway CLI** | Core CLI & contrôle du gateway (`src/`, `openmehdi.mjs`) |
| **Interface Web** | WebChat & Control UI (`ui/`, `apps/`) |
| **Extensions** | Plugins et extensions (`extensions/`) |
| **Agents** | Moteurs d'agents IA (`.agents/`, `skills/`) |
| **Canaux** | Intégrations messagerie (WhatsApp, Telegram...) |
| **Scripts** | Scripts déploiement & infra (`scripts/`) |

---

## ◈ Ce qu'il Faut Inclure dans le Rapport

1. **Titre** — Description courte et claire
2. **Gravité** — Critique / Haute / Moyenne / Faible
3. **Impact** — Qu'est-ce qui peut être compromis ?
4. **Composant affecté** — Quel fichier ou module ?
5. **Étapes de reproduction** — Procédure détaillée
6. **Preuve de concept** — Code ou capture d'écran (si disponible)
7. **Correctif suggéré** — Si tu as une idée de solution

---

## ◈ Modèle de Sécurité

### Local-First par Défaut

OpenMehdi est conçu **local-first** : toutes les données, sessions et clés restent sur **ta machine**. Aucune donnée n'est envoyée à des serveurs tiers sans ta configuration explicite.

### Accès DM

- **Par défaut :** DMs inconnus reçoivent un code de **pairing obligatoire**
- **Approuver :** `openmehdi pairing approve <téléphone>`
- **Configurer :** `dmPolicy: "pairing"` (défaut) ou `"open"` (explicite)

### Sandbox Docker

- Sessions de groupe → **sandbox Docker** isolé (activer dans config)
- Bash restricté dans le sandbox
- Outils dangereux bloqués par défaut (`browser`, `canvas`, `nodes`)

### Permissions macOS

- Accès système via **protocole Gateway** uniquement
- Permissions TCC respectées (`camera`, `microphone`, `screen recording`)
- Mode élevé (`/elevated on`) opt-in par session

---

## ◈ Bonnes Pratiques

```bash
# Vérifier la configuration de sécurité
openmehdi doctor

# Vérifier les politiques DM
openmehdi doctor --check-dm-policies

# Voir les sessions actives
openmehdi gateway status
```

### Ne Jamais Faire
- Ne jamais committer de secrets, tokens ou clés API dans ce repo
- Ne jamais utiliser `dmPolicy: "open"` sans `allowFrom` restreint
- Ne jamais exposer le Gateway sans authentification en production
- Utiliser `.env.example` avec des **valeurs fictives** uniquement

### Fichiers Sensibles (à ne jamais committer)
```
.env
*.key
*.pem
credentials/
~/.openmehdi/credentials/
```

---

## ◈ Divulgation Responsable

Nous nous engageons à :

1. **Accuser réception** dans les 48 heures
2. **Confirmer** la vulnérabilité dans les 7 jours
3. **Publier un correctif** dans les 30 jours (selon gravité)
4. **Créditer** le chercheur (si souhaité) dans le changelog

---

## ◈ Versions Supportées

| Version | Support Sécurité |
|:--------|:-----------------:|
| `latest` (stable) | ✅ Supporté |
| `beta` | ⚠️ Partiel |
| `dev` (main) | ❌ Non garanti |

---

<div align="center">

---

*La confiance est le fondement de tout assistant IA.*

**◆ OPENMEHDI ◆** &nbsp;·&nbsp; *Sécurité · Confidentialité · Local-First*

[Signaler une vulnérabilité](https://github.com/loveoplay2023-hue/OpenMehdi/security/advisories/new)

---

</div>
