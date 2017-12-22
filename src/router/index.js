import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import GameHall from 'components/game-hall/game-hall'
import Pay from 'components/pay/pay'
import User from 'components/user/user'
import IntergralMall from 'components/intergral-mall/intergral-mall'
import CustomerService from 'components/customer-service/customer-service'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/game-hall',
      component: GameHall
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/intergral-mall',
      component: IntergralMall
    },
    {
      path: '/customer-service',
      component: CustomerService
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})
