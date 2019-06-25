import axios from 'axios'
// const baseUrl = 'http://www.daxunxun.com'
export default {
  state: {
    bannerlist: [],
    chooselist: [],
    chooselist2: [],
    zixunlist: [],
    zhanweilist: [],
    zhanweilist1: [],
    zhanweilist2: [],
    xianshilist: [],
    zuohualist: [],
    huodonglist: [],
    piclist: [],
    productlist: []
  },
  actions: {
    getHomeBannerList ({ commit }) {
      axios.get('/api/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D').then(res => {
        console.log(res.data.data.carousel)
        commit('changeHomeBannerList', {
          data: res.data.data.carousel
        })
      })
    },
    getHomeChooseList ({ commit }) {
      axios.get('/api/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D').then(res => {
        console.log(res.data.data.recommendedContent[0].items)
        commit('changeHomeChooseList', {
          data: res.data.data.recommendedContent[0].items
        })
      })
    },
    getHomeChooseList2 ({ commit }) {
      axios.get('/api/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D').then(res => {
        console.log(res.data.data.recommendedContent[1].items)
        commit('changeHomeChooseList2', {
          data: res.data.data.recommendedContent[1].items
        })
      })
    },
    getZixunList ({ commit }) {
      axios.get('/api/api/app/acts?version=20.0.0&source=H').then(res => {
        console.log(res.data.data.acts[0].items)
        commit('changeZixunList', {
          data: res.data.data.acts[0].items
        })
      })
    },
    getZhanweiList ({ commit }) {
      axios.get('/api/api/app/acts?version=20.0.0&source=H').then(res => {
        console.log(res.data.data.acts[1].items)
        commit('changeZhanweiList', {
          data: res.data.data.acts[1].items
        })
      })
    },
    getZhanweiList1 ({ commit }) {
      axios.get('/api/api/app/acts?version=20.0.0&source=H').then(res => {
        console.log(res.data.data.acts[4].items)
        commit('changeZhanweiList1', {
          data: res.data.data.acts[4].items
        })
      })
    },
    getZhanweiList2 ({ commit }) {
      axios.get('/api/api/app/acts?version=20.0.0&source=H').then(res => {
        console.log(res.data.data.acts[5].items)
        commit('changeZhanweiList2', {
          data: res.data.data.acts[5].items
        })
      })
    },
    getXianshiList ({ commit }) {
      axios.get('/api/api/app/acts?version=20.0.0&source=H').then(res => {
        console.log(res.data.data.acts[2].items)
        commit('changeXianshiList', {
          data: res.data.data.acts[2].items
        })
      })
    },
    getZuohuaList ({ commit }) {
      axios.get('/api/api/app/acts?version=20.0.0&source=H').then(res => {
        console.log(res.data.data.acts[3].items)
        commit('changeZuohuaList', {
          data: res.data.data.acts[3].items
        })
      })
    },
    getHuodongList ({ commit }) {
      axios.get('/api/api/app/acts?version=20.0.0&source=H').then(res => {
        console.log(res.data.data.acts[6].items)
        commit('changeHuodongList', {
          data: res.data.data.acts[6].items
        })
      })
    },
    getPicList ({ commit }) {
      axios.get('/api/api/app/acts?version=20.0.0&source=H').then(res => {
        console.log(res.data.data.acts[9].items)
        commit('changePicList', {
          data: res.data.data.acts[9].items
        })
      })
    },
    getProductList ({ commit }) {
      axios.get('/api/api/app/acts?version=20.0.0&source=H').then(res => {
        console.log('getProductList', res.data.data.acts[10].items)
        commit('changeProductList', {
          data: res.data.data.acts[10].items
        })
      })
    }
  },
  mutations: {
    changeHomeBannerList (state, payload) {
      state.bannerlist = payload.data
    },
    changeHomeChooseList (state, payload) {
      state.chooselist = payload.data
    },
    changeHomeChooseList2 (state, payload) {
      state.chooselist2 = payload.data
    },
    changeZixunList (state, payload) {
      state.zixunlist = payload.data
    },
    changeZhanweiList (state, payload) {
      state.zhanweilist = payload.data
    },
    changeZhanweiList1 (state, payload) {
      state.zhanweilist1 = payload.data
    },
    changeZhanweiList2 (state, payload) {
      state.zhanweilist2 = payload.data
    },
    changeXianshiList (state, payload) {
      state.xianshilist = payload.data
    },
    changeZuohuaList (state, payload) {
      state.zuohualist = payload.data
    },
    changeHuodongList (state, payload) {
      state.huodonglist = payload.data
    },
    changePicList (state, payload) {
      state.piclist = payload.data
    },
    changeProductList (state, payload) {
      state.productlist = payload.data
    }
  }
}
