export default {
  install: (app, options) => {
    app.config.globalProperties.$lang = (key, context) => {
      const template = key.split('.').reduce((obj, attr) => {
        if (obj) return obj[attr]
      }, options)
      if (!template) return
      return template.replace(/{(\w+)}/g, (match, attr) => context[attr])
    }
  },
}
