<template>
  <header class="fixed shadow bg-purple w-screen flex flex-col md:flex-row justify-between items-center px-10 py-8">
    <div class="flex flex-row justify-between w-full items-end">
      <nav-menu class="hidden md:block mt-4 md:mt-0 md:ml-8"></nav-menu>



      <!-- svg menu icons visible on mobile (will be made svgicons once server integration pulled to main)-->
      <!-- menu hamburger icon opens menu-->
      <svg @click="menu = true" v-show="!menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6 md:hidden cursor-pointer hover:brightness-90 active:brightness-80">
        <path stroke="white" stroke-linecap="round" stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <!-- menu x icon closes menu-->
      <svg @click="menu = false" v-show="menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6 md:hidden cursor-pointer hover:brightness-90 active:brightness-80">
        <path stroke="white" stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>

      <a href="/public/Isabelle May CV 2023.pdf" class="flex items-center text-white  hover:text-blue active:text-blue-dark-20 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke="white" stroke-linecap="round" stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        <p class="ml-2 font-inconsolata font-bold text-center decoration-2 underline-offset-4 transition duration-200">
          CV
        </p>
      </a>
    </div>

    <div class="mobile-menu" :class="menu ? 'mobile-menu-open' : 'mobile-menu-closed'">
      <nav-menu class="md:hidden mt-4 md:mt-0 md:ml-8"></nav-menu>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue"
import router from "../../router/index.js"
import NavMenu from "./NavMenu.vue"

const menu = ref(false)
</script>

<style scoped lang="scss">
@media(max-width: 767px) {
  .mobile-menu {
    @starting-style {
      opacity: 0;
      height: 0;
    }
  }

  .mobile-menu-open {
    animation: mobile-menu-open 0.2s ease;
    height: 196px;
    display: block;
  }

  .mobile-menu-closed {
    transition: all 0.2s ease;
    transition-behavior: allow-discrete;
    display: none;
    opacity: 0;
    height: 0;
  }

  @keyframes mobile-menu-open {
    0% {
      display: none;
      opacity: 0;
      height: 0;
    }

    100% {
      opacity: 1;
      height: 196px;
      display: block;
    }
  }

  @keyframes mobile-menu-closed {
    0% {
      opacity: 1;
      height: 196px;
    }

    100% {
      opacity: 0;
      height: 0;
    }
  }
}
</style>