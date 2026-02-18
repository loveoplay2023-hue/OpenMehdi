---
summary: "CLI reference for `openmehdi setup` (initialize config + workspace)"
read_when:
  - You’re doing first-run setup without the full onboarding wizard
  - You want to set the default workspace path
title: "setup"
---

# `openmehdi setup`

Initialize `~/.openmehdi/openmehdi.json` and the agent workspace.

Related:

- Getting started: [Getting started](/start/getting-started)
- Wizard: [Onboarding](/start/onboarding)

## Examples

```bash
openmehdi setup
openmehdi setup --workspace ~/.openmehdi/workspace
```

To run the wizard via setup:

```bash
openmehdi setup --wizard
```
