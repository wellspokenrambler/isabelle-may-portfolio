<template>
      <text-label :for="id">
        {{ label }}
      </text-label>
      <input
          type="email"
          @input="$emit('update:modelValue', $event.target.value)"
          :name="id"
          :id="id"
          :placeholder="placeholder"
          class="rounded-sm p-1 mt-1 border w-full max-w-80 bg-white"
          :class="error ? 'border-error' : 'border-blue'"
      >
      <text-error v-if="error" class="-bottom-4 right-0 absolute">
        {{ errorText }}
      </text-error>
  </template>
  
  <script setup>
  import TextLabel from "../TypeScale/TextLabel.vue"
  import TextError from "../TypeScale/TextError.vue"
  
  defineProps({
    id: String,
    placeholder: String,
    label: String,
    error: Boolean,
    errorText: String
  })
  
  </script>