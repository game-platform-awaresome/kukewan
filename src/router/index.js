import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import GameHall from 'components/game-hall/game-hall'
import GameServerList from 'components/game-hall/game-server-list'
import Pay from 'components/pay/pay'
import User from 'components/user/user'
import IntergralMall from 'components/intergral-mall/intergral-mall'
import IntergralList from 'components/intergral-mall/intergral-list'
import IntergralDetail from 'components/intergral-mall/intergral-detail'
import CustomerService from 'components/customer-service/customer-service'
import Login from 'components/login/login'
import Register from 'components/register/register'
import AccountRegister from 'components/register/account-register'
import PhoneRegister from 'components/register/phone-register'

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
      path: '/game-hall/list',
      component: GameServerList
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
      path: '/intergral-mall/list',
      component: IntergralList
    },
    {
      path: '/intergral-mall/list/:gift_id',
      component: IntergralDetail
    },
    {
      path: '/customer-service',
      component: CustomerService
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register,
      redirect: '/register/account-register',
      children: [
        {
          path: '/register/account-register',
          component: AccountRegister
        },
        {
          path: '/register/phone-register',
          component: PhoneRegister
        }
      ]
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})
