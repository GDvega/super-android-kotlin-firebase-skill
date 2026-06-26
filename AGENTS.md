# AGENTS.md

Instrucciones para agentes trabajando dentro de un proyecto Android Kotlin.

## Fuentes locales del agente

- Para Android oficial, revisar `repositorios-referencia-super-skill/android__skills`.
- Para Firebase, revisar `repositorios-referencia-super-skill/firebase__agent-skills` y `firebase__quickstart-android`.
- Para arquitectura real, revisar `android__nowinandroid`, `android__architecture-samples` y `android__compose-samples`.
- Para Compose avanzado, testing y performance, revisar `aldefy__compose-skill`, `skydoves__android-testing-skills` y `skydoves__compose-performance-skills`.

## Stack recomendado

- Kotlin
- Jetpack Compose + Material 3
- ViewModel + StateFlow
- Clean Architecture pragmatica
- Room para datos estructurados locales
- DataStore para preferencias
- Retrofit o Ktor para red
- Firebase cuando el producto lo requiera
- Hilt o Koin segun el proyecto existente

## Reglas de edicion

- Lee estructura, Gradle y patrones existentes antes de editar.
- Haz cambios pequenos y verificables.
- No introduzcas frameworks nuevos sin justificar.
- No borres archivos ni migres arquitectura completa sin confirmacion.
- Explica archivos modificados y comandos de prueba.

## Reglas de arquitectura

- UI renderiza estado y emite eventos.
- ViewModel coordina estado y casos de uso.
- Domain contiene reglas de negocio testeables.
- Data implementa repositories y oculta SDKs.
- Firebase, Room y Retrofit/Ktor no deben filtrarse a Composables.

## Reglas de testing

- Agrega tests para logica nueva.
- Usa fakes para repositories.
- Prueba ViewModels con coroutine test APIs.
- Agrega Compose UI tests solo para flujos criticos.
- Firebase rules requieren tests allow/deny cuando hay datos sensibles.

## Reglas de seguridad

- No guardar secretos en repo.
- No pedir tokens privados, service accounts ni keystores.
- No abrir Firebase rules como solucion final.
- No loguear PII o datos sensibles.
- Aplicar minimo privilegio.

## Comandos comunes

```bash
./gradlew test
./gradlew lint
./gradlew assembleDebug
./gradlew connectedDebugAndroidTest
./gradlew bundleRelease
```

## Que no debe hacer el agente

- No inventar APIs AndroidX/Firebase.
- No actualizar AGP/Kotlin/Gradle sin compatibilidad.
- No usar `GlobalScope`.
- No bloquear el hilo principal.
- No llamar red/base de datos directamente desde UI.
- No hacer refactors gigantes sin plan y tests.
