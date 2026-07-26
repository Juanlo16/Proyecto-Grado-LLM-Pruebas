export interface Question {
  id: number;

  category:
    | "privacy"
    | "security"
    | "governance"
    | "compliance";

  question: string;

  weight: number;

  recommendation: string;

  options: {
    label: string;
    value: number;
  }[];
}

const defaultOptions = [
  {
    label: "Nunca",
    value: 4,
  },
  {
    label: "Rara vez",
    value: 3,
  },
  {
    label: "Algunas veces",
    value: 2,
  },
  {
    label: "Frecuentemente",
    value: 1,
  },
  {
    label: "Siempre",
    value: 0,
  },
];

export const questions: Question[] = [
  // ==========================================================
  // 🔒 PRIVACIDAD
  // ==========================================================

 {
  id: 1,
  category: "privacy",
  question:
    "¿La institución anonimiza la información personal o sensible antes de utilizar herramientas de inteligencia artificial o modelos de lenguaje (LLM)?",
  weight: 3,
  recommendation:
    "Implementar procesos de anonimización antes de utilizar modelos de lenguaje.",
  options: defaultOptions,
},

  {
    id: 2,
    category: "privacy",
    question:
  "¿Los usuarios verifican que la información ingresada en modelos de inteligencia artificial esté libre de datos personales o información confidencial antes de utilizarla?",
    weight: 3,
    recommendation:
      "Capacitar a los usuarios para identificar información sensible antes de utilizar herramientas de IA.",
    options: defaultOptions,
  },

  {
    id: 3,
    category: "privacy",
    question:
      "¿Existen procedimientos institucionales para proteger la privacidad antes de utilizar herramientas basadas en modelos de lenguaje (LLM)?",
    weight: 2,
    recommendation:
      "Definir procedimientos institucionales para proteger la privacidad de la información.",
    options: defaultOptions,
  },

  {
    id: 4,
    category: "privacy",
    question:
      "¿Se informa a los usuarios sobre los riesgos de privacidad asociados al uso de herramientas de inteligencia artificial generativa?",
    weight: 2,
    recommendation:
      "Realizar campañas de sensibilización sobre privacidad y protección de datos.",
    options: defaultOptions,
  },

  // ==========================================================
  // 🛡️ SEGURIDAD
  // ==========================================================

  {
    id: 5,
    category: "security",
    question:
      "¿La institución define y controla las herramientas de inteligencia artificial autorizadas para funcionarios, docentes y estudiantes?",
    weight: 2,
    recommendation:
      "Definir un catálogo de herramientas autorizadas por la institución.",
    options: defaultOptions,
  },

  {
    id: 6,
    category: "security",
    question:
      "¿Se restringe el ingreso de documentos institucionales confidenciales en plataformas públicas de inteligencia artificial?",
    weight: 3,
    recommendation:
      "Restringir el uso de plataformas públicas para documentos institucionales confidenciales.",
    options: defaultOptions,
  },

  {
    id: 7,
    category: "security",
    question:
      "¿Los usuarios reciben capacitación sobre el uso seguro de herramientas basadas en inteligencia artificial?",
    weight: 2,
    recommendation:
      "Implementar programas periódicos de capacitación en seguridad de la información.",
    options: defaultOptions,
  },

  {
    id: 8,
    category: "security",
    question:
      "¿La institución registra y realiza seguimiento a los incidentes relacionados con el uso de herramientas de inteligencia artificial?",
    weight: 2,
    recommendation:
      "Registrar y analizar los incidentes asociados al uso de IA para implementar acciones correctivas.",
    options: defaultOptions,
  },

  // ==========================================================
  // 🏛️ GOBERNANZA
  // ==========================================================

  {
    id: 9,
    category: "governance",
    question:
      "¿La institución cuenta con políticas internas para el uso responsable de herramientas de inteligencia artificial?",
    weight: 2,
    recommendation:
      "Diseñar e implementar políticas institucionales para el uso responsable de IA.",
    options: defaultOptions,
  },

  {
    id: 10,
    category: "governance",
    question:
      "¿La institución cuenta con un responsable o comité encargado de supervisar el uso institucional de herramientas de inteligencia artificial?",
    weight: 1,
    recommendation:
      "Designar un comité o responsable para supervisar el uso de IA.",
    options: defaultOptions,
  },

  {
    id: 11,
    category: "governance",
    question:
      "¿Las decisiones relacionadas con la adopción de herramientas de IA siguen un proceso formal de evaluación institucional?",
    weight: 2,
    recommendation:
      "Establecer procedimientos de evaluación antes de adoptar nuevas herramientas de IA.",
    options: defaultOptions,
  },

  {
    id: 12,
    category: "governance",
    question:
      "¿Se revisan periódicamente los riesgos asociados al uso de modelos de lenguaje en procesos académicos y administrativos?",
    weight: 2,
    recommendation:
      "Realizar revisiones periódicas de riesgos relacionados con inteligencia artificial.",
    options: defaultOptions,
  },

  // ==========================================================
  // 📋 CUMPLIMIENTO
  // ==========================================================

  {
    id: 13,
    category: "compliance",
    question:
      "¿La institución garantiza que el uso de herramientas de inteligencia artificial cumple con la Ley 1581 de 2012 sobre protección de datos personales en Colombia?",
    weight: 3,
    recommendation:
      "Garantizar el cumplimiento de la normativa colombiana sobre protección de datos personales.",
    options: defaultOptions,
  },

  {
    id: 14,
    category: "compliance",
    question:
      "¿La institución verifica que las herramientas de IA utilizadas cuenten con políticas claras de privacidad y tratamiento de datos?",
    weight: 3,
    recommendation:
      "Evaluar las políticas de privacidad antes de autorizar el uso de herramientas de IA.",
    options: defaultOptions,
  },

  {
    id: 15,
    category: "compliance",
    question:
      "¿La institución mantiene documentados los procedimientos relacionados con el uso institucional de herramientas de inteligencia artificial?",
    weight: 2,
    recommendation:
      "Mantener documentación actualizada sobre los procesos relacionados con IA.",
    options: defaultOptions,
  },

  {
    id: 16,
    category: "compliance",
    question:
      "¿La institución realiza auditorías o revisiones periódicas para verificar el cumplimiento de las políticas relacionadas con inteligencia artificial?",
    weight: 2,
    recommendation:
      "Realizar auditorías periódicas para verificar el cumplimiento de las políticas institucionales.",
    options: defaultOptions,
  },
];