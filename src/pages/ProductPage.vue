<script setup lang="ts">
import { ref, computed } from 'vue'
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'
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
</script>

<template>
  <div class="w-full min-h-screen bg-zinc-900 text-white">
    <Header />

    <div
      class="w-full flex flex-col items-center justify-center h-auto px-5 gap-5"
    >
      <!-- IMAGE -->

      <div
        class=""
        v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 700,
          },
        }"
      >
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

      <div
        v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1000,
          },
        }"
        class="max-w-7xl mt-3 mb-5"
      >
        <div
          class="flex w-full flex-col justify-between lg:flex-row gap-16 lg:items-center"
        >
          <div class="flex flex-col gap-6 lg:w-2/4">
            <img
              src="https://m.media-amazon.com/images/I/81RHlziDy0L._AC_SL1500_.jpg"
              alt=""
              class="w-full h-full aspect-square object-cover rounded-xl"
            />
            <div class="flex flex-row justify-between h-24">
              <img
                src="https://m.media-amazon.com/images/I/71qlfuU7zVL._AC_SL1500_.jpg"
                alt=""
                class="w-24 h-24 rounded-md cursor-pointer object-cover"
              />
              <img
                src="https://m.media-amazon.com/images/I/81+z0zhpUbL._AC_SL1500_.jpg"
                alt=""
                class="w-24 h-24 rounded-md cursor-pointer object-cover"
              />
              <img
                src="https://m.media-amazon.com/images/I/81lekIovJML._AC_SL1500_.jpg"
                alt=""
                class="w-24 h-24 rounded-md cursor-pointer object-cover"
              />
              <!-- <img
              src="{images.img4}"
              alt=""
              class="w-24 h-24 rounded-md cursor-pointer object-cover"
            /> -->
            </div>
          </div>

          <div class="flex flex-col gap-4 lg:w-2/4">
            <div>
              <span class="text-cyan-600 font-semibold">Special Sneaker</span>
              <h1 class="text-3xl font-bold">
                Boneco Transformers: A Era da Extinção
              </h1>
            </div>
            <p class="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              incidunt facere doloribus repudiandae nemo soluta voluptas in
              magnam, accusamus atque. Qui deleniti aliquam consectetur error
              pariatur. Excepturi error non ex. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repellendus, sunt.
            </p>
            <div class="flex flex-row items-center justify-end">
              <button
                class="bg-cyan-800 text-white font-semibold py-3 px-16 rounded-xl h-full"
              >
                <a href="https://shop.hasbro.com">Onde comprar</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
