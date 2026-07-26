import QuestionOptions from "./QuestionOptions";

interface QuestionCardProps {
  category: string;

  question: string;

  options: {
    label: string;
    value: number;
  }[];

  selected?: number;

  onSelect: (value: number) => void;
}

export default function QuestionCard({
  category,
  question,
  options,
  selected,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-10">

      <div className="mb-6">
        <span className="text-red-500 font-semibold uppercase tracking-wide">
          {category}
        </span>
      </div>

      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        {question}
      </h2>

      <QuestionOptions
        options={options}
        selected={selected}
        onSelect={onSelect}
      />

    </div>
  );
}