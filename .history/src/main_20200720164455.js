import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'

vue.prototype.$api = a
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
