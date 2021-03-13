import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/fonts/iconfont/iconfont.css'

import axios from 'axios'
Vue.prototype.$http = axios

// 请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8002/'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
