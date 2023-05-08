<script setup lang="ts">
//@ts-ignore
const emit = defineEmits(['next', 'prev'])

function nextImage() {
  emit('next')
}

function prevImage() {
  emit('prev')
}
</script>
<template>
  <div class="relative w-full max-w-7xl h-[350px] overflow-hidden">
    <slot></slot>

    <!-- Next BTN -->
    <button
      @click="nextImage"
      class="absolute top-[calc(50%-20px)] right-1 p-1 bg-cyan-950/50 rounded-md text-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </button>

    <!-- Prev BTN -->
    <button
      @click="prevImage"
      class="absolute top-[calc(50%-20px)] p-1 bg-cyan-950/50 rounded-md text-sm ml-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
    </button>
  </div>
</template>
