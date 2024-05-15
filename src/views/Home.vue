<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <primary-card data-aos="fade-up" data-aos-once>
            <heading-one>
                Isabelle May
            </heading-one>
            <heading-one class="mt-6">
                Front-End Web Developer
            </heading-one>
        </primary-card>
    </div>
</template>

<script setup>
import AOS from "aos"
AOS.init()

import PrimaryCard from "../components/Cards/PrimaryCard.vue"
import HeadingOne from "../components/TypeScale/HeadingOne.vue";
import HeadingTwo from '../components/TypeScale/HeadingTwo.vue';
import HeadingThree from "../components/TypeScale/HeadingThree.vue";
</script>