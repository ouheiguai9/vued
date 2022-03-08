export default {
  namespaced: true,
  state: {
    subject: null,
  },
  getters: {
    isAuthenticated(state) {
      return state.subject !== null
    },
  },
  mutations: {
    setSubject(state, subject) {
      state.subject = subject
    },
  },
  actions: {
    async authentication(context, token) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('setSubject', token)
          resolve()
        }, 1000)
      })
    },
    logout(context) {
      context.commit('setSubject', null)
    },
  },
  modules: {},
}
