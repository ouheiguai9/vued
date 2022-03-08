/**
 * 用于存储授权和认证相关数据
 * @type {{name: string}}
 */
const defaultSuccessfulPath = { name: 'Home' }
export default {
  namespaced: true,
  state: {
    //当前登录用户
    subject: null,
    //登录成功后跳转路径，默认为Home
    successfulPath: defaultSuccessfulPath,
  },
  getters: {
    isAuthenticated(state) {
      return state.subject !== null
    },
    getSuccessfulPath(state) {
      return state.successfulPath
    },
  },
  mutations: {
    setSubject(state, subject) {
      state.subject = subject
    },
    setSuccessfulPath(state, path) {
      state.successfulPath = path
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
    resetSuccessfulPath(context) {
      context.commit('setSuccessfulPath', defaultSuccessfulPath)
    },
    logout(context) {
      context.commit('setSubject', null)
    },
  },
  modules: {},
}
