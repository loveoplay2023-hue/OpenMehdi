import type { OpenMehdiConfig } from "./config.js";

export function ensurePluginAllowlisted(cfg: OpenMehdiConfig, pluginId: string): OpenMehdiConfig {
  const allow = cfg.plugins?.allow;
  if (!Array.isArray(allow) || allow.includes(pluginId)) {
    return cfg;
  }
  return {
    ...cfg,
    plugins: {
      ...cfg.plugins,
      allow: [...allow, pluginId],
    },
  };
}
