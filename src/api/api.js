import * as API from './'

export default {
  index: params => {
    return API.POST('/api/index/getAllIndexParam')
  },
}
