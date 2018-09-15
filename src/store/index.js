import Vue from 'vue'
import Vuex from 'vuex'
import * as TYPES from './mutation-type'

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: true,
  state: {
    header: {
      title: ""
    },
    tab:""
  },
  getters: {
    getTitle: (state, getters) => state.header.title,
  },
  mutations: {
    [TYPES.COMMON.SET_HEADER](state, header) {
      state.header = Object.assign(state.header, header)
    },
    [TYPES.COMMON.SET_TAB](state, tab) {
      state.tab = tab
    },
  },
  actions: {
    setHeader({ commit }, header){
      commit(TYPES.COMMON.SET_HEADER, header)
    }
  },
  modules: {
  }

})
export default store
