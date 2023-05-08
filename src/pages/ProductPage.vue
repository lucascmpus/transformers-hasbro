<script setup lang="ts">
import { ref, computed } from 'vue'
import Header from '../components/Header/Header.vue'
import Carousel from '../components/Carousel/Carousel.vue'
import CarouselSlide from '../components/Carousel/CarouselSlide.vue'

const slides = [
  'https://images7.alphacoders.com/416/416534.jpg',
  'https://images.alphacoders.com/836/836038.jpg',
  'https://images8.alphacoders.com/674/674115.jpg',
]
const visibleSlide = ref(0)

const slidesLen = computed(() => slides.length)

function next() {
  if (visibleSlide.value >= slidesLen.value - 1) {
    visibleSlide.value = 0
  } else {
    visibleSlide.value++
  }
}

function prev() {
  if (visibleSlide.value <= 0) {
    visibleSlide.value = slidesLen.value - 1
  } else {
    visibleSlide.value--
  }
}
console.log(visibleSlide)
</script>

<template>
  <div class="w-full min-h-screen bg-zinc-900 text-white">
    <Header />

    <div class="w-full flex justify-center h-[100vh] px-5">
      <!-- IMAGE -->

      <div class="">
        <Carousel @next="next" @prev="prev">
          <CarouselSlide
            v-for="(slide, index) in slides"
            :key="index"
            :index="index"
            :visibleSlide="visibleSlide"
          >
            <img class="bg-cover rounded-md bg-center" :src="slide" alt="" />
          </CarouselSlide>
        </Carousel>
      </div>

      <!-- INFO PRODUCT -->
      <div class=""></div>
    </div>
  </div>
</template>
