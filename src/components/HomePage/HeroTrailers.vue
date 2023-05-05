<script setup lang="ts">
import Trailer from '../../assets/media/hasbro02.mp4'
import { ref } from 'vue'

const muted = ref(false)
const volume = ref()

function unmuted() {
  console.log(muted)
  muted.value = !muted.value
}

function testevolume(event: any) {
  volume.value = event.target.value
  console.log(volume.value)
}
</script>

<template>
  <div
    class="w-full h-auto flex justify-center"
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
  >
    <div
      class="rounded-xl w-[calc(100vw-50px)] flex flex-col justify-center items-center gap-5"
    >
      <div class="w-full p-4">
        <h1
          class="text-xl md:text-3xl text-center uppercase tracking-wide font-bold font-transformers"
        >
          saiba mais sobre os transformers
        </h1>
      </div>

      <video class="rounded-sm" :muted="muted" loop autoplay :volume="volume">
        <source :src="Trailer" />
      </video>

      <div class="flex items-center gap-3">
        <button
          class="px-3 bg-cyan-950 rounded-lg py-1 text-sm"
          @click="unmuted"
        >
          Sound
        </button>
        <input
          type="range"
          max="1"
          min="0"
          :value="volume"
          step="0.1"
          @change="testevolume($event)"
        />
      </div>
    </div>
  </div>
</template>
