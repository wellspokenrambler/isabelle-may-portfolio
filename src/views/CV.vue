<template>
    <div class="w-full flex flex-col justify-start items-center">
        <primary-card data-aos="fade-up" data-aos-once>
            <heading-one>
                Isabelle May - Front-End Web Developer
            </heading-one>
            <heading-one class="mt-4">
                Curriculum Vitae
            </heading-one>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-three>
                About Me
            </heading-three>
            <PrimaryBodyCopy class="mt-4">
                I am self-driven individual with over 4 years of experience in the field and a keen interest in how
                websites can be both functional and user-friendly while also pushing the limits with aesthetic
                presentation. I am also looking to expand my skills into full-stack development or to progress into
                a senior front-end role.
            </PrimaryBodyCopy>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-two>
                Work Experience
            </heading-two>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-three>
                Front End Developer, Vanellus Technologies Ltd
            </heading-three>

            <heading-five class="mt-2">
                (February 2024 - April 2024)
            </heading-five>

            <PrimaryBodyCopy class="mt-4">
                A short-term placement with a technology start-up focused on improving computational fluid dynamics
                software using machine learning. My role was to help them build the basics of a functioning web
                application to help users configure, run, and analyse fluid simulations on dedicated servers – all
                contained within a clean UI which conforms to modern development standards and practices.
            </PrimaryBodyCopy>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-three>
                Front End Developer, RouteNote Ltd
            </heading-three>

            <heading-five class="mt-2">
                (August 2019 - February 2024)
            </heading-five>

            <PrimaryBodyCopy class="mt-4">
                I initially worked as one of many developers, but became the sole in-house developer in July 2021.
                Below are the projects I worked on during my employment:
            </PrimaryBodyCopy>

            <heading-four class="mt-6">
                Brochure Site
            </heading-four>

            <PrimaryBodyCopy class="mt-4">
                Updated RouteNote’s brochure to a modern, responsive site with content ranging from simple text to
                bespoke animations & dynamic tables across dozens of pages. Also localised the new brochure for a
                Korean audience, with help, text translations, and advice from RouteNote’s branch in Seoul – with
                unique tweaks to its styles to accommodate the change in language. As of 2023 site gets ~1 million
                views per month.
            </PrimaryBodyCopy>

            <heading-four class="mt-6">
                User Portal
            </heading-four>

            <PrimaryBodyCopy class="mt-4">
                With the pages of a new User Portal being built by an out-ofhouse team in India, I was tasked with
                creating a functioning component library for them to build pages from. Components varied from
                buttons & links through form fields & menus up to containing frames – all built to receive and
                transmit information needed by the India team.
            </PrimaryBodyCopy>

            <heading-four class="mt-6">
                Other Contributions
            </heading-four>

            <ul class="list-disc text-white w-full ml-8">
                <li>
                    <PrimaryBodyCopy class="mt-2">
                        Blogs (Edited Wordpress themes to match branding.)
                    </PrimaryBodyCopy>
                </li>

                <li>
                    <PrimaryBodyCopy class="mt-2">
                        PUSH.FM (tweaked brochure page, dashboard & components)
                    </PrimaryBodyCopy>
                </li>

                <li>
                    <PrimaryBodyCopy class="mt-2">
                        User Portal v1 (a few individual pages)
                    </PrimaryBodyCopy>
                </li>

                <li>
                    <PrimaryBodyCopy class="mt-2">
                        RouteNote App (proof-of-concept for home page)
                    </PrimaryBodyCopy>
                </li>
            </ul>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-two>
                Skills
            </heading-two>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <div class="flex flex-col justify-start items-center">
                <icon :data="vite"></icon>
                <PrimaryBodyCopy class="mt-2">
                    CSS
                </PrimaryBodyCopy>
            </div>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-two>
                Education
            </heading-two>

            <heading-four class="mt-6">
                BSc Applied Computing Technologies, 1st Class
            </heading-four>

            <heading-six class="mt-2">
                Truro and Penwith College, 2019
            </heading-six>

            <heading-four class="mt-4">
                BSc Physics with Astrophysics, 3rd Class
            </heading-four>

            <heading-six class="mt-2">
                University of Exeter, 2015
            </heading-six>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-three>
                Other Work Experience
            </heading-three>

            <heading-four class="mt-6">
                HE Student Ambassador, Truro and Penwith College
            </heading-four>

            <heading-six class="mt-2">
                (Feb 2018 - July 2019)
            </heading-six>

            <heading-four class="mt-4">
                Kitchen Porter, Driftwood Spars
            </heading-four>

            <heading-six class="mt-2">
                (October 2017 - February 2018)
            </heading-six>

            <heading-four class="mt-4">
                Catering Assistant, Cuckoo Café
            </heading-four>

            <heading-six class="mt-2">
                (June 2016 - February 2018)
            </heading-six>
        </primary-card>

    </div>
</template>

<script setup>
import AOS from "aos"

import PrimaryCard from "../components/Cards/PrimaryCard.vue"

import PrimaryBodyCopy from '../components/TypeScale/PrimaryBodyCopy.vue'
import HeadingOne from "../components/TypeScale/HeadingOne.vue";
import HeadingTwo from '../components/TypeScale/HeadingTwo.vue';
import HeadingThree from "../components/TypeScale/HeadingThree.vue";
import HeadingFour from "../components/TypeScale/HeadingFour.vue";
import HeadingFive from "../components/TypeScale/HeadingFive.vue";
import HeadingSix from "../components/TypeScale/HeadingSix.vue";

import css from "../assets/svg/css5.svg"
import html from "../assets/svg/html5.svg"
import javascript from "../assets/svg/javascript.svg" 
import npm from "../assets/svg/npm.svg" 
import react from "../assets/svg/react.svg" 
import sass from "../assets/svg/sass.svg"
import tailwindcss from "../assets/svg/tailwindcss.svg" 
import vite from "../assets/svg/vite.svg"
import vue from "../assets/svg/vue.svg"

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Vue",
    "React",
    "SASS",
    "TailwindCSS",
    "Vite",
    "NPM"
]

AOS.init()

</script>

<style scoped lang="scss"></style>