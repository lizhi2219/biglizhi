import axios from 'axios'
// export会把当前模块的变量放在一个默认对象导出
//* as会把变量都放在一个有命名（例如：T）对象里面   as后面是对象名字 *表示所有的
// axios.defaults.baseURL = 'http://localhost:3000'
// axios拦截器
axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})
// 获取轮播
export let getBanner = () => {
// 返回promise
  return axios.get('/slider')
//   axios.get('http://localhost:3000/slider').then(data => {
//     console.log(data)
//   })
}
// 首页
export let getNew = () => {
  return axios.get('/new')
}
// 全部列表
export let getAll = () => {
  return axios.get('/all')
}
// 获取其中一个
export let getOne = (id) => {
  return axios.get(`/list?id=${id}`)
}
// 分页
export let getPage = (page) => {
  return axios.get(`/page?page=${page}`)
}
// home页所有数据获取完成,基于promiseall封装
export let getHome = () => {
  return axios.all([getBanner(), getNew()])
}
// 删除商品
export let deleteGood = (id) => {
  return axios.delete(`/list?id=${id}`)
}
// 修改商品  data是this.good
export let modifuGoof = (id, data) => {
  return axios.put(`/list?id=${id}`, data)
}
// 添加商品
export let addNew = (goodes) => {
  return axios.post('/list', goodes)
}
// axios.post({
//   url: '/list',
//   good: {
//     name: goodname
//   }
// })
