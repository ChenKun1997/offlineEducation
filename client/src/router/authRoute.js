export default {
  path: "/auth",
  name: "auth",
  redirect: "/auth/login",
  component: () => import("../views/auth/Auth"),
  children: [
    {
      path: "login",
      name: "login",
      component: () => import(/* webpackChunkName: "login" */"../views/auth/Login"),
    },
    {
      path: "register",
      name: "register",
      component: () => import(/* webpackChunkName: "register" */"../views/auth/Register"),
    },
  ],
};
