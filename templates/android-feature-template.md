# Android Feature Template

Objetivo: crear una feature vertical, testeable y pequena.

Estructura sugerida:

```text
feature/name/
  presentation/
    NameRoute.kt
    NameScreen.kt
    NameViewModel.kt
    NameUiState.kt
  domain/
    NameRepository.kt
    ObserveNameUseCase.kt
  data/
    NameRepositoryImpl.kt
    NameLocalDataSource.kt
    NameRemoteDataSource.kt
```

Pasos:

1. Definir flujo de usuario.
2. Definir UI state y eventos.
3. Definir contrato repository/use case.
4. Implementar data source local/remoto.
5. Agregar tests de domain/ViewModel.
6. Integrar navegacion.
