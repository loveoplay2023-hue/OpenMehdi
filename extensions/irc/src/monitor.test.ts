import { describe, expect, it } from "vitest";
import { resolveIrcInboundTarget } from "./monitor.js";

describe("irc monitor inbound target", () => {
  it("keeps channel target for group messages", () => {
    expect(
      resolveIrcInboundTarget({
        target: "#openmehdi",
        senderNick: "alice",
      }),
    ).toEqual({
      isGroup: true,
      target: "#openmehdi",
      rawTarget: "#openmehdi",
    });
  });

  it("maps DM target to sender nick and preserves raw target", () => {
    expect(
      resolveIrcInboundTarget({
        target: "openmehdi-bot",
        senderNick: "alice",
      }),
    ).toEqual({
      isGroup: false,
      target: "alice",
      rawTarget: "openmehdi-bot",
    });
  });

  it("falls back to raw target when sender nick is empty", () => {
    expect(
      resolveIrcInboundTarget({
        target: "openmehdi-bot",
        senderNick: " ",
      }),
    ).toEqual({
      isGroup: false,
      target: "openmehdi-bot",
      rawTarget: "openmehdi-bot",
    });
  });
});
