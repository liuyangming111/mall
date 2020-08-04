import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    component: Home,
    children:[
      {
        path:'/',
        name:'mall',
        component:()=>import('../views/mall/mall.vue')
      },
      {
        path:'/classification',
        name:'classification',
        component:()=>import('../views/mall/classification.vue')
      },
      {
        path:'/Car',
        name:'Car',
        component:()=>import('../views/mall/Car.vue')
      },
      {
        path:'/my',
        name:'my',
        component:()=>import('../views/mall/my.vue')
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
