<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex justify-center items-center bg-[#1E1E1E] bg-opacity-50"
  >
    <div class="container bg-white rounded-lg shadow-lg">
      <div
        class="flex justify-center items-end rounded-t-lg h-[220px] bg-no-repeat bg-[center_bottom_-40px] px-8 pt-5 relative"
        :style="{ backgroundImage: `url(${pokemonGroundImg})` }"
        alt="Pokemon Ground"
      >
        <button
          @click="closeModal"
          class="absolute top-4 right-4 w-[26px] h-[26px]"
        >
          <XCircleIcon class="text-white" />
        </button>
        <img
          :src="pokemon?.sprites.front_default"
          alt="Pokemon"
          class="w-[180px] h-[180px] object-cover rounded-t-lg"
        />
      </div>

      <div class="flex flex-col gap-4 px-8 py-5">
        <ul>
          <li class="py-2 border-b text-lg text-font-secondary">
            <b class="capitalize"> Name: </b> {{ pokemon?.name }}
          </li>
          <li class="py-2 border-b text-lg text-font-secondary">
            <b class="capitalize"> Weight: </b> {{ pokemon?.weight }}
          </li>
          <li class="py-2 border-b text-lg text-font-secondary">
            <b class="capitalize"> Height: </b> {{ pokemon?.height }}
          </li>
          <li class="py-2 border-b text-lg text-font-secondary">
            <b class="capitalize"> Types: </b> {{ pokemonTypes }}
          </li>
        </ul>
        <div class="flex gap-3 sm:gap-4 items-center justify-between w-full">
          <BUttonPrimary @click="shareData">Share to my friends</BUttonPrimary>
          <ButtonFavToggle @click="toggleFav" :is-favorite="isFavorite" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import pokemonGroundImg from '@/assets/images/grounds/PokeInfoGround.jpg';
import BUttonPrimary from '@/components/buttons/ButtonPrimary.vue';
import ButtonFavToggle from '@/components/buttons/ButtonFavToggle.vue';
import { XCircleIcon } from '@heroicons/vue/16/solid';
import { PokemonDTO } from '@/apis/pokeApi';

const isOpen = ref(false);
const pokemon = ref<PokemonDTO | null>(null);
const isFavorite = ref(false);

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'toggleFav', name: string): void;
}>();
const pokemonTypes = computed(() => {
  if (pokemon.value === null) return '';
  const typesList = pokemon.value.types.map((pokeType) => pokeType.type.name);
  return typesList.join(', ');
});

const closeModal = () => {
  isOpen.value = false;
  emit('close');
};

const toggleFav = () => {
  emit('toggleFav', pokemon.value?.name || '');
  isFavorite.value = !isFavorite.value;
};

const pokemonPropertiesToRaw = () => {
  if (pokemon.value === null) return '';
  const { name, weight, height } = pokemon.value;
  return `Name: ${name}, Weight: ${weight}, Height: ${height}, Types: ${pokemonTypes.value}`;
};

const shareData = async () => {
  try {
    await navigator.clipboard.writeText(pokemonPropertiesToRaw());
    alert('Copied to clipboard!');
  } catch (err) {
    console.error('Error al copiar al portapapeles: ', err);
  }
};

const showModal = (newPokemon: PokemonDTO, favorite: boolean): void => {
  isOpen.value = true;
  pokemon.value = newPokemon;
  isFavorite.value = favorite;
};

defineExpose({
  showModal,
});
</script>
