# 🐍💰🔒 OpenMehdi — Assistant IA Personnel Souverain

<p align="center">
  <img src="https://socialify.git.ci/loveoplay2023-hue/OpenMehdi/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Plus&theme=Dark" alt="OpenMehdi Banner" width="640" height="320" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=700&size=40&duration=3000&pause=1000&color=00D4FF&center=true&vCenter=true&width=600&lines=🐍+OpenMehdi;Sovereign+AI+Coworker;Multi-Agent+Fleet;Local-First+Engine;MCP+Ready;DeepSeek+%2B+Qwen" alt="OpenMehdi Typing" />
</p>

<p align="center">
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi/stargazers"><img src="https://img.shields.io/github/stars/loveoplay2023-hue/OpenMehdi?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi/network/members"><img src="https://img.shields.io/github/forks/loveoplay2023-hue/OpenMehdi?style=social" alt="GitHub Forks" /></a>
</p>

<p align="center">
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi/actions/workflows/ci.yml?branch=main"><img src="https://img.shields.io/github/actions/workflow/status/loveoplay2023-hue/OpenMehdi/ci.yml?branch=main&label=Build&style=flat-square&logo=github" alt="Build Status" /></a>
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi/releases"><img src="https://img.shields.io/github/v/release/loveoplay2023-hue/OpenMehdi?label=Stable&style=flat-square&logo=semver" alt="Release" /></a>
  <a href="https://github.com/loveoplay2023-hue/OpenMehdi/blob/main/LICENSE"><img src="https://img.shields.io/github/license/loveoplay2023-hue/OpenMehdi?style=flat-square&logo=open-source-initiative" alt="License" /></a>
  <a href="#docker"><img src="https://img.shields.io/badge/Docker-✓-2496ED?logo=docker&style=flat-square" alt="Docker" /></a>
  <a href="#mcp"><img src="https://img.shields.io/badge/MCP-Protocol-orange?style=flat-square" alt="MCP" /></a>
  <a href="#ollama"><img src="https://img.shields.io/badge/Ollama-Supported-FF6B6B?style=flat-square&logo=ollama" alt="Ollama" /></a>
</p>

<p align="center">
  <strong>🔒 Privacy-First • 🤖 Multi-Agent • 🚀 MCP-Native • 🌍 Multilingual (AR/FR/EN/Darija)</strong>
</p>

---

## 🌟 Qu'est-ce qu'OpenMehdi ?

**OpenMehdi** est un assistant IA personnel souverain qui fonctionne entièrement en local. Conçu au 🇲🇦 Maroc pour le monde, il orchestre une flotte d'agents autonomes spécialisés pour gérer votre vie numérique sans compromettre votre vie privée.

> 💡 **Vos données restent chez VOUS. Point final.**

### ✨ Fonctionnalités Clés

| Fonctionnalité | Description | Statut |
|----------------|-------------|--------|
| 🏥 **Agent Santé** | Diagnostic IA, suivi médical personnalisé | ✅ Actif |
| 📈 **Agent Trading BVC** | Analyse temps réel du marché marocain | ✅ Actif |
| 🏠 **Agent Immobilier** | Évaluation et recherche de biens | ✅ Actif |
| 🌐 **Agent Géophysique** | Analyse géologique et sismique | ✅ Actif |
| 🧠 **MCP Protocol** | Interopérabilité avec Claude, Cursor, etc. | 🆕 Nouveau |
| 🦙 **Ollama Native** | Support DeepSeek-R1, Qwen2.5, Llama 3 | 🆕 Nouveau |
| 🌐 **Darija Natively** | Le premier IA qui parle vraiment darija | ✅ Unique |

---

## 🚀 Installation Express

### Via Docker (Recommandé)

```bash
# Cloner le dépôt
git clone https://github.com/loveoplay2023-hue/OpenMehdi.git
cd OpenMehdi

# Lancer avec Docker Compose
docker-compose up -d

# Ou avec Podman
./setup-podman.sh
```

### Installation Manuelle

```bash
# Prérequis: Node.js >= 22.12.0
pnpm install
pnpm run build
pnpm start
```

---

## 🤖 Support LLM Local (2025-2026)

OpenMehdi supporte nativement les modèles locaux les plus performants :

| Modèle | Langue | Performance | Taille |
|--------|--------|-------------|--------|
| **DeepSeek-R1** | Multilingue | ⭐⭐⭐⭐⭐ | 1.5B-671B |
| **Qwen 2.5** | Arabe excellent | ⭐⭐⭐⭐⭐ | 0.5B-72B |
| **Llama 3.3** | Multilingue | ⭐⭐⭐⭐ | 70B |
| **Phi-4** | Code/Français | ⭐⭐⭐⭐ | 14B |
| **Mistral Small** | Français | ⭐⭐⭐⭐ | 22B |

```bash
# Exemple avec Ollama
ollama pull deepseek-r1:14b
ollama pull qwen2.5:14b

# Configuration dans .env
OLLAMA_MODEL=deepseek-r1:14b
OLLAMA_HOST=http://localhost:11434
```

---

## 🔌 MCP (Model Context Protocol)

OpenMehdi implémente le protocole MCP d'Anthropic, permettant une intégration transparente avec :
- **Claude Desktop**
- **Cursor IDE**
- **Cline**
- **Roo Code**

```json
{
  "mcpServers": {
    "openmehdi": {
      "command": "node",
      "args": ["/path/to/openmehdi/dist/mcp-server.js"],
      "env": {
        "OPENMEHDI_API_KEY": "your-api-key"
      }
    }
  }
}
```

---

## 🏗️ Architecture Multi-Agent

```
┌─────────────────────────────────────────────────────────────┐
│                    OpenMehdi Core                           │
├─────────────┬─────────────┬─────────────┬─────────────────┤
│ Agent Santé │ Agent BVC   │ Agent Geo   │ Agent Immo      │
│   🏥        │   📈        │   🌍        │   🏠            │
├─────────────┴─────────────┴─────────────┴─────────────────┤
│              MCP Gateway + Ollama Bridge                   │
├─────────────────────────────────────────────────────────────┤
│              Local Vector DB (sqlite-vec)                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🌍 Pourquoi OpenMehdi est Unique ?

### 🇲🇦 Le Premier IA Marocain Souverain

- **Darija native** - Comprend le dialecte marocain authentique
- **Contexte local** - BVC (Bourse de Casablanca), immobilier marocain, géologie du Rif
- **Hors-ligne** - Fonctionne sans internet une fois configuré
- **Open Source** - 100% transparent, auditable par la communauté

```bash
# Exemple de conversation en Darija
> user: achkayn bghit nchri dar f casa
> OpenMehdi: Hanta, ghadi n'cekik les prix f Casa. 
>             Wash bghiti quartier chi spécifique ? 
```

---

## 📚 Documentation

- [📖 Guide de Démarrage Rapide](./docs/QUICKSTART.md)
- [🔧 Configuration Avancée](./docs/CONFIGURATION.md)
- [🧩 Développer des Skills](./docs/SKILLS.md)
- [🔌 Intégration MCP](./docs/MCP_INTEGRATION.md)
- [🌐 Support Darija](./docs/DARIJA.md)

---

## 🤝 Contribution

```bash
# Fork et clone
git clone https://github.com/YOUR_USERNAME/OpenMehdi.git

# Créer une branche
git checkout -b feature/amazing-feature

# Commiter et pousser
git commit -m "feat: add amazing feature"
git push origin feature/amazing-feature
```

Consultez [CONTRIBUTING.md](./CONTRIBUTING.md) pour plus de détails.

---

## 📄 License

[MIT License](./LICENSE) © 2025-2026 OpenMehdi Contributors

---

<p align="center">
  <strong>Fait avec ❤️ au Maroc 🇲🇦 pour le monde 🌍</strong>
</p>

<p align="center">
  <a href="https://star-history.com/#loveoplay2023-hue/OpenMehdi&Date">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=loveoplay2023-hue/OpenMehdi&type=Date&theme=dark" />
      <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=loveoplay2023-hue/OpenMehdi&type=Date" />
      <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=loveoplay2023-hue/OpenMehdi&type=Date" />
    </picture>
  </a>
</p>
