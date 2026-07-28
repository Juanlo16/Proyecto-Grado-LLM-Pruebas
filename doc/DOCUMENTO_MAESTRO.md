---
title: "Sistema de Evaluación de Riesgos de Privacidad y Fuga de Datos en el Uso de Modelos de Lenguaje (LLM)"
subtitle: "Documento Maestro del Proyecto"
author: "Juan Pablo Londoño Corrales, Antonio Ampudia, Luis Fernando Mejía"
date: "Julio 2026"
version: "2.0"
estado: "Versión Final"
---

# DOCUMENTO MAESTRO DEL PROYECTO

# Sistema de Evaluación de Riesgos de Privacidad y Fuga de Datos en el Uso de Modelos de Lenguaje (LLM) para Instituciones de Educación Superior

---

# 1. Descripción General

El presente documento describe la arquitectura, funcionamiento y características técnicas del proyecto **Sistema de Evaluación de Riesgos de Privacidad y Fuga de Datos en el Uso de Modelos de Lenguaje (LLM)**, desarrollado como proyecto de grado del programa de Ingeniería de Sistemas.

La solución consiste en una aplicación web diseñada para apoyar a las Instituciones de Educación Superior (IES) en la identificación, evaluación y gestión de riesgos relacionados con el uso de herramientas de inteligencia artificial basadas en Modelos de Lenguaje de Gran Escala (LLM).

El sistema integra contenidos académicos sobre privacidad, seguridad de la información, gobernanza y cumplimiento normativo, junto con un instrumento de evaluación compuesto por un cuestionario estructurado que permite determinar el nivel de riesgo institucional y generar recomendaciones específicas de mejora.

Como resultado del proceso de evaluación, la aplicación genera automáticamente un informe técnico en formato PDF que resume la información institucional, el nivel de riesgo identificado, las recomendaciones aplicables y una nota aclaratoria sobre el alcance de la evaluación.

La plataforma fue desarrollada utilizando tecnologías web modernas, garantizando una interfaz intuitiva, adaptable a diferentes dispositivos y fácilmente desplegable mediante servicios en la nube.

---

# 2. Objetivos del Sistema

## Objetivo General

Desarrollar una aplicación web que permita evaluar el nivel de riesgo asociado al uso de modelos de lenguaje (LLM) en instituciones de educación superior, proporcionando recomendaciones orientadas a fortalecer la privacidad de la información y el cumplimiento normativo.

## Objetivos Específicos

- Facilitar el registro de información institucional para el proceso de evaluación.
- Implementar un cuestionario basado en dimensiones de privacidad, seguridad, gobernanza y cumplimiento.
- Calcular automáticamente el nivel de riesgo institucional a partir de las respuestas suministradas.
- Generar recomendaciones específicas según las oportunidades de mejora identificadas.
- Elaborar un informe técnico en formato PDF con los resultados obtenidos.
- Proporcionar información de apoyo sobre riesgos, cumplimiento normativo y buenas prácticas relacionadas con el uso de modelos de lenguaje.

---

# 3. Arquitectura del Sistema

La aplicación fue desarrollada siguiendo una arquitectura basada en componentes utilizando Next.js y React.

El sistema está organizado en módulos independientes que facilitan el mantenimiento, la reutilización del código y la escalabilidad futura del proyecto.

La arquitectura funcional se compone de cuatro capas principales:

## Presentación

Corresponde a la interfaz gráfica utilizada por el usuario para navegar por el sistema, consultar información y realizar el proceso de evaluación.

## Lógica de Negocio

Contiene la implementación del algoritmo encargado de calcular el nivel de riesgo institucional, generar las recomendaciones correspondientes y preparar la información utilizada para el informe final.

## Gestión de Datos

Administra la información correspondiente al cuestionario, las categorías evaluadas, los pesos asignados a cada pregunta y los contenidos informativos del sistema.

## Generación de Reportes

Se encarga de construir el informe técnico generado al finalizar la evaluación utilizando la funcionalidad de impresión del navegador mediante la librería React To Print.

---

# 4. Tecnologías Utilizadas

| Tecnología | Propósito |
|------------|-----------|
| Next.js 16 | Framework principal de la aplicación |
| React 19 | Construcción de componentes reutilizables |
| TypeScript | Tipado estático y mantenimiento del código |
| Tailwind CSS v4 | Diseño responsivo de la interfaz |
| Lucide React | Iconografía |
| React To Print | Generación del informe PDF |
| Git y GitHub | Control de versiones |
| GitHub Desktop | Administración del repositorio |
| Vercel | Despliegue continuo de la aplicación |

---

# 5. Estructura General del Proyecto

El proyecto se encuentra organizado siguiendo la estructura recomendada por Next.js.

```

Proyecto-Grado-LLM-Pruebas/

├── app/
├── components/
├── data/
├── hooks/
├── lib/
├── public/
├── doc/
├── types/
├── package.json
└── README.md

```

Cada carpeta cumple una función específica dentro de la arquitectura del sistema, permitiendo mantener una separación clara entre componentes, datos, lógica y recursos.

---

# 6. Funcionalidades Implementadas

Actualmente el sistema incorpora las siguientes funcionalidades:

## Información Institucional

Permite registrar los datos básicos de la institución que realizará la evaluación, incluyendo nombre de la institución, ciudad, tipo de institución y área evaluada.

El sistema valida que todos los campos obligatorios sean diligenciados antes de permitir continuar con el cuestionario.

---

## Instrumento de Evaluación

El proceso de evaluación está compuesto por un cuestionario de dieciséis (16) preguntas distribuidas en cuatro dimensiones fundamentales:

- Privacidad
- Seguridad
- Gobernanza
- Cumplimiento

Cada pregunta posee una ponderación específica de acuerdo con su importancia dentro del proceso de evaluación.

Las respuestas disponibles son:

- Nunca
- Rara vez
- Algunas veces
- Frecuentemente
- Siempre

Cada respuesta representa un nivel de implementación de buenas prácticas dentro de la institución.

---

## Cálculo Automático del Riesgo

Una vez finalizado el cuestionario, el sistema calcula automáticamente el nivel de riesgo institucional considerando la ponderación asignada a cada pregunta.

El algoritmo transforma las respuestas del usuario para que las buenas prácticas reduzcan el riesgo y las deficiencias incrementen el puntaje obtenido.

Como resultado se clasifica el estado de la institución en uno de los siguientes niveles:

- Riesgo Bajo
- Riesgo Medio
- Riesgo Alto
- Riesgo Crítico

Esta clasificación facilita la interpretación de los resultados por parte del evaluador.

---

## Generación de Recomendaciones

El sistema analiza individualmente cada respuesta suministrada durante la evaluación.

Cuando se identifican prácticas insuficientemente implementadas, la plataforma genera automáticamente recomendaciones específicas orientadas a fortalecer la gestión institucional.

Las recomendaciones son presentadas únicamente cuando representan oportunidades reales de mejora, evitando mostrar acciones innecesarias para instituciones que ya implementan controles adecuados.

---

## Generación del Informe Técnico

Una vez concluida la evaluación, el sistema construye un informe en formato PDF que incluye:

- Información institucional.
- Fecha de evaluación.
- Nivel de riesgo identificado.
- Puntaje obtenido.
- Resumen ejecutivo.
- Recomendaciones generadas automáticamente.
- Nota aclaratoria sobre el alcance de la evaluación.

El informe puede imprimirse o almacenarse como evidencia del proceso realizado.

---

# 7. Flujo General del Sistema

El funcionamiento del sistema sigue el siguiente proceso:

1. Acceso a la plataforma.
2. Consulta del contenido informativo del proyecto.
3. Registro de información institucional.
4. Desarrollo del cuestionario de evaluación.
5. Procesamiento automático de las respuestas.
6. Clasificación del nivel de riesgo.
7. Generación de recomendaciones.
8. Elaboración del informe técnico en formato PDF.

Este flujo garantiza que todas las instituciones sean evaluadas siguiendo el mismo procedimiento, proporcionando resultados consistentes y comparables.

---

# 8. Módulos de Información

Además del instrumento de evaluación, la plataforma incorpora módulos informativos que permiten al usuario comprender el contexto del proyecto y consultar información de apoyo.

Actualmente se encuentran disponibles los siguientes módulos:

- Marco de Privacidad.
- Riesgos asociados al uso de modelos de lenguaje.
- Cumplimiento normativo.
- Escenarios de aplicación.
- Recursos de consulta.
- Información del proyecto.

Cada módulo fue desarrollado con un enfoque educativo para complementar el proceso de evaluación y facilitar la comprensión de los riesgos asociados al uso de herramientas de inteligencia artificial.

---

# 9. Despliegue de la Aplicación

Como parte del proceso de validación del prototipo, la aplicación fue desplegada en la plataforma **Vercel**, permitiendo su acceso desde cualquier navegador sin necesidad de instalar software adicional.

El despliegue continuo se encuentra integrado con GitHub, de manera que cada actualización realizada sobre el repositorio puede publicarse automáticamente mediante un nuevo proceso de construcción (Build).

Esta estrategia facilita las pruebas del sistema por parte del equipo de trabajo, el director del proyecto y los evaluadores académicos.

## Beneficios del despliegue

- Acceso remoto desde cualquier dispositivo.
- Disponibilidad permanente de la aplicación.
- Actualización automática mediante integración continua (CI/CD).
- Certificados HTTPS administrados por Vercel.
- Optimización automática del rendimiento.

---

# 10. Repositorio del Proyecto

Todo el desarrollo fue administrado mediante Git y GitHub, permitiendo mantener un historial completo de cambios durante la construcción del sistema.

El repositorio contiene:

- Código fuente de la aplicación.
- Componentes reutilizables.
- Datos utilizados durante la evaluación.
- Documentación técnica.
- Evidencias del proyecto.
- Recursos complementarios.

La utilización de Git permitió el trabajo colaborativo entre los integrantes del proyecto, facilitando el control de versiones y el seguimiento de las diferentes modificaciones realizadas durante el desarrollo.

---

# 11. Estado Actual del Proyecto

Al finalizar esta etapa, el sistema cuenta con una implementación completamente funcional de los componentes propuestos durante el desarrollo del proyecto.

Actualmente se encuentran implementados:

- Página principal del proyecto.
- Marco de privacidad para el uso de LLM.
- Catálogo de riesgos de privacidad.
- Mapeo de cumplimiento normativo.
- Escenarios de aplicación.
- Recursos de consulta.
- Información del proyecto.
- Formulario de información institucional.
- Cuestionario de evaluación.
- Algoritmo de cálculo del nivel de riesgo.
- Generación automática de recomendaciones.
- Elaboración del informe técnico en formato PDF.
- Diseño adaptable para dispositivos móviles y equipos de escritorio.
- Despliegue público mediante Vercel.

El sistema representa un prototipo funcional orientado a apoyar procesos institucionales de evaluación relacionados con el uso responsable de modelos de lenguaje.

---

# 12. Evidencias del Proyecto

Como evidencia del desarrollo realizado se dispone de los siguientes recursos:

## Aplicación Web

Versión desplegada del sistema disponible para consulta y evaluación.

Incluye:

- Navegación completa.
- Contenido académico.
- Instrumento de evaluación.
- Generación de resultados.
- Elaboración del informe PDF.

---

## Repositorio GitHub

Repositorio oficial del proyecto con el código fuente, documentación y estructura del sistema.

Incluye:

- Historial de versiones.
- Organización del proyecto.
- Documento maestro.
- Evidencias del desarrollo.
- Recursos utilizados.

---

## Video de Demostración

Se dispone de un video donde se presenta el funcionamiento general de la plataforma.

El recorrido incluye:

- Navegación por las diferentes secciones.
- Registro de información institucional.
- Desarrollo del cuestionario.
- Obtención de resultados.
- Generación del informe PDF.

---

# 13. Resultados Alcanzados

Durante el desarrollo del proyecto se lograron los siguientes resultados:

## Funcionales

- Desarrollo de una plataforma web completamente funcional.
- Implementación de un cuestionario de evaluación compuesto por dieciséis preguntas.
- Clasificación automática del nivel de riesgo.
- Generación de recomendaciones personalizadas.
- Elaboración automática del informe de resultados.
- Validación del funcionamiento del sistema mediante pruebas funcionales.

## Técnicos

- Arquitectura modular basada en componentes reutilizables.
- Desarrollo utilizando Next.js, React y TypeScript.
- Diseño responsivo adaptable a diferentes resoluciones.
- Código organizado siguiendo buenas prácticas de desarrollo.
- Despliegue en infraestructura cloud mediante Vercel.

## Académicos

- Integración de conceptos relacionados con privacidad, seguridad, gobernanza y cumplimiento.
- Aplicación de principios de ingeniería de software durante el desarrollo.
- Construcción de un instrumento de evaluación orientado a instituciones de educación superior.
- Desarrollo de un prototipo como apoyo a la toma de decisiones relacionadas con el uso de modelos de lenguaje.

---

# 14. Nivel de Madurez Tecnológica (TRL)

De acuerdo con la evolución alcanzada por el proyecto, el sistema se encuentra en un nivel de madurez tecnológica **TRL 5**, correspondiente a una tecnología validada en un entorno relevante.

Este nivel se evidencia mediante:

- Desarrollo completo del prototipo.
- Funcionamiento integral de los módulos principales.
- Evaluación mediante escenarios de uso.
- Despliegue en ambiente web.
- Validación funcional del proceso de evaluación.

Aunque el sistema aún no ha sido implementado de manera institucional en una universidad, demuestra la viabilidad técnica del modelo propuesto y constituye una base sólida para futuras implementaciones.

---

# 15. Trabajo Futuro

El proyecto puede evolucionar mediante la incorporación de nuevas funcionalidades, entre ellas:

- Implementación de autenticación de usuarios.
- Gestión de múltiples evaluaciones por institución.
- Almacenamiento de resultados en una base de datos.
- Panel administrativo para consulta histórica.
- Estadísticas comparativas entre instituciones.
- Exportación de resultados en diferentes formatos.
- Personalización del instrumento de evaluación.
- Integración con plataformas institucionales.

Estas mejoras permitirán incrementar el nivel de madurez tecnológica del sistema y ampliar su aplicación en contextos reales.

---

# 16. Conclusiones

El desarrollo del Sistema de Evaluación de Riesgos de Privacidad y Fuga de Datos en el Uso de Modelos de Lenguaje (LLM) permitió materializar una herramienta tecnológica orientada a fortalecer la adopción responsable de soluciones de inteligencia artificial dentro de las instituciones de educación superior.

La integración de contenidos académicos, un instrumento de evaluación estructurado, un algoritmo de clasificación de riesgos y la generación automática de informes convierten al sistema en un recurso de apoyo para la identificación de oportunidades de mejora relacionadas con la privacidad de la información.

El proyecto demuestra la aplicabilidad de tecnologías web modernas para resolver problemáticas asociadas con la transformación digital y el uso creciente de modelos de lenguaje en el ámbito educativo.

Asimismo, la arquitectura modular implementada facilita la evolución futura del sistema, permitiendo incorporar nuevas funcionalidades y ampliar su alcance hacia procesos institucionales de gestión de riesgos.

---

# 17. Créditos del Proyecto

**Proyecto de Grado**

**Título**

Sistema de Evaluación de Riesgos de Privacidad y Fuga de Datos en el Uso de Modelos de Lenguaje (LLM) para Instituciones de Educación Superior.

**Programa Académico**

Ingeniería de Sistemas

**Universidad**

Universidad Nacional Abierta y a Distancia (UNAD)

**Autores**

- Jesús Antonio Acevedo Montoya 
- Daniel Felipe Villa Duarte 
- Juan Pablo Londoño Corrales 

---


# 18. Enlaces del Proyecto

Como complemento al presente documento, se ponen a disposición los siguientes recursos relacionados con el desarrollo y validación del proyecto:

- **Prototipo Web:** <https://proyecto-grado-llm-pruebas.vercel.app>
- **Repositorio GitHub:** <https://github.com/Juanlo16/Proyecto-Grado-LLM-Pruebas>
- **Video de Demostración:** <https://youtu.be/36RSOqhRyn8>
- **Respaldo del Video:** <https://drive.google.com/file/d/14NfH85NQczpwachrT8o1IwTK0hRqz3O/view?usp=sharing>

---

# Versión del Documento

Versión: 2.0

Estado: Final

Última actualización: Julio de 2026
