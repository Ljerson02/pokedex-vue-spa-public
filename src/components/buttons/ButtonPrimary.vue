<script setup lang="ts" >
  const emit = defineEmits(['click']);
</script>

<template>
  <button
    class="primary-button"
    @click="emit('click')"
  >
    <slot></slot>
  </button>
</template>
