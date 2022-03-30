import { createStore } from 'vuex'
import security from './security'
import system from './system'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    security,
    system,
  },
})
