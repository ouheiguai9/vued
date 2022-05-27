import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './themes/index.scss'
import ElementPlus from 'element-plus'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from './plugins/vue-i18n'
import Const from './constant'

const app = createApp(App).use(ElementPlus).use(VueAxios, axios).use(store).use(router).use(VueI18n)
//自定义权限指令
app.directive('auth', (el, binding) => {
  const hasPermission = store.getters['security/hasPermission']
  const permission = `${Const.CONST_AUTH_ELEMENT}:${binding.value}`
  if (!hasPermission(permission) && el.parentNode) {
    el.parentNode.removeChild(el)
  }
})
app.mount('#app')
