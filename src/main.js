// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

// import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543912633202&di=35e24c2532a018f393f6330ee321373b&imgtype=0&src=http%3A%2F%2Fimg1.sc115.com%2Fuploads%2Fsc%2Fjpg%2FHD%2F33%2F3979.jpg',
//   loading: 'http://img.zcool.cn/community/01ae565972f1eaa8012193a3f58f8a.gif',
//   attempt: 1
// })

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
