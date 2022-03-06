import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
  .use(ElementPlus, {
    locale: zhCn,
    size: 'small',
    zIndex: 3000,
  })
  .use(VueAxios, axios)
  .use(store)
  .use(router);
app.mount('#app');
