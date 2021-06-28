import Vue from "vue";
import VueRouter from "vue-router";

import Showcase from "../views/Showcase.vue";
import Brands from "../views/Brands.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Showcase",
    component: Showcase,
  },
  {
    path: "/marcas",
    name: "Marcas",
    component: Brands,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
