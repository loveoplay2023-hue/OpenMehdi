---
summary: "CLI reference for `openmehdi agents` (list/add/delete/set identity)"
read_when:
  - You want multiple isolated agents (workspaces + routing + auth)
title: "agents"
---

# `openmehdi agents`

Manage isolated agents (workspaces + auth + routing).

Related:

- Multi-agent routing: [Multi-Agent Routing](/concepts/multi-agent)
- Agent workspace: [Agent workspace](/concepts/agent-workspace)

## Examples

```bash
openmehdi agents list
openmehdi agents add work --workspace ~/.openmehdi/workspace-work
openmehdi agents set-identity --workspace ~/.openmehdi/workspace --from-identity
openmehdi agents set-identity --agent main --avatar avatars/openmehdi.png
openmehdi agents delete work
```

## Identity files

Each agent workspace can include an `IDENTITY.md` at the workspace root:

- Example path: `~/.openmehdi/workspace/IDENTITY.md`
- `set-identity --from-identity` reads from the workspace root (or an explicit `--identity-file`)

Avatar paths resolve relative to the workspace root.

## Set identity

`set-identity` writes fields into `agents.list[].identity`:

- `name`
- `theme`
- `emoji`
- `avatar` (workspace-relative path, http(s) URL, or data URI)

Load from `IDENTITY.md`:

```bash
openmehdi agents set-identity --workspace ~/.openmehdi/workspace --from-identity
```

Override fields explicitly:

```bash
openmehdi agents set-identity --agent main --name "OpenMehdi" --emoji "🦞" --avatar avatars/openmehdi.png
```

Config sample:

```json5
{
  agents: {
    list: [
      {
        id: "main",
        identity: {
          name: "OpenMehdi",
          theme: "space lobster",
          emoji: "🦞",
          avatar: "avatars/openmehdi.png",
        },
      },
    ],
  },
}
```
