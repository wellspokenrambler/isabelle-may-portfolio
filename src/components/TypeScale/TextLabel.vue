<template>
    <label :for class="font-inconsolata text-xs text-black dark:text-white">
      <slot></slot>
    </label>
  </template>
  
  <script setup>
  const props = defineProps({
    for: String,
  })
  </script>