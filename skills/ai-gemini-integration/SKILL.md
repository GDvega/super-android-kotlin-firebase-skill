---
name: ai-gemini-integration
description: "Integracion Gemini/AI en Android: casos seguros, prompts, privacidad, limites, fallback y no exponer claves."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/firebase__agent-skills/skills/firebase-ai-logic-basics`
- `repositorios-referencia-super-skill/google__skills`
- `repositorios-referencia-super-skill/android__ai-samples`
- `repositorios-referencia-super-skill/joreilly__GeminiKMP`
- `repositorios-referencia-super-skill/genkit-ai__genkit`
- `repositorios-referencia-super-skill/google__adk-samples`

Agregar IA de forma util, privada y mantenible en apps Android.

# Cuando usar

- Gemini.
- AI feature.
- Prompt handling.
- On-device/cloud AI.
- Fallback.
- Safety/privacy.

# Entradas esperadas

- Caso de uso.
- Datos enviados.
- Modelo/API.
- Backend proxy.
- Limites.
- Fallback UX.

# Reglas obligatorias

- No exponer claves privadas en cliente.
- Minimizar datos enviados.
- Filtrar PII.
- Fallback sin red.
- No usar IA para decisiones criticas sin control humano.

# Flujo recomendado

1. Definir caso seguro.
2. Elegir cliente/backend.
3. Disenar prompts.
4. Manejar errores/limites.
5. Agregar tests/fakes.

# Errores comunes a evitar

- Poner API key secreta en app.
- Enviar datos sensibles innecesarios.
- Confiar ciegamente en respuesta IA.
- Sin fallback.

# Checklist

- Privacidad revisada.
- Clave protegida.
- Prompt versionado.
- Fallback.
- Errores manejados.

# Ejemplo de uso

Usuario:

```text
Agrega Gemini para resumir notas del usuario.
```

Respuesta esperada:

```text
Evaluare privacidad, ruta cliente/servidor, prompt, errores y fallback.
```
