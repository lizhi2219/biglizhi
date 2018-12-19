<template>
  <div class='homebox'>
    <MHeader >首页</MHeader>
    <Loading v-if="load"></Loading>
    <template v-else>
    <Swiper :swiperSlides="slider"></Swiper>
    <div>
      <ul>
        <li v-for="(newIte,index) in list" :key="index">
          <img :src="newIte.img" alt="" class='goodimg'>
          <p>{{newIte.name}}</p>
        </li>
      </ul>
    </div>
    </template>
  </div>
</template>

<script>
import MHeader from '../base/MHearder'
import Swiper from '../base/Swiper'
import Loading from '../base/loading'
import {getBanner} from '../api'
import {getNew} from '../api'
import {getHome} from '../api'
  export default {
    data () {
    return {
      slider:[],
      list:[],
      load:true
    }
  },
   created(){
      // let slider=await getBanner();
      // this.slider=slider;
      // console.log(this.slider);
      // let list=await getNew();
      // this.list=list;
      // this.getImgList();
      // this.getNewList();
      this.getHomeList();
      }, 
  components:{
    MHeader:MHeader,
    Swiper:Swiper,
    Loading
  },
  methods:{
  async  getImgList(){
      let slider=await getBanner();
      this.slider=slider;
    },
  async getNewList(){
    let list=await getNew();
      this.list=list;
    },
  async getHomeList(){
      [this.slider,this.list]=await getHome()
      this.load=false
    }
  }
}
</script>
<style scoped lang="less">
  // *{
  //   margin:0;
  //   padding:0;
  // }
  // .goodimg{
  //   width:95%;
  //   margin-left:20px;
  // }
  // .homebox{
  //   padding-left:5px;
  //   position:relative;
  //   // top:40px; 
  //   margin-bottom:80px;
  //   z-index:5;
  // }
  // ul{
  //   display:flex;
  //   flex-wrap:wrap;
  // }
  // li{
  //   width:50%;
  // }
</style>