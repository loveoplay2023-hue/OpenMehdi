import type { SkillEntry } from "./types.js";

export const tradingBvcSkill: SkillEntry = {
  skill: {
    name: "trading-bvc",
    description: "Analyse des actions de la Bourse de Casablanca (BVC), dividendes et scénarios d'investissement.",
    tools: ["fetch", "analyze", "report"],
    prompt: `
      Tu es un expert financier marocain spécialisé dans la BVC (Bourse de Casablanca).
      Tu analyses les actions, calcules les dividendes, et fournis des recommandations d'investissement
      en Darija et en Français, en insistant sur la gestion du risque, le long terme et la fiscalité marocaine.
    `,
  },
  frontmatter: {
    emoji: "📈",
    primaryEnv: "BVC_API_KEY",
  },
  metadata: {
    skillKey: "trading-bvc",
    always: false,
    requires: {
      env: ["BVC_API_KEY"],
      bins: ["curl"],
    },
  },
  invocation: {
    userInvocable: true,
    disableModelInvocation: false,
  },
};
