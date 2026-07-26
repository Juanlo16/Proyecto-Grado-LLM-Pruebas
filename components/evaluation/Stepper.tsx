interface StepperProps {
  currentStep: number;
}

const steps = [
  "Información",
  "Privacidad",
  "Seguridad",
  "Gobernanza",
  "Cumplimiento",
  "Resultado",
];

export default function Stepper({
  currentStep,
}: StepperProps) {
  return (
    <div className="mb-10">

      <div className="flex items-center">

        {steps.map((step, index) => {

          const active = index <= currentStep;

          return (

            <div
              key={step}
              className="flex items-center flex-1"
            >

              <div className="flex flex-col items-center">

                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold transition-all
                  ${
                    active
                      ? "bg-red-500 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {index + 1}
                </div>

                <span
                  className={`mt-3 text-sm font-medium whitespace-nowrap
                  ${
                    active
                      ? "text-red-500"
                      : "text-slate-500"
                  }`}
                >
                  {step}
                </span>

              </div>

              {index < steps.length - 1 && (

                <div
                  className={`flex-1 h-1 mx-4 rounded-full transition-all
                  ${
                    index < currentStep
                      ? "bg-red-500"
                      : "bg-slate-200"
                  }`}
                />

              )}

            </div>

          );

        })}

      </div>

    </div>
  );
}