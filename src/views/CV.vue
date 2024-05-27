<template>
    <div class="w-full flex flex-col justify-start items-center">
        <primary-card data-aos="fade-down" data-aos-once>
            <heading-one>
                Isabelle May - Front-End Web Developer
            </heading-one>
            <heading-one class="mt-4">
                Curriculum Vitae
            </heading-one>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-two>
                About Me
            </heading-two>
            <PrimaryBodyCopy class="mt-4">
                I am self-driven individual with over 4 years of experience in the field and a keen interest in how
                websites can be both functional and user-friendly while maintaining a strong aesthetic
                presentation. I am also looking to expand my skills into full-stack development or to progress into
                a senior front-end role.
            </PrimaryBodyCopy>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-two>
                Work Experience
            </heading-two>

            <heading-three class="mt-6">
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

            <heading-three class="mt-6">
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

            <ul class="list-disc text-white w-full ml-8 mt-4">
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
                Main Languages & Frameworks
            </heading-two>

            <div class="mt-6 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
                <div v-for="(skill, index) in skills" :key="index" class="flex flex-col justify-start items-center">
                    <component class="hidden md:block" :is="skill.icon" width="128" height="128" original></component>
                    <component class="md:hidden" :is="skill.icon" width="100" height="100" original></component>
                    <HeadingFive class="mt-2">
                        {{ skill.name }}
                    </HeadingFive>
                </div>
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
            <heading-two>
                Other Languages
            </heading-two>

            <heading-three class="mt-6">
                Front-End
            </heading-three>

            <ul class="list-disc text-white w-full ml-8 mt-4">
                <li>
                    <PrimaryBodyCopy>
                        Alpine, jQuery, d3, DataTables, Wordpress, Laravel, Nuxt
                    </PrimaryBodyCopy>
                </li>
            </ul>

            <heading-three class="mt-6">
                Misc.
            </heading-three>

            <ul class="list-disc text-white w-full ml-8 mt-4">
                <li>
                    <PrimaryBodyCopy class="mt-4">
                        SQL, PHP, C++, C#, Shell scripting, Python
                    </PrimaryBodyCopy>
                </li>
            </ul>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-two>
                Soft Skills
            </heading-two>

            <ul class="list-disc text-white w-full ml-8 mt-4">
                <li>
                    <PrimaryBodyCopy>
                        Problem-solving
                    </PrimaryBodyCopy>
                </li>

                <li>
                    <PrimaryBodyCopy class="mt-4">
                        Communication inside and outside of team
                    </PrimaryBodyCopy>
                </li>

                <li>
                    <PrimaryBodyCopy class="mt-4">
                        Self-direction
                    </PrimaryBodyCopy>
                </li>

                <li>
                    <PrimaryBodyCopy class="mt-4">
                        Organisation
                    </PrimaryBodyCopy>
                </li>

                <li>
                    <PrimaryBodyCopy class="mt-4">
                        Research
                    </PrimaryBodyCopy>
                </li>

                <li>
                    <PrimaryBodyCopy class="mt-4">
                        Consideration towards professionalism and ethics
                    </PrimaryBodyCopy>
                </li>
            </ul>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-three>
                Other Work Experience
            </heading-three>

            <heading-five class="mt-6">
                HE Student Ambassador, Truro and Penwith College
            </heading-five>

            <PrimaryBodyCopy class="mt-2">
                (Feb 2018 - July 2019)
            </PrimaryBodyCopy>

            <heading-five class="mt-4">
                Kitchen Porter, Driftwood Spars
            </heading-five>

            <PrimaryBodyCopy class="mt-2">
                (October 2017 - February 2018)
            </PrimaryBodyCopy>

            <heading-five class="mt-4">
                Catering Assistant, Cuckoo Café
            </heading-five>

            <PrimaryBodyCopy class="mt-2">
                (June 2016 - February 2018)
            </PrimaryBodyCopy>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-two>
                Hobbies
            </heading-two>

            <PrimaryBodyCopy class="mt-4">
                I enjoy jogging and exercising, drawing and painting, wildlife photography - I also run and host a
                Twitch stream twice a week (for which I designed all its assets and composed a short music instrumental
                to play during breaks).

            </PrimaryBodyCopy>
        </primary-card>

        <span class="w-full mt-6 h-32 md:hidden"></span>
        <div
            class="fixed bottom-8 inset-x-0 flex justify-center md:justify-end items-center transition duration-100 md:px-8">
            <a href="/Isabelle May CV 2024.pdf" target="_blank"
                class="z-10 bg-purple-light-20 hover:bg-purple-light-40 active:bg-purple text-white w-24 h-24 rounded-full flex flex-col justify-center items-center transition duration-100 hover:-translate-y-1">
                <heading-four>
                    PDF
                </heading-four>
                <downloadIcon width="24" height="24" color="#FFFFFF" :fill="false" />
            </a>
        </div>
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

import cssIcon from "../assets/svg/css.svg"
import htmlIcon from "../assets/svg/html.svg"
import javascriptIcon from "../assets/svg/javascript.svg"
import npmIcon from "../assets/svg/npm.svg"
import reactIcon from "../assets/svg/react.svg"
import sassIcon from "../assets/svg/sass.svg"
import tailwindcssIcon from "../assets/svg/tailwindcss.svg"
import viteIcon from "../assets/svg/vite.svg"
import vueIcon from "../assets/svg/vue.svg"

import downloadIcon from "../assets/svg/download.svg"

const skills = [
    {
        name: "HTML",
        icon: htmlIcon,
    },
    {
        name: "CSS",
        icon: cssIcon,
    },
    {
        name: "JavaScript",
        icon: javascriptIcon,
    },
    {
        name: "Vue",
        icon: vueIcon,
    },
    {
        name: "React",
        icon: reactIcon,
    },
    {
        name: "SASS",
        icon: sassIcon,
    },
    {
        name: "TailwindCSS",
        icon: tailwindcssIcon,
    },
    {
        name: "Vite",
        icon: viteIcon,
    },
    {
        name: "NPM",
        icon: npmIcon,
    }
]

AOS.init()

</script>


<style scoped lang="scss"></style>