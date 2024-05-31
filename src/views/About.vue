<template>
    <div class="w-full flex flex-col justify-start items-center">
        <primary-card data-aos="fade-down" data-aos-once>
            <heading-two>
                About
            </heading-two>
        </primary-card>


        <div data-aos="fade-up" data-aos-once class="w-full max-w-5xl flex flex-col-reverse lg:flex-row lg:justify-between items-between mt-6">
            <primary-card class="mt-6 lg:mt-0 lg:mr-6">
                <Primary-Body-Copy>
                    Isabelle May grew up in Cornwall and has been analytically inclined from a young age. After
                    completing a degree in Physics with Astrophysics, she discovered an interest in computer
                    programming - and with that newfound passion, gained a 1st-class degree in Applied
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
            </primary-card>

            <primary-card>
                <img src="/isabelle-may-formal.JPG?url">
            </primary-card>
        </div>
    </div>
</template>

<script setup>
import AOS from 'aos'

AOS.init()

import PrimaryBodyCopy from '../components/TypeScale/PrimaryBodyCopy.vue'
import HeadingTwo from '../components/TypeScale/HeadingTwo.vue'
import PrimaryCard from '../components/Cards/PrimaryCard.vue'
</script>

<style scoped lang="scss"></style>