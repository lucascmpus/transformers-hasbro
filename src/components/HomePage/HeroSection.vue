<script setup lang="ts"></script>

<template>
  <div class="w-full flex justify-center mb-5">
    <div
      class="rounded-xl bg-cyan-950 w-[calc(100vw-50px)] h-[600px] flex justify-between items-center"
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
      <!-- Text -->
      <div class="flex flex-col justify-center gap-5 md:gap-10 md:w-1/2 pl-10">
        <h1 class="text-4xl md:text-5xl">
          Desperte o poder dos <span class="text-red-500">Transformers</span>
          <br />com nossos incríveis brinquedos!
        </h1>

        <h2 class="text-base md:text-xl font-thin">
          Crie aventuras emocionantes enquanto <br />seus
          <span class="text-yellow-300"> personagens favoritos </span> ganham
          vida diante de seus olhos.
        </h2>

        <div
          class="flex justify-center md:justify-between items-center max-w-3xl"
        >
          <RouterLink to="/produtos" class="text-center">
            <button
              class="py-2 bg-white text-cyan-950 px-4 rounded-lg text-base md:text-base hover:bg-cyan-700 transition-all duration-300 hover:text-white"
            >
              Comprar Agora
            </button>
          </RouterLink>

          <!-- <p class="hidden md:block text-sm md:text-base cursor-pointer hover:underline">Saiba mais...</p> -->
        </div>
      </div>

      <div
        class="bg-teste bg-repeat bg-cover h-[600px] w-[40vw] md:w-[50vw]"
      ></div>
    </div>
  </div>
</template>
