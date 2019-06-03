<template>
    <div class="h_header">
        <div class="left ico_common">
            <span><router-link :to="{path:'/search'}">分类</router-link></span>
        </div>
        <h1>优鞋库</h1>
        <div class="right ico_common" @click="menuShow"></div>
        <div class="menu" v-show="menuIsActive">
            <ul>
                <li>我的</li>
                <li>全部订单</li>
                <li>购物车</li>
                <li>我的消息</li>
                <li><router-link :to="{path:'/search'}">跳转search</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hheader",
        data(){
            return {
                menuIsActive: false
            }
        },
        methods: {
            menuShow(){
                this.menuIsActive = !this.menuIsActive
            }
        }
    }
</script>

<style scoped lang="less">
    .h_header{
        height: .88rem;
        background: #51dfe1;
        position: relative;
        h1{
            color: #fff;
            font-size: .38rem;
            line-height: .88rem;
            text-align: center;
        }
        .ico_common{
            position: absolute;
            width: .45rem;
            height: .58rem;
            top: .15rem;
            cursor: pointer;
        }
        .left{
            left: .28rem;
            background:url('../../assets/image/type.png') no-repeat;
            background-size: 100%;
            font-size: .18rem;
            color: #fff;
            span{
                padding-top:.4rem;
                display: block;
                a{
                    color:#fff;
                    display:block;
                    margin-top:0.08rem;
                }
            }

        }
        .right{
            right: .28rem;
            background:url('../../assets/image/menu.png');
            background-size: 100%;
        }
        .menu{
            position: absolute;
            right: .28rem;
            width:3.2rem;
            background: #000;
            opacity: 0.8;
            li{
                font-size: .36rem;
                color: #fff;
            }

        }
    }
</style>