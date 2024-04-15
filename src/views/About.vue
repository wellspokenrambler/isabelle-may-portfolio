<template>
    <div class="w-full flex flex-col justify-start items-center">
        <div data-aos="fade-up" data-aos-once
            class="sm:relative w-full max-w-5xl flex flex-col items-center sm:px-8 sm:py-6 sm:rounded-lg sm:shadow-inner sm:dark:shadow-blue-opacity-16 sm:rounded-lg">
            <div class="w-full flex flex-col items-center">
                <heading-two>
                    About
                </heading-two>
            </div>
            <div class="absolute inset-0 bg-blue opacity-5 pointer-events-none"></div>
        </div>

        <div class="w-full max-w-5xl flex flex-col-reverse lg:flex-row lg:justify-between items-between mt-6">
            <div data-aos="fade-up" data-aos-delay="100" data-aos-once
                class="sm:relative w-full sm:w-auto flex flex-col items-center sm:px-8 sm:py-6 sm:rounded-lg sm:shadow-inner sm:dark:shadow-blue-opacity-16 sm:rounded-lg">
                <div class="w-full flex flex-col items-center">
                    <Primary-Body-Copy>
                        Isabelle May grew up in Cornwall and has been analytically inclined from a young age. After
                        completing a degree in Physics with Astrophysics, she discovered an interest in computer
                        programming afterwards - and with that newfound passion, gained a 1st-class degree in Applied
                        Computing Technologies.
                        <br />
                        <br />
                        She now has 4.5+ years of experience in front-end web development and possesses a keen interest
                        in how websites can be both functional and user-friendly, while also pushing the limits with
                        aesthetic presentation. Isabelle is also passionate about web accessibility.
                        <br />
                        <br />
                        Outside of development work she enjoys jogging and exercising, drawing and painting, and
                        wildlife photography.
                    </Primary-Body-Copy>
                </div>
                <div class="absolute inset-0 bg-blue opacity-5 pointer-events-none"></div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" data-aos-once
                class="sm:relative flex flex-col justify-center items-center sm:px-8 sm:py-6 sm:rounded-lg sm:shadow-inner sm:dark:shadow-blue-opacity-16 sm:rounded-lg ml-4">
                <div class="w-full rounded-lg overflow-hidden">
                    <img src="/isabelle-may-formal.JPG?url">
                </div>
                <div class="absolute inset-0 bg-blue opacity-5 pointer-events-none"></div>
            </div>
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