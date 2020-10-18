import Router from "vue-router";
import Vue from "vue";
import store from "../store";
import auth from "./authRoute";
import main from "./mainRoute";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base:'/pc',
  routes: [
    auth,
    {
      path: "/",
      component: () => import(/* webpackChunkName: "app1" */"../layout/Index"),
      name: 'app',
      children: [
        // 系统首页
        {
          path: "",
          name: "home",
          component: () => import(/* webpackChunkName: "home" */"../views/home/Home"),
          meta: {
            //路由的数据
            icon: "home",
            title: "系统首页",
          },
        },
      ],
    },
    {
      path: "/",
      component: () => import("../layout/Index"),
      children: [
        {
          path: "404",
          component: () => import(/* webpackChunkName: "404" */"../views/common/NotFind"),
          
        },
      ],
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "login" || to.name === "register") {
    // 登录注册页面
    next();
  } else {
    // 进入项目
    // 判断是否有权限
    if (store.state.user.isLogin) {
      next();
    } else {
      next("/auth");
    }
  }
});

export default router;
