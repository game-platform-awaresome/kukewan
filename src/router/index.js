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
import NewsList from 'components/news-list/news-list'
import NewsDetail from 'components/news-detail/news-detail'
import Forgot from 'components/forgot/forgot'

import MyAccount from 'components/user/user-page/my-account'
import Edit from 'components/user/user-page/edit'
import ModifyPassword from 'components/user/user-page/modify-password'
import AccountSecurity from 'components/user/user-page/account-security'
import RealName from 'components/user/user-page/real-name'
import PayHistory from 'components/user/user-page/pay-history'
import IntergralHistory from 'components/user/user-page/intergral-history'
import NewHandHistory from 'components/user/user-page/new-hand-history'

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
      path: '/game-hall/:gid',
      component: GameServerList
    },
    {
      path: '/pay',
      component: Pay
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
    },
    {
      path: '/news-list',
      component: NewsList
    },
    {
      path: '/news-detail/:article_id',
      component: NewsDetail
    },
    {
      path: '/forgot',
      component: Forgot
    },
    {
      path: '/user',
      component: User,
      redirect: '/user/my-account',
      children: [{
        path: 'my-account',
        component: MyAccount
      },
      {
        path: 'edit',
        component: Edit
      },
      {
        path: 'modify-password',
        component: ModifyPassword
      },
      {
        path: 'account-security',
        component: AccountSecurity
      },
      {
        path: 'real-name',
        component: RealName
      },
      {
        path: 'pay-history',
        component: PayHistory
      },
      {
        path: 'intergral-history',
        component: IntergralHistory
      },
      {
        path: 'new-hand-history',
        component: NewHandHistory
      }]
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})
