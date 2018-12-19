import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
const state = {
  goodlist: [], // 购物车列表
  checkAll: true
}
if (localStorage && localStorage['list']) {
  state.goodlist = JSON.parse(localStorage['list'])
}
export default new Vuex.Store({
  // strict: true,
  state,
  mutations,
  getters,
  plugins: [logger()]
  //   actions: {
  //     mincount ({commit}, param) {
  //       commit('mincount', param)
  //     }
  //     // mincount (stroe, param) {
  //     //     stroe.commit('mincount', param)
  //     //   }
  //   },
  // mutations: {
  //   addcount (state, param) {
  //     state.count += param
  //   },
  //   mincount (state, param) {
  //     state.count -= param
  //   }
  // },
})
