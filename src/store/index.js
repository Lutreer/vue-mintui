import Vue from 'vue'
import Vuex from 'vuex'
import * as TYPES from './mutation-type'

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: true,
  state: {
    header: {
      title: "首页"
    }
  },
  getters: {
    getTitle: (state, getters) => state.header.title
  },
  mutations: {
    [TYPES.COMMON.SET_HEADER](state, header) {
      state.header = Object.assign(state.header, header)
    },
  },
  actions: {
    setHeader({ commit }, header){
      debugger
      commit(TYPES.COMMON.SET_HEADER, header)
    }
  },
  modules: {
  }

})
export default store
