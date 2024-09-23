<template>
  <button @click="handleClick" class=" flex items-center justify-center rounded-full bg-surface-medium hover:bg-surface-opaque  active:translate-y-[-3px] w-[44px] h-[44px]">
    <StarIcon
    :class="['w-[26px] h-[26px]', isFavorite ? 'fill-font-accent' : 'fill-font-light']"
    />
  </button>
</template>

<script setup lang="ts">
  import { StarIcon } from '@heroicons/vue/16/solid';
  const { isFavorite } = defineProps({
    isFavorite: Boolean,
  });
  
  const emit = defineEmits<{
    (e: 'click', event: Event): void
  }>();

  const handleClick = (event: Event) => {
    emit('click', event);
  };

</script>