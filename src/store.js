import Vue from 'vue'
import Vuex from 'vuex'
import home from './store/home'
import user from './store/user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    user
  },
  state: {
    loginState: '',
    list: [1, 2, 3, 4, 5],
    num: 0
  },
  getters: {
    len (state) {
      return state.list.length
    },
    getItemById: function (state) {
      return function (id) {
        //
      }
    }
  },
  mutations: {
    changeLoginState (state, data) {
      state.loginState = data
    },
    changeNum (state, payload) {
      state.num += payload.number
    }
  },
  actions: {
  }
})
