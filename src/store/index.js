import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftAsideCollapse: false,
    store_userInfo: {}
  },
  mutations: {
    changeLeftAsideCollapse (state) {
      state.leftAsideCollapse = !state.leftAsideCollapse
    },
    store_changeUserInfo (state, info) {
      state.userInfo = info
    }
  },
  actions: {
  },
  modules: {
  }
})
