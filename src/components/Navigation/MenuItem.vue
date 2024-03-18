<template>
  <li>
    <router-link
        :to="routeConfig"
        aria-current-value="page"
        class="font-inconsolata font-bold text-center text-white hover:text-blue active:text-blue-dark-20 hover:underline decoration-2 underline-offset-4 transition duration-200">
      {{ name }}
    </router-link>
  </li>
</template>

<script setup>
const props = defineProps({
  routeConfig: String,
  name: String
})
</script>