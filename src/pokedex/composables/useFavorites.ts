import { ref } from 'vue';

export default function useFavorites(){
  const favorites = ref<string[]>([]);
  const toggleFavorite = (name: string) => {
    favorites.value = isFavorite(name)
      ? favorites.value.filter((fav) => fav !== name)
      : [...favorites.value, name];
  };
  const isFavorite = (pokeName: string) =>
    favorites.value.indexOf(pokeName) !== -1;
  return {
    toggleFavorite,
    isFavorite,
    favorites,
  };
}