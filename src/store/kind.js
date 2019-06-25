import axios from 'axios'
// const baseUrl = 'http://www.daxunxun.com'
export default {
  state: {
    bannerlist: []
  },
  actions: {
    getHomeBannerList ({ commit }) {
      axios.get('http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D').then(res => {
        console.log(res.data.data.carousel)
        commit('changeHomeBannerList', {
          data: res.data.data.carousel
        })
      })
    }
  },
  mutations: {
    changeHomeBannerList (state, payload) {
      state.bannerlist = payload.data
    }
  }
}
