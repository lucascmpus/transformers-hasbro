<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Logo from '../../assets/logos/hasbro_white.svg'
</script>

<template>
  <div class="w-full h-24 flex justify-center">
    <div
      class="w-full max-w-7xl flex justify-between items-center px-7 xl:px-0"
    >
      <!-- Logo -->
      <button class="">
        <RouterLink to="/">
          <img class="text-white w-14" :src="Logo" alt="logo" />
        </RouterLink>
      </button>

      <!-- Menu -->
      <ul class="flex gap-6">
        <li class="hover:text-zinc-400 transition-all duration-200">
          <RouterLink to="/">Inicial</RouterLink>
        </li>
        <li class="hover:text-zinc-400 transition-all duration-200">
          <RouterLink to="/produtos">Produtos</RouterLink>
        </li>
        <li class="hover:text-zinc-400 transition-all duration-200">
          <RouterLink to="/sobre">Sobre</RouterLink>
        </li>
      </ul>

      <RouterLink to="/sobre" class="hidden md:block">
        <button
          class="px-5 py-2 rounded-md bg-zinc-500 hover:bg-zinc-100 transition-all hover:text-zinc-900"
        >
          Contato
        </button>
      </RouterLink>
    </div>
  </div>
</template>
