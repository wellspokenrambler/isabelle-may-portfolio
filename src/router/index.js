//vue-router built-ins
import { createRouter, createWebHistory } from "vue-router"

//views
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Examples from "../views/Examples.vue"
import Testimonials from "../views/Testimonials.vue"
import Contact from "../views/Contact.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/examples", name: "Examples", component: Examples },
  { path: "/testimonials", name: "Testimonials", component: Testimonials },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;