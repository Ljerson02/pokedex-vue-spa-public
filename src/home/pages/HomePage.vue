<template>
  <BaseLayout>
    <div class="container h-screen w-full flex flex-col items-center ">
      <div class="flex flex-1 shrink-0 items-center justify-center ">
        <img
          class="animate__animated animate__tada"
          :src="PikachuWelcomImg"
          alt="Pikachu Welcom"
        />
      </div>
      <div class=" flex flex-col gap-8 flex-1 shrink-0 items-center pt-5 sm:p-4 text-[18px]">
        <h1 class="text-2xl text-center font-bold" > Welcome to Pokédex </h1>
        <p class=" text-lg text-center font-light  " >
          The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
        </p>
        <BUttonPrimary @click="handleGetStartedClick" class="mt-4"> Get started </BUttonPrimary>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue';
import PikachuWelcomImg from '@/assets/images/PikachuWelcom.png';
import BUttonPrimary from '@/components/buttons/ButtonPrimary.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleGetStartedClick = () => {
  router.push('/pokedex');
};
</script>
