# Testing Checklist

- Domain/use cases tienen unit tests.
- Mappers DTO/entity/domain tienen tests si hay transformacion real.
- ViewModels prueban loading, success, empty, error y retry.
- Coroutines/Flow usan test dispatchers y virtual time.
- Repositories usan fakes o test DB cuando aplica.
- Compose UI tests cubren flujo critico y accesibilidad basica.
- Firebase rules tienen tests allow/deny si hay datos sensibles.
- Instrumented tests cubren permisos o APIs Android reales cuando aplica.
- No hay `Thread.sleep` en tests.
- CI ejecuta tareas relevantes o hay comando local claro.
