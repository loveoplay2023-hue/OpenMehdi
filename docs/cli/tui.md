---
summary: "CLI reference for `openmehdi tui` (terminal UI connected to the Gateway)"
read_when:
  - You want a terminal UI for the Gateway (remote-friendly)
  - You want to pass url/token/session from scripts
title: "tui"
---

# `openmehdi tui`

Open the terminal UI connected to the Gateway.

Related:

- TUI guide: [TUI](/web/tui)

## Examples

```bash
openmehdi tui
openmehdi tui --url ws://127.0.0.1:18789 --token <token>
openmehdi tui --session main --deliver
```
