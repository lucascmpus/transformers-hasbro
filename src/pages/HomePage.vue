<script setup lang="ts">
import Header from '../components/Header/Header.vue'
import HeroSection from '../components/HomePage/HeroSection.vue'
import HeroTrailers from '../components/HomePage/HeroTrailers.vue'
</script>

<template>
  <div class="w-full min-h-screen bg-zinc-900 text-white">
    <Header />

    <!-- CHAMDA -->
    <HeroSection />
    <!-- TRAILERS -->

    <HeroTrailers />

<div class="h-[30vh]"></div>
  </div>
</template>
