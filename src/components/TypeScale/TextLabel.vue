<template>
    <label :for class="text-xs text-black dark:text-white">
      <slot></slot>
    </label>
  </template>
  
  <script setup>
  const props = defineProps({
    for: String,
  })
  </script>