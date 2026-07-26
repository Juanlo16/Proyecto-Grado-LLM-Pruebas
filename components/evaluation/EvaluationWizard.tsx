// "use client";

// import { useState } from "react";
// import Welcome from "./Welcome";
// import InstitutionForm from "./InstitutionForm";
// import QuestionWizard from "./QuestionWizard";
// import { InstitutionData, Answers } from "@/types/evaluation";
// import EvaluationResults from "./EvaluationResults";


// type EvaluationStep =
//   | "WELCOME"
//   | "INSTITUTION"
//   | "QUESTIONNAIRE"
//   | "RESULT";

// export default function EvaluationWizard() {
//   const [step, setStep] = useState<EvaluationStep>("WELCOME");

//   const [institutionData, setInstitutionData] =
//     useState<InstitutionData>({
//       institution: "",
//       city: "",
//       type: "",
//       area: "",
//       evaluatorName: "",
//       evaluatorRole: "",
//       aiTool: "",
//       frequency: "",
//     });

//     const [answers, setAnswers] = useState<Answers>({});

//   return (
//     <>
//       {step === "WELCOME" && (
//         <Welcome
//           onStart={() => setStep("INSTITUTION")}
//         />
//       )}

//       {step === "INSTITUTION" && (
//         <InstitutionForm
//           data={institutionData}
//           onChange={(field, value) =>
//             setInstitutionData((prev) => ({
//               ...prev,
//               [field]: value,
//             }))
//           }
//           onContinue={() =>
//             setStep("QUESTIONNAIRE")
//           }
//         />
//       )}

//      {step === "QUESTIONNAIRE" && (
//         <QuestionWizard
//             answers={answers}
//             setAnswers={setAnswers}
//             onFinish={() => setStep("RESULT")}
//         />
//         )}

//         {step === "RESULT" && (
//         <EvaluationResults
//             answers={answers}
//             institutionData={institutionData}
//         />
//         )}

//     </>
//   );
// }

"use client";

import { useState } from "react";

import Welcome from "./Welcome";
import InstitutionForm from "./InstitutionForm";
import QuestionWizard from "./QuestionWizard";
import EvaluationResults from "./EvaluationResults";

import {
  Answers,
  EvaluationStep,
  InstitutionData,
} from "@/types/evaluation";

const initialInstitution: InstitutionData = {
  institution: "",
  city: "",
  type: "",
  area: "",

  evaluatorName: "",
  evaluatorRole: "",

  aiTool: "",
  frequency: "",
};

export default function EvaluationWizard() {
  const [step, setStep] =
    useState<EvaluationStep>("WELCOME");

  const [institutionData, setInstitutionData] =
    useState<InstitutionData>(initialInstitution);

  const [answers, setAnswers] =
    useState<Answers>({});

  function handleInstitutionChange(
    field: keyof InstitutionData,
    value: string
  ) {
    setInstitutionData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function startQuestionnaire() {
    setStep("QUESTIONNAIRE");
  }

  function finishEvaluation() {
    setStep("RESULT");
  }

  return (
    <>
      {step === "WELCOME" && (
        <Welcome
          onStart={() =>
            setStep("INSTITUTION")
          }
        />
      )}

      {step === "INSTITUTION" && (
        <InstitutionForm
          data={institutionData}
          onChange={handleInstitutionChange}
          onContinue={startQuestionnaire}
        />
      )}

      {step === "QUESTIONNAIRE" && (
        <QuestionWizard
          answers={answers}
          setAnswers={setAnswers}
          onFinish={finishEvaluation}
        />
      )}

      {step === "RESULT" && (
        <EvaluationResults
          answers={answers}
          institutionData={institutionData}
        />
      )}
    </>
  );
}