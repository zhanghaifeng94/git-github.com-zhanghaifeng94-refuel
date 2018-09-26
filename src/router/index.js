import Vue from 'vue'
import Router from 'vue-router'

import index from 'components/index/index'
import user from 'components/user/user'
import store from 'components/store/store'
import refuel from 'components/refuel/refuel'
import sign_in from 'components/sign_in/sign_in'
import sign_up from 'components/sign_up/sign_up'
import recharge from 'components/recharge/recharge'
import queryVIP from 'components/queryVIP/queryVIP'
import msg from 'components/msg/msg'
import coupon from 'components/coupon/coupon'
import recharge_record from 'components/recharge_record/recharge_record'
import change_station from 'components/change_station/change_station'
import pay from 'components/pay/pay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: []
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/refuel',
      name: 'refuel',
      component: refuel
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: sign_in
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: sign_up
    },
    {
      path: '/index/recharge',
      name: 'recharge',
      component: recharge,
    },
    {
      path: '/index/queryVIP',
      name: 'queryVIP',
      component: queryVIP,
    },
    {
      path: '/msg',
      name: 'msg',
      component: msg,
    },
    {
      path: '/index/coupon',
      name: 'coupon',
      component: coupon,
    },
    {
      path: '/recharge_record',
      name: 'recharge_record',
      component: recharge_record,
    },
    {
      path: '/change_station',
      name: 'change_station',
      component: change_station,
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay,
    }
  ]
})
