import * as Types from './mutations-type'
import Vue from 'vue'
const mutations = {
  [Types.ADD_CAR] (state, param) {
    // console.log(param.good)
    let good = param.good
    Vue.set(good, 'sele', true)
    // 解构赋值[type:Types.ADD_CAR,good]
    let production = state.goodlist.find(item => item.id === good.id)
    if (production) {
      production.count += 1
      console.log(production.count)
      // 在vuex中 state必须手动更新，他是单向数据流
      state.goodlist = [...state.goodlist]
    } else {
      good.count = 1
      state.goodlist = [...state.goodlist, good]
      localStorage['list'] = JSON.stringify(state.goodlist)
    }
  },
  // 单选事件
  change (state, good) {
    let prod = state.goodlist.find(item => item.id === good.id)
    prod.sele = good.sele
    state.goodlist = [...state.goodlist]
  },
  changeall (state, val) {
    state.goodlist.forEach(item => item.sele = val)
    state.goodlist = [...state.goodlist]
  },
  delcount (state, param) {
    param.count -= 1
    if(param.count==0){
      param.count=1
    }
  },
  addcount (state, param) {
    param.count += 1
  }
}
export default mutations
