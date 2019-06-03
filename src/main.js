import Vue from 'vue'
import router from './router'
import store from './store'
import axios from './base/axios'
import App from './App.vue'
import './assets/css/mormalize.css'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  router, //注入router
  store, //注入store
  render: h => h(App),
}).$mount('#app')
