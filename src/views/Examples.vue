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

                <PrimaryBodyCopy class="mt-4">
                    A web-page I built while working at Vanellus Technologies Ltd, who specialised
                    in machine-learning-aided complex fluid dynamics, to demonstrate their simulation
                    of a lid-driven cavity flow.
                    <br />
                    <br />
                    It was designed to accept values for the number of
                    cells on the X and Y axis, the Reynolds number, and the length of time that the
                    simulation should run for. Then, it would send these values to a server programmed
                    in Python which calculated the vorticity of each cell based on the given values -
                    iterating over the specified time - then returned multidimensional arrays of data which
                    were used by the front-end to generate a series of time-stepped vorticity plots.
                </PrimaryBodyCopy>
                <HeadingSix class="mt-4 px-4">
                    "Isi helped us get from 0-1 with our front-end, she was instrumental in
                    helping us set up a range of beautiful prototype pages and components which
                    are going to be critical for Vanellus when we launch our MVP."
                </HeadingSix>
                <HeadingFive class="mt-2">
                    - Laurence Cullen, CEO Vanellus Technologies Ltd
                </HeadingFive>

                <div class="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-4 mt-6">
                    <div class="w-full h-fit-content rounded-lg overflow-hidden">
                        <img src="/vanellus-2D-navier-stokes-demo-1.PNG?url">
                    </div>
                    <div class="w-full rounded-lg overflow-hidden">
                        <img src="/vanellus-2D-navier-stokes-demo-2.png?url">
                    </div>
                </div>

                <div class="w-5/6 rounded-lg overflow-hidden mt-6">
                    <img src="/vanellus-2D-navier-stokes-demo-3.png?url">
                </div>

                <PrimaryBodyCopy class="w-full mt-4">
                    Front-end tech stack: Vue 3, SASS, Tailwind CSS, Vite
                </PrimaryBodyCopy>
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
import HeadingFive from "../components/TypeScale/HeadingFive.vue";
import HeadingSix from "../components/TypeScale/HeadingSix.vue";
import PrimaryBodyCopy from '../components/TypeScale/PrimaryBodyCopy.vue'

AOS.init()

</script>

<style scoped lang="scss"></style>