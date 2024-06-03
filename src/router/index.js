//vue-router built-ins
import { createRouter, createWebHistory } from "vue-router"

//views
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Portfolio from "../views/Portfolio.vue"
import Contact from "../views/Contact.vue"
import CV from "../views/CV.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/portfolio", name: "Portfolio", component: Portfolio },
  { path: "/cv", name: "CV", component: CV},
  { path: "/contact", name: "Contact", component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;