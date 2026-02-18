import type {
  AnyAgentTool,
  OpenMehdiPluginApi,
  OpenMehdiPluginToolFactory,
} from "../../src/plugins/types.js";
import { createLobsterTool } from "./src/lobster-tool.js";

export default function register(api: OpenMehdiPluginApi) {
  api.registerTool(
    ((ctx) => {
      if (ctx.sandboxed) {
        return null;
      }
      return createLobsterTool(api) as AnyAgentTool;
    }) as OpenMehdiPluginToolFactory,
    { optional: true },
  );
}
