const getters = {
  checkall (state) {
    // console.log(state.foodlist.length)
    // 已经选中的商品的数量等于所有的商品的数量
    // hassel 已经选中的商品放到hassel的新数组
    // filter方法
    // let hassel = state.goodlist.filter(item => item.sele === true)
    // let checkval = hassel.length === state.goodlist.length
    // return checkval
    // every方法
    // state.goodlist.every(item => item.sele === true)
    return !(state.goodlist.some(item => item.sele === false))
  },
  allCount (state) {
    // 所有选中放进一个byuary
    let buyAry = state.goodlist.filter(item => item.sele === true)
    // 选中的进行求和
    return buyAry.reduce((prev, next) => prev + next.count, 0)
  },
  totalPrice (state) {
    let buyAry = state.goodlist.filter(item => item.sele === true)
    return buyAry.reduce((prev, next) => prev + next.count * next.price, 0)
  }
}
export default getters
