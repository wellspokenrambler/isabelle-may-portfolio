<template>
    <div class="w-full flex flex-col justify-start items-center">
        <div data-aos="fade-up" data-aos-once
            class="sm:relative w-full max-w-5xl flex flex-col items-center sm:px-8 sm:py-6 sm:rounded-lg sm:shadow-inner sm:dark:shadow-blue-opacity-16 sm:rounded-lg">
            <div class="w-full flex flex-col items-center">
                <heading-two>
                    Examples
                </heading-two>
            </div>
            <div class="absolute inset-0 bg-blue opacity-5 pointer-events-none"></div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" data-aos-once
            class="sm:relative w-full max-w-5xl flex flex-col items-center sm:px-8 sm:py-6 sm:rounded-lg sm:shadow-inner sm:dark:shadow-blue-opacity-16 sm:rounded-lg mt-6">
            <div class="w-full flex flex-col items-center">
                <PrimaryBodyCopy></PrimaryBodyCopy>
            </div>
            <div class="absolute inset-0 bg-blue opacity-5 pointer-events-none"></div>
        </div>
    </div>
</template>

<script setup>
import AOS from "aos"

import PrimaryBodyCopy from '../components/TypeScale/PrimaryBodyCopy.vue'
import HeadingTwo from '../components/TypeScale/HeadingTwo.vue'

AOS.init()

</script>

<style scoped lang="scss"></style>