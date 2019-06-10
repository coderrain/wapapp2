<template>
    <div class="h_header">
        <div class="left ico_common">
            <span><router-link :to="{path:'/fication'}">分类</router-link></span>
        </div>
        <h1>优鞋库</h1>
        <div class="right ico_common" @click="menuShow"></div>
        <div class="menu" v-show="menuIsActive">
            <ul>
                <li>
                    <img src="../../assets/image/18.png">
                    <p><router-link :to="{path:'/user'}">我的</router-link></p>
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
                    <p><router-link :to="{path:'/login'}">登陆</router-link></p>
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
            border-radius:0.08rem;
            z-index:1000;
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
                    margin-left:0.4rem;
                    margin-top:0.33rem;
                    width:0.38rem;
                    height:0.48rem;
                }
                a{
                    color:#fff;
                }
            }

        }
    }
</style>