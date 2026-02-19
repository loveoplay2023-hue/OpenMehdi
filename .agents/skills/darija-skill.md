---
name: darija-skill
emoji: 🐍
description: Compétence spécialisée pour le traitement du Darija marocain et du contexte arabe. Optimisé pour OpenMehdi.
primaryEnv: DARIJA_MODEL
homepage: https://github.com/loveoplay2023-hue/OpenMehdi
os: [linux, macos, windows]
always: false
requires:
  env:
    - OPENAI_API_KEY
    - OPENMEHDI_LOCALE
  config:
    - locale
    - darija_model
---

# 🐍 Darija & Arabic Language Skill — OpenMehdi

Ce skill active la compréhension et la génération en **Darija marocain**, **Arabe standard** et **Français**.

## Fonctionnement

Ce skill permet à OpenMehdi de :

1. **Détecter automatiquement** la langue de l'utilisateur (Darija, AR, FR, EN)
2. **Répondre en Darija** avec un style naturel marocain
3. **Translittérer** entre l'alphabet latin et arabe
4. **Adapter le ton** selon le contexte culturel marocain

## Configuration

```yaml
# .openmehdi/config.yaml
locale: dar  # dar | ar | fr | en
darija_model: auto  # auto | gemma | llama | qwen
darija_transliterate: true
darija_fallback_lang: fr
```

## Exemples d'utilisation

```bash
# Démarrer OpenMehdi en mode Darija
openmehdi --locale=dar chat

# Traduire du Darija vers le Français
openmehdi translate --from=dar --to=fr "Wash nta mzyan?"

# Générer un rapport en Darija
openmehdi report --lang=dar --topic="trading BVC"
```

## Domaines supportés

| Domaine | Darija | Arabe | Français |
|---------|--------|-------|---------|
| Santé / SantéProIA | ✅ | ✅ | ✅ |
| Trading BVC | ✅ | ✅ | ✅ |
| Immobilier | ✅ | ✅ | ✅ |
| Géophysique | ✅ | ✅ | ✅ |
| Juridique Maroc | ✅ | ✅ | ✅ |

## Architecture ZeroClaw

Ce skill suit l'architecture **ZeroClaw Trait Pattern** :

```typescript
// Trait Darija pour OpenMehdi
export interface DarijaSkillTrait {
  locale: "dar" | "ar" | "fr" | "en";
  transliterate: boolean;
  culturalContext: "maroc" | "maghreb" | "arab-world" | "global";
  domains: string[];
}

export const darijaDefaults: DarijaSkillTrait = {
  locale: "dar",
  transliterate: true,
  culturalContext: "maroc",
  domains: ["sante", "trading", "immobilier", "geophysique"],
};
```

## Sécurité & Confidentialité

- Traitement **100% local** via Ollama (Qwen, LLaMA)
- Aucune donnée transmise à des serveurs externes sans consentement
- Conforme à la politique de sécurité ZeroClaw Docker Sandbox

## Intégration avec d'autres Skills

```bash
# Combiner Darija avec Trading
openmehdi skill enable darija-skill trading-skill

# Pipeline: Analyser BVC en Darija
openmehdi run --skill=darija-skill,trading-skill --prompt="3tiini l'analyse dyal MARSA"
```
