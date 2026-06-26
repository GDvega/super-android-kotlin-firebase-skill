# Compose Screen Template

```kotlin
data class FeatureUiState(
    val isLoading: Boolean = false,
    val items: List<String> = emptyList(),
    val error: String? = null,
)

sealed interface FeatureEvent {
    data object Retry : FeatureEvent
}

@Composable
fun FeatureRoute(
    viewModel: FeatureViewModel = hiltViewModel(),
) {
    val state by viewModel.uiState.collectAsStateWithLifecycle()
    FeatureScreen(state = state, onEvent = viewModel::onEvent)
}

@Composable
fun FeatureScreen(
    state: FeatureUiState,
    onEvent: (FeatureEvent) -> Unit,
    modifier: Modifier = Modifier,
) {
    // Render loading, empty, content and error states.
}
```
