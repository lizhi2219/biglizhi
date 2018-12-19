# mystart

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

###跨域
首先在项目的config文件夹中，找到index。js，你会看到，proxytable:{}
proxyTable:{
　 '/':{
    #把 发送到target 域名下的请求都代理到 '/' 下 
　　target:'http://localhot:3000',  
    //是否改变域名
    changeOrigin:true,
    //路径代理
    pathRewrite:{
    # 把发送到api的请求都代理到 　　target域下 
        '^/api':'/'   
    }
　　}
}
去dev.env.js设置：
module.exports = merge(prodEnv, {  
 NODE_ENV: '"development"',//开发环境 
 API_HOST:"/api/"
})
dev.env.js设置完毕后，需要重新启动项目，然后就可以调用你设置的域名的数据接口了

辅助工具类 是由于通过辅助函数拿到的
所有通过辅助函数拿到的无论值还是方法，都会挂载在实例（this）上面


commit传参：
1 this.$store.commit/dispatch('checkall',val) 须结合...mapMutations/mapActions(['checkall'])
2 this.checkall(val)
3 this.$store.commit({type:'checkall',val})

//如果是双向绑定的值使用vuex，一般通过设置值的get和set，或者用监听事件的形式来实现值参考https://vuex.vuejs.org/zh/guide/forms.html?tdsourcetag=s_pcqq_aiomsg


两种本地存储方式：
localStorage能够长期保存
    localStorage.setItem(key,value)
    localStorage.getItem(key)
    localStorage.removeItem(key)移除指定
    localStorage.clear()移除所有


sessionStorage在会话期间保存，关闭会话就会清除

组件的computed和vuex的getters每一个值必须加return才能返回
1、同域名下不需要defaults.baseURL
2、路由改成history
mode:'history'
//你要在服务器端增加一个覆盖所有情况的候选资源：如果url匹配不到任何静态资源，则应该返回同一个index.html页面，整个页面就是你app依赖的页面
npm install http-server -g
打开的文件夹直接运行http-server
