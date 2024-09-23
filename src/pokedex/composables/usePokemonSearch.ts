import { ref } from 'vue';
import pokeApi, { PokemonDTO } from '@/apis/pokeApi';

export function usePokemonSearch() {
  const searchIsActive = ref(false);
  const pokemonSearchResponse = ref<PokemonDTO | null>(null);

  const onSearch = async (value: string) => {
    if (!value) {
      resetSearch();
      return;
    }
    searchIsActive.value = true;
    try {
      pokemonSearchResponse.value = await pokeApi.getPokemon(
        value.toLocaleLowerCase(),
      );
    } catch (error) {
      console.error('error ', error);
      pokemonSearchResponse.value = null;
    }
  };

  const resetSearch = () => {
    searchIsActive.value = false;
    pokemonSearchResponse.value = null;
  };

  return {
    searchIsActive,
    pokemonSearchResponse,
    onSearch,
    resetSearch,
  };
}