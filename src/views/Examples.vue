<template>
    <div class="w-full flex flex-col justify-start items-center">
        <primary-card data-aos="fade-up" data-aos-once>
            <heading-two>
                Examples
            </heading-two>
        </primary-card>

        <div data-aos="fade-up" data-aos-delay="200" data-aos-once
            class="sm:relative w-full max-w-5xl flex flex-col items-center sm:px-8 sm:py-6 sm:rounded-lg sm:shadow-inner sm:dark:shadow-blue-opacity-16 sm:rounded-lg mt-6">
            <div class="w-full flex flex-col items-center">
                <heading-three>2D Navier-Stokes Demo</heading-three>

                <PrimaryBodyCopy class="mt-4"></PrimaryBodyCopy>
            </div>
            <div class="absolute inset-0 bg-blue opacity-5 pointer-events-none"></div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" data-aos-once
            class="sm:relative w-full max-w-5xl flex flex-col items-center sm:px-8 sm:py-6 sm:rounded-lg sm:shadow-inner sm:dark:shadow-blue-opacity-16 sm:rounded-lg mt-6">
            <div class="w-full flex flex-col items-center">
                <heading-three>RouteNote Brochure Site</heading-three>

                <PrimaryBodyCopy class="mt-4"></PrimaryBodyCopy>
            </div>
            <div class="absolute inset-0 bg-blue opacity-5 pointer-events-none"></div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" data-aos-once
            class="sm:relative w-full max-w-5xl flex flex-col items-center sm:px-8 sm:py-6 sm:rounded-lg sm:shadow-inner sm:dark:shadow-blue-opacity-16 sm:rounded-lg mt-6">
            <div class="w-full flex flex-col items-center">
                <heading-three>Colour Blindness Corrector & Colour Blindness Simulator</heading-three>

                <PrimaryBodyCopy class="mt-4"></PrimaryBodyCopy>
            </div>
            <div class="absolute inset-0 bg-blue opacity-5 pointer-events-none"></div>
        </div>
    </div>
</template>

<script setup>
import AOS from "aos"

import PrimaryCard from "../components/Cards/PrimaryCard.vue"
import HeadingTwo from '../components/TypeScale/HeadingTwo.vue';
import HeadingThree from "../components/TypeScale/HeadingThree.vue";
import PrimaryBodyCopy from '../components/TypeScale/PrimaryBodyCopy.vue'

AOS.init()

</script>

<style scoped lang="scss"></style>