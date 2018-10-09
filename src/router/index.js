import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index/index'
import user from 'components/user/user'
import store from 'components/store/store'
import refuel from 'components/refuel/refuel'
import signIn from 'components/sign_in/sign_in'
import signUp from 'components/sign_up/sign_up'
import recharge from 'components/recharge/recharge'
import queryVIP from 'components/queryVIP/queryVIP'
import msg from 'components/msg/msg'
import coupon from 'components/coupon/coupon'
import recharge_record from 'components/recharge_record/recharge_record'
import change_station from 'components/change_station/change_station'
import pay from 'components/pay/pay'
import transactVIP from 'components/transactVIP/transactVIP'
import help from 'components/help/help'
import service from 'components/service/service'
import recharge_progress from 'components/recharge_progress/recharge_progress'
import retrieve from 'components/retrievePassword/retrievePassword'
import search from 'components/search/search'
import selection from 'components/selection/selection'
import commodity from 'components/commodity/commodity'
import selection_detail from 'components/selection_detail/selection_detail'
import members from 'components/members/members'
import details from 'components/details/details'
import like from 'components/like/like'
import voucher_details from 'components/voucher_details/voucher_details'
import invite from 'components/invite/invite'
import coupon_codes from 'components/coupon_codes/coupon_codes'
import order from 'components/order/order'
import order_details from 'components/order_details/order_details'
import rule from 'components/rule/rule'
import share_details from 'components/share_details/share_details'
import integrate from 'components/integrate/integrate'

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
      name: 'signIn',
      component: signIn
    },
    {
      path: '/sign_up',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/index/recharge',
      name: 'recharge',
      component: recharge,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/index/queryVIP',
      name: 'queryVIP',
      component: queryVIP,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/index/msg',
      name: 'msg',
      component: msg,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/index/coupon',
      name: 'coupon',
      component: coupon,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/index/recharge_record',
      name: 'recharge_record',
      component: recharge_record
    },
    {
      path: '/refuel/change_station',
      name: 'change_station',
      component: change_station
    },
    {
      path: '/refuel/pay',
      name: 'pay',
      component: pay
    },
    {
      path: '/index/recharge_progress',
      name: 'recharge_progress',
      component: recharge_progress
    },
    {
      path: '/index/transactVIP',
      name: 'transactVIP',
      component: transactVIP
    },
    {
      path: '/index/help',
      name: 'help',
      component: help
    },
    {
      path: '/index/service',
      name: 'service',
      component: service
    },
    {
      path: '/retrievePassword',
      name: 'retrieve',
      component: retrieve
    },
    {
      path: '/store/search',
      name: 'search',
      component: search
    },
    {
      path: '/store/selection',
      name: 'selection',
      component: selection
    },
    {
      path: '/store/commodity',
      name: 'commodity',
      component: commodity
    },
    {
      path: '/store/selection_detail',
      name: 'selection_detail',
      component: selection_detail
    },
    {
      path: '/store/members',
      name: 'members',
      component: members
    },
    {
      path: '/store/details/:id',
      name: 'details',
      component: details
    },
    {
      path: '/store/like',
      name: 'like',
      component: like
    },
    {
      path: '/store/voucher_details',
      name: 'voucher_details',
      component: voucher_details
    },
    {
      path: '/user/invite',
      name: 'invite',
      component: invite
    },
    {
      path: '/user/coupon_codes',
      name: 'coupon_codes',
      component: coupon_codes         
    },
    {
      path: '/user/order/:type',
      name: 'order',
      component: order
    },
    {
      path: '/user/order_details/:id',
      name: 'order_details',
      component: order_details
    },
    {
      path: '/user/rule',
      name: 'rule',
      component: rule
    },
    {
      path: '/user/share_details',
      name: 'share_details',
      component: share_details
    },
    {
      path: '/user/integrate',
      name: 'integrate',
      component: integrate
    }
  ]
})