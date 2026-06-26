---
name: jetpack-compose
description: "Jetpack Compose para Composables, state hoisting, remember, rememberSaveable, ViewModel + StateFlow, Material 3, Navigation, previews, adaptive UI y accesibilidad basica."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/android__skills/jetpack-compose`
- `repositorios-referencia-super-skill/aldefy__compose-skill`
- `repositorios-referencia-super-skill/Meet-Miyani__compose-skill`
- `repositorios-referencia-super-skill/android__compose-samples`

Crear o revisar UI Compose mantenible, accesible y alineada con Material 3.

# Cuando usar

- Crear pantalla Compose.
- Refactor UI.
- Agregar Navigation.
- Conectar ViewModel + StateFlow.
- Agregar previews.

# Entradas esperadas

- Composables existentes.
- Estado UI esperado.
- Eventos de usuario.
- Tema Material.
- Navigation graph.

# Reglas obligatorias

- Separar Route y Screen.
- Hoistear estado.
- No hacer red/base de datos en Composable.
- Usar Material 3.
- Agregar semantics/contentDescription.

# Flujo recomendado

1. Definir UI state.
2. Crear Route con ViewModel.
3. Crear Screen stateless.
4. Agregar previews.
5. Probar estados principales.

# Errores comunes a evitar

- Pasar ViewModel a componentes reutilizables.
- Usar remember para estado de negocio.
- LazyColumn sin keys.
- Texto/iconos inaccesibles.

# Checklist

- State hoisted.
- Material 3.
- Previews.
- A11y basica.
- Navigation clara.

# Ejemplo de uso

Usuario:

```text
Agrega una pantalla de presupuesto semanal con Compose y ViewModel.
```

Respuesta esperada:

```text
Creare State, Event, ViewModel, Route, Screen y previews; indicare tests y comandos.
```
