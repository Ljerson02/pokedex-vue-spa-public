<script setup lang="ts" >
  const { selected } = defineProps({
    selected: {
      type: Boolean,
      default: true,
    },
  });
  const emit = defineEmits(['click']);
</script>

<template>
  <button
    class=" primary-button flex items-center justify-center gap-x-3"
    :class="{ 'bg-font-light hover:bg-font-secondary ': !selected}"
    @click="emit('click')"
    >
    <div class=" h-6 w-6">
      <slot name="icon"></slot>
    </div>
    <slot></slot>  
  </button>
</template>
