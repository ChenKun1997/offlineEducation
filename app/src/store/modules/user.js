import http from '../../api/http'
import {CHECK_LOGIN_API} from '../../api/url'

export default {
  namespaced: true,
  state: {
    // 是否登录，取上一次退出的状态，如果没有值就是false
    isLogin: Boolean(Number(localStorage.getItem('isLogin'))),
    info: {}
  },
  getters: {
    userAuth(state){
      return state.info.auth || [];
    }
  },
  mutations: {
    setIsLogin(state, payload) {
      state.isLogin = payload;
    },
    setInfo(state, payload){
      state.info = payload;
    }
  },
  actions: {
    // 修改登录状态，需要同步localStorage
    changeLoginAction(context, payload){
      if(payload){
        localStorage.setItem('isLogin', 1);
      }else{
        localStorage.setItem('isLogin', 0);
      }
      context.commit('setIsLogin', payload);
    },
    async checkLogin(context, payload) {
      //检查用户是否登录了
      const result = await http.get(CHECK_LOGIN_API)
        if (result.data.code === 0) {
          // 登录没有过期
          localStorage.setItem('isLogin', 1);
          // 修改仓库数据
          context.commit("setIsLogin", true);
          // 查询用户信息
          context.dispatch('requestUserInfo');
        }else{
          // 没有登录，或者过期了
          localStorage.setItem('isLogin', 0);
          context.commit("setIsLogin", false);
        }
    },
    // 请求用户信息
    async requestUserInfo(context, payload){
      const result = await http.get('/app/user/user_info')
        // 设置用户信息
        
        context.commit('setInfo', result.data.data);
        // localStorage.setItem('auth', JSON.stringify(data.data.data.auth));
    }
  },
};
