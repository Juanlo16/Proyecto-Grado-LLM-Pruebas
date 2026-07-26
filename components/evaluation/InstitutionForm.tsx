import Stepper from "./Stepper";
import ProgressBar from "./ProgressBar";
import { InstitutionData } from "@/types/evaluation";

interface InstitutionFormProps {
  data: InstitutionData;

  onChange: (
    field: keyof InstitutionData,
    value: string
  ) => void;

  onContinue: () => void;
}

export default function InstitutionForm({
  data,
  onChange,
  onContinue,
}: InstitutionFormProps) {
    const isFormValid =
    data.institution.trim() !== "" &&
    data.city.trim() !== "" &&
    data.type.trim() !== "" &&
    data.area.trim() !== "";
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">

        <Stepper currentStep={0} />

        {/* <ProgressBar
            currentStep={0}
            totalSteps={6}
        /> */}

      <div className="bg-white rounded-2xl shadow-lg p-10">

        <h2 className="text-3xl font-bold text-slate-900">

          Información Institucional

        </h2>

        <p className="mt-3 text-slate-600">

          Antes de iniciar la evaluación, registre la información
          básica de la institución.

        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div>
            <label className="block font-medium mb-2">
              Institución
            </label>

            <input
            type="text"
            value={data.institution}
            onChange={(e) =>
                onChange("institution", e.target.value)
            }
            placeholder="Ej. Universidad Nacional"
            className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Ciudad
            </label>

            <input
            type="text"
            value={data.city}
            onChange={(e) =>
                onChange("city", e.target.value)
            }
            placeholder="Medellín"
            className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Tipo
            </label>

            <select
            value={data.type}
            onChange={(e) =>
                onChange("type", e.target.value)
            }
            className="w-full border rounded-xl p-3"
            >
            <option value="">Seleccione...</option>
            <option value="Pública">Pública</option>
            <option value="Privada">Privada</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">
              Área evaluada
            </label>

            <select
            value={data.area}
            onChange={(e) =>
                onChange("area", e.target.value)
            }
            className="w-full border rounded-xl p-3"
            >
            <option value="">Seleccione...</option>
            <option value="Académica">Académica</option>
            <option value="Investigación">Investigación</option>
            <option value="Administrativa">Administrativa</option>
            <option value="Tecnologías de Información">
                Tecnologías de Información
            </option>
            </select>
          </div>

        </div>

        <div className="mt-10 flex justify-end">

          <button
            onClick={onContinue}
            disabled={!isFormValid}
            className={`px-8 py-3 rounded-xl font-medium transition
                ${
                isFormValid
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
            Continuar
            </button>

        </div>

      </div>

    </section>
  );
}