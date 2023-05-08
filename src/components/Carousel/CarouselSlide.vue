<script setup lang="ts">
// @ts-ignore
const props = defineProps<{
  visibleSlide: number
  index: number
}>()
</script>
<template>
  <div class="" v-show="visibleSlide == index">
    <slot class=""></slot>
  </div>
</template>
