<template>
    <div class="relative">
        <div ref="carousel"
            class="w-full max-w-3xl overflow-hidden rounded-lg"
            v-touch:swipe.left="next" v-touch:swipe.right="prev">
            <div ref="inner" class="whitespace-nowrap">
                <div v-for="(card, index) in cards" :key="index"
                    class="inline-flex justify-center items-center flex-shrink-0 pointer-events-none select-none"
                    :class="{ 'mx-4': index != 0 || index != (cards.length - 1) }">
                    <img :alt="card" class="w-full rounded-lg overflow-hidden shadow dark:shadow-none" :src="card">
                </div>
            </div>
            <div class="absolute w-full top-1/2 flex justify-between px-6">
                <button title="Carousel previous button" @click="prev"
                    class="md:absolute md:-left-12 flex justify-center items-center transition duration-100 z-10 bg-purple-light-20 hover:bg-purple-light-40 active:bg-purple text-white w-10 h-10 rounded-full">
                    <arrowLeftIcon width="24" height="24" color="#FFFFFF" :fill="false"></arrowLeftIcon>
                </button>

                <button title="Carousel next button" @click="next"
                    class="md:absolute md:-right-12 flex justify-center items-center transition duration-100 z-10 bg-purple-light-20 hover:bg-purple-light-40 active:bg-purple text-white w-10 h-10 rounded-full">
                    <arrowRightIcon width="24" height="24" color="#FFFFFF" :fill="false"></arrowRightIcon>
                </button>
            </div>

            <div class="w-full flex justify-center items-center mt-2">
                <div v-for="(card, index) in cardsProp" :key="index"
                    class="inline-flex rounded-full overflow-hidden justify-center items-center flex-shrink-0 pointer-events-none select-none bg-black"
                    :class="{ 'mx-1': index != 0 || index != (cards.length - 1) }">
                    <img 
                        :alt="card"
                        class="w-6 h-6 shadow dark:shadow-none" 
                        :class="{'opacity-50' : index != currentCard }" 
                        :src="card"
                        >
                </div>
            </div>

            <SecondaryBodyCopy class="mt-2 text-center">
                {{ currentCard + 1 }} of {{ totalCards }}
            </SecondaryBodyCopy>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue"

import { useResizeObserver } from '@vueuse/core'

import arrowLeftIcon from "../../assets/svg/arrow-left.svg"
import arrowRightIcon from "../../assets/svg/arrow-right.svg"
import SecondaryBodyCopy from "../TypeScale/SecondaryBodyCopy.vue"

const props = defineProps({
    cardsProp: Array
})

let carousel = ref(null)
let carouselWidth = ref(null)
let cardsWidth = ref(null)

let inner = ref(null)
let cards = reactive([...props.cardsProp])
let currentCard = ref(0)

const totalCards = cards.length

useResizeObserver(carousel, (entries) => {
    const entry = entries[0]
    carouselWidth.value = entry.contentRect.width
    cardsWidth.value = carouselWidth.value * totalCards
})

function prev() {
    currentCard.value--
    if(currentCard.value < 0) {
        currentCard.value = totalCards - 1
    }
    const card = cards.pop()
    cards.unshift(card)
    inner.value.style.transform = `translateX(-${carouselWidth.value}px)`
    inner.value.style.transition = `0s`

    setTimeout(() => {
        inner.value.style.transform = `translateX(0px)`
        inner.value.style.transition = `0.2s ease`
    }, 0)
}

function next() {
    currentCard.value++
    if(currentCard.value >= totalCards) {
        currentCard.value = 0
    }
    inner.value.style.transform = `translateX(-${carouselWidth.value}px)`
    inner.value.style.transition = `0.2s ease`
    setTimeout(() => {
        const card = cards.shift()
        cards.push(card)
        inner.value.style.transform = `translateX(0px)`
        inner.value.style.transition = `0s`
    }, 200)
}

</script>
