---
name: super-android-kotlin-firebase
description: Skill maestra para construir, revisar, refactorizar y escalar apps Android modernas con Kotlin, Jetpack Compose, Firebase, arquitectura limpia, testing, rendimiento, seguridad y publicacion en Play Store.
---

# Super Android Kotlin Firebase

Skill maestra para agentes de IA que trabajan en apps Android profesionales. Usa esta skill como router: primero entiende el problema, luego selecciona las subskills necesarias en `skills/`, checklists en `checklists/` y templates en `templates/`.

## Fuentes locales y prioridad

Antes de inventar reglas, revisar fuentes locales si existen:

1. `repositorios-referencia-super-skill/android__skills` para Android oficial, AGP, R8, Play, edge-to-edge, Navigation, testing, profilers y seguridad.
2. `repositorios-referencia-super-skill/firebase__agent-skills` y `firebase__skills` para Firebase, Firestore, Auth, reglas, Crashlytics y AI Logic.
3. `repositorios-referencia-super-skill/google__skills` para Google Cloud, Gemini, Vertex AI y productos Google.
4. `repositorios-referencia-super-skill/Kotlin__kotlin-agent-skills` para Kotlin, tooling y migraciones AGP/Kotlin.
5. Repos especializados: `aldefy__compose-skill`, `skydoves__compose-performance-skills`, `skydoves__android-testing-skills`.
6. Apps/ejemplos reales: `android__nowinandroid`, `android__architecture-samples`, `android__compose-samples`, `firebase__quickstart-android`.
7. Repos comunitarios y catalogos solo como apoyo: `dpconde__claude-android-skill`, `Drjacky__claude-android-ninja`, `affaan-m__everything-claude-code`, `wshobson__agents`, `JetBrains__skills`, `VoltAgent__awesome-agent-skills`.

Usar los `.docx` de la raiz como curaduria y ranking historico; usar los repos clonados como fuente operativa.


## 1. Cuando usar esta skill

- Crear apps Android con Kotlin, Compose, Material 3 y arquitectura moderna.
- Agregar features Android con ViewModel, StateFlow, Room, DataStore, Retrofit/Ktor o Firebase.
- Integrar Firebase Auth, Firestore, Realtime Database, Storage, Cloud Functions, FCM, Crashlytics, Analytics, Remote Config o AI Logic.
- Revisar arquitectura, seguridad, performance, testing, accesibilidad o readiness de Play Store.
- Arreglar errores de Gradle, AGP, Kotlin, Compose, Firebase o CI/CD.
- Preparar prompts, templates o reglas para Claude Code, Codex, Cursor, Gemini CLI, Windsurf u OpenCode.

## 2. Cuando NO usar esta skill

- Apps iOS puras, Flutter puro o React Native puro, salvo que haya un modulo Android o backend Firebase compartido.
- Pentesting no autorizado, bypass de seguridad, scraping de credenciales o extraccion de secretos.
- Cambios masivos de arquitectura sin objetivo verificable.
- Actualizaciones de versiones hechas por moda sin revisar compatibilidad.

## 3. Modo de trabajo del agente

1. Entender el objetivo real del usuario y el contexto del proyecto.
2. Detectar si el proyecto usa Android Kotlin, Compose, Firebase, KMP o una mezcla.
3. Revisar estructura, Gradle, modulos, tests y patrones existentes antes de tocar codigo.
4. Elegir cambios pequenos, seguros y verificables.
5. Implementar siguiendo el estilo del repo.
6. Proponer o agregar tests cuando haya logica.
7. Dar comandos concretos para probar.
8. Cerrar con diagnostico, archivos afectados, verificacion y riesgos.

## 4. Orden recomendado de razonamiento

1. Producto: que flujo de usuario se quiere lograr.
2. Plataforma: Android, Compose, Firebase, local data, red, IA, release.
3. Arquitectura: capas, modulos, limites, contratos y dependencias.
4. Datos: modelo, fuente local/remota, sincronizacion, privacidad y reglas.
5. UI: estado, eventos, Material 3, accesibilidad y adaptabilidad.
6. Calidad: tests, rendimiento, seguridad, debugging y release.
7. Entrega: archivos modificados, comandos, resultados y siguiente paso.

## 5. Como decidir que subskill usar

- `android-core`: proyecto Android, manifest, lifecycle, permisos, edge-to-edge, debugging basico.
- `kotlin-core`: Kotlin, null safety, sealed types, coroutines, Flow, errores.
- `jetpack-compose`: pantallas Compose, estado, Material 3, Navigation, previews.
- `compose-performance`: recomposicion, stability, LazyColumn, baseline profiles, medicion.
- `android-architecture`: Clean Architecture, MVVM/MVI, multimodulo, offline-first.
- `firebase-core`: setup Firebase, BoM, Gradle, ambientes, emulator, Storage y Realtime Database.
- `firebase-auth`: login, auth state, perfiles, errores de autenticacion.
- `firestore`: colecciones, queries, indices, transactions, rules, costos.
- `firebase-cloud-functions`: callable/HTTP functions, triggers, validacion servidor.
- `firebase-messaging`: FCM, tokens, notifications, Android 13+ permissions.
- `firebase-crashlytics-analytics`: crashes, non-fatals, eventos, privacidad.
- `local-data-room-datastore`: Room, DAO, migrations, DataStore, cache, sync.
- `networking-retrofit-ktor`: Retrofit, Ktor, OkHttp, errores, retries, DTOs.
- `dependency-injection`: Hilt, Koin, scopes, ViewModel injection, tests.
- `testing`: unit, coroutine, Flow, Compose UI, instrumented, Firebase emulator.
- `security-privacy`: secretos, reglas, cifrado local, datos sensibles.
- `accessibility`: TalkBack, semantics, touch targets, contraste.
- `debugging`: Gradle sync, Logcat, adb, crashes, ANR, reproducciones.
- `gradle-build`: version catalogs, AGP, Kotlin plugin, Firebase BoM, variants.
- `play-store-release`: signing, R8, AAB, Play Console, Data Safety.
- `ai-gemini-integration`: Gemini/AI, prompts, privacidad, fallback, claves.
- `code-review-refactor`: auditoria, refactor paso a paso, evitar cambios gigantes.

## 6. Reglas obligatorias de arquitectura

- Separar UI, domain y data en apps reales.
- Respetar la arquitectura existente si ya es coherente.
- No poner logica de negocio pesada en Composables.
- Usar repositories para ocultar Room, Retrofit, Ktor y Firebase.
- Usar modelos claros: DTO/entity/domain/UI model cuando haya frontera real.
- Mantener dependencias apuntando hacia capas internas, no al reves.
- Preferir offline-first cuando el producto necesita operar sin conexion.

## 7. Reglas obligatorias de Kotlin

- No usar `GlobalScope`.
- No bloquear el hilo principal.
- Manejar nullability de forma explicita.
- Usar sealed interfaces/classes para estados cerrados.
- Usar `Result` o tipos de error propios cuando el consumidor necesite reaccionar.
- No tragarse `CancellationException`.
- Mantener funciones pequenas y nombres claros.

## 8. Reglas obligatorias de Compose

- Usar Route + Screen cuando haya ViewModel.
- Hoistear estado; Composables renderizan estado y emiten eventos.
- Usar Material 3 y tokens del tema.
- Usar `remember`/`rememberSaveable` solo donde corresponda.
- Colectar Flow con lifecycle-aware APIs si estan disponibles.
- Agregar previews para estados importantes cuando el proyecto lo soporte.
- Revisar accesibilidad: semantics, contentDescription, contraste y touch targets.

## 9. Reglas obligatorias de Firebase

- No exponer secretos ni pedir claves privadas.
- No guardar service accounts, tokens privados o keystores en el repo.
- Usar Firebase BoM y plugins Gradle compatibles.
- Disenar modelo Firestore/Realtime Database/Storage junto con Security Rules.
- Validar reglas y funciones en Emulator Suite cuando sea posible.
- Separar ambientes dev/staging/prod.
- No usar reglas abiertas como solucion de produccion.

## 10. Reglas de seguridad y privacidad

- Aplicar minimo privilegio.
- No pedir credenciales bancarias, tokens privados ni claves secretas.
- No loguear datos sensibles en Logcat, Crashlytics o Analytics.
- Validar permisos y datos sensibles en cliente y servidor/reglas.
- Cifrar localmente solo cuando el threat model lo justifique y se pueda mantener.
- Documentar riesgos cuando una dependencia o regla sea insegura.

## 11. Reglas de testing

- Proponer tests cuando se agrega logica.
- Priorizar unit tests para domain, mappers, parsers, calculos y ViewModels.
- Usar fakes para repositorios cuando se prueban transiciones de estado.
- Agregar tests de reglas Firebase para allow/deny criticos.
- Cubrir loading, empty, success, error, offline y permission-denied.

## 12. Reglas de rendimiento

- Medir antes de refactors grandes.
- Revisar recomposicion, estabilidad, claves en Lazy lists, imagenes y side effects.
- Evitar trabajo pesado en Composables.
- Usar paging/cache cuando datos grandes lo exijan.
- Considerar baseline profiles para startup o flujos criticos.

## 13. Reglas de accesibilidad

- Touch targets de 48dp cuando aplique.
- Texto legible con font scale.
- Icon-only buttons con descripcion o marcados como decorativos.
- Estados no deben depender solo del color.
- TalkBack debe entender flujo, errores y acciones principales.

## 14. Reglas de Gradle y dependencias

- No actualizar Gradle, AGP, Kotlin o Firebase sin revisar compatibilidad.
- Preferir version catalogs y convention plugins en proyectos multimodulo.
- Evitar dependencias nuevas si el proyecto ya tiene una alternativa valida.
- Mantener build variants, flavors y signing fuera de secretos.

## 15. Reglas de entrega final

La respuesta final debe incluir:

1. Diagnostico breve.
2. Plan de cambios.
3. Archivos afectados.
4. Codigo propuesto o resumen de cambios.
5. Comandos para probar.
6. Tests recomendados o ejecutados.
7. Riesgos o advertencias.
8. Siguiente paso recomendado.

## 16. Checklist antes de responder

- Entendi el objetivo y el tipo de proyecto.
- Revise archivos relevantes antes de editar.
- No invente APIs.
- No rompi arquitectura existente sin explicacion.
- No expuse secretos ni datos sensibles.
- Agregue/propose tests si hubo logica.
- Di comandos de verificacion.
- Mencione riesgos y limites.

## 17. Plantilla de respuesta para crear una app

```text
Diagnostico breve: stack propuesto y supuestos.
Plan: modulos, pantallas, datos, Firebase/local, tests.
Archivos a crear/modificar: lista por modulo.
Implementacion: primera vertical slice.
Comandos: ./gradlew assembleDebug test lint.
Tests: domain, ViewModel, repository, Compose UI.
Riesgos: compatibilidad, permisos, reglas, secretos.
Siguiente paso: ejecutar app y validar flujo principal.
```

## 18. Plantilla de respuesta para crear una feature

```text
Diagnostico breve: feature y punto de integracion.
Plan: UI state, ViewModel, repository/use case, data source, tests.
Archivos afectados: rutas exactas.
Codigo: cambios principales.
Comandos para probar: tareas Gradle relevantes.
Tests recomendados: casos loading/success/error/offline.
Riesgos: migraciones, permisos, reglas, compatibilidad.
Siguiente paso: probar flujo manual.
```

## 19. Plantilla de respuesta para revisar codigo

```text
Hallazgos: severidad, archivo y linea cuando sea posible.
Riesgos: arquitectura, seguridad, rendimiento, testing.
Recomendaciones: cambios pequenos por prioridad.
Comandos de verificacion: tests/lint/build.
Siguiente paso: primer refactor seguro.
```

## 20. Plantilla de respuesta para arreglar errores

```text
Diagnostico breve: causa probable.
Evidencia: mensaje de error y archivo relacionado.
Plan: pasos minimos.
Cambios: archivo y razon.
Comandos: limpiar/reintentar tarea especifica.
Tests: que validar para evitar regresion.
Riesgos: versiones, cache Gradle, configuracion local.
```
