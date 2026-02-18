---
summary: "CLI reference for `openmehdi logs` (tail gateway logs via RPC)"
read_when:
  - You need to tail Gateway logs remotely (without SSH)
  - You want JSON log lines for tooling
title: "logs"
---

# `openmehdi logs`

Tail Gateway file logs over RPC (works in remote mode).

Related:

- Logging overview: [Logging](/logging)

## Examples

```bash
openmehdi logs
openmehdi logs --follow
openmehdi logs --json
openmehdi logs --limit 500
openmehdi logs --local-time
openmehdi logs --follow --local-time
```

Use `--local-time` to render timestamps in your local timezone.
