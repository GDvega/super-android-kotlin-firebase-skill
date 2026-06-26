# Performance Checklist

- Problema de performance tiene reproduccion o metrica.
- Composables no hacen trabajo pesado en render.
- Lazy lists usan keys y evitan objetos inestables innecesarios.
- Imagenes estan dimensionadas/cacheadas.
- Repositories evitan queries/listeners duplicados.
- Paging/cache existe para listas grandes.
- WorkManager/threads se usan para trabajo diferido.
- Baseline profiles se consideran para startup/flujos criticos.
- R8 no se desactiva sin razon.
- Cambios se verifican con benchmark, profiler o prueba manual documentada.
