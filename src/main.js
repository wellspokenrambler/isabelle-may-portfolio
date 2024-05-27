import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import { createHead } from '@unhead/vue'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Vue3TouchEvents from "vue3-touch-events";

const app = createApp(App)

const head = createHead()
app
  .use(router)
  .use(head)
  .use(AOS)
  .use(VueRecaptchaPlugin, {
    v2SiteKey: '6LdQ8q0pAAAAAIVGojtOJVbcKZ83Kn9Ify9S8b1J'
  })
  .use(Vue3TouchEvents)
  .mount('#app')