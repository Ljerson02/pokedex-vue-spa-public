<template>
  <div
    @click="handleSelection"
    class="flex items-center justify-between h-[60px] bg-white rounded-[5px] p-[22px] hover:cursor-pointer"
  >
    <span class="flex text-xl capitalize">
      {{ name }}
    </span>
    <ButtonFavToggle :is-favorite="isFavorite" @click="toggleFav" />
  </div>
</template>

<script setup lang="ts">
import ButtonFavToggle from '../buttons/ButtonFavToggle.vue';

const { isFavorite, name } = defineProps({
  isFavorite: Boolean,
  name: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'toggleFav', name: string): void;
  (e: 'select', name: string): void;
}>();

const handleSelection = () => {
  emit('select', name);
};

const toggleFav = (event: Event) => {
  event.stopPropagation();
  emit('toggleFav', name);
};
</script>
