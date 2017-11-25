import Vue from 'vue'
import VueRouter from 'vue-router'
/*
 import home from '../pages/home/home.vue'
 import classify from '../pages/classify/classify.vue'
 import shopCart from '../pages/shopCart/shopCart.vue'
 import user from '../pages/user/user.vue'
 import brand from '../pages/brand/brand.vue'
 import category from '../pages/category/category.vue'
 */
const home = () => import('../pages/home/home.vue')
const classify = () => import('../pages/classify/classify.vue')
const shopCart = () => import('../pages/shopCart/shopCart.vue')
const user = () => import('../pages/user/user.vue')
const brand = () => import('../pages/brand/brand.vue')
const category = () => import('../pages/category/category.vue')

// 使用vue-router
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/classify',
      component: classify,
      children: [
        {
          path: '',
          redirect: 'brand'
        },
        {
          path: 'brand',
          component: brand
        },
        {
          path: 'category',
          component: category
        },
      ]
    },
    {
      path: '/shopCart',
      component: shopCart
    },
    {
      path: '/user',
      component: user
    }
  ]
})
