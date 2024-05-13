<template>
  <header class="z-50 fixed shadow bg-purple w-screen flex flex-col md:flex-row justify-between items-center px-10 py-8">
    <div class="flex flex-row justify-between w-full items-end">
      <a href="/" class="transition duration-100 flex items-end text-white hover:text-blue active:text-blue-dark-20 -mb-2 border-b-2 border-transparent hover:border-blue active:border-blue-dark-20 leading-none" @mouseover="setHoverColor" @mouseleave="setDefaultColor" @mousedown="setActiveColor"
        @mouseup="setDefaultColor">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6" stroke="currentColor">
        <path stroke="strokeColor" stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
      </a>

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

      <span class="hidden md:block w-6 h-6"></span>
    </div>

    <div class="mobile-menu" :class="menu ? 'mobile-menu-open' : 'mobile-menu-closed'">
      <nav-menu class="md:hidden mt-4 md:mt-0 md:ml-8"></nav-menu>
    </div>
  </header>
</template>

<script setup>
import {ref} from "vue"
import NavMenu from "./NavMenu.vue"

let menu = ref(false)

let strokeColor = ref('#ffffff')

const setHoverColor = () => {
  strokeColor.value = '#f2fbff'
}

const setActiveColor = () => {
  strokeColor.value = '#8edffd'
}

const setDefaultColor = () => {
  strokeColor.value = '#ffffff'
}

</script>

<style scoped lang="scss">
@media(max-width: 904px) {
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