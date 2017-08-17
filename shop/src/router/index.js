import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import GoodsList from '@/view/GoodsList'
import cart from '@/view/Cart'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'goodsList',
      component: GoodsList
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
