<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <computer v-if="welcomeAnimation" />

        <primary-card v-if="!welcomeAnimation" data-aos="fade-down" data-aos-once>
            <heading-one>
                Isabelle May
            </heading-one>
            <heading-one class="mt-6">
                Front-End Web Developer
            </heading-one>
        </primary-card>

        <primary-card v-if="!welcomeAnimation" data-aos="fade-up" data-aos-once class="mt-6">
            <primary-body-copy class="mt-4">
                Navigation:
            </primary-body-copy>

            <text-link href="/about" class="mt-2">
                About me
            </text-link>

            <text-link href="/portfolio" class="mt-2">
                Portfolio of my work
            </text-link>

            <text-link href="/cv" class="mt-2">
                Curriculum Vitae
            </text-link>

            <text-link href="/contact" class="mt-2">
                Contact form
            </text-link>
        </primary-card>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import AOS from "aos"
AOS.init()

import Computer from "../components/Animations/Computer.vue";

import PrimaryCard from "../components/Cards/PrimaryCard.vue"
import HeadingOne from "../components/TypeScale/HeadingOne.vue";
import PrimaryBodyCopy from "../components/TypeScale/PrimaryBodyCopy.vue";
import TextLink from "../components/Buttons/TextLink.vue"

let welcomeAnimation = ref(true)
const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

function handleAnimation() {
    setTimeout(() => {
        welcomeAnimation.value = false
    }, 3000)
}

function checkSessionStorage() {
    if (sessionStorage.getItem("key", "returning")) {
        welcomeAnimation.value = false
    }

    else if (isReduced) {
        welcomeAnimation.value = false
    }

    else {
        handleAnimation()
        sessionStorage.setItem("key", "returning")
    }
}

onMounted(() => {
    checkSessionStorage()
})
</script>