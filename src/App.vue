<template>
  <div id="app">
  	<transition name="fade">
   	 <router-view></router-view>
    </transition>
  </div>

</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped lang="less">
.fade-enter-active, .fade-leave-active  {
    transition: all 1s ease;
    position: absolute;
}
.fade-enter{
  opacity: 0;
  transform: translate3d(100%,0,0)
}
.fade-leave-active{
  opacity: 0;
    transform: translateY(-100%);
}
</style>