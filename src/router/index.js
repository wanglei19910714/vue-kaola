import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index.vue'
import Detail from '../views/detail'
import Home from '../views/home/home.vue'
import Category from '../views/category/category.vue'
import Shop from '../views/shop/shop.vue'
import Profile from '../views/profile/profile.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    redirect:"/index",
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    redirect:"/index/home",
    children:[
        {
          path:'home',
          component:Home
        },
        {
          path:'category',
          name:'category',
          component:Category
        },
        {
          path:'shop',
          component:Shop
        },
        {
          path:'profile',
          component:Profile
        }
    ]

  },
  {
    path: '/detail',
    name: 'detail',
    component:Detail
  },
]

const router = new VueRouter({
  routes
})

export default router
