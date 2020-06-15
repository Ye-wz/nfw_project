import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import goods_list from "../views/goods-list";
import types from "../views/types";
import street from "../views/street";
import car from "../views/car";
import user from "../views/user";
import login from "../views/login";
import register from "../views/register";
import goods from "../views/goods";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/types",
    name: "types",
    component: types
  },
  {
    path: "/street",
    name: "street",
    component: street
  },
  {
    path: "/car",
    name: "car",
    component: car
  },
  {
    path: "/user",
    name: "user",
    component: user
  },
  {
    path: "/goods_list",
    name: "goods_list",
    component: goods_list
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/register",
    name: "register",
    component: register
  },
  {
    path: "/goods",
    name: "goods",
    component: goods
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
