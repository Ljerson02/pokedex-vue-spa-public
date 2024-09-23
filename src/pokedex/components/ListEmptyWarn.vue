<template>
  <div class="flex flex-col gap-5 justify-center items-center"  >
    <h1 class=" text-[36px]" >Uh-oh!</h1>
    <p class=" text-lg font-[300] " >{{message}}</p>
    <BUttonPrimary @click="handleClick" >
      {{actionLabel}}
    </BUttonPrimary>
  </div>
</template>

<script lang="ts" setup>
import BUttonPrimary from '@/components/buttons/ButtonPrimary.vue';


const { message, actionLabel} = defineProps<{
  message: string;
  actionLabel: string;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const handleClick = () => {
  emit('click');
};

</script>