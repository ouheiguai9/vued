/**
 * 用于存储系统配置相关数据
 */
import i18n from '@/i18n'
export default {
  namespaced: true,
  state: {
    //国际化语言
    i18n,
    //当前使用的语言，默认zhCn
    language: 'zhCn',
  },
  getters: {
    getElementLocale(state) {
      return state.i18n[state.language].element
    },
    getLanguage(state) {
      return state.language
    },
    getLanguageContext(state) {
      return state.i18n[state.language]
    },
    getLanguageOptions(state) {
      return Object.keys(state.i18n).map((key) => {
        return { text: state.i18n[key].desc, value: key }
      })
    },
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language
    },
  },
  actions: {},
  modules: {},
}
