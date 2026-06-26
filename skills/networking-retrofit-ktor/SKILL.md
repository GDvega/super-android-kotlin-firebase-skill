---
name: networking-retrofit-ktor
description: "Networking Android: Retrofit, Ktor client, OkHttp, interceptors, error handling, DTO mapping, retries y timeouts."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/android__nowinandroid/core/network`
- `repositorios-referencia-super-skill/Kotlin__kotlin-agent-skills`

Integrar APIs remotas sin filtrar red a UI ni ocultar errores importantes.

# Cuando usar

- Agregar Retrofit/Ktor.
- Interceptors.
- Errores HTTP.
- DTO mapping.
- Retries/timeouts.

# Entradas esperadas

- API contract.
- Auth headers.
- Timeouts.
- Errores esperados.
- Serializacion.
- Tests.

# Reglas obligatorias

- No llamar red desde UI.
- DTOs no deben dominar domain.
- Timeouts definidos.
- Retries acotados.
- No loguear secrets.

# Flujo recomendado

1. Elegir cliente existente.
2. Definir DTO/service.
3. Mapear errores.
4. Repository consume client.
5. Agregar tests con fake/mock server si existe.

# Errores comunes a evitar

- Retries infinitos.
- Interceptors con tokens en logs.
- Exponer Response crudo a UI.
- Ignorar cancelacion.

# Checklist

- Cliente configurado.
- Errores modelados.
- DTO mapping.
- Timeouts.
- Tests/fakes.

# Ejemplo de uso

Usuario:

```text
Conecta esta pantalla a una API REST.
```

Respuesta esperada:

```text
Creare service, DTOs, repository, errores y tests sin acoplar UI a red.
```
