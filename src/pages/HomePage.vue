<script setup lang="ts">
import Header from '../components/Header/Header.vue'
import HeroSection from '../components/HomePage/HeroSection.vue'
import HeroTrailers from '../components/HomePage/HeroTrailers.vue'
import Footer from '../components/Footer/Footer.vue'
import BackTop from '../components/BackTop.vue'
</script>

<template>
  <div class="w-full min-h-screen bg-zinc-900 text-white">
    <BackTop />
    <Header />

    <!-- CHAMDA -->
    <HeroSection />
    <!-- TRAILERS -->

    <HeroTrailers />

    <Footer />
  </div>
</template>
