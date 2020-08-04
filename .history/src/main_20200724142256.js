import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';



Vue.use(Dialog);
Vue.prototype.$api = api
Vue.use(Vant);
Vue.config.productionTip = false

//
Vue.prototype.$toDetails=(id)=>{
  // console.log(id)
  router.push({
    path:'/details',
    query:{
      id:id
    }
  })
}
Vue.prototype.$Pop_up=()=>{
  Dialog.confirm({
    title: '登录后才可以启用此功能',
    message: '是否跳转登录/注册页面',
  })
    .then(() => {
      // on confirm
      router.push('/login')
    })
    .catch(() => {
      // on cancel
    })
}
Vue.prototype

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
