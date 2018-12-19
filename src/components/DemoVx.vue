<template>
  <div class="vuexbox">
    vuexdemo
    <!-- <button @click="minus(10)">-</button> -->
    <button @click="mincount(10)">-</button>
    <div class="cou">{{count}}</div>
    <!--(2) <button @click="increase(10)">+</button> -->
    <!--(1) <button @click="increase()">+</button> -->
    <button @click='addcount(10)'>+</button>
    <p>{{countTyoe}}</p>
  </div>
</template>

<script>
//解构赋值来的  vuex.mapstate
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed:{
//数字传递
    //①   ...mapState({
    //       count:state=>state.count
    //   }),
    //②  count(){
    //       return this.$store.state.count
    //   },
    ...mapState(['count']),
// 奇偶数
    //   countTyoe(){
    //       return this.$store.getters.countTyoe
    //   }
    ...mapGetters(['countTyoe'])
  },
  methods:{
      //加
           ...mapMutations(['addcount']),
    //(1)  increase(){
    //      //参数是提交到mutations的方法名
    //      this.$store.commit({type:'addcount',a:10,b:20})
    //  },

//(2) ...mapMutations({
//         increase:'addcount' //把this.inrease映射成 store.commit('addcount')
//       }),

     //减
            ...mapMutations(['mincount'])
    //  minus(){
    //      ①//this.$store.commit('mincount')
         
    //     ②//this.$store.dispatch('mincount',10)
    //  }
  }
}
</script>
<style lang="less" scoped>
.vuexbox{
    position: relative;
    button{
    width: 100px;
    height: 30px;
    line-height: 30px;
    margin: 0 10px;
    background-color: chocolate;
    }
}

.cou{
    display: inline-block;
    margin-top: 10px;

    font-size: 18px;
}

</style>
