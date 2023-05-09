<script setup lang="ts">
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'

function sendMail() {
  alert('ok')
}
</script>

<template>
  <div
    class="w-full min-h-screen bg-zinc-900 text-white flex flex-col items-center"
  >
    <Header />

    <div
      v-motion
      :initial="{
        opacity: 0,
        x: -100,
      }"
      :enter="{
        opacity: 1,
        x: 0,
        transition: {
          delay: 700,
        },
      }"
      class="flex-col rounded-xl bg-cyan-950 w-[calc(100vw-50px)] h-auto flex justify-between items-center p-5 mb-5"
    >
      <div
        class="flex flex-col p-4 max-w-2xl lg:max-w-6xl gap-4 mb-5 text-center"
      >
        <p
          class="text-cyan-600 text-center text-3xl lg:text-5xl decoration-white font-thin uppercase my-5"
        >
          Sobre a Hasbro
        </p>

        <p class="md:text-lg">
          A Hasbro é um líder mundial de entretenimento de marca cuja missão é
          missão é entreter e ligar gerações de fãs através da maravilha de de
          contar histórias e da alegria de jogar.
        </p>
        <p class="md:text-lg">
          A Hasbro proporciona experiências de marca experiências de marca para
          audiências globais através de jogos, produtos de consumo e
          entretenimento, com um portefólio de marcas icónicas, incluindo MAGIC:
          O GATHERING, DUNGEONS & DRAGONS, Hasbro Gaming, NERF, TRANSFORMERS,
          PLAY-DOH e PEPPA PIG, bem como marcas parceiras de primeira linha.
        </p>
      </div>
    </div>

    <div
      v-motion
      :initial="{
        opacity: 0,
        x: 100,
      }"
      :enter="{
        opacity: 1,
        x: 0,
        transition: {
          delay: 1000,
        },
      }"
      class="rounded-xl bg-[url('src/assets/about-.jpg')] bg-cover w-[calc(100vw-50px)] h-auto flex items-center justify-center p-5 text-white mb-5"
    >
      <div
        class="w-full px-5 lg:px-3 max-w-4xl lg:max-w-7xl flex justify-center items-center"
      >
        <!-- FORM -->
        <form @submit="sendMail">
          <p class="text-center text-xl mb-4">Entre em contato</p>

          <div class="flex flex-col">
            <label for="name">Nome Completo</label>
            <input
              class="text-black px-2 py-1 rounded-md outline-none"
              id="name"
              type="text"
              required
            />
          </div>

          <div class="flex flex-col my-2">
            <label for="email">Email</label>
            <input
              class="text-black px-2 py-1 rounded-md outline-none"
              id="email"
              type="email"
              required
            />
          </div>

          <div class="flex flex-col">
            <label for="mensagem">Mensagem</label>
            <textarea
              class="text-black px-2 py-1 rounded-md outline-none"
              required
              name=""
              id="mensagem"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <button
            class="w-full py-2 bg-cyan-600 mt-3 rounded-md text-white"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>

    <div
      v-motion
      :initial="{
        opacity: 0,
        x: 100,
      }"
      :enter="{
        opacity: 1,
        x: 0,
        transition: {
          delay: 1000,
        },
      }"
      class="rounded-xl bg-[url('src/assets/cinema.jpg')] bg-cover w-[calc(100vw-50px)] h-auto flex items-center justify-center p-5 text-white"
    >
      <div
        class="w-full px-5 lg:px-3 max-w-4xl lg:max-w-7xl flex justify-center items-center"
      >
        Salas de cinemas disponiveis
      </div>
    </div>

    <div class="w-[calc(100vw-50px)] mt-5">
      <Footer />
    </div>
  </div>
</template>
