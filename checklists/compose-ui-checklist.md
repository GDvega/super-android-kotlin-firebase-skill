# Compose UI Checklist

- Hay separacion Route/Screen si existe ViewModel.
- Estado se hoistea; componentes reutilizables son stateless.
- UI state cubre loading, empty, success, error y permission states.
- Flow se colecta con lifecycle-aware APIs cuando estan disponibles.
- Material 3 y tema se usan en vez de colores hardcodeados.
- Lazy lists tienen keys estables.
- No hay red, DB ni trabajo pesado en Composables.
- Previews cubren estados importantes.
- Icon-only buttons tienen contentDescription o son decorativos.
- Touch targets, contraste y font scale estan revisados.
