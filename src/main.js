import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import { createHead } from '@unhead/vue'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

const app = createApp(App)

const head = createHead()
app
  .use(router)
  .use(head)
  .use(VueRecaptchaPlugin, {
    v2SiteKey: '6LdQ8q0pAAAAAIVGojtOJVbcKZ83Kn9Ify9S8b1J'
  })
  .mount('#app')