<template>
    <div ref="carousel" class="relative w-full max-w-3xl overflow-hidden rounded-lg flex justify-center items-center" v-touch:swipe.left="next"
        v-touch:swipe.right="prev">
        <div ref="inner" class="whitespace-nowrap">
            <div v-for="(card, index) in cards" :key="index"
                class="inline-flex justify-center items-center flex-shrink-0 pointer-events-none select-none"
                :class="{'mx-4' : index != 0 || index != (cards.length - 1)}">
                <img class="w-full w-full rounded-lg overflow-hidden" :src="card">
            </div>
        </div>
        <div class="absolute w-full top-1/2 flex justify-between px-6">
            <button name="Carousel previous button" @click="prev"
                class="flex justify-center items-center transition duration-100 z-10 bg-purple-light-20 hover:bg-purple-light-40 active:bg-purple text-white w-10 h-10 rounded-full">
                <arrowLeftIcon width="24" height="24" color="#FFFFFF" :fill="false"></arrowLeftIcon>
            </button>

            <button name="Carousel next button" @click="next"
                class="flex justify-center items-center transition duration-100 z-10 bg-purple-light-20 hover:bg-purple-light-40 active:bg-purple text-white w-10 h-10 rounded-full">
                <arrowRightIcon width="24" height="24" color="#FFFFFF" :fill="false"></arrowRightIcon>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue"

import { useResizeObserver } from '@vueuse/core'

import arrowLeftIcon from "../../assets/svg/arrow-left.svg"
import arrowRightIcon from "../../assets/svg/arrow-right.svg"

const props = defineProps({
    cardsProp: Array
})

let carousel = ref(null)
let carouselWidth = ref(null)
let cardsWidth = ref(null)

let inner = ref(null)
let cards = reactive(props.cardsProp)

const totalCards = cards.length

useResizeObserver(carousel, (entries) => {
    const entry = entries[0]
    carouselWidth.value = entry.contentRect.width
    cardsWidth.value = carouselWidth.value * totalCards
})

function prev() {
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
