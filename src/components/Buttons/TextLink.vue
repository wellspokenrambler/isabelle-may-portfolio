<template>
    <a
        :alt="alt"
        :href="href"
        :target="target"
        class="font-inconsolata text-base font-bold text-center text-black hover:text-purple active:text-blue-light-20 dark:text-white dark:hover:text-blue dark:active:text-blue-dark-20 underline decoration-2 underline-offset-4 transition duration-200">
        <slot></slot>
    </a>
</template>

<script setup>
const props = defineProps({
    alt: String,
    href: String,
    target: {
        type: String,
        default: ""
    }
})
</script>


