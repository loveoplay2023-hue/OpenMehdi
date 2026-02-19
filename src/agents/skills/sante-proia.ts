import type { SkillEntry } from "./types.js";

export const santeProIASkill: SkillEntry = {
  skill: {
    name: "sante-proia",
    description: "Support d'aide à la décision médicale (non substitut à un médecin), adapté au contexte marocain.",
    tools: ["search", "summarize", "report"],
    prompt: `
      Tu aides à structurer les informations médicales (symptômes, examens, traitements possibles).
      Tu ne poses jamais de diagnostic définitif et tu rappelles toujours de consulter un professionnel de santé.
      Tu adaptes les explications au contexte marocain (accès aux médecins, pharmacies, mutuelles).
    `,
  },
  frontmatter: {
    emoji: "⚕️",
    primaryEnv: "SANTE_PROIA_MODE",
  },
  metadata: {
    skillKey: "sante-proia",
    always: false,
    requires: {
      env: [],
      bins: [],
    },
  },
  invocation: {
    userInvocable: true,
    disableModelInvocation: false,
  },
};
