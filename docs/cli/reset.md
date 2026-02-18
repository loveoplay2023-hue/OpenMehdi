---
summary: "CLI reference for `openmehdi reset` (reset local state/config)"
read_when:
  - You want to wipe local state while keeping the CLI installed
  - You want a dry-run of what would be removed
title: "reset"
---

# `openmehdi reset`

Reset local config/state (keeps the CLI installed).

```bash
openmehdi reset
openmehdi reset --dry-run
openmehdi reset --scope config+creds+sessions --yes --non-interactive
```
