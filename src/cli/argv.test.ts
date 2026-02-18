import { describe, expect, it } from "vitest";
import {
  buildParseArgv,
  getFlagValue,
  getCommandPath,
  getPrimaryCommand,
  getPositiveIntFlagValue,
  getVerboseFlag,
  hasHelpOrVersion,
  hasFlag,
  shouldMigrateState,
  shouldMigrateStateFromPath,
} from "./argv.js";

describe("argv helpers", () => {
  it("detects help/version flags", () => {
    expect(hasHelpOrVersion(["node", "openmehdi", "--help"])).toBe(true);
    expect(hasHelpOrVersion(["node", "openmehdi", "-V"])).toBe(true);
    expect(hasHelpOrVersion(["node", "openmehdi", "status"])).toBe(false);
  });

  it("extracts command path ignoring flags and terminator", () => {
    expect(getCommandPath(["node", "openmehdi", "status", "--json"], 2)).toEqual(["status"]);
    expect(getCommandPath(["node", "openmehdi", "agents", "list"], 2)).toEqual(["agents", "list"]);
    expect(getCommandPath(["node", "openmehdi", "status", "--", "ignored"], 2)).toEqual(["status"]);
  });

  it("returns primary command", () => {
    expect(getPrimaryCommand(["node", "openmehdi", "agents", "list"])).toBe("agents");
    expect(getPrimaryCommand(["node", "openmehdi"])).toBeNull();
  });

  it("parses boolean flags and ignores terminator", () => {
    expect(hasFlag(["node", "openmehdi", "status", "--json"], "--json")).toBe(true);
    expect(hasFlag(["node", "openmehdi", "--", "--json"], "--json")).toBe(false);
  });

  it("extracts flag values with equals and missing values", () => {
    expect(getFlagValue(["node", "openmehdi", "status", "--timeout", "5000"], "--timeout")).toBe(
      "5000",
    );
    expect(getFlagValue(["node", "openmehdi", "status", "--timeout=2500"], "--timeout")).toBe(
      "2500",
    );
    expect(getFlagValue(["node", "openmehdi", "status", "--timeout"], "--timeout")).toBeNull();
    expect(getFlagValue(["node", "openmehdi", "status", "--timeout", "--json"], "--timeout")).toBe(
      null,
    );
    expect(getFlagValue(["node", "openmehdi", "--", "--timeout=99"], "--timeout")).toBeUndefined();
  });

  it("parses verbose flags", () => {
    expect(getVerboseFlag(["node", "openmehdi", "status", "--verbose"])).toBe(true);
    expect(getVerboseFlag(["node", "openmehdi", "status", "--debug"])).toBe(false);
    expect(getVerboseFlag(["node", "openmehdi", "status", "--debug"], { includeDebug: true })).toBe(
      true,
    );
  });

  it("parses positive integer flag values", () => {
    expect(getPositiveIntFlagValue(["node", "openmehdi", "status"], "--timeout")).toBeUndefined();
    expect(
      getPositiveIntFlagValue(["node", "openmehdi", "status", "--timeout"], "--timeout"),
    ).toBeNull();
    expect(
      getPositiveIntFlagValue(["node", "openmehdi", "status", "--timeout", "5000"], "--timeout"),
    ).toBe(5000);
    expect(
      getPositiveIntFlagValue(["node", "openmehdi", "status", "--timeout", "nope"], "--timeout"),
    ).toBeUndefined();
  });

  it("builds parse argv from raw args", () => {
    const nodeArgv = buildParseArgv({
      programName: "openmehdi",
      rawArgs: ["node", "openmehdi", "status"],
    });
    expect(nodeArgv).toEqual(["node", "openmehdi", "status"]);

    const versionedNodeArgv = buildParseArgv({
      programName: "openmehdi",
      rawArgs: ["node-22", "openmehdi", "status"],
    });
    expect(versionedNodeArgv).toEqual(["node-22", "openmehdi", "status"]);

    const versionedNodeWindowsArgv = buildParseArgv({
      programName: "openmehdi",
      rawArgs: ["node-22.2.0.exe", "openmehdi", "status"],
    });
    expect(versionedNodeWindowsArgv).toEqual(["node-22.2.0.exe", "openmehdi", "status"]);

    const versionedNodePatchlessArgv = buildParseArgv({
      programName: "openmehdi",
      rawArgs: ["node-22.2", "openmehdi", "status"],
    });
    expect(versionedNodePatchlessArgv).toEqual(["node-22.2", "openmehdi", "status"]);

    const versionedNodeWindowsPatchlessArgv = buildParseArgv({
      programName: "openmehdi",
      rawArgs: ["node-22.2.exe", "openmehdi", "status"],
    });
    expect(versionedNodeWindowsPatchlessArgv).toEqual(["node-22.2.exe", "openmehdi", "status"]);

    const versionedNodeWithPathArgv = buildParseArgv({
      programName: "openmehdi",
      rawArgs: ["/usr/bin/node-22.2.0", "openmehdi", "status"],
    });
    expect(versionedNodeWithPathArgv).toEqual(["/usr/bin/node-22.2.0", "openmehdi", "status"]);

    const nodejsArgv = buildParseArgv({
      programName: "openmehdi",
      rawArgs: ["nodejs", "openmehdi", "status"],
    });
    expect(nodejsArgv).toEqual(["nodejs", "openmehdi", "status"]);

    const nonVersionedNodeArgv = buildParseArgv({
      programName: "openmehdi",
      rawArgs: ["node-dev", "openmehdi", "status"],
    });
    expect(nonVersionedNodeArgv).toEqual(["node", "openmehdi", "node-dev", "openmehdi", "status"]);

    const directArgv = buildParseArgv({
      programName: "openmehdi",
      rawArgs: ["openmehdi", "status"],
    });
    expect(directArgv).toEqual(["node", "openmehdi", "status"]);

    const bunArgv = buildParseArgv({
      programName: "openmehdi",
      rawArgs: ["bun", "src/entry.ts", "status"],
    });
    expect(bunArgv).toEqual(["bun", "src/entry.ts", "status"]);
  });

  it("builds parse argv from fallback args", () => {
    const fallbackArgv = buildParseArgv({
      programName: "openmehdi",
      fallbackArgv: ["status"],
    });
    expect(fallbackArgv).toEqual(["node", "openmehdi", "status"]);
  });

  it("decides when to migrate state", () => {
    expect(shouldMigrateState(["node", "openmehdi", "status"])).toBe(false);
    expect(shouldMigrateState(["node", "openmehdi", "health"])).toBe(false);
    expect(shouldMigrateState(["node", "openmehdi", "sessions"])).toBe(false);
    expect(shouldMigrateState(["node", "openmehdi", "config", "get", "update"])).toBe(false);
    expect(shouldMigrateState(["node", "openmehdi", "config", "unset", "update"])).toBe(false);
    expect(shouldMigrateState(["node", "openmehdi", "models", "list"])).toBe(false);
    expect(shouldMigrateState(["node", "openmehdi", "models", "status"])).toBe(false);
    expect(shouldMigrateState(["node", "openmehdi", "memory", "status"])).toBe(false);
    expect(shouldMigrateState(["node", "openmehdi", "agent", "--message", "hi"])).toBe(false);
    expect(shouldMigrateState(["node", "openmehdi", "agents", "list"])).toBe(true);
    expect(shouldMigrateState(["node", "openmehdi", "message", "send"])).toBe(true);
  });

  it("reuses command path for migrate state decisions", () => {
    expect(shouldMigrateStateFromPath(["status"])).toBe(false);
    expect(shouldMigrateStateFromPath(["config", "get"])).toBe(false);
    expect(shouldMigrateStateFromPath(["models", "status"])).toBe(false);
    expect(shouldMigrateStateFromPath(["agents", "list"])).toBe(true);
  });
});
