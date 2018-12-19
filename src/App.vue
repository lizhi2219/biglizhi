<template>
  <div id="app">
    <!-- <transition name="fade" mode="out-in"> -->
  <keep-alive>
    <!-- {{$route.meta.keep-alive}} -->
    <router-view v-if="$route.meta.keepAlive"/>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"/>
    <Tab></Tab>
    <!-- </transition> -->
  </div>
</template>

<script>
import Tab from './base/Tab'  
export default {
  name:'APP',
  components:{
    Tab
  }
}

</script>

<style>
*{
  margin:0;
  padding:0;
}
ul,li{
  list-style:none;
}
a{
  color: #666;
  text-decoration: none;
}
.fade-enter-active, .fade-leave-active{
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to{
		opacity: 0;
	}
	.fade-enter-to, .fade-leave{
		opacity: 1;
	}

</style>
