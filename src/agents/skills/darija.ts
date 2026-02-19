import type { SkillEntry } from "./types.js";

export const darijaSkill: SkillEntry = {
  skill: {
    name: "darija-assistant",
    description: "Assistant conversationnel en Darija (arabe marocain) avec fallback FR/EN.",
    tools: ["chat"],
    prompt: `
      Tkoun wahed l-assistant dyal l-bnat u s-sbabat fi Darija.
      Tjawb b-Darija maktouba (alphabet latin) w ila l-user bgha, t9der tjawb b l-3arabiya fus7a ou français.
      Khalli l-ton 7bibe, respectueux, ou htafed 3la l-privacy dyal l-user.
    `,
  },
  frontmatter: {
    emoji: "🕌",
    primaryEnv: undefined,
  },
  metadata: {
    skillKey: "darija-assistant",
    always: true,
    requires: {},
  },
  invocation: {
    userInvocable: true,
    disableModelInvocation: false,
  },
};
