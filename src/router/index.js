import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import application from "../views/application/index.vue";
import bid from "../views/bid/index.vue";
import bid_opening from "../views/bid_opening/index.vue";
import aq from "../views/aq/index.vue";

Vue.use(VueRouter);
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

const routes = [
  {
    path: "/",
    name: "home",
    component: index,
    meta: {
      title: "黑龙江辰泰信德项目管理有限公司招标投标一体化管理平台",
      keyword: "home",
      description: "home",
    },
  },
  {
    path: "/application",
    name: "application",
    component: application,
    meta: {
      title: "报名",
      keyword: "application",
      description: "application",
    },
  },
  {
    path: "/bid",
    name: "bid",
    component: bid,
    meta: {
      title: "投标",
      keyword: "bid",
      description: "bid",
    },
  },
  {
    path: "/bid_opening",
    name: "bid_opening",
    component: bid_opening,
    meta: {
      title: "开标",
      keyword: "bid_opening",
      description: "bid_opening",
    },
  },
  {
    path: "/aq",
    name: "aq",
    component: aq,
    meta: {
      title: "澄清答疑",
      keyword: "aq",
      description: "aq",
    },
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   meta: {
  //     title: "about",
  //     keyword: "about",
  //     description: "about",
  //   },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
