<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)

const button = document.getElementById('back-to-top')
document.getElementsByTagName('body')[0].onscroll = function () {
  if (window.pageYOffset > 250) {
    show.value = true
  } else {
    show.value = false
  }
}
function toTop() {
  window.scrollTo(0, 0)
}
</script>

<template>
  <button
    @click="toTop"
    v-show="show"
    id="back-to-top"
    class="fixed bg-cyan-900 p-1 rounded-xl bottom-4 right-4"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
      />
    </svg>
  </button>
</template>
