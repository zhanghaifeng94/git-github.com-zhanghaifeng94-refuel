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
  coupon: params => {
    return API.POST('/api/member/getCoupon', params)
  }

}
