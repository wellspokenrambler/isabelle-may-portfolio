<template>
  <div>
    <nav-header></nav-header>
    <router-view class="w-full min-h-screen pt-32 px-6 pb-8 bg-white dark:bg-gray-950"></router-view>
  </div>
</template>

<script setup>
import NavHeader from "./components/Navigation/NavHeader.vue"
import { useRecaptchaProvider } from 'vue-recaptcha'

useRecaptchaProvider()
</script>
