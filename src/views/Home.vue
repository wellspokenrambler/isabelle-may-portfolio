<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <primary-card data-aos="fade-down" data-aos-once>
            <heading-one>
                Isabelle May
            </heading-one>
            <heading-one class="mt-6">
                Front-End Web Developer
            </heading-one>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-6">
            <primary-body-copy class="mt-4">
                Navigation:
            </primary-body-copy>
            
            <text-link href="/about" class="mt-2">
                    About me
                </text-link>

                <text-link href="/examples" class="mt-2">
                    Past examples of my work
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
import AOS from "aos"
AOS.init()

import PrimaryCard from "../components/Cards/PrimaryCard.vue"
import HeadingOne from "../components/TypeScale/HeadingOne.vue";
import HeadingTwo from '../components/TypeScale/HeadingTwo.vue';
import HeadingThree from "../components/TypeScale/HeadingThree.vue";
import PrimaryBodyCopy from "../components/TypeScale/PrimaryBodyCopy.vue";
import TextLink from "../components/Buttons/TextLink.vue"
</script>