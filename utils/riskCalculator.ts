import {
  Answers,
  Category,
  CategoryScore,
  RiskResult,
} from "@/types/evaluation";

import { questions } from "@/data/questions";

export interface CategoryMaximums {
  privacy: number;
  security: number;
  governance: number;
  compliance: number;
}

export function calculateCategoryScores(
  answers: Answers
): CategoryScore {

  const scores: CategoryScore = {
    privacy: 0,
    security: 0,
    governance: 0,
    compliance: 0,
  };

  questions.forEach((question) => {

    const answer = answers[question.id];

    if (answer === undefined) return;


    scores[question.category as Category] +=
    answer * question.weight;

  });

  return scores;
}

export function calculateCategoryMaximums(): CategoryMaximums {

  const maximums: CategoryMaximums = {
    privacy: 0,
    security: 0,
    governance: 0,
    compliance: 0,
  };

  questions.forEach((question) => {

    maximums[question.category as Category] +=
      question.weight * 4;

  });

  return maximums;
}

export function calculateGeneralScore(
  scores: CategoryScore
) {

  return (
    scores.privacy +
    scores.security +
    scores.governance +
    scores.compliance
  );

}

export function calculateGeneralMaximum() {

  return questions.reduce(
    (total, question) => total + question.weight * 4,
    0
  );

}

export function calculatePercentage(
  score: number,
  maximum: number
) {

  return Math.round((score / maximum) * 100);

}

export function getRiskLevel(
  percentage: number
): RiskResult {

  if (percentage <= 25) {

    return {
      level: "Bajo",
      emoji: "🟢",
      color: "text-green-600",
    };

  }

  if (percentage <= 50) {

    return {
      level: "Medio",
      emoji: "🟡",
      color: "text-yellow-500",
    };

  }

  if (percentage <= 75) {

    return {
      level: "Alto",
      emoji: "🟠",
      color: "text-orange-500",
    };

  }

  return {
    level: "Crítico",
    emoji: "🔴",
    color: "text-red-600",
  };

}