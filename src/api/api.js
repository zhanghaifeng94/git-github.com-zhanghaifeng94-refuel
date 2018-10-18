import * as API from './'

export default {
  index: params => {
    return API.POST('/api/index/getAllIndexParam')
  },
  getVcode: params => {
    return API.POST('/api/login/getVcode', params)
  },
  sign_up: params => {
    return API.POST('/api/login/register ', params)
  },
  sign_in: params => {
    return API.login('/api/login/login', params)
  },
  logout:  params => {
    return API.POST('/api/login/logout', params)
  },
  coupon: params => {

    return API.POST('/api/member/getCoupon', params)
  },
  user_info: params => {
    return API.POST('/api/member/getUserByBase64Id', params)
  },
  transactVIP: params => {
    return API.POST('/api/member/memberTransact', params)
  },
  pullCopon: params => {
    return API.POST('/api/member/pullCopon', params)
  },
  getCouponStatus: params =>{
    return API.POST('/api/member/getCouponStatus', params)
  },
  generate_order: params =>{
    return API.POST('/api/recharge/createRechargOrder', params)
  },
  recharge: params =>{
    return API.POST('/api/recharge/rechangeRechargOrder', params)
  },
  couponCode : params =>{
    return API.POST('/api/member/getCouponCode', params)
  },
  InvitationCouponCode : params =>{
    return API.POST('/api/member/InvitationCouponCode', params)
  },
  modifyUserInfo : (params, headers) =>{
    return API.POST('/api/setUp/modifyUserInfo', params, headers)
  },
}
