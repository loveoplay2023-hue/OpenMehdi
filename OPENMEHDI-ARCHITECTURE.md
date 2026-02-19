# 🦂 OpenMehdi — Guide d'Architecture

> Ce document décrit l'architecture technique d'**OpenMehdi** : un agent IA personnel souverain, modulaire et local-first, conçu par et pour la communauté.

---

## 🏗️ Vue d'Ensemble de l'Architecture

| Composant | Description | Fichier |
|-----------|-------------|---------|
| Skill Metadata | `OpenMehdiSkillMetadata` — définit les capacités d'un skill | `src/agents/skills/types.ts` |
| Skill Registry | `SkillEntry` + `SkillSnapshot` — registre des skills actifs | `src/agents/skills/types.ts` |
| Sandbox Docker | Exécution isolée des agents | `docker-compose.yml` |
| Workspace State | Gestion d'état immuable du workspace | `src/agents/skills/workspace.ts` |
| Tool Allowlist | `SkillCommandSpec` — outils autorisés par skill | `src/agents/skills/types.ts` |
| Agent Workflow | Workflows markdown pour les tâches récurrentes | `.agent/workflows/update_openmehdi.md` |
| Darija Support | Skill pour l'arabe marocain | `.agents/skills/darija-skill.md` |

---

## 🧩 Skill Pattern — OpenMehdi

### Principe
OpenMehdi définit des **Skills** — des modules TypeScript composables qui encapsulent une capacité spécifique de l'agent sans couplage fort.

### Type Principal

```typescript
// src/agents/skills/types.ts

export type OpenMehdiSkillMetadata = {
  always?: boolean;           // Chargé automatiquement au démarrage
  skillKey?: string;          // Clé unique du skill
  primaryEnv?: string;        // Variable d'env principale
  emoji?: string;             // Emoji visuel
  homepage?: string;          // URL de la documentation
  os?: string[];              // OS supportés
  requires?: {
    bins?: string[];          // Binaires requis
    anyBins?: string[];       // Au moins un de ces binaires
    env?: string[];           // Variables d'env requises
    config?: string[];        // Clés de config requises
  };
  install?: SkillInstallSpec[];  // Instructions d'installation
};
```

---

## 🔒 Politique de Sécurité OpenMehdi

OpenMehdi est conçu **Local-First** avec des garanties de sécurité strictes :

```yaml
# .openmehdi/security.yaml
sandbox:
  docker: true               # Exécution dans Docker isolé
  network_restricted: true   # Réseau restreint par défaut
  readonly_fs: true          # Filesystem en lecture seule

secrets:
  expose_local: false        # Jamais de secrets locaux exposés
  vault_optional: true       # HashiCorp Vault optionnel

allowlists:
  tools:                     # Outils explicitement autorisés
    - bash
    - python
    - node
    - git
  domains:                   # Domaines réseau autorisés
    - api.openai.com
    - ollama.local
    - bourse.ma
```

---

## 🔄 Structure d'un Workflow OpenMehdi

```markdown
---
description: Description courte du workflow
---

# Nom du Workflow

## Étapes

1. **Analyse** : Identifier l'état actuel
2. **Planification** : Créer un plan d'action
3. **Exécution** : Lancer les commandes
4. **Validation** : Vérifier les résultats
5. **Rapport** : Documenter les changements
```

### Workflows disponibles

| Workflow | Description | Fichier |
|----------|-------------|---------|
| Upstream Sync | Synchroniser le fork avec l'upstream | `.agent/workflows/update_openmehdi.md` |
| Merge PR | Fusionner des Pull Requests | `.agents/skills/merge-pr/` |
| Review PR | Réviser du code | `.agents/skills/review-pr/` |
| Prepare PR | Préparer une PR | `.agents/skills/prepare-pr/` |
| Darija Chat | Chat en Darija marocain | `.agents/skills/darija-skill.md` |

---

## 📦 Enregistrer un Nouveau Skill

```typescript
// Exemple : enregistrer le skill Trading BVC
import type { SkillEntry } from "./types";

const tradingSkill: SkillEntry = {
  skill: {
    name: "trading-bvc",
    description: "Analyse des actions BVC (Bourse de Casablanca)",
    tools: ["fetch", "analyze", "report"],
    prompt: `
      Tu es un expert financier marocain spécialisé dans la BVC.
      Tu analyses les actions, calcules les dividendes, et fournis
      des recommandations d'investissement en Darija et en Français.
    `,
  },
  frontmatter: {
    emoji: "📈",
    primaryEnv: "BVC_API_KEY",
  },
  metadata: {
    skillKey: "trading-bvc",
    always: false,
    requires: {
      env: ["BVC_API_KEY"],
      bins: ["curl"],
    },
  },
  invocation: {
    userInvocable: true,
    disableModelInvocation: false,
  },
};
```

---

## 🌐 Support Multilingue

OpenMehdi supporte nativement plusieurs langues :

```typescript
// Extension de types pour le multilingue
export type LocaleConfig = {
  primary: "dar" | "ar" | "fr" | "en";
  fallback: "fr" | "en";
  transliterate: boolean;
  rtl: boolean;  // Right-to-left pour l'arabe
};

export type OpenMehdiAgentConfig = {
  locale: LocaleConfig;
  skills: SkillEntry[];
  sandbox: SandboxConfig;
  version: string;
  securityLevel: "strict" | "moderate" | "permissive";
};
```

---

## 🚀 Roadmap Technique

- [x] **Phase 1** : Architecture modulaire Skills + Workflows
- [x] **Phase 2** : Documentation complète (README, AGENTS, CONTRIBUTING)
- [x] **Phase 3** : Skill Darija avec support natif marocain
- [ ] **Phase 4** : TypeScript Darija Skill complet (`src/agents/skills/darija.ts`)
- [ ] **Phase 5** : Agent Trading BVC avec données temps réel
- [ ] **Phase 6** : Agent SantéProIA (base médicale marocaine)
- [ ] **Phase 7** : Dashboard OpenMehdi avec métriques d'agents

---

## 📖 Références

- [Dépôt OpenMehdi](https://github.com/loveoplay2023-hue/OpenMehdi)
- [AGENTS-OPENMEHDI.md](./AGENTS-OPENMEHDI.md)
- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [SECURITY.md](./SECURITY.md)
- [Workflow Upstream Sync](./.agent/workflows/update_openmehdi.md)

---

<p align="center">
  Fait avec ❤️ au Maroc 🇲🇦 — OpenMehdi, l'IA souveraine.
</p>
