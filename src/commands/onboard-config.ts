import type { OpenMehdiConfig } from "../config/config.js";

export function applyOnboardingLocalWorkspaceConfig(
  baseConfig: OpenMehdiConfig,
  workspaceDir: string,
): OpenMehdiConfig {
  return {
    ...baseConfig,
    agents: {
      ...baseConfig.agents,
      defaults: {
        ...baseConfig.agents?.defaults,
        workspace: workspaceDir,
      },
    },
    gateway: {
      ...baseConfig.gateway,
      mode: "local",
    },
  };
}
