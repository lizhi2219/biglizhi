import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/home', component: () => import('../components/Home'), meta: {keepAlive: true}},
    {path: '/car', component: () => import('../components/Car')},
    {path: '/list', component: () => import('../components/List')},
    {path: '/my', component: () => import('../components/My')},
    {path: '/detail/:id', component: () => import('../components/Detail'), name: 'detail'},
    {path: '/demo', component: () => import('../components/DemoVx')},
    {path: '/*', redirect: '/home'}
  ]
})
