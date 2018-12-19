<template>
  <div class='contents'  ref="scroll" @scroll="sload">
    <MHeader ref="mheader">列表</MHeader>
    <div>
      <ul>
      <router-link  v-for="(item,index) in Alist" :key="index" tag="li" :to="{name:'detail',params:{id:item.id}}">
        <!-- <li v-for="(item,index) in Alist" :key="index"> -->
        <li>
          <img :src="item.img" alt="" class='goodimg'>
        <!-- 懒加载 -->
          <!-- <img v-lazy="item.img"  alt="" class='goodimg'> -->
          <p>水果：{{item.name}}<br>价格：{{item.price}}/斤</p>
        </li>
        <div class="btngroup">
          <button @click.stop="addCar(item)">添加</button>
          <button @click.stop="dele(item.id)">删除</button>
        </div>
        </router-link>
      </ul>
      <div class="center_block">
        <button @click="loadMore">{{hasmoretext}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import MHeader from '../base/MHearder'
import {getPage,deleteGood} from '../api'
import { setTimeout, clearInterval } from 'timers';
import * as Types from '../store/mutations-type'
export default {
  data () {
    return { 
      page:1,
      Alist:[],
      hasmore:true,
      hasmoretext:'点击加载更多'
    }
  },
  created() {
    this.getA();
  },
  components:{
      MHeader
    },
   methods:{
     //添加商品到购物车
    addCar(good){
      // good.sele=false;
      this.$store.commit({type:Types.ADD_CAR,good})
    },
     //删除商品
   async dele(deId){
     await deleteGood(deId)
     this.Alist=this.Alist.filter(item=>item.id!==deId)
      //dele(index) this.Alist.splice(index,1)方法一 --@click.stop="dele(index)
      //dele(deId)  this.Alist=this.Alist.filter(item=>item.id!==deId) --@click.stop="dele(item.id)
    },
      //滚动事件
      sload(){
        clearTimeout(this.timer)
        this.timer=setTimeout(()=>{
          //解构赋值
          let {scrollTop,clientHeight,scrollHeight}=this.$refs.scroll;
          // let scrollTop=this.$refs.scroll.scrollTop;
          // let clientHeight=this.$refs.scroll.scroll.clientHeight;
          // let scrollHeight=this.$refs.scroll.scroll.scrollHeight;
          // console.log(scrollTop,clientHeight,scrollHeight)
          if(clientHeight+scrollTop+20>scrollHeight){
            // alert('到底吧')
            this.loadMore();
          }
        },13)
      },
     //获取分页数据
    async getA(){
      let {data:Alist,hasmore}=await getPage(this.page);
      //合并已经拿到的数据和新情求的数据
      this.Alist=[...this.Alist,...Alist]//地址变了？？es6 
      //this.Alist=this.Alinst.concat(Alist)es5原数组？？
      // console.log(Alist)
      this.hasmore=hasmore;
      if(!hasmore){
        //如果this.hasmore为false是没有下一页
          this.hasmoretext='没有更多了'
        }
      },
      loadMore(){
        if(this.hasmore){
          this.page+=1;
          this.getA()
        }
      }
    }
}
</script>
<style scoped lang="less">
.center_block{
  text-align: center;
}
.btngroup{
  display: flex;
  button{
    width: 100px;
    height: 30px;
    line-height: 30px;
    margin: 0 10px;
    background-color: chocolate;
    

  }
}
button{
  display: inline-block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  outline: none;
  border:none;
  -webkit-appearance: none;
  background-color: aquamarine;
  border-radius: 5px;
}
.contents{
    width:100%;
    position:fixed;
    bottom:50px;
    top:30px; 
    overflow:scroll;    
}
li{
  width: 100%;
  margin:10px 0;
  display:flex;
  align-items: center;
  justify-content:space-around;
  border-bottom:1px solid #e3e3e3;

}
  .goodimg{
    width:30%;
    height: 70%;
    border-radius: 5px;
    margin-left: 50px;
    margin-bottom: 20px;
  }
</style>