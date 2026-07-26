interface WelcomeProps {
  onStart: () => void;
}

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <div className="text-center">

        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
          Framework de Evaluación
        </span>

        <h1 className="text-5xl font-bold text-slate-900 leading-tight">
          Evaluación de Riesgos para el uso de LLM
        </h1>

        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
          Evalúe el nivel de riesgo asociado al uso de Modelos de Lenguaje
          de Gran Escala (LLM) mediante un cuestionario basado en
          privacidad, seguridad, gobernanza y cumplimiento.
        </p>

        <button
          onClick={onStart}
          className="mt-10 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold transition"
        >
          Comenzar Evaluación
        </button>

      </div>

    </section>
  );
}