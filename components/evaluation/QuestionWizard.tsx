"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { questions } from "@/data/questions";
import { Answers } from "@/types/evaluation";
import QuestionCard from "./QuestionCard";

interface QuestionWizardProps {
  answers: Answers;
  setAnswers: Dispatch<SetStateAction<Answers>>;
  onFinish: () => void;
}

const categoryLabels = {
  privacy: "🔒 Privacidad",
  security: "🛡️ Seguridad",
  governance: "🏛️ Gobernanza",
  compliance: "📋 Cumplimiento",
};

export default function QuestionWizard({
  answers,
  setAnswers,
  onFinish,
}: QuestionWizardProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const question = questions[currentQuestion];

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  function handleSelect(value: number) {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: value,
    }));
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      onFinish();
    }
  }

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }
console.log("answers", answers);
console.log("question", question);
console.log("questions", questions.length);
  return (
    <section className="max-w-5xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold text-slate-900 mb-10">
  Evaluación de Riesgos en el uso de LLM
</h1>

{currentQuestion === 0 && (
  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
    <h2 className="text-xl font-bold text-blue-900 mb-3">
      📋 Instrucciones
    </h2>

    <p className="text-slate-700">
      Responda cada pregunta según la situación actual de su institución.
      Seleccione la opción que mejor represente las prácticas implementadas
      en el uso de herramientas de inteligencia artificial (IA) y modelos
      de lenguaje (LLM).
    </p>

    <p className="mt-4 text-sm text-slate-600">
      <strong>Escala de respuesta:</strong> Nunca • Rara vez • Algunas veces •
      Frecuentemente • Siempre
    </p>
  </div>
)}

      <div className="mb-8">

        <div className="flex justify-between text-sm text-slate-600 mb-2">

          <span>
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>

          <span>{Math.round(progress)}%</span>

        </div>

        <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

          <div
            className="h-full bg-red-500 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      <div className="mb-6">

        <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">

          {
            categoryLabels[
              question.category as keyof typeof categoryLabels
            ]
          }

        </span>

      </div>

      <QuestionCard
        category={
          categoryLabels[
            question.category as keyof typeof categoryLabels
          ]
        }
        question={question.question}
        options={question.options}
        selected={answers[question.id]}
        onSelect={handleSelect}
      />

      <div className="flex justify-between mt-10">

        <button
          onClick={previousQuestion}
          disabled={currentQuestion === 0}
          className="px-6 py-3 rounded-xl border border-slate-300 disabled:opacity-40"
        >
          ← Anterior
        </button>

        <button
          onClick={nextQuestion}
          disabled={answers[question.id] === undefined}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl disabled:bg-slate-300"
        >
          {currentQuestion === questions.length - 1
            ? "Finalizar"
            : "Siguiente →"}
        </button>

      </div>

    </section>
  );
}