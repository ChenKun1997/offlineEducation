import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/user'
import course from './modules/course'
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    user,
    course
  }
})