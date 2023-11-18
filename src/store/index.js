import { createStore } from 'vuex';

import auth from './modules/auth';
import user from './modules/user'
import project from './modules/projects'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    user,
    project
  }
})
