<template>
    <div class="w-full flex flex-col justify-center items-center">
        <div class="sm:relative w-full h-full sm:h-auto sm:max-w-96 flex flex-col items-center sm:px-8 sm:py-6 sm:rounded-lg sm:shadow-inner sm:dark:shadow-blue-opacity-16 sm:rounded-lg">
            <heading-two>
                Contact
            </heading-two>
            <Primary-Body-Copy class="mt-4">
                If you'd like to get in touch to discuss a suitable role or project, please fill in the form below with your name, email address and message - then I will get back to you as soon as possible.
            </Primary-Body-Copy>
            <form ref="form" class="w-full flex flex-col items-center mt-8" @submit.prevent="sendEmail">
            <text-label for="user_name" class="w-full">Name</text-label>
            <input required type="text" name="user_name" placeholder="Enter your name"
                class="font-inconsolata rounded-sm p-2 mt-2 border w-full bg-white dark:bg-black dark:text-white">

            <text-label for="user_email" class="w-full mt-4">Email</text-label>
            <input required type="email" name="user_email" placeholder="Enter your email address"
                class="font-inconsolata rounded-sm p-2 mt-2 border w-full bg-white dark:bg-black dark:text-white">
            <text-label for="message" class="w-full mt-4">Message</text-label>
            <textarea required name="message" placeholder="Enter your message"
                class="font-inconsolata rounded-sm p-2 mt-2 border h-32 w-full bg-white dark:bg-black dark:text-white"></textarea>

                <div class="w-full flex justify-end mt-4">
                    <Checkbox class="g-recaptcha"></Checkbox>
                </div>

            <div class="w-full flex justify-end mt-4">
                <primary-button type="submit" value="Send" class="w-fit">
                    Send
                </primary-button>
            </div>
        </form>
        <div class="absolute inset-0 bg-blue opacity-5 pointer-events-none"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

//components
import HeadingTwo from '../components/TypeScale/HeadingTwo.vue'
import PrimaryBodyCopy from '../components/TypeScale/PrimaryBodyCopy.vue'
import TextLabel from '../components/TypeScale/TextLabel.vue'
import PrimaryButton from '../components/Buttons/PrimaryButton.vue'
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