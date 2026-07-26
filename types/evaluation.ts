// export interface InstitutionData {
//   institution: string;
//   city: string;
//   type: string;
//   area: string;

//   evaluatorName: string;
//   evaluatorRole: string;

//   aiTool: string;
//   frequency: string;
// }

// export interface Answers {
//   [questionId: number]: number;
// }

export interface InstitutionData {
  institution: string;
  city: string;
  type: string;
  area: string;

  evaluatorName: string;
  evaluatorRole: string;

  aiTool: string;
  frequency: string;
}

export type Answers = Record<number, number>;

export type EvaluationStep =
  | "WELCOME"
  | "INSTITUTION"
  | "QUESTIONNAIRE"
  | "RESULT";

export type Category =
  | "privacy"
  | "security"
  | "governance"
  | "compliance";

export interface CategoryScore {
  privacy: number;
  security: number;
  governance: number;
  compliance: number;
}

export interface RiskResult {
  level: "Bajo" | "Medio" | "Alto" | "Crítico";
  emoji: string;
  color: string;
}