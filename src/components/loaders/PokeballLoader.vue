<template>
  <div
  class="fixed z-10 w-screen h-screen flex justify-center items-center bg-white"
  >
    <div class="relative  animate__animated animate__wobble animate__infinite">
      <img alt="Pokeball loading" :src="PokeballImg" />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full h-[15px] w-[15px] bg-red-600 animate__animated animate__fadeIn animate__infinite" ></div>
    </div>
  </div>
</template>

<script setup lang="ts" >
import PokeballImg from '@/assets/images/LoaderPokeball.png';
</script>