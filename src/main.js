import Vue from 'vue'
import router from './router'
import store from './store'
//import axios from './base/axios'
import App from './App.vue'
import './assets/css/mormalize.css'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(VueLazyLoad,{
  error: '',
  loading: ''
})

new Vue({
  router, //注入router
  store, //注入store
  render: h => h(App),
}).$mount('#app')
