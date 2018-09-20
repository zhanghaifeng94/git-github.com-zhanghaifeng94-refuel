import Vue from 'vue'
import Router from 'vue-router'

import index from 'components/index/index'
import user from 'components/user/user'
import store from 'components/store/store'
import refuel from 'components/refuel/refuel'
import sign_in from 'components/sign_in/sign_in'
import sign_up from 'components/sign_up/sign_up'

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
      component: index
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
    }

  ]
})
