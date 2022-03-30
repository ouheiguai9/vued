export default {
  install: (app, options) => {
    app.config.globalProperties.$lang = (key, context) => {
      let language = undefined
      const store = app.config.globalProperties.$store
      if (store) {
        language = store.getters['system/getLanguageContext'] || options
      }
      if (!language) {
        return key
      }
      const template = key.split('.').reduce((obj, attr) => {
        if (obj) return obj[attr]
      }, language)
      if (!template) return
      return template.replace(/{(\w+)}/g, (match, attr) => context[attr])
    }
  },
}
