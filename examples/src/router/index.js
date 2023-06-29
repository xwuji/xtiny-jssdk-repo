import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/views/HelloWorld.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HelloWorld,
  }
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
