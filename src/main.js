import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Const from './constant'

const app = createApp(App)
  .use(ElementPlus, {
    locale: zhCn,
    size: 'small',
    zIndex: 3000,
  })
  .use(VueAxios, axios)
  .use(store)
  .use(router)
//自定义权限指令
app.directive('auth', (el, binding) => {
  const hasPermission = store.getters['security/hasPermission']
  const permission = `${Const.CONST_AUTH_ELEMENT}:${binding.value}`
  if (!hasPermission(permission) && el.parentNode) {
    el.parentNode.removeChild(el)
  }
})
app.mount('#app')
