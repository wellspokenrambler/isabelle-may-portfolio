<template>
    <div class="w-full flex flex-col items-center">
        <form ref="form" class="w-full flex flex-col items-center max-w-96 mt-8" @submit.prevent="sendEmail">
            <text-label for="user_name" class="w-full">Name</text-label>
            <input required type="text" name="user_name" placeholder="Enter your name"
                class="rounded-sm p-1 mt-2 border w-full bg-white dark:bg-black dark:text-white">

            <text-label for="user_email" class="w-full mt-4">Email</text-label>
            <input required type="email" name="user_email" placeholder="Enter your email address"
                class="rounded-sm p-1 mt-2 border w-full bg-white dark:bg-black dark:text-white">

            <text-label for="message" class="w-full mt-4">Message</text-label>
            <textarea required name="message" placeholder="Enter your message here"
                class="rounded-sm p-1 mt-2 border h-32 w-full bg-white dark:bg-black dark:text-white"></textarea>

                <div class="w-full flex justify-end mt-4">
                    <Checkbox class="g-recaptcha"></Checkbox>
                </div>

            <div class="w-full flex justify-end mt-4">
                <primary-button type="submit" value="Send" class="w-fit">
                    Send
                </primary-button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

import PrimaryButton from '../components/Buttons/PrimaryButton.vue'

import TextLabel from '../components/TypeScale/TextLabel.vue'

import { Checkbox } from 'vue-recaptcha'

let form = ref(null)

const sendEmail = () => {
    emailjs
        .sendForm('service_n0l3goh', 'template_0n1niw9', form.value, {
            publicKey: 'XtyYI6hy5eRojTsSk',
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        )
} 
</script>

<style scoped lang="scss">
@media only screen and (max-width: 500px) {
    .g-recaptcha {
        transform:scale(0.77)translateX(2px);
        transform-origin: center right;
    }
}
</style>