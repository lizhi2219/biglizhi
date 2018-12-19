<template>
  <div class="footer">
    <router-link to="/home">
        <i class="iconfont icon-yemian-copy-copy"></i>
        <span>首页</span>
    </router-link>
    <router-link to="/list">
        <i class="iconfont icon-chazhaobiaodanliebiao"></i>
        <span>列表页</span>
    </router-link>
    <router-link to="/car">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span></router-link>
    <router-link to="/my">
        <i class="iconfont icon-wodedangxuan"></i>
        <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
    
  data () {
    return {
     
    }
  }
}
</script>
<style scoped lang='less'>
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #e3e3e3;
    z-index:6;
    background:pink;
    a{
        flex: 1;
        text-align:center;
    }
    a.router-link-active{
        color: rgb(127, 158, 245);
    }
}
</style>
