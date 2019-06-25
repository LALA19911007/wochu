export default {
  state: {
    loginState: ''
  },
  mutations: {
    changeLoginState (state, data) {
      state.loginState = data
    }
  }
}
