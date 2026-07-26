interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {

  const progress =
    ((currentStep + 1) / totalSteps) * 100;

  return (

    <div className="mb-10">

      <div className="flex justify-between text-sm text-slate-600 mb-2">

        <span>

          Paso {currentStep + 1} de {totalSteps}

        </span>

        <span>

          {Math.round(progress)}%

        </span>

      </div>

      <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">

        <div
          className="h-full bg-red-500 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>

  );

}