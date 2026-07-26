interface Option {
  label: string;
  value: number;
}

interface QuestionOptionsProps {
  options: Option[];

  selected?: number;

  onSelect: (value: number) => void;
}

export default function QuestionOptions({
  options,
  selected,
  onSelect,
}: QuestionOptionsProps) {
  return (
    <div className="mt-8 space-y-4">

      {options.map((option) => {

        const isSelected = selected === option.value;

        return (

          <button
            key={option.value}
            type="button"
            onClick={() => onSelect(option.value)}
            className={`w-full text-left rounded-xl border p-4 transition-all

            ${
              isSelected
                ? "border-red-500 bg-red-50 text-red-700 font-semibold"
                : "border-slate-300 hover:border-red-400 hover:bg-red-50"
            }
            `}
          >

            {option.label}

          </button>

        );

      })}

    </div>
  );
}