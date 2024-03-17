<template>
  <header class="bg-white bg-opacity-90 w-screen flex flex-col md:flex-row justify-between items-center px-8 py-6">
    <div class="flex flex-row justify-between w-full md:w-auto md:justify-start items-end">
      <nav-menu class="hidden md:block mt-4 md:mt-0 md:ml-8"></nav-menu>

      <!-- svg menu icons visible on mobile (will be made svgicons once server integration pulled to main)-->
      <!-- menu hamburger icon opens menu-->
      <svg @click="menu = true" v-show="!menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke-width="1.5" stroke="currentColor"
           class="w-6 h-6 md:hidden cursor-pointer hover:brightness-90 active:brightness-80">
        <path stroke="black" stroke-linecap="round" stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
      </svg>
      <!-- menu x icon closes menu-->
      <svg @click="menu = false" v-show="menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke-width="1.5" stroke="currentColor"
           class="w-6 h-6 md:hidden cursor-pointer hover:brightness-90 active:brightness-80">
        <path stroke="black" stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
      </svg>

    </div>

    <div class="mobile-menu" :class="menu ? 'mobile-menu-open' : 'mobile-menu-closed'">
      <nav-menu class="md:hidden mt-4 md:mt-0 md:ml-8"></nav-menu>
    </div>
  </header>
</template>

<script setup>
import {ref} from "vue"
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