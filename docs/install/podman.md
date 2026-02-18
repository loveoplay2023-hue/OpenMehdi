---
summary: "Run OpenMehdi in a rootless Podman container"
read_when:
  - You want a containerized gateway with Podman instead of Docker
title: "Podman"
---

# Podman

Run the OpenMehdi gateway in a **rootless** Podman container. Uses the same image as Docker (build from the repo [Dockerfile](https://github.com/openmehdi/openmehdi/blob/main/Dockerfile)).

## Requirements

- Podman (rootless)
- Sudo for one-time setup (create user, build image)

## Quick start

**1. One-time setup** (from repo root; creates user, builds image, installs launch script):

```bash
./setup-podman.sh
```

This also creates a minimal `~openmehdi/.openmehdi/openmehdi.json` (sets `gateway.mode="local"`) so the gateway can start without running the wizard.

By default the container is **not** installed as a systemd service, you start it manually (see below). For a production-style setup with auto-start and restarts, install it as a systemd Quadlet user service instead:

```bash
./setup-podman.sh --quadlet
```

(Or set `OPENMEHDI_PODMAN_QUADLET=1`; use `--container` to install only the container and launch script.)

**2. Start gateway** (manual, for quick smoke testing):

```bash
./scripts/run-openmehdi-podman.sh launch
```

**3. Onboarding wizard** (e.g. to add channels or providers):

```bash
./scripts/run-openmehdi-podman.sh launch setup
```

Then open `http://127.0.0.1:18789/` and use the token from `~openmehdi/.openmehdi/.env` (or the value printed by setup).

## Systemd (Quadlet, optional)

If you ran `./setup-podman.sh --quadlet` (or `OPENMEHDI_PODMAN_QUADLET=1`), a [Podman Quadlet](https://docs.podman.io/en/latest/markdown/podman-systemd.unit.5.html) unit is installed so the gateway runs as a systemd user service for the openmehdi user. The service is enabled and started at the end of setup.

- **Start:** `sudo systemctl --machine openmehdi@ --user start openmehdi.service`
- **Stop:** `sudo systemctl --machine openmehdi@ --user stop openmehdi.service`
- **Status:** `sudo systemctl --machine openmehdi@ --user status openmehdi.service`
- **Logs:** `sudo journalctl --machine openmehdi@ --user -u openmehdi.service -f`

The quadlet file lives at `~openmehdi/.config/containers/systemd/openmehdi.container`. To change ports or env, edit that file (or the `.env` it sources), then `sudo systemctl --machine openmehdi@ --user daemon-reload` and restart the service. On boot, the service starts automatically if lingering is enabled for openmehdi (setup does this when loginctl is available).

To add quadlet **after** an initial setup that did not use it, re-run: `./setup-podman.sh --quadlet`.

## The openmehdi user (non-login)

`setup-podman.sh` creates a dedicated system user `openmehdi`:

- **Shell:** `nologin` — no interactive login; reduces attack surface.
- **Home:** e.g. `/home/openmehdi` — holds `~/.openmehdi` (config, workspace) and the launch script `run-openmehdi-podman.sh`.
- **Rootless Podman:** The user must have a **subuid** and **subgid** range. Many distros assign these automatically when the user is created. If setup prints a warning, add lines to `/etc/subuid` and `/etc/subgid`:

  ```text
  openmehdi:100000:65536
  ```

  Then start the gateway as that user (e.g. from cron or systemd):

  ```bash
  sudo -u openmehdi /home/openmehdi/run-openmehdi-podman.sh
  sudo -u openmehdi /home/openmehdi/run-openmehdi-podman.sh setup
  ```

- **Config:** Only `openmehdi` and root can access `/home/openmehdi/.openmehdi`. To edit config: use the Control UI once the gateway is running, or `sudo -u openmehdi $EDITOR /home/openmehdi/.openmehdi/openmehdi.json`.

## Environment and config

- **Token:** Stored in `~openmehdi/.openmehdi/.env` as `OPENMEHDI_GATEWAY_TOKEN`. `setup-podman.sh` and `run-openmehdi-podman.sh` generate it if missing (uses `openssl`, `python3`, or `od`).
- **Optional:** In that `.env` you can set provider keys (e.g. `GROQ_API_KEY`, `OLLAMA_API_KEY`) and other OpenMehdi env vars.
- **Host ports:** By default the script maps `18789` (gateway) and `18790` (bridge). Override the **host** port mapping with `OPENMEHDI_PODMAN_GATEWAY_HOST_PORT` and `OPENMEHDI_PODMAN_BRIDGE_HOST_PORT` when launching.
- **Paths:** Host config and workspace default to `~openmehdi/.openmehdi` and `~openmehdi/.openmehdi/workspace`. Override the host paths used by the launch script with `OPENMEHDI_CONFIG_DIR` and `OPENMEHDI_WORKSPACE_DIR`.

## Useful commands

- **Logs:** With quadlet: `sudo journalctl --machine openmehdi@ --user -u openmehdi.service -f`. With script: `sudo -u openmehdi podman logs -f openmehdi`
- **Stop:** With quadlet: `sudo systemctl --machine openmehdi@ --user stop openmehdi.service`. With script: `sudo -u openmehdi podman stop openmehdi`
- **Start again:** With quadlet: `sudo systemctl --machine openmehdi@ --user start openmehdi.service`. With script: re-run the launch script or `podman start openmehdi`
- **Remove container:** `sudo -u openmehdi podman rm -f openmehdi` — config and workspace on the host are kept

## Troubleshooting

- **Permission denied (EACCES) on config or auth-profiles:** The container defaults to `--userns=keep-id` and runs as the same uid/gid as the host user running the script. Ensure your host `OPENMEHDI_CONFIG_DIR` and `OPENMEHDI_WORKSPACE_DIR` are owned by that user.
- **Gateway start blocked (missing `gateway.mode=local`):** Ensure `~openmehdi/.openmehdi/openmehdi.json` exists and sets `gateway.mode="local"`. `setup-podman.sh` creates this file if missing.
- **Rootless Podman fails for user openmehdi:** Check `/etc/subuid` and `/etc/subgid` contain a line for `openmehdi` (e.g. `openmehdi:100000:65536`). Add it if missing and restart.
- **Container name in use:** The launch script uses `podman run --replace`, so the existing container is replaced when you start again. To clean up manually: `podman rm -f openmehdi`.
- **Script not found when running as openmehdi:** Ensure `setup-podman.sh` was run so that `run-openmehdi-podman.sh` is copied to openmehdi’s home (e.g. `/home/openmehdi/run-openmehdi-podman.sh`).
- **Quadlet service not found or fails to start:** Run `sudo systemctl --machine openmehdi@ --user daemon-reload` after editing the `.container` file. Quadlet requires cgroups v2: `podman info --format '{{.Host.CgroupsVersion}}'` should show `2`.

## Optional: run as your own user

To run the gateway as your normal user (no dedicated openmehdi user): build the image, create `~/.openmehdi/.env` with `OPENMEHDI_GATEWAY_TOKEN`, and run the container with `--userns=keep-id` and mounts to your `~/.openmehdi`. The launch script is designed for the openmehdi-user flow; for a single-user setup you can instead run the `podman run` command from the script manually, pointing config and workspace to your home. Recommended for most users: use `setup-podman.sh` and run as the openmehdi user so config and process are isolated.
