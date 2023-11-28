import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Start",
    component: () => import("./views/Start.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./views/About.vue"),
  },
  {
    path: "/ringing",
    name: "ringing",
    component: () => import("./views/Ringing.vue"),
    props: true,
  },
  {
    path: "/connected",
    name: "connected",
    component: () => import("./views/Connected.vue"),
  },
  {
    path: "/answered",
    name: "answered",
    component: () => import("./views/Answered.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
