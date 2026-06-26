# ViewModel Template

```kotlin
class FeatureViewModel(
    observeItems: ObserveItemsUseCase,
) : ViewModel() {
    val uiState: StateFlow<FeatureUiState> =
        observeItems()
            .map { items -> FeatureUiState(items = items) }
            .catch { emit(FeatureUiState(error = "No se pudo cargar")) }
            .stateIn(
                scope = viewModelScope,
                started = SharingStarted.WhileSubscribed(5_000),
                initialValue = FeatureUiState(isLoading = true),
            )

    fun onEvent(event: FeatureEvent) {
        when (event) {
            FeatureEvent.Retry -> retry()
        }
    }
}
```
