import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/s1/:s1?",
    name: "step1",
    component: () => import("@/views/Step1.vue")
  },
  {
    path: "/s1/:s1/s2/:s2?",
    name: "step2",
    component: () => import("@/views/Step2.vue")
  },
  {
    path: "/s1/:s1/s2/:s2/s3/:s3?",
    name: "step3",
    component: () => import("@/views/Step3.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  }
];

const router: VueRouter = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
