import * as API from './'

export default {
  banner: params => {
    return API.GET('/api/v1/admin/banner/firstPageBannerType/' + params)
  },
}
