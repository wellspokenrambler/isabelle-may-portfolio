//vue-router built-ins
import { createRouter, createWebHistory } from "vue-router"

import Placeholder from "../views/Placeholder.vue"

const routes = [
  { path: "/", name: "Placeholder", component: Placeholder },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;