<template>
    <div class="w-full">
        <form class="flex flex-col" @submit.prevent="sendEmail">
            <text-input id="user_name" label="Name" placeholder="Enter your name" v-model="emailForm.name"/>
            <email-input id="user_email" label="Email" placeholder="Enter your email address" v-model="emailForm.email"/>
            <text-area-input id="user_message" label="Message" placeholder="Enter your message here" v-model="emailForm.message"></text-area-input>
            <primary-button type="submit" value="Send">
                Send
            </primary-button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import emailjs from '@emailjs/browser'

import TextInput from '../components/Form/TextInput.vue'
import EmailInput from '../components/Form/EmailInput.vue'
import TextAreaInput from '../components/Form/TextAreaInput.vue'
import PrimaryButton from '../components/Buttons/PrimaryButton.vue'

let emailForm = reactive({
    name: "",
    email: "",
    message: ""
})

const sendEmail = () => {
    emailjs
        .sendForm('service_n0l3goh', 'template_dqbil4l', emailForm, {
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