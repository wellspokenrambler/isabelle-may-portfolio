<template>
    <div class="w-full flex flex-col md:justify-center items-center">
        <div class="w-full max-w-96">
            <primary-card data-aos="fade-down" data-aos-once>
                <!-- initial contact page -->
                <div v-if="!emailSent && !error" class="w-full flex flex-col items-center">
                    <heading-two>
                        Contact
                    </heading-two>
                    <Primary-Body-Copy class="mt-4">
                        If you'd like to get in touch to discuss a suitable role or project, please fill in the form
                        below
                        with your name, email address and message - then I will get back to you as soon as possible.
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
                            <primary-button title="Submit contact form button" type="submit" value="Send" class="w-fit">
                                Send
                            </primary-button>
                        </div>
                    </form>
                </div>

                <!-- if email sends correctly -->
                <div v-if="emailSent" class="w-full flex flex-col items-center">
                    <heading-two>
                        Sent!
                    </heading-two>

                    <Primary-Body-Copy class="mt-4">
                        Thank you very much for getting in touch! I shall respond to your message shortly.
                    </Primary-Body-Copy>

                    <primary-button title="Home page button" @clicked="router.push('/')" class="w-fit mt-4">
                        Back to home
                    </primary-button>
                </div>

                <!-- if error occurs -->
                <div v-if="error" class="w-full flex flex-col items-center">
                    <heading-two>
                        Uh-oh!
                    </heading-two>

                    <Primary-Body-Copy class="mt-4">
                        Something went wrong when the email tried to send, and it didn't get caught by HTML5 or the
                        CAPTCHA!
                        <br />
                        Sorry about that. Click the button below refresh the contact page and try again.
                    </Primary-Body-Copy>

                    <primary-button title="Refresh page button" @clicked="window.location.reload()" class="w-fit mt-4">
                        Refresh the page
                    </primary-button>
                </div>
            </primary-card>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import emailjs from '@emailjs/browser'
import AOS from "aos"
AOS.init()

//components
import PrimaryCard from '../components/Cards/PrimaryCard.vue'
import HeadingTwo from '../components/TypeScale/HeadingTwo.vue'
import PrimaryBodyCopy from '../components/TypeScale/PrimaryBodyCopy.vue'
import TextLabel from '../components/TypeScale/TextLabel.vue'
import PrimaryButton from '../components/Buttons/PrimaryButton.vue'
import { Checkbox } from 'vue-recaptcha'

const router = useRouter()

let form = ref(null)

let emailSent = ref(false)
let error = ref(false)

const sendEmail = () => {
    emailjs
        .sendForm('service_n0l3goh', 'template_0n1niw9', form.value, {
            publicKey: 'XtyYI6hy5eRojTsSk',
        })
        .then(
            () => {
                console.log('SUCCESS!')
                emailSent.value = true
                error.value = false
            },
            (error) => {
                console.log('FAILED...', error.text);
                emailSent.value = false
                error.value = true
            },
        )
} 
</script>

<style scoped lang="scss">
@media only screen and (max-width: 500px) {
    .g-recaptcha {
        transform: scale(0.77)translateX(2px);
        transform-origin: center right;
    }
}
</style>