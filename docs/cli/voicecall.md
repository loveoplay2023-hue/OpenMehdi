---
summary: "CLI reference for `openmehdi voicecall` (voice-call plugin command surface)"
read_when:
  - You use the voice-call plugin and want the CLI entry points
  - You want quick examples for `voicecall call|continue|status|tail|expose`
title: "voicecall"
---

# `openmehdi voicecall`

`voicecall` is a plugin-provided command. It only appears if the voice-call plugin is installed and enabled.

Primary doc:

- Voice-call plugin: [Voice Call](/plugins/voice-call)

## Common commands

```bash
openmehdi voicecall status --call-id <id>
openmehdi voicecall call --to "+15555550123" --message "Hello" --mode notify
openmehdi voicecall continue --call-id <id> --message "Any questions?"
openmehdi voicecall end --call-id <id>
```

## Exposing webhooks (Tailscale)

```bash
openmehdi voicecall expose --mode serve
openmehdi voicecall expose --mode funnel
openmehdi voicecall unexpose
```

Security note: only expose the webhook endpoint to networks you trust. Prefer Tailscale Serve over Funnel when possible.
