# Security & Sovereign Trust Policy

Chez **OpenMehdi**, votre souveraineté numérique est notre priorité absolue. Contrairement aux assistants IA basés sur le cloud qui ingèrent vos données pour s'entraîner, OpenMehdi est conçu pour être **Local-First**, garantissant que vos secrets restent sous votre contrôle exclusif.

---

### 🔒 Principes Fondamentaux de Sécurité

1.  **Exécution Locale** : La passerelle (Gateway) et les agents s'exécutent sur votre propre matériel. Aucune donnée de conversation n'est envoyée à nos serveurs.
2.  **Bac à Sable (Sandboxing)** : Toutes les exécutions de code par les agents sont isolées via **Docker**, protégeant votre système hôte contre les actions malveillantes.
3.  **Gestion des Secrets** : Vos clés API et informations sensibles sont stockées localement. Nous recommandons l'utilisation de variables d'environnement sécurisées.
4.  **Auditabilité** : Le code est ouvert et transparent. Vous pouvez inspecter chaque ligne pour vérifier l'intégrité de votre assistant.

---

### 🚀 Hardening & Bonnes Pratiques

Pour une sécurité maximale, nous recommandons les configurations suivantes :
- `tools.fs.workspaceOnly: true` : Restreint l'accès aux fichiers uniquement au dossier de travail de l'agent.
- **Bind Loopback** : Gardez la passerelle liée à `127.0.0.1`.
- **Tunneling Sécurisé** : Pour l'accès distant, utilisez exclusivement **Tailscale** ou des tunnels SSH chiffrés.

---

### 🛡️ Signalement de Vulnérabilités

Si vous identifiez une faille de sécurité, merci de nous en informer en privé pour nous permettre de la corriger rapidement.

**Canaux de signalement :**
- **Email** : [security@openmehdi.ai](mailto:security@openmehdi.ai)
- **GitHub** : Soumettez une PR de correction directement sur le dépôt concerné.

---

### ⚖️ Bug Bounties & Engagement

OpenMehdi est un projet communautaire. Bien que nous n'ayons pas de programme de prime monétaire (bug bounty) pour le moment, chaque contributeur identifiant une faille majeure sera honoré dans notre liste des **"Sovereign Defenders"**.

---

### 🤖 Runtime & Compliance

OpenMehdi nécessite **Node.js 22.12.0+** pour bénéficier des derniers correctifs critiques (CVE-2025-59466 et CVE-2026-21636).

*Votre confiance ne se demande pas, elle se prouve par le code.* 🐍
