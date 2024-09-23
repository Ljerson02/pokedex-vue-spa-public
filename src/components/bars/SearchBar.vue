<template>
  <div
    class="flex h-[50px] items-center gap-[10px] min-h-12 rounded-[5px] shadow-md p-3 text-font-light bg-white w-full "
  >
    <MagnifyingGlassIcon class="shrink-0 w-[18px] h-[18px]" />
    <input
      v-model="searchValue"
      @:input="onInputChange"
      @keyup.enter="onPressEnter"
      type="text"
      class="flex-grow outline-none font-montserrat text-font-primary placeholder:font-montserrat"
      placeholder="Search"
    />
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/16/solid';
import { ref } from 'vue';
const searchValue = ref('');
const emit = defineEmits<{
  (e: 'change', searchValue: string ): void,
  (e: 'search', searchValue: string ): void,
}>();
  emit('change', searchValue.value);
  
const onInputChange = () => emit('change', searchValue.value);
const onPressEnter = () => emit('search', searchValue.value);
</script>
