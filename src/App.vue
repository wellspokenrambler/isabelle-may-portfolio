<template>
  <div>
    <nav-header></nav-header>
    <button title="toggle dark mode" class="dark-toggle z-50 md:z-0 fixed top-8 md:top-28 md:right-6 md:w-8 md:h-8 bg-gray-950 dark:bg-white rounded-full transition duration-200 flex justify-center items-center shadow-none hover:shadow-2xl shadow-gray-950 dark:shadow-white" @click="toggleDark()">
      <sunIcon v-show="isDark" width="24" height="24" color="#000000" :fill="false" />
      <moonIcon v-show="!isDark" width="24" height="24" color="#FFFFFF" :fill="false" />
    </button>
    <router-view class="w-full min-h-screen pt-32 px-6 pb-8 bg-white dark:bg-gray-950 transition duration-200"></router-view>
  </div>
</template>

<script setup>
import NavHeader from "./components/Navigation/NavHeader.vue"
import { useRecaptchaProvider } from 'vue-recaptcha'

useRecaptchaProvider()

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

import sunIcon from "./assets/svg/sun.svg"
import moonIcon from "./assets/svg/moon.svg"
</script>

<style scoped lang="scss">
@media(max-width: 904px) {
  .dark-toggle {
    right: calc(50% - 12px);
  }
}
</style>