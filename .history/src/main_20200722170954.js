import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import Vant from 'vant';
import 'vant/lib/index.css';


Vue.prototype.$api = api
Vue.use(Vant);
Vue.config.productionTip = false

//
Vue.prototype.$toDetails=

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
