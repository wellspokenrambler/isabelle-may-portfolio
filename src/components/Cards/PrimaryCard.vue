<template>
    <div data-aos="fade-up" data-aos-once
        class="relative w-full max-w-5xl flex flex-col items-center px-8 py-6 rounded-lg shadow-inner dark:shadow-blue-opacity-16 rounded-lg">
        <div class="w-full flex flex-col items-center">
            <slot></slot>
        </div>
        <div class="absolute inset-0 bg-blue opacity-40 dark:opacity-5 pointer-events-none -z-10"></div>
    </div>
</template>

<script setup>
</script>