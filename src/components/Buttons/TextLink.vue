<template>
    <a
        :href="href"
        :target="target"
        class="font-inconsolata text-base font-bold text-center text-white hover:text-blue active:text-blue-dark-20 underline decoration-2 underline-offset-4 transition duration-200">
        <slot></slot>
    </a>
</template>

<script setup>
const props = defineProps({
    href: String,
    target: {
        type: String,
        default: ""
    }
})
</script>


