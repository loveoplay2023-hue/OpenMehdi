import path from "node:path";
import { describe, expect, it } from "vitest";
import { formatCliCommand } from "./command-format.js";
import { applyCliProfileEnv, parseCliProfileArgs } from "./profile.js";

describe("parseCliProfileArgs", () => {
  it("leaves gateway --dev for subcommands", () => {
    const res = parseCliProfileArgs([
      "node",
      "openmehdi",
      "gateway",
      "--dev",
      "--allow-unconfigured",
    ]);
    if (!res.ok) {
      throw new Error(res.error);
    }
    expect(res.profile).toBeNull();
    expect(res.argv).toEqual(["node", "openmehdi", "gateway", "--dev", "--allow-unconfigured"]);
  });

  it("still accepts global --dev before subcommand", () => {
    const res = parseCliProfileArgs(["node", "openmehdi", "--dev", "gateway"]);
    if (!res.ok) {
      throw new Error(res.error);
    }
    expect(res.profile).toBe("dev");
    expect(res.argv).toEqual(["node", "openmehdi", "gateway"]);
  });

  it("parses --profile value and strips it", () => {
    const res = parseCliProfileArgs(["node", "openmehdi", "--profile", "work", "status"]);
    if (!res.ok) {
      throw new Error(res.error);
    }
    expect(res.profile).toBe("work");
    expect(res.argv).toEqual(["node", "openmehdi", "status"]);
  });

  it("rejects missing profile value", () => {
    const res = parseCliProfileArgs(["node", "openmehdi", "--profile"]);
    expect(res.ok).toBe(false);
  });

  it("rejects combining --dev with --profile (dev first)", () => {
    const res = parseCliProfileArgs(["node", "openmehdi", "--dev", "--profile", "work", "status"]);
    expect(res.ok).toBe(false);
  });

  it("rejects combining --dev with --profile (profile first)", () => {
    const res = parseCliProfileArgs(["node", "openmehdi", "--profile", "work", "--dev", "status"]);
    expect(res.ok).toBe(false);
  });
});

describe("applyCliProfileEnv", () => {
  it("fills env defaults for dev profile", () => {
    const env: Record<string, string | undefined> = {};
    applyCliProfileEnv({
      profile: "dev",
      env,
      homedir: () => "/home/peter",
    });
    const expectedStateDir = path.join(path.resolve("/home/peter"), ".openmehdi-dev");
    expect(env.OPENMEHDI_PROFILE).toBe("dev");
    expect(env.OPENMEHDI_STATE_DIR).toBe(expectedStateDir);
    expect(env.OPENMEHDI_CONFIG_PATH).toBe(path.join(expectedStateDir, "openmehdi.json"));
    expect(env.OPENMEHDI_GATEWAY_PORT).toBe("19001");
  });

  it("does not override explicit env values", () => {
    const env: Record<string, string | undefined> = {
      OPENMEHDI_STATE_DIR: "/custom",
      OPENMEHDI_GATEWAY_PORT: "19099",
    };
    applyCliProfileEnv({
      profile: "dev",
      env,
      homedir: () => "/home/peter",
    });
    expect(env.OPENMEHDI_STATE_DIR).toBe("/custom");
    expect(env.OPENMEHDI_GATEWAY_PORT).toBe("19099");
    expect(env.OPENMEHDI_CONFIG_PATH).toBe(path.join("/custom", "openmehdi.json"));
  });

  it("uses OPENMEHDI_HOME when deriving profile state dir", () => {
    const env: Record<string, string | undefined> = {
      OPENMEHDI_HOME: "/srv/openmehdi-home",
      HOME: "/home/other",
    };
    applyCliProfileEnv({
      profile: "work",
      env,
      homedir: () => "/home/fallback",
    });

    const resolvedHome = path.resolve("/srv/openmehdi-home");
    expect(env.OPENMEHDI_STATE_DIR).toBe(path.join(resolvedHome, ".openmehdi-work"));
    expect(env.OPENMEHDI_CONFIG_PATH).toBe(
      path.join(resolvedHome, ".openmehdi-work", "openmehdi.json"),
    );
  });
});

describe("formatCliCommand", () => {
  it("returns command unchanged when no profile is set", () => {
    expect(formatCliCommand("openmehdi doctor --fix", {})).toBe("openmehdi doctor --fix");
  });

  it("returns command unchanged when profile is default", () => {
    expect(formatCliCommand("openmehdi doctor --fix", { OPENMEHDI_PROFILE: "default" })).toBe(
      "openmehdi doctor --fix",
    );
  });

  it("returns command unchanged when profile is Default (case-insensitive)", () => {
    expect(formatCliCommand("openmehdi doctor --fix", { OPENMEHDI_PROFILE: "Default" })).toBe(
      "openmehdi doctor --fix",
    );
  });

  it("returns command unchanged when profile is invalid", () => {
    expect(formatCliCommand("openmehdi doctor --fix", { OPENMEHDI_PROFILE: "bad profile" })).toBe(
      "openmehdi doctor --fix",
    );
  });

  it("returns command unchanged when --profile is already present", () => {
    expect(
      formatCliCommand("openmehdi --profile work doctor --fix", { OPENMEHDI_PROFILE: "work" }),
    ).toBe("openmehdi --profile work doctor --fix");
  });

  it("returns command unchanged when --dev is already present", () => {
    expect(formatCliCommand("openmehdi --dev doctor", { OPENMEHDI_PROFILE: "dev" })).toBe(
      "openmehdi --dev doctor",
    );
  });

  it("inserts --profile flag when profile is set", () => {
    expect(formatCliCommand("openmehdi doctor --fix", { OPENMEHDI_PROFILE: "work" })).toBe(
      "openmehdi --profile work doctor --fix",
    );
  });

  it("trims whitespace from profile", () => {
    expect(formatCliCommand("openmehdi doctor --fix", { OPENMEHDI_PROFILE: "  jbopenmehdi  " })).toBe(
      "openmehdi --profile jbopenmehdi doctor --fix",
    );
  });

  it("handles command with no args after openmehdi", () => {
    expect(formatCliCommand("openmehdi", { OPENMEHDI_PROFILE: "test" })).toBe(
      "openmehdi --profile test",
    );
  });

  it("handles pnpm wrapper", () => {
    expect(formatCliCommand("pnpm openmehdi doctor", { OPENMEHDI_PROFILE: "work" })).toBe(
      "pnpm openmehdi --profile work doctor",
    );
  });
});
