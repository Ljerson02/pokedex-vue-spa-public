
// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/home/pages/HomePage.vue';
import PokedexPage from '@/pokedex/pages/PokedexPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pokedex',
    name: 'Pokedex',
    component: PokedexPage,
  },
];

const router = createRouter({
  history: createWebHistory(/* TODO: SETUP GLOBAL VAR TO BASE URL */),
  routes,
});

export default router;