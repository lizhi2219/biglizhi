<template>
  <div class="header">
      <i v-if="showArrow"  @click="goBack" class="iconfont icon-fanhui"></i>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props:{
        showArrow:{
            type:Boolean,
            default:false
        }
    },
  data () {
    return {
    }
  },
  methods:{
      goBack(){
          this.$router.go(-1)
      }
  }
}
</script>
<style scoped lang='less'>
.header{
    width: 100%;
    height: 40px;
    position:fixed;
    line-height: 40px;
    text-align: center;
    background: rgb(127, 158, 245);
    top:0;
    z-index:10;
}
.iconfont{
    position:absolute;
    left:10px;
}
</style>