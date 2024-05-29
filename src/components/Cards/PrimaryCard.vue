<template>
    <div
        class="relative w-full max-w-5xl flex flex-col items-center px-4 md:px-8 py-3 md:py-6 shadow-inner dark:shadow-blue-opacity-16 rounded-lg overflow-hidden">
        <div class="w-full flex flex-col items-center z-10">
            <slot></slot>
        </div>
        <div class="absolute inset-0 bg-blue opacity-40 dark:opacity-5 pointer-events-none"></div>
    </div>
</template>

<script setup>
</script>