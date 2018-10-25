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
import evaluate from 'components/evaluate/evaluate'
import integrate_introduce from 'components/integrate_introduce/integrate_introduce'
import bill from 'components/bill/bill'
import setting from 'components/setting/setting'
import about from 'components/about/about'
import advice from 'components/advice/advice'
import personal from 'components/personal/personal'
import personal_msg from 'components/personal_msg/personal_msg'
import change_password from 'components/change_password/change_password'
import collect from 'components/collect/collect'
import customer_service from 'components/customer_service/customer_service'
import apply from 'components/apply/apply'
import reasons_return from 'components/reasons_return/reasons_return'
import return_record from 'components/return_record/return_record'
import schedule from 'components/schedule/schedule'
import apply_list from 'components/apply_list/apply_list'
import comment_list from 'components/comment_list/comment_list'
import quick_pay from 'components/quick_pay/quick_pay'
import nav_list from 'components/nav_list/nav_list'
import change_details from 'components/change_details/change_details'
import change_pay from 'components/change_pay/change_pay'
import recharge_detail from 'components/recharge_detail/recharge_detail'
import ads_list from 'components/ads_list/ads_list'
import ads_edit from 'components/ads_edit/ads_edit'
import map from 'components/map/map'
import cart from 'components/cart/cart'
import order_pay from 'components/order_pay/order_pay'



Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
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
      // meta: {
      //   requireAuth: true
      // }
    },
    {
      path: '/index/recharge_detail/:id',
      name: 'recharge_detail',
      component: recharge_detail,
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
      path: '/store/like/:type',
      name: 'like',
      component: like
    },
    {
      path: '/store/voucher_details/:id',
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
    },
    {
      path: '/user/integrate_introduce',
      name: 'integrate_introduce',
      component: integrate_introduce
    },
    {
      path: '/user/bill',
      name: 'bill',
      component: bill
    },
    {
      path: '/user/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/user/about',
      name: 'about',
      component: about
    },
    {
      path: '/user/advice',
      name: 'advice',
      component: advice
    },
    {
      path: '/user/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/user/personal_msg',
      name: 'personal_msg',
      component: personal_msg
    },
    {
      path: '/user/change_password/:id',
      name: 'change_password',
      component: change_password
    },
    {
      path: '/user/collect',
      name: 'collect',
      component: collect
    },
    {
      path: '/user/customer_service',
      name: 'customer_service',
      component: customer_service
    },
    {
      path: '/user/apply',
      name: 'apply',
      component: apply
    },
    {
      path: '/user/reasons_return',
      name: 'reasons_return',
      component: reasons_return
    },
    {
      path: '/user/return_record',
      name: 'return_record',
      component: return_record
    },
    {
      path: '/store/comment_list',
      name: 'comment_list',
      component: comment_list
    },
    {
      path: '/index/quick_pay',
      name: 'quick_pay',
      component: quick_pay
    },
    {
      path: '/store/nav_list/:type',
      name: 'nav_list',
      component: nav_list
    },
    {
      path: '/store/change_details/:id',
      name: 'change_details',
      component: change_details
    },
    {
      path: '/store/change_pay',
      name: 'change_pay',
      component: change_pay
    },
    {
      path: '/user/ads_list',
      name: 'ads_list',
      component: ads_list
    },
    {
      path: '/user/ads_edit/:id',
      name: 'ads_edit',
      component: ads_edit
    },
    {
      path: '/index/map',
      name: 'map',
      component: map,
    },
    {
      path: '/user/cart',
      name: 'cart',
      component: cart,
    },
    {
      path: '/user/order_pay',
      name: 'order_pay',
      component: order_pay,
    }
  ]
})
