import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./views/About.vue"),
  },
  {
    path: "/start",
    name: "Start",
    component: () => import("./views/Start.vue"),
  },
  {
    path: "/ringing",
    name: "ringing",
    component: import("./views/Ringing.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
