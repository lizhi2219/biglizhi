<template>
  <div class="carbig">
    <div>
      <label for="checkallA"  class="flexstart">
        <input type="checkbox" v-model="checkallA">
        <span>全选</span>
      </label>
    </div>
    <ul class="carlist">
      <li v-for="(item,index) in goodlist" :key="index">
        <label for="check" class="check_box">
          <input type="checkbox" v-model="item.sele" @change="chengeone(item)">
            {{item.sele}}
        </label>
          <img :src="item.img" alt="" class="carimg">
          <div>
            <p>水果：{{item.name}}</p>
            <p>价格：{{item.price}}</p>
            <p>介绍：{{item.info}}</p>
            <div>数量：<button @click='jian(item)'>-</button>
              {{item.count}}<button @click='increase(item)'>+</button></div>
              
          </div>
      </li>
      <div>总数量：{{allCount}}
        总价格：￥{{totalPrice}}
      </div>
    </ul>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  data () {
    return {
       
    }
  },
  computed:{
    checkallA:{
       get(){
         return this.$store.getters.checkall
       }, 
       set(val){
          this.$store.commit('checkall',val)
          // this.checkall(val) computed生命周期靠前不可用
          // this.$store.commit({type:'checkall',val})
       }
    },
    ...mapGetters(['checkall','allCount','totalPrice']),
    ...mapState(['goodlist'])
  },
  methods:{
    chengeone(item){
      this.$store.commit('change',item)
    },
    increase(creagood){
      this.$store.commit('addcount',creagood)
    },
    jian(delgood){
      this.$store.commit('delcount',delgood)
    }
  }
}
</script>
<style scoped lang="less">
.carbig{
  position:fixed;
  width: 100%;
  top:20px; 
  bottom: 50px;
  overflow: scroll;
}
.flexstart{
   input{
    margin:0 10px;
    -webkit-appearance:none;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid  #e3e3e3;
    border-radius: 5px;
    outline: none;
   }
   input:checked:before{
    content: '';
     display: inline-block;
     border: 1px solid green;
     border-top-width: 0;
     border-right-width: 0; 
     width: 12px;
     height: 8px;
     transform: rotate(-50deg);
     position:relative;
     left: 2px;
   }
}
.check_box{
  display: flex;
  justify-content:center;
  align-items: center;
  margin: 0 20px;
  input{
    -webkit-appearance:none;
   display: block;
   width: 24px;
   height: 24px;
   border: 1px solid #d3d0d0;
   border-radius: 5px;
   outline: none;
  }
  input:checked:before{
     content: '';
    display: inline-block;
    border: 4px solid green;
    border-top-width: 0;
    border-right-width: 0; 
    width: 18px;
    height: 10px;
    transform: rotate(-50deg);
  }
}
.carimg{
width: 250px;
    height: 175px;
    border-radius: 5px;
    margin: 10px 20px;
}
.carlist{
  display: flex;
  flex-direction: column;
  li{
    display: flex;
  }
}
</style>
