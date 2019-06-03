<template>
    <div class="menu">
      <div class="nav">
        <ul>
            <li>
                <div>
                    <img src="../../assets/image/3.png">
                    <p>Air jordan</p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/image/4.png">
                    <p>Yeezy</p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/image/5.png">
                    <p>Nike</p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/image/6.png">
                    <p>Adidas</p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/image/7.png">
                    <p>Air jordan11</p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/image/8.png">
                    <p>Suprime</p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/image/9.png">
                    <p>Jersey</p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/image/10.png">
                    <p>全部</p>
                </div>
            </li>
        </ul>
      </div>
      <div class="enough">
        <img src="../../assets/image/1.png">
      </div>
        <div class="choes">
            <ul>
                <li class="left"><img src="../../assets/image/11.png"></li>
                <li class="right"><img src="../../assets/image/12.png"></li>
                <li class="left"><img src="../../assets/image/13.png"></li>
                <li class="right"><img src="../../assets/image/14.png"></li>
            </ul>
      </div>
      <div class="popul">
        <img src="../../assets/image/15.png">
        <span>人气精选</span>
      </div>
      <div class="list">
        <ul>
            <li>
                <div>
                    <img src="../../assets/image/16.png">
                </div>
                <p>耐克 NIKE 男子 跑步鞋 FlEX EXPERIENCE RN8 运动鞋</p>
                <span>￥419.00</span>
                <span class="people">274人付款</span>
            </li>
            <li class="nv">
                <div>
                    <img src="../../assets/image/17.png">
                </div>
                <p>耐克 NIKE 2019春夏新款 ZOOM PEGUSOS 35 RBO 女子运动跑步鞋</p>
                <span>￥1569.00</span>
                <span class="people">274人付款</span>
            </li>
            <li>
                <div>
                    <img src="../../assets/image/16.png">
                </div>
                <p>耐克 NIKE 2019春夏新款 ZOOM PEGUSOS 35 RBO 女子运动跑步鞋</p>
                <span>￥419.00</span>
                <span class="people">274人付款</span>
            </li>
            <li class="nv">
                <div>
                    <img src="../../assets/image/17.png">
                </div>
                <p>耐克 NIKE 2019春夏新款 ZOOM PEGUSOS 35 RBO 女子运动跑步鞋</p>
                <span>￥1569.00</span>
                <span class="people">274人付款</span>
            </li>
        </ul>

      </div>
    </div>
</template>

<script>

    export default {
        name: "Menu",
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
.enough{
    height:1.7rem;
    padding-bottom:0.1rem;
    img{
        width:7.1rem;
        height:1.7rem;
        margin-left:0.2rem;
    }
}
.choes{
    ul{
        img{
            width:3.52rem;
            height:1.84rem;
        }
        height:3.56rem;
        margin-top:0.1rem;
    }
    .left{
        background:green;
        width:3.51rem;
        height:1.7rem;
        margin-left:0.18rem;
        margin-right:0.1rem;
        float:left;
        border-radius:0.1rem;
    }
    .right{
       background:green;
        width:3.51rem;
        border-radius:0.1rem;
        height:1.7rem;
        margin-right:0.2rem;
        float:left; 
    }
}
.popul{
    img{
        padding-right:0.08rem;
        margin-left:0.2rem;
        margin-top:0.38rem;
        width:0.35rem;
        height:0.35rem;
    }
    height:1.1rem;
    width:100%;
    span{
        color:#000;
        font-size:0.32rem;
    }
}
.list{
    ul{
        margin: 0 0.2rem;
    }
    .nv{
        margin-left:0.1rem;
    }
    li{ 
        float:left;
        img{
            height:3.42rem;
            width:3.5rem;
        }
        p{
            width:3.1rem;
            font-size:0.28rem;
            margin-left:0.2rem;
            color:#282828;
            margin-right:0.2rem;
            padding-bottom:0.4rem;
        }
        span{
            float:left;
            display:block;
            margin-left:0.2rem;
            font-size:0.28rem;
            color:#F63131;
            padding-bottom:0.54rem;
        }
        .people{
            font-size:0.24rem;
            color:#888888;
            margin-left:0.43rem;
            margin-top:0.05rem;
        }
    }
}

</style>