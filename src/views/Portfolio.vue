<template>
    <div class="w-full flex flex-col justify-start items-center">
        <primary-card data-aos="fade-down" data-aos-once class="mt-8">
            <heading-two>
                Portfolio
            </heading-two>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-three>Ultraframe "Paradigm" Internal UI</heading-three>

            <PrimaryBodyCopy class="mt-4">
                A new internal browser application which lets employees view and edit data across multiple schemas, including 
                orders, customers, and transport logistics, with a focus on usability by different personas. This site is
                intended to replace a number software applications which have become hard to maintain by combining their 
                different functionalities into one place which anyone in the company can access and use.
                <br />
                <br />
                I was mainly responsible for the client side of this project, though I did also help debug the server and write 
                routes to callback functions on the server for the client to access. During my time on this project I: created a 
                number of new pages, including a search page with unique elements for each kind of result; updated our PrimeVue 
                component library version from 3 to 4 and used this opportunity to bake as much bespoke styling into our theme 
                preset as possible; and built a universal "list" component to handle large tables of data and filters.
                <br />
                <br />
                This application was not required to be made with responsive web design practices, as the company intended to display 
                the site on desktop computers only. 
            </PrimaryBodyCopy>


            <Carousel class="mt-6" :cards-prop="ultraframe"></Carousel>

            <PrimaryBodyCopy class="w-full mt-4">
                Front-end tech stack: Vue.js 3, PrimeVue, Chart.js, Parcel
                <br />
                Back end: JavaScript, SQL
                <br />
                Testing: JavaScript, Playwright
            </PrimaryBodyCopy>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-three>RouteNote Brochure Site</heading-three>

            <PrimaryBodyCopy class="mt-4">
                A site advertising RouteNote's features, partnered businesses, and ethos; it is intended
                for audiences new to RouteNote so they may appraise its utility as a service before signing
                on with them. The previous brochure site had been intended for desktop-only, but I was brought
                in to make it fully responsive and up-to-date with the latest brand guidelines.
                <br />
                <br />
                The site has over 40 pages, many of which are SEO-friendly to increase traffic, and includes bespoke
                in-browser animations and statistical tables to aid with communicating the RouteNote brand to new
                customers.
                While I was initially given guidance by a supervising developer, I soon became the sole developer
                responsible
                for maintaining and updating the front-end, and co-ordinating with the out-of-house team who run the
                site's
                servers.
                <br />
                <br />
                I then collaborated with RouteNote Asia, based in Seoul, to create a Korean-localised version of the
                brochure website.
                This site was not only written in Korean, but contained information specific to a Korean-speaking
                audience and used
                styles unique to the Korean site to complement the way that the language is written and read on the web.
            </PrimaryBodyCopy>


            <Carousel class="mt-6" :cards-prop="routenote"></Carousel>

            <primary-body-copy class="mt-4">
                Links to the brochure sites in English and Korean, including both the current versions of the sites and
                the archived
                versions from when I worked at RouteNote:
                <br />
                <text-link href="https://routenote.com/" target="_blank" class="mt-2">
                    Current Brochure Site (English)
                </text-link>
                <br />
                <text-link href="https://web.archive.org/web/20240202173312/https://routenote.com/" target="_blank"
                    class="mt-2">
                    Archived Brochure Site (English)
                </text-link>
                <br />
                <text-link href="https://routenote.com/kr" target="_blank" class="mt-2">
                    Current Brochure Site (Korean)
                </text-link>
                <br />
                <text-link href="https://web.archive.org/web/20231106190711/https://routenote.com/kr/" target="_blank"
                    class="mt-2">
                    Archived Brochure Site (Korean)
                </text-link>
            </primary-body-copy>

            <PrimaryBodyCopy class="w-full mt-4">
                Front-end tech stack: Vue.js 2, SASS, Tailwind CSS, Laravel, Webpack, Alpine.js
            </PrimaryBodyCopy>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
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

            <Carousel class="mt-6" :cards-prop="vanellus"></Carousel>

            <PrimaryBodyCopy class="w-full mt-4">
                Front-end tech stack: Vue.js 3, SASS, Tailwind CSS, Vite
            </PrimaryBodyCopy>
        </primary-card>

        <primary-card data-aos="fade-up" data-aos-once class="mt-8">
            <heading-three>Colour Blindness Corrector & Simulator</heading-three>

            <PrimaryBodyCopy class="mt-4">
                A Google Chrome extension I created for my third-year dissertation at Truro and Penwith College.
                CB Corrector “rotates” the colours on webpages to colour-blind friendly colours, and also provides
                a filter to reduce glare for the totally colour-blind; CB Simulator uses SVG’s colour matrices to alter
                the colours on web pages to simulate colour-blindness. The latter has both a default and advanced view.
            </PrimaryBodyCopy>

            <Carousel class="mt-6" :cards-prop="cbCorrectorSimulator"></Carousel>

            <PrimaryBodyCopy class="w-full mt-4">
                Front-end tech stack: HTML, CSS, JavaScript
            </PrimaryBodyCopy>
        </primary-card>
    </div>
</template>

<script setup>
import AOS from "aos"

import PrimaryCard from "../components/Cards/PrimaryCard.vue"
import HeadingTwo from '../components/TypeScale/HeadingTwo.vue'
import HeadingThree from "../components/TypeScale/HeadingThree.vue"
import HeadingFive from "../components/TypeScale/HeadingFive.vue"
import HeadingSix from "../components/TypeScale/HeadingSix.vue"
import PrimaryBodyCopy from '../components/TypeScale/PrimaryBodyCopy.vue'
import TextLink from "../components/Buttons/TextLink.vue"
import Carousel from "../components/Navigation/Carousel.vue"

const vanellus = [
    "/vanellus-2D-navier-stokes-demo-1.PNG?url",
    "/vanellus-2D-navier-stokes-demo-2.png?url",
    "/vanellus-2D-navier-stokes-demo-3.png?url",
]

const routenote = [
    "/routenote-brochure-1.PNG?url",
    "/routenote-brochure-2.png?url",
    "/routenote-brochure-3.png?url",
    "/routenote-brochure-4.png?url"
]

const ultraframe = [
    "/ultraframe 1.png",
    "/ultraframe 2.png",
    "/ultraframe 3.png",
    "/ultraframe 4.png",
    "/ultraframe 5.png",
]

const cbCorrectorSimulator = [
    "/cb corrector screenshot 1.png",
    "/cb corrector screenshot 2.png",
    "/cb corrector screenshot 3.png",
    "/cb simulator screenshot 1.png",
    "/cb simulator screenshot 2.png",
    "/cb simulator screenshot 3.png",
    "/cb simulator screenshot 6.png",
]

AOS.init()

</script>

<style scoped lang="scss"></style>