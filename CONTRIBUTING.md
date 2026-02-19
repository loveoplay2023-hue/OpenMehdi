<div align="center">

# ◆ Contribuer à OpenMehdi ◆

*Bienvenue dans la communauté OpenMehdi — La plateforme IA pour le Maroc*

</div>

---

## ◈ Liens Essentiels

- **GitHub :** https://github.com/loveoplay2023-hue/OpenMehdi
- **Issues :** https://github.com/loveoplay2023-hue/OpenMehdi/issues
- **Pull Requests :** https://github.com/loveoplay2023-hue/OpenMehdi/pulls
- **Agents Doc :** [AGENTS-OPENMEHDI.md](./AGENTS-OPENMEHDI.md)
- **Sécurité :** [SECURITY.md](./SECURITY.md)

---

## ◈ Comment Contribuer

### 1. Fork & Clone

```bash
git clone https://github.com/loveoplay2023-hue/OpenMehdi.git
cd OpenMehdi
pnpm install
```

### 2. Créer une branche

```bash
git checkout -b feat/mon-agent-expert
# ou
git checkout -b fix/correction-trading-bvc
```

### 3. Développer & Tester

```bash
pnpm build
pnpm test
pnpm gateway:watch  # Mode dev
```

### 4. Soumettre une PR

```bash
git add .
git commit -m "feat: ajouter agent expert immobilier Agadir"
git push origin feat/mon-agent-expert
```

Ouvrir une Pull Request sur GitHub avec une description claire.

---

## ◈ Convention de Commits

| Préfixe | Usage |
|:--------|:------|
| `feat:` | Nouvelle fonctionnalité ou agent |
| `fix:` | Correction de bug |
| `docs:` | Documentation |
| `ci:` | GitHub Actions / workflows |
| `chore:` | Maintenance, dépendances |
| `refactor:` | Refactoring sans changement fonctionnel |
| `test:` | Ajout ou modification de tests |

---

## ◈ Standards du Projet

### Nommage
- Utiliser `openmehdi` (minuscule) dans le code
- Utiliser `OpenMehdi` (PascalCase) dans la documentation
- **Ne jamais** utiliser `openclaw`, `OpenClaw` dans ce repo

### Langues Acceptées
- Français ▫ Arabe ▫ Anglais ▫ Darija
- Les PRs en Darija sont les bienvenues !

### Code Quality
- TypeScript strict (`tsconfig.json`)
- Tests obligatoires pour nouveaux agents
- Lint via `oxlint` (`pnpm lint`)
- Format via `oxfmt` (`pnpm format`)

---

## ◈ Priorités de Contribution

### Agents (Haute Priorité)
- Amélioration agents existants (SantePro, TradingPro, ImmoMehdi...)
- Nouveaux skills pour le marché marocain
- Données BVC en temps réel
- Intégration API Avito / Mubawab

### Documentation (Moyenne Priorité)
- Traduction guides en Darija
- Tutoriels vidéo en français
- Exemples de configuration Maroc

### Infrastructure (Toujours Utile)
- Docker improvements
- Performance optimizations
- Tests d'intégration

---

## ◈ Code de Conduite

Ce projet adopte un code de conduite respectueux et inclusif :

- Respect mutuel entre contributeurs
- Aucune discrimination (langue, religion, origine)
- Retours constructifs et bienveillants
- La Darija, l'arabe et le français sont également acceptés

---

## ◈ Rapporter un Bug

1. Vérifier que le bug n'est pas déjà rapporté dans les [Issues](https://github.com/loveoplay2023-hue/OpenMehdi/issues)
2. Ouvrir une nouvelle Issue avec :
   - **Titre clair** du problème
   - **Étapes de reproduction**
   - **Comportement attendu** vs **obtenu**
   - **Logs** (`openmehdi gateway --verbose`)
   - **OS & version Node.js**

---

## ◈ Proposer une Fonctionnalité

Ouvrir une Issue avec le label `enhancement` en décrivant :
- Le **besoin métier** (contexte marocain)
- La **solution proposée**
- Les **agents concernés**
- L'**impact utilisateur** attendu

---

<div align="center">

---

*Chaque contribution, grande ou petite, construit l'IA du Maroc.*

**◆ OPENMEHDI ◆** &nbsp;·&nbsp; *Fait au Maroc 🇲🇦 Pour le Monde*

---

</div>
