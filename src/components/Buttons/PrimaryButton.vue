<template>
    <button @click="$emit('clicked')"
            :title="title"
            class="p-2 text-white rounded-sm select-none box-border h-11 transition duration-100 bg-purple-light-20 hover:bg-purple-light-40 active:bg-purple"
            :class="
            disabled ? 'pointer-events-none opacity-20' : ''">
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    title: String,
    disabled: Boolean,
    red: Boolean,
  })
  </script>