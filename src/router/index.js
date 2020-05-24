import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "components/Content/Layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/Home"
  },
  {
    path: "/Home",
    name: "Home",
    component: Layout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
