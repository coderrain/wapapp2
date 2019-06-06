<template>
        <div class="head">
            <div @click="back" class="back"><</div>
            <h3>商品详情</h3>
                <img @click="menuShow" src="../../assets/image/23.png">
            <div class="menu" v-show="menuIsActive">
                <ul>
                    <li>
                        <img src="../../assets/image/18.png">
                        <p><router-link :to="{path:'/my'}">我的</router-link></p>
                    </li>
                    <li>
                        <img src="../../assets/image/19.png">
                        <p><router-link :to="{path:'/order'}">全部订单</router-link></p>
                    </li>
                    <li>
                        <img src="../../assets/image/20.png">
                        <p><router-link :to="{path:'/shopcar'}">购物车</router-link></p>
                    </li>
                    <li>
                        <img src="../../assets/image/21.png">
                        <p>我的消息</p>
                    </li>
                    <li>
                        <img src="../../assets/image/21.png">
                         <p class="bor"><router-link :to="{path:'/search'}">跳转search</router-link></p>
                    </li>
                </ul>
            </div>  
        </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
                menuIsActive:false
            } 
        },
        methods:{
            menuShow:function(){
                this.menuIsActive = !this.menuIsActive
            },
            back(){
                history.back()
            }
        }
    }
</script>

<style scoped lang="less">
.head{
    z-index:100;
    margin-top:0.3rem;
    position: relative;
    width:100%;
    height:0.35rem;
    .back{
        font-size:0.36rem;
        color:black;
        float:left;
        line-height:0.36rem;
        margin-left:0.28rem;
        font-weight:700;
    }
    h3{
        text-align: center;
        margin-left:2.9rem;
        font-size:0.32rem;
        float:left;
    }
    img{
        width:0.42rem;
        height:0.39rem;
        float:right;
        margin-right:0.3rem;
    }
    a{
        color:#fff;
    }
}       
.menu{
    margin-top:0.5rem;
    position: absolute;
    right: .28rem;
    width:3.2rem;
    background: #3e3e3e;
    border-radius:0.08rem;
    li{
       width:3.16rem;
       height:1.08rem;
       font-size: .36rem;
       color: #fff;
       p{
        margin-top:0.33rem;
        float:left;
        margin-left:0.38rem;
        border-bottom: 1px solid #ccc;
        padding-bottom:0.30rem;
        width:2rem;
        }
        .bor{
            border:0;
        }
        img{
           float:left;
           margin-left:0.1rem;
           margin-top:0.33rem;
           width:0.38rem;
           height:0.48rem;
           }
           a{
            color:#fff;
           }
        }
    }

</style>