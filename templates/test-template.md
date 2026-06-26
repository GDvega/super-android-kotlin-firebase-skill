# Test Template

```kotlin
class FeatureViewModelTest {
    @Test
    fun emitsContentWhenRepositoryReturnsItems() = runTest {
        val repository = FakeFeatureRepository(items = listOf(Item("1")))
        val viewModel = FeatureViewModel(ObserveItemsUseCase(repository))

        val state = viewModel.uiState.first { !it.isLoading }

        assertThat(state.items).hasSize(1)
    }
}
```

Cubrir:

- loading
- success
- empty
- validation error
- network/error
- permission denied
- retry
