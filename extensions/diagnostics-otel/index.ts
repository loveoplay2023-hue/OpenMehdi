import type { OpenMehdiPluginApi } from "openmehdi/plugin-sdk";
import { emptyPluginConfigSchema } from "openmehdi/plugin-sdk";
import { createDiagnosticsOtelService } from "./src/service.js";

const plugin = {
  id: "diagnostics-otel",
  name: "Diagnostics OpenTelemetry",
  description: "Export diagnostics events to OpenTelemetry",
  configSchema: emptyPluginConfigSchema(),
  register(api: OpenMehdiPluginApi) {
    api.registerService(createDiagnosticsOtelService());
  },
};

export default plugin;
