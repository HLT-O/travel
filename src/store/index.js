import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    winWidth:document.documentElement.clientWidth
  },
  getters:{
    cellphone(state) {
      return state.winWidth < 420 ? true : false;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
