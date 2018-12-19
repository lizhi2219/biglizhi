<template>
  <div class='cont'>
  
  <MHeader :showArrow=true>详情页</MHeader>
     <div class="de_lab">
         <!-- {{this.good}} -->
        <label for="">
        名称：
        <input type="text" v-model="good.name">
        价格：
        <input type="text" v-model="good.price">
        图片：
        <input type="text" v-model="good.img">
        </label>
    </div>
    <div class="btnbox">
        <button @click="update">确认修改</button>
        <button @click="addGoog">添加</button>
    </div>
  </div>
</template>

<script>
import MHeader from '../base/MHearder'
import {getOne,modifuGoof,addNew} from '../api'
export default {
  name:'detail',
  data () {
    return {
        good:{}
    }
  },
  created() {
        this.getGood();
    },
    
  components:{
    MHeader
  },
    computed:{
      gid(){
          return this.$route.params.id
      }
  },
  methods:{
      //添加
    async addGoog(){
    //   console.log(this.good)
       await addNew(this.good)
    //    this.$router.push('/list')
     },
      //修改
    async  update(){
        await modifuGoof(this.gid,this.good)
          console.log(this.gid)
        this.$router.push('/list')
      },
    async getGood(){
          let good=await getOne(this.gid);
          this.good=good;
        //   console.log(this.gid)
      }
  }
//   mounted() {
//      this.gid=this.$route.params.id
//   },
}
</script>
<style scoped lang="less">
.btnbox{
    position: relative;
    top:80px;
    text-align: center;
    button{
        display: inline-block;
        width: 200px;
        height: 40px;
        background:rgb(252, 252, 45);
        border-radius:10px;
    }
}
.cont{
    position:absolute;
    font-size:20px;
}
label{
    display:block;
    width:80%;
    margin:60px auto;
}
.de_lab input{
    width:80%;
    display:block;
    margin:0 auto; 
    outline: none;
}
</style>