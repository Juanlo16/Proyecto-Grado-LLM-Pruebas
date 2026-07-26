"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { Answers, InstitutionData } from "@/types/evaluation";
import { questions } from "@/data/questions";

import {
  calculateCategoryMaximums,
  calculateCategoryScores,
  calculateGeneralMaximum,
  calculateGeneralScore,
  calculatePercentage,
  getRiskLevel,
} from "@/utils/riskCalculator";

interface EvaluationResultsProps {
  answers: Answers;
  institutionData: InstitutionData;
}

export default function EvaluationResults({
  answers,
  institutionData,
}: EvaluationResultsProps) {

    const reportRef = useRef<HTMLDivElement>(null);

const handlePrint = useReactToPrint({
  contentRef: reportRef,
  documentTitle: `Informe-${institutionData.institution || "Evaluacion"}`,
});

  //=========================================
  // CÁLCULO DE RESULTADOS
  //=========================================

  const scores = calculateCategoryScores(answers);

  const maximums = calculateCategoryMaximums();

  const totalScore = calculateGeneralScore(scores);

  const totalMaximum = calculateGeneralMaximum();

  const totalPercentage = calculatePercentage(
    totalScore,
    totalMaximum
  );

  const generalRisk = getRiskLevel(totalPercentage);

  //=========================================
  // CATEGORÍAS
  //=========================================

  const categories = [
    {
      name: "🔒 Privacidad",
      score: scores.privacy,
      max: maximums.privacy,
    },
    {
      name: "🛡️ Seguridad",
      score: scores.security,
      max: maximums.security,
    },
    {
      name: "🏛️ Gobernanza",
      score: scores.governance,
      max: maximums.governance,
    },
    {
      name: "📋 Cumplimiento",
      score: scores.compliance,
      max: maximums.compliance,
    },
  ];

  //=========================================
  // RECOMENDACIONES AUTOMÁTICAS
  //=========================================

  const recommendations = Array.from(
    new Set(
      questions
        .filter((question) => {

          const answer = answers[question.id] ?? 0;

          return answer >= 2;

        })
        .sort((a, b) => b.weight - a.weight)
        .map((question) => question.recommendation)
    )
  ).slice(0, 6);

  //=========================================
  // INTERPRETACIÓN DEL RESULTADO
  //=========================================

  let interpretation = "";

  switch (generalRisk.level) {

    case "Bajo":

      interpretation =
        "La evaluación evidencia un bajo nivel de riesgo. La institución demuestra buenas prácticas relacionadas con privacidad, seguridad, gobernanza y cumplimiento en el uso de modelos de lenguaje.";

      break;

    case "Medio":

      interpretation =
        "Se identifican oportunidades de mejora que deberían ser atendidas para fortalecer la gestión del riesgo asociado al uso de modelos de lenguaje en la institución.";

      break;

    case "Alto":

      interpretation =
        "Se evidencian debilidades importantes en los controles relacionados con el uso de herramientas de inteligencia artificial. Se recomienda implementar acciones correctivas de manera prioritaria.";

      break;

    case "Crítico":

      interpretation =
        "El nivel de riesgo identificado es crítico. La institución requiere implementar controles técnicos, administrativos y normativos de forma inmediata para reducir la exposición a riesgos de privacidad y fuga de información.";

      break;
  }

  //=========================================
  // COLOR DINÁMICO DE BARRAS
  //=========================================

  const getProgressColor = (percentage: number) => {

    if (percentage <= 25)
      return "bg-green-500";

    if (percentage <= 50)
      return "bg-yellow-500";

    if (percentage <= 75)
      return "bg-orange-500";

    return "bg-red-500";

  };

  //=========================================
  // RETORNO
  //=========================================

return (
  <>

   <div ref={reportRef}>
  <section
    id="evaluation-report"
    className="max-w-6xl mx-auto py-12 px-6 bg-white"
  >

  <h1 className="text-4xl font-bold text-center mb-10">
  Evaluación de Riesgo de Privacidad en LLM
  <br />
  Informe generado automáticamente
</h1>

  {/* TARJETA PRINCIPAL */}

  <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

    <div className="text-center">

      <div className="text-7xl mb-4">
        {generalRisk.emoji}
      </div>

      <h2 className={`text-4xl font-bold ${generalRisk.color}`}>
        Riesgo {generalRisk.level}
      </h2>

      <p className="text-slate-500 mt-4">
        Puntaje obtenido
      </p>

      <p className="text-5xl font-bold mt-2">
        {totalScore} / {totalMaximum}
      </p>

      <p className="text-2xl font-semibold mt-2">
        {totalPercentage}%
      </p>

      <div className="w-full bg-slate-200 rounded-full h-5 mt-8 overflow-hidden">

        <div
          className={`${getProgressColor(totalPercentage)} h-full transition-all duration-700`}
          style={{
            width: `${totalPercentage}%`,
          }}
        />

      </div>

      <div className="mt-8 bg-slate-50 rounded-xl p-6">

        <h3 className="text-xl font-bold mb-3">
          Interpretación
        </h3>

        <p className="text-slate-700 leading-relaxed">
          {interpretation}
        </p>

      </div>

    </div>

  </div>

  {/* INFORMACIÓN */}

  <div className="bg-white rounded-3xl shadow-lg p-8 mb-10">

    <h2 className="text-2xl font-bold mb-6">
      Información de la evaluación
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div>
        <strong>Institución</strong>
        <p>{institutionData.institution || "No especificada"}</p>
      </div>

      <div>
        <strong>Ciudad</strong>
        <p>{institutionData.city || "No especificada"}</p>
      </div>

      <div>
        <strong>Tipo</strong>
        <p>{institutionData.type || "No especificado"}</p>
      </div>

      <div>
        <strong>Área</strong>
        <p>{institutionData.area || "No especificada"}</p>
      </div>

    </div>

  </div>

  {/* RESULTADOS POR CATEGORÍA */}

  <div className="mb-10">

    <h2 className="text-3xl font-bold mb-6">
      Resultados por Categoría
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      {categories.map((category) => {

        const percentage = calculatePercentage(
          category.score,
          category.max
        );

        const risk = getRiskLevel(percentage);

        return (

          <div
            key={category.name}
            className="bg-white rounded-2xl shadow-lg p-6"
          >

            <h3 className="text-xl font-bold mb-4">
              {category.name}
            </h3>

            <p className="text-slate-600 mb-3">
              {category.score} / {category.max}
            </p>

            <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">

              <div
                className={`${getProgressColor(percentage)} h-full transition-all duration-700`}
                style={{
                  width: `${percentage}%`,
                }}
              />

            </div>

            <div className="flex justify-between mt-4">

              <span className="font-semibold">
                {percentage}%
              </span>

              <span className={risk.color}>
                {risk.emoji} {risk.level}
              </span>

            </div>

          </div>

        );

      })}

    </div>

  </div>

  {/* RECOMENDACIONES */}

  <div className="bg-white rounded-3xl shadow-xl p-8">

    <h2 className="text-3xl font-bold mb-2">
      💡 Recomendaciones Prioritarias
    </h2>

    <p className="text-slate-500 mb-8">
      Con base en las respuestas registradas, el sistema recomienda implementar las siguientes acciones para reducir los riesgos asociados al uso de modelos de lenguaje (LLM).
    </p>

    <div className="space-y-4">

      {recommendations.length > 0 ? (

        recommendations.map((recommendation, index) => (

          <div
            key={index}
            className="flex gap-4 items-start bg-red-50 border-l-4 border-red-500 rounded-lg p-4"
          >

            <div className="text-red-600 text-xl font-bold">
              ✓
            </div>

            <p className="text-slate-700 leading-relaxed">
              {recommendation}
            </p>

          </div>

        ))

      ) : (

        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">

          <p className="text-green-700 font-medium">
            Excelente. No se identificaron oportunidades de mejora prioritarias de acuerdo con las respuestas registradas.
          </p>

        </div>

      )}

       </div>

  </div>
{/* NOTA DEL INFORME */}

<div
  className="mt-10 bg-slate-50 border border-slate-200 rounded-xl p-6"
  style={{
    breakInside: "avoid",
    pageBreakInside: "avoid",
  }}
>
  <h3 className="text-lg font-semibold text-slate-800 mb-2">
    ℹ️ Nota del informe
  </h3>

  <p className="text-sm text-slate-600 leading-relaxed">
    Los resultados obtenidos corresponden a una evaluación orientativa
    basada en la información suministrada por el evaluador y tienen como
    propósito apoyar la identificación de oportunidades de mejora en la
    gestión de riesgos asociados al uso de modelos de lenguaje (LLM). Este
    informe no sustituye una auditoría formal ni una evaluación
    especializada.
  </p>
</div>
   </section>
 </div>
    {/* BOTÓN PDF */}

    <div className="flex justify-center mt-10 mb-10">

        <button
        onClick={handlePrint}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-300"
      >
        📄 Descargar Informe PDF
      </button>

    </div>

  </>
);
}