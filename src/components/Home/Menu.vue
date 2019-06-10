<template>
    <div class="menu">
      <div class="nav">
        <ul>
            <li v-for="item in shopList">
                <div>
                    <img :src="item.url">
                    <p>{{ item.name }}</p>
                </div>
            </li>
        </ul>
      </div>

    </div>
</template>

<script>

    export default {
        name: "Menu",
        props:['shopList'],
        computed: {
            menuList(){
                return this.$store.state.home.list
            }
        },
        created(){
           // this.$store.commit('home/getMenuFn')
        }
    }
</script>

<style scoped lang="less">
.nav{
    height:3.82rem;
    li{
        float:left;
        width:1.87rem;
        img{
            width:0.9rem;
            height:0.9rem;
            margin-left:0.5rem;
            margin-top:0.34rem;
        }
        p{
            margin-top:0.16rem;
            text-align:center;
            font-size:0.2rem;
            color:#353535;
        }
    }
}


</style>