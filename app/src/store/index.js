import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './modules/user';
import course from './modules/course';


export default new Vuex.Store({
  modules: {
    user,
    course
  }
})
