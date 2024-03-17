<template>
  <li>
    <router-link
        :to="routeConfig"
        aria-current-value="page"
        class="underline text-center">
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