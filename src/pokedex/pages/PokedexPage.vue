<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import SearchBar from '@/components/bars/SearchBar.vue';
import ButtonIconPrimary from '@/components/buttons/ButtonIconPrimary.vue';
import BaseLayout from '@/layouts/BaseLayout.vue';
import { StarIcon } from '@heroicons/vue/20/solid';
import { ListBulletIcon } from '@heroicons/vue/20/solid';
import pokeApi from '@/apis/pokeApi';
import SearchResultItem from '@/components/lists/SearchResultItem.vue';
import { useVirtualList } from '@vueuse/core';
import PokemonInfoModal from '../components/PokemonInfoModal.vue';
import type { Ref } from 'vue';
import type PokemonInfoModalType from '../components/PokemonInfoModal.vue';
import ListEmptyWarn from '../components/ListEmptyWarn.vue';
import PokeballLoader from '@/components/loaders/PokeballLoader.vue';
import { useLoading } from '@/composables/useLoading';
import { usePokemonSearch } from '../composables/usePokemonSearch';
import useFavorites from '../composables/useFavorites';

const limit = 50;

const pokemonsList = ref(new Array<{ name: string }>());
const pagination = ref({
  page: 0,
  count: 0,
});

const reachLimit = ref(false);
const currentTab = ref<'ALL' | 'FAV'>('ALL');

const pokemonModal: Ref<InstanceType<typeof PokemonInfoModalType> | null> =
  ref(null);

onMounted(() => {
  fetchPokemons();
});

const { searchIsActive, pokemonSearchResponse, onSearch, resetSearch } =
  usePokemonSearch();

const { isLoading, setLoading } = useLoading();

const {
  favorites: pokemonsFavorites,
  isFavorite,
  toggleFavorite,
} = useFavorites();

const displayedList = computed(() => {
  if (searchIsActive.value) {
    return pokemonSearchResponse.value
      ? [{ name: pokemonSearchResponse.value.name }]
      : [];
  }

  if (currentTab.value === 'FAV') {
    return pokemonsFavorites.value.map((pokemonName) => ({
      name: pokemonName,
    }));
  }
  return pokemonsList.value;
});

const {
  list: virtualItems,
  containerProps,
  wrapperProps,
  scrollTo,
} = useVirtualList(displayedList, { itemHeight: 70 });

const onListScroll = ({ target }: Event) => {
  const { scrollTop, clientHeight, scrollHeight } = target as HTMLElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    fetchPokemons();
  }
};

const fetchPokemons = async () => {
  if (reachLimit.value) return;

  setLoading(true);
  try {
    const { count, results } = await pokeApi.getPokemons(
      limit,
      pagination.value.page * limit,
    );

    pagination.value.count = count;
    pokemonsList.value.push(...results);
    pagination.value.page += 1;
    if (pokemonsList.value.length >= count) {
      reachLimit.value = true;
    }
  } catch (error) {
    console.error('Fetch error: ', error);
  }
  setLoading(false);
};

const handleSearchChange = (value: string) => {
  if (!value && searchIsActive.value) {
    resetSearch();
    scrollTo(0);
  }
};

const handlePokemonSelection = async (name: string) => {
  setLoading(true);
  try {
    const pokemon = await pokeApi.getPokemon(name);
    pokemonModal.value?.showModal(pokemon, isFavorite(name));
  } catch (error) {
    console.error('Error fetching pokemon info: ', error);
  }
  setLoading(false);
};

const handleTabChange = (tab: 'ALL' | 'FAV') => {
  currentTab.value = tab;
  resetSearch();
  scrollTo(0);
};

const handleFavoriteToggle = (name: string) => {
  toggleFavorite(name);
};
</script>

<template>
  <PokeballLoader v-if="isLoading" />
  <div>
    <BaseLayout>
      <div class="container flex flex-col h-screen pt-9 overflow-auto">
        <SearchBar
          class="animate__animated animate__fadeInLeft mb-10"
          @change="handleSearchChange"
          @search="onSearch"
        />
        <ListEmptyWarn
          v-if="displayedList.length === 0"
          message="You look lost on your journey!"
          actionLabel="Go back home"
          @click="() => handleTabChange('ALL')"
        />
        <div
          v-else
          v-bind="containerProps"
          @scroll="onListScroll"
          class="flex flex-grow"
        >
          <div v-bind="wrapperProps" class="flex flex-col gap-[10px]">
            <SearchResultItem
              v-for="{ data } in virtualItems"
              :key="data.name"
              :name="data.name"
              :isFavorite="isFavorite(data.name)"
              @select="handlePokemonSelection"
              @toggleFav="handleFavoriteToggle"
            />
          </div>
        </div>
      </div>
    </BaseLayout>

    <div
      id="footer-actions"
      class="fixed bottom-0 h-20 w-full shadow-2xl bg-white"
    >
      <div class="container h-full flex gap-5 items-center">
        <ButtonIconPrimary
          @click="() => handleTabChange('ALL')"
          class="flex flex-1"
          :selected="currentTab === 'ALL'"
        >
          All
          <template #icon>
            <ListBulletIcon />
          </template>
        </ButtonIconPrimary>

        <ButtonIconPrimary
          @click="() => handleTabChange('FAV')"
          class="flex flex-1"
          :selected="currentTab === 'FAV'"
        >
          Favorite
          <template #icon>
            <StarIcon />
          </template>
        </ButtonIconPrimary>
      </div>
    </div>
  </div>

  <PokemonInfoModal ref="pokemonModal" @toggleFav="handleFavoriteToggle" />
</template>
