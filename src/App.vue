<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  created(){
    this.$axios('/?afdfds').then(response=>{
      console.log(response)
    }).catch(error=>{
      console.log(error)
    })
  }
}
</script>

<style>
</style>
