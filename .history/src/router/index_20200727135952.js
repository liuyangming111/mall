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
      },
      {
        path:'/Carr',
        name:'Carr',
        component:()=>import('../views/mall/Carr.vue')
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login/login.vue')
  },
  {
    path:'/details',
    name:'details',
    component:()=>import('../views/details/details.vue')
  },
  {
    path:'/Collection',
    name:'Collection',
    component:()=>import('../views/Collection/Collection.vue')
  },
  {
    path:'/order',
    name:'order',
    component:()=>import('../views/order/order.vue')
  },
  {
    path:'/browse',
    name:'browse',
    component:()=>import('../views/browse/browse.vue')
  },
  {
    path:'/address',
    name:'address',
    component:()=>import('../views/address/address.vue')
  },
  {
    path:'/personal',
    name:'personal',
    component:()=>import('../views/personal/personal.vue')
  },
  {
    path:'/settlement',
    name:'settlement',
    component:()=>import('../views/settlement/settlement.vue')
  },
  {
    path:'/edit',
    naem:'edit'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
