# UdeA de Bolsillo

App para practicar el Razonamiento Lógico del examen de admisión de la Universidad de Antioquia desde el celular.

- `index.html`: la app. Escoges tema y nivel, resuelves tandas de 6 y te corrige al instante con la solución y la trampa. El historial queda guardado en el celular.
- `lectura.html` + `lectura.js`: sección de Lectura crítica. Textos originales de práctica que se leen completos en la app, y hojas de respuestas para los exámenes reales (el texto se lee en el PDF oficial; claves y explicaciones hechas por Claude, no oficiales).
- `bank.js`: las 341 preguntas que usa la app (generadas, con la respuesta calculada y verificada).
- `banco/banco-generado.json`: el banco completo de 370 preguntas, en formato JSON.
- `lectura-textos.js`: los 6 textos completos y las 120 preguntas de Competencia Lectora de los exámenes 2026-1, 2025-1 y 2024-2, para la pestaña "Lectura crítica" de index.html (sin clave: se envían a Claude para que las califique).
- `examenes/`: cuadernillos oficiales de exámenes anteriores (de acceso público) y la guía oficial.

Las preguntas del banco son de práctica (generadas en el estilo del examen), no son preguntas oficiales.
