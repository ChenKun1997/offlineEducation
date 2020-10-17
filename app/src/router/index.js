import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import http from '../api/http'
import {CHECK_LOGIN_API} from '../api/url'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import(/* webpackChunkName: "home" */'../views/Home'),
    redirect:'/shouye',
    children:[
      {
        path:'/shouye',
        name:'shouye',
        component:()=>import(/* webpackChunkName: "shouye" */'../views/Shouye'),
        children:[
          {
            path:'choose-class-center',
            name:'choose-class-center',
            component:()=>import(/* webpackChunkName: "choose-class-center" */'../components/shouye/chooseClassCenter'),
          },
          {
            path:'order',
            name:'order',
            component:()=>import(/* webpackChunkName: "order" */'../components/shouye/order'),
          },
        ]
      },
      {
        path:'/information',
        name:'information',
        component:()=>import(/* webpackChunkName: "information" */'../views/Information'),
      },
      {
        path:'/message',
        name:'message',
        component:()=>import(/* webpackChunkName: "message" */'../views/Message'),
      },
      {
        path:'/me',
        name:'me',
        component:()=>import(/* webpackChunkName: "me" */'../views/Me'),
        children:[
          {
            path:'register',
            name:'register',
            component:()=>import(/* webpackChunkName: "register" */'../components/me/Register'),
          },
          {
            path:'login',
            name:'login',
            component:()=>import(/* webpackChunkName: "login" */'../components/me/Login'),
          },
          {
            path:'wait-to-pay',
            name:'wait-to-pay',
            component:()=>import(/* webpackChunkName: "wait-to-pay" */'../components/me/waitToPay'),
          }
        ]
      }

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

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
      next("/me/login");
    }
  }
});


export default router
