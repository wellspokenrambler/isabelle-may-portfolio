<template>
  <nav>
    <ul class="flex flex-col md:flex-row items-center justify-center md:justify-start">
      <menu-item
          v-for="(routeConfig, index) in filteredRoutes"
          :key="index"
          :route-config="routeConfig.path"
          :name="routeConfig.name.toString()"
          :class="{ 'mt-3 md:mt-0 md:ml-6' : index > 0 }"
      />
    </ul>
  </nav>
</template>

<script setup>
import {useRouter} from 'vue-router'

import MenuItem from "./MenuItem.vue"

const router = useRouter()

//gets a list of routes from src/router/index.js but filters out home page
const filteredRoutes = router.options.routes
    .filter((route) => !(route.name.toString() === "Home"))
</script>