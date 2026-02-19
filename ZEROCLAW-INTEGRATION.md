# 🐍 ZeroClaw Integration Guide — OpenMehdi

> Ce document décrit comment les patterns architecturaux de **ZeroClaw** ont été intégrés dans **OpenMehdi** pour créer un agent IA souverain de classe enterprise.

---

## 🏗️ Architecture Comparée

| Concept ZeroClaw | Implémentation OpenMehdi | Fichier |
|------------------|--------------------------|---------|
| Trait Pattern | `OpenMehdiSkillMetadata` | `src/agents/skills/types.ts` |
| Skill Registry | `SkillEntry` + `SkillSnapshot` | `src/agents/skills/types.ts` |
| Sandbox Docker | Docker Compose isolé | `docker-compose.yml` |
| ClawDB State | Workspace immutable state | `src/agents/skills/workspace.ts` |
| Tool Allowlist | `SkillCommandSpec` dispatch | `src/agents/skills/types.ts` |
| Agent Workflow | `.agent/workflows/*.md` | `.agent/workflows/update_openmehdi.md` |
| Darija Support | `DarijaSkillTrait` | `.agents/skills/darija-skill.md` |

---

## 🧩 Trait Pattern (ZeroClaw → OpenMehdi)

### Principe ZeroClaw
ZeroClaw définit des **Traits** — des interfaces TypeScript composables qui définissent le comportement d'un agent sans couplage fort.

### Implémentation OpenMehdi

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

## 🔒 Security Checklist (ZeroClaw → OpenMehdi)

OpenMehdi implémente la **ZeroClaw Security Checklist** :

```yaml
# .openmehdi/security.yaml
sandbox:
  docker: true           # Exécution dans Docker isolé
  network_restricted: true
  readonly_fs: true

secrets:
  expose_local: false    # Jamais de secrets locaux exposés
  vault_required: false  # Optionnel: HashiCorp Vault

allowlists:
  tools:                 # Outils explicitement autorisés
    - bash
    - python
    - node
    - git
  domains:              # Domaines réseau autorisés
    - api.openai.com
    - ollama.local
    - bourse.ma
```

---

## 🔄 Workflow Pattern (ZeroClaw → OpenMehdi)

### Structure d'un workflow OpenMehdi

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
| Upstream Sync | Synchroniser avec l'upstream | `.agent/workflows/update_openmehdi.md` |
| Merge PR | Fusionner des Pull Requests | `.agents/skills/merge-pr/` |
| Review PR | Réviser du code | `.agents/skills/review-pr/` |
| Prepare PR | Préparer une PR | `.agents/skills/prepare-pr/` |
| Darija Chat | Chat en Darija marocain | `.agents/skills/darija-skill.md` |

---

## 📦 Skill Registration Pattern

```typescript
// Enregistrer un nouveau skill OpenMehdi
import type { SkillEntry } from "./types";

const mySkill: SkillEntry = {
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

## 🌐 Multi-Language Support

OpenMehdi étend ZeroClaw avec un support natif multilingue :

```typescript
// src/agents/skills/types.ts - Extension OpenMehdi
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
  zeroclaw: {
    version: string;
    clawdbPath: string;
    securityLevel: "strict" | "moderate" | "permissive";
  };
};
```

---

## 🚀 Roadmap d'Intégration

- [x] **Phase 1** : Intégration openclaw source → OpenMehdi (renommage)
- [x] **Phase 2** : Documentation ZeroClaw dans README/AGENTS/CONTRIBUTING
- [x] **Phase 3** : Skill Darija avec ZeroClaw Trait Pattern
- [ ] **Phase 4** : TypeScript Darija Skill complet (`src/agents/skills/darija.ts`)
- [ ] **Phase 5** : Agent Trading BVC avec données BVC en temps réel
- [ ] **Phase 6** : Agent SantéProIA avec base de connaissances médicale marocaine
- [ ] **Phase 7** : Dashboard OpenMehdi avec métriques ZeroClaw

---

## 📖 Références

- [ZeroClaw Repository](https://github.com/zeroclaw-labs/zeroclaw)
- [OpenMehdi Repository](https://github.com/loveoplay2023-hue/OpenMehdi)
- [AGENTS-OPENMEHDI.md](./AGENTS-OPENMEHDI.md)
- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [.agent/workflows/update_openmehdi.md](./.agent/workflows/update_openmehdi.md)

---

<p align="center">
  Fait avec ❤️ au Maroc 🇲🇦 — Powered by ZeroClaw Architecture
</p>
