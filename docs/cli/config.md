---
summary: "CLI reference for `openmehdi config` (get/set/unset config values)"
read_when:
  - You want to read or edit config non-interactively
title: "config"
---

# `openmehdi config`

Config helpers: get/set/unset values by path. Run without a subcommand to open
the configure wizard (same as `openmehdi configure`).

## Examples

```bash
openmehdi config get browser.executablePath
openmehdi config set browser.executablePath "/usr/bin/google-chrome"
openmehdi config set agents.defaults.heartbeat.every "2h"
openmehdi config set agents.list[0].tools.exec.node "node-id-or-name"
openmehdi config unset tools.web.search.apiKey
```

## Paths

Paths use dot or bracket notation:

```bash
openmehdi config get agents.defaults.workspace
openmehdi config get agents.list[0].id
```

Use the agent list index to target a specific agent:

```bash
openmehdi config get agents.list
openmehdi config set agents.list[1].tools.exec.node "node-id-or-name"
```

## Values

Values are parsed as JSON5 when possible; otherwise they are treated as strings.
Use `--json` to require JSON5 parsing.

```bash
openmehdi config set agents.defaults.heartbeat.every "0m"
openmehdi config set gateway.port 19001 --json
openmehdi config set channels.whatsapp.groups '["*"]' --json
```

Restart the gateway after edits.
